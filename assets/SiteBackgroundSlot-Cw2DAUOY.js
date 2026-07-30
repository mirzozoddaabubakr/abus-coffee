import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { r as t } from "./Button-DfW8ZzOt.js";
import { t as n } from "./CornerGlowBackground-B_3CCIya.js";
import { t as r } from "./AuroraBackground-DhaeHb-g.js";
import { t as i } from "./FloatingGradientBackground-BB1rMR0G.js";
import { t as a } from "./GridLinesBackground-CQEaJBu6.js";
import { t as o } from "./NoiseBackground-CbmZXlg5.js";
import { t as s } from "./NoiseGradientBackground-DwFyHHeQ.js";
var c = e()
    , l = () => {
        let { siteBackground: e } = t();
        switch (e) {
            case `aurora`:
                return (0,
                    c.jsx)(r, {
                        position: `fixed`
                    });
            case `cornerGlow`:
                return (0,
                    c.jsx)(n, {
                        position: `fixed`
                    });
            case `floatingGradient`:
                return (0,
                    c.jsx)(i, {
                        position: `fixed`
                    });
            case `gridLines`:
                return (0,
                    c.jsx)(a, {
                        position: `fixed`
                    });
            case `noise`:
                return (0,
                    c.jsx)(o, {
                        position: `fixed`
                    });
            case `noiseGradient`:
                return (0,
                    c.jsx)(s, {
                        position: `fixed`
                    });
            default:
                return null
        }
    }
    ;
export { l as t };
