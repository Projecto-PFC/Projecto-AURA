import { z } from "zod";

export const createSalaSchema = z.object({
    descricao_sala: z.string().min(1, "Descrição da sala é obrigatória"),
    capacidade: z.coerce.number().int().positive("Capacidade deve ser um número positivo"),
    id_tipoSala: z.coerce.number().int().positive("Tipo de sala é obrigatório"),
});

export const updateSalaSchema = z.object({
    descricao_sala: z.string().min(1, "Descrição da sala é obrigatória").optional(),
    capacidade: z.coerce.number().int().positive("Capacidade deve ser um número positivo").optional(),
    id_tipoSala: z.coerce.number().int().positive("Tipo de sala é obrigatório").optional(),
});

export type CreateSalaData = z.infer<typeof createSalaSchema>;
export type UpdateSalaData = z.infer<typeof updateSalaSchema>;