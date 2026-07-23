import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { t } from "./utils-EIHTpZTP.js";
var n = e()
    , r = {
        sm: `size-8 text-xs`,
        md: `size-10 text-sm`,
        lg: `size-12 text-base`
    }
    , i = ({ avatarsSrc: e, max: i = 5, size: a = `md`, label: o, labelClassName: s, className: c = `` }) => {
        let l = e.slice(0, i)
            , u = e.length - l.length;
        return (0,
            n.jsxs)(`div`, {
                className: t(`flex items-center gap-3`, c),
                children: [(0,
                    n.jsxs)(`div`, {
                        className: `flex items-center`,
                        children: [l.map((e, i) => (0,
                            n.jsx)(`div`, {
                                className: t(`relative shrink-0 overflow-hidden rounded-full border-2 border-background`, r[a], i > 0 && `-ml-3`),
                                children: (0,
                                    n.jsx)(`img`, {
                                        src: e,
                                        alt: ``,
                                        className: `h-full w-full object-cover`
                                    })
                            }, i)), u > 0 && (0,
                                n.jsxs)(`div`, {
                                    className: t(`flex items-center justify-center shrink-0 rounded-full border-2 border-background secondary-button font-medium text-secondary-cta-text -ml-3`, r[a]),
                                    children: [`+`, u]
                                })]
                    }), o && (0,
                        n.jsx)(`span`, {
                            className: t(`text-base font-medium text-foreground`, s),
                            children: o
                        })]
            })
    }
    ;
export { i as t };
