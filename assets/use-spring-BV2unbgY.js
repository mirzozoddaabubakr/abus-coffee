import { o as e } from "./jsx-runtime-9YgKe2Eq.js";
import { t } from "./react-CM_0bdEm.js";
import { A as n, S as r, g as i, r as a } from "./proxy-DH7XUlPl.js";
import { r as o, t as s } from "./use-transform-BCsyqma3.js";
function c(e, t, a = {}) {
    let o = e.get(), s = null, c = o, d, f = typeof o == `string` ? o.replace(/[\d.-]/g, ``) : void 0, p = () => {
        s &&= (s.stop(),
            null),
            e.animation = void 0
    }
        , m = () => {
            let t = u(e.get())
                , n = u(c);
            if (t === n) {
                p();
                return
            }
            let i = s ? s.getGeneratorVelocity() : e.getVelocity();
            p(),
                s = new r({
                    keyframes: [t, n],
                    velocity: i,
                    type: `spring`,
                    restDelta: .001,
                    restSpeed: .01,
                    ...a,
                    onUpdate: d
                })
        }
        , h = () => {
            m(),
                e.animation = s ?? void 0,
                e.events.animationStart?.notify(),
                s?.then(() => {
                    e.animation = void 0,
                        e.events.animationComplete?.notify()
                }
                )
        }
        ;
    if (e.attach((e, t) => {
        c = e,
            d = e => t(l(e, f)),
            n.postRender(h)
    }
        , p),
        i(t)) {
        let n = a.skipInitialAnimation === !0
            , r = t.on(`change`, t => {
                n ? (n = !1,
                    e.jump(l(t, f), !1)) : e.set(l(t, f))
            }
            )
            , i = e.on(`destroy`, r);
        return () => {
            r(),
                i()
        }
    }
    return p
}
function l(e, t) {
    return t ? e + t : e
}
function u(e) {
    return typeof e == `number` ? e : parseFloat(e)
}
var d = e(t(), 1);
function f(e, t = {}) {
    let { isStatic: n } = (0,
        d.useContext)(a)
        , r = () => i(e) ? e.get() : e;
    if (n)
        return s(r);
    let l = o(r());
    return (0,
        d.useInsertionEffect)(() => c(l, e, t), [l, JSON.stringify(t)]),
        l
}
function p(e, t = {}) {
    return f(e, {
        type: `spring`,
        ...t
    })
}
export { p as t };
