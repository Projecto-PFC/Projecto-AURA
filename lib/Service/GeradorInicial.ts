import { prepararDados } from "@/lib/algoritmos/gerador-inicial/prepare-data";
import { DadosPreparadosGerador } from "@/lib/algoritmos/types";
import { prisma } from "@/lib/prisma";

/**
 * Camada de persistência do Gerador Inicial. Carrega um único snapshot antes
 * de delegar a normalização ao núcleo puro do algoritmo.
 */
export class GeradorInicialService {
    async carregarDadosParaGeracao(
        idsTurmas: readonly number[],
        anoLectivo: number,
    ): Promise<DadosPreparadosGerador> {
        const idsTurmasUnicos = [...new Set(idsTurmas)];

        const [turmas, atribuicoes, cargasHorarias, salas, periodos, temposLectivos] = await Promise.all([
            prisma.turma.findMany({
                where: { id_turma: { in: idsTurmasUnicos } },
                select: {
                    id_turma: true,
                    descricao_turma: true,
                    quantidade_alunos: true,
                    id_sala: true,
                    id_curso: true,
                    id_classe: true,
                },
            }),
            prisma.profTurmaDisciplina.findMany({
                where: { id_turma: { in: idsTurmasUnicos } },
                select: {
                    id_atribuicao: true,
                    id_professor: true,
                    id_turma: true,
                    id_disciplina: true,
                    professor: {
                        select: {
                            id_professor: true,
                            nome_professor: true,
                            disponibilidades: {
                                select: { id_dia: true, id_periodo: true, ordem: true },
                            },
                        },
                    },
                    disciplina: {
                        select: {
                            id_disciplina: true,
                            descricao_disciplina: true,
                            id_tipoSala: true,
                        },
                    },
                },
            }),
            prisma.turmaDisciplina.findMany({
                where: { id_turma: { in: idsTurmasUnicos } },
                select: { id_turma: true, id_disciplina: true, aulas_por_semana: true },
            }),
            prisma.sala.findMany({
                select: { id_sala: true, descricao_sala: true, capacidade: true, id_tipoSala: true },
            }),
            prisma.periodo.findMany({
                select: { id_periodo: true, descricao_periodo: true },
            }),
            prisma.tempo_Lectivo.findMany({
                where: { ano_lectivo: anoLectivo },
                select: {
                    id_professor: true,
                    id_turma: true,
                    id_sala: true,
                    id_dia: true,
                    id_periodo: true,
                    ordem: true,
                },
            }),
        ]);

        const professoresPorId = new Map<number, DadosPreparadosGerador["professores"][number]>();
        const disciplinasPorId = new Map<number, DadosPreparadosGerador["disciplinas"][number]>();

        for (const atribuicao of atribuicoes) {
            professoresPorId.set(atribuicao.professor.id_professor, {
                id_professor: atribuicao.professor.id_professor,
                nome_professor: atribuicao.professor.nome_professor,
                disponibilidades: atribuicao.professor.disponibilidades.map((disponibilidade) => ({ ...disponibilidade })),
            });
            disciplinasPorId.set(atribuicao.disciplina.id_disciplina, {
                id_disciplina: atribuicao.disciplina.id_disciplina,
                nome_disciplina: atribuicao.disciplina.descricao_disciplina,
                id_tipoSala: atribuicao.disciplina.id_tipoSala,
            });
        }

        return prepararDados({
            professores: [...professoresPorId.values()],
            disciplinas: [...disciplinasPorId.values()],
            turmas: turmas.map((turma) => ({
                id_turma: turma.id_turma,
                descricao_turma: turma.descricao_turma,
                quantidade_alunos: turma.quantidade_alunos,
                id_SalaPreferencial: turma.id_sala,
                id_curso: turma.id_curso,
                id_classe: turma.id_classe,
            })),
            salas: salas.map((sala) => ({ ...sala })),
            periodos: periodos.map((periodo) => ({ ...periodo })),
            atribuicoes: atribuicoes.map(({ id_atribuicao, id_professor, id_turma, id_disciplina }) => ({
                id_atribuicao,
                id_professor,
                id_turma,
                id_disciplina,
            })),
            cargas_horarias: cargasHorarias.map((carga) => ({ ...carga })),
            tempos_lectivos_existentes: temposLectivos.map((tempoLectivo) => ({
                id_professor: tempoLectivo.id_professor,
                id_turma: tempoLectivo.id_turma,
                id_sala: tempoLectivo.id_sala,
                slot: {
                    id_dia: tempoLectivo.id_dia,
                    id_periodo: tempoLectivo.id_periodo,
                    ordem: tempoLectivo.ordem,
                },
            })),
        });
    }
}

export const geradorInicialService = new GeradorInicialService();
