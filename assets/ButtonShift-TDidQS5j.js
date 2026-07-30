import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { t } from "./proxy-DH7XUlPl.js";
import { t as n } from "./useButtonClick-qYfbo5vc.js";
import { t as r } from "./utils-EIHTpZTP.js";
var i = e()
    , a = ({ text: e, variant: a = `primary`, href: o = `#`, onClick: s, animate: c = !0, animationDelay: l = 0, className: u = `` }) => {
        let d = (0,
            i.jsx)(`a`, {
                href: o,
                onClick: n(o, s),
                className: r(`group flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer`, a === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`, u),
                children: (0,
                    i.jsx)(`span`, {
                        className: `truncate overflow-hidden`,
                        children: [...e].map((e, t) => (0,
                            i.jsx)(`span`, {
                                className: `inline-block transition-transform duration-300 ease-out md:group-hover:-translate-y-[1.25em]`,
                                style: {
                                    textShadow: `0 1.25em currentColor`,
                                    whiteSpace: e === ` ` ? `pre` : void 0
                                },
                                children: e
                            }, t))
                    })
            });
        return c ? (0,
            i.jsx)(t.div, {
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
                    delay: l,
                    ease: `easeOut`
                },
                children: d
            }) : d
    }
    ;
export { a as t };
