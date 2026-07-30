import { o as e, t } from "./jsx-runtime-9YgKe2Eq.js";
import { t as n } from "./react-CM_0bdEm.js";
import { t as r } from "./proxy-DH7XUlPl.js";
import { t as i } from "./utils-EIHTpZTP.js";
var a = e(n(), 1)
    , o = t()
    , s = {
        "slide-up": {
            hidden: {
                opacity: 0,
                y: `50%`
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        "fade-blur": {
            hidden: {
                opacity: 0,
                filter: `blur(10px)`
            },
            visible: {
                opacity: 1,
                filter: `none`
            }
        },
        fade: {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            }
        }
    }
    , c = {
        "slide-up": [.25, .46, .45, .94],
        "fade-blur": [.45, 0, .55, 1],
        fade: [.45, 0, .55, 1]
    }
    , l = ({ text: e, variant: t, gradientText: n, tag: l = `p`, className: u = `` }) => {
        let d = r[l]
            , f = e.split(` `)
            , [p, m] = (0,
                a.useState)(!1)
            , [h, g] = (0,
                a.useState)(!1)
            , _ = n ? `bg-gradient-to-r from-foreground to-primary-cta bg-clip-text text-transparent pb-[0.1em] -mb-[0.1em]` : ``;
        return (0,
            a.useEffect)(() => {
                if (p && !h) {
                    let e = setTimeout(() => {
                        g(!0)
                    }
                        , t === `fade-blur` && n ? 0 : 700);
                    return () => clearTimeout(e)
                }
            }
                , [p, h, t, n]),
            h ? (0,
                o.jsx)(d, {
                    className: i(`leading-[1.2]`, _, u),
                    initial: !1,
                    children: e
                }) : (0,
                    o.jsx)(d, {
                        className: i(`leading-[1.2] transition-all duration-700`, p && _, u),
                        initial: `hidden`,
                        whileInView: `visible`,
                        viewport: {
                            once: !0,
                            margin: `-20%`
                        },
                        transition: {
                            staggerChildren: .04
                        },
                        onAnimationComplete: () => m(!0),
                        children: f.map((e, n) => (0,
                            o.jsxs)(`span`, {
                                children: [n > 0 && ` `, (0,
                                    o.jsx)(r.span, {
                                        className: `inline-block`,
                                        variants: s[t],
                                        transition: {
                                            duration: .6,
                                            ease: c[t]
                                        },
                                        children: e
                                    })]
                            }, n))
                    })
    }
    ;
export { l as t };
