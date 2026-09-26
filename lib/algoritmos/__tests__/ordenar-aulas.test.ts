import { describe, expect, it } from "vitest";

import { gerarHorarioInicial } from "@/lib/algoritmos/gerador-inicial/construtor-horario";
import { GeradorEstados } from "@/lib/algoritmos/gerador-inicial/gerador-estados";
import { prepararDados } from "@/lib/algoritmos/gerador-inicial/prepare-data";
import { seleccionarProximaAula } from "@/lib/algoritmos/gerador-inicial/ordenar-aulas";
import { DadosCarregadosGerador } from "@/lib/algoritmos/gerador-inicial/prepare-data";
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

describe("seleccionarProximaAula", () => {
    it("selecciona a aula com o menor domínio válido actual", () => {
        const dados = criarDados();
        const aulaRestrita = criarAula(dados, 1, 1, 1, 1, [slot1]);
        const aulaAmpla = criarAula(dados, 2, 2, 2, 2);

        const selecao = seleccionarProximaAula(
            [aulaAmpla, aulaRestrita],
            dados,
            new GeradorEstados(),
        );

        expect(selecao?.aula).toBe(aulaRestrita);
        expect(selecao?.candidatosValidos).toHaveLength(2);
    });

    it("recalcula MRV depois de uma alocação e exclui posições rejeitadas pelo verificador", () => {
        const dados = criarDados();
        const aulaA = criarAula(dados, 1, 1, 1, 1);
        const aulaB = criarAula(dados, 2, 2, 2, 2);
        const aulaAnterior = criarAula(dados, 3, 3, 2, 3, [slot1, slot2]);
        const estado = new GeradorEstados();

        const primeiraSelecao = seleccionarProximaAula(
            [aulaB, aulaA, aulaAnterior],
            dados,
            estado,
        );
        expect(primeiraSelecao?.aula).toBe(aulaAnterior);
        expect(aulaB.dominio).toHaveLength(6);

        const candidatoAnterior = primeiraSelecao?.candidatosValidos[0];
        if (primeiraSelecao === undefined || candidatoAnterior === undefined) {
            throw new Error("A aula anterior deveria ter um candidato válido.");
        }
        estado.adicionarAtribuicao(criarAulaAlocada(primeiraSelecao.aula, candidatoAnterior));

        const proximaSelecao = seleccionarProximaAula([aulaA, aulaB], dados, estado);

        expect(proximaSelecao?.aula).toBe(aulaB);
        expect(proximaSelecao?.candidatosValidos).toHaveLength(4);
        expect(proximaSelecao?.candidatosValidos.some((candidato) => candidato.slot === candidatoAnterior.slot)).toBe(false);
    });

    it("selecciona imediatamente uma aula cujo domínio válido chegou a zero", () => {
        const dados = criarDados();
        const aulaA = criarAula(dados, 1, 1, 1, 1, [slot3]);
        const aulaB = criarAula(dados, 2, 2, 2, 2, [slot1]);
        const aulaAnterior = criarAula(dados, 3, 3, 2, 3, [slot1]);
        const candidatoAnterior = aulaAnterior.dominio[0];
        const estado = new GeradorEstados();

        if (candidatoAnterior === undefined) {
            throw new Error("A aula anterior deveria ter um candidato.");
        }
        estado.adicionarAtribuicao(criarAulaAlocada(aulaAnterior, candidatoAnterior));

        const selecao = seleccionarProximaAula([aulaA, aulaB], dados, estado);

        expect(selecao?.aula).toBe(aulaB);
        expect(selecao?.candidatosValidos).toHaveLength(0);
    });

    it("mantém desempates por IDs determinísticos independentemente da ordem de entrada", () => {
        const dados = criarDados();
        const aulaA = criarAula(dados, 1, 1, 1, 1, [slot1]);
        const aulaB = criarAula(dados, 2, 2, 2, 2, [slot1]);
        const aulaComMesmoIdAtribuicao = criarAula(dados, 4, 1, 1, 1, [slot1]);
        const estado = new GeradorEstados();

        const primeiraSelecao = seleccionarProximaAula([aulaB, aulaA], dados, estado);
        const repeticao = seleccionarProximaAula([aulaB, aulaA], dados, estado);
        const desempatePorIdAula = seleccionarProximaAula(
            [aulaComMesmoIdAtribuicao, aulaA],
            dados,
            estado,
        );

        expect(primeiraSelecao?.aula).toBe(aulaA);
        expect(repeticao?.aula.id_aula).toBe(primeiraSelecao?.aula.id_aula);
        expect(desempatePorIdAula?.aula).toBe(aulaA);
    });
});

describe("gerarHorarioInicial com MRV dinâmico", () => {
    it("reavalia a próxima aula após cada alocação e mantém o resultado determinista", () => {
        const primeiroResultado = gerarHorarioInicial(criarDados());
        const segundoResultado = gerarHorarioInicial(criarDados());
        const ordemAlocacao = primeiroResultado.logs
            ?.map((log) => log.mensagem.match(/^Aula (\d+) alocada com sucesso/))
            .filter((resultado) => resultado !== null)
            .map((resultado) => Number(resultado[1]));

        expect(primeiroResultado.sucesso).toBe(true);
        expect(ordemAlocacao).toEqual([3, 2, 1]);
        expect(segundoResultado.horario?.aulas_alocadas.map((alocada) => ({
            id_aula: alocada.aula.id_aula,
            id_sala: alocada.id_sala,
            slot: alocada.slot,
        }))).toEqual(primeiroResultado.horario?.aulas_alocadas.map((alocada) => ({
            id_aula: alocada.aula.id_aula,
            id_sala: alocada.id_sala,
            slot: alocada.slot,
        })));
    });
});