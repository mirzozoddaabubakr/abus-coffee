import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { r as t } from "./Button-DfW8ZzOt.js";
import { t as n } from "./CornerGlowBackground-B_3CCIya.js";
import { t as r } from "./GradientBarsBackground-pz2SzHik.js";
import { t as i } from "./HorizonGlowBackground-CnKjvG_h.js";
import { t as a } from "./LightRaysCenterBackground-Bh4JIU8-.js";
import { t as o } from "./LightRaysCornerBackground-ChORQQMs.js";
import { t as s } from "./RadialGradientBackground-C_2Qdbpc.js";
var c = e()
    , l = () => {
        let { heroBackground: e } = t();
        switch (e) {
            case `cornerGlow`:
                return (0,
                    c.jsx)(n, {
                        position: `absolute`
                    });
            case `gradientBars`:
                return (0,
                    c.jsx)(r, {
                        position: `absolute`
                    });
            case `horizonGlow`:
                return (0,
                    c.jsx)(i, {
                        position: `absolute`
                    });
            case `lightRaysCenter`:
                return (0,
                    c.jsx)(a, {
                        position: `absolute`
                    });
            case `lightRaysCorner`:
                return (0,
                    c.jsx)(o, {
                        position: `absolute`
                    });
            case `radialGradient`:
                return (0,
                    c.jsx)(s, {
                        position: `absolute`
                    });
            default:
                return null
        }
    }
    ;
export { l as t };
