'use server'

import { turmaDisciplinaService } from "@/lib/Service/TurmaDisciplina"
import {
    actualizarTurmaDisciplinaPeriodosSchema,
    consultarTurmaDisciplinaPeriodosSchema,
    createTurmaDisciplinaSchema,
    idSchema,
    removerTurmaDisciplinaPeriodosSchema,
    substituirTurmaDisciplinaPeriodosSchema,
} from "@/lib/Validation/TurmaDisciplina"
import { getActionErrorMessage } from "@/lib/errors"
import { z } from "zod"
import { revalidatePath } from 'next/cache'

export type ActionResponse<T = unknown> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

// Schema para validar o array de turmas que vem do componente
const turmasArraySchema = z.array(
    createTurmaDisciplinaSchema.pick({
        id_turma: true,
        aulas_por_semana: true,
        ids_periodos: true,
    }),
)

export async function atualizarTurmasDaDisciplina(
    id_disciplina: number,
    turmas: { id_turma: number; aulas_por_semana: number; ids_periodos: number[] }[],
): Promise<ActionResponse> {
    try {
        idSchema.parse(id_disciplina)

        const turmasValidadas = turmasArraySchema.parse(turmas)

        await turmaDisciplinaService.recriarAssociacoes(id_disciplina, turmasValidadas)

        revalidatePath('/disciplinas')
        return { success: true, message: 'Turmas da disciplina atualizadas com sucesso!' }
    } catch (error: unknown) {
        return criarRespostaErro(error)
    }
}

export async function listarTurmasDaDisciplina(id_disciplina: number) {
    idSchema.parse(id_disciplina)
    return await turmaDisciplinaService.listarPorDisciplina(id_disciplina)
}

export async function obterPeriodosPermitidos(input: unknown): Promise<ActionResponse> {
    try {
        const periodos = await turmaDisciplinaService.obterPeriodosPermitidos(
            consultarTurmaDisciplinaPeriodosSchema.parse(input),
        )
        return { success: true, data: periodos }
    } catch (error: unknown) {
        return criarRespostaErro(error)
    }
}

export async function substituirPeriodosPermitidos(input: unknown): Promise<ActionResponse> {
    try {
        const periodos = await turmaDisciplinaService.substituirPeriodosPermitidos(
            substituirTurmaDisciplinaPeriodosSchema.parse(input),
        )
        revalidarPeriodos()
        return { success: true, data: periodos, message: "Períodos permitidos substituídos com sucesso." }
    } catch (error: unknown) {
        return criarRespostaErro(error)
    }
}

export async function actualizarPeriodosPermitidos(input: unknown): Promise<ActionResponse> {
    try {
        const periodos = await turmaDisciplinaService.actualizarPeriodosPermitidos(
            actualizarTurmaDisciplinaPeriodosSchema.parse(input),
        )
        revalidarPeriodos()
        return { success: true, data: periodos, message: "Períodos permitidos actualizados com sucesso." }
    } catch (error: unknown) {
        return criarRespostaErro(error)
    }
}

export async function removerPeriodosPermitidos(input: unknown): Promise<ActionResponse> {
    try {
        const periodos = await turmaDisciplinaService.removerPeriodosPermitidos(
            removerTurmaDisciplinaPeriodosSchema.parse(input),
        )
        revalidarPeriodos()
        return { success: true, data: periodos, message: "Períodos permitidos removidos com sucesso." }
    } catch (error: unknown) {
        return criarRespostaErro(error)
    }
}

function revalidarPeriodos() {
    revalidatePath('/disciplinas')
    revalidatePath('/turmas')
}

function criarRespostaErro<T = never>(error: unknown): ActionResponse<T> {
    if (error instanceof z.ZodError) {
        return { success: false, errors: error.flatten().fieldErrors, message: "Erro de validação." }
    }
    return { success: false, message: getActionErrorMessage(error) }
}
