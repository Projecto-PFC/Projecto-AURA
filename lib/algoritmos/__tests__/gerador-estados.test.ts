import { describe, it, expect, beforeEach } from "vitest";
import { GeradorEstados } from "@/lib/algoritmos/gerador-inicial/gerador-estados";
import { Aula_alocada, Aula_livre, Slot } from "@/lib/algoritmos/types";

describe("GeradorEstados", () => {
    let geradorEstados: GeradorEstados;

    const mockSlot: Slot = {
        id_dia: 1,
        id_periodo: 1,
        ordem: 1,
    };

    const mockAulaLivre: Aula_livre = {
        id_aula: 1,
        id_atribuicao: 10,
        id_professor: 100,
        id_disciplina: 200,
        id_turma: 300,
        dominio: [],
    };

    const mockAulaAlocada: Aula_alocada = {
        aula: mockAulaLivre,
        id_sala: 400,
        slot: mockSlot,
    };

    beforeEach(() => {
        geradorEstados = new GeradorEstados();
    });

    it("deve inicializar com estruturas de ocupação vazias", () => {
        const indices = geradorEstados.obterIndicesOcupacao();
        expect(indices.professores.size).toBe(0);
        expect(indices.turmas.size).toBe(0);
        expect(indices.salas.size).toBe(0);
        expect(geradorEstados.obterAulasAlocadas()).toHaveLength(0);
    });

    it("deve adicionar uma atribuição e atualizar os índices", () => {
        geradorEstados.adicionarAtribuicao(mockAulaAlocada);

        const indices = geradorEstados.obterIndicesOcupacao();
        expect(indices.professores.size).toBe(1);
        expect(indices.turmas.size).toBe(1);
        expect(indices.salas.size).toBe(1);
        expect(geradorEstados.obterAulasAlocadas()).toHaveLength(1);
        expect(geradorEstados.obterAulasAlocadas()[0]).toBe(mockAulaAlocada);
    });

    it("deve permitir consultas eficientes de professor ocupado", () => {
        expect(geradorEstados.professorOcupado(100, mockSlot)).toBe(false);
        
        geradorEstados.adicionarAtribuicao(mockAulaAlocada);
        
        expect(geradorEstados.professorOcupado(100, mockSlot)).toBe(true);
        // Testar com outro slot
        expect(geradorEstados.professorOcupado(100, { id_dia: 2, id_periodo: 1, ordem: 1 })).toBe(false);
        // Testar com outro professor no mesmo slot
        expect(geradorEstados.professorOcupado(101, mockSlot)).toBe(false);
    });

    it("deve permitir consultas eficientes de turma ocupada", () => {
        expect(geradorEstados.turmaOcupada(300, mockSlot)).toBe(false);
        
        geradorEstados.adicionarAtribuicao(mockAulaAlocada);
        
        expect(geradorEstados.turmaOcupada(300, mockSlot)).toBe(true);
        expect(geradorEstados.turmaOcupada(300, { id_dia: 2, id_periodo: 1, ordem: 1 })).toBe(false);
        expect(geradorEstados.turmaOcupada(301, mockSlot)).toBe(false);
    });

    it("deve permitir consultas eficientes de sala ocupada", () => {
        expect(geradorEstados.salaOcupada(400, mockSlot)).toBe(false);
        
        geradorEstados.adicionarAtribuicao(mockAulaAlocada);
        
        expect(geradorEstados.salaOcupada(400, mockSlot)).toBe(true);
        expect(geradorEstados.salaOcupada(400, { id_dia: 2, id_periodo: 1, ordem: 1 })).toBe(false);
        expect(geradorEstados.salaOcupada(401, mockSlot)).toBe(false);
    });

    it("acumula múltiplas atribuições sem sobrescrever as anteriores", () => {
        const slotDois: Slot = { id_dia: 2, id_periodo: 1, ordem: 1 }

        const segundaAula: Aula_alocada = {
            aula: { ...mockAulaLivre, id_aula: 2, id_professor: 101, id_turma: 301 },
            id_sala: 401,
            slot: slotDois,
        }

        geradorEstados.adicionarAtribuicao(mockAulaAlocada)
        geradorEstados.adicionarAtribuicao(segundaAula)

        expect(geradorEstados.obterAulasAlocadas()).toHaveLength(2)
        expect(geradorEstados.professorOcupado(100, mockSlot)).toBe(true)
        expect(geradorEstados.professorOcupado(101, slotDois)).toBe(true)
        // professor da primeira aula não está no slot da segunda
        expect(geradorEstados.professorOcupado(100, slotDois)).toBe(false)
    });

    it("obterIndicesOcupacao reflecte o estado actual e é compatível com o verificador", () => {
        const indicesAntes = geradorEstados.obterIndicesOcupacao()
        expect(indicesAntes.professores.size).toBe(0)

        geradorEstados.adicionarAtribuicao(mockAulaAlocada)

        // Os índices devem reflectir o novo estado
        const indicesDepois = geradorEstados.obterIndicesOcupacao()
        expect(indicesDepois.professores.size).toBe(1)

        // .has() funciona — padrão usado pelo verificador-restricoes
        const chave = `${mockAulaLivre.id_professor}:${mockSlot.id_dia}:${mockSlot.id_periodo}:${mockSlot.ordem}`
        expect(indicesDepois.professores.has(chave)).toBe(true)
    });
});
