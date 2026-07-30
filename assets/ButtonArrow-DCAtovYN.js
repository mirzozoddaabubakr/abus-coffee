import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { lt as t } from "./lucide-react-BAD9fcv4.js";
import { t as n } from "./proxy-DH7XUlPl.js";
import { t as r } from "./useButtonClick-qYfbo5vc.js";
import { t as i } from "./utils-EIHTpZTP.js";
var a = e()
    , o = ({ text: e, variant: o = `primary`, href: s = `#`, onClick: c, animate: l = !0, animationDelay: u = 0, className: d = `` }) => {
        let f = (0,
            a.jsxs)(`a`, {
                href: s,
                onClick: r(s, c),
                className: i(`group flex items-center justify-between gap-2 h-10 px-6 text-sm rounded cursor-pointer`, o === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`, d),
                children: [(0,
                    a.jsx)(`span`, {
                        className: `truncate md:transition-transform md:duration-300 md:ease-out md:group-hover:translate-x-2`,
                        children: e
                    }), (0,
                        a.jsx)(`div`, {
                            className: i(`size-5 flex items-center justify-center rounded md:transition-all md:duration-300 md:ease-out md:group-hover:scale-[0.2] md:group-hover:rotate-90`, o === `primary` ? `secondary-button text-secondary-cta-text` : `primary-button text-primary-cta-text`),
                            children: (0,
                                a.jsx)(t, {
                                    className: `size-3 md:transition-opacity md:duration-700 md:group-hover:opacity-0`
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
