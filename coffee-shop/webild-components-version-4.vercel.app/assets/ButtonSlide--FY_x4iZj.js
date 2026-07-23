import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { lt as t } from "./lucide-react-BAD9fcv4.js";
import { t as n } from "./proxy-DH7XULpl.js";
import { t as r } from "./useButtonClick-qYfbo5vc.js";
import { t as i } from "./utils-EIHTpZTP.js";
var a = e()
    , o = ({ text: e, variant: o = `primary`, href: s = `#`, onClick: c, animate: l = !0, animationDelay: u = 0, className: d = `` }) => {
        let f = (0,
            a.jsxs)(`a`, {
                href: s,
                onClick: r(s, c),
                className: i(`group relative flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer overflow-clip`, o === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`, d),
                children: [(0,
                    a.jsx)(t, {
                        className: `absolute left-5 size-3.5 opacity-0 -translate-x-6 md:transition-all md:duration-500 md:ease-[cubic-bezier(0.32,0.72,0,1)] md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:delay-75`
                    }), (0,
                        a.jsxs)(`span`, {
                            className: `flex items-center gap-1.5 md:transition-transform md:duration-500 md:ease-[cubic-bezier(0.32,0.72,0,1)] md:group-hover:translate-x-4 md:group-hover:delay-75`,
                            children: [(0,
                                a.jsx)(`span`, {
                                    className: `truncate`,
                                    children: e
                                }), (0,
                                    a.jsx)(t, {
                                        className: `size-3.5 md:transition-all md:duration-500 md:ease-[cubic-bezier(0.32,0.72,0,1)] md:group-hover:opacity-0 md:group-hover:translate-x-6 md:group-hover:delay-50`
                                    })]
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
