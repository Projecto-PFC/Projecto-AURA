'use server'

import { disciplinaService } from "@/lib/Service/Disciplinas"
import { turmaDisciplinaService } from "@/lib/Service/TurmaDisciplina"
import { createDisciplinaSchema, updateDisciplinaSchema } from "@/lib/Validation/Disciplina"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

export async function criarDisciplina(formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_disciplina = formData.get('descricao_disciplina') as string
        const id_tipoSala          = Number(formData.get('id_tipoSala'))

        const validatedData = createDisciplinaSchema.parse({ descricao_disciplina, id_tipoSala })
        const disciplina    = await disciplinaService.criar(validatedData)

        revalidatePath('/disciplinas')
        return { success: true, data: disciplina, message: 'Disciplina criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Verifique os erros nos campos abaixo.' }
        }
        if (error?.code === 'P2002') {
            return { success: false, message: 'Já existe uma disciplina registada com este nome.' }
        }
        return { success: false, message: error.message || 'Erro inesperado ao criar a disciplina.' }
    }
}

export async function atualizarDisciplina(id_disciplina: number, formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_disciplina = formData.get('descricao_disciplina') as string | null
        const id_tipoSala          = formData.get('id_tipoSala') ? Number(formData.get('id_tipoSala')) : undefined

        const validatedData = updateDisciplinaSchema.parse({
            descricao_disciplina: descricao_disciplina || undefined,
            id_tipoSala,
        })
        const disciplina = await disciplinaService.atualizar(id_disciplina, validatedData)

        revalidatePath('/disciplinas')
        return { success: true, data: disciplina, message: 'Disciplina atualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Verifique os erros nos campos abaixo.' }
        }
        if (error?.code === 'P2002') {
            return { success: false, message: 'Já existe uma disciplina registada com este nome.' }
        }
        return { success: false, message: error.message || 'Erro inesperado ao atualizar a disciplina.' }
    }
}

export async function apagarDisciplina(id_disciplina: number): Promise<ActionResponse> {
    try {
        const result = await disciplinaService.apagar(id_disciplina)
        revalidatePath('/disciplinas')
        return { success: true, data: result, message: 'Disciplina apagada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarTodas() {
    return await disciplinaService.listarTodas()
}

export async function listarTurmas() {
    const { prisma } = await import("@/lib/prisma")
    return await prisma.turma.findMany({
        orderBy: { descricao_turma: 'asc' },
        include: { 
            turmaDisciplinas: { include: { disciplina: true } },
            curso: true,
            classe: true
        },
    })
}

export async function atualizarTurmasDaDisciplina(
    id_disciplina: number,
    turmas: { id_turma: number; aulas_por_semana: number }[]
): Promise<ActionResponse> {
    try {
        await turmaDisciplinaService.recriarAssociacoes(id_disciplina, turmas)
        revalidatePath('/disciplinas')
        return { success: true, message: 'Turmas da disciplina atualizadas com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}