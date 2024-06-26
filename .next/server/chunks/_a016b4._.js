module.exports = {

"[project]/models/prompt.js [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__mongoose__ = __turbopack_external_require__("mongoose", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const PromptSchema = new __TURBOPACK__commonjs__external__mongoose__["Schema"]({
    creator: {
        type: __TURBOPACK__commonjs__external__mongoose__["Schema"].Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type: String,
        required: [
            true,
            "Prompt is required."
        ]
    },
    tag: {
        type: String,
        required: [
            true,
            "Tag is required."
        ]
    }
});
const Prompt = __TURBOPACK__commonjs__external__mongoose__["models"].Prompt || (0, __TURBOPACK__commonjs__external__mongoose__["model"])("Prompt", PromptSchema);
const __TURBOPACK__default__export__ = Prompt;

})()),
"[project]/utils/database.js [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "connectToDB": ()=>connectToDB
});
var __TURBOPACK__commonjs__external__mongoose__ = __turbopack_external_require__("mongoose", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
let isConnected = false; // track the connection
const connectToDB = async ()=>{
    __TURBOPACK__commonjs__external__mongoose__["default"].set("strictQuery", true);
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await __TURBOPACK__commonjs__external__mongoose__["default"].connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

})()),
"[project]/app/api/prompt/[id]/route.js [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DELETE": ()=>DELETE,
    "GET": ()=>GET,
    "PATCH": ()=>PATCH
});
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$prompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/prompt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/database.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const GET = async (request, { params })=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        const prompt = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$prompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(params.id).populate("creator");
        if (!prompt) return new Response("Prompt Not Found", {
            status: 404
        });
        return new Response(JSON.stringify(prompt), {
            status: 200
        });
    } catch (error) {
        return new Response("Internal Server Error", {
            status: 500
        });
    }
};
const PATCH = async (request, { params })=>{
    const { prompt, tag } = await request.json();
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        // Find the existing prompt by ID
        const existingPrompt = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$prompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found", {
                status: 404
            });
        }
        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response("Successfully updated the Prompts", {
            status: 200
        });
    } catch (error) {
        return new Response("Error Updating Prompt", {
            status: 500
        });
    }
};
const DELETE = async (request, { params })=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        // Find the prompt by ID and remove it
        await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$prompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndRemove(params.id);
        return new Response("Prompt deleted successfully", {
            status: 200
        });
    } catch (error) {
        return new Response("Error deleting prompt", {
            status: 500
        });
    }
};

})()),

};

//# sourceMappingURL=_a016b4._.js.map