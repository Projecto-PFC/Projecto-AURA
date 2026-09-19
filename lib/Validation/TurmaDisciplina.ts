import { z } from "zod";

export const idSchema = z.number().int().positive("O identificador deve ser positivo");

export const idsPeriodosSchema = z.array(idSchema)
    .min(1, "Deve indicar pelo menos um período")
    .refine((ids_periodos) => new Set(ids_periodos).size === ids_periodos.length, {
        message: "Não são permitidos períodos duplicados",
    });

export const createTurmaDisciplinaSchema = z.object({
    id_turma:         z.number().int().positive("Turma é obrigatória"),
    id_disciplina:    z.number().int().positive("Disciplina é obrigatória"),
    aulas_por_semana: z.number().int().positive("Aulas por semana deve ser positivo"),
    ids_periodos: idsPeriodosSchema,
});

export const updateTurmaDisciplinaSchema = z.object({
    aulas_por_semana: z.number().int().positive("Aulas por semana deve ser positivo").optional(),
});

export const consultarTurmaDisciplinaPeriodosSchema = z.object({
    id_turma: idSchema,
    id_disciplina: idSchema,
});

export const substituirTurmaDisciplinaPeriodosSchema = consultarTurmaDisciplinaPeriodosSchema.extend({
    ids_periodos: idsPeriodosSchema,
});

export const actualizarTurmaDisciplinaPeriodosSchema = substituirTurmaDisciplinaPeriodosSchema;

export const removerTurmaDisciplinaPeriodosSchema = substituirTurmaDisciplinaPeriodosSchema;

export type CreateTurmaDisciplinaData = z.infer<typeof createTurmaDisciplinaSchema>;
export type UpdateTurmaDisciplinaData = z.infer<typeof updateTurmaDisciplinaSchema>;
export type ConsultarTurmaDisciplinaPeriodosData = z.infer<typeof consultarTurmaDisciplinaPeriodosSchema>;
export type SubstituirTurmaDisciplinaPeriodosData = z.infer<typeof substituirTurmaDisciplinaPeriodosSchema>;
export type ActualizarTurmaDisciplinaPeriodosData = z.infer<typeof actualizarTurmaDisciplinaPeriodosSchema>;
export type RemoverTurmaDisciplinaPeriodosData = z.infer<typeof removerTurmaDisciplinaPeriodosSchema>;
