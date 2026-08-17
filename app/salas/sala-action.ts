'use server'

import { salaService } from "@/lib/Service/Sala"
import { createSalaSchema, updateSalaSchema } from "@/lib/Validation/Sala"
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { prisma } from "@/lib/prisma"

export type ActionResponse<T = any> = {
    success: boolean
    data?: T | undefined
    errors?: Record<string, string[] | undefined> | undefined
    message?: string
}

export async function criarSala(formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_sala = formData.get('descricao_sala') as string
        const capacidade     = Number(formData.get('capacidade'))
        const id_tipoSala    = Number(formData.get('id_tipoSala'))

        const validatedData = createSalaSchema.parse({ descricao_sala, capacidade, id_tipoSala })
        const sala          = await salaService.criarSala(validatedData)

        revalidatePath('/salas')
        return { success: true, data: sala, message: 'Sala criada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function atualizarSala(id_sala: number, formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_sala = formData.get('descricao_sala') as string | null
        const capacidade     = formData.get('capacidade') ? Number(formData.get('capacidade')) : undefined
        const id_tipoSala    = formData.get('id_tipoSala') ? Number(formData.get('id_tipoSala')) : undefined

        const validatedData = updateSalaSchema.parse({
            descricao_sala: descricao_sala || undefined,
            capacidade,
            id_tipoSala,
        })
        const sala = await salaService.atualizarSala(id_sala, validatedData)

        revalidatePath('/salas')
        return { success: true, data: sala, message: 'Sala actualizada com sucesso!' }
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors || undefined, message: 'Erro de validação' }
        }
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function apagarSala(id_sala: number): Promise<ActionResponse> {
    try {
        const result = await salaService.apagarSala(id_sala)
        revalidatePath('/salas')
        return { success: true, data: result, message: 'Sala eliminada com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado' }
    }
}

export async function listarTodasSalas() {
    return await salaService.listarTodas()
}

// ══════════════════════════════════════════════════════════
// TIPO SALA ACTIONS
// ══════════════════════════════════════════════════════════

export async function criarTipoSala(formData: FormData): Promise<ActionResponse> {
    try {
        const descricao_tipoSala = formData.get('descricao_tipoSala') as string
        if (!descricao_tipoSala || descricao_tipoSala.trim().length === 0) {
            return { success: false, message: "Descrição do tipo de sala é obrigatória" }
        }

        const tipoSala = await prisma.tipoSala.create({
            data: {
                descricao_tipoSala: descricao_tipoSala.trim()
            }
        })

        revalidatePath('/salas')
        revalidatePath('/disciplinas')
        return { success: true, data: tipoSala, message: 'Tipo de sala criado com sucesso!' }
    } catch (error: any) {
        if (error?.code === 'P2002') {
            return { success: false, message: 'Já existe um tipo de sala com essa descrição.' }
        }
        return { success: false, message: error.message || 'Erro inesperado ao criar tipo de sala.' }
    }
}

export async function apagarTipoSala(id_tipoSala: number): Promise<ActionResponse> {
    try {
        // Verificar se existem salas ou disciplinas associadas
        const salasCount = await prisma.sala.count({ where: { id_tipoSala } })
        const disciplinasCount = await prisma.disciplina.count({ where: { id_tipoSala } })

        if (salasCount > 0 || disciplinasCount > 0) {
            return {
                success: false,
                message: `Não é possível apagar este tipo de sala porque está a ser utilizado por ${salasCount} sala(s) e ${disciplinasCount} disciplina(s).`
            }
        }

        await prisma.tipoSala.delete({
            where: { id_tipoSala }
        })

        revalidatePath('/salas')
        revalidatePath('/disciplinas')
        return { success: true, message: 'Tipo de sala apagado com sucesso!' }
    } catch (error: any) {
        return { success: false, message: error.message || 'Erro inesperado ao apagar tipo de sala.' }
    }
}

export async function listarTiposSala() {
    return await prisma.tipoSala.findMany({
        orderBy: { descricao_tipoSala: "asc" }
    })
}