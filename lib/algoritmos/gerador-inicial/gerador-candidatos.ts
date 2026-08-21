import {
    Aula_livre,
    CandidatoAlocacao,
    DadosPreparadosGerador,
} from "@/lib/algoritmos/types";

/**
 * Gera o domínio inicial de posições para uma aula.
 *
 * Os índices recebidos já contêm os filtros estáticos conhecidos: a
 * disponibilidade do professor e a compatibilidade das salas. Conflitos com
 * o horário em construção devem ser avaliados posteriormente.
 *
 * Não são verificados aqui:
 * - Conflitos de professor com o horário em construção (RN01)
 * - Conflitos de sala com o horário em construção (RN02)
 * - Conflitos de turma com o horário em construção (RN03)
 * - Ocupação permanente por outras turmas já geradas
 */
export function gerarCandidatos(
    aula: Aula_livre,
    dados: DadosPreparadosGerador,
): CandidatoAlocacao[] {
    const slotsDisponiveis = dados.slots_por_professor.get(aula.id_professor) ?? [];
    const salasCompativeis = dados.salas_compativeis_por_atribuicao.get(aula.id_atribuicao) ?? [];
    const candidatos: CandidatoAlocacao[] = [];

    for (const slot of slotsDisponiveis) {
        for (const sala of salasCompativeis) {
            candidatos.push({ slot, sala });
        }
    }

    return candidatos;
}
