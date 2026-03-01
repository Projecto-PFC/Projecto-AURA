module.exports = [
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
        const nome = formData.get('nome');
        const classe = formData.get('classe');
        const curso = formData.get('curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTurmaSchema"].parse({
            nome,
            classe,
            curso
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
async function atualizarTurma(id, formData) {
    try {
        const nome = formData.get('nome');
        const classeRaw = formData.get('classe');
        const cursoRaw = formData.get('curso');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTurmaSchema"].parse({
            nome: nome || undefined,
            classe: classeRaw || undefined,
            curso: cursoRaw || undefined
        });
        const turma = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].atualizarTurma(id, validatedData);
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
async function apagarTurma(id) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Turma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["turmaService"].apagarTurma(id);
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
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClasseSchema"].parse({
            nome
        });
        const classe = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].criarTurma(validatedData);
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
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateClasseSchema"].parse({
            nome: nome || undefined
        });
        const classe = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].atualizarTurma(nomeClasse, validatedData);
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
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].apagarTurma(nomeClasse);
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
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Classe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classeService"].listarTodasTurmas();
}
async function criarCurso(formData) {
    try {
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCursoSchema"].parse({
            nome
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
        const nome = formData.get('nome');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Curso$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCursoSchema"].parse({
            nome: nome || undefined
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

//# sourceMappingURL=_fb013a47._.js.map