import { o as e, t } from "./jsx-runtime-9YgKe2Eq.js";
import { t as n } from "./react-CM_0bdEm.js";
import { ct as r } from "./lucide-react-BAD9fcv4.js";
import { t as i } from "./utils-EIHTpZTP.js";
import { t as a } from "./Button-DfW8ZzOt.js";
var o = e(n(), 1)
    , s = t()
    , c = (e, t, n) => {
        t.startsWith(`#`) && (e.preventDefault(),
            document.getElementById(t.slice(1))?.scrollIntoView({
                behavior: `smooth`,
                block: `start`
            })),
            n()
    }
    , l = ({ logo: e, navItems: t, ctaButton: n }) => {
        let [l, u] = (0,
            o.useState)(!1);
        return (0,
            o.useEffect)(() => {
                let e = e => {
                    e.key === `Escape` && l && u(!1)
                }
                    ;
                return document.addEventListener(`keydown`, e),
                    () => document.removeEventListener(`keydown`, e)
            }
                , [l]),
            (0,
                o.useEffect)(() => (l ? document.body.style.overflow = `hidden` : document.body.style.overflow = ``,
                    () => {
                        document.body.style.overflow = ``
                    }
                ), [l]),
            (0,
                s.jsxs)(`nav`, {
                    "data-section": `navbar`,
                    className: `fixed inset-0 z-1000 pointer-events-none`,
                    children: [(0,
                        s.jsxs)(`div`, {
                            className: `absolute z-10 top-5 left-1/2 -translate-x-1/2 flex items-center justify-between w-content-width pointer-events-auto`,
                            children: [(0,
                                s.jsx)(`a`, {
                                    href: `/`,
                                    className: i(`text-xl font-medium transition-colors duration-500`, l ? `text-background` : `text-foreground`),
                                    children: e
                                }), (0,
                                    s.jsxs)(`div`, {
                                        className: `flex items-center gap-2 xl:gap-3 2xl:gap-4`,
                                        children: [(0,
                                            s.jsx)(a, {
                                                text: n.text,
                                                href: n.href,
                                                variant: `primary`,
                                                animate: !1
                                            }), (0,
                                                s.jsxs)(`div`, {
                                                    className: `relative flex items-center justify-center size-9 rounded cursor-pointer primary-button`,
                                                    onClick: () => u(!l),
                                                    children: [(0,
                                                        s.jsx)(`span`, {
                                                            className: i(`absolute w-3 h-px bg-primary-cta-text transition-all duration-300`, l ? `rotate-45` : `-translate-y-1`)
                                                        }), (0,
                                                            s.jsx)(`span`, {
                                                                className: i(`absolute w-3 h-px bg-primary-cta-text transition-all duration-300`, l ? `-rotate-45` : `translate-y-1`)
                                                            })]
                                                })]
                                    })]
                        }), (0,
                            s.jsx)(`div`, {
                                className: `absolute inset-0 flex flex-col items-center justify-center bg-foreground pointer-events-auto transition-[clip-path] duration-700 ease-[cubic-bezier(0.9,0,0.1,1)]`,
                                style: {
                                    clipPath: l ? `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)` : `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`
                                },
                                children: (0,
                                    s.jsx)(`div`, {
                                        className: `flex flex-col items-center`,
                                        children: t.map((e, n) => (0,
                                            s.jsxs)(`div`, {
                                                className: `overflow-hidden`,
                                                children: [(0,
                                                    s.jsxs)(`a`, {
                                                        href: e.href,
                                                        onClick: t => c(t, e.href, () => u(!1)),
                                                        className: `group flex items-center gap-4 py-4`,
                                                        style: {
                                                            transform: l ? `translateY(0%)` : `translateY(100%)`,
                                                            transition: `transform 0.5s cubic-bezier(0.7, 0, 0.3, 1)`,
                                                            transitionDelay: l ? `${.3 + n * .05}s` : `${(t.length - 1 - n) * .05}s`
                                                        },
                                                        children: [(0,
                                                            s.jsx)(`span`, {
                                                                className: `text-7xl md:text-9xl font-medium text-background group-hover:ml-4 transition-[margin] duration-300`,
                                                                children: e.name
                                                            }), (0,
                                                                s.jsx)(r, {
                                                                    className: `h-(--text-7xl) md:h-(--text-9xl) w-auto text-background group-hover:rotate-45 group-hover:mr-4 transition-all duration-300`,
                                                                    strokeWidth: 1.5
                                                                })]
                                                    }), n < t.length - 1 && (0,
                                                        s.jsx)(`div`, {
                                                            className: `h-px bg-background/20`
                                                        })]
                                            }, e.name))
                                    })
                            })]
                })
    }
    ;
export { l as t };
