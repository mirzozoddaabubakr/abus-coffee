import { t as e } from "./jsx-runtime-9YgKe2Eq.js";
import { t } from "./react-CM_0bdEm.js";
import { n } from "./Button-DfW8ZzOt.js";
t();
var r = e();
function i({ buttonVariant: e = `default`, siteBackground: t = `none`, heroBackground: i = `none`, children: a }) {
    return (0,
        r.jsx)(n.Provider, {
            value: {
                buttonVariant: e,
                siteBackground: t,
                heroBackground: i
            },
            children: a
        })
}
export { i as t };
