-- CreateTable
CREATE TABLE "turma_disciplina_periodos" (
    "id_turma" INTEGER NOT NULL,
    "id_disciplina" INTEGER NOT NULL,
    "id_periodo" INTEGER NOT NULL,

    CONSTRAINT "turma_disciplina_periodos_pkey" PRIMARY KEY ("id_turma","id_disciplina","id_periodo")
);

-- AddForeignKey
ALTER TABLE "turma_disciplina_periodos" ADD CONSTRAINT "turma_disciplina_periodos_id_turma_id_disciplina_fkey" FOREIGN KEY ("id_turma", "id_disciplina") REFERENCES "turma_disciplinas"("id_turma", "id_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma_disciplina_periodos" ADD CONSTRAINT "turma_disciplina_periodos_id_periodo_fkey" FOREIGN KEY ("id_periodo") REFERENCES "periodos"("id_periodo") ON DELETE RESTRICT ON UPDATE CASCADE;
