/*
  Warnings:

  - You are about to drop the column `tipo_sala` on the `disciplinas` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_sala` on the `salas` table. All the data in the column will be lost.
  - Added the required column `id_tipoSala` to the `disciplinas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_tipoSala` to the `salas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "disciplinas" DROP COLUMN "tipo_sala",
ADD COLUMN     "id_tipoSala" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "salas" DROP COLUMN "tipo_sala",
ADD COLUMN     "id_tipoSala" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "tipo_sala" (
    "id_tipoSala" SERIAL NOT NULL,
    "descricao_tipoSala" VARCHAR(100) NOT NULL,

    CONSTRAINT "tipo_sala_pkey" PRIMARY KEY ("id_tipoSala")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_sala_descricao_tipoSala_key" ON "tipo_sala"("descricao_tipoSala");

-- AddForeignKey
ALTER TABLE "disciplinas" ADD CONSTRAINT "disciplinas_id_tipoSala_fkey" FOREIGN KEY ("id_tipoSala") REFERENCES "tipo_sala"("id_tipoSala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salas" ADD CONSTRAINT "salas_id_tipoSala_fkey" FOREIGN KEY ("id_tipoSala") REFERENCES "tipo_sala"("id_tipoSala") ON DELETE RESTRICT ON UPDATE CASCADE;
