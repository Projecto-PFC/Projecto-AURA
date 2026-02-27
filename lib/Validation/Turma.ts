import { z } from "zod";

export const createTurmaSchema = z.object({
    nome_turma: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    nome_classe: z.coerce.string().min(1, "Classe é obrigatória"),
    nome_curso: z.coerce.string().min(1, "Curso é obrigatório"),
});

export const updateTurmaSchema = z.object({
    nome_turma: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
    nome_classe: z.coerce.string().min(1, "Classe é obrigatória").optional(),
    nome_curso: z.coerce.string().min(1, "Curso é obrigatório").optional(),
}).refine((data) => data.nome_turma || data.nome_classe || data.nome_curso, {
    message: "Informe ao menos um campo para atualizar",
    path: ["nome_turma"],
});

export type CreateTurmaData = z.infer<typeof createTurmaSchema>;
export type UpdateTurmaData = z.infer<typeof updateTurmaSchema>;
