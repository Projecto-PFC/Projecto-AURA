import { Aula_alocada, IndicesOcupacao, Slot } from "@/lib/algoritmos/types";
import { criarChaveSlot } from "@/lib/algoritmos/gerador-inicial/prepare-data";

/**
 * Mantém o estado da ocupação durante o processo de geração gulosa, permitindo
 * verificações de ocupação em O(1) e evitando percorrer todo o horário alocado.
 */
export class GeradorEstados {
    private ocupacaoProfessor: Set<string>;
    private ocupacaoTurma: Set<string>;
    private ocupacaoSala: Set<string>;
    private aulasAlocadas: Aula_alocada[];

    constructor() {
        this.ocupacaoProfessor = new Set();
        this.ocupacaoTurma = new Set();
        this.ocupacaoSala = new Set();
        this.aulasAlocadas = [];
    }

    private criarChave(idRecurso: number, slot: Slot): string {
        return `${idRecurso}:${criarChaveSlot(slot)}`;
    }

    /**
     * Regista uma nova aula alocada e atualiza os índices de ocupação associados.
     */
    public adicionarAtribuicao(aulaAlocada: Aula_alocada): void {
        const { slot, id_sala } = aulaAlocada;
        const { id_professor, id_turma } = aulaAlocada.aula;

        this.ocupacaoProfessor.add(this.criarChave(id_professor, slot));
        this.ocupacaoTurma.add(this.criarChave(id_turma, slot));
        this.ocupacaoSala.add(this.criarChave(id_sala, slot));

        this.aulasAlocadas.push(aulaAlocada);
    }

    /** Verifica de forma eficiente se um professor já possui alocação no slot indicado. */
    public professorOcupado(idProfessor: number, slot: Slot): boolean {
        return this.ocupacaoProfessor.has(this.criarChave(idProfessor, slot));
    }

    /** Verifica de forma eficiente se uma turma já possui alocação no slot indicado. */
    public turmaOcupada(idTurma: number, slot: Slot): boolean {
        return this.ocupacaoTurma.has(this.criarChave(idTurma, slot));
    }

    /** Verifica de forma eficiente se uma sala já possui alocação no slot indicado. */
    public salaOcupada(idSala: number, slot: Slot): boolean {
        return this.ocupacaoSala.has(this.criarChave(idSala, slot));
    }

    /** 
     * Devolve os conjuntos de ocupação como ReadonlySet para serem 
     * consultados pelo verificador de restrições de forma segura. 
     */
    public obterIndicesOcupacao(): IndicesOcupacao {
        return {
            professores: this.ocupacaoProfessor,
            turmas: this.ocupacaoTurma,
            salas: this.ocupacaoSala,
        };
    }

    /** Retorna a lista de todas as aulas já alocadas neste estado. */
    public obterAulasAlocadas(): readonly Aula_alocada[] {
        return this.aulasAlocadas;
    }
}
