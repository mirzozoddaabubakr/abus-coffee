(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 13039, e => {
    "use strict";
    function t(e) {
        return function (t) {
            let r = t ?? this;
            if (!r)
                throw TypeError(`${e.kind || e.name} type guard requires an error object`);
            return !!e.kind && "object" == typeof r && null !== r && "constructor" in r && r.constructor?.kind === e.kind || r instanceof e
        }
    }
    var r = class {
        static kind = "ClerkApiError";
        code;
        message;
        longMessage;
        meta;
        constructor(e) {
            const t = {
                code: e.code,
                message: e.message,
                longMessage: e.long_message,
                meta: {
                    paramName: e.meta?.param_name,
                    sessionId: e.meta?.session_id,
                    emailAddresses: e.meta?.email_addresses,
                    identifiers: e.meta?.identifiers,
                    zxcvbn: e.meta?.zxcvbn,
                    plan: e.meta?.plan,
                    isPlanUpgradePossible: e.meta?.is_plan_upgrade_possible
                }
            };
            this.code = t.code,
                this.message = t.message,
                this.longMessage = t.longMessage,
                this.meta = t.meta
        }
    }
        ;
    let i = t(r);
    var n = class e extends Error {
        static kind = "ClerkError";
        clerkError = !0;
        code;
        longMessage;
        docsUrl;
        cause;
        get name() {
            return this.constructor.name
        }
        constructor(t) {
            super(new.target.formatMessage(new.target.kind, t.message, t.code, t.docsUrl), {
                cause: t.cause
            }),
                Object.setPrototypeOf(this, e.prototype),
                this.code = t.code,
                this.docsUrl = t.docsUrl,
                this.longMessage = t.longMessage,
                this.cause = t.cause
        }
        toString() {
            return `[${this.name}]
Message:${this.message}`
        }
        static formatMessage(e, t, r, i) {
            let n = "Clerk:"
                , a = RegExp(n.replace(" ", "\\s*"), "i");
            return t = t.replace(a, ""),
                t = `${n} ${t.trim()}

(code="${r}")

`,
                i && (t += `

Docs: ${i}`),
                t
        }
    }
        , a = class e extends n {
            static kind = "ClerkAPIResponseError";
            status;
            clerkTraceId;
            retryAfter;
            errors;
            constructor(t, i) {
                const { data: n, status: a, clerkTraceId: o, retryAfter: s } = i;
                super({
                    ...i,
                    message: t,
                    code: "api_response_error"
                }),
                    Object.setPrototypeOf(this, e.prototype),
                    this.status = a,
                    this.clerkTraceId = o,
                    this.retryAfter = s,
                    this.errors = (n || []).map(e => new r(e))
            }
            toString() {
                let e = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map(e => JSON.stringify(e))}`;
                return this.clerkTraceId && (e += `
Clerk Trace ID: ${this.clerkTraceId}`),
                    e
            }
            static formatMessage(e, t, r, i) {
                return t
            }
        }
        ;
    let o = t(a);
    var s = class e extends a {
        static kind = "MissingExpiredTokenError";
        static ERROR_CODE = "missing_expired_token";
        static STATUS = 422;
        static is(t) {
            return o(t) && t.status === e.STATUS && t.errors.length > 0 && t.errors[0].code === e.ERROR_CODE
        }
    }
        ;
    let l = Object.freeze({
        InvalidProxyUrlErrorMessage: "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
        InvalidPublishableKeyErrorMessage: "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
        MissingPublishableKeyErrorMessage: "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
        MissingSecretKeyErrorMessage: "Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
        MissingClerkProvider: "{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"
    });
    var u = class e extends Error {
        code;
        constructor(t) {
            super(t),
                this.code = t,
                this.name = "EmailLinkError",
                Object.setPrototypeOf(this, e.prototype)
        }
    }
        , c = class e extends n {
            static kind = "ClerkRuntimeError";
            clerkRuntimeError = !0;
            constructor(t, r) {
                super({
                    ...r,
                    message: t
                }),
                    Object.setPrototypeOf(this, e.prototype)
            }
        }
        ;
    let d = t(c);
    var f = class extends c {
        code;
        constructor(e, { code: t }) {
            super(e, {
                code: t
            }),
                this.code = t
        }
    }
        ;
    function g(e) {
        return "code" in e && [4001, 32602, 32603].includes(e.code) && "message" in e
    }
    e.s(["ClerkAPIError", 0, r, "ClerkAPIResponseError", 0, a, "ClerkError", 0, n, "ClerkRuntimeError", 0, c, "ClerkWebAuthnError", 0, f, "EmailLinkError", 0, u, "EmailLinkErrorCode", 0, {
        Expired: "expired",
        Failed: "failed",
        ClientMismatch: "client_mismatch"
    }, "EmailLinkErrorCodeStatus", 0, {
            Expired: "expired",
            Failed: "failed",
            ClientMismatch: "client_mismatch"
        }, "MissingExpiredTokenError", 0, s, "buildErrorThrower", 0, function ({ packageName: e, customMessages: t }) {
            let r = e;
            function i(e, t) {
                if (!t)
                    return `${r}: ${e}`;
                let i = e;
                for (let r of e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g)) {
                    let e = (t[r[1]] || "").toString();
                    i = i.replace(`{{${r[1]}}}`, e)
                }
                return `${r}: ${i}`
            }
            let n = {
                ...l,
                ...t
            };
            return {
                setPackageName({ packageName: e }) {
                    return "string" == typeof e && (r = e),
                        this
                },
                setMessages({ customMessages: e }) {
                    return Object.assign(n, e || {}),
                        this
                },
                throwInvalidPublishableKeyError(e) {
                    throw Error(i(n.InvalidPublishableKeyErrorMessage, e))
                },
                throwInvalidProxyUrl(e) {
                    throw Error(i(n.InvalidProxyUrlErrorMessage, e))
                },
                throwMissingPublishableKeyError() {
                    throw Error(i(n.MissingPublishableKeyErrorMessage))
                },
                throwMissingSecretKeyError() {
                    throw Error(i(n.MissingSecretKeyErrorMessage))
                },
                throwMissingClerkProviderError(e) {
                    throw Error(i(n.MissingClerkProvider, e))
                },
                throw(e) {
                    throw Error(i(e))
                }
            }
        }
        , "createClerkGlobalHookError", 0, function (e) {
            for (let [t, r] of Object.entries({
                isClerkAPIResponseError: o,
                isClerkRuntimeError: d
            }))
                Object.assign(e, {
                    [t]: r
                });
            return e
        }
        , "errorToJSON", 0, function (e) {
            return {
                code: e?.code || "",
                message: e?.message || "",
                long_message: e?.longMessage,
                meta: {
                    param_name: e?.meta?.paramName,
                    session_id: e?.meta?.sessionId,
                    email_addresses: e?.meta?.emailAddresses,
                    identifiers: e?.meta?.identifiers,
                    zxcvbn: e?.meta?.zxcvbn,
                    plan: e?.meta?.plan,
                    is_plan_upgrade_possible: e?.meta?.isPlanUpgradePossible
                }
            }
        }
        , "is4xxError", 0, function (e) {
            let t = e?.status;
            return !!t && t >= 400 && t < 500
        }
        , "isCaptchaError", 0, function (e) {
            return ["captcha_invalid", "captcha_not_enabled", "captcha_missing_token"].includes(e.errors[0].code)
        }
        , "isClerkAPIError", 0, i, "isClerkAPIResponseError", 0, o, "isClerkError", 0, function (e) {
            return t(n)(e) || !!e && "object" == typeof e && "clerkError" in e && !0 === e.clerkError
        }
        , "isClerkRuntimeError", 0, d, "isEmailLinkError", 0, function (e) {
            return "EmailLinkError" === e.name
        }
        , "isKnownError", 0, function (e) {
            return o(e) || g(e) || d(e)
        }
        , "isMetamaskError", 0, g, "isNetworkError", 0, function (e) {
            return (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "").includes("networkerror")
        }
        , "isPasswordCompromisedError", 0, function (e) {
            return o(e) && e.errors?.[0]?.code === "form_password_compromised"
        }
        , "isPasswordPwnedError", 0, function (e) {
            return o(e) && e.errors?.[0]?.code === "form_password_pwned"
        }
        , "isReverificationCancelledError", 0, function (e) {
            return d(e) && "reverification_cancelled" === e.code
        }
        , "isUnauthorizedError", 0, function (e) {
            let t = e?.status;
            return e?.errors?.[0]?.code === "authentication_invalid" && 401 === t
        }
        , "isUserLockedError", 0, function (e) {
            return o(e) && e.errors?.[0]?.code === "user_locked"
        }
        , "parseError", 0, function (e) {
            return new r(e)
        }
        , "parseErrors", 0, function (e = []) {
            return e.length > 0 ? e.map(e => new r(e)) : []
        }
    ])
}
    , 75428, e => {
        "use strict";
        let t = {
            strict_mfa: {
                afterMinutes: 10,
                level: "multi_factor"
            },
            strict: {
                afterMinutes: 10,
                level: "second_factor"
            },
            moderate: {
                afterMinutes: 60,
                level: "second_factor"
            },
            lax: {
                afterMinutes: 1440,
                level: "second_factor"
            }
        }
            , r = new Set(["first_factor", "second_factor", "multi_factor"])
            , i = new Set(["strict_mfa", "strict", "moderate", "lax"])
            , n = e => "number" == typeof e && Number.isFinite(e) && (-1 === e || e >= 0)
            , a = (e, t) => {
                let { org: r, user: i } = o(e)
                    , [n, a] = t.split(":")
                    , s = a || n;
                return "org" === n ? r.includes(s) : "user" === n ? i.includes(s) : [...r, ...i].includes(s)
            }
            , o = e => {
                let t = e ? e.split(",").map(e => e.trim()) : [];
                return {
                    org: t.filter(e => e.split(":")[0].includes("o")).map(e => e.split(":")[1]),
                    user: t.filter(e => e.split(":")[0].includes("u")).map(e => e.split(":")[1])
                }
            }
            , s = e => {
                let n, a;
                if (!e)
                    return !1;
                let o = "string" == typeof e && i.has(e)
                    , s = "object" == typeof e && (n = e.level,
                        r.has(n)) && "number" == typeof (a = e.afterMinutes) && a > 0;
                return (!!o || !!s) && (e => "string" == typeof e ? t[e] : e).bind(null, e)
            }
            ;
        e.s(["createCheckAuthorization", 0, e => t => {
            let r;
            return !!e.userId && (r = [((e, t) => {
                let { orgId: r, orgRole: i, orgPermissions: n } = t
                    , a = void 0 !== e.role
                    , o = void 0 !== e.permission;
                if (!a && !o)
                    return "skip";
                if (a && "string" != typeof e.role || o && "string" != typeof e.permission || !r)
                    return "fail";
                if (a && ("string" != typeof i || !i || i.replace(/^(org:)*/, "org:") !== e.role.replace(/^(org:)*/, "org:")))
                    return "fail";
                if (o && (!Array.isArray(n) || !n.includes(e.permission.replace(/^(org:)*/, "org:"))))
                    return "fail";
                return "pass"
            }
            )(t, e), ((e, t) => {
                let { features: r, plans: i } = t
                    , n = void 0 !== e.feature
                    , o = void 0 !== e.plan;
                if (!n && !o)
                    return "skip";
                if (n && "string" != typeof e.feature || o && "string" != typeof e.plan)
                    return "fail";
                if (n) {
                    if ("string" != typeof r || !r)
                        return "fail";
                    try {
                        if (!a(r, e.feature))
                            return "fail"
                    } catch {
                        return "fail"
                    }
                }
                if (o) {
                    if ("string" != typeof i || !i)
                        return "fail";
                    try {
                        if (!a(i, e.plan))
                            return "fail"
                    } catch {
                        return "fail"
                    }
                }
                return "pass"
            }
            )(t, e), ((e, { factorVerificationAge: t }) => {
                if (void 0 === e.reverification)
                    return "skip";
                if (!t || !Array.isArray(t) || 2 !== t.length || !n(t[0]) || !n(t[1]))
                    return "fail";
                let r = s(e.reverification);
                if (!r)
                    return "fail";
                let { level: i, afterMinutes: a } = r()
                    , [o, l] = t;
                if (-1 === o && -1 === l)
                    return "fail";
                let u = -1 !== o && a > o
                    , c = -1 !== l && a > l;
                switch (i) {
                    case "first_factor":
                        return u ? "pass" : "fail";
                    case "second_factor":
                        if (-1 === l)
                            return u ? "pass" : "fail";
                        return c ? "pass" : "fail";
                    case "multi_factor":
                        if (-1 === l)
                            return u ? "pass" : "fail";
                        if (-1 === o)
                            return "fail";
                        return u && c ? "pass" : "fail"
                }
            }
            )(t, e)]).some(e => "pass" === e) && r.every(e => "pass" === e || "skip" === e)
        }
            , "resolveAuthState", 0, ({ authObject: { sessionId: e, sessionStatus: t, userId: r, actor: i, orgId: n, orgRole: a, orgSlug: o, signOut: s, getToken: l, has: u, sessionClaims: c }, options: { treatPendingAsSignedOut: d = !0 } }) => void 0 === e && void 0 === r ? {
                isLoaded: !1,
                isSignedIn: void 0,
                sessionId: e,
                sessionClaims: void 0,
                userId: r,
                actor: void 0,
                orgId: void 0,
                orgRole: void 0,
                orgSlug: void 0,
                has: void 0,
                signOut: s,
                getToken: l
            } : null === e && null === r ? {
                isLoaded: !0,
                isSignedIn: !1,
                sessionId: e,
                userId: r,
                sessionClaims: null,
                actor: null,
                orgId: null,
                orgRole: null,
                orgSlug: null,
                has: () => !1,
                signOut: s,
                getToken: l
            } : d && "pending" === t ? {
                isLoaded: !0,
                isSignedIn: !1,
                sessionId: null,
                userId: null,
                sessionClaims: null,
                actor: null,
                orgId: null,
                orgRole: null,
                orgSlug: null,
                has: () => !1,
                signOut: s,
                getToken: l
            } : e && c && r && n && a ? {
                isLoaded: !0,
                isSignedIn: !0,
                sessionId: e,
                sessionClaims: c,
                userId: r,
                actor: i || null,
                orgId: n,
                orgRole: a,
                orgSlug: o || null,
                has: u,
                signOut: s,
                getToken: l
            } : e && c && r && !n ? {
                isLoaded: !0,
                isSignedIn: !0,
                sessionId: e,
                sessionClaims: c,
                userId: r,
                actor: i || null,
                orgId: null,
                orgRole: null,
                orgSlug: null,
                has: u,
                signOut: s,
                getToken: l
            } : void 0, "validateReverificationConfig", 0, s])
    }
    , 24440, e => {
        "use strict";
        var t = e.i(47167)
            , r = e.i(28069)
            , i = e.i(15331)
            , n = class {
                #e;
                #t = 864e5;
                constructor(e) {
                    this.#e = e
                }
                isEventThrottled(e) {
                    let t = Date.now()
                        , r = this.#r(e)
                        , i = this.#e.getItem(r);
                    return !!i && !(t - i > this.#t) || (this.#e.setItem(r, t),
                        !1)
                }
                #r(e) {
                    let { sk: t, pk: r, payload: i, ...n } = e
                        , a = {
                            ...i,
                            ...n
                        };
                    return JSON.stringify(Object.keys({
                        ...i,
                        ...n
                    }).sort().map(e => a[e]))
                }
            }
            , a = class {
                #i = "clerk_telemetry_throttler";
                getItem(e) {
                    return this.#n()[e]
                }
                setItem(e, t) {
                    try {
                        let r = this.#n();
                        r[e] = t,
                            localStorage.setItem(this.#i, JSON.stringify(r))
                    } catch (e) {
                        e instanceof DOMException && ("QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && localStorage.length > 0 && localStorage.removeItem(this.#i)
                    }
                }
                removeItem(e) {
                    try {
                        let t = this.#n();
                        delete t[e],
                            localStorage.setItem(this.#i, JSON.stringify(t))
                    } catch { }
                }
                #n() {
                    try {
                        let e = localStorage.getItem(this.#i);
                        if (!e)
                            return {};
                        return JSON.parse(e)
                    } catch {
                        return {}
                    }
                }
                static isSupported() {
                    return "u" > typeof window && !!window.localStorage
                }
            }
            , o = class {
                #e = new Map;
                #a = 1e4;
                getItem(e) {
                    return this.#e.size > this.#a ? void this.#e.clear() : this.#e.get(e)
                }
                setItem(e, t) {
                    this.#e.set(e, t)
                }
                removeItem(e) {
                    this.#e.delete(e)
                }
            }
            ;
        let s = new Set(["error", "warn", "info", "debug", "trace"]);
        var l = class {
            #o;
            #s;
            #l = {};
            #u = [];
            #c = null;
            constructor(e) {
                this.#o = {
                    maxBufferSize: e.maxBufferSize ?? 5,
                    samplingRate: e.samplingRate ?? 1,
                    perEventSampling: e.perEventSampling ?? !0,
                    disabled: e.disabled ?? !1,
                    debug: e.debug ?? !1,
                    endpoint: "https://clerk-telemetry.com"
                },
                    !e.clerkVersion && "u" < typeof window ? this.#l.clerkVersion = "" : this.#l.clerkVersion = e.clerkVersion ?? "",
                    this.#l.sdk = e.sdk,
                    this.#l.sdkVersion = e.sdkVersion,
                    this.#l.publishableKey = e.publishableKey ?? "";
                const t = (0,
                    r.parsePublishableKey)(e.publishableKey);
                t && (this.#l.instanceType = t.instanceType),
                    e.secretKey && (this.#l.secretKey = e.secretKey.substring(0, 16)),
                    this.#s = new n(a.isSupported() ? new a : new o)
            }
            get isEnabled() {
                return !("development" !== this.#l.instanceType || this.#o.disabled || void 0 !== t.default && t.default.env && (0,
                    i.isTruthy)(t.default.env.CLERK_TELEMETRY_DISABLED) || "u" > typeof window && window?.navigator?.webdriver)
            }
            get isDebug() {
                return this.#o.debug || void 0 !== t.default && t.default.env && (0,
                    i.isTruthy)(t.default.env.CLERK_TELEMETRY_DEBUG)
            }
            record(e) {
                try {
                    let t = this.#d(e.event, e.payload);
                    if (this.#f(t.event, t),
                        !this.#g(t, e.eventSamplingRate))
                        return;
                    this.#u.push({
                        kind: "event",
                        value: t
                    }),
                        this.#p()
                } catch (e) {
                    console.error("[clerk/telemetry] Error recording telemetry event", e)
                }
            }
            recordLog(e) {
                try {
                    if (!this.#h(e))
                        return;
                    let t = "string" == typeof e?.level && s.has(e.level)
                        , r = "string" == typeof e?.message && e.message.trim().length > 0
                        , i = null
                        , n = e?.timestamp;
                    if ("number" == typeof n || "string" == typeof n) {
                        let e = new Date(n);
                        Number.isNaN(e.getTime()) || (i = e)
                    }
                    if (!t || !r || null === i) {
                        this.isDebug && "u" > typeof console && console.warn("[clerk/telemetry] Dropping invalid telemetry log entry", {
                            levelIsValid: t,
                            messageIsValid: r,
                            timestampIsValid: null !== i
                        });
                        return
                    }
                    let a = this.#m()
                        , o = {
                            sdk: a.name,
                            sdkv: a.version,
                            cv: this.#l.clerkVersion ?? "",
                            lvl: e.level,
                            msg: e.message,
                            ts: i.toISOString(),
                            pk: this.#l.publishableKey || null,
                            payload: this.#y(e.context)
                        };
                    this.#u.push({
                        kind: "log",
                        value: o
                    }),
                        this.#p()
                } catch (e) {
                    console.error("[clerk/telemetry] Error recording telemetry log entry", e)
                }
            }
            #g(e, t) {
                return this.isEnabled && !this.isDebug && this.#v(e, t)
            }
            #h(e) {
                return !0
            }
            #v(e, t) {
                let r = Math.random();
                return !!(r <= this.#o.samplingRate && (!1 === this.#o.perEventSampling || void 0 === t || r <= t)) && !this.#s.isEventThrottled(e)
            }
            #p() {
                if ("u" < typeof window)
                    return void this.#b();
                if (this.#u.length >= this.#o.maxBufferSize) {
                    this.#c && ("u" > typeof cancelIdleCallback ? cancelIdleCallback(Number(this.#c)) : clearTimeout(Number(this.#c))),
                        this.#b();
                    return
                }
                this.#c || ("requestIdleCallback" in window ? this.#c = requestIdleCallback(() => {
                    this.#b(),
                        this.#c = null
                }
                ) : this.#c = setTimeout(() => {
                    this.#b(),
                        this.#c = null
                }
                    , 0))
            }
            #b() {
                let e = [...this.#u];
                if (this.#u = [],
                    this.#c = null,
                    0 === e.length)
                    return;
                let t = e.filter(e => "event" === e.kind).map(e => e.value)
                    , r = e.filter(e => "log" === e.kind).map(e => e.value);
                t.length > 0 && fetch(new URL("/v1/event", this.#o.endpoint), {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    keepalive: !0,
                    method: "POST",
                    body: JSON.stringify({
                        events: t
                    })
                }).catch(() => void 0),
                    r.length > 0 && fetch(new URL("/v1/logs", this.#o.endpoint), {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        keepalive: !0,
                        method: "POST",
                        body: JSON.stringify({
                            logs: r
                        })
                    }).catch(() => void 0)
            }
            #f(e, t) {
                this.isDebug && (void 0 !== console.groupCollapsed ? (console.groupCollapsed("[clerk/telemetry]", e),
                    console.log(t),
                    console.groupEnd()) : console.log("[clerk/telemetry]", e, t))
            }
            #m() {
                let e = {
                    name: this.#l.sdk,
                    version: this.#l.sdkVersion
                };
                if ("u" > typeof window) {
                    let t = window;
                    if (t.Clerk) {
                        let r = t.Clerk;
                        if ("object" == typeof r && null !== r && "constructor" in r && "function" == typeof r.constructor && r.constructor.sdkMetadata) {
                            let { name: t, version: i } = r.constructor.sdkMetadata;
                            void 0 !== t && (e.name = t),
                                void 0 !== i && (e.version = i)
                        }
                    }
                }
                return e
            }
            #d(e, t) {
                let r = this.#m();
                return {
                    event: e,
                    cv: this.#l.clerkVersion ?? "",
                    it: this.#l.instanceType ?? "",
                    sdk: r.name,
                    sdkv: r.version,
                    ...this.#l.publishableKey ? {
                        pk: this.#l.publishableKey
                    } : {},
                    ...this.#l.secretKey ? {
                        sk: this.#l.secretKey
                    } : {},
                    payload: t
                }
            }
            #y(e) {
                if (null == e || "object" != typeof e)
                    return null;
                try {
                    let t = JSON.parse(JSON.stringify(e));
                    if (t && "object" == typeof t && !Array.isArray(t))
                        return t;
                    return null
                } catch {
                    return null
                }
            }
        }
            ;
        let u = "COMPONENT_MOUNTED"
            , c = new Set(["SignIn", "SignUp"]);
        function d(e) {
            return c.has(e) ? 1 : .1
        }
        function f(e) {
            return function (t, r, i) {
                return {
                    event: e,
                    eventSamplingRate: e === u ? d(t) : .1,
                    payload: {
                        component: t,
                        appearanceProp: !!r?.appearance,
                        baseTheme: !!r?.appearance?.baseTheme,
                        elements: !!r?.appearance?.elements,
                        variables: !!r?.appearance?.variables,
                        ...i
                    }
                }
            }
        }
        let g = "THEME_USAGE";
        function p(e) {
            return "string" == typeof e ? e : "object" == typeof e && null !== e && "name" in e && "string" == typeof e.name ? e.name : void 0
        }
        e.s(["EVENT_SAMPLING_RATE", 0, 1, "EVENT_THEME_USAGE", 0, g, "TelemetryCollector", 0, l, "eventComponentMounted", 0, function (e, t = {}) {
            return {
                event: u,
                eventSamplingRate: d(e),
                payload: {
                    component: e,
                    ...t
                }
            }
        }
            , "eventFrameworkMetadata", 0, function (e) {
                return {
                    event: "FRAMEWORK_METADATA",
                    eventSamplingRate: .1,
                    payload: e
                }
            }
            , "eventMethodCalled", 0, function (e, t) {
                return {
                    event: "METHOD_CALLED",
                    eventSamplingRate: .1,
                    payload: {
                        method: e,
                        ...t
                    }
                }
            }
            , "eventPrebuiltComponentMounted", 0, function (e, t, r) {
                return f(u)(e, t, r)
            }
            , "eventPrebuiltComponentOpened", 0, function (e, t, r) {
                return f("COMPONENT_OPENED")(e, t, r)
            }
            , "eventThemeUsage", 0, function (e) {
                return {
                    event: g,
                    eventSamplingRate: 1,
                    payload: function (e) {
                        let t;
                        if (!e || "object" != typeof e)
                            return {};
                        let r = e.theme || e.baseTheme;
                        if (!r)
                            return {};
                        if (Array.isArray(r))
                            for (let e of r) {
                                let r = p(e);
                                if (r) {
                                    t = r;
                                    break
                                }
                            }
                        else
                            t = p(r);
                        return {
                            themeName: t
                        }
                    }(e)
                }
            }
        ])
    }
    , 71204, e => {
        "use strict";
        let t = "reverification-error";
        e.s(["isReverificationHint", 0, e => e && "object" == typeof e && "clerk_error" in e && e.clerk_error?.type === "forbidden" && e.clerk_error?.reason === t, "reverificationError", 0, e => ({
            clerk_error: {
                type: "forbidden",
                reason: t,
                metadata: {
                    reverification: e
                }
            }
        })])
    }
    , 11432, 36152, e => {
        "use strict";
        let t = (...e) => { }
            ;
        e.s(["createDeferredPromise", 0, () => {
            let e = t
                , r = t;
            return {
                promise: new Promise((t, i) => {
                    e = t,
                        r = i
                }
                ),
                resolve: e,
                reject: r
            }
        }
        ], 11432),
            e.s(["getCurrentOrganizationMembership", 0, function (e, t) {
                return e.find(e => e.organization.id === t)
            }
            ], 36152)
    }
    , 75389, e => {
        "use strict";
        var t = Object.prototype.hasOwnProperty;
        e.s(["dequal", 0, function e(r, i) {
            var n, a;
            if (r === i)
                return !0;
            if (r && i && (n = r.constructor) === i.constructor) {
                if (n === Date)
                    return r.getTime() === i.getTime();
                if (n === RegExp)
                    return r.toString() === i.toString();
                if (n === Array) {
                    if ((a = r.length) === i.length)
                        for (; a-- && e(r[a], i[a]);)
                            ;
                    return -1 === a
                }
                if (!n || "object" == typeof r) {
                    for (n in a = 0,
                        r)
                        if (t.call(r, n) && ++a && !t.call(i, n) || !(n in i) || !e(r[n], i[n]))
                            return !1;
                    return Object.keys(i).length === a
                }
            }
            return r != r && i != i
        }
        ])
    }
    , 27085, e => {
        "use strict";
        let t, r, i;
        var n, a, o = e.i(71204), s = e.i(75428), l = e.i(13039), u = e.i(11432);
        e.i(15331);
        var c = e.i(36152)
            , d = e.i(24440)
            , f = e.i(71645)
            , g = e.i(2239);
        e.s(["ERROR_REVALIDATE_EVENT", 0, 3, "FOCUS_EVENT", 0, 0, "MUTATE_EVENT", 0, 2, "RECONNECT_EVENT", 0, 1], 99104);
        var p = e.i(75389);
        let h = new WeakMap
            , m = () => { }
            , y = m()
            , v = Object
            , b = e => e === y
            , k = (e, t) => ({
                ...e,
                ...t
            })
            , E = {}
            , S = {}
            , P = "undefined"
            , _ = typeof window != P
            , C = typeof document != P
            , w = _ && "Deno" in window
            , R = (e, t) => {
                let r = h.get(e);
                return [() => !b(t) && e.get(t) || E, i => {
                    if (!b(t)) {
                        let n = e.get(t);
                        t in S || (S[t] = n),
                            r[5](t, k(n, i), n || E)
                    }
                }
                    , r[6], () => !b(t) && t in S ? S[t] : !b(t) && e.get(t) || E]
            }
            , O = !0
            , [M, z] = _ && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [m, m]
            , I = {
                initFocus: e => (C && document.addEventListener("visibilitychange", e),
                    M("focus", e),
                    () => {
                        C && document.removeEventListener("visibilitychange", e),
                            z("focus", e)
                    }
                ),
                initReconnect: e => {
                    let t = () => {
                        O = !0,
                            e()
                    }
                        , r = () => {
                            O = !1
                        }
                        ;
                    return M("online", t),
                        M("offline", r),
                        () => {
                            z("online", t),
                                z("offline", r)
                        }
                }
            }
            , T = !f.default.useId
            , x = !_ || w
            , L = x ? f.useEffect : f.useLayoutEffect
            , D = "u" > typeof navigator && navigator.connection
            , A = !x && D && (["slow-2g", "2g"].includes(D.effectiveType) || D.saveData)
            , N = new WeakMap
            , j = (e, t) => e === `[object ${t}]`
            , U = 0
            , V = e => {
                let t, r, i = typeof e, n = v.prototype.toString.call(e), a = j(n, "Date"), o = j(n, "RegExp"), s = j(n, "Object");
                if (v(e) !== e || a || o)
                    t = a ? e.toJSON() : "symbol" == i ? e.toString() : "string" == i ? JSON.stringify(e) : "" + e;
                else {
                    if (t = N.get(e))
                        return t;
                    if (t = ++U + "~",
                        N.set(e, t),
                        Array.isArray(e)) {
                        for (r = 0,
                            t = "@"; r < e.length; r++)
                            t += V(e[r]) + ",";
                        N.set(e, t)
                    }
                    if (s) {
                        t = "#";
                        let i = v.keys(e).sort();
                        for (; !b(r = i.pop());)
                            b(e[r]) || (t += r + ":" + V(e[r]) + ",");
                        N.set(e, t)
                    }
                }
                return t
            }
            , K = e => {
                if ("function" == typeof e)
                    try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                let t = e;
                return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? V(e) : "", t]
            }
            , F = 0
            , $ = () => ++F;
        async function q(...e) {
            let [t, r, i, n] = e
                , a = k({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof n ? {
                    revalidate: n
                } : n || {})
                , o = a.populateCache
                , s = a.rollbackOnError
                , l = a.optimisticData
                , u = a.throwOnError;
            if ("function" == typeof r) {
                let e = [];
                for (let i of t.keys())
                    !/^\$(inf|sub)\$/.test(i) && r(t.get(i)._k) && e.push(i);
                return Promise.all(e.map(c))
            }
            return c(r);
            async function c(r) {
                let n, [c] = K(r);
                if (!c)
                    return;
                let [d, f] = R(t, c)
                    , [g, p, m, v] = h.get(t)
                    , k = () => {
                        let e = g[c];
                        return ("function" == typeof a.revalidate ? a.revalidate(d().data, r) : !1 !== a.revalidate) && (delete m[c],
                            delete v[c],
                            e && e[0]) ? e[0](2).then(() => d().data) : d().data
                    }
                    ;
                if (e.length < 3)
                    return k();
                let E = i
                    , S = !1
                    , P = $();
                p[c] = [P, 0];
                let _ = !b(l)
                    , C = d()
                    , w = C.data
                    , O = C._c
                    , M = b(O) ? w : O;
                if (_ && f({
                    data: l = "function" == typeof l ? l(M, w) : l,
                    _c: M
                }),
                    "function" == typeof E)
                    try {
                        E = E(M)
                    } catch (e) {
                        n = e,
                            S = !0
                    }
                if (E && "function" == typeof E.then) {
                    let e;
                    if (E = await E.catch(e => {
                        n = e,
                            S = !0
                    }
                    ),
                        P !== p[c][0]) {
                        if (S)
                            throw n;
                        return E
                    }
                    S && _ && (e = n,
                        "function" == typeof s ? s(e) : !1 !== s) && (o = !0,
                            f({
                                data: M,
                                _c: y
                            }))
                }
                if (o && !S && ("function" == typeof o ? f({
                    data: o(E, M),
                    error: y,
                    _c: y
                }) : f({
                    data: E,
                    error: y,
                    _c: y
                })),
                    p[c][1] = $(),
                    Promise.resolve(k()).then(() => {
                        f({
                            _c: y
                        })
                    }
                    ),
                    S) {
                    if (u)
                        throw n;
                    return
                }
                return E
            }
        }
        let J = (e, t) => {
            for (let r in e)
                e[r][0] && e[r][0](t)
        }
            , B = (e, t) => {
                if (!h.has(e)) {
                    let r = k(I, t)
                        , i = Object.create(null)
                        , n = q.bind(y, e)
                        , a = m
                        , o = Object.create(null)
                        , s = (e, t) => {
                            let r = o[e] || [];
                            return o[e] = r,
                                r.push(t),
                                () => r.splice(r.indexOf(t), 1)
                        }
                        , l = (t, r, i) => {
                            e.set(t, r);
                            let n = o[t];
                            if (n)
                                for (let e of n)
                                    e(r, i)
                        }
                        , u = () => {
                            if (!h.has(e) && (h.set(e, [i, Object.create(null), Object.create(null), Object.create(null), n, l, s]),
                                !x)) {
                                let t = r.initFocus(setTimeout.bind(y, J.bind(y, i, 0)))
                                    , n = r.initReconnect(setTimeout.bind(y, J.bind(y, i, 1)));
                                a = () => {
                                    t && t(),
                                        n && n(),
                                        h.delete(e)
                                }
                            }
                        }
                        ;
                    return u(),
                        [e, n, u, a]
                }
                return [e, h.get(e)[4]]
            }
            , W = p.dequal
            , [G, H] = B(new Map)
            , Y = k({
                onLoadingSlow: m,
                onSuccess: m,
                onError: m,
                onErrorRetry: (e, t, r, i, n) => {
                    let a = r.errorRetryCount
                        , o = n.retryCount
                        , s = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * r.errorRetryInterval;
                    (b(a) || !(o > a)) && setTimeout(i, s, n)
                }
                ,
                onDiscarded: m,
                revalidateOnFocus: !0,
                revalidateOnReconnect: !0,
                revalidateIfStale: !0,
                shouldRetryOnError: !0,
                errorRetryInterval: A ? 1e4 : 5e3,
                focusThrottleInterval: 5e3,
                dedupingInterval: 2e3,
                loadingTimeout: A ? 5e3 : 3e3,
                compare: W,
                isPaused: () => !1,
                cache: G,
                mutate: H,
                fallback: {}
            }, {
                isOnline: () => O,
                isVisible: () => {
                    let e = C && document.visibilityState;
                    return b(e) || "hidden" !== e
                }
            })
            , Q = (e, t) => {
                let r = k(e, t);
                if (t) {
                    let { use: i, fallback: n } = e
                        , { use: a, fallback: o } = t;
                    i && a && (r.use = i.concat(a)),
                        n && o && (r.fallback = k(n, o))
                }
                return r
            }
            , Z = (0,
                f.createContext)({});
        var X = e.i(99104);
        let ee = "$inf$"
            , et = _ && window.__SWR_DEVTOOLS_USE__
            , er = et ? window.__SWR_DEVTOOLS_USE__ : []
            , ei = e => "function" == typeof e[1] ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
            , en = () => k(Y, (0,
                f.useContext)(Z))
            , ea = er.concat(e => (t, r, i) => {
                let n = r && ((...e) => {
                    let [i] = K(t)
                        , [, , , n] = h.get(G);
                    if (i.startsWith(ee))
                        return r(...e);
                    let a = n[i];
                    return b(a) ? r(...e) : (delete n[i],
                        a)
                }
                );
                return e(t, n, i)
            }
            )
            , eo = (e, t) => (...r) => {
                let [i, n, a] = ei(r)
                    , o = (a.use || []).concat(t);
                return e(i, n, {
                    ...a,
                    use: o
                })
            }
            ;
        et && (window.__SWR_DEVTOOLS_REACT__ = f.default);
        let es = () => { }
            , el = es()
            , eu = (new WeakMap,
                f.default.use || (e => {
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
            , ec = {
                dedupe: !0
            }
            , ed = v.defineProperty(e => {
                let { value: t } = e
                    , r = (0,
                        f.useContext)(Z)
                    , i = "function" == typeof t
                    , n = (0,
                        f.useMemo)(() => i ? t(r) : t, [i, r, t])
                    , a = (0,
                        f.useMemo)(() => i ? n : Q(r, n), [i, r, n])
                    , o = n && n.provider
                    , s = (0,
                        f.useRef)(y);
                o && !s.current && (s.current = B(o(a.cache || G), n));
                let l = s.current;
                return l && (a.cache = l[0],
                    a.mutate = l[1]),
                    L(() => {
                        if (l)
                            return l[2] && l[2](),
                                l[3]
                    }
                        , []),
                    (0,
                        f.createElement)(Z.Provider, k(e, {
                            value: a
                        }))
            }
                , "defaultValue", {
                value: Y
            })
            , ef = (t = (e, t, r) => {
                let { cache: i, compare: n, suspense: a, fallbackData: o, revalidateOnMount: s, revalidateIfStale: l, refreshInterval: u, refreshWhenHidden: c, refreshWhenOffline: d, keepPreviousData: p } = r
                    , [m, v, E, S] = h.get(i)
                    , [C, w] = K(e)
                    , O = (0,
                        f.useRef)(!1)
                    , M = (0,
                        f.useRef)(!1)
                    , z = (0,
                        f.useRef)(C)
                    , I = (0,
                        f.useRef)(t)
                    , D = (0,
                        f.useRef)(r)
                    , A = () => D.current.isVisible() && D.current.isOnline()
                    , [N, j, U, V] = R(i, C)
                    , F = (0,
                        f.useRef)({}).current
                    , J = b(o) ? b(r.fallback) ? y : r.fallback[C] : o
                    , B = (e, t) => {
                        for (let r in F)
                            if ("data" === r) {
                                if (!n(e[r], t[r]) && (!b(e[r]) || !n(er, t[r])))
                                    return !1
                            } else if (t[r] !== e[r])
                                return !1;
                        return !0
                    }
                    , W = (0,
                        f.useMemo)(() => {
                            let e = !!C && !!t && (b(s) ? !D.current.isPaused() && !a && !1 !== l : s)
                                , r = t => {
                                    let r = k(t);
                                    return (delete r._k,
                                        e) ? {
                                        isValidating: !0,
                                        isLoading: !0,
                                        ...r
                                    } : r
                                }
                                , i = N()
                                , n = V()
                                , o = r(i)
                                , u = i === n ? o : r(n)
                                , c = o;
                            return [() => {
                                let e = r(N());
                                return B(e, c) ? (c.data = e.data,
                                    c.isLoading = e.isLoading,
                                    c.isValidating = e.isValidating,
                                    c.error = e.error,
                                    c) : (c = e,
                                        e)
                            }
                                , () => u]
                        }
                            , [i, C])
                    , G = (0,
                        g.useSyncExternalStore)((0,
                            f.useCallback)(e => U(C, (t, r) => {
                                B(r, t) || e()
                            }
                            ), [i, C]), W[0], W[1])
                    , H = !O.current
                    , Y = m[C] && m[C].length > 0
                    , Q = G.data
                    , Z = b(Q) ? J && "function" == typeof J.then ? eu(J) : J : Q
                    , ee = G.error
                    , et = (0,
                        f.useRef)(Z)
                    , er = p ? b(Q) ? b(et.current) ? Z : et.current : Q : Z
                    , ei = (!Y || !!b(ee)) && (H && !b(s) ? s : !D.current.isPaused() && (a ? !b(Z) && l : b(Z) || l))
                    , en = !!(C && t && H && ei)
                    , ea = b(G.isValidating) ? en : G.isValidating
                    , eo = b(G.isLoading) ? en : G.isLoading
                    , es = (0,
                        f.useCallback)(async e => {
                            let t, i, a = I.current;
                            if (!C || !a || M.current || D.current.isPaused())
                                return !1;
                            let o = !0
                                , s = e || {}
                                , l = !E[C] || !s.dedupe
                                , u = () => T ? !M.current && C === z.current && O.current : C === z.current
                                , c = {
                                    isValidating: !1,
                                    isLoading: !1
                                }
                                , d = () => {
                                    j(c)
                                }
                                , f = () => {
                                    let e = E[C];
                                    e && e[1] === i && delete E[C]
                                }
                                , g = {
                                    isValidating: !0
                                };
                            b(N().data) && (g.isLoading = !0);
                            try {
                                if (l && (j(g),
                                    r.loadingTimeout && b(N().data) && setTimeout(() => {
                                        o && u() && D.current.onLoadingSlow(C, r)
                                    }
                                        , r.loadingTimeout),
                                    E[C] = [a(w), $()]),
                                    [t, i] = E[C],
                                    t = await t,
                                    l && setTimeout(f, r.dedupingInterval),
                                    !E[C] || E[C][1] !== i)
                                    return l && u() && D.current.onDiscarded(C),
                                        !1;
                                c.error = y;
                                let e = v[C];
                                if (!b(e) && (i <= e[0] || i <= e[1] || 0 === e[1]))
                                    return d(),
                                        l && u() && D.current.onDiscarded(C),
                                        !1;
                                let s = N().data;
                                c.data = n(s, t) ? s : t,
                                    l && u() && D.current.onSuccess(t, C, r)
                            } catch (r) {
                                f();
                                let e = D.current
                                    , { shouldRetryOnError: t } = e;
                                !e.isPaused() && (c.error = r,
                                    l && u()) && (e.onError(r, C, e),
                                        (!0 === t || "function" == typeof t && t(r)) && (!D.current.revalidateOnFocus || !D.current.revalidateOnReconnect || A()) && e.onErrorRetry(r, C, e, e => {
                                            let t = m[C];
                                            t && t[0] && t[0](X.ERROR_REVALIDATE_EVENT, e)
                                        }
                                            , {
                                                retryCount: (s.retryCount || 0) + 1,
                                                dedupe: !0
                                            }))
                            }
                            return o = !1,
                                d(),
                                !0
                        }
                            , [C, i])
                    , el = (0,
                        f.useCallback)((...e) => q(i, z.current, ...e), []);
                if (L(() => {
                    I.current = t,
                        D.current = r,
                        b(Q) || (et.current = Q)
                }
                ),
                    L(() => {
                        var e;
                        let t;
                        if (!C)
                            return;
                        let r = es.bind(y, ec)
                            , i = 0;
                        D.current.revalidateOnFocus && (i = Date.now() + D.current.focusThrottleInterval);
                        let n = (e = (e, t = {}) => {
                            if (e == X.FOCUS_EVENT) {
                                let e = Date.now();
                                D.current.revalidateOnFocus && e > i && A() && (i = e + D.current.focusThrottleInterval,
                                    r())
                            } else if (e == X.RECONNECT_EVENT)
                                D.current.revalidateOnReconnect && A() && r();
                            else if (e == X.MUTATE_EVENT)
                                return es();
                            else if (e == X.ERROR_REVALIDATE_EVENT)
                                return es(t)
                        }
                            ,
                            (t = m[C] || (m[C] = [])).push(e),
                            () => {
                                let r = t.indexOf(e);
                                r >= 0 && (t[r] = t[t.length - 1],
                                    t.pop())
                            }
                        );
                        if (M.current = !1,
                            z.current = C,
                            O.current = !0,
                            j({
                                _k: w
                            }),
                            ei && !E[C])
                            if (b(Z) || x)
                                r();
                            else
                                _ && typeof window.requestAnimationFrame != P ? window.requestAnimationFrame(r) : setTimeout(r, 1);
                        return () => {
                            M.current = !0,
                                n()
                        }
                    }
                        , [C]),
                    L(() => {
                        let e;
                        function t() {
                            let t = "function" == typeof u ? u(N().data) : u;
                            t && -1 !== e && (e = setTimeout(r, t))
                        }
                        function r() {
                            !N().error && (c || D.current.isVisible()) && (d || D.current.isOnline()) ? es(ec).then(t) : t()
                        }
                        return t(),
                            () => {
                                e && (clearTimeout(e),
                                    e = -1)
                            }
                    }
                        , [u, c, d, C]),
                    (0,
                        f.useDebugValue)(er),
                    a && b(Z) && C) {
                    if (!T && x)
                        throw Error("Fallback data is required when using Suspense in SSR.");
                    I.current = t,
                        D.current = r,
                        M.current = !1;
                    let e = S[C];
                    if (b(e) || eu(el(e)),
                        b(ee)) {
                        let e = es(ec);
                        b(er) || (e.status = "fulfilled",
                            e.value = !0),
                            eu(e)
                    } else
                        throw ee
                }
                return {
                    mutate: el,
                    get data() {
                        return F.data = !0,
                            er
                    },
                    get error() {
                        return F.error = !0,
                            ee
                    },
                    get isValidating() {
                        return F.isValidating = !0,
                            ea
                    },
                    get isLoading() {
                        return F.isLoading = !0,
                            eo
                    }
                }
            }
                ,
                function (...e) {
                    let r = en()
                        , [i, n, a] = ei(e)
                        , o = Q(r, a)
                        , s = t
                        , { use: l } = o
                        , u = (l || []).concat(ea);
                    for (let e = u.length; e--;)
                        s = u[e](s);
                    return s(i, n || o.fetcher || null, o)
                }
            )
            , eg = () => { }
            , ep = eg()
            , eh = Object
            , em = e => e === ep
            , ey = new WeakMap
            , ev = (e, t) => e === `[object ${t}]`
            , eb = 0
            , ek = e => {
                let t, r, i = typeof e, n = eh.prototype.toString.call(e), a = ev(n, "Date"), o = ev(n, "RegExp"), s = ev(n, "Object");
                if (eh(e) !== e || a || o)
                    t = a ? e.toJSON() : "symbol" == i ? e.toString() : "string" == i ? JSON.stringify(e) : "" + e;
                else {
                    if (t = ey.get(e))
                        return t;
                    if (t = ++eb + "~",
                        ey.set(e, t),
                        Array.isArray(e)) {
                        for (r = 0,
                            t = "@"; r < e.length; r++)
                            t += ek(e[r]) + ",";
                        ey.set(e, t)
                    }
                    if (s) {
                        t = "#";
                        let i = eh.keys(e).sort();
                        for (; !em(r = i.pop());)
                            em(e[r]) || (t += r + ":" + ek(e[r]) + ",");
                        ey.set(e, t)
                    }
                }
                return t
            }
            , eE = Promise.resolve()
            , eS = eo(ef, e => (t, r, i) => {
                let n, a = (0,
                    f.useRef)(!1), { cache: o, initialSize: s = 1, revalidateAll: l = !1, persistSize: u = !1, revalidateFirstPage: c = !0, revalidateOnMount: d = !1, parallel: p = !1 } = i, [, , , m] = h.get(G);
                try {
                    (n = (e => {
                        if ("function" == typeof e)
                            try {
                                e = e()
                            } catch (t) {
                                e = ""
                            }
                        let t = e;
                        return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? ek(e) : "", t]
                    }
                    )(t ? t(0, null) : null)[0]) && (n = ee + n)
                } catch (e) { }
                let [v, k, E] = R(o, n)
                    , S = (0,
                        f.useCallback)(() => b(v()._l) ? s : v()._l, [o, n, s]);
                (0,
                    g.useSyncExternalStore)((0,
                        f.useCallback)(e => n ? E(n, () => {
                            e()
                        }
                        ) : () => { }
                            , [o, n]), S, S);
                let P = (0,
                    f.useCallback)(() => {
                        let e = v()._l;
                        return b(e) ? s : e
                    }
                        , [n, s])
                    , _ = (0,
                        f.useRef)(P());
                L(() => {
                    if (!a.current) {
                        a.current = !0;
                        return
                    }
                    n && k({
                        _l: u ? _.current : P()
                    })
                }
                    , [n, o]);
                let C = d && !a.current
                    , w = e(n, async e => {
                        let n = v()._i
                            , a = v()._r;
                        k({
                            _r: y
                        });
                        let s = []
                            , u = P()
                            , [d] = R(o, e)
                            , f = d().data
                            , g = []
                            , h = null;
                        for (let e = 0; e < u; ++e) {
                            let [u, d] = K(t(e, p ? null : h));
                            if (!u)
                                break;
                            let [y, v] = R(o, u)
                                , k = y().data
                                , E = l || n || b(k) || c && !e && !b(f) || C || f && !b(f[e]) && !i.compare(f[e], k);
                            if (r && ("function" == typeof a ? a(k, d) : E)) {
                                let t = async () => {
                                    if (u in m) {
                                        let e = m[u];
                                        delete m[u],
                                            k = await e
                                    } else
                                        k = await r(d);
                                    v({
                                        data: k,
                                        _k: d
                                    }),
                                        s[e] = k
                                }
                                    ;
                                p ? g.push(t) : await t()
                            } else
                                s[e] = k;
                            p || (h = k)
                        }
                        return p && await Promise.all(g.map(e => e())),
                            k({
                                _i: y
                            }),
                            s
                    }
                        , i)
                    , O = (0,
                        f.useCallback)(function (e, t) {
                            let r = "boolean" == typeof t ? {
                                revalidate: t
                            } : t || {}
                                , i = !1 !== r.revalidate;
                            return n ? (i && (b(e) ? k({
                                _i: !0,
                                _r: r.revalidate
                            }) : k({
                                _i: !1,
                                _r: r.revalidate
                            })),
                                arguments.length ? w.mutate(e, {
                                    ...r,
                                    revalidate: i
                                }) : w.mutate()) : eE
                        }, [n, o])
                    , M = (0,
                        f.useCallback)(e => {
                            let r;
                            if (!n)
                                return eE;
                            let [, i] = R(o, n);
                            if ("function" == typeof e ? r = e(P()) : "number" == typeof e && (r = e),
                                "number" != typeof r)
                                return eE;
                            i({
                                _l: r
                            }),
                                _.current = r;
                            let a = []
                                , [s] = R(o, n)
                                , l = null;
                            for (let e = 0; e < r; ++e) {
                                let [r] = K(t(e, l))
                                    , [i] = R(o, r)
                                    , n = r ? i().data : y;
                                if (b(n))
                                    return O(s().data);
                                a.push(n),
                                    l = n
                            }
                            return O(a)
                        }
                            , [n, o, O, P]);
                return {
                    size: P(),
                    setSize: M,
                    mutate: O,
                    get data() {
                        return w.data
                    },
                    get error() {
                        return w.error
                    },
                    get isValidating() {
                        return w.isValidating
                    },
                    get isLoading() {
                        return w.isLoading
                    }
                }
            }
            );
        var eP = Object.prototype.hasOwnProperty;
        function e_(e, t, r) {
            for (r of e.keys())
                if (eC(r, t))
                    return r
        }
        function eC(e, t) {
            var r, i, n;
            if (e === t)
                return !0;
            if (e && t && (r = e.constructor) === t.constructor) {
                if (r === Date)
                    return e.getTime() === t.getTime();
                if (r === RegExp)
                    return e.toString() === t.toString();
                if (r === Array) {
                    if ((i = e.length) === t.length)
                        for (; i-- && eC(e[i], t[i]);)
                            ;
                    return -1 === i
                }
                if (r === Set) {
                    if (e.size !== t.size)
                        return !1;
                    for (i of e)
                        if ((n = i) && "object" == typeof n && !(n = e_(t, n)) || !t.has(n))
                            return !1;
                    return !0
                }
                if (r === Map) {
                    if (e.size !== t.size)
                        return !1;
                    for (i of e)
                        if ((n = i[0]) && "object" == typeof n && !(n = e_(t, n)) || !eC(i[1], t.get(n)))
                            return !1;
                    return !0
                }
                if (r === ArrayBuffer)
                    e = new Uint8Array(e),
                        t = new Uint8Array(t);
                else if (r === DataView) {
                    if ((i = e.byteLength) === t.byteLength)
                        for (; i-- && e.getInt8(i) === t.getInt8(i);)
                            ;
                    return -1 === i
                }
                if (ArrayBuffer.isView(e)) {
                    if ((i = e.byteLength) === t.byteLength)
                        for (; i-- && e[i] === t[i];)
                            ;
                    return -1 === i
                }
                if (!r || "object" == typeof e) {
                    for (r in i = 0,
                        e)
                        if (eP.call(e, r) && ++i && !eP.call(t, r) || !(r in t) || !eC(e[r], t[r]))
                            return !1;
                    return Object.keys(t).length === i
                }
            }
            return e != e && t != t
        }
        let ew = T ? e => {
            e()
        }
            : f.default.startTransition
            , eR = eo(ef, () => (e, t, r = {}) => {
                let { mutate: i } = en()
                    , n = (0,
                        f.useRef)(e)
                    , a = (0,
                        f.useRef)(t)
                    , o = (0,
                        f.useRef)(r)
                    , s = (0,
                        f.useRef)(0)
                    , [l, u, c] = (e => {
                        let [, t] = (0,
                            f.useState)({})
                            , r = (0,
                                f.useRef)(!1)
                            , i = (0,
                                f.useRef)(e)
                            , n = (0,
                                f.useRef)({
                                    data: !1,
                                    error: !1,
                                    isValidating: !1
                                })
                            , a = (0,
                                f.useCallback)(e => {
                                    let a = !1
                                        , o = i.current;
                                    for (let t in e)
                                        Object.prototype.hasOwnProperty.call(e, t) && o[t] !== e[t] && (o[t] = e[t],
                                            n.current[t] && (a = !0));
                                    a && !r.current && t({})
                                }
                                    , []);
                        return L(() => (r.current = !1,
                            () => {
                                r.current = !0
                            }
                        )),
                            [i, n.current, a]
                    }
                    )({
                        data: y,
                        error: y,
                        isMutating: !1
                    })
                    , d = l.current
                    , g = (0,
                        f.useCallback)(async (e, t) => {
                            let [r, l] = K(n.current);
                            if (!a.current)
                                throw Error("Can’t trigger the mutation: missing fetcher.");
                            if (!r)
                                throw Error("Can’t trigger the mutation: missing key.");
                            let u = k(k({
                                populateCache: !1,
                                throwOnError: !0
                            }, o.current), t)
                                , d = $();
                            s.current = d,
                                c({
                                    isMutating: !0
                                });
                            try {
                                let t = await i(r, a.current(l, {
                                    arg: e
                                }), k(u, {
                                    throwOnError: !0
                                }));
                                return s.current <= d && (ew(() => c({
                                    data: t,
                                    isMutating: !1,
                                    error: void 0
                                })),
                                    null == u.onSuccess || u.onSuccess.call(u, t, r, u)),
                                    t
                            } catch (e) {
                                if (s.current <= d && (ew(() => c({
                                    error: e,
                                    isMutating: !1
                                })),
                                    null == u.onError || u.onError.call(u, e, r, u),
                                    u.throwOnError))
                                    throw e
                            }
                        }
                            , [])
                    , p = (0,
                        f.useCallback)(() => {
                            s.current = $(),
                                c({
                                    data: y,
                                    error: y,
                                    isMutating: !1
                                })
                        }
                            , []);
                return L(() => {
                    n.current = e,
                        a.current = t,
                        o.current = r
                }
                ),
                {
                    trigger: g,
                    reset: p,
                    get data() {
                        return u.data = !0,
                            d.data
                    },
                    get error() {
                        return u.error = !0,
                            d.error
                    },
                    get isMutating() {
                        return u.isMutating = !0,
                            d.isMutating
                    }
                }
            }
            );
        function eO(e, t) {
            if (!e)
                throw "string" == typeof t ? Error(t) : Error(`${t.displayName} not found`)
        }
        let eM = (e, t) => {
            let { assertCtxFn: r = eO } = t || {}
                , i = f.default.createContext(void 0);
            return i.displayName = e,
                [i, () => {
                    let t = f.default.useContext(i);
                    return r(t, `${e} not found`),
                        t.value
                }
                    , () => {
                        let e = f.default.useContext(i);
                        return e ? e.value : {}
                    }
                ]
        }
            ;
        function ez({ swrConfig: e, children: t }) {
            return f.default.createElement(ed, {
                value: e
            }, t)
        }
        let [eI, eT] = eM("ClerkInstanceContext")
            , [ex, eL] = eM("UserContext")
            , [eD, eA] = eM("ClientContext")
            , [eN, ej] = eM("SessionContext");
        f.default.createContext({});
        let [eU, eV] = eM("CheckoutContext")
            , [eK, eF] = eM("OrganizationContext");
        function e$(e) {
            if (!f.default.useContext(eI)) {
                if ("function" == typeof e)
                    return void e();
                throw Error(`${e} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())
            }
        }
        function eq(e) {
            return {
                queryKey: [e.stablePrefix, e.authenticated, e.tracked, e.untracked],
                invalidationKey: [e.stablePrefix, e.authenticated, e.tracked],
                stableKey: e.stablePrefix,
                authenticated: e.authenticated
            }
        }
        function eJ(e) {
            let { queryKey: t } = e;
            return {
                type: t[0],
                ...t[2],
                ...t[3].args
            }
        }
        let eB = (e, t) => {
            let r = "boolean" == typeof e && e
                , i = (0,
                    f.useRef)(r ? t.initialPage : e?.initialPage ?? t.initialPage)
                , n = (0,
                    f.useRef)(r ? t.pageSize : e?.pageSize ?? t.pageSize)
                , a = {};
            for (let i of Object.keys(t))
                a[i] = r ? t[i] : e?.[i] ?? t[i];
            return {
                ...a,
                initialPage: i.current,
                pageSize: n.current
            }
        }
            ;
        function eW(e, t) {
            let r = new Set(Object.keys(t))
                , i = {};
            for (let t of Object.keys(e))
                r.has(t) || (i[t] = e[t]);
            return i
        }
        let eG = {
            dedupingInterval: 6e4,
            focusThrottleInterval: 12e4
        }
            , eH = {
                ...eG,
                revalidateFirstPage: !1
            }
            , eY = e => {
                let t, r, { fetcher: i, config: n, keys: a } = e, [o, s] = (0,
                    f.useState)(n.initialPage ?? 1), l = (0,
                        f.useRef)(n.initialPage ?? 1), u = (0,
                            f.useRef)(n.pageSize ?? 10), c = n.enabled ?? !0, d = "cache" === n.__experimental_mode, g = n.infinite ?? !1, p = n.keepPreviousData ?? !1, h = n.isSignedIn, m = {
                                ...eJ(a),
                                initialPage: o,
                                pageSize: u.current
                            }, y = (t = (0,
                                f.useRef)(h),
                                r = (0,
                                    f.useRef)(null),
                                t.current !== h && (r.current = t.current,
                                    t.current = h),
                                r.current), v = !g && c && (!!d || !!i), { data: b, isValidating: k, isLoading: E, error: S, mutate: P } = ef("boolean" == typeof h ? !0 === y && !1 === h || h && v ? m : null : v ? m : null, !d && i ? e => !1 === h || !1 === v ? null : i(eW(e, {
                                    type: a.queryKey[0],
                                    ...a.queryKey[2]
                                })) : null, {
                                    keepPreviousData: p,
                                    ...eG
                                }), { data: _, isLoading: C, isValidating: w, error: R, size: O, setSize: M, mutate: z } = eS(e => g && c && !1 !== h ? {
                                    ...eJ(a),
                                    initialPage: l.current + e,
                                    pageSize: u.current
                                } : null, e => {
                                    let t = eW(e, {
                                        type: a.queryKey[0],
                                        ...a.queryKey[2]
                                    });
                                    return i?.(t)
                                }
                                    , eH), I = (0,
                                        f.useMemo)(() => g ? O : o, [g, O, o]), T = (0,
                                            f.useCallback)(e => g ? void M(e) : s(e), [M, g]), x = (0,
                                                f.useMemo)(() => g ? _?.map(e => e?.data).flat() ?? [] : b?.data ?? [], [g, b, _]), L = (0,
                                                    f.useMemo)(() => g ? _?.[_?.length - 1]?.total_count || 0 : b?.total_count ?? 0, [g, b, _]), D = g ? C : E, A = g ? w : k, N = (g ? R : S) ?? null, j = (0,
                                                        f.useCallback)(() => {
                                                            T(e => Math.max(0, e + 1))
                                                        }
                                                            , [T]), U = (0,
                                                                f.useCallback)(() => {
                                                                    T(e => Math.max(0, e - 1))
                                                                }
                                                                    , [T]), V = (l.current - 1) * u.current;
                return {
                    data: x,
                    count: L,
                    error: N,
                    isLoading: D,
                    isFetching: A,
                    isError: !!N,
                    page: I,
                    pageCount: Math.ceil((L - V) / u.current),
                    fetchPage: T,
                    fetchNext: j,
                    fetchPrevious: U,
                    hasNextPage: L - V * u.current > I * u.current,
                    hasPreviousPage: (I - 1) * u.current > V * u.current,
                    revalidate: g ? () => z() : () => P(),
                    setData: g ? e => z(e, {
                        revalidate: !1
                    }) : e => P(e, {
                        revalidate: !1
                    })
                }
            }
            , eQ = () => (e$("useClerk"),
                eT());
        function eZ(e) {
            let t = eQ()
                , r = (0,
                    f.useRef)(!1);
            (0,
                f.useEffect)(() => {
                    r.current || (r.current = !0,
                        t.__internal_attemptToEnableEnvironmentSetting?.({
                            for: "organizations",
                            caller: e
                        }))
                }
                    , [t, e])
        }
        let eX = {
            data: void 0,
            count: void 0,
            error: void 0,
            isLoading: !1,
            isFetching: !1,
            isError: !1,
            page: void 0,
            pageCount: void 0,
            fetchPage: void 0,
            fetchNext: void 0,
            fetchPrevious: void 0,
            hasNextPage: !1,
            hasPreviousPage: !1,
            revalidate: void 0,
            setData: void 0
        }
            , e0 = {
                data: void 0,
                count: void 0,
                error: void 0,
                isLoading: !1,
                isFetching: !1,
                isError: !1,
                page: void 0,
                pageCount: void 0,
                fetchPage: void 0,
                fetchNext: void 0,
                fetchPrevious: void 0,
                hasNextPage: !1,
                hasPreviousPage: !1,
                revalidate: void 0,
                setData: void 0
            }
            , e1 = "u" > typeof window ? f.default.useLayoutEffect : f.default.useEffect
            , e2 = "useSession"
            , e4 = "useSessionList"
            , e3 = "useUser";
        function e5() {
            e$(e3);
            let e = eL();
            return (eT().telemetry?.record((0,
                d.eventMethodCalled)(e3)),
                void 0 === e) ? {
                isLoaded: !1,
                isSignedIn: void 0,
                user: void 0
            } : null === e ? {
                isLoaded: !0,
                isSignedIn: !1,
                user: null
            } : {
                isLoaded: !0,
                isSignedIn: !0,
                user: e
            }
        }
        async function e6(e) {
            try {
                let t = await e;
                if (t instanceof Response)
                    return t.json();
                return t
            } catch (e) {
                if ((0,
                    l.isClerkAPIResponseError)(e) && e.errors.find(({ code: e }) => "session_reverification_required" === e))
                    return (0,
                        o.reverificationError)();
                throw e
            }
        }
        function e8({ hookName: e, resourceType: t, useFetcher: r, options: i }) {
            return function (n) {
                let { for: a, enabled: o, ...s } = n || {}
                    , l = a || "user";
                e$(e);
                let u = r(l)
                    , c = eB(s, {
                        initialPage: 1,
                        pageSize: 10,
                        keepPreviousData: !1,
                        infinite: !1,
                        __experimental_mode: void 0
                    })
                    , f = eT()
                    , g = eL()
                    , { organization: p } = eF();
                f.telemetry?.record((0,
                    d.eventMethodCalled)(e));
                let h = "organization" === l
                    , m = function (e) {
                        let t = eT()
                            , r = e?.enabled ?? !0
                            , i = t.__unstable__environment
                            , n = eL()
                            , { organization: a } = eF()
                            , o = e?.for === "organization"
                            , s = o ? i?.commerceSettings.billing.organization.enabled : i?.commerceSettings.billing.user.enabled
                            , l = !(e?.authenticated ?? !0) || (!o || !!a?.id) && !!n?.id;
                        return s && r && t.loaded && l
                    }({
                        for: l,
                        enabled: o,
                        authenticated: !i?.unauthenticated
                    })
                    , y = void 0 === s ? void 0 : {
                        initialPage: c.initialPage,
                        pageSize: c.pageSize,
                        ...i?.unauthenticated ? {} : h ? {
                            orgId: p?.id
                        } : {}
                    }
                    , v = !!y && f.loaded && !!m;
                return eY({
                    fetcher: u,
                    config: {
                        keepPreviousData: c.keepPreviousData,
                        infinite: c.infinite,
                        enabled: v,
                        ...i?.unauthenticated ? {} : {
                            isSignedIn: null !== g
                        },
                        __experimental_mode: c.__experimental_mode,
                        initialPage: c.initialPage,
                        pageSize: c.pageSize
                    },
                    keys: eq({
                        stablePrefix: t,
                        authenticated: !i?.unauthenticated,
                        tracked: i?.unauthenticated ? {
                            for: l
                        } : {
                            userId: g?.id,
                            ...h ? {
                                _orgId: p?.id
                            } : {}
                        },
                        untracked: {
                            args: y
                        }
                    })
                })
            }
        }
        e8({
            hookName: "useStatements",
            resourceType: "billing-statements",
            useFetcher: () => {
                let e = eT();
                if (e.loaded)
                    return e.billing.getStatements
            }
        }),
            e8({
                hookName: "usePaymentAttempts",
                resourceType: "billing-payment-attempts",
                useFetcher: () => {
                    let e = eT();
                    if (e.loaded)
                        return e.billing.getPaymentAttempts
                }
            }),
            e8({
                hookName: "usePaymentMethods",
                resourceType: "billing-payment-methods",
                useFetcher: e => {
                    let { organization: t } = eF()
                        , r = eL();
                    return "organization" === e ? t?.getPaymentMethods : r?.getPaymentMethods
                }
            }),
            e8({
                hookName: "usePlans",
                resourceType: "billing-plans",
                useFetcher: e => {
                    let t = eT();
                    if (t.loaded)
                        return r => t.billing.getPlans({
                            ...r,
                            for: e
                        })
                }
                ,
                options: {
                    unauthenticated: !0
                }
            });
        let e7 = e => {
            let t = (0,
                f.useRef)(e);
            return (0,
                f.useEffect)(() => {
                    t.current = e
                }
                    , [e]),
                t.current
        }
            , e9 = (e, t, r) => {
                let i = !!r
                    , n = (0,
                        f.useRef)(r);
                (0,
                    f.useEffect)(() => {
                        n.current = r
                    }
                        , [r]),
                    (0,
                        f.useEffect)(() => {
                            if (!i || !e)
                                return () => { }
                                    ;
                            let r = (...e) => {
                                n.current && n.current(...e)
                            }
                                ;
                            return e.on(t, r),
                                () => {
                                    e.off(t, r)
                                }
                        }
                            , [i, t, e, n])
            }
            , te = f.default.createContext(null);
        te.displayName = "ElementsContext";
        let tt = (e, t) => {
            if (!e)
                throw Error(`Could not find Elements context; You need to wrap the part of your app that ${t} in an <Elements> provider.`);
            return e
        }
            , tr = ({ stripe: e, options: t, children: r }) => {
                let i = f.default.useMemo(() => ta(e), [e])
                    , [n, a] = f.default.useState(() => ({
                        stripe: "sync" === i.tag ? i.stripe : null,
                        elements: "sync" === i.tag ? i.stripe.elements(t) : null
                    }));
                f.default.useEffect(() => {
                    let e = !0
                        , r = e => {
                            a(r => r.stripe ? r : {
                                stripe: e,
                                elements: e.elements(t)
                            })
                        }
                        ;
                    return "async" !== i.tag || n.stripe ? "sync" !== i.tag || n.stripe || r(i.stripe) : i.stripePromise.then(t => {
                        t && e && r(t)
                    }
                    ),
                        () => {
                            e = !1
                        }
                }
                    , [i, n, t]);
                let o = e7(e);
                f.default.useEffect(() => {
                    null !== o && o !== e && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                }
                    , [o, e]);
                let s = e7(t);
                return f.default.useEffect(() => {
                    if (!n.elements)
                        return;
                    let e = tu(t, s, ["clientSecret", "fonts"]);
                    e && n.elements.update(e)
                }
                    , [t, s, n.elements]),
                    f.default.createElement(te.Provider, {
                        value: n
                    }, r)
            }
            , ti = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."
            , tn = (e, t = ti) => {
                if (null === e || tl(e))
                    return e;
                throw Error(t)
            }
            , ta = (e, t = ti) => {
                if (ts(e))
                    return {
                        tag: "async",
                        stripePromise: Promise.resolve(e).then(e => tn(e, t))
                    };
                let r = tn(e, t);
                return null === r ? {
                    tag: "empty"
                } : {
                    tag: "sync",
                    stripe: r
                }
            }
            , to = e => null !== e && "object" == typeof e
            , ts = e => to(e) && "function" == typeof e.then
            , tl = e => to(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment
            , tu = (e, t, r) => to(e) ? Object.keys(e).reduce((i, n) => {
                let a = !to(t) || !td(e[n], t[n]);
                return r.includes(n) ? (a && console.warn(`Unsupported prop change: options.${n} is not a mutable property.`),
                    i) : a ? {
                        ...i || {},
                        [n]: e[n]
                    } : i
            }
                , null) : null
            , tc = "[object Object]"
            , td = (e, t) => {
                if (!to(e) || !to(t))
                    return e === t;
                let r = Array.isArray(e);
                if (r !== Array.isArray(t))
                    return !1;
                let i = Object.prototype.toString.call(e) === tc;
                if (i !== (Object.prototype.toString.call(t) === tc))
                    return !1;
                if (!i && !r)
                    return e === t;
                let n = Object.keys(e)
                    , a = Object.keys(t);
                if (n.length !== a.length)
                    return !1;
                let o = {};
                for (let e = 0; e < n.length; e += 1)
                    o[n[e]] = !0;
                for (let e = 0; e < a.length; e += 1)
                    o[a[e]] = !0;
                let s = Object.keys(o);
                return s.length === n.length && s.every(r => td(e[r], t[r]))
            }
            , tf = e => tt(f.default.useContext(te), e)
            , tg = (n = "payment",
                a = "u" < typeof window,
                r = `${n.charAt(0).toUpperCase() + n.slice(1)}Element`,
                (i = a ? e => {
                    tf(`mounts <${r}>`);
                    let { id: t, className: i } = e;
                    return f.default.createElement("div", {
                        id: t,
                        className: i
                    })
                }
                    : ({ id: e, className: t, fallback: i, options: a = {}, onBlur: o, onFocus: s, onReady: l, onChange: u, onEscape: c, onClick: d, onLoadError: g, onLoaderStart: p, onNetworksChange: h, onConfirm: m, onCancel: y, onShippingAddressChange: v, onShippingRateChange: b }) => {
                        let k, E = tf(`mounts <${r}>`), S = "elements" in E ? E.elements : null, [P, _] = f.default.useState(null), C = f.default.useRef(null), w = f.default.useRef(null), [R, O] = (0,
                            f.useState)(!1);
                        e9(P, "blur", o),
                            e9(P, "focus", s),
                            e9(P, "escape", c),
                            e9(P, "click", d),
                            e9(P, "loaderror", g),
                            e9(P, "loaderstart", p),
                            e9(P, "networkschange", h),
                            e9(P, "confirm", m),
                            e9(P, "cancel", y),
                            e9(P, "shippingaddresschange", v),
                            e9(P, "shippingratechange", b),
                            e9(P, "change", u),
                            l && (k = () => {
                                O(!0),
                                    l(P)
                            }
                            ),
                            e9(P, "ready", k),
                            f.default.useLayoutEffect(() => {
                                if (null === C.current && null !== w.current && S) {
                                    let e = null;
                                    S && (e = S.create(n, a)),
                                        C.current = e,
                                        _(e),
                                        e && e.mount(w.current)
                                }
                            }
                                , [S, a]);
                        let M = e7(a);
                        return f.default.useEffect(() => {
                            if (!C.current)
                                return;
                            let e = tu(a, M, ["paymentRequest"]);
                            e && "update" in C.current && C.current.update(e)
                        }
                            , [a, M]),
                            f.default.useLayoutEffect(() => () => {
                                if (C.current && "function" == typeof C.current.destroy)
                                    try {
                                        C.current.destroy(),
                                            C.current = null
                                    } catch { }
                            }
                                , []),
                            f.default.createElement(f.default.Fragment, null, !R && i, f.default.createElement("div", {
                                id: e,
                                style: {
                                    height: R ? "unset" : "0px",
                                    visibility: R ? "visible" : "hidden"
                                },
                                className: t,
                                ref: w
                            }))
                    }
                ).displayName = r,
                i.__elementType = n,
                i)
            , [tp, th] = eM("PaymentElementContext")
            , [tm, ty] = eM("StripeUtilsContext")
            , tv = ({ children: e }) => {
                let t = (() => {
                    let { stripe: e } = tf("calls useStripe()");
                    return e
                }
                )()
                    , r = (() => {
                        let { elements: e } = tt(f.default.useContext(te), "calls useElements()");
                        return e
                    }
                    )();
                return f.default.createElement(tm.Provider, {
                    value: {
                        value: {
                            stripe: t,
                            elements: r
                        }
                    }
                }, e)
            }
            , tb = ({ children: e }) => f.default.createElement(tm.Provider, {
                value: {
                    value: {}
                }
            }, e)
            , tk = ({ children: e, ...t }) => {
                let r = ((e = "user") => {
                    let t, r = (t = eQ(),
                        ef("clerk-stripe-sdk", async () => ({
                            loadStripe: await t.__internal_loadStripeJs()
                        }), {
                            keepPreviousData: !0,
                            revalidateOnFocus: !1,
                            dedupingInterval: 1 / 0
                        }).data ?? null), i = eQ().__unstable__environment, { initializedPaymentMethod: n, initializePaymentMethod: a } = function (e) {
                            let { for: t = "user" } = e ?? {}
                                , { organization: r } = eF()
                                , i = eL()
                                , n = "organization" === t ? r : i
                                , { data: a, trigger: o } = eR(n?.id ? {
                                    key: "billing-payment-method-initialize",
                                    resourceId: n.id,
                                    for: t
                                } : null, () => n?.initializePaymentMethod({
                                    gateway: "stripe"
                                }));
                            return (0,
                                f.useEffect)(() => {
                                    n?.id && o().catch(() => { }
                                    )
                                }
                                    , [n?.id, o]),
                            {
                                initializedPaymentMethod: a,
                                initializePaymentMethod: o
                            }
                        }({
                            for: e
                        }), o = i?.commerceSettings.billing.stripePublishableKey ?? void 0;
                    return {
                        stripe: function (e) {
                            let { stripeClerkLibs: t, externalGatewayId: r, stripePublishableKey: i } = e;
                            return ef(t && r && i ? {
                                key: "stripe-sdk",
                                externalGatewayId: r,
                                stripePublishableKey: i
                            } : null, ({ stripePublishableKey: e, externalGatewayId: r }) => t?.loadStripe(e, {
                                stripeAccount: r
                            }), {
                                keepPreviousData: !0,
                                revalidateOnFocus: !1,
                                dedupingInterval: 6e4
                            }).data
                        }({
                            stripeClerkLibs: r,
                            externalGatewayId: n?.externalGatewayId,
                            stripePublishableKey: o
                        }),
                        initializePaymentMethod: a,
                        externalClientSecret: n?.externalClientSecret,
                        paymentMethodOrder: n?.paymentMethodOrder
                    }
                }
                )(t.for)
                    , [i, n] = (0,
                        f.useState)(!1);
                return f.default.createElement(tp.Provider, {
                    value: {
                        value: {
                            ...t,
                            ...r,
                            setIsPaymentElementReady: n,
                            isPaymentElementReady: i
                        }
                    }
                }, e)
            }
            , tE = e => {
                let { stripe: t, externalClientSecret: r, stripeAppearance: i } = th()
                    , n = (() => {
                        let e = eQ()
                            , t = "en";
                        try {
                            t = e.__internal_getOption("localization")?.locale || "en"
                        } catch { }
                        return t.split("-")[0]
                    }
                    )();
                return t && r ? f.default.createElement(tr, {
                    key: r,
                    stripe: t,
                    options: {
                        loader: "never",
                        clientSecret: r,
                        appearance: {
                            variables: i
                        },
                        locale: n
                    }
                }, f.default.createElement(tv, null, e.children)) : f.default.createElement(tb, null, e.children)
            }
            , tS = () => {
                throw Error("Clerk: Unable to submit, Stripe libraries are not yet loaded. Be sure to check `isFormReady` before calling `submit`.")
            }
            ;
        e.s(["ClerkInstanceContext", 0, eI, "ClientContext", 0, eD, "OrganizationProvider", 0, ({ children: e, organization: t, swrConfig: r }) => f.default.createElement(ez, {
            swrConfig: r
        }, f.default.createElement(eK.Provider, {
            value: {
                value: {
                    organization: t
                }
            }
        }, e)), "SessionContext", 0, eN, "UserContext", 0, ex, "__experimental_CheckoutProvider", 0, ({ children: e, ...t }) => f.default.createElement(eU.Provider, {
            value: {
                value: t
            }
        }, e), "__experimental_PaymentElement", 0, ({ fallback: e }) => {
            let { setIsPaymentElementReady: t, paymentMethodOrder: r, checkout: i, stripe: n, externalClientSecret: a, paymentDescription: o, for: s } = th()
                , l = eQ().__unstable__environment
                , u = (0,
                    f.useMemo)(() => {
                        if (i && i.totals && i.plan)
                            return {
                                recurringPaymentRequest: {
                                    paymentDescription: o || "",
                                    managementURL: "organization" === s ? l?.displayConfig.organizationProfileUrl || "" : l?.displayConfig.userProfileUrl || "",
                                    regularBilling: {
                                        amount: i.totals.totalDueNow?.amount || i.totals.grandTotal.amount,
                                        label: i.plan.name,
                                        recurringPaymentIntervalUnit: "annual" === i.planPeriod ? "year" : "month"
                                    }
                                }
                            }
                    }
                        , [i, o, s, l])
                , c = (0,
                    f.useMemo)(() => ({
                        layout: {
                            type: "tabs",
                            defaultCollapsed: !1
                        },
                        paymentMethodOrder: r,
                        applePay: u
                    }), [u, r])
                , d = (0,
                    f.useCallback)(() => {
                        t(!0)
                    }
                        , [t]);
            return n && a ? f.default.createElement(tg, {
                fallback: e,
                onReady: d,
                options: c
            }) : f.default.createElement(f.default.Fragment, null, e)
        }
            , "__experimental_PaymentElementProvider", 0, ({ children: e, ...t }) => f.default.createElement(tk, t, f.default.createElement(tE, null, e)), "__experimental_useCheckout", 0, e => {
                let t = eV()
                    , { for: r, planId: i, planPeriod: n } = e || t
                    , a = eQ()
                    , { organization: o } = eF()
                    , { isLoaded: s, user: l } = e5();
                if (!s)
                    throw Error("Clerk: Ensure that `useCheckout` is inside a component wrapped with `<ClerkLoaded />`.");
                if (!l)
                    throw Error("Clerk: Ensure that `useCheckout` is inside a component wrapped with `<SignedIn />`.");
                if ("organization" === r && !o)
                    throw Error("Clerk: Ensure your flow checks for an active organization. Retrieve `orgId` from `useAuth()` and confirm it is defined. For SSR, see: https://clerk.com/docs/reference/backend/types/auth-object#how-to-access-the-auth-object");
                let u = (0,
                    f.useMemo)(() => a.__experimental_checkout({
                        planId: i,
                        planPeriod: n,
                        for: r
                    }), [l.id, o?.id, i, n, r])
                    , c = (0,
                        f.useSyncExternalStore)(e => u.subscribe(e), () => u.getState(), () => u.getState());
                return {
                    checkout: {
                        ...(0,
                            f.useMemo)(() => {
                                if (!c.checkout)
                                    return {
                                        id: null,
                                        externalClientSecret: null,
                                        externalGatewayId: null,
                                        totals: null,
                                        isImmediatePlanChange: null,
                                        planPeriod: null,
                                        plan: null,
                                        paymentMethod: null,
                                        freeTrialEndsAt: null,
                                        payer: null,
                                        needsPaymentMethod: null,
                                        planPeriodStart: null
                                    };
                                let { reload: e, confirm: t, pathRoot: r, ...i } = c.checkout;
                                return i
                            }
                                , [c.checkout]),
                        getState: u.getState,
                        start: u.start,
                        confirm: u.confirm,
                        clear: u.clear,
                        finalize: u.finalize,
                        isStarting: c.isStarting,
                        isConfirming: c.isConfirming,
                        error: c.error,
                        status: c.status,
                        fetchStatus: c.fetchStatus
                    }
                }
            }
            , "__experimental_usePaymentElement", 0, () => {
                let { isPaymentElementReady: e, initializePaymentMethod: t } = th()
                    , { stripe: r, elements: i } = ty()
                    , { externalClientSecret: n } = th()
                    , a = (0,
                        f.useCallback)(async () => {
                            if (!r || !i)
                                return tS();
                            let { setupIntent: e, error: t } = await r.confirmSetup({
                                elements: i,
                                confirmParams: {
                                    return_url: window.location.href
                                },
                                redirect: "if_required"
                            });
                            return t ? {
                                data: null,
                                error: {
                                    gateway: "stripe",
                                    error: {
                                        code: t.code,
                                        message: t.message,
                                        type: t.type
                                    }
                                }
                            } : {
                                data: {
                                    gateway: "stripe",
                                    paymentToken: e.payment_method
                                },
                                error: null
                            }
                        }
                            , [r, i])
                    , o = (0,
                        f.useCallback)(async () => {
                            if (!r || !i)
                                return tS();
                            await t()
                        }
                            , [r, i, t])
                    , s = !!(r && n);
                return s ? {
                    submit: a,
                    reset: o,
                    isFormReady: e,
                    provider: {
                        name: "stripe"
                    },
                    isProviderReady: s
                } : {
                    submit: tS,
                    reset: tS,
                    isFormReady: !1,
                    provider: void 0,
                    isProviderReady: !1
                }
            }
            , "createContextAndHook", 0, eM, "isDeeplyEqual", 0, eC, "useAssertWrappedByClerkProvider", 0, e$, "useClerk", 0, eQ, "useClerkInstanceContext", 0, eT, "useClientContext", 0, eA, "useOrganization", 0, function (e) {
                let { domains: t, membershipRequests: r, memberships: i, invitations: n } = e || {};
                e$("useOrganization"),
                    eZ("useOrganization");
                let { organization: a } = eF()
                    , o = ej()
                    , s = eB(t, {
                        initialPage: 1,
                        pageSize: 10,
                        keepPreviousData: !1,
                        infinite: !1,
                        enrollmentMode: void 0
                    })
                    , l = eB(r, {
                        initialPage: 1,
                        pageSize: 10,
                        status: "pending",
                        keepPreviousData: !1,
                        infinite: !1
                    })
                    , u = eB(i, {
                        initialPage: 1,
                        pageSize: 10,
                        role: void 0,
                        keepPreviousData: !1,
                        infinite: !1,
                        query: void 0
                    })
                    , f = eB(n, {
                        initialPage: 1,
                        pageSize: 10,
                        status: ["pending"],
                        keepPreviousData: !1,
                        infinite: !1
                    })
                    , g = eT();
                g.telemetry?.record((0,
                    d.eventMethodCalled)("useOrganization"));
                let p = void 0 === t ? void 0 : {
                    initialPage: s.initialPage,
                    pageSize: s.pageSize,
                    enrollmentMode: s.enrollmentMode
                }
                    , h = void 0 === r ? void 0 : {
                        initialPage: l.initialPage,
                        pageSize: l.pageSize,
                        status: l.status
                    }
                    , m = void 0 === i ? void 0 : {
                        initialPage: u.initialPage,
                        pageSize: u.pageSize,
                        role: u.role,
                        query: u.query
                    }
                    , y = void 0 === n ? void 0 : {
                        initialPage: f.initialPage,
                        pageSize: f.pageSize,
                        status: f.status
                    }
                    , v = eY({
                        fetcher: a?.getDomains,
                        config: {
                            keepPreviousData: s.keepPreviousData,
                            infinite: s.infinite,
                            enabled: !!p,
                            isSignedIn: !!a,
                            initialPage: s.initialPage,
                            pageSize: s.pageSize
                        },
                        keys: eq({
                            stablePrefix: "domains",
                            authenticated: !!a,
                            tracked: {
                                organizationId: a?.id
                            },
                            untracked: {
                                args: p
                            }
                        })
                    })
                    , b = eY({
                        fetcher: a?.getMembershipRequests,
                        config: {
                            keepPreviousData: l.keepPreviousData,
                            infinite: l.infinite,
                            enabled: !!h,
                            isSignedIn: !!a,
                            initialPage: l.initialPage,
                            pageSize: l.pageSize
                        },
                        keys: eq({
                            stablePrefix: "membershipRequests",
                            authenticated: !!a,
                            tracked: {
                                organizationId: a?.id
                            },
                            untracked: {
                                args: h
                            }
                        })
                    })
                    , k = eY({
                        fetcher: a?.getMemberships,
                        config: {
                            keepPreviousData: u.keepPreviousData,
                            infinite: u.infinite,
                            enabled: !!m,
                            isSignedIn: !!a,
                            initialPage: u.initialPage,
                            pageSize: u.pageSize
                        },
                        keys: eq({
                            stablePrefix: "memberships",
                            authenticated: !!a,
                            tracked: {
                                organizationId: a?.id
                            },
                            untracked: {
                                args: m
                            }
                        })
                    })
                    , E = eY({
                        fetcher: a?.getInvitations,
                        config: {
                            keepPreviousData: f.keepPreviousData,
                            infinite: f.infinite,
                            enabled: !!y,
                            isSignedIn: !!a,
                            initialPage: f.initialPage,
                            pageSize: f.pageSize
                        },
                        keys: eq({
                            stablePrefix: "invitations",
                            authenticated: !!a,
                            tracked: {
                                organizationId: a?.id
                            },
                            untracked: {
                                args: y
                            }
                        })
                    });
                return void 0 === a ? {
                    isLoaded: !1,
                    organization: void 0,
                    membership: void 0,
                    domains: eX,
                    membershipRequests: eX,
                    memberships: eX,
                    invitations: eX
                } : null === a ? {
                    isLoaded: !0,
                    organization: null,
                    membership: null,
                    domains: null,
                    membershipRequests: null,
                    memberships: null,
                    invitations: null
                } : !g.loaded && a ? {
                    isLoaded: !0,
                    organization: a,
                    membership: void 0,
                    domains: eX,
                    membershipRequests: eX,
                    memberships: eX,
                    invitations: eX
                } : {
                    isLoaded: g.loaded,
                    organization: a,
                    membership: (0,
                        c.getCurrentOrganizationMembership)(o.user.organizationMemberships, a.id),
                    domains: v,
                    membershipRequests: b,
                    memberships: k,
                    invitations: E
                }
            }
            , "useOrganizationCreationDefaults", 0, function (e = {}) {
                let { keepPreviousData: t = !0, enabled: r = !0 } = e
                    , i = eT()
                    , n = eL()
                    , a = i.__unstable__environment?.organizationSettings?.organizationCreationDefaults?.enabled ?? !1;
                i.telemetry?.record((0,
                    d.eventMethodCalled)("useOrganizationCreationDefaults"));
                let { queryKey: o } = function (e) {
                    let { userId: t } = e;
                    return (0,
                        f.useMemo)(() => eq({
                            stablePrefix: "organizationCreationDefaults",
                            authenticated: !!t,
                            tracked: {
                                userId: t ?? null
                            },
                            untracked: {
                                args: {}
                            }
                        }), [t])
                }({
                    userId: n?.id ?? null
                })
                    , s = ef(n && r && a && i.loaded ? o : null, () => {
                        if (!n)
                            throw Error("User is required to fetch organization creation defaults");
                        return n.getOrganizationCreationDefaults()
                    }
                        , {
                            dedupingInterval: 6e4,
                            keepPreviousData: t
                        });
                return {
                    data: s.data,
                    error: s.error ?? null,
                    isLoading: s.isLoading,
                    isFetching: s.isValidating
                }
            }
            , "useOrganizationList", 0, function (e) {
                let { userMemberships: t, userInvitations: r, userSuggestions: i } = e || {};
                e$("useOrganizationList"),
                    eZ("useOrganizationList");
                let n = eB(t, {
                    initialPage: 1,
                    pageSize: 10,
                    keepPreviousData: !1,
                    infinite: !1
                })
                    , a = eB(r, {
                        initialPage: 1,
                        pageSize: 10,
                        status: "pending",
                        keepPreviousData: !1,
                        infinite: !1
                    })
                    , o = eB(i, {
                        initialPage: 1,
                        pageSize: 10,
                        status: "pending",
                        keepPreviousData: !1,
                        infinite: !1
                    })
                    , s = eT()
                    , l = eL();
                s.telemetry?.record((0,
                    d.eventMethodCalled)("useOrganizationList"));
                let u = void 0 === t ? void 0 : {
                    initialPage: n.initialPage,
                    pageSize: n.pageSize
                }
                    , c = void 0 === r ? void 0 : {
                        initialPage: a.initialPage,
                        pageSize: a.pageSize,
                        status: a.status
                    }
                    , f = void 0 === i ? void 0 : {
                        initialPage: o.initialPage,
                        pageSize: o.pageSize,
                        status: o.status
                    }
                    , g = !!(s.loaded && l)
                    , p = eY({
                        fetcher: l?.getOrganizationMemberships,
                        config: {
                            keepPreviousData: n.keepPreviousData,
                            infinite: n.infinite,
                            enabled: !!u,
                            isSignedIn: !!l,
                            initialPage: n.initialPage,
                            pageSize: n.pageSize
                        },
                        keys: eq({
                            stablePrefix: "userMemberships",
                            authenticated: !!l,
                            tracked: {
                                userId: l?.id
                            },
                            untracked: {
                                args: u
                            }
                        })
                    })
                    , h = eY({
                        fetcher: l?.getOrganizationInvitations,
                        config: {
                            keepPreviousData: a.keepPreviousData,
                            infinite: a.infinite,
                            enabled: !!c,
                            isSignedIn: !!l,
                            initialPage: a.initialPage,
                            pageSize: a.pageSize
                        },
                        keys: eq({
                            stablePrefix: "userInvitations",
                            authenticated: !!l,
                            tracked: {
                                userId: l?.id
                            },
                            untracked: {
                                args: c
                            }
                        })
                    })
                    , m = eY({
                        fetcher: l?.getOrganizationSuggestions,
                        config: {
                            keepPreviousData: o.keepPreviousData,
                            infinite: o.infinite,
                            enabled: !!f,
                            isSignedIn: !!l,
                            initialPage: o.initialPage,
                            pageSize: o.pageSize
                        },
                        keys: eq({
                            stablePrefix: "userSuggestions",
                            authenticated: !!l,
                            tracked: {
                                userId: l?.id
                            },
                            untracked: {
                                args: f
                            }
                        })
                    });
                return g ? {
                    isLoaded: g,
                    setActive: s.setActive,
                    createOrganization: s.createOrganization,
                    userMemberships: p,
                    userInvitations: h,
                    userSuggestions: m
                } : {
                    isLoaded: !1,
                    createOrganization: void 0,
                    setActive: void 0,
                    userMemberships: e0,
                    userInvitations: e0,
                    userSuggestions: e0
                }
            }
            , "useReverification", 0, (e, t) => {
                let { __internal_openReverification: r, telemetry: i } = eQ()
                    , n = (0,
                        f.useRef)(e)
                    , a = (0,
                        f.useRef)(t);
                return i?.record((0,
                    d.eventMethodCalled)("useReverification", {
                        onNeedsReverification: !!t?.onNeedsReverification
                    })),
                    e1(() => {
                        n.current = e,
                            a.current = t
                    }
                    ),
                    (0,
                        f.useCallback)((...e) => {
                            var t;
                            return (t = {
                                openUIComponent: r,
                                telemetry: i,
                                ...a.current
                            },
                                function (e) {
                                    return async (...r) => {
                                        let i = await e6(e(...r));
                                        if ((0,
                                            o.isReverificationHint)(i)) {
                                            let n = (0,
                                                u.createDeferredPromise)()
                                                , a = (0,
                                                    s.validateReverificationConfig)(i.clerk_error.metadata?.reverification)
                                                , o = a ? a().level : void 0
                                                , c = () => {
                                                    n.reject(new l.ClerkRuntimeError("User cancelled attempted verification", {
                                                        code: "reverification_cancelled"
                                                    }))
                                                }
                                                , d = () => {
                                                    n.resolve(!0)
                                                }
                                                ;
                                            void 0 === t.onNeedsReverification ? t.openUIComponent?.({
                                                level: o,
                                                afterVerification: d,
                                                afterVerificationCancelled: c
                                            }) : t.onNeedsReverification({
                                                cancel: c,
                                                complete: d,
                                                level: o
                                            }),
                                                await n.promise,
                                                i = await e6(e(...r))
                                        }
                                        return i
                                    }
                                }
                            )(n.current)(...e)
                        }
                            , [r, i])
            }
            , "useSession", 0, () => {
                e$(e2);
                let e = ej()
                    , t = eT();
                return (t.telemetry?.record((0,
                    d.eventMethodCalled)(e2)),
                    void 0 === e) ? {
                    isLoaded: !1,
                    isSignedIn: void 0,
                    session: void 0
                } : null === e ? {
                    isLoaded: !0,
                    isSignedIn: !1,
                    session: null
                } : {
                    isLoaded: !0,
                    isSignedIn: t.isSignedIn,
                    session: e
                }
            }
            , "useSessionContext", 0, ej, "useSessionList", 0, () => {
                e$(e4);
                let e = eT()
                    , t = eA();
                return (eT().telemetry?.record((0,
                    d.eventMethodCalled)(e4)),
                    t) ? {
                    isLoaded: !0,
                    sessions: t.sessions,
                    setActive: e.setActive
                } : {
                    isLoaded: !1,
                    sessions: void 0,
                    setActive: void 0
                }
            }
            , "useUser", 0, e5], 27085)
    }
]);
