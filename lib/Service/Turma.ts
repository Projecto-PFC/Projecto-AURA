import { prisma } from "@/lib/prisma";
import { CreateTurmaData, UpdateTurmaData } from "@/lib/Validation/Turma";

export class TurmaCRUD {
    async criarTurma(data: CreateTurmaData) {
        return await prisma.turma.create({ data });
    }

    async atualizarTurma(id_turma: number, data: UpdateTurmaData) {
        return await prisma.turma.update({
            where: { id_turma },
            data,
        });
    }

    async showTurma(id_turma: number) {
        return await prisma.turma.findUnique({
            where: { id_turma },
            include: {
                curso:  true,
                classe: true,
                sala_preferencial: {
                    include: { tipoSala: true }
                },
            },
        });
    }

    async listarTodas() {
        return await prisma.turma.findMany({
            orderBy: { descricao_turma: "asc" },
            include: {
                curso:  true,
                classe: true,
                sala_preferencial: {
                    include: { tipoSala: true }
                },
            },
        });
    }

    async apagarTurma(id_turma: number) {
        await prisma.turma.delete({
            where: { id_turma },
        });
        return { message: "Turma eliminada com sucesso" };
    }
}

export const turmaService = new TurmaCRUD();