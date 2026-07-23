(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 68834, e => {
    "use strict";
    var t = e.i(71645);
    let n = e => {
        let t, n = new Set, r = (e, r) => {
            let o = "function" == typeof e ? e(t) : e;
            if (!Object.is(o, t)) {
                let e = t;
                t = (null != r ? r : "object" != typeof o || null === o) ? o : Object.assign({}, t, o),
                    n.forEach(n => n(t, e))
            }
        }
            , o = () => t, i = {
                setState: r,
                getState: o,
                getInitialState: () => a,
                subscribe: e => (n.add(e),
                    () => n.delete(e))
            }, a = t = e(r, o, i);
        return i
    }
        , r = e => {
            let r = e ? n(e) : n
                , o = e => (function (e, n = e => e) {
                    let r = t.default.useSyncExternalStore(e.subscribe, t.default.useCallback(() => n(e.getState()), [e, n]), t.default.useCallback(() => n(e.getInitialState()), [e, n]));
                    return t.default.useDebugValue(r),
                        r
                }
                )(r, e);
            return Object.assign(o, r),
                o
        }
        ;
    e.s(["create", 0, e => e ? r(e) : r], 68834)
}
    , 79473, e => {
        "use strict";
        let t = {
            get url() {
                return `file://${e.P("node_modules/zustand/esm/middleware.mjs")}`
            }
        }
            , n = e => !!e.dispatchFromDevtools && "function" == typeof e.dispatch
            , r = new Map
            , o = e => {
                let t = r.get(e);
                return t ? Object.fromEntries(Object.entries(t.stores).map(([e, t]) => [e, t.getState()])) : {}
            }
            , i = /.+ (.+) .+/
            , a = /^([^@]+)@/
            , s = (e, t) => {
                let n;
                try {
                    n = JSON.parse(e)
                } catch (e) {
                    console.error("[zustand devtools middleware] Could not parse the received json", e)
                }
                void 0 !== n && t(n)
            }
            , c = e => t => {
                try {
                    let n = e(t);
                    if (n instanceof Promise)
                        return n;
                    return {
                        then: e => c(e)(n),
                        catch(e) {
                            return this
                        }
                    }
                } catch (e) {
                    return {
                        then(e) {
                            return this
                        },
                        catch: t => c(t)(e)
                    }
                }
            }
            ;
        e.s(["devtools", 0, (e, c = {}) => (u, l, d) => {
            let f, { enabled: m, anonymousActionType: p, store: y, ...g } = c;
            try {
                f = (null != m ? m : (t.env ? t.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__
            } catch (e) { }
            if (!f)
                return e(u, l, d);
            let { connection: h, ...S } = ((e, t, n) => {
                if (void 0 === e)
                    return {
                        type: "untracked",
                        connection: t.connect(n)
                    };
                let o = r.get(n.name);
                if (o)
                    return {
                        type: "tracked",
                        store: e,
                        ...o
                    };
                let i = {
                    connection: t.connect(n),
                    stores: {}
                };
                return r.set(n.name, i),
                {
                    type: "tracked",
                    store: e,
                    ...i
                }
            }
            )(y, f, g)
                , v = !0;
            d.setState = (e, t, n) => {
                let r = u(e, t);
                if (!v)
                    return r;
                let s = void 0 === n ? {
                    type: p || function (e) {
                        var t, n, r;
                        if (!e)
                            return;
                        let o = e.split("\n")
                            , s = o.findIndex(e => e.includes("api.setState"));
                        if (s < 0)
                            return;
                        let c = (null == (t = o[s + 1]) ? void 0 : t.trim()) || "";
                        return (null == (n = i.exec(c)) ? void 0 : n[1]) || (null == (r = a.exec(c)) ? void 0 : r[1])
                    }(Error().stack) || "anonymous"
                } : "string" == typeof n ? {
                    type: n
                } : n;
                return void 0 === y ? null == h || h.send(s, l()) : null == h || h.send({
                    ...s,
                    type: `${y}/${s.type}`
                }, {
                    ...o(g.name),
                    [y]: d.getState()
                }),
                    r
            }
                ,
                d.devtools = {
                    cleanup: () => {
                        h && "function" == typeof h.unsubscribe && h.unsubscribe(),
                            ((e, t) => {
                                if (void 0 === t)
                                    return;
                                let n = r.get(e);
                                n && (delete n.stores[t],
                                    0 === Object.keys(n.stores).length && r.delete(e))
                            }
                            )(g.name, y)
                    }
                };
            let P = (...e) => {
                let t = v;
                v = !1,
                    u(...e),
                    v = t
            }
                , T = e(d.setState, l, d);
            if ("untracked" === S.type ? null == h || h.init(T) : (S.stores[S.store] = d,
                null == h || h.init(Object.fromEntries(Object.entries(S.stores).map(([e, t]) => [e, e === S.store ? T : t.getState()])))),
                n(d)) {
                let e = !1
                    , n = d.dispatch;
                d.dispatch = (...r) => {
                    (t.env ? t.env.MODE : void 0) === "production" || "__setState" !== r[0].type || e || (console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),
                        e = !0),
                        n(...r)
                }
            }
            return h.subscribe(e => {
                var t;
                switch (e.type) {
                    case "ACTION":
                        if ("string" != typeof e.payload)
                            return void console.error("[zustand devtools middleware] Unsupported action format");
                        return s(e.payload, e => {
                            if ("__setState" === e.type) {
                                if (void 0 === y)
                                    return void P(e.state);
                                1 !== Object.keys(e.state).length && console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                                let t = e.state[y];
                                return void (null == t || JSON.stringify(d.getState()) !== JSON.stringify(t) && P(t))
                            }
                            n(d) && d.dispatch(e)
                        }
                        );
                    case "DISPATCH":
                        switch (e.payload.type) {
                            case "RESET":
                                if (P(T),
                                    void 0 === y)
                                    return null == h ? void 0 : h.init(d.getState());
                                return null == h ? void 0 : h.init(o(g.name));
                            case "COMMIT":
                                if (void 0 === y) {
                                    null == h || h.init(d.getState());
                                    break
                                }
                                return null == h ? void 0 : h.init(o(g.name));
                            case "ROLLBACK":
                                return s(e.state, e => {
                                    if (void 0 === y) {
                                        P(e),
                                            null == h || h.init(d.getState());
                                        return
                                    }
                                    P(e[y]),
                                        null == h || h.init(o(g.name))
                                }
                                );
                            case "JUMP_TO_STATE":
                            case "JUMP_TO_ACTION":
                                return s(e.state, e => {
                                    void 0 === y ? P(e) : JSON.stringify(d.getState()) !== JSON.stringify(e[y]) && P(e[y])
                                }
                                );
                            case "IMPORT_STATE":
                                {
                                    let { nextLiftedState: n } = e.payload
                                        , r = null == (t = n.computedStates.slice(-1)[0]) ? void 0 : t.state;
                                    if (!r)
                                        return;
                                    void 0 === y ? P(r) : P(r[y]),
                                        null == h || h.send(null, n);
                                    break
                                }
                            case "PAUSE_RECORDING":
                                return v = !v
                        }
                        return
                }
            }
            ),
                T
        }
            , "persist", 0, (e, t) => (n, r, o) => {
                let i, a = {
                    storage: function (e) {
                        let t;
                        try {
                            t = e()
                        } catch (e) {
                            return
                        }
                        return {
                            getItem: e => {
                                var n;
                                let r = e => null === e ? null : JSON.parse(e, void 0)
                                    , o = null != (n = t.getItem(e)) ? n : null;
                                return o instanceof Promise ? o.then(r) : r(o)
                            }
                            ,
                            setItem: (e, n) => t.setItem(e, JSON.stringify(n, void 0)),
                            removeItem: e => t.removeItem(e)
                        }
                    }(() => window.localStorage),
                    partialize: e => e,
                    version: 0,
                    merge: (e, t) => ({
                        ...t,
                        ...e
                    }),
                    ...t
                }, s = !1, u = 0, l = new Set, d = new Set, f = a.storage;
                if (!f)
                    return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),
                            n(...e)
                    }
                        , r, o);
                let m = () => {
                    let e = a.partialize({
                        ...r()
                    });
                    return f.setItem(a.name, {
                        state: e,
                        version: a.version
                    })
                }
                    , p = o.setState;
                o.setState = (e, t) => (p(e, t),
                    m());
                let y = e((...e) => (n(...e),
                    m()), r, o);
                o.getInitialState = () => y;
                let g = () => {
                    var e, t;
                    if (!f)
                        return;
                    let o = ++u;
                    s = !1,
                        l.forEach(e => {
                            var t;
                            return e(null != (t = r()) ? t : y)
                        }
                        );
                    let p = (null == (t = a.onRehydrateStorage) ? void 0 : t.call(a, null != (e = r()) ? e : y)) || void 0;
                    return c(f.getItem.bind(f))(a.name).then(e => {
                        if (e)
                            if ("number" != typeof e.version || e.version === a.version)
                                return [!1, e.state];
                            else {
                                if (a.migrate) {
                                    let t = a.migrate(e.state, e.version);
                                    return t instanceof Promise ? t.then(e => [!0, e]) : [!0, t]
                                }
                                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                            }
                        return [!1, void 0]
                    }
                    ).then(e => {
                        var t;
                        if (o !== u)
                            return;
                        let [s, c] = e;
                        if (n(i = a.merge(c, null != (t = r()) ? t : y), !0),
                            s)
                            return m()
                    }
                    ).then(() => {
                        o === u && (null == p || p(r(), void 0),
                            i = r(),
                            s = !0,
                            d.forEach(e => e(i)))
                    }
                    ).catch(e => {
                        o === u && (null == p || p(void 0, e))
                    }
                    )
                }
                    ;
                return o.persist = {
                    setOptions: e => {
                        a = {
                            ...a,
                            ...e
                        },
                            e.storage && (f = e.storage)
                    }
                    ,
                    clearStorage: () => {
                        null == f || f.removeItem(a.name)
                    }
                    ,
                    getOptions: () => a,
                    rehydrate: () => g(),
                    hasHydrated: () => s,
                    onHydrate: e => (l.add(e),
                        () => {
                            l.delete(e)
                        }
                    ),
                    onFinishHydration: e => (d.add(e),
                        () => {
                            d.delete(e)
                        }
                    )
                },
                    a.skipHydration || g(),
                    i || y
            }
            , "subscribeWithSelector", 0, e => (t, n, r) => {
                let o = r.subscribe;
                return r.subscribe = (e, t, n) => {
                    let i = e;
                    if (t) {
                        let o = (null == n ? void 0 : n.equalityFn) || Object.is
                            , a = e(r.getState());
                        i = n => {
                            let r = e(n);
                            if (!o(a, r)) {
                                let e = a;
                                t(a = r, e)
                            }
                        }
                            ,
                            (null == n ? void 0 : n.fireImmediately) && t(a, a)
                    }
                    return o(i)
                }
                    ,
                    e(t, n, r)
            }
        ])
    }
    , 4392, e => {
        "use strict";
        let t = null
            , n = () => (t || (t = e.A(67828).then(e => e.default)),
                t);
        e.s(["clarityEvent", 0, e => {
            n().then(t => t.event(e)).catch(() => { }
            )
        }
            , "clarityTag", 0, (e, t) => {
                n().then(n => n.setTag(e, String(t))).catch(() => { }
                )
            }
        ])
    }
    , 11519, e => {
        "use strict";
        var t = e.i(68834)
            , n = e.i(79473);
        let r = (0,
            t.create)()((0,
                n.devtools)(e => ({
                    activeModal: null,
                    modalData: {},
                    openModal: (t, n = {}) => e({
                        activeModal: t,
                        modalData: n
                    }),
                    closeModal: () => e({
                        activeModal: null,
                        modalData: {}
                    }),
                    setModalData: t => e(e => ({
                        modalData: {
                            ...e.modalData,
                            ...t
                        }
                    }))
                }), {
                    name: "modal-store"
                }));
        e.s(["useModalStore", 0, r])
    }
    , 18279, e => {
        "use strict";
        var t = e.i(11519)
            , n = e.i(4392);
        let r = "https://api.webild.io";
        class o extends Error {
            status;
            response;
            constructor(e, t, n) {
                super(e),
                    this.status = t,
                    this.response = n,
                    this.name = "ApiError"
            }
        }
        async function i(e, a, s, c = !1) {
            let u = `${r}${e}`
                , l = {
                    mode: "cors",
                    Accept: "application/json",
                    Authorization: `Bearer ${s}`,
                    ...a.headers
                };
            c || a.body instanceof FormData || (l["Content-Type"] = "application/json");
            let d = await fetch(u, {
                ...a,
                headers: l
            });
            if (!d.ok) {
                let e = await d.json().catch(() => ({}))
                    , r = e.details?.message || e.message || `Status: ${d.status}`;
                if ("string" == typeof r && r.includes("PAYWALL_REQUIRED"))
                    try {
                        t.useModalStore.getState().openModal("pricing"),
                            (0,
                                n.clarityEvent)("paywall_shown")
                    } catch { }
                throw new o(r, d.status, e)
            }
            return await d.json()
        }
        async function a(e) {
            return i("/stripe/billing-history", {
                method: "GET"
            }, e)
        }
        async function s(e, t) {
            return i("/projects/generate-questions", {
                method: "POST",
                body: JSON.stringify({
                    prompt: e
                })
            }, t)
        }
        async function c(e, t) {
            return i("/projects", {
                method: "POST",
                body: JSON.stringify(e)
            }, t)
        }
        async function u(e, t, n = 10, r) {
            let o = `/projects/${e}/messages?limit=${n}`;
            return r && (o += `&cursor=${r}`),
                i(o, {
                    method: "GET"
                }, t)
        }
        async function l(e, t, n) {
            return i(`/projects/${e}/deploy`, {
                method: "POST",
                body: JSON.stringify({
                    domainName: n
                })
            }, t)
        }
        async function d(e, t, n) {
            return i(`/projects/${e}/switch-version`, {
                method: "POST",
                body: JSON.stringify({
                    project_version_id: t
                })
            }, n)
        }
        async function f(e, t) {
            return i(`/projects/${e}`, {
                method: "GET"
            }, t)
        }
        async function m(e, t) {
            return i(`/projects/${e}/pages`, {
                method: "GET"
            }, t)
        }
        async function p(e = 10, t, n) {
            let r = `/projects?limit=${e}`;
            return n && (r += `&cursor=${encodeURIComponent(n)}`),
                i(r, {
                    method: "GET",
                    cache: "no-store"
                }, t)
        }
        async function y(e, t) {
            return i(`/projects/${e}`, {
                method: "DELETE"
            }, t)
        }
        async function g(e, t) {
            return i("/projects/bulk-delete", {
                method: "POST",
                body: JSON.stringify({
                    projectIds: e
                })
            }, t)
        }
        async function h(e, t, n, r, o, a, s, c, u) {
            if (a && a.length > 0) {
                let l = new FormData;
                return l.append("type", "user"),
                    l.append("message", n),
                    l.append("is_system", "false"),
                    o?.selector && l.append("elementSelector", o.selector),
                    o?.semanticType && l.append("elementType", o.semanticType),
                    o?.innerText && l.append("elementText", o.innerText),
                    u && l.append("pageRoute", u),
                    s && l.append("templateData", JSON.stringify(s)),
                    c && c.length > 0 && l.append("attachedBlocks", JSON.stringify(c)),
                    a.slice(0, 5).forEach(e => {
                        l.append("images", e)
                    }
                    ),
                    i(`/projects/${e}/versions/${t}/messages`, {
                        method: "POST",
                        body: l
                    }, r, !0)
            }
            let l = {
                type: "user",
                message: n,
                is_system: !1,
                ...o?.selector && {
                    elementSelector: o.selector
                },
                ...o?.semanticType && {
                    elementType: o.semanticType
                },
                ...o?.innerText && {
                    elementText: o.innerText
                },
                ...u && {
                    pageRoute: u
                }
            };
            return s && (l.templateData = s),
                c && c.length > 0 && (l.attachedBlocks = c),
                i(`/projects/${e}/versions/${t}/messages`, {
                    method: "POST",
                    body: JSON.stringify(l)
                }, r)
        }
        async function S(e, t, n, r) {
            return i(`/projects/${e}/versions/${t}/messages/edit`, {
                method: "POST",
                body: JSON.stringify(n)
            }, r)
        }
        async function v(e, t, n, r) {
            return i(`/projects/${e}/versions/${t}/visual-edit`, {
                method: "POST",
                body: JSON.stringify({
                    replacements: n
                })
            }, r)
        }
        async function P(e, t, n, r) {
            return i(`/projects/${e}/versions/${t}/visual-edit/fix`, {
                method: "POST",
                body: JSON.stringify({
                    replacements: n
                })
            }, r)
        }
        async function T(e, t, n) {
            return i(`/projects/${e}/versions/${t}/fix-generation`, {
                method: "POST"
            }, n)
        }
        async function b(e, t, n, r) {
            return i(`/projects/${e}/versions/${t}/fix-sandbox-crash`, {
                method: "POST",
                body: JSON.stringify({
                    error: r
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }, n)
        }
        async function O(e, t, n, r) {
            return i(`/projects/${e}/versions/${t}/useTemplate`, {
                method: "POST",
                body: JSON.stringify(n)
            }, r)
        }
        async function E(e, t, n) {
            let r = n?.projectId
                , o = n?.tierIndex;
            return i("/stripe/checkout-session", {
                method: "POST",
                body: JSON.stringify({
                    plan: e,
                    ...r && {
                        projectId: r
                    },
                    ..."number" == typeof o && {
                        tierIndex: o
                    }
                })
            }, t)
        }
        async function I(e) {
            return i("/stripe/subscriptions", {
                method: "GET"
            }, e)
        }
        async function A(e) {
            return i("/stripe/additional-credits", {
                method: "GET"
            }, e)
        }
        async function w(e) {
            return i("/stripe/subscription/cancel", {
                method: "POST"
            }, e)
        }
        async function j(e, t) {
            return i("/images/generate", {
                method: "POST",
                body: JSON.stringify({
                    prompt: e
                })
            }, t)
        }
        async function $(e) {
            return i("/images", {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate"
                }
            }, e)
        }
        async function R(e, t, n) {
            return i("/images/save", {
                method: "POST",
                body: JSON.stringify({
                    key: e,
                    url: t
                })
            }, n)
        }
        async function _(e, t, n) {
            return i("/images", {
                method: "DELETE",
                body: JSON.stringify({
                    keys: Array.isArray(e) ? e : [e],
                    urls: Array.isArray(t) ? t : [t]
                })
            }, n)
        }
        async function N(e) {
            return i("/dnsimple/domains", {
                method: "GET"
            }, e)
        }
        async function D(e, t) {
            return i(`/projects/${e}/domainsConfig`, {
                method: "GET"
            }, t)
        }
        async function C(e, t) {
            return i(`/projects/${e}/theme/colors`, {
                method: "GET"
            }, t)
        }
        async function k(e, t, n) {
            return i(`/projects/${e}/theme/colors`, {
                method: "PUT",
                body: JSON.stringify(t)
            }, n)
        }
        async function J(e, t) {
            return i(`/projects/${e}/theme/fonts`, {
                method: "GET"
            }, t)
        }
        async function U(e, t, n) {
            return i(`/projects/${e}/theme/fonts`, {
                method: "PUT",
                body: JSON.stringify({
                    fontKey: t
                })
            }, n)
        }
        async function L(e, t, n) {
            return i(`/projects/${e}/theme/restyle`, {
                method: "PUT",
                body: JSON.stringify(t)
            }, n)
        }
        async function F(e, t, n) {
            return i(`/projects/${e}/email-to`, {
                method: "PUT",
                body: JSON.stringify({
                    email_to: t ?? null
                })
            }, n)
        }
        async function G(e, t) {
            return i("/dnsimple/vercel/connect", {
                method: "POST",
                body: JSON.stringify(e)
            }, t)
        }
        async function M(e, t) {
            let n = await fetch(`/api/check-availability?domain=${encodeURIComponent(e)}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${t}`
                }
            });
            if (!n.ok)
                throw Error("Failed to check domain availability");
            let r = await n.json();
            return "invalid" === r.availability ? {
                code: 400,
                validationError: r.error,
                data: {
                    domain: r.domain,
                    available: !1,
                    premium: !1
                }
            } : {
                code: 200,
                data: {
                    domain: r.domain,
                    available: "available" === r.availability,
                    premium: !1
                }
            }
        }
        async function V(e, t) {
            return i(`/dnsimple/domains/preregister/${encodeURIComponent(e)}`, {
                method: "POST"
            }, t)
        }
        async function x(e) {
            return i("/dnsimple/accounts/me", {
                method: "GET"
            }, e)
        }
        async function z(e, t) {
            return i(`/dnsimple/${encodeURIComponent(e)}`, {
                method: "GET"
            }, t)
        }
        async function W(e, t) {
            return i(`/dnsimple/${encodeURIComponent(e)}/nameservers`, {
                method: "GET"
            }, t)
        }
        async function B(e, t, n) {
            return i(`/dnsimple/${encodeURIComponent(e)}/nameservers`, {
                method: "PUT",
                body: JSON.stringify({
                    nameservers: t
                })
            }, n)
        }
        async function q(e, t) {
            return i(`/dnsimple/${encodeURIComponent(e)}/records`, {
                method: "GET"
            }, t)
        }
        async function H(e, t, n) {
            return i(`/dnsimple/${encodeURIComponent(e)}/records`, {
                method: "POST",
                body: JSON.stringify(t)
            }, n)
        }
        async function K(e, t, n) {
            return i(`/dnsimple/${encodeURIComponent(e)}/records/${encodeURIComponent(t)}`, {
                method: "DELETE"
            }, n)
        }
        async function X(e, t, n) {
            return i(`/dnsimple/domains/auto-renewal/${e}`, {
                method: "PUT",
                body: JSON.stringify({
                    enable: t
                })
            }, n)
        }
        async function Q(e, t, n, r) {
            return i("/stripe/domain-checkout", {
                method: "POST",
                body: JSON.stringify({
                    redirectUrl: e,
                    price: t,
                    meta: r
                })
            }, n)
        }
        async function Y(e, t) {
            return i(`/stripe/domain-checkout/${e}/status`, {
                method: "GET"
            }, t)
        }
        async function Z(e, t, n) {
            return i(`/projects/${e}/versions/${t}/settings`, {
                method: "GET"
            }, n)
        }
        async function ee(e, t, n, r) {
            return i(`/projects/${e}/versions/${t}/settings`, {
                method: "POST",
                body: JSON.stringify(n)
            }, r)
        }
        async function et(e, t) {
            try {
                let n = new FormData;
                n.append("files", e),
                    n.append("contentType", e.type);
                let r = await i("/images/upload", {
                    method: "POST",
                    body: n,
                    headers: {}
                }, t, !0);
                return {
                    code: 0,
                    data: r[0]
                }
            } catch (e) {
                if (e instanceof o)
                    throw e;
                throw new o("Failed to upload image file", 500, e)
            }
        }
        async function en(e, t) {
            try {
                let n = new FormData;
                e.forEach(e => {
                    n.append("files", e)
                }
                );
                let r = await i("/images/upload", {
                    method: "POST",
                    body: n,
                    headers: {}
                }, t, !0);
                return {
                    code: 0,
                    data: r
                }
            } catch (e) {
                if (e instanceof o)
                    throw e;
                throw new o("Failed to upload image files", 500, e)
            }
        }
        async function er(e, t, n) {
            return i(`/projects/${e}/domains`, {
                method: "POST",
                body: JSON.stringify({
                    domain: t
                })
            }, n)
        }
        async function eo(e, t, n) {
            return i(`/projects/${e}/domains/verify`, {
                method: "POST",
                body: JSON.stringify({
                    domain: t
                })
            }, n)
        }
        async function ei(e, t, n) {
            return i("/dnsimple/vercel/disconnect", {
                method: "POST",
                body: JSON.stringify({
                    domain: t,
                    projectId: e
                })
            }, n)
        }
        async function ea(e) {
            return i("/users/limits", {
                method: "GET"
            }, e)
        }
        async function es(e, t, n) {
            return i(`/projects/${e}/versions/${t}/improvements`, {
                method: "GET"
            }, n)
        }
        async function ec(e) {
            return i("/users/referral-code", {
                method: "GET"
            }, e)
        }
        async function eu(e, t) {
            return i("/users/claim-referral-bonus", {
                method: "POST",
                body: JSON.stringify({
                    code: e
                })
            }, t)
        }
        async function el(e, t) {
            return i(`/projects/${e}/resume-generation`, {
                method: "POST"
            }, t)
        }
        async function ed(e, t, n) {
            let { title: r, slug: o, status: a, image: s, content: c, category: u, imagePreview: l } = t
                , d = new FormData;
            return d.append("title", r),
                d.append("slug", o),
                d.append("status", a),
                d.append("content", c),
                d.append("category", u),
                s && d.append("image", s),
                l && d.append("imagePreview", l),
                i(`/posts/${e}`, {
                    method: "POST",
                    body: d
                }, n, !0)
        }
        async function ef(e, t, n) {
            return i(`/posts/${e}/generate`, {
                method: "POST",
                body: JSON.stringify({
                    prompt: t
                })
            }, n)
        }
        async function em(e, t, n) {
            let r = n ? `?status=${n}` : "";
            return i(`/posts/${e}${r}`, {
                method: "GET"
            }, t)
        }
        async function ep(e, t, n, r) {
            let { title: o, slug: a, status: s, image: c, content: u, category: l } = n
                , d = new FormData;
            return d.append("title", o),
                d.append("slug", a),
                d.append("status", s),
                d.append("content", u),
                d.append("category", l),
                c && d.append("image", c),
                i(`/posts/${e}/${t}`, {
                    method: "PATCH",
                    body: d
                }, r, !0)
        }
        async function ey(e, t, n) {
            return i(`/posts/${e}/${t}`, {
                method: "DELETE"
            }, n)
        }
        async function eg(e, t) {
            return i(`/emails/projects/${e}/oauth/google/url`, {
                method: "GET"
            }, t)
        }
        async function eh(e, t) {
            return i(`/emails/projects/${e}/oauth/outlook/url`, {
                method: "GET"
            }, t)
        }
        async function eS(e, t) {
            return i(`/emails/projects/${e}/connection`, {
                method: "GET"
            }, t)
        }
        async function ev(e, t, n) {
            return i(`/emails/projects/${e}/connections/${t}`, {
                method: "DELETE"
            }, n)
        }
        async function eP(e, t, n) {
            return i(`/emails/projects/${e}/send`, {
                method: "POST",
                body: JSON.stringify(t)
            }, n)
        }
        async function eT(e, t, n, r) {
            let o = new URLSearchParams;
            n.page && o.append("page", n.page.toString()),
                n.limit && o.append("limit", n.limit.toString()),
                n.query && o.append("query", n.query),
                n.folder && o.append("folder", n.folder),
                n.readStatus && o.append("readStatus", n.readStatus);
            let a = o.toString();
            return i(`/emails/projects/${e}/connections/${t}/emails${a ? `?${a}` : ""}`, {
                method: "GET"
            }, r)
        }
        async function eb(e, t, n, r) {
            return i(`/emails/projects/${e}/connections/${t}/emails/${n}/read`, {
                method: "PATCH"
            }, r)
        }
        async function eO(e, t) {
            let n = `${r}/projects/${e}/sandbox-snapshot`
                , o = await fetch(n, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${t}`,
                        Accept: "image/webp,image/*"
                    },
                    cache: "no-store"
                });
            if (!o.ok)
                return null;
            let i = await o.blob();
            return URL.createObjectURL(i)
        }
        async function eE(e, t, n) {
            return i(`/projects/${e}/transfer`, {
                method: "POST",
                body: JSON.stringify({
                    toUserEmail: t
                })
            }, n)
        }
        async function eI(e, t, n) {
            return i(`/projects/${e}/versions/${t}/regenerate-images`, {
                method: "POST"
            }, n)
        }
        e.s(["ApiError", 0, o, "addDomainToProjectAPI", 0, er, "bulkDeleteProjectsAPI", 0, g, "cancelSubscriptionAPI", 0, w, "checkDomainAvailabilityAPI", 0, M, "claimReferralBonusAPI", 0, eu, "connectDomainToProjectAPI", 0, G, "createDnsRecordAPI", 0, H, "createDomainCheckoutSessionAPI", 0, Q, "createMessageAPI", 0, h, "createPostAPI", 0, ed, "createProjectAPI", 0, c, "createStripeCheckoutSessionAPI", 0, E, "deleteDnsRecordAPI", 0, K, "deleteImagesAPI", 0, _, "deletePostAPI", 0, ey, "deleteProjectAPI", 0, y, "deployProjectAPI", 0, l, "disconnectEmailAPI", 0, ev, "editMessageAPI", 0, S, "fixGenerationAPI", 0, T, "fixSandboxCrashAPI", 0, b, "generateImageAPI", 0, j, "generatePostAPI", 0, ef, "generateQuestionsAPI", 0, s, "getAdditionalCreditsAPI", 0, A, "getBillingHistoryAPI", 0, a, "getDNSimpleAccountAPI", 0, x, "getDnsRecordsAPI", 0, q, "getDomainCheckoutSessionStatusAPI", 0, Y, "getDomainDetailAPI", 0, z, "getEmailConnectionAPI", 0, eS, "getGoogleOAuthUrlAPI", 0, eg, "getImagesAPI", 0, $, "getMessagesAPI", 0, u, "getNameserversAPI", 0, W, "getOutlookOAuthUrlAPI", 0, eh, "getProjectDomainsConfigAPI", 0, D, "getProjectIDAPI", 0, f, "getProjectImprovementsAPI", 0, es, "getProjectPagesAPI", 0, m, "getProjectPostsAPI", 0, em, "getProjectThemeColorsAPI", 0, C, "getProjectThemeFontsAPI", 0, J, "getProjectsAPI", 0, p, "getReferralCodeAPI", 0, ec, "getSandboxSnapshotAPI", 0, eO, "getSiteSettingsAPI", 0, Z, "getSubscriptionPlansAPI", 0, I, "getUserDomainsAPI", 0, N, "getUserLimitsAPI", 0, ea, "listEmailsAPI", 0, eT, "markEmailAsReadAPI", 0, eb, "preregisterDomainAPI", 0, V, "regenerateImagesAPI", 0, eI, "removeDomainFromProjectAPI", 0, ei, "resumeProjectGenerationAPI", 0, el, "saveImageAPI", 0, R, "sendEmailAPI", 0, eP, "switchProjectVersionAPI", 0, d, "trackDomainSearchAPI", 0, function (e, t) {
            i("/dnsimple/domains/track-search", {
                method: "POST",
                body: JSON.stringify({
                    domain: e
                })
            }, t).catch(() => { }
            )
        }
            , "transferProjectAPI", 0, eE, "updateDomainAutoRenewalAPI", 0, X, "updateNameserversAPI", 0, B, "updatePostAPI", 0, ep, "updateProjectEmailToAPI", 0, F, "updateProjectThemeColorsAPI", 0, k, "updateProjectThemeFontsAPI", 0, U, "updateProjectThemeStyleAPI", 0, L, "updateSiteSettingsAPI", 0, ee, "uploadImageFileAPI", 0, et, "uploadImageFilesAPI", 0, en, "useTemplateAPI", 0, O, "verifyDomainDnsAPI", 0, eo, "visualEditAPI", 0, v, "visualEditFixAPI", 0, P])
    }
    , 46475, e => {
        "use strict";
        let t = async e => await e({
            template: "webild-prod"
        });
        e.s(["getAuthToken", 0, t])
    }
    , 83599, 17805, 75198, 46192, 71235, 9275, 332, 38071, 27530, 30816, 20103, e => {
        "use strict";
        var t = e.i(71645)
            , n = e.i(2239);
        e.s(["ERROR_REVALIDATE_EVENT", 0, 3, "FOCUS_EVENT", 0, 0, "MUTATE_EVENT", 0, 2, "RECONNECT_EVENT", 0, 1], 11671);
        var r = e.i(75389);
        let o = new WeakMap
            , i = () => { }
            , a = i()
            , s = Object
            , c = e => e === a
            , u = e => "function" == typeof e
            , l = (e, t) => ({
                ...e,
                ...t
            })
            , d = e => u(e.then)
            , f = {}
            , m = {}
            , p = "undefined"
            , y = typeof window != p
            , g = typeof document != p
            , h = y && "Deno" in window
            , S = (e, t) => {
                let n = o.get(e);
                return [() => !c(t) && e.get(t) || f, r => {
                    if (!c(t)) {
                        let o = e.get(t);
                        t in m || (m[t] = o),
                            n[5](t, l(o, r), o || f)
                    }
                }
                    , n[6], () => !c(t) && t in m ? m[t] : !c(t) && e.get(t) || f]
            }
            , v = !0
            , [P, T] = y && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [i, i]
            , b = {
                initFocus: e => (g && document.addEventListener("visibilitychange", e),
                    P("focus", e),
                    () => {
                        g && document.removeEventListener("visibilitychange", e),
                            T("focus", e)
                    }
                ),
                initReconnect: e => {
                    let t = () => {
                        v = !0,
                            e()
                    }
                        , n = () => {
                            v = !1
                        }
                        ;
                    return P("online", t),
                        P("offline", n),
                        () => {
                            T("online", t),
                                T("offline", n)
                        }
                }
            }
            , O = !t.default.useId
            , E = !y || h
            , I = e => y && typeof window.requestAnimationFrame != p ? window.requestAnimationFrame(e) : setTimeout(e, 1)
            , A = E ? t.useEffect : t.useLayoutEffect
            , w = "u" > typeof navigator && navigator.connection
            , j = !E && w && (["slow-2g", "2g"].includes(w.effectiveType) || w.saveData)
            , $ = new WeakMap
            , R = (e, t) => e === `[object ${t}]`
            , _ = 0
            , N = e => {
                let t, n, r = typeof e, o = s.prototype.toString.call(e), i = R(o, "Date"), a = R(o, "RegExp"), u = R(o, "Object");
                if (s(e) !== e || i || a)
                    t = i ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                else {
                    if (t = $.get(e))
                        return t;
                    if (t = ++_ + "~",
                        $.set(e, t),
                        Array.isArray(e)) {
                        for (n = 0,
                            t = "@"; n < e.length; n++)
                            t += N(e[n]) + ",";
                        $.set(e, t)
                    }
                    if (u) {
                        t = "#";
                        let r = s.keys(e).sort();
                        for (; !c(n = r.pop());)
                            c(e[n]) || (t += n + ":" + N(e[n]) + ",");
                        $.set(e, t)
                    }
                }
                return t
            }
            , D = e => {
                if (u(e))
                    try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                let t = e;
                return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? N(e) : "", t]
            }
            , C = 0
            , k = () => ++C;
        async function J(...e) {
            let [t, n, r, i] = e
                , s = l({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof i ? {
                    revalidate: i
                } : i || {})
                , f = s.populateCache
                , m = s.rollbackOnError
                , p = s.optimisticData
                , y = s.throwOnError;
            if (u(n)) {
                let e = [];
                for (let r of t.keys())
                    !/^\$(inf|sub)\$/.test(r) && n(t.get(r)._k) && e.push(r);
                return Promise.all(e.map(g))
            }
            return g(n);
            async function g(n) {
                let i, [l] = D(n);
                if (!l)
                    return;
                let [g, h] = S(t, l)
                    , [v, P, T, b] = o.get(t)
                    , O = () => {
                        let e = v[l];
                        return (u(s.revalidate) ? s.revalidate(g().data, n) : !1 !== s.revalidate) && (delete T[l],
                            delete b[l],
                            e && e[0]) ? e[0](2).then(() => g().data) : g().data
                    }
                    ;
                if (e.length < 3)
                    return O();
                let E = r
                    , I = !1
                    , A = k();
                P[l] = [A, 0];
                let w = !c(p)
                    , j = g()
                    , $ = j.data
                    , R = j._c
                    , _ = c(R) ? $ : R;
                if (w && h({
                    data: p = u(p) ? p(_, $) : p,
                    _c: _
                }),
                    u(E))
                    try {
                        E = E(_)
                    } catch (e) {
                        i = e,
                            I = !0
                    }
                if (E && d(E)) {
                    let e;
                    if (E = await E.catch(e => {
                        i = e,
                            I = !0
                    }
                    ),
                        A !== P[l][0]) {
                        if (I)
                            throw i;
                        return E
                    }
                    I && w && (e = i,
                        "function" == typeof m ? m(e) : !1 !== m) && (f = !0,
                            h({
                                data: _,
                                _c: a
                            }))
                }
                if (f && !I && (u(f) ? h({
                    data: f(E, _),
                    error: a,
                    _c: a
                }) : h({
                    data: E,
                    error: a,
                    _c: a
                })),
                    P[l][1] = k(),
                    Promise.resolve(O()).then(() => {
                        h({
                            _c: a
                        })
                    }
                    ),
                    I) {
                    if (y)
                        throw i;
                    return
                }
                return E
            }
        }
        let U = (e, t) => {
            for (let n in e)
                e[n][0] && e[n][0](t)
        }
            , L = (e, t) => {
                if (!o.has(e)) {
                    let n = l(b, t)
                        , r = Object.create(null)
                        , s = J.bind(a, e)
                        , c = i
                        , u = Object.create(null)
                        , d = (e, t) => {
                            let n = u[e] || [];
                            return u[e] = n,
                                n.push(t),
                                () => n.splice(n.indexOf(t), 1)
                        }
                        , f = (t, n, r) => {
                            e.set(t, n);
                            let o = u[t];
                            if (o)
                                for (let e of o)
                                    e(n, r)
                        }
                        , m = () => {
                            if (!o.has(e) && (o.set(e, [r, Object.create(null), Object.create(null), Object.create(null), s, f, d]),
                                !E)) {
                                let t = n.initFocus(setTimeout.bind(a, U.bind(a, r, 0)))
                                    , i = n.initReconnect(setTimeout.bind(a, U.bind(a, r, 1)));
                                c = () => {
                                    t && t(),
                                        i && i(),
                                        o.delete(e)
                                }
                            }
                        }
                        ;
                    return m(),
                        [e, s, m, c]
                }
                return [e, o.get(e)[4]]
            }
            , F = r.dequal
            , [G, M] = L(new Map)
            , V = l({
                onLoadingSlow: i,
                onSuccess: i,
                onError: i,
                onErrorRetry: (e, t, n, r, o) => {
                    let i = n.errorRetryCount
                        , a = o.retryCount
                        , s = ~~((Math.random() + .5) * (1 << (a < 8 ? a : 8))) * n.errorRetryInterval;
                    (c(i) || !(a > i)) && setTimeout(r, s, o)
                }
                ,
                onDiscarded: i,
                revalidateOnFocus: !0,
                revalidateOnReconnect: !0,
                revalidateIfStale: !0,
                shouldRetryOnError: !0,
                errorRetryInterval: j ? 1e4 : 5e3,
                focusThrottleInterval: 5e3,
                dedupingInterval: 2e3,
                loadingTimeout: j ? 5e3 : 3e3,
                compare: F,
                isPaused: () => !1,
                cache: G,
                mutate: M,
                fallback: {}
            }, {
                isOnline: () => v,
                isVisible: () => {
                    let e = g && document.visibilityState;
                    return c(e) || "hidden" !== e
                }
            })
            , x = (e, t) => {
                let n = l(e, t);
                if (t) {
                    let { use: r, fallback: o } = e
                        , { use: i, fallback: a } = t;
                    r && i && (n.use = r.concat(i)),
                        o && a && (n.fallback = l(o, a))
                }
                return n
            }
            , z = (0,
                t.createContext)({})
            , W = e => {
                let { value: n } = e
                    , r = (0,
                        t.useContext)(z)
                    , o = u(n)
                    , i = (0,
                        t.useMemo)(() => o ? n(r) : n, [o, r, n])
                    , s = (0,
                        t.useMemo)(() => o ? i : x(r, i), [o, r, i])
                    , c = i && i.provider
                    , d = (0,
                        t.useRef)(a);
                c && !d.current && (d.current = L(c(s.cache || G), i));
                let f = d.current;
                return f && (s.cache = f[0],
                    s.mutate = f[1]),
                    A(() => {
                        if (f)
                            return f[2] && f[2](),
                                f[3]
                    }
                        , []),
                    (0,
                        t.createElement)(z.Provider, l(e, {
                            value: s
                        }))
            }
            ;
        e.s(["A", 0, i, "B", 0, d, "I", 0, E, "O", 0, s, "S", 0, z, "U", 0, a, "a", 0, u, "b", 0, o, "c", 0, G, "d", 0, V, "e", 0, c, "f", 0, x, "g", 0, W, "i", 0, y, "j", 0, M, "m", 0, l, "n", 0, J, "o", 0, k, "r", 0, O, "s", 0, D, "t", 0, I, "u", 0, A, "z", 0, S], 17805),
            e.s(["UNDEFINED", 0, a], 75198);
        var B = e.i(11671);
        let q = "$inf$";
        e.s(["INFINITE_PREFIX", 0, q], 46192);
        let H = y && window.__SWR_DEVTOOLS_USE__
            , K = H ? window.__SWR_DEVTOOLS_USE__ : []
            , X = e => u(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
            , Q = K.concat(e => (t, n, r) => {
                let i = n && ((...e) => {
                    let [r] = D(t)
                        , [, , , i] = o.get(G);
                    if (r.startsWith(q))
                        return n(...e);
                    let a = i[r];
                    return c(a) ? n(...e) : (delete i[r],
                        a)
                }
                );
                return e(t, i, r)
            }
            )
            , Y = e => function (...n) {
                let r, o = (r = (0,
                    t.useContext)(z),
                    (0,
                        t.useMemo)(() => l(V, r), [r])), [i, a, s] = X(n), c = x(o, s), u = e, { use: d } = c, f = (d || []).concat(Q);
                for (let e = f.length; e--;)
                    u = f[e](u);
                return u(i, a || c.fetcher || null, c)
            }
            , Z = (e, t, n) => {
                let r = t[e] || (t[e] = []);
                return r.push(n),
                    () => {
                        let e = r.indexOf(n);
                        e >= 0 && (r[e] = r[r.length - 1],
                            r.pop())
                    }
            }
            ;
        H && (window.__SWR_DEVTOOLS_REACT__ = t.default),
            e.s(["subscribeCallback", 0, Z, "withArgs", 0, Y, "withMiddleware", 0, (e, t) => (...n) => {
                let [r, o, i] = X(n)
                    , a = (i.use || []).concat(t);
                return e(r, o, {
                    ...i,
                    use: a
                })
            }
            ], 71235),
            e.s(["SWRGlobalState", 0, o], 9275),
            e.s(["serialize", 0, D], 332),
            e.s(["createCacheHelper", 0, S], 38071),
            e.s(["isUndefined", 0, c], 27530),
            e.s(["isFunction", 0, u], 30816);
        e.s(["useIsomorphicLayoutEffect", 0, A], 20103);
        let ee = () => { }
            , et = ee()
            , en = (new WeakMap,
                t.default.use || (e => {
                    switch (e.status) {
                        case "pending":
                            throw e;
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e.status = "pending",
                            e.then(t => {
                                e.status = "fulfilled",
                                    e.value = t
                            }
                                , t => {
                                    e.status = "rejected",
                                        e.reason = t
                                }
                            ),
                            e
                    }
                }
                ))
            , er = {
                dedupe: !0
            }
            , eo = Promise.resolve(a)
            , ei = () => i
            , ea = s.defineProperty(W, "defaultValue", {
                value: V
            })
            , es = Y((e, r, i) => {
                let { cache: s, compare: f, suspense: m, fallbackData: p, revalidateOnMount: y, revalidateIfStale: g, refreshInterval: h, refreshWhenHidden: v, refreshWhenOffline: P, keepPreviousData: T, strictServerPrefetchWarning: b } = i
                    , [w, j, $, R] = o.get(s)
                    , [_, N] = D(e)
                    , C = (0,
                        t.useRef)(!1)
                    , U = (0,
                        t.useRef)(!1)
                    , L = (0,
                        t.useRef)(_)
                    , F = (0,
                        t.useRef)(r)
                    , G = (0,
                        t.useRef)(i)
                    , M = () => G.current.isVisible() && G.current.isOnline()
                    , [V, x, z, W] = S(s, _)
                    , q = (0,
                        t.useRef)({}).current
                    , H = c(p) ? c(i.fallback) ? a : i.fallback[_] : p
                    , K = (e, t) => {
                        for (let n in q)
                            if ("data" === n) {
                                if (!f(e[n], t[n]) && (!c(e[n]) || !f(eu, t[n])))
                                    return !1
                            } else if (t[n] !== e[n])
                                return !1;
                        return !0
                    }
                    , X = !C.current
                    , Q = (0,
                        t.useMemo)(() => {
                            let e = V()
                                , t = W()
                                , n = e => {
                                    let t = l(e);
                                    return (delete t._k,
                                        (() => {
                                            if (!_ || !r || G.current.isPaused())
                                                return !1;
                                            if (X && !c(y))
                                                return y;
                                            let e = c(H) ? t.data : H;
                                            return c(e) || g
                                        }
                                        )()) ? {
                                        isValidating: !0,
                                        isLoading: !0,
                                        ...t
                                    } : t
                                }
                                , o = n(e)
                                , i = e === t ? o : n(t)
                                , a = o;
                            return [() => {
                                let e = n(V());
                                return K(e, a) ? (a.data = e.data,
                                    a.isLoading = e.isLoading,
                                    a.isValidating = e.isValidating,
                                    a.error = e.error,
                                    a) : (a = e,
                                        e)
                            }
                                , () => i]
                        }
                            , [s, _])
                    , Y = (0,
                        n.useSyncExternalStore)((0,
                            t.useCallback)(e => z(_, (t, n) => {
                                K(n, t) || e()
                            }
                            ), [s, _]), Q[0], Q[1])
                    , ee = w[_] && w[_].length > 0
                    , et = Y.data
                    , ea = c(et) ? H && d(H) ? en(H) : H : et
                    , es = Y.error
                    , ec = (0,
                        t.useRef)(ea)
                    , eu = T ? c(et) ? c(ec.current) ? ea : ec.current : et : ea
                    , el = _ && c(ea)
                    , ed = (0,
                        t.useRef)(null);
                E || (0,
                    n.useSyncExternalStore)(ei, () => (ed.current = !1,
                        ed), () => (ed.current = !0,
                            ed));
                let ef = ed.current;
                b && ef && !m && el && console.warn(`Missing pre-initiated data for serialized key "${_}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
                let em = !(!_ || !r || G.current.isPaused()) && (!ee || !!c(es)) && (X && !c(y) ? y : m ? !c(ea) && g : c(ea) || g)
                    , ep = X && em
                    , ey = c(Y.isValidating) ? ep : Y.isValidating
                    , eg = c(Y.isLoading) ? ep : Y.isLoading
                    , eh = (0,
                        t.useCallback)(async e => {
                            let t, n, r = F.current;
                            if (!_ || !r || U.current || G.current.isPaused())
                                return !1;
                            let o = !0
                                , s = e || {}
                                , l = !$[_] || !s.dedupe
                                , d = () => O ? !U.current && _ === L.current && C.current : _ === L.current
                                , m = {
                                    isValidating: !1,
                                    isLoading: !1
                                }
                                , p = () => {
                                    x(m)
                                }
                                , y = () => {
                                    let e = $[_];
                                    e && e[1] === n && delete $[_]
                                }
                                , g = {
                                    isValidating: !0
                                };
                            c(V().data) && (g.isLoading = !0);
                            try {
                                if (l && (x(g),
                                    i.loadingTimeout && c(V().data) && setTimeout(() => {
                                        o && d() && G.current.onLoadingSlow(_, i)
                                    }
                                        , i.loadingTimeout),
                                    $[_] = [r(N), k()]),
                                    [t, n] = $[_],
                                    t = await t,
                                    l && setTimeout(y, i.dedupingInterval),
                                    !$[_] || $[_][1] !== n)
                                    return l && d() && G.current.onDiscarded(_),
                                        !1;
                                m.error = a;
                                let e = j[_];
                                if (!c(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                                    return p(),
                                        l && d() && G.current.onDiscarded(_),
                                        !1;
                                let s = V().data;
                                m.data = f(s, t) ? s : t,
                                    l && d() && G.current.onSuccess(t, _, i)
                            } catch (n) {
                                y();
                                let e = G.current
                                    , { shouldRetryOnError: t } = e;
                                !e.isPaused() && (m.error = n,
                                    l && d() && (e.onError(n, _, e),
                                        (!0 === t || u(t) && t(n)) && (!G.current.revalidateOnFocus || !G.current.revalidateOnReconnect || M()) && e.onErrorRetry(n, _, e, e => {
                                            let t = w[_];
                                            t && t[0] && t[0](B.ERROR_REVALIDATE_EVENT, e)
                                        }
                                            , {
                                                retryCount: (s.retryCount || 0) + 1,
                                                dedupe: !0
                                            })))
                            }
                            return o = !1,
                                p(),
                                !0
                        }
                            , [_, s])
                    , eS = (0,
                        t.useCallback)((...e) => J(s, L.current, ...e), []);
                if (A(() => {
                    F.current = r,
                        G.current = i,
                        c(et) || (ec.current = et)
                }
                ),
                    A(() => {
                        if (!_)
                            return;
                        let e = eh.bind(a, er)
                            , t = 0;
                        G.current.revalidateOnFocus && (t = Date.now() + G.current.focusThrottleInterval);
                        let n = Z(_, w, (n, r = {}) => {
                            if (n == B.FOCUS_EVENT) {
                                let n = Date.now();
                                G.current.revalidateOnFocus && n > t && M() && (t = n + G.current.focusThrottleInterval,
                                    e())
                            } else if (n == B.RECONNECT_EVENT)
                                G.current.revalidateOnReconnect && M() && e();
                            else if (n == B.MUTATE_EVENT)
                                return eh();
                            else if (n == B.ERROR_REVALIDATE_EVENT)
                                return eh(r)
                        }
                        );
                        return U.current = !1,
                            L.current = _,
                            C.current = !0,
                            x({
                                _k: N
                            }),
                            em && !$[_] && (c(ea) || E ? e() : I(e)),
                            () => {
                                U.current = !0,
                                    n()
                            }
                    }
                        , [_]),
                    A(() => {
                        let e;
                        function t() {
                            let t = u(h) ? h(V().data) : h;
                            t && -1 !== e && (e = setTimeout(n, t))
                        }
                        function n() {
                            !V().error && (v || G.current.isVisible()) && (P || G.current.isOnline()) ? eh(er).then(t) : t()
                        }
                        return t(),
                            () => {
                                e && (clearTimeout(e),
                                    e = -1)
                            }
                    }
                        , [h, v, P, _]),
                    (0,
                        t.useDebugValue)(eu),
                    m) {
                    if (!O && E && el)
                        throw Error("Fallback data is required when using Suspense in SSR.");
                    el && (F.current = r,
                        G.current = i,
                        U.current = !1);
                    let e = R[_];
                    if (en(!c(e) && el ? eS(e) : eo),
                        !c(es) && el)
                        throw es;
                    let t = el ? eh(er) : eo;
                    !c(eu) && el && (t.status = "fulfilled",
                        t.value = !0),
                        en(t)
                }
                return {
                    mutate: eS,
                    get data() {
                        return q.data = !0,
                            eu
                    },
                    get error() {
                        return q.error = !0,
                            es
                    },
                    get isValidating() {
                        return q.isValidating = !0,
                            ey
                    },
                    get isLoading() {
                        return q.isLoading = !0,
                            eg
                    }
                }
            }
            );
        e.s(["SWRConfig", 0, ea, "default", 0, es], 83599)
    }
]);
