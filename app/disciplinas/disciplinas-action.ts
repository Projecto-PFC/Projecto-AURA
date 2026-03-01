'use server'

import { disciplinaService } from "@/lib/Service/Disciplinas"
import { createDisciplinaSchema, updateDisciplinaSchema } from "@/lib/Validation/Disciplina"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

export async function criarDisciplina(
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome_disciplina = formData.get('nome_disciplina') as string

        const validatedData = createDisciplinaSchema.parse({ nome_disciplina })
        const disciplina = await disciplinaService.criar(validatedData)

        revalidatePath('/disciplinas')

        return {
            success: true,
            data: disciplina,
            message: 'Disciplina criada com sucesso!',
        }
    } catch (error: any) {
        console.error('Erro ao criar disciplina:', error)

        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }

        return {
            success: false,
            message: error.message || 'Erro inesperado',
        }
    }
}

export async function criarDisciplinaAction(
    prevState: ActionResponse | undefined,
    formData: FormData
): Promise<ActionResponse> {
    return await criarDisciplina(formData)
}

export async function atualizarDisciplina(
    nomeDisciplina: string,
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome_disciplina = formData.get('nome_disciplina') as string

        const validatedData = updateDisciplinaSchema.parse({
            nome_disciplina: nome_disciplina || undefined,
        })

        const disciplina = await disciplinaService.atualizar(nomeDisciplina, validatedData)

        revalidatePath('/disciplinas')

        return {
            success: true,
            data: disciplina,
            message: 'Disciplina atualizada com sucesso!',
        }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação',
            }
        }

        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarDisciplina(
    nomeDisciplina: string
): Promise<ActionResponse> {
    try {
        const result = await disciplinaService.apagar(nomeDisciplina)
        revalidatePath('/disciplinas')
        return {
            success: true,
            data: result,
            message: 'Disciplina apagada com sucesso!'
        }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarTodas() {
    return await disciplinaService.listarTodas()
}