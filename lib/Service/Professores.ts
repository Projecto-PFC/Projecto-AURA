import { prisma } from "../prisma"
import { CreateProfessorData, UpdateProfessorData } from "@/lib/Validation/Professor"

export class ProfessorCRUD {

    async criarProfessor(data: CreateProfessorData) {
        return await prisma.professor.create({
            data: {
                nome:     data.nome,
                email:    data.email,
                telefone: data.telefone,

                profDisciplinas: {
                    create: data.nomesDisciplinas.map(nome => ({
                        nome_disciplina: nome
                    }))
                }
            },
            include: {
                profDisciplinas: {
                    include: { disciplina: true }
                }
            }
        })
    }

    async atualizarProfessor(id_professor: number, data: UpdateProfessorData) {
        const existente = await prisma.professor.findUnique({
            where: { id_professor }
        })

        if (!existente) {
            throw new Error("Professor não encontrado")
        }

        // actualizar disciplinas se vieram no payload
        if (data.nomesDisciplinas) {
            await prisma.profDisciplinas.deleteMany({
                where: { professorId: id_professor }
            })
            await prisma.profDisciplinas.createMany({
                data: data.nomesDisciplinas.map(nome => ({
                    professorId:     id_professor,
                    nome_disciplina: nome
                }))
            })
        }

        return await prisma.professor.update({
            where: { id_professor },
            data: {
                ...(data.nome     && { nome:     data.nome }),
                ...(data.email    && { email:    data.email }),
                ...(data.telefone && { telefone: data.telefone }),
            },
            include: {
                profDisciplinas: {
                    include: { disciplina: true }
                }
            }
        })
    }

    async showProfessor(id_professor: number) {
        return await prisma.professor.findUnique({
            where: { id_professor },
            include: {
                profDisciplinas: {
                    include: { disciplina: true }
                },
                disponibilidades: true
            }
        })
    }

    async listarTodos() {
        return await prisma.professor.findMany({
            orderBy: { nome: "asc" },
            select: {
                id_professor: true,
                nome:         true,
                email:        true,
                telefone:     true,
                profDisciplinas: {
                    include: { disciplina: true }
                }
            }
        })
    }

    async apagarProfessor(id_professor: number) {
        const professor = await prisma.professor.findUnique({
            where: { id_professor }
        })

        if (!professor) {
            throw new Error("Professor não encontrado")
        }

        await prisma.profDisciplinas.deleteMany({
            where: { professorId: id_professor }
        })

        await prisma.professor.delete({
            where: { id_professor }
        })

        return { message: "Professor eliminado com sucesso" }
    }
}

export const professorService = new ProfessorCRUD()