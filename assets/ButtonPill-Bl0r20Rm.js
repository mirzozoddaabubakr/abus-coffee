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
                className: r(`flex items-center justify-center h-10 px-6 text-sm rounded-[0.5rem] cursor-pointer md:transition-[border-radius] md:duration-300 md:ease-out md:hover:rounded-[5rem]`, a === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`, u),
                children: e
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
