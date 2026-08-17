import { prisma } from '@/lib/prisma';
import { CreateDisciplinaData, UpdateDisciplinaData } from '@/lib/Validation/Disciplina';

export class DisciplinaCRUD {

    async criar(data: CreateDisciplinaData) {
        return await prisma.disciplina.create({ data });
    }

    async atualizar(id_disciplina: number, data: UpdateDisciplinaData) {
        return await prisma.disciplina.update({
            where: { id_disciplina },
            data,
        });
    }

    async mostrar(id_disciplina: number) {
        return await prisma.disciplina.findUnique({
            where: { id_disciplina },
            include: { tipoSala: true },
        });
    }

    async listarTodas() {
        return await prisma.disciplina.findMany({
            orderBy: { descricao_disciplina: "asc" },
            include: { tipoSala: true },
        });
    }

    async apagar(id_disciplina: number) {
        await prisma.turmaDisciplina.deleteMany({
            where: { id_disciplina },
        });
        await prisma.profTurmaDisciplina.deleteMany({
            where: { id_disciplina },
        });
        await prisma.disciplina.delete({
            where: { id_disciplina },
        });
        return { message: "Disciplina eliminada com sucesso" };
    }
}

export const disciplinaService = new DisciplinaCRUD();