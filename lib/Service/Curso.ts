import {prisma} from '@/lib/prisma'
import {CreateCursoData, UpdateCursoData} from '@/lib/Validation/Curso'

export class CursoCRUD{
    async criarCurso(data: CreateCursoData){
        return await prisma.curso.create({
            data: { nome_curso: data.nome_curso }
        })
    }
    async atualizarCurso(nomeCurso: string, data: UpdateCursoData){
        return await prisma.curso.update({
            where: {nome_curso: nomeCurso},
            data: { nome_curso: data.nome_curso }
        })
    }
    async showCurso(nomeCurso: string){
        return await prisma.curso.findUnique({
            where: {nome_curso: nomeCurso},
        })
    }
    async listarTodosCursos(){
        return await prisma.curso.findMany({
            orderBy: {nome_curso: "asc"}
        })
    }
    async apagarCurso(nomeCurso: string){
        await prisma.curso.delete({
            where: {nome_curso: nomeCurso},
        })
        return {message: "Curso eliminado com sucesso"}
    }
}
export const cursoService = new CursoCRUD()
