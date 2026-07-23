(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 78530, e => {
    "use strict";
    let t = new Map
        , n = new Map
        , i = e => {
            let i = t.get(e);
            if (i)
                return Promise.resolve(i);
            let s = n.get(e);
            if (s)
                return s;
            let r = fetch(e).then(t => {
                if (!t.ok)
                    throw Error(`Failed to load Rive file: ${e}`);
                return t.arrayBuffer()
            }
            ).then(i => (t.set(e, i),
                n.delete(e),
                i)).catch(t => {
                    throw n.delete(e),
                    t
                }
                );
            return n.set(e, r),
                r
        }
        , s = async e => {
            await Promise.allSettled(e.map(e => i(e)))
        }
        ;
    e.s(["RIVE_ANIMATIONS", 0, {
        GENERAL_LOADING: "/api/rive?file=generalloading.riv",
        RECOMMENDATIONS: ["/api/rive?file=generateSite.riv", "/api/rive?file=customize.riv", "/api/rive?file=generateImage.riv", "/api/rive?file=bobSuggestions.riv", "/api/rive?file=publish.riv"]
    }, "getCachedRiveBuffer", 0, e => t.get(e) ?? null, "loadRiveBuffer", 0, i, "preloadRiveFiles", 0, s])
}
    , 26288, e => {
        "use strict";
        let t = "user_limits"
            , n = "user_limits_updated"
            , i = "pending_prompt"
            , s = {
                setLimits: e => {
                    try {
                        localStorage.setItem(t, JSON.stringify(e)),
                            window.dispatchEvent(new CustomEvent(n))
                    } catch (e) { }
                }
                ,
                getLimits: () => {
                    try {
                        let e = localStorage.getItem(t);
                        if (!e)
                            return null;
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearLimits: () => {
                    try {
                        localStorage.removeItem(t),
                            window.dispatchEvent(new CustomEvent(n))
                    } catch (e) { }
                }
                ,
                updateLimits: e => {
                    let t = s.getLimits();
                    t && s.setLimits({
                        ...t,
                        ...e
                    })
                }
                ,
                setPendingPrompt: e => {
                    try {
                        sessionStorage.setItem(i, e)
                    } catch (e) { }
                }
                ,
                getPendingPrompt: () => {
                    try {
                        return sessionStorage.getItem(i)
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearPendingPrompt: () => {
                    try {
                        sessionStorage.removeItem(i)
                    } catch (e) { }
                }
                ,
                LIMITS_UPDATE_EVENT: n
            };
        e.s(["sessionStorageUtils", 0, s])
    }
    , 40846, e => {
        "use strict";
        var t = e.i(68834)
            , n = e.i(79473);
        let i = (0,
            t.create)()((0,
                n.subscribeWithSelector)((e, t) => ({
                    userDomains: [],
                    projectDomains: [],
                    allProjectDomains: [],
                    currentProjectInfo: null,
                    isLoading: !0,
                    error: null,
                    lastFetch: 0,
                    pendingRequests: new Set,
                    pendingDomainView: null,
                    pendingDomainSearchQuery: null,
                    skipToPurchase: !1,
                    isProcessingStripePurchase: !1,
                    isDeployingFromPublishDropdown: !1,
                    cameFromWebsiteTab: !1,
                    cameFromAnalyticsTab: !1,
                    setUserDomains: t => e({
                        userDomains: t,
                        lastFetch: Date.now()
                    }),
                    setProjectDomains: (t, n) => e({
                        projectDomains: t,
                        currentProjectInfo: n || null,
                        lastFetch: Date.now()
                    }),
                    setAllProjectDomains: t => e({
                        allProjectDomains: t,
                        lastFetch: Date.now()
                    }),
                    setLoading: t => e({
                        isLoading: t
                    }),
                    setError: t => e({
                        error: t
                    }),
                    setPendingDomainView: t => e({
                        pendingDomainView: t
                    }),
                    setPendingDomainSearchQuery: t => e({
                        pendingDomainSearchQuery: t
                    }),
                    setSkipToPurchase: t => e({
                        skipToPurchase: t
                    }),
                    setIsProcessingStripePurchase: t => e({
                        isProcessingStripePurchase: t
                    }),
                    setIsDeployingFromPublishDropdown: t => e({
                        isDeployingFromPublishDropdown: t
                    }),
                    setCameFromWebsiteTab: t => e({
                        cameFromWebsiteTab: t
                    }),
                    setCameFromAnalyticsTab: t => e({
                        cameFromAnalyticsTab: t
                    }),
                    addPendingRequest: t => e(e => ({
                        pendingRequests: new Set([...e.pendingRequests, t])
                    })),
                    removePendingRequest: t => e(e => {
                        let n = new Set(e.pendingRequests);
                        return n.delete(t),
                        {
                            pendingRequests: n
                        }
                    }
                    ),
                    isPendingRequest: e => t().pendingRequests.has(e),
                    addProjectDomain: t => e(e => ({
                        projectDomains: [...e.projectDomains.filter(e => e.domain.name !== t.domain.name), t]
                    })),
                    removeProjectDomain: t => e(e => ({
                        projectDomains: e.projectDomains.filter(e => e.domain.name !== t)
                    })),
                    updateDomainAutoRenewal: (t, n) => e(e => ({
                        userDomains: e.userDomains.map(e => e.name === t ? {
                            ...e,
                            auto_renew: n
                        } : e)
                    })),
                    getDomainStatus: e => {
                        let n = t().projectDomains.find(t => t.domain.name === e);
                        return n ? n.domain.verified ? "connected" : n.config.misconfigured && !n.domain.verified ? "error" : "pending" : "not_connected"
                    }
                    ,
                    getPrimaryDomain: () => {
                        let e = t()
                            , n = e.projectDomains.filter(e => !e.domain.name.includes("vercel.app"))
                            , i = n.filter(e => e.domain.verified);
                        if (i.length > 0)
                            return i[0].domain.name;
                        if (n.length > 0)
                            return n[0].domain.name;
                        let s = e.projectDomains.find(e => e.domain.name.includes("vercel.app"));
                        return s ? s.domain.name : null
                    }
                    ,
                    findDomainProject: e => {
                        let n = t();
                        if (n.projectDomains.find(t => t.domain.name === e) && n.currentProjectInfo)
                            return n.currentProjectInfo;
                        for (let t of n.allProjectDomains)
                            if (t.domains.find(t => t.domain.name === e))
                                return {
                                    projectId: t.projectId,
                                    projectName: t.projectName
                                };
                        return null
                    }
                    ,
                    getUserDomainsWithUsage: e => {
                        let n = t();
                        return n.userDomains.map(t => {
                            let i = n.findDomainProject(t.name)
                                , s = i?.projectId === e;
                            return {
                                ...t,
                                isConnectedToCurrentProject: s,
                                connectedProjectId: i?.projectId,
                                connectedProjectName: i?.projectName
                            }
                        }
                        )
                    }
                    ,
                    getDisplayDomains: e => {
                        let n = t()
                            , i = []
                            , s = n.projectDomains.filter(e => !e.domain.name.includes("vercel.app"))
                            , r = s.filter(e => e.domain.verified)
                            , a = r.length > 0 ? r[0] : s.length > 0 ? s[0] : null;
                        return n.projectDomains.forEach(t => {
                            if (!t.domain.name.includes("vercel.app")) {
                                let s = n.getDomainStatus(t.domain.name)
                                    , r = a ? t.domain.name === a.domain.name : t.domain.name === e;
                                i.push({
                                    name: t.domain.name,
                                    status: s,
                                    statusColor: "connected" === s ? "text-green-400" : "pending" === s ? "text-yellow-400" : "text-red-400",
                                    isVerified: t.domain.verified,
                                    isCurrentDomain: r,
                                    canConnect: "connected" !== s
                                })
                            }
                        }
                        ),
                            i
                    }
                    ,
                    invalidateCache: () => e({
                        lastFetch: 0
                    }),
                    shouldRefetch: () => {
                        let e = t();
                        return Date.now() - e.lastFetch > 3e5
                    }
                })));
        e.s(["selectPrimaryDomain", 0, e => e.getPrimaryDomain, "useDomainStore", 0, i])
    }
    , 46661, e => {
        "use strict";
        var t = e.i(932)
            , n = e.i(71645)
            , i = e.i(18566)
            , s = e.i(86098)
            , r = e.i(40846);
        e.s(["useGlobalDomainSuccessScreen", 0, () => {
            let e, a, o, c = (0,
                t.c)(14), l = (0,
                    i.useSearchParams)(), { setSettingsModalOpen: d, setSettingsModalTab: m } = (0,
                        s.useUIStore)(), { setIsProcessingStripePurchase: h } = (0,
                            r.useDomainStore)();
            e: {
                let t, n, i, s;
                if (!l) {
                    e = !1;
                    break e
                }
                c[0] !== l ? (t = l.get("session_id"),
                    c[0] = l,
                    c[1] = t) : t = c[1];
                let r = t;
                c[2] !== l ? (n = l.get("domain_registration"),
                    c[2] = l,
                    c[3] = n) : n = c[3];
                let a = n;
                c[4] !== l ? (i = l.get("is_global_domain"),
                    c[4] = l,
                    c[5] = i) : i = c[5];
                let o = "true" === i;
                c[6] !== l ? (s = l.get("domain_name"),
                    c[6] = l,
                    c[7] = s) : s = c[7];
                let d = null !== s;
                e = null !== r && d && null !== a && o
            }
            let u = e;
            c[8] !== u || c[9] !== h || c[10] !== d || c[11] !== m ? (a = () => {
                u && (h(!0),
                    m("general-domains"),
                    d(!0))
            }
                ,
                o = [u, d, m, h],
                c[8] = u,
                c[9] = h,
                c[10] = d,
                c[11] = m,
                c[12] = a,
                c[13] = o) : (a = c[12],
                    o = c[13]),
                (0,
                    n.useEffect)(a, o)
        }
        ])
    }
    , 57693, 20151, e => {
        "use strict";
        e.i(47167);
        class t {
            worker = null;
            port = null;
            listeners = new Set;
            isSupported;
            constructor() {
                this.isSupported = "u" > typeof SharedWorker
            }
            init() {
                !this.port && this.isSupported && (this.worker = new SharedWorker("/workers/sse-worker.js", {
                    name: "webild-sse"
                }),
                    this.port = this.worker.port,
                    this.port.onmessage = e => this.listeners.forEach(t => t(e.data)),
                    this.port.start())
            }
            connect(e, t) {
                this.init(),
                    this.port?.postMessage({
                        type: "connect",
                        token: e,
                        apiBaseUrl: t
                    })
            }
            refreshToken(e) {
                this.port?.postMessage({
                    type: "refresh-token",
                    token: e
                })
            }
            forceReconnect(e) {
                this.port?.postMessage({
                    type: "force-reconnect",
                    token: e
                })
            }
            disconnect() {
                this.port?.postMessage({
                    type: "disconnect"
                })
            }
            addListener(e) {
                this.listeners.add(e)
            }
            removeListener(e) {
                this.listeners.delete(e)
            }
        }
        let n = new t;
        e.s(["sseWorkerBridge", 0, n], 20151);
        let i = new class {
            connected = !1;
            reconnectAttempts = 0;
            maxReconnectAttempts = 20;
            hasReachedMaxAttempts = !1;
            getTokenFn = null;
            visibilityHandler = null;
            listener;
            constructor() {
                this.listener = e => this.handleWorkerMessage(e)
            }
            connect(e, t) {
                t && (this.getTokenFn = t),
                    this.hasReachedMaxAttempts = !1,
                    this.reconnectAttempts = 0,
                    n.addListener(this.listener),
                    n.connect(e, "https://api.webild.io"),
                    this.setupVisibilityHandler()
            }
            handleWorkerMessage(e) {
                if ("messages" === e.channel)
                    switch (e.type) {
                        case "status":
                            this.connected = e.connected ?? !1,
                                this.reconnectAttempts = 0;
                            break;
                        case "event":
                            this.connected = !0,
                                this.reconnectAttempts = 0,
                                window.dispatchEvent(new CustomEvent("sse-message", {
                                    detail: e.data
                                }));
                            break;
                        case "max-reconnects":
                            this.hasReachedMaxAttempts = !0,
                                this.reconnectAttempts = this.maxReconnectAttempts,
                                window.dispatchEvent(new CustomEvent("sse-max-reconnects-reached", {
                                    detail: {
                                        attempts: this.reconnectAttempts
                                    }
                                }))
                    }
            }
            setupVisibilityHandler() {
                this.visibilityHandler || (this.visibilityHandler = () => {
                    "visible" === document.visibilityState && (window.dispatchEvent(new CustomEvent("sse-tab-visible")),
                        this.getTokenFn?.().then(e => {
                            e && n.refreshToken(e)
                        }
                        ).catch(() => { }
                        ))
                }
                    ,
                    document.addEventListener("visibilitychange", this.visibilityHandler))
            }
            disconnect() {
                n.removeListener(this.listener),
                    n.disconnect(),
                    this.connected = !1,
                    this.visibilityHandler && (document.removeEventListener("visibilitychange", this.visibilityHandler),
                        this.visibilityHandler = null)
            }
            forceReconnect(e, t) {
                t && (this.getTokenFn = t),
                    this.hasReachedMaxAttempts = !1,
                    this.reconnectAttempts = 0,
                    n.forceReconnect(e)
            }
            resetConnection() {
                this.disconnect()
            }
            isConnected() {
                return this.connected
            }
            getConnectionStatus() {
                return {
                    isConnected: this.connected,
                    reconnectAttempts: this.reconnectAttempts,
                    maxReconnectAttempts: this.maxReconnectAttempts,
                    hasReachedMaxAttempts: this.hasReachedMaxAttempts
                }
            }
        }
            ;
        e.s(["sseService", 0, i], 57693)
    }
    , 40376, e => {
        "use strict";
        var t = e.i(43476)
            , n = e.i(932)
            , i = e.i(71645)
            , s = e.i(46661)
            , r = e.i(78530)
            , a = e.i(38703)
            , o = e.i(57693);
        e.i(47167);
        var c = e.i(18279)
            , l = e.i(26288)
            , d = e.i(20151);
        let m = new class {
            connected = !1;
            reconnectAttempts = 0;
            maxReconnectAttempts = 20;
            hasReachedMaxAttempts = !1;
            getTokenFn = null;
            lastToken = null;
            visibilityHandler = null;
            fallbackPollingTimerId = null;
            fallbackPollingInterval = 3e4;
            listener;
            constructor() {
                this.listener = e => this.handleWorkerMessage(e)
            }
            connect(e, t) {
                this.lastToken = e,
                    t && (this.getTokenFn = t),
                    this.hasReachedMaxAttempts = !1,
                    this.reconnectAttempts = 0,
                    d.sseWorkerBridge.addListener(this.listener),
                    d.sseWorkerBridge.connect(e, "https://api.webild.io"),
                    this.setupVisibilityHandler()
            }
            handleWorkerMessage(e) {
                if ("limits" === e.channel)
                    switch (e.type) {
                        case "status":
                            this.connected = e.connected ?? !1,
                                this.reconnectAttempts = 0,
                                this.stopFallbackPolling();
                            break;
                        case "event":
                            {
                                let t = e.data;
                                this.connected = !0,
                                    this.reconnectAttempts = 0,
                                    l.sessionStorageUtils.setLimits(t),
                                    window.dispatchEvent(new CustomEvent("user-limits-updated", {
                                        detail: t
                                    }));
                                break
                            }
                        case "max-reconnects":
                            this.hasReachedMaxAttempts = !0,
                                this.reconnectAttempts = this.maxReconnectAttempts,
                                this.startFallbackPolling(),
                                window.dispatchEvent(new CustomEvent("user-limits-sse-max-reconnects-reached", {
                                    detail: {
                                        attempts: this.reconnectAttempts
                                    }
                                }))
                    }
            }
            setupVisibilityHandler() {
                this.visibilityHandler || (this.visibilityHandler = () => {
                    "visible" === document.visibilityState && (window.dispatchEvent(new CustomEvent("user-limits-tab-visible")),
                        this.getTokenFn?.().then(e => {
                            e && d.sseWorkerBridge.refreshToken(e)
                        }
                        ).catch(() => { }
                        ))
                }
                    ,
                    document.addEventListener("visibilitychange", this.visibilityHandler))
            }
            async fetchLimitsFallback() {
                let e = this.getTokenFn ? await this.getTokenFn().catch(() => this.lastToken) : this.lastToken;
                if (e)
                    try {
                        let t = await (0,
                            c.getUserLimitsAPI)(e);
                        t.data && (l.sessionStorageUtils.setLimits(t.data),
                            window.dispatchEvent(new CustomEvent("user-limits-updated", {
                                detail: t.data
                            })))
                    } catch { }
            }
            startFallbackPolling() {
                this.fallbackPollingTimerId || (this.fetchLimitsFallback(),
                    this.fallbackPollingTimerId = setInterval(() => {
                        this.connected ? this.stopFallbackPolling() : this.fetchLimitsFallback()
                    }
                        , this.fallbackPollingInterval))
            }
            stopFallbackPolling() {
                this.fallbackPollingTimerId && (clearInterval(this.fallbackPollingTimerId),
                    this.fallbackPollingTimerId = null)
            }
            disconnect() {
                d.sseWorkerBridge.removeListener(this.listener),
                    d.sseWorkerBridge.disconnect(),
                    this.stopFallbackPolling(),
                    this.connected = !1,
                    this.visibilityHandler && (document.removeEventListener("visibilitychange", this.visibilityHandler),
                        this.visibilityHandler = null)
            }
            forceReconnect(e, t) {
                this.lastToken = e,
                    t && (this.getTokenFn = t),
                    this.hasReachedMaxAttempts = !1,
                    this.reconnectAttempts = 0,
                    this.stopFallbackPolling(),
                    d.sseWorkerBridge.forceReconnect(e)
            }
            resetConnection() {
                this.disconnect()
            }
            isConnected() {
                return this.connected
            }
            getConnectionStatus() {
                return {
                    isConnected: this.connected,
                    reconnectAttempts: this.reconnectAttempts,
                    maxReconnectAttempts: this.maxReconnectAttempts,
                    hasReachedMaxAttempts: this.hasReachedMaxAttempts
                }
            }
        }
            ;
        function h() {
            (0,
                r.preloadRiveFiles)([r.RIVE_ANIMATIONS.GENERAL_LOADING])
        }
        e.s(["default", 0, function (e) {
            let r, c, l = (0,
                n.c)(3), { children: d } = e;
            return !function () {
                let { getToken: e } = (0,
                    a.useAuth)()
                    , t = (0,
                        i.useRef)(!1)
                    , [n, s] = (0,
                        i.useState)(o.sseService.getConnectionStatus())
                    , r = (0,
                        i.useCallback)(() => {
                            s(o.sseService.getConnectionStatus())
                        }
                            , [])
                    , c = (0,
                        i.useCallback)(() => {
                            r()
                        }
                            , [r]);
                (0,
                    i.useCallback)(async () => {
                        try {
                            let n = await e();
                            n && (o.sseService.forceReconnect(n, e),
                                t.current = !0,
                                r())
                        } catch { }
                    }
                        , [e, r]),
                    (0,
                        i.useEffect)(() => {
                            let n = async () => {
                                try {
                                    let n = await e();
                                    n && !t.current && (o.sseService.connect(n, e),
                                        t.current = !0,
                                        r())
                                } catch { }
                            }
                                ;
                            return window.addEventListener("sse-max-reconnects-reached", c),
                                n(),
                                () => {
                                    window.removeEventListener("sse-max-reconnects-reached", c),
                                        t.current && (o.sseService.disconnect(),
                                            t.current = !1)
                                }
                        }
                            , [e, c, r]),
                    o.sseService.isConnected()
            }(),
                !function () {
                    let { getToken: e, isSignedIn: t } = (0,
                        a.useAuth)()
                        , n = (0,
                            i.useRef)(!1)
                        , [s, r] = (0,
                            i.useState)(m.getConnectionStatus())
                        , o = (0,
                            i.useCallback)(() => {
                                r(m.getConnectionStatus())
                            }
                                , [])
                        , c = (0,
                            i.useCallback)(() => {
                                o()
                            }
                                , [o]);
                    (0,
                        i.useCallback)(async () => {
                            try {
                                let t = await e();
                                t && (m.forceReconnect(t, e),
                                    n.current = !0,
                                    o())
                            } catch (e) { }
                        }
                            , [e, o]),
                        (0,
                            i.useEffect)(() => {
                                if (!t) {
                                    n.current && (m.disconnect(),
                                        n.current = !1);
                                    return
                                }
                                let i = async () => {
                                    try {
                                        let t = await e();
                                        t && !n.current && (m.connect(t, e),
                                            n.current = !0,
                                            o())
                                    } catch (e) { }
                                }
                                    ;
                                return window.addEventListener("user-limits-sse-max-reconnects-reached", c),
                                    i(),
                                    () => {
                                        window.removeEventListener("user-limits-sse-max-reconnects-reached", c),
                                            n.current && (m.disconnect(),
                                                n.current = !1)
                                    }
                            }
                                , [t, e, c, o]),
                        m.isConnected()
                }(),
                (0,
                    s.useGlobalDomainSuccessScreen)(),
                l[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [],
                    l[0] = r) : r = l[0],
                (0,
                    i.useEffect)(h, r),
                l[1] !== d ? (c = (0,
                    t.jsx)(t.Fragment, {
                        children: d
                    }),
                    l[1] = d,
                    l[2] = c) : c = l[2],
                c
        }
        ], 40376)
    }
]);
