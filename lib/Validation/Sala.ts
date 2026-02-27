import { z } from "zod"

export const createSalaSchema = z.object({
    nome_sala:  z.string().min(1, "Nome da sala é obrigatório").max(20),
    capacidade: z.number().int().positive("Capacidade tem de ser um número positivo"),
})

export const updateSalaSchema = z.object({
    nome_sala:  z.string().min(1).max(20).optional(),
    capacidade: z.number().int().positive("Capacidade tem de ser um número positivo").optional(),
}).refine(
    (data) => data.nome_sala || data.capacidade,
    {
        message: "Informe pelo menos um campo para actualizar",
        path: ["nome_sala"]
    }
)

export type CreateSalaData  = z.infer<typeof createSalaSchema>
export type UpdateSalaData  = z.infer<typeof updateSalaSchema>