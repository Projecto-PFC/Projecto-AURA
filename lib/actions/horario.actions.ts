"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getActionErrorMessage } from "@/lib/errors";
import { horarioService, ResultadoOperacaoHorario } from "@/lib/Service/Horario.service";
import {
    apagarHorarioSchema,
    consultarHorarioSchema,
    consultarHorarioPorProfessorSchema,
    consultarHorarioPorSalaSchema,
    contarHorariosSchema,
    gerarHorarioSchema,
} from "@/lib/Validation/horario.validation";
export interface HorarioActionResponse<T = unknown> {
    success: boolean;
    data?: T;
    message?: string;
    errors?: Record<string, string[] | undefined>;
}

export type TempoLectivoComDetalhes = Awaited<ReturnType<typeof horarioService.listarTempos>>[number];

export async function gerarHorario(input: unknown): Promise<HorarioActionResponse<ResultadoOperacaoHorario>> {
    try {
        const dados = gerarHorarioSchema.parse(input);
        const resultado = await horarioService.gerar(dados);
        if (!resultado.sucesso) {
            const mensagem = resultado.resultado.erro?.mensagem ?? "Não foi possível gerar o horário.";
            return { success: false, data: resultado, message: mensagem };
        }
        revalidatePath("/horarios");
        return { success: true, data: resultado, message: "Horário gerado com sucesso." };
    } catch (error: unknown) {
        return criarRespostaErro(error);
    }
}

export async function listarHorario(input: unknown): Promise<HorarioActionResponse<TempoLectivoComDetalhes[]>> {
    try {
        return { success: true, data: await horarioService.listarTempos(consultarHorarioSchema.parse(input)) };
    } catch (error: unknown) {
        return criarRespostaErro(error);
    }
}

export async function listarHorarioPorProfessor(input: unknown): Promise<HorarioActionResponse<TempoLectivoComDetalhes[]>> {
    try {
        return { success: true, data: await horarioService.listarPorProfessor(consultarHorarioPorProfessorSchema.parse(input)) };
    } catch (error: unknown) {
        return criarRespostaErro(error);
    }
}

export async function listarHorarioPorSala(input: unknown): Promise<HorarioActionResponse<TempoLectivoComDetalhes[]>> {
    try {
        return { success: true, data: await horarioService.listarPorSala(consultarHorarioPorSalaSchema.parse(input)) };
    } catch (error: unknown) {
        return criarRespostaErro(error);
    }
}

export async function apagarHorario(input: unknown): Promise<HorarioActionResponse<{ apagados: number }>> {
    try {
        const resultado = await horarioService.apagar(apagarHorarioSchema.parse(input));
        revalidatePath("/horarios");
        return { success: true, data: resultado, message: "Horário eliminado com sucesso." };
    } catch (error: unknown) {
        return criarRespostaErro(error);
    }
}

export async function contarHorarios(input: unknown): Promise<HorarioActionResponse<number>> {
    try {
        return { success: true, data: await horarioService.contar(contarHorariosSchema.parse(input)) };
    } catch (error: unknown) {
        return criarRespostaErro(error);
    }
}

function criarRespostaErro<T = never>(error: unknown): HorarioActionResponse<T> {
    if (error instanceof z.ZodError) {
        return { success: false, errors: error.flatten().fieldErrors, message: "Dados de horário inválidos." };
    }
    return { success: false, message: getActionErrorMessage(error) };
}