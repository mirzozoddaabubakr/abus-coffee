(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 60062, e => {
    "use strict";
    var i = e.i(43476)
        , t = e.i(71645)
        , s = e.i(19599)
        , u = e.i(86098);
    e.s(["default", 0, function () {
        let e = (0,
            u.useUIStore)(e => e.skipLoadingAnimation)
            , l = (0,
                u.useUIStore)(e => e.setSkipLoadingAnimation)
            , a = (0,
                t.useRef)(e);
        return ((0,
            t.useEffect)(() => {
                a.current && l(!1)
            }
                , [l]),
            a.current) ? (0,
                i.jsx)("div", {
                    className: "fixed w-full max-h-dvh h-full bg-background"
                }) : (0,
                    i.jsx)("div", {
                        className: "fixed w-full max-h-dvh h-full flex items-center justify-center bg-background",
                        children: (0,
                            i.jsx)(s.default, {
                                className: "w-50 md:w-20"
                            })
                    })
    }
    ])
}
]);
