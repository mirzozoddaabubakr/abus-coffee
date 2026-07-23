(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 26288, e => {
    "use strict";
    let t = "user_limits"
        , r = "user_limits_updated"
        , s = "pending_prompt"
        , o = {
            setLimits: e => {
                try {
                    localStorage.setItem(t, JSON.stringify(e)),
                        window.dispatchEvent(new CustomEvent(r))
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
                        window.dispatchEvent(new CustomEvent(r))
                } catch (e) { }
            }
            ,
            updateLimits: e => {
                let t = o.getLimits();
                t && o.setLimits({
                    ...t,
                    ...e
                })
            }
            ,
            setPendingPrompt: e => {
                try {
                    sessionStorage.setItem(s, e)
                } catch (e) { }
            }
            ,
            getPendingPrompt: () => {
                try {
                    return sessionStorage.getItem(s)
                } catch (e) {
                    return null
                }
            }
            ,
            clearPendingPrompt: () => {
                try {
                    sessionStorage.removeItem(s)
                } catch (e) { }
            }
            ,
            LIMITS_UPDATE_EVENT: r
        };
    e.s(["sessionStorageUtils", 0, o])
}
    , 92037, e => {
        "use strict";
        var t = e.i(68834)
            , r = e.i(79473);
        let s = (0,
            t.create)()((0,
                r.devtools)((e, t) => ({
                    user: null,
                    isLoading: !1,
                    error: null,
                    setUser: t => e({
                        user: t,
                        error: null
                    }),
                    setLoading: t => e({
                        isLoading: t
                    }),
                    setError: t => e({
                        error: t
                    }),
                    clearUser: () => e({
                        user: null,
                        error: null
                    }),
                    fetchUser: async e => {
                        let { setLoading: r, setUser: s, setError: o } = t();
                        r(!0),
                            o(null);
                        try {
                            let t = await e();
                            if (!t)
                                throw Error("Token not found");
                            let r = await fetch("https://api.webild.io/users/me", {
                                method: "GET",
                                headers: {
                                    Accept: "application/json",
                                    Authorization: `Bearer ${t}`
                                }
                            });
                            if (!r.ok)
                                throw Error(`Error status: ${r.status}`);
                            let o = await r.json();
                            s(o)
                        } catch (e) {
                            o(e instanceof Error ? e.message : "Unknown error")
                        } finally {
                            r(!1)
                        }
                    }
                }), {
                    name: "user-store"
                }));
        e.s(["useUserStore", 0, s])
    }
    , 51145, e => {
        "use strict";
        e.i(47167);
        var t = e.i(71645)
            , r = e.i(38703)
            , s = e.i(18279)
            , o = e.i(46475)
            , n = e.i(26288)
            , i = e.i(932);
        let a = "webild_fbclid";
        function c() {
            try {
                let e = new URLSearchParams(window.location.search).get("fbclid");
                e && localStorage.setItem(a, e)
            } catch { }
        }
        var l = e.i(92037);
        e.s(["default", 0, () => ((() => {
            let e, u, { isSignedIn: m, getToken: d } = (0,
                r.useAuth)(), { clearUser: g } = (0,
                    l.useUserStore)(), h = (0,
                        t.useRef)(null), f = (0,
                            t.useRef)(0), p = (0,
                                t.useRef)(!1), S = (0,
                                    t.useRef)(null);
            (u = (0,
                i.c)(1))[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [],
                    u[0] = e) : e = u[0],
                (0,
                    t.useEffect)(c, e),
                (0,
                    t.useEffect)(() => {
                        let e = !1
                            , t = async () => {
                                if (!m || e) {
                                    f.current = 0;
                                    return
                                }
                                try {
                                    let t = await (0,
                                        o.getAuthToken)(d);
                                    if (!t || e)
                                        return;
                                    if (!p.current && !sessionStorage.getItem("attribution_sent")) {
                                        p.current = !0,
                                            sessionStorage.setItem("attribution_sent", "1");
                                        let e = function () {
                                            try {
                                                return localStorage.getItem(a)
                                            } catch {
                                                return null
                                            }
                                        }()
                                            , r = function () {
                                                try {
                                                    let e = document.cookie.match(/(?:^|;\s*)_fbp=([^;]+)/);
                                                    return e ? decodeURIComponent(e[1]) : null
                                                } catch {
                                                    return null
                                                }
                                            }();
                                        fetch("https://api.webild.io/users/fbc", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${t}`
                                            },
                                            body: JSON.stringify({
                                                ...e ? {
                                                    fbclid: e
                                                } : {},
                                                ...r ? {
                                                    fbp: r
                                                } : {}
                                            })
                                        }).then(() => (function () {
                                            try {
                                                localStorage.removeItem(a)
                                            } catch { }
                                        }
                                        )()).catch(() => { }
                                        )
                                    }
                                    sessionStorage.getItem("session_tracked") || (sessionStorage.setItem("session_tracked", "1"),
                                        fetch("https://api.webild.io/analytics/track", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${t}`
                                            },
                                            body: JSON.stringify({
                                                event: "session_started"
                                            })
                                        }).catch(() => { }
                                        ));
                                    let r = await (0,
                                        s.getUserLimitsAPI)(t);
                                    if (e)
                                        return;
                                    200 === r.code && r.data && (n.sessionStorageUtils.setLimits(r.data),
                                        f.current = 0)
                                } catch (r) {
                                    if (e)
                                        return;
                                    f.current < 2 ? (f.current += 1,
                                        S.current = setTimeout(() => {
                                            t()
                                        }
                                            , 1e3)) : 500 === r.status && n.sessionStorageUtils.setLimits({
                                                plan: "free",
                                                isCancelled: !1,
                                                messages_token_left: 0,
                                                messages_token_usage: 0,
                                                projects_creation_usage: 0,
                                                projects_creation_left: 0,
                                                period: {
                                                    start: "",
                                                    end: ""
                                                }
                                            })
                                }
                            }
                            ;
                        return t(),
                            () => {
                                e = !0,
                                    S.current && clearTimeout(S.current)
                            }
                    }
                        , [m, d]),
                (0,
                    t.useEffect)(() => {
                        !0 === h.current && !1 === m && (n.sessionStorageUtils.clearLimits(),
                            g()),
                            h.current = m
                    }
                        , [m, g])
        }
        )(),
            null)], 51145)
    }
    , 90419, e => {
        e.n(e.i(51145))
    }
]);
