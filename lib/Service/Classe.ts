import {prisma} from "@/lib/prisma";
import{CreateClasseData, UpdateClasseData} from "@/lib/Validation/Classe"

export class ClasseCRUD {
    async criarClasse(data: CreateClasseData){
        return await prisma.classe.create({
            data: { nome_classe: data.nome_classe }
        })
    }

    async atualizarClasse(nomeClasse: string, data: UpdateClasseData){
        return await prisma.classe.update({
            where: {nome_classe: nomeClasse},
            data:  { nome_classe: data.nome_classe }
        })
    }
    async showClasse(nomeClasse: string){
        return await prisma.classe.findUnique({
            where: {nome_classe: nomeClasse},
        })
    }
    async listarTodasClasses(){
        return await prisma.classe.findMany({
            orderBy: {nome_classe: "asc"}
        })
    }
    async apagarClasse(nomeClasse: string){
        await prisma.classe.delete({
            where: {nome_classe: nomeClasse},
        
        })
        return {message: "Classe eliminada com sucesso"}
    }
    
}
export const classeService = new ClasseCRUD();
