import { prisma } from "@/lib/prisma";
import { CreateSalaData, UpdateSalaData } from "@/lib/Validation/Sala";

export class SalaCRUD {
    async criarSala(data: CreateSalaData) {
        return await prisma.sala.create({ data });
    }

    async atualizarSala(id_sala: number, data: UpdateSalaData) {
        return await prisma.sala.update({
            where: { id_sala },
            data,
        });
    }

    async showSala(id_sala: number) {
        return await prisma.sala.findUnique({
            where: { id_sala },
            include: { tipoSala: true },
        });
    }

    async listarTodas() {
        return await prisma.sala.findMany({
            orderBy: { descricao_sala: "asc" },
            include: { tipoSala: true },
        });
    }

    async apagarSala(id_sala: number) {
        await prisma.sala.delete({
            where: { id_sala },
        });
        return { message: "Sala eliminada com sucesso" };
    }
}

export const salaService = new SalaCRUD();