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
    , 664, e => {
        "use strict";
        var t = e.i(68834)
            , r = e.i(79473);
        let s = "webild-cookie-consent"
            , o = (0,
                t.create)()((0,
                    r.devtools)(e => ({
                        consentStatus: "pending",
                        hasLoaded: !1,
                        loadConsent: () => {
                            let t = localStorage.getItem(s);
                            "accepted" === t || "declined" === t ? e({
                                consentStatus: t,
                                hasLoaded: !0
                            }) : e({
                                hasLoaded: !0
                            })
                        }
                        ,
                        acceptCookies: () => {
                            localStorage.setItem(s, "accepted"),
                                e({
                                    consentStatus: "accepted"
                                })
                        }
                        ,
                        declineCookies: () => {
                            localStorage.setItem(s, "declined"),
                                e({
                                    consentStatus: "declined"
                                })
                        }
                    }), {
                        name: "cookie-consent-store"
                    }));
        e.s(["useCookieConsentStore", 0, o])
    }
    , 20386, e => {
        "use strict";
        e.i(47167);
        var t = e.i(932)
            , r = e.i(71645)
            , s = e.i(27085)
            , o = e.i(664)
            , n = e.i(92037)
            , i = e.i(4392)
            , a = e.i(26288);
        let l = null
            , c = () => (l || (l = e.A(67828).then(e => e.default)),
                l);
        function u(e) {
            return e.user
        }
        function d(e) {
            return e.consentStatus
        }
        function m(e) {
            return e.hasLoaded
        }
        function g(e) {
            return e.loadConsent
        }
        e.s(["default", 0, () => ((() => {
            let e, l, p, f, S, h, C = (0,
                t.c)(13), { user: v } = (0,
                    s.useUser)(), w = (0,
                        n.useUserStore)(u), y = (0,
                            o.useCookieConsentStore)(d), k = (0,
                                o.useCookieConsentStore)(m), E = (0,
                                    o.useCookieConsentStore)(g), L = (0,
                                        r.useRef)(!1), [U, I] = (0,
                                            r.useState)(!1);
            C[0] !== E ? (e = () => {
                E()
            }
                ,
                l = [E],
                C[0] = E,
                C[1] = e,
                C[2] = l) : (e = C[1],
                    l = C[2]),
                (0,
                    r.useEffect)(e, l),
                C[3] !== y || C[4] !== k || C[5] !== U ? (p = () => {
                    if (!k || "accepted" !== y || U)
                        return;
                    let e = !1;
                    return c().then(t => {
                        e || (t.init("vpkxdgwdfa"),
                            t.consentV2({
                                ad_Storage: "granted",
                                analytics_Storage: "granted"
                            }),
                            I(!0))
                    }
                    ),
                        () => {
                            e = !0
                        }
                }
                    ,
                    f = [y, k, U],
                    C[3] = y,
                    C[4] = k,
                    C[5] = U,
                    C[6] = p,
                    C[7] = f) : (p = C[6],
                        f = C[7]),
                (0,
                    r.useEffect)(p, f),
                C[8] !== U || C[9] !== w || C[10] !== v ? (S = () => {
                    if (!U || !v || !w || L.current)
                        return;
                    let e = v.firstName || v.username || v.emailAddresses[0]?.emailAddress;
                    c().then(t => {
                        t.identify(w.id, void 0, void 0, e),
                            (0,
                                i.clarityTag)("clerk_id", v.id);
                        let r = a.sessionStorageUtils.getLimits();
                        r?.plan && (0,
                            i.clarityTag)("user_plan", r.plan),
                            L.current = !0
                    }
                    )
                }
                    ,
                    h = [v, w, U],
                    C[8] = U,
                    C[9] = w,
                    C[10] = v,
                    C[11] = S,
                    C[12] = h) : (S = C[11],
                        h = C[12]),
                (0,
                    r.useEffect)(S, h)
        }
        )(),
            null)], 20386)
    }
    , 36922, e => {
        e.n(e.i(20386))
    }
]);
