import {
    Atribuicao,
    DadosPreparadosGerador,
    Disciplina,
    Periodo,
    Professor,
    Sala,
    Slot,
    TempoLectivoExistente,
    Turma,
} from "@/lib/algoritmos/types";

export interface AtribuicaoCarregada {
    id_atribuicao: number;
    id_professor: number;
    id_turma: number;
    id_disciplina: number;
}

export interface CargaHorariaCarregada {
    id_turma: number;
    id_disciplina: number;
    aulas_por_semana: number;
}

export interface DadosCarregadosGerador {
    professores: Professor[];
    disciplinas: Disciplina[];
    turmas: Turma[];
    salas: Sala[];
    periodos: Periodo[];
    atribuicoes: AtribuicaoCarregada[];
    cargas_horarias: CargaHorariaCarregada[];
    tempos_lectivos_existentes: TempoLectivoExistente[];
}

/** Cria uma chave estável para índices de disponibilidade e ocupação. */
export function criarChaveSlot(slot: Slot): string {
    return `${slot.id_dia}:${slot.id_periodo}:${slot.ordem}`;
}

function criarChaveOcupacao(id_recurso: number, slot: Slot): string {
    return `${id_recurso}:${criarChaveSlot(slot)}`;
}

function ordenarSlots(slots: Slot[]): Slot[] {
    return [...slots].sort((primeiro, segundo) =>
        primeiro.id_dia - segundo.id_dia ||
        primeiro.id_periodo - segundo.id_periodo ||
        primeiro.ordem - segundo.ordem,
    );
}

function removerSlotsDuplicados(slots: Slot[]): Slot[] {
    const slotsPorChave = new Map<string, Slot>();

    for (const slot of slots) {
        slotsPorChave.set(criarChaveSlot(slot), { ...slot });
    }

    return ordenarSlots([...slotsPorChave.values()]);
}

/**
 * Converte o snapshot persistido em índices exclusivamente em memória.
 * Esta função é deliberadamente pura: não conhece Prisma nem executa I/O.
 */
export function prepararDados(dados: DadosCarregadosGerador): DadosPreparadosGerador {
    const professores = [...dados.professores].sort((primeiro, segundo) => primeiro.id_professor - segundo.id_professor);
    const disciplinas = [...dados.disciplinas].sort((primeiro, segundo) => primeiro.id_disciplina - segundo.id_disciplina);
    const turmas = [...dados.turmas].sort((primeiro, segundo) => primeiro.id_turma - segundo.id_turma);
    const salas = [...dados.salas].sort((primeiro, segundo) => primeiro.id_sala - segundo.id_sala);
    const periodos = [...dados.periodos].sort((primeiro, segundo) => primeiro.id_periodo - segundo.id_periodo);

    const professores_por_id = new Map(professores.map((professor) => [professor.id_professor, professor]));
    const disciplinas_por_id = new Map(disciplinas.map((disciplina) => [disciplina.id_disciplina, disciplina]));
    const turmas_por_id = new Map(turmas.map((turma) => [turma.id_turma, turma]));
    const salas_por_id = new Map(salas.map((sala) => [sala.id_sala, sala]));

    const cargasPorTurmaDisciplina = new Map<string, number>();
    for (const carga of dados.cargas_horarias) {
        cargasPorTurmaDisciplina.set(`${carga.id_turma}:${carga.id_disciplina}`, carga.aulas_por_semana);
    }

    const atribuicoes: Atribuicao[] = dados.atribuicoes.map((atribuicao) => {
        const carga = cargasPorTurmaDisciplina.get(`${atribuicao.id_turma}:${atribuicao.id_disciplina}`)

        if (carga === undefined) {
            throw new Error(
                `Atribuição ${atribuicao.id_atribuicao} não tem carga horária definida ` +
                `(turma ${atribuicao.id_turma}, disciplina ${atribuicao.id_disciplina})`
            )
        }

        return { ...atribuicao, aulas_por_semana: carga }
    });

    const slots_por_professor = new Map<number, Slot[]>();
    const disponibilidade_por_professor = new Map<number, Set<string>>();
    const todosSlots: Slot[] = [];

    for (const professor of professores) {
        const slots = removerSlotsDuplicados(professor.disponibilidades);
        slots_por_professor.set(professor.id_professor, slots);
        disponibilidade_por_professor.set(professor.id_professor, new Set(slots.map(criarChaveSlot)));
        todosSlots.push(...slots);
    }

    const slots = removerSlotsDuplicados(todosSlots);
    const salas_por_tipo = new Map<number, Sala[]>();
    for (const sala of salas) {
        const salasDoTipo = salas_por_tipo.get(sala.id_tipoSala) ?? [];
        salasDoTipo.push(sala);
        salas_por_tipo.set(sala.id_tipoSala, salasDoTipo);
    }

    const salas_compativeis_por_atribuicao = new Map<number, Sala[]>();
    for (const atribuicao of atribuicoes) {
        const turma = turmas_por_id.get(atribuicao.id_turma);
        const disciplina = disciplinas_por_id.get(atribuicao.id_disciplina);
        const salasDoTipo = disciplina === undefined
            ? []
            : salas_por_tipo.get(disciplina.id_tipoSala) ?? [];

        salas_compativeis_por_atribuicao.set(
            atribuicao.id_atribuicao,
            turma === undefined
                ? []
                : salasDoTipo.filter((sala) => sala.capacidade >= turma.quantidade_alunos),
        );
    }

    const idsTurmasEmGeracao = new Set(turmas.map((turma) => turma.id_turma));
    const turmas_com_horario = new Set<number>();
    const tempos_lectivos_externos: TempoLectivoExistente[] = [];
    const ocupacao_permanente_professores = new Set<string>();
    const ocupacao_permanente_turmas = new Set<string>();
    const ocupacao_permanente_salas = new Set<string>();

    for (const tempoLectivo of dados.tempos_lectivos_existentes) {
        if (idsTurmasEmGeracao.has(tempoLectivo.id_turma)) {
            turmas_com_horario.add(tempoLectivo.id_turma);
            continue;
        }

        const tempoExterno = { ...tempoLectivo, slot: { ...tempoLectivo.slot } };
        tempos_lectivos_externos.push(tempoExterno);
        ocupacao_permanente_professores.add(criarChaveOcupacao(tempoExterno.id_professor, tempoExterno.slot));
        ocupacao_permanente_turmas.add(criarChaveOcupacao(tempoExterno.id_turma, tempoExterno.slot));
        ocupacao_permanente_salas.add(criarChaveOcupacao(tempoExterno.id_sala, tempoExterno.slot));
    }

    return {
        professores,
        disciplinas,
        turmas,
        salas,
        periodos,
        atribuicoes,
        slots,
        tempos_lectivos_externos,
        turmas_com_horario,
        professores_por_id,
        disciplinas_por_id,
        turmas_por_id,
        salas_por_id,
        slots_por_professor,
        disponibilidade_por_professor,
        salas_por_tipo,
        salas_compativeis_por_atribuicao,
        ocupacao_permanente_professores,
        ocupacao_permanente_turmas,
        ocupacao_permanente_salas,
        aulas_alocadas_por_turma_dia: new Map<string, number>(),
        aulas_alocadas_por_professor_dia: new Map<string, number>(),
    };
}