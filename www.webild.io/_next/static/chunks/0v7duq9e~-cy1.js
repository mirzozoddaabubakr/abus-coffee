(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 61733, e => {
    "use strict";
    var t = e.i(43476)
        , a = e.i(932)
        , l = e.i(71645);
    let s = (0,
        l.createContext)(void 0);
    function i(e) {
        let i, r, n, c = (0,
            a.c)(8), { children: o } = e, [d, m] = (0,
                l.useState)(!1), u = (0,
                    l.useRef)(null), f = (0,
                        l.useRef)(null);
        c[0] !== d ? (i = e => !!d || (e(),
            !1),
            c[0] = d,
            c[1] = i) : i = c[1];
        let x = i;
        return c[2] !== x || c[3] !== d ? (r = {
            hasUnsavedChanges: d,
            setHasUnsavedChanges: m,
            checkUnsavedChangesOnNavigate: x,
            saveActionRef: u,
            cancelActionRef: f
        },
            c[2] = x,
            c[3] = d,
            c[4] = r) : r = c[4],
            c[5] !== o || c[6] !== r ? (n = (0,
                t.jsx)(s.Provider, {
                    value: r,
                    children: o
                }),
                c[5] = o,
                c[6] = r,
                c[7] = n) : n = c[7],
            n
    }
    function r() {
        let e = (0,
            l.useContext)(s);
        if (!e)
            throw Error("useUnsavedChanges must be used within UnsavedChangesProvider");
        return e
    }
    var n = e.i(27085)
        , c = e.i(37727)
        , o = e.i(73375)
        , d = e.i(21742)
        , m = e.i(75157)
        , u = e.i(19599);
    let f = e => {
        let l, s, i, r = (0,
            a.c)(5), { className: n } = e;
        return r[0] !== n ? (l = (0,
            m.cls)("relative flex items-center justify-center py-20 w-full button-secondary rounded-extra-sm", n),
            r[0] = n,
            r[1] = l) : l = r[1],
            r[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0,
                t.jsx)(u.default, {}),
                r[2] = s) : s = r[2],
            r[3] !== l ? (i = (0,
                t.jsx)("div", {
                    className: l,
                    children: s
                }),
                r[3] = l,
                r[4] = i) : i = r[4],
            i
    }
        ;
    var x = e.i(67082)
        , h = e.i(76025)
        , p = e.i(16945)
        , N = e.i(14764)
        , g = e.i(75254);
    let j = (0,
        g.default)("receipt-text", [["path", {
            d: "M13 16H8",
            key: "wsln4y"
        }], ["path", {
            d: "M14 8H8",
            key: "1l3xfs"
        }], ["path", {
            d: "M16 12H8",
            key: "1fr5h0"
        }], ["path", {
            d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
            key: "ycz6yz"
        }]])
        , S = [{
            id: "account",
            label: "Account",
            icon: (0,
                g.default)("circle-user", [["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }], ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3",
                    key: "ilqhr7"
                }], ["path", {
                    d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
                    key: "154egf"
                }]])
        }, {
            id: "general-domains",
            label: "Domains",
            icon: e.i(48256).Globe
        }, {
            id: "billing",
            label: "Plans and Billings",
            icon: N.Send
        }, {
            id: "invoices",
            label: "Invoices",
            icon: j
        }];
    var b = e.i(85203);
    let y = e => {
        let l, s, i, r, n, c, o, u, f = (0,
            a.c)(27), { label: x, type: h, value: p, placeholder: N, isEditing: g, onEdit: j, onChange: S, disabled: b, className: y, showEditButton: _, boxClassName: C } = e, v = void 0 === h ? "text" : h, w = void 0 !== b && b, I = void 0 === _ || _;
        f[0] !== x ? (l = (0,
            t.jsx)("label", {
                className: "block text-sm font-medium text-black",
                children: x
            }),
            f[0] = x,
            f[1] = l) : l = f[1],
            f[2] !== C ? (s = (0,
                m.cls)("flex items-center gap-5 w-full md:w-6/10", C),
                f[2] = C,
                f[3] = s) : s = f[3],
            f[4] !== S ? (i = e => S?.(e.target.value),
                f[4] = S,
                f[5] = i) : i = f[5],
            f[6] !== y ? (r = (0,
                m.cls)("relative h-9 flex-1 w-full px-5 text-sm text-black placeholder:text-black/75 focus:outline-none transition-colors", y),
                f[6] = y,
                f[7] = r) : r = f[7];
        let T = !g;
        return f[8] !== N || f[9] !== i || f[10] !== r || f[11] !== T || f[12] !== v || f[13] !== p ? (n = (0,
            t.jsx)("div", {
                className: "relative flex-1 w-full card rounded-extra-sm transition-all overflow-hidden",
                children: (0,
                    t.jsx)("input", {
                        type: v,
                        value: p,
                        onChange: i,
                        className: r,
                        placeholder: N,
                        disabled: T
                    })
            }),
            f[8] = N,
            f[9] = i,
            f[10] = r,
            f[11] = T,
            f[12] = v,
            f[13] = p,
            f[14] = n) : n = f[14],
            f[15] !== w || f[16] !== g || f[17] !== j || f[18] !== I ? (c = I && (0,
                t.jsx)(d.default, {
                    onClick: j,
                    disabled: w,
                    className: "h-9 px-10",
                    children: g ? "Save" : "Edit"
                }),
                f[15] = w,
                f[16] = g,
                f[17] = j,
                f[18] = I,
                f[19] = c) : c = f[19],
            f[20] !== c || f[21] !== s || f[22] !== n ? (o = (0,
                t.jsxs)("div", {
                    className: s,
                    children: [n, c]
                }),
                f[20] = c,
                f[21] = s,
                f[22] = n,
                f[23] = o) : o = f[23],
            f[24] !== o || f[25] !== l ? (u = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [l, o]
                }),
                f[24] = o,
                f[25] = l,
                f[26] = u) : u = f[26],
            u
    }
        ;
    var _ = e.i(28853)
        , C = e.i(26288)
        , v = e.i(85710)
        , w = e.i(77776)
        , I = e.i(10757);
    let T = () => {
        let e, l, s = (0,
            a.c)(2);
        if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = Symbol.for("react.early_return_sentinel");
            e: {
                let a = C.sessionStorageUtils.getLimits();
                if (!a || "free" === a.plan || !v.billingStorage.getPlanByCode(a.plan)) {
                    l = null;
                    break e
                }
                let s = a.period?.start ? new Date(a.period.start).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }) : null
                    , i = v.billingStorage.getCharges()?.sort(A)[0];
                e = (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)(_.default, {}), (0,
                                t.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0,
                                        t.jsx)("h2", {
                                            className: "text-sm font-medium text-black",
                                            children: I.ACCOUNT_STRINGS.subscription.title
                                        }), (0,
                                            t.jsxs)("div", {
                                                className: "flex flex-col gap-5 p-5 w-full rounded-extra-sm card",
                                                children: [(0,
                                                    t.jsxs)("div", {
                                                        className: "flex flex-col",
                                                        children: [(0,
                                                            t.jsx)("span", {
                                                                className: "text-sm font-medium text-black",
                                                                children: (0,
                                                                    w.getPlanDisplayName)(a.plan)
                                                            }), s && (0,
                                                                t.jsxs)("p", {
                                                                    className: "text-sm text-black/75",
                                                                    children: [I.ACCOUNT_STRINGS.subscription.subscribedSince, " ", s]
                                                                })]
                                                    }), i?.receiptUrl && (0,
                                                        t.jsx)(d.default, {
                                                            onClick: () => window.open(i.receiptUrl, "_blank"),
                                                            className: "w-fit",
                                                            children: I.ACCOUNT_STRINGS.subscription.downloadReceipt
                                                        })]
                                            })]
                                })]
                    })
            }
            s[0] = e,
                s[1] = l
        } else
            e = s[0],
                l = s[1];
        return l !== Symbol.for("react.early_return_sentinel") ? l : e
    }
        ;
    function A(e, t) {
        return t.created - e.created
    }
    let E = e => {
        let l, s, i = (0,
            a.c)(3), { onSetNewPassword: r } = e;
        return i[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
            t.jsxs)("div", {
                children: [(0,
                    t.jsx)("h3", {
                        className: "text-sm font-medium text-black",
                        children: I.ACCOUNT_STRINGS.passwordSection.title
                    }), (0,
                        t.jsx)("p", {
                            className: "text-sm text-black/75",
                            children: I.ACCOUNT_STRINGS.passwordSection.description
                        })]
            }),
            i[0] = l) : l = i[0],
            i[1] !== r ? (s = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [l, (0,
                        t.jsx)(d.default, {
                            onClick: r,
                            className: "w-fit",
                            styleClassName: "card",
                            children: I.ACCOUNT_STRINGS.passwordSection.changePassword
                        })]
                }),
                i[1] = r,
                i[2] = s) : s = i[2],
            s
    }
        ;
    var k = e.i(90089)
        , P = e.i(46696);
    let O = e => {
        let s, i, r, n, c, o, m, u, f, x = (0,
            a.c)(16), { imageUrl: h, onChangePhoto: p, onRemovePhoto: N } = e, g = (0,
                l.useRef)(null);
        x[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
            g.current?.click()
        }
            ,
            x[0] = s) : s = x[0];
        let j = s;
        x[1] !== p ? (i = e => {
            let t = e.target.files?.[0];
            if (t) {
                if (!t.type.startsWith("image/"))
                    return void P.toast.error(I.ACCOUNT_STRINGS.profilePhoto.selectImageError);
                if (t.size > 5242880)
                    return void P.toast.warning(I.ACCOUNT_STRINGS.profilePhoto.fileSizeError);
                p(t)
            }
        }
            ,
            x[1] = p,
            x[2] = i) : i = x[2];
        let S = i;
        return x[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0,
            t.jsx)("h2", {
                className: "text-lg font-medium leading-snug text-black",
                children: I.ACCOUNT_STRINGS.profilePhoto.title
            }),
            n = (0,
                t.jsx)(_.default, {}),
            x[3] = r,
            x[4] = n) : (r = x[3],
                n = x[4]),
            x[5] !== h ? (c = (0,
                t.jsx)(k.default, {
                    user: {
                        imageUrl: h
                    },
                    onClick: j,
                    className: "aspect-square h-16 w-auto"
                }),
                x[5] = h,
                x[6] = c) : c = x[6],
            x[7] !== S ? (o = (0,
                t.jsx)("input", {
                    ref: g,
                    type: "file",
                    accept: "image/*",
                    onChange: S,
                    className: "hidden"
                }),
                x[7] = S,
                x[8] = o) : o = x[8],
            x[9] === Symbol.for("react.memo_cache_sentinel") ? (m = (0,
                t.jsx)(d.default, {
                    styleClassName: "card",
                    onClick: j,
                    children: I.ACCOUNT_STRINGS.profilePhoto.changePhoto
                }),
                x[9] = m) : m = x[9],
            x[10] !== N ? (u = (0,
                t.jsx)(d.default, {
                    styleClassName: "transparent px-0 h-fit",
                    onClick: N,
                    children: I.ACCOUNT_STRINGS.profilePhoto.remove
                }),
                x[10] = N,
                x[11] = u) : u = x[11],
            x[12] !== c || x[13] !== o || x[14] !== u ? (f = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-5",
                    children: [r, n, (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-5",
                            children: [c, o, m, u]
                        })]
                }),
                x[12] = c,
                x[13] = o,
                x[14] = u,
                x[15] = f) : f = x[15],
            f
    }
        ;
    var R = e.i(78894)
        , L = e.i(41101);
    let D = e => {
        let l, s = (0,
            a.c)(5), { isVisible: i, onSave: r, onExit: n, isSaving: c } = e, o = void 0 !== c && c;
        return s[0] !== o || s[1] !== i || s[2] !== n || s[3] !== r ? (l = (0,
            t.jsx)(L.default, {
                isVisible: i,
                onCancel: n,
                onConfirm: r,
                title: I.ACCOUNT_STRINGS.unsavedChanges.title,
                description: I.ACCOUNT_STRINGS.unsavedChanges.description,
                icon: R.AlertTriangle,
                cancelText: I.ACCOUNT_STRINGS.unsavedChanges.exitButton,
                confirmText: I.ACCOUNT_STRINGS.unsavedChanges.saveButton,
                isLoading: o,
                loadingText: I.ACCOUNT_STRINGS.unsavedChanges.savingText,
                className: "md:w-25 2xl:w-30",
                zIndex: "z-[60]"
            }),
            s[0] = o,
            s[1] = i,
            s[2] = n,
            s[3] = r,
            s[4] = l) : l = s[4],
            l
    }
        ;
    var F = e.i(52066)
        , U = e.i(11519)
        , B = e.i(84958);
    let G = e => {
        let l, s = (0,
            a.c)(1), { isUltraPlan: i } = e;
        return i ? null : (s[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
            t.jsxs)("div", {
                className: "relative flex flex-col md:flex-row md:items-center justify-between gap-3 p-5 w-full button-accent rounded",
                children: [(0,
                    t.jsxs)("p", {
                        className: "text-base text-white",
                        children: [B.UPGRADE_BANNER.TITLE, " ", (0,
                            t.jsx)("span", {
                                className: "font-semibold",
                                children: B.UPGRADE_BANNER.PLAN_NAME
                            })]
                    }), (0,
                        t.jsx)(d.default, {
                            onClick: M,
                            className: "w-fit",
                            children: B.UPGRADE_BANNER.BUTTON_LABEL
                        })]
            }),
            s[0] = l) : l = s[0],
            l)
    }
        ;
    function M() {
        return U.useModalStore.getState().openModal("pricing")
    }
    function V(e) {
        return !e
    }
    function W(e) {
        let t = Math.floor(e / 60);
        return `${t}:${(e % 60).toString().padStart(2, "0")}`
    }
    let $ = e => {
        let s, i, r, n, c, o, m, u, f, h, p, N, g, j, S = (0,
            a.c)(51), { isVisible: b, onCancel: y, onConfirm: C, onResend: v, isVerifying: w, isResending: T, title: A, description: E, email: k, isOTP: P } = e, O = void 0 !== w && w, R = void 0 !== T && T, L = void 0 !== P && P;
        S[0] !== L || S[1] !== b || S[2] !== C || S[3] !== v ? (s = {
            isVisible: b,
            isOTP: L,
            onConfirm: C,
            onResend: v
        },
            S[0] = L,
            S[1] = b,
            S[2] = C,
            S[3] = v,
            S[4] = s) : s = S[4];
        let { code: D, setCode: F, otp: U, canResend: B, inputsRef: G, isSubmitDisabled: M, handleOtpChange: $, handleOtpKeyDown: z, handleOtpPaste: Y, handleResend: q, handleSubmit: H } = (e => {
            let t, s, i, r, n, c, o, d, m, u, f, x, h = (0,
                a.c)(36), { isVisible: p, isOTP: N, onConfirm: g, onResend: j } = e, [S, b] = (0,
                    l.useState)("");
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (t = Array(6).fill(""),
                h[0] = t) : t = h[0];
            let [y, _] = (0,
                l.useState)(t)
                , [C, v] = (0,
                    l.useState)(30)
                , [w, I] = (0,
                    l.useState)(!1);
            h[1] === Symbol.for("react.memo_cache_sentinel") ? (s = [],
                h[1] = s) : s = h[1];
            let T = (0,
                l.useRef)(s)
                , A = (0,
                    l.useRef)(null);
            h[2] === Symbol.for("react.memo_cache_sentinel") ? (i = e => {
                A.current && clearInterval(A.current),
                    v(e),
                    I(!1),
                    A.current = setInterval(() => {
                        v(e => e <= 1 ? (I(!0),
                            A.current && clearInterval(A.current),
                            0) : e - 1)
                    }
                        , 1e3)
            }
                ,
                h[2] = i) : i = h[2];
            let E = i;
            h[3] !== N || h[4] !== p ? (r = () => (p && (b(""),
                _(Array(6).fill("")),
                E(30),
                N && setTimeout(() => T.current[0]?.focus(), 100)),
                () => {
                    A.current && clearInterval(A.current)
                }
            ),
                n = [p, N, E],
                h[3] = N,
                h[4] = p,
                h[5] = r,
                h[6] = n) : (r = h[5],
                    n = h[6]),
                (0,
                    l.useEffect)(r, n),
                h[7] !== y ? (c = (e, t) => {
                    if (isNaN(Number(e.value)))
                        return;
                    let a = [...y];
                    a[t] = e.value,
                        _(a),
                        e.value && t < 5 && T.current[t + 1]?.focus()
                }
                    ,
                    h[7] = y,
                    h[8] = c) : c = h[8];
            let k = c;
            h[9] !== y ? (o = (e, t) => {
                "Backspace" === e.key && !y[t] && t > 0 && T.current[t - 1]?.focus()
            }
                ,
                h[9] = y,
                h[10] = o) : o = h[10];
            let P = o;
            h[11] !== y ? (d = e => {
                e.preventDefault();
                let t = e.clipboardData.getData("text/plain").slice(0, 6)
                    , a = [...y];
                t.split("").forEach((e, t) => {
                    t < 6 && !isNaN(Number(e)) && (a[t] = e)
                }
                ),
                    _(a);
                let l = a.findIndex(V)
                    , s = -1 === l ? 5 : Math.min(l, 5);
                T.current[s]?.focus()
            }
                ,
                h[11] = y,
                h[12] = d) : d = h[12];
            let O = d;
            h[13] !== w || h[14] !== j ? (m = () => {
                w && (j(),
                    E(60))
            }
                ,
                h[13] = w,
                h[14] = j,
                h[15] = m) : m = h[15];
            let R = m;
            h[16] !== S || h[17] !== N || h[18] !== g || h[19] !== y ? (u = () => {
                if (N) {
                    let e = y.join("");
                    6 === e.length && g(e)
                } else
                    S.trim() && g(S)
            }
                ,
                h[16] = S,
                h[17] = N,
                h[18] = g,
                h[19] = y,
                h[20] = u) : u = h[20];
            let L = u;
            h[21] !== S || h[22] !== N || h[23] !== y ? (f = N ? 6 !== y.join("").length : !S.trim(),
                h[21] = S,
                h[22] = N,
                h[23] = y,
                h[24] = f) : f = h[24];
            let D = f;
            return h[25] !== w || h[26] !== S || h[27] !== C || h[28] !== k || h[29] !== P || h[30] !== O || h[31] !== R || h[32] !== L || h[33] !== D || h[34] !== y ? (x = {
                code: S,
                setCode: b,
                otp: y,
                countdown: C,
                canResend: w,
                inputsRef: T,
                isSubmitDisabled: D,
                handleOtpChange: k,
                handleOtpKeyDown: P,
                handleOtpPaste: O,
                handleResend: R,
                handleSubmit: L,
                formatTime: W
            },
                h[25] = w,
                h[26] = S,
                h[27] = C,
                h[28] = k,
                h[29] = P,
                h[30] = O,
                h[31] = R,
                h[32] = L,
                h[33] = D,
                h[34] = y,
                h[35] = x) : x = h[35],
                x
        }
        )(s);
        S[5] !== A ? (i = (0,
            t.jsx)("h2", {
                className: "text-lg font-medium leading-snug",
                children: A
            }),
            S[5] = A,
            S[6] = i) : i = S[6],
            S[7] !== k ? (r = k && (0,
                t.jsx)("span", {
                    className: "font-medium text-blue",
                    children: k
                }),
                S[7] = k,
                S[8] = r) : r = S[8],
            S[9] !== E || S[10] !== r ? (n = (0,
                t.jsxs)("p", {
                    className: "text-sm text-black/75 leading-snug",
                    children: [E, " ", r]
                }),
                S[9] = E,
                S[10] = r,
                S[11] = n) : n = S[11],
            S[12] !== i || S[13] !== n ? (c = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-1 text-center",
                    children: [i, n]
                }),
                S[12] = i,
                S[13] = n,
                S[14] = c) : c = S[14],
            S[15] === Symbol.for("react.memo_cache_sentinel") ? (o = (0,
                t.jsx)(_.default, {}),
                S[15] = o) : o = S[15],
            S[16] !== D || S[17] !== $ || S[18] !== z || S[19] !== Y || S[20] !== G || S[21] !== L || S[22] !== O || S[23] !== U || S[24] !== F ? (m = (0,
                t.jsx)("div", {
                    className: "flex flex-col gap-4",
                    children: L ? (0,
                        t.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                                t.jsx)("div", {
                                    className: "flex justify-center gap-2",
                                    children: U.map((e, a) => (0,
                                        t.jsx)("input", {
                                            ref: e => {
                                                G.current[a] = e
                                            }
                                            ,
                                            type: "text",
                                            maxLength: 1,
                                            value: e,
                                            onChange: e => $(e.target, a),
                                            onKeyDown: e => z(e, a),
                                            onPaste: Y,
                                            disabled: O,
                                            className: "h-12 w-12 text-center text-base font-medium text-black rounded-extra-sm card transition-all focus:outline-none"
                                        }, a))
                                }), (0,
                                    t.jsx)("p", {
                                        className: "text-center text-xs text-black/75",
                                        children: I.ACCOUNT_STRINGS.verification.title
                                    })]
                        }) : (0,
                            t.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0,
                                    t.jsx)("div", {
                                        className: "relative overflow-hidden rounded-extra-sm card",
                                        children: (0,
                                            t.jsx)("input", {
                                                type: "text",
                                                value: D,
                                                onChange: e => F(e.target.value),
                                                disabled: O,
                                                placeholder: I.ACCOUNT_STRINGS.verification.codePlaceholder,
                                                className: "relative px-5 h-10! w-full text-sm text-black placeholder:text-black/75 transition-colors focus:outline-none"
                                            })
                                    }), (0,
                                        t.jsx)("p", {
                                            className: "text-center text-xs text-black/75",
                                            children: I.ACCOUNT_STRINGS.verification.checkEmail
                                        })]
                            })
                }),
                S[16] = D,
                S[17] = $,
                S[18] = z,
                S[19] = Y,
                S[20] = G,
                S[21] = L,
                S[22] = O,
                S[23] = U,
                S[24] = F,
                S[25] = m) : m = S[25],
            S[26] !== O || S[27] !== y ? (u = (0,
                t.jsx)(d.default, {
                    className: "w-1/2",
                    onClick: y,
                    disabled: O,
                    children: I.ACCOUNT_STRINGS.common.cancel
                }),
                S[26] = O,
                S[27] = y,
                S[28] = u) : u = S[28];
        let X = M || O
            , K = O ? I.ACCOUNT_STRINGS.verification.verifying : I.ACCOUNT_STRINGS.verification.verify;
        S[29] !== H || S[30] !== X || S[31] !== K ? (f = (0,
            t.jsx)(d.default, {
                styleClassName: "button-accent",
                className: "w-1/2",
                onClick: H,
                disabled: X,
                children: K
            }),
            S[29] = H,
            S[30] = X,
            S[31] = K,
            S[32] = f) : f = S[32],
            S[33] !== u || S[34] !== f ? (h = (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-center gap-3",
                    children: [u, f]
                }),
                S[33] = u,
                S[34] = f,
                S[35] = h) : h = S[35];
        let Q = !B;
        return S[36] !== q || S[37] !== R || S[38] !== Q ? (p = (0,
            t.jsx)(d.default, {
                onClick: q,
                disabled: Q,
                isLoading: R,
                loadingText: I.ACCOUNT_STRINGS.verification.sending,
                className: "h-fit p-0 text-xs text-blue",
                children: I.ACCOUNT_STRINGS.verification.resendCode
            }),
            S[36] = q,
            S[37] = R,
            S[38] = Q,
            S[39] = p) : p = S[39],
            S[40] !== h || S[41] !== p ? (N = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [h, p]
                }),
                S[40] = h,
                S[41] = p,
                S[42] = N) : N = S[42],
            S[43] !== m || S[44] !== N || S[45] !== c ? (g = (0,
                t.jsxs)("div", {
                    className: "relative flex flex-col gap-5 overflow-hidden mx-4 p-8 max-w-md w-full rounded-sm card",
                    children: [c, o, m, N]
                }),
                S[43] = m,
                S[44] = N,
                S[45] = c,
                S[46] = g) : g = S[46],
            S[47] !== b || S[48] !== y || S[49] !== g ? (j = (0,
                t.jsx)(x.default, {
                    isVisible: b,
                    onClose: y,
                    zIndexClass: "z-200",
                    children: g
                }),
                S[47] = b,
                S[48] = y,
                S[49] = g,
                S[50] = j) : j = S[50],
            j
    }
        ;
    var z = e.i(13039)
        , Y = e.i(18566)
        , q = e.i(86098)
        , H = e.i(1741);
    let X = () => {
        let e, s, i, c, o, m, f, x, h, p, N, g = (0,
            a.c)(55), { setHasUnsavedChanges: j, saveActionRef: S, cancelActionRef: C } = r(), v = (0,
                H.useLimits)(), w = v?.plan === "monthly_pro" || v?.plan === "yearly_pro" || v?.plan === "monthly_ultra" || v?.plan === "yearly_ultra", { user: A, isPasswordModalOpen: k, setPasswordModalOpen: R, isUpdatingPassword: L, isSaving: U, isVerificationModalOpen: B, isVerifying: M, isResending: V, verificationConfig: W, isUnsavedChangesModalOpen: X, handleFieldChange: K, handlePhotoUpload: Q, handlePhotoRemove: Z, handleSaveChanges: J, handlePasswordUpdate: ee, handleVerificationConfirm: et, handleVerificationCancel: ea, handleResendVerification: el, handleUnsavedChangesSave: es, handleUnsavedChangesExit: ei, handleCancelChanges: er, getCurrentFieldValue: en, getCurrentImageUrl: ec, hasPendingChanges: eo, pendingChanges: ed } = (() => {
                    let { user: e } = (0,
                        n.useUser)()
                        , { session: t } = (0,
                            n.useSession)()
                        , a = (0,
                            Y.useRouter)()
                        , { setSettingsModalOpen: s } = (0,
                            q.useUIStore)()
                        , [i, r] = (0,
                            l.useState)({
                                field: null
                            })
                        , [c, o] = (0,
                            l.useState)(!1)
                        , [d, m] = (0,
                            l.useState)(!1)
                        , [u, f] = (0,
                            l.useState)(!1)
                        , [x, h] = (0,
                            l.useState)(!1)
                        , [p, N] = (0,
                            l.useState)(!0)
                        , [g, j] = (0,
                            l.useState)({})
                        , [S, b] = (0,
                            l.useState)(!1)
                        , [y, _] = (0,
                            l.useState)(null)
                        , [C, v] = (0,
                            l.useState)(!1)
                        , [w, I] = (0,
                            l.useState)(!1)
                        , [T, A] = (0,
                            l.useState)(null)
                        , [E, k] = (0,
                            l.useState)(!1)
                        , [O, R] = (0,
                            l.useState)(!1)
                        , [L, D] = (0,
                            l.useState)(!1)
                        , [F, U] = (0,
                            l.useState)(!1)
                        , [B, G] = (0,
                            l.useState)(null)
                        , [M, V] = (0,
                            l.useState)(null)
                        , [W, $] = (0,
                            l.useState)(null)
                        , [H, X] = (0,
                            l.useState)({
                                title: "",
                                description: "",
                                email: "",
                                isOTP: !1
                            })
                        , K = (0,
                            l.useCallback)(() => e?.externalAccounts.some(e => "google" === e.provider) || !1, [e])
                        , Q = (0,
                            l.useCallback)(e => {
                                i.field === e ? r({
                                    field: null
                                }) : r({
                                    field: e
                                })
                            }
                                , [i.field])
                        , Z = (0,
                            l.useCallback)((e, t) => {
                                j(a => ({
                                    ...a,
                                    [e]: t
                                }))
                            }
                                , [])
                        , J = (0,
                            l.useCallback)(e => {
                                j(t => ({
                                    ...t,
                                    profileImage: e,
                                    removeProfileImage: !1
                                })),
                                    y && y.startsWith("blob:") && URL.revokeObjectURL(y),
                                    _(URL.createObjectURL(e))
                            }
                                , [y])
                        , ee = (0,
                            l.useCallback)(() => {
                                j(e => ({
                                    ...e,
                                    profileImage: null,
                                    removeProfileImage: !0
                                })),
                                    y && y.startsWith("blob:") && URL.revokeObjectURL(y),
                                    _(null)
                            }
                                , [y])
                        , et = (0,
                            l.useCallback)(t => {
                                if (void 0 !== g[t])
                                    return g[t];
                                switch (t) {
                                    case "fullName":
                                        {
                                            let t = e?.unsafeMetadata?.fullName;
                                            if (t && "string" == typeof t)
                                                return t;
                                            return e?.fullName || `${e?.firstName || ""} ${e?.lastName || ""}`.trim() || ""
                                        }
                                    case "username":
                                        return e?.username || "";
                                    case "email":
                                        return e?.primaryEmailAddress?.emailAddress || "";
                                    default:
                                        return ""
                                }
                            }
                                , [g, e])
                        , ea = (0,
                            l.useCallback)(() => y || (g.removeProfileImage ? "https://storage.googleapis.com/webild/default/platform/brand/logo-full.webp" : e?.imageUrl || "https://storage.googleapis.com/webild/default/platform/brand/logo-full.webp"), [y, g.removeProfileImage, e?.imageUrl])
                        , el = () => Object.keys(g).length > 0
                        , es = (0,
                            n.useReverification)(async () => {
                                if (!e)
                                    return;
                                let t = e.externalAccounts.find(e => "google" === e.provider);
                                if (t) {
                                    await t.destroy();
                                    let a = e.emailAddresses.find(e => e.emailAddress === t.emailAddress && e.linkedTo?.some(e => "oauth_google" === e.type));
                                    a && a.id !== e.primaryEmailAddressId && await a.destroy()
                                } else
                                    throw Error("No Google account found to disconnect.")
                            }
                                , {
                                    onNeedsReverification: ({ complete: a }) => {
                                        $(() => a),
                                            X({
                                                title: "Security Verification",
                                                description: "We sent a 6-digit code to",
                                                email: e?.primaryEmailAddress?.emailAddress || "",
                                                isOTP: !0
                                            }),
                                            V(() => async e => {
                                                await t?.attemptFirstFactorVerification({
                                                    strategy: "email_code",
                                                    code: e
                                                }),
                                                    a(),
                                                    P.toast.success("Google account disconnected successfully! ")
                                            }
                                            ),
                                            t?.startVerification({
                                                level: "first_factor"
                                            }).then(async e => {
                                                if ("needs_first_factor" === e.status) {
                                                    let a = e.supportedFirstFactors?.find(e => "email_code" === e.strategy);
                                                    a && "emailAddressId" in a && await t?.prepareFirstFactorVerification({
                                                        strategy: "email_code",
                                                        emailAddressId: a.emailAddressId
                                                    })
                                                }
                                            }
                                            ),
                                            k(!0)
                                    }
                                })
                        , ei = (0,
                            l.useCallback)(async () => {
                                if (e) {
                                    v(!0);
                                    try {
                                        await es(),
                                            P.toast.success("Google account disconnected successfully! ")
                                    } catch (e) {
                                        (0,
                                            z.isClerkRuntimeError)(e) && (0,
                                                z.isReverificationCancelledError)(e) ? P.toast.error("Google disconnection was cancelled.") : e?.errors?.[0]?.message ? P.toast.error(e.errors[0].message) : "No Google account found to disconnect." === e.message ? P.toast.error("No Google account found to disconnect.") : P.toast.error("Failed to disconnect Google account. Please try again.")
                                    } finally {
                                        v(!1)
                                    }
                                }
                            }
                                , [e, es])
                        , er = (0,
                            n.useReverification)(async () => {
                                e && await e.createExternalAccount({
                                    strategy: "oauth_google",
                                    redirectUrl: `${window.location.origin}/account/settings`
                                })
                            }
                                , {
                                    onNeedsReverification: ({ complete: a }) => {
                                        $(() => a),
                                            X({
                                                title: "Security Verification",
                                                description: "We sent a 6-digit code to",
                                                email: e?.primaryEmailAddress?.emailAddress || "",
                                                isOTP: !0
                                            }),
                                            V(() => async e => {
                                                await t?.attemptFirstFactorVerification({
                                                    strategy: "email_code",
                                                    code: e
                                                }),
                                                    a()
                                            }
                                            ),
                                            t?.startVerification({
                                                level: "first_factor"
                                            }).then(async e => {
                                                if ("needs_first_factor" === e.status) {
                                                    let a = e.supportedFirstFactors?.find(e => "email_code" === e.strategy);
                                                    a && "emailAddressId" in a && await t?.prepareFirstFactorVerification({
                                                        strategy: "email_code",
                                                        emailAddressId: a.emailAddressId
                                                    })
                                                }
                                            }
                                            ),
                                            k(!0)
                                    }
                                })
                        , en = (0,
                            l.useCallback)(async () => {
                                I(!0);
                                try {
                                    await er()
                                } catch (e) {
                                    (0,
                                        z.isClerkRuntimeError)(e) && (0,
                                            z.isReverificationCancelledError)(e) ? P.toast.error("Google connection was cancelled.") : e?.errors?.[0]?.message ? P.toast.error(e.errors[0].message) : P.toast.error("Failed to connect Google account. Please try again.")
                                } finally {
                                    I(!1)
                                }
                            }
                                , [er])
                        , ec = (0,
                            l.useCallback)(async () => {
                                if (e)
                                    try {
                                        let t = e.emailAddresses.map(async t => {
                                            if (t.id !== e.primaryEmailAddressId)
                                                try {
                                                    await t.destroy()
                                                } catch (e) {
                                                    if (e?.errors?.[0]?.code === "delete_linked_identification_disallowed")
                                                        ;
                                                    else
                                                        throw e
                                                }
                                        }
                                        );
                                        await Promise.all(t)
                                    } catch { }
                            }
                                , [e])
                        , eo = (0,
                            n.useReverification)(async t => {
                                if (!e)
                                    return;
                                if (e.emailAddresses.find(e => e.emailAddress === t && e.verification?.status === "verified"))
                                    throw Error("form_identifier_exists");
                                await ec();
                                let a = await e.createEmailAddress({
                                    email: t
                                });
                                return await a.prepareVerification({
                                    strategy: "email_code"
                                }),
                                    a
                            }
                                , {
                                    onNeedsReverification: ({ complete: a }) => {
                                        $(() => a),
                                            X({
                                                title: "Security Verification",
                                                description: "We sent a 6-digit code to",
                                                email: e?.primaryEmailAddress?.emailAddress || "",
                                                isOTP: !0
                                            }),
                                            V(() => async e => {
                                                await t?.attemptFirstFactorVerification({
                                                    strategy: "email_code",
                                                    code: e
                                                }),
                                                    a()
                                            }
                                            ),
                                            t?.startVerification({
                                                level: "first_factor"
                                            }).then(async e => {
                                                if ("needs_first_factor" === e.status) {
                                                    let a = e.supportedFirstFactors?.find(e => "email_code" === e.strategy);
                                                    a && "emailAddressId" in a && await t?.prepareFirstFactorVerification({
                                                        strategy: "email_code",
                                                        emailAddressId: a.emailAddressId
                                                    })
                                                }
                                            }
                                            ),
                                            k(!0)
                                    }
                                })
                        , ed = (0,
                            n.useReverification)(async t => {
                                e && (e.passwordEnabled ? await e.updatePassword({
                                    currentPassword: t.oldPassword,
                                    newPassword: t.newPassword,
                                    signOutOfOtherSessions: !1
                                }) : await e.updatePassword({
                                    newPassword: t.newPassword,
                                    signOutOfOtherSessions: !1
                                }))
                            }
                                , {
                                    onNeedsReverification: ({ complete: a }) => {
                                        $(() => a),
                                            X({
                                                title: "Security Verification",
                                                description: "We sent a 6-digit code to",
                                                email: e?.primaryEmailAddress?.emailAddress || "",
                                                isOTP: !0
                                            }),
                                            V(() => async e => {
                                                await t?.attemptFirstFactorVerification({
                                                    strategy: "email_code",
                                                    code: e
                                                }),
                                                    a()
                                            }
                                            ),
                                            t?.startVerification({
                                                level: "first_factor"
                                            }).then(async e => {
                                                if ("needs_first_factor" === e.status) {
                                                    let a = e.supportedFirstFactors?.find(e => "email_code" === e.strategy);
                                                    a && "emailAddressId" in a && await t?.prepareFirstFactorVerification({
                                                        strategy: "email_code",
                                                        emailAddressId: a.emailAddressId
                                                    })
                                                }
                                            }
                                            ),
                                            k(!0)
                                    }
                                })
                        , em = (0,
                            l.useCallback)(async (t, a) => {
                                let l, s;
                                if (!e)
                                    return;
                                let i = (l = [],
                                    s = 0,
                                    a.length >= 8 ? s += 1 : l.push("Password should be at least 8 characters long."),
                                    /[!@#$%^&*(),.?":{}|<>]/.test(a) ? s += 1 : l.push("Add at least one special character (e.g., !, @, #, $)."),
                                    /\d/.test(a) ? s += 1 : l.push("Add at least one numeric digit (e.g., 1, 2, 3)."),
                                    /[A-Z]/.test(a) ? s += 1 : l.push("Add at least one uppercase letter (e.g., A, B, C)."),
                                    /[a-z]/.test(a) ? s += 1 : l.push("Add at least one lowercase letter (e.g., a, b, c)."),
                                {
                                    strength: s <= 2 ? "Weak" : 3 === s || 4 === s ? "Moderate" : "Strong",
                                    suggestions: l.length > 0 ? l : ["Your password is strong! No changes needed."]
                                });
                                if ("Weak" === i.strength)
                                    return void P.toast.error(`Password is too weak. ${i.suggestions.join(" ")}`);
                                h(!0);
                                try {
                                    await ed({
                                        oldPassword: e.passwordEnabled ? t : void 0,
                                        newPassword: a
                                    }),
                                        P.toast.success("Password updated successfully! 🔐"),
                                        f(!1)
                                } catch (e) {
                                    (0,
                                        z.isClerkRuntimeError)(e) && (0,
                                            z.isReverificationCancelledError)(e) ? P.toast.error("Password update was cancelled.") : e?.errors?.[0]?.code === "form_password_incorrect" ? P.toast.error("Current password is incorrect. Please try again.") : e?.errors?.[0]?.message ? P.toast.error(e.errors[0].message) : P.toast.error("Failed to update password. Please try again.")
                                } finally {
                                    h(!1)
                                }
                            }
                                , [e, ed])
                        , eu = (0,
                            n.useReverification)(t => {
                                let a = {};
                                return void 0 !== t.username && (a.username = t.username),
                                    void 0 !== t.fullName && (a.unsafeMetadata = {
                                        ...e?.unsafeMetadata,
                                        fullName: t.fullName,
                                        firstName: t.firstName,
                                        lastName: t.lastName
                                    }),
                                    e?.update(a)
                            }
                                , {
                                    onNeedsReverification: ({ complete: a }) => {
                                        $(() => a),
                                            X({
                                                title: "Security Verification",
                                                description: "We sent a 6-digit code to",
                                                email: e?.primaryEmailAddress?.emailAddress || "",
                                                isOTP: !0
                                            }),
                                            V(() => async e => {
                                                await t?.attemptFirstFactorVerification({
                                                    strategy: "email_code",
                                                    code: e
                                                }),
                                                    a()
                                            }
                                            ),
                                            t?.startVerification({
                                                level: "first_factor"
                                            }).then(async e => {
                                                if ("needs_first_factor" === e.status) {
                                                    let a = e.supportedFirstFactors?.find(e => "email_code" === e.strategy);
                                                    a && "emailAddressId" in a && await t?.prepareFirstFactorVerification({
                                                        strategy: "email_code",
                                                        emailAddressId: a.emailAddressId
                                                    })
                                                }
                                            }
                                            ),
                                            k(!0)
                                    }
                                })
                        , ef = (0,
                            l.useCallback)(async () => {
                                if (!e || !el())
                                    return;
                                b(!0);
                                let t = []
                                    , a = !1;
                                try {
                                    let l = {};
                                    if (void 0 !== g.fullName) {
                                        let e = g.fullName.trim().split(/\s+/);
                                        l.fullName = g.fullName,
                                            l.firstName = e[0] || "",
                                            l.lastName = e.slice(1).join(" ") || ""
                                    }
                                    if (void 0 !== g.username && (l.username = g.username),
                                        Object.keys(l).length > 0)
                                        try {
                                            await eu(l),
                                                void 0 !== l.fullName && t.push("Name updated"),
                                                void 0 !== l.username && t.push("Username updated")
                                        } catch (e) {
                                            if ((0,
                                                z.isClerkRuntimeError)(e) && (0,
                                                    z.isReverificationCancelledError)(e)) {
                                                P.toast.error("Profile update was cancelled."),
                                                    b(!1);
                                                return
                                            }
                                            a = !0,
                                                e?.errors?.[0]?.message ? P.toast.error(e.errors[0].message) : P.toast.error("Failed to update profile. Please try again.")
                                        }
                                    if (g.removeProfileImage) {
                                        let a = await fetch("https://storage.googleapis.com/webild/default/platform/brand/logo-full.webp")
                                            , l = await a.blob()
                                            , s = new File([l], "avatar.png", {
                                                type: "image/png+xml"
                                            });
                                        await e.setProfileImage({
                                            file: s
                                        }),
                                            t.push("Profile photo removed")
                                    } else
                                        g.profileImage && (await e.setProfileImage({
                                            file: g.profileImage
                                        }),
                                            t.push("Profile photo updated"));
                                    if (void 0 !== g.email && !a)
                                        try {
                                            let t = await eo(g.email);
                                            if (t) {
                                                A(g.email),
                                                    X({
                                                        title: "Verify Your Email",
                                                        description: "We sent a 6-digit code to",
                                                        email: g.email,
                                                        isOTP: !0
                                                    }),
                                                    V(() => async a => {
                                                        await t.attemptVerification({
                                                            code: a
                                                        }),
                                                            await e.update({
                                                                primaryEmailAddressId: t.id
                                                            }),
                                                            await ec(),
                                                            j(e => {
                                                                let { ...t } = e;
                                                                return t
                                                            }
                                                            ),
                                                            _(null),
                                                            r({
                                                                field: null
                                                            }),
                                                            A(null)
                                                    }
                                                    ),
                                                    k(!0),
                                                    b(!1);
                                                return
                                            }
                                        } catch (e) {
                                            (0,
                                                z.isClerkRuntimeError)(e) && (0,
                                                    z.isReverificationCancelledError)(e) ? P.toast.error("Email update was cancelled.") : e?.errors?.[0]?.code === "form_identifier_exists" || "form_identifier_exists" === e.message ? P.toast.error("This email address is already in use. Please use a different email.") : e?.errors?.[0]?.message ? P.toast.error(e.errors[0].message) : P.toast.error("Failed to update email. Please try again.")
                                        }
                                    t.length > 0 && !a && P.toast.success(`${t.join(", ")}! `),
                                        a || (j({}),
                                            _(null),
                                            r({
                                                field: null
                                            }))
                                } catch (e) {
                                    if (a = !0,
                                        e?.errors?.[0]?.code === "form_param_unknown") {
                                        let t = e?.errors?.[0]?.meta?.param_name;
                                        P.toast.error(`Invalid parameter: ${t}. Please contact support.`)
                                    } else
                                        e?.errors?.[0]?.message ? P.toast.error(e.errors[0].message) : P.toast.error("Failed to save changes. Please try again.");
                                    j({}),
                                        _(null),
                                        r({
                                            field: null
                                        })
                                } finally {
                                    b(!1)
                                }
                            }
                                , [e, g, el, eu, eo, ec])
                        , ex = (0,
                            l.useCallback)(async e => {
                                if (M) {
                                    R(!0);
                                    try {
                                        await M(e),
                                            k(!1),
                                            V(null),
                                            P.toast.success("Verification successful! ")
                                    } catch (e) {
                                        e?.errors?.[0]?.code === "form_code_incorrect" ? P.toast.error("Invalid verification code. Please try again.") : e?.errors?.[0]?.message ? P.toast.error(e.errors[0].message) : P.toast.error("Verification failed. Please try again.")
                                    } finally {
                                        R(!1)
                                    }
                                }
                            }
                                , [M])
                        , eh = (0,
                            l.useCallback)(async () => {
                                D(!0);
                                try {
                                    if (T && e) {
                                        let t = e.emailAddresses.find(e => e.emailAddress === T);
                                        t ? (await t.prepareVerification({
                                            strategy: "email_code"
                                        }),
                                            P.toast.success("Verification code sent!")) : P.toast.error("Email address not found.")
                                    } else if (W && t) {
                                        let e = await t.startVerification({
                                            level: "first_factor"
                                        });
                                        if ("needs_first_factor" === e.status) {
                                            let a = e.supportedFirstFactors?.find(e => "email_code" === e.strategy);
                                            a && "emailAddressId" in a && (await t.prepareFirstFactorVerification({
                                                strategy: "email_code",
                                                emailAddressId: a.emailAddressId
                                            }),
                                                P.toast.success("Verification code sent!"))
                                        }
                                    } else
                                        P.toast.error("Cannot resend verification at this time.")
                                } catch {
                                    P.toast.error("Failed to resend verification code.")
                                } finally {
                                    D(!1)
                                }
                            }
                                , [T, e, W, t])
                        , ep = () => {
                            j({}),
                                _(null),
                                r({
                                    field: null
                                })
                        }
                        , eN = (0,
                            l.useCallback)(async () => {
                                await ef(),
                                    U(!1),
                                    B && (B(),
                                        G(null))
                            }
                                , [ef, B])
                        , eg = (0,
                            l.useCallback)(() => {
                                ep(),
                                    U(!1),
                                    B && (B(),
                                        G(null))
                            }
                                , [ep, B])
                        , ej = (0,
                            l.useCallback)(e => !!el() && (G(() => e),
                                U(!0),
                                !0), [el])
                        , eS = (0,
                            n.useReverification)(async () => {
                                e && await e.delete()
                            }
                                , {
                                    onNeedsReverification: ({ complete: a }) => {
                                        $(() => a),
                                            X({
                                                title: "Security Verification",
                                                description: "We sent a 6-digit code to",
                                                email: e?.primaryEmailAddress?.emailAddress || "",
                                                isOTP: !0
                                            }),
                                            V(() => async e => {
                                                await t?.attemptFirstFactorVerification({
                                                    strategy: "email_code",
                                                    code: e
                                                }),
                                                    a()
                                            }
                                            ),
                                            t?.startVerification({
                                                level: "first_factor"
                                            }).then(async e => {
                                                if ("needs_first_factor" === e.status) {
                                                    let a = e.supportedFirstFactors?.find(e => "email_code" === e.strategy);
                                                    a && "emailAddressId" in a && await t?.prepareFirstFactorVerification({
                                                        strategy: "email_code",
                                                        emailAddressId: a.emailAddressId
                                                    })
                                                }
                                            }
                                            ),
                                            k(!0)
                                    }
                                })
                        , eb = (0,
                            l.useCallback)(async () => {
                                if (e) {
                                    m(!0);
                                    try {
                                        await eS(),
                                            P.toast.success("Deletion Scheduled - Your account will be deleted in 2 days"),
                                            o(!1),
                                            s(!1),
                                            a.push("/")
                                    } catch (e) {
                                        (0,
                                            z.isClerkRuntimeError)(e) && (0,
                                                z.isReverificationCancelledError)(e) ? P.toast.error("Account deletion was cancelled.") : P.toast.error("Failed to delete account. Please try again.")
                                    } finally {
                                        m(!1)
                                    }
                                }
                            }
                                , [e, eS, a, s]);
                    return {
                        user: e,
                        editing: i,
                        isDeleteModalOpen: c,
                        isDeleting: d,
                        isPasswordModalOpen: u,
                        isUpdatingPassword: x,
                        receiveNewsletter: p,
                        pendingChanges: g,
                        isSaving: S,
                        previewImageUrl: y,
                        isDisconnectingGoogle: C,
                        isConnectingGoogle: w,
                        isGoogleConnected: K(),
                        isVerificationModalOpen: E,
                        isVerifying: O,
                        isResending: L,
                        verificationConfig: H,
                        isUnsavedChangesModalOpen: F,
                        setDeleteModalOpen: o,
                        setPasswordModalOpen: f,
                        setReceiveNewsletter: N,
                        handleFieldEdit: Q,
                        handleFieldChange: Z,
                        handlePhotoUpload: J,
                        handlePhotoRemove: ee,
                        handleSaveChanges: ef,
                        handlePasswordUpdate: em,
                        handleDeleteAccount: eb,
                        handleDisconnectGoogle: ei,
                        handleConnectGoogle: en,
                        handleVerificationConfirm: ex,
                        handleVerificationCancel: () => {
                            k(!1),
                                V(null),
                                A(null),
                                R(!1),
                                D(!1),
                                $(null)
                        }
                        ,
                        handleResendVerification: eh,
                        handleCancelChanges: ep,
                        handleUnsavedChangesSave: eN,
                        handleUnsavedChangesExit: eg,
                        checkUnsavedChanges: ej,
                        getCurrentFieldValue: et,
                        getCurrentImageUrl: ea,
                        hasPendingChanges: el,
                        pendingEmail: T
                    }
                }
                )();
        g[0] !== ed || g[1] !== j ? (e = () => (j(Object.keys(ed).length > 0),
            () => {
                j(!1)
            }
        ),
            s = [ed, j],
            g[0] = ed,
            g[1] = j,
            g[2] = e,
            g[3] = s) : (e = g[2],
                s = g[3]),
            (0,
                l.useEffect)(e, s),
            g[4] !== C || g[5] !== er || g[6] !== J || g[7] !== S ? (i = () => (S.current = J,
                C.current = er,
                () => {
                    S.current = null,
                        C.current = null
                }
            ),
                c = [J, er, S, C],
                g[4] = C,
                g[5] = er,
                g[6] = J,
                g[7] = S,
                g[8] = i,
                g[9] = c) : (i = g[8],
                    c = g[9]),
            (0,
                l.useEffect)(i, c);
        let em = A ? "content" : "loading";
        g[10] !== en || g[11] !== ec || g[12] !== er || g[13] !== K || g[14] !== Z || g[15] !== Q || g[16] !== J || g[17] !== eo || g[18] !== U || g[19] !== w || g[20] !== R || g[21] !== A ? (o = A ? (0,
            t.jsxs)("div", {
                className: "relative flex flex-col gap-5 p-5 text-black rounded button-secondary",
                children: [(0,
                    t.jsx)(O, {
                        imageUrl: ec(),
                        onChangePhoto: Q,
                        onRemovePhoto: Z
                    }), (0,
                        t.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0,
                                t.jsx)(y, {
                                    label: I.ACCOUNT_STRINGS.form.name,
                                    type: "text",
                                    value: en("fullName"),
                                    placeholder: I.ACCOUNT_STRINGS.form.namePlaceholder,
                                    isEditing: !0,
                                    showEditButton: !1,
                                    onChange: e => K("fullName", e)
                                }), (0,
                                    t.jsx)(y, {
                                        label: I.ACCOUNT_STRINGS.form.email,
                                        type: "email",
                                        value: en("email"),
                                        placeholder: I.ACCOUNT_STRINGS.form.emailPlaceholder,
                                        showEditButton: !1
                                    })]
                        }), A?.passwordEnabled && (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                    t.jsx)(_.default, {}), (0,
                                        t.jsx)(E, {
                                            onSetNewPassword: () => R(!0)
                                        })]
                            }), (0,
                                t.jsx)(T, {}), !w && (0,
                                    t.jsx)(_.default, {}), (0,
                                        t.jsx)(G, {
                                            isUltraPlan: w
                                        }), (0,
                                            t.jsx)("div", {
                                                className: "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.625,0.05,0,1)] overflow-hidden -mb-5",
                                                style: {
                                                    gridTemplateRows: eo() ? "1fr" : "0fr"
                                                },
                                                children: (0,
                                                    t.jsxs)("div", {
                                                        className: "min-h-0 overflow-hidden",
                                                        children: [(0,
                                                            t.jsx)(_.default, {
                                                                className: "mb-5"
                                                            }), (0,
                                                                t.jsxs)("div", {
                                                                    className: "flex items-center justify-between pb-5",
                                                                    children: [(0,
                                                                        t.jsx)("p", {
                                                                            className: "text-sm text-black",
                                                                            children: I.ACCOUNT_STRINGS.unsavedChanges.label
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex gap-2",
                                                                                children: [(0,
                                                                                    t.jsx)(d.default, {
                                                                                        styleClassName: "card",
                                                                                        onClick: er,
                                                                                        disabled: U,
                                                                                        children: I.ACCOUNT_STRINGS.common.cancel
                                                                                    }), (0,
                                                                                        t.jsx)(d.default, {
                                                                                            styleClassName: "button-accent",
                                                                                            onClick: J,
                                                                                            isLoading: U,
                                                                                            loadingText: I.ACCOUNT_STRINGS.form.saving,
                                                                                            children: I.ACCOUNT_STRINGS.common.save
                                                                                        })]
                                                                            })]
                                                                })]
                                                    })
                                            })]
            }) : (0,
                t.jsx)("div", {
                    className: "flex items-center justify-center p-8 w-full rounded button-secondary",
                    children: (0,
                        t.jsx)(u.default, {
                            className: "w-40 md:w-15"
                        })
                }),
            g[10] = en,
            g[11] = ec,
            g[12] = er,
            g[13] = K,
            g[14] = Z,
            g[15] = Q,
            g[16] = J,
            g[17] = eo,
            g[18] = U,
            g[19] = w,
            g[20] = R,
            g[21] = A,
            g[22] = o) : o = g[22],
            g[23] !== em || g[24] !== o ? (m = (0,
                t.jsx)(b.default, {
                    animationType: "fade",
                    className: "w-full md:w-50 2xl:w-55",
                    children: o
                }, em),
                g[23] = em,
                g[24] = o,
                g[25] = m) : m = g[25],
            g[26] !== ei || g[27] !== es || g[28] !== U || g[29] !== X ? (f = (0,
                t.jsx)(D, {
                    isVisible: X,
                    onSave: es,
                    onExit: ei,
                    isSaving: U
                }),
                g[26] = ei,
                g[27] = es,
                g[28] = U,
                g[29] = X,
                g[30] = f) : f = g[30],
            g[31] !== el || g[32] !== ea || g[33] !== et || g[34] !== V || g[35] !== B || g[36] !== M || g[37] !== W.description || g[38] !== W.email || g[39] !== W.isOTP || g[40] !== W.title ? (x = (0,
                t.jsx)($, {
                    isVisible: B,
                    onCancel: ea,
                    onConfirm: et,
                    onResend: el,
                    isVerifying: M,
                    isResending: V,
                    title: W.title,
                    description: W.description,
                    email: W.email,
                    isOTP: W.isOTP
                }),
                g[31] = el,
                g[32] = ea,
                g[33] = et,
                g[34] = V,
                g[35] = B,
                g[36] = M,
                g[37] = W.description,
                g[38] = W.email,
                g[39] = W.isOTP,
                g[40] = W.title,
                g[41] = x) : x = g[41],
            g[42] !== R ? (h = () => R(!1),
                g[42] = R,
                g[43] = h) : h = g[43];
        let eu = A?.passwordEnabled || !1;
        return g[44] !== ee || g[45] !== k || g[46] !== L || g[47] !== eu || g[48] !== h ? (p = (0,
            t.jsx)(F.default, {
                isVisible: k,
                onCancel: h,
                onConfirm: ee,
                isUpdating: L,
                passwordEnabled: eu
            }),
            g[44] = ee,
            g[45] = k,
            g[46] = L,
            g[47] = eu,
            g[48] = h,
            g[49] = p) : p = g[49],
            g[50] !== p || g[51] !== m || g[52] !== f || g[53] !== x ? (N = (0,
                t.jsxs)(b.default, {
                    className: "flex items-start justify-center overflow-y-auto p-5 pb-0 w-full h-full",
                    children: [m, f, x, p]
                }),
                g[50] = p,
                g[51] = m,
                g[52] = f,
                g[53] = x,
                g[54] = N) : N = g[54],
            N
    }
        ;
    var K = e.i(88024)
        , Q = e.i(52571);
    let Z = "bg-black/5"
        , J = () => {
            let e, l = (0,
                a.c)(1);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)("div", {
                    className: (0,
                        m.cls)(Z, "rounded w-24"),
                    style: {
                        height: "calc(var(--text-lg) * 1.25)"
                    }
                }),
                l[0] = e) : e = l[0],
                e
        }
        , ee = () => {
            let e, l = (0,
                a.c)(1);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)("div", {
                    className: (0,
                        m.cls)(Z, "rounded w-16"),
                    style: {
                        height: "calc(var(--text-sm) * 1.5)"
                    }
                }),
                l[0] = e) : e = l[0],
                e
        }
        , et = () => {
            let e, l = (0,
                a.c)(1);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)("div", {
                    className: (0,
                        m.cls)(Z, "rounded-extra-sm w-full"),
                    style: {
                        height: "calc(var(--spacing-5)*2 + var(--text-sm)*1.5*2 + var(--spacing-5) + var(--height-10))"
                    }
                }),
                l[0] = e) : e = l[0],
                e
        }
        , ea = () => {
            let e, l = (0,
                a.c)(1);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)("div", {
                    className: (0,
                        m.cls)(Z, "rounded-extra-sm w-full"),
                    style: {
                        height: "calc(var(--spacing-5)*2 + var(--text-base)*1.5 + var(--spacing-4) + var(--spacing-1) + var(--spacing-4) + var(--text-sm)*1.5)"
                    }
                }),
                l[0] = e) : e = l[0],
                e
        }
        , el = () => {
            let e, l = (0,
                a.c)(1);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)("div", {
                    className: (0,
                        m.cls)(Z, "rounded w-full"),
                    style: {
                        height: "calc(var(--spacing-5)*2 + var(--text-base)*1.5)"
                    }
                }),
                l[0] = e) : e = l[0],
                e
        }
        , es = () => {
            let e, l = (0,
                a.c)(1);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)("div", {
                    className: (0,
                        m.cls)(Z, "rounded-extra-sm w-full"),
                    style: {
                        height: "calc(var(--spacing-5)*2 + var(--text-sm)*1.5*2 + var(--spacing-1) + var(--spacing-4)*2 + var(--text-sm)*1.5*2 + var(--spacing-1))"
                    }
                }),
                l[0] = e) : e = l[0],
                e
        }
        , ei = () => {
            let e, l, s, i, r, n, c = (0,
                a.c)(6);
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)(J, {}),
                l = (0,
                    t.jsx)(_.default, {}),
                c[0] = e,
                c[1] = l) : (e = c[0],
                    l = c[1]),
                c[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                            t.jsx)(ee, {}), (0,
                                t.jsx)(et, {})]
                    }),
                    c[2] = s) : s = c[2],
                c[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                            t.jsx)(ee, {}), (0,
                                t.jsx)(ea, {})]
                    }),
                    r = (0,
                        t.jsx)(el, {}),
                    c[3] = i,
                    c[4] = r) : (i = c[3],
                        r = c[4]),
                c[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0,
                    t.jsxs)("div", {
                        className: "relative flex flex-col gap-5 p-5 w-full md:w-50 2xl:w-55 button-secondary rounded animate-pulse pointer-events-none",
                        children: [e, l, s, i, r, (0,
                            t.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [(0,
                                    t.jsx)(ee, {}), (0,
                                        t.jsx)(es, {})]
                            })]
                    }),
                    c[5] = n) : n = c[5],
                n
        }
        ;
    var er = e.i(90116)
        , en = e.i(86108)
        , en = en
        , ec = e.i(14283)
        , eo = e.i(20002)
        , ed = e.i(22309);
    let em = e => {
        let l, s, i, r = (0,
            a.c)(7), { title: n, children: c } = e;
        return r[0] !== n ? (l = (0,
            t.jsx)("h2", {
                className: "text-sm font-medium text-black",
                children: n
            }),
            r[0] = n,
            r[1] = l) : l = r[1],
            r[2] !== c ? (s = (0,
                t.jsx)("div", {
                    className: "flex flex-col gap-5 p-5 w-full card rounded-extra-sm",
                    children: c
                }),
                r[2] = c,
                r[3] = s) : s = r[3],
            r[4] !== l || r[5] !== s ? (i = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [l, s]
                }),
                r[4] = l,
                r[5] = s,
                r[6] = i) : i = r[6],
            i
    }
        , eu = e => {
            let l, s, i, r, n, c, o, d, m, u, f, x, h = (0,
                a.c)(30), { billingHistory: p, onSubscriptionInfoClick: N } = e;
            h[0] !== p ? (l = p ?? {},
                h[0] = p,
                h[1] = l) : l = h[1];
            let { currentBilling: g, nextPayment: j } = l;
            if (!g)
                return null;
            h[2] !== g.receiptUrl ? (s = () => {
                g.receiptUrl && window.open(g.receiptUrl, "_blank")
            }
                ,
                h[2] = g.receiptUrl,
                h[3] = s) : s = h[3];
            let S = s;
            h[4] !== g.amount || h[5] !== g.periodEnd || h[6] !== g.periodStart ? (i = (0,
                t.jsxs)("p", {
                    className: "text-sm text-black/75",
                    children: [g.periodStart, " - ", g.periodEnd, " ", g.amount]
                }),
                h[4] = g.amount,
                h[5] = g.periodEnd,
                h[6] = g.periodStart,
                h[7] = i) : i = h[7];
            let b = `You're subscribed to the ${g.planName} plan`;
            return h[8] !== g.planName || h[9] !== b ? (r = (0,
                t.jsx)(ec.default, {
                    label: g.planName,
                    tooltip: b,
                    className: "mb-0",
                    labelClassName: "text-sm! font-medium",
                    tooltipVerticalPosition: "above",
                    tooltipMultiLine: !0
                }),
                h[8] = g.planName,
                h[9] = b,
                h[10] = r) : r = h[10],
                h[11] !== i || h[12] !== r ? (n = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [i, r]
                    }),
                    h[11] = i,
                    h[12] = r,
                    h[13] = n) : n = h[13],
                h[14] === Symbol.for("react.memo_cache_sentinel") ? (c = (0,
                    t.jsx)("button", {
                        className: "cursor-pointer",
                        children: (0,
                            t.jsx)(en.default, {
                                className: "h-(--text-base) text-black",
                                strokeWidth: 1.5
                            })
                    }),
                    h[14] = c) : c = h[14],
                h[15] !== S ? (o = (0,
                    t.jsx)(ed.default, {
                        label: B.BILLING_HISTORY_SECTION.DOWNLOAD_INVOICE,
                        onClick: S,
                        className: "text-nowrap"
                    }),
                    h[15] = S,
                    h[16] = o) : o = h[16],
                h[17] !== N ? (d = (0,
                    t.jsx)(ed.default, {
                        label: B.BILLING_LABELS.SUBSCRIPTION_INFO,
                        onClick: N,
                        className: "text-nowrap"
                    }),
                    h[17] = N,
                    h[18] = d) : d = h[18],
                h[19] !== o || h[20] !== d ? (m = (0,
                    t.jsxs)(eo.default, {
                        align: "right",
                        menuClassName: "w-fit",
                        trigger: c,
                        children: [o, d]
                    }),
                    h[19] = o,
                    h[20] = d,
                    h[21] = m) : m = h[21],
                h[22] !== m || h[23] !== n ? (u = (0,
                    t.jsxs)("div", {
                        className: "flex items-start justify-between",
                        children: [n, m]
                    }),
                    h[22] = m,
                    h[23] = n,
                    h[24] = u) : u = h[24],
                h[25] !== j ? (f = j && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)(_.default, {}), (0,
                                t.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [(0,
                                        t.jsx)("p", {
                                            className: "text-sm font-medium text-black",
                                            children: B.BILLING_HISTORY_SECTION.TOTAL_NEXT_PAYMENT
                                        }), (0,
                                            t.jsxs)("p", {
                                                className: "text-sm text-black/75",
                                                children: [j.periodStart, " - ", j.periodEnd, " ", j.amount]
                                            })]
                                })]
                    }),
                    h[25] = j,
                    h[26] = f) : f = h[26],
                h[27] !== u || h[28] !== f ? (x = (0,
                    t.jsxs)(em, {
                        title: B.BILLING_LABELS.BILLING_HISTORY,
                        children: [u, f]
                    }),
                    h[27] = u,
                    h[28] = f,
                    h[29] = x) : x = h[29],
                x
        }
        ;
    var ef = e.i(11377)
        , ex = e.i(29871);
    let eh = () => {
        let e, l, s, i, r, n, c, o, d, m = (0,
            a.c)(21), u = (0,
                H.useLimits)(), f = u?.messages_token_left ?? 0, x = f + (u?.messages_token_usage ?? 0), h = f / x * 100, p = u?.messages_token_usage ?? 0;
        return m[0] !== f ? (e = (0,
            ex.formatCredits)(f),
            m[0] = f,
            m[1] = e) : e = m[1],
            m[2] !== e ? (l = (0,
                t.jsx)("div", {
                    className: "flex items-center justify-between",
                    children: (0,
                        t.jsxs)("span", {
                            className: "text-base font-medium text-black",
                            children: [e, " ", B.CREDITS_SECTION.LEFT]
                        })
                }),
                m[2] = e,
                m[3] = l) : l = m[3],
            m[4] !== h ? (s = (0,
                t.jsx)(ef.default, {
                    percentage: h
                }),
                m[4] = h,
                m[5] = s) : s = m[5],
            m[6] !== p ? (i = (0,
                ex.formatCredits)(p),
                m[6] = p,
                m[7] = i) : i = m[7],
            m[8] !== i ? (r = (0,
                t.jsxs)("span", {
                    className: "font-medium text-black",
                    children: [i, " /", " "]
                }),
                m[8] = i,
                m[9] = r) : r = m[9],
            m[10] !== x ? (n = (0,
                ex.formatCredits)(x),
                m[10] = x,
                m[11] = n) : n = m[11],
            m[12] !== n ? (c = (0,
                t.jsx)("span", {
                    className: "font-medium text-black",
                    children: n
                }),
                m[12] = n,
                m[13] = c) : c = m[13],
            m[14] !== r || m[15] !== c ? (o = (0,
                t.jsxs)("p", {
                    className: "text-sm text-black/75",
                    children: [B.CREDITS_SECTION.SPEND, " ", r, " ", B.CREDITS_SECTION.LIMIT, " ", c, " ", "| ", B.CREDITS_SECTION.RESET_INFO]
                }),
                m[14] = r,
                m[15] = c,
                m[16] = o) : o = m[16],
            m[17] !== l || m[18] !== s || m[19] !== o ? (d = (0,
                t.jsxs)(em, {
                    title: B.BILLING_LABELS.CREDITS,
                    children: [l, s, o]
                }),
                m[17] = l,
                m[18] = s,
                m[19] = o,
                m[20] = d) : d = m[20],
            d
    }
        , ep = e => {
            let l, s, i, r, n, c = (0,
                a.c)(13), { subscription: o, isFreePlan: m, onUpgrade: u } = e, f = m ? B.PLAN_SECTION.FREE_PLAN : o?.plan;
            return c[0] !== f ? (l = (0,
                t.jsx)("span", {
                    className: "text-sm font-medium text-black",
                    children: f
                }),
                c[0] = f,
                c[1] = l) : l = c[1],
                c[2] !== m || c[3] !== o ? (s = m ? (0,
                    t.jsx)("p", {
                        className: "text-sm text-black/75",
                        children: B.PLAN_SECTION.UPGRADE_PROMPT
                    }) : o && (0,
                        t.jsxs)("p", {
                            className: "text-sm text-black/75",
                            children: [o.billingCycle, " | ", B.PLAN_SECTION.NEXT_PAYMENT, " ", o.nextPayment]
                        }),
                    c[2] = m,
                    c[3] = o,
                    c[4] = s) : s = c[4],
                c[5] !== l || c[6] !== s ? (i = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col",
                        children: [l, s]
                    }),
                    c[5] = l,
                    c[6] = s,
                    c[7] = i) : i = c[7],
                c[8] !== u ? (r = (0,
                    t.jsx)(d.default, {
                        onClick: u,
                        styleClassName: "button-accent",
                        className: "w-fit",
                        children: B.PLAN_SECTION.UPGRADE_BUTTON
                    }),
                    c[8] = u,
                    c[9] = r) : r = c[9],
                c[10] !== i || c[11] !== r ? (n = (0,
                    t.jsxs)(em, {
                        title: B.BILLING_LABELS.PLAN,
                        children: [i, r]
                    }),
                    c[10] = i,
                    c[11] = r,
                    c[12] = n) : n = c[12],
                n
        }
        , eN = e => {
            let l, s, i, r, n, o, m, u, f, h, p, N, g, j, S, b, y = (0,
                a.c)(35), { isVisible: C, onClose: v, onCancelRenewal: w, subscription: I, billingHistory: T, isCancelled: A } = e;
            y[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
                t.jsx)("h2", {
                    className: "text-lg font-medium leading-none text-black",
                    children: B.BILLING_LABELS.SUBSCRIPTION_INFO
                }),
                y[0] = l) : l = y[0],
                y[1] === Symbol.for("react.memo_cache_sentinel") ? (s = (0,
                    t.jsx)(c.X, {
                        className: "h-full w-auto text-black"
                    }),
                    y[1] = s) : s = y[1],
                y[2] !== v ? (i = (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-between gap-5",
                        children: [l, (0,
                            t.jsx)(d.default, {
                                onClick: v,
                                className: "flex items-center justify-center px-0 h-(--text-base) w-auto z-10",
                                styleClassName: "transparent",
                                "aria-label": B.SUBSCRIPTION_INFO_MODAL.CLOSE_ARIA_LABEL,
                                children: s
                            })]
                    }),
                    y[2] = v,
                    y[3] = i) : i = y[3],
                y[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0,
                    t.jsx)(_.default, {}),
                    y[4] = r) : r = y[4],
                y[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0,
                    t.jsx)("p", {
                        className: "text-sm text-black/75",
                        children: B.SUBSCRIPTION_INFO_MODAL.SUBSCRIBED_SINCE
                    }),
                    y[5] = n) : n = y[5];
            let E = T?.currentBilling?.periodStart ?? "N/A";
            y[6] !== E ? (o = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [n, (0,
                        t.jsx)("p", {
                            className: "text-sm font-medium text-black",
                            children: E
                        })]
                }),
                y[6] = E,
                y[7] = o) : o = y[7],
                y[8] === Symbol.for("react.memo_cache_sentinel") ? (m = (0,
                    t.jsx)("p", {
                        className: "text-sm text-black/75",
                        children: B.SUBSCRIPTION_INFO_MODAL.MY_PLAN
                    }),
                    y[8] = m) : m = y[8];
            let k = I?.plan ?? "N/A";
            y[9] !== k ? (u = (0,
                t.jsx)("p", {
                    className: "text-sm font-medium text-black",
                    children: k
                }),
                y[9] = k,
                y[10] = u) : u = y[10];
            let O = I?.price;
            y[11] !== O ? (f = (0,
                t.jsx)("p", {
                    className: "text-sm text-black/75",
                    children: O
                }),
                y[11] = O,
                y[12] = f) : f = y[12],
                y[13] !== u || y[14] !== f ? (h = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [m, u, f]
                    }),
                    y[13] = u,
                    y[14] = f,
                    y[15] = h) : h = y[15],
                y[16] === Symbol.for("react.memo_cache_sentinel") ? (p = (0,
                    t.jsx)(_.default, {}),
                    y[16] = p) : p = y[16];
            let R = I?.nextPayment ?? "N/A";
            return y[17] !== R ? (N = (0,
                t.jsxs)("p", {
                    className: "text-sm text-black/75",
                    children: [B.SUBSCRIPTION_INFO_MODAL.NEXT_BILLING_DATE, " ", R]
                }),
                y[17] = R,
                y[18] = N) : N = y[18],
                y[19] !== A || y[20] !== w || y[21] !== v ? (g = (0,
                    t.jsx)(d.default, {
                        onClick: () => {
                            A ? P.toast.info("Your subscription is already cancelled") : (v(),
                                w())
                        }
                        ,
                        styleClassName: "transparent",
                        className: "h-fit p-0",
                        children: B.SUBSCRIPTION_INFO_MODAL.CANCEL_RENEWAL
                    }),
                    y[19] = A,
                    y[20] = w,
                    y[21] = v,
                    y[22] = g) : g = y[22],
                y[23] !== N || y[24] !== g ? (j = (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [N, g]
                    }),
                    y[23] = N,
                    y[24] = g,
                    y[25] = j) : j = y[25],
                y[26] !== h || y[27] !== j || y[28] !== i || y[29] !== o ? (S = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-5 p-5 card rounded-sm",
                        children: [i, r, o, h, p, j]
                    }),
                    y[26] = h,
                    y[27] = j,
                    y[28] = i,
                    y[29] = o,
                    y[30] = S) : S = y[30],
                y[31] !== C || y[32] !== v || y[33] !== S ? (b = (0,
                    t.jsx)(x.default, {
                        isVisible: C,
                        onClose: v,
                        zIndexClass: "z-200",
                        contentClassName: "w-content-width md:w-25",
                        children: S
                    }),
                    y[31] = C,
                    y[32] = v,
                    y[33] = S,
                    y[34] = b) : b = y[34],
                b
        }
        ;
    e.i(6191),
        e.i(37018),
        e.i(98138),
        e.i(48153);
    var eg = e.i(72520)
        , ej = e.i(57688);
    let eS = e => {
        let l, s, i, r, n, c = (0,
            a.c)(14), { children: o, imageSrc: d, imageAlt: u, imageContainerClassName: f, useFillImage: x } = e, h = void 0 === x || x;
        return c[0] !== o ? (l = (0,
            t.jsx)("div", {
                className: "flex flex-col gap-5",
                children: o
            }),
            c[0] = o,
            c[1] = l) : l = c[1],
            c[2] !== f ? (s = (0,
                m.cls)("flex items-center justify-center rounded-sm overflow-hidden", f),
                c[2] = f,
                c[3] = s) : s = c[3],
            c[4] !== u || c[5] !== d || c[6] !== h ? (i = h ? (0,
                t.jsx)(ej.default, {
                    src: d,
                    alt: u,
                    fill: !0,
                    className: "object-cover"
                }) : (0,
                    t.jsx)(ej.default, {
                        src: d,
                        alt: u,
                        width: 0,
                        height: 0,
                        sizes: "100vw",
                        className: "h-auto w-full"
                    }),
                c[4] = u,
                c[5] = d,
                c[6] = h,
                c[7] = i) : i = c[7],
            c[8] !== s || c[9] !== i ? (r = (0,
                t.jsx)("div", {
                    className: s,
                    children: i
                }),
                c[8] = s,
                c[9] = i,
                c[10] = r) : r = c[10],
            c[11] !== l || c[12] !== r ? (n = (0,
                t.jsx)("div", {
                    className: "relative p-8 w-full md:w-50 2xl:w-55 button-secondary rounded-sm",
                    children: (0,
                        t.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [l, r]
                        })
                }),
                c[11] = l,
                c[12] = r,
                c[13] = n) : n = c[13],
            n
    }
        ;
    var eb = e.i(4392);
    let ey = e => {
        let s, i, r, n, c, o, m, u, f, x = (0,
            a.c)(18), { onNext: h, onBack: p } = e;
        x[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [],
            x[0] = s) : s = x[0],
            (0,
                l.useEffect)(e_, s),
            x[1] !== p ? (i = () => {
                (0,
                    eb.clarityEvent)("cancel_retention_worked"),
                    p()
            }
                ,
                x[1] = p,
                x[2] = i) : i = x[2];
        let N = i;
        return x[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0,
            t.jsx)("h2", {
                className: "text-lg font-medium text-black leading-snug",
                children: B.CANCEL_FLOW.RETENTION.TITLE
            }),
            x[3] = r) : r = x[3],
            x[4] !== N ? (n = B.RETENTION_FEATURES.map(e => (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0,
                        t.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                                t.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [(0,
                                        t.jsx)("h3", {
                                            className: "text-sm font-medium text-black",
                                            children: e.title
                                        }), (0,
                                            t.jsx)("p", {
                                                className: "text-sm text-black/75 leading-snug",
                                                children: e.description
                                            })]
                                }), (0,
                                    t.jsxs)(d.default, {
                                        onClick: N,
                                        styleClassName: "transparent",
                                        className: "flex items-center gap-1 p-0 w-fit h-fit text-xs text-blue",
                                        children: [B.CANCEL_FLOW.RETENTION.TRY_IT_NOW, (0,
                                            t.jsx)(eg.ArrowRight, {
                                                className: "h-3 w-3"
                                            })]
                                    })]
                        }), (0,
                            t.jsx)(_.default, {})]
                }, e.title)),
                x[4] = N,
                x[5] = n) : n = x[5],
            x[6] !== n ? (c = (0,
                t.jsx)("div", {
                    className: "flex flex-col gap-4 flex-1",
                    children: n
                }),
                x[6] = n,
                x[7] = c) : c = x[7],
            x[8] !== N ? (o = (0,
                t.jsx)(d.default, {
                    styleClassName: "button-accent",
                    onClick: N,
                    className: "flex-1",
                    children: B.CANCEL_FLOW.RETENTION.RETURN_TO_DASHBOARD
                }),
                x[8] = N,
                x[9] = o) : o = x[9],
            x[10] !== h ? (m = (0,
                t.jsx)(d.default, {
                    styleClassName: "card",
                    onClick: h,
                    className: "flex-1",
                    children: B.CANCEL_FLOW.RETENTION.CONTINUE
                }),
                x[10] = h,
                x[11] = m) : m = x[11],
            x[12] !== o || x[13] !== m ? (u = (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-3 mt-auto",
                    children: [o, m]
                }),
                x[12] = o,
                x[13] = m,
                x[14] = u) : u = x[14],
            x[15] !== c || x[16] !== u ? (f = (0,
                t.jsxs)(eS, {
                    imageSrc: "https://storage.googleapis.com/webild/default/platform/images/cancel-flow/cancelflow1.svg",
                    imageAlt: B.CANCEL_FLOW.ALT_TEXTS.RETENTION,
                    imageContainerClassName: "relative h-100 md:h-full",
                    children: [r, c, u]
                }),
                x[15] = c,
                x[16] = u,
                x[17] = f) : f = x[17],
            f
    }
        ;
    function e_() {
        (0,
            eb.clarityEvent)("cancel_retention_shown")
    }
    let eC = e => {
        let l, s, i, r = (0,
            a.c)(8), { steps: n, currentStep: c, className: o } = e;
        return r[0] !== o ? (l = (0,
            m.cls)("flex items-center gap-2", o),
            r[0] = o,
            r[1] = l) : l = r[1],
            r[2] !== c || r[3] !== n ? (s = Array.from({
                length: n
            }, (e, a) => {
                let l = a + 1
                    , s = l < c
                    , i = l === c
                    , r = s || i;
                return (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0,
                            t.jsx)(b.default, {
                                animationType: "fade",
                                className: (0,
                                    m.cls)("h-7 w-auto aspect-square flex items-center justify-center rounded-full", r ? "card-active" : "card"),
                                children: (0,
                                    t.jsx)("span", {
                                        className: (0,
                                            m.cls)("text-xs font-medium", r ? "text-blue" : "text-black/75"),
                                        children: l
                                    })
                            }, r ? "active" : "inactive"), l < n && (0,
                                t.jsx)(b.default, {
                                    animationType: "fade",
                                    className: (0,
                                        m.cls)("h-0.5 w-9 rounded-full", s ? "card-active" : "bg-white shadow-xs"),
                                    children: (0,
                                        t.jsx)(t.Fragment, {})
                                }, s ? "completed" : "incomplete")]
                    }, l)
            }
            ),
                r[2] = c,
                r[3] = n,
                r[4] = s) : s = r[4],
            r[5] !== l || r[6] !== s ? (i = (0,
                t.jsx)("div", {
                    className: l,
                    children: s
                }),
                r[5] = l,
                r[6] = s,
                r[7] = i) : i = r[7],
            i
    }
        ;
    var ev = e.i(36587);
    let ew = e => {
        let s, i, r, n, c, o, m, u, f, x, h, p, N, g, j, S, y = (0,
            a.c)(51), { onNext: _, onBack: C } = e, [v, w] = (0,
                l.useState)(1), [I, T] = (0,
                    l.useState)(""), [A, E] = (0,
                        l.useState)(""), [k, P] = (0,
                            l.useState)("");
        y[0] !== v || y[1] !== _ ? (s = () => {
            v < 3 ? w(eI) : _()
        }
            ,
            y[0] = v,
            y[1] = _,
            y[2] = s) : s = y[2];
        let O = s;
        y[3] !== v || y[4] !== I || y[5] !== A || y[6] !== k ? (i = () => 1 === v ? I : 2 === v ? A : k,
            y[3] = v,
            y[4] = I,
            y[5] = A,
            y[6] = k,
            y[7] = i) : i = y[7];
        let R = i;
        y[8] !== v ? (r = e => {
            1 === v ? T(e) : 2 === v ? E(e) : P(e)
        }
            ,
            y[8] = v,
            y[9] = r) : r = y[9];
        let L = r
            , D = B.FEEDBACK_STEPS[v];
        y[10] !== R ? (n = R(),
            y[10] = R,
            y[11] = n) : n = y[11];
        let F = n;
        if (y[12] !== v ? (c = (0,
            t.jsx)(eC, {
                steps: 3,
                currentStep: v
            }),
            y[12] = v,
            y[13] = c) : c = y[13],
            y[14] !== D.question ? (o = (0,
                t.jsx)("h2", {
                    className: "text-lg font-medium text-black leading-snug",
                    children: D.question
                }),
                y[14] = D.question,
                y[15] = o) : o = y[15],
            y[16] !== F || y[17] !== D.options || y[18] !== v || y[19] !== L) {
            let e;
            y[21] !== F || y[22] !== v || y[23] !== L ? (e = e => (0,
                t.jsx)(ev.default, {
                    label: e,
                    value: e,
                    checked: F === e,
                    onChange: L,
                    name: `feedback-step-${v}`
                }, e),
                y[21] = F,
                y[22] = v,
                y[23] = L,
                y[24] = e) : e = y[24],
                m = D.options.map(e),
                y[16] = F,
                y[17] = D.options,
                y[18] = v,
                y[19] = L,
                y[20] = m
        } else
            m = y[20];
        y[25] !== v ? (u = 3 === v && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                    t.jsx)("div", {
                        className: "invisible",
                        children: (0,
                            t.jsx)(ev.default, {
                                label: B.CANCEL_FLOW.FEEDBACK.HIDDEN_OPTION,
                                value: "hidden1",
                                checked: !1,
                                onChange: eT,
                                name: `feedback-step-${v}`
                            })
                    }), (0,
                        t.jsx)("div", {
                            className: "invisible",
                            children: (0,
                                t.jsx)(ev.default, {
                                    label: B.CANCEL_FLOW.FEEDBACK.HIDDEN_OPTION,
                                    value: "hidden2",
                                    checked: !1,
                                    onChange: eA,
                                    name: `feedback-step-${v}`
                                })
                        })]
            }),
            y[25] = v,
            y[26] = u) : u = y[26],
            y[27] !== m || y[28] !== u ? (f = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [m, u]
                }),
                y[27] = m,
                y[28] = u,
                y[29] = f) : f = y[29],
            y[30] !== C ? (x = (0,
                t.jsx)(d.default, {
                    styleClassName: "button-accent",
                    onClick: C,
                    className: "flex-1",
                    children: B.CANCEL_FLOW.FEEDBACK.I_WANT_TO_STAY
                }),
                y[30] = C,
                y[31] = x) : x = y[31];
        let U = !F;
        return y[32] !== O || y[33] !== U ? (h = (0,
            t.jsx)(d.default, {
                onClick: O,
                disabled: U,
                styleClassName: "card",
                className: "flex-1",
                children: B.CANCEL_FLOW.FEEDBACK.CONTINUE
            }),
            y[32] = O,
            y[33] = U,
            y[34] = h) : h = y[34],
            y[35] !== x || y[36] !== h ? (p = (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-3 mt-3",
                    children: [x, h]
                }),
                y[35] = x,
                y[36] = h,
                y[37] = p) : p = y[37],
            y[38] !== p || y[39] !== o || y[40] !== f ? (N = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-2 flex-1",
                    children: [o, f, p]
                }),
                y[38] = p,
                y[39] = o,
                y[40] = f,
                y[41] = N) : N = y[41],
            y[42] !== N || y[43] !== c ? (g = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-5",
                    children: [c, N]
                }),
                y[42] = N,
                y[43] = c,
                y[44] = g) : g = y[44],
            y[45] !== D.image ? (j = (0,
                t.jsx)("div", {
                    className: "relative flex items-center justify-center h-100 md:h-full card rounded-sm overflow-hidden",
                    children: (0,
                        t.jsx)(ej.default, {
                            src: D.image,
                            alt: B.CANCEL_FLOW.ALT_TEXTS.FEEDBACK,
                            fill: !0,
                            className: "object-cover"
                        })
                }),
                y[45] = D.image,
                y[46] = j) : j = y[46],
            y[47] !== v || y[48] !== g || y[49] !== j ? (S = (0,
                t.jsx)("div", {
                    className: "relative p-8 w-full md:w-50 2xl:w-55 button-secondary rounded-sm",
                    children: (0,
                        t.jsxs)(b.default, {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [g, j]
                        }, v)
                }),
                y[47] = v,
                y[48] = g,
                y[49] = j,
                y[50] = S) : S = y[50],
            S
    }
        ;
    function eI(e) {
        return e + 1
    }
    function eT() { }
    function eA() { }
    var eE = e.i(87935)
        , ek = e.i(18279)
        , eP = e.i(20047);
    let eO = e => {
        let s, i, r, n, c, o, m, u, f = (0,
            a.c)(19), { onCancel: x, onBack: h } = e, { confirmed: p, isCancelling: N, toggleConfirmed: g, handleCancel: j } = (e => {
                let [t, a] = (0,
                    l.useState)(!1)
                    , [s, i] = (0,
                        l.useState)(!1)
                    , { getAuthenticatedToken: r } = (0,
                        eP.useApi)();
                return {
                    confirmed: t,
                    isCancelling: s,
                    toggleConfirmed: () => a(e => !e),
                    handleCancel: async () => {
                        try {
                            i(!0);
                            let t = await r();
                            if (!t)
                                throw Error("Authentication token not found");
                            await (0,
                                ek.cancelSubscriptionAPI)(t),
                                (0,
                                    eb.clarityEvent)("subscription_cancelled"),
                                P.toast.success("Subscription cancelled successfully"),
                                e()
                        } catch (e) {
                            P.toast.error(e instanceof Error ? e.message : "Failed to cancel subscription")
                        } finally {
                            i(!1)
                        }
                    }
                }
            }
            )(x);
        f[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0,
            t.jsx)("h2", {
                className: "text-lg font-medium text-black leading-snug",
                children: B.CANCEL_FLOW.CANCEL_SUBSCRIPTION.TITLE
            }),
            f[0] = s) : s = f[0],
            f[1] !== p || f[2] !== g ? (i = (0,
                t.jsx)(eE.default, {
                    checked: p,
                    onChange: g,
                    className: "shrink-0"
                }),
                f[1] = p,
                f[2] = g,
                f[3] = i) : i = f[3],
            f[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0,
                t.jsx)("p", {
                    className: "text-sm text-black/75",
                    children: B.CANCEL_FLOW.CANCEL_SUBSCRIPTION.CONFIRMATION_TEXT
                }),
                f[4] = r) : r = f[4],
            f[5] !== i ? (n = (0,
                t.jsxs)("div", {
                    className: "flex items-start gap-3",
                    children: [i, r]
                }),
                f[5] = i,
                f[6] = n) : n = f[6],
            f[7] !== h ? (c = (0,
                t.jsx)(d.default, {
                    styleClassName: "button-accent",
                    onClick: h,
                    className: "flex-1 text-nowrap px-0!",
                    children: B.CANCEL_FLOW.CANCEL_SUBSCRIPTION.KEEP_SUBSCRIPTION
                }),
                f[7] = h,
                f[8] = c) : c = f[8];
        let S = !p;
        return f[9] !== j || f[10] !== N || f[11] !== S ? (o = (0,
            t.jsx)(d.default, {
                onClick: j,
                disabled: S,
                isLoading: N,
                loadingText: B.CANCEL_FLOW.CANCEL_SUBSCRIPTION.CANCELLING,
                styleClassName: "card",
                className: "flex-1 text-nowrap px-0!",
                children: B.CANCEL_FLOW.CANCEL_SUBSCRIPTION.CANCEL_BUTTON
            }),
            f[9] = j,
            f[10] = N,
            f[11] = S,
            f[12] = o) : o = f[12],
            f[13] !== c || f[14] !== o ? (m = (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-3 mt-auto",
                    children: [c, o]
                }),
                f[13] = c,
                f[14] = o,
                f[15] = m) : m = f[15],
            f[16] !== n || f[17] !== m ? (u = (0,
                t.jsxs)(eS, {
                    imageSrc: "https://storage.googleapis.com/webild/default/platform/images/cancel-flow/cancelflow5.svg",
                    imageAlt: B.CANCEL_FLOW.ALT_TEXTS.CANCEL,
                    imageContainerClassName: "card",
                    useFillImage: !1,
                    children: [s, n, m]
                }),
                f[16] = n,
                f[17] = m,
                f[18] = u) : u = f[18],
            u
    }
        , eR = e => {
            let s, i, r, n, c, o, d, m, u, f, x, h = (0,
                a.c)(22), { onBack: p, onClose: N } = e, [g, j] = (0,
                    l.useState)("retention");
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [],
                h[0] = s) : s = h[0],
                (0,
                    l.useEffect)(eL, s),
                h[1] === Symbol.for("react.memo_cache_sentinel") ? (i = () => j("feedback"),
                    h[1] = i) : i = h[1],
                h[2] !== N ? (r = (0,
                    t.jsx)(ey, {
                        onNext: i,
                        onBack: N
                    }),
                    h[2] = N,
                    h[3] = r) : r = h[3],
                h[4] === Symbol.for("react.memo_cache_sentinel") ? (n = () => j("cancel"),
                    h[4] = n) : n = h[4],
                h[5] !== N ? (c = (0,
                    t.jsx)(ew, {
                        onNext: n,
                        onBack: N
                    }),
                    h[5] = N,
                    h[6] = c) : c = h[6],
                h[7] === Symbol.for("react.memo_cache_sentinel") ? (o = () => j("feedback"),
                    h[7] = o) : o = h[7],
                h[8] !== N ? (d = (0,
                    t.jsx)(eO, {
                        onCancel: N,
                        onBack: o
                    }),
                    h[8] = N,
                    h[9] = d) : d = h[9],
                h[10] !== r || h[11] !== c || h[12] !== d ? (m = {
                    retention: r,
                    feedback: c,
                    cancel: d
                },
                    h[10] = r,
                    h[11] = c,
                    h[12] = d,
                    h[13] = m) : m = h[13];
            let S = m;
            h[14] !== p ? (u = (0,
                t.jsx)(er.default, {
                    baseLabel: B.CANCEL_PLAN_CONTENT.BREADCRUMB_BASE,
                    currentLabel: B.CANCEL_PLAN_CONTENT.BREADCRUMB_CURRENT,
                    onBack: p
                }),
                h[14] = p,
                h[15] = u) : u = h[15];
            let y = S[g];
            return h[16] !== g || h[17] !== y ? (f = (0,
                t.jsx)(b.default, {
                    className: "flex flex-col items-center gap-5 my-auto w-full h-fit",
                    children: y
                }, g),
                h[16] = g,
                h[17] = y,
                h[18] = f) : f = h[18],
                h[19] !== f || h[20] !== u ? (x = (0,
                    t.jsxs)(b.default, {
                        className: "flex flex-col gap-5 p-5 w-full h-full overflow-y-auto",
                        children: [u, f]
                    }),
                    h[19] = f,
                    h[20] = u,
                    h[21] = x) : x = h[21],
                x
        }
        ;
    function eL() {
        (0,
            eb.clarityEvent)("cancel_flow_started")
    }
    let eD = e => new Date(1e3 * e).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    function eF(e, t) {
        return t.created - e.created
    }
    function eU(e) {
        return [e.cardLast, e]
    }
    function eB(e, t) {
        return t.created - e.created
    }
    function eG(e) {
        return {
            cardLast4: e.cardLast
        }
    }
    function eM() {
        U.useModalStore.getState().openModal("pricing")
    }
    let eV = e => {
        let s, i, r, n, c, o, m, u, f = (0,
            a.c)(28), { onClose: x } = e, { subscription: h, isLoading: p, isFreePlan: N, isUltraPlan: g, isCancelled: j, isEndingSoon: S, subscriptionEndDate: y, handleUpgradePlan: C, billingHistory: I } = (() => {
                let e, t, s, i, r, n = (0,
                    a.c)(16), c = (0,
                        H.useLimits)(), { setSettingsModalOpen: o } = (0,
                            q.useUIStore)(), d = (e => {
                                let t, l = (0,
                                    a.c)(15);
                                if (l[0] !== e) {
                                    e: {
                                        let a, s, i, r;
                                        if (!e || "free" === e.plan) {
                                            t = null;
                                            break e
                                        }
                                        let n = v.billingStorage.getSubscription();
                                        if (!n || null == n.currentPeriodStart || null == n.currentPeriodEnd) {
                                            t = null;
                                            break e
                                        }
                                        let c = v.billingStorage.getCharges()
                                            , o = n.amount / 100;
                                        l[2] !== o ? (a = o.toFixed(2),
                                            l[2] = o,
                                            l[3] = a) : a = l[3];
                                        let d = `$${a}`
                                            , m = eD(n.currentPeriodStart)
                                            , u = eD(n.currentPeriodEnd)
                                            , f = c && c.length > 0 ? [...c].sort(eF)[0] : null
                                            , x = new Date(1e3 * n.currentPeriodEnd);
                                        "year" === n.interval ? x.setFullYear(x.getFullYear() + 1) : x.setMonth(x.getMonth() + 1),
                                            l[4] !== e.plan ? (s = (0,
                                                w.getPlanDisplayName)(e.plan),
                                                l[4] = e.plan,
                                                l[5] = s) : s = l[5];
                                        let h = f?.receiptUrl ?? null;
                                        l[6] !== d || l[7] !== u || l[8] !== m || l[9] !== s || l[10] !== h ? (i = {
                                            periodStart: m,
                                            periodEnd: u,
                                            amount: d,
                                            planName: s,
                                            receiptUrl: h
                                        },
                                            l[6] = d,
                                            l[7] = u,
                                            l[8] = m,
                                            l[9] = s,
                                            l[10] = h,
                                            l[11] = i) : i = l[11];
                                        let p = n.cancelAtPeriodEnd ? null : {
                                            periodStart: u,
                                            periodEnd: eD(Math.floor(x.getTime() / 1e3)),
                                            amount: d
                                        };
                                        l[12] !== i || l[13] !== p ? (r = {
                                            currentBilling: i,
                                            nextPayment: p
                                        },
                                            l[12] = i,
                                            l[13] = p,
                                            l[14] = r) : r = l[14],
                                            t = r
                                    }
                                    l[0] = e,
                                        l[1] = t
                                } else
                                    t = l[1];
                                return t
                            }
                            )(c), [m, u] = (0,
                                l.useState)(null), [f, x] = (0,
                                    l.useState)(!0);
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [],
                    n[0] = e) : e = n[0];
                let [h, p] = (0,
                    l.useState)(e)
                    , [N, g] = (0,
                        l.useState)(!0)
                    , [j, S] = (0,
                        l.useState)(!1)
                    , [b, y] = (0,
                        l.useState)(!1)
                    , [_, C] = (0,
                        l.useState)(!1)
                    , [I, T] = (0,
                        l.useState)(!1)
                    , [A, E] = (0,
                        l.useState)(null);
                n[1] !== c ? (t = () => {
                    if (!c || "free" === c.plan) {
                        u(null),
                            g(!1),
                            S(!0),
                            y(!1),
                            C(!1),
                            T(!1),
                            E(null);
                        return
                    }
                    if (C(c.isCancelled),
                        y("monthly_pro" === c.plan || "yearly_pro" === c.plan || "monthly_ultra" === c.plan || "yearly_ultra" === c.plan),
                        c.isCancelled && c.period?.end) {
                        let e = new Date(c.period.end)
                            , t = new Date
                            , a = Math.ceil((e.getTime() - t.getTime()) / 864e5);
                        T(a <= 10 && a >= 0),
                            E(e.toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            }))
                    } else
                        T(!1),
                            E(null);
                    let e = c.plan
                        , t = v.billingStorage.getSubscription()
                        , a = v.billingStorage.getPlanByCode(e);
                    if (t || a) {
                        let l = (t?.interval ?? a?.interval) === "year"
                            , s = t?.amount ?? a?.unitAmount ?? 0
                            , i = (t?.currency ?? a?.currency ?? "usd").toUpperCase()
                            , r = `$${(s / 100).toFixed(2)} ${i}`
                            , n = t?.currentPeriodEnd ? new Date(1e3 * t.currentPeriodEnd) : c.period?.end ? new Date(c.period.end) : null
                            , o = n ? n.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            }) : "N/A";
                        u({
                            plan: (0,
                                w.getPlanDisplayName)(e),
                            price: `${r} ${l ? "p/year" : "p/month"}`,
                            billingCycle: l ? "Billed yearly" : "Billed monthly",
                            nextPayment: o
                        }),
                            S(!1)
                    } else
                        u(null),
                            S(!0);
                    let l = v.billingStorage.getCharges();
                    l && l.length > 0 ? p(Array.from(new Map(l.map(eU)).values()).sort(eB).map(eG)) : p([]),
                        g(!1)
                }
                    ,
                    s = [c],
                    n[1] = c,
                    n[2] = t,
                    n[3] = s) : (t = n[2],
                        s = n[3]),
                    (0,
                        l.useEffect)(t, s),
                    n[4] === Symbol.for("react.memo_cache_sentinel") ? (i = e => {
                        x(e)
                    }
                        ,
                        n[4] = i) : i = n[4];
                let k = i;
                return n[5] !== f || n[6] !== d || n[7] !== _ || n[8] !== I || n[9] !== j || n[10] !== N || n[11] !== b || n[12] !== h || n[13] !== m || n[14] !== A ? (r = {
                    subscription: m,
                    autoRefill: f,
                    paymentDetails: h,
                    billingHistory: d,
                    isLoading: N,
                    isFreePlan: j,
                    isUltraPlan: b,
                    isCancelled: _,
                    isEndingSoon: I,
                    subscriptionEndDate: A,
                    handleUpgradePlan: eM,
                    handleAutoRefillToggle: k
                },
                    n[5] = f,
                    n[6] = d,
                    n[7] = _,
                    n[8] = I,
                    n[9] = j,
                    n[10] = N,
                    n[11] = b,
                    n[12] = h,
                    n[13] = m,
                    n[14] = A,
                    n[15] = r) : r = n[15],
                    r
            }
            )(), [T, A] = (0,
                l.useState)(!1), [E, k] = (0,
                    l.useState)(!1);
        f[0] !== x ? (s = () => {
            A(!1),
                x()
        }
            ,
            f[0] = x,
            f[1] = s) : s = f[1];
        let P = s;
        if (T) {
            let e, a;
            return f[2] === Symbol.for("react.memo_cache_sentinel") ? (e = () => A(!1),
                f[2] = e) : e = f[2],
                f[3] !== P ? (a = (0,
                    t.jsx)(eR, {
                        onBack: e,
                        onClose: P
                    }),
                    f[3] = P,
                    f[4] = a) : a = f[4],
                a
        }
        let O = p ? "loading" : `${N}-${g}`;
        return f[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0,
            t.jsx)(er.default, {
                baseLabel: B.BILLING_CONTENT.BREADCRUMB_BASE,
                currentLabel: B.BILLING_CONTENT.BREADCRUMB_CURRENT,
                icon: K.AppWindowMac
            }),
            f[5] = i) : i = f[5],
            f[6] !== I || f[7] !== C || f[8] !== S || f[9] !== N || f[10] !== p || f[11] !== g || f[12] !== h || f[13] !== y ? (r = (0,
                t.jsx)("div", {
                    className: "flex flex-col items-center gap-5 w-full h-fit",
                    children: p ? (0,
                        t.jsx)(ei, {}) : (0,
                            t.jsxs)("div", {
                                className: "relative flex flex-col gap-5 p-5 w-full md:w-50 2xl:w-55 button-secondary rounded-sm",
                                children: [(0,
                                    t.jsx)("h2", {
                                        className: "text-lg font-medium text-black leading-snug",
                                        children: B.BILLING_CONTENT.SUBSCRIPTION_HEADING
                                    }), (0,
                                        t.jsx)(_.default, {}), S && y && (0,
                                            t.jsxs)("div", {
                                                className: "relative flex flex-col md:flex-row md:items-center justify-between gap-3 p-5 w-full button-accent rounded",
                                                children: [(0,
                                                    t.jsxs)("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [(0,
                                                            t.jsxs)("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [(0,
                                                                    t.jsx)(Q.Info, {
                                                                        className: "shrink-0 h-(--text-base) w-auto text-white",
                                                                        strokeWidth: 2.25
                                                                    }), (0,
                                                                        t.jsxs)("p", {
                                                                            className: "text-base font-medium text-white",
                                                                            children: [B.BILLING_CONTENT.SUBSCRIPTION_ENDING.TITLE, " ", y]
                                                                        })]
                                                            }), (0,
                                                                t.jsx)("p", {
                                                                    className: "text-xs leading-snug text-balance text-white",
                                                                    children: B.BILLING_CONTENT.SUBSCRIPTION_ENDING.DESCRIPTION
                                                                })]
                                                    }), (0,
                                                        t.jsx)(d.default, {
                                                            onClick: C,
                                                            className: "w-fit shrink-0",
                                                            children: B.BILLING_CONTENT.REACTIVATE_BUTTON
                                                        })]
                                            }), (0,
                                                t.jsx)(ep, {
                                                    subscription: h,
                                                    isFreePlan: N,
                                                    onUpgrade: C
                                                }), !N && (0,
                                                    t.jsxs)(t.Fragment, {
                                                        children: [(0,
                                                            t.jsx)(eh, {}), (0,
                                                                t.jsx)(G, {
                                                                    isUltraPlan: g
                                                                }), (0,
                                                                    t.jsx)(eu, {
                                                                        billingHistory: I,
                                                                        onSubscriptionInfoClick: () => k(!0)
                                                                    })]
                                                    })]
                            })
                }),
                f[6] = I,
                f[7] = C,
                f[8] = S,
                f[9] = N,
                f[10] = p,
                f[11] = g,
                f[12] = h,
                f[13] = y,
                f[14] = r) : r = f[14],
            f[15] !== O || f[16] !== r ? (n = (0,
                t.jsxs)(b.default, {
                    className: "flex flex-col gap-5 p-5 pb-0 w-full h-full overflow-y-auto",
                    children: [i, r]
                }, O),
                f[15] = O,
                f[16] = r,
                f[17] = n) : n = f[17],
            f[18] === Symbol.for("react.memo_cache_sentinel") ? (c = () => k(!1),
                o = () => A(!0),
                f[18] = c,
                f[19] = o) : (c = f[18],
                    o = f[19]),
            f[20] !== I || f[21] !== j || f[22] !== E || f[23] !== h ? (m = (0,
                t.jsx)(eN, {
                    isVisible: E,
                    onClose: c,
                    onCancelRenewal: o,
                    subscription: h,
                    billingHistory: I,
                    isCancelled: j
                }),
                f[20] = I,
                f[21] = j,
                f[22] = E,
                f[23] = h,
                f[24] = m) : m = f[24],
            f[25] !== n || f[26] !== m ? (u = (0,
                t.jsxs)(t.Fragment, {
                    children: [n, m]
                }),
                f[25] = n,
                f[26] = m,
                f[27] = u) : u = f[27],
            u
    }
        ;
    var eW = e.i(38703)
        , e$ = e.i(40846)
        , ez = e.i(19044)
        , eY = e.i(73884)
        , eq = e.i(30906)
        , eH = e.i(48238)
        , eX = e.i(32583)
        , eK = e.i(32240)
        , eQ = e.i(14141)
        , eZ = e.i(75505)
        , eJ = e.i(7621)
        , e0 = e.i(56581)
        , e1 = e.i(9613);
    let e2 = e => {
        let l, s, i, r = (0,
            a.c)(5), { isVisible: n } = e, c = n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";
        return r[0] !== c ? (l = (0,
            m.cls)("absolute! inset-0 py-4 transition-opacity duration-300", c),
            r[0] = c,
            r[1] = l) : l = r[1],
            r[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0,
                t.jsx)("div", {
                    className: "relative flex items-center justify-center w-full h-full button-secondary rounded-sm",
                    children: (0,
                        t.jsx)(u.default, {
                            className: "w-40 md:w-15"
                        })
                }),
                r[2] = s) : s = r[2],
            r[3] !== l ? (i = (0,
                t.jsx)("div", {
                    className: l,
                    children: s
                }),
                r[3] = l,
                r[4] = i) : i = r[4],
            i
    }
        ;
    var e3 = e.i(90193)
        , e5 = e.i(33879);
    let e4 = e => {
        let l, s, i, r, n, c, o, u, f = (0,
            a.c)(28), { project: x, isSelected: h, isProcessing: p, selectLabel: N, onSelect: g } = e, j = !x.publish_url;
        f[0] !== p || f[1] !== g || f[2] !== x.id ? (l = e => {
            e.stopPropagation(),
                p || g(x.id)
        }
            ,
            f[0] = p,
            f[1] = g,
            f[2] = x.id,
            f[3] = l) : l = f[3];
        let S = l
            , y = p && "opacity-50";
        f[4] !== y ? (s = (0,
            m.cls)("h-fit cursor-default transition-all duration-500", y),
            f[4] = y,
            f[5] = s) : s = f[5];
        let _ = j ? null : x.publish_url;
        f[6] !== j || f[7] !== x.id || f[8] !== _ ? (i = (0,
            t.jsx)(e3.ProjectCardScreenshot, {
                url: _,
                projectId: x.id,
                isUnpublished: j
            }),
            f[6] = j,
            f[7] = x.id,
            f[8] = _,
            f[9] = i) : i = f[9];
        let C = x.name;
        f[10] !== x.updatedAt ? (r = (0,
            e5.timeAgo)(x.updatedAt),
            f[10] = x.updatedAt,
            f[11] = r) : r = f[11];
        let v = `Edited ${r}`
            , w = h ? "assigned" : "unassigned";
        return f[12] !== S || f[13] !== p || f[14] !== h || f[15] !== N ? (n = h ? (0,
            t.jsx)(d.default, {
                onClick: S,
                disabled: p,
                className: "px-6 h-9 text-xs",
                styleClassName: "button-accent",
                children: "Assigned"
            }) : (0,
                t.jsx)(d.default, {
                    onClick: S,
                    disabled: p,
                    className: "px-6 h-9 text-xs",
                    styleClassName: "card",
                    children: N
                }),
            f[12] = S,
            f[13] = p,
            f[14] = h,
            f[15] = N,
            f[16] = n) : n = f[16],
            f[17] !== n || f[18] !== w ? (c = (0,
                t.jsx)(b.default, {
                    animationType: "fade",
                    className: "w-fit h-fit",
                    children: n
                }, w),
                f[17] = n,
                f[18] = w,
                f[19] = c) : c = f[19],
            f[20] !== x.name || f[21] !== c || f[22] !== v ? (o = (0,
                t.jsx)(e3.ProjectCardContent, {
                    title: C,
                    description: v,
                    className: "items-center!",
                    children: c
                }),
                f[20] = x.name,
                f[21] = c,
                f[22] = v,
                f[23] = o) : o = f[23],
            f[24] !== o || f[25] !== s || f[26] !== i ? (u = (0,
                t.jsxs)(e3.ProjectCard, {
                    styleClassName: "button-secondary",
                    className: s,
                    children: [i, o]
                }),
                f[24] = o,
                f[25] = s,
                f[26] = i,
                f[27] = u) : u = f[27],
            u
    }
        ;
    var e6 = e.i(12012)
        , e6 = e6
        , e7 = e.i(41079)
        , e8 = e.i(6299);
    let e9 = e => {
        let l, s, i, r, n, c, o = (0,
            a.c)(19), { searchQuery: m, onSearchChange: u, selectedProjectId: f, isProcessing: x, hideNextButton: h, skipLabel: p, onSkip: N, onNext: g } = e;
        return o[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
            t.jsx)(e6.default, {
                className: "h-4/10 w-4/10 text-black"
            }),
            o[0] = l) : l = o[0],
            o[1] !== N ? (s = (0,
                t.jsx)(d.default, {
                    onClick: N,
                    className: "flex items-center justify-center shrink-0 p-0! h-9 w-auto aspect-square",
                    children: l
                }),
                o[1] = N,
                o[2] = s) : s = o[2],
            o[3] !== u || o[4] !== m ? (i = (0,
                t.jsx)(e7.default, {
                    value: m,
                    onChange: u,
                    placeholder: e8.DOMAIN_STRINGS.projectSelection.searchPlaceholder,
                    className: "h-9 w-full md:w-20"
                }),
                o[3] = u,
                o[4] = m,
                o[5] = i) : i = o[5],
            o[6] !== s || o[7] !== i ? (r = (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-5 w-full md:w-auto",
                    children: [s, i]
                }),
                o[6] = s,
                o[7] = i,
                o[8] = r) : r = o[8],
            o[9] !== h || o[10] !== x || o[11] !== g || o[12] !== N || o[13] !== f || o[14] !== p ? (n = !h && (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-3 w-full md:w-auto",
                    children: [(0,
                        t.jsx)(d.default, {
                            onClick: N,
                            disabled: x,
                            className: "px-8 w-1/2 md:w-auto",
                            styleClassName: "button-secondary",
                            children: p
                        }), (0,
                            t.jsx)(d.default, {
                                onClick: g,
                                disabled: !f,
                                isLoading: x,
                                loadingText: e8.DOMAIN_STRINGS.projectSelectionControls.connecting,
                                styleClassName: "button-accent",
                                className: "px-6 w-1/2 md:w-auto",
                                children: e8.DOMAIN_STRINGS.projectSelectionControls.continue
                            })]
                }),
                o[9] = h,
                o[10] = x,
                o[11] = g,
                o[12] = N,
                o[13] = f,
                o[14] = p,
                o[15] = n) : n = o[15],
            o[16] !== r || o[17] !== n ? (c = (0,
                t.jsxs)("div", {
                    className: "flex flex-col justify-between gap-5 mt-5 md:flex-row md:items-center",
                    children: [r, n]
                }),
                o[16] = r,
                o[17] = n,
                o[18] = c) : c = o[18],
            c
    }
        , te = e => {
            let s, i, r, n, c, o, d, m = (0,
                a.c)(32), { domainName: u, projects: f, selectedProjectId: x, isLoading: h, isProcessing: p, error: N, onProjectSelect: g, onNext: j, onSkip: S, onClose: b, title: y, description: _, skipLabel: C, selectLabel: v, hideNextButton: w } = e, I = void 0 === C ? e8.DOMAIN_STRINGS.common.skip : C, T = void 0 === v ? e8.DOMAIN_STRINGS.projectSelectionScreen.assign : v, A = void 0 !== w && w, E = (0,
                    Y.useRouter)(), [k, P] = (0,
                        l.useState)("");
            m[0] !== f || m[1] !== k ? (s = k.trim() ? f.filter(e => e.name.toLowerCase().includes(k.toLowerCase())) : f,
                m[0] = f,
                m[1] = k,
                m[2] = s) : s = m[2];
            let O = s;
            m[3] !== b || m[4] !== E ? (i = () => {
                b?.(),
                    E.push("/")
            }
                ,
                m[3] = b,
                m[4] = E,
                m[5] = i) : i = m[5];
            let R = i;
            return m[6] !== u || m[7] !== y ? (r = (0,
                t.jsx)("h1", {
                    className: "text-lg font-medium text-black leading-snug",
                    children: y ? (0,
                        t.jsx)("span", {
                            children: y
                        }) : (0,
                            t.jsxs)(t.Fragment, {
                                children: [e8.DOMAIN_STRINGS.projectSelectionScreen.assign, (0,
                                    t.jsx)("span", {
                                        className: "px-1 underline",
                                        children: u
                                    }), e8.DOMAIN_STRINGS.projectSelectionScreen.toAProject]
                            })
                }),
                m[6] = u,
                m[7] = y,
                m[8] = r) : r = m[8],
                m[9] !== _ ? (n = _ && (0,
                    t.jsx)("p", {
                        className: "text-sm text-black/75 leading-snug",
                        children: _
                    }),
                    m[9] = _,
                    m[10] = n) : n = m[10],
                m[11] !== r || m[12] !== n ? (c = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [r, n]
                    }),
                    m[11] = r,
                    m[12] = n,
                    m[13] = c) : c = m[13],
                m[14] !== N || m[15] !== O || m[16] !== R || m[17] !== A || m[18] !== h || m[19] !== p || m[20] !== j || m[21] !== g || m[22] !== S || m[23] !== f || m[24] !== k || m[25] !== T || m[26] !== x || m[27] !== I ? (o = h ? (0,
                    t.jsx)(e1.default, {}) : N ? (0,
                        t.jsxs)(e0.default, {
                            icon: eJ.CircleAlert,
                            textColor: "text-red-500",
                            children: [e8.DOMAIN_STRINGS.errors.errorPrefix, " ", N]
                        }) : 0 === f.length ? (0,
                            t.jsx)("div", {
                                className: "relative flex items-center justify-center p-8 h-full card rounded",
                                children: (0,
                                    t.jsx)(eq.default, {
                                        icon: eZ.FolderOpen,
                                        title: e8.DOMAIN_STRINGS.projectSelectionScreen.noPublishedProjects,
                                        description: e8.DOMAIN_STRINGS.projectSelection.publishFirstDescription,
                                        buttonLabel: e8.DOMAIN_STRINGS.projectSelectionScreen.createProject,
                                        buttonStyleClassName: "button-accent",
                                        onButtonClick: R
                                    })
                            }) : (0,
                                t.jsxs)(t.Fragment, {
                                    children: [(0,
                                        t.jsx)(e9, {
                                            searchQuery: k,
                                            onSearchChange: P,
                                            selectedProjectId: x,
                                            isProcessing: p,
                                            hideNextButton: A,
                                            skipLabel: I,
                                            onSkip: S,
                                            onNext: j
                                        }), (0,
                                            t.jsxs)("div", {
                                                className: "relative flex-1 min-h-0",
                                                children: [(0,
                                                    t.jsx)("div", {
                                                        className: "min-h-0 py-5 h-full overflow-y-auto mask-fade-y",
                                                        children: (0,
                                                            t.jsx)("div", {
                                                                className: "grid grid-cols-1 gap-4 min-h-full sm:grid-cols-2 lg:grid-cols-3",
                                                                children: 0 === O.length ? (0,
                                                                    t.jsx)("div", {
                                                                        className: "col-span-full flex flex-1 items-center justify-center p-8 min-h-0 h-full card rounded",
                                                                        children: (0,
                                                                            t.jsx)(eq.default, {
                                                                                icon: eZ.FolderOpen,
                                                                                title: e8.DOMAIN_STRINGS.projectSelectionScreen.noProjectsFound,
                                                                                description: `No projects found matching "${k}"`,
                                                                                buttonStyleClassName: "button-secondary",
                                                                                removeBackground: !0
                                                                            })
                                                                    }) : O.map(e => (0,
                                                                        t.jsx)(e4, {
                                                                            project: e,
                                                                            isSelected: x === e.id,
                                                                            isProcessing: p,
                                                                            selectLabel: T,
                                                                            onSelect: g
                                                                        }, e.id))
                                                            })
                                                    }), (0,
                                                        t.jsx)(e2, {
                                                            isVisible: p
                                                        })]
                                            })]
                                }),
                    m[14] = N,
                    m[15] = O,
                    m[16] = R,
                    m[17] = A,
                    m[18] = h,
                    m[19] = p,
                    m[20] = j,
                    m[21] = g,
                    m[22] = S,
                    m[23] = f,
                    m[24] = k,
                    m[25] = T,
                    m[26] = x,
                    m[27] = I,
                    m[28] = o) : o = m[28],
                m[29] !== c || m[30] !== o ? (d = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-0 w-full h-full",
                        children: [c, o]
                    }),
                    m[29] = c,
                    m[30] = o,
                    m[31] = d) : d = m[31],
                d
        }
        ;
    var tt = e.i(22315);
    let ta = e => {
        let l, s, i = (0,
            a.c)(3), { onClick: r } = e;
        return i[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
            t.jsx)("p", {
                className: "text-base text-white",
                children: e8.DOMAIN_STRINGS.connectBanner.description
            }),
            i[0] = l) : l = i[0],
            i[1] !== r ? (s = (0,
                t.jsxs)("div", {
                    className: "relative flex flex-col justify-between gap-3 p-5 w-full md:flex-row md:items-center button-accent rounded",
                    children: [l, (0,
                        t.jsx)(d.default, {
                            onClick: r,
                            className: "w-fit text-black",
                            children: e8.DOMAIN_STRINGS.connectBanner.button
                        })]
                }),
                i[1] = r,
                i[2] = s) : s = i[2],
            s
    }
        ;
    var tl = e.i(67469)
        , ts = e.i(99887);
    let ti = e => {
        let l, s, i, r = (0,
            a.c)(12), { domainsWithUsage: n, isLoading: c, error: o, handleBuyDomain: d, handleConnectDomain: m, handleDisconnectDomain: u, handleConnectExistingDomain: f } = e, x = c ? "loading" : o ? "error" : "loaded";
        return r[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
            t.jsx)(er.default, {
                baseLabel: e8.DOMAIN_STRINGS.common.settings,
                currentLabel: e8.DOMAIN_STRINGS.breadcrumbs.domains,
                icon: K.AppWindowMac
            }),
            r[0] = l) : l = r[0],
            r[1] !== n || r[2] !== o || r[3] !== d || r[4] !== m || r[5] !== f || r[6] !== u || r[7] !== c ? (s = c ? (0,
                t.jsx)(tt.default, {}) : (0,
                    t.jsxs)("div", {
                        className: "relative flex flex-col mx-auto gap-5 p-5 w-full md:w-50 2xl:w-55 h-fit button-secondary rounded-sm",
                        children: [(0,
                            t.jsx)(tl.default, {
                                title: e8.DOMAIN_STRINGS.breadcrumbs.domains,
                                description: e8.DOMAIN_STRINGS.mainView.globalDescription,
                                buttons: [{
                                    label: e8.DOMAIN_STRINGS.buyDomain.buyButton,
                                    onClick: d,
                                    styleClassName: "button-accent"
                                }]
                            }), o ? (0,
                                t.jsxs)(e0.default, {
                                    icon: eJ.CircleAlert,
                                    textColor: "text-red-500",
                                    children: [e8.DOMAIN_STRINGS.errors.errorPrefix, " ", o]
                                }) : (0,
                                    t.jsxs)(t.Fragment, {
                                        children: [(0,
                                            t.jsx)(_.default, {}), (0,
                                                t.jsx)(ts.default, {
                                                    userDomainsWithUsage: n,
                                                    onBuyClick: d,
                                                    onConnectDomain: m,
                                                    onDisconnectDomain: u,
                                                    showRegistrationStatus: !0
                                                }), (0,
                                                    t.jsx)(_.default, {}), (0,
                                                        t.jsx)(ta, {
                                                            onClick: f
                                                        })]
                                    })]
                    }),
                r[1] = n,
                r[2] = o,
                r[3] = d,
                r[4] = m,
                r[5] = f,
                r[6] = u,
                r[7] = c,
                r[8] = s) : s = r[8],
            r[9] !== x || r[10] !== s ? (i = (0,
                t.jsxs)(t.Fragment, {
                    children: [l, (0,
                        t.jsx)(b.default, {
                            animationType: "fade",
                            className: "w-full",
                            children: s
                        }, x)]
                }),
                r[9] = x,
                r[10] = s,
                r[11] = i) : i = r[11],
            i
    }
        , tr = e => {
            let l, s, i, r, n, c, o, m, u, f, x, h = (0,
                a.c)(61), { currentView: p, domainsWithUsage: N, isLoading: g, error: j, purchasedDomain: S, selectedDomainForConnect: b, selectedProjectName: y, processingError: _, handleBuyDomain: C, handleManageDomains: v, handleBackToList: w, handleConnectDomain: I, handleDisconnectDomain: T, handleSuccessConnect: A, refetchDomains: E, onClose: k, projects: P, allProjects: O, selectedProjectId: R, isLoadingProjects: L, isProcessing: D, projectError: F, handleProjectSelect: U, handleProjectNext: B, handleProjectSkip: G, selectedProjectForConnectExisting: M, connectExistingProject: V, handleConnectExistingDomain: W, handleConnectExistingProjectSelect: $, handleConnectExistingSuccess: z } = e, Y = S || b;
            h[0] !== w ? (l = (0,
                t.jsx)(eH.default, {
                    onBack: w,
                    isGlobalContext: !0
                }),
                h[0] = w,
                h[1] = l) : l = h[1],
                h[2] !== w || h[3] !== C ? (s = (0,
                    t.jsx)(eQ.default, {
                        onBack: w,
                        onBuyDomain: C
                    }),
                    h[2] = w,
                    h[3] = C,
                    h[4] = s) : s = h[4],
                h[5] !== O || h[6] !== V || h[7] !== w || h[8] !== $ || h[9] !== z || h[10] !== L || h[11] !== D || h[12] !== k || h[13] !== F || h[14] !== M ? (i = M ? (0,
                    t.jsx)(eK.default, {
                        onBack: w,
                        onSuccess: z,
                        project: V ?? void 0
                    }) : (0,
                        t.jsx)(te, {
                            domainName: "",
                            projects: O,
                            selectedProjectId: M,
                            isLoading: L,
                            isProcessing: D,
                            error: F,
                            onProjectSelect: $,
                            onNext: tn,
                            onSkip: w,
                            onClose: k,
                            title: e8.DOMAIN_STRINGS.projectSelection.title,
                            description: e8.DOMAIN_STRINGS.projectSelection.description,
                            skipLabel: e8.DOMAIN_STRINGS.common.cancel,
                            selectLabel: e8.DOMAIN_STRINGS.common.select,
                            hideNextButton: !0
                        }),
                    h[5] = O,
                    h[6] = V,
                    h[7] = w,
                    h[8] = $,
                    h[9] = z,
                    h[10] = L,
                    h[11] = D,
                    h[12] = k,
                    h[13] = F,
                    h[14] = M,
                    h[15] = i) : i = h[15],
                h[16] !== Y || h[17] !== B || h[18] !== U || h[19] !== G || h[20] !== L || h[21] !== D || h[22] !== k || h[23] !== F || h[24] !== P || h[25] !== R ? (r = Y ? (0,
                    t.jsx)(te, {
                        domainName: Y,
                        projects: P,
                        selectedProjectId: R,
                        isLoading: L,
                        isProcessing: D,
                        error: F,
                        onProjectSelect: U,
                        onNext: B,
                        onSkip: G,
                        onClose: k
                    }) : null,
                    h[16] = Y,
                    h[17] = B,
                    h[18] = U,
                    h[19] = G,
                    h[20] = L,
                    h[21] = D,
                    h[22] = k,
                    h[23] = F,
                    h[24] = P,
                    h[25] = R,
                    h[26] = r) : r = h[26],
                h[27] === Symbol.for("react.memo_cache_sentinel") ? (n = (0,
                    t.jsx)(eX.default, {
                        status: "processing",
                        message: e8.DOMAIN_STRINGS.statusViews.registering
                    }),
                    h[27] = n) : n = h[27],
                h[28] !== Y || h[29] !== w || h[30] !== A || h[31] !== S || h[32] !== E || h[33] !== y ? (c = Y ? (0,
                    t.jsx)(eX.default, {
                        status: "success",
                        message: (0,
                            t.jsxs)(t.Fragment, {
                                children: [e8.DOMAIN_STRINGS.statusViews.yourDomain, " ", (0,
                                    t.jsx)("span", {
                                        className: "font-medium",
                                        children: Y
                                    }), " ", e8.DOMAIN_STRINGS.statusViews.hasBeenSuccessfully, " ", S ? e8.DOMAIN_STRINGS.statusViews.purchased : e8.DOMAIN_STRINGS.statusViews.connected, y && (0,
                                        t.jsxs)(t.Fragment, {
                                            children: [" ", e8.DOMAIN_STRINGS.statusViews.andConnectedToProject, " ", (0,
                                                t.jsx)("span", {
                                                    className: "font-medium",
                                                    children: y
                                                })]
                                        }), "!"]
                            }),
                        onGoBack: () => {
                            w(),
                                E()
                        }
                        ,
                        additionalButtons: !y && S ? [{
                            text: e8.DOMAIN_STRINGS.domainItem.connect,
                            onClick: A,
                            styleClassName: "button-accent"
                        }] : []
                    }) : null,
                    h[28] = Y,
                    h[29] = w,
                    h[30] = A,
                    h[31] = S,
                    h[32] = E,
                    h[33] = y,
                    h[34] = c) : c = h[34];
            let q = _ || j || e8.DOMAIN_STRINGS.errors.failedToRegister;
            h[35] !== w || h[36] !== E ? (o = () => {
                w(),
                    E()
            }
                ,
                h[35] = w,
                h[36] = E,
                h[37] = o) : o = h[37],
                h[38] !== q || h[39] !== o ? (m = (0,
                    t.jsx)(eX.default, {
                        status: "error",
                        message: q,
                        onGoBack: o
                    }),
                    h[38] = q,
                    h[39] = o,
                    h[40] = m) : m = h[40],
                h[41] !== w ? (u = (0,
                    t.jsx)("div", {
                        className: "flex flex-col items-center justify-center gap-3 mx-auto min-h-full h-fit w-full md:w-50 2xl:w-55",
                        children: (0,
                            t.jsx)(eq.default, {
                                icon: eY.XCircle,
                                title: e8.DOMAIN_STRINGS.statusViews.paymentCancelled,
                                description: e8.DOMAIN_STRINGS.statusViews.paymentCancelledDesc,
                                buttonStyleClassName: "button-secondary",
                                children: (0,
                                    t.jsx)(d.default, {
                                        onClick: w,
                                        styleClassName: "card",
                                        children: e8.DOMAIN_STRINGS.dashboardDomains.goBack
                                    })
                            })
                    }),
                    h[41] = w,
                    h[42] = u) : u = h[42],
                h[43] !== N || h[44] !== j || h[45] !== C || h[46] !== I || h[47] !== W || h[48] !== T || h[49] !== v || h[50] !== g ? (f = (0,
                    t.jsx)(ti, {
                        domainsWithUsage: N,
                        isLoading: g,
                        error: j,
                        handleBuyDomain: C,
                        handleManageDomains: v,
                        handleConnectDomain: I,
                        handleDisconnectDomain: T,
                        handleConnectExistingDomain: W
                    }),
                    h[43] = N,
                    h[44] = j,
                    h[45] = C,
                    h[46] = I,
                    h[47] = W,
                    h[48] = T,
                    h[49] = v,
                    h[50] = g,
                    h[51] = f) : f = h[51],
                h[52] !== l || h[53] !== u || h[54] !== f || h[55] !== s || h[56] !== i || h[57] !== r || h[58] !== c || h[59] !== m ? (x = {
                    buy: l,
                    manage: s,
                    "connect-existing": i,
                    "project-selection": r,
                    processing: n,
                    success: c,
                    error: m,
                    "payment-cancelled": u,
                    list: f
                },
                    h[52] = l,
                    h[53] = u,
                    h[54] = f,
                    h[55] = s,
                    h[56] = i,
                    h[57] = r,
                    h[58] = c,
                    h[59] = m,
                    h[60] = x) : x = h[60];
            let H = x;
            return H[p] || H.list
        }
        ;
    function tn() { }
    let tc = s => {
        let i, r, n, c, o, d = (0,
            a.c)(46);
        d[0] !== s ? (i = void 0 === s ? {} : s,
            d[0] = s,
            d[1] = i) : i = d[1];
        let { onClose: m } = i
            , { currentView: u, domainsWithUsage: f, isLoading: x, error: h, purchasedDomain: p, selectedDomainForConnect: N, selectedProjectName: g, preregisterData: j, processingError: S, selectedProjectForConnectExisting: y, handleBuyDomain: _, handleManageDomains: C, handleBackToList: v, handlePurchaseSuccess: w, handleConnectDomain: I, handleDisconnectDomain: T, handleProjectSelectionComplete: A, handleSkipProjectSelection: E, handleSuccessConnect: k, handleConnectExistingDomain: O, handleConnectExistingProjectSelect: R, handleConnectExistingSuccess: L, refetchDomains: D } = (() => {
                let t = (0,
                    Y.useSearchParams)()
                    , { getToken: a } = (0,
                        eW.useAuth)()
                    , s = (0,
                        l.useRef)(!1)
                    , i = (0,
                        l.useRef)(new URLSearchParams(window.location.search).get("session_id"))
                    , { isProcessingStripePurchase: r, setIsProcessingStripePurchase: n, pendingDomainSearchQuery: c } = (0,
                        e$.useDomainStore)()
                    , o = t.get("session_id")
                    , d = (0,
                        Y.useParams)()
                    , m = d?.id
                    , [u, f] = (0,
                        l.useState)(() => {
                            if (r)
                                return "processing";
                            let e = new URLSearchParams(window.location.search)
                                , t = null !== e.get("session_id")
                                , a = null !== e.get("domain_registration")
                                , l = null !== e.get("domain_name")
                                , s = "true" === e.get("is_global_domain");
                            return t && a && l && s ? "processing" : c ? "buy" : "list"
                        }
                        )
                    , [x, h] = (0,
                        l.useState)([])
                    , [p, N] = (0,
                        l.useState)([])
                    , [g, j] = (0,
                        l.useState)(!0)
                    , [S, b] = (0,
                        l.useState)(null)
                    , [y, _] = (0,
                        l.useState)(null)
                    , [C, v] = (0,
                        l.useState)(null)
                    , [w, I] = (0,
                        l.useState)(null)
                    , [T, A] = (0,
                        l.useState)(null)
                    , [E, k] = (0,
                        l.useState)(!1)
                    , [O, R] = (0,
                        l.useState)(!1)
                    , [L, D] = (0,
                        l.useState)(null)
                    , [F, U] = (0,
                        l.useState)(null);
                (0,
                    l.useEffect)(() => {
                        let e = i.current;
                        if (!e || s.current)
                            return;
                        let l = t.get("domain_name")
                            , r = "true" === t.get("is_global_domain")
                            , c = "true" === t.get("isDeploying");
                        l && r && (s.current = !0,
                            k(!0),
                            D(null),
                            (async () => {
                                try {
                                    let t = await a();
                                    if (!t)
                                        throw Error("Authentication required");
                                    if (c)
                                        R(!0),
                                            n(!1),
                                            P.toast.success("Domain bought and project start publish!"),
                                            f("processing");
                                    else {
                                        let a = !1;
                                        for (let l = 0; l < 40; l++) {
                                            let { data: l } = await (0,
                                                ek.getDomainCheckoutSessionStatusAPI)(e, t);
                                            if (l.ready) {
                                                a = !0;
                                                break
                                            }
                                            await new Promise(e => setTimeout(e, 3e3))
                                        }
                                        if (!a)
                                            throw Error("Domain registration is taking longer than expected. Please refresh the page in a moment.");
                                        _(l),
                                            R(!0),
                                            n(!1),
                                            await B(),
                                            f("success")
                                    }
                                    let s = new URL(window.location.href);
                                    s.searchParams.delete("session_id"),
                                        s.searchParams.delete("domain_registration"),
                                        s.searchParams.delete("domain_name"),
                                        s.searchParams.delete("registrant_id"),
                                        s.searchParams.delete("is_global_domain"),
                                        window.history.replaceState({}, "", s.toString())
                                } catch (t) {
                                    D(t instanceof Error ? t.message : "Failed to complete domain purchase"),
                                        _(l),
                                        n(!1),
                                        f("error");
                                    let e = new URL(window.location.href);
                                    e.searchParams.delete("session_id"),
                                        e.searchParams.delete("domain_registration"),
                                        e.searchParams.delete("domain_name"),
                                        e.searchParams.delete("registrant_id"),
                                        e.searchParams.delete("is_global_domain"),
                                        window.history.replaceState({}, "", e.toString())
                                } finally {
                                    k(!1)
                                }
                            }
                            )())
                    }
                        , [o, t, a]);
                let B = async () => {
                    j(!0),
                        b(null);
                    try {
                        let e = await a();
                        if (!e)
                            throw Error("Authentication required");
                        let [t] = await Promise.all([(0,
                            ek.getUserDomainsAPI)(e)])
                            , l = t.data || [];
                        h(l);
                        let s = l.map(e => ({
                            ...e,
                            isConnectedToCurrentProject: !1,
                            connectedProjectId: e.projectId,
                            connectedProjectName: e.projectName
                        }));
                        N(s)
                    } catch (e) {
                        b(e instanceof Error ? e.message : "Failed to fetch domains")
                    } finally {
                        j(!1)
                    }
                }
                    ;
                (0,
                    l.useEffect)(() => {
                        "list" === u && B()
                    }
                        , [u]),
                    (0,
                        l.useEffect)(() => {
                            r && "list" === u && f("processing")
                        }
                            , [r, u]);
                let { handlePublish: G } = (0,
                    ez.usePublish)({
                        projectId: m || "",
                        onSuccess: () => {
                            B(),
                                f("list"),
                                P.toast.success("Domain connected and project published!")
                        }
                    });
                return {
                    currentView: u,
                    domains: x,
                    domainsWithUsage: p,
                    isLoading: g,
                    error: S,
                    purchasedDomain: y,
                    selectedDomainForConnect: C,
                    selectedProjectName: w,
                    preregisterData: T,
                    isProcessing: E,
                    processingComplete: O,
                    processingError: L,
                    selectedProjectForConnectExisting: F,
                    handleBuyDomain: () => {
                        f("buy")
                    }
                    ,
                    handleManageDomains: () => {
                        f("manage")
                    }
                    ,
                    handleBackToList: () => {
                        f("list"),
                            _(null),
                            v(null),
                            I(null),
                            A(null)
                    }
                    ,
                    handlePurchaseSuccess: (e, t) => {
                        _(e),
                            A(t),
                            f("project-selection")
                    }
                    ,
                    handleConnectDomain: async e => {
                        let t = await a();
                        if (t && m) {
                            let { publish_url: a } = (await (0,
                                ek.getProjectIDAPI)(m, t)).data;
                            if (!a) {
                                f("processing"),
                                    await G(e);
                                return
                            }
                        }
                        v(e),
                            f("project-selection")
                    }
                    ,
                    handleDisconnectDomain: async (t, l) => {
                        try {
                            let s = await a();
                            if (!s)
                                throw Error("Authentication required");
                            let { removeDomainFromProjectAPI: i } = await e.A(6024);
                            await i(l, t, s),
                                await B(),
                                P.toast.info("Domain disconnected successfully")
                        } catch (e) {
                            b(e instanceof Error ? e.message : "Failed to disconnect domain")
                        }
                    }
                    ,
                    handleProjectSelectionComplete: e => {
                        I(e),
                            f("success")
                    }
                    ,
                    handleSkipProjectSelection: () => {
                        f("list"),
                            _(null),
                            v(null),
                            I(null),
                            A(null),
                            B()
                    }
                    ,
                    handleCancelledGoBack: () => {
                        f("list")
                    }
                    ,
                    handleSuccessConnect: () => {
                        f("project-selection")
                    }
                    ,
                    handleConnectExistingDomain: () => {
                        U(null),
                            f("connect-existing")
                    }
                    ,
                    handleConnectExistingProjectSelect: e => {
                        U(e)
                    }
                    ,
                    handleConnectExistingSuccess: () => {
                        U(null),
                            B(),
                            f("list")
                    }
                    ,
                    refetchDomains: B
                }
            }
            )()
            , { projects: F, allProjects: U, selectedProjectId: B, isLoading: G, isProcessing: M, error: V, handleProjectSelect: W, handleNext: $, handleSkip: z } = ((e, t, a, s) => {
                let { getToken: i } = (0,
                    eW.useAuth)()
                    , [r, n] = (0,
                        l.useState)([])
                    , [c, o] = (0,
                        l.useState)([])
                    , [d, m] = (0,
                        l.useState)(null)
                    , [u, f] = (0,
                        l.useState)(!0)
                    , [x, h] = (0,
                        l.useState)(!1)
                    , [p, N] = (0,
                        l.useState)(null);
                (0,
                    l.useEffect)(() => {
                        (async () => {
                            f(!0),
                                N(null);
                            try {
                                let e = await i();
                                if (!e)
                                    throw Error("Authentication required");
                                let t = ((await (0,
                                    ek.getProjectsAPI)(100, e)).data || []).sort((e, t) => new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime());
                                n(t),
                                    o(t.filter(e => e.publish_url))
                            } catch (t) {
                                let e = t instanceof Error ? t.message : "Failed to fetch projects";
                                N(e),
                                    P.toast.error(e)
                            } finally {
                                f(!1)
                            }
                        }
                        )()
                    }
                        , [i]);
                let g = async () => {
                    if (!d)
                        return void P.toast.error("Please select a project");
                    h(!0),
                        N(null);
                    try {
                        let l = await i();
                        if (!l)
                            throw Error("Authentication required");
                        for (let t of (await (0,
                            ek.getProjectsAPI)(100, l)).data.filter(e => e.publish_url))
                            try {
                                let a = await (0,
                                    ek.getProjectDomainsConfigAPI)(t.id, l);
                                if ((a.data?.domains || []).find(t => t.domain.name === e) && t.id !== d) {
                                    await (0,
                                        ek.removeDomainFromProjectAPI)(t.id, e, l);
                                    break
                                }
                            } catch {
                                continue
                            }
                        if (t) {
                            let e = {
                                registrant_id: (await (0,
                                    ek.getDNSimpleAccountAPI)(l)).data.id,
                                whois_privacy: t.whois_privacy,
                                auto_renew: !0
                            };
                            t.premium && t.premium_price && (e.premium_price = t.premium_price),
                                t.extended_attributes && (e.extended_attributes = t.extended_attributes)
                        }
                        await (0,
                            ek.deployProjectAPI)(d, l, e);
                        let s = c.find(e => e.id === d)
                            , r = s?.name || "your project";
                        P.toast.success("Domain connected successfully"),
                            a(r)
                    } catch (t) {
                        let e = t instanceof Error ? t.message : "Failed to connect domain";
                        N(e),
                            P.toast.error(e)
                    } finally {
                        h(!1)
                    }
                }
                    ;
                return {
                    projects: c,
                    allProjects: r,
                    selectedProjectId: d,
                    isLoading: u,
                    isProcessing: x,
                    error: p,
                    handleProjectSelect: e => {
                        m(e)
                    }
                    ,
                    handleNext: g,
                    handleSkip: () => {
                        s()
                    }
                }
            }
            )(p || N || "", j, A, E);
        d[2] !== U || d[3] !== y ? (r = y ? U.find(e => e.id === y) ?? null : null,
            d[2] = U,
            d[3] = y,
            d[4] = r) : r = d[4];
        let q = r;
        return d[5] !== v || d[6] !== _ || d[7] !== C ? (n = e => {
            "list" === e ? v() : "buy" === e ? _() : "manage" === e && C()
        }
            ,
            d[5] = v,
            d[6] = _,
            d[7] = C,
            d[8] = n) : n = d[8],
            d[9] !== U || d[10] !== q || d[11] !== u || d[12] !== f || d[13] !== h || d[14] !== v || d[15] !== _ || d[16] !== I || d[17] !== O || d[18] !== R || d[19] !== L || d[20] !== T || d[21] !== C || d[22] !== $ || d[23] !== W || d[24] !== w || d[25] !== z || d[26] !== k || d[27] !== x || d[28] !== G || d[29] !== M || d[30] !== m || d[31] !== j || d[32] !== S || d[33] !== V || d[34] !== F || d[35] !== p || d[36] !== D || d[37] !== N || d[38] !== y || d[39] !== B || d[40] !== g || d[41] !== n ? (c = (0,
                t.jsx)(tr, {
                    currentView: u,
                    domainsWithUsage: f,
                    isLoading: x,
                    error: h,
                    purchasedDomain: p,
                    selectedDomainForConnect: N,
                    selectedProjectName: g,
                    preregisterData: j,
                    processingError: S,
                    handleViewChange: n,
                    handleBuyDomain: _,
                    handleManageDomains: C,
                    handleBackToList: v,
                    handlePurchaseSuccess: w,
                    handleConnectDomain: I,
                    handleDisconnectDomain: T,
                    handleSuccessConnect: k,
                    refetchDomains: D,
                    onClose: m,
                    projects: F,
                    allProjects: U,
                    selectedProjectId: B,
                    isLoadingProjects: G,
                    isProcessing: M,
                    projectError: V,
                    handleProjectSelect: W,
                    handleProjectNext: $,
                    handleProjectSkip: z,
                    selectedProjectForConnectExisting: y,
                    connectExistingProject: q,
                    handleConnectExistingDomain: O,
                    handleConnectExistingProjectSelect: R,
                    handleConnectExistingSuccess: L
                }),
                d[9] = U,
                d[10] = q,
                d[11] = u,
                d[12] = f,
                d[13] = h,
                d[14] = v,
                d[15] = _,
                d[16] = I,
                d[17] = O,
                d[18] = R,
                d[19] = L,
                d[20] = T,
                d[21] = C,
                d[22] = $,
                d[23] = W,
                d[24] = w,
                d[25] = z,
                d[26] = k,
                d[27] = x,
                d[28] = G,
                d[29] = M,
                d[30] = m,
                d[31] = j,
                d[32] = S,
                d[33] = V,
                d[34] = F,
                d[35] = p,
                d[36] = D,
                d[37] = N,
                d[38] = y,
                d[39] = B,
                d[40] = g,
                d[41] = n,
                d[42] = c) : c = d[42],
            d[43] !== u || d[44] !== c ? (o = (0,
                t.jsx)(b.default, {
                    className: "w-full h-full flex flex-col gap-5 items-center p-5 pb-0 overflow-y-auto",
                    children: c
                }, u),
                d[43] = u,
                d[44] = c,
                d[45] = o) : o = d[45],
            o
    }
        ;
    var to = e.i(78583)
        , td = e.i(40160)
        , tm = e.i(24032);
    let tu = [{
        label: "Product",
        className: "pr-4"
    }, {
        label: "Reference",
        className: "pr-4"
    }, {
        label: "Date",
        className: "px-4"
    }, {
        label: "Amount",
        className: "px-4"
    }, {
        label: "Status",
        className: "px-4"
    }, {
        label: "Actions",
        className: "pl-4"
    }]
        , tf = "Paid"
        , tx = "Pending"
        , th = "Refunded"
        , tp = "Failed to load billing history"
        , tN = {
            [tf]: {
                bg: "badge badge-green",
                text: "text-black"
            },
            [tx]: {
                bg: "badge badge-yellow",
                text: "text-black"
            },
            [th]: {
                bg: "badge badge-blue",
                text: "text-black"
            },
            default: {
                bg: "badge badge-red",
                text: "text-black"
            }
        }
        , tg = e => {
            let l, s, i, r, n, c, o, m, u, f = (0,
                a.c)(25), { invoice: x, onDownload: h } = e, p = tN[x.status] ?? tN.default;
            return f[0] !== x.product ? (l = (0,
                t.jsx)("td", {
                    className: "py-4 pr-4 text-sm font-normal text-black",
                    children: x.product
                }),
                f[0] = x.product,
                f[1] = l) : l = f[1],
                f[2] !== x.reference ? (s = (0,
                    t.jsx)("td", {
                        className: "py-4 pr-4 text-sm font-normal text-black",
                        children: x.reference
                    }),
                    f[2] = x.reference,
                    f[3] = s) : s = f[3],
                f[4] !== x.date ? (i = (0,
                    t.jsx)("td", {
                        className: "py-4 px-4 text-sm font-normal text-black",
                        children: x.date
                    }),
                    f[4] = x.date,
                    f[5] = i) : i = f[5],
                f[6] !== x.amount ? (r = (0,
                    t.jsx)("td", {
                        className: "py-4 px-4 text-sm font-normal text-black",
                        children: x.amount
                    }),
                    f[6] = x.amount,
                    f[7] = r) : r = f[7],
                f[8] !== x.status || f[9] !== p.bg || f[10] !== p.text ? (n = (0,
                    t.jsx)("td", {
                        className: "py-4 px-4",
                        children: (0,
                            t.jsx)(tm.default, {
                                statusLabel: x.status,
                                statusBgClass: p.bg,
                                statusTextClass: p.text
                            })
                    }),
                    f[8] = x.status,
                    f[9] = p.bg,
                    f[10] = p.text,
                    f[11] = n) : n = f[11],
                f[12] !== x.id || f[13] !== h ? (c = () => h(x.id),
                    f[12] = x.id,
                    f[13] = h,
                    f[14] = c) : c = f[14],
                f[15] === Symbol.for("react.memo_cache_sentinel") ? (o = (0,
                    t.jsx)(td.Download, {
                        className: "h-(--text-sm) w-auto"
                    }),
                    f[15] = o) : o = f[15],
                f[16] !== c ? (m = (0,
                    t.jsx)("td", {
                        className: "py-4 px-4",
                        children: (0,
                            t.jsxs)(d.default, {
                                onClick: c,
                                className: "flex items-center gap-2 px-6 h-8 text-xs",
                                children: [o, "Download"]
                            })
                    }),
                    f[16] = c,
                    f[17] = m) : m = f[17],
                f[18] !== l || f[19] !== s || f[20] !== i || f[21] !== r || f[22] !== n || f[23] !== m ? (u = (0,
                    t.jsxs)("tr", {
                        className: "not-last:border-b-2 border-grey",
                        children: [l, s, i, r, n, m]
                    }),
                    f[18] = l,
                    f[19] = s,
                    f[20] = i,
                    f[21] = r,
                    f[22] = n,
                    f[23] = m,
                    f[24] = u) : u = f[24],
                u
        }
        , tj = e => {
            let l, s, i, r = (0,
                a.c)(8), { invoices: n, onDownload: c } = e;
            if (r[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
                t.jsx)("thead", {
                    children: (0,
                        t.jsx)("tr", {
                            className: "border-b-2 border-grey",
                            children: tu.map(tS)
                        })
                }),
                r[0] = l) : l = r[0],
                r[1] !== n || r[2] !== c) {
                let e;
                r[4] !== c ? (e = e => (0,
                    t.jsx)(tg, {
                        invoice: e,
                        onDownload: c
                    }, e.id),
                    r[4] = c,
                    r[5] = e) : e = r[5],
                    s = n.map(e),
                    r[1] = n,
                    r[2] = c,
                    r[3] = s
            } else
                s = r[3];
            return r[6] !== s ? (i = (0,
                t.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0,
                        t.jsxs)("table", {
                            className: "w-full",
                            children: [l, (0,
                                t.jsx)("tbody", {
                                    children: s
                                })]
                        })
                }),
                r[6] = s,
                r[7] = i) : i = r[7],
                i
        }
        ;
    function tS(e) {
        return (0,
            t.jsx)("th", {
                className: (0,
                    m.cls)("pb-4 text-left text-sm font-medium text-black", e.className),
                children: e.label
            }, e.label)
    }
    var tb = e.i(83599);
    let ty = e => ({
        product: e.productName,
        id: e.id,
        reference: `•••• ${e.cardLast}`,
        amount: `$${(e.amount / 100).toFixed(2)} ${e.currency.toUpperCase()}`,
        status: e.refunded ? th : e.paid ? tf : tx,
        date: new Date(1e3 * e.created).toLocaleDateString(),
        downloadUrl: e.receiptUrl
    });
    function t_() {
        P.toast.error(tp)
    }
    let tC = () => {
        let e, l, s, i, r = (0,
            a.c)(10), { invoices: n, isLoading: c, error: o, handleDownload: d } = (() => {
                let e, t, l, s, i, r = (0,
                    a.c)(12), { getAuthenticatedToken: n } = (0,
                        eP.useApi)();
                r[0] !== n ? (e = async () => {
                    let e = await n();
                    if (!e)
                        throw Error("Authentication token not found");
                    return (await (0,
                        ek.getBillingHistoryAPI)(e)).data.charges.map(ty)
                }
                    ,
                    r[0] = n,
                    r[1] = e) : e = r[1];
                let c = e;
                r[2] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    revalidateOnFocus: !0,
                    errorRetryCount: 0,
                    onError: t_
                },
                    r[2] = t) : t = r[2];
                let { data: o, error: d, isLoading: m } = (0,
                    tb.default)("/billing/history", c, t);
                r[3] !== o ? (l = e => {
                    let t = o?.find(t => t.id === e);
                    t?.downloadUrl ? window.open(t.downloadUrl, "_blank") : P.toast.error("Download URL not found for this invoice")
                }
                    ,
                    r[3] = o,
                    r[4] = l) : l = r[4];
                let u = l;
                r[5] !== o ? (s = o ?? [],
                    r[5] = o,
                    r[6] = s) : s = r[6];
                let f = d ? tp : null;
                return r[7] !== u || r[8] !== m || r[9] !== s || r[10] !== f ? (i = {
                    invoices: s,
                    isLoading: m,
                    error: f,
                    handleDownload: u
                },
                    r[7] = u,
                    r[8] = m,
                    r[9] = s,
                    r[10] = f,
                    r[11] = i) : i = r[11],
                    i
            }
            )();
        r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
            t.jsx)(er.default, {
                baseLabel: "Settings",
                currentLabel: "Invoices",
                icon: K.AppWindowMac
            }),
            r[0] = e) : e = r[0],
            r[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (0,
                t.jsx)("h2", {
                    className: "text-lg font-medium text-black leading-snug",
                    children: "Billing History"
                }),
                r[1] = l) : l = r[1];
        let m = c ? "loading" : o ? "error" : 0 === n.length ? "empty" : "content";
        return r[2] !== o || r[3] !== d || r[4] !== n || r[5] !== c ? (s = c ? (0,
            t.jsx)("div", {
                className: "flex items-center justify-center pb-6 w-full",
                children: (0,
                    t.jsx)(u.default, {
                        className: "w-40 md:w-15"
                    })
            }) : o ? (0,
                t.jsx)("div", {
                    className: "pt-7 pb-10",
                    children: (0,
                        t.jsx)(eq.default, {
                            icon: to.FileText,
                            title: "Error loading invoices",
                            description: o,
                            removeBackground: !0
                        })
                }) : 0 === n.length ? (0,
                    t.jsx)("div", {
                        className: "pt-7 pb-10",
                        children: (0,
                            t.jsx)(eq.default, {
                                icon: to.FileText,
                                title: "No invoices",
                                removeBackground: !0
                            })
                    }) : (0,
                        t.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0,
                                t.jsx)("h3", {
                                    className: "text-sm font-medium text-black",
                                    children: "Invoices"
                                }), (0,
                                    t.jsx)(tj, {
                                        invoices: n,
                                        onDownload: d
                                    })]
                        }),
            r[2] = o,
            r[3] = d,
            r[4] = n,
            r[5] = c,
            r[6] = s) : s = r[6],
            r[7] !== m || r[8] !== s ? (i = (0,
                t.jsxs)(b.default, {
                    className: "flex flex-col items-center gap-5 p-5 pb-0 w-full h-full overflow-y-auto",
                    children: [e, (0,
                        t.jsxs)("div", {
                            className: "relative flex flex-col gap-4 p-5 w-full md:w-50 2xl:w-55 rounded-sm overflow-hidden button-secondary",
                            children: [l, (0,
                                t.jsx)("div", {
                                    className: "relative p-5 pb-0 w-full card rounded-extra-sm",
                                    children: (0,
                                        t.jsx)(b.default, {
                                            animationType: "fade",
                                            children: s
                                        }, m)
                                })]
                        })]
                }),
                r[7] = m,
                r[8] = s,
                r[9] = i) : i = r[9],
            i
    }
        , tv = () => {
            let e, l = (0,
                a.c)(1);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                t.jsx)("div", {
                    className: "flex items-center justify-center w-full h-full bg-background",
                    children: (0,
                        t.jsx)(f, {})
                }),
                l[0] = e) : e = l[0],
                e
        }
        , tw = e => {
            let s, i, u, f, N, g, j, b, y, _, C, v, w, I, T, A, E, k, P, O, R, L, F, U, B, G, M, V = (0,
                a.c)(73), { isVisible: W, onClose: $, initialTab: z } = e, Y = void 0 === z ? "account" : z, { user: q } = (0,
                    n.useUser)(), { hasUnsavedChanges: H } = r();
            V[0] !== H || V[1] !== Y || V[2] !== W || V[3] !== $ ? (s = {
                initialTab: Y,
                isVisible: W,
                hasUnsavedChanges: H,
                onClose: $
            },
                V[0] = H,
                V[1] = Y,
                V[2] = W,
                V[3] = $,
                V[4] = s) : s = V[4];
            let { activeTab: K, showUnsavedModal: Q, generalDomainsResetKey: Z, showContent: J, closeSettingsModal: ee, handleTabChange: et, handleBackToSidebar: ea, handleModalClose: el, isSaving: es, handleUnsavedSave: ei, handleUnsavedExit: er } = (({ initialTab: e, isVisible: t, hasUnsavedChanges: a, onClose: s }) => {
                let [i, n] = (0,
                    l.useState)(e)
                    , [c, o] = (0,
                        l.useState)(null)
                    , [d, m] = (0,
                        l.useState)(!1)
                    , [u, f] = (0,
                        l.useState)(0)
                    , [x, h] = (0,
                        l.useState)(!1)
                    , [p, N] = (0,
                        l.useState)(!1)
                    , { setHasUnsavedChanges: g, saveActionRef: j, cancelActionRef: S } = r()
                    , b = (0,
                        l.useCallback)(() => {
                            f(e => e + 1)
                        }
                            , [])
                    , y = (0,
                        l.useCallback)(() => {
                            "general-domains" === i && b(),
                                s()
                        }
                            , [i, b, s])
                    , _ = (0,
                        l.useCallback)(e => {
                            a && "account" === i ? (o(e),
                                m(!0)) : (n(e),
                                    h(!0))
                        }
                            , [a, i])
                    , C = (0,
                        l.useCallback)(() => {
                            h(!1)
                        }
                            , [])
                    , v = (0,
                        l.useCallback)(() => {
                            a && "account" === i ? (m(!0),
                                o(null)) : y()
                        }
                            , [a, i, y])
                    , w = (0,
                        l.useCallback)(async () => {
                            if (j.current) {
                                N(!0);
                                try {
                                    await j.current(),
                                        m(!1),
                                        c ? (n(c),
                                            o(null)) : y()
                                } finally {
                                    N(!1)
                                }
                            }
                        }
                            , [j, c, y])
                    , I = (0,
                        l.useCallback)(() => {
                            S.current && S.current(),
                                m(!1),
                                g(!1),
                                c ? (n(c),
                                    o(null)) : y()
                        }
                            , [S, g, c, y]);
                return (0,
                    l.useEffect)(() => {
                        e && (n(e),
                            h(!0))
                    }
                        , [e]),
                    (0,
                        l.useEffect)(() => {
                            t && window.innerWidth < 768 && "account" === e && h(!1)
                        }
                            , [t, e]),
                {
                    activeTab: i,
                    setActiveTab: n,
                    showUnsavedModal: d,
                    generalDomainsResetKey: u,
                    showContent: x,
                    closeSettingsModal: y,
                    handleTabChange: _,
                    handleBackToSidebar: C,
                    handleModalClose: v,
                    isSaving: p,
                    handleUnsavedSave: w,
                    handleUnsavedExit: I
                }
            }
            )(s);
            V[5] !== K || V[6] !== et ? (i = S.map(e => ({
                ...e,
                onClick: () => et(e.id),
                isActive: K === e.id
            })),
                V[5] = K,
                V[6] = et,
                V[7] = i) : i = V[7];
            let en = i;
            V[8] !== q ? (u = (0,
                t.jsx)("div", {
                    className: "flex-1 min-w-0",
                    children: (0,
                        t.jsx)("div", {
                            className: "flex flex-col gap-4 px-2",
                            children: (0,
                                t.jsx)(p.default, {
                                    user: q
                                })
                        })
                }),
                V[8] = q,
                V[9] = u) : u = V[9],
                V[10] === Symbol.for("react.memo_cache_sentinel") ? (f = (0,
                    t.jsx)(c.X, {
                        className: "h-4/10 w-auto text-black"
                    }),
                    V[10] = f) : f = V[10],
                V[11] !== el ? (N = (0,
                    t.jsx)(d.default, {
                        onClick: el,
                        className: "flex items-center justify-center shrink-0 px-0 h-8 aspect-square rounded-full",
                        children: f
                    }),
                    V[11] = el,
                    V[12] = N) : N = V[12],
                V[13] !== u || V[14] !== N ? (g = (0,
                    t.jsxs)("div", {
                        className: "absolute! md:hidden z-100 top-5 left-5 right-5 flex items-center justify-between",
                        children: [u, N]
                    }),
                    V[13] = u,
                    V[14] = N,
                    V[15] = g) : g = V[15],
                V[16] === Symbol.for("react.memo_cache_sentinel") ? (j = (0,
                    t.jsx)(c.X, {
                        className: "h-4/10 w-auto text-black"
                    }),
                    V[16] = j) : j = V[16],
                V[17] !== el ? (b = (0,
                    t.jsx)("div", {
                        className: "absolute! hidden md:flex z-100 top-5 right-5",
                        children: (0,
                            t.jsx)(d.default, {
                                onClick: el,
                                className: "flex items-center justify-center shrink-0 px-0 h-8 aspect-square rounded-full",
                                children: j
                            })
                    }),
                    V[17] = el,
                    V[18] = b) : b = V[18];
            let ec = J ? "opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto" : "opacity-100 pointer-events-auto";
            V[19] !== ec ? (y = (0,
                m.cls)("relative flex flex-col gap-5 p-5 pt-[calc(var(--spacing-5)+var(--height-8)+var(--spacing-5))] md:pt-5 w-full md:w-15 transition-opacity duration-300", ec),
                V[19] = ec,
                V[20] = y) : y = V[20],
                V[21] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0,
                    t.jsx)("div", {
                        className: "absolute! hidden md:block inset-0 z-0 card-sidebar"
                    }),
                    V[21] = _) : _ = V[21],
                V[22] !== q ? (C = (0,
                    t.jsx)("div", {
                        className: "relative z-1 hidden md:block",
                        children: (0,
                            t.jsx)("div", {
                                className: "flex flex-col gap-4 px-2",
                                children: (0,
                                    t.jsx)(p.default, {
                                        user: q
                                    })
                            })
                    }),
                    V[22] = q,
                    V[23] = C) : C = V[23],
                V[24] !== en ? (v = (0,
                    t.jsx)("div", {
                        className: "relative z-1 flex flex-1 flex-col gap-5 overflow-y-auto",
                        children: (0,
                            t.jsx)(h.default, {
                                title: "General Settings",
                                categories: en,
                                hoverClassName: "hover:bg-white"
                            })
                    }),
                    V[24] = en,
                    V[25] = v) : v = V[25],
                V[26] !== y || V[27] !== C || V[28] !== v ? (w = (0,
                    t.jsxs)("div", {
                        className: y,
                        children: [_, C, v]
                    }),
                    V[26] = y,
                    V[27] = C,
                    V[28] = v,
                    V[29] = w) : w = V[29];
            let eo = J ? "opacity-100 pointer-events-auto" : "opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto";
            return V[30] !== eo ? (I = (0,
                m.cls)("absolute md:relative inset-0 md:inset-auto z-20 flex-1 pt-[calc(var(--vw-1_5)+var(--height-8))] pb-5 md:p-5 transition-opacity duration-300", eo),
                V[30] = eo,
                V[31] = I) : I = V[31],
                V[32] === Symbol.for("react.memo_cache_sentinel") ? (T = (0,
                    t.jsx)(o.ChevronLeft, {
                        className: "h-(--text-sm) w-auto text-black"
                    }),
                    A = (0,
                        t.jsx)("span", {
                            className: "text-sm text-black",
                            children: "Settings"
                        }),
                    V[32] = T,
                    V[33] = A) : (T = V[32],
                        A = V[33]),
                V[34] !== ea ? (E = (0,
                    t.jsxs)(d.default, {
                        onClick: ea,
                        className: "absolute md:hidden z-10 top-[calc(var(--spacing-5)+var(--height-9)+var(--spacing-5))] left-5 flex items-center gap-2 mb-5 pl-3 pr-4 h-8",
                        "aria-label": "Back to settings menu",
                        children: [T, A]
                    }),
                    V[34] = ea,
                    V[35] = E) : E = V[35],
                V[36] !== K ? (k = "account" === K && (0,
                    t.jsx)(l.Suspense, {
                        fallback: (0,
                            t.jsx)(tv, {}),
                        children: (0,
                            t.jsx)(X, {})
                    }),
                    V[36] = K,
                    V[37] = k) : k = V[37],
                V[38] !== K || V[39] !== ee || V[40] !== Z ? (P = "general-domains" === K && (0,
                    t.jsx)(l.Suspense, {
                        fallback: (0,
                            t.jsx)(tv, {}),
                        children: (0,
                            t.jsx)(tc, {
                                onClose: ee
                            }, Z)
                    }),
                    V[38] = K,
                    V[39] = ee,
                    V[40] = Z,
                    V[41] = P) : P = V[41],
                V[42] !== K || V[43] !== ee ? (O = "billing" === K && (0,
                    t.jsx)(l.Suspense, {
                        fallback: (0,
                            t.jsx)(tv, {}),
                        children: (0,
                            t.jsx)(eV, {
                                onClose: ee
                            })
                    }),
                    V[42] = K,
                    V[43] = ee,
                    V[44] = O) : O = V[44],
                V[45] !== K ? (R = "invoices" === K && (0,
                    t.jsx)(l.Suspense, {
                        fallback: (0,
                            t.jsx)(tv, {}),
                        children: (0,
                            t.jsx)(tC, {})
                    }),
                    V[45] = K,
                    V[46] = R) : R = V[46],
                V[47] !== k || V[48] !== P || V[49] !== O || V[50] !== R ? (L = (0,
                    t.jsxs)("div", {
                        className: "w-full h-full pt-[calc(var(--height-9)+var(--spacing-5))] md:pt-0 mask-fade-y",
                        children: [k, P, O, R]
                    }),
                    V[47] = k,
                    V[48] = P,
                    V[49] = O,
                    V[50] = R,
                    V[51] = L) : L = V[51],
                V[52] !== I || V[53] !== E || V[54] !== L ? (F = (0,
                    t.jsxs)("div", {
                        className: I,
                        children: [E, L]
                    }),
                    V[52] = I,
                    V[53] = E,
                    V[54] = L,
                    V[55] = F) : F = V[55],
                V[56] !== w || V[57] !== F || V[58] !== g || V[59] !== b ? (U = (0,
                    t.jsxs)("div", {
                        className: "relative flex gap-0 w-full h-full card rounded-sm overflow-hidden",
                        children: [g, b, w, F]
                    }),
                    V[56] = w,
                    V[57] = F,
                    V[58] = g,
                    V[59] = b,
                    V[60] = U) : U = V[60],
                V[61] !== el || V[62] !== W || V[63] !== U ? (B = (0,
                    t.jsx)(x.default, {
                        isVisible: W,
                        onClose: el,
                        zIndexClass: "z-200",
                        backdropClassName: "p-5",
                        contentClassName: "w-full h-full",
                        overlayOnClickClose: !0,
                        children: U
                    }),
                    V[61] = el,
                    V[62] = W,
                    V[63] = U,
                    V[64] = B) : B = V[64],
                V[65] !== er || V[66] !== ei || V[67] !== es || V[68] !== Q ? (G = (0,
                    t.jsx)(D, {
                        isVisible: Q,
                        onSave: ei,
                        onExit: er,
                        isSaving: es
                    }),
                    V[65] = er,
                    V[66] = ei,
                    V[67] = es,
                    V[68] = Q,
                    V[69] = G) : G = V[69],
                V[70] !== B || V[71] !== G ? (M = (0,
                    t.jsxs)(t.Fragment, {
                        children: [B, G]
                    }),
                    V[70] = B,
                    V[71] = G,
                    V[72] = M) : M = V[72],
                M
        }
        ;
    function tI(e) {
        return e.setSidebarOpen
    }
    e.s(["default", 0, e => {
        let s, r, n, c = (0,
            a.c)(8), { isVisible: o, onClose: d, initialTab: m } = e, u = void 0 === m ? "account" : m, f = (0,
                q.useUIStore)(tI);
        return c[0] !== o || c[1] !== f ? (s = () => {
            o && f(!1)
        }
            ,
            r = [o, f],
            c[0] = o,
            c[1] = f,
            c[2] = s,
            c[3] = r) : (s = c[2],
                r = c[3]),
            (0,
                l.useEffect)(s, r),
            c[4] !== u || c[5] !== o || c[6] !== d ? (n = (0,
                t.jsx)(i, {
                    children: (0,
                        t.jsx)(tw, {
                            isVisible: o,
                            onClose: d,
                            initialTab: u
                        })
                }),
                c[4] = u,
                c[5] = o,
                c[6] = d,
                c[7] = n) : n = c[7],
            n
    }
    ], 61733)
}
    , 74876, e => {
        e.n(e.i(61733))
    }
]);
