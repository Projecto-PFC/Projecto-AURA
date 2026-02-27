import { z } from "zod";

// ── CREATE ────────────────────────────────────────────────────
export const createProfessorSchema = z.object({
    nome: z.string()
        .min(3, "Nome deve ter pelo menos 3 caracteres")
        .max(100, "Nome não pode exceder 100 caracteres"),

    email: z.string()
        .email("Email inválido")
        .max(100, "Email não pode exceder 100 caracteres"),

    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido"),

    // no schema Prisma a ligação é feita pelo nome_disciplina (string)
    // por isso é array de strings, não de números
    nomesDisciplinas: z.array(
        z.string().min(1)
    ).min(1, "O professor deve ter pelo menos uma disciplina"),
})

// ── UPDATE ────────────────────────────────────────────────────
export const updateProfessorSchema = z.object({
    nome: z.string()
        .min(3, "Nome deve ter pelo menos 3 caracteres")
        .max(100)
        .optional(),

    email: z.string()
        .email("Email inválido")
        .max(100)
        .optional(),

    telefone: z.string()
        .transform((v) => v.replace(/\D/g, ""))
        .refine((v) => v.length >= 8 && v.length <= 15, "Telefone inválido")
        .optional(),

    nomesDisciplinas: z.array(
        z.string().min(1)
    ).min(1, "O professor deve ter pelo menos uma disciplina")
     .optional(),

// pelo menos um campo tem de vir preenchido num update
}).refine(
    (data) => data.nome || data.email || data.telefone || data.nomesDisciplinas,
    {
        message: "Informe pelo menos um campo para actualizar",
        path: ["nome"],
    }
)

// ── TIPOS ─────────────────────────────────────────────────────
export type CreateProfessorData = z.infer<typeof createProfessorSchema>
export type UpdateProfessorData = z.infer<typeof updateProfessorSchema>