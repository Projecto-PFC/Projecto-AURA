import { describe, expect, it } from "vitest";

import { criarChaveSlot, prepararDados } from "@/lib/algoritmos/gerador-inicial/prepare-data";
import {
    ContextoVerificacaoRestricoes,
    verificarCapacidadesGlobais,
    verificarRestricoes,
} from "@/lib/algoritmos/gerador-inicial/verificador-restricoes";
import { Aula_livre, CandidatoAlocacao, Sala, Slot } from "@/lib/algoritmos/types";

const slotInicial: Slot = { id_dia: 1, id_periodo: 1, ordem: 1 };
const slotSeguinte: Slot = { id_dia: 1, id_periodo: 1, ordem: 2 };
const slotDeOutroProfessor: Slot = { id_dia: 1, id_periodo: 1, ordem: 3 };
const slotForaDaEstrutura: Slot = { id_dia: 9, id_periodo: 9, ordem: 9 };
const salasDoCenario: Sala[] = [
    { id_sala: 1, descricao_sala: "Sala 1", capacidade: 25, id_tipoSala: 1 },
    { id_sala: 2, descricao_sala: "Sala pequena", capacidade: 10, id_tipoSala: 1 },
    { id_sala: 3, descricao_sala: "Laboratório", capacidade: 25, id_tipoSala: 2 },
];

function criarChaveOcupacao(idRecurso: number, slot: Slot): string {
    return `${idRecurso}:${criarChaveSlot(slot)}`;
}

function criarCenario() {
    const dados = prepararDados({
        professores: [
            { id_professor: 1, nome_professor: "Ana", disponibilidades: [slotInicial, slotSeguinte] },
            { id_professor: 2, nome_professor: "Bia", disponibilidades: [slotDeOutroProfessor] },
        ],
        disciplinas: [{ id_disciplina: 1, nome_disciplina: "Matemática", id_tipoSala: 1 }],
        turmas: [{ id_turma: 1, descricao_turma: "10A", quantidade_alunos: 20 }],
        salas: salasDoCenario,
        periodos: [{ id_periodo: 1, descricao_periodo: "Manhã" }],
        atribuicoes: [{ id_atribuicao: 1, id_professor: 1, id_turma: 1, id_disciplina: 1 }],
        cargas_horarias: [{ id_turma: 1, id_disciplina: 1, aulas_por_semana: 1 }],
        tempos_lectivos_existentes: [],
    });
    const aula: Aula_livre = {
        id_aula: 1,
        id_atribuicao: 1,
        id_professor: 1,
        id_turma: 1,
        id_disciplina: 1,
        dominio: [],
    };
    const contexto: ContextoVerificacaoRestricoes = {
        dados,
        ocupacao_dinamica: { professores: new Set(), turmas: new Set(), salas: new Set() },
        aulas_alocadas: [],
    };

    return { aula, contexto, dados };
}

function candidato(slot: Slot = slotInicial, idSala = 1): CandidatoAlocacao {
    const sala = salasDoCenario.find((salaDoCenario) => salaDoCenario.id_sala === idSala);

    if (sala === undefined) {
        throw new Error(`Sala ${idSala} não existe no cenário de teste.`);
    }

    return { slot, sala };
}

describe("verificarRestricoes", () => {
    it("aceita uma posição válida sem modificar o estado do horário", () => {
        const { aula, contexto } = criarCenario();

        const resultado = verificarRestricoes(aula, candidato(), contexto);

        expect(resultado).toEqual({ valido: true });
        expect(contexto.aulas_alocadas).toHaveLength(0);
        expect(contexto.ocupacao_dinamica.professores.size).toBe(0);
        expect(contexto.ocupacao_dinamica.turmas.size).toBe(0);
        expect(contexto.ocupacao_dinamica.salas.size).toBe(0);
    });

    it("rejeita conflito de professor no mesmo slot (RN01)", () => {
        const { aula, contexto } = criarCenario();
        contexto.ocupacao_dinamica.professores = new Set([criarChaveOcupacao(1, slotInicial)]);

        expect(verificarRestricoes(aula, candidato(), contexto).motivo).toBe("CONFLITO_PROFESSOR");
    });

    it("rejeita conflito de sala no mesmo slot (RN02)", () => {
        const { aula, contexto } = criarCenario();
        contexto.ocupacao_dinamica.salas = new Set([criarChaveOcupacao(1, slotInicial)]);

        expect(verificarRestricoes(aula, candidato(), contexto).motivo).toBe("CONFLITO_SALA");
    });

    it("rejeita conflito de turma no mesmo slot (RN03)", () => {
        const { aula, contexto } = criarCenario();
        contexto.ocupacao_dinamica.turmas = new Set([criarChaveOcupacao(1, slotInicial)]);

        expect(verificarRestricoes(aula, candidato(), contexto).motivo).toBe("CONFLITO_TURMA");
    });

    it("rejeita professor ocupado permanentemente no mesmo slot", () => {
        const { aula, contexto, dados } = criarCenario();
        dados.ocupacao_permanente_professores.add(criarChaveOcupacao(1, slotInicial));

        expect(verificarRestricoes(aula, candidato(), contexto).motivo).toBe("CONFLITO_PROFESSOR");
    });

    it("rejeita sala ocupada permanentemente no mesmo slot", () => {
        const cenarioSala = criarCenario();
        cenarioSala.dados.ocupacao_permanente_salas.add(criarChaveOcupacao(1, slotInicial));

        expect(verificarRestricoes(cenarioSala.aula, candidato(), cenarioSala.contexto).motivo).toBe("CONFLITO_SALA");
    });

    it("rejeita turma ocupada permanentemente no mesmo slot", () => {
        const cenarioTurma = criarCenario();
        cenarioTurma.dados.ocupacao_permanente_turmas.add(criarChaveOcupacao(1, slotInicial));

        expect(verificarRestricoes(cenarioTurma.aula, candidato(), cenarioTurma.contexto).motivo).toBe("CONFLITO_TURMA");
    });

    it("rejeita uma aula que excede a carga semanal da atribuição (RN04)", () => {
        const { aula, contexto } = criarCenario();
        contexto.aulas_alocadas = [{ aula, id_sala: 1, slot: slotInicial }];

        expect(verificarRestricoes(aula, candidato(slotSeguinte), contexto).motivo).toBe("CARGA_HORARIA_EXCEDIDA");
    });

    it("rejeita slot no qual o professor não está disponível (RN05)", () => {
        const { aula, contexto } = criarCenario();

        expect(verificarRestricoes(aula, candidato(slotDeOutroProfessor), contexto).motivo).toBe("PROFESSOR_INDISPONIVEL");
    });

    it("rejeita período não permitido para a turma (RN06)", () => {
        const { aula, contexto } = criarCenario();
        contexto.opcoes = { periodos_permitidos_por_turma: new Map([[1, new Set([2])]]) };

        expect(verificarRestricoes(aula, candidato(), contexto).motivo).toBe("PERIODO_NAO_PERMITIDO");
    });

    it("rejeita a geração duplicada sem autorização de regeneração (RN07)", () => {
        const { aula, contexto, dados } = criarCenario();
        dados.turmas_com_horario.add(1);

        expect(verificarRestricoes(aula, candidato(), contexto).motivo).toBe("GERACAO_DUPLICADA");
    });

    it("rejeita turma cuja carga semanal não cabe na sua capacidade temporal (RN08)", () => {
        const { contexto, dados } = criarCenario();
        dados.atribuicoes[0].aulas_por_semana = 2;
        contexto.opcoes = { slots_letivos_por_turma: new Map([[1, [slotInicial]]]) };

        expect(verificarCapacidadesGlobais(dados, contexto.opcoes)).toMatchObject({
            motivo: "CAPACIDADE_SEMANAL_TURMA_INSUFICIENTE",
        });
    });

    it("rejeita professor com disponibilidade semanal insuficiente (RN09)", () => {
        const { contexto, dados } = criarCenario();
        dados.atribuicoes[0].aulas_por_semana = 3;

        expect(verificarCapacidadesGlobais(dados, contexto.opcoes ?? {})).toMatchObject({
            motivo: "CAPACIDADE_DISPONIBILIDADE_PROFESSOR_INSUFICIENTE",
        });
    });

    it("não executa a pré-verificação global para cada candidato", () => {
        const { aula, contexto, dados } = criarCenario();
        dados.atribuicoes[0].aulas_por_semana = 3;

        expect(verificarRestricoes(aula, candidato(), contexto)).toEqual({ valido: true });
    });

    it("rejeita slot fora da estrutura temporal da escola (RN10)", () => {
        const { aula, contexto } = criarCenario();

        expect(verificarRestricoes(aula, candidato(slotForaDaEstrutura), contexto).motivo).toBe("SLOT_LETIVO_INVALIDO");
    });

    it("rejeita sala sem capacidade suficiente", () => {
        const { aula, contexto } = criarCenario();

        expect(verificarRestricoes(aula, candidato(slotInicial, 2), contexto).motivo).toBe("SALA_SEM_CAPACIDADE");
    });

    it("rejeita sala incompatível com a disciplina", () => {
        const { aula, contexto } = criarCenario();

        expect(verificarRestricoes(aula, candidato(slotInicial, 3), contexto).motivo).toBe("SALA_INCOMPATIVEL");
    });
});
