import { z } from "zod";

export const createDisciplinaSchema = z.object({
    descricao_disciplina: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres"),
    id_tipoSala: z.coerce.number().int().positive("Tipo de sala é obrigatório"),
});

export const updateDisciplinaSchema = z.object({
    descricao_disciplina: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres").optional(),
    id_tipoSala: z.coerce.number().int().positive("Tipo de sala é obrigatório").optional(),
});

export type CreateDisciplinaData = z.infer<typeof createDisciplinaSchema>;
export type UpdateDisciplinaData = z.infer<typeof updateDisciplinaSchema>;