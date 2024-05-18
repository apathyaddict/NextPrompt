const CHUNK_PUBLIC_PATH = "server/app/profile/[...id]/page.js";
const runtime = require("../../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_be23ed._.js");
runtime.loadChunk("server/chunks/ssr/_a9f8c6._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/profile/[...id]/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/profile/[...id]/page { COMPONENT_0 => \"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/app/profile/[...id]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
