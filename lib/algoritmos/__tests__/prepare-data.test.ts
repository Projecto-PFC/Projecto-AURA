import { describe, expect, it } from "vitest";

import { DadosCarregadosGerador, prepararDados } from "@/lib/algoritmos/gerador-inicial/prepare-data";

function criarDadosCarregados(
    periodos_permitidos_por_turma_disciplina: DadosCarregadosGerador["periodos_permitidos_por_turma_disciplina"],
): DadosCarregadosGerador {
    return {
        professores: [],
        disciplinas: [],
        turmas: [],
        salas: [],
        periodos: [],
        atribuicoes: [],
        cargas_horarias: [],
        periodos_permitidos_por_turma_disciplina,
        tempos_lectivos_existentes: [],
    };
}

describe("prepararDados", () => {
    it("constrói períodos permitidos determinísticos por turma e disciplina", () => {
        const dados = prepararDados(criarDadosCarregados([
            { id_turma: 2, id_disciplina: 1, id_periodo: 3 },
            { id_turma: 1, id_disciplina: 2, id_periodo: 2 },
            { id_turma: 1, id_disciplina: 2, id_periodo: 1 },
            { id_turma: 2, id_disciplina: 1, id_periodo: 1 },
            { id_turma: 1, id_disciplina: 2, id_periodo: 2 },
        ]));

        expect([...dados.periodos_permitidos_por_turma_disciplina.entries()]).toEqual([
            ["1:2", new Set([1, 2])],
            ["2:1", new Set([1, 3])],
        ]);
    });
});
