import { o as e, t } from "./jsx-runtime-9YgKe2Eq.js";
import { t as n } from "./react-CM_0bdEm.js";
import { C as r, j as i, k as a } from "./lucide-react-BAD9fcv4.js";
import { t as o } from "./proxy-DH7XULpl.js";
import { t as s } from "./use-scroll-Cw8GJcOB.js";
import { t as c } from "./use-transform-BCsyqma3.js";
import { t as l } from "./AnimatePresence-DdTLBsbs.js";
import { t as u } from "./ScrollReveal-CIZjf2Bh.js";
import { n as d, t as f } from "./useButtonClick-qYfbo5vc.js";
import { t as p } from "./utils-EIHTpZTP.js";
import { t as m } from "./Button-DfW8ZzOt.js";
import { t as h } from "./TextAnimation-rGMWp5lm.js";
import { t as g } from "./ImageOrVideo-B7bL8acW.js";
import { t as _ } from "./gsap-DJZDW1A8.js";
import { t as v } from "./ScrollTrigger-BvUk3D8C.js";
import { t as y } from "./AvatarGroup-xJMtNVgP.js";
import { t as b } from "./AutoFillText-49didBfy.js";
import { t as x } from "./FooterBrand-BrmijePR.js";
import { t as S } from "./HeroBackgroundSlot-DajlRGCm.js";
import { t as ee } from "./StyleProvider-Bz6RyXWE.js";
import { t as C } from "./SiteBackgroundSlot-Cw2DAUOY.js";
import { t as te } from "./NavbarFullscreen-CkeCfLAB.js";
var w = e(n(), 1), T, E, D, O, k, A, j, M, N = function () {
    return typeof window < `u`
}, P = function () {
    return T || N() && (T = window.gsap) && T.registerPlugin && T
}, F = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, I = {
    rect: [`width`, `height`],
    circle: [`r`, `r`],
    ellipse: [`rx`, `ry`],
    line: [`x2`, `y2`]
}, L = function (e) {
    return Math.round(e * 1e4) / 1e4
}, R = function (e) {
    return parseFloat(e) || 0
}, z = function (e, t) {
    var n = R(e);
    return ~e.indexOf(`%`) ? n / 100 * t : n
}, B = function (e, t) {
    return R(e.getAttribute(t))
}, V = Math.sqrt, H = function (e, t, n, r, i, a) {
    return V(((R(n) - R(e)) * i) ** 2 + ((R(r) - R(t)) * a) ** 2)
}, U = function (e) {
    return console.warn(e)
}, W = function (e) {
    return e.getAttribute(`vector-effect`) === `non-scaling-stroke`
}, G = 1, K = function (e, t, n) {
    var r = e.indexOf(` `), i, a;
    return r < 0 ? (i = n === void 0 ? e : n + ``,
        a = e) : (i = e.substr(0, r),
            a = e.substr(r + 1)),
        i = z(i, t),
        a = z(a, t),
        i > a ? [a, i] : [i, a]
}, q = function (e) {
    if (e = E(e)[0],
        !e)
        return 0;
    var t = e.tagName.toLowerCase(), n = e.style, r = 1, i = 1, a, o, s, c, l, u, d;
    W(e) && (i = e.getScreenCTM(),
        r = V(i.a * i.a + i.b * i.b),
        i = V(i.d * i.d + i.c * i.c));
    try {
        o = e.getBBox()
    } catch {
        U(`Some browsers won't measure invisible elements (like display:none or masks inside defs).`)
    }
    var f = o || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
        , p = f.x
        , m = f.y
        , h = f.width
        , g = f.height;
    if ((!o || !h && !g) && I[t] && (h = B(e, I[t][0]),
        g = B(e, I[t][1]),
        t !== `rect` && t !== `line` && (h *= 2,
            g *= 2),
        t === `line` && (p = B(e, `x1`),
            m = B(e, `y1`),
            h = Math.abs(h - p),
            g = Math.abs(g - m))),
        t === `path`)
        c = n.strokeDasharray,
            n.strokeDasharray = `none`,
            a = e.getTotalLength() || 0,
            L(r) !== L(i) && !A && (A = 1) && U(`Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.`),
            a *= (r + i) / 2,
            n.strokeDasharray = c;
    else if (t === `rect`)
        a = h * 2 * r + g * 2 * i;
    else if (t === `line`)
        a = H(p, m, p + h, m + g, r, i);
    else if (t === `polyline` || t === `polygon`)
        for (s = e.getAttribute(`points`).match(F) || [],
            t === `polygon` && s.push(s[0], s[1]),
            a = 0,
            l = 2; l < s.length; l += 2)
            a += H(s[l - 2], s[l - 1], s[l], s[l + 1], r, i) || 0;
    else
        (t === `circle` || t === `ellipse`) && (u = h / 2 * r,
            d = g / 2 * i,
            a = Math.PI * (3 * (u + d) - V((3 * u + d) * (u + 3 * d))));
    return a || 0
}, J = function (e, t) {
    if (e = E(e)[0],
        !e)
        return [0, 0];
    t ||= q(e) + 1;
    var n = D.getComputedStyle(e)
        , r = n.strokeDasharray || ``
        , i = R(n.strokeDashoffset)
        , a = r.indexOf(`,`);
    return a < 0 && (a = r.indexOf(` `)),
        r = a < 0 ? t : R(r.substr(0, a)),
        r > t && (r = t),
        [-i || 0, r - i || 0]
}, Y = function () {
    N() && (D = window,
        k = T = P(),
        E = T.utils.toArray,
        j = T.core.getStyleSaver,
        M = T.core.reverting || function () { }
        ,
        O = ((D.navigator || {}).userAgent || ``).indexOf(`Edge`) !== -1)
}, X = {
    version: `3.15.0`,
    name: `drawSVG`,
    register: function (e) {
        T = e,
            Y()
    },
    init: function (e, t, n, r, i) {
        if (!e.getBBox)
            return !1;
        k || Y();
        var a = q(e), o, s, c;
        return this.styles = j && j(e, `strokeDashoffset,strokeDasharray,strokeMiterlimit`),
            this.tween = n,
            this._style = e.style,
            this._target = e,
            t + `` == `true` ? t = `0 100%` : t ? (t + ``).indexOf(` `) === -1 && (t = `0 ` + t) : t = `0 0`,
            o = J(e, a),
            s = K(t, a, o[0]),
            this._length = L(a),
            this._dash = L(o[1] - o[0]),
            this._offset = L(-o[0]),
            this._dashPT = this.add(this, `_dash`, this._dash, L(s[1] - s[0]), 0, 0, 0, 0, 0, 1),
            this._offsetPT = this.add(this, `_offset`, this._offset, L(-s[0]), 0, 0, 0, 0, 0, 1),
            O && (c = D.getComputedStyle(e),
                c.strokeLinecap !== c.strokeLinejoin && (s = R(c.strokeMiterlimit),
                    this.add(e.style, `strokeMiterlimit`, s, s + .01))),
            this._live = W(e) || ~(t + ``).indexOf(`live`),
            this._nowrap = ~(t + ``).indexOf(`nowrap`),
            this._props.push(`drawSVG`),
            G
    },
    render: function (e, t) {
        if (t.tween._time || !M()) {
            var n = t._pt, r = t._style, i, a, o, s;
            if (n) {
                for (t._live && (i = q(t._target),
                    i !== t._length && (a = i / t._length,
                        t._length = i,
                        t._offsetPT && (t._offsetPT.s *= a,
                            t._offsetPT.c *= a),
                        t._dashPT ? (t._dashPT.s *= a,
                            t._dashPT.c *= a) : t._dash *= a)); n;)
                    n.r(e, n.d),
                        n = n._next;
                o = t._dash || e && e !== 1 && 1e-4 || 0,
                    i = t._length - o + .1,
                    s = t._offset,
                    o && s && o + Math.abs(s % t._length) > t._length - .05 && (s += s < 0 ? .005 : -.005) && (i += .005),
                    r.strokeDashoffset = o ? s : s + .001,
                    r.strokeDasharray = i < .1 ? `none` : o ? o + `px,` + (t._nowrap ? 999999 : i) + `px` : `0px, 999999px`
            }
        } else
            t.styles.revert()
    },
    getLength: q,
    getPosition: J
};
P() && T.registerPlugin(X);
var Z = t();
_.registerPlugin(X);
var ne = () => {
    let e = (0,
        w.useRef)(null);
    return (0,
        w.useEffect)(() => {
            let t = e.current;
            if (!t)
                return;
            let n = t.querySelector(`svg path`);
            if (!n)
                return;
            let r = _.timeline();
            return r.set(n, {
                strokeWidth: `35%`,
                drawSVG: `0% 100%`
            }),
                r.to(n, {
                    duration: 1.25,
                    drawSVG: `100% 100%`,
                    strokeWidth: `5%`,
                    ease: `power1.inOut`,
                    delay: .3
                }),
                () => {
                    r.kill()
                }
        }
            , []),
        (0,
            Z.jsx)(`div`, {
                ref: e,
                className: `fixed inset-0 z-50 pointer-events-none overflow-clip`,
                "aria-hidden": `true`,
                children: (0,
                    Z.jsx)(`div`, {
                        className: `absolute inset-0 text-primary-cta`,
                        children: (0,
                            Z.jsx)(`svg`, {
                                xmlns: `http://www.w3.org/2000/svg`,
                                width: `100%`,
                                viewBox: `0 0 1000 1000`,
                                fill: `none`,
                                preserveAspectRatio: `none`,
                                className: `absolute w-[130%] h-[130%] -top-[15%] -left-[15%]`,
                                children: (0,
                                    Z.jsx)(`path`, {
                                        d: `M43 259C296 11.5688 994 -3 922.994 498.259C851.988 999.517 281.229 1004.28 123 767C-35.2287 529.721 179 259 472 259C765 259 792 498.259 659 654C526 809.741 319 755 285 669.001C251 583.001 299 452 496 452C693 452 876.073 639.171 935 937.001`,
                                        stroke: `currentColor`,
                                        strokeWidth: `0`,
                                        strokeLinecap: `round`,
                                        strokeLinejoin: `round`
                                    })
                            })
                    })
            })
}
    , Q = [{
        position: `left`,
        bottom: `30%`,
        aspect: `aspect-3/4`,
        movement: `-100%`
    }, {
        position: `right`,
        bottom: `14%`,
        aspect: `aspect-square`,
        movement: `-75%`
    }]
    , re = ({ brand: e, description: t, primaryButton: n, secondaryButton: r, imageSrc: i, videoSrc: a, floatingCards: l, textAnimation: d }) => {
        let f = (0,
            w.useRef)(null)
            , { scrollYProgress: _ } = s({
                target: f,
                offset: [`start start`, `end start`]
            })
            , v = [c(_, [0, 1], [`0%`, Q[0].movement]), c(_, [0, 1], [`0%`, Q[1].movement])];
        return (0,
            Z.jsxs)(`section`, {
                ref: f,
                "aria-label": `Hero section`,
                className: `relative pt-25 pb-20 md:pt-30`,
                children: [(0,
                    Z.jsx)(S, {}), l.map((e, t) => (0,
                        Z.jsx)(o.div, {
                            style: {
                                y: v[t],
                                bottom: Q[t].bottom
                            },
                            className: p(`absolute z-10 w-28 xl:w-48 2xl:w-52 p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden shadow-xl`, Q[t].position === `left` ? `left-[calc((100vw-var(--width-content-width))/2)] translate-x-1/4 lg:-translate-x-1/2` : `right-[calc((100vw-var(--width-content-width))/2)] -translate-x-1/4 lg:translate-x-1/2`),
                            children: (0,
                                Z.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [(0,
                                        Z.jsx)(g, {
                                            imageSrc: e.imageSrc,
                                            videoSrc: e.videoSrc,
                                            className: p(`w-full object-cover rounded`, Q[t].aspect)
                                        }), (0,
                                            Z.jsx)(`div`, {
                                                className: `absolute bottom-1 xl:bottom-2 2xl:bottom-3 inset-x-1 xl:inset-x-2 2xl:inset-x-3 card rounded p-1 xl:p-2 2xl:p-3`,
                                                children: (0,
                                                    Z.jsx)(`h3`, {
                                                        className: `text-2xl md:text-3xl text-center truncate`,
                                                        children: e.name
                                                    })
                                            })]
                                })
                        }, t)), (0,
                            Z.jsxs)(`div`, {
                                className: `flex flex-col gap-10 md:gap-12 w-content-width mx-auto`,
                                children: [(0,
                                    Z.jsxs)(`div`, {
                                        className: `flex flex-col items-end gap-5`,
                                        children: [(0,
                                            Z.jsx)(b, {
                                                className: `w-full font-semibold`,
                                                paddingY: ``,
                                                children: e
                                            }), (0,
                                                Z.jsx)(h, {
                                                    text: t,
                                                    variant: d,
                                                    gradientText: !1,
                                                    tag: `p`,
                                                    className: `w-full md:w-1/2 text-lg md:text-2xl leading-snug text-balance text-right`
                                                }), (0,
                                                    Z.jsxs)(`div`, {
                                                        className: `flex flex-wrap justify-end gap-3 mt-1 md:mt-2`,
                                                        children: [(0,
                                                            Z.jsx)(m, {
                                                                text: n.text,
                                                                href: n.href,
                                                                variant: `primary`
                                                            }), (0,
                                                                Z.jsx)(m, {
                                                                    text: r.text,
                                                                    href: r.href,
                                                                    variant: `secondary`,
                                                                    animationDelay: .1
                                                                })]
                                                    })]
                                    }), (0,
                                        Z.jsx)(u, {
                                            variant: `slide-up`,
                                            delay: .2,
                                            className: `w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden`,
                                            children: (0,
                                                Z.jsx)(g, {
                                                    imageSrc: i,
                                                    videoSrc: a,
                                                    className: `aspect-4/5 md:aspect-video`
                                                })
                                        })]
                            })]
            })
    }
    ;
_.registerPlugin(v);
var ie = ({ tag: e, title: t, media: n, primaryButton: r, secondaryButton: i, textAnimation: a }) => {
    let o = (0,
        w.useRef)(null);
    return (0,
        w.useEffect)(() => {
            let e = o.current;
            if (!e)
                return;
            let t = _.matchMedia();
            return t.add(`(min-width: 769px)`, () => {
                let t = Array.from(e.querySelectorAll(`[data-trail="item"]`));
                if (!t.length)
                    return;
                let n = 0, r = 0, i = 0, a, o = !1, s = window.innerWidth / 15;
                function c(c) {
                    if (!o)
                        return;
                    let l = e.getBoundingClientRect()
                        , u = c.clientX - l.left
                        , d = c.clientY - l.top;
                    if (!(u < 0 || d < 0 || u > l.width || d > l.height) && Math.hypot(u - r, d - i) > s) {
                        n >= t.length && _.to(t[(n - t.length) % t.length], {
                            autoAlpha: 0,
                            scale: .2,
                            duration: .8,
                            ease: `expo.out`
                        });
                        let e = t[n % t.length];
                        _.set(e, {
                            x: u - e.offsetWidth / 2,
                            y: d - e.offsetHeight / 2,
                            zIndex: n,
                            force3D: !0
                        }),
                            _.fromTo(e, {
                                autoAlpha: 0,
                                scale: .8
                            }, {
                                autoAlpha: 1,
                                scale: 1,
                                duration: .2,
                                overwrite: !0
                            }),
                            r = u,
                            i = d,
                            n++,
                            clearTimeout(a),
                            a = setTimeout(() => t.forEach(e => _.to(e, {
                                autoAlpha: 0,
                                scale: .2,
                                duration: .8,
                                ease: `expo.out`
                            })), 350)
                    }
                }
                function l() {
                    clearTimeout(a),
                        t.forEach(e => _.to(e, {
                            autoAlpha: 0,
                            scale: .2,
                            duration: .5,
                            ease: `expo.out`
                        })),
                        r = 0,
                        i = 0
                }
                function u() {
                    o || !e || (o = !0,
                        e.addEventListener(`mousemove`, c),
                        e.addEventListener(`mouseleave`, l))
                }
                function d() {
                    !o || !e || (o = !1,
                        e.removeEventListener(`mousemove`, c),
                        e.removeEventListener(`mouseleave`, l),
                        clearTimeout(a),
                        t.forEach(e => {
                            _.killTweensOf(e),
                                _.set(e, {
                                    autoAlpha: 0,
                                    scale: 1
                                })
                        }
                        ))
                }
                let f = v.create({
                    trigger: e,
                    start: `top bottom`,
                    end: `bottom top`,
                    onEnter: u,
                    onEnterBack: u,
                    onLeave: d,
                    onLeaveBack: d
                });
                return () => {
                    d(),
                        f.kill()
                }
            }
            ),
                t.add(`(max-width: 768px)`, () => {
                    let t = Array.from(e.querySelectorAll(`[data-trail="item"]`));
                    if (!t.length)
                        return;
                    let n = 0, r = window.scrollY, i;
                    function a() {
                        let a = e.getBoundingClientRect();
                        if (!(a.top > window.innerHeight || a.bottom < 0) && Math.abs(window.scrollY - r) > 100) {
                            n >= t.length && _.to(t[(n - t.length) % t.length], {
                                autoAlpha: 0,
                                scale: .2,
                                duration: .8,
                                ease: `expo.out`
                            });
                            let e = t[n % t.length]
                                , o = Math.random() * (a.width - e.offsetWidth)
                                , s = Math.random() * (a.height - e.offsetHeight);
                            _.set(e, {
                                x: o,
                                y: s,
                                zIndex: n,
                                force3D: !0
                            }),
                                _.fromTo(e, {
                                    autoAlpha: 0,
                                    scale: .8
                                }, {
                                    autoAlpha: 1,
                                    scale: 1,
                                    duration: .2,
                                    overwrite: !0
                                }),
                                r = window.scrollY,
                                n++,
                                clearTimeout(i),
                                i = setTimeout(() => t.forEach(e => _.to(e, {
                                    autoAlpha: 0,
                                    scale: .2,
                                    duration: .8,
                                    ease: `expo.out`
                                })), 500)
                        }
                    }
                    return window.addEventListener(`scroll`, a),
                        () => {
                            window.removeEventListener(`scroll`, a),
                                clearTimeout(i),
                                t.forEach(e => {
                                    _.killTweensOf(e),
                                        _.set(e, {
                                            autoAlpha: 0,
                                            scale: 1
                                        })
                                }
                                )
                        }
                }
                ),
                () => t.revert()
        }
            , []),
        (0,
            Z.jsxs)(`section`, {
                "aria-label": `About section`,
                className: `relative py-60`,
                children: [(0,
                    Z.jsx)(`div`, {
                        ref: o,
                        "data-trail": `wrapper`,
                        className: `w-full h-full absolute inset-0 z-0`,
                        children: n.map((e, t) => (0,
                            Z.jsx)(`div`, {
                                "data-trail": `item`,
                                className: `invisible rounded w-[15em] h-[20em] absolute overflow-hidden`,
                                children: (0,
                                    Z.jsx)(g, {
                                        imageSrc: e.imageSrc,
                                        videoSrc: e.videoSrc,
                                        className: `object-cover w-full h-full`
                                    })
                            }, t))
                    }), (0,
                        Z.jsxs)(`div`, {
                            className: `relative z-10 flex flex-col items-center gap-2 w-content-width mx-auto text-center pointer-events-none`,
                            children: [(0,
                                Z.jsx)(`h3`, {
                                    className: `text-3xl md:text-5xl font-medium`,
                                    children: e
                                }), (0,
                                    Z.jsx)(h, {
                                        text: t,
                                        variant: a,
                                        gradientText: !0,
                                        tag: `h2`,
                                        className: `text-7xl md:text-8xl leading-[1.15] font-semibold text-center text-balance`
                                    }), (0,
                                        Z.jsxs)(`div`, {
                                            className: `flex flex-wrap justify-center gap-3 mt-2 md:mt-3 pointer-events-auto`,
                                            children: [(0,
                                                Z.jsx)(m, {
                                                    text: r.text,
                                                    href: r.href,
                                                    variant: `primary`
                                                }), (0,
                                                    Z.jsx)(m, {
                                                        text: i.text,
                                                        href: i.href,
                                                        variant: `secondary`
                                                    })]
                                        })]
                        })]
            })
}
    , ae = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .05
            }
        },
        exit: {
            opacity: 0
        }
    }
    , oe = {
        hidden: {
            opacity: 0,
            scale: .9,
            y: 10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: .3,
                ease: [.16, 1, .3, 1]
            }
        }
    }
    , se = ({ tag: e, title: t, description: n, categories: r, items: i, textAnimation: a }) => {
        let s = [`All`, ...r]
            , [c, u] = (0,
                w.useState)(`All`)
            , d = i.filter(e => c === `All` || e.category === c)
            , f = e => {
                e !== c && u(e)
            }
            ;
        return (0,
            Z.jsx)(`section`, {
                "aria-label": `Features section`,
                className: `py-20`,
                children: (0,
                    Z.jsxs)(`div`, {
                        className: `flex flex-col gap-8 md:gap-10`,
                        children: [(0,
                            Z.jsxs)(`div`, {
                                className: `flex flex-col items-center gap-2 w-content-width mx-auto`,
                                children: [(0,
                                    Z.jsx)(`div`, {
                                        className: `px-3 py-1 mb-1 text-sm card rounded w-fit`,
                                        children: (0,
                                            Z.jsx)(`p`, {
                                                children: e
                                            })
                                    }), (0,
                                        Z.jsx)(h, {
                                            text: t,
                                            variant: a,
                                            gradientText: !0,
                                            tag: `h2`,
                                            className: `md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance`
                                        }), (0,
                                            Z.jsx)(h, {
                                                text: n,
                                                variant: a,
                                                gradientText: !1,
                                                tag: `p`,
                                                className: `md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance`
                                            }), (0,
                                                Z.jsx)(`div`, {
                                                    role: `group`,
                                                    className: `flex flex-wrap justify-center gap-3 mt-2 md:mt-3`,
                                                    children: s.map(e => (0,
                                                        Z.jsxs)(`button`, {
                                                            "aria-pressed": c === e,
                                                            onClick: () => f(e),
                                                            className: `relative flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer card overflow-hidden`,
                                                            children: [(0,
                                                                Z.jsx)(`div`, {
                                                                    className: p(`absolute inset-0 primary-button rounded transition-opacity duration-300`, c === e ? `opacity-100` : `opacity-0`)
                                                                }), (0,
                                                                    Z.jsx)(`span`, {
                                                                        className: p(`relative z-10 transition-colors duration-300`, c === e ? `text-primary-cta-text` : ``),
                                                                        children: e
                                                                    })]
                                                        }, e))
                                                })]
                            }), (0,
                                Z.jsx)(`div`, {
                                    className: `w-content-width mx-auto`,
                                    children: (0,
                                        Z.jsx)(l, {
                                            mode: `wait`,
                                            children: (0,
                                                Z.jsx)(o.div, {
                                                    variants: ae,
                                                    initial: `hidden`,
                                                    animate: `visible`,
                                                    exit: `exit`,
                                                    "aria-live": `polite`,
                                                    role: `list`,
                                                    className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-4 2xl:gap-5`,
                                                    children: d.map(e => (0,
                                                        Z.jsx)(o.div, {
                                                            variants: oe,
                                                            role: `listitem`,
                                                            children: (0,
                                                                Z.jsx)(`div`, {
                                                                    className: `p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden shadow-xl`,
                                                                    children: (0,
                                                                        Z.jsxs)(`div`, {
                                                                            className: `relative`,
                                                                            children: [(0,
                                                                                Z.jsx)(g, {
                                                                                    imageSrc: e.imageSrc,
                                                                                    videoSrc: e.videoSrc,
                                                                                    className: `w-full aspect-3/4 object-cover rounded`
                                                                                }), (0,
                                                                                    Z.jsx)(`div`, {
                                                                                        className: `absolute bottom-1 xl:bottom-2 2xl:bottom-3 inset-x-1 xl:inset-x-2 2xl:inset-x-3 card rounded p-1 xl:p-2 2xl:p-3`,
                                                                                        children: (0,
                                                                                            Z.jsx)(`h4`, {
                                                                                                className: `text-2xl md:text-3xl text-center truncate`,
                                                                                                children: e.name
                                                                                            })
                                                                                    })]
                                                                        })
                                                                })
                                                        }, e.name))
                                                }, c)
                                        })
                                })]
                    })
            })
    }
    , $ = ({ tag: e, title: t, description: n, primaryButton: r, secondaryButton: i, topItems: a, bottomItem: o, textAnimation: s }) => (0,
        Z.jsxs)(`section`, {
            "aria-label": `Features section`,
            className: `flex flex-col gap-8 md:gap-10 py-20`,
            children: [(0,
                Z.jsxs)(`div`, {
                    className: `flex flex-col items-center w-content-width mx-auto gap-2`,
                    children: [(0,
                        Z.jsx)(`div`, {
                            className: `px-3 py-1 mb-1 text-sm card rounded w-fit`,
                            children: (0,
                                Z.jsx)(`p`, {
                                    children: e
                                })
                        }), (0,
                            Z.jsx)(h, {
                                text: t,
                                variant: s,
                                gradientText: !0,
                                tag: `h2`,
                                className: `md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance`
                            }), (0,
                                Z.jsx)(h, {
                                    text: n,
                                    variant: s,
                                    gradientText: !1,
                                    tag: `p`,
                                    className: `md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance`
                                }), (r || i) && (0,
                                    Z.jsxs)(`div`, {
                                        className: `flex flex-wrap justify-center gap-3 mt-2 md:mt-3`,
                                        children: [r && (0,
                                            Z.jsx)(m, {
                                                text: r.text,
                                                href: r.href,
                                                variant: `primary`
                                            }), i && (0,
                                                Z.jsx)(m, {
                                                    text: i.text,
                                                    href: i.href,
                                                    variant: `secondary`,
                                                    animationDelay: .1
                                                })]
                                    })]
                }), (0,
                    Z.jsxs)(`div`, {
                        className: `w-content-width mx-auto flex flex-col gap-3 xl:gap-3.5 2xl:gap-4`,
                        children: [(0,
                            Z.jsx)(u, {
                                variant: `slide-up`,
                                className: `grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-3.5 2xl:gap-4`,
                                children: a.map(e => (0,
                                    Z.jsxs)(`div`, {
                                        className: `flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded`,
                                        children: [(0,
                                            Z.jsx)(`div`, {
                                                className: `aspect-square rounded overflow-hidden bg-foreground/5 shadow shadow-foreground/5`,
                                                children: (0,
                                                    Z.jsx)(g, {
                                                        imageSrc: e.imageSrc,
                                                        videoSrc: e.videoSrc
                                                    })
                                            }), (0,
                                                Z.jsxs)(`div`, {
                                                    className: `flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4`,
                                                    children: [(0,
                                                        Z.jsx)(`h3`, {
                                                            className: `text-5xl font-semibold leading-snug text-balance`,
                                                            children: e.title
                                                        }), (0,
                                                            Z.jsx)(`p`, {
                                                                className: `text-lg leading-snug text-balance`,
                                                                children: e.description
                                                            })]
                                                })]
                                    }, e.title))
                            }), (0,
                                Z.jsx)(u, {
                                    variant: `slide-up`,
                                    children: (0,
                                        Z.jsxs)(`div`, {
                                            className: `flex flex-col md:flex-row gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded`,
                                            children: [(0,
                                                Z.jsxs)(`div`, {
                                                    className: `flex flex-col gap-1 justify-center md:w-1/2 p-3 xl:p-3.5 2xl:p-4`,
                                                    children: [(0,
                                                        Z.jsx)(`h3`, {
                                                            className: `text-5xl font-semibold leading-snug text-balance`,
                                                            children: o.title
                                                        }), (0,
                                                            Z.jsx)(`p`, {
                                                                className: `text-lg leading-snug text-balance`,
                                                                children: o.description
                                                            }), (0,
                                                                Z.jsxs)(`div`, {
                                                                    className: `flex flex-wrap items-center gap-3 mt-2 md:mt-3`,
                                                                    children: [(0,
                                                                        Z.jsx)(m, {
                                                                            text: o.primaryButton.text,
                                                                            href: o.primaryButton.href,
                                                                            variant: `primary`
                                                                        }), o.avatarsSrc && o.avatarsSrc.length > 0 && (0,
                                                                            Z.jsx)(y, {
                                                                                avatarsSrc: o.avatarsSrc,
                                                                                size: `md`,
                                                                                label: o.avatarsLabel
                                                                            })]
                                                                })]
                                                }), (0,
                                                    Z.jsx)(`div`, {
                                                        className: `md:w-1/2 rounded overflow-hidden bg-foreground/5 shadow shadow-foreground/5`,
                                                        children: (0,
                                                            Z.jsx)(g, {
                                                                imageSrc: o.imageSrc,
                                                                videoSrc: o.videoSrc
                                                            })
                                                    })]
                                        })
                                })]
                    })]
        })
    , ce = ({ icon: e, label: t, href: n }) => (0,
        Z.jsxs)(`button`, {
            onClick: f(n),
            className: `flex flex-col items-center gap-3 group cursor-pointer`,
            children: [(0,
                Z.jsx)(`div`, {
                    className: `size-22 md:size-16 lg:size-24 xl:size-28 2xl:size-30 rounded-full primary-button flex items-center justify-center`,
                    children: (0,
                        Z.jsx)(e, {
                            className: `size-4/10 text-primary-cta-text`,
                            strokeWidth: 1.5
                        })
                }), (0,
                    Z.jsx)(`p`, {
                        className: `text-sm md:text-base text-foreground/60 group-hover:text-foreground transition-colors`,
                        children: t
                    })]
        })
    , le = ({ tag: e, title: t, options: n, textAnimation: r }) => (0,
        Z.jsx)(`section`, {
            "aria-label": `Contact section`,
            className: `py-20`,
            children: (0,
                Z.jsx)(`div`, {
                    className: `w-content-width mx-auto`,
                    children: (0,
                        Z.jsx)(u, {
                            variant: `slide-up`,
                            children: (0,
                                Z.jsxs)(`div`, {
                                    className: `flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 card rounded p-6 md:p-10`,
                                    children: [(0,
                                        Z.jsxs)(`div`, {
                                            className: `flex flex-col gap-2 md:max-w-1/2`,
                                            children: [(0,
                                                Z.jsx)(`div`, {
                                                    className: `px-3 py-1 mb-1 text-sm card rounded w-fit`,
                                                    children: (0,
                                                        Z.jsx)(`p`, {
                                                            children: e
                                                        })
                                                }), (0,
                                                    Z.jsx)(h, {
                                                        text: t,
                                                        variant: r,
                                                        gradientText: !0,
                                                        tag: `h2`,
                                                        className: `text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance`
                                                    })]
                                        }), (0,
                                            Z.jsx)(`div`, {
                                                className: `flex items-center gap-6 md:gap-10`,
                                                children: n.map(e => (0,
                                                    Z.jsx)(ce, {
                                                        ...e
                                                    }, e.label))
                                            })]
                                })
                        })
                })
        });
function ue() {
    return (0,
        Z.jsx)(d, {
            root: !0,
            children: (0,
                Z.jsxs)(ee, {
                    siteBackground: `aurora`,
                    heroBackground: `none`,
                    buttonVariant: `bounce`,
                    children: [(0,
                        Z.jsx)(C, {}), (0,
                            Z.jsx)(ne, {}), (0,
                                Z.jsx)(te, {
                                    logo: `Abu's Coffee`,
                                    navItems: [{
                                        name: `Menu`,
                                        href: `#menu`
                                    }, {
                                        name: `Find Us`,
                                        href: `#locations`
                                    }],
                                    ctaButton: {
                                        text: `Order Now`,
                                        href: `#order`
                                    }
                                }), (0,
                                    Z.jsx)(`div`, {
                                        id: `hero`,
                                        "data-section": `hero`,
                                        children: (0,
                                            Z.jsx)(re, {
                                                textAnimation: `fade-blur`,
                                                brand: `Abu's Coffee`,
                                                description: `Handcrafted espresso drinks and freshly baked pastries in a warm, welcoming atmosphere. From our first roast to your morning cup, every sip tells a story.`,
                                                primaryButton: {
                                                    text: `Order Now`,
                                                    href: `#order`
                                                },
                                                secondaryButton: {
                                                    text: `View Menu`,
                                                    href: `#menu`
                                                },
                                                videoSrc: `/assets/hero.mp4`,
                                                floatingCards: [{
                                                    imageSrc: `/assets/iced-coffee.webp`,
                                                    name: `Americano`
                                                }, {
                                                    imageSrc: `/assets/latte.webp`,
                                                    name: `Latte`
                                                }]
                                            })
                                    }), (0,
                                        Z.jsx)(`div`, {
                                            id: `about`,
                                            "data-section": `about`,
                                            children: (0,
                                                Z.jsx)(ie, {
                                                    textAnimation: `fade-blur`,
                                                    tag: `Move your cursor!`,
                                                    title: `What are you in the mood for?`,
                                                    media: [{
                                                        imageSrc: `/assets/images/trail-1.webp`
                                                    }, {
                                                        imageSrc: `/assets/images/trail-2.webp`
                                                    }, {
                                                        imageSrc: `/assets/images/trail-3.webp`
                                                    }, {
                                                        imageSrc: `/assets/images/trail-4.webp`
                                                    }, {
                                                        imageSrc: `/assets/images/trail-5.webp`
                                                    }, {
                                                        imageSrc: `/assets/images/trail-6.webp`
                                                    }, {
                                                        imageSrc: `/assets/images/trail-7.webp`
                                                    }, {
                                                        imageSrc: `/assets/images/trail-8.webp`
                                                    }],
                                                    primaryButton: {
                                                        text: `See the Menu`,
                                                        href: `#menu`
                                                    },
                                                    secondaryButton: {
                                                        text: `Find Us`,
                                                        href: `#locations`
                                                    }
                                                })
                                        }), (0,
                                            Z.jsx)(`div`, {
                                                id: `menu`,
                                                "data-section": `menu`,
                                                children: (0,
                                                    Z.jsx)(se, {
                                                        textAnimation: `fade-blur`,
                                                        tag: `What We Serve`,
                                                        title: `Explore What's on Our Menu`,
                                                        description: `From handcrafted espresso drinks to freshly baked pastries, every item is made with care.`,
                                                        categories: [`Hot Drinks`, `Cold Drinks`, `Pastries`],
                                                        items: [{
                                                            name: `Espresso`,
                                                            category: `Hot Drinks`,
                                                            imageSrc: `/assets/images/espresso.webp`
                                                        }, {
                                                            name: `Latte`,
                                                            category: `Hot Drinks`,
                                                            imageSrc: `/assets/images/latte-menu.webp`
                                                        }, {
                                                            name: `Iced Latte`,
                                                            category: `Cold Drinks`,
                                                            imageSrc: `/assets/images/icedlatte.webp`
                                                        }, {
                                                            name: `Cappuccino`,
                                                            category: `Hot Drinks`,
                                                            imageSrc: `/assets/images/cappuccino.webp`
                                                        }, {
                                                            name: `Iced Americano`,
                                                            category: `Cold Drinks`,
                                                            imageSrc: `/assets/images/iced-coffee.webp`
                                                        }, {
                                                            name: `Mocha`,
                                                            category: `Hot Drinks`,
                                                            imageSrc: `/assets/images/mocha.webp`
                                                        }, {
                                                            name: `Iced Mocha`,
                                                            category: `Cold Drinks`,
                                                            imageSrc: `/assets/images/icedmocha.webp`
                                                        }, {
                                                            name: `Flat White`,
                                                            category: `Hot Drinks`,
                                                            imageSrc: `/assets/images/flatwhite.webp`
                                                        }, {
                                                            name: `Iced Flat White`,
                                                            category: `Cold Drinks`,
                                                            imageSrc: `/assets/images/iced-flat-white.webp`
                                                        }, {
                                                            name: `Chai Latte`,
                                                            category: `Hot Drinks`,
                                                            imageSrc: `/assets/images/chai-latte.webp`
                                                        }, {
                                                            name: `Croissant`,
                                                            category: `Pastries`,
                                                            imageSrc: `/assets/images/Croissant.webp`
                                                        }, {
                                                            name: `Chocolate Chip Cookie`,
                                                            category: `Pastries`,
                                                            imageSrc: `/assets/images/chocolate-chip-cookie.webp`
                                                        }]
                                                    })
                                            }), (0,
                                                Z.jsx)(`div`, {
                                                    id: `features`,
                                                    "data-section": `features`,
                                                    children: (0,
                                                        Z.jsx)($, {
                                                            textAnimation: `fade-blur`,
                                                            tag: `Beyond the Cup`,
                                                            title: `Host Your Next Event at Abu's`,
                                                            description: `From intimate gatherings to full-scale catering, we bring the warmth of Abu's wherever you need it.`,
                                                            topItems: [{
                                                                title: `Private Events`,
                                                                description: `Book our space for birthdays, meetings, or just a good excuse to get together. Great coffee and good vibes included.`,
                                                                imageSrc: `/assets/images/private-events.webp`
                                                            }, {
                                                                title: `Catering`,
                                                                description: `Let us handle the coffee and pastries for your next event. We'll set up, pour, and make sure nobody runs on empty.`,
                                                                imageSrc: `/assets/images/catering.webp`
                                                            }],
                                                            bottomItem: {
                                                                title: `Custom Menus`,
                                                                description: `Work with our team to build a tailored menu for your event — from espresso bars to pastry platters, we've got you covered.`,
                                                                imageSrc: `/assets/images/cappuccino.webp`,
                                                                primaryButton: {
                                                                    text: `Get in Touch`,
                                                                    href: `#contact`
                                                                }
                                                            }
                                                        })
                                                }), (0,
                                                    Z.jsx)(`div`, {
                                                        id: `contact`,
                                                        "data-section": `contact`,
                                                        children: (0,
                                                            Z.jsx)(le, {
                                                                textAnimation: `fade-blur`,
                                                                tag: `Get in Touch`,
                                                                title: `Speak with one
of our experts`,
                                                                options: [{
                                                                    icon: a,
                                                                    label: `Whatsapp`,
                                                                    href: `https://wa.me/1234567890`
                                                                }, {
                                                                    icon: i,
                                                                    label: `Email`,
                                                                    href: `mailto:hello@abuscoffee.com`
                                                                }, {
                                                                    icon: r,
                                                                    label: `Number`,
                                                                    href: `tel:+1234567890`
                                                                }]
                                                            })
                                                    }), (0,
                                                        Z.jsx)(x, {
                                                            brand: `Abu's Coffee`,
                                                            columns: [{
                                                                items: [{
                                                                    label: `Menu`,
                                                                    href: `#menu`
                                                                }, {
                                                                    label: `Hot Drinks`,
                                                                    href: `#menu`
                                                                }, {
                                                                    label: `Pastries`,
                                                                    href: `#menu`
                                                                }]
                                                            }, {
                                                                items: [{
                                                                    label: `Find Us`,
                                                                    href: `#locations`
                                                                }, {
                                                                    label: `Hours`,
                                                                    href: `#locations`
                                                                }, {
                                                                    label: `About`,
                                                                    href: `#about`
                                                                }]
                                                            }, {
                                                                items: [{
                                                                    label: `Contact`,
                                                                    href: `#contact`
                                                                }, {
                                                                    label: `Careers`,
                                                                    href: `#careers`
                                                                }, {
                                                                    label: `Gift Cards`,
                                                                    href: `#gift-cards`
                                                                }]
                                                            }]
                                                        })]
                })
        })
}
var de = () => (0,
    Z.jsx)(ue, {});
export { de as default };
