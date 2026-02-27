import { z } from "zod";

export const createDisciplinaSchema = z.object({
    nome_disciplina: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
});

export const updateDisciplinaSchema = z.object({
    nome_disciplina: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
});

export type CreateDisciplinaData = z.infer<typeof createDisciplinaSchema>;
export type UpdateDisciplinaData = z.infer<typeof updateDisciplinaSchema>;
