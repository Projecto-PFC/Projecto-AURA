import type {
    Aula_alocada,
    Aula_livre,
    CandidatoAlocacao,
    PesosSoftConstraints,
    Slot,
} from "@/lib/algoritmos/types";

/**
 * Pesos iniciais das soft constraints. Podem ser substituídos parcialmente
 * pelo consumidor para permitir calibração sem alterar o avaliador.
 */
export const PESOS_SOFT_CONSTRAINTS_PADRAO: Readonly<PesosSoftConstraints> = {
    pesoSC01: 1,
    pesoSC02: 1,
    pesoSC03: 1,
    pesoSC04: 1,
    pesoSC05: 1,
};

export interface ContextoAvaliacaoPosicoes {
    aulas_alocadas: readonly Aula_alocada[];
    /**
     * Estrutura temporal efetivamente permitida para cada turma. É necessária
     * para saber se dois períodos do mesmo dia podem ser comparados em SC03.
     */
    slots_letivos_por_turma?: ReadonlyMap<number, readonly Slot[]>;
    pesos?: Partial<PesosSoftConstraints>;
}

/** Resultado mínimo transportado entre o verificador e o avaliador. */
export interface CandidatoVerificado {
    candidato: CandidatoAlocacao;
    valido: boolean;
}

type PenalidadesSoftConstraints = NonNullable<CandidatoAlocacao["penalidades"]>;

function obterPesos(pesos: Partial<PesosSoftConstraints> | undefined): PesosSoftConstraints {
    const pesosResolvidos = { ...PESOS_SOFT_CONSTRAINTS_PADRAO, ...pesos };

    for (const peso of Object.values(pesosResolvidos)) {
        if (!Number.isFinite(peso) || peso < 0) {
            throw new Error("Os pesos das soft constraints devem ser números finitos não negativos.");
        }
    }

    return pesosResolvidos;
}

function pertenceAoMesmoDia(primeiro: Slot, segundo: Slot): boolean {
    return primeiro.id_dia === segundo.id_dia;
}

function pertenceAoMesmoPeriodo(primeiro: Slot, segundo: Slot): boolean {
    return pertenceAoMesmoDia(primeiro, segundo) && primeiro.id_periodo === segundo.id_periodo;
}

function aulasDaTurmaNoDia(
    aula: Aula_livre,
    slot: Slot,
    aulasAlocadas: readonly Aula_alocada[],
): Aula_alocada[] {
    return aulasAlocadas.filter((aulaAlocada) =>
        aulaAlocada.aula.id_turma === aula.id_turma && pertenceAoMesmoDia(aulaAlocada.slot, slot),
    );
}

function aulasDaDisciplinaNoDia(
    aula: Aula_livre,
    slot: Slot,
    aulasAlocadas: readonly Aula_alocada[],
): Aula_alocada[] {
    return aulasDaTurmaNoDia(aula, slot, aulasAlocadas).filter(
        (aulaAlocada) => aulaAlocada.aula.id_disciplina === aula.id_disciplina,
    );
}

function calcularJanelasProfessor(
    idProfessor: number,
    slot: Slot,
    aulasAlocadas: readonly Aula_alocada[],
): number {
    const ordensPorPeriodo = new Map<number, number[]>();

    for (const aulaAlocada of aulasAlocadas) {
        if (aulaAlocada.aula.id_professor !== idProfessor || !pertenceAoMesmoDia(aulaAlocada.slot, slot)) {
            continue;
        }

        const ordens = ordensPorPeriodo.get(aulaAlocada.slot.id_periodo) ?? [];
        ordens.push(aulaAlocada.slot.ordem);
        ordensPorPeriodo.set(aulaAlocada.slot.id_periodo, ordens);
    }

    const ordensCandidatas = ordensPorPeriodo.get(slot.id_periodo) ?? [];
    ordensCandidatas.push(slot.ordem);
    ordensPorPeriodo.set(slot.id_periodo, ordensCandidatas);

    let janelas = 0;
    for (const ordens of ordensPorPeriodo.values()) {
        const ordensDistintas = [...new Set(ordens)].sort((primeira, segunda) => primeira - segunda);

        for (let indice = 1; indice < ordensDistintas.length; indice += 1) {
            janelas += Math.max(0, ordensDistintas[indice] - ordensDistintas[indice - 1] - 1);
        }
    }

    return janelas;
}

function calcularPenalidadeConsecutividade(
    aula: Aula_livre,
    candidato: CandidatoAlocacao,
    aulasAlocadas: readonly Aula_alocada[],
    slotsLetivosPorTurma: ReadonlyMap<number, readonly Slot[]> | undefined,
): number {
    const slotsDaDisciplina = [
        ...aulasDaDisciplinaNoDia(aula, candidato.slot, aulasAlocadas).map((aulaAlocada) => aulaAlocada.slot),
        candidato.slot,
    ];
    const periodosDaDisciplina = new Set(slotsDaDisciplina.map((slot) => slot.id_periodo));
    const periodosComparaveis = new Set<number>([candidato.slot.id_periodo]);
    const slotsLetivosDaTurma = slotsLetivosPorTurma?.get(aula.id_turma) ?? [];
    const periodosLetivosDaTurma = new Set(
        slotsLetivosDaTurma
            .filter((slot) => pertenceAoMesmoDia(slot, candidato.slot))
            .map((slot) => slot.id_periodo),
    );

    /*
     * Ordens só têm continuidade dentro do próprio período: ordem 2 da manhã
     * não é necessariamente adjacente à ordem 3 da tarde. Porém, dois blocos
     * da mesma disciplina em períodos distintos também fragmentam o dia quando
     * a configuração da turma confirma que ambos os períodos são letivos.
     *
     * Sem essa configuração não inferimos que manhã e tarde sejam comparáveis.
     * Isso evita penalizar turmas de turno único apenas porque existe uma
     * alocação externa ou um dado histórico noutro período.
     */
    if (periodosLetivosDaTurma.has(candidato.slot.id_periodo)) {
        for (const periodo of periodosDaDisciplina) {
            if (periodosLetivosDaTurma.has(periodo)) {
                periodosComparaveis.add(periodo);
            }
        }
    }

    let quantidadeBlocos = 0;
    let tamanhoBlocoDoCandidato = 1;

    for (const periodo of periodosComparaveis) {
        const ordens = [...new Set(
            slotsDaDisciplina
                .filter((slot) => slot.id_periodo === periodo)
                .map((slot) => slot.ordem),
        )].sort((primeira, segunda) => primeira - segunda);

        for (let indice = 0; indice < ordens.length; indice += 1) {
            if (indice === 0 || ordens[indice] !== ordens[indice - 1] + 1) {
                quantidadeBlocos += 1;
            }
        }

        if (periodo !== candidato.slot.id_periodo) {
            continue;
        }

        const ordensDoPeriodo = new Set(ordens);

        for (let ordem = candidato.slot.ordem - 1; ordensDoPeriodo.has(ordem); ordem -= 1) {
            tamanhoBlocoDoCandidato += 1;
        }
        for (let ordem = candidato.slot.ordem + 1; ordensDoPeriodo.has(ordem); ordem += 1) {
            tamanhoBlocoDoCandidato += 1;
        }
    }

    return Math.max(0, quantidadeBlocos - 1) + Math.max(0, tamanhoBlocoDoCandidato - 3);
}

function calcularPenalidades(
    aula: Aula_livre,
    candidato: CandidatoAlocacao,
    contexto: ContextoAvaliacaoPosicoes,
): PenalidadesSoftConstraints {
    const { aulas_alocadas: aulasAlocadas, slots_letivos_por_turma: slotsLetivosPorTurma } = contexto;
    const aulasTurmaDia = aulasDaTurmaNoDia(aula, candidato.slot, aulasAlocadas);
    const aulasDisciplinaDia = aulasDaDisciplinaNoDia(aula, candidato.slot, aulasAlocadas);

    return {
        // SC01: cada aula já presente da turma neste dia aumenta a concentração diária.
        sc01: aulasTurmaDia.length,
        // SC02: quantidade de tempos vazios entre aulas do professor, no mesmo período e dia.
        sc02: calcularJanelasProfessor(aula.id_professor, candidato.slot, aulasAlocadas),
        // SC03: evita fragmentar a disciplina no dia e blocos acima de três tempos.
        sc03: calcularPenalidadeConsecutividade(aula, candidato, aulasAlocadas, slotsLetivosPorTurma),
        // SC04: uma sala não preferencial é aceitável, mas menos desejável.
        sc04: aula.id_SalaPreferencial !== undefined && aula.id_SalaPreferencial !== null
            && candidato.sala.id_sala !== aula.id_SalaPreferencial ? 1 : 0,
        // SC05: apenas a terceira e seguintes ocorrências da disciplina no dia são penalizadas.
        sc05: Math.max(0, aulasDisciplinaDia.length + 1 - 2),
    };
}

/**
 * Avalia um candidato que já passou nas hard constraints. A função é pura e
 * devolve uma cópia enriquecida; nunca altera o candidato nem o horário.
 */
export function avaliarPosicao(
    aula: Aula_livre,
    candidatoValido: CandidatoAlocacao,
    contexto: ContextoAvaliacaoPosicoes,
): CandidatoAlocacao {
    const pesos = obterPesos(contexto.pesos);
    const penalidades = calcularPenalidades(aula, candidatoValido, contexto);
    const custoTotal =
        pesos.pesoSC01 * penalidades.sc01 +
        pesos.pesoSC02 * penalidades.sc02 +
        pesos.pesoSC03 * penalidades.sc03 +
        pesos.pesoSC04 * penalidades.sc04 +
        pesos.pesoSC05 * penalidades.sc05;

    return { ...candidatoValido, custoTotal, penalidades };
}

function compararCandidatos(primeiro: CandidatoAlocacao, segundo: CandidatoAlocacao): number {
    return (
        (primeiro.custoTotal ?? Number.POSITIVE_INFINITY) - (segundo.custoTotal ?? Number.POSITIVE_INFINITY) ||
        primeiro.slot.id_dia - segundo.slot.id_dia ||
        primeiro.slot.id_periodo - segundo.slot.id_periodo ||
        primeiro.slot.ordem - segundo.slot.ordem ||
        primeiro.sala.id_sala - segundo.sala.id_sala
    );
}

/**
 * Escolhe o menor custo exclusivamente entre candidatos já aprovados pelo
 * verificador de restrições. Em empate, a ordem temporal e o ID da sala
 * tornam a decisão repetível.
 */
export function selecionarMelhorCandidato(
    aula: Aula_livre,
    candidatosValidos: readonly CandidatoAlocacao[],
    contexto: ContextoAvaliacaoPosicoes,
): CandidatoAlocacao | undefined {
    const candidatosAvaliados = candidatosValidos.map((candidato) => avaliarPosicao(aula, candidato, contexto));

    return candidatosAvaliados.sort(compararCandidatos)[0];
}

/**
 * Aplica explicitamente a fronteira entre Hard e Soft Constraints: candidatos
 * rejeitados pelo verificador não são enviados para a avaliação.
 */
export function selecionarMelhorCandidatoVerificado(
    aula: Aula_livre,
    candidatosVerificados: readonly CandidatoVerificado[],
    contexto: ContextoAvaliacaoPosicoes,
): CandidatoAlocacao | undefined {
    const candidatosValidos = candidatosVerificados
        .filter((resultado) => resultado.valido)
        .map((resultado) => resultado.candidato);

    return selecionarMelhorCandidato(aula, candidatosValidos, contexto);
}
