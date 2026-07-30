import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { dt as t } from "./lucide-react-BAD9fcv4.js";
import { t as n } from "./proxy-DH7XUlPl.js";
import { t as r } from "./useButtonClick-qYfbo5vc.js";
import { t as i } from "./utils-EIHTpZTP.js";
var a = e()
    , o = ({ text: e, variant: o = `primary`, href: s = `#`, onClick: c, animate: l = !0, animationDelay: u = 0, className: d = `` }) => {
        let f = (0,
            a.jsxs)(`a`, {
                href: s,
                onClick: r(s, c),
                className: i(`group relative flex items-center min-w-0 max-w-full text-sm rounded cursor-pointer`, d),
                children: [(0,
                    a.jsx)(`div`, {
                        className: i(`flex items-center justify-center size-10 rounded relative scale-0 md:transition-transform md:duration-500 md:ease-out md:origin-left md:group-hover:scale-100`, o === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`),
                        children: (0,
                            a.jsx)(t, {
                                className: `size-3.5 md:transition-transform md:duration-500 md:group-hover:-rotate-45`
                            })
                    }), (0,
                        a.jsx)(`div`, {
                            className: i(`flex items-center justify-between flex-1 h-10 px-4 min-w-0 max-w-full rounded relative -translate-x-10 md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-x-0`, o === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`),
                            children: (0,
                                a.jsx)(`span`, {
                                    className: `truncate`,
                                    children: e
                                })
                        }), (0,
                            a.jsx)(`div`, {
                                className: i(`flex items-center justify-center size-10 rounded absolute right-0 z-20 scale-100 md:transition-transform md:duration-500 md:ease-out md:origin-right md:group-hover:scale-0`, o === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`),
                                children: (0,
                                    a.jsx)(t, {
                                        className: `size-3.5 md:transition-transform md:duration-500 md:group-hover:-rotate-45`
                                    })
                            })]
            });
        return l ? (0,
            a.jsx)(n.div, {
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
                children: f
            }) : f
    }
    ;
export { o as t };
