import { o as e, t } from "./jsx-runtime-9YgKe2Eq.js";
import { t as n } from "./react-CM_0bdEm.js";
import { t as r } from "./proxy-DH7XULpl.js";
import { t as i } from "./useButtonClick-qYfbo5vc.js";
import { t as a } from "./utils-EIHTpZTP.js";
var o = e(n(), 1)
    , s = t()
    , c = ({ text: e, variant: t = `primary`, href: n = `#`, onClick: c, animate: l = !0, animationDelay: u = 0, className: d = `` }) => {
        let f = i(n, c)
            , [p, m] = (0,
                o.useState)(!1)
            , h = Math.max(e.length - 1, 1)
            , g = e => {
                let t = e / h
                    , n = e - h / 2
                    , r = Math.sin(t * 1.5 * (Math.PI / 180))
                    , i = Math.sin(t * 30 * (Math.PI / 180))
                    , a = Math.max(-1, Math.min(1, n));
                return {
                    delay: .05 + r * 2.9,
                    rotateZ: a * i * 36 * -1,
                    translateX: n * .125
                }
            }
            , _ = (0,
                s.jsx)(`a`, {
                    href: n,
                    onClick: f,
                    onMouseEnter: () => m(!0),
                    onMouseLeave: () => m(!1),
                    className: a(`group flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer active:scale-[0.96]`, t === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`, d),
                    children: (0,
                        s.jsxs)(`span`, {
                            className: `grid`,
                            children: [(0,
                                s.jsx)(`span`, {
                                    className: `col-start-1 row-start-1 perspective-[10em] transform-3d`,
                                    children: [...e].map((e, t) => {
                                        let { delay: n, rotateZ: i, translateX: a } = g(t);
                                        return (0,
                                            s.jsx)(r.span, {
                                                className: `inline-block`,
                                                initial: !1,
                                                animate: p ? {
                                                    x: `${a}em`,
                                                    y: `-1.25em`,
                                                    rotateX: 72,
                                                    rotateZ: i,
                                                    scale: .65,
                                                    opacity: 0
                                                } : {
                                                    x: 0,
                                                    y: 0,
                                                    rotateX: 0,
                                                    rotateZ: 0,
                                                    scale: 1,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: .35,
                                                    delay: p ? n : 0,
                                                    ease: [.675, .15, .1, 1]
                                                },
                                                style: {
                                                    whiteSpace: e === ` ` ? `pre` : void 0
                                                },
                                                children: e
                                            }, t)
                                    }
                                    )
                                }), (0,
                                    s.jsx)(`span`, {
                                        "aria-hidden": `true`,
                                        className: `col-start-1 row-start-1 perspective-[10em] transform-3d`,
                                        children: [...e].map((e, t) => {
                                            let { delay: n, rotateZ: i, translateX: a } = g(t);
                                            return (0,
                                                s.jsx)(r.span, {
                                                    className: `inline-block`,
                                                    initial: !1,
                                                    animate: p ? {
                                                        x: 0,
                                                        y: 0,
                                                        rotateX: 0,
                                                        rotateZ: 0,
                                                        scale: 1,
                                                        opacity: 1
                                                    } : {
                                                        x: `${a}em`,
                                                        y: `1.25em`,
                                                        rotateX: -72,
                                                        rotateZ: i,
                                                        scale: .65,
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: .35,
                                                        delay: p ? n + .05 : 0,
                                                        ease: [.675, .15, .1, 1]
                                                    },
                                                    style: {
                                                        whiteSpace: e === ` ` ? `pre` : void 0
                                                    },
                                                    children: e
                                                }, t)
                                        }
                                        )
                                    })]
                        })
                });
        return l ? (0,
            s.jsx)(r.div, {
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
                    delay: u,
                    ease: `easeOut`
                },
                children: _
            }) : _
    }
    ;
export { c as t };
