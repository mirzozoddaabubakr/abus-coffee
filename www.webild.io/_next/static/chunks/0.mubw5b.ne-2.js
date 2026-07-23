(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 89786, t => {
    "use strict";
    t.s(["default", 0, {
        init(t) {
            !function (t) {
                try {
                    var e, n, i, r, c;
                    e = window,
                        n = document,
                        i = "clarity",
                        n.getElementById("clarity-script") || (e[i] = e[i] || function () {
                            (e[i].q = e[i].q || []).push(arguments)
                        }
                            ,
                            (r = n.createElement("script")).async = 1,
                            r.src = "https://www.clarity.ms/tag/" + t + "?ref=npm",
                            r.id = "clarity-script",
                            (c = n.getElementsByTagName("script")[0]).parentNode.insertBefore(r, c))
                } catch (t) {
                    return
                }
            }(t)
        },
        setTag(t, e) {
            window.clarity("set", t, e)
        },
        identify(t, e, n, i) {
            window.clarity("identify", t, e, n, i)
        },
        consent(t = !0) {
            window.clarity("consent", t)
        },
        consentV2(t = {
            ad_Storage: "granted",
            analytics_Storage: "granted"
        }) {
            window.clarity("consentv2", t)
        },
        upgrade(t) {
            window.clarity("upgrade", t)
        },
        event(t) {
            window.clarity("event", t)
        }
    }], 89786)
}
]);
