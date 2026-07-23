(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 30013, 84593, 29213, e => {
    "use strict";
    var t = e.i(71645);
    function n(e) {
        return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
    }
    function r(e, t) {
        let i = Object.keys(e)
            , o = Object.keys(t);
        return i.length === o.length && JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && i.every(i => {
            let o = e[i]
                , u = t[i];
            return "function" == typeof o ? `${o}` == `${u}` : n(o) && n(u) ? r(o, u) : o === u
        }
        )
    }
    function i(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
    }
    function o(e) {
        return "number" == typeof e
    }
    function u(e) {
        return "string" == typeof e
    }
    function a(e) {
        return "boolean" == typeof e
    }
    function c(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    function s(e) {
        return Math.abs(e)
    }
    function l(e) {
        return Math.sign(e)
    }
    function f(e) {
        return g(e).map(Number)
    }
    function d(e) {
        return e[m(e)]
    }
    function m(e) {
        return Math.max(0, e.length - 1)
    }
    function p(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n)
    }
    function g(e) {
        return Object.keys(e)
    }
    function h(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
    }
    function v() {
        let e = []
            , t = {
                add: function (n, r, i, o = {
                    passive: !0
                }) {
                    let u;
                    return "addEventListener" in n ? (n.addEventListener(r, i, o),
                        u = () => n.removeEventListener(r, i, o)) : (n.addListener(i),
                            u = () => n.removeListener(i)),
                        e.push(u),
                        t
                },
                clear: function () {
                    e = e.filter(e => e())
                }
            };
        return t
    }
    function b(e = 0, t = 0) {
        let n = s(e - t);
        function r(n) {
            return n < e || n > t
        }
        return {
            length: n,
            max: t,
            min: e,
            constrain: function (n) {
                return r(n) ? n < e ? e : t : n
            },
            reachedAny: r,
            reachedMax: function (e) {
                return e > t
            },
            reachedMin: function (t) {
                return t < e
            },
            removeOffset: function (e) {
                return n ? e - n * Math.ceil((e - t) / n) : e
            }
        }
    }
    function x(e) {
        let t = e;
        function n(e) {
            return o(e) ? e : e.get()
        }
        return {
            get: function () {
                return t
            },
            set: function (e) {
                t = n(e)
            },
            add: function (e) {
                t += n(e)
            },
            subtract: function (e) {
                t -= n(e)
            }
        }
    }
    function y(e, t) {
        let n = "x" === e.scroll ? function (e) {
            return `translate3d(${e}px,0px,0px)`
        }
            : function (e) {
                return `translate3d(0px,${e}px,0px)`
            }
            , r = t.style
            , i = null
            , o = !1;
        return {
            clear: function () {
                !o && (r.transform = "",
                    t.getAttribute("style") || t.removeAttribute("style"))
            },
            to: function (t) {
                if (o)
                    return;
                let u = Math.round(100 * e.direction(t)) / 100;
                u !== i && (r.transform = n(u),
                    i = u)
            },
            toggleActive: function (e) {
                o = !e
            }
        }
    }
    let M = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
    };
    function w(e, t, n) {
        let r, i, E, S, D, O, A, P, T = e.ownerDocument, L = T.defaultView, F = function (e) {
            function t(e, t) {
                return function e(t, n) {
                    return [t, n].reduce((t, n) => (g(n).forEach(r => {
                        let i = t[r]
                            , o = n[r]
                            , u = c(i) && c(o);
                        t[r] = u ? e(i, o) : o
                    }
                    ),
                        t), {})
                }(e, t || {})
            }
            return {
                mergeOptions: t,
                optionsAtMedia: function (n) {
                    let r = n.breakpoints || {}
                        , i = g(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
                    return t(n, i)
                },
                optionsMediaQueries: function (t) {
                    return t.map(e => g(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                }
            }
        }(L), j = (P = [],
        {
            init: function (e, t) {
                return (P = t.filter(({ options: e }) => !1 !== F.optionsAtMedia(e).active)).forEach(t => t.init(e, F)),
                    t.reduce((e, t) => Object.assign(e, {
                        [t.name]: t
                    }), {})
            },
            destroy: function () {
                P = P.filter(e => e.destroy())
            }
        }), k = v(), I = (i = {},
            E = {
                init: function (e) {
                    r = e
                },
                emit: function (e) {
                    return (i[e] || []).forEach(t => t(r, e)),
                        E
                },
                off: function (e, t) {
                    return i[e] = (i[e] || []).filter(e => e !== t),
                        E
                },
                on: function (e, t) {
                    return i[e] = (i[e] || []).concat([t]),
                        E
                },
                clear: function () {
                    i = {}
                }
            }), { mergeOptions: V, optionsAtMedia: C, optionsMediaQueries: N } = F, { on: z, off: R, emit: B } = I, H = !1, X = V(M, w.globalOptions), W = V(X), Y = [];
        function U(t, n) {
            H || (W = C(X = V(X, t)),
                Y = n || Y,
                function () {
                    let { container: t, slides: n } = W;
                    O = (u(t) ? e.querySelector(t) : t) || e.children[0];
                    let r = u(n) ? O.querySelectorAll(n) : n;
                    A = [].slice.call(r || O.children)
                }(),
                S = function t(n) {
                    let r = function (e, t, n, r, i, c, M) {
                        var w, E;
                        let S, D, O, A, P, T, L, F, j, k, I, V, C, N, { align: z, axis: R, direction: B, startIndex: H, loop: X, duration: W, dragFree: Y, dragThreshold: U, inViewThreshold: $, slidesToScroll: q, skipSnaps: G, containScroll: J, watchResize: K, watchSlides: Q, watchDrag: Z, watchFocus: _ } = c, ee = {
                            measure: function (e) {
                                let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
                                return {
                                    top: t,
                                    right: n + r,
                                    bottom: t + i,
                                    left: n,
                                    width: r,
                                    height: i
                                }
                            }
                        }, et = ee.measure(t), en = n.map(ee.measure), er = (D = "rtl" === B,
                            A = (O = "y" === R) || !D ? 1 : -1,
                            P = O ? "top" : D ? "right" : "left",
                            T = O ? "bottom" : D ? "left" : "right",
                        {
                            scroll: O ? "y" : "x",
                            cross: O ? "x" : "y",
                            startEdge: P,
                            endEdge: T,
                            measureSize: function (e) {
                                let { height: t, width: n } = e;
                                return O ? t : n
                            },
                            direction: function (e) {
                                return e * A
                            }
                        }), ei = er.measureSize(et), eo = {
                            measure: function (e) {
                                return e / 100 * ei
                            }
                        }, eu = (w = z,
                            E = ei,
                            S = {
                                start: function () {
                                    return 0
                                },
                                center: function (e) {
                                    return (E - e) / 2
                                },
                                end: function (e) {
                                    return E - e
                                }
                            },
                        {
                            measure: function (e, t) {
                                return u(w) ? S[w](e) : w(E, e, t)
                            }
                        }), ea = !X && !!J, { slideSizes: ec, slideSizesWithGaps: es, startGap: el, endGap: ef } = function (e, t, n, r, i, o) {
                            let { measureSize: u, startEdge: a, endEdge: c } = e
                                , l = n[0] && i
                                , f = function () {
                                    if (!l)
                                        return 0;
                                    let e = n[0];
                                    return s(t[a] - e[a])
                                }()
                                , p = l ? parseFloat(o.getComputedStyle(d(r)).getPropertyValue(`margin-${c}`)) : 0
                                , g = n.map(u)
                                , h = n.map((e, t, n) => {
                                    let r = t === m(n);
                                    return t ? r ? g[t] + p : n[t + 1][a] - e[a] : g[t] + f
                                }
                                ).map(s);
                            return {
                                slideSizes: g,
                                slideSizesWithGaps: h,
                                startGap: f,
                                endGap: p
                            }
                        }(er, et, en, n, X || !!J, i), ed = function (e, t, n, r, i, u, a, c) {
                            let { startEdge: l, endEdge: p, direction: g } = e
                                , h = o(n);
                            return {
                                groupSlides: function (e) {
                                    return h ? f(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? f(e).reduce((n, o, f) => {
                                        let h = d(n) || 0
                                            , v = o === m(e)
                                            , b = i[l] - u[h][l]
                                            , x = i[l] - u[o][p]
                                            , y = r || 0 !== h ? 0 : g(a)
                                            , M = s(x - (!r && v ? g(c) : 0) - (b + y));
                                        return f && M > t + 2 && n.push(o),
                                            v && n.push(e.length),
                                            n
                                    }
                                        , []).map((t, n, r) => {
                                            let i = Math.max(r[n - 1] || 0);
                                            return e.slice(i, t)
                                        }
                                        ) : []
                                }
                            }
                        }(er, ei, q, X, et, en, el, ef), { snaps: em, snapsAligned: ep } = function (e, t, n, r, i) {
                            let { startEdge: o, endEdge: u } = e
                                , { groupSlides: a } = i
                                , c = a(r).map(e => d(e)[u] - e[0][o]).map(s).map(t.measure)
                                , l = r.map(e => n[o] - e[o]).map(e => -s(e))
                                , f = a(l).map(e => e[0]).map((e, t) => e + c[t]);
                            return {
                                snaps: l,
                                snapsAligned: f
                            }
                        }(er, eu, et, en, ed), eg = -d(em) + d(es), { snapsContained: eh, scrollContainLimit: ev } = function (e, t, n, r) {
                            let i, o, u = b(-t + e, 0), a = n.map((e, t) => {
                                let { min: r, max: i } = u
                                    , o = u.constrain(e)
                                    , a = t === m(n);
                                return t ? a || function (e, t) {
                                    return 1 >= s(e - t)
                                }(r, o) ? r : function (e, t) {
                                    return 1 >= s(e - t)
                                }(i, o) ? i : o : i
                            }
                            ).map(e => parseFloat(e.toFixed(3))), c = (i = a[0],
                                o = d(a),
                                b(a.lastIndexOf(i), a.indexOf(o) + 1));
                            return {
                                snapsContained: function () {
                                    if (t <= e + 2)
                                        return [u.max];
                                    if ("keepSnaps" === r)
                                        return a;
                                    let { min: n, max: i } = c;
                                    return a.slice(n, i)
                                }(),
                                scrollContainLimit: c
                            }
                        }(ei, eg, ep, J), eb = ea ? eh : ep, { limit: ex } = (L = eb[0],
                        {
                            limit: b(X ? L - eg : d(eb), L)
                        }), ey = function e(t, n, r) {
                            let { constrain: i } = b(0, t)
                                , o = t + 1
                                , u = a(n);
                            function a(e) {
                                return r ? s((o + e) % o) : i(e)
                            }
                            function c() {
                                return e(t, u, r)
                            }
                            let l = {
                                get: function () {
                                    return u
                                },
                                set: function (e) {
                                    return u = a(e),
                                        l
                                },
                                add: function (e) {
                                    return c().set(u + e)
                                },
                                clone: c
                            };
                            return l
                        }(m(eb), H, X), eM = ey.clone(), ew = f(n), eE = function (e, t, n, r) {
                            let i = v()
                                , o = 1e3 / 60
                                , u = null
                                , a = 0
                                , c = 0;
                            function s(e) {
                                if (!c)
                                    return;
                                u || (u = e,
                                    n(),
                                    n());
                                let i = e - u;
                                for (u = e,
                                    a += i; a >= o;)
                                    n(),
                                        a -= o;
                                r(a / o),
                                    c && (c = t.requestAnimationFrame(s))
                            }
                            function l() {
                                t.cancelAnimationFrame(c),
                                    u = null,
                                    a = 0,
                                    c = 0
                            }
                            return {
                                init: function () {
                                    i.add(e, "visibilitychange", () => {
                                        e.hidden && (u = null,
                                            a = 0)
                                    }
                                    )
                                },
                                destroy: function () {
                                    l(),
                                        i.clear()
                                },
                                start: function () {
                                    c || (c = t.requestAnimationFrame(s))
                                },
                                stop: l,
                                update: n,
                                render: r
                            }
                        }(r, i, () => (({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
                            r || n.constrain(e.pointerDown()),
                                t.seek()
                        }
                        )(eN), e => (({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: o, slideLooper: u, dragHandler: a, animation: c, eventHandler: s, scrollBounds: l, options: { loop: f } }, d) => {
                            let m = e.settled()
                                , p = !l.shouldConstrain()
                                , g = f ? m : m && p
                                , h = g && !a.pointerDown();
                            h && c.stop();
                            let v = n.get() * d + i.get() * (1 - d);
                            r.set(v),
                                f && (o.loop(e.direction()),
                                    u.loop()),
                                t.to(r.get()),
                                h && s.emit("settle"),
                                g || s.emit("scroll")
                        }
                        )(eN, e)), eS = eb[ey.get()], eD = x(eS), eO = x(eS), eA = x(eS), eP = x(eS), eT = function (e, t, n, r, i) {
                            let o = 0
                                , u = 0
                                , a = i
                                , c = .68
                                , f = e.get()
                                , d = 0;
                            function m(e) {
                                return a = e,
                                    g
                            }
                            function p(e) {
                                return c = e,
                                    g
                            }
                            let g = {
                                direction: function () {
                                    return u
                                },
                                duration: function () {
                                    return a
                                },
                                velocity: function () {
                                    return o
                                },
                                seek: function () {
                                    let t = r.get() - e.get()
                                        , i = 0;
                                    return a ? (n.set(e),
                                        o += t / a,
                                        o *= c,
                                        f += o,
                                        e.add(o),
                                        i = f - d) : (o = 0,
                                            n.set(r),
                                            e.set(r),
                                            i = t),
                                        u = l(i),
                                        d = f,
                                        g
                                },
                                settled: function () {
                                    return .001 > s(r.get() - t.get())
                                },
                                useBaseFriction: function () {
                                    return p(.68)
                                },
                                useBaseDuration: function () {
                                    return m(i)
                                },
                                useFriction: p,
                                useDuration: m
                            };
                            return g
                        }(eD, eA, eO, eP, W), eL = function (e, t, n, r, i) {
                            let { reachedAny: o, removeOffset: u, constrain: a } = r;
                            function c(e) {
                                return e.concat().sort((e, t) => s(e) - s(t))[0]
                            }
                            function f(t, r) {
                                let i = [t, t + n, t - n];
                                if (!e)
                                    return t;
                                if (!r)
                                    return c(i);
                                let o = i.filter(e => l(e) === r);
                                return o.length ? c(o) : d(i) - n
                            }
                            return {
                                byDistance: function (n, r) {
                                    let c = i.get() + n
                                        , { index: l, distance: d } = function (n) {
                                            let r = e ? u(n) : a(n)
                                                , { index: i } = t.map((e, t) => ({
                                                    diff: f(e - r, 0),
                                                    index: t
                                                })).sort((e, t) => s(e.diff) - s(t.diff))[0];
                                            return {
                                                index: i,
                                                distance: r
                                            }
                                        }(c)
                                        , m = !e && o(c);
                                    if (!r || m)
                                        return {
                                            index: l,
                                            distance: n
                                        };
                                    let p = n + f(t[l] - d, 0);
                                    return {
                                        index: l,
                                        distance: p
                                    }
                                },
                                byIndex: function (e, n) {
                                    let r = f(t[e] - i.get(), n);
                                    return {
                                        index: e,
                                        distance: r
                                    }
                                },
                                shortcut: f
                            }
                        }(X, eb, eg, ex, eP), eF = function (e, t, n, r, i, o, u) {
                            function a(i) {
                                let a = i.distance
                                    , c = i.index !== t.get();
                                o.add(a),
                                    a && (r.duration() ? e.start() : (e.update(),
                                        e.render(1),
                                        e.update())),
                                    c && (n.set(t.get()),
                                        t.set(i.index),
                                        u.emit("select"))
                            }
                            return {
                                distance: function (e, t) {
                                    a(i.byDistance(e, t))
                                },
                                index: function (e, n) {
                                    let r = t.clone().set(e);
                                    a(i.byIndex(r.get(), n))
                                }
                            }
                        }(eE, ey, eM, eT, eL, eP, M), ej = function (e) {
                            let { max: t, length: n } = e;
                            return {
                                get: function (e) {
                                    return n ? -((e - t) / n) : 0
                                }
                            }
                        }(ex), ek = v(), eI = (j = {},
                            k = null,
                            I = null,
                            V = !1,
                        {
                            init: function () {
                                F = new IntersectionObserver(e => {
                                    V || (e.forEach(e => {
                                        j[n.indexOf(e.target)] = e
                                    }
                                    ),
                                        k = null,
                                        I = null,
                                        M.emit("slidesInView"))
                                }
                                    , {
                                        root: t.parentElement,
                                        threshold: $
                                    }),
                                    n.forEach(e => F.observe(e))
                            },
                            destroy: function () {
                                F && F.disconnect(),
                                    V = !0
                            },
                            get: function (e = !0) {
                                if (e && k)
                                    return k;
                                if (!e && I)
                                    return I;
                                let t = g(j).reduce((t, n) => {
                                    let r = parseInt(n)
                                        , { isIntersecting: i } = j[r];
                                    return (e && i || !e && !i) && t.push(r),
                                        t
                                }
                                    , []);
                                return e && (k = t),
                                    e || (I = t),
                                    t
                            }
                        }), { slideRegistry: eV } = function (e, t, n, r, i, o) {
                            let u, { groupSlides: a } = i, { min: c, max: s } = r;
                            return {
                                slideRegistry: (u = a(o),
                                    1 === n.length ? [o] : e && "keepSnaps" !== t ? u.slice(c, s).map((e, t, n) => {
                                        let r = t === m(n);
                                        return t ? r ? p(m(o) - d(n)[0] + 1, d(n)[0]) : e : p(d(n[0]) + 1)
                                    }
                                    ) : u)
                            }
                        }(ea, J, eb, ev, ed, ew), eC = function (e, t, n, r, i, u, c, s) {
                            let l = {
                                passive: !0,
                                capture: !0
                            }
                                , f = 0;
                            function d(e) {
                                "Tab" === e.code && (f = new Date().getTime())
                            }
                            return {
                                init: function (m) {
                                    s && (u.add(document, "keydown", d, !1),
                                        t.forEach((t, d) => {
                                            u.add(t, "focus", t => {
                                                (a(s) || s(m, t)) && function (t) {
                                                    if (new Date().getTime() - f > 10)
                                                        return;
                                                    c.emit("slideFocusStart"),
                                                        e.scrollLeft = 0;
                                                    let u = n.findIndex(e => e.includes(t));
                                                    o(u) && (i.useDuration(0),
                                                        r.index(u, 0),
                                                        c.emit("slideFocus"))
                                                }(d)
                                            }
                                                , l)
                                        }
                                        ))
                                }
                            }
                        }(e, n, eV, eF, eT, ek, M, _), eN = {
                            ownerDocument: r,
                            ownerWindow: i,
                            eventHandler: M,
                            containerRect: et,
                            slideRects: en,
                            animation: eE,
                            axis: er,
                            dragHandler: function (e, t, n, r, i, o, u, c, f, d, m, p, g, x, y, M, w, E) {
                                let { cross: S, direction: D } = e
                                    , O = ["INPUT", "SELECT", "TEXTAREA"]
                                    , A = {
                                        passive: !1
                                    }
                                    , P = v()
                                    , T = v()
                                    , L = b(50, 225).constrain(x.measure(20))
                                    , F = {
                                        mouse: 300,
                                        touch: 400
                                    }
                                    , j = {
                                        mouse: 500,
                                        touch: 600
                                    }
                                    , k = y ? 43 : 25
                                    , I = !1
                                    , V = 0
                                    , C = 0
                                    , N = !1
                                    , z = !1
                                    , R = !1
                                    , B = !1;
                                function H(e) {
                                    if (!h(e, r) && e.touches.length >= 2)
                                        return X(e);
                                    let t = o.readPoint(e)
                                        , n = o.readPoint(e, S)
                                        , u = s(t - V)
                                        , a = s(n - C);
                                    if (!z && !B && (!e.cancelable || !(z = u > a)))
                                        return X(e);
                                    let l = o.pointerMove(e);
                                    u > M && (R = !0),
                                        d.useFriction(.3).useDuration(.75),
                                        c.start(),
                                        i.add(D(l)),
                                        e.preventDefault()
                                }
                                function X(e) {
                                    var t;
                                    let n, r, i = m.byDistance(0, !1).index !== p.get(), u = o.pointerUp(e) * (y ? j : F)[B ? "mouse" : "touch"], a = (t = D(u),
                                        n = p.add(-1 * l(t)),
                                        r = m.byDistance(t, !y).distance,
                                        y || s(t) < L ? r : w && i ? .5 * r : m.byIndex(n.get(), 0).distance), c = function (e, t) {
                                            var n, r;
                                            if (0 === e || 0 === t || s(e) <= s(t))
                                                return 0;
                                            let i = (n = s(e),
                                                r = s(t),
                                                s(n - r));
                                            return s(i / e)
                                        }(u, a);
                                    z = !1,
                                        N = !1,
                                        T.clear(),
                                        d.useDuration(k - 10 * c).useFriction(.68 + c / 50),
                                        f.distance(a, !y),
                                        B = !1,
                                        g.emit("pointerUp")
                                }
                                function W(e) {
                                    R && (e.stopPropagation(),
                                        e.preventDefault(),
                                        R = !1)
                                }
                                return {
                                    init: function (e) {
                                        E && P.add(t, "dragstart", e => e.preventDefault(), A).add(t, "touchmove", () => void 0, A).add(t, "touchend", () => void 0).add(t, "touchstart", c).add(t, "mousedown", c).add(t, "touchcancel", X).add(t, "contextmenu", X).add(t, "click", W, !0);
                                        function c(c) {
                                            (a(E) || E(e, c)) && function (e) {
                                                let a, c = h(e, r);
                                                if ((B = c,
                                                    R = y && c && !e.buttons && I,
                                                    I = s(i.get() - u.get()) >= 2,
                                                    !c || 0 === e.button) && (a = e.target.nodeName || "",
                                                        !O.includes(a))) {
                                                    let r;
                                                    N = !0,
                                                        o.pointerDown(e),
                                                        d.useFriction(0).useDuration(0),
                                                        i.set(u),
                                                        r = B ? n : t,
                                                        T.add(r, "touchmove", H, A).add(r, "touchend", X).add(r, "mousemove", H, A).add(r, "mouseup", X),
                                                        V = o.readPoint(e),
                                                        C = o.readPoint(e, S),
                                                        g.emit("pointerDown")
                                                }
                                            }(c)
                                        }
                                    },
                                    destroy: function () {
                                        P.clear(),
                                            T.clear()
                                    },
                                    pointerDown: function () {
                                        return N
                                    }
                                }
                            }(er, e, r, i, eP, function (e, t) {
                                let n, r;
                                function i(e) {
                                    return e.timeStamp
                                }
                                function o(n, r) {
                                    let i = r || e.scroll
                                        , o = `client${"x" === i ? "X" : "Y"}`;
                                    return (h(n, t) ? n : n.touches[0])[o]
                                }
                                return {
                                    pointerDown: function (e) {
                                        return n = e,
                                            r = e,
                                            o(e)
                                    },
                                    pointerMove: function (e) {
                                        let t = o(e) - o(r)
                                            , u = i(e) - i(n) > 170;
                                        return r = e,
                                            u && (n = e),
                                            t
                                    },
                                    pointerUp: function (e) {
                                        if (!n || !r)
                                            return 0;
                                        let t = o(r) - o(n)
                                            , u = i(e) - i(n)
                                            , a = i(e) - i(r) > 170
                                            , c = t / u;
                                        return u && !a && s(c) > .1 ? c : 0
                                    },
                                    readPoint: o
                                }
                            }(er, i), eD, eE, eF, eT, eL, ey, M, eo, Y, U, G, Z),
                            eventStore: ek,
                            percentOfView: eo,
                            index: ey,
                            indexPrevious: eM,
                            limit: ex,
                            location: eD,
                            offsetLocation: eA,
                            previousLocation: eO,
                            options: c,
                            resizeHandler: function (e, t, n, r, i, o, u) {
                                let c, l, f = [e].concat(r), d = [], m = !1;
                                function p(e) {
                                    return i.measureSize(u.measure(e))
                                }
                                return {
                                    init: function (i) {
                                        o && (l = p(e),
                                            d = r.map(p),
                                            c = new ResizeObserver(n => {
                                                (a(o) || o(i, n)) && function (n) {
                                                    for (let o of n) {
                                                        if (m)
                                                            return;
                                                        let n = o.target === e
                                                            , u = r.indexOf(o.target)
                                                            , a = n ? l : d[u];
                                                        if (s(p(n ? e : r[u]) - a) >= .5) {
                                                            i.reInit(),
                                                                t.emit("resize");
                                                            break
                                                        }
                                                    }
                                                }(n)
                                            }
                                            ),
                                            n.requestAnimationFrame(() => {
                                                f.forEach(e => c.observe(e))
                                            }
                                            ))
                                    },
                                    destroy: function () {
                                        m = !0,
                                            c && c.disconnect()
                                    }
                                }
                            }(t, M, i, n, er, K, ee),
                            scrollBody: eT,
                            scrollBounds: function (e, t, n, r, i) {
                                let o = i.measure(10)
                                    , u = i.measure(50)
                                    , a = b(.1, .99)
                                    , c = !1;
                                function l() {
                                    return !c && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
                                }
                                return {
                                    shouldConstrain: l,
                                    constrain: function (i) {
                                        if (!l())
                                            return;
                                        let c = e.reachedMin(t.get()) ? "min" : "max"
                                            , f = s(e[c] - t.get())
                                            , d = n.get() - t.get()
                                            , m = a.constrain(f / u);
                                        n.subtract(d * m),
                                            !i && s(d) < o && (n.set(e.constrain(n.get())),
                                                r.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function (e) {
                                        c = !e
                                    }
                                }
                            }(ex, eA, eP, eT, eo),
                            scrollLooper: function (e, t, n, r) {
                                let { reachedMin: i, reachedMax: o } = b(t.min + .1, t.max + .1);
                                return {
                                    loop: function (t) {
                                        if (!(1 === t ? o(n.get()) : -1 === t && i(n.get())))
                                            return;
                                        let u = -1 * t * e;
                                        r.forEach(e => e.add(u))
                                    }
                                }
                            }(eg, ex, eA, [eD, eA, eO, eP]),
                            scrollProgress: ej,
                            scrollSnapList: eb.map(ej.get),
                            scrollSnaps: eb,
                            scrollTarget: eL,
                            scrollTo: eF,
                            slideLooper: function (e, t, n, r, i, o, u, a, c) {
                                let s = f(i)
                                    , l = f(i).reverse()
                                    , d = g(p(l, u[0]), n, !1).concat(g(p(s, t - u[0] - 1), -n, !0));
                                function m(e, t) {
                                    return e.reduce((e, t) => e - i[t], t)
                                }
                                function p(e, t) {
                                    return e.reduce((e, n) => m(e, t) > 0 ? e.concat([n]) : e, [])
                                }
                                function g(i, u, s) {
                                    let l = o.map((e, n) => ({
                                        start: e - r[n] + .5 + u,
                                        end: e + t - .5 + u
                                    }));
                                    return i.map(t => {
                                        let r = s ? 0 : -n
                                            , i = s ? n : 0
                                            , o = l[t][s ? "end" : "start"];
                                        return {
                                            index: t,
                                            loopPoint: o,
                                            slideLocation: x(-1),
                                            translate: y(e, c[t]),
                                            target: () => a.get() > o ? r : i
                                        }
                                    }
                                    )
                                }
                                return {
                                    canLoop: function () {
                                        return d.every(({ index: e }) => .1 >= m(s.filter(t => t !== e), t))
                                    },
                                    clear: function () {
                                        d.forEach(e => e.translate.clear())
                                    },
                                    loop: function () {
                                        d.forEach(e => {
                                            let { target: t, translate: n, slideLocation: r } = e
                                                , i = t();
                                            i !== r.get() && (n.to(i),
                                                r.set(i))
                                        }
                                        )
                                    },
                                    loopPoints: d
                                }
                            }(er, ei, eg, ec, es, em, eb, eA, n),
                            slideFocus: eC,
                            slidesHandler: (N = !1,
                            {
                                init: function (e) {
                                    Q && (C = new MutationObserver(t => {
                                        !N && (a(Q) || Q(e, t)) && function (t) {
                                            for (let n of t)
                                                if ("childList" === n.type) {
                                                    e.reInit(),
                                                        M.emit("slidesChanged");
                                                    break
                                                }
                                        }(t)
                                    }
                                    )).observe(t, {
                                        childList: !0
                                    })
                                },
                                destroy: function () {
                                    C && C.disconnect(),
                                        N = !0
                                }
                            }),
                            slidesInView: eI,
                            slideIndexes: ew,
                            slideRegistry: eV,
                            slidesToScroll: ed,
                            target: eP,
                            translate: y(er, t)
                        };
                        return eN
                    }(e, O, A, T, L, n, I);
                    return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                        loop: !1
                    })) : r
                }(W),
                N([X, ...Y.map(({ options: e }) => e)]).forEach(e => k.add(e, "change", $)),
                W.active && (S.translate.to(S.location.get()),
                    S.animation.init(),
                    S.slidesInView.init(),
                    S.slideFocus.init(K),
                    S.eventHandler.init(K),
                    S.resizeHandler.init(K),
                    S.slidesHandler.init(K),
                    S.options.loop && S.slideLooper.loop(),
                    O.offsetParent && A.length && S.dragHandler.init(K),
                    D = j.init(K, Y)))
        }
        function $(e, t) {
            let n = J();
            q(),
                U(V({
                    startIndex: n
                }, e), t),
                I.emit("reInit")
        }
        function q() {
            S.dragHandler.destroy(),
                S.eventStore.clear(),
                S.translate.clear(),
                S.slideLooper.clear(),
                S.resizeHandler.destroy(),
                S.slidesHandler.destroy(),
                S.slidesInView.destroy(),
                S.animation.destroy(),
                j.destroy(),
                k.clear()
        }
        function G(e, t, n) {
            W.active && !H && (S.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : W.duration),
                S.scrollTo.index(e, n || 0))
        }
        function J() {
            return S.index.get()
        }
        let K = {
            canScrollNext: function () {
                return S.index.add(1).get() !== J()
            },
            canScrollPrev: function () {
                return S.index.add(-1).get() !== J()
            },
            containerNode: function () {
                return O
            },
            internalEngine: function () {
                return S
            },
            destroy: function () {
                H || (H = !0,
                    k.clear(),
                    q(),
                    I.emit("destroy"),
                    I.clear())
            },
            off: R,
            on: z,
            emit: B,
            plugins: function () {
                return D
            },
            previousScrollSnap: function () {
                return S.indexPrevious.get()
            },
            reInit: $,
            rootNode: function () {
                return e
            },
            scrollNext: function (e) {
                G(S.index.add(1).get(), e, -1)
            },
            scrollPrev: function (e) {
                G(S.index.add(-1).get(), e, 1)
            },
            scrollProgress: function () {
                return S.scrollProgress.get(S.offsetLocation.get())
            },
            scrollSnapList: function () {
                return S.scrollSnapList
            },
            scrollTo: G,
            selectedScrollSnap: J,
            slideNodes: function () {
                return A
            },
            slidesInView: function () {
                return S.slidesInView.get()
            },
            slidesNotInView: function () {
                return S.slidesInView.get(!1)
            }
        };
        return U(t, n),
            setTimeout(() => I.emit("init"), 0),
            K
    }
    function E(e = {}, n = []) {
        let o = (0,
            t.useRef)(e)
            , u = (0,
                t.useRef)(n)
            , [a, c] = (0,
                t.useState)()
            , [s, l] = (0,
                t.useState)()
            , f = (0,
                t.useCallback)(() => {
                    a && a.reInit(o.current, u.current)
                }
                    , [a]);
        return (0,
            t.useEffect)(() => {
                r(o.current, e) || (o.current = e,
                    f())
            }
                , [e, f]),
            (0,
                t.useEffect)(() => {
                    !function (e, t) {
                        if (e.length !== t.length)
                            return !1;
                        let n = i(e)
                            , o = i(t);
                        return n.every((e, t) => r(e, o[t]))
                    }(u.current, n) && (u.current = n,
                        f())
                }
                    , [n, f]),
            (0,
                t.useEffect)(() => {
                    if ("u" > typeof window && window.document && window.document.createElement && s) {
                        w.globalOptions = E.globalOptions;
                        let e = w(s, o.current, u.current);
                        return c(e),
                            () => e.destroy()
                    }
                    c(void 0)
                }
                    , [s, c]),
            [l, a]
    }
    function S() {
        return (S = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function D(e, t) {
        if (e.length !== t.length)
            throw Error("vectors must be same length");
        return e.map(function (e, n) {
            return e + t[n]
        })
    }
    function O(e) {
        return Math.max.apply(Math, e.map(Math.abs))
    }
    function A(e) {
        return Object.freeze(e),
            Object.values(e).forEach(function (e) {
                null === e || "object" != typeof e || Object.isFrozen(e) || A(e)
            }),
            e
    }
    w.globalOptions = void 0,
        E.globalOptions = void 0,
        e.s(["default", 0, E], 30013),
        e.i(47167);
    var P = [1, 18, "u" > typeof window && window.innerHeight || 800]
        , T = [-1, -1, -1]
        , L = A({
            preventWheelAction: !0,
            reverseSign: [!0, !0, !1]
        });
    function F() {
        return {
            isStarted: !1,
            isStartPublished: !1,
            isMomentum: !1,
            startTime: 0,
            lastAbsDelta: 1 / 0,
            axisMovement: [0, 0, 0],
            axisVelocity: [0, 0, 0],
            accelerationFactors: [],
            scrollPoints: [],
            scrollPointsToMerge: [],
            willEndTimeout: 400
        }
    }
    let j = function (e) {
        void 0 === e && (e = {});
        var t, n, r, i, o, u = function () {
            var e = {};
            function t(t, n) {
                e[t] = (e[t] || []).filter(function (e) {
                    return e !== n
                })
            }
            return A({
                on: function (n, r) {
                    return e[n] = (e[n] || []).concat(r),
                        function () {
                            return t(n, r)
                        }
                },
                off: t,
                dispatch: function (t, n) {
                    t in e && e[t].forEach(function (e) {
                        return e(n)
                    })
                }
            })
        }(), a = u.on, c = u.off, s = u.dispatch, l = L, f = F(), d = !1, m = function (e) {
            Array.isArray(e) ? e.forEach(function (e) {
                return v(e)
            }) : v(e)
        }, p = function (e) {
            return (void 0 === e && (e = {}),
                Object.values(e).some(function (e) {
                    return null == e
                })) ? l : l = A(S({}, L, l, e))
        }, g = function (e) {
            var t = S({
                event: i,
                isStart: !1,
                isEnding: !1,
                isMomentumCancel: !1,
                isMomentum: f.isMomentum,
                axisDelta: [0, 0, 0],
                axisVelocity: f.axisVelocity,
                axisMovement: f.axisMovement,
                get axisMovementProjection() {
                    return D(t.axisMovement, t.axisVelocity.map(function (e) {
                        var t;
                        return void 0 === t && (t = .996),
                            e * t / (1 - t)
                    }))
                }
            }, e);
            s("wheel", S({}, t, {
                previous: o
            })),
                o = t
        }, h = function (e, t) {
            var n = l.preventWheelAction
                , r = t[0]
                , i = t[1]
                , o = t[2];
            if ("boolean" == typeof n)
                return n;
            switch (n) {
                case "x":
                    return Math.abs(r) >= e;
                case "y":
                    return Math.abs(i) >= e;
                case "z":
                    return Math.abs(o) >= e;
                default:
                    return !1
            }
        }, v = function (e) {
            var t, n, r, o, u = (o = function (e, t) {
                if (!t)
                    return e;
                var n = !0 === t ? T : t.map(function (e) {
                    return e ? -1 : 1
                });
                return S({}, e, {
                    axisDelta: e.axisDelta.map(function (e, t) {
                        return e * n[t]
                    })
                })
            }((t = e.deltaX * P[e.deltaMode],
                n = e.deltaY * P[e.deltaMode],
                r = (e.deltaZ || 0) * P[e.deltaMode],
            {
                timeStamp: e.timeStamp,
                axisDelta: [t, n, r]
            }), l.reverseSign),
                S({}, o, {
                    axisDelta: o.axisDelta.map(function (e) {
                        return Math.min(Math.max(-700, e), 700)
                    })
                })), a = u.axisDelta, c = u.timeStamp, s = O(a);
            if (e.preventDefault && h(s, a) && e.preventDefault(),
                f.isStarted ? f.isMomentum && s > Math.max(2, 2 * f.lastAbsDelta) && (V(!0),
                    k()) : k(),
                0 === s && Object.is && Object.is(e.deltaX, -0)) {
                d = !0;
                return
            }
            i = e,
                f.axisMovement = D(f.axisMovement, a),
                f.lastAbsDelta = s,
                f.scrollPointsToMerge.push({
                    axisDelta: a,
                    timeStamp: c
                }),
                b(),
                g({
                    axisDelta: a,
                    isStart: !f.isStartPublished
                }),
                f.isStartPublished = !0,
                I()
        }, b = function () {
            if (2 === f.scrollPointsToMerge.length) {
                var e;
                f.scrollPoints.unshift({
                    axisDeltaSum: f.scrollPointsToMerge.map(function (e) {
                        return e.axisDelta
                    }).reduce(D),
                    timeStamp: (e = f.scrollPointsToMerge.map(function (e) {
                        return e.timeStamp
                    })).reduce(function (e, t) {
                        return e + t
                    }) / e.length
                }),
                    y(),
                    f.scrollPointsToMerge.length = 0,
                    f.scrollPoints.length = 1,
                    f.isMomentum || E()
            } else
                f.isStartPublished || x()
        }, x = function () {
            var e;
            f.axisVelocity = (e = f.scrollPointsToMerge)[e.length - 1].axisDelta.map(function (e) {
                return e / f.willEndTimeout
            })
        }, y = function () {
            var e = f.scrollPoints
                , t = e[0]
                , n = e[1];
            if (n && t) {
                var r = t.timeStamp - n.timeStamp;
                if (r <= 0)
                    return;
                var i = t.axisDeltaSum.map(function (e) {
                    return e / r
                })
                    , o = i.map(function (e, t) {
                        return e / (f.axisVelocity[t] || 1)
                    });
                f.axisVelocity = i,
                    f.accelerationFactors.push(o),
                    M(r)
            }
        }, M = function (e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            f.isMomentum || (t = Math.max(100, 2 * t)),
                f.willEndTimeout = Math.min(1e3, Math.round(t))
        }, w = function (e) {
            return 0 === e || e <= .96 && e >= .6
        }, E = function () {
            if (f.accelerationFactors.length >= 5) {
                if (d && (d = !1,
                    O(f.axisVelocity) >= .2))
                    return void j();
                var e = f.accelerationFactors.slice(-5);
                e.every(function (e) {
                    var t = !!e.reduce(function (e, t) {
                        return e && e < 1 && e === t ? 1 : 0
                    })
                        , n = e.filter(w).length === e.length;
                    return t || n
                }) && j(),
                    f.accelerationFactors = e
            }
        }, j = function () {
            f.isMomentum = !0
        }, k = function () {
            (f = F()).isStarted = !0,
                f.startTime = Date.now(),
                o = void 0,
                d = !1
        }, I = function () {
            clearTimeout(t),
                t = setTimeout(V, f.willEndTimeout)
        }, V = function (e) {
            void 0 === e && (e = !1),
                f.isStarted && (f.isMomentum && e ? g({
                    isEnding: !0,
                    isMomentumCancel: !0
                }) : g({
                    isEnding: !0
                }),
                    f.isMomentum = !1,
                    f.isStarted = !1)
        }, C = (n = [],
            A({
                observe: function (e) {
                    return e.addEventListener("wheel", m, {
                        passive: !1
                    }),
                        n.push(e),
                        function () {
                            return r(e)
                        }
                },
                unobserve: r = function (e) {
                    e.removeEventListener("wheel", m),
                        n = n.filter(function (t) {
                            return t !== e
                        })
                }
                ,
                disconnect: function () {
                    n.forEach(r)
                }
            })), N = C.observe, z = C.unobserve, R = C.disconnect;
        return p(e),
            A({
                on: a,
                off: c,
                observe: N,
                unobserve: z,
                disconnect: R,
                feedWheel: m,
                updateOptions: p
            })
    };
    var k = {
        active: !0,
        breakpoints: {},
        wheelDraggingClass: "is-wheel-dragging",
        forceWheelAxis: void 0,
        target: void 0
    };
    function I(e) {
        void 0 === e && (e = {});
        var t, n = function () { };
        return {
            name: "wheelGestures",
            options: e,
            init: function (r, i) {
                var o, u, a, c = i.mergeOptions, s = i.optionsAtMedia, l = c(k, I.globalOptions);
                t = s(c(l, e));
                var f = r.internalEngine()
                    , d = null != (o = t.target) ? o : r.containerNode().parentNode
                    , m = null != (u = t.forceWheelAxis) ? u : f.options.axis
                    , p = j({
                        preventWheelAction: m,
                        reverseSign: [!0, !0, !1]
                    });
                function g() {
                    y = ("x" === m ? f.containerRect.width : f.containerRect.height) / 2
                }
                var h = p.observe(d)
                    , v = p.on("wheel", function (e) {
                        var r = e.axisDelta
                            , i = r[0]
                            , o = r[1]
                            , u = "x" === m ? i : o
                            , c = "x" === m ? o : i
                            , s = e.isMomentum && e.previous && !e.previous.isMomentum
                            , l = e.isEnding && !e.isMomentum || s;
                        !(Math.abs(u) > Math.abs(c)) || b || e.isMomentum || M || function (e) {
                            try {
                                a = new MouseEvent("mousedown", e.event),
                                    O(a)
                            } catch (e) {
                                return n()
                            }
                            b = !0,
                                x = 0,
                                document.documentElement.addEventListener("mousemove", S, !0),
                                document.documentElement.addEventListener("mouseup", S, !0),
                                document.documentElement.addEventListener("mousedown", S, !0),
                                t.wheelDraggingClass && d.classList.add(t.wheelDraggingClass)
                        }(e),
                            M && e.isEnding && (M = !1),
                            b && !function (e) {
                                var t = A(e)
                                    , n = t.isAtBoundary
                                    , r = t.primaryAxisDelta;
                                if (n && !e.isMomentum) {
                                    if ((x += Math.abs(r)) > y)
                                        return M = !0,
                                            w(e),
                                            !0
                                } else
                                    x = 0;
                                return !1
                            }(e) && (l ? w(e) : O(D("mousemove", e)))
                    })
                    , b = !1
                    , x = 0
                    , y = 0
                    , M = !1;
                function w(e) {
                    b = !1,
                        O(D("mouseup", e)),
                        E(),
                        t.wheelDraggingClass && d.classList.remove(t.wheelDraggingClass)
                }
                function E() {
                    document.documentElement.removeEventListener("mousemove", S, !0),
                        document.documentElement.removeEventListener("mouseup", S, !0),
                        document.documentElement.removeEventListener("mousedown", S, !0)
                }
                function S(e) {
                    b && e.isTrusted && e.stopImmediatePropagation()
                }
                function D(e, t) {
                    if (m === f.options.axis) {
                        var n, r, i = t.axisMovement;
                        n = i[0],
                            r = i[1]
                    } else {
                        var o = t.axisMovement;
                        r = o[0],
                            n = o[1]
                    }
                    if (A(t).isAtBoundary) {
                        var u = Math.min(x / y, 1)
                            , c = x * (n > 0 ? -1 : 1) * (.25 + .5 * u);
                        n += c,
                            r += c
                    }
                    if (!f.options.skipSnaps && !f.options.dragFree) {
                        var s = f.containerRect.width
                            , l = f.containerRect.height;
                        n = n < 0 ? Math.max(n, -s) : Math.min(n, s),
                            r = r < 0 ? Math.max(r, -l) : Math.min(r, l)
                    }
                    return new MouseEvent(e, {
                        clientX: a.clientX + n,
                        clientY: a.clientY + r,
                        screenX: a.screenX + n,
                        screenY: a.screenY + r,
                        movementX: n,
                        movementY: r,
                        button: 0,
                        bubbles: !0,
                        cancelable: !0,
                        composed: !0
                    })
                }
                function O(e) {
                    r.containerNode().dispatchEvent(e)
                }
                function A(e) {
                    var t = e.axisDelta
                        , n = t[0]
                        , i = t[1]
                        , o = r.scrollProgress()
                        , u = "x" === m ? n : i;
                    return {
                        isAtBoundary: u < 0 && !(o < 1) || u > 0 && !(o > 0),
                        primaryAxisDelta: u
                    }
                }
                g(),
                    r.on("resize", g),
                    n = function () {
                        h(),
                            v(),
                            r.off("resize", g),
                            E()
                    }
            },
            destroy: function () {
                return n()
            }
        }
    }
    I.globalOptions = void 0,
        e.s(["WheelGesturesPlugin", 0, I], 84593);
    var V = e.i(932);
    e.s(["useWheelDirectionLock", 0, e => {
        let n, r, i = (0,
            V.c)(3), o = (0,
                t.useRef)(null), u = (0,
                    t.useRef)(null);
        i[0] !== e ? (n = () => {
            if (!e)
                return;
            let t = e.rootNode()
                , n = e => {
                    if (u.current && clearTimeout(u.current),
                        u.current = setTimeout(() => {
                            o.current = null
                        }
                            , 50),
                        !o.current) {
                        let t = Math.abs(e.deltaX)
                            , n = Math.abs(e.deltaY);
                        t > n ? o.current = "x" : n > t && (o.current = "y")
                    }
                    "y" === o.current && e.stopPropagation(),
                        "x" === o.current && e.preventDefault()
                }
                ;
            return t.addEventListener("wheel", n, {
                capture: !0,
                passive: !1
            }),
                () => {
                    t.removeEventListener("wheel", n, {
                        capture: !0
                    }),
                        u.current && clearTimeout(u.current)
                }
        }
            ,
            r = [e],
            i[0] = e,
            i[1] = n,
            i[2] = r) : (n = i[1],
                r = i[2]),
            (0,
                t.useEffect)(n, r)
    }
    ], 29213)
}
]);
