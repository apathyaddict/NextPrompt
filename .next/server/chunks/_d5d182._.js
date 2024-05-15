module.exports = {

"[project]/models/user.js [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__mongoose__ = __turbopack_external_require__("mongoose", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const UserSchema = new __TURBOPACK__commonjs__external__mongoose__["Schema"]({
    email: {
        type: String,
        unique: [
            true,
            "Email already exists!"
        ],
        required: [
            true,
            "Email is required!"
        ]
    },
    username: {
        type: String,
        required: [
            true,
            "Username is required!"
        ]
    },
    image: {
        type: String
    }
});
//check if user exists if not create new
const User = __TURBOPACK__commonjs__external__mongoose__["models"].User || (0, __TURBOPACK__commonjs__external__mongoose__["model"])("User", UserSchema);
const __TURBOPACK__default__export__ = User;

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
"[project]/app/api/auth/[...nextauth]/route.js [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>handler,
    "POST": ()=>handler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/google.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$user$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/user.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/database.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session ({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$user$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                email: session.user.email
            });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn ({ account, profile, user, credentials }) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
                // check if user already exists
                const userExists = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$user$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    email: profile.email
                });
                // if not, create a new document and save user in MongoDB
                if (!userExists) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$user$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                        email: profile.email,
                        username: profile.login,
                        image: profile.picture
                    });
                }
                return true;
            } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                return false;
            }
        }
    }
});
;

})()),

};

//# sourceMappingURL=_d5d182._.js.map