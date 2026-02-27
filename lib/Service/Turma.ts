import { prisma } from "@/lib/prisma"
import { CreateTurmaData, UpdateTurmaData } from "@/lib/Validation/Turma"

export class TurmaCRUD {

    async criarTurma(data: CreateTurmaData) {
        return await prisma.turma.create({
            data: {
                nome_turma:  data.nome_turma,
                nome_curso:  data.nome_curso,   // ← estava em falta
                nome_classe: data.nome_classe,  // ← estava em falta
            },
            include: {
                curso:  true,  // traz os dados do curso associado
                classe: true,  // traz os dados da classe associada
            }
        })
    }

    async atualizarTurma(nomeTurma: string, data: UpdateTurmaData) {
        return await prisma.turma.update({
            where: { nome_turma: nomeTurma },
            data: {
                // só actualiza os campos que vieram preenchidos
                ...(data.nome_turma  && { nome_turma:  data.nome_turma }),
                ...(data.nome_curso  && { nome_curso:  data.nome_curso }),
                ...(data.nome_classe && { nome_classe: data.nome_classe }),
            },
            include: {
                curso:  true,
                classe: true,
            }
        })
    }

    async showTurma(nomeTurma: string) {
        return await prisma.turma.findUnique({
            where: { nome_turma: nomeTurma },
            include: {
                curso:  true,
                classe: true,
            }
        })
    }

    async listarTodasTurmas() {
        return await prisma.turma.findMany({
            orderBy: { nome_turma: "asc" },
            include: {
                curso:  true,
                classe: true,
            }
        })
    }

    async apagarTurma(nomeTurma: string) {
        await prisma.turma.delete({
            where: { nome_turma: nomeTurma }
        })
        return { message: "Turma eliminada com sucesso" }
    }
}

export const turmaService = new TurmaCRUD()