import { describe, expect, it } from "vitest";
import { gerarHorarioInicial } from "@/lib/algoritmos/gerador-inicial/construtor-horario";
import { DadosCarregadosGerador, prepararDados } from "@/lib/algoritmos/gerador-inicial/prepare-data";
import { Sala, Slot, TempoLectivoExistente } from "@/lib/algoritmos/types";

const slot1: Slot = { id_dia: 1, id_periodo: 1, ordem: 1 };
const slot2: Slot = { id_dia: 1, id_periodo: 1, ordem: 2 };
const slot3: Slot = { id_dia: 2, id_periodo: 1, ordem: 1 };
const salaGrande: Sala = { id_sala: 1, descricao_sala: "Sala Grande", capacidade: 30, id_tipoSala: 1 };
const salaPequena: Sala = { id_sala: 2, descricao_sala: "Sala Pequena", capacidade: 20, id_tipoSala: 1 };

function criarDadosCarregados(substituicoes: Partial<DadosCarregadosGerador> = {}): DadosCarregadosGerador {
    return {
        professores: [{ id_professor: 1, nome_professor: "Professor A", disponibilidades: [slot1, slot2, slot3] }],
        disciplinas: [{ id_disciplina: 1, nome_disciplina: "Matemática", id_tipoSala: 1 }],
        turmas: [{ id_turma: 1, descricao_turma: "Turma 10A", quantidade_alunos: 25 }],
        salas: [salaGrande],
        periodos: [{ id_periodo: 1, descricao_periodo: "Manhã" }],
        atribuicoes: [{ id_atribuicao: 1, id_professor: 1, id_turma: 1, id_disciplina: 1 }],
        cargas_horarias: [{ id_turma: 1, id_disciplina: 1, aulas_por_semana: 1 }],
        tempos_lectivos_existentes: [],
        ...substituicoes,
    };
}

function gerar(dadosCarregados: DadosCarregadosGerador, opcoes: Parameters<typeof gerarHorarioInicial>[1] = {}) {
    return gerarHorarioInicial(prepararDados(dadosCarregados), opcoes);
}

describe("gerarHorarioInicial", () => {
    it("aloca todas as aulas e devolve o horário completo", () => {
        const resultado = gerar(criarDadosCarregados({ cargas_horarias: [{ id_turma: 1, id_disciplina: 1, aulas_por_semana: 2 }] }), {
            slots_letivos_por_turma: new Map([[1, [slot1, slot2]]]),
        });
        expect(resultado.sucesso).toBe(true);
        expect(resultado.horario?.aulas_alocadas).toHaveLength(2);
        expect(resultado.metricas).toMatchObject({ total_aulas_a_alocar: 2, total_aulas_alocadas: 2, falhas: [], custo_soft_final: 0 });
        expect(resultado.erro).toBeUndefined();
    });

    it("termina com sucesso quando não existem aulas a alocar", () => {
        const resultado = gerar(criarDadosCarregados({ atribuicoes: [], cargas_horarias: [] }));
        expect(resultado.sucesso).toBe(true);
        expect(resultado.horario?.aulas_alocadas).toEqual([]);
        expect(resultado.metricas.total_aulas_a_alocar).toBe(0);
    });

    it("falha quando a turma não tem slots letivos suficientes", () => {
        const resultado = gerar(criarDadosCarregados({ cargas_horarias: [{ id_turma: 1, id_disciplina: 1, aulas_por_semana: 3 }] }), {
            slots_letivos_por_turma: new Map([[1, [slot1, slot2]]]),
        });
        expect(resultado.sucesso).toBe(false);
        expect(resultado.erro?.codigo).toBe("CAPACIDADE_SEMANAL_TURMA_INSUFICIENTE");
        expect(resultado.metricas.falhas[0].motivo).toBe("CAPACIDADE_SEMANAL_TURMA_INSUFICIENTE");
    });

    it("falha quando a disponibilidade do professor é insuficiente", () => {
        const resultado = gerar(criarDadosCarregados({
            professores: [{ id_professor: 1, nome_professor: "Professor A", disponibilidades: [slot1] }],
            cargas_horarias: [{ id_turma: 1, id_disciplina: 1, aulas_por_semana: 2 }],
        }), { slots_letivos_por_turma: new Map([[1, [slot1, slot2]]]) });
        expect(resultado.sucesso).toBe(false);
        expect(resultado.erro?.codigo).toBe("CAPACIDADE_DISPONIBILIDADE_PROFESSOR_INSUFICIENTE");
    });

    it("falha por esgotamento de candidatos quando as salas ficam ocupadas", () => {
        const resultado = gerar(criarDadosCarregados({
            professores: [
                { id_professor: 1, nome_professor: "Professor A", disponibilidades: [slot1, slot2, slot3] },
                { id_professor: 2, nome_professor: "Professor B", disponibilidades: [slot1, slot2, slot3] },
            ],
            turmas: [
                { id_turma: 1, descricao_turma: "Turma 10A", quantidade_alunos: 25 },
                { id_turma: 2, descricao_turma: "Turma 10B", quantidade_alunos: 25 },
                { id_turma: 3, descricao_turma: "Turma 10C", quantidade_alunos: 25 },
            ],
            atribuicoes: [
                { id_atribuicao: 1, id_professor: 1, id_turma: 1, id_disciplina: 1 },
                { id_atribuicao: 2, id_professor: 2, id_turma: 2, id_disciplina: 1 },
                { id_atribuicao: 3, id_professor: 1, id_turma: 3, id_disciplina: 1 },
            ],
            cargas_horarias: [
                { id_turma: 1, id_disciplina: 1, aulas_por_semana: 2 },
                { id_turma: 2, id_disciplina: 1, aulas_por_semana: 1 },
                { id_turma: 3, id_disciplina: 1, aulas_por_semana: 1 },
            ],
        }), {
            slots_letivos_por_turma: new Map([[1, [slot1, slot2, slot3]], [2, [slot1, slot2, slot3]], [3, [slot1, slot2, slot3]]]),
        });
        expect(resultado.sucesso).toBe(false);
        expect(resultado.erro?.codigo).toBe("INVIABILIDADE_HORARIO");
        expect(resultado.metricas.total_aulas_alocadas).toBeLessThan(4);
        expect(resultado.metricas.falhas.length).toBeGreaterThanOrEqual(1);
        expect(resultado.metricas.falhas[0]).toMatchObject({ motivo: "ESGOTAMENTO_CANDIDATOS" });
        expect(resultado.metricas.falhas[0].detalhe).toContain("CONFLITO_SALA");
    });

    it("falha quando não existem salas compatíveis", () => {
        const resultado = gerar(criarDadosCarregados({ disciplinas: [{ id_disciplina: 1, nome_disciplina: "Laboratório", id_tipoSala: 2 }] }));
        expect(resultado.sucesso).toBe(false);
        expect(resultado.metricas.falhas[0].motivo).toBe("ESGOTAMENTO_CANDIDATOS");
    });

    it("respeita os períodos permitidos da turma e da disciplina", () => {
        const porTurma = gerar(criarDadosCarregados(), { periodos_permitidos_por_turma: new Map([[1, new Set([2])]]) });
        const porDisciplina = gerar(criarDadosCarregados(), { periodos_permitidos_por_disciplina: new Map([[1, new Set([2])]]) });
        expect(porTurma.metricas.falhas[0].detalhe).toContain("PERIODO_NAO_PERMITIDO");
        expect(porDisciplina.metricas.falhas[0].detalhe).toContain("PERIODO_NAO_PERMITIDO");
        expect(porTurma.sucesso).toBe(false);
        expect(porDisciplina.sucesso).toBe(false);
    });

    it("bloqueia e permite regeneração conforme a opção", () => {
        const tempo: TempoLectivoExistente = { id_professor: 1, id_turma: 1, id_sala: 1, slot: slot1 };
        const bloqueado = gerar(criarDadosCarregados({ tempos_lectivos_existentes: [tempo] }));
        const permitido = gerar(criarDadosCarregados({ tempos_lectivos_existentes: [tempo] }), { permitir_regeneracao: true });
        expect(bloqueado.metricas.falhas[0].detalhe).toContain("GERACAO_DUPLICADA");
        expect(permitido.sucesso).toBe(true);
    });

    it("respeita ocupações permanentes de professor, turma e sala", () => {
        const resultado = gerar(criarDadosCarregados({
            professores: [{ id_professor: 1, nome_professor: "Professor A", disponibilidades: [slot1] }],
            tempos_lectivos_existentes: [{ id_professor: 2, id_turma: 99, id_sala: 1, slot: slot1 }],
        }), { slots_letivos_por_turma: new Map([[1, [slot1]]]) });
        expect(resultado.sucesso).toBe(false);
        expect(resultado.metricas.falhas[0].detalhe).toContain("CONFLITO_SALA");
    });

    it("acumula o custo da sala preferencial", () => {
        const resultado = gerar(criarDadosCarregados({
            salas: [salaPequena],
            turmas: [{ id_turma: 1, descricao_turma: "Turma 10A", quantidade_alunos: 15, id_SalaPreferencial: 1 }],
        }), { pesos: { pesoSC04: 5 } });
        expect(resultado.sucesso).toBe(true);
        expect(resultado.metricas.custo_soft_final).toBe(5);
        expect(resultado.horario?.aulas_alocadas[0].id_sala).toBe(2);
    });
});
