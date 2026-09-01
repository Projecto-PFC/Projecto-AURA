import { prisma } from "@/lib/prisma";
import { gerarHorarioInicial } from "@/lib/algoritmos/gerador-inicial/construtor-horario";
import { geradorInicialService } from "@/lib/Service/GeradorInicial";
import type { Aula_alocada, ResultadoGeracao } from "@/lib/algoritmos/types";
import type {
    ApagarHorarioInput,
    ConsultarHorarioInput,
    ConsultarHorarioPorProfessorInput,
    ConsultarHorarioPorSalaInput,
    ContarHorariosInput,
    GerarHorarioInput,
} from "@/lib/Validation/horario.validation";

const incluirDetalhes = {
    professor: true,
    disciplina: true,
    sala: true,
    turma: true,
    dia: true,
    periodo: true,
} as const;

export interface HorarioAgrupado<T = unknown> {
    id_turma: number;
    ano_lectivo: number;
    tempos_lectivos: T[];
}

export interface ResultadoOperacaoHorario {
    sucesso: boolean;
    resultado: ResultadoGeracao;
    persistidos: number;
}

export class HorarioService {
    async gerar(input: GerarHorarioInput): Promise<ResultadoOperacaoHorario> {
        const dados = await geradorInicialService.carregarDadosParaGeracao(input.ids_turmas, input.ano_lectivo);
        const resultado = gerarHorarioInicial(dados, {
            permitir_regeneracao: input.permitirRegeneracao,
        });

        if (!resultado.sucesso || resultado.horario === undefined) {
            return { sucesso: false, resultado, persistidos: 0 };
        }

        const dadosPersistencia = resultado.horario.aulas_alocadas.map((aula_alocada) =>
            this.converterParaPersistencia(aula_alocada, input.ano_lectivo),
        );
        const persistidos = await prisma.$transaction(async (transacao) => {
            if (input.permitirRegeneracao) {
                await transacao.tempo_Lectivo.deleteMany({
                    where: { id_turma: { in: input.ids_turmas }, ano_lectivo: input.ano_lectivo },
                });
            }
            return transacao.tempo_Lectivo.createMany({ data: dadosPersistencia });
        });

        return { sucesso: true, resultado, persistidos: persistidos.count };
    }

    async listar(input: ConsultarHorarioInput): Promise<HorarioAgrupado[]> {
        const tempos = await this.listarTempos(input);

        const porTurma = new Map<number, typeof tempos>();
        for (const tempo of tempos) {
            const turma = porTurma.get(tempo.id_turma) ?? [];
            turma.push(tempo);
            porTurma.set(tempo.id_turma, turma);
        }

        return [...porTurma.entries()].map(([id_turma, tempos_lectivos]) => ({
            id_turma,
            ano_lectivo: input.ano_lectivo,
            tempos_lectivos,
        }));
    }

    async listarTempos(input: ConsultarHorarioInput) {
        return prisma.tempo_Lectivo.findMany({
            where: {
                id_turma: { in: input.ids_turmas },
                ano_lectivo: input.ano_lectivo,
            },
            include: incluirDetalhes,
            orderBy: [{ id_turma: "asc" }, { id_dia: "asc" }, { id_periodo: "asc" }, { ordem: "asc" }],
        });
    }

    async listarPorProfessor(input: ConsultarHorarioPorProfessorInput) {
        return prisma.tempo_Lectivo.findMany({
            where: { 
                id_professor: input.id_professor, ano_lectivo: input.ano_lectivo 
            },
            include: incluirDetalhes,
            orderBy: [{ id_dia: "asc" }, { id_periodo: "asc" }, { ordem: "asc" }],
        });
    }

    async listarPorSala(input: ConsultarHorarioPorSalaInput) {
        return prisma.tempo_Lectivo.findMany({
            where: { id_sala: input.id_sala, ano_lectivo: input.ano_lectivo },
            include: incluirDetalhes,
            orderBy: [{ id_dia: "asc" }, { id_periodo: "asc" }, { ordem: "asc" }],
        });
    }

    async apagar(input: ApagarHorarioInput): Promise<{ apagados: number }> {
        const resultado = await prisma.tempo_Lectivo.deleteMany({
            where: { id_turma: { in: input.ids_turmas }, ano_lectivo: input.ano_lectivo },
        });
        return { apagados: resultado.count };
    }

    async apagarPorAno(anoLectivo: number): Promise<{ apagados: number }> {
        const resultado = await prisma.tempo_Lectivo.deleteMany({
            where: { ano_lectivo: anoLectivo },
        });
        return { apagados: resultado.count };
    }

    async contar(input: ContarHorariosInput): Promise<number> {
        const horarios = await prisma.tempo_Lectivo.findMany({
            where: { ano_lectivo: input.ano_lectivo },
            select: { id_turma: true },
            distinct: ["id_turma"],
        });
        return horarios.length;
    }

    private converterParaPersistencia(aula_alocada: Aula_alocada, ano_lectivo: number) {
        return {
            id_atribuicao: aula_alocada.aula.id_atribuicao,
            id_professor: aula_alocada.aula.id_professor,
            id_turma: aula_alocada.aula.id_turma,
            id_disciplina: aula_alocada.aula.id_disciplina,
            id_sala: aula_alocada.id_sala,
            id_dia: aula_alocada.slot.id_dia,
            id_periodo: aula_alocada.slot.id_periodo,
            ordem: aula_alocada.slot.ordem,
            ano_lectivo: ano_lectivo,
        };
    }
}

export const horarioService = new HorarioService();