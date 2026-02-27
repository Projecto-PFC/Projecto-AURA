import { prisma } from "@/lib/prisma"
import { CreateSalaData, UpdateSalaData } from "@/lib/Validation/Sala"

export class SalaCRUD {

    async criarSala(data: CreateSalaData) {
        return await prisma.sala.create({
            data: {
                nome_sala:  data.nome_sala,
                capacidade: data.capacidade  // ← estava em falta
            }
        })
    }

    async atualizarSala(nomeSala: string, data: UpdateSalaData) {
        return await prisma.sala.update({
            where: { nome_sala: nomeSala },
            data: {
                // só actualiza os campos que vieram preenchidos
                ...(data.nome_sala  && { nome_sala:  data.nome_sala }),
                ...(data.capacidade && { capacidade: data.capacidade }),
            }
        })
    }

    async showSala(nomeSala: string) {
        return await prisma.sala.findUnique({
            where: { nome_sala: nomeSala },
            include: { tempo_lectivo: true }
        })
    }

    async listarTodasSalas() {
        return await prisma.sala.findMany({
            orderBy: { nome_sala: "asc" }
        })
    }

    async apagarSala(nomeSala: string) {
        await prisma.sala.delete({
            where: { nome_sala: nomeSala }
        })
        return { message: "Sala eliminada com sucesso" }
    }
}

export const salaService = new SalaCRUD()