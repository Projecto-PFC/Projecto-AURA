import { describe, expect, it } from "vitest";

import { GeradorEstados } from "@/lib/algoritmos/gerador-inicial/gerador-estados";
import { filtrarCandidatosForwardChecking } from "@/lib/algoritmos/gerador-inicial/forward-checking";
import { prepararDados, DadosCarregadosGerador } from "@/lib/algoritmos/gerador-inicial/prepare-data";
import { seleccionarProximaAula } from "@/lib/algoritmos/gerador-inicial/ordenar-aulas";
import { Aula_alocada, Aula_livre, CandidatoAlocacao, Sala, Slot } from "@/lib/algoritmos/types";

const slot1: Slot = { id_dia: 1, id_periodo: 1, ordem: 1 };
const slot2: Slot = { id_dia: 1, id_periodo: 1, ordem: 2 };
const slot3: Slot = { id_dia: 2, id_periodo: 2, ordem: 1 };
const slots = [slot1, slot2, slot3];
const salas: Sala[] = [
    { id_sala: 1, descricao_sala: "Sala 1", capacidade: 30, id_tipoSala: 1 },
    { id_sala: 2, descricao_sala: "Sala 2", capacidade: 30, id_tipoSala: 1 },
];

function criarDados() {
    const dadosCarregados: DadosCarregadosGerador = {
        professores: [
            { id_professor: 1, nome_professor: "Professor A", disponibilidades: slots },
            { id_professor: 2, nome_professor: "Professor B", disponibilidades: slots },
        ],
        disciplinas: [{ id_disciplina: 1, nome_disciplina: "Matemática", id_tipoSala: 1 }],
        turmas: [
            { id_turma: 1, descricao_turma: "Turma A", quantidade_alunos: 20 },
            { id_turma: 2, descricao_turma: "Turma B", quantidade_alunos: 20 },
            { id_turma: 3, descricao_turma: "Turma C", quantidade_alunos: 20 },
        ],
        salas,
        periodos: [
            { id_periodo: 1, descricao_periodo: "Manhã" },
            { id_periodo: 2, descricao_periodo: "Tarde" },
        ],
        atribuicoes: [
            { id_atribuicao: 1, id_professor: 1, id_turma: 1, id_disciplina: 1 },
            { id_atribuicao: 2, id_professor: 2, id_turma: 2, id_disciplina: 1 },
            { id_atribuicao: 3, id_professor: 2, id_turma: 3, id_disciplina: 1 },
        ],
        cargas_horarias: [
            { id_turma: 1, id_disciplina: 1, aulas_por_semana: 1 },
            { id_turma: 2, id_disciplina: 1, aulas_por_semana: 1 },
            { id_turma: 3, id_disciplina: 1, aulas_por_semana: 1 },
        ],
        periodos_permitidos_por_turma_disciplina: [
            { id_turma: 1, id_disciplina: 1, id_periodo: 1 },
            { id_turma: 1, id_disciplina: 1, id_periodo: 2 },
            { id_turma: 2, id_disciplina: 1, id_periodo: 1 },
            { id_turma: 2, id_disciplina: 1, id_periodo: 2 },
            { id_turma: 3, id_disciplina: 1, id_periodo: 1 },
        ],
        tempos_lectivos_existentes: [],
    };

    return prepararDados(dadosCarregados);
}

function criarAula(
    dados: ReturnType<typeof criarDados>,
    id_aula: number,
    id_atribuicao: number,
    id_professor: number,
    id_turma: number,
    slotsDisponiveis = slots,
): Aula_livre {
    const sala = dados.salas_por_id.get(1);
    if (sala === undefined) {
        throw new Error("Sala de teste não encontrada.");
    }

    const dominio: CandidatoAlocacao[] = slotsDisponiveis.flatMap((slot) =>
        salas.map((salaDisponivel) => ({ slot, sala: salaDisponivel })),
    );

    return {
        id_aula,
        id_atribuicao,
        id_professor,
        id_turma,
        id_disciplina: 1,
        dominio,
    };
}

function criarAulaAlocada(aula: Aula_livre, candidato: CandidatoAlocacao): Aula_alocada {
    return {
        aula,
        id_sala: candidato.sala.id_sala,
        slot: candidato.slot,
    };
}

describe("filtrarCandidatosForwardChecking", () => {
    it("mantém um candidato que não elimina as opções das aulas pendentes", () => {
        const dados = criarDados();
        const aula = criarAula(dados, 1, 1, 1, 1, [slot1]);
        const aulaPendente = criarAula(dados, 2, 2, 2, 2, [slot1]);
        const candidato = aula.dominio[0];

        if (candidato === undefined) {
            throw new Error("A aula deveria ter candidatos.");
        }

        const resultado = filtrarCandidatosForwardChecking(
            aula,
            [candidato],
            [aula, aulaPendente],
            dados,
            new GeradorEstados(),
        );

        expect(resultado.candidatosSeguros).toEqual([candidato]);
        expect(resultado.candidatosEliminados).toEqual([]);
    });

    it("elimina um candidato que deixa uma aula pendente sem opções", () => {
        const dados = criarDados();
        const atribuicao = dados.atribuicoes.find((item) => item.id_atribuicao === 1);
        if (atribuicao === undefined) {
            throw new Error("A atribuição de teste não existe.");
        }
        atribuicao.aulas_por_semana = 2;

        const aula = criarAula(dados, 1, 1, 1, 1, [slot1]);
        const aulaPendente = criarAula(dados, 2, 1, 1, 2, [slot1]);
        const candidato = aula.dominio[0];

        if (candidato === undefined) {
            throw new Error("A aula deveria ter candidatos.");
        }

        const resultado = filtrarCandidatosForwardChecking(
            aula,
            [candidato],
            [aula, aulaPendente],
            dados,
            new GeradorEstados(),
        );

        expect(resultado.candidatosSeguros).toEqual([]);
        expect(resultado.candidatosEliminados).toMatchObject([
            {
                candidato,
                aulasSemCandidatos: [aulaPendente.id_aula],
                motivosRestricoes: ["CONFLITO_PROFESSOR"],
            },
        ]);
    });

    it("mantém apenas a alternativa segura entre candidatos Hard-válidos", () => {
        const dados = criarDados();
        const atribuicao = dados.atribuicoes.find((item) => item.id_atribuicao === 1);
        if (atribuicao === undefined) {
            throw new Error("A atribuição de teste não existe.");
        }
        atribuicao.aulas_por_semana = 2;

        const aula = criarAula(dados, 1, 1, 1, 1, [slot1, slot2]);
        const aulaPendente = criarAula(dados, 2, 1, 1, 2, [slot1]);
        const candidatoPerigoso = aula.dominio.find((candidato) => candidato.slot === slot1);
        const candidatoSeguro = aula.dominio.find((candidato) => candidato.slot === slot2);

        if (candidatoPerigoso === undefined || candidatoSeguro === undefined) {
            throw new Error("As alternativas de teste deveriam existir.");
        }

        const resultado = filtrarCandidatosForwardChecking(
            aula,
            [candidatoPerigoso, candidatoSeguro],
            [aula, aulaPendente],
            dados,
            new GeradorEstados(),
        );

        expect(resultado.candidatosSeguros).toEqual([candidatoSeguro]);
        expect(resultado.candidatosEliminados).toMatchObject([
            {
                candidato: candidatoPerigoso,
                aulasSemCandidatos: [aulaPendente.id_aula],
                motivosRestricoes: ["CONFLITO_PROFESSOR"],
            },
        ]);
    });

    it("aplica o Forward Checking aos candidatos da aula seleccionada pelo MRV", () => {
        const dados = criarDados();
        const atribuicao = dados.atribuicoes.find((item) => item.id_atribuicao === 1);
        if (atribuicao === undefined) {
            throw new Error("A atribuição de teste não existe.");
        }
        atribuicao.aulas_por_semana = 2;

        const aulaMrv = criarAula(dados, 1, 1, 1, 1, [slot1, slot2]);
        aulaMrv.dominio = aulaMrv.dominio.filter((candidato) => candidato.sala.id_sala === 1);
        const aulaPendente = criarAula(dados, 2, 1, 1, 2, [slot1]);
        const estado = new GeradorEstados();
        const selecao = seleccionarProximaAula([aulaPendente, aulaMrv], dados, estado);

        expect(selecao?.aula).toBe(aulaMrv);

        if (selecao === undefined) {
            throw new Error("O MRV deveria seleccionar uma aula.");
        }

        const resultado = filtrarCandidatosForwardChecking(
            selecao.aula,
            selecao.candidatosValidos,
            [aulaPendente, aulaMrv],
            dados,
            estado,
        );

        expect(resultado.candidatosSeguros).toHaveLength(1);
        expect(resultado.candidatosSeguros[0]?.slot).toBe(slot2);
        expect(resultado.candidatosEliminados[0]?.candidato.slot).toBe(slot1);
    });

    it("preserva alocações e índices do estado real durante a simulação", () => {
        const dados = criarDados();
        const aulaAlocada = criarAula(dados, 3, 3, 2, 3, [slot3]);
        const estado = new GeradorEstados();
        const candidatoAnterior = aulaAlocada.dominio[0];
        if (candidatoAnterior === undefined) {
            throw new Error("A aula anterior deveria ter um candidato.");
        }
        const alocacaoAnterior = criarAulaAlocada(aulaAlocada, candidatoAnterior);
        estado.adicionarAtribuicao(alocacaoAnterior);

        const aula = criarAula(dados, 1, 1, 1, 1, [slot1]);
        const aulaPendente = criarAula(dados, 2, 2, 2, 2, [slot1]);
        const candidato = aula.dominio[0];
        if (candidato === undefined) {
            throw new Error("A aula deveria ter candidatos.");
        }

        const alocacoesAntes = estado.obterAulasAlocadas();
        const indicesAntes = estado.obterIndicesOcupacao();
        const ocupacaoProfessoresAntes = [...indicesAntes.professores];
        const ocupacaoTurmasAntes = [...indicesAntes.turmas];
        const ocupacaoSalasAntes = [...indicesAntes.salas];

        filtrarCandidatosForwardChecking(
            aula,
            [candidato],
            [aula, aulaPendente],
            dados,
            estado,
        );

        expect(estado.obterAulasAlocadas()).toBe(alocacoesAntes);
        expect(estado.obterAulasAlocadas()).toEqual([alocacaoAnterior]);
        expect([...indicesAntes.professores]).toEqual(ocupacaoProfessoresAntes);
        expect([...indicesAntes.turmas]).toEqual(ocupacaoTurmasAntes);
        expect([...indicesAntes.salas]).toEqual(ocupacaoSalasAntes);
    });
});