import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { t } from "./utils-EIHTpZTP.js";
var n = e()
    , r = ({ imageSrc: e, videoSrc: r, className: i = `` }) => r ? (0,
        n.jsx)(`video`, {
            src: r,
            "aria-label": r,
            className: t(`w-full h-full min-h-0 object-cover rounded`, i),
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0
        }) : e ? (0,
            n.jsx)(`img`, {
                src: e,
                alt: e,
                className: t(`w-full h-full min-h-0 object-cover rounded`, i)
            }) : null;
export { r as t };
