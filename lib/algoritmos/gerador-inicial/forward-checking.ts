import type {
    Aula_alocada,
    Aula_livre,
    CandidatoAlocacao,
    DadosPreparadosGerador,
} from "@/lib/algoritmos/types";
import { GeradorEstados } from "@/lib/algoritmos/gerador-inicial/gerador-estados";
import {
    ContextoVerificacaoRestricoes,
    OpcoesVerificacaoRestricoes,
    verificarRestricoes,
} from "@/lib/algoritmos/gerador-inicial/verificador-restricoes";

export interface CandidatoEliminadoForwardChecking {
    candidato: CandidatoAlocacao;
    aulasSemCandidatos: number[];
    motivosRestricoes: string[];
}

export interface ResultadoForwardChecking {
    candidatosSeguros: CandidatoAlocacao[];
    candidatosEliminados: CandidatoEliminadoForwardChecking[];
}

function criarEstadoSimulado(
    estado: GeradorEstados,
    aula: Aula_livre,
    candidato: CandidatoAlocacao,
): GeradorEstados {
    const estadoSimulado = new GeradorEstados();

    for (const aulaAlocada of estado.obterAulasAlocadas()) {
        estadoSimulado.adicionarAtribuicao(aulaAlocada);
    }

    const aulaAlocada: Aula_alocada = {
        aula,
        id_sala: candidato.sala.id_sala,
        slot: candidato.slot,
    };
    estadoSimulado.adicionarAtribuicao(aulaAlocada);

    return estadoSimulado;
}

/** Remove candidatos que deixam alguma aula pendente sem posições válidas. */
export function filtrarCandidatosForwardChecking(
    aula: Aula_livre,
    candidatosHardValidos: readonly CandidatoAlocacao[],
    aulasPendentes: readonly Aula_livre[],
    dados: DadosPreparadosGerador,
    estado: GeradorEstados,
    opcoes: OpcoesVerificacaoRestricoes = {},
): ResultadoForwardChecking {
    const candidatosSeguros: CandidatoAlocacao[] = [];
    const candidatosEliminados: CandidatoEliminadoForwardChecking[] = [];

    for (const candidato of candidatosHardValidos) {
        const estadoSimulado = criarEstadoSimulado(estado, aula, candidato);
        const contexto: ContextoVerificacaoRestricoes = {
            dados,
            ocupacao_dinamica: estadoSimulado.obterIndicesOcupacao(),
            aulas_alocadas: estadoSimulado.obterAulasAlocadas(),
            opcoes,
        };
        const aulasSemCandidatos: number[] = [];
        const motivosRestricoes = new Set<string>();

        for (const aulaPendente of aulasPendentes) {
            if (aulaPendente.id_aula === aula.id_aula) {
                continue;
            }

            let possuiCandidatoValido = false;
            const motivosAula = new Set<string>();

            for (const candidatoPendente of aulaPendente.dominio) {
                const resultado = verificarRestricoes(aulaPendente, candidatoPendente, contexto);
                if (resultado.valido) {
                    possuiCandidatoValido = true;
                    break;
                }
                if (resultado.motivo !== undefined) {
                    motivosAula.add(resultado.motivo);
                }
            }

            if (!possuiCandidatoValido) {
                aulasSemCandidatos.push(aulaPendente.id_aula);
                for (const motivo of motivosAula) {
                    motivosRestricoes.add(motivo);
                }
            }
        }

        if (aulasSemCandidatos.length === 0) {
            candidatosSeguros.push(candidato);
        } else {
            candidatosEliminados.push({
                candidato,
                aulasSemCandidatos,
                motivosRestricoes: Array.from(motivosRestricoes),
            });
        }
    }

    return { candidatosSeguros, candidatosEliminados };
}