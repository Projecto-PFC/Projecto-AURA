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
"[project]/lib/Service/Turma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TurmaCRUD",
    ()=>TurmaCRUD,
    "turmaService",
    ()=>turmaService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class TurmaCRUD {
    async criarTurma(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.create({
            data: {
                nome_turma: data.nome_turma,
                nome_curso: data.nome_curso,
                nome_classe: data.nome_classe
            },
            include: {
                curso: true,
                classe: true
            }
        });
    }
    async atualizarTurma(nomeTurma, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.update({
            where: {
                nome_turma: nomeTurma
            },
            data: {
                // só actualiza os campos que vieram preenchidos
                ...data.nome_turma && {
                    nome_turma: data.nome_turma
                },
                ...data.nome_curso && {
                    nome_curso: data.nome_curso
                },
                ...data.nome_classe && {
                    nome_classe: data.nome_classe
                }
            },
            include: {
                curso: true,
                classe: true
            }
        });
    }
    async showTurma(nomeTurma) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.findUnique({
            where: {
                nome_turma: nomeTurma
            },
            include: {
                curso: true,
                classe: true
            }
        });
    }
    async listarTodasTurmas() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.findMany({
            orderBy: {
                nome_turma: "asc"
            },
            include: {
                curso: true,
                classe: true
            }
        });
    }
    async apagarTurma(nomeTurma) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].turma.delete({
            where: {
                nome_turma: nomeTurma
            }
        });
        return {
            message: "Turma eliminada com sucesso"
        };
    }
}
const turmaService = new TurmaCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/Service/Classe.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ClasseCRUD",
    ()=>ClasseCRUD,
    "classeService",
    ()=>classeService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class ClasseCRUD {
    async criarClasse(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.create({
            data: {
                nome_classe: data.nome_classe
            }
        });
    }
    async atualizarClasse(nomeClasse, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.update({
            where: {
                nome_classe: nomeClasse
            },
            data: {
                nome_classe: data.nome_classe
            }
        });
    }
    async showClasse(nomeClasse) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.findUnique({
            where: {
                nome_classe: nomeClasse
            }
        });
    }
    async listarTodasClasses() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.findMany({
            orderBy: {
                nome_classe: "asc"
            }
        });
    }
    async apagarClasse(nomeClasse) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].classe.delete({
            where: {
                nome_classe: nomeClasse
            }
        });
        return {
            message: "Classe eliminada com sucesso"
        };
    }
}
const classeService = new ClasseCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/Service/Curso.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CursoCRUD",
    ()=>CursoCRUD,
    "cursoService",
    ()=>cursoService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class CursoCRUD {
    async criarCurso(data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.create({
            data: {
                nome_curso: data.nome_curso
            }
        });
    }
    async atualizarCurso(nomeCurso, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.update({
            where: {
                nome_curso: nomeCurso
            },
            data: {
                nome_curso: data.nome_curso
            }
        });
    }
    async showCurso(nomeCurso) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.findUnique({
            where: {
                nome_curso: nomeCurso
            }
        });
    }
    async listarTodosCursos() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.findMany({
            orderBy: {
                nome_curso: "asc"
            }
        });
    }
    async apagarCurso(nomeCurso) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].curso.delete({
            where: {
                nome_curso: nomeCurso
            }
        });
        return {
            message: "Curso eliminado com sucesso"
        };
    }
}
const cursoService = new CursoCRUD();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/Validation/Turma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTurmaSchema",
    ()=>createTurmaSchema,
    "updateTurmaSchema",
    ()=>updateTurmaSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createTurmaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome_turma: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    nome_classe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Classe é obrigatória"),
    nome_curso: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Curso é obrigatório")
});
const updateTurmaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome_turma: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
    nome_classe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Classe é obrigatória").optional(),
    nome_curso: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.string().min(1, "Curso é obrigatório").optional()
}).refine((data)=>data.nome_turma || data.nome_classe || data.nome_curso, {
    message: "Informe ao menos um campo para atualizar",
    path: [
        "nome_turma"
    ]
});
}),
"[project]/lib/Validation/Classe.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClasseSchema",
    ()=>createClasseSchema,
    "updateClasseSchema",
    ()=>updateClasseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createClasseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome_classe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
const updateClasseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome_classe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
}),
"[project]/lib/Validation/Curso.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCursoSchema",
    ()=>createCursoSchema,
    "updateCursoSchema",
    ()=>updateCursoSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createCursoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome_curso: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
const updateCursoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nome_curso: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nome deve ter pelo menos 2 caracteres")
});
}),
"[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"0007c41abf984e4401231dc42426837b767ea52419":"listarTodasTurmas","00103a70930554d35b43389c505675410417498b32":"listarCursos","002af9c71cf431ba3510f0968d5cc5db74eecaea14":"listarClasses","40435ffd0c1f1c255525436efef3168695a8106230":"criarTurma","405ffec04aa57c71eec67e29ea7dd7afdec02ac048":"apagarClasse","4082928136898260a95c7f4e45593c6dfabb9f5005":"apagarTurma","40923012fbc719b6a45bfffc7642334cd4d92b68d0":"criarClasse","40f52cfe8cd163c7b3b56febd1fae9b1a917fe4653":"apagarCurso","40f6ef1945224683a1f6591f9480a39dee4220fc9e":"criarCurso","60770db2184a44e5c6913d6d41772731bea8f41f9e":"atualizarClasse","6094e2a3a27e2203422df442e5cb11379f261c4391":"atualizarCurso","60a24c868180d9755f3849efbcf5a2add570806058":"atualizarTurma"},"",""] */ __turbopack_context__.s([
    "apagarClasse",
    ()=>apagarClasse,
    "apagarCurso",
    ()=>apagarCurso,
    "apagarTurma",
    ()=>apagarTurma,
    "atualizarClasse",
    ()=>atualizarClasse,
    "atualizarCurso",
    ()=>atualizarCurso,
    "atualizarTurma",
    ()=>atualizarTurma,
    "criarClasse",
    ()=>criarClasse,
    "criarCurso",
    ()=>criarCurso,
    "criarTurma",
    ()=>criarTurma,
    "listarClasses",
    ()=>listarClasses,
    "listarCursos",
    ()=>listarCursos,
    "listarTodasTurmas",
    ()=>listarTodasTurmas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Service/Turma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Service/Classe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Service/Curso.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Validation/Turma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Validation/Classe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Validation/Curso.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
async function criarTurma(formData) {
    try {
        const nome_turma = formData.get('nome_turma');
        const nome_classe = formData.get('nome_classe');
        const nome_curso = formData.get('nome_curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTurmaSchema"].parse({
            nome_turma,
            nome_classe,
            nome_curso
        });
        const turma = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].criarTurma(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: turma,
            message: 'Turma criada com sucesso!'
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
async function atualizarTurma(nomeTurma, formData) {
    try {
        const nome_turma = formData.get('nome_turma');
        const nome_classe = formData.get('nome_classe');
        const nome_curso = formData.get('nome_curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTurmaSchema"].parse({
            nome_turma: nome_turma || undefined,
            nome_classe: nome_classe || undefined,
            nome_curso: nome_curso || undefined
        });
        const turma = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].atualizarTurma(nomeTurma, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: turma,
            message: 'Turma atualizada com sucesso!'
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
async function apagarTurma(nomeTurma) {
    // era id: number — o service espera string
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].apagarTurma(nomeTurma);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: result,
            message: 'Turma apagada com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarTodasTurmas() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].listarTodasTurmas();
}
async function criarClasse(formData) {
    try {
        const nome_classe = formData.get('nome_classe');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClasseSchema"].parse({
            nome_classe
        });
        const classe = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].criarClasse(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: classe,
            message: 'Classe criada com sucesso!'
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
async function atualizarClasse(nomeClasse, formData) {
    try {
        const nome_classe = formData.get('nome_classe');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateClasseSchema"].parse({
            nome_classe: nome_classe || undefined
        });
        const classe = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].atualizarClasse(nomeClasse, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: classe,
            message: 'Classe atualizada com sucesso!'
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
async function apagarClasse(nomeClasse) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].apagarClasse(nomeClasse);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: result,
            message: 'Classe apagada com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarClasses() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].listarTodasClasses();
}
async function criarCurso(formData) {
    try {
        const nome_curso = formData.get('nome_curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCursoSchema"].parse({
            nome_curso
        });
        const curso = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].criarCurso(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: curso,
            message: 'Curso criado com sucesso!'
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
async function atualizarCurso(nomeCurso, formData) {
    try {
        const nome_curso = formData.get('nome_curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCursoSchema"].parse({
            nome_curso: nome_curso || undefined
        });
        const curso = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].atualizarCurso(nomeCurso, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: curso,
            message: 'Curso atualizado com sucesso!'
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
async function apagarCurso(nomeCurso) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].apagarCurso(nomeCurso);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/turmas');
        return {
            success: true,
            data: result,
            message: 'Curso apagado com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarCursos() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cursoService"].listarTodosCursos();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarTurma,
    atualizarTurma,
    apagarTurma,
    listarTodasTurmas,
    criarClasse,
    atualizarClasse,
    apagarClasse,
    listarClasses,
    criarCurso,
    atualizarCurso,
    apagarCurso,
    listarCursos
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarTurma, "40435ffd0c1f1c255525436efef3168695a8106230", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarTurma, "60a24c868180d9755f3849efbcf5a2add570806058", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarTurma, "4082928136898260a95c7f4e45593c6dfabb9f5005", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarTodasTurmas, "0007c41abf984e4401231dc42426837b767ea52419", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarClasse, "40923012fbc719b6a45bfffc7642334cd4d92b68d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarClasse, "60770db2184a44e5c6913d6d41772731bea8f41f9e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarClasse, "405ffec04aa57c71eec67e29ea7dd7afdec02ac048", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarClasses, "002af9c71cf431ba3510f0968d5cc5db74eecaea14", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarCurso, "40f6ef1945224683a1f6591f9480a39dee4220fc9e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarCurso, "6094e2a3a27e2203422df442e5cb11379f261c4391", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarCurso, "40f52cfe8cd163c7b3b56febd1fae9b1a917fe4653", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarCursos, "00103a70930554d35b43389c505675410417498b32", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/turmas/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/turmas/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "0007c41abf984e4401231dc42426837b767ea52419",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodasTurmas"],
    "00103a70930554d35b43389c505675410417498b32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarCursos"],
    "002af9c71cf431ba3510f0968d5cc5db74eecaea14",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarClasses"],
    "40435ffd0c1f1c255525436efef3168695a8106230",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarTurma"],
    "405ffec04aa57c71eec67e29ea7dd7afdec02ac048",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarClasse"],
    "4082928136898260a95c7f4e45593c6dfabb9f5005",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarTurma"],
    "40923012fbc719b6a45bfffc7642334cd4d92b68d0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarClasse"],
    "40f52cfe8cd163c7b3b56febd1fae9b1a917fe4653",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarCurso"],
    "40f6ef1945224683a1f6591f9480a39dee4220fc9e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarCurso"],
    "60770db2184a44e5c6913d6d41772731bea8f41f9e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarClasse"],
    "6094e2a3a27e2203422df442e5cb11379f261c4391",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarCurso"],
    "60a24c868180d9755f3849efbcf5a2add570806058",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarTurma"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$turmas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/turmas/page/actions.js { ACTIONS_MODULE0 => "[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$turmas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$turmas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__66483ed8._.js.map