import type { Aula_livre, CandidatoAlocacao } from "@/lib/algoritmos/types";

/**
 * Permite trocar a origem do domínio sem acoplar a ordenação ao construtor do
 * horário. Na implementação inicial, o domínio é o calculado antes da geração.
 */
export interface OpcoesOrdenacaoAulas {
    obterDominio?: (aula: Aula_livre) => readonly CandidatoAlocacao[];
}

interface EstatisticasAula {
    quantidadeCandidatos: number;
    quantidadeSalas: number;
    quantidadeSlots: number;
    quantidadeAulasProfessor: number;
    quantidadeAulasTurma: number;
}

type EstatisticasPorAula = Map<number, EstatisticasAula>;

const obterDominioInicial = (aula: Aula_livre): readonly CandidatoAlocacao[] => aula.dominio;

function criarEstatisticas(
    aulas: readonly Aula_livre[],
    obterDominio: (aula: Aula_livre) => readonly CandidatoAlocacao[],
): EstatisticasPorAula {
    const quantidadeAulasPorProfessor = new Map<number, number>();
    const quantidadeAulasPorTurma = new Map<number, number>();

    for (const aula of aulas) {
        quantidadeAulasPorProfessor.set(
            aula.id_professor,
            (quantidadeAulasPorProfessor.get(aula.id_professor) ?? 0) + 1,
        );
        quantidadeAulasPorTurma.set(
            aula.id_turma,
            (quantidadeAulasPorTurma.get(aula.id_turma) ?? 0) + 1,
        );
    }

    const estatisticasPorAula: EstatisticasPorAula = new Map();

    for (const aula of aulas) {
        const salas = new Set<number>();
        const slots = new Set<string>();
        const dominio = obterDominio(aula);

        for (const candidato of dominio) {
            salas.add(candidato.sala.id_sala);
            slots.add(
                `${candidato.slot.id_dia}:${candidato.slot.id_periodo}:${candidato.slot.ordem}`,
            );
        }

        estatisticasPorAula.set(aula.id_aula, {
            quantidadeCandidatos: dominio.length,
            quantidadeSalas: salas.size,
            quantidadeSlots: slots.size,
            quantidadeAulasProfessor: quantidadeAulasPorProfessor.get(aula.id_professor) ?? 0,
            quantidadeAulasTurma: quantidadeAulasPorTurma.get(aula.id_turma) ?? 0,
        });
    }

    return estatisticasPorAula;
}

function compararNumeroCrescente(primeiro: number, segundo: number): number {
    return primeiro - segundo;
}

function compararNumeroDecrescente(primeiro: number, segundo: number): number {
    return segundo - primeiro;
}

function compararAulas(
    primeira: Aula_livre,
    segunda: Aula_livre,
    estatisticasPorAula: EstatisticasPorAula,
): number {
    const primeiraEstatistica = estatisticasPorAula.get(primeira.id_aula);
    const segundaEstatistica = estatisticasPorAula.get(segunda.id_aula);

    if (primeiraEstatistica === undefined || segundaEstatistica === undefined) {
        throw new Error("Não foi possível calcular as estatísticas para ordenar as aulas.");
    }

    return (
        // MRV: a aula com menos posições slot + sala vem primeiro.
        compararNumeroCrescente(primeiraEstatistica.quantidadeCandidatos, segundaEstatistica.quantidadeCandidatos) ||
        // Restrições estáticas que distinguem domínios do mesmo tamanho.
        compararNumeroCrescente(primeiraEstatistica.quantidadeSalas, segundaEstatistica.quantidadeSalas) ||
        compararNumeroCrescente(primeiraEstatistica.quantidadeSlots, segundaEstatistica.quantidadeSlots) ||
        compararNumeroDecrescente(primeiraEstatistica.quantidadeAulasProfessor, segundaEstatistica.quantidadeAulasProfessor) ||
        compararNumeroDecrescente(primeiraEstatistica.quantidadeAulasTurma, segundaEstatistica.quantidadeAulasTurma) ||
        // IDs tornam o resultado repetível, inclusive quando todos os critérios empatam.
        compararNumeroCrescente(primeira.id_atribuicao, segunda.id_atribuicao) ||
        compararNumeroCrescente(primeira.id_aula, segunda.id_aula)
    );
}

/**
 * Ordena as aulas por dificuldade sem alterar a coleção recebida.
 *
 * A função é pura e aceita uma origem de domínio opcional. O construtor poderá
 * fornecer um domínio atualizado a cada iteração para evoluir para MRV dinâmico.
 */
export function ordenarAulas(
    aulas: readonly Aula_livre[],
    opcoes: OpcoesOrdenacaoAulas = {},
): Aula_livre[] {
    const obterDominio = opcoes.obterDominio ?? obterDominioInicial;
    const estatisticasPorAula = criarEstatisticas(aulas, obterDominio);

    return [...aulas].sort((primeira, segunda) =>
        compararAulas(primeira, segunda, estatisticasPorAula),
    );
}
