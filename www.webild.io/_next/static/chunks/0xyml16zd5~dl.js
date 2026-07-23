(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 37727, e => {
    "use strict";
    let t = (0,
        e.i(75254).default)("x", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]]);
    e.s(["X", 0, t], 37727)
}
    , 31278, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("loader-circle", [["path", {
                d: "M21 12a9 9 0 1 1-6.219-8.56",
                key: "13zald"
            }]]);
        e.s(["Loader2", 0, t], 31278)
    }
    , 21742, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(71645)
            , l = e.i(31278)
            , s = e.i(75157);
        let n = (0,
            i.forwardRef)(({ children: e, className: i, styleClassName: n = "button-secondary", gradientRoundedClassName: o, type: a = "button", onClick: r, onMouseEnter: c, disabled: d = !1, isLoading: u = !1, loadingText: f }, p) => (0,
                t.jsx)("button", {
                    ref: p,
                    type: a,
                    disabled: d || u,
                    onMouseEnter: c,
                    className: (0,
                        s.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", o, n, i, (d || u) && "opacity-50 select-none pointer-events-none"),
                    onClick: r,
                    children: u ? (0,
                        t.jsxs)("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0,
                                t.jsx)(l.Loader2, {
                                    className: "h-[1em] w-auto animate-spin"
                                }), f ?? e]
                        }) : e
                }));
        n.displayName = "Button",
            e.s(["default", 0, n])
    }
    , 30776, 88653, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932);
        e.i(47167);
        var l = e.i(71645)
            , s = e.i(31178)
            , n = e.i(47414)
            , o = e.i(74008)
            , a = e.i(21476)
            , r = e.i(72846)
            , c = l
            , d = e.i(37806);
        function u(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        class f extends c.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.childRef.current;
                if ((0,
                    r.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                    let e = t.offsetParent
                        , i = (0,
                            r.isHTMLElement)(e) && e.offsetWidth || 0
                        , l = (0,
                            r.isHTMLElement)(e) && e.offsetHeight || 0
                        , s = getComputedStyle(t)
                        , n = this.props.sizeRef.current;
                    n.height = parseFloat(s.height),
                        n.width = parseFloat(s.width),
                        n.top = t.offsetTop,
                        n.left = t.offsetLeft,
                        n.right = i - n.width - n.left,
                        n.bottom = l - n.height - n.top
                }
                return null
            }
            componentDidUpdate() { }
            render() {
                return this.props.children
            }
        }
        function p({ children: e, isPresent: i, anchorX: s, anchorY: n, root: o, pop: a }) {
            let r = (0,
                c.useId)()
                , m = (0,
                    c.useRef)(null)
                , h = (0,
                    c.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    })
                , { nonce: x } = (0,
                    c.useContext)(d.MotionConfigContext)
                , v = function (...e) {
                    return l.useCallback(function (...e) {
                        return t => {
                            let i = !1
                                , l = e.map(e => {
                                    let l = u(e, t);
                                    return i || "function" != typeof l || (i = !0),
                                        l
                                }
                                );
                            if (i)
                                return () => {
                                    for (let t = 0; t < l.length; t++) {
                                        let i = l[t];
                                        "function" == typeof i ? i() : u(e[t], null)
                                    }
                                }
                        }
                    }(...e), e)
                }(m, e.props?.ref ?? e?.ref);
            return (0,
                c.useInsertionEffect)(() => {
                    let { width: e, height: t, top: l, left: c, right: d, bottom: u } = h.current;
                    if (i || !1 === a || !m.current || !e || !t)
                        return;
                    let f = "left" === s ? `left: ${c}` : `right: ${d}`
                        , p = "bottom" === n ? `bottom: ${u}` : `top: ${l}`;
                    m.current.dataset.motionPopId = r;
                    let v = document.createElement("style");
                    x && (v.nonce = x);
                    let y = o ?? document.head;
                    return y.appendChild(v),
                        v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${f}px !important;
            ${p}px !important;
          }
        `),
                        () => {
                            m.current?.removeAttribute("data-motion-pop-id"),
                                y.contains(v) && y.removeChild(v)
                        }
                }
                    , [i]),
                (0,
                    t.jsx)(f, {
                        isPresent: i,
                        childRef: m,
                        sizeRef: h,
                        pop: a,
                        children: !1 === a ? e : c.cloneElement(e, {
                            ref: v
                        })
                    })
        }
        let m = ({ children: e, initial: i, isPresent: s, onExitComplete: o, custom: r, presenceAffectsLayout: c, mode: d, anchorX: u, anchorY: f, root: m }) => {
            let x = (0,
                n.useConstant)(h)
                , v = (0,
                    l.useId)()
                , y = !0
                , g = (0,
                    l.useMemo)(() => (y = !1,
                    {
                        id: v,
                        initial: i,
                        isPresent: s,
                        custom: r,
                        onExitComplete: e => {
                            for (let t of (x.set(e, !0),
                                x.values()))
                                if (!t)
                                    return;
                            o && o()
                        }
                        ,
                        register: e => (x.set(e, !1),
                            () => x.delete(e))
                    }), [s, x, o]);
            return c && y && (g = {
                ...g
            }),
                (0,
                    l.useMemo)(() => {
                        x.forEach((e, t) => x.set(t, !1))
                    }
                        , [s]),
                l.useEffect(() => {
                    s || x.size || !o || o()
                }
                    , [s]),
                e = (0,
                    t.jsx)(p, {
                        pop: "popLayout" === d,
                        isPresent: s,
                        anchorX: u,
                        anchorY: f,
                        root: m,
                        children: e
                    }),
                (0,
                    t.jsx)(a.PresenceContext.Provider, {
                        value: g,
                        children: e
                    })
        }
            ;
        function h() {
            return new Map
        }
        var x = e.i(64978);
        let v = e => e.key || "";
        function y(e) {
            let t = [];
            return l.Children.forEach(e, e => {
                (0,
                    l.isValidElement)(e) && t.push(e)
            }
            ),
                t
        }
        let g = ({ children: e, custom: i, initial: a = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: u = !1, anchorX: f = "left", anchorY: p = "top", root: h }) => {
            let [g, b] = (0,
                x.usePresence)(u)
                , w = (0,
                    l.useMemo)(() => y(e), [e])
                , k = u && !g ? [] : w.map(v)
                , C = (0,
                    l.useRef)(!0)
                , j = (0,
                    l.useRef)(w)
                , N = (0,
                    n.useConstant)(() => new Map)
                , E = (0,
                    l.useRef)(new Set)
                , [S, I] = (0,
                    l.useState)(w)
                , [L, M] = (0,
                    l.useState)(w);
            (0,
                o.useIsomorphicLayoutEffect)(() => {
                    C.current = !1,
                        j.current = w;
                    for (let e = 0; e < L.length; e++) {
                        let t = v(L[e]);
                        k.includes(t) ? (N.delete(t),
                            E.current.delete(t)) : !0 !== N.get(t) && N.set(t, !1)
                    }
                }
                    , [L, k.length, k.join("-")]);
            let R = [];
            if (w !== S) {
                let e = [...w];
                for (let t = 0; t < L.length; t++) {
                    let i = L[t]
                        , l = v(i);
                    k.includes(l) || (e.splice(t, 0, i),
                        R.push(i))
                }
                return "wait" === d && R.length && (e = R),
                    M(y(e)),
                    I(w),
                    null
            }
            let { forceRender: P } = (0,
                l.useContext)(s.LayoutGroupContext);
            return (0,
                t.jsx)(t.Fragment, {
                    children: L.map(e => {
                        let l = v(e)
                            , s = (!u || !!g) && (w === L || k.includes(l));
                        return (0,
                            t.jsx)(m, {
                                isPresent: s,
                                initial: (!C.current || !!a) && void 0,
                                custom: i,
                                presenceAffectsLayout: c,
                                mode: d,
                                root: h,
                                onExitComplete: s ? void 0 : () => {
                                    if (E.current.has(l) || !N.has(l))
                                        return;
                                    E.current.add(l),
                                        N.set(l, !0);
                                    let e = !0;
                                    N.forEach(t => {
                                        t || (e = !1)
                                    }
                                    ),
                                        e && (P?.(),
                                            M(j.current),
                                            u && b?.(),
                                            r && r())
                                }
                                ,
                                anchorX: f,
                                anchorY: p,
                                children: e
                            }, l)
                    }
                    )
                })
        }
            ;
        e.s(["AnimatePresence", 0, g], 88653);
        var b = e.i(46932);
        let w = {
            fade: {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                }
            },
            "fade-scale": {
                initial: {
                    opacity: 0,
                    scale: .95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .95
                }
            }
        };
        e.s(["default", 0, e => {
            let l, s, n = (0,
                i.c)(21), { isVisible: o, children: a, className: r, style: c, duration: d, variant: u, keepMounted: f } = e, p = void 0 === d ? .2 : d, m = void 0 === u ? "fade" : u;
            if (void 0 !== f && f) {
                let e, i, l, s = o ? w[m].animate : w[m].exit;
                n[0] !== p ? (e = {
                    duration: p
                },
                    n[0] = p,
                    n[1] = e) : e = n[1];
                let d = o ? "auto" : "none"
                    , u = o ? "visible" : "hidden";
                return n[2] !== c || n[3] !== d || n[4] !== u ? (i = {
                    ...c,
                    pointerEvents: d,
                    visibility: u
                },
                    n[2] = c,
                    n[3] = d,
                    n[4] = u,
                    n[5] = i) : i = n[5],
                    n[6] !== a || n[7] !== r || n[8] !== s || n[9] !== e || n[10] !== i ? (l = (0,
                        t.jsx)(b.motion.div, {
                            initial: !1,
                            animate: s,
                            transition: e,
                            className: r,
                            style: i,
                            children: a
                        }),
                        n[6] = a,
                        n[7] = r,
                        n[8] = s,
                        n[9] = e,
                        n[10] = i,
                        n[11] = l) : l = n[11],
                    l
            }
            return n[12] !== a || n[13] !== r || n[14] !== p || n[15] !== o || n[16] !== c || n[17] !== m ? (l = o && (0,
                t.jsx)(b.motion.div, {
                    ...w[m],
                    transition: {
                        duration: p
                    },
                    className: r,
                    style: c,
                    children: a
                }),
                n[12] = a,
                n[13] = r,
                n[14] = p,
                n[15] = o,
                n[16] = c,
                n[17] = m,
                n[18] = l) : l = n[18],
                n[19] !== l ? (s = (0,
                    t.jsx)(g, {
                        children: l
                    }),
                    n[19] = l,
                    n[20] = s) : s = n[20],
                s
        }
        ], 30776)
    }
    , 15619, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , l = e.i(71645)
            , s = e.i(74080);
        e.s(["default", 0, e => {
            let n, o, a, r, c = (0,
                i.c)(9), { children: d, container: u, id: f, className: p } = e, [m, h] = (0,
                    l.useState)(!1), x = u ?? ("u" > typeof document ? document.body : null);
            if (c[0] === Symbol.for("react.memo_cache_sentinel") ? (n = () => (h(!0),
                () => h(!1)),
                o = [],
                c[0] = n,
                c[1] = o) : (n = c[0],
                    o = c[1]),
                (0,
                    l.useEffect)(n, o),
                !m || !x)
                return null;
            c[2] !== d || c[3] !== p || c[4] !== f ? (a = p || f ? (0,
                t.jsx)("div", {
                    id: f,
                    className: p,
                    children: d
                }) : d,
                c[2] = d,
                c[3] = p,
                c[4] = f,
                c[5] = a) : a = c[5];
            let v = a;
            return c[6] !== v || c[7] !== x ? (r = (0,
                s.createPortal)(v, x),
                c[6] = v,
                c[7] = x,
                c[8] = r) : r = c[8],
                r
        }
        ])
    }
    , 67082, 15446, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , l = e.i(71645)
            , s = e.i(15619)
            , n = e.i(30776);
        let o = e => {
            let t, s, n = (0,
                i.c)(3);
            n[0] !== e ? (t = () => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "",
                a),
                s = [e],
                n[0] = e,
                n[1] = t,
                n[2] = s) : (t = n[1],
                    s = n[2]),
                (0,
                    l.useEffect)(t, s)
        }
            ;
        function a() {
            document.body.style.overflow = ""
        }
        e.s(["useBodyScrollLock", 0, o], 15446);
        var r = e.i(75157);
        function c(e) {
            return e.stopPropagation()
        }
        e.s(["default", 0, e => {
            let a, d, u, f, p, m, h, x, v, y = (0,
                i.c)(26), { isVisible: g, onClose: b, children: w, zIndexClass: k, backdropClassName: C, closeOnEscape: j, lockScroll: N, container: E, contentClassName: S, overlayOnClickClose: I } = e, L = void 0 === k ? "z-200" : k, M = void 0 === j || j;
            o((void 0 === N || N) && g),
                y[0] !== M || y[1] !== g || y[2] !== b ? (a = () => {
                    if (!g || !M)
                        return;
                    let e = e => {
                        "Escape" === e.key && b()
                    }
                        ;
                    return document.addEventListener("keydown", e),
                        () => document.removeEventListener("keydown", e)
                }
                    ,
                    d = [g, M, b],
                    y[0] = M,
                    y[1] = g,
                    y[2] = b,
                    y[3] = a,
                    y[4] = d) : (a = y[3],
                        d = y[4]),
                (0,
                    l.useEffect)(a, d),
                y[5] !== C || y[6] !== L ? (u = (0,
                    r.cls)("fixed flex items-center justify-center top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm", L, C),
                    y[5] = C,
                    y[6] = L,
                    y[7] = u) : u = y[7];
            let R = void 0 === I || I ? b : void 0;
            return y[8] !== R ? (f = (0,
                t.jsx)("div", {
                    onClick: R,
                    className: "absolute inset-0",
                    role: "dialog",
                    "aria-modal": "true"
                }),
                y[8] = R,
                y[9] = f) : f = y[9],
                y[10] !== S ? (p = (0,
                    r.cls)("relative", S),
                    y[10] = S,
                    y[11] = p) : p = y[11],
                y[12] !== w ? (m = (0,
                    t.jsx)("div", {
                        onClick: c,
                        className: "contents",
                        children: w
                    }),
                    y[12] = w,
                    y[13] = m) : m = y[13],
                y[14] !== g || y[15] !== p || y[16] !== m ? (h = (0,
                    t.jsx)(n.default, {
                        isVisible: g,
                        variant: "fade-scale",
                        className: p,
                        children: m
                    }),
                    y[14] = g,
                    y[15] = p,
                    y[16] = m,
                    y[17] = h) : h = y[17],
                y[18] !== g || y[19] !== h || y[20] !== u || y[21] !== f ? (x = (0,
                    t.jsxs)(n.default, {
                        isVisible: g,
                        className: u,
                        children: [f, h]
                    }),
                    y[18] = g,
                    y[19] = h,
                    y[20] = u,
                    y[21] = f,
                    y[22] = x) : x = y[22],
                y[23] !== E || y[24] !== x ? (v = (0,
                    t.jsx)(s.default, {
                        container: E,
                        children: x
                    }),
                    y[23] = E,
                    y[24] = x,
                    y[25] = v) : v = y[25],
                v
        }
        ], 67082)
    }
    , 56073, e => {
        "use strict";
        let t = {
            DISCORD: "https://discord.gg/YM9bHzH5uX",
            LINKEDIN: "https://www.linkedin.com/company/webildio",
            X: "https://x.com/webild_io",
            INSTAGRAM: "https://www.instagram.com/webild",
            SUPPORT_EMAIL: "mailto:support@webild.com"
        }
            , i = [{
                name: "Discord",
                icon: "https://storage.googleapis.com/webild/default/platform/icons/discord.svg",
                url: t.DISCORD,
                type: "image"
            }, {
                name: "LinkedIn",
                icon: "https://storage.googleapis.com/webild/default/platform/icons/linkedin.svg",
                url: t.LINKEDIN,
                type: "image"
            }, {
                name: "X",
                icon: "https://storage.googleapis.com/webild/default/platform/icons/x.svg",
                url: t.X,
                type: "image"
            }, {
                name: "Instagram",
                url: t.INSTAGRAM,
                type: "lucide"
            }]
            , l = [{
                label: "X (Twitter)",
                href: t.X
            }, {
                label: "LinkedIn",
                href: t.LINKEDIN
            }, {
                label: "Instagram",
                href: t.INSTAGRAM
            }, {
                label: "Discord",
                href: t.DISCORD
            }];
        e.s(["FOOTER_SOCIAL_LINKS", 0, l, "SOCIAL_LINKS", 0, i, "URLS", 0, t])
    }
    , 10980, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("book-open", [["path", {
                d: "M12 7v14",
                key: "1akyts"
            }], ["path", {
                d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
                key: "ruj8y"
            }]]);
        e.s(["BookOpen", 0, t], 10980)
    }
    , 94983, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("message-circle", [["path", {
                d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
                key: "1sd12s"
            }]]);
        e.s(["MessageCircle", 0, t], 94983)
    }
    , 76637, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , l = e.i(18566)
            , s = e.i(37727)
            , n = e.i(27085)
            , o = e.i(21742)
            , a = e.i(67082)
            , r = e.i(11519)
            , c = e.i(4392)
            , d = e.i(10980);
        let u = (0,
            e.i(75254).default)("mail", [["path", {
                d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                key: "132q7q"
            }], ["rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2",
                key: "izxlao"
            }]]);
        var f = e.i(94983)
            , p = e.i(56073);
        let m = [{
            id: "docs",
            icon: d.BookOpen,
            title: "Help center",
            description: "Search our knowledge base of how-to articles",
            action: "navigate",
            href: "/docs"
        }, {
            id: "email",
            icon: u,
            title: "Email us",
            description: "Email support at support@webild.com",
            action: "external",
            href: p.URLS.SUPPORT_EMAIL
        }, {
            id: "chat",
            icon: f.MessageCircle,
            title: "Live chat",
            description: "Get quick answers or chat with our team",
            action: "external",
            href: p.URLS.DISCORD
        }];
        function h(e) {
            return e.activeModal
        }
        function x(e) {
            return e.closeModal
        }
        e.s(["default", 0, () => {
            let e, d, u, f, p, v, y, g, b, w = (0,
                i.c)(22), k = (0,
                    l.useRouter)(), { user: C } = (0,
                        n.useUser)(), j = (0,
                            r.useModalStore)(h), N = (0,
                                r.useModalStore)(x), E = "help" === j, S = C?.firstName || "there";
            w[0] !== N || w[1] !== k ? (e = e => {
                (0,
                    c.clarityEvent)(`help_${e.id}_clicked`),
                    "navigate" === e.action ? (k.push(e.href),
                        N()) : window.open(e.href, "_blank")
            }
                ,
                w[0] = N,
                w[1] = k,
                w[2] = e) : e = w[2];
            let I = e;
            return w[3] !== S ? (d = (0,
                t.jsxs)("h2", {
                    id: "help-modal-title",
                    className: "text-xl font-medium leading-snug text-black",
                    children: ["Hi ", S, ", how can we help?"]
                }),
                w[3] = S,
                w[4] = d) : d = w[4],
                w[5] === Symbol.for("react.memo_cache_sentinel") ? (u = (0,
                    t.jsx)(s.X, {
                        className: "h-4/10 w-auto text-black"
                    }),
                    w[5] = u) : u = w[5],
                w[6] !== N ? (f = (0,
                    t.jsx)(o.default, {
                        onClick: N,
                        className: "flex items-center justify-center shrink-0 px-0 h-8 aspect-square rounded-full",
                        styleClassName: "transparent",
                        "aria-label": "Close help modal",
                        children: u
                    }),
                    w[6] = N,
                    w[7] = f) : f = w[7],
                w[8] !== d || w[9] !== f ? (p = (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [d, f]
                    }),
                    w[8] = d,
                    w[9] = f,
                    w[10] = p) : p = w[10],
                w[11] !== I ? (v = m.map(e => {
                    let i = e.icon;
                    return (0,
                        t.jsxs)("button", {
                            onClick: () => I(e),
                            className: "flex items-center gap-3 p-3 w-full text-left button-secondary rounded-sm cursor-pointer",
                            children: [(0,
                                t.jsx)("div", {
                                    className: "relative flex items-center justify-center shrink-0 h-9 w-auto aspect-square card rounded-extra-sm",
                                    children: (0,
                                        t.jsx)(i, {
                                            className: "h-4/10 w-4/10 text-black"
                                        })
                                }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0,
                                            t.jsx)("h2", {
                                                className: "text-base font-medium text-black leading-snug",
                                                children: e.title
                                            }), (0,
                                                t.jsx)("p", {
                                                    className: "text-sm text-black/75 leading-snug",
                                                    children: e.description
                                                })]
                                    })]
                        }, e.id)
                }
                ),
                    w[11] = I,
                    w[12] = v) : v = w[12],
                w[13] !== v ? (y = (0,
                    t.jsx)("div", {
                        className: "flex flex-col gap-3",
                        children: v
                    }),
                    w[13] = v,
                    w[14] = y) : y = w[14],
                w[15] !== p || w[16] !== y ? (g = (0,
                    t.jsxs)("div", {
                        className: "relative flex flex-col overflow-hidden gap-5 p-5 w-full card rounded-sm",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "help-modal-title",
                        children: [p, y]
                    }),
                    w[15] = p,
                    w[16] = y,
                    w[17] = g) : g = w[17],
                w[18] !== N || w[19] !== E || w[20] !== g ? (b = (0,
                    t.jsx)(a.default, {
                        isVisible: E,
                        onClose: N,
                        backdropClassName: "p-5",
                        contentClassName: "w-full md:w-30",
                        overlayOnClickClose: !0,
                        children: g
                    }),
                    w[18] = N,
                    w[19] = E,
                    w[20] = g,
                    w[21] = b) : b = w[21],
                b
        }
        ], 76637)
    }
    , 6700, e => {
        e.n(e.i(76637))
    }
]);
