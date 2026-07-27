'use server'

import { prisma } from '@/lib/prisma';

const globalAny = global as any;

export async function pararGeracao() {
    globalAny.cancelarGeracao = true;
}

// Interface que representa cada espaço onde podemos alocar uma aula
interface Slot {
    dia: number;
    periodo: number;
    ordem: number;
}

// Interface que define cada aula que ainda precisa ser alocada
interface Aula_livre { //tempo solto
    id_professor: number;
    nome_professor: string;      // NOVO — para logs legíveis
    id_disciplina: number;
    descricao_disciplina: string;      // NOVO — para logs legíveis
    id_turma: number;
    descricao_turma: string;            // NOVO — para logs legíveis
    id_atribuicao: number;
    sala_preferencial: number;
    dominio: Slot[]; // Conjunto de espaços (Baseado na disponibilidade do professor) onde a aula pode ser alocada
}

// Interface que define a aula depois de alocada
interface Aula_alocada { //tempo preso
    Slot: Slot;
    Aula: Aula_livre;
    id_sala: number;
}

// NOVO — estrutura de log que o componente vai consumir
export interface LogItem {
    tipo: "sucesso" | "aviso" | "erro"
    mensagem: string
}

export interface ResultadoGeracao {
    sucesso: boolean
    totalGeradas: number
    logs: LogItem[]
}

export default async function gerarHorarios(turmas: any[]): Promise<ResultadoGeracao> {
    globalAny.cancelarGeracao = false;
    // NOVO — array de logs que será preenchido ao longo da execução
    const logs: LogItem[] = []

    // Buscar os dados dos professores relacionados às turmas selecionadas
    const dados_profs = await prisma.profTurmaDisciplina.findMany({
        where: { 
            id_turma: { in: turmas }
        },
        include: {
            disciplina: {
                include: {
                    turmaDisciplina: true,
                }
            },
            professor: {
                include: {
                    disponibilidades: true
                }
            },
            turma: true,
        }
    })
    
    // Buscar os nomes de todas as turmas seleccionadas para usar nos logs
    const dadosTurmas = await prisma.turma.findMany({
        where: { id_turma: { in: turmas } },
        select: { id_turma: true, descricao_turma: true }
    })

    // Verificar quais das turmas seleccionadas não têm nenhuma atribuição registada
    for (const id_turma of turmas) {
        const temDados = dados_profs.some(p => p.id_turma === id_turma)

        if (!temDados) {
            const nome = dadosTurmas.find(t => t.id_turma === id_turma)?.descricao_turma ?? `Turma ID ${id_turma}`
            logs.push({
                tipo: "erro",
                mensagem: `A turma "${nome}" não tem nenhuma atribuição de professor registada — não é possível gerar horário para ela.`
            })
        }
    }

    const turmasSemDados = turmas.filter(id => !dados_profs.some(p => p.id_turma === id))
    if (turmasSemDados.length > 0) {
        return { sucesso: false, totalGeradas: 0, logs }
    }
    
    // Buscar os tempos lectivos já alocados para as turmas NÃO selecionadas, para evitar conflitos
    const slotsOcupados = await prisma.tempo_Lectivo.findMany({
        where: {
            id_turma: { notIn: turmas }
        },
        select: {
            id_professor: true,
            id_dia: true,
            id_turma: true,
            id_periodo: true,
            id_sala: true,
            ordem: true,
        }
    })

    // Verificar quais das turmas seleccionadas já têm horário criado na base de dados
    const turmasComHorario = await prisma.tempo_Lectivo.findMany({
        where: {
            id_turma: { in: turmas }
        },
        select: {
            id_turma: true,
        },
        distinct: ['id_turma']  // um resultado por turma, sem repetições
    })

    // Extrair apenas os IDs para facilitar a comparação
    const idsTurmasComHorario = turmasComHorario.map(t => t.id_turma)

    console.log("Aulas Actuais: ", slotsOcupados)

    // Cria pares de chave, valor para os slots já ocupados (Chave: prof/sala_Id_dia_Id_periodo_Id_ordem )
    const slotsProibidosProfessor = new Map<string, boolean>();
    const slotsProibidosSala = new Map<string, boolean>();

    for (const slot of slotsOcupados) {
        const chaveProf = `prof_${slot.id_professor}_dia_${slot.id_dia}_per_${slot.id_periodo}_ordem_${slot.ordem}`
        slotsProibidosProfessor.set(chaveProf, true);

        const chaveSala = `sala_${slot.id_sala}_dia_${slot.id_dia}_per_${slot.id_periodo}_ordem_${slot.ordem}`
        slotsProibidosSala.set(chaveSala, true);
    }

    console.log("Slots proibidos para professores: ", slotsProibidosProfessor)
    console.log("Slots proibidos para salas: ", slotsProibidosSala)

    const aulas_nao_alocadas: Aula_livre[] = []
    const periodoDB = await prisma.periodo.findMany()
    
    // Cria blocos de domínios para cada aula -- Cria blocos de aulas com base na quantidade de aulas por semana que cada disciplina tem, e no domínio de cada professor (baseado nas disponibilidades)
    for (let c = 0; c < dados_profs.length; c++) {
        const aulas_por_semana = dados_profs[c].disciplina.turmaDisciplina.find(td => td.id_turma === dados_profs[c].id_turma)?.aulas_por_semana ?? 0;

        console.log(`Aulas por semana número ${c}, do professor: ${dados_profs[c].id_professor} e disciplina: ${dados_profs[c].id_disciplina} é: ${aulas_por_semana}`)

        // NOVO — nomes para usar nos logs
        const nome_prof  = dados_profs[c].professor.nome_professor
        const nome_disc  = dados_profs[c].disciplina.descricao_disciplina
        const nome_turma = dados_profs[c].turma.descricao_turma

        // Determina se esta disciplina é Ed. Física
        const isEdFisica = nome_disc.toLowerCase().includes("física") && nome_disc.toLowerCase().includes("ed")

        // Determina se é uma turma da 12ª (que pode ter aulas de manhã)
        const is12aClasse = (nome_turma.toLowerCase().includes("12ª") || nome_turma.toLowerCase().includes("12a")) && (!nome_turma.includes("Ciências Económicas e Jurídicas") && !nome_turma.includes("Ciências Físicas e Biológicas"))

        // Carrega os períodos da DB para saber qual ID corresponde a "Tarde"
        // (fazemos isto UMA vez fora do loop — ver nota abaixo)
        const idPeriodoTarde = periodoDB.find(p => p.descricao_periodo === "Tarde")?.id_periodo ?? -1

        const dominioCompleto: Slot[] = dados_profs[c].professor.disponibilidades.map(disp => ({
            dia:     disp.id_dia,
            periodo: disp.id_periodo,
            ordem:   disp.ordem
        }))

        // Filtra o domínio conforme a regra
        const dominio: Slot[] = dominioCompleto.filter(slot => {
            if (isEdFisica) return true        // Ed. Física pode ser qualquer período
            if (is12aClasse) return true       // 12ª pode ter manhã
            return slot.periodo === idPeriodoTarde  // todos os outros só à tarde
        })

        // NOVO — aviso se o professor não tem disponibilidades de todo
        if (dominio.length === 0) {
            logs.push({
                tipo: "erro",
                mensagem: `Impossível gerar aulas de "${nome_disc}" para "${nome_turma}": o professor ${nome_prof} não tem nenhuma disponibilidade registada.`
            })
        }

        // NOVO — aviso se aulas_por_semana é zero
        if (aulas_por_semana === 0) {
            logs.push({
                tipo: "aviso",
                mensagem: `A disciplina "${nome_disc}" da turma "${nome_turma}" tem 0 aulas por semana definidas — será ignorada pelo algoritmo.`
            })
        }

        // NOVO — aviso se disponibilidade livre é menor que aulas necessárias
        const slotsLivres = dominio.filter(slot => {
            const chave = `prof_${dados_profs[c].id_professor}_dia_${slot.dia}_per_${slot.periodo}_ordem_${slot.ordem}`
            return !slotsProibidosProfessor.has(chave)
        })

        if (slotsLivres.length < aulas_por_semana && aulas_por_semana > 0 && dominio.length > 0) {
            logs.push({
                tipo: "aviso",
                mensagem: `Atenção: "${nome_disc}" para "${nome_turma}" precisa de ${aulas_por_semana} slot(s), mas o professor ${nome_prof} só tem ${slotsLivres.length} slot(s) livre(s) — pode já estar alocado noutras turmas nos restantes.`
            })
        }

        for (let i = 0; i < aulas_por_semana; i++) {
            const aula: Aula_livre = {
                id_professor: dados_profs[c].id_professor,
                nome_professor: dados_profs[c].professor.nome_professor, // NOVO
                id_disciplina: dados_profs[c].id_disciplina,
                descricao_disciplina: dados_profs[c].disciplina.descricao_disciplina, // NOVO
                id_turma: dados_profs[c].id_turma,
                descricao_turma: dados_profs[c].turma.descricao_turma, // NOVO
                id_atribuicao: dados_profs[c].id_atribuicao,
                sala_preferencial: dados_profs[c].turma.id_sala ?? 0,/*Se a turma tiver uma sala preferencial, usamos essa; caso contrário, colocamos 0 (ou poderíamos usar null ou outro valor para indicar "sem preferência")*/
                dominio: [...dominio]
            }
            aulas_nao_alocadas.push(aula)
        }
    }

    // Remove os slots já ocupados na base de dados dos domínios das aulas que vamos alocar, para evitar que o algoritmo tente alocar nesses slots e falhe mais tarde — é uma forma de "pré-filtrar" os domínios com base nos dados reais da base de dados, reduzindo o espaço de busca do algoritmo desde o início.
    for (const aula of aulas_nao_alocadas) {
        aula.dominio = aula.dominio.filter(slot => {
            const id_Tempo  = `dia_${slot.dia}_per_${slot.periodo}_ordem_${slot.ordem}`
            const chaveProf = `prof_${aula.id_professor}_${id_Tempo}`
            const chaveSala = `sala_${aula.sala_preferencial}_${id_Tempo}`
            return !slotsProibidosProfessor.has(chaveProf) && !slotsProibidosSala.has(chaveSala)
        })
    }

    // Heurística MVR, organiza a lista de aulas com base em ordem crescente com base naquelas que possuem os menores domínios
    aulas_nao_alocadas.sort((a, b) => a.dominio.length - b.dominio.length)
    /*console.log("Aulas ordenadas por MRV:")
    aulas_nao_alocadas.forEach((aula, i) => {
        console.log(`  [${i}] Prof: ${aula.id_professor}, Disciplina: ${aula.id_disciplina}, Domínio: ${aula.dominio.length} slots`)
    })*/

    //console.log("Aulas: ", JSON.stringify(aulas_nao_alocadas, null, 2))

    /// Se alguma das turmas seleccionadas já tem horário na base de dados, parar imediatamente
    if (idsTurmasComHorario.length > 0) {
        for (const id of idsTurmasComHorario) {
            const entrada = dados_profs.find(p => p.id_turma === id)
            const nome = entrada?.turma.descricao_turma ?? `Turma ID ${id}`

            logs.push({
                tipo: "erro",
                mensagem: `A turma "${nome}" já tem um horário gerado. Apague o horário existente antes de gerar um novo.`
            })
        }

        // Devolve imediatamente — não executa o backtracking nem o createMany
        return { sucesso: false, totalGeradas: 0, logs }
    }

    // Função que retorna true se todas as restrições fomra cumpridas nos 
    //dados introduzidos e false se alguma não foi
    function analisarRestricoes(
        aula_livre: Aula_livre, //Aula que estamos a tentar alocar
        slot: Slot, //Slot onde estamos a tentar alocar a aula
        slotProibidosProfessores: Map<string, boolean>, //Mapa de slots proibidos para professores (Baseado nos tempos lectivos já alocados)
        slotProibidosSalas: Map<string, boolean>, //Mapa de slots proibidos para salas (Baseado nos tempos lectivos já alocados)
        AulasCriadas: Aula_alocada[]): boolean {

        const id_Tempo = `dia_${slot.dia}_per_${slot.periodo}_ordem_${slot.ordem}` // Cria uma chave que representa o dia, período e ordem

       // Se existerem slots com o mesmo professor dentro do horários já guardados no tempo_lectivo no mesmo espaço de tempo retorna false

        if (slotProibidosProfessores.has(`prof_${aula_livre.id_professor}_${id_Tempo }`)) {
            //console.log("Algoritmo encontrou slots ocupados pelo professor na base de dados")
            return false;
        }

        // Se existerem slots com a mesma sala dentro do horários já guardados no tempo_lectivo no mesmo espaço de tempo retorna false            
        if (slotProibidosSalas.has(`sala_${aula_livre.sala_preferencial}_${id_Tempo }`)) {
            //console.log("Algoritmo encontrou slots ocupados pela sala na base de dados")
            return false;
        }
        
        //forLoop que irá percorrer todos horarios já criados pelo algoritmo e analisar se as restrições são cumpridas
        for (const horario of AulasCriadas) {
            //Constante que serve para representar slots repetidos
            const mesmoSlot = horario.Slot.dia === slot.dia &&
                              horario.Slot.periodo === slot.periodo &&
                              horario.Slot.ordem === slot.ordem

            // Se existirem slots com o mesmo dia, periodo e ordem retorna false                 
            if (mesmoSlot) {
                // Se existerem slots com o mesmo professor no mesmo espaço de tempo retorna false
                if (horario.Aula.id_professor === aula_livre.id_professor) {
                    //console.log("Algoritmo encontrou slots ocupados pelo professor na memória interna")
                    return false;
                }

                // Se existerem slots com a mesma turma no mesmo espaço de tempo retorna false
                if (horario.Aula.id_turma === aula_livre.id_turma) {
                    //console.log("Algoritmo encontrou slots ocupados pela turma na memória interna")
                    return false;
                }

                // Se existerem slots com a mesma sala no mesmo espaço de tempo retorna false
                if (horario.id_sala === aula_livre.sala_preferencial) {
                    //console.log("Algoritmo encontrou slots ocupados pela sala na memória interna")
                    return false;
                }
            }
        }
        return true;
    }

    // Função que implementa o forward checking — recebe um slot que acabou de ser alocado e a aula que foi alocada nesse slot, e remove esse slot dos domínios de todas as aulas futuras que partilham professor ou turma com a aula alocada. Se algum domínio ficar vazio, repõe tudo e retorna null para indicar falha antecipada. Caso contrário, retorna um registo do que foi removido para restaurar se o backtracking falhar.
    function forwardChecking(
        slot: Slot, //Slot que vamos verificar
        aulaRecemAlocada: Aula_livre, //Aula que ocupou o slot que estamos a checar
        aulas_nao_alocadas: Aula_livre[],
        indiceActual: number
    ): Map<number, Slot[]> | null {

        // Registo do que foi removido — chave: índice da aula, valor: slots removidos
        const slotsRemovidos = new Map<number, Slot[]>()

        // Percorrer apenas as aulas FUTURAS — as que ainda não foram alocadas
        for (let i = indiceActual + 1; i < aulas_nao_alocadas.length; i++) {
            const aulaFutura = aulas_nao_alocadas[i]

            // Esta aula futura é afectada pela alocação que acabou de acontecer?
            // É afectada se partilhar professor ou turma com a aula alocada
            const mesmoProfessor = aulaFutura.id_professor === aulaRecemAlocada.id_professor
            const mesmaTurma = aulaFutura.id_turma === aulaRecemAlocada.id_turma

            // Se não partilha nem professor nem turma, não é afectada — passa à frente
            if (!mesmoProfessor && !mesmaTurma) continue

            // Procurar este slot específico no domínio da aula futura
            // Usamos findIndex para saber a posição exacta — precisamos dela para o splice
            const indiceNodominio = aulaFutura.dominio.findIndex(
                s => s.dia === slot.dia &&
                    s.periodo === slot.periodo &&
                    s.ordem === slot.ordem
            )

            // Se o slot nem sequer estava no domínio desta aula, nada a fazer
            if (indiceNodominio === -1) continue

            // Remover o slot do domínio
            // splice(posição, quantos) — remove 1 elemento na posição encontrada e devolve um array com o que foi removido
            const [slotRemovido] = aulaFutura.dominio.splice(indiceNodominio, 1)

            // Registar o que foi removido para poder restaurar se necessário
            if (!slotsRemovidos.has(i)) {
                slotsRemovidos.set(i, [])
            }
            slotsRemovidos.get(i)!.push(slotRemovido)

            // Domínio ficou vazio? Detectámos uma falha futura — podemos falhar já aqui e voltar para o nível anterior
            if (aulaFutura.dominio.length === 0) {
                // Repõe os domínios removidos
                 for (const [idx, slots] of slotsRemovidos) {
                    aulas_nao_alocadas[idx].dominio.push(...slots)
                }
                return null
            }
        }

        // Tudo bem — devolver o registo para poder restaurar se o backtracking falhar
        return slotsRemovidos
    }

    //Repõe os slots que foram removidos dos domínios durante o forward checking, restaurando o estado anterior para que o backtracking possa tentar outro caminho.
    function restaurarDominios(
        aulas_nao_alocadas: Aula_livre[],
        slotsRemovidos: Map<number, Slot[]>
    ): void {
        for (const [indice, slots] of slotsRemovidos) {
            // Devolver cada slot removido ao domínio da aula correspondente
            aulas_nao_alocadas[indice].dominio.push(...slots)
        }
    }

    // NOVO — variável que regista qual aula bloqueou o algoritmo
    let aulaQueBloqueou: Aula_livre | null = null
    let foiCancelado = false;
    let iteracoesAlgoritmo = 0;

    async function backtrack(
        aulas_nao_atribuidas: Aula_livre[], // todas as aulas a alocar (não muda)
        aulas_atribuidas: Aula_alocada[], // o que já foi atribuído (vai crescendo e encolhendo)
        indicesRestantes: number[]   // ← índices das aulas ainda não alocadas
    ): Promise<Aula_alocada[] | null> {      // retorna solução ou null se não encontrou

        iteracoesAlgoritmo++;
        // Liberta o event loop a cada 100 iterações para permitir que a requisição de cancelamento seja processada
        if (iteracoesAlgoritmo % 100 === 0) {
            await new Promise(resolve => setTimeout(resolve, 0));
        }

        if (globalAny.cancelarGeracao) {
            foiCancelado = true;
            return null;
        }

        //CASO BASE: índice chegou ao fim — todas as aulas foram alocadas sem conflitos. Retorna o array completo de aulas alocadas como solução final.
        if (indicesRestantes.length === 0) return aulas_atribuidas

        // MRV dinâmico — escolhe sempre a aula com menor domínio actual
        const idxMRV = indicesRestantes.reduce((melhor, idx) =>
            aulas_nao_atribuidas[idx].dominio.length < aulas_nao_atribuidas[melhor].dominio.length
                ? idx : melhor
        )

        // Pegamos na aula actual (a que vamos tentar alocar agora)
        const aulaActual = aulas_nao_atribuidas[idxMRV]
        const restantes  = indicesRestantes.filter(i => i !== idxMRV)

        // Tentamos cada slot do domínio desta aula
        for (const slot of [...aulaActual.dominio]) {

            //console.log("-------------------------------------------------------------------------------------------------------------")
            //console.log(`Tentando alocar o professor ${aulaActual.nome_professor} no dia ${slot.dia}, periodo ${slot.periodo} e tempo ${slot.ordem}, lecionando ${aulaActual.descricao_disciplina} na turma ${aulaActual.descricao_turma}`);

            // Perguntamos: este slot cria algum conflito?
            if (!analisarRestricoes(aulaActual, slot, slotsProibidosProfessor, slotsProibidosSala, aulas_atribuidas)) continue

            // Chegamos aqui: o slot é válido.
            // Criamos a atribuição e adicionamos à lista.
            const novaAtribuicao: Aula_alocada = { Slot: slot, Aula: aulaActual, id_sala: aulaActual.sala_preferencial }
            aulas_atribuidas.push(novaAtribuicao)

            // Chamar forward checking
            const slotsRemovidos = forwardChecking(slot, aulaActual, aulas_nao_atribuidas, idxMRV)

            // Analisa se existem falhas futuras — se forward checking retornou null, há uma falha futura detectada, então não precisamos de tentar os próximos slots deste domínio — podemos falhar já aqui e voltar para o nível anterior
            if (slotsRemovidos !== null) {
                const resultado = await backtrack(aulas_nao_atribuidas, aulas_atribuidas, restantes)
                if (resultado !== null) return resultado                 // Se o resultado não for null, a recursão encontrou solução → propagamos
                restaurarDominios(aulas_nao_atribuidas, slotsRemovidos)                 // Recursão falhou — restaurar domínios

            }

            //console.log("<<<< FALHOU, DESFAZENDO PARA TENTAR OUTRA POSSIBILIDADE >>>>")

            // Se chegámos aqui, a recursão falhou.
            // Desfazemos esta atribuição (o "back" do backtracking)
            // e tentamos o próximo slot do nosso loop
            aulas_atribuidas.pop()
        }

        // Esgotámos todos os slots deste domínio sem encontrar solução
        // Retornamos null para sinalizar falha ao nível anterior

        // NOVO — regista a aula que esgotou o domínio sem encontrar solução
        aulaQueBloqueou = aulaActual
        return null
    }

    const indicesIniciais = aulas_nao_alocadas.map((_, i) => i)
    const solucao = await backtrack(aulas_nao_alocadas, [], indicesIniciais)
    
    if (solucao === null) {
        if (foiCancelado) {
            logs.push({
                tipo: "aviso",
                mensagem: "Geração de horários parada pelo utilizador."
            })
            return { sucesso: false, totalGeradas: 0, logs }
        }

        // Forçamos o TypeScript a tratar a variável como o tipo correto, 
        // ignorando a análise de fluxo pessimista.
        const aulaFalhada = aulaQueBloqueou as Aula_livre | null;

        // NOVO — log específico com nome real da aula que bloqueou
        if (aulaFalhada) {
            const slotsJaOcupadosNestasTurmas = slotsOcupados.filter(s => s.id_professor === aulaFalhada.id_professor).length

            if (slotsJaOcupadosNestasTurmas > 0) {
                logs.push({
                    tipo: "erro",
                    mensagem: `Não foi possível gerar o horário de "${aulaFalhada.descricao_turma}": a disciplina "${aulaFalhada.descricao_disciplina}" não pôde ser alocada — o professor ${aulaFalhada!.nome_professor} já ocupa ${slotsJaOcupadosNestasTurmas} slot(s) noutras turmas e os restantes conflituam com esta.`
                })
            } else {
                logs.push({
                    tipo: "erro",
                    mensagem: `Não foi possível gerar o horário de "${aulaFalhada.descricao_turma}": a disciplina "${aulaFalhada.descricao_disciplina}" não pôde ser alocada — o professor ${aulaFalhada.nome_professor} não tem slots livres suficientes para satisfazer todas as restrições.`
                })
            }
        } else {
            logs.push({
                tipo: "erro",
                mensagem: "Não foi possível gerar um horário válido. Verifica as disponibilidades dos professores e as atribuições."
            })
        }

        console.log("Não foi possível gerar horário sem conflitos.")
        // NOVO — devolve resultado estruturado em vez de null
        return { sucesso: false, totalGeradas: 0, logs }
    }

    //console.log("Solução encontrada:", JSON.stringify(solucao, null, 2))

    // Gravar a solução na base de dados
    await prisma.tempo_Lectivo.createMany({
        data: solucao!.map(aula_alocada => ({
            id_atribuicao: aula_alocada.Aula.id_atribuicao,   // vem da Aula_livre
            id_professor:  aula_alocada.Aula.id_professor,    // vem da Aula_livre
            id_turma:      aula_alocada.Aula.id_turma,        // vem da Aula_livre
            id_disciplina: aula_alocada.Aula.id_disciplina,   // vem da Aula_livre
            id_sala:       aula_alocada.id_sala,              // vem directamente da Aula_alocada
            id_dia:        aula_alocada.Slot.dia,             // vem do Slot
            id_periodo:    aula_alocada.Slot.periodo,         // vem do Slot
            ordem:         aula_alocada.Slot.ordem,           // vem do Slot
            ano_lectivo:   new Date().getFullYear()                              
        }))
    })

    console.log(`${solucao!.length} tempos lectivos gravados com sucesso.`)

    // NOVO — log de sucesso geral
    logs.push({
        tipo: "sucesso",
        mensagem: `Horário gerado com sucesso: ${solucao.length} aulas alocadas para ${turmas.length} turma(s).`
    })

    // NOVO — log por turma com contagem de aulas
    const turmasGeradas = [...new Set(solucao.map(a => a.Aula.descricao_turma))]
    for (const nome of turmasGeradas) {
        const count = solucao.filter(a => a.Aula.descricao_turma === nome).length
        logs.push({
            tipo: "sucesso",
            mensagem: `${nome}: ${count} aula(s) alocada(s).`
        })
    }

    // NOVO — devolve resultado estruturado em vez de solucao directamente
    return { sucesso: true, totalGeradas: solucao.length, logs }
    
}