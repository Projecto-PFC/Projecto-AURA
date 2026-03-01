'use server'

import { turmaService } from "@/lib/Service/Turma"
import { classeService } from "@/lib/Service/Classe"
import { cursoService } from "@/lib/Service/Curso"
import { createTurmaSchema, updateTurmaSchema } from "@/lib/Validation/Turma"
import { createClasseSchema, updateClasseSchema } from "@/lib/Validation/Classe"
import { createCursoSchema, updateCursoSchema } from "@/lib/Validation/Curso"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

// ── TURMA ─────────────────────────────────────────────────────

export async function criarTurma(formData: FormData): Promise<ActionResponse> {
    try {
        const nome_turma  = formData.get('nome_turma')  as string
        const nome_classe = formData.get('nome_classe') as string
        const nome_curso  = formData.get('nome_curso')  as string

        const validatedData = createTurmaSchema.parse({ nome_turma, nome_classe, nome_curso })
        const turma = await turmaService.criarTurma(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: turma, message: 'Turma criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarTurma(
    nomeTurma: string,  // era id: number — o service espera string
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome_turma  = formData.get('nome_turma')  as string | null
        const nome_classe = formData.get('nome_classe') as string | null
        const nome_curso  = formData.get('nome_curso')  as string | null

        const validatedData = updateTurmaSchema.parse({
            nome_turma:  nome_turma  || undefined,
            nome_classe: nome_classe || undefined,
            nome_curso:  nome_curso  || undefined,
        })

        const turma = await turmaService.atualizarTurma(nomeTurma, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: turma, message: 'Turma atualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarTurma(nomeTurma: string): Promise<ActionResponse> {
    // era id: number — o service espera string
    try {
        const result = await turmaService.apagarTurma(nomeTurma)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Turma apagada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarTodasTurmas() {
    return await turmaService.listarTodasTurmas()
}

// ── CLASSE ────────────────────────────────────────────────────

export async function criarClasse(formData: FormData): Promise<ActionResponse> {
    try {
        const nome_classe = formData.get('nome_classe') as string

        const validatedData = createClasseSchema.parse({ nome_classe })
        const classe = await classeService.criarClasse(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: classe, message: 'Classe criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarClasse(
    nomeClasse: string,
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome_classe = formData.get('nome_classe') as string

        const validatedData = updateClasseSchema.parse({ nome_classe: nome_classe || undefined })
        const classe = await classeService.atualizarClasse(nomeClasse, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: classe, message: 'Classe atualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarClasse(nomeClasse: string): Promise<ActionResponse> {
    try {
        const result = await classeService.apagarClasse(nomeClasse)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Classe apagada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarClasses() {
    return await classeService.listarTodasClasses()
}

// ── CURSO ─────────────────────────────────────────────────────

export async function criarCurso(formData: FormData): Promise<ActionResponse> {
    try {
        const nome_curso = formData.get('nome_curso') as string

        const validatedData = createCursoSchema.parse({ nome_curso })
        const curso = await cursoService.criarCurso(validatedData)

        revalidatePath('/turmas')
        return { success: true, data: curso, message: 'Curso criado com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarCurso(
    nomeCurso: string,
    formData: FormData
): Promise<ActionResponse> {
    try {
        const nome_curso = formData.get('nome_curso') as string

        const validatedData = updateCursoSchema.parse({ nome_curso: nome_curso || undefined })
        const curso = await cursoService.atualizarCurso(nomeCurso, validatedData)

        revalidatePath('/turmas')
        return { success: true, data: curso, message: 'Curso atualizado com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarCurso(nomeCurso: string): Promise<ActionResponse> {
    try {
        const result = await cursoService.apagarCurso(nomeCurso)
        revalidatePath('/turmas')
        return { success: true, data: result, message: 'Curso apagado com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarCursos() {
    return await cursoService.listarTodosCursos()
}