import { o as e, t } from "./jsx-runtime-9YgKe2Eq.js";
import { t as n } from "./react-CM_0bdEm.js";
import { t as r } from "./proxy-DH7XUlPl.js";
import { t as i } from "./useButtonClick-qYfbo5vc.js";
import { t as a } from "./utils-EIHTpZTP.js";
import { t as o } from "./ButtonArrow-DCAtovYN.js";
import { t as s } from "./ButtonBounce-BLNRuHYe.js";
import { t as c } from "./ButtonBubble-BkyJLyf3.js";
import { t as l } from "./ButtonElastic-DmLZ66H2.js";
import { t as u } from "./ButtonExpand-Du8Q1Jog.js";
import { t as d } from "./ButtonFlip-BddzsiDm.js";
import { t as f } from "./ButtonMagnetic-BAYXc9Gn.js";
import { t as p } from "./ButtonPill-Bl0r20Rm.js";
import { t as m } from "./ButtonShift-TDidQS5j.js";
import { t as h } from "./ButtonSlide--FY_x4iZ.js";
import { t as g } from "./ButtonStagger-DvlwlGCD.js";
var _ = e(n(), 1)
    , v = (0,
        _.createContext)({
            buttonVariant: `default`,
            siteBackground: `none`,
            heroBackground: `none`
        });
function y() {
    return (0,
        _.useContext)(v)
}
var b = t()
    , x = ({ text: e, variant: t = `primary`, href: n = `#`, onClick: o, animate: s = !0, animationDelay: c = 0, className: l = `` }) => {
        let u = (0,
            b.jsx)(`a`, {
                href: n,
                onClick: i(n, o),
                className: a(`flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer`, t === `primary` ? `primary-button text-primary-cta-text` : `secondary-button text-secondary-cta-text`, l),
                children: e
            });
        return s ? (0,
            b.jsx)(r.div, {
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
                    delay: c,
                    ease: `easeOut`
                },
                children: u
            }) : u
    }
    , S = e => {
        let { buttonVariant: t } = y();
        switch (t) {
            case `arrow`:
                return (0,
                    b.jsx)(o, {
                        ...e
                    });
            case `bounce`:
                return (0,
                    b.jsx)(s, {
                        ...e
                    });
            case `bubble`:
                return (0,
                    b.jsx)(c, {
                        ...e
                    });
            case `elastic`:
                return (0,
                    b.jsx)(l, {
                        ...e
                    });
            case `expand`:
                return (0,
                    b.jsx)(u, {
                        ...e
                    });
            case `flip`:
                return (0,
                    b.jsx)(d, {
                        ...e
                    });
            case `magnetic`:
                return (0,
                    b.jsx)(f, {
                        ...e
                    });
            case `pill`:
                return (0,
                    b.jsx)(p, {
                        ...e
                    });
            case `shift`:
                return (0,
                    b.jsx)(m, {
                        ...e
                    });
            case `slide`:
                return (0,
                    b.jsx)(h, {
                        ...e
                    });
            case `stagger`:
                return (0,
                    b.jsx)(g, {
                        ...e
                    });
            default:
                return (0,
                    b.jsx)(x, {
                        ...e
                    })
        }
    }
    ;
export { v as n, y as r, S as t };
