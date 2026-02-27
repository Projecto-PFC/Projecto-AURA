import { z } from "zod";

export const createClasseSchema = z.object({
    nome_classe: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
});

export const updateClasseSchema = z.object({
    nome_classe: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
});

export type CreateClasseData = z.infer<typeof createClasseSchema>;
export type UpdateClasseData = z.infer<typeof updateClasseSchema>;
