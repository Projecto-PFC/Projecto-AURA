import { prisma } from '@/lib/prisma';
import { CreateDisciplinaData, UpdateDisciplinaData } from '@/lib/Validation/Disciplina';

export class DisciplinaCRUD {
    async criar(data: CreateDisciplinaData) {
        return await prisma.disciplina.create({ 
            data: { nome_disciplina: data.nome_disciplina } 
        });
    }

    async atualizar(nomeDisciplina: string, data: UpdateDisciplinaData) {
        return await prisma.disciplina.update({
            where: { nome_disciplina: nomeDisciplina },
            data: { nome_disciplina: data.nome_disciplina }
        });
    }

    async mostrar(nomeDisciplina: string) {
        return await prisma.disciplina.findUnique({
            where: { nome_disciplina: nomeDisciplina },
        });
    }

    async listarTodas() {
        return await prisma.disciplina.findMany({
            orderBy: { nome_disciplina: 'asc' },
        });
    }

    async apagar(nomeDisciplina: string) {
        await prisma.disciplina.delete({
            where: { nome_disciplina: nomeDisciplina },
        });
        return { message: "Disciplina eliminada com sucesso" };
    }
}

export const disciplinaService = new DisciplinaCRUD();
