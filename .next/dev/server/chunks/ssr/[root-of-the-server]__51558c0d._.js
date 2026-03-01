module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dotenv/config.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const connectionString = process.env.DATABASE_URL;
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"]({
    connectionString
});
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    adapter
});
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/Service/Professores.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProfessorCRUD",
    ()=>ProfessorCRUD,
    "professorService",
    ()=>professorService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class ProfessorCRUD {
    async criarProfessor(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.create({
            data: {
                nome: data.nome,
                email: data.email,
                telefone: data.telefone,
                profDisciplinas: {
                    create: data.nomesDisciplinas.map((nome)=>({
                            nome_disciplina: nome
                        }))
                }
            },
            include: {
                profDisciplinas: {
                    include: {
                        disciplina: true
                    }
                }
            }
        });
    }
    async atualizarProfessor(id_professor, data) {
        const existente = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findUnique({
            where: {
                id_professor
            }
        });
        if (!existente) {
            throw new Error("Professor não encontrado");
        }
        // actualizar disciplinas se vieram no payload
        if (data.nomesDisciplinas) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profDisciplinas.deleteMany({
                where: {
                    professorId: id_professor
                }
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profDisciplinas.createMany({
                data: data.nomesDisciplinas.map((nome)=>({
                        professorId: id_professor,
                        nome_disciplina: nome
                    }))
            });
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.update({
            where: {
                id_professor
            },
            data: {
                ...data.nome && {
                    nome: data.nome
                },
                ...data.email && {
                    email: data.email
                },
                ...data.telefone && {
                    telefone: data.telefone
                }
            },
            include: {
                profDisciplinas: {
                    include: {
                        disciplina: true
                    }
                }
            }
        });
    }
    async showProfessor(id_professor) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findUnique({
            where: {
                id_professor
            },
            include: {
                profDisciplinas: {
                    include: {
                        disciplina: true
                    }
                },
                disponibilidades: true
            }
        });
    }
    async listarTodos() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findMany({
            orderBy: {
                nome: "asc"
            },
            select: {
                id_professor: true,
                nome: true,
                email: true,
                telefone: true,
                profDisciplinas: {
                    include: {
                        disciplina: true
                    }
                }
            }
        });
    }
    async apagarProfessor(id_professor) {
        const professor = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.findUnique({
            where: {
                id_professor
            }
        });
        if (!professor) {
            throw new Error("Professor não encontrado");
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].profDisciplinas.deleteMany({
            where: {
                professorId: id_professor
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].professor.delete({
            where: {
                id_professor
            }
        });
        return {
            message: "Professor eliminado com sucesso"
        };
    }
}
const professorService = new ProfessorCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/Validation/Professor.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProfessorSchema",
    ()=>createProfessorSchema,
    "updateProfessorSchema",
    ()=>updateProfessorSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createProfessorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome não pode exceder 100 caracteres"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email inválido").max(100, "Email não pode exceder 100 caracteres"),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>v.replace(/\D/g, "")).refine((v)=>v.length >= 8 && v.length <= 15, "Telefone inválido"),
    // no schema Prisma a ligação é feita pelo nome_disciplina (string)
    // por isso é array de strings, não de números
    nomesDisciplinas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1, "O professor deve ter pelo menos uma disciplina")
});
const updateProfessorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100).optional(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email inválido").max(100).optional(),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((v)=>v.replace(/\D/g, "")).refine((v)=>v.length >= 8 && v.length <= 15, "Telefone inválido").optional(),
    nomesDisciplinas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1, "O professor deve ter pelo menos uma disciplina").optional()
}).refine((data)=>data.nome || data.email || data.telefone || data.nomesDisciplinas, {
    message: "Informe pelo menos um campo para actualizar",
    path: [
        "nome"
    ]
});
}),
"[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00c4f064aab028bdc4b6b21b478b6899440a7ffe6f":"listarDisciplinas","00e0e4f967831fdf02516380933d2aa62e110a461e":"listarTodos","40240d402a125d8ba2f32f2675728d136facc1b2bf":"showProfessor","40cf18e4ea6ff160c02c96e622c63bda3feae6c0d2":"apagarProfessor","40e4b2e16a6ab7818231fa706e5c9049ff32f63f19":"criarProfessor","60270b4f8aedb04f18661ffae39e63fd50c06b9ed8":"criarProfessorAction","60b0e52845d0cdfbf275721267942dd4a1a42dcee9":"atualizarProfessor"},"",""] */ __turbopack_context__.s([
    "apagarProfessor",
    ()=>apagarProfessor,
    "atualizarProfessor",
    ()=>atualizarProfessor,
    "criarProfessor",
    ()=>criarProfessor,
    "criarProfessorAction",
    ()=>criarProfessorAction,
    "listarDisciplinas",
    ()=>listarDisciplinas,
    "listarTodos",
    ()=>listarTodos,
    "showProfessor",
    ()=>showProfessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Service/Professores.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Professor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Validation/Professor.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function parseDisciplinaIds(formData) {
    const raw = formData.getAll('disciplinaIds');
    return raw.map((v)=>parseInt(String(v), 10)).filter((n)=>!isNaN(n));
}
async function criarProfessor(formData) {
    try {
        // 1. Validação do formulário
        const nome = formData.get('nome');
        const email = formData.get('email');
        const disciplinaIds = parseDisciplinaIds(formData);
        const telefone = formData.get('telefone');
        const formValidation = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Professor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfessorSchema"].safeParse({
            nome,
            email,
            disciplinaIds,
            telefone
        });
        if (!formValidation.success) {
            return {
                success: false,
                errors: formValidation.error.flatten().fieldErrors,
                message: 'Erro de validação no formulário'
            };
        }
        // 3. Preparar dados para o Service
        const professorData = {
            nome,
            email,
            telefone,
            disciplinaIds
        };
        // 4. Validar pelo schema central e usar o service
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Professor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfessorSchema"].parse(professorData);
        const professor = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].criarProfessor(validatedData);
        // 5. Revalidar cache
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/professores');
        return {
            success: true,
            data: professor,
            message: 'Professor criado com sucesso!'
        };
    } catch (error) {
        console.error('Erro ao criar professor:', error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação'
            };
        }
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function criarProfessorAction(prevState, formData) {
    return await criarProfessor(formData);
}
async function atualizarProfessor(id, formData) {
    try {
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const disciplinaIds = parseDisciplinaIds(formData);
        const validateData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Professor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProfessorSchema"].parse({
            nome: nome || undefined,
            email: email || undefined,
            telefone: telefone || undefined,
            disciplinaIds: disciplinaIds.length > 0 ? disciplinaIds : undefined
        });
        const professor = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].atualizarProfessor(id, validateData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/professores');
        return {
            success: true,
            data: professor,
            message: 'Professor atualizado com sucesso'
        };
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors || undefined,
                message: 'Erro de validação'
            };
        }
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function apagarProfessor(id) {
    try {
        const professor = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].showProfessor(id);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].apagarProfessor(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/professores');
        return {
            success: true,
            data: result,
            message: 'Professor apagado com sucesso'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}
async function listarTodos() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].listarTodos();
}
async function showProfessor(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Professores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["professorService"].showProfessor(id);
    } catch (error) {
        return null;
    }
}
async function listarDisciplinas() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].disciplina.findMany({
        orderBy: {
            nome_disciplina: 'asc'
        }
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarProfessor,
    criarProfessorAction,
    atualizarProfessor,
    apagarProfessor,
    listarTodos,
    showProfessor,
    listarDisciplinas
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarProfessor, "40e4b2e16a6ab7818231fa706e5c9049ff32f63f19", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarProfessorAction, "60270b4f8aedb04f18661ffae39e63fd50c06b9ed8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarProfessor, "60b0e52845d0cdfbf275721267942dd4a1a42dcee9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarProfessor, "40cf18e4ea6ff160c02c96e622c63bda3feae6c0d2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarTodos, "00e0e4f967831fdf02516380933d2aa62e110a461e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(showProfessor, "40240d402a125d8ba2f32f2675728d136facc1b2bf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarDisciplinas, "00c4f064aab028bdc4b6b21b478b6899440a7ffe6f", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/professores/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/professores/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "00c4f064aab028bdc4b6b21b478b6899440a7ffe6f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarDisciplinas"],
    "00e0e4f967831fdf02516380933d2aa62e110a461e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodos"],
    "40240d402a125d8ba2f32f2675728d136facc1b2bf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["showProfessor"],
    "40cf18e4ea6ff160c02c96e622c63bda3feae6c0d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarProfessor"],
    "40e4b2e16a6ab7818231fa706e5c9049ff32f63f19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessor"],
    "60270b4f8aedb04f18661ffae39e63fd50c06b9ed8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessorAction"],
    "60b0e52845d0cdfbf275721267942dd4a1a42dcee9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarProfessor"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$professores$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/professores/page/actions.js { ACTIONS_MODULE0 => "[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$professores$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$professores$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__51558c0d._.js.map