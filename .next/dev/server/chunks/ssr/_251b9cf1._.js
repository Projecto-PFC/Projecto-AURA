module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/app-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSidebar",
    ()=>AppSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-ssr] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const navigation = [
    {
        name: "Dashboard",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        name: "Professores",
        href: "/professores",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        name: "Turmas",
        href: "/turmas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        name: "Disciplinas",
        href: "/disciplinas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        name: "Salas",
        href: "/salas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"]
    },
    {
        name: "Tempos",
        href: "/tempos",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    },
    {
        name: "Horarios",
        href: "/horarios",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        name: "Gerar Horarios",
        href: "/gerar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        name: "Requisicoes",
        href: "/requisicoes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    }
];
function AppSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex h-screen w-64 flex-col border-r border-border bg-sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 items-center gap-2 border-b border-sidebar-border px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "h-4 w-4 text-primary-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-semibold text-sidebar-foreground",
                        children: " AURA "
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 space-y-1 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground",
                            children: "Menu Principal"
                        }, void 0, false, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    navigation.slice(0, 1).map((item)=>{
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/app-sidebar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                item.name
                            ]
                        }, item.name, true, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground",
                            children: "Gestao de Dados"
                        }, void 0, false, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    navigation.slice(1, 6).map((item)=>{
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/app-sidebar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                item.name
                            ]
                        }, item.name, true, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground",
                            children: "Horarios"
                        }, void 0, false, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    navigation.slice(6).map((item)=>{
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/app-sidebar.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                item.name
                            ]
                        }, item.name, true, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-sidebar-border p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/configuracoes",
                    className: "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        "Configuracoes"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app-sidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/app-sidebar.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/app-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppHeader",
    ()=>AppHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AppHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex h-16 items-center justify-between border-b border-border bg-card px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/app-header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            type: "search",
                            placeholder: "Pesquisar...",
                            className: "w-80 bg-muted pl-10"
                        }, void 0, false, {
                            fileName: "[project]/components/app-header.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app-header.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-header.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/components/app-header.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground",
                                children: "3"
                            }, void 0, false, {
                                fileName: "[project]/components/app-header.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app-header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "h-4 w-4 text-primary-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/app-header.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/app-header.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden text-left md:block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium",
                                                    children: "Admin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app-header.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Administrador"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app-header.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/app-header.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/app-header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/app-header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-56",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        children: "Minha Conta"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/components/app-header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: "Perfil"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-header.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: "Configuracoes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-header.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/components/app-header.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "text-destructive",
                                        children: "Sair"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app-header.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app-header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/app-header.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/app-header.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/dashboard-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app-header.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppSidebar"], {}, void 0, false, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppHeader"], {}, void 0, false, {
                        fileName: "[project]/components/dashboard-layout.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-auto p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-layout.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard-layout.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/data-table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
function DataTable({ data, columns, searchKey, searchPlaceholder = "Pesquisar...", onEdit, onDelete }) {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    const filteredData = searchKey ? data.filter((item)=>{
        const value = item[searchKey];
        if (typeof value === "string") {
            return value.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    }) : data;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            searchKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/components/data-table.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: searchPlaceholder,
                        value: search,
                        onChange: (e)=>{
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        },
                        className: "pl-10"
                    }, void 0, false, {
                        fileName: "[project]/components/data-table.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/data-table.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                className: "hover:bg-transparent",
                                children: [
                                    columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-muted-foreground",
                                            children: column.header
                                        }, String(column.key), false, {
                                            fileName: "[project]/components/data-table.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)),
                                    (onEdit || onDelete) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "w-12 text-muted-foreground",
                                        children: " Acções "
                                    }, void 0, false, {
                                        fileName: "[project]/components/data-table.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/data-table.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/data-table.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: paginatedData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    colSpan: columns.length + (onEdit || onDelete ? 1 : 0),
                                    className: "h-24 text-center text-muted-foreground",
                                    children: "Nenhum resultado encontrado."
                                }, void 0, false, {
                                    fileName: "[project]/components/data-table.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/data-table.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this) : paginatedData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "hover:bg-muted/50",
                                    children: [
                                        columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: column.render ? column.render(item) : String(item[column.key] ?? "")
                                            }, String(column.key), false, {
                                                fileName: "[project]/components/data-table.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this)),
                                        (onEdit || onDelete) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/data-table.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/data-table.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/data-table.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                        align: "end",
                                                        children: [
                                                            onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>onEdit(item),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/data-table.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Editar"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/data-table.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 29
                                                            }, this),
                                                            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>onDelete(item),
                                                                className: "text-destructive",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/data-table.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "Eliminar"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/data-table.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/data-table.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/data-table.tsx",
                                                lineNumber: 118,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/data-table.tsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/components/data-table.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/data-table.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/data-table.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/data-table.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Mostrando ",
                            startIndex + 1,
                            " a ",
                            Math.min(startIndex + itemsPerPage, filteredData.length),
                            " de",
                            " ",
                            filteredData.length,
                            " resultados"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/data-table.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                disabled: currentPage === 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/data-table.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/data-table.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: [
                                    "Pagina ",
                                    currentPage,
                                    " de ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/data-table.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: currentPage === totalPages,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/data-table.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/data-table.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/data-table.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/data-table.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/data-table.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/turmas/data:3b746b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40435ffd0c1f1c255525436efef3168695a8106230":"criarTurma"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "criarTurma",
    ()=>criarTurma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var criarTurma = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40435ffd0c1f1c255525436efef3168695a8106230", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "criarTurma"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQW9Cc0IifQ==
}),
"[project]/app/turmas/data:1d24e1 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60a24c868180d9755f3849efbcf5a2add570806058":"atualizarTurma"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "atualizarTurma",
    ()=>atualizarTurma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var atualizarTurma = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60a24c868180d9755f3849efbcf5a2add570806058", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "atualizarTurma"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQXVDc0IifQ==
}),
"[project]/app/turmas/data:abae1e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4082928136898260a95c7f4e45593c6dfabb9f5005":"apagarTurma"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "apagarTurma",
    ()=>apagarTurma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var apagarTurma = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4082928136898260a95c7f4e45593c6dfabb9f5005", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "apagarTurma"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQWtFc0IifQ==
}),
"[project]/app/turmas/data:f19ef0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40923012fbc719b6a45bfffc7642334cd4d92b68d0":"criarClasse"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "criarClasse",
    ()=>criarClasse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var criarClasse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40923012fbc719b6a45bfffc7642334cd4d92b68d0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "criarClasse"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQW1Gc0IifQ==
}),
"[project]/app/turmas/data:2559e1 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60770db2184a44e5c6913d6d41772731bea8f41f9e":"atualizarClasse"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "atualizarClasse",
    ()=>atualizarClasse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var atualizarClasse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60770db2184a44e5c6913d6d41772731bea8f41f9e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "atualizarClasse"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQW9Hc0IifQ==
}),
"[project]/app/turmas/data:6361b7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"405ffec04aa57c71eec67e29ea7dd7afdec02ac048":"apagarClasse"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "apagarClasse",
    ()=>apagarClasse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var apagarClasse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405ffec04aa57c71eec67e29ea7dd7afdec02ac048", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "apagarClasse"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQXdIc0IifQ==
}),
"[project]/app/turmas/data:53fe78 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f6ef1945224683a1f6591f9480a39dee4220fc9e":"criarCurso"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "criarCurso",
    ()=>criarCurso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var criarCurso = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40f6ef1945224683a1f6591f9480a39dee4220fc9e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "criarCurso"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQXdJc0IifQ==
}),
"[project]/app/turmas/data:93a410 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6094e2a3a27e2203422df442e5cb11379f261c4391":"atualizarCurso"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "atualizarCurso",
    ()=>atualizarCurso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var atualizarCurso = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6094e2a3a27e2203422df442e5cb11379f261c4391", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "atualizarCurso"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQXlKc0IifQ==
}),
"[project]/app/turmas/data:59dce4 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f52cfe8cd163c7b3b56febd1fae9b1a917fe4653":"apagarCurso"},"app/turmas/turma-action.ts",""] */ __turbopack_context__.s([
    "apagarCurso",
    ()=>apagarCurso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var apagarCurso = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40f52cfe8cd163c7b3b56febd1fae9b1a917fe4653", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "apagarCurso"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdHVybWEtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyB0dXJtYVNlcnZpY2UgfSBmcm9tIFwiQC9saWIvU2VydmljZS9UdXJtYVwiXG5pbXBvcnQgeyBjbGFzc2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL1NlcnZpY2UvQ2xhc3NlXCJcbmltcG9ydCB7IGN1cnNvU2VydmljZSB9IGZyb20gXCJAL2xpYi9TZXJ2aWNlL0N1cnNvXCJcbmltcG9ydCB7IGNyZWF0ZVR1cm1hU2NoZW1hLCB1cGRhdGVUdXJtYVNjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL1R1cm1hXCJcbmltcG9ydCB7IGNyZWF0ZUNsYXNzZVNjaGVtYSwgdXBkYXRlQ2xhc3NlU2NoZW1hIH0gZnJvbSBcIkAvbGliL1ZhbGlkYXRpb24vQ2xhc3NlXCJcbmltcG9ydCB7IGNyZWF0ZUN1cnNvU2NoZW1hLCB1cGRhdGVDdXJzb1NjaGVtYSB9IGZyb20gXCJAL2xpYi9WYWxpZGF0aW9uL0N1cnNvXCJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmV4cG9ydCB0eXBlIEFjdGlvblJlc3BvbnNlPFQgPSBhbnk+ID0ge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgICBkYXRhPzogVCB8IHVuZGVmaW5lZFxuICAgIGVycm9ycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZFxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuLy8g4pSA4pSAIFRVUk1BIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJUdXJtYShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IG5vbWVfY2xhc3NlID0gZm9ybURhdGEuZ2V0KCdub21lX2NsYXNzZScpIGFzIHN0cmluZ1xuICAgICAgICBjb25zdCBub21lX2N1cnNvICA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpICBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlVHVybWFTY2hlbWEucGFyc2UoeyBub21lX3R1cm1hLCBub21lX2NsYXNzZSwgbm9tZV9jdXJzbyB9KVxuICAgICAgICBjb25zdCB0dXJtYSA9IGF3YWl0IHR1cm1hU2VydmljZS5jcmlhclR1cm1hKHZhbGlkYXRlZERhdGEpXG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0dXJtYSwgbWVzc2FnZTogJ1R1cm1hIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclR1cm1hKFxuICAgIG5vbWVUdXJtYTogc3RyaW5nLCAgLy8gZXJhIGlkOiBudW1iZXIg4oCUIG8gc2VydmljZSBlc3BlcmEgc3RyaW5nXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV90dXJtYSAgPSBmb3JtRGF0YS5nZXQoJ25vbWVfdHVybWEnKSAgYXMgc3RyaW5nIHwgbnVsbFxuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmcgfCBudWxsXG4gICAgICAgIGNvbnN0IG5vbWVfY3Vyc28gID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgIGFzIHN0cmluZyB8IG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdXBkYXRlVHVybWFTY2hlbWEucGFyc2Uoe1xuICAgICAgICAgICAgbm9tZV90dXJtYTogIG5vbWVfdHVybWEgIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBub21lX2N1cnNvOiAgbm9tZV9jdXJzbyAgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHR1cm1hID0gYXdhaXQgdHVybWFTZXJ2aWNlLmF0dWFsaXphclR1cm1hKG5vbWVUdXJtYSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHR1cm1hLCBtZXNzYWdlOiAnVHVybWEgYXR1YWxpemFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwYWdhclR1cm1hKG5vbWVUdXJtYTogc3RyaW5nKTogUHJvbWlzZTxBY3Rpb25SZXNwb25zZT4ge1xuICAgIC8vIGVyYSBpZDogbnVtYmVyIOKAlCBvIHNlcnZpY2UgZXNwZXJhIHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR1cm1hU2VydmljZS5hcGFnYXJUdXJtYShub21lVHVybWEpXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBtZXNzYWdlOiAnVHVybWEgYXBhZ2FkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0YXJUb2Rhc1R1cm1hcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdHVybWFTZXJ2aWNlLmxpc3RhclRvZGFzVHVybWFzKClcbn1cblxuLy8g4pSA4pSAIENMQVNTRSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyQ2xhc3NlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2NsYXNzZSA9IGZvcm1EYXRhLmdldCgnbm9tZV9jbGFzc2UnKSBhcyBzdHJpbmdcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gY3JlYXRlQ2xhc3NlU2NoZW1hLnBhcnNlKHsgbm9tZV9jbGFzc2UgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5jcmlhckNsYXNzZSh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhc3NlLCBtZXNzYWdlOiAnQ2xhc3NlIGNyaWFkYSBjb20gc3VjZXNzbyEnIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyB8fCB1bmRlZmluZWQsIG1lc3NhZ2U6ICdFcnJvIGRlIHZhbGlkYcOnw6NvJyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphckNsYXNzZShcbiAgICBub21lQ2xhc3NlOiBzdHJpbmcsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jbGFzc2UgPSBmb3JtRGF0YS5nZXQoJ25vbWVfY2xhc3NlJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUNsYXNzZVNjaGVtYS5wYXJzZSh7IG5vbWVfY2xhc3NlOiBub21lX2NsYXNzZSB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY2xhc3NlID0gYXdhaXQgY2xhc3NlU2VydmljZS5hdHVhbGl6YXJDbGFzc2Uobm9tZUNsYXNzZSwgdmFsaWRhdGVkRGF0YSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsYXNzZSwgbWVzc2FnZTogJ0NsYXNzZSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ2xhc3NlKG5vbWVDbGFzc2U6IHN0cmluZyk6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGFzc2VTZXJ2aWNlLmFwYWdhckNsYXNzZShub21lQ2xhc3NlKVxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3R1cm1hcycpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgbWVzc2FnZTogJ0NsYXNzZSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsYXNzZVNlcnZpY2UubGlzdGFyVG9kYXNDbGFzc2VzKClcbn1cblxuLy8g4pSA4pSAIENVUlNPIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JpYXJDdXJzbyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9tZV9jdXJzbyA9IGZvcm1EYXRhLmdldCgnbm9tZV9jdXJzbycpIGFzIHN0cmluZ1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBjcmVhdGVDdXJzb1NjaGVtYS5wYXJzZSh7IG5vbWVfY3Vyc28gfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuY3JpYXJDdXJzbyh2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBjcmlhZG8gY29tIHN1Y2Vzc28hJyB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMgfHwgdW5kZWZpbmVkLCBtZXNzYWdlOiAnRXJybyBkZSB2YWxpZGHDp8OjbycgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdFcnJvIGluZXNwZXJhZG8nIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJDdXJzbyhcbiAgICBub21lQ3Vyc286IHN0cmluZyxcbiAgICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QWN0aW9uUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBub21lX2N1cnNvID0gZm9ybURhdGEuZ2V0KCdub21lX2N1cnNvJykgYXMgc3RyaW5nXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHVwZGF0ZUN1cnNvU2NoZW1hLnBhcnNlKHsgbm9tZV9jdXJzbzogbm9tZV9jdXJzbyB8fCB1bmRlZmluZWQgfSlcbiAgICAgICAgY29uc3QgY3Vyc28gPSBhd2FpdCBjdXJzb1NlcnZpY2UuYXR1YWxpemFyQ3Vyc28obm9tZUN1cnNvLCB2YWxpZGF0ZWREYXRhKVxuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvdHVybWFzJylcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3Vyc28sIG1lc3NhZ2U6ICdDdXJzbyBhdHVhbGl6YWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yczogZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzIHx8IHVuZGVmaW5lZCwgbWVzc2FnZTogJ0Vycm8gZGUgdmFsaWRhw6fDo28nIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRXJybyBpbmVzcGVyYWRvJyB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBhZ2FyQ3Vyc28obm9tZUN1cnNvOiBzdHJpbmcpOiBQcm9taXNlPEFjdGlvblJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3Vyc29TZXJ2aWNlLmFwYWdhckN1cnNvKG5vbWVDdXJzbylcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy90dXJtYXMnKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIG1lc3NhZ2U6ICdDdXJzbyBhcGFnYWRvIGNvbSBzdWNlc3NvIScgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm8gaW5lc3BlcmFkbycgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RhckN1cnNvcygpIHtcbiAgICByZXR1cm4gYXdhaXQgY3Vyc29TZXJ2aWNlLmxpc3RhclRvZG9zQ3Vyc29zKClcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQTZLc0IifQ==
}),
"[project]/components/turmas-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TurmasContent",
    ()=>TurmasContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-ssr] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$3b746b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:3b746b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$1d24e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:1d24e1 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$abae1e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:abae1e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$f19ef0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:f19ef0 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$2559e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:2559e1 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$6361b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:6361b7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$53fe78__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:53fe78 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$93a410__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:93a410 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$59dce4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/turmas/data:59dce4 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
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
function TurmasContent({ turmas, classes, cursos }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("turmas");
    // --- Turma state ---
    const [turmaOpen, setTurmaOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTurma, setEditingTurma] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [turmaForm, setTurmaForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nome_turma: "",
        nome_classe: "",
        nome_curso: ""
    });
    // --- Classe state ---
    const [classeOpen, setClasseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingClasse, setEditingClasse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [classeForm, setClasseForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nome_classe: ""
    });
    // --- Curso state ---
    const [cursoOpen, setCursoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCurso, setEditingCurso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cursoForm, setCursoForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nome_curso: ""
    });
    // ==================== Mapped rows ====================
    const turmaRows = turmas.map((t)=>({
            ...t,
            id: t.nome_turma
        }));
    const classeRows = classes.map((c)=>({
            ...c,
            id: c.nome_classe
        }));
    const cursoRows = cursos.map((c)=>({
            ...c,
            id: c.nome_curso
        }));
    // ==================== Colunas ====================
    const turmaColumns = [
        {
            key: "nome_turma",
            header: "Turma"
        },
        {
            key: "nome_classe",
            header: "Classe"
        },
        {
            key: "nome_curso",
            header: "Curso"
        }
    ];
    const classeColumns = [
        {
            key: "nome_classe",
            header: "Nome"
        }
    ];
    const cursoColumns = [
        {
            key: "nome_curso",
            header: "Nome"
        }
    ];
    // ==================== Turma helpers ====================
    const gerarNomeTurma = (classe, curso)=>{
        if (classe && curso) return `${classe} - ${curso}`;
        if (classe) return classe;
        if (curso) return curso;
        return "";
    };
    // ==================== Turma handlers ====================
    const handleTurmaSubmit = (e)=>{
        e.preventDefault();
        setError(null);
        const fd = new FormData();
        fd.append("nome_turma", turmaForm.nome_turma);
        fd.append("nome_classe", turmaForm.nome_classe);
        fd.append("nome_curso", turmaForm.nome_curso);
        startTransition(async ()=>{
            const result = editingTurma ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$1d24e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["atualizarTurma"])(editingTurma.nome_turma, fd) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$3b746b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["criarTurma"])(fd);
            if (result.success) {
                resetTurmaForm();
                router.refresh();
            } else {
                setError(result.message || "Erro inesperado");
            }
        });
    };
    const resetTurmaForm = ()=>{
        setTurmaForm({
            nome_turma: "",
            nome_classe: "",
            nome_curso: ""
        });
        setEditingTurma(null);
        setError(null);
        setTurmaOpen(false);
    };
    const handleTurmaEdit = (turma)=>{
        setEditingTurma(turma);
        setTurmaForm({
            nome_turma: turma.nome_turma,
            nome_classe: turma.nome_classe,
            nome_curso: turma.nome_curso
        });
        setError(null);
        setTurmaOpen(true);
    };
    const handleTurmaDelete = (turma)=>{
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$abae1e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["apagarTurma"])(turma.nome_turma);
            if (result.success) router.refresh();
            else setError(result.message || "Erro ao apagar turma");
        });
    };
    // ==================== Classe handlers ====================
    const handleClasseSubmit = (e)=>{
        e.preventDefault();
        setError(null);
        const fd = new FormData();
        fd.append("nome_classe", classeForm.nome_classe);
        startTransition(async ()=>{
            const result = editingClasse ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$2559e1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["atualizarClasse"])(editingClasse.nome_classe, fd) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$f19ef0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["criarClasse"])(fd);
            if (result.success) {
                resetClasseForm();
                router.refresh();
            } else {
                setError(result.message || "Erro inesperado");
            }
        });
    };
    const resetClasseForm = ()=>{
        setClasseForm({
            nome_classe: ""
        });
        setEditingClasse(null);
        setError(null);
        setClasseOpen(false);
    };
    const handleClasseEdit = (classe)=>{
        setEditingClasse(classe);
        setClasseForm({
            nome_classe: classe.nome_classe
        });
        setError(null);
        setClasseOpen(true);
    };
    const handleClasseDelete = (classe)=>{
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$6361b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["apagarClasse"])(classe.nome_classe);
            if (result.success) router.refresh();
            else setError(result.message || "Erro ao apagar classe");
        });
    };
    // ==================== Curso handlers ====================
    const handleCursoSubmit = (e)=>{
        e.preventDefault();
        setError(null);
        const fd = new FormData();
        fd.append("nome_curso", cursoForm.nome_curso);
        startTransition(async ()=>{
            const result = editingCurso ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$93a410__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["atualizarCurso"])(editingCurso.nome_curso, fd) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$53fe78__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["criarCurso"])(fd);
            if (result.success) {
                resetCursoForm();
                router.refresh();
            } else {
                setError(result.message || "Erro inesperado");
            }
        });
    };
    const resetCursoForm = ()=>{
        setCursoForm({
            nome_curso: ""
        });
        setEditingCurso(null);
        setError(null);
        setCursoOpen(false);
    };
    const handleCursoEdit = (curso)=>{
        setEditingCurso(curso);
        setCursoForm({
            nome_curso: curso.nome_curso
        });
        setError(null);
        setCursoOpen(true);
    };
    const handleCursoDelete = (curso)=>{
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$turmas$2f$data$3a$59dce4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["apagarCurso"])(curso.nome_curso);
            if (result.success) router.refresh();
            else setError(result.message || "Erro ao apagar curso");
        });
    };
    // ==================== Render ====================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold tracking-tight",
                        children: "Turmas"
                    }, void 0, false, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Gerir turmas, classes e cursos do sistema"
                    }, void 0, false, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/turmas-content.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("turmas"),
                        className: "text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "cursor-pointer transition-all hover:border-primary hover:shadow-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-muted-foreground",
                                                        children: "Turmas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: turmaRows.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                    className: "h-6 w-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/turmas-content.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center gap-1 text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Ver turmas"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 262,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/turmas-content.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("classes"),
                        className: "text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "cursor-pointer transition-all hover:border-blue-500 hover:shadow-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-muted-foreground",
                                                        children: "Classes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: classeRows.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    className: "h-6 w-6 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/turmas-content.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center gap-1 text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Ver classes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 281,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/turmas-content.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("cursos"),
                        className: "text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "cursor-pointer transition-all hover:border-green-500 hover:shadow-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-muted-foreground",
                                                        children: "Cursos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: cursoRows.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {
                                                    className: "h-6 w-6 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/turmas-content.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center gap-1 text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Ver cursos"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 300,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/turmas-content.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/turmas-content.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-destructive bg-destructive/10 rounded-md p-3",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/turmas-content.tsx",
                lineNumber: 308,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                value: activeTab,
                onValueChange: setActiveTab,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "turmas",
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold",
                                                children: "Lista de Turmas"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: turmaRows.length === 0 ? "Nenhuma turma criada ainda" : `${turmaRows.length} turma${turmaRows.length !== 1 ? "s" : ""} registada${turmaRows.length !== 1 ? "s" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                                        open: turmaOpen,
                                        onOpenChange: setTurmaOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "gap-2",
                                                    onClick: ()=>resetTurmaForm(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/turmas-content.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Nova Turma"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/turmas-content.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                children: editingTurma ? "Editar Turma" : "Nova Turma"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                children: editingTurma ? "Atualize os dados da turma" : "Preencha os dados para criar uma nova turma"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleTurmaSubmit,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid gap-4 py-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-2 gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            "Classe",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs text-muted-foreground font-normal",
                                                                                                children: "(obrigatório)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                                lineNumber: 344,
                                                                                                columnNumber: 27
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                        lineNumber: 342,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-2 rounded-md border-2 border-border bg-muted/30 p-4 max-h-48 overflow-y-auto",
                                                                                        children: classes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-center py-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-sm text-muted-foreground mb-2",
                                                                                                    children: "Nenhuma classe criada"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/turmas-content.tsx",
                                                                                                    lineNumber: 349,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs text-muted-foreground",
                                                                                                    children: 'Crie uma classe na aba "Classes" primeiro'
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/turmas-content.tsx",
                                                                                                    lineNumber: 350,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/turmas-content.tsx",
                                                                                            lineNumber: 348,
                                                                                            columnNumber: 29
                                                                                        }, this) : classes.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: `flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${turmaForm.nome_classe === c.nome_classe ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"}`,
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                                        checked: turmaForm.nome_classe === c.nome_classe,
                                                                                                        onCheckedChange: (checked)=>{
                                                                                                            if (checked) {
                                                                                                                const newForm = {
                                                                                                                    ...turmaForm,
                                                                                                                    nome_classe: c.nome_classe
                                                                                                                };
                                                                                                                newForm.nome_turma = gerarNomeTurma(newForm.nome_classe, turmaForm.nome_curso);
                                                                                                                setTurmaForm(newForm);
                                                                                                            }
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                                        lineNumber: 362,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-sm font-medium flex-1",
                                                                                                        children: c.nome_classe
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                                        lineNumber: 372,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, c.nome_classe, true, {
                                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                                lineNumber: 354,
                                                                                                columnNumber: 31
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                        lineNumber: 346,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                lineNumber: 341,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            "Curso",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs text-muted-foreground font-normal",
                                                                                                children: "(obrigatório)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                                lineNumber: 383,
                                                                                                columnNumber: 27
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                        lineNumber: 381,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-2 rounded-md border-2 border-border bg-muted/30 p-4 max-h-48 overflow-y-auto",
                                                                                        children: cursos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-center py-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-sm text-muted-foreground mb-2",
                                                                                                    children: "Nenhum curso criado"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/turmas-content.tsx",
                                                                                                    lineNumber: 388,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs text-muted-foreground",
                                                                                                    children: 'Crie um curso na aba "Cursos" primeiro'
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/turmas-content.tsx",
                                                                                                    lineNumber: 389,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/turmas-content.tsx",
                                                                                            lineNumber: 387,
                                                                                            columnNumber: 29
                                                                                        }, this) : cursos.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: `flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${turmaForm.nome_curso === c.nome_curso ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"}`,
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                                        checked: turmaForm.nome_curso === c.nome_curso,
                                                                                                        onCheckedChange: (checked)=>{
                                                                                                            if (checked) {
                                                                                                                const newForm = {
                                                                                                                    ...turmaForm,
                                                                                                                    nome_curso: c.nome_curso
                                                                                                                };
                                                                                                                newForm.nome_turma = gerarNomeTurma(turmaForm.nome_classe, newForm.nome_curso);
                                                                                                                setTurmaForm(newForm);
                                                                                                            }
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                                        lineNumber: 401,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-sm font-medium flex-1",
                                                                                                        children: c.nome_curso
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                                        lineNumber: 411,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, c.nome_curso, true, {
                                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                                lineNumber: 393,
                                                                                                columnNumber: 31
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                                        lineNumber: 385,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                lineNumber: 380,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 339,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    turmaForm.nome_turma && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-md border-2 border-primary/20 bg-primary/5 p-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-medium text-muted-foreground mb-1",
                                                                                children: "Nome gerado automaticamente:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                lineNumber: 421,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-lg font-semibold text-primary",
                                                                                children: turmaForm.nome_turma
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                                lineNumber: 422,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 420,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    (!turmaForm.nome_classe || !turmaForm.nome_curso) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-md border border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900 p-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-amber-700 dark:text-amber-300",
                                                                            children: "⚠️ Selecione uma classe e um curso para gerar o nome da turma"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/turmas-content.tsx",
                                                                            lineNumber: 428,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 427,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        type: "button",
                                                                        variant: "outline",
                                                                        onClick: resetTurmaForm,
                                                                        children: "Cancelar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 435,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        type: "submit",
                                                                        disabled: isPending,
                                                                        children: isPending ? "A guardar..." : editingTurma ? "Guardar" : "Criar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                                data: turmaRows,
                                columns: turmaColumns,
                                searchKey: "nome_turma",
                                searchPlaceholder: "Pesquisar turmas...",
                                onEdit: handleTurmaEdit,
                                onDelete: handleTurmaDelete
                            }, void 0, false, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "classes",
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold",
                                                children: "Lista de Classes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: classeRows.length === 0 ? "Nenhuma classe criada ainda" : `${classeRows.length} classe${classeRows.length !== 1 ? "s" : ""} registada${classeRows.length !== 1 ? "s" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 460,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                                        open: classeOpen,
                                        onOpenChange: setClasseOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "gap-2",
                                                    onClick: ()=>resetClasseForm(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/turmas-content.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Nova Classe"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/turmas-content.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 467,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                children: editingClasse ? "Editar Classe" : "Nova Classe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                children: editingClasse ? "Atualize o nome da classe" : "Preencha o nome para criar uma nova classe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleClasseSubmit,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid gap-4 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "classe-nome",
                                                                            children: "Nome"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/turmas-content.tsx",
                                                                            lineNumber: 482,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "classe-nome",
                                                                            value: classeForm.nome_classe,
                                                                            onChange: (e)=>setClasseForm({
                                                                                    nome_classe: e.target.value
                                                                                }),
                                                                            placeholder: "Ex: 10ª Classe",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/turmas-content.tsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/turmas-content.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        type: "button",
                                                                        variant: "outline",
                                                                        onClick: resetClasseForm,
                                                                        children: "Cancelar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        type: "submit",
                                                                        disabled: isPending,
                                                                        children: isPending ? "A guardar..." : editingClasse ? "Guardar" : "Criar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                                data: classeRows,
                                columns: classeColumns,
                                searchKey: "nome_classe",
                                searchPlaceholder: "Pesquisar classes...",
                                onEdit: handleClasseEdit,
                                onDelete: handleClasseDelete
                            }, void 0, false, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "cursos",
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold",
                                                children: "Lista de Cursos"
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 517,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: cursoRows.length === 0 ? "Nenhum curso criado ainda" : `${cursoRows.length} curso${cursoRows.length !== 1 ? "s" : ""} registado${cursoRows.length !== 1 ? "s" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 518,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 516,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                                        open: cursoOpen,
                                        onOpenChange: setCursoOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "gap-2",
                                                    onClick: ()=>resetCursoForm(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/turmas-content.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Novo Curso"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/turmas-content.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 525,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                children: editingCurso ? "Editar Curso" : "Novo Curso"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                children: editingCurso ? "Atualize o nome do curso" : "Preencha o nome para criar um novo curso"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleCursoSubmit,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid gap-4 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "curso-nome",
                                                                            children: "Nome"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/turmas-content.tsx",
                                                                            lineNumber: 540,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "curso-nome",
                                                                            value: cursoForm.nome_curso,
                                                                            onChange: (e)=>setCursoForm({
                                                                                    nome_curso: e.target.value
                                                                                }),
                                                                            placeholder: "Ex: Informática",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/turmas-content.tsx",
                                                                            lineNumber: 541,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/turmas-content.tsx",
                                                                    lineNumber: 539,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        type: "button",
                                                                        variant: "outline",
                                                                        onClick: resetCursoForm,
                                                                        children: "Cancelar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 551,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        type: "submit",
                                                                        disabled: isPending,
                                                                        children: isPending ? "A guardar..." : editingCurso ? "Guardar" : "Criar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/turmas-content.tsx",
                                                                        lineNumber: 552,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/turmas-content.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/turmas-content.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/turmas-content.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/turmas-content.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                                data: cursoRows,
                                columns: cursoColumns,
                                searchKey: "nome_curso",
                                searchPlaceholder: "Pesquisar cursos...",
                                onEdit: handleCursoEdit,
                                onDelete: handleCursoDelete
                            }, void 0, false, {
                                fileName: "[project]/components/turmas-content.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/turmas-content.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/turmas-content.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/turmas-content.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_251b9cf1._.js.map