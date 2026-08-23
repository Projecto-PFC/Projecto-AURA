import {
    Aula_alocada,
    Aula_livre,
    CandidatoAlocacao,
    DadosPreparadosGerador,
    IndicesOcupacao,
    Slot,
} from "@/lib/algoritmos/types";
import { criarChaveSlot } from "@/lib/algoritmos/gerador-inicial/prepare-data";

export type MotivoRejeicaoRestricao =
    | "DADOS_INCONSISTENTES"
    | "CONFLITO_PROFESSOR"
    | "CONFLITO_SALA"
    | "CONFLITO_TURMA"
    | "CARGA_HORARIA_EXCEDIDA"
    | "PROFESSOR_INDISPONIVEL"
    | "PERIODO_NAO_PERMITIDO"
    | "GERACAO_DUPLICADA"
    | "CAPACIDADE_SEMANAL_TURMA_INSUFICIENTE"
    | "CAPACIDADE_DISPONIBILIDADE_PROFESSOR_INSUFICIENTE"
    | "SLOT_LETIVO_INVALIDO"
    | "SALA_SEM_CAPACIDADE"
    | "SALA_INCOMPATIVEL";

export interface ResultadoVerificacaoRestricoes {
    valido: boolean;
    motivo?: MotivoRejeicaoRestricao;
    detalhe?: string;
}

export interface OpcoesVerificacaoRestricoes {
    permitir_regeneracao?: boolean;
    periodos_permitidos_por_turma?: ReadonlyMap<number, ReadonlySet<number>>;
    periodos_permitidos_por_disciplina?: ReadonlyMap<number, ReadonlySet<number>>;
    slots_letivos_por_turma?: ReadonlyMap<number, readonly Slot[]>;
}

export interface ContextoVerificacaoRestricoes {
    dados: DadosPreparadosGerador;
    ocupacao_dinamica: IndicesOcupacao;
    aulas_alocadas: readonly Aula_alocada[];
    opcoes?: OpcoesVerificacaoRestricoes;
}

function rejeitar(motivo: MotivoRejeicaoRestricao, detalhe: string): ResultadoVerificacaoRestricoes {
    return { valido: false, motivo, detalhe };
}

function criarChaveOcupacao(idRecurso: number, slot: Slot): string {
    return `${idRecurso}:${criarChaveSlot(slot)}`;
}

function possuiSlot(slots: readonly Slot[], slot: Slot): boolean {
    const chaveCandidata = criarChaveSlot(slot);
    return slots.some((slotLetivo) => criarChaveSlot(slotLetivo) === chaveCandidata);
}

function contarSlotsDistintos(slots: readonly Slot[]): number {
    return new Set(slots.map(criarChaveSlot)).size;
}

/**
 * Valida a viabilidade matemática do conjunto de dados antes da geração.
 * Esta pré-verificação deve ser executada uma única vez, antes do loop guloso.
 */
export function verificarCapacidadesGlobais(
    dados: DadosPreparadosGerador,
    opcoes: OpcoesVerificacaoRestricoes,
): ResultadoVerificacaoRestricoes | undefined {
    for (const turma of dados.turmas) {
        const totalAulasTurma = dados.atribuicoes
            .filter((atribuicao) => atribuicao.id_turma === turma.id_turma)
            .reduce((total, atribuicao) => total + atribuicao.aulas_por_semana, 0);
        const slotsLetivos = opcoes.slots_letivos_por_turma?.get(turma.id_turma) ?? dados.slots;

        if (totalAulasTurma > contarSlotsDistintos(slotsLetivos)) {
            return rejeitar(
                "CAPACIDADE_SEMANAL_TURMA_INSUFICIENTE",
                `A turma ${turma.id_turma} necessita de ${totalAulasTurma} aulas, mas possui apenas ${contarSlotsDistintos(slotsLetivos)} slots letivos.`,
            );
        }
    }

    for (const professor of dados.professores) {
        const totalAulasProfessor = dados.atribuicoes
            .filter((atribuicao) => atribuicao.id_professor === professor.id_professor)
            .reduce((total, atribuicao) => total + atribuicao.aulas_por_semana, 0);
        const slotsDisponiveis = dados.slots_por_professor.get(professor.id_professor) ?? [];

        if (totalAulasProfessor > contarSlotsDistintos(slotsDisponiveis)) {
            return rejeitar(
                "CAPACIDADE_DISPONIBILIDADE_PROFESSOR_INSUFICIENTE",
                `O professor ${professor.id_professor} necessita de ${totalAulasProfessor} slots, mas possui apenas ${contarSlotsDistintos(slotsDisponiveis)} disponíveis.`,
            );
        }
    }
}

function verificarPeriodoPermitido(
    aula: Aula_livre,
    slot: Slot,
    opcoes: OpcoesVerificacaoRestricoes,
): ResultadoVerificacaoRestricoes | undefined {
    const periodosTurma = opcoes.periodos_permitidos_por_turma?.get(aula.id_turma);
    const periodosDisciplina = opcoes.periodos_permitidos_por_disciplina?.get(aula.id_disciplina);

    if (periodosTurma !== undefined && !periodosTurma.has(slot.id_periodo)) {
        return rejeitar("PERIODO_NAO_PERMITIDO", `O período ${slot.id_periodo} não é permitido para a turma ${aula.id_turma}.`);
    }

    if (periodosDisciplina !== undefined && !periodosDisciplina.has(slot.id_periodo)) {
        return rejeitar("PERIODO_NAO_PERMITIDO", `O período ${slot.id_periodo} não é permitido para a disciplina ${aula.id_disciplina}.`);
    }
}

/**
 * Verifica exclusivamente hard constraints de uma posição candidata.
 *
 * A função não escolhe candidatos e não altera o horário nem os seus índices.
 */
export function verificarRestricoes(
    aula: Aula_livre,
    candidato: CandidatoAlocacao,
    contexto: ContextoVerificacaoRestricoes,
): ResultadoVerificacaoRestricoes {
    const { dados, ocupacao_dinamica, aulas_alocadas, opcoes = {} } = contexto;
    const professor = dados.professores_por_id.get(aula.id_professor);
    const turma = dados.turmas_por_id.get(aula.id_turma);
    const disciplina = dados.disciplinas_por_id.get(aula.id_disciplina);
    const sala = dados.salas_por_id.get(candidato.sala.id_sala);

    if (professor === undefined || turma === undefined || disciplina === undefined || sala === undefined) {
        return rejeitar("DADOS_INCONSISTENTES", "A aula ou a sala candidata não existe nos dados preparados.");
    }

    if (!opcoes.permitir_regeneracao && dados.turmas_com_horario.has(aula.id_turma)) {
        return rejeitar("GERACAO_DUPLICADA", `A turma ${aula.id_turma} já possui horário persistido.`);
    }

    if (!possuiSlot(dados.slots, candidato.slot)) {
        return rejeitar("SLOT_LETIVO_INVALIDO", "O candidato não pertence à estrutura de slots letivos da escola.");
    }

    const falhaPeriodo = verificarPeriodoPermitido(aula, candidato.slot, opcoes);
    if (falhaPeriodo !== undefined) {
        return falhaPeriodo;
    }

    const chaveSlot = criarChaveSlot(candidato.slot);
    if (!dados.disponibilidade_por_professor.get(aula.id_professor)?.has(chaveSlot)) {
        return rejeitar("PROFESSOR_INDISPONIVEL", `O professor ${aula.id_professor} não está disponível neste slot.`);
    }

    const chaveProfessor = criarChaveOcupacao(aula.id_professor, candidato.slot);
    if (dados.ocupacao_permanente_professores.has(chaveProfessor) || ocupacao_dinamica.professores.has(chaveProfessor)) {
        return rejeitar("CONFLITO_PROFESSOR", `O professor ${aula.id_professor} já está ocupado neste slot.`);
    }

    const chaveTurma = criarChaveOcupacao(aula.id_turma, candidato.slot);
    if (dados.ocupacao_permanente_turmas.has(chaveTurma) || ocupacao_dinamica.turmas.has(chaveTurma)) {
        return rejeitar("CONFLITO_TURMA", `A turma ${aula.id_turma} já está ocupada neste slot.`);
    }

    const chaveSala = criarChaveOcupacao(sala.id_sala, candidato.slot);
    if (dados.ocupacao_permanente_salas.has(chaveSala) || ocupacao_dinamica.salas.has(chaveSala)) {
        return rejeitar("CONFLITO_SALA", `A sala ${sala.id_sala} já está ocupada neste slot.`);
    }

    if (sala.capacidade < turma.quantidade_alunos) {
        return rejeitar("SALA_SEM_CAPACIDADE", `A sala ${sala.id_sala} não comporta os ${turma.quantidade_alunos} alunos da turma.`);
    }

    if (sala.id_tipoSala !== disciplina.id_tipoSala) {
        return rejeitar("SALA_INCOMPATIVEL", `A sala ${sala.id_sala} não é compatível com a disciplina ${aula.id_disciplina}.`);
    }

    const atribuicao = dados.atribuicoes.find((item) => item.id_atribuicao === aula.id_atribuicao);
    if (atribuicao === undefined) {
        return rejeitar("DADOS_INCONSISTENTES", `A atribuição ${aula.id_atribuicao} não existe nos dados preparados.`);
    }

    const aulasJaAlocadas = aulas_alocadas.filter(
        (aulaAlocada) => aulaAlocada.aula.id_atribuicao === aula.id_atribuicao,
    ).length;
    if (aulasJaAlocadas >= atribuicao.aulas_por_semana) {
        return rejeitar("CARGA_HORARIA_EXCEDIDA", `A atribuição ${aula.id_atribuicao} já atingiu a sua carga semanal.`);
    }

    return { valido: true };
}
