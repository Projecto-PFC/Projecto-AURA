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
"[project]/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00db6bdbce7c22fc427b5d8b953d601ee666456343":"listarTodas","4076ec6b9db0c0f9d58e5574e113199a63eb0bccb0":"criarDisciplina","409ae0d6a3e84e6d17cfbf4d9dce9e49246ea20150":"apagarDisciplina","608527f593bc860c113fe3fb1a658d07bcbc080aa2":"atualizarDisciplina","609afda8960dca11a8b6291f00f04a0f1aec077b2a":"criarDisciplinaAction"},"",""] */ __turbopack_context__.s([
    "apagarDisciplina",
    ()=>apagarDisciplina,
    "atualizarDisciplina",
    ()=>atualizarDisciplina,
    "criarDisciplina",
    ()=>criarDisciplina,
    "criarDisciplinaAction",
    ()=>criarDisciplinaAction,
    "listarTodas",
    ()=>listarTodas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Service/Disciplinas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Disciplina$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Validation/Disciplina.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function criarDisciplina(formData) {
    try {
        const nome_disciplina = formData.get('nome_disciplina');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Disciplina$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDisciplinaSchema"].parse({
            nome_disciplina
        });
        const disciplina = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].criar(validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/disciplinas');
        return {
            success: true,
            data: disciplina,
            message: 'Disciplina criada com sucesso!'
        };
    } catch (error) {
        console.error('Erro ao criar disciplina:', error);
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
async function criarDisciplinaAction(prevState, formData) {
    return await criarDisciplina(formData);
}
async function atualizarDisciplina(nomeDisciplina, formData) {
    try {
        const nome_disciplina = formData.get('nome_disciplina');
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Validation$2f$Disciplina$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDisciplinaSchema"].parse({
            nome_disciplina: nome_disciplina || undefined
        });
        const disciplina = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].atualizar(nomeDisciplina, validatedData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/disciplinas');
        return {
            success: true,
            data: disciplina,
            message: 'Disciplina atualizada com sucesso!'
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
async function apagarDisciplina(nomeDisciplina) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].apagar(nomeDisciplina);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/disciplinas');
        return {
            success: true,
            data: result,
            message: 'Disciplina apagada com sucesso!'
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro inesperado'
        };
    }
}
async function listarTodas() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Disciplinas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["disciplinaService"].listarTodas();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarDisciplina,
    criarDisciplinaAction,
    atualizarDisciplina,
    apagarDisciplina,
    listarTodas
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarDisciplina, "4076ec6b9db0c0f9d58e5574e113199a63eb0bccb0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarDisciplinaAction, "609afda8960dca11a8b6291f00f04a0f1aec077b2a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarDisciplina, "608527f593bc860c113fe3fb1a658d07bcbc080aa2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(apagarDisciplina, "409ae0d6a3e84e6d17cfbf4d9dce9e49246ea20150", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listarTodas, "00db6bdbce7c22fc427b5d8b953d601ee666456343", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/dashboard-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00074dc4e4cf8fd4ade1b6d27a3a1325d761c919de":"getDashboardStats","00bf56a29ba7ab37b7c7c3a1a12652a17b3d3276d1":"getAulasHoje"},"",""] */ __turbopack_context__.s([
    "getAulasHoje",
    ()=>getAulasHoje,
    "getDashboardStats",
    ()=>getDashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/Service/Sala.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function getDashboardStats() {
    const [professores, turmas, disciplinas, salas] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodos"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodasTurmas"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodas"])(),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$Service$2f$Sala$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["salaService"].listarTodasSalas()
    ]);
    return {
        professores: professores.length,
        turmas: turmas.length,
        disciplinas: disciplinas.length,
        salas: salas.length
    };
}
function getDiaSemanaHoje() {
    const dias = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];
    const hoje = new Date().getDay();
    return dias[hoje];
}
async function getAulasHoje() {
    const diaHoje = getDiaSemanaHoje();
    const diaSemana = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].diaSemana.findUnique({
        where: {
            nome_dia: diaHoje
        }
    });
    if (!diaSemana) {
        return [];
    }
    const aulas = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tempo_Lectivo.findMany({
        where: {
            nome_dia: diaSemana.nome_dia
        },
        include: {
            disciplina: true,
            turma: true,
            sala: true,
            professor: true,
            periodo: true,
            dia: true
        },
        orderBy: [
            {
                ordem: 'asc'
            },
            {
                nome_periodo: 'asc'
            }
        ]
    });
    return aulas.map((aula)=>({
            id: aula.id,
            periodo: aula.periodo.nome_periodo,
            subject: aula.disciplina.nome_disciplina,
            turma: aula.turma.nome_turma,
            sala: aula.sala.nome_sala,
            professor: aula.professor.nome,
            ordem: aula.ordem
        }));
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDashboardStats,
    getAulasHoje
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardStats, "00074dc4e4cf8fd4ade1b6d27a3a1325d761c919de", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAulasHoje, "00bf56a29ba7ab37b7c7c3a1a12652a17b3d3276d1", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/dashboard-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "00074dc4e4cf8fd4ade1b6d27a3a1325d761c919de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardStats"],
    "0007c41abf984e4401231dc42426837b767ea52419",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodasTurmas"],
    "00103a70930554d35b43389c505675410417498b32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarCursos"],
    "002af9c71cf431ba3510f0968d5cc5db74eecaea14",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarClasses"],
    "00bf56a29ba7ab37b7c7c3a1a12652a17b3d3276d1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAulasHoje"],
    "00c4f064aab028bdc4b6b21b478b6899440a7ffe6f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarDisciplinas"],
    "00db6bdbce7c22fc427b5d8b953d601ee666456343",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodas"],
    "00e0e4f967831fdf02516380933d2aa62e110a461e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listarTodos"],
    "40240d402a125d8ba2f32f2675728d136facc1b2bf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["showProfessor"],
    "40435ffd0c1f1c255525436efef3168695a8106230",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarTurma"],
    "405ffec04aa57c71eec67e29ea7dd7afdec02ac048",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarClasse"],
    "4076ec6b9db0c0f9d58e5574e113199a63eb0bccb0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarDisciplina"],
    "4082928136898260a95c7f4e45593c6dfabb9f5005",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarTurma"],
    "40923012fbc719b6a45bfffc7642334cd4d92b68d0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarClasse"],
    "409ae0d6a3e84e6d17cfbf4d9dce9e49246ea20150",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarDisciplina"],
    "40cf18e4ea6ff160c02c96e622c63bda3feae6c0d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarProfessor"],
    "40e4b2e16a6ab7818231fa706e5c9049ff32f63f19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessor"],
    "40f52cfe8cd163c7b3b56febd1fae9b1a917fe4653",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apagarCurso"],
    "40f6ef1945224683a1f6591f9480a39dee4220fc9e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarCurso"],
    "60270b4f8aedb04f18661ffae39e63fd50c06b9ed8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarProfessorAction"],
    "60770db2184a44e5c6913d6d41772731bea8f41f9e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarClasse"],
    "608527f593bc860c113fe3fb1a658d07bcbc080aa2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarDisciplina"],
    "6094e2a3a27e2203422df442e5cb11379f261c4391",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarCurso"],
    "609afda8960dca11a8b6291f00f04a0f1aec077b2a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarDisciplinaAction"],
    "60a24c868180d9755f3849efbcf5a2add570806058",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarTurma"],
    "60b0e52845d0cdfbf275721267942dd4a1a42dcee9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atualizarProfessor"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/app/dashboard-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/professores/professores-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/turmas/turma-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/disciplinas/disciplinas-action.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$professores$2f$professores$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$turma$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$disciplinas$2f$disciplinas$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_168daee7._.js.map