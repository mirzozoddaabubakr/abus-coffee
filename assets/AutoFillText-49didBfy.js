import { o as e, t } from "./jsx-runtime-9YgKe2Eq.js";
import { t as n } from "./react-CM_0bdEm.js";
import { t as r } from "./utils-EIHTpZTP.js";
var i = e(n(), 1)
    , a = t()
    , o = ({ children: e, className: t = ``, paddingY: n = `py-10` }) => {
        let o = (0,
            i.useRef)(null)
            , s = (0,
                i.useRef)(null)
            , [c, l] = (0,
                i.useState)(null)
            , u = /[gjpqy]/.test(e)
            , d = u ? 1.2 : .8;
        return (0,
            i.useEffect)(() => {
                let t = o.current
                    , n = s.current;
                if (!t || !n)
                    return;
                let r = () => {
                    let r = t.offsetWidth;
                    if (r === 0)
                        return;
                    let i = document.createElement(`canvas`).getContext(`2d`);
                    if (!i)
                        return;
                    let a = getComputedStyle(n);
                    i.font = `${a.fontWeight} 100px ${a.fontFamily}`;
                    let o = i.measureText(e).width;
                    o > 0 && l(r / o * 100)
                }
                    ;
                r();
                let i = new ResizeObserver(r);
                return i.observe(t),
                    () => i.disconnect()
            }
                , [e]),
            (0,
                a.jsx)(`div`, {
                    ref: o,
                    className: r(`w-full min-w-0 flex-1`, !u && n),
                    children: (0,
                        a.jsx)(`h2`, {
                            ref: s,
                            className: r(`whitespace-nowrap transition-opacity duration-150`, c ? `opacity-100` : `opacity-0`, t),
                            style: {
                                fontSize: c ? `${c}px` : void 0,
                                lineHeight: d
                            },
                            children: e
                        })
                })
    }
    ;
export { o as t };
