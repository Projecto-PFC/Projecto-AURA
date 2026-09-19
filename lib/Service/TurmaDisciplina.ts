import { prisma } from "@/lib/prisma";
import { AppError } from "@/lib/errors";
import type { Prisma } from "@/lib/generated/prisma";
import type {
    ActualizarTurmaDisciplinaPeriodosData,
    CreateTurmaDisciplinaData,
    ConsultarTurmaDisciplinaPeriodosData,
    RemoverTurmaDisciplinaPeriodosData,
    SubstituirTurmaDisciplinaPeriodosData,
} from "@/lib/Validation/TurmaDisciplina";

type TurmaConfiguracaoData = Pick<
    CreateTurmaDisciplinaData,
    "id_turma" | "aulas_por_semana" | "ids_periodos"
>;

export class TurmaDisciplinaCrud {

    async criarAssociacao(data: CreateTurmaDisciplinaData) {
        const { ids_periodos, ...turma_disciplina } = data;
        this.garantirPeriodosPermitidos(ids_periodos);

        return await prisma.$transaction(async (transacao) => {
            const associacao = await transacao.turmaDisciplina.create({
                data: turma_disciplina,
            });

            await transacao.turmaDisciplinaPeriodo.createMany({
                data: ids_periodos.map((id_periodo) => ({
                    id_turma: data.id_turma,
                    id_disciplina: data.id_disciplina,
                    id_periodo,
                })),
            });

            return associacao;
        });
    }

    async atualizarAulasPorSemana(
        id_turma: number,
        id_disciplina: number,
        aulas_por_semana: number
    ) {
        return await prisma.turmaDisciplina.update({
            where: {
                id_turma_id_disciplina: { id_turma, id_disciplina },
            },
            data: { aulas_por_semana },
        });
    }

    async apagarAssociacoesDaDisciplina(id_disciplina: number) {
        return await prisma.$transaction(async (transacao) => {
            return await this.apagarAssociacoesDaDisciplinaNaTransacao(id_disciplina, transacao);
        });
    }

    async recriarAssociacoes(
        id_disciplina: number,
        turmas: TurmaConfiguracaoData[],
    ) {
        turmas.forEach(({ ids_periodos }) => this.garantirPeriodosPermitidos(ids_periodos));

        await prisma.$transaction(async (transacao) => {
            await this.apagarAssociacoesDaDisciplinaNaTransacao(id_disciplina, transacao);

            if (turmas.length === 0) {
                return;
            }

            await transacao.turmaDisciplina.createMany({
                data: turmas.map(({ id_turma, aulas_por_semana }) => ({
                    id_turma,
                    id_disciplina,
                    aulas_por_semana,
                })),
            });
            await transacao.turmaDisciplinaPeriodo.createMany({
                data: turmas.flatMap(({ id_turma, ids_periodos }) =>
                    ids_periodos.map((id_periodo) => ({
                        id_turma,
                        id_disciplina,
                        id_periodo,
                    })),
                ),
            });
        });
    }

    async listarPorDisciplina(id_disciplina: number) {
        return await prisma.turmaDisciplina.findMany({
            where: { id_disciplina },
            include: { turma: true },
            orderBy: { id_turma: "asc" },
        });
    }

    async listarPorTurma(id_turma: number) {
        return await prisma.turmaDisciplina.findMany({
            where: { id_turma },
            include: { disciplina: true },
            orderBy: { id_disciplina: "asc" },
        });
    }

    async obterPeriodosPermitidos(input: ConsultarTurmaDisciplinaPeriodosData) {
        await this.verificarTurmaDisciplina(input);

        return await prisma.turmaDisciplinaPeriodo.findMany({
            where: this.criarChaveTurmaDisciplina(input),
            include: { periodo: true },
            orderBy: { id_periodo: "asc" },
        });
    }

    async substituirPeriodosPermitidos(input: SubstituirTurmaDisciplinaPeriodosData) {
        return await prisma.$transaction(async (transacao) => {
            await this.verificarTurmaDisciplina(input, transacao);
            const chave = this.criarChaveTurmaDisciplina(input);
            await transacao.turmaDisciplinaPeriodo.deleteMany({ where: chave });
            await transacao.turmaDisciplinaPeriodo.createMany({
                data: input.ids_periodos.map((id_periodo) => ({
                    id_turma: input.id_turma,
                    id_disciplina: input.id_disciplina,
                    id_periodo,
                })),
            });

            return transacao.turmaDisciplinaPeriodo.findMany({
                where: chave,
                include: { periodo: true },
                orderBy: { id_periodo: "asc" },
            });
        });
    }

    async actualizarPeriodosPermitidos(input: ActualizarTurmaDisciplinaPeriodosData) {
        return await this.substituirPeriodosPermitidos(input);
    }

    async removerPeriodosPermitidos(input: RemoverTurmaDisciplinaPeriodosData) {
        return await prisma.$transaction(async (transacao) => {
            await this.verificarTurmaDisciplina(input, transacao);

            const periodosActuais = await transacao.turmaDisciplinaPeriodo.findMany({
                where: {
                    id_turma: input.id_turma,
                    id_disciplina: input.id_disciplina,
                },
                select: { id_periodo: true },
            });
            const idsActuais = new Set(periodosActuais.map(({ id_periodo }) => id_periodo));
            const idsInexistentes = input.ids_periodos.filter((id_periodo) => !idsActuais.has(id_periodo));

            if (idsInexistentes.length > 0) {
                throw new AppError("Um ou mais períodos não estão configurados para esta TurmaDisciplina.", "NOT_FOUND", 404);
            }

            if (periodosActuais.length - input.ids_periodos.length < 1) {
                throw new AppError("A TurmaDisciplina deve manter pelo menos um período permitido.", "VALIDATION", 400);
            }

            await transacao.turmaDisciplinaPeriodo.deleteMany({
                where: {
                    id_turma: input.id_turma,
                    id_disciplina: input.id_disciplina,
                    id_periodo: { in: input.ids_periodos },
                },
            });

            return transacao.turmaDisciplinaPeriodo.findMany({
                where: {
                    id_turma: input.id_turma,
                    id_disciplina: input.id_disciplina,
                },
                include: { periodo: true },
                orderBy: { id_periodo: "asc" },
            });
        });
    }

    private async verificarTurmaDisciplina(
        input: ConsultarTurmaDisciplinaPeriodosData,
        cliente: typeof prisma | Prisma.TransactionClient = prisma,
    ) {
        const turmaDisciplina = await cliente.turmaDisciplina.findUnique({
            where: {
                id_turma_id_disciplina: {
                    id_turma: input.id_turma,
                    id_disciplina: input.id_disciplina,
                },
            },
            select: { id_turma: true },
        });

        if (!turmaDisciplina) {
            throw new AppError("TurmaDisciplina não encontrada.", "NOT_FOUND", 404);
        }
    }

    private criarChaveTurmaDisciplina(input: ConsultarTurmaDisciplinaPeriodosData) {
        return {
            id_turma: input.id_turma,
            id_disciplina: input.id_disciplina,
        };
    }

    private async apagarAssociacoesDaDisciplinaNaTransacao(
        id_disciplina: number,
        transacao: Prisma.TransactionClient,
    ) {
        await transacao.turmaDisciplinaPeriodo.deleteMany({
            where: { id_disciplina },
        });
        return await transacao.turmaDisciplina.deleteMany({
            where: { id_disciplina },
        });
    }

    private garantirPeriodosPermitidos(ids_periodos: number[]) {
        if (ids_periodos.length === 0) {
            throw new AppError(
                "A TurmaDisciplina deve ter pelo menos um período permitido.",
                "VALIDATION",
                400,
            );
        }
    }
}

export const turmaDisciplinaService = new TurmaDisciplinaCrud();
