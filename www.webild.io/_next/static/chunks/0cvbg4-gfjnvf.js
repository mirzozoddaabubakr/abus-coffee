(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 18967, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        DecodeError: function () {
            return b
        },
        MiddlewareNotFoundError: function () {
            return w
        },
        MissingStaticPage: function () {
            return _
        },
        NormalizeError: function () {
            return v
        },
        PageNotFoundError: function () {
            return y
        },
        SP: function () {
            return g
        },
        ST: function () {
            return h
        },
        WEB_VITALS: function () {
            return a
        },
        execOnce: function () {
            return i
        },
        getDisplayName: function () {
            return d
        },
        getLocationOrigin: function () {
            return c
        },
        getURL: function () {
            return u
        },
        isAbsoluteUrl: function () {
            return o
        },
        isResSent: function () {
            return p
        },
        loadGetInitialProps: function () {
            return m
        },
        normalizeRepeatedSlashes: function () {
            return f
        },
        stringifyError: function () {
            return k
        }
    };
    for (var n in s)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: s[n]
        });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
        let t, r = !1;
        return (...s) => (r || (r = !0,
            t = e(...s)),
            t)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
        , o = e => l.test(e);
    function c() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return `${e}//${t}${r ? ":" + r : ""}`
    }
    function u() {
        let { href: e } = window.location
            , t = c();
        return e.substring(t.length)
    }
    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }
    function p(e) {
        return e.finished || e.headersSent
    }
    function f(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function m(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps)
            return t.ctx && t.Component ? {
                pageProps: await m(t.Component, t.ctx)
            } : {};
        let s = await e.getInitialProps(t);
        if (r && p(r))
            return s;
        if (!s)
            throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${s}" instead.`), "__NEXT_ERROR_CODE", {
                value: "E1025",
                enumerable: !1,
                configurable: !0
            });
        return s
    }
    let g = "u" > typeof performance
        , h = g && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class b extends Error {
    }
    class v extends Error {
    }
    class y extends Error {
        constructor(e) {
            super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = `Cannot find module for page: ${e}`
        }
    }
    class _ extends Error {
        constructor(e, t) {
            super(),
                this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class w extends Error {
        constructor() {
            super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
        }
    }
    function k(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}
    , 98183, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = {
            assign: function () {
                return o
            },
            searchParamsToUrlQuery: function () {
                return a
            },
            urlQueryToSearchParams: function () {
                return l
            }
        };
        for (var n in s)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: s[n]
            });
        function a(e) {
            let t = {};
            for (let [r, s] of e.entries()) {
                let e = t[r];
                void 0 === e ? t[r] = s : Array.isArray(e) ? e.push(s) : t[r] = [e, s]
            }
            return t
        }
        function i(e) {
            return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
        }
        function l(e) {
            let t = new URLSearchParams;
            for (let [r, s] of Object.entries(e))
                if (Array.isArray(s))
                    for (let e of s)
                        t.append(r, i(e));
                else
                    t.set(r, i(s));
            return t
        }
        function o(e, ...t) {
            for (let r of t) {
                for (let t of r.keys())
                    e.delete(t);
                for (let [t, s] of r.entries())
                    e.append(t, s)
            }
            return e
        }
    }
    , 91915, (e, t, r) => {
        "use strict";
        function s(e, t = {}) {
            if (t.onlyHashChange)
                return void e();
            let r = document.documentElement;
            if ("smooth" !== r.dataset.scrollBehavior)
                return void e();
            let n = r.style.scrollBehavior;
            r.style.scrollBehavior = "auto",
                t.dontForceLayout || r.getClientRects(),
                e(),
                r.style.scrollBehavior = n
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
                enumerable: !0,
                get: function () {
                    return s
                }
            }),
            e.r(33525)
    }
    , 1643, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = {
            getParamProperties: function () {
                return o
            },
            getSegmentParam: function () {
                return i
            },
            isCatchAll: function () {
                return l
            }
        };
        for (var n in s)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: s[n]
            });
        let a = e.r(91463);
        function i(e) {
            let t = a.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t));
            return (t && (e = e.slice(t.length)),
                e.startsWith("[[...") && e.endsWith("]]")) ? {
                paramType: "optional-catchall",
                paramName: e.slice(5, -2)
            } : e.startsWith("[...") && e.endsWith("]") ? {
                paramType: t ? `catchall-intercepted-${t}` : "catchall",
                paramName: e.slice(4, -1)
            } : e.startsWith("[") && e.endsWith("]") ? {
                paramType: t ? `dynamic-intercepted-${t}` : "dynamic",
                paramName: e.slice(1, -1)
            } : null
        }
        function l(e) {
            return "catchall" === e || "catchall-intercepted-(..)(..)" === e || "catchall-intercepted-(.)" === e || "catchall-intercepted-(..)" === e || "catchall-intercepted-(...)" === e || "optional-catchall" === e
        }
        function o(e) {
            let t = !1
                , r = !1;
            switch (e) {
                case "catchall":
                case "catchall-intercepted-(..)(..)":
                case "catchall-intercepted-(.)":
                case "catchall-intercepted-(..)":
                case "catchall-intercepted-(...)":
                    t = !0;
                    break;
                case "optional-catchall":
                    t = !0,
                        r = !0
            }
            return {
                repeat: t,
                optional: r
            }
        }
    }
    , 90929, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "parseRelativeUrl", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
        let s = e.r(18967)
            , n = e.r(98183);
        function a(e, t, r = !0) {
            let i = new URL("u" < typeof window ? "http://n" : (0,
                s.getLocationOrigin)())
                , l = t ? new URL(t, i) : e.startsWith(".") ? new URL("u" < typeof window ? "http://n" : window.location.href) : i
                , { pathname: o, searchParams: c, search: u, hash: d, href: p, origin: f } = e.startsWith("/") ? new URL(`${l.protocol}//${l.host}${e}`) : new URL(e, l);
            if (f !== i.origin)
                throw Object.defineProperty(Error(`invariant: invalid relative URL, router received ${e}`), "__NEXT_ERROR_CODE", {
                    value: "E159",
                    enumerable: !1,
                    configurable: !0
                });
            return {
                auth: null,
                host: null,
                hostname: null,
                pathname: o,
                port: null,
                protocol: null,
                query: r ? (0,
                    n.searchParamsToUrlQuery)(c) : void 0,
                search: u,
                hash: d,
                href: p.slice(f.length),
                slashes: null
            }
        }
    }
    , 33525, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "warnOnce", {
                enumerable: !0,
                get: function () {
                    return s
                }
            });
        let s = e => { }
    }
    , 79474, (e, t, r) => {
        "use strict";
        var s = e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        r.c = function (e) {
            return s.H.useMemoCache(e)
        }
    }
    , 932, (e, t, r) => {
        "use strict";
        t.exports = e.r(79474)
    }
    , 75254, e => {
        "use strict";
        var t = e.i(71645);
        let r = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
            , s = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
        var n = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let a = (0,
            t.forwardRef)(({ color: e = "currentColor", size: r = 24, strokeWidth: a = 2, absoluteStrokeWidth: i, className: l = "", children: o, iconNode: c, ...u }, d) => (0,
                t.createElement)("svg", {
                    ref: d,
                    ...n,
                    width: r,
                    height: r,
                    stroke: e,
                    strokeWidth: i ? 24 * Number(a) / Number(r) : a,
                    className: s("lucide", l),
                    ...!o && !(e => {
                        for (let t in e)
                            if (t.startsWith("aria-") || "role" === t || "title" === t)
                                return !0
                    }
                    )(u) && {
                        "aria-hidden": "true"
                    },
                    ...u
                }, [...c.map(([e, r]) => (0,
                    t.createElement)(e, r)), ...Array.isArray(o) ? o : [o]]));
        e.s(["default", 0, (e, n) => {
            let i = (0,
                t.forwardRef)(({ className: i, ...l }, o) => (0,
                    t.createElement)(a, {
                        ref: o,
                        iconNode: n,
                        className: s(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, i),
                        ...l
                    }));
            return i.displayName = r(e),
                i
        }
        ], 75254)
    }
    , 65856, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "RouterContext", {
                enumerable: !0,
                get: function () {
                    return s
                }
            });
        let s = e.r(55682)._(e.r(71645)).default.createContext(null)
    }
    , 18566, (e, t, r) => {
        t.exports = e.r(76562)
    }
    , 86098, e => {
        "use strict";
        var t = e.i(68834)
            , r = e.i(79473);
        let s = (0,
            t.create)()((0,
                r.devtools)((e, t) => ({
                    activeView: "bilder",
                    previewDevice: "desktop",
                    isSidebarOpen: !1,
                    isSidebarExpanded: !0,
                    isPreviewExpanded: !1,
                    allTasksCompleted: !1,
                    previewStage: 0,
                    lastCompletedMessageId: null,
                    isChatCollapsed: !1,
                    dashboardCategory: "website",
                    isSettingsModalOpen: !1,
                    settingsModalTab: null,
                    currentProject: null,
                    selectedBlocks: [],
                    selectedPages: [],
                    sitePagesViewMode: "list",
                    removingBlockId: null,
                    projectStates: new Map,
                    loadingMessages: [],
                    projectMessageCallbacks: new Map,
                    currentPrompt: null,
                    skipLoadingAnimation: !1,
                    getProjectState: e => t().projectStates.get(e) || {
                        isGenerating: null,
                        hasReceivedApiResponse: !1,
                        isSubmittingMessage: !1,
                        versionStatus: void 0
                    },
                    setProjectIsGenerating: (t, r) => e(e => {
                        let s = new Map(e.projectStates)
                            , n = s.get(t) || {
                                isGenerating: null,
                                hasReceivedApiResponse: !1,
                                isSubmittingMessage: !1,
                                versionStatus: void 0
                            };
                        return s.set(t, {
                            ...n,
                            isGenerating: r
                        }),
                        {
                            projectStates: s
                        }
                    }
                    ),
                    setProjectHasReceivedApiResponse: (t, r) => e(e => {
                        let s = new Map(e.projectStates)
                            , n = s.get(t) || {
                                isGenerating: null,
                                hasReceivedApiResponse: !1,
                                isSubmittingMessage: !1,
                                versionStatus: void 0
                            };
                        return s.set(t, {
                            ...n,
                            hasReceivedApiResponse: r
                        }),
                        {
                            projectStates: s
                        }
                    }
                    ),
                    setProjectIsSubmittingMessage: (t, r) => e(e => {
                        let s = new Map(e.projectStates)
                            , n = s.get(t) || {
                                isGenerating: null,
                                hasReceivedApiResponse: !1,
                                isSubmittingMessage: !1,
                                versionStatus: void 0
                            };
                        return s.set(t, {
                            ...n,
                            isSubmittingMessage: r
                        }),
                        {
                            projectStates: s
                        }
                    }
                    ),
                    setProjectVersionStatus: (t, r) => e(e => {
                        let s = new Map(e.projectStates)
                            , n = s.get(t) || {
                                isGenerating: null,
                                hasReceivedApiResponse: !1,
                                isSubmittingMessage: !1,
                                versionStatus: void 0
                            };
                        return s.set(t, {
                            ...n,
                            versionStatus: r
                        }),
                        {
                            projectStates: s
                        }
                    }
                    ),
                    clearProjectState: t => e(e => {
                        let r = new Map(e.projectStates);
                        return r.delete(t),
                        {
                            projectStates: r
                        }
                    }
                    ),
                    setActiveView: t => e({
                        activeView: t
                    }),
                    setSitePagesViewMode: t => e({
                        sitePagesViewMode: t
                    }),
                    setPreviewDevice: t => e({
                        previewDevice: t
                    }),
                    toggleSidebar: () => e(e => ({
                        isSidebarOpen: !e.isSidebarOpen
                    })),
                    setSidebarOpen: t => e({
                        isSidebarOpen: t
                    }),
                    toggleSidebarExpanded: () => e(e => ({
                        isSidebarExpanded: !e.isSidebarExpanded
                    })),
                    setSidebarExpanded: t => e({
                        isSidebarExpanded: t
                    }),
                    togglePreviewExpanded: () => e(e => ({
                        isPreviewExpanded: !e.isPreviewExpanded
                    })),
                    setPreviewExpanded: t => e({
                        isPreviewExpanded: t
                    }),
                    handleAllTasksCompleted: r => {
                        let { lastCompletedMessageId: s } = t();
                        r && r === s || e(e => ({
                            allTasksCompleted: !0,
                            previewStage: e.previewStage + 1,
                            lastCompletedMessageId: r || null
                        }))
                    }
                    ,
                    handleResetPreview: () => e({
                        allTasksCompleted: !1
                    }),
                    setChatCollapsed: t => e({
                        isChatCollapsed: t
                    }),
                    setDashboardCategory: t => e({
                        dashboardCategory: t
                    }),
                    setSettingsModalOpen: t => e({
                        isSettingsModalOpen: t
                    }),
                    setSettingsModalTab: t => e({
                        settingsModalTab: t
                    }),
                    setCurrentProject: t => e({
                        currentProject: t
                    }),
                    toggleSelectedBlock: t => e(e => e.selectedBlocks.some(e => e.id === t.id) ? {
                        selectedBlocks: e.selectedBlocks.filter(e => e.id !== t.id)
                    } : {
                        selectedBlocks: [...e.selectedBlocks, t]
                    }),
                    removeSelectedBlock: t => e(e => ({
                        selectedBlocks: e.selectedBlocks.filter(e => e.id !== t)
                    })),
                    animateAndRemoveBlock: t => {
                        e({
                            removingBlockId: t
                        }),
                            setTimeout(() => {
                                e(e => ({
                                    selectedBlocks: e.selectedBlocks.filter(e => e.id !== t),
                                    removingBlockId: null
                                }))
                            }
                                , 300)
                    }
                    ,
                    clearSelectedBlocks: () => e({
                        selectedBlocks: []
                    }),
                    addPreviewItem: t => e(e => e.selectedPages.some(e => e.id === t.id) ? e : {
                        selectedPages: [...e.selectedPages, t]
                    }),
                    removePreviewItem: t => e(e => ({
                        selectedPages: e.selectedPages.filter(e => e.id !== t)
                    })),
                    clearPreviewItems: () => e({
                        selectedPages: []
                    }),
                    setLoadingMessages: t => e({
                        loadingMessages: t
                    }),
                    setCurrentPrompt: t => e({
                        currentPrompt: t
                    }),
                    setSkipLoadingAnimation: t => e({
                        skipLoadingAnimation: t
                    }),
                    hasSandboxLoadedOnce: !1,
                    setHasSandboxLoadedOnce: t => e({
                        hasSandboxLoadedOnce: t
                    }),
                    currentPageRoute: null,
                    setCurrentPageRoute: t => e({
                        currentPageRoute: t
                    }),
                    totalProjectCount: null,
                    setTotalProjectCount: t => e({
                        totalProjectCount: t
                    }),
                    isBobSuggestionsExpanded: !1,
                    setBobSuggestionsExpanded: t => e({
                        isBobSuggestionsExpanded: t
                    }),
                    bobSuggestionsShine: !1,
                    setBobSuggestionsShine: t => e({
                        bobSuggestionsShine: t
                    }),
                    shouldOpenImageGeneration: !1,
                    setShouldOpenImageGeneration: t => e({
                        shouldOpenImageGeneration: t
                    }),
                    isErrorPage: !1,
                    setIsErrorPage: t => e({
                        isErrorPage: t
                    }),
                    isMobileProjectSidebarOpen: !1,
                    setMobileProjectSidebarOpen: t => e({
                        isMobileProjectSidebarOpen: t
                    }),
                    mobileBuildView: "chat",
                    setMobileBuildView: t => e({
                        mobileBuildView: t
                    }),
                    setProjectMessageCallbacks: (t, r) => e(e => {
                        let s = new Map(e.projectMessageCallbacks);
                        return s.set(t, r),
                        {
                            projectMessageCallbacks: s
                        }
                    }
                    ),
                    getProjectMessageCallbacks: e => t().projectMessageCallbacks.get(e) || {},
                    clearProjectMessageCallbacks: t => e(e => {
                        let r = new Map(e.projectMessageCallbacks);
                        return r.delete(t),
                        {
                            projectMessageCallbacks: r
                        }
                    }
                    ),
                    isSandboxSleeping: !1,
                    setIsSandboxSleeping: t => e({
                        isSandboxSleeping: t
                    }),
                    isSandboxReady: !1,
                    setIsSandboxReady: t => e({
                        isSandboxReady: t
                    }),
                    projectMutateCallbacks: new Map,
                    setProjectMutateCallback: (t, r) => e(e => {
                        let s = new Map(e.projectMutateCallbacks);
                        return s.set(t, r),
                        {
                            projectMutateCallbacks: s
                        }
                    }
                    ),
                    getProjectMutateCallback: e => t().projectMutateCallbacks.get(e),
                    clearProjectMutateCallback: t => e(e => {
                        let r = new Map(e.projectMutateCallbacks);
                        return r.delete(t),
                        {
                            projectMutateCallbacks: r
                        }
                    }
                    )
                }), {
                    name: "ui-store"
                }));
        e.s(["useUIStore", 0, s])
    }
    , 95187, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = {
            callServer: function () {
                return a.callServer
            },
            createServerReference: function () {
                return l.createServerReference
            },
            findSourceMapURL: function () {
                return i.findSourceMapURL
            }
        };
        for (var n in s)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: s[n]
            });
        let a = e.r(32120)
            , i = e.r(92245)
            , l = e.r(35326)
    }
    , 7079, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , s = e.i(71645)
            , n = e.i(75157);
        let a = {
            rainbow: {
                glow: "linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)",
                conic: "conic-gradient(from 0deg, transparent 0%, #0894FF 5%, #C959DD 10%, #FF2E54 15%, #FF9004 20%, transparent 25%)"
            },
            "rainbow-wide": {
                glow: "linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)",
                conic: "conic-gradient(from 0deg, transparent 0%, #0894FF 10%, #C959DD 20%, #FF2E54 30%, #FF9004 40%, transparent 50%)"
            },
            "rainbow-full": {
                glow: "linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)",
                conic: "conic-gradient(from 0deg, #0894FF 0%, #C959DD 25%, #FF2E54 50%, #FF9004 75%, #0894FF 100%)"
            },
            blue: {
                glow: "linear-gradient(108deg, #0894FF, #38bdf8)",
                conic: "conic-gradient(from 0deg, transparent 0%, #0894FF 10%, #38bdf8 20%, #0894FF 30%, transparent 40%)"
            }
        };
        e.s(["default", 0, e => {
            let i, l, o, c, u, d, p, f, m, g, h, b, v, y = (0,
                r.c)(39), { children: _, isActive: w, duration: k, roundedClass: j, className: E, disableGlow: S, colorTheme: x, padding: P, paddingTailwind: C, inset: R } = e, L = void 0 === w || w, T = void 0 === j ? "rounded-[14px]" : j, I = void 0 !== S && S, O = void 0 === P ? "2px" : P, U = void 0 !== C && C, A = a[void 0 === x ? "rainbow" : x], [M, N] = (0,
                    s.useState)(L);
            y[0] !== L ? (l = () => {
                if (L)
                    N(!0);
                else {
                    let e = setTimeout(() => N(!1), 500);
                    return () => clearTimeout(e)
                }
            }
                ,
                i = [L],
                y[0] = L,
                y[1] = i,
                y[2] = l) : (i = y[1],
                    l = y[2]),
                (0,
                    s.useEffect)(l, i),
                y[3] !== E ? (o = (0,
                    n.cls)("relative", E),
                    y[3] = E,
                    y[4] = o) : o = y[4],
                y[5] !== I || y[6] !== L || y[7] !== A.glow ? (c = !I && (0,
                    t.jsx)("div", {
                        className: (0,
                            n.cls)("absolute -inset-0.5 blur-sm transition-opacity duration-500", L ? "opacity-20" : "opacity-0"),
                        style: {
                            background: A.glow
                        }
                    }),
                    y[5] = I,
                    y[6] = L,
                    y[7] = A.glow,
                    y[8] = c) : c = y[8];
            let F = U && O;
            y[9] !== T || y[10] !== F ? (u = (0,
                n.cls)("relative overflow-hidden", T, F),
                y[9] = T,
                y[10] = F,
                y[11] = u) : u = y[11],
                y[12] !== O || y[13] !== U ? (d = U ? void 0 : {
                    padding: O
                },
                    y[12] = O,
                    y[13] = U,
                    y[14] = d) : d = y[14];
            let B = M && "animate-spin"
                , D = L ? "opacity-100" : "opacity-0";
            y[15] !== B || y[16] !== D ? (p = (0,
                n.cls)("absolute transition-opacity duration-500", B, D),
                y[15] = B,
                y[16] = D,
                y[17] = p) : p = y[17];
            let G = `-${void 0 === R ? "200%" : R}`
                , K = `${void 0 === k ? 3 : k}s`;
            return y[18] !== G || y[19] !== K || y[20] !== A.conic ? (f = {
                inset: G,
                background: A.conic,
                animationDuration: K
            },
                y[18] = G,
                y[19] = K,
                y[20] = A.conic,
                y[21] = f) : f = y[21],
                y[22] !== p || y[23] !== f ? (m = (0,
                    t.jsx)("div", {
                        className: p,
                        style: f
                    }),
                    y[22] = p,
                    y[23] = f,
                    y[24] = m) : m = y[24],
                y[25] !== T ? (g = (0,
                    n.cls)("relative bg-white", T),
                    y[25] = T,
                    y[26] = g) : g = y[26],
                y[27] !== _ || y[28] !== g ? (h = (0,
                    t.jsx)("div", {
                        className: g,
                        children: _
                    }),
                    y[27] = _,
                    y[28] = g,
                    y[29] = h) : h = y[29],
                y[30] !== u || y[31] !== d || y[32] !== m || y[33] !== h ? (b = (0,
                    t.jsxs)("div", {
                        className: u,
                        style: d,
                        children: [m, h]
                    }),
                    y[30] = u,
                    y[31] = d,
                    y[32] = m,
                    y[33] = h,
                    y[34] = b) : b = y[34],
                y[35] !== o || y[36] !== c || y[37] !== b ? (v = (0,
                    t.jsxs)("div", {
                        className: o,
                        children: [c, b]
                    }),
                    y[35] = o,
                    y[36] = c,
                    y[37] = b,
                    y[38] = v) : v = y[38],
                v
        }
        ])
    }
    , 67585, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "BailoutToCSR", {
                enumerable: !0,
                get: function () {
                    return n
                }
            });
        let s = e.r(32061);
        function n({ reason: e, children: t }) {
            if ("u" < typeof window)
                throw Object.defineProperty(new s.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
            return t
        }
    }
    , 9885, (e, t, r) => {
        "use strict";
        function s(e) {
            return e.split("/").map(e => encodeURIComponent(e)).join("/")
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "encodeURIPath", {
                enumerable: !0,
                get: function () {
                    return s
                }
            })
    }
    , 52157, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "PreloadChunks", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
        let s = e.r(43476)
            , n = e.r(74080)
            , a = e.r(63599)
            , i = e.r(9885)
            , l = e.r(43369);
        function o({ moduleIds: e }) {
            if ("u" > typeof window)
                return null;
            let t = a.workAsyncStorage.getStore();
            if (void 0 === t)
                return null;
            let r = [];
            if (t.reactLoadableManifest && e) {
                let s = t.reactLoadableManifest;
                for (let t of e) {
                    if (!s[t])
                        continue;
                    let e = s[t].files;
                    r.push(...e)
                }
            }
            if (0 === r.length)
                return null;
            let c = (0,
                l.getAssetTokenQuery)();
            return (0,
                s.jsx)(s.Fragment, {
                    children: r.map(e => {
                        let r = `${t.assetPrefix}/_next/${(0,
                            i.encodeURIPath)(e)}${c}`;
                        return e.endsWith(".css") ? (0,
                            s.jsx)("link", {
                                precedence: "dynamic",
                                href: r,
                                rel: "stylesheet",
                                as: "style",
                                nonce: t.nonce
                            }, e) : ((0,
                                n.preload)(r, {
                                    as: "script",
                                    fetchPriority: "low",
                                    nonce: t.nonce
                                }),
                                null)
                    }
                    )
                })
        }
    }
    , 69093, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function () {
                    return c
                }
            });
        let s = e.r(43476)
            , n = e.r(71645)
            , a = e.r(67585)
            , i = e.r(52157);
        function l(e) {
            return {
                default: e && "default" in e ? e.default : e
            }
        }
        let o = {
            loader: () => Promise.resolve(l(() => null)),
            loading: null,
            ssr: !0
        }
            , c = function (e) {
                let t = {
                    ...o,
                    ...e
                }
                    , r = (0,
                        n.lazy)(() => t.loader().then(l))
                    , c = t.loading;
                function u(e) {
                    let l = c ? (0,
                        s.jsx)(c, {
                            isLoading: !0,
                            pastDelay: !0,
                            error: null
                        }) : null
                        , o = !t.ssr || !!t.loading
                        , u = o ? n.Suspense : n.Fragment
                        , d = t.ssr ? (0,
                            s.jsxs)(s.Fragment, {
                                children: ["u" < typeof window ? (0,
                                    s.jsx)(i.PreloadChunks, {
                                        moduleIds: t.modules
                                    }) : null, (0,
                                        s.jsx)(r, {
                                            ...e
                                        })]
                            }) : (0,
                                s.jsx)(a.BailoutToCSR, {
                                    reason: "next/dynamic",
                                    children: (0,
                                        s.jsx)(r, {
                                            ...e
                                        })
                                });
                    return (0,
                        s.jsx)(u, {
                            ...o ? {
                                fallback: l
                            } : {},
                            children: d
                        })
                }
                return u.displayName = "LoadableComponent",
                    u
            }
    }
    , 70703, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function () {
                    return n
                }
            });
        let s = e.r(55682)._(e.r(69093));
        function n(e, t) {
            let r = {};
            "function" == typeof e && (r.loader = e);
            let n = {
                ...r,
                ...t
            };
            return (0,
                s.default)({
                    ...n,
                    modules: n.loadableGenerated?.modules
                })
        }
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }),
            Object.assign(r.default, r),
            t.exports = r.default)
    }
    , 15057, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("arrow-up-right", [["path", {
                d: "M7 7h10v10",
                key: "1tivn9"
            }], ["path", {
                d: "M7 17 17 7",
                key: "1vkiza"
            }]]);
        e.s(["ArrowUpRight", 0, t], 15057)
    }
    , 48962, e => {
        "use strict";
        e.s(["LAYOUT_STRINGS", 0, {
            navigation: {
                buttons: {
                    logIn: "Log in",
                    signUp: "Sign up",
                    getStarted: "Get started"
                },
                mobile: {
                    ariaLabel: "Mobile navigation",
                    openMenu: "Open menu",
                    closeMenu: "Close menu"
                },
                dropdown: {
                    howItWorks: "How it works",
                    watchVideo: "Watch video"
                }
            },
            launchOffer: {
                prefix: "Enjoy",
                discount: "20% off",
                suffix: "for the next:",
                claimDiscount: "Claim your 20% launch discount"
            },
            profileDropdown: {
                reportBug: "Report a bug"
            },
            credits: {
                title: "Credits",
                left: "left",
                freePlanMessage: "You're on the free plan. Unlock additional features and credits by upgrading your plan.",
                monthlyResetMessage: "Monthly credits reset every month",
                upgrade: "Upgrade"
            },
            projectSwitcher: {
                yourWebsites: "Your websites",
                addNewWebsite: "Add new website",
                allWebsites: "All websites"
            },
            sidebar: {
                newWebsite: "New Website",
                recentWebsites: "Recent websites",
                help: "Help",
                upgradePlan: "Upgrade plan"
            },
            signUpBanner: {
                text: "Get Started for Free. No credit card required."
            }
        }])
    }
    , 30699, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("gift", [["rect", {
                x: "3",
                y: "8",
                width: "18",
                height: "4",
                rx: "1",
                key: "bkv52"
            }], ["path", {
                d: "M12 8v13",
                key: "1c76mn"
            }], ["path", {
                d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
                key: "6wjy6b"
            }], ["path", {
                d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
                key: "1ihvrl"
            }]]);
        e.s(["Gift", 0, t], 30699)
    }
    , 80580, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , s = e.i(71645)
            , n = e.i(83599)
            , a = e.i(71235)
            , i = e.i(9275)
            , l = e.i(17805)
            , l = l
            , o = e.i(46192)
            , c = e.i(38071)
            , u = e.i(27530)
            , d = e.i(20103)
            , p = e.i(75198)
            , f = e.i(332)
            , m = e.i(30816)
            , g = e.i(2239);
        let h = () => { }
            , b = h()
            , v = Object
            , y = e => e === b
            , _ = new WeakMap
            , w = (e, t) => e === `[object ${t}]`
            , k = 0
            , j = e => {
                let t, r, s = typeof e, n = v.prototype.toString.call(e), a = w(n, "Date"), i = w(n, "RegExp"), l = w(n, "Object");
                if (v(e) !== e || a || i)
                    t = a ? e.toJSON() : "symbol" == s ? e.toString() : "string" == s ? JSON.stringify(e) : "" + e;
                else {
                    if (t = _.get(e))
                        return t;
                    if (t = ++k + "~",
                        _.set(e, t),
                        Array.isArray(e)) {
                        for (r = 0,
                            t = "@"; r < e.length; r++)
                            t += j(e[r]) + ",";
                        _.set(e, t)
                    }
                    if (l) {
                        t = "#";
                        let s = v.keys(e).sort();
                        for (; !y(r = s.pop());)
                            y(e[r]) || (t += r + ":" + j(e[r]) + ",");
                        _.set(e, t)
                    }
                }
                return t
            }
            , E = Promise.resolve()
            , S = (0,
                a.withMiddleware)(n.default, e => (t, r, n) => {
                    let a, h = (0,
                        s.useRef)(!1), { cache: b, initialSize: v = 1, revalidateAll: y = !1, persistSize: _ = !1, revalidateFirstPage: w = !0, revalidateOnMount: k = !1, parallel: S = !1 } = n, [, , , x] = i.SWRGlobalState.get(l.c);
                    try {
                        (a = (e => {
                            if ("function" == typeof e)
                                try {
                                    e = e()
                                } catch (t) {
                                    e = ""
                                }
                            let t = e;
                            return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? j(e) : "", t]
                        }
                        )(t ? t(0, null) : null)[0]) && (a = o.INFINITE_PREFIX + a)
                    } catch (e) { }
                    let [P, C, R] = (0,
                        c.createCacheHelper)(b, a)
                        , L = (0,
                            s.useCallback)(() => (0,
                                u.isUndefined)(P()._l) ? v : P()._l, [b, a, v]);
                    (0,
                        g.useSyncExternalStore)((0,
                            s.useCallback)(e => a ? R(a, () => {
                                e()
                            }
                            ) : () => { }
                                , [b, a]), L, L);
                    let T = (0,
                        s.useCallback)(() => {
                            let e = P()._l;
                            return (0,
                                u.isUndefined)(e) ? v : e
                        }
                            , [a, v])
                        , I = (0,
                            s.useRef)(T());
                    (0,
                        d.useIsomorphicLayoutEffect)(() => {
                            if (!h.current) {
                                h.current = !0;
                                return
                            }
                            a && C({
                                _l: _ ? I.current : T()
                            })
                        }
                            , [a, b]);
                    let O = k && !h.current
                        , U = e(a, async e => {
                            let s = P()._i
                                , a = P()._r;
                            C({
                                _r: p.UNDEFINED
                            });
                            let i = []
                                , l = T()
                                , [o] = (0,
                                    c.createCacheHelper)(b, e)
                                , d = o().data
                                , m = []
                                , g = null;
                            for (let e = 0; e < l; ++e) {
                                let [l, o] = (0,
                                    f.serialize)(t(e, S ? null : g));
                                if (!l)
                                    break;
                                let [p, h] = (0,
                                    c.createCacheHelper)(b, l)
                                    , v = p().data
                                    , _ = y || s || (0,
                                        u.isUndefined)(v) || w && !e && !(0,
                                            u.isUndefined)(d) || O || d && !(0,
                                                u.isUndefined)(d[e]) && !n.compare(d[e], v);
                                if (r && ("function" == typeof a ? a(v, o) : _)) {
                                    let t = async () => {
                                        if (l in x) {
                                            let e = x[l];
                                            delete x[l],
                                                v = await e
                                        } else
                                            v = await r(o);
                                        h({
                                            data: v,
                                            _k: o
                                        }),
                                            i[e] = v
                                    }
                                        ;
                                    S ? m.push(t) : await t()
                                } else
                                    i[e] = v;
                                S || (g = v)
                            }
                            return S && await Promise.all(m.map(e => e())),
                                C({
                                    _i: p.UNDEFINED
                                }),
                                i
                        }
                            , n)
                        , A = (0,
                            s.useCallback)(function (e, t) {
                                let r = "boolean" == typeof t ? {
                                    revalidate: t
                                } : t || {}
                                    , s = !1 !== r.revalidate;
                                return a ? (s && ((0,
                                    u.isUndefined)(e) ? C({
                                        _i: !0,
                                        _r: r.revalidate
                                    }) : C({
                                        _i: !1,
                                        _r: r.revalidate
                                    })),
                                    arguments.length ? U.mutate(e, {
                                        ...r,
                                        revalidate: s
                                    }) : U.mutate()) : E
                            }, [a, b])
                        , M = (0,
                            s.useCallback)(e => {
                                let r;
                                if (!a)
                                    return E;
                                let [, s] = (0,
                                    c.createCacheHelper)(b, a);
                                if ((0,
                                    m.isFunction)(e) ? r = e(T()) : "number" == typeof e && (r = e),
                                    "number" != typeof r)
                                    return E;
                                s({
                                    _l: r
                                }),
                                    I.current = r;
                                let n = []
                                    , [i] = (0,
                                        c.createCacheHelper)(b, a)
                                    , l = null;
                                for (let e = 0; e < r; ++e) {
                                    let [r] = (0,
                                        f.serialize)(t(e, l))
                                        , [s] = (0,
                                            c.createCacheHelper)(b, r)
                                        , a = r ? s().data : p.UNDEFINED;
                                    if ((0,
                                        u.isUndefined)(a))
                                        return A(i().data);
                                    n.push(a),
                                        l = a
                                }
                                return A(n)
                            }
                                , [a, b, A, T]);
                    return {
                        size: T(),
                        setSize: M,
                        mutate: A,
                        get data() {
                            return U.data
                        },
                        get error() {
                            return U.error
                        },
                        get isValidating() {
                            return U.isValidating
                        },
                        get isLoading() {
                            return U.isLoading
                        }
                    }
                }
                );
        var x = e.i(38703)
            , P = e.i(18279)
            , C = e.i(46475);
        function R(e) {
            return e + 1
        }
        function L(e, t) {
            return new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime()
        }
        function T(e) {
            return e.data
        }
        let I = (0,
            s.createContext)(null);
        e.s(["ProjectsProvider", 0, function (e) {
            let n, a, i, l = (0,
                r.c)(10), { children: o } = e, c = function () {
                    let e, t, s, n, a, i, l, o = (0,
                        r.c)(26), { getToken: c, isSignedIn: u, isLoaded: d } = (0,
                            x.useAuth)();
                    o[0] !== d || o[1] !== u || 20 !== o[2] ? (e = (e, t) => {
                        if (!d || !u || t && !t.meta?.hasNextPage)
                            return null;
                        let r = t?.meta?.nextCursor;
                        return !r && t?.data.length && (r = t.data[t.data.length - 1].createdAt),
                            r ? `/projects?limit=20&cursor=${r}` : "/projects?limit=20"
                    }
                        ,
                        o[0] = d,
                        o[1] = u,
                        o[2] = 20,
                        o[3] = e) : e = o[3];
                    let p = e;
                    o[4] !== c || 20 !== o[5] ? (t = async e => {
                        let t = new URL(e, "http://localhost").searchParams.get("cursor") || void 0
                            , r = await (0,
                                C.getAuthToken)(c);
                        if (!r)
                            throw Error("No authentication token");
                        let s = await (0,
                            P.getProjectsAPI)(20, r, t);
                        return {
                            data: Array.isArray(s.data) ? s.data : [],
                            meta: s.meta ?? null
                        }
                    }
                        ,
                        o[4] = c,
                        o[5] = 20,
                        o[6] = t) : t = o[6];
                    let f = t;
                    o[7] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                        revalidateOnFocus: !0,
                        revalidateFirstPage: !1,
                        revalidateAll: !1,
                        keepPreviousData: !0,
                        errorRetryCount: 0
                    },
                        o[7] = s) : s = o[7];
                    let { data: m, error: g, size: h, setSize: b, isLoading: v, isValidating: y, mutate: _ } = S(p, f, s);
                    e: {
                        let e;
                        if (!m) {
                            let e;
                            o[8] === Symbol.for("react.memo_cache_sentinel") ? (e = [],
                                o[8] = e) : e = o[8],
                                n = e;
                            break e
                        }
                        if (o[9] !== m) {
                            let t = m.flatMap(T)
                                , r = new Set
                                , s = [];
                            for (let e of t)
                                r.has(e.id) || (r.add(e.id),
                                    s.push(e));
                            e = s.sort(L),
                                o[9] = m,
                                o[10] = e
                        } else
                            e = o[10];
                        n = e
                    }
                    let w = n
                        , k = m?.[m.length - 1]
                        , j = k?.meta?.hasNextPage ?? !1
                        , E = h > 0 && m && void 0 === m[h - 1];
                    o[11] !== j || o[12] !== y || o[13] !== b ? (a = () => {
                        j && !y && b(R)
                    }
                        ,
                        o[11] = j,
                        o[12] = y,
                        o[13] = b,
                        o[14] = a) : a = o[14];
                    let I = a;
                    o[15] !== _ ? (i = () => _(),
                        o[15] = _,
                        o[16] = i) : i = o[16];
                    let O = i
                        , U = v && !m
                        , A = E || !1
                        , M = k?.meta ?? null;
                    return o[17] !== g || o[18] !== j || o[19] !== I || o[20] !== w || o[21] !== O || o[22] !== U || o[23] !== A || o[24] !== M ? (l = {
                        projects: w,
                        isLoading: U,
                        isLoadingMore: A,
                        error: g,
                        meta: M,
                        hasNextPage: j,
                        loadMore: I,
                        refetch: O
                    },
                        o[17] = g,
                        o[18] = j,
                        o[19] = I,
                        o[20] = w,
                        o[21] = O,
                        o[22] = U,
                        o[23] = A,
                        o[24] = M,
                        o[25] = l) : l = o[25],
                        l
                }(), [u, d] = (0,
                    s.useState)("");
            e: {
                let e;
                if (!u.trim()) {
                    n = c.projects;
                    break e
                }
                if (l[0] !== c.projects || l[1] !== u) {
                    let t = u.toLowerCase();
                    e = c.projects.filter(e => e.name.toLowerCase().includes(t)),
                        l[0] = c.projects,
                        l[1] = u,
                        l[2] = e
                } else
                    e = l[2];
                n = e
            }
            let p = n;
            l[3] !== p || l[4] !== c || l[5] !== u ? (a = {
                ...c,
                searchQuery: u,
                setSearchQuery: d,
                filteredProjects: p
            },
                l[3] = p,
                l[4] = c,
                l[5] = u,
                l[6] = a) : a = l[6];
            let f = a;
            return l[7] !== o || l[8] !== f ? (i = (0,
                t.jsx)(I.Provider, {
                    value: f,
                    children: o
                }),
                l[7] = o,
                l[8] = f,
                l[9] = i) : i = l[9],
                i
        }
            , "useProjectsContext", 0, function () {
                let e = (0,
                    s.useContext)(I);
                if (!e)
                    throw Error("useProjectsContext must be used within a ProjectsProvider");
                return e
            }
        ], 80580)
    }
    , 62944, (e, t, r) => {
        t.exports = {
            name: "next",
            version: "16.2.5",
            description: "The React Framework",
            main: "./dist/server/next.js",
            license: "MIT",
            repository: "vercel/next.js",
            bugs: "https://github.com/vercel/next.js/issues",
            homepage: "https://nextjs.org",
            types: "index.d.ts",
            files: ["dist", "app.js", "app.d.ts", "babel.js", "babel.d.ts", "client.js", "client.d.ts", "compat", "cache.js", "cache.d.ts", "constants.js", "constants.d.ts", "document.js", "document.d.ts", "dynamic.js", "dynamic.d.ts", "error.js", "error.d.ts", "future", "legacy", "script.js", "script.d.ts", "server.js", "server.d.ts", "head.js", "head.d.ts", "image.js", "image.d.ts", "link.js", "link.d.ts", "form.js", "form.d.ts", "router.js", "router.d.ts", "jest.js", "jest.d.ts", "og.js", "og.d.ts", "root-params.js", "root-params.d.ts", "types.d.ts", "types.js", "index.d.ts", "types/global.d.ts", "types/compiled.d.ts", "image-types/global.d.ts", "navigation-types/navigation.d.ts", "navigation-types/compat/navigation.d.ts", "font", "navigation.js", "navigation.d.ts", "headers.js", "headers.d.ts", "navigation-types", "web-vitals.js", "web-vitals.d.ts", "experimental/testing/server.js", "experimental/testing/server.d.ts", "experimental/testmode/playwright.js", "experimental/testmode/playwright.d.ts", "experimental/testmode/playwright/msw.js", "experimental/testmode/playwright/msw.d.ts", "experimental/testmode/proxy.js", "experimental/testmode/proxy.d.ts"],
            bin: {
                next: "./dist/bin/next"
            },
            scripts: {
                dev: "cross-env NEXT_SERVER_NO_MANGLE=1 taskr",
                build: "taskr release",
                prepublishOnly: "cd ../../ && turbo run build",
                types: "tsc --project tsconfig.build.json --declaration --emitDeclarationOnly --stripInternal --declarationDir dist",
                typescript: "tsec --noEmit",
                "ncc-compiled": "taskr ncc",
                storybook: "BROWSER=none storybook dev -p 6006",
                "build-storybook": "storybook build",
                "test-storybook": "test-storybook"
            },
            taskr: {
                requires: ["./taskfile-webpack.js", "./taskfile-ncc.js", "./taskfile-swc.js", "./taskfile-watch.js"]
            },
            dependencies: {
                "@next/env": "16.2.5",
                "@swc/helpers": "0.5.15",
                "baseline-browser-mapping": "^2.9.19",
                "caniuse-lite": "^1.0.30001579",
                postcss: "8.4.31",
                "styled-jsx": "5.1.6"
            },
            peerDependencies: {
                "@opentelemetry/api": "^1.1.0",
                "@playwright/test": "^1.51.1",
                "babel-plugin-react-compiler": "*",
                react: "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
                "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
                sass: "^1.3.0"
            },
            peerDependenciesMeta: {
                "babel-plugin-react-compiler": {
                    optional: !0
                },
                sass: {
                    optional: !0
                },
                "@opentelemetry/api": {
                    optional: !0
                },
                "@playwright/test": {
                    optional: !0
                }
            },
            optionalDependencies: {
                sharp: "^0.34.5",
                "@next/swc-darwin-arm64": "16.2.5",
                "@next/swc-darwin-x64": "16.2.5",
                "@next/swc-linux-arm64-gnu": "16.2.5",
                "@next/swc-linux-arm64-musl": "16.2.5",
                "@next/swc-linux-x64-gnu": "16.2.5",
                "@next/swc-linux-x64-musl": "16.2.5",
                "@next/swc-win32-arm64-msvc": "16.2.5",
                "@next/swc-win32-x64-msvc": "16.2.5"
            },
            devDependencies: {
                "@babel/core": "7.26.10",
                "@babel/eslint-parser": "7.24.6",
                "@babel/generator": "7.27.0",
                "@babel/plugin-syntax-bigint": "7.8.3",
                "@babel/plugin-syntax-dynamic-import": "7.8.3",
                "@babel/plugin-syntax-import-attributes": "7.26.0",
                "@babel/plugin-syntax-jsx": "7.25.9",
                "@babel/plugin-syntax-typescript": "7.25.4",
                "@babel/plugin-transform-class-properties": "7.25.9",
                "@babel/plugin-transform-export-namespace-from": "7.25.9",
                "@babel/plugin-transform-modules-commonjs": "7.26.3",
                "@babel/plugin-transform-numeric-separator": "7.25.9",
                "@babel/plugin-transform-object-rest-spread": "7.25.9",
                "@babel/plugin-transform-runtime": "7.26.10",
                "@babel/preset-env": "7.26.9",
                "@babel/preset-react": "7.26.3",
                "@babel/preset-typescript": "7.27.0",
                "@babel/runtime": "7.27.0",
                "@babel/traverse": "7.27.0",
                "@babel/types": "7.27.0",
                "@base-ui-components/react": "1.0.0-beta.2",
                "@capsizecss/metrics": "3.4.0",
                "@edge-runtime/cookies": "6.0.0",
                "@edge-runtime/ponyfill": "4.0.0",
                "@edge-runtime/primitives": "6.0.0",
                "@hapi/accept": "5.0.2",
                "@jest/transform": "29.5.0",
                "@jest/types": "29.5.0",
                "@modelcontextprotocol/sdk": "1.18.1",
                "@mswjs/interceptors": "0.23.0",
                "@napi-rs/triples": "1.2.0",
                "@next/font": "16.2.5",
                "@next/polyfill-module": "16.2.5",
                "@next/polyfill-nomodule": "16.2.5",
                "@next/react-refresh-utils": "16.2.5",
                "@next/swc": "16.2.5",
                "@opentelemetry/api": "1.6.0",
                "@playwright/test": "1.58.2",
                "@rspack/core": "1.6.7",
                "@storybook/addon-a11y": "8.6.0",
                "@storybook/addon-essentials": "8.6.0",
                "@storybook/addon-interactions": "8.6.0",
                "@storybook/addon-webpack5-compiler-swc": "3.0.0",
                "@storybook/blocks": "8.6.0",
                "@storybook/react": "8.6.0",
                "@storybook/react-webpack5": "8.6.0",
                "@storybook/test": "8.6.0",
                "@storybook/test-runner": "0.21.0",
                "@swc/core": "1.11.24",
                "@swc/types": "0.1.7",
                "@taskr/clear": "1.1.0",
                "@taskr/esnext": "1.1.0",
                "@types/babel__code-frame": "7.0.6",
                "@types/babel__core": "7.20.5",
                "@types/babel__generator": "7.27.0",
                "@types/babel__template": "7.4.4",
                "@types/babel__traverse": "7.20.7",
                "@types/bytes": "3.1.1",
                "@types/ci-info": "2.0.0",
                "@types/compression": "0.0.36",
                "@types/content-disposition": "0.5.4",
                "@types/content-type": "1.1.3",
                "@types/cookie": "0.3.3",
                "@types/cross-spawn": "6.0.0",
                "@types/debug": "4.1.5",
                "@types/express-serve-static-core": "4.17.33",
                "@types/fresh": "0.5.0",
                "@types/glob": "7.1.1",
                "@types/jsonwebtoken": "9.0.0",
                "@types/lodash": "4.14.198",
                "@types/lodash.curry": "4.1.6",
                "@types/path-to-regexp": "1.7.0",
                "@types/picomatch": "2.3.3",
                "@types/platform": "1.3.4",
                "@types/react": "19.0.8",
                "@types/react-dom": "19.0.3",
                "@types/react-is": "18.2.4",
                "@types/semver": "7.3.1",
                "@types/send": "0.14.4",
                "@types/serve-handler": "6.1.4",
                "@types/shell-quote": "1.7.1",
                "@types/text-table": "0.2.1",
                "@types/ua-parser-js": "0.7.36",
                "@types/webpack-sources1": "npm:@types/webpack-sources@0.1.5",
                "@types/ws": "8.2.0",
                "@vercel/ncc": "0.34.0",
                "@vercel/nft": "0.27.1",
                "@vercel/routing-utils": "5.2.0",
                "@vercel/turbopack-ecmascript-runtime": "*",
                acorn: "8.14.0",
                anser: "1.4.9",
                arg: "4.1.0",
                assert: "2.0.0",
                "async-retry": "1.2.3",
                "async-sema": "3.0.0",
                "axe-playwright": "2.0.3",
                "babel-loader": "10.0.0",
                "babel-plugin-react-compiler": "0.0.0-experimental-1371fcb-20260227",
                "babel-plugin-transform-define": "2.0.0",
                "babel-plugin-transform-react-remove-prop-types": "0.4.24",
                "browserify-zlib": "0.2.0",
                browserslist: "4.28.1",
                buffer: "5.6.0",
                busboy: "1.6.0",
                bytes: "3.1.1",
                "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540",
                "cli-select": "1.1.2",
                "client-only": "0.0.1",
                commander: "12.1.0",
                "comment-json": "3.0.3",
                compression: "1.7.4",
                conf: "5.0.0",
                "constants-browserify": "1.0.0",
                "content-disposition": "0.5.3",
                "content-type": "1.0.4",
                cookie: "0.4.1",
                "cross-env": "6.0.3",
                "cross-spawn": "7.0.3",
                "crypto-browserify": "3.12.0",
                "css-loader": "7.1.2",
                "css.escape": "1.5.1",
                "cssnano-preset-default": "7.0.6",
                "data-uri-to-buffer": "3.0.1",
                debug: "4.1.1",
                devalue: "2.0.1",
                "domain-browser": "4.19.0",
                "edge-runtime": "4.0.1",
                events: "3.3.0",
                "find-up": "4.1.0",
                fresh: "0.5.2",
                glob: "7.1.7",
                "gzip-size": "5.1.1",
                "http-proxy": "1.18.1",
                "http-proxy-agent": "5.0.0",
                "https-browserify": "1.0.0",
                "https-proxy-agent": "5.0.1",
                "icss-utils": "5.1.0",
                "ignore-loader": "0.1.2",
                "image-size": "1.2.1",
                "ipaddr.js": "2.2.0",
                "is-docker": "2.0.0",
                "is-wsl": "2.2.0",
                "jest-worker": "27.5.1",
                json5: "2.2.3",
                jsonwebtoken: "9.0.0",
                "loader-runner": "4.3.0",
                "loader-utils2": "npm:loader-utils@2.0.4",
                "loader-utils3": "npm:loader-utils@3.1.3",
                "lodash.curry": "4.1.1",
                "mini-css-extract-plugin": "2.4.4",
                msw: "2.3.0",
                nanoid: "3.1.32",
                "native-url": "0.3.4",
                "neo-async": "2.6.1",
                "node-html-parser": "5.3.3",
                ora: "4.0.4",
                "os-browserify": "0.3.0",
                "p-limit": "3.1.0",
                "p-queue": "6.6.2",
                "path-browserify": "1.0.1",
                "path-to-regexp": "6.3.0",
                picomatch: "4.0.1",
                "postcss-flexbugs-fixes": "5.0.2",
                "postcss-modules-extract-imports": "3.0.0",
                "postcss-modules-local-by-default": "4.2.0",
                "postcss-modules-scope": "3.0.0",
                "postcss-modules-values": "4.0.0",
                "postcss-preset-env": "7.4.3",
                "postcss-safe-parser": "6.0.0",
                "postcss-scss": "4.0.3",
                "postcss-value-parser": "4.2.0",
                process: "0.11.10",
                punycode: "2.1.1",
                "querystring-es3": "0.2.1",
                "raw-body": "2.4.1",
                "react-refresh": "0.12.0",
                recast: "0.23.11",
                "regenerator-runtime": "0.13.4",
                "safe-stable-stringify": "2.5.0",
                "sass-loader": "16.0.5",
                "schema-utils2": "npm:schema-utils@2.7.1",
                "schema-utils3": "npm:schema-utils@3.0.0",
                semver: "7.3.2",
                send: "0.18.0",
                "serve-handler": "6.1.6",
                "server-only": "0.0.1",
                setimmediate: "1.0.5",
                "shell-quote": "1.7.3",
                "source-map": "0.6.1",
                "source-map-loader": "5.0.0",
                "source-map08": "npm:source-map@0.8.0-beta.0",
                "stacktrace-parser": "0.1.10",
                storybook: "8.6.0",
                "stream-browserify": "3.0.0",
                "stream-http": "3.1.1",
                "strict-event-emitter": "0.5.0",
                "string-hash": "1.1.3",
                string_decoder: "1.3.0",
                "strip-ansi": "6.0.0",
                "style-loader": "4.0.0",
                superstruct: "1.0.3",
                tar: "7.5.11",
                taskr: "1.1.0",
                terser: "5.27.0",
                "terser-webpack-plugin": "5.3.9",
                "text-table": "0.2.0",
                "timers-browserify": "2.0.12",
                "tty-browserify": "0.0.1",
                typescript: "5.9.2",
                "ua-parser-js": "1.0.35",
                unistore: "3.4.1",
                util: "0.12.4",
                "vm-browserify": "1.1.2",
                watchpack: "2.4.0",
                "web-vitals": "4.2.1",
                webpack: "5.98.0",
                "webpack-sources1": "npm:webpack-sources@1.4.3",
                "webpack-sources3": "npm:webpack-sources@3.2.3",
                ws: "8.2.3",
                zod: "3.25.76",
                "zod-validation-error": "3.4.0"
            },
            keywords: ["react", "framework", "nextjs", "web", "server", "node", "front-end", "backend", "cli", "vercel"],
            engines: {
                node: ">=20.9.0"
            }
        }
    }
    , 78424, 22375, 82524, 89397, e => {
        "use strict";
        let t;
        var r, s, n, a, i, l, o, c = e.i(41383), u = e.i(47167), d = e.i(93375), p = e.i(28069), f = e.i(15331);
        e.s([], 22375),
            u.default.env.NEXT_PUBLIC_CLERK_JS_VERSION,
            u.default.env.NEXT_PUBLIC_CLERK_JS_URL,
            u.default.env.CLERK_API_VERSION,
            u.default.env.CLERK_SECRET_KEY,
            u.default.env.CLERK_MACHINE_SECRET_KEY,
            u.default.env.CLERK_ENCRYPTION_KEY,
            u.default.env.CLERK_API_URL || (t = (0,
                p.parsePublishableKey)("pk_live_Y2xlcmsud2ViaWxkLmlvJA")?.frontendApi,
                t?.startsWith("clerk.") && d.LEGACY_DEV_INSTANCE_SUFFIXES.some(e => t?.endsWith(e)) ? d.PROD_API_URL : d.LOCAL_ENV_SUFFIXES.some(e => t?.endsWith(e)) ? d.LOCAL_API_URL : d.STAGING_ENV_SUFFIXES.some(e => t?.endsWith(e)) ? d.STAGING_API_URL : d.PROD_API_URL),
            u.default.env.NEXT_PUBLIC_CLERK_DOMAIN,
            u.default.env.NEXT_PUBLIC_CLERK_PROXY_URL,
            (0,
                f.isTruthy)(u.default.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
            (0,
                f.isTruthy)(u.default.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),
            (0,
                f.isTruthy)(u.default.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);
        let m = (0,
            f.isTruthy)(u.default.env.NEXT_PUBLIC_CLERK_KEYLESS_DISABLED) || !1;
        e.s(["KEYLESS_DISABLED", 0, m, "SDK_METADATA", 0, {
            name: "@clerk/nextjs",
            version: "6.39.3",
            environment: "production"
        }], 82524);
        var g = e.i(62944);
        let h = null != (a = null == (n = null == (s = g.default) ? void 0 : s.version) ? void 0 : n.startsWith("13.")) && a || null != (o = null == (l = null == (i = g.default) ? void 0 : i.version) ? void 0 : l.startsWith("14.0")) && o;
        (null == (r = g.default) ? void 0 : r.version) && isNaN(parseInt(g.default.version.split(".")[0], 10)),
            e.s(["isNextWithUnstableServerActions", 0, h], 89397);
        let b = !h && (0,
            c.isDevelopmentEnvironment)() && !m;
        e.s(["canUseKeyless", 0, b], 78424)
    }
    , 11152, e => {
        "use strict";
        var t = e.i(95187);
        let r = (0,
            t.createServerReference)("002a344192eb66561b18b6f132dd8508121a3b2c8b", t.callServer, void 0, t.findSourceMapURL, "detectKeylessEnvDriftAction");
        e.s(["detectKeylessEnvDriftAction", 0, r])
    }
    , 22528, e => {
        "use strict";
        var t = e.i(74041);
        e.s(["usePagesRouter", 0, () => ({
            pagesRouter: (0,
                t.useRouter)()
        })])
    }
    , 89807, e => {
        "use strict";
        e.i(92448);
        var t = e.i(33917)
            , r = e.i(71645)
            , s = e.i(97651)
            , n = e.i(41383)
            , a = e.i(27085)
            , i = e.i(22528);
        function l(t, o, c = !0) {
            let u = (() => {
                let t = r.default.useRef()
                    , { pagesRouter: s } = (0,
                        i.usePagesRouter)();
                if (s)
                    if (t.current)
                        return t.current;
                    else
                        return t.current = s.pathname.replace(/\/\[\[\.\.\..*/, ""),
                            t.current;
                let n = e.r(18566).usePathname
                    , a = e.r(18566).useParams
                    , l = (n() || "").split("/").filter(Boolean)
                    , o = Object.values(a() || {}).filter(e => Array.isArray(e)).flat(1 / 0);
                return t.current || (t.current = `/${l.slice(0, l.length - o.length).join("/")}`),
                    t.current
            }
            )()
                , d = (0,
                    s.useRoutingProps)(t, o, {
                        path: u
                    });
            return ((e, t, s, l = !0) => {
                let o = r.default.useRef(0)
                    , { pagesRouter: c } = (0,
                        i.usePagesRouter)()
                    , { session: u, isLoaded: d } = (0,
                        a.useSession)();
                (0,
                    n.isProductionEnvironment)() || r.default.useEffect(() => {
                        if (!d || s && "path" !== s || l && !u)
                            return;
                        let r = new AbortController
                            , n = () => {
                                let r = c ? `${t}/[[...index]].tsx` : `${t}/[[...rest]]/page.tsx`;
                                throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${t}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${r}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${t}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${t}(.*)". For more information, see: https://clerk.com/docs/reference/nextjs/clerk-middleware#create-route-matcher
`)
                            }
                            ;
                        return c ? c.pathname.match(/\[\[\.\.\..+]]/) || n() : (async () => {
                            let t;
                            if (o.current++,
                                !(o.current > 1)) {
                                try {
                                    let s = `${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;
                                    t = await fetch(s, {
                                        signal: r.signal
                                    })
                                } catch { }
                                (null == t ? void 0 : t.status) === 404 && n()
                            }
                        }
                        )(),
                            () => {
                                o.current > 1 && r.abort()
                            }
                    }
                        , [d])
            }
            )(t, u, d.routing, c),
                d
        }
        let o = Object.assign(e => r.default.createElement(t.UserProfile, {
            ...l("UserProfile", e)
        }), {
            ...t.UserProfile
        })
            , c = Object.assign(e => r.default.createElement(t.OrganizationProfile, {
                ...l("OrganizationProfile", e)
            }), {
                ...t.OrganizationProfile
            });
        e.s(["OrganizationProfile", 0, c, "SignIn", 0, e => r.default.createElement(t.SignIn, {
            ...l("SignIn", e, !1)
        }), "SignUp", 0, e => r.default.createElement(t.SignUp, {
            ...l("SignUp", e, !1)
        }), "UserProfile", 0, o], 89807)
    }
    , 8341, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = {
            cancelIdleCallback: function () {
                return i
            },
            requestIdleCallback: function () {
                return a
            }
        };
        for (var n in s)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: s[n]
            });
        let a = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
                e({
                    didTimeout: !1,
                    timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        }
            , i = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (e) {
                return clearTimeout(e)
            }
            ;
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }),
            Object.assign(r.default, r),
            t.exports = r.default)
    }
    , 19083, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = {
            ESCAPE_REGEX: function () {
                return i
            },
            htmlEscapeAttributeString: function () {
                return u
            },
            htmlEscapeJsonString: function () {
                return c
            }
        };
        for (var n in s)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: s[n]
            });
        let a = {
            "&": "\\u0026",
            ">": "\\u003e",
            "<": "\\u003c",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        }
            , i = /[&><\u2028\u2029]/g
            , l = {
                "&": "&amp;",
                '"': "&quot;",
                "'": "&#39;",
                "<": "&lt;",
                ">": "&gt;"
            }
            , o = /[&"'<>]/g;
        function c(e) {
            return e.replace(i, e => a[e])
        }
        function u(e) {
            return e.replace(o, e => l[e])
        }
    }
    , 79520, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = {
            default: function () {
                return _
            },
            handleClientScriptLoad: function () {
                return b
            },
            initScriptLoader: function () {
                return v
            }
        };
        for (var n in s)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: s[n]
            });
        let a = e.r(55682)
            , i = e.r(90809)
            , l = e.r(43476)
            , o = a._(e.r(74080))
            , c = i._(e.r(71645))
            , u = e.r(42732)
            , d = e.r(22737)
            , p = e.r(8341)
            , f = e.r(19083)
            , m = new Map
            , g = new Set
            , h = e => {
                let { src: t, id: r, onLoad: s = () => { }
                    , onReady: n = null, dangerouslySetInnerHTML: a, children: i = "", strategy: l = "afterInteractive", onError: c, stylesheets: u } = e
                    , p = r || t;
                if (p && g.has(p))
                    return;
                if (m.has(t)) {
                    g.add(p),
                        m.get(t).then(s, c);
                    return
                }
                let f = () => {
                    n && n(),
                        g.add(p)
                }
                    , h = document.createElement("script")
                    , b = new Promise((e, t) => {
                        h.addEventListener("load", function (t) {
                            e(),
                                s && s.call(this, t),
                                f()
                        }),
                            h.addEventListener("error", function (e) {
                                t(e)
                            })
                    }
                    ).catch(function (e) {
                        c && c(e)
                    });
                a ? (h.innerHTML = a.__html || "",
                    f()) : i ? (h.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "",
                        f()) : t && (h.src = t,
                            m.set(t, b)),
                    (0,
                        d.setAttributesFromProps)(h, e),
                    "worker" === l && h.setAttribute("type", "text/partytown"),
                    h.setAttribute("data-nscript", l),
                    u && (e => {
                        if (o.default.preinit)
                            return e.forEach(e => {
                                o.default.preinit(e, {
                                    as: "style"
                                })
                            }
                            );
                        if ("u" > typeof window) {
                            let t = document.head;
                            e.forEach(e => {
                                let r = document.createElement("link");
                                r.type = "text/css",
                                    r.rel = "stylesheet",
                                    r.href = e,
                                    t.appendChild(r)
                            }
                            )
                        }
                    }
                    )(u),
                    document.body.appendChild(h)
            }
            ;
        function b(e) {
            let { strategy: t = "afterInteractive" } = e;
            "lazyOnload" === t ? window.addEventListener("load", () => {
                (0,
                    p.requestIdleCallback)(() => h(e))
            }
            ) : h(e)
        }
        function v(e) {
            e.forEach(b),
                [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    g.add(t)
                }
                )
        }
        function y(e) {
            let { id: t, src: r = "", onLoad: s = () => { }
                , onReady: n = null, strategy: a = "afterInteractive", onError: i, stylesheets: d, ...m } = e
                , { updateScripts: b, scripts: v, getIsSsr: y, appDir: _, nonce: w } = (0,
                    c.useContext)(u.HeadManagerContext);
            w = m.nonce || w;
            let k = (0,
                c.useRef)(!1);
            (0,
                c.useEffect)(() => {
                    let e = t || r;
                    k.current || (n && e && g.has(e) && n(),
                        k.current = !0)
                }
                    , [n, t, r]);
            let j = (0,
                c.useRef)(!1);
            if ((0,
                c.useEffect)(() => {
                    if (!j.current) {
                        if ("afterInteractive" === a)
                            h(e);
                        else
                            "lazyOnload" === a && ("complete" === document.readyState ? (0,
                                p.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                                    (0,
                                        p.requestIdleCallback)(() => h(e))
                                }
                                ));
                        j.current = !0
                    }
                }
                    , [e, a]),
                ("beforeInteractive" === a || "worker" === a) && (b ? (v[a] = (v[a] || []).concat([{
                    id: t,
                    src: r,
                    onLoad: s,
                    onReady: n,
                    onError: i,
                    ...m,
                    nonce: w
                }]),
                    b(v)) : y && y() ? g.add(t || r) : y && !y() && h({
                        ...e,
                        nonce: w
                    })),
                _) {
                if (d && d.forEach(e => {
                    o.default.preinit(e, {
                        as: "style"
                    })
                }
                ),
                    "beforeInteractive" === a)
                    if (!r)
                        return m.dangerouslySetInnerHTML && (m.children = m.dangerouslySetInnerHTML.__html,
                            delete m.dangerouslySetInnerHTML),
                            (0,
                                l.jsx)("script", {
                                    nonce: w,
                                    dangerouslySetInnerHTML: {
                                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,
                                            f.htmlEscapeJsonString)(JSON.stringify([0, {
                                                ...m,
                                                id: t
                                            }]))})`
                                    }
                                });
                    else
                        return o.default.preload(r, m.integrity ? {
                            as: "script",
                            integrity: m.integrity,
                            nonce: w,
                            crossOrigin: m.crossOrigin
                        } : {
                            as: "script",
                            nonce: w,
                            crossOrigin: m.crossOrigin
                        }),
                            (0,
                                l.jsx)("script", {
                                    nonce: w,
                                    dangerouslySetInnerHTML: {
                                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,
                                            f.htmlEscapeJsonString)(JSON.stringify([r, {
                                                ...m,
                                                id: t
                                            }]))})`
                                    }
                                });
                "afterInteractive" === a && r && o.default.preload(r, m.integrity ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: w,
                    crossOrigin: m.crossOrigin
                } : {
                    as: "script",
                    nonce: w,
                    crossOrigin: m.crossOrigin
                })
            }
            return null
        }
        Object.defineProperty(y, "__nextScript", {
            value: !0
        });
        let _ = y;
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }),
            Object.assign(r.default, r),
            t.exports = r.default)
    }
    , 3303, (e, t, r) => {
        t.exports = e.r(79520)
    }
    , 41895, 869, 17e3, 50731, 87106, 12288, 64936, e => {
        "use strict";
        var t = e.i(92448)
            , r = e.i(75369);
        let s = new Set;
        var n = e.i(70703)
            , a = e.i(18566)
            , i = e.i(62944)
            , l = e.i(71645);
        let o = "u" > typeof window ? l.default.useLayoutEffect : l.default.useEffect;
        e.s(["useSafeLayoutEffect", 0, o], 869);
        let c = l.default.createContext(void 0);
        c.displayName = "ClerkNextOptionsCtx";
        let u = () => {
            let e = l.default.useContext(c);
            return null == e ? void 0 : e.value
        }
            , d = e => {
                let { children: t, options: r } = e;
                return l.default.createElement(c.Provider, {
                    value: {
                        value: r
                    }
                }, t)
            }
            ;
        e.s(["ClerkNextOptionsProvider", 0, d, "useClerkNextOptions", 0, u], 17e3);
        var p = e.i(27085);
        e.i(97651);
        var f = e.i(5045)
            , m = e.i(3303);
        function g(e) {
            let { publishableKey: t, clerkJSUrl: r, clerkJSVersion: s, clerkJSVariant: n, nonce: a } = u()
                , { domain: i, proxyUrl: o } = (0,
                    p.useClerk)();
            if (!t)
                return null;
            let c = {
                domain: i,
                proxyUrl: o,
                publishableKey: t,
                clerkJSUrl: r,
                clerkJSVersion: s,
                clerkJSVariant: n,
                nonce: a
            }
                , d = (0,
                    f.clerkJsScriptUrl)(c)
                , g = "app" === e.router ? "script" : m.default;
            return l.default.createElement(g, {
                src: d,
                "data-clerk-js-script": !0,
                async: !0,
                defer: "pages" !== e.router && void 0,
                crossOrigin: "anonymous",
                strategy: "pages" === e.router ? "beforeInteractive" : void 0,
                ...(0,
                    f.buildClerkJsScriptAttributes)(c)
            })
        }
        e.s(["ClerkJSScript", 0, g], 50731);
        var h = e.i(78424)
            , b = e.i(47167);
        e.i(22375);
        var v = e.i(15331)
            , y = e.i(82524);
        let _ = e => {
            var t;
            return {
                ...e,
                publishableKey: e.publishableKey || "pk_live_Y2xlcmsud2ViaWxkLmlvJA",
                clerkJSUrl: e.clerkJSUrl || b.default.env.NEXT_PUBLIC_CLERK_JS_URL,
                clerkJSVersion: e.clerkJSVersion || b.default.env.NEXT_PUBLIC_CLERK_JS_VERSION,
                proxyUrl: e.proxyUrl || b.default.env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
                domain: e.domain || b.default.env.NEXT_PUBLIC_CLERK_DOMAIN || "",
                isSatellite: e.isSatellite || (0,
                    v.isTruthy)(b.default.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
                signInUrl: e.signInUrl || "/sign-in",
                signUpUrl: e.signUpUrl || "/sign-up",
                signInForceRedirectUrl: e.signInForceRedirectUrl || b.default.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || "",
                signUpForceRedirectUrl: e.signUpForceRedirectUrl || b.default.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL || "",
                signInFallbackRedirectUrl: e.signInFallbackRedirectUrl || b.default.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || "",
                signUpFallbackRedirectUrl: e.signUpFallbackRedirectUrl || b.default.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || "",
                afterSignInUrl: e.afterSignInUrl || b.default.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
                afterSignUpUrl: e.afterSignUpUrl || b.default.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
                newSubscriptionRedirectUrl: e.newSubscriptionRedirectUrl || b.default.env.NEXT_PUBLIC_CLERK_CHECKOUT_CONTINUE_URL || "",
                telemetry: null != (t = e.telemetry) ? t : {
                    disabled: (0,
                        v.isTruthy)(b.default.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),
                    debug: (0,
                        v.isTruthy)(b.default.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG)
                },
                sdkMetadata: y.SDK_METADATA
            }
        }
            ;
        e.s(["mergeNextClerkPropsWithEnv", 0, _], 87106),
            e.i(75372);
        var w = e.i(24440)
            , k = e.i(22528);
        let j = () => {
            var e, t;
            let r = (0,
                p.useClerk)()
                , { pagesRouter: s } = (0,
                    k.usePagesRouter)();
            return null == (t = r.telemetry) || t.record((0,
                w.eventFrameworkMetadata)({
                    router: s ? "pages" : "app",
                    ...(null == (e = null == globalThis ? void 0 : globalThis.next) ? void 0 : e.version) ? {
                        nextjsVersion: globalThis.next.version
                    } : {}
                })),
                null
        }
            ;
        e.s(["RouterTelemetry", 0, j], 12288);
        var E = e.i(89397)
            , S = e.i(11152)
            , x = e.i(95187);
        let P = (0,
            x.createServerReference)("00fbe07e7e04046e43e38db2f01895a24555d48512", x.callServer, void 0, x.findSourceMapURL, "invalidateCacheAction");
        function C(e) {
            return e
        }
        e.s(["removeBasePath", 0, C], 64936);
        let R = e => {
            var t;
            return null != window.__clerk_internal_navigations || (window.__clerk_internal_navigations = {}),
                null != (t = window.__clerk_internal_navigations)[e] || (t[e] = {}),
                window.__clerk_internal_navigations[e]
        }
            , L = e => {
                let { windowNav: t, routerNav: r, name: s } = e
                    , n = (0,
                        a.usePathname)()
                    , [i, o] = (0,
                        l.useTransition)();
                t && (R(s).fun = (e, n) => new Promise(a => {
                    var i, l;
                    null != (i = R(s)).promisesBuffer || (i.promisesBuffer = []),
                        null == (l = R(s).promisesBuffer) || l.push(a),
                        o(() => {
                            var s, a, i;
                            (null == (s = null == n ? void 0 : n.__internal_metadata) ? void 0 : s.navigationType) === "internal" ? t((null != (i = null == (a = window.next) ? void 0 : a.version) ? i : "") < "14.1.0" ? history.state : null, "", e) : r(C(e))
                        }
                        )
                }
                ));
                let c = () => {
                    var e;
                    null == (e = R(s).promisesBuffer) || e.forEach(e => e()),
                        R(s).promisesBuffer = []
                }
                    ;
                return (0,
                    l.useEffect)(() => (c(),
                        c), []),
                    (0,
                        l.useEffect)(() => {
                            i || c()
                        }
                            , [n, i]),
                    (0,
                        l.useCallback)((e, t) => R(s).fun(e, t), [])
            }
            , T = (0,
                n.default)(() => e.A(98943).then(e => e.KeylessCreatorOrReader))
            , I = e => {
                let n, c;
                if (E.isNextWithUnstableServerActions) {
                    var p, f;
                    let e = `Clerk:
Your current Next.js version (${i.default.version}) will be deprecated in the next major release of "@clerk/nextjs". Please upgrade to next@14.1.0 or later.`;
                    (0,
                        r.inBrowser)() ? (p = e,
                            s.has(p) || (s.add(p),
                                console.warn(p))) : (f = `
\x1b[43m----------
${e}
----------\x1b[0m
`,
                                    s.has(f) || (console.log(f),
                                        s.add(f)))
                }
                let { __unstable_invokeMiddlewareOnAuthStateChange: m = !0, children: b } = e
                    , v = (0,
                        a.useRouter)()
                    , y = (n = (0,
                        a.useRouter)(),
                        L({
                            windowNav: "u" > typeof window ? window.history.pushState.bind(window.history) : void 0,
                            routerNav: n.push.bind(n),
                            name: "push"
                        }))
                    , w = (c = (0,
                        a.useRouter)(),
                        L({
                            windowNav: "u" > typeof window ? window.history.replaceState.bind(window.history) : void 0,
                            routerNav: c.replace.bind(c),
                            name: "replace"
                        }))
                    , [k, x] = (0,
                        l.useTransition)();
                if (o(() => {
                    h.canUseKeyless && (0,
                        S.detectKeylessEnvDriftAction)()
                }
                    , []),
                    u())
                    return e.children;
                (0,
                    l.useEffect)(() => {
                        var e;
                        k || null == (e = window.__clerk_internal_invalidateCachePromise) || e.call(window)
                    }
                        , [k]),
                    o(() => {
                        window.__unstable__onBeforeSetActive = e => new Promise(t => {
                            var r;
                            window.__clerk_internal_invalidateCachePromise = t;
                            let s = (null == (r = null == window ? void 0 : window.next) ? void 0 : r.version) || "";
                            s.startsWith("13") ? x(() => {
                                v.refresh()
                            }
                            ) : (s.startsWith("15") || s.startsWith("16")) && "sign-out" === e ? t() : P().then(() => t())
                        }
                        ),
                            window.__unstable__onAfterSetActive = () => {
                                if (m)
                                    return v.refresh()
                            }
                    }
                        , []);
                let C = _({
                    ...e,
                    routerPush: y,
                    routerReplace: w
                });
                return l.default.createElement(d, {
                    options: C
                }, l.default.createElement(t.ClerkProvider, {
                    ...C
                }, l.default.createElement(j, null), l.default.createElement(g, {
                    router: "app"
                }), b))
            }
            ;
        e.s(["ClientClerkProvider", 0, e => {
            let { children: t, disableKeyless: r = !1, ...s } = e;
            return _(s).publishableKey || !h.canUseKeyless || r ? l.default.createElement(I, {
                ...s
            }, t) : l.default.createElement(T, null, l.default.createElement(I, {
                ...s
            }, t))
        }
        ], 41895)
    }
    , 96211, e => {
        "use strict";
        var t = e.i(18566)
            , r = e.i(71645)
            , s = e.i(78424);
        e.s(["KeylessCookieSync", 0, function (n) {
            var a;
            let i = (null == (a = (0,
                t.useSelectedLayoutSegments)()[0]) ? void 0 : a.startsWith("/_not-found")) || !1;
            return (0,
                r.useEffect)(() => {
                    s.canUseKeyless && !i && e.A(94773).then(e => e.syncKeylessConfigAction({
                        ...n,
                        returnUrl: window.location.href
                    }))
                }
                    , [i]),
                n.children
        }
        ])
    }
    , 27534, e => {
        "use strict";
        e.i(92448);
        var t = e.i(65829);
        e.i(97651),
            e.s([], 73483),
            e.i(73483),
            e.s(["AuthenticateWithRedirectCallback", () => t.AuthenticateWithRedirectCallback, "ClerkDegraded", () => t.ClerkDegraded, "ClerkFailed", () => t.ClerkFailed, "ClerkLoaded", () => t.ClerkLoaded, "ClerkLoading", () => t.ClerkLoading, "MultisessionAppSupport", () => t.MultisessionAppSupport, "Protect", () => t.Protect, "RedirectToCreateOrganization", () => t.RedirectToCreateOrganization, "RedirectToOrganizationProfile", () => t.RedirectToOrganizationProfile, "RedirectToSignIn", () => t.RedirectToSignIn, "RedirectToSignUp", () => t.RedirectToSignUp, "RedirectToTasks", () => t.RedirectToTasks, "RedirectToUserProfile", () => t.RedirectToUserProfile, "SignedIn", () => t.SignedIn, "SignedOut", () => t.SignedOut], 27534)
    }
    , 58072, e => {
        "use strict";
        var t = e.i(89807)
            , r = e.i(33917)
            , s = e.i(92448);
        e.s(["APIKeys", () => r.APIKeys, "CreateOrganization", () => r.CreateOrganization, "GoogleOneTap", () => r.GoogleOneTap, "OrganizationList", () => r.OrganizationList, "OrganizationProfile", () => t.OrganizationProfile, "OrganizationSwitcher", () => r.OrganizationSwitcher, "PricingTable", () => r.PricingTable, "SignIn", () => t.SignIn, "SignInButton", () => s.SignInButton, "SignInWithMetamaskButton", () => s.SignInWithMetamaskButton, "SignOutButton", () => s.SignOutButton, "SignUp", () => t.SignUp, "SignUpButton", () => s.SignUpButton, "TaskChooseOrganization", () => r.TaskChooseOrganization, "TaskResetPassword", () => r.TaskResetPassword, "TaskSetupMFA", () => r.TaskSetupMFA, "UserAvatar", () => r.UserAvatar, "UserButton", () => r.UserButton, "UserProfile", () => t.UserProfile, "Waitlist", () => r.Waitlist])
    }
    , 96136, e => {
        "use strict";
        e.i(92448);
        var t = e.i(27085)
            , r = e.i(65389);
        e.i(80240);
        var s = e.i(13039)
            , n = e.i(40578);
        e.s([], 93819),
            e.i(93819),
            e.s(["EmailLinkErrorCode", () => s.EmailLinkErrorCode, "EmailLinkErrorCodeStatus", () => s.EmailLinkErrorCodeStatus, "isClerkAPIResponseError", () => s.isClerkAPIResponseError, "isClerkRuntimeError", () => s.isClerkRuntimeError, "isEmailLinkError", () => s.isEmailLinkError, "isKnownError", () => s.isKnownError, "isMetamaskError", () => s.isMetamaskError, "isReverificationCancelledError", () => s.isReverificationCancelledError, "useAuth", () => n.usePromisifiedAuth, "useClerk", () => t.useClerk, "useEmailLink", () => r.useEmailLink, "useOrganization", () => t.useOrganization, "useOrganizationCreationDefaults", () => t.useOrganizationCreationDefaults, "useOrganizationList", () => t.useOrganizationList, "useReverification", () => t.useReverification, "useSession", () => t.useSession, "useSessionList", () => t.useSessionList, "useSignIn", () => r.useSignIn, "useSignUp", () => r.useSignUp, "useUser", () => t.useUser], 96136)
    }
    , 61316, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            r.default = function ({ html: e, height: t = null, width: r = null, children: a, dataNtpc: i = "" }) {
                return (0,
                    n.useEffect)(() => {
                        i && performance.mark("mark_feature_usage", {
                            detail: {
                                feature: `next-third-parties-${i}`
                            }
                        })
                    }
                        , [i]),
                    (0,
                        s.jsxs)(s.Fragment, {
                            children: [a, e ? (0,
                                s.jsx)("div", {
                                    style: {
                                        height: null != t ? `${t}px` : "auto",
                                        width: null != r ? `${r}px` : "auto"
                                    },
                                    "data-ntpc": i,
                                    dangerouslySetInnerHTML: {
                                        __html: e
                                    }
                                }) : null]
                        })
            }
            ;
        let s = e.r(43476)
            , n = e.r(71645)
    }
    , 19598, (e, t, r) => {
        "use strict";
        var s = e.e && e.e.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            r.sendGTMEvent = void 0,
            r.GoogleTagManager = function (e) {
                let { gtmId: t, gtmScriptUrl: r, dataLayerName: s = "dataLayer", auth: o, preview: c, dataLayer: u, nonce: d } = e;
                l = s;
                let p = new URL(r || "https://www.googletagmanager.com/gtm.js");
                return t && p.searchParams.set("id", t),
                    "dataLayer" !== s && p.searchParams.set("l", s),
                    o && p.searchParams.set("gtm_auth", o),
                    c && (p.searchParams.set("gtm_preview", c),
                        p.searchParams.set("gtm_cookies_win", "x")),
                    (0,
                        a.useEffect)(() => {
                            performance.mark("mark_feature_usage", {
                                detail: {
                                    feature: "next-third-parties-gtm"
                                }
                            })
                        }
                            , []),
                    (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                                n.jsx)(i.default, {
                                    id: "_next-gtm-init",
                                    dangerouslySetInnerHTML: {
                                        __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${u ? `w[l].push(${JSON.stringify(u)})` : ""}
      })(window,'${s}');`
                                    },
                                    nonce: d
                                }), (0,
                                    n.jsx)(i.default, {
                                        id: "_next-gtm",
                                        "data-ntpc": "GTM",
                                        src: p.href,
                                        nonce: d
                                    })]
                        })
            }
            ;
        let n = e.r(43476)
            , a = e.r(71645)
            , i = s(e.r(3303))
            , l = "dataLayer";
        r.sendGTMEvent = (e, t) => {
            let r = t || l;
            window[r] = window[r] || [],
                window[r].push(e)
        }
    }
    , 54576, (e, t, r) => {
        "use strict";
        let s;
        var n = e.e && e.e.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            r.GoogleAnalytics = function (e) {
                let { gaId: t, debugMode: r, dataLayerName: n = "dataLayer", nonce: o } = e;
                return void 0 === s && (s = n),
                    (0,
                        i.useEffect)(() => {
                            performance.mark("mark_feature_usage", {
                                detail: {
                                    feature: "next-third-parties-ga"
                                }
                            })
                        }
                            , []),
                    (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                                a.jsx)(l.default, {
                                    id: "_next-ga-init",
                                    dangerouslySetInnerHTML: {
                                        __html: `
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${r ? ",{ 'debug_mode': true }" : ""});`
                                    },
                                    nonce: o
                                }), (0,
                                    a.jsx)(l.default, {
                                        id: "_next-ga",
                                        src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                                        nonce: o
                                    })]
                        })
            }
            ,
            r.sendGAEvent = function () {
                void 0 === s ? console.warn("@next/third-parties: GA has not been initialized") : window[s] ? window[s].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${s} does not exist`)
            }
            ;
        let a = e.r(43476)
            , i = e.r(71645)
            , l = n(e.r(3303))
    }
    , 65661, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , s = e.i(70703)
            , n = e.i(86098);
        let a = (0,
            s.default)(() => e.A(59203), {
                loadableGenerated: {
                    modules: [2372]
                },
                ssr: !1
            })
            , i = (0,
                s.default)(() => e.A(10991), {
                    loadableGenerated: {
                        modules: [90419]
                    },
                    ssr: !1
                })
            , l = (0,
                s.default)(() => e.A(26038), {
                    loadableGenerated: {
                        modules: [4947]
                    },
                    ssr: !1
                })
            , o = (0,
                s.default)(() => e.A(79063), {
                    loadableGenerated: {
                        modules: [82175]
                    },
                    ssr: !1
                })
            , c = (0,
                s.default)(() => e.A(73905), {
                    loadableGenerated: {
                        modules: [76175]
                    },
                    ssr: !1
                })
            , u = (0,
                s.default)(() => e.A(67504), {
                    loadableGenerated: {
                        modules: [24989]
                    },
                    ssr: !1
                })
            , d = (0,
                s.default)(() => e.A(61190), {
                    loadableGenerated: {
                        modules: [31509]
                    },
                    ssr: !1
                })
            , p = (0,
                s.default)(() => e.A(82334), {
                    loadableGenerated: {
                        modules: [46484]
                    },
                    ssr: !1
                })
            , f = (0,
                s.default)(() => e.A(53553), {
                    loadableGenerated: {
                        modules: [51868]
                    },
                    ssr: !1
                })
            , m = (0,
                s.default)(() => e.A(20666), {
                    loadableGenerated: {
                        modules: [36922]
                    },
                    ssr: !1
                })
            , g = (0,
                s.default)(() => e.A(78691), {
                    loadableGenerated: {
                        modules: [92100]
                    },
                    ssr: !1
                })
            , h = (0,
                s.default)(() => e.A(61629), {
                    loadableGenerated: {
                        modules: [74876]
                    },
                    ssr: !1
                });
        e.s(["default", 0, () => {
            let e, s, b, v, y, _, w, k, j, E, S, x, P, C = (0,
                r.c)(17), { isSettingsModalOpen: R, setSettingsModalOpen: L, settingsModalTab: T } = (0,
                    n.useUIStore)();
            C[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)(a, {}),
                s = (0,
                    t.jsx)(i, {}),
                v = (0,
                    t.jsx)(l, {}),
                y = (0,
                    t.jsx)(o, {}),
                _ = (0,
                    t.jsx)(c, {}),
                w = (0,
                    t.jsx)(u, {}),
                k = (0,
                    t.jsx)(d, {}),
                j = (0,
                    t.jsx)(p, {}),
                E = (0,
                    t.jsx)(f, {}),
                S = (0,
                    t.jsx)(m, {}),
                b = (0,
                    t.jsx)(g, {}),
                C[0] = e,
                C[1] = s,
                C[2] = b,
                C[3] = v,
                C[4] = y,
                C[5] = _,
                C[6] = w,
                C[7] = k,
                C[8] = j,
                C[9] = E,
                C[10] = S) : (e = C[0],
                    s = C[1],
                    b = C[2],
                    v = C[3],
                    y = C[4],
                    _ = C[5],
                    w = C[6],
                    k = C[7],
                    j = C[8],
                    E = C[9],
                    S = C[10]),
                C[11] !== L ? (x = () => L(!1),
                    C[11] = L,
                    C[12] = x) : x = C[12];
            let I = T || void 0;
            return C[13] !== R || C[14] !== x || C[15] !== I ? (P = (0,
                t.jsxs)(t.Fragment, {
                    children: [e, s, v, y, _, w, k, j, E, S, b, (0,
                        t.jsx)(h, {
                            isVisible: R,
                            onClose: x,
                            initialTab: I
                        })]
                }),
                C[13] = R,
                C[14] = x,
                C[15] = I,
                C[16] = P) : P = C[16],
                P
        }
        ])
    }
    , 78148, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , s = e.i(38703)
            , n = e.i(18566)
            , a = e.i(71645)
            , i = e.i(92448)
            , l = e.i(15057)
            , o = e.i(30699)
            , c = e.i(7079)
            , u = e.i(75157)
            , d = e.i(48962);
        let p = () => {
            let e, s, n, p, f, m, g = (0,
                r.c)(8), [h, b] = (0,
                    a.useState)(!1);
            g[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                let e = document.getElementById("signed-out-content");
                if (!e)
                    return;
                let t = () => {
                    let { scrollTop: t, scrollHeight: r, clientHeight: s } = e;
                    b(!(t < 100) && !(r - t - s < 100))
                }
                    ;
                return t(),
                    e.addEventListener("scroll", t, {
                        passive: !0
                    }),
                    () => e.removeEventListener("scroll", t)
            }
                ,
                s = [],
                g[0] = e,
                g[1] = s) : (e = g[0],
                    s = g[1]),
                (0,
                    a.useEffect)(e, s);
            let v = h ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-90 pointer-events-none";
            return g[2] !== v ? (n = (0,
                u.cls)("fixed bottom-10 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out", v),
                g[2] = v,
                g[3] = n) : n = g[3],
                g[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0,
                            t.jsx)(o.Gift, {
                                className: "h-[1.15em] w-auto",
                                strokeWidth: 1.9
                            }), (0,
                                t.jsx)("p", {
                                    className: "text-nowrap",
                                    children: d.LAYOUT_STRINGS.signUpBanner.text
                                })]
                    }),
                    g[4] = p) : p = g[4],
                g[5] === Symbol.for("react.memo_cache_sentinel") ? (f = (0,
                    t.jsx)(c.default, {
                        isActive: !0,
                        roundedClass: "rounded-full",
                        padding: "2px",
                        className: "card rounded-full",
                        colorTheme: "rainbow-wide",
                        inset: "500%",
                        disableGlow: !0,
                        children: (0,
                            t.jsx)("div", {
                                className: "button-secondary rounded-full pl-5 pr-3 py-3 flex items-center gap-4",
                                children: (0,
                                    t.jsx)(i.SignUpButton, {
                                        children: (0,
                                            t.jsxs)("button", {
                                                className: "group flex items-center gap-3 text-base font-medium cursor-pointer",
                                                children: [p, (0,
                                                    t.jsx)("div", {
                                                        className: "relative button-accent-rounded-full rounded-full h-7 2xl:h-8 w-auto aspect-square flex items-center justify-center",
                                                        children: (0,
                                                            t.jsx)(l.ArrowUpRight, {
                                                                className: "h-1/2 w-1/2 text-white group-hover:rotate-45 transition-transform duration-300 ease-out",
                                                                strokeWidth: 2
                                                            })
                                                    })]
                                            })
                                    })
                            })
                    }),
                    g[5] = f) : f = g[5],
                g[6] !== n ? (m = (0,
                    t.jsx)("div", {
                        className: n,
                        children: f
                    }),
                    g[6] = n,
                    g[7] = m) : m = g[7],
                m
        }
            ;
        e.s(["default", 0, e => {
            let a, i, l, o = (0,
                r.c)(13), { children: c } = e, { isSignedIn: u } = (0,
                    s.useAuth)(), d = (0,
                        n.usePathname)();
            o[0] !== d ? (a = d?.startsWith("/projects/") && d.split("/").length > 2,
                o[0] = d,
                o[1] = a) : a = o[1];
            let f = a;
            o[2] !== d ? (i = d?.startsWith("/preview/") || d?.startsWith("/templates/") && "/templates" !== d,
                o[2] = d,
                o[3] = i) : i = o[3];
            let m = i
                , g = "/creating-project" === d;
            if (!u || f || m || g) {
                let e, r, s, n = !u && !f && !m;
                return o[4] !== c ? (e = (0,
                    t.jsx)("div", {
                        id: "signed-out-content",
                        className: "flex-1 min-h-0 overflow-y-auto",
                        children: c
                    }),
                    o[4] = c,
                    o[5] = e) : e = o[5],
                    o[6] !== n ? (r = n && (0,
                        t.jsx)(p, {}),
                        o[6] = n,
                        o[7] = r) : r = o[7],
                    o[8] !== e || o[9] !== r ? (s = (0,
                        t.jsxs)(t.Fragment, {
                            children: [e, r]
                        }),
                        o[8] = e,
                        o[9] = r,
                        o[10] = s) : s = o[10],
                    s
            }
            return o[11] !== c ? (l = (0,
                t.jsx)("div", {
                    className: "flex-1 min-h-0 md:pr-5",
                    children: (0,
                        t.jsx)("div", {
                            id: "main-content",
                            className: "h-full overflow-y-auto md:bg-[rgb(251,251,251)] md:border md:border-[rgb(243,243,243)] md:rounded-t-sm",
                            children: c
                        })
                }),
                o[11] = c,
                o[12] = l) : l = o[12],
                l
        }
        ], 78148)
    }
    , 97281, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932);
        let s = (0,
            e.i(70703).default)(() => e.A(9735), {
                loadableGenerated: {
                    modules: [303]
                },
                ssr: !1
            });
        e.s(["default", 0, () => {
            let e, n = (0,
                r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)(s, {}),
                n[0] = e) : e = n[0],
                e
        }
        ])
    }
    , 66165, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , s = e.i(83599);
        e.s(["default", 0, function (e) {
            let n, a, i = (0,
                r.c)(3), { children: l } = e;
            return i[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                dedupingInterval: 5e3,
                revalidateOnFocus: !1,
                revalidateOnReconnect: !1,
                keepPreviousData: !0,
                errorRetryCount: 3
            },
                i[0] = n) : n = i[0],
                i[1] !== l ? (a = (0,
                    t.jsx)(s.SWRConfig, {
                        value: n,
                        children: l
                    }),
                    i[1] = l,
                    i[2] = a) : a = i[2],
                a
        }
        ])
    }
    , 98943, e => {
        e.v(t => Promise.all(["static/chunks/0l5qtb9i71izp.js"].map(t => e.l(t))).then(() => t(37572)))
    }
    , 94773, e => {
        e.v(t => Promise.all(["static/chunks/004rp8js8h3nl.js"].map(t => e.l(t))).then(() => t(23151)))
    }
    , 59203, e => {
        e.v(t => Promise.all(["static/chunks/175-ber0x3ijf.js", "static/chunks/0v~y7-4xl6l~q.js", "static/chunks/0gh7q.9jd~v37.js", "static/chunks/0yy8djjic86n~.js", "static/chunks/0b7lm8fl10ppq.js"].map(t => e.l(t))).then(() => t(2372)))
    }
    , 10991, e => {
        e.v(t => Promise.all(["static/chunks/0fdsuolige9tk.js"].map(t => e.l(t))).then(() => t(90419)))
    }
    , 26038, e => {
        e.v(t => Promise.all(["static/chunks/0rp-j5sidvm04.js"].map(t => e.l(t))).then(() => t(4947)))
    }
    , 79063, e => {
        e.v(t => Promise.all(["static/chunks/0346lucsr-6o5.js", "static/chunks/13gfzf--tenx4.js"].map(t => e.l(t))).then(() => t(82175)))
    }
    , 73905, e => {
        e.v(t => Promise.all(["static/chunks/04ur0~~k1lxpi.js"].map(t => e.l(t))).then(() => t(76175)))
    }
    , 67504, e => {
        e.v(t => Promise.all(["static/chunks/0s8pvq2wak.~x.js"].map(t => e.l(t))).then(() => t(24989)))
    }
    , 61190, e => {
        e.v(t => Promise.all(["static/chunks/098.8uctmz9r3.js", "static/chunks/0e1pwtkxonio6.js"].map(t => e.l(t))).then(() => t(31509)))
    }
    , 82334, e => {
        e.v(t => Promise.all(["static/chunks/0s0.gfw5jdnvc.js"].map(t => e.l(t))).then(() => t(46484)))
    }
    , 53553, e => {
        e.v(t => Promise.all(["static/chunks/0kzm8~gfbkkr8.js", "static/chunks/0taqfysg364ly.js"].map(t => e.l(t))).then(() => t(51868)))
    }
    , 20666, e => {
        e.v(t => Promise.all(["static/chunks/0ux7yt2fyek8t.js"].map(t => e.l(t))).then(() => t(36922)))
    }
    , 78691, e => {
        e.v(t => Promise.all(["static/chunks/0ty5ipbyfa_e_.js"].map(t => e.l(t))).then(() => t(92100)))
    }
    , 61629, e => {
        e.v(t => Promise.all(["static/chunks/0hr_ua1.pb-l_.js", "static/chunks/0_1yoos5pg_v_.js", "static/chunks/09d072vk66obm.js", "static/chunks/0bm-l03a-l50b.js", "static/chunks/0s9.k66jbkjy6.js", "static/chunks/13gfzf--tenx4.js", "static/chunks/06_a_~sl.puky.js", "static/chunks/0v7duq9e~-cy1.js", "static/chunks/10kl8_xi7foay.js"].map(t => e.l(t))).then(() => t(74876)))
    }
    , 9735, e => {
        e.v(t => Promise.all(["static/chunks/175-ber0x3ijf.js", "static/chunks/0s9.k66jbkjy6.js", "static/chunks/0~b3txm056cpv.js"].map(t => e.l(t))).then(() => t(303)))
    }
    , 67828, e => {
        e.v(t => Promise.all(["static/chunks/0.uc_q6tt3ufn.js"].map(t => e.l(t))).then(() => t(89786)))
    }
]);
