(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 97455, e => {
    "use strict";
    var s = e.i(43476)
        , t = e.i(932)
        , l = e.i(19599);
    let c = (0,
        e.i(70703).default)(() => e.A(34604), {
            loadableGenerated: {
                modules: [19668]
            },
            ssr: !1,
            loading: () => (0,
                s.jsx)("div", {
                    className: "w-full h-screen flex items-center justify-center",
                    children: (0,
                        s.jsx)(l.default, {})
                })
        });
    e.s(["default", 0, () => {
        let e, l = (0,
            t.c)(1);
        return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
            s.jsx)(c, {}),
            l[0] = e) : e = l[0],
            e
    }
    ])
}
    , 34604, e => {
        e.v(s => Promise.all(["static/chunks/08ff_10_h-aq..js", "static/chunks/0yc~yunbvcmks.js"].map(s => e.l(s))).then(() => s(19668)))
    }
]);
