(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_799a92._.js", {

"[project]/components/Form.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Form = ({ post, setPost, submitting, setSumitting })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Form"
    }, void 0, false, {
        fileName: "[project]/components/Form.jsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
};
_c = Form;
const __TURBOPACK__default__export__ = Form;
var _c;
__turbopack_refresh__.register(_c, "Form");

})()),
"[project]/app/create-prompt/page.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Form.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const CreatePrompt = ()=>{
    _s();
    const [submitting, setSumitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        prompt: "",
        tag: ""
    });
    const CreatePrompt = async (e)=>{};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        type: "Create",
        post: post,
        setPost: setPost,
        submitting: submitting,
        handleSubmit: createPrompt
    }, void 0, false, {
        fileName: "[project]/app/create-prompt/page.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(CreatePrompt, "uc6+bUgvjBmRa70wEw0u6SmB67Q=");
_c = CreatePrompt;
const __TURBOPACK__default__export__ = CreatePrompt;
var _c;
__turbopack_refresh__.register(_c, "CreatePrompt");

})()),
"[project]/app/create-prompt/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");

}.call(this) }),
"[project]/node_modules/next/dist/compiled/react/cjs/react.production.min.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/*
 React
 react.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/ 'use strict';
var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, C = Object.assign, D = {};
function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = c || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = c || B;
}
var H = G.prototype = new F;
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray, J = {
    current: null
}, K = {
    current: null
}, L = {
    transition: null
}, M = {
    ReactCurrentDispatcher: J,
    ReactCurrentCache: K,
    ReactCurrentBatchConfig: L,
    ReactCurrentOwner: {
        current: null
    }
}, N = Object.prototype.hasOwnProperty, O = M.ReactCurrentOwner;
function P(a, b, c) {
    var e, d = {}, f = null, h = null;
    if (null != b) for(e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, e) && "key" !== e && "ref" !== e && "__self" !== e && "__source" !== e && (d[e] = b[e]);
    var k = arguments.length - 2;
    if (1 === k) d.children = c;
    else if (1 < k) {
        for(var g = Array(k), m = 0; m < k; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    if (a && a.defaultProps) for(e in k = a.defaultProps, k)void 0 === d[e] && (d[e] = k[e]);
    return {
        $$typeof: l,
        type: a,
        key: f,
        ref: h,
        props: d,
        _owner: O.current
    };
}
function Q(a, b) {
    return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function R(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(c) {
        return b[c];
    });
}
var S = /\/+/g;
function T(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function U() {}
function V(a) {
    switch(a.status){
        case "fulfilled":
            return a.value;
        case "rejected":
            throw a.reason;
        default:
            switch("string" === typeof a.status ? a.then(U, U) : (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            })), a.status){
                case "fulfilled":
                    return a.value;
                case "rejected":
                    throw a.reason;
            }
    }
    throw a;
}
function W(a, b, c, e, d) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case l:
                case n:
                    h = !0;
                    break;
                case y:
                    return h = a._init, W(h(a._payload), b, c, e, d);
            }
    }
    if (h) return d = d(a), h = "" === e ? "." + T(a, 0) : e, I(d) ? (c = "", null != h && (c = h.replace(S, "$&/") + "/"), W(d, b, c, "", function(m) {
        return m;
    })) : null != d && (R(d) && (d = Q(d, c + (!d.key || a && a.key === d.key ? "" : ("" + d.key).replace(S, "$&/") + "/") + h)), b.push(d)), 1;
    h = 0;
    var k = "" === e ? "." : e + ":";
    if (I(a)) for(var g = 0; g < a.length; g++)e = a[g], f = k + T(e, g), h += W(e, b, c, f, d);
    else if (g = A(a), "function" === typeof g) for(a = g.call(a), g = 0; !(e = a.next()).done;)e = e.value, f = k + T(e, g++), h += W(e, b, c, f, d);
    else if ("object" === f) {
        if ("function" === typeof a.then) return W(V(a), b, c, e, d);
        b = String(a);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    }
    return h;
}
function X(a, b, c) {
    if (null == a) return a;
    var e = [], d = 0;
    W(a, e, "", "", function(f) {
        return b.call(c, f, d++);
    });
    return e;
}
function aa(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(c) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = c;
        }, function(c) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = c;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ba() {
    return new WeakMap;
}
function Y() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
function ca() {}
var Z = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
};
exports.Children = {
    map: X,
    forEach: function(a, b, c) {
        X(a, function() {
            b.apply(this, arguments);
        }, c);
    },
    count: function(a) {
        var b = 0;
        X(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return X(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!R(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M;
exports.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
exports.cache = function(a) {
    return function() {
        var b = K.current;
        if (!b) return a.apply(null, arguments);
        var c = b.getCacheForType(ba);
        b = c.get(a);
        void 0 === b && (b = Y(), c.set(a, b));
        c = 0;
        for(var e = arguments.length; c < e; c++){
            var d = arguments[c];
            if ("function" === typeof d || "object" === typeof d && null !== d) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(d);
                void 0 === b && (b = Y(), f.set(d, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(d), void 0 === b && (b = Y(), f.set(d, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            c = b;
            c.s = 1;
            return c.v = h;
        } catch (k) {
            throw h = b, h.s = 2, h.v = k, k;
        }
    };
};
exports.cloneElement = function(a, b, c) {
    if (null === a || void 0 === a) throw Error("The argument must be a React element, but you passed " + a + ".");
    var e = C({}, a.props), d = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (d = "" + b.key);
        if (a.type && a.type.defaultProps) var k = a.type.defaultProps;
        for(g in b)N.call(b, g) && "key" !== g && "ref" !== g && "__self" !== g && "__source" !== g && (e[g] = void 0 === b[g] && void 0 !== k ? k[g] : b[g]);
    }
    var g = arguments.length - 2;
    if (1 === g) e.children = c;
    else if (1 < g) {
        k = Array(g);
        for(var m = 0; m < g; m++)k[m] = arguments[m + 2];
        e.children = k;
    }
    return {
        $$typeof: l,
        type: a.type,
        key: d,
        ref: f,
        props: e,
        _owner: h
    };
};
exports.createContext = function(a) {
    a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    };
    a.Provider = {
        $$typeof: t,
        _context: a
    };
    return a.Consumer = a;
};
exports.createElement = P;
exports.createFactory = function(a) {
    var b = P.bind(null, a);
    b.type = a;
    return b;
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.forwardRef = function(a) {
    return {
        $$typeof: v,
        render: a
    };
};
exports.isValidElement = R;
exports.lazy = function(a) {
    return {
        $$typeof: y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: aa
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = L.transition, c = new Set;
    L.transition = {
        _callbacks: c
    };
    var e = L.transition;
    try {
        var d = a();
        "object" === typeof d && null !== d && "function" === typeof d.then && (c.forEach(function(f) {
            return f(e, d);
        }), d.then(ca, Z));
    } catch (f) {
        Z(f);
    } finally{
        L.transition = b;
    }
};
exports.unstable_useCacheRefresh = function() {
    return J.current.useCacheRefresh();
};
exports.use = function(a) {
    return J.current.use(a);
};
exports.useCallback = function(a, b) {
    return J.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return J.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useDeferredValue = function(a, b) {
    return J.current.useDeferredValue(a, b);
};
exports.useEffect = function(a, b) {
    return J.current.useEffect(a, b);
};
exports.useId = function() {
    return J.current.useId();
};
exports.useImperativeHandle = function(a, b, c) {
    return J.current.useImperativeHandle(a, b, c);
};
exports.useInsertionEffect = function(a, b) {
    return J.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function(a, b) {
    return J.current.useLayoutEffect(a, b);
};
exports.useMemo = function(a, b) {
    return J.current.useMemo(a, b);
};
exports.useOptimistic = function(a, b) {
    return J.current.useOptimistic(a, b);
};
exports.useReducer = function(a, b, c) {
    return J.current.useReducer(a, b, c);
};
exports.useRef = function(a) {
    return J.current.useRef(a);
};
exports.useState = function(a) {
    return J.current.useState(a);
};
exports.useSyncExternalStore = function(a, b, c) {
    return J.current.useSyncExternalStore(a, b, c);
};
exports.useTransition = function() {
    return J.current.useTransition();
};
exports.version = "18.3.0-canary-14898b6a9-20240318"; //# sourceMappingURL=react.production.min.js.map

}.call(this) }),
}]);

//# sourceMappingURL=_799a92._.js.map