import { z } from "zod";

const id_Schema = z.number().int().positive();
const anoLectivoSchema = z.number().int().min(2000).max(9999);

export const idsTurmasSchema = z.array(id_Schema).min(1).transform((ids) => [...new Set(ids)]);

export const gerarHorarioSchema = z.object({
    ids_turmas: idsTurmasSchema,
    ano_lectivo: anoLectivoSchema,
    permitirRegeneracao: z.boolean().optional().default(false),
});

export const consultarHorarioSchema = z.object({
    ids_turmas: idsTurmasSchema,
    ano_lectivo: anoLectivoSchema,
});

export const consultarHorarioPorProfessorSchema = z.object({
    id_professor: id_Schema,
    ano_lectivo: anoLectivoSchema,
});

export const consultarHorarioPorSalaSchema = z.object({
    id_sala: id_Schema,
    ano_lectivo: anoLectivoSchema,
});

export const apagarHorarioSchema = consultarHorarioSchema;

export const contarHorariosSchema = z.object({
    ano_lectivo: anoLectivoSchema,
});

export type GerarHorarioInput = z.infer<typeof gerarHorarioSchema>;
export type ConsultarHorarioInput = z.infer<typeof consultarHorarioSchema>;
export type ConsultarHorarioPorProfessorInput = z.infer<typeof consultarHorarioPorProfessorSchema>;
export type ConsultarHorarioPorSalaInput = z.infer<typeof consultarHorarioPorSalaSchema>;
export type ApagarHorarioInput = z.infer<typeof apagarHorarioSchema>;
export type ContarHorariosInput = z.infer<typeof contarHorariosSchema>;