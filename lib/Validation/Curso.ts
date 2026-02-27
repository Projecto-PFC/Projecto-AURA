import { z } from "zod";

export const createCursoSchema = z.object({
    nome_curso: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
});

export const updateCursoSchema = z.object({
    nome_curso: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
});

export type CreateCursoData = z.infer<typeof createCursoSchema>;
export type UpdateCursoData = z.infer<typeof updateCursoSchema>;
