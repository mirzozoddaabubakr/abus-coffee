(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 92448, 65829, 5045, 75369, 97651, e => {
    "use strict";
    e.i(47167);
    var t, i, r, s, n, l, o, a, h, u = e.i(65389), d = e.i(41383);
    let c = new Set
        , p = (e, t, i) => {
            let r = (0,
                d.isTestEnvironment)() || (0,
                    d.isProductionEnvironment)()
                , s = i ?? e;
            c.has(s) || r || (c.add(s),
                console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${t}`))
        }
        ;
    var k = e.i(71645)
        , g = e.i(27085)
        , m = (0,
            u.withClerk)(({ clerk: e, ...t }) => {
                let { client: i, session: r } = e
                    , s = i.signedInSessions ? i.signedInSessions.length > 0 : i.activeSessions && i.activeSessions.length > 0;
                return k.default.useEffect(() => {
                    null === r && s ? e.redirectToAfterSignOut() : e.redirectToSignIn(t)
                }
                    , []),
                    null
            }
                , "RedirectToSignIn")
        , f = (0,
            u.withClerk)(({ clerk: e, ...t }) => (k.default.useEffect(() => {
                e.redirectToSignUp(t)
            }
                , []),
                null), "RedirectToSignUp")
        , v = (0,
            u.withClerk)(({ clerk: e, ...t }) => (k.default.useEffect(() => {
                e.redirectToTasks(t)
            }
                , []),
                null), "RedirectToTasks")
        , C = (0,
            u.withClerk)(({ clerk: e }) => (k.default.useEffect(() => {
                p("RedirectToUserProfile", "Use the `redirectToUserProfile()` method instead."),
                    e.redirectToUserProfile()
            }
                , []),
                null), "RedirectToUserProfile")
        , _ = (0,
            u.withClerk)(({ clerk: e }) => (k.default.useEffect(() => {
                p("RedirectToOrganizationProfile", "Use the `redirectToOrganizationProfile()` method instead."),
                    e.redirectToOrganizationProfile()
            }
                , []),
                null), "RedirectToOrganizationProfile")
        , j = (0,
            u.withClerk)(({ clerk: e }) => (k.default.useEffect(() => {
                p("RedirectToCreateOrganization", "Use the `redirectToCreateOrganization()` method instead."),
                    e.redirectToCreateOrganization()
            }
                , []),
                null), "RedirectToCreateOrganization")
        , w = (0,
            u.withClerk)(({ clerk: e, ...t }) => (k.default.useEffect(() => {
                e.handleRedirectCallback(t)
            }
                , []),
                null), "AuthenticateWithRedirectCallback");
    e.s(["AuthenticateWithRedirectCallback", 0, w, "ClerkDegraded", 0, ({ children: e }) => ((0,
        u.useAssertWrappedByClerkProvider)("ClerkDegraded"),
        "degraded" !== (0,
            u.useIsomorphicClerkContext)().status) ? null : e, "ClerkFailed", 0, ({ children: e }) => ((0,
                u.useAssertWrappedByClerkProvider)("ClerkFailed"),
                "error" !== (0,
                    u.useIsomorphicClerkContext)().status) ? null : e, "ClerkLoaded", 0, ({ children: e }) => ((0,
                        u.useAssertWrappedByClerkProvider)("ClerkLoaded"),
                        (0,
                            u.useIsomorphicClerkContext)().loaded) ? e : null, "ClerkLoading", 0, ({ children: e }) => ((0,
                                u.useAssertWrappedByClerkProvider)("ClerkLoading"),
                                "loading" !== (0,
                                    u.useIsomorphicClerkContext)().status) ? null : e, "MultisessionAppSupport", 0, ({ children: e }) => {
                                        (0,
                                            u.useAssertWrappedByClerkProvider)("MultisessionAppSupport");
                                        let t = (0,
                                            g.useSessionContext)();
                                        return k.default.createElement(k.default.Fragment, {
                                            key: t ? t.id : "no-users"
                                        }, e)
                                    }
        , "Protect", 0, ({ children: e, fallback: t, treatPendingAsSignedOut: i, ...r }) => {
            (0,
                u.useAssertWrappedByClerkProvider)("Protect");
            let { isLoaded: s, has: n, userId: l } = (0,
                u.useAuth)({
                    treatPendingAsSignedOut: i
                });
            if (!s)
                return null;
            let o = null != t ? t : null;
            return l ? "function" == typeof r.condition ? r.condition(n) ? e : o : r.role || r.permission || r.feature || r.plan ? n(r) ? e : o : e : o
        }
        , "RedirectToCreateOrganization", 0, j, "RedirectToOrganizationProfile", 0, _, "RedirectToSignIn", 0, m, "RedirectToSignUp", 0, f, "RedirectToTasks", 0, v, "RedirectToUserProfile", 0, C, "SignedIn", 0, ({ children: e, treatPendingAsSignedOut: t }) => {
            (0,
                u.useAssertWrappedByClerkProvider)("SignedIn");
            let { userId: i } = (0,
                u.useAuth)({
                    treatPendingAsSignedOut: t
                });
            return i ? e : null
        }
        , "SignedOut", 0, ({ children: e, treatPendingAsSignedOut: t }) => {
            (0,
                u.useAssertWrappedByClerkProvider)("SignedOut");
            let { userId: i } = (0,
                u.useAuth)({
                    treatPendingAsSignedOut: t
                });
            return null === i ? e : null
        }
    ], 65829);
    var S = e.i(33917)
        , b = e => {
            throw TypeError(e)
        }
        , P = (e, t, i) => t.has(e) || b("Cannot " + i)
        , U = (e, t, i) => (P(e, t, "read from private field"),
            i ? i.call(e) : t.get(e))
        , O = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i)
        , y = (e, t, i, r) => (P(e, t, "write to private field"),
            r ? r.call(e, i) : t.set(e, i),
            i)
        , T = (e, t, i) => (P(e, t, "access private method"),
            i)
        , M = e.i(13039)
        , A = e.i(28069);
    let z = {
        initialDelay: 125,
        maxDelayBetweenRetries: 0,
        factor: 2,
        shouldRetry: (e, t) => t < 5,
        retryImmediately: !1,
        jitter: !0
    }
        , E = async e => new Promise(t => setTimeout(t, e))
        , I = (e, t) => t ? e * (1 + Math.random()) : e
        , W = async (e, t = {}) => {
            var i;
            let r, s = 0, { shouldRetry: n, initialDelay: l, maxDelayBetweenRetries: o, factor: a, retryImmediately: h, jitter: u, onBeforeRetry: d } = {
                ...z,
                ...t
            }, c = (i = {
                initialDelay: l,
                maxDelayBetweenRetries: o,
                factor: a,
                jitter: u
            },
                r = 0,
                async () => {
                    let e;
                    await E((e = I(e = i.initialDelay * Math.pow(i.factor, r), i.jitter),
                        Math.min(i.maxDelayBetweenRetries || e, e))),
                        r++
                }
            );
            for (; ;)
                try {
                    return await e()
                } catch (e) {
                    if (!n(e, ++s))
                        throw e;
                    d && await d(s),
                        h && 1 === s ? await E(I(100, u)) : await c()
                }
        }
        ;
    async function N(e = "", t) {
        let { async: i, defer: r, beforeLoad: s, crossOrigin: n, nonce: l } = t || {};
        return W(() => new Promise((t, o) => {
            e || o(Error("loadScript cannot be called without a src")),
                document && document.body || o(Error("loadScript cannot be called when document does not exist"));
            let a = document.createElement("script");
            n && a.setAttribute("crossorigin", n),
                a.async = i || !1,
                a.defer = r || !1,
                a.addEventListener("load", () => {
                    a.remove(),
                        t(a)
                }
                ),
                a.addEventListener("error", t => {
                    a.remove(),
                        o(t.error ?? Error(`failed to load script: ${e}`))
                }
                ),
                a.src = e,
                a.nonce = l,
                s?.(a),
                document.body.appendChild(a)
        }
        ), {
            shouldRetry: (e, t) => t <= 5
        })
    }
    function R(e) {
        return e.startsWith("/")
    }
    e.i(93375);
    let L = "failed_to_load_clerk_js"
        , x = "Failed to load Clerk"
        , { isDevOrStagingUrl: B } = (0,
            A.createDevOrStagingUrlCache)()
        , F = (0,
            M.buildErrorThrower)({
                packageName: "@clerk/shared"
            });
    function D(e) {
        F.setPackageName({
            packageName: e
        })
    }
    function K() {
        if ("u" < typeof window || !window.Clerk)
            return !1;
        let e = window.Clerk;
        return "object" == typeof e && "function" == typeof e.load
    }
    function V(e, t) {
        return new Promise((i, r) => {
            let s = !1
                , n = (e, t) => {
                    clearTimeout(e),
                        clearInterval(t)
                }
                ;
            t?.addEventListener("error", () => {
                n(o, a),
                    r(new M.ClerkRuntimeError(x, {
                        code: L
                    }))
            }
            );
            let l = () => {
                !s && K() && (s = !0,
                    n(o, a),
                    i(null))
            }
                , o = setTimeout(() => {
                    s || (s = !0,
                        n(o, a),
                        K() ? i(null) : r(new M.ClerkRuntimeError(x, {
                            code: "failed_to_load_clerk_js_timeout"
                        })))
                }
                    , e);
            l();
            let a = setInterval(() => {
                s ? clearInterval(a) : l()
            }
                , 100)
        }
        )
    }
    let G = async e => {
        let t = e?.scriptLoadTimeout ?? 15e3;
        if (K())
            return null;
        if (!e?.publishableKey)
            return F.throwMissingPublishableKeyError(),
                null;
        let i = J(e)
            , r = document.querySelector("script[data-clerk-js-script]");
        if (r)
            if (function (e) {
                if ("u" < typeof window || !window.performance)
                    return !1;
                let t = performance.getEntriesByName(e, "resource");
                if (0 === t.length)
                    return !1;
                let i = t[t.length - 1];
                if (0 === i.transferSize && 0 === i.decodedBodySize && (0 === i.responseEnd || i.responseEnd > 0 && i.responseStart > 0 || "responseStatus" in i && (i.responseStatus >= 400 || 0 === i.responseStatus)))
                    return !0;
                return !1
            }(i))
                r.remove();
            else
                try {
                    return await V(t, r),
                        null
                } catch {
                    r.remove()
                }
        let s = V(t);
        return N(i, {
            async: !0,
            crossOrigin: "anonymous",
            nonce: e.nonce,
            beforeLoad: q(e)
        }).catch(e => {
            throw new M.ClerkRuntimeError(x + (e.message ? `, ${e.message}` : ""), {
                code: L,
                cause: e
            })
        }
        ),
            s
    }
        , J = e => {
            var t;
            let { clerkJSUrl: i, clerkJSVariant: r, clerkJSVersion: s, proxyUrl: n, domain: l, publishableKey: o } = e;
            if (i)
                return i;
            let a = "";
            if (n && (!n || (t = n,
                /^http(s)?:\/\//.test(t || "")) || R(n)))
                a = (!n ? "" : R(n) ? new URL(n, window.location.origin).toString() : n).replace(/http(s)?:\/\//, "");
            else
                a = l && !B((0,
                    A.parsePublishableKey)(o)?.frontendApi || "") ? function (e) {
                        let t;
                        if (!e)
                            return "";
                        if (e.match(/^(clerk\.)+\w*$/))
                            t = /(clerk\.)*(?=clerk\.)/;
                        else {
                            if (e.match(/\.clerk.accounts/))
                                return e;
                            t = /^(clerk\.)*/gi
                        }
                        return `clerk.${e.replace(t, "")}`
                    }(l) : (0,
                        A.parsePublishableKey)(o)?.frontendApi || "";
            let h = r ? `${r.replace(/\.+$/, "")}.` : ""
                , u = ((e, t = "5.125.10") => {
                    let i;
                    if (e)
                        return e;
                    let r = (i = t,
                        i.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)?.[1]);
                    if (r)
                        return "snapshot" === r ? "5.125.10" : r;
                    return t.trim().replace(/^v/, "").split(".")[0]
                }
                )(s);
            return `https://${a}/npm/@clerk/clerk-js@${u}/dist/clerk.${h}browser.js`
        }
        , $ = e => {
            let t = {};
            return e.publishableKey && (t["data-clerk-publishable-key"] = e.publishableKey),
                e.proxyUrl && (t["data-clerk-proxy-url"] = e.proxyUrl),
                e.domain && (t["data-clerk-domain"] = e.domain),
                e.nonce && (t.nonce = e.nonce),
                t
        }
        , q = e => t => {
            let i = $(e);
            for (let e in i)
                t.setAttribute(e, i[e])
        }
        ;
    e.s(["buildClerkJsScriptAttributes", 0, $, "clerkJsScriptUrl", 0, J, "loadClerkJsScript", 0, G, "setClerkJsLoadingErrorPackageName", 0, D], 5045);
    function H() {
        return "u" > typeof window
    }
    RegExp("bot|spider|crawl|APIs-Google|AdsBot|Googlebot|mediapartners|Google Favicon|FeedFetcher|Google-Read-Aloud|DuplexWeb-Google|googleweblight|bing|yandex|baidu|duckduck|yahoo|ecosia|ia_archiver|facebook|instagram|pinterest|reddit|slack|twitter|whatsapp|youtube|semrush", "i"),
        e.s(["inBrowser", 0, H], 75369);
    let X = (e, t, i, r, s) => {
        let { notify: n } = s || {}
            , l = e.get(i);
        l || (l = [],
            e.set(i, l)),
            l.push(r),
            n && t.has(i) && r(t.get(i))
    }
        , Q = (e, t, i) => (e.get(t) || []).map(e => e(i))
        , Y = (e, t, i) => {
            let r = e.get(t);
            r && (i ? r.splice(r.indexOf(i) >>> 0, 1) : e.set(t, []))
        }
        , Z = "status";
    function ee(e, t, i) {
        return "function" == typeof e ? e(t) : void 0 !== e ? e : void 0 !== i ? i : void 0
    }
    "u" > typeof window && !window.global && (window.global = e.g);
    var et = (0,
        u.withClerk)(({ clerk: e, children: t, ...i }) => {
            let { appearance: r, signUpFallbackRedirectUrl: s, forceRedirectUrl: n, fallbackRedirectUrl: l, signUpForceRedirectUrl: o, mode: a, initialValues: h, withSignUp: u, oauthFlow: d, ...c } = i;
            t = (0,
                S.normalizeWithDefaultValue)(t, "Sign in");
            let p = (0,
                S.assertSingleChild)(t)("SignInButton")
                , g = async t => {
                    let i;
                    return p && "object" == typeof p && "props" in p && await (0,
                        S.safeExecute)(p.props.onClick)(t),
                        i = {
                            forceRedirectUrl: n,
                            fallbackRedirectUrl: l,
                            signUpFallbackRedirectUrl: s,
                            signUpForceRedirectUrl: o,
                            initialValues: h,
                            withSignUp: u,
                            oauthFlow: d
                        },
                        "modal" === a ? e.openSignIn({
                            ...i,
                            appearance: r
                        }) : e.redirectToSignIn({
                            ...i,
                            signInFallbackRedirectUrl: l,
                            signInForceRedirectUrl: n
                        })
                }
                , m = {
                    ...c,
                    onClick: g
                };
            return k.default.cloneElement(p, m)
        }
            , {
                component: "SignInButton",
                renderWhileLoading: !0
            })
        , ei = (0,
            u.withClerk)(({ clerk: e, children: t, ...i }) => {
                let { redirectUrl: r, ...s } = i;
                t = (0,
                    S.normalizeWithDefaultValue)(t, "Sign in with Metamask");
                let n = (0,
                    S.assertSingleChild)(t)("SignInWithMetamaskButton")
                    , l = async () => {
                        !async function () {
                            await e.authenticateWithMetamask({
                                redirectUrl: r || void 0
                            })
                        }()
                    }
                    , o = async e => (await (0,
                        S.safeExecute)(n.props.onClick)(e),
                        l())
                    , a = {
                        ...s,
                        onClick: o
                    };
                return k.default.cloneElement(n, a)
            }
                , {
                    component: "SignInWithMetamask",
                    renderWhileLoading: !0
                })
        , er = (0,
            u.withClerk)(({ clerk: e, children: t, ...i }) => {
                let { redirectUrl: r = "/", signOutOptions: s, ...n } = i;
                t = (0,
                    S.normalizeWithDefaultValue)(t, "Sign out");
                let l = (0,
                    S.assertSingleChild)(t)("SignOutButton")
                    , o = async t => (await (0,
                        S.safeExecute)(l.props.onClick)(t),
                        e.signOut({
                            redirectUrl: r,
                            ...s
                        }))
                    , a = {
                        ...n,
                        onClick: o
                    };
                return k.default.cloneElement(l, a)
            }
                , {
                    component: "SignOutButton",
                    renderWhileLoading: !0
                })
        , es = (0,
            u.withClerk)(({ clerk: e, children: t, ...i }) => {
                let { appearance: r, unsafeMetadata: s, fallbackRedirectUrl: n, forceRedirectUrl: l, signInFallbackRedirectUrl: o, signInForceRedirectUrl: a, mode: h, initialValues: u, oauthFlow: d, ...c } = i;
                t = (0,
                    S.normalizeWithDefaultValue)(t, "Sign up");
                let p = (0,
                    S.assertSingleChild)(t)("SignUpButton")
                    , g = async t => {
                        let i;
                        return p && "object" == typeof p && "props" in p && await (0,
                            S.safeExecute)(p.props.onClick)(t),
                            i = {
                                fallbackRedirectUrl: n,
                                forceRedirectUrl: l,
                                signInFallbackRedirectUrl: o,
                                signInForceRedirectUrl: a,
                                initialValues: u,
                                oauthFlow: d
                            },
                            "modal" === h ? e.openSignUp({
                                ...i,
                                appearance: r,
                                unsafeMetadata: s
                            }) : e.redirectToSignUp({
                                ...i,
                                signUpFallbackRedirectUrl: n,
                                signUpForceRedirectUrl: l
                            })
                    }
                    , m = {
                        ...c,
                        onClick: g
                    };
                return k.default.cloneElement(p, m)
            }
                , {
                    component: "SignUpButton",
                    renderWhileLoading: !0
                })
        , en = class {
            constructor(e) {
                this.isomorphicClerk = e,
                    this.signInSignalProxy = this.buildSignInProxy(),
                    this.signUpSignalProxy = this.buildSignUpProxy()
            }
            signInSignal() {
                return this.signInSignalProxy
            }
            signUpSignal() {
                return this.signUpSignalProxy
            }
            buildSignInProxy() {
                let e = this.gateProperty.bind(this)
                    , t = () => this.client.signIn.__internal_future;
                return {
                    errors: {
                        fields: {
                            identifier: null,
                            password: null,
                            code: null
                        },
                        raw: null,
                        global: null
                    },
                    fetchStatus: "idle",
                    signIn: {
                        status: "needs_identifier",
                        availableStrategies: [],
                        isTransferable: !1,
                        get id() {
                            return e(t, "id", void 0)
                        },
                        get supportedFirstFactors() {
                            return e(t, "supportedFirstFactors", [])
                        },
                        get supportedSecondFactors() {
                            return e(t, "supportedSecondFactors", [])
                        },
                        get secondFactorVerification() {
                            return e(t, "secondFactorVerification", {
                                status: null,
                                error: null,
                                expireAt: null,
                                externalVerificationRedirectURL: null,
                                nonce: null,
                                attempts: null,
                                message: null,
                                strategy: null,
                                verifiedAtClient: null,
                                verifiedFromTheSameClient: () => !1,
                                __internal_toSnapshot: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                }
                                ,
                                pathRoot: "",
                                reload: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                }
                            })
                        },
                        get identifier() {
                            return e(t, "identifier", null)
                        },
                        get createdSessionId() {
                            return e(t, "createdSessionId", null)
                        },
                        get userData() {
                            return e(t, "userData", {})
                        },
                        get firstFactorVerification() {
                            return e(t, "firstFactorVerification", {
                                status: null,
                                error: null,
                                expireAt: null,
                                externalVerificationRedirectURL: null,
                                nonce: null,
                                attempts: null,
                                message: null,
                                strategy: null,
                                verifiedAtClient: null,
                                verifiedFromTheSameClient: () => !1,
                                __internal_toSnapshot: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                }
                                ,
                                pathRoot: "",
                                reload: () => {
                                    throw Error("__internal_toSnapshot called before Clerk is loaded")
                                }
                            })
                        },
                        create: this.gateMethod(t, "create"),
                        password: this.gateMethod(t, "password"),
                        sso: this.gateMethod(t, "sso"),
                        finalize: this.gateMethod(t, "finalize"),
                        emailCode: this.wrapMethods(() => t().emailCode, ["sendCode", "verifyCode"]),
                        emailLink: this.wrapStruct(() => t().emailLink, ["sendLink", "waitForVerification"], ["verification"], {
                            verification: null
                        }),
                        resetPasswordEmailCode: this.wrapMethods(() => t().resetPasswordEmailCode, ["sendCode", "verifyCode", "submitPassword"]),
                        phoneCode: this.wrapMethods(() => t().phoneCode, ["sendCode", "verifyCode"]),
                        mfa: this.wrapMethods(() => t().mfa, ["sendPhoneCode", "verifyPhoneCode", "verifyTOTP", "verifyBackupCode"]),
                        ticket: this.gateMethod(t, "ticket"),
                        passkey: this.gateMethod(t, "passkey"),
                        web3: this.gateMethod(t, "web3")
                    }
                }
            }
            buildSignUpProxy() {
                let e = this.gateProperty.bind(this)
                    , t = this.gateMethod.bind(this)
                    , i = this.wrapMethods.bind(this)
                    , r = () => this.client.signUp.__internal_future;
                return {
                    errors: {
                        fields: {
                            firstName: null,
                            lastName: null,
                            emailAddress: null,
                            phoneNumber: null,
                            password: null,
                            username: null,
                            code: null,
                            captcha: null,
                            legalAccepted: null
                        },
                        raw: null,
                        global: null
                    },
                    fetchStatus: "idle",
                    signUp: {
                        get id() {
                            return e(r, "id", void 0)
                        },
                        get requiredFields() {
                            return e(r, "requiredFields", [])
                        },
                        get optionalFields() {
                            return e(r, "optionalFields", [])
                        },
                        get missingFields() {
                            return e(r, "missingFields", [])
                        },
                        get username() {
                            return e(r, "username", null)
                        },
                        get firstName() {
                            return e(r, "firstName", null)
                        },
                        get lastName() {
                            return e(r, "lastName", null)
                        },
                        get emailAddress() {
                            return e(r, "emailAddress", null)
                        },
                        get phoneNumber() {
                            return e(r, "phoneNumber", null)
                        },
                        get web3Wallet() {
                            return e(r, "web3Wallet", null)
                        },
                        get hasPassword() {
                            return e(r, "hasPassword", !1)
                        },
                        get unsafeMetadata() {
                            return e(r, "unsafeMetadata", {})
                        },
                        get createdSessionId() {
                            return e(r, "createdSessionId", null)
                        },
                        get createdUserId() {
                            return e(r, "createdUserId", null)
                        },
                        get abandonAt() {
                            return e(r, "abandonAt", null)
                        },
                        get legalAcceptedAt() {
                            return e(r, "legalAcceptedAt", null)
                        },
                        get locale() {
                            return e(r, "locale", null)
                        },
                        get status() {
                            return e(r, "status", "missing_requirements")
                        },
                        get unverifiedFields() {
                            return e(r, "unverifiedFields", [])
                        },
                        get isTransferable() {
                            return e(r, "isTransferable", !1)
                        },
                        create: t(r, "create"),
                        update: t(r, "update"),
                        sso: t(r, "sso"),
                        password: t(r, "password"),
                        ticket: t(r, "ticket"),
                        web3: t(r, "web3"),
                        finalize: t(r, "finalize"),
                        verifications: i(() => r().verifications, ["sendEmailCode", "verifyEmailCode", "sendPhoneCode", "verifyPhoneCode"])
                    }
                }
            }
            __internal_effect(e) {
                throw Error("__internal_effect called before Clerk is loaded")
            }
            __internal_computed(e) {
                throw Error("__internal_computed called before Clerk is loaded")
            }
            get client() {
                let e = this.isomorphicClerk.client;
                if (!e)
                    throw Error("Clerk client not ready");
                return e
            }
            gateProperty(e, t, i) {
                return H() && this.isomorphicClerk.loaded ? e()[t] : i
            }
            gateMethod(e, t) {
                return async (...i) => {
                    if (!H())
                        return u.errorThrower.throw(`Attempted to call a method (${t}) that is not supported on the server.`);
                    this.isomorphicClerk.loaded || await new Promise(e => this.isomorphicClerk.addOnLoaded(e));
                    let r = e();
                    return r[t].apply(r, i)
                }
            }
            wrapMethods(e, t) {
                return Object.fromEntries(t.map(t => [t, this.gateMethod(e, t)]))
            }
            wrapStruct(e, t, i, r) {
                let s = {};
                for (let i of t)
                    s[i] = this.gateMethod(e, i);
                for (let t of i)
                    Object.defineProperty(s, t, {
                        get: () => this.gateProperty(e, t, r[t]),
                        enumerable: !0
                    });
                return s
            }
        }
        ;
    void 0 === globalThis.__BUILD_DISABLE_RHC__ && (globalThis.__BUILD_DISABLE_RHC__ = !1);
    var el = {
        name: "@clerk/clerk-react",
        version: "5.61.6",
        environment: "production"
    }
        , eo = class d {
            constructor(e) {
                O(this, a),
                    this.clerkjs = null,
                    this.preopenOneTap = null,
                    this.preopenUserVerification = null,
                    this.preopenEnableOrganizationsPrompt = null,
                    this.preopenSignIn = null,
                    this.preopenCheckout = null,
                    this.preopenPlanDetails = null,
                    this.preopenSubscriptionDetails = null,
                    this.preopenSignUp = null,
                    this.preopenUserProfile = null,
                    this.preopenOrganizationProfile = null,
                    this.preopenCreateOrganization = null,
                    this.preOpenWaitlist = null,
                    this.premountSignInNodes = new Map,
                    this.premountSignUpNodes = new Map,
                    this.premountUserAvatarNodes = new Map,
                    this.premountUserProfileNodes = new Map,
                    this.premountUserButtonNodes = new Map,
                    this.premountOrganizationProfileNodes = new Map,
                    this.premountCreateOrganizationNodes = new Map,
                    this.premountOrganizationSwitcherNodes = new Map,
                    this.premountOrganizationListNodes = new Map,
                    this.premountMethodCalls = new Map,
                    this.premountWaitlistNodes = new Map,
                    this.premountPricingTableNodes = new Map,
                    this.premountAPIKeysNodes = new Map,
                    this.premountOAuthConsentNodes = new Map,
                    this.premountTaskChooseOrganizationNodes = new Map,
                    this.premountTaskResetPasswordNodes = new Map,
                    this.premountTaskSetupMFANodes = new Map,
                    this.premountAddListenerCalls = new Map,
                    this.loadedListeners = [],
                    O(this, t, "loading"),
                    O(this, i),
                    O(this, r),
                    O(this, s),
                    O(this, n, (() => {
                        let e, t, i;
                        return e = new Map,
                            t = new Map,
                            i = new Map,
                        {
                            on: (...i) => X(e, t, ...i),
                            prioritizedOn: (...e) => X(i, t, ...e),
                            emit: (r, s) => {
                                t.set(r, s),
                                    Q(i, r, s),
                                    Q(e, r, s)
                            }
                            ,
                            off: (...t) => Y(e, ...t),
                            prioritizedOff: (...e) => Y(i, ...e),
                            internal: {
                                retrieveListeners: t => e.get(t) || []
                            }
                        }
                    }
                    )()),
                    O(this, l),
                    this.buildSignInUrl = e => {
                        let t = () => {
                            var t;
                            return (null == (t = this.clerkjs) ? void 0 : t.buildSignInUrl(e)) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("buildSignInUrl", t)
                    }
                    ,
                    this.buildSignUpUrl = e => {
                        let t = () => {
                            var t;
                            return (null == (t = this.clerkjs) ? void 0 : t.buildSignUpUrl(e)) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("buildSignUpUrl", t)
                    }
                    ,
                    this.buildAfterSignInUrl = (...e) => {
                        let t = () => {
                            var t;
                            return (null == (t = this.clerkjs) ? void 0 : t.buildAfterSignInUrl(...e)) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("buildAfterSignInUrl", t)
                    }
                    ,
                    this.buildAfterSignUpUrl = (...e) => {
                        let t = () => {
                            var t;
                            return (null == (t = this.clerkjs) ? void 0 : t.buildAfterSignUpUrl(...e)) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("buildAfterSignUpUrl", t)
                    }
                    ,
                    this.buildAfterSignOutUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildAfterSignOutUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildAfterSignOutUrl", e)
                    }
                    ,
                    this.buildNewSubscriptionRedirectUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildNewSubscriptionRedirectUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl", e)
                    }
                    ,
                    this.buildAfterMultiSessionSingleSignOutUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildAfterMultiSessionSingleSignOutUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl", e)
                    }
                    ,
                    this.buildUserProfileUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildUserProfileUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildUserProfileUrl", e)
                    }
                    ,
                    this.buildCreateOrganizationUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildCreateOrganizationUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildCreateOrganizationUrl", e)
                    }
                    ,
                    this.buildOrganizationProfileUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildOrganizationProfileUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildOrganizationProfileUrl", e)
                    }
                    ,
                    this.buildWaitlistUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildWaitlistUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildWaitlistUrl", e)
                    }
                    ,
                    this.buildTasksUrl = () => {
                        let e = () => {
                            var e;
                            return (null == (e = this.clerkjs) ? void 0 : e.buildTasksUrl()) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("buildTasksUrl", e)
                    }
                    ,
                    this.buildUrlWithAuth = e => {
                        let t = () => {
                            var t;
                            return (null == (t = this.clerkjs) ? void 0 : t.buildUrlWithAuth(e)) || ""
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("buildUrlWithAuth", t)
                    }
                    ,
                    this.handleUnauthenticated = async () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.handleUnauthenticated()
                        }
                            ;
                        this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("handleUnauthenticated", e)
                    }
                    ,
                    this.on = (...e) => {
                        var t;
                        if (null == (t = this.clerkjs) ? void 0 : t.on)
                            return this.clerkjs.on(...e);
                        U(this, n).on(...e)
                    }
                    ,
                    this.off = (...e) => {
                        var t;
                        if (null == (t = this.clerkjs) ? void 0 : t.off)
                            return this.clerkjs.off(...e);
                        U(this, n).off(...e)
                    }
                    ,
                    this.addOnLoaded = e => {
                        this.loadedListeners.push(e),
                            this.loaded && this.emitLoaded()
                    }
                    ,
                    this.emitLoaded = () => {
                        this.loadedListeners.forEach(e => e()),
                            this.loadedListeners = []
                    }
                    ,
                    this.beforeLoad = e => {
                        if (!e)
                            throw Error("Failed to hydrate latest Clerk JS")
                    }
                    ,
                    this.hydrateClerkJS = e => {
                        var t, i;
                        if (!e)
                            throw Error("Failed to hydrate latest Clerk JS");
                        return this.clerkjs = e,
                            this.premountMethodCalls.forEach(e => e()),
                            this.premountAddListenerCalls.forEach((t, i) => {
                                t.nativeUnsubscribe = e.addListener(i)
                            }
                            ),
                            null == (t = U(this, n).internal.retrieveListeners("status")) || t.forEach(e => {
                                this.on("status", e, {
                                    notify: !0
                                })
                            }
                            ),
                            null == (i = U(this, n).internal.retrieveListeners("queryClientStatus")) || i.forEach(e => {
                                this.on("queryClientStatus", e, {
                                    notify: !0
                                })
                            }
                            ),
                            null !== this.preopenSignIn && e.openSignIn(this.preopenSignIn),
                            null !== this.preopenCheckout && e.__internal_openCheckout(this.preopenCheckout),
                            null !== this.preopenPlanDetails && e.__internal_openPlanDetails(this.preopenPlanDetails),
                            null !== this.preopenSubscriptionDetails && e.__internal_openSubscriptionDetails(this.preopenSubscriptionDetails),
                            null !== this.preopenSignUp && e.openSignUp(this.preopenSignUp),
                            null !== this.preopenUserProfile && e.openUserProfile(this.preopenUserProfile),
                            null !== this.preopenUserVerification && e.__internal_openReverification(this.preopenUserVerification),
                            null !== this.preopenOneTap && e.openGoogleOneTap(this.preopenOneTap),
                            null !== this.preopenOrganizationProfile && e.openOrganizationProfile(this.preopenOrganizationProfile),
                            null !== this.preopenCreateOrganization && e.openCreateOrganization(this.preopenCreateOrganization),
                            null !== this.preOpenWaitlist && e.openWaitlist(this.preOpenWaitlist),
                            this.preopenEnableOrganizationsPrompt && e.__internal_openEnableOrganizationsPrompt(this.preopenEnableOrganizationsPrompt),
                            this.premountSignInNodes.forEach((t, i) => {
                                e.mountSignIn(i, t)
                            }
                            ),
                            this.premountSignUpNodes.forEach((t, i) => {
                                e.mountSignUp(i, t)
                            }
                            ),
                            this.premountUserProfileNodes.forEach((t, i) => {
                                e.mountUserProfile(i, t)
                            }
                            ),
                            this.premountUserAvatarNodes.forEach((t, i) => {
                                e.mountUserAvatar(i, t)
                            }
                            ),
                            this.premountUserButtonNodes.forEach((t, i) => {
                                e.mountUserButton(i, t)
                            }
                            ),
                            this.premountOrganizationListNodes.forEach((t, i) => {
                                e.mountOrganizationList(i, t)
                            }
                            ),
                            this.premountWaitlistNodes.forEach((t, i) => {
                                e.mountWaitlist(i, t)
                            }
                            ),
                            this.premountPricingTableNodes.forEach((t, i) => {
                                e.mountPricingTable(i, t)
                            }
                            ),
                            this.premountAPIKeysNodes.forEach((t, i) => {
                                e.mountAPIKeys(i, t)
                            }
                            ),
                            this.premountOAuthConsentNodes.forEach((t, i) => {
                                e.__internal_mountOAuthConsent(i, t)
                            }
                            ),
                            this.premountTaskChooseOrganizationNodes.forEach((t, i) => {
                                e.mountTaskChooseOrganization(i, t)
                            }
                            ),
                            this.premountTaskResetPasswordNodes.forEach((t, i) => {
                                e.mountTaskResetPassword(i, t)
                            }
                            ),
                            this.premountTaskSetupMFANodes.forEach((t, i) => {
                                e.mountTaskSetupMFA(i, t)
                            }
                            ),
                            void 0 === this.clerkjs.status && U(this, n).emit(Z, "ready"),
                            this.emitLoaded(),
                            this.clerkjs
                    }
                    ,
                    this.__experimental_checkout = (...e) => {
                        var t;
                        return null == (t = this.clerkjs) ? void 0 : t.__experimental_checkout(...e)
                    }
                    ,
                    this.__unstable__updateProps = async e => {
                        let t = await T(this, a, h).call(this);
                        if (t && "__unstable__updateProps" in t)
                            return t.__unstable__updateProps(e)
                    }
                    ,
                    this.setActive = e => this.clerkjs ? this.clerkjs.setActive(e) : Promise.reject(),
                    this.openSignIn = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.openSignIn(e) : this.preopenSignIn = e
                    }
                    ,
                    this.closeSignIn = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.closeSignIn() : this.preopenSignIn = null
                    }
                    ,
                    this.__internal_openCheckout = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_openCheckout(e) : this.preopenCheckout = e
                    }
                    ,
                    this.__internal_closeCheckout = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_closeCheckout() : this.preopenCheckout = null
                    }
                    ,
                    this.__internal_openPlanDetails = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_openPlanDetails(e) : this.preopenPlanDetails = e
                    }
                    ,
                    this.__internal_closePlanDetails = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_closePlanDetails() : this.preopenPlanDetails = null
                    }
                    ,
                    this.__internal_openSubscriptionDetails = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_openSubscriptionDetails(e) : this.preopenSubscriptionDetails = null != e ? e : null
                    }
                    ,
                    this.__internal_closeSubscriptionDetails = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_closeSubscriptionDetails() : this.preopenSubscriptionDetails = null
                    }
                    ,
                    this.__internal_openReverification = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_openReverification(e) : this.preopenUserVerification = e
                    }
                    ,
                    this.__internal_closeReverification = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_closeReverification() : this.preopenUserVerification = null
                    }
                    ,
                    this.__internal_openEnableOrganizationsPrompt = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_openEnableOrganizationsPrompt(e) : this.preopenEnableOrganizationsPrompt = e
                    }
                    ,
                    this.__internal_closeEnableOrganizationsPrompt = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_closeEnableOrganizationsPrompt() : this.preopenEnableOrganizationsPrompt = null
                    }
                    ,
                    this.openGoogleOneTap = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.openGoogleOneTap(e) : this.preopenOneTap = e
                    }
                    ,
                    this.closeGoogleOneTap = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.closeGoogleOneTap() : this.preopenOneTap = null
                    }
                    ,
                    this.openUserProfile = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.openUserProfile(e) : this.preopenUserProfile = e
                    }
                    ,
                    this.closeUserProfile = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.closeUserProfile() : this.preopenUserProfile = null
                    }
                    ,
                    this.openOrganizationProfile = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.openOrganizationProfile(e) : this.preopenOrganizationProfile = e
                    }
                    ,
                    this.closeOrganizationProfile = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.closeOrganizationProfile() : this.preopenOrganizationProfile = null
                    }
                    ,
                    this.openCreateOrganization = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.openCreateOrganization(e) : this.preopenCreateOrganization = e
                    }
                    ,
                    this.closeCreateOrganization = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.closeCreateOrganization() : this.preopenCreateOrganization = null
                    }
                    ,
                    this.openWaitlist = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.openWaitlist(e) : this.preOpenWaitlist = e
                    }
                    ,
                    this.closeWaitlist = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.closeWaitlist() : this.preOpenWaitlist = null
                    }
                    ,
                    this.openSignUp = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.openSignUp(e) : this.preopenSignUp = e
                    }
                    ,
                    this.closeSignUp = () => {
                        this.clerkjs && this.loaded ? this.clerkjs.closeSignUp() : this.preopenSignUp = null
                    }
                    ,
                    this.mountSignIn = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountSignIn(e, t) : this.premountSignInNodes.set(e, t)
                    }
                    ,
                    this.unmountSignIn = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountSignIn(e) : this.premountSignInNodes.delete(e)
                    }
                    ,
                    this.mountSignUp = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountSignUp(e, t) : this.premountSignUpNodes.set(e, t)
                    }
                    ,
                    this.unmountSignUp = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountSignUp(e) : this.premountSignUpNodes.delete(e)
                    }
                    ,
                    this.mountUserAvatar = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountUserAvatar(e, t) : this.premountUserAvatarNodes.set(e, t)
                    }
                    ,
                    this.unmountUserAvatar = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountUserAvatar(e) : this.premountUserAvatarNodes.delete(e)
                    }
                    ,
                    this.mountUserProfile = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountUserProfile(e, t) : this.premountUserProfileNodes.set(e, t)
                    }
                    ,
                    this.unmountUserProfile = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountUserProfile(e) : this.premountUserProfileNodes.delete(e)
                    }
                    ,
                    this.mountOrganizationProfile = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountOrganizationProfile(e, t) : this.premountOrganizationProfileNodes.set(e, t)
                    }
                    ,
                    this.unmountOrganizationProfile = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountOrganizationProfile(e) : this.premountOrganizationProfileNodes.delete(e)
                    }
                    ,
                    this.mountCreateOrganization = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountCreateOrganization(e, t) : this.premountCreateOrganizationNodes.set(e, t)
                    }
                    ,
                    this.unmountCreateOrganization = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountCreateOrganization(e) : this.premountCreateOrganizationNodes.delete(e)
                    }
                    ,
                    this.mountOrganizationSwitcher = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountOrganizationSwitcher(e, t) : this.premountOrganizationSwitcherNodes.set(e, t)
                    }
                    ,
                    this.unmountOrganizationSwitcher = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountOrganizationSwitcher(e) : this.premountOrganizationSwitcherNodes.delete(e)
                    }
                    ,
                    this.__experimental_prefetchOrganizationSwitcher = () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.__experimental_prefetchOrganizationSwitcher()
                        }
                            ;
                        this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher", e)
                    }
                    ,
                    this.mountOrganizationList = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountOrganizationList(e, t) : this.premountOrganizationListNodes.set(e, t)
                    }
                    ,
                    this.unmountOrganizationList = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountOrganizationList(e) : this.premountOrganizationListNodes.delete(e)
                    }
                    ,
                    this.mountUserButton = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountUserButton(e, t) : this.premountUserButtonNodes.set(e, t)
                    }
                    ,
                    this.unmountUserButton = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountUserButton(e) : this.premountUserButtonNodes.delete(e)
                    }
                    ,
                    this.mountWaitlist = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountWaitlist(e, t) : this.premountWaitlistNodes.set(e, t)
                    }
                    ,
                    this.unmountWaitlist = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountWaitlist(e) : this.premountWaitlistNodes.delete(e)
                    }
                    ,
                    this.mountPricingTable = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountPricingTable(e, t) : this.premountPricingTableNodes.set(e, t)
                    }
                    ,
                    this.unmountPricingTable = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountPricingTable(e) : this.premountPricingTableNodes.delete(e)
                    }
                    ,
                    this.mountAPIKeys = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountAPIKeys(e, t) : this.premountAPIKeysNodes.set(e, t)
                    }
                    ,
                    this.unmountAPIKeys = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountAPIKeys(e) : this.premountAPIKeysNodes.delete(e)
                    }
                    ,
                    this.__internal_mountOAuthConsent = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_mountOAuthConsent(e, t) : this.premountOAuthConsentNodes.set(e, t)
                    }
                    ,
                    this.__internal_unmountOAuthConsent = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.__internal_unmountOAuthConsent(e) : this.premountOAuthConsentNodes.delete(e)
                    }
                    ,
                    this.mountTaskChooseOrganization = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountTaskChooseOrganization(e, t) : this.premountTaskChooseOrganizationNodes.set(e, t)
                    }
                    ,
                    this.unmountTaskChooseOrganization = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountTaskChooseOrganization(e) : this.premountTaskChooseOrganizationNodes.delete(e)
                    }
                    ,
                    this.mountTaskResetPassword = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountTaskResetPassword(e, t) : this.premountTaskResetPasswordNodes.set(e, t)
                    }
                    ,
                    this.unmountTaskResetPassword = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountTaskResetPassword(e) : this.premountTaskResetPasswordNodes.delete(e)
                    }
                    ,
                    this.mountTaskSetupMFA = (e, t) => {
                        this.clerkjs && this.loaded ? this.clerkjs.mountTaskSetupMFA(e, t) : this.premountTaskSetupMFANodes.set(e, t)
                    }
                    ,
                    this.unmountTaskSetupMFA = e => {
                        this.clerkjs && this.loaded ? this.clerkjs.unmountTaskSetupMFA(e) : this.premountTaskSetupMFANodes.delete(e)
                    }
                    ,
                    this.addListener = e => {
                        if (this.clerkjs)
                            return this.clerkjs.addListener(e);
                        {
                            let t = () => {
                                var t;
                                let i = this.premountAddListenerCalls.get(e);
                                i && (null == (t = i.nativeUnsubscribe) || t.call(i),
                                    this.premountAddListenerCalls.delete(e))
                            }
                                ;
                            return this.premountAddListenerCalls.set(e, {
                                unsubscribe: t,
                                nativeUnsubscribe: void 0
                            }),
                                t
                        }
                    }
                    ,
                    this.navigate = e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.navigate(e)
                        }
                            ;
                        this.clerkjs && this.loaded ? t() : this.premountMethodCalls.set("navigate", t)
                    }
                    ,
                    this.redirectWithAuth = async (...e) => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.redirectWithAuth(...e)
                        }
                            ;
                        return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectWithAuth", t)
                    }
                    ,
                    this.redirectToSignIn = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.redirectToSignIn(e)
                        }
                            ;
                        return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectToSignIn", t)
                    }
                    ,
                    this.redirectToSignUp = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.redirectToSignUp(e)
                        }
                            ;
                        return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectToSignUp", t)
                    }
                    ,
                    this.redirectToUserProfile = async () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.redirectToUserProfile()
                        }
                            ;
                        return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToUserProfile", e)
                    }
                    ,
                    this.redirectToAfterSignUp = () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignUp()
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return e();
                        this.premountMethodCalls.set("redirectToAfterSignUp", e)
                    }
                    ,
                    this.redirectToAfterSignIn = () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignIn()
                        }
                            ;
                        this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("redirectToAfterSignIn", e)
                    }
                    ,
                    this.redirectToAfterSignOut = () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignOut()
                        }
                            ;
                        this.clerkjs && this.loaded ? e() : this.premountMethodCalls.set("redirectToAfterSignOut", e)
                    }
                    ,
                    this.redirectToOrganizationProfile = async () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.redirectToOrganizationProfile()
                        }
                            ;
                        return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToOrganizationProfile", e)
                    }
                    ,
                    this.redirectToCreateOrganization = async () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.redirectToCreateOrganization()
                        }
                            ;
                        return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToCreateOrganization", e)
                    }
                    ,
                    this.redirectToWaitlist = async () => {
                        let e = () => {
                            var e;
                            return null == (e = this.clerkjs) ? void 0 : e.redirectToWaitlist()
                        }
                            ;
                        return this.clerkjs && this.loaded ? e() : void this.premountMethodCalls.set("redirectToWaitlist", e)
                    }
                    ,
                    this.redirectToTasks = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.redirectToTasks(e)
                        }
                            ;
                        return this.clerkjs && this.loaded ? t() : void this.premountMethodCalls.set("redirectToTasks", t)
                    }
                    ,
                    this.handleRedirectCallback = async e => {
                        var t;
                        let i = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.handleRedirectCallback(e)
                        }
                            ;
                        this.clerkjs && this.loaded ? null == (t = i()) || t.catch(() => { }
                        ) : this.premountMethodCalls.set("handleRedirectCallback", i)
                    }
                    ,
                    this.handleGoogleOneTapCallback = async (e, t) => {
                        var i;
                        let r = () => {
                            var i;
                            return null == (i = this.clerkjs) ? void 0 : i.handleGoogleOneTapCallback(e, t)
                        }
                            ;
                        this.clerkjs && this.loaded ? null == (i = r()) || i.catch(() => { }
                        ) : this.premountMethodCalls.set("handleGoogleOneTapCallback", r)
                    }
                    ,
                    this.handleEmailLinkVerification = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.handleEmailLinkVerification(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("handleEmailLinkVerification", t)
                    }
                    ,
                    this.authenticateWithMetamask = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.authenticateWithMetamask(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("authenticateWithMetamask", t)
                    }
                    ,
                    this.authenticateWithCoinbaseWallet = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.authenticateWithCoinbaseWallet(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("authenticateWithCoinbaseWallet", t)
                    }
                    ,
                    this.authenticateWithBase = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.authenticateWithBase(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("authenticateWithBase", t)
                    }
                    ,
                    this.authenticateWithOKXWallet = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.authenticateWithOKXWallet(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("authenticateWithOKXWallet", t)
                    }
                    ,
                    this.authenticateWithSolana = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.authenticateWithSolana(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("authenticateWithSolana", t)
                    }
                    ,
                    this.authenticateWithWeb3 = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.authenticateWithWeb3(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("authenticateWithWeb3", t)
                    }
                    ,
                    this.authenticateWithGoogleOneTap = async e => (await T(this, a, h).call(this)).authenticateWithGoogleOneTap(e),
                    this.__internal_loadStripeJs = async () => (await T(this, a, h).call(this)).__internal_loadStripeJs(),
                    this.createOrganization = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.createOrganization(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("createOrganization", t)
                    }
                    ,
                    this.getOrganization = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.getOrganization(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("getOrganization", t)
                    }
                    ,
                    this.joinWaitlist = async e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.joinWaitlist(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("joinWaitlist", t)
                    }
                    ,
                    this.signOut = async (...e) => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.signOut(...e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("signOut", t)
                    }
                    ,
                    this.__internal_attemptToEnableEnvironmentSetting = e => {
                        let t = () => {
                            var t;
                            return null == (t = this.clerkjs) ? void 0 : t.__internal_attemptToEnableEnvironmentSetting(e)
                        }
                            ;
                        if (this.clerkjs && this.loaded)
                            return t();
                        this.premountMethodCalls.set("__internal_attemptToEnableEnvironmentSetting", t)
                    }
                    ;
                const { Clerk: o = null, publishableKey: u } = e || {};
                y(this, s, u),
                    y(this, r, null == e ? void 0 : e.proxyUrl),
                    y(this, i, null == e ? void 0 : e.domain),
                    this.options = e,
                    this.Clerk = o,
                    this.mode = H() ? "browser" : "server",
                    y(this, l, new en(this)),
                    this.options.sdkMetadata || (this.options.sdkMetadata = el),
                    U(this, n).emit(Z, "loading"),
                    U(this, n).prioritizedOn(Z, e => y(this, t, e)),
                    U(this, s) && this.loadClerkJS()
            }
            get publishableKey() {
                return U(this, s)
            }
            get loaded() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.loaded) || !1
            }
            get status() {
                var e;
                return this.clerkjs ? (null == (e = this.clerkjs) ? void 0 : e.status) || (this.clerkjs.loaded ? "ready" : "loading") : U(this, t)
            }
            static getOrCreateInstance(e) {
                return H() && U(this, o) && (!e.Clerk || U(this, o).Clerk === e.Clerk) && U(this, o).publishableKey === e.publishableKey || y(this, o, new d(e)),
                    U(this, o)
            }
            static clearInstance() {
                y(this, o, null)
            }
            get domain() {
                return "u" > typeof window && window.location ? ee(U(this, i), new URL(window.location.href), "") : "function" == typeof U(this, i) ? u.errorThrower.throw(u.unsupportedNonBrowserDomainOrProxyUrlFunction) : U(this, i) || ""
            }
            get proxyUrl() {
                return "u" > typeof window && window.location ? ee(U(this, r), new URL(window.location.href), "") : "function" == typeof U(this, r) ? u.errorThrower.throw(u.unsupportedNonBrowserDomainOrProxyUrlFunction) : U(this, r) || ""
            }
            __internal_getOption(e) {
                var t, i;
                return (null == (t = this.clerkjs) ? void 0 : t.__internal_getOption) ? null == (i = this.clerkjs) ? void 0 : i.__internal_getOption(e) : this.options[e]
            }
            get sdkMetadata() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.sdkMetadata) || this.options.sdkMetadata || void 0
            }
            get instanceType() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.instanceType
            }
            get frontendApi() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.frontendApi) || ""
            }
            get isStandardBrowser() {
                var e;
                return (null == (e = this.clerkjs) ? void 0 : e.isStandardBrowser) || this.options.standardBrowser || !1
            }
            get __internal_queryClient() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.__internal_queryClient
            }
            get isSatellite() {
                return "u" > typeof window && window.location ? ee(this.options.isSatellite, new URL(window.location.href), !1) : "function" == typeof this.options.isSatellite && u.errorThrower.throw(u.unsupportedNonBrowserDomainOrProxyUrlFunction)
            }
            async loadClerkJS() {
                var t;
                if ("browser" === this.mode && !this.loaded) {
                    "u" > typeof window && (window.__clerk_publishable_key = U(this, s),
                        window.__clerk_proxy_url = this.proxyUrl,
                        window.__clerk_domain = this.domain);
                    try {
                        if (this.Clerk) {
                            let t;
                            (0,
                                S.isConstructor)(this.Clerk) ? (t = new this.Clerk(U(this, s), {
                                    proxyUrl: this.proxyUrl,
                                    domain: this.domain
                                }),
                                    this.beforeLoad(t),
                                    await t.load(this.options)) : (t = this.Clerk).loaded || (this.beforeLoad(t),
                                        await t.load(this.options)),
                                e.g.Clerk = t
                        } else if (!__BUILD_DISABLE_RHC__) {
                            if (e.g.Clerk || await G({
                                ...this.options,
                                publishableKey: U(this, s),
                                proxyUrl: this.proxyUrl,
                                domain: this.domain,
                                nonce: this.options.nonce
                            }),
                                !e.g.Clerk)
                                throw Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
                            this.beforeLoad(e.g.Clerk),
                                await e.g.Clerk.load(this.options)
                        }
                        if (null == (t = e.g.Clerk) ? void 0 : t.loaded)
                            return this.hydrateClerkJS(e.g.Clerk);
                        return
                    } catch (e) {
                        U(this, n).emit(Z, "error"),
                            console.error(e.stack || e.message || e);
                        return
                    }
                }
            }
            get version() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.version
            }
            get client() {
                return this.clerkjs ? this.clerkjs.client : void 0
            }
            get session() {
                return this.clerkjs ? this.clerkjs.session : void 0
            }
            get user() {
                return this.clerkjs ? this.clerkjs.user : void 0
            }
            get organization() {
                return this.clerkjs ? this.clerkjs.organization : void 0
            }
            get telemetry() {
                return this.clerkjs ? this.clerkjs.telemetry : void 0
            }
            get __unstable__environment() {
                return this.clerkjs ? this.clerkjs.__unstable__environment : void 0
            }
            get isSignedIn() {
                return !!this.clerkjs && this.clerkjs.isSignedIn
            }
            get billing() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.billing
            }
            get __internal_state() {
                return this.loaded && this.clerkjs ? this.clerkjs.__internal_state : U(this, l)
            }
            get apiKeys() {
                var e;
                return null == (e = this.clerkjs) ? void 0 : e.apiKeys
            }
            __unstable__setEnvironment(...e) {
                this.clerkjs && "__unstable__setEnvironment" in this.clerkjs && this.clerkjs.__unstable__setEnvironment(e)
            }
        }
        ;
    function ea(e) {
        var t, i, r;
        let s, n, l, o, a, h, d, c, p, m, f, v, C, _, j, w, S, b, { isomorphicClerkOptions: P, initialState: U, children: O } = e, { isomorphicClerk: y, clerkStatus: T } = eh(P), [M, A] = k.default.useState({
            client: y.client,
            session: y.session,
            user: y.user,
            organization: y.organization
        });
        k.default.useEffect(() => y.addListener(e => A({
            ...e
        })), []);
        let z = (t = y.loaded,
            !t && U ? (s = (i = U).userId,
                n = i.user,
                l = i.sessionId,
                o = i.sessionStatus,
                a = i.sessionClaims,
            {
                userId: s,
                user: n,
                sessionId: l,
                session: i.session,
                sessionStatus: o,
                sessionClaims: a,
                organization: i.organization,
                orgId: i.orgId,
                orgRole: i.orgRole,
                orgPermissions: i.orgPermissions,
                orgSlug: i.orgSlug,
                actor: i.actor,
                factorVerificationAge: i.factorVerificationAge
            }) : (h = (r = M).user ? r.user.id : r.user,
                d = r.user,
                c = r.session ? r.session.id : r.session,
                p = r.session,
                m = r.session?.status,
                f = r.session ? r.session.lastActiveToken?.jwt?.claims : null,
                v = r.session ? r.session.factorVerificationAge : null,
                C = p?.actor,
                _ = r.organization,
                j = r.organization ? r.organization.id : r.organization,
                w = _?.slug,
                b = (S = _ ? d?.organizationMemberships?.find(e => e.organization.id === j) : _) ? S.permissions : S,
            {
                userId: h,
                user: d,
                sessionId: c,
                session: p,
                sessionStatus: m,
                sessionClaims: f,
                organization: _,
                orgId: j,
                orgRole: S ? S.role : S,
                orgSlug: w,
                orgPermissions: b,
                actor: C,
                factorVerificationAge: v
            }))
            , E = k.default.useMemo(() => ({
                value: y
            }), [T])
            , I = k.default.useMemo(() => ({
                value: M.client
            }), [M.client])
            , { sessionId: W, sessionStatus: N, sessionClaims: R, session: L, userId: x, user: B, orgId: F, actor: D, organization: K, orgRole: V, orgSlug: G, orgPermissions: J, factorVerificationAge: $ } = z
            , q = k.default.useMemo(() => ({
                value: {
                    sessionId: W,
                    sessionStatus: N,
                    sessionClaims: R,
                    userId: x,
                    actor: D,
                    orgId: F,
                    orgRole: V,
                    orgSlug: G,
                    orgPermissions: J,
                    factorVerificationAge: $
                }
            }), [W, N, x, D, F, V, G, $, null == R ? void 0 : R.__raw])
            , H = k.default.useMemo(() => ({
                value: L
            }), [W, L])
            , X = k.default.useMemo(() => ({
                value: B
            }), [x, B])
            , Q = k.default.useMemo(() => ({
                value: {
                    organization: K
                }
            }), [F, K]);
        return k.default.createElement(u.IsomorphicClerkContext.Provider, {
            value: E
        }, k.default.createElement(g.ClientContext.Provider, {
            value: I
        }, k.default.createElement(g.SessionContext.Provider, {
            value: H
        }, k.default.createElement(g.OrganizationProvider, {
            ...Q.value
        }, k.default.createElement(u.AuthContext.Provider, {
            value: q
        }, k.default.createElement(g.UserContext.Provider, {
            value: X
        }, k.default.createElement(g.__experimental_CheckoutProvider, {
            value: void 0
        }, O)))))))
    }
    t = new WeakMap,
        i = new WeakMap,
        r = new WeakMap,
        s = new WeakMap,
        n = new WeakMap,
        l = new WeakMap,
        o = new WeakMap,
        a = new WeakSet,
        h = function () {
            return new Promise(e => {
                this.addOnLoaded(() => e(this.clerkjs))
            }
            )
        }
        ,
        O(eo, o);
    var eh = e => {
        let t = k.default.useRef(eo.getOrCreateInstance(e))
            , [i, r] = k.default.useState(t.current.status);
        return k.default.useEffect(() => {
            t.current.__unstable__updateProps({
                appearance: e.appearance
            })
        }
            , [e.appearance]),
            k.default.useEffect(() => {
                t.current.__unstable__updateProps({
                    options: e
                })
            }
                , [e.localization]),
            k.default.useEffect(() => (t.current.on("status", r),
                () => {
                    t.current && t.current.off("status", r),
                        eo.clearInstance()
                }
            ), []),
        {
            isomorphicClerk: t.current,
            clerkStatus: i
        }
    }
        , eu = (0,
            S.withMaxAllowedInstancesGuard)(function (e) {
                let { initialState: t, children: i, __internal_bypassMissingPublishableKey: r, ...s } = e
                    , { publishableKey: n = "", Clerk: l } = s;
                return l || r || (n ? n && !(0,
                    A.isPublishableKey)(n) && u.errorThrower.throwInvalidPublishableKeyError({
                        key: n
                    }) : u.errorThrower.throwMissingPublishableKeyError()),
                    k.default.createElement(ea, {
                        initialState: t,
                        isomorphicClerkOptions: s
                    }, i)
            }, "ClerkProvider", u.multipleClerkProvidersError);
    eu.displayName = "ClerkProvider",
        (0,
            u.setErrorThrowerOptions)({
                packageName: "@clerk/clerk-react"
            }),
        D("@clerk/clerk-react"),
        e.s(["ClerkProvider", 0, eu, "SignInButton", 0, et, "SignInWithMetamaskButton", 0, ei, "SignOutButton", 0, er, "SignUpButton", 0, es], 92448),
        e.s(["useRoutingProps", 0, function (e, t, i) {
            let r = t.path || (null == i ? void 0 : i.path);
            return "path" === (t.routing || (null == i ? void 0 : i.routing) || "path") ? r ? {
                ...i,
                ...t,
                routing: "path"
            } : u.errorThrower.throw((0,
                u.noPathProvidedError)(e)) : t.path ? u.errorThrower.throw((0,
                    u.incompatibleRoutingWithPathProvidedError)(e)) : {
                ...i,
                ...t,
                path: void 0
            }
        }
        ], 97651)
}
    , 45061, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "useRouter", {
                enumerable: !0,
                get: function () {
                    return n
                }
            });
        let r = e.r(71645)
            , s = e.r(65856);
        function n() {
            return (0,
                r.useContext)(s.RouterContext)
        }
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
            Object.assign(i.default, i),
            t.exports = i.default)
    }
    , 74041, (e, t, i) => {
        t.exports = e.r(45061)
    }
    , 40578, e => {
        "use strict";
        e.i(92448);
        var t = e.i(65389);
        e.i(97651);
        var i = e.i(74041)
            , r = e.i(71645);
        let s = r.default.createContext(null);
        e.s(["PromisifiedAuthProvider", 0, function ({ authPromise: e, children: t }) {
            return r.default.createElement(s.Provider, {
                value: e
            }, t)
        }
            , "usePromisifiedAuth", 0, function (e = {}) {
                let n = (0,
                    i.useRouter)()
                    , l = r.default.useContext(s)
                    , o = l;
                return (l && "then" in l && (o = r.default.use(l)),
                    "u" < typeof window) ? n ? (0,
                        t.useAuth)(e) : (0,
                            t.useDerivedAuth)({
                                ...o,
                                ...e
                            }) : (0,
                                t.useAuth)({
                                    ...o,
                                    ...e
                                })
            }
        ])
    }
    , 38703, e => {
        "use strict";
        var t = e.i(40578);
        e.s(["useAuth", () => t.usePromisifiedAuth])
    }
]);
