(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 55838, (e, t, n) => {
    "use strict";
    var r = e.r(71645)
        , o = "function" == typeof Object.is ? Object.is : function (e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
        , l = r.useState
        , i = r.useEffect
        , a = r.useLayoutEffect
        , u = r.useDebugValue;
    function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !o(e, n)
        } catch (e) {
            return !0
        }
    }
    var d = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
        return t()
    }
        : function (e, t) {
            var n = t()
                , r = l({
                    inst: {
                        value: n,
                        getSnapshot: t
                    }
                })
                , o = r[0].inst
                , d = r[1];
            return a(function () {
                o.value = n,
                    o.getSnapshot = t,
                    s(o) && d({
                        inst: o
                    })
            }, [e, n, t]),
                i(function () {
                    return s(o) && d({
                        inst: o
                    }),
                        e(function () {
                            s(o) && d({
                                inst: o
                            })
                        })
                }, [e]),
                u(n),
                n
        }
        ;
    n.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : d
}
    , 2239, (e, t, n) => {
        "use strict";
        t.exports = e.r(55838)
    }
    , 15331, e => {
        "use strict";
        let t = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        function n(e) {
            return e ? e.replace(/([-_][a-z])/g, e => e.toUpperCase().replace(/-|_/, "")) : ""
        }
        function r(e) {
            return e ? e.replace(/[A-Z]/g, e => `_${e.toLowerCase()}`) : ""
        }
        let o = e => {
            let t = n => {
                if (!n)
                    return n;
                if (Array.isArray(n))
                    return n.map(e => "object" == typeof e || Array.isArray(e) ? t(e) : e);
                let r = {
                    ...n
                };
                for (let n of Object.keys(r)) {
                    let o = e(n.toString());
                    o !== n && (r[o] = r[n],
                        delete r[n]),
                        "object" == typeof r[o] && (r[o] = t(r[o]))
                }
                return r
            }
                ;
            return t
        }
            , l = o(r)
            , i = o(n);
        e.s(["camelToSnake", 0, r, "deepCamelToSnake", 0, l, "deepSnakeToCamel", 0, i, "getNonUndefinedValues", 0, function (e) {
            return Object.entries(e).reduce((e, [t, n]) => (void 0 !== n && (e[t] = n),
                e), {})
        }
            , "isIPV4Address", 0, function (e) {
                return t.test(e || "")
            }
            , "isTruthy", 0, function (e) {
                if ("boolean" == typeof e)
                    return e;
                if (null == e)
                    return !1;
                if ("string" == typeof e) {
                    if ("true" === e.toLowerCase())
                        return !0;
                    if ("false" === e.toLowerCase())
                        return !1
                }
                let t = parseInt(e, 10);
                return !isNaN(t) && t > 0
            }
            , "snakeToCamel", 0, n, "titleize", 0, function (e) {
                let t = e || "";
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            , "toSentence", 0, e => {
                if (0 == e.length)
                    return "";
                if (1 == e.length)
                    return e[0];
                let t = e.slice(0, -1).join(", ");
                return t + `, or ${e.slice(-1)}`
            }
        ])
    }
    , 28069, 93375, e => {
        "use strict";
        let t = [".lcl.dev", ".stg.dev", ".lclstage.dev", ".stgstage.dev", ".dev.lclclerk.com", ".stg.lclclerk.com", ".accounts.lclclerk.com", "accountsstage.dev", "accounts.dev"];
        e.s(["CURRENT_DEV_INSTANCE_SUFFIXES", 0, [".accounts.dev", ".accountsstage.dev", ".accounts.lclclerk.com"], "DEV_OR_STAGING_SUFFIXES", 0, t, "LEGACY_DEV_INSTANCE_SUFFIXES", 0, [".lcl.dev", ".lclstage.dev", ".lclclerk.com"], "LOCAL_API_URL", 0, "https://api.lclclerk.com", "LOCAL_ENV_SUFFIXES", 0, [".lcl.dev", "lclstage.dev", ".lclclerk.com", ".accounts.lclclerk.com"], "PROD_API_URL", 0, "https://api.clerk.com", "STAGING_API_URL", 0, "https://api.clerkstage.dev", "STAGING_ENV_SUFFIXES", 0, [".accountsstage.dev"]], 93375);
        let n = t => "u" > typeof atob && "function" == typeof atob ? atob(t) : e.g.Buffer ? new e.g.Buffer(t, "base64").toString() : t
            , r = "pk_live_";
        function o(e) {
            if (!e.endsWith("$"))
                return !1;
            let t = e.slice(0, -1);
            return !t.includes("$") && t.includes(".")
        }
        function l(e = "") {
            try {
                if (!(e.startsWith(r) || e.startsWith("pk_test_")))
                    return !1;
                let t = e.split("_");
                if (3 !== t.length)
                    return !1;
                let l = t[2];
                if (!l)
                    return !1;
                return o(n(l))
            } catch {
                return !1
            }
        }
        e.s(["createDevOrStagingUrlCache", 0, function () {
            let e = new Map;
            return {
                isDevOrStagingUrl: n => {
                    if (!n)
                        return !1;
                    let r = "string" == typeof n ? n : n.hostname
                        , o = e.get(r);
                    return void 0 === o && (o = t.some(e => r.endsWith(e)),
                        e.set(r, o)),
                        o
                }
            }
        }
            , "isPublishableKey", 0, l, "parsePublishableKey", 0, function (e, t = {}) {
                let i;
                if (!(e = e || "") || !l(e)) {
                    if (t.fatal && !e)
                        throw Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
                    if (t.fatal && !l(e))
                        throw Error("Publishable key not valid.");
                    return null
                }
                let a = e.startsWith(r) ? "production" : "development";
                try {
                    i = n(e.split("_")[2])
                } catch {
                    if (t.fatal)
                        throw Error("Publishable key not valid: Failed to decode key.");
                    return null
                }
                if (!o(i)) {
                    if (t.fatal)
                        throw Error("Publishable key not valid: Decoded key has invalid format.");
                    return null
                }
                let u = i.slice(0, -1);
                return t.proxyUrl ? u = t.proxyUrl : "development" !== a && t.domain && t.isSatellite && (u = `clerk.${t.domain}`),
                {
                    instanceType: a,
                    frontendApi: u
                }
            }
        ], 28069)
    }
    , 65389, 80240, 75372, e => {
        "use strict";
        var t = e.i(13039);
        e.s([], 80240);
        var n = e.i(75428);
        e.i(15331);
        var r = e.i(24440);
        e.s([], 75372);
        var o = e.i(71645)
            , l = e.i(27085)
            , i = (0,
                t.buildErrorThrower)({
                    packageName: "@clerk/clerk-react"
                })
            , [a, u] = (0,
                l.createContextAndHook)("AuthContext")
            , s = l.ClerkInstanceContext
            , d = l.useClerkInstanceContext
            , p = e => {
                (0,
                    l.useAssertWrappedByClerkProvider)(() => {
                        i.throwMissingClerkProviderError({
                            source: e
                        })
                    }
                    )
            }
            , c = e => new Promise(t => {
                let n = r => {
                    ["ready", "degraded"].includes(r) && (t(),
                        e.off("status", n))
                }
                    ;
                e.on("status", n, {
                    notify: !0
                })
            }
            );
        function m(e, { treatPendingAsSignedOut: t = !0 } = {}) {
            let { userId: r, orgId: l, orgRole: a, has: u, signOut: s, getToken: d, orgPermissions: p, factorVerificationAge: c, sessionClaims: f } = null != e ? e : {}
                , h = (0,
                    o.useCallback)(e => u ? u(e) : (0,
                        n.createCheckAuthorization)({
                            userId: r,
                            orgId: l,
                            orgRole: a,
                            orgPermissions: p,
                            factorVerificationAge: c,
                            features: (null == f ? void 0 : f.fea) || "",
                            plans: (null == f ? void 0 : f.pla) || ""
                        })(e), [u, r, l, a, p, c, f])
                , g = (0,
                    n.resolveAuthState)({
                        authObject: {
                            ...e,
                            getToken: d,
                            signOut: s,
                            has: h
                        },
                        options: {
                            treatPendingAsSignedOut: t
                        }
                    });
            return g || i.throw("Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support")
        }
        e.s(["AuthContext", 0, a, "IsomorphicClerkContext", 0, s, "customLinkWrongProps", 0, e => `Missing props. <${e}.Link /> component requires the following props: url, label and labelIcon.`, "customMenuItemsIgnoredComponent", 0, "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.", "customPageWrongProps", 0, e => `Missing props. <${e}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`, "customPagesIgnoredComponent", 0, e => `<${e} /> can only accept <${e}.Page /> and <${e}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`, "errorThrower", 0, i, "incompatibleRoutingWithPathProvidedError", 0, e => `The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${e}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`, "multipleChildrenInButtonComponent", 0, e => `You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`, "multipleClerkProvidersError", 0, "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.", "noPathProvidedError", 0, e => `The <${e}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${e} path={'/my-path'} />`, "organizationProfileLinkRenderedError", 0, "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.", "organizationProfilePageRenderedError", 0, "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.", "setErrorThrowerOptions", 0, function (e) {
            i.setMessages(e).setPackageName(e)
        }
            , "unsupportedNonBrowserDomainOrProxyUrlFunction", 0, "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.", "useAssertWrappedByClerkProvider", 0, p, "useAuth", 0, (e = {}) => {
                var t;
                p("useAuth");
                let { treatPendingAsSignedOut: n, ...l } = null != e ? e : {}
                    , i = u();
                void 0 === i.sessionId && void 0 === i.userId && (i = null != l ? l : {});
                let a = d()
                    , s = (0,
                        o.useCallback)(async e => (await c(a),
                            a.session) ? a.session.getToken(e) : null, [a])
                    , f = (0,
                        o.useCallback)(async (...e) => (await c(a),
                            a.signOut(...e)), [a]);
                return null == (t = a.telemetry) || t.record((0,
                    r.eventMethodCalled)("useAuth", {
                        treatPendingAsSignedOut: n
                    })),
                    m({
                        ...i,
                        getToken: s,
                        signOut: f
                    }, {
                        treatPendingAsSignedOut: n
                    })
            }
            , "useDerivedAuth", 0, m, "useEmailLink", 0, function (e) {
                let { startEmailLinkFlow: t, cancelEmailLinkFlow: n } = o.default.useMemo(() => e.createEmailLinkFlow(), [e]);
                return o.default.useEffect(() => n, []),
                {
                    startEmailLinkFlow: t,
                    cancelEmailLinkFlow: n
                }
            }
            , "useIsomorphicClerkContext", 0, d, "useSignIn", 0, () => {
                var e;
                p("useSignIn");
                let t = d()
                    , n = (0,
                        l.useClientContext)();
                return (null == (e = t.telemetry) || e.record((0,
                    r.eventMethodCalled)("useSignIn")),
                    n) ? {
                    isLoaded: !0,
                    signIn: n.signIn,
                    setActive: t.setActive
                } : {
                    isLoaded: !1,
                    signIn: void 0,
                    setActive: void 0
                }
            }
            , "useSignUp", 0, () => {
                var e;
                p("useSignUp");
                let t = d()
                    , n = (0,
                        l.useClientContext)();
                return (null == (e = t.telemetry) || e.record((0,
                    r.eventMethodCalled)("useSignUp")),
                    n) ? {
                    isLoaded: !0,
                    signUp: n.signUp,
                    setActive: t.setActive
                } : {
                    isLoaded: !1,
                    signUp: void 0,
                    setActive: void 0
                }
            }
            , "userButtonIgnoredComponent", 0, "<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.", "userButtonMenuActionRenderedError", 0, "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.", "userButtonMenuItemLinkWrongProps", 0, "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.", "userButtonMenuItemsActionWrongsProps", 0, "Missing props. <UserButton.Action /> component requires the following props: label.", "userButtonMenuItemsRenderedError", 0, "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.", "userButtonMenuLinkRenderedError", 0, "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.", "userProfileLinkRenderedError", 0, "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.", "userProfilePageRenderedError", 0, "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.", "withClerk", 0, (e, t) => {
                let n = ("string" == typeof t ? t : null == t ? void 0 : t.component) || e.displayName || e.name || "Component";
                e.displayName = n;
                let r = "string" == typeof t ? void 0 : t
                    , l = t => {
                        p(n || "withClerk");
                        let l = d();
                        return l.loaded || (null == r ? void 0 : r.renderWhileLoading) ? o.default.createElement(e, {
                            ...t,
                            component: n,
                            clerk: l
                        }) : null
                    }
                    ;
                return l.displayName = `withClerk(${n})`,
                    l
            }
        ], 65389)
    }
    , 41383, e => {
        "use strict";
        e.s(["isDevelopmentEnvironment", 0, () => !1, "isProductionEnvironment", 0, () => {
            try {
                return !0
            } catch { }
            return !1
        }
            , "isTestEnvironment", 0, () => !1])
    }
    , 33917, e => {
        "use strict";
        let t;
        var n, r = e.i(65389), o = e.i(41383);
        let l = e => {
            (0,
                o.isDevelopmentEnvironment)() && console.error(`Clerk: ${e}`)
        }
            ;
        var i = e.i(71645)
            , a = e.i(74080);
        let u = (e, ...t) => {
            let n = {
                ...e
            };
            for (let e of t)
                delete n[e];
            return n
        }
            ;
        var s = e.i(27085)
            , d = new Map
            , p = e => {
                let [t, n] = (0,
                    i.useState)(new Map);
                return e.map(e => ({
                    id: e.id,
                    mount: t => n(n => new Map(n).set(String(e.id), t)),
                    unmount: () => n(t => {
                        let n = new Map(t);
                        return n.set(String(e.id), null),
                            n
                    }
                    ),
                    portal: () => {
                        let n = t.get(String(e.id));
                        return n ? (0,
                            a.createPortal)(e.component, n) : null
                    }
                }))
            }
            , c = (e, t) => !!e && i.default.isValidElement(e) && (null == e ? void 0 : e.type) === t
            , m = (e, t) => g({
                children: e,
                reorderItemsLabels: ["account", "security", "billing", "apiKeys"],
                LinkComponent: O,
                PageComponent: L,
                MenuItemsComponent: T,
                componentName: "UserProfile"
            }, t)
            , f = (e, t) => g({
                children: e,
                reorderItemsLabels: ["general", "members", "billing", "apiKeys"],
                LinkComponent: z,
                PageComponent: x,
                componentName: "OrganizationProfile"
            }, t)
            , h = e => {
                let t = []
                    , n = [z, x, T, L, O];
                return i.default.Children.forEach(e, e => {
                    n.some(t => c(e, t)) || t.push(e)
                }
                ),
                    t
            }
            , g = (e, t) => {
                let { children: n, LinkComponent: o, PageComponent: a, MenuItemsComponent: u, reorderItemsLabels: s, componentName: d } = e
                    , { allowForAnyChildren: m = !1 } = t || {}
                    , f = [];
                i.default.Children.forEach(n, e => {
                    if (!c(e, a) && !c(e, o) && !c(e, u)) {
                        e && !m && l((0,
                            r.customPagesIgnoredComponent)(d));
                        return
                    }
                    let { props: t } = e
                        , { children: n, label: i, url: p, labelIcon: h } = t;
                    if (c(e, a))
                        if (P(t, s))
                            f.push({
                                label: i
                            });
                        else {
                            if (!v(t))
                                return void l((0,
                                    r.customPageWrongProps)(d));
                            f.push({
                                label: i,
                                labelIcon: h,
                                children: n,
                                url: p
                            })
                        }
                    if (c(e, o))
                        if (!y(t))
                            return void l((0,
                                r.customLinkWrongProps)(d));
                        else
                            f.push({
                                label: i,
                                labelIcon: h,
                                url: p
                            })
                }
                );
                let h = []
                    , g = []
                    , E = [];
                f.forEach((e, t) => {
                    if (v(e)) {
                        h.push({
                            component: e.children,
                            id: t
                        }),
                            g.push({
                                component: e.labelIcon,
                                id: t
                            });
                        return
                    }
                    y(e) && E.push({
                        component: e.labelIcon,
                        id: t
                    })
                }
                );
                let _ = p(h)
                    , C = p(g)
                    , k = p(E)
                    , b = []
                    , w = [];
                return f.forEach((e, t) => {
                    if (P(e, s))
                        return void b.push({
                            label: e.label
                        });
                    if (v(e)) {
                        let { portal: n, mount: r, unmount: o } = _.find(e => e.id === t)
                            , { portal: l, mount: i, unmount: a } = C.find(e => e.id === t);
                        b.push({
                            label: e.label,
                            url: e.url,
                            mount: r,
                            unmount: o,
                            mountIcon: i,
                            unmountIcon: a
                        }),
                            w.push(n),
                            w.push(l);
                        return
                    }
                    if (y(e)) {
                        let { portal: n, mount: r, unmount: o } = k.find(e => e.id === t);
                        b.push({
                            label: e.label,
                            url: e.url,
                            mountIcon: r,
                            unmountIcon: o
                        }),
                            w.push(n);
                        return
                    }
                }
                ),
                {
                    customPages: b,
                    customPagesPortals: w
                }
            }
            , P = (e, t) => {
                let { children: n, label: r, url: o, labelIcon: l } = e;
                return !n && !o && !l && t.some(e => e === r)
            }
            , v = e => {
                let { children: t, label: n, url: r, labelIcon: o } = e;
                return !!t && !!r && !!o && !!n
            }
            , y = e => {
                let { children: t, label: n, url: r, labelIcon: o } = e;
                return !t && !!r && !!o && !!n
            }
            , E = (e, t) => {
                let { children: n, label: r, onClick: o, labelIcon: l } = e;
                return !n && !o && !l && t.some(e => e === r)
            }
            , _ = e => {
                let { label: t, labelIcon: n, onClick: r, open: o } = e;
                return !!n && !!t && ("function" == typeof r || "string" == typeof o)
            }
            , C = e => {
                let { label: t, href: n, labelIcon: r } = e;
                return !!n && !!r && !!t
            }
            , k = (t = (n = {
                childList: !0,
                subtree: !0,
                isReady: (e, t) => {
                    var n;
                    return !!(null == e ? void 0 : e.childElementCount) && (null == (n = null == e ? void 0 : e.matches) ? void 0 : n.call(e, t)) && e.childElementCount > 0
                }
            }).isReady,
                e => new Promise((r, o) => {
                    let { root: l = null == document ? void 0 : document.body, selector: i, timeout: a = 0 } = e;
                    if (!l)
                        return void o(Error("No root element provided"));
                    let u = l;
                    if (i && (u = null == l ? void 0 : l.querySelector(i)),
                        t(u, i))
                        return void r();
                    let s = new MutationObserver(e => {
                        for (let o of e)
                            if (!u && i && (u = null == l ? void 0 : l.querySelector(i)),
                                (n.childList && "childList" === o.type || n.attributes && "attributes" === o.type) && t(u, i)) {
                                s.disconnect(),
                                    r();
                                return
                            }
                    }
                    );
                    s.observe(l, n),
                        a > 0 && setTimeout(() => {
                            s.disconnect(),
                                o(Error(`Timeout waiting for ${i}`))
                        }
                            , a)
                }
                ));
        function b(e, t) {
            let n = (0,
                i.useRef)()
                , [r, o] = (0,
                    i.useState)("rendering");
            return (0,
                i.useEffect)(() => {
                    if (!e)
                        throw Error("Clerk: no component name provided, unable to detect mount.");
                    if ("u" > typeof window && !n.current) {
                        let r = `[data-clerk-component="${e}"]`
                            , l = null == t ? void 0 : t.selector;
                        n.current = k({
                            selector: l ? r + l : r
                        }).then(() => {
                            o("rendered")
                        }
                        ).catch(() => {
                            o("error")
                        }
                        )
                    }
                }
                    , [e, null == t ? void 0 : t.selector]),
                r
        }
        var w = e => null == e ? void 0 : e.map(({ mountIcon: e, unmountIcon: t, ...n }) => n)
            , I = class extends i.default.PureComponent {
                constructor() {
                    super(...arguments),
                        this.rootRef = i.default.createRef()
                }
                componentDidUpdate(e) {
                    var t, n, r, o;
                    if (!("mount" in e) || !("mount" in this.props))
                        return;
                    let l = u(e.props, "customPages", "customMenuItems", "children")
                        , i = u(this.props.props, "customPages", "customMenuItems", "children")
                        , a = (null == (t = l.customPages) ? void 0 : t.length) !== (null == (n = i.customPages) ? void 0 : n.length)
                        , d = (null == (r = l.customMenuItems) ? void 0 : r.length) !== (null == (o = i.customMenuItems) ? void 0 : o.length)
                        , p = w(e.props.customMenuItems)
                        , c = w(this.props.props.customMenuItems);
                    (!(0,
                        s.isDeeplyEqual)(l, i) || !(0,
                            s.isDeeplyEqual)(p, c) || a || d) && this.rootRef.current && this.props.updateProps({
                                node: this.rootRef.current,
                                props: this.props.props
                            })
                }
                componentDidMount() {
                    this.rootRef.current && ("mount" in this.props && this.props.mount(this.rootRef.current, this.props.props),
                        "open" in this.props && this.props.open(this.props.props))
                }
                componentWillUnmount() {
                    this.rootRef.current && ("mount" in this.props && this.props.unmount(this.rootRef.current),
                        "open" in this.props && this.props.close())
                }
                render() {
                    let { hideRootHtmlElement: e = !1 } = this.props
                        , t = {
                            ref: this.rootRef,
                            ...this.props.rootProps,
                            ...this.props.component && {
                                "data-clerk-component": this.props.component
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, !e && i.default.createElement("div", {
                        ...t
                    }), this.props.children)
                }
            }
            , A = e => {
                var t, n;
                return i.default.createElement(i.default.Fragment, null, null == (t = null == e ? void 0 : e.customPagesPortals) ? void 0 : t.map((e, t) => (0,
                    i.createElement)(e, {
                        key: t
                    })), null == (n = null == e ? void 0 : e.customMenuItemsPortals) ? void 0 : n.map((e, t) => (0,
                        i.createElement)(e, {
                            key: t
                        })))
            }
            , U = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountSignIn,
                        unmount: e.unmountSignIn,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "SignIn",
                        renderWhileLoading: !0
                    })
            , S = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountSignUp,
                        unmount: e.unmountSignUp,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "SignUp",
                        renderWhileLoading: !0
                    });
        function L({ children: e }) {
            return l(r.userProfilePageRenderedError),
                i.default.createElement(i.default.Fragment, null, e)
        }
        function O({ children: e }) {
            return l(r.userProfileLinkRenderedError),
                i.default.createElement(i.default.Fragment, null, e)
        }
        var M = Object.assign((0,
            r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                let o = "rendering" === b(t) || !e.loaded
                    , l = {
                        ...o && n && {
                            style: {
                                display: "none"
                            }
                        }
                    }
                    , { customPages: a, customPagesPortals: u } = m(r.children);
                return i.default.createElement(i.default.Fragment, null, o && n, i.default.createElement(I, {
                    component: t,
                    mount: e.mountUserProfile,
                    unmount: e.unmountUserProfile,
                    updateProps: e.__unstable__updateProps,
                    props: {
                        ...r,
                        customPages: a
                    },
                    rootProps: l
                }, i.default.createElement(A, {
                    customPagesPortals: u
                })))
            }
                , {
                    component: "UserProfile",
                    renderWhileLoading: !0
                }), {
            Page: L,
            Link: O
        })
            , F = (0,
                i.createContext)({
                    mount: () => { }
                    ,
                    unmount: () => { }
                    ,
                    updateProps: () => { }
                });
        function T({ children: e }) {
            return l(r.userButtonMenuItemsRenderedError),
                i.default.createElement(i.default.Fragment, null, e)
        }
        function R({ children: e }) {
            return l(r.userButtonMenuActionRenderedError),
                i.default.createElement(i.default.Fragment, null, e)
        }
        function B({ children: e }) {
            return l(r.userButtonMenuLinkRenderedError),
                i.default.createElement(i.default.Fragment, null, e)
        }
        var W = Object.assign((0,
            r.withClerk)(({ clerk: e, component: t, fallback: n, ...o }) => {
                var a;
                let u = "rendering" === b(t) || !e.loaded
                    , s = {
                        ...u && n && {
                            style: {
                                display: "none"
                            }
                        }
                    }
                    , { customPages: d, customPagesPortals: f } = m(o.children, {
                        allowForAnyChildren: !!o.__experimental_asProvider
                    })
                    , g = {
                        ...o.userProfileProps,
                        customPages: d
                    }
                    , { customMenuItems: P, customMenuItemsPortals: v } = (({ children: e, MenuItemsComponent: t, MenuActionComponent: n, MenuLinkComponent: o, UserProfileLinkComponent: a, UserProfilePageComponent: u, reorderItemsLabels: s, allowForAnyChildren: d = !1 }) => {
                        let m = []
                            , f = []
                            , h = [];
                        i.default.Children.forEach(e, e => {
                            if (!c(e, t) && !c(e, a) && !c(e, u)) {
                                e && !d && l(r.userButtonIgnoredComponent);
                                return
                            }
                            if (c(e, a) || c(e, u))
                                return;
                            let { props: p } = e;
                            i.default.Children.forEach(p.children, e => {
                                if (!c(e, n) && !c(e, o)) {
                                    e && l(r.customMenuItemsIgnoredComponent);
                                    return
                                }
                                let { props: t } = e
                                    , { label: i, labelIcon: a, href: u, onClick: d, open: p } = t;
                                if (c(e, n))
                                    if (E(t, s))
                                        m.push({
                                            label: i
                                        });
                                    else {
                                        if (!_(t))
                                            return void l(r.userButtonMenuItemsActionWrongsProps);
                                        let e = {
                                            label: i,
                                            labelIcon: a
                                        };
                                        if (void 0 !== d)
                                            m.push({
                                                ...e,
                                                onClick: d
                                            });
                                        else {
                                            if (void 0 === p)
                                                return void l("Custom menu item must have either onClick or open property");
                                            m.push({
                                                ...e,
                                                open: p.startsWith("/") ? p : `/${p}`
                                            })
                                        }
                                    }
                                if (c(e, o))
                                    if (!C(t))
                                        return void l(r.userButtonMenuItemLinkWrongProps);
                                    else
                                        m.push({
                                            label: i,
                                            labelIcon: a,
                                            href: u
                                        })
                            }
                            )
                        }
                        );
                        let g = []
                            , P = [];
                        m.forEach((e, t) => {
                            _(e) && g.push({
                                component: e.labelIcon,
                                id: t
                            }),
                                C(e) && P.push({
                                    component: e.labelIcon,
                                    id: t
                                })
                        }
                        );
                        let v = p(g)
                            , y = p(P);
                        return m.forEach((e, t) => {
                            if (E(e, s) && f.push({
                                label: e.label
                            }),
                                _(e)) {
                                let { portal: n, mount: r, unmount: o } = v.find(e => e.id === t)
                                    , l = {
                                        label: e.label,
                                        mountIcon: r,
                                        unmountIcon: o
                                    };
                                "onClick" in e ? l.onClick = e.onClick : "open" in e && (l.open = e.open),
                                    f.push(l),
                                    h.push(n)
                            }
                            if (C(e)) {
                                let { portal: n, mount: r, unmount: o } = y.find(e => e.id === t);
                                f.push({
                                    label: e.label,
                                    href: e.href,
                                    mountIcon: r,
                                    unmountIcon: o
                                }),
                                    h.push(n)
                            }
                        }
                        ),
                        {
                            customMenuItems: f,
                            customMenuItemsPortals: h
                        }
                    }
                    )({
                        children: o.children,
                        reorderItemsLabels: ["manageAccount", "signOut"],
                        MenuItemsComponent: T,
                        MenuActionComponent: R,
                        MenuLinkComponent: B,
                        UserProfileLinkComponent: O,
                        UserProfilePageComponent: L,
                        allowForAnyChildren: null != (a = ({
                            allowForAnyChildren: !!o.__experimental_asProvider
                        }).allowForAnyChildren) && a
                    })
                    , y = h(o.children)
                    , k = {
                        mount: e.mountUserButton,
                        unmount: e.unmountUserButton,
                        updateProps: e.__unstable__updateProps,
                        props: {
                            ...o,
                            userProfileProps: g,
                            customMenuItems: P
                        }
                    };
                return i.default.createElement(F.Provider, {
                    value: k
                }, u && n, e.loaded && i.default.createElement(I, {
                    component: t,
                    ...k,
                    hideRootHtmlElement: !!o.__experimental_asProvider,
                    rootProps: s
                }, o.__experimental_asProvider ? y : null, i.default.createElement(A, {
                    customPagesPortals: f,
                    customMenuItemsPortals: v
                })))
            }
                , {
                    component: "UserButton",
                    renderWhileLoading: !0
                }), {
            UserProfilePage: L,
            UserProfileLink: O,
            MenuItems: T,
            Action: R,
            Link: B,
            __experimental_Outlet: function (e) {
                let t = (0,
                    i.useContext)(F)
                    , n = {
                        ...t,
                        props: {
                            ...t.props,
                            ...e
                        }
                    };
                return i.default.createElement(I, {
                    ...n
                })
            }
        });
        function x({ children: e }) {
            return l(r.organizationProfilePageRenderedError),
                i.default.createElement(i.default.Fragment, null, e)
        }
        function z({ children: e }) {
            return l(r.organizationProfileLinkRenderedError),
                i.default.createElement(i.default.Fragment, null, e)
        }
        var N = Object.assign((0,
            r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                let o = "rendering" === b(t) || !e.loaded
                    , l = {
                        ...o && n && {
                            style: {
                                display: "none"
                            }
                        }
                    }
                    , { customPages: a, customPagesPortals: u } = f(r.children);
                return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                    component: t,
                    mount: e.mountOrganizationProfile,
                    unmount: e.unmountOrganizationProfile,
                    updateProps: e.__unstable__updateProps,
                    props: {
                        ...r,
                        customPages: a
                    },
                    rootProps: l
                }, i.default.createElement(A, {
                    customPagesPortals: u
                })))
            }
                , {
                    component: "OrganizationProfile",
                    renderWhileLoading: !0
                }), {
            Page: x,
            Link: z
        })
            , $ = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountCreateOrganization,
                        unmount: e.unmountCreateOrganization,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "CreateOrganization",
                        renderWhileLoading: !0
                    })
            , D = (0,
                i.createContext)({
                    mount: () => { }
                    ,
                    unmount: () => { }
                    ,
                    updateProps: () => { }
                })
            , j = Object.assign((0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        }
                        , { customPages: a, customPagesPortals: u } = f(r.children, {
                            allowForAnyChildren: !!r.__experimental_asProvider
                        })
                        , s = {
                            ...r.organizationProfileProps,
                            customPages: a
                        }
                        , d = h(r.children)
                        , p = {
                            mount: e.mountOrganizationSwitcher,
                            unmount: e.unmountOrganizationSwitcher,
                            updateProps: e.__unstable__updateProps,
                            props: {
                                ...r,
                                organizationProfileProps: s
                            },
                            rootProps: l,
                            component: t
                        };
                    return e.__experimental_prefetchOrganizationSwitcher(),
                        i.default.createElement(D.Provider, {
                            value: p
                        }, i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                            ...p,
                            hideRootHtmlElement: !!r.__experimental_asProvider
                        }, r.__experimental_asProvider ? d : null, i.default.createElement(A, {
                            customPagesPortals: u
                        }))))
                }
                    , {
                        component: "OrganizationSwitcher",
                        renderWhileLoading: !0
                    }), {
                OrganizationProfilePage: x,
                OrganizationProfileLink: z,
                __experimental_Outlet: function (e) {
                    let t = (0,
                        i.useContext)(D)
                        , n = {
                            ...t,
                            props: {
                                ...t.props,
                                ...e
                            }
                        };
                    return i.default.createElement(I, {
                        ...n
                    })
                }
            })
            , G = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountOrganizationList,
                        unmount: e.unmountOrganizationList,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "OrganizationList",
                        renderWhileLoading: !0
                    })
            , K = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        open: e.openGoogleOneTap,
                        close: e.closeGoogleOneTap,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "GoogleOneTap",
                        renderWhileLoading: !0
                    })
            , V = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountWaitlist,
                        unmount: e.unmountWaitlist,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "Waitlist",
                        renderWhileLoading: !0
                    })
            , q = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t, {
                        selector: '[data-component-status="ready"]'
                    }) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountPricingTable,
                        unmount: e.unmountPricingTable,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "PricingTable",
                        renderWhileLoading: !0
                    })
            , X = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountAPIKeys,
                        unmount: e.unmountAPIKeys,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "ApiKeys",
                        renderWhileLoading: !0
                    })
            , Y = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountUserAvatar,
                        unmount: e.unmountUserAvatar,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "UserAvatar",
                        renderWhileLoading: !0
                    })
            , H = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountTaskChooseOrganization,
                        unmount: e.unmountTaskChooseOrganization,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "TaskChooseOrganization",
                        renderWhileLoading: !0
                    })
            , Z = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountTaskResetPassword,
                        unmount: e.unmountTaskResetPassword,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "TaskResetPassword",
                        renderWhileLoading: !0
                    })
            , J = (0,
                r.withClerk)(({ clerk: e, component: t, fallback: n, ...r }) => {
                    let o = "rendering" === b(t) || !e.loaded
                        , l = {
                            ...o && n && {
                                style: {
                                    display: "none"
                                }
                            }
                        };
                    return i.default.createElement(i.default.Fragment, null, o && n, e.loaded && i.default.createElement(I, {
                        component: t,
                        mount: e.mountTaskSetupMFA,
                        unmount: e.unmountTaskSetupMFA,
                        updateProps: e.__unstable__updateProps,
                        props: r,
                        rootProps: l
                    }))
                }
                    , {
                        component: "TaskSetupMFA",
                        renderWhileLoading: !0
                    });
        e.s(["APIKeys", 0, X, "CreateOrganization", 0, $, "GoogleOneTap", 0, K, "OrganizationList", 0, G, "OrganizationProfile", 0, N, "OrganizationSwitcher", 0, j, "PricingTable", 0, q, "SignIn", 0, U, "SignUp", 0, S, "TaskChooseOrganization", 0, H, "TaskResetPassword", 0, Z, "TaskSetupMFA", 0, J, "UserAvatar", 0, Y, "UserButton", 0, W, "UserProfile", 0, M, "Waitlist", 0, V, "assertSingleChild", 0, e => t => {
            try {
                return i.default.Children.only(e)
            } catch {
                return r.errorThrower.throw((0,
                    r.multipleChildrenInButtonComponent)(t))
            }
        }
            , "isConstructor", 0, function (e) {
                return "function" == typeof e
            }
            , "normalizeWithDefaultValue", 0, (e, t) => (e || (e = t),
                "string" == typeof e && (e = i.default.createElement("button", null, e)),
                e), "safeExecute", 0, e => (...t) => {
                    if (e && "function" == typeof e)
                        return e(...t)
                }
            , "withMaxAllowedInstancesGuard", 0, function (e, t, n) {
                let o = e.displayName || e.name || t || "Component"
                    , l = o => (!function (e, t, n = 1) {
                        i.default.useEffect(() => {
                            let o = d.get(e) || 0;
                            return o == n ? r.errorThrower.throw(t) : (d.set(e, o + 1),
                                () => {
                                    d.set(e, (d.get(e) || 1) - 1)
                                }
                            )
                        }
                            , [])
                    }(t, n),
                        i.default.createElement(e, {
                            ...o
                        }));
                return l.displayName = `withMaxAllowedInstancesGuard(${o})`,
                    l
            }
        ], 33917)
    }
]);
