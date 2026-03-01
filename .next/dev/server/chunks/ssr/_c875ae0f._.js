module.exports = [
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

//# sourceMappingURL=_c875ae0f._.js.map