import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { Z as t } from "./lucide-react-BAD9fcv4.js";
import { t as n } from "./useButtonClick-qYfbo5vc.js";
import { t as r } from "./utils-EIHTpZTP.js";
import { t as i } from "./AutoFillText-49didBfy.js";
var a = e()
    , o = ({ label: e, href: r, onClick: i }) => {
        let o = n(r, i);
        return (0,
            a.jsxs)(`div`, {
                className: `flex items-center gap-2 text-base`,
                children: [(0,
                    a.jsx)(t, {
                        className: `size-4`,
                        strokeWidth: 3,
                        "aria-hidden": `true`
                    }), (0,
                        a.jsx)(`button`, {
                            onClick: o,
                            className: `text-base text-primary-cta-text font-semibold hover:opacity-75 transition-opacity cursor-pointer`,
                            children: e
                        })]
            })
    }
    , s = ({ brand: e, columns: t }) => (0,
        a.jsx)(`footer`, {
            "data-section": `footer`,
            "aria-label": `Site footer`,
            className: `w-full py-15 mt-20 rounded-t-lg overflow-hidden primary-button text-primary-cta-text`,
            children: (0,
                a.jsxs)(`div`, {
                    className: `w-content-width mx-auto flex flex-col gap-10 md:gap-20`,
                    children: [(0,
                        a.jsx)(i, {
                            className: `font-semibold`,
                            children: e
                        }), (0,
                            a.jsx)(`div`, {
                                className: r(`flex flex-col gap-8 mb-10 md:flex-row`, t.length === 1 ? `md:justify-center` : `md:justify-between`),
                                children: t.map((e, t) => (0,
                                    a.jsx)(`div`, {
                                        className: `flex flex-col items-start gap-3`,
                                        children: e.items.map(e => (0,
                                            a.jsx)(o, {
                                                label: e.label,
                                                href: e.href,
                                                onClick: e.onClick
                                            }, e.label))
                                    }, t))
                            })]
                })
        });
export { s as t };
