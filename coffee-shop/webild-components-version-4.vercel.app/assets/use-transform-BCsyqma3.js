import { o as e } from "./jsx-runtime-9YgKe2Eq.js";
import { t } from "./react-CM_0bdEm.js";
import { A as n, H as r, T as i, V as a, _ as o, k as s, r as c, v as l } from "./proxy-DH7XULpl.js";
function u(...e) {
    let t = !Array.isArray(e[0])
        , n = t ? 0 : -1
        , r = e[0 + n]
        , a = e[1 + n]
        , o = e[2 + n]
        , s = e[3 + n]
        , c = i(a, o, s);
    return t ? c(r) : c
}
var d = e(t(), 1);
function f(e) {
    let t = r(() => l(e))
        , { isStatic: n } = (0,
            d.useContext)(c);
    if (n) {
        let [, n] = (0,
            d.useState)(e);
        (0,
            d.useEffect)(() => t.on(`change`, n), [])
    }
    return t
}
function p(e, t) {
    let r = f(t())
        , i = () => r.set(t());
    return i(),
        a(() => {
            let t = () => n.preRender(i, !1, !0)
                , r = e.map(e => e.on(`change`, t));
            return () => {
                r.forEach(e => e()),
                    s(i)
            }
        }
        ),
        r
}
function m(e) {
    o.current = [],
        e();
    let t = p(o.current, e);
    return o.current = void 0,
        t
}
function h(e, t, n, r) {
    if (typeof e == `function`)
        return m(e);
    if (n !== void 0 && !Array.isArray(n) && typeof t != `function`)
        return _(e, t, n, r);
    let i = typeof t == `function` ? t : u(t, n, r)
        , a = Array.isArray(e) ? g(e, i) : g([e], ([e]) => i(e))
        , o = Array.isArray(e) ? void 0 : e.accelerate;
    return o && !o.isTransformed && typeof t != `function` && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...r?.ease ? {
            ease: r.ease
        } : {}
    }),
        a
}
function g(e, t) {
    let n = r(() => []);
    return p(e, () => {
        n.length = 0;
        let r = e.length;
        for (let t = 0; t < r; t++)
            n[t] = e[t].get();
        return t(n)
    }
    )
}
function _(e, t, n, i) {
    let a = r(() => Object.keys(n))
        , o = r(() => ({}));
    for (let r of a)
        o[r] = h(e, t, n[r], i);
    return o
}
export { p as n, f as r, h as t };
