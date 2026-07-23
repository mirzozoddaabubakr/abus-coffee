import { o as e, t } from "./jsx-runtime-9YgKe2Eq.js";
import { t as n } from "./react-CM_0bdEm.js";
import { t as r } from "./proxy-DH7XULpl.js";
import { r as i } from "./use-transform-BCsyqma3.js";
import { t as a } from "./use-spring-BV2unbgY.js";
import { t as o } from "./useButtonClick-qYfbo5vc.js";
import { t as s } from "./utils-EIHTpZTP.js";
var c = e(n(), 1)
    , l = t()
    , u = ({ text: e, variant: t = `primary`, href: n = `#`, onClick: u, animate: d = !0, animationDelay: f = 0, className: p = `` }) => {
        let m = o(n, u)
            , h = (0,
                c.useRef)(null)
            , g = i(0)
            , _ = i(0)
            , v = a(g, {
                stiffness: 150,
                damping: 15
            })
            , y = a(_, {
                stiffness: 150,
                damping: 15
            })
            , b = (0,
                l.jsx)(r.a, {
                    ref: h,
                    href: n,
                    onClick: m,
                    onMouseMove: e => {
                        if (!h.current || window.innerWidth < 768)
                            return;
                        let t = h.current.getBoundingClientRect()
                            , n = (e.clientX - t.left - t.width / 2) * .15
                            , r = (e.clientY - t.top - t.height / 2) * .15;
                        g.set(n),
                            _.set(r)
                    }
                    ,
                    onMouseLeave: () => {
                        g.set(0),
                            _.set(0)
                    }
                    ,
                    style: {
                        x: v,
                        y
                    },
                    className: s(`flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer`, t === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`, p),
                    children: e
                });
        return d ? (0,
            l.jsx)(r.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6,
                    delay: f,
                    ease: `easeOut`
                },
                children: b
            }) : b
    }
    ;
export { u as t };
