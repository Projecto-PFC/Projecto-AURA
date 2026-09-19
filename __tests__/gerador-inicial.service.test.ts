import { beforeEach, describe, expect, it, vi } from "vitest";

const prisma_mock = vi.hoisted(() => ({
    turma: { findMany: vi.fn() },
    profTurmaDisciplina: { findMany: vi.fn() },
    turmaDisciplina: { findMany: vi.fn() },
    sala: { findMany: vi.fn() },
    periodo: { findMany: vi.fn() },
    tempo_Lectivo: { findMany: vi.fn() },
}));

vi.mock("@/lib/prisma", () => ({ prisma: prisma_mock }));

import { GeradorInicialService } from "@/lib/Service/GeradorInicial";

describe("GeradorInicialService", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        prisma_mock.turma.findMany.mockResolvedValue([
            {
                id_turma: 10,
                descricao_turma: "10A",
                quantidade_alunos: 25,
                id_sala: 1,
                id_curso: 1,
                id_classe: 1,
            },
        ]);
        prisma_mock.profTurmaDisciplina.findMany.mockResolvedValue([
            {
                id_atribuicao: 1,
                id_professor: 1,
                id_turma: 10,
                id_disciplina: 3,
                professor: {
                    id_professor: 1,
                    nome_professor: "Ana",
                    disponibilidades: [{ id_dia: 1, id_periodo: 1, ordem: 1 }],
                },
                disciplina: {
                    id_disciplina: 3,
                    descricao_disciplina: "Matemática",
                    id_tipoSala: 1,
                },
            },
        ]);
        prisma_mock.turmaDisciplina.findMany.mockResolvedValue([
            {
                id_turma: 10,
                id_disciplina: 3,
                aulas_por_semana: 2,
                turmaDisciplinaPeriodos: [
                    { periodo: { id_periodo: 1 } },
                    { periodo: { id_periodo: 2 } },
                ],
            },
        ]);
        prisma_mock.sala.findMany.mockResolvedValue([
            { id_sala: 1, descricao_sala: "Sala 1", capacidade: 30, id_tipoSala: 1 },
        ]);
        prisma_mock.periodo.findMany.mockResolvedValue([
            { id_periodo: 1, descricao_periodo: "Manhã" },
            { id_periodo: 2, descricao_periodo: "Tarde" },
        ]);
        prisma_mock.tempo_Lectivo.findMany.mockResolvedValue([]);
    });

    it("carrega os períodos permitidos pela chave composta de turma e disciplina", async () => {
        const dados = await new GeradorInicialService().carregarDadosParaGeracao([10], 2026);

        expect(dados.periodos_permitidos_por_turma_disciplina).toEqual(
            new Map([["10:3", new Set([1, 2])]]),
        );
        expect(prisma_mock.turmaDisciplina.findMany).toHaveBeenCalledWith(expect.objectContaining({
            where: { id_turma: { in: [10] } },
            select: expect.objectContaining({
                turmaDisciplinaPeriodos: {
                    select: {
                        periodo: {
                            select: { id_periodo: true },
                        },
                    },
                },
            }),
        }));
    });
});
