import {
    Aula_alocada,
    Aula_livre,
    CandidatoAlocacao,
    DadosPreparadosGerador,
    ResultadoGeracao,
    PesosSoftConstraints,
    LogItem,
    FalhaGeracao,
    ErroGeracao,
    Horario,
} from "@/lib/algoritmos/types";
import { GeradorEstados } from "@/lib/algoritmos/gerador-inicial/gerador-estados";
import { ordenarAulas } from "@/lib/algoritmos/gerador-inicial/ordenar-aulas";
import { gerarCandidatos } from "@/lib/algoritmos/gerador-inicial/gerador-candidatos";
import {
    verificarRestricoes,
    verificarCapacidadesGlobais,
    OpcoesVerificacaoRestricoes,
    ContextoVerificacaoRestricoes,
} from "@/lib/algoritmos/gerador-inicial/verificador-restricoes";
import {
    selecionarMelhorCandidato,
    ContextoAvaliacaoPosicoes,
} from "@/lib/algoritmos/gerador-inicial/avaliador-posicoes";

/**
 * Constrói o horário inicial usando uma abordagem gulosa construtiva baseada na heurística MRV.
 * Não realiza retrocesso (backtracking). Interrompe e detalha a falha na primeira impossibilidade.
 */
export function gerarHorarioInicial(
    dados: DadosPreparadosGerador,
    opcoes: OpcoesVerificacaoRestricoes & { pesos?: Partial<PesosSoftConstraints> } = {},
): ResultadoGeracao {
    const start_time = Date.now();
    const logs: LogItem[] = [];

    logs.push({
        tipo: "sucesso",
        mensagem: "Iniciando a validação global de capacidades...",
    });

    // 1. Verificar capacidades globais antes de começar
    const erroGlobal = verificarCapacidadesGlobais(dados, opcoes);
    if (erroGlobal !== undefined && !erroGlobal.valido) {
        const tempo_execucao_ms = Date.now() - start_time;
        const falha: FalhaGeracao = {
            id_aula: 0,
            descricao_aula: "Validação de Capacidades Globais",
            motivo: erroGlobal.motivo ?? "CAPACIDADE_INSUFICIENTE",
            detalhe: erroGlobal.detalhe ?? "Capacidades globais insuficientes.",
        };
        const erro: ErroGeracao = {
            codigo: erroGlobal.motivo ?? "CAPACIDADE_INSUFICIENTE",
            mensagem: erroGlobal.detalhe ?? "Capacidades globais insuficientes.",
        };
        logs.push({
            tipo: "erro",
            mensagem: `Erro na validação global de capacidades: ${erro.mensagem}`,
        });
        return {
            sucesso: false,
            erro,
            metricas: {
                tempo_execucao_ms,
                total_aulas_a_alocar: 0,
                total_aulas_alocadas: 0,
                candidatos_gerados: 0,
                candidatos_rejeitados: 0,
                candidatos_avaliados: 0,
                custo_soft_final: 0,
                falhas: [falha],
            },
            logs,
        };
    }

    // 2. Mapear atribuições para Aula_livre
    const aulasLivres: Aula_livre[] = [];
    let proximoIdAula = 1;

    for (const atribuicao of dados.atribuicoes) {
        const professor = dados.professores_por_id.get(atribuicao.id_professor);
        const disciplina = dados.disciplinas_por_id.get(atribuicao.id_disciplina);
        const turma = dados.turmas_por_id.get(atribuicao.id_turma);

        for (let i = 0; i < atribuicao.aulas_por_semana; i++) {
            const aula: Aula_livre = {
                id_aula: proximoIdAula++,
                id_atribuicao: atribuicao.id_atribuicao,
                id_professor: atribuicao.id_professor,
                id_disciplina: atribuicao.id_disciplina,
                id_turma: atribuicao.id_turma,
                id_SalaPreferencial: turma?.id_SalaPreferencial ?? null,
                nome_professor: professor?.nome_professor,
                descricao_disciplina: disciplina?.nome_disciplina,
                descricao_turma: turma?.descricao_turma,
                dominio: [],
            };
            // Gerar o domínio inicial de candidatos
            aula.dominio = gerarCandidatos(aula, dados);
            aulasLivres.push(aula);
        }
    }

    const total_aulas_a_alocar = aulasLivres.length;
    logs.push({
        tipo: "sucesso",
        mensagem: `Dados preparados. Total de aulas a alocar: ${total_aulas_a_alocar}.`,
    });

    // 3. Ordenar as aulas pela dificuldade (heurística MRV inicial)
    const aulasOrdenadas = ordenarAulas(aulasLivres, { obterDominio: (a) => a.dominio });

    // 4. Inicializar o estado do gerador
    const geradorEstados = new GeradorEstados();
    let totalCandidatosGerados = 0;
    let totalCandidatosRejeitados = 0;
    let totalCandidatosAvaliados = 0;
    let custoSoftFinal = 0;

    // 5. Loop de alocação de aulas
    for (const aula of aulasOrdenadas) {
        const candidatos = aula.dominio;
        totalCandidatosGerados += candidatos.length;

        const candidatosValidos: CandidatoAlocacao[] = [];

        // Filtrar candidatos válidos respeitando as restrições
        const contextoVerificacao: ContextoVerificacaoRestricoes = {
            dados,
            ocupacao_dinamica: geradorEstados.obterIndicesOcupacao(),
            aulas_alocadas: geradorEstados.obterAulasAlocadas(),
            opcoes,
        };

        for (const candidato of candidatos) {
            const resultado = verificarRestricoes(aula, candidato, contextoVerificacao);
            if (resultado.valido) {
                candidatosValidos.push(candidato);
            } else {
                totalCandidatosRejeitados++;
            }
        }

        totalCandidatosAvaliados += candidatosValidos.length;

        // Se não houver candidatos válidos, tratar falha
        if (candidatosValidos.length === 0) {
            const contagemMotivos = new Map<string, number>();
            for (const candidato of candidatos) {
                const resultado = verificarRestricoes(aula, candidato, contextoVerificacao);
                if (!resultado.valido && resultado.motivo) {
                    contagemMotivos.set(resultado.motivo, (contagemMotivos.get(resultado.motivo) ?? 0) + 1);
                }
            }

            const detalhesMotivos = Array.from(contagemMotivos.entries())
                .map(([motivo, count]) => `${motivo}: ${count}`)
                .join(", ");

            const descAula = `Aula ${aula.id_aula} - ${aula.descricao_disciplina ?? ''} (Turma: ${aula.descricao_turma ?? ''}, Prof: ${aula.nome_professor ?? ''})`;
            const falha: FalhaGeracao = {
                id_aula: aula.id_aula,
                descricao_aula: descAula,
                motivo: "ESGOTAMENTO_CANDIDATOS",
                detalhe: `Nenhum candidato válido encontrado de entre ${candidatos.length} possibilidades. Razões: ${detalhesMotivos}`,
            };

            const erro: ErroGeracao = {
                codigo: "INVIABILIDADE_HORARIO",
                mensagem: `Não foi possível encontrar uma posição válida para a aula ${aula.id_aula}.`,
                aula_id: aula.id_aula.toString(),
                detalhes: falha.detalhe,
            };

            logs.push({
                tipo: "erro",
                mensagem: `Falha ao alocar aula ${aula.id_aula}: ${falha.detalhe}`,
            });

            return {
                sucesso: false,
                erro,
                metricas: {
                    tempo_execucao_ms: Date.now() - start_time,
                    total_aulas_a_alocar,
                    total_aulas_alocadas: geradorEstados.obterAulasAlocadas().length,
                    candidatos_gerados: totalCandidatosGerados,
                    candidatos_rejeitados: totalCandidatosRejeitados,
                    candidatos_avaliados: totalCandidatosAvaliados,
                    custo_soft_final: custoSoftFinal,
                    falhas: [falha],
                },
                logs,
            };
        }

        // Selecionar o melhor candidato (com base nas soft constraints)
        const contextoAvaliacao: ContextoAvaliacaoPosicoes = {
            aulas_alocadas: geradorEstados.obterAulasAlocadas(),
            slots_letivos_por_turma: opcoes.slots_letivos_por_turma,
            pesos: opcoes.pesos,
        };

        const melhorCandidato = selecionarMelhorCandidato(aula, candidatosValidos, contextoAvaliacao);
        if (melhorCandidato === undefined) {
            throw new Error(`Erro inesperado: selecionarMelhorCandidato retornou undefined para a aula ${aula.id_aula}`);
        }

        custoSoftFinal += melhorCandidato.custoTotal ?? 0;

        // Adicionar a aula alocada ao estado
        const aulaAlocada: Aula_alocada = {
            aula,
            id_sala: melhorCandidato.sala.id_sala,
            slot: melhorCandidato.slot,
        };

        geradorEstados.adicionarAtribuicao(aulaAlocada);

        // Atualizar contadores de ocupação de soft constraints em dados para manter consistência
        const chaveTurmaDia = `${aula.id_turma}:${melhorCandidato.slot.id_dia}`;
        dados.aulas_alocadas_por_turma_dia.set(
            chaveTurmaDia,
            (dados.aulas_alocadas_por_turma_dia.get(chaveTurmaDia) ?? 0) + 1
        );

        const chaveProfDia = `${aula.id_professor}:${melhorCandidato.slot.id_dia}`;
        dados.aulas_alocadas_por_professor_dia.set(
            chaveProfDia,
            (dados.aulas_alocadas_por_professor_dia.get(chaveProfDia) ?? 0) + 1
        );

        logs.push({
            tipo: "sucesso",
            mensagem: `Aula ${aula.id_aula} alocada com sucesso: sala ${melhorCandidato.sala.id_sala}, slot (dia ${melhorCandidato.slot.id_dia}, período ${melhorCandidato.slot.id_periodo}, tempo ${melhorCandidato.slot.ordem}) com custo ${melhorCandidato.custoTotal ?? 0}.`,
        });
    }

    logs.push({
        tipo: "sucesso",
        mensagem: "Geração inicial concluída com sucesso para todas as aulas.",
    });

    return {
        sucesso: true,
        horario: {
            aulas_alocadas: [...geradorEstados.obterAulasAlocadas()],
        },
        metricas: {
            tempo_execucao_ms: Date.now() - start_time,
            total_aulas_a_alocar,
            total_aulas_alocadas: geradorEstados.obterAulasAlocadas().length,
            candidatos_gerados: totalCandidatosGerados,
            candidatos_rejeitados: totalCandidatosRejeitados,
            candidatos_avaliados: totalCandidatosAvaliados,
            custo_soft_final: custoSoftFinal,
            falhas: [],
        },
        logs,
    };
}
