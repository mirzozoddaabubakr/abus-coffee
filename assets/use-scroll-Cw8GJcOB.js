import { o as e } from "./jsx-runtime-9YgKe2Eq.js";
import { t } from "./react-CM_0bdEm.js";
import { A as n, C as r, F as i, H as a, I as o, L as s, N as c, R as l, T as u, V as d, b as f, d as p, j as m, k as h, p as g, v as _, x as v } from "./proxy-DH7XUlPl.js";
function y(e, t) {
    let r, i = () => {
        let { currentTime: n } = t
            , i = (n === null ? 0 : n.value) / 100;
        r !== i && e(i),
            r = i
    }
        ;
    return n.preUpdate(i, !0),
        () => h(i)
}
var b = e(t(), 1);
function x(e) {
    return typeof window > `u` ? !1 : e ? v() : f()
}
var ee = 50
    , S = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    })
    , C = () => ({
        time: 0,
        x: S(),
        y: S()
    })
    , w = {
        x: {
            length: `Width`,
            position: `Left`
        },
        y: {
            length: `Height`,
            position: `Top`
        }
    };
function T(e, t, n, r) {
    let a = n[t]
        , { length: o, position: s } = w[t]
        , l = a.current
        , u = n.time;
    a.current = Math.abs(e[`scroll${s}`]),
        a.scrollLength = e[`scroll${o}`] - e[`client${o}`],
        a.offset.length = 0,
        a.offset[0] = 0,
        a.offset[1] = a.scrollLength,
        a.progress = i(0, a.scrollLength, a.current);
    let d = r - u;
    a.velocity = d > ee ? 0 : c(a.current - l, d)
}
function te(e, t, n) {
    T(e, `x`, t, n),
        T(e, `y`, t, n),
        t.time = n
}
function ne(e, t) {
    let n = {
        x: 0,
        y: 0
    }
        , r = e;
    for (; r && r !== t;)
        if (g(r))
            n.x += r.offsetLeft,
                n.y += r.offsetTop,
                r = r.offsetParent;
        else if (r.tagName === `svg`) {
            let e = r.getBoundingClientRect();
            r = r.parentElement;
            let t = r.getBoundingClientRect();
            n.x += e.left - t.left,
                n.y += e.top - t.top
        } else if (r instanceof SVGGraphicsElement) {
            let { x: e, y: t } = r.getBBox();
            n.x += e,
                n.y += t;
            let i = null
                , a = r.parentNode;
            for (; !i;)
                a.tagName === `svg` && (i = a),
                    a = r.parentNode;
            r = i
        } else
            break;
    return n
}
var E = {
    start: 0,
    center: .5,
    end: 1
};
function D(e, t, n = 0) {
    let r = 0;
    if (e in E && (e = E[e]),
        typeof e == `string`) {
        let t = parseFloat(e);
        e.endsWith(`px`) ? r = t : e.endsWith(`%`) ? e = t / 100 : e.endsWith(`vw`) ? r = t / 100 * document.documentElement.clientWidth : e.endsWith(`vh`) ? r = t / 100 * document.documentElement.clientHeight : e = t
    }
    return typeof e == `number` && (r = t * e),
        n + r
}
var O = [0, 0];
function k(e, t, n, r) {
    let i = Array.isArray(e) ? e : O
        , a = 0
        , o = 0;
    return typeof e == `number` ? i = [e, e] : typeof e == `string` && (e = e.trim(),
        i = e.includes(` `) ? e.split(` `) : [e, E[e] ? e : `0`]),
        a = D(i[0], n, r),
        o = D(i[1], t),
        a - o
}
var A = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
    , j = {
        x: 0,
        y: 0
    };
function M(e) {
    return `getBBox` in e && e.tagName !== `svg` ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function N(e, t, n) {
    let { offset: i = A.All } = n
        , { target: a = e, axis: o = `y` } = n
        , s = o === `y` ? `height` : `width`
        , c = a === e ? j : ne(a, e)
        , d = a === e ? {
            width: e.scrollWidth,
            height: e.scrollHeight
        } : M(a)
        , f = {
            width: e.clientWidth,
            height: e.clientHeight
        };
    t[o].offset.length = 0;
    let p = !t[o].interpolate
        , m = i.length;
    for (let e = 0; e < m; e++) {
        let n = k(i[e], f[s], d[s], c[o]);
        !p && n !== t[o].interpolatorOffsets[e] && (p = !0),
            t[o].offset[e] = n
    }
    p && (t[o].interpolate = u(t[o].offset, r(i), {
        clamp: !1
    }),
        t[o].interpolatorOffsets = [...t[o].offset]),
        t[o].progress = l(0, 1, t[o].interpolate(t[o].current))
}
function re(e, t = e, n) {
    if (n.x.targetOffset = 0,
        n.y.targetOffset = 0,
        t !== e) {
        let r = t;
        for (; r && r !== e;)
            n.x.targetOffset += r.offsetLeft,
                n.y.targetOffset += r.offsetTop,
                r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
        n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
        n.x.containerLength = e.clientWidth,
        n.y.containerLength = e.clientHeight
}
function ie(e, t, n, r = {}) {
    return {
        measure: t => {
            re(e, r.target, n),
                te(e, n, t),
                (r.offset || r.target) && N(e, n, r)
        }
        ,
        notify: () => t(n)
    }
}
var P = new WeakMap
    , F = new WeakMap
    , I = new WeakMap
    , L = new WeakMap
    , R = new WeakMap
    , z = e => e === document.scrollingElement ? window : e;
function B(e, { container: t = document.scrollingElement, trackContentSize: r = !1, ...i } = {}) {
    if (!t)
        return o;
    let a = I.get(t);
    a || (a = new Set,
        I.set(t, a));
    let s = ie(t, e, C(), i);
    if (a.add(s),
        !P.has(t)) {
        let e = () => {
            for (let e of a)
                e.measure(m.timestamp);
            n.preUpdate(r)
        }
            , r = () => {
                for (let e of a)
                    e.notify()
            }
            , i = () => n.read(e);
        P.set(t, i);
        let o = z(t);
        window.addEventListener(`resize`, i),
            t !== document.documentElement && F.set(t, p(t, i)),
            o.addEventListener(`scroll`, i),
            i()
    }
    if (r && !R.has(t)) {
        let e = P.get(t)
            , r = {
                width: t.scrollWidth,
                height: t.scrollHeight
            };
        L.set(t, r);
        let i = n.read(() => {
            let n = t.scrollWidth
                , i = t.scrollHeight;
            (r.width !== n || r.height !== i) && (e(),
                r.width = n,
                r.height = i)
        }
            , !0);
        R.set(t, i)
    }
    let c = P.get(t);
    return n.read(c, !1, !0),
        () => {
            h(c);
            let e = I.get(t);
            if (!e || (e.delete(s),
                e.size))
                return;
            let n = P.get(t);
            P.delete(t),
                n && (z(t).removeEventListener(`scroll`, n),
                    F.get(t)?.(),
                    window.removeEventListener(`resize`, n));
            let r = R.get(t);
            r && (h(r),
                R.delete(t)),
                L.delete(t)
        }
}
var V = [[A.Enter, `entry`], [A.Exit, `exit`], [A.Any, `cover`], [A.All, `contain`]]
    , H = {
        start: 0,
        end: 1
    };
function U(e) {
    let t = e.trim().split(/\s+/);
    if (t.length !== 2)
        return;
    let n = H[t[0]]
        , r = H[t[1]];
    if (!(n === void 0 || r === void 0))
        return [n, r]
}
function W(e) {
    if (e.length !== 2)
        return;
    let t = [];
    for (let n of e)
        if (Array.isArray(n))
            t.push(n);
        else if (typeof n == `string`) {
            let e = U(n);
            if (!e)
                return;
            t.push(e)
        } else
            return;
    return t
}
function G(e, t) {
    let n = W(e);
    if (!n)
        return !1;
    for (let e = 0; e < 2; e++) {
        let r = n[e]
            , i = t[e];
        if (r[0] !== i[0] || r[1] !== i[1])
            return !1
    }
    return !0
}
function K(e) {
    if (!e)
        return {
            rangeStart: `contain 0%`,
            rangeEnd: `contain 100%`
        };
    for (let [t, n] of V)
        if (G(e, t))
            return {
                rangeStart: `${n} 0%`,
                rangeEnd: `${n} 100%`
            }
}
var q = new Map;
function J(e) {
    let t = {
        value: 0
    };
    return {
        currentTime: t,
        cancel: B(n => {
            t.value = n[e.axis].progress * 100
        }
            , e)
    }
}
function Y({ source: e, container: t, ...n }) {
    let { axis: r } = n;
    e && (t = e);
    let i = q.get(t);
    i || (i = new Map,
        q.set(t, i));
    let a = n.target ?? `self`
        , o = i.get(a);
    o || (o = {},
        i.set(a, o));
    let s = r + (n.offset ?? []).join(`,`);
    return o[s] || (n.target && x(n.target) ? K(n.offset) ? o[s] = new ViewTimeline({
        subject: n.target,
        axis: r
    }) : o[s] = J({
        container: t,
        ...n
    }) : x() ? o[s] = new ScrollTimeline({
        source: t,
        axis: r
    }) : o[s] = J({
        container: t,
        ...n
    })),
        o[s]
}
function ae(e, t) {
    let n = Y(t)
        , r = t.target ? K(t.offset) : void 0
        , i = t.target ? x(t.target) && !!r : x();
    return e.attachTimeline({
        timeline: i ? n : void 0,
        ...r && i && {
            rangeStart: r.rangeStart,
            rangeEnd: r.rangeEnd
        },
        observe: e => (e.pause(),
            y(t => {
                e.time = e.iterationDuration * t
            }
                , n))
    })
}
function oe(e) {
    return e.length === 2
}
function se(e, t) {
    return oe(e) ? B(n => {
        e(n[t.axis].progress, n)
    }
        , t) : y(e, Y(t))
}
function X(e, { axis: t = `y`, container: n = document.scrollingElement, ...r } = {}) {
    if (!n)
        return o;
    let i = {
        axis: t,
        container: n,
        ...r
    };
    return typeof e == `function` ? se(e, i) : ae(e, i)
}
var ce = () => ({
    scrollX: _(0),
    scrollY: _(0),
    scrollXProgress: _(0),
    scrollYProgress: _(0)
})
    , Z = e => e ? !e.current : !1;
function Q(e, t, n, r) {
    return {
        factory: i => X(i, {
            ...t,
            axis: e,
            container: n?.current || void 0,
            target: r?.current || void 0
        }),
        times: [0, 1],
        keyframes: [0, 1],
        ease: e => e,
        duration: 1
    }
}
function le(e, t) {
    return typeof window > `u` ? !1 : e ? v() && !!K(t) : f()
}
function $({ container: e, target: t, ...n } = {}) {
    let r = a(ce);
    le(t, n.offset) && (r.scrollXProgress.accelerate = Q(`x`, n, e, t),
        r.scrollYProgress.accelerate = Q(`y`, n, e, t));
    let i = (0,
        b.useRef)(null)
        , o = (0,
            b.useRef)(!1)
        , c = (0,
            b.useCallback)(() => (i.current = X((e, { x: t, y: n }) => {
                r.scrollX.set(t.current),
                    r.scrollXProgress.set(t.progress),
                    r.scrollY.set(n.current),
                    r.scrollYProgress.set(n.progress)
            }
                , {
                    ...n,
                    container: e?.current || void 0,
                    target: t?.current || void 0
                }),
                () => {
                    i.current?.()
                }
            ), [e, t, JSON.stringify(n.offset)]);
    return d(() => {
        if (o.current = !1,
            Z(e) || Z(t)) {
            o.current = !0;
            return
        } else
            return c()
    }
        , [c]),
        (0,
            b.useEffect)(() => {
                if (o.current)
                    return s(!Z(e), `Container ref is defined but not hydrated`, `use-scroll-ref`),
                        s(!Z(t), `Target ref is defined but not hydrated`, `use-scroll-ref`),
                        c()
            }
                , [c]),
        r
}
export { $ as t };
