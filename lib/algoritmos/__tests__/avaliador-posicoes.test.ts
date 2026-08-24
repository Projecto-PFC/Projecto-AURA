import { describe, expect, it } from "vitest";

import {
    avaliarPosicao,
    selecionarMelhorCandidato,
    selecionarMelhorCandidatoVerificado,
} from "@/lib/algoritmos/gerador-inicial/avaliador-posicoes";

import type { Aula_alocada, Aula_livre, CandidatoAlocacao, Sala, Slot } from "@/lib/algoritmos/types";

const salaPreferencial: Sala = { id_sala: 1, descricao_sala: "Sala 1", capacidade: 30, id_tipoSala: 1 };

const outraSala: Sala = { id_sala: 2, descricao_sala: "Sala 2", capacidade: 30, id_tipoSala: 1 };

const segundaPrimeiro: Slot = { id_dia: 1, id_periodo: 1, ordem: 1 };

const segundaSegundo: Slot = { id_dia: 1, id_periodo: 1, ordem: 2 };

const segundaQuarto: Slot = { id_dia: 1, id_periodo: 1, ordem: 4 };

const tercaPrimeiro: Slot = { id_dia: 2, id_periodo: 1, ordem: 1 };

const tardePrimeiro: Slot = { id_dia: 1, id_periodo: 2, ordem: 1 };

const aula: Aula_livre = {
    id_aula: 1,
    id_atribuicao: 1,
    id_professor: 1,
    id_turma: 1,
    id_disciplina: 1,
    id_SalaPreferencial: 1,
    dominio: [],
};

function candidato(slot: Slot, sala: Sala = salaPreferencial): CandidatoAlocacao {
    return { slot, sala };
}

function aulaAlocada(
    slot: Slot,
    sobrescreverAula: Partial<Aula_livre> = {},
): Aula_alocada {
    return { aula: { ...aula, ...sobrescreverAula }, id_sala: 1, slot };
}

describe("avaliarPosicao", () => {

    it("calcula as penalizações sem modificar o candidato nem as alocações", () => {

        const candidatoOriginal = candidato(segundaQuarto, outraSala);

        const aulasAlocadas = [aulaAlocada(segundaPrimeiro), aulaAlocada(segundaSegundo)];

        const resultado = avaliarPosicao(aula, candidatoOriginal, { aulas_alocadas: aulasAlocadas });

        expect(resultado).toMatchObject({
            custoTotal: 6,
            penalidades: { sc01: 2, sc02: 1, sc03: 1, sc04: 1, sc05: 1 },
        });

        expect(candidatoOriginal).toEqual(candidato(segundaQuarto, outraSala));

        expect(aulasAlocadas).toHaveLength(2);

    });

    it("favorece a sala preferencial e permite configurar o seu peso", () => {

        const contexto = { aulas_alocadas: [], pesos: { pesoSC04: 7 } };

        expect(avaliarPosicao(aula, candidato(segundaPrimeiro), contexto).custoTotal).toBe(0);

        expect(avaliarPosicao(aula, candidato(segundaPrimeiro, outraSala), contexto).custoTotal).toBe(7);

    });

    it("penaliza blocos consecutivos superiores a três tempos", () => {

        const resultado = avaliarPosicao(aula, candidato(segundaQuarto), {
            aulas_alocadas: [aulaAlocada(segundaPrimeiro), aulaAlocada(segundaSegundo), aulaAlocada({ ...segundaSegundo, ordem: 3 })],
            pesos: { pesoSC01: 0, pesoSC02: 0, pesoSC04: 0, pesoSC05: 0 },
        });

        expect(resultado.penalidades?.sc03).toBe(1);

    });

    it("penaliza a terceira ocorrência da disciplina no mesmo dia (SC05)", () => {

        const resultado = avaliarPosicao(aula, candidato(segundaQuarto), {
            aulas_alocadas: [aulaAlocada(segundaPrimeiro), aulaAlocada(segundaSegundo)],
            pesos: { pesoSC01: 0, pesoSC02: 0, pesoSC03: 0, pesoSC04: 0 },
        });

        expect(resultado.penalidades?.sc05).toBe(1);

    });

    it("SC03: não penaliza blocos em períodos distintos sem confirmação de slots letivos", () => {

        const resultado = avaliarPosicao(aula, candidato(segundaPrimeiro), {
            aulas_alocadas: [aulaAlocada(tardePrimeiro)],
            pesos: { pesoSC01: 0, pesoSC02: 0, pesoSC04: 0, pesoSC05: 0 },
        });

        expect(resultado.penalidades?.sc03).toBe(0);

    });

    it("SC03: penaliza dois blocos em períodos distintos quando ambos são letivos para a turma", () => {

        const resultado = avaliarPosicao(aula, candidato(segundaPrimeiro), {
            aulas_alocadas: [aulaAlocada(tardePrimeiro)],
            slots_letivos_por_turma: new Map([[
                1,
                [segundaPrimeiro, tardePrimeiro],
            ]]),
            pesos: { pesoSC01: 0, pesoSC02: 0, pesoSC04: 0, pesoSC05: 0 },
        });

        expect(resultado.penalidades?.sc03).toBe(1);

    });

});

describe("selecionarMelhorCandidato", () => {

    it("escolhe apenas o melhor entre os candidatos válidos recebidos", () => {

        const melhor = selecionarMelhorCandidato(
            aula,
            [candidato(segundaPrimeiro, outraSala), candidato(tercaPrimeiro)],
            { aulas_alocadas: [] },
        );

        expect(melhor).toMatchObject({ slot: tercaPrimeiro, sala: salaPreferencial, custoTotal: 0 });

    });

    it("resolve empates pela ordem estável do slot e da sala", () => {

        const melhor = selecionarMelhorCandidato(
            { ...aula, id_SalaPreferencial: null },
            [candidato(tercaPrimeiro, outraSala), candidato(segundaPrimeiro, outraSala), candidato(segundaPrimeiro, salaPreferencial)],
            { aulas_alocadas: [] },
        );

        expect(melhor).toMatchObject({ slot: segundaPrimeiro, sala: salaPreferencial });

    });

    it("não seleciona candidatos rejeitados pelo verificador", () => {

        const candidatoInvalido = candidato(segundaPrimeiro, outraSala);

        const candidatoValido = candidato(tercaPrimeiro);

        const melhor = selecionarMelhorCandidatoVerificado(
            aula,
            [
                { candidato: candidatoInvalido, valido: false },
                { candidato: candidatoValido, valido: true },
            ],
            { aulas_alocadas: [] },
        );

        expect(melhor).toMatchObject({ slot: tercaPrimeiro });

    });

    it("retorna undefined quando não existem candidatos", () => {

        const melhor = selecionarMelhorCandidato(
            aula,
            [],
            { aulas_alocadas: [] },
        );

        expect(melhor).toBeUndefined();

    });

});