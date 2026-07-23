(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 58007, e => {
    "use strict";
    var t = e.i(43476)
        , i = e.i(932)
        , l = e.i(71645)
        , s = e.i(18566)
        , r = e.i(19599)
        , a = e.i(42237)
        , o = e.i(75157);
    e.s(["default", 0, () => {
        let e, n, c, u, d, m, p, b = (0,
            i.c)(14), f = (0,
                s.useParams)(), [v, h] = (0,
                    l.useState)(!1);
        b[0] !== f ? (e = a.TEMPLATES_DATA.find(e => e.title.toLowerCase().replace(/\s+/g, "-") === f.slug),
            b[0] = f,
            b[1] = e) : e = b[1];
        let w = e;
        w || (0,
            s.notFound)();
        let g = v ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto";
        b[2] !== g ? (n = (0,
            o.cls)("absolute inset-0 flex items-center justify-center bg-background transition-opacity duration-300 z-10", g),
            b[2] = g,
            b[3] = n) : n = b[3],
            b[4] === Symbol.for("react.memo_cache_sentinel") ? (c = (0,
                t.jsx)(r.default, {
                    className: "w-50 md:w-20"
                }),
                b[4] = c) : c = b[4],
            b[5] !== n ? (u = (0,
                t.jsx)("div", {
                    className: n,
                    children: c
                }),
                b[5] = n,
                b[6] = u) : u = b[6];
        let y = `${w.title} preview`;
        return b[7] === Symbol.for("react.memo_cache_sentinel") ? (d = () => h(!0),
            b[7] = d) : d = b[7],
            b[8] !== y || b[9] !== w.previewUrl ? (m = (0,
                t.jsx)("iframe", {
                    src: w.previewUrl,
                    className: "absolute inset-0 w-full h-full border-0",
                    title: y,
                    onLoad: d
                }),
                b[8] = y,
                b[9] = w.previewUrl,
                b[10] = m) : m = b[10],
            b[11] !== u || b[12] !== m ? (p = (0,
                t.jsxs)("div", {
                    className: "w-full h-screen relative bg-background",
                    children: [u, m]
                }),
                b[11] = u,
                b[12] = m,
                b[13] = p) : p = b[13],
            p
    }
    ])
}
    , 19668, e => {
        e.n(e.i(58007))
    }
]);
