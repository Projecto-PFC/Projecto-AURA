import { describe, expect, it } from "vitest";
import {
    createTurmaDisciplinaSchema,
    removerTurmaDisciplinaPeriodosSchema,
    substituirTurmaDisciplinaPeriodosSchema,
} from "@/lib/Validation/TurmaDisciplina";

describe("schemas de períodos permitidos da TurmaDisciplina", () => {
    it("exige pelo menos um período ao criar uma TurmaDisciplina", () => {
        const resultado = createTurmaDisciplinaSchema.safeParse({
            id_turma: 1,
            id_disciplina: 2,
            aulas_por_semana: 3,
            ids_periodos: [],
        });

        expect(resultado.success).toBe(false);
    });

    it("aceita uma lista não vazia e sem IDs duplicados", () => {
        const resultado = substituirTurmaDisciplinaPeriodosSchema.safeParse({
            id_turma: 1,
            id_disciplina: 2,
            ids_periodos: [1, 2],
        });

        expect(resultado.success).toBe(true);
    });

    it("rejeita uma lista vazia", () => {
        const resultado = substituirTurmaDisciplinaPeriodosSchema.safeParse({
            id_turma: 1,
            id_disciplina: 2,
            ids_periodos: [],
        });

        expect(resultado.success).toBe(false);
    });

    it("rejeita IDs de períodos duplicados", () => {
        const resultado = removerTurmaDisciplinaPeriodosSchema.safeParse({
            id_turma: 1,
            id_disciplina: 2,
            ids_periodos: [1, 1],
        });

        expect(resultado.success).toBe(false);
    });
});
