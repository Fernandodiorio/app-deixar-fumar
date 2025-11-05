(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input(param) {
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/radio-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function RadioGroup(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/radio-group.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RadioGroup;
function RadioGroupItem(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/radio-group.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/radio-group.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/radio-group.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = RadioGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "RadioGroup");
__turbopack_context__.k.register(_c1, "RadioGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/components/ui/radio-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cigarette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cigarette$3e$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/lucide-react/dist/esm/icons/cigarette.js [app-client] (ecmascript) <export default as Cigarette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function OnboardingPage() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [cigarettesPerDay, setCigarettesPerDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('stop');
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { user, loading, refreshUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Redirecionar se não estiver autenticado ou já completou onboarding
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingPage.useEffect": ()=>{
            if (!loading) {
                if (!user) {
                    router.push('/auth/login');
                } else if (user.onboarding_completed) {
                    router.push('/dashboard');
                }
            }
        }
    }["OnboardingPage.useEffect"], [
        user,
        loading,
        router
    ]);
    const handleNext = ()=>{
        console.log('handleNext called, step:', step, 'method:', method);
        if (step < 3) {
            setStep(step + 1);
        } else {
            handleComplete();
        }
    };
    const handleComplete = async ()=>{
        console.log('handleComplete called', {
            user,
            cigarettesPerDay,
            goal,
            method
        });
        // Validar campos
        if (!cigarettesPerDay || parseInt(cigarettesPerDay) <= 0) {
            alert('Por favor, insira um número válido de cigarros por dia.');
            return;
        }
        if (!method) {
            alert('Por favor, escolha um método de abordagem.');
            return;
        }
        // Usar o user do estado ou buscar sessão
        let userId = null;
        let userEmail = '';
        let userName = null;
        if (user === null || user === void 0 ? void 0 : user.id) {
            // Se temos o user no estado, usar ele
            userId = user.id;
            userEmail = user.email || '';
            userName = user.name || null;
        } else {
            // Se não temos, tentar buscar da sessão
            const { data: { session }, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            if (sessionError || !(session === null || session === void 0 ? void 0 : session.user)) {
                var _refreshedSession_user_user_metadata;
                // Tentar refresh da sessão
                const { data: { session: refreshedSession }, error: refreshError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.refreshSession();
                if (refreshError || !(refreshedSession === null || refreshedSession === void 0 ? void 0 : refreshedSession.user)) {
                    alert('Erro: Sessão não encontrada. Por favor, faça login novamente.');
                    router.push('/auth/login');
                    return;
                }
                userId = refreshedSession.user.id;
                userEmail = refreshedSession.user.email || '';
                userName = ((_refreshedSession_user_user_metadata = refreshedSession.user.user_metadata) === null || _refreshedSession_user_user_metadata === void 0 ? void 0 : _refreshedSession_user_user_metadata.name) || null;
            } else {
                var _session_user_user_metadata;
                userId = session.user.id;
                userEmail = session.user.email || '';
                userName = ((_session_user_user_metadata = session.user.user_metadata) === null || _session_user_user_metadata === void 0 ? void 0 : _session_user_user_metadata.name) || null;
            }
        }
        if (!userId) {
            alert('Erro: ID do utilizador não encontrado. Por favor, faça login novamente.');
            router.push('/auth/login');
            return;
        }
        try {
            // Tentar buscar o perfil existente
            let { data: existingProfile, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).maybeSingle();
            if (fetchError && fetchError.code !== 'PGRST116') {
                console.error('Error fetching profile:', fetchError);
            // Continuar mesmo com erro, vamos tentar criar/atualizar
            }
            let result;
            if (existingProfile) {
                // Se existe, atualizar
                console.log('Updating existing user profile');
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
                    cigarettes_per_day: parseInt(cigarettesPerDay),
                    goal,
                    method,
                    onboarding_completed: true
                }).eq('id', userId).select().single();
                if (error) {
                    console.error('Update error:', error);
                    throw error;
                }
                result = data;
            } else {
                // Se não existe, criar com upsert (que funciona como insert ou update)
                console.log('Creating new user profile via upsert');
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').upsert({
                    id: userId,
                    email: userEmail,
                    name: userName,
                    cigarettes_per_day: parseInt(cigarettesPerDay),
                    goal,
                    method,
                    onboarding_completed: true
                }, {
                    onConflict: 'id'
                }).select().single();
                if (error) {
                    console.error('Upsert error:', error);
                    throw error;
                }
                result = data;
            }
            console.log('Onboarding completed successfully, redirecting...');
            // Atualizar o estado do auth
            try {
                await refreshUser();
            } catch (refreshError) {
                console.error('Error refreshing user:', refreshError);
            // Continuar mesmo se der erro no refresh
            }
            // Aguardar um pouco para garantir que tudo está atualizado
            await new Promise((resolve)=>setTimeout(resolve, 500));
            // Redirecionar para dashboard
            router.push('/dashboard');
        } catch (error) {
            console.error('Error completing onboarding:', error);
            alert("Erro ao completar o onboarding: ".concat(error.message || 'Erro desconhecido', ". Por favor, tente novamente."));
        }
    };
    const renderStep = ()=>{
        switch(step){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cigarette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cigarette$3e$__["Cigarette"], {
                                    className: "w-12 h-12 mx-auto mb-4 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold",
                                    children: "Quantos cigarros fumas por dia?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-300",
                                    children: "Ajuda-nos a criar um plano personalizado para ti."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "cigarettes",
                                    children: "Número de cigarros"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "cigarettes",
                                    type: "number",
                                    value: cigarettesPerDay,
                                    onChange: (e)=>setCigarettesPerDay(e.target.value),
                                    placeholder: "Ex: 20",
                                    min: "1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                    className: "w-12 h-12 mx-auto mb-4 text-teal-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold",
                                    children: "Qual é o teu objetivo?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-300",
                                    children: "Queremos ajudar-te a alcançar o que desejas."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                            value: goal,
                            onValueChange: (value)=>setGoal(value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                            value: "stop",
                                            id: "stop"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "stop",
                                            children: "Parar completamente de fumar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                            value: "reduce",
                                            id: "reduce"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "reduce",
                                            children: "Reduzir gradualmente"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-12 h-12 mx-auto mb-4 text-orange-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold",
                                    children: "Como preferes abordar a mudança?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-300",
                                    children: "Escolhe o método que mais se adapta a ti."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                            value: method,
                            onValueChange: (value)=>{
                                console.log('Method changed to:', value);
                                setMethod(value);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                            value: "cold-turkey",
                                            id: "cold-turkey"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "cold-turkey",
                                            className: "cursor-pointer",
                                            children: "Parar de repente (método abrupto)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                            value: "gradual",
                                            id: "gradual"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "gradual",
                                            className: "cursor-pointer",
                                            children: "Redução gradual"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                            value: "nicotine-replacement",
                                            id: "nicotine-replacement"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "nicotine-replacement",
                                            className: "cursor-pointer",
                                            children: "Substituição de nicotina"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-green-600 dark:text-green-400 mt-2",
                            children: [
                                "✓ Método selecionado: ",
                                method === 'cold-turkey' ? 'Parar de repente' : method === 'gradual' ? 'Redução gradual' : 'Substituição de nicotina'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 258,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    // Mostrar loading enquanto verifica autenticação
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-300",
                        children: "A carregar..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
            lineNumber: 273,
            columnNumber: 7
        }, this);
    }
    // Não renderizar se não houver usuário (será redirecionado)
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-8 h-8 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-2xl font-bold text-gray-900 dark:text-white",
                            children: "RespiraPT"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            className: "text-gray-600 dark:text-gray-300",
                            children: "Vamos configurar o teu plano personalizado"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center space-x-2",
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full ".concat(i <= step ? 'bg-blue-500' : 'bg-gray-300')
                                    }, i, false, {
                                        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this),
                        renderStep(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        console.log('Button clicked, step:', step, 'method:', method, 'cigarettesPerDay:', cigarettesPerDay);
                                        handleNext();
                                    },
                                    className: "w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed",
                                    disabled: step === 1 && !cigarettesPerDay || step === 3 && !method,
                                    children: step === 3 ? 'Começar!' : 'Próximo'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this),
                                step === 3 && !method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600 dark:text-red-400 mt-2 text-center",
                                    children: "Por favor, selecione um método para continuar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
            lineNumber: 289,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/PASTAS/RESPIRAPT/app-deixar-fumar/src/app/onboarding/page.tsx",
        lineNumber: 288,
        columnNumber: 5
    }, this);
}
_s(OnboardingPage, "r27CmWs3LjixuRuTAKJ5PACJIn4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PASTAS$2f$RESPIRAPT$2f$app$2d$deixar$2d$fumar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OnboardingPage;
var _c;
__turbopack_context__.k.register(_c, "OnboardingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_PASTAS_RESPIRAPT_app-deixar-fumar_src_d01f8232._.js.map