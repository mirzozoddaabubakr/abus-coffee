(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 78530, e => {
    "use strict";
    let i = new Map
        , t = new Map
        , r = e => {
            let r = i.get(e);
            if (r)
                return Promise.resolve(r);
            let l = t.get(e);
            if (l)
                return l;
            let a = fetch(e).then(i => {
                if (!i.ok)
                    throw Error(`Failed to load Rive file: ${e}`);
                return i.arrayBuffer()
            }
            ).then(r => (i.set(e, r),
                t.delete(e),
                r)).catch(i => {
                    throw t.delete(e),
                    i
                }
                );
            return t.set(e, a),
                a
        }
        , l = async e => {
            await Promise.allSettled(e.map(e => r(e)))
        }
        ;
    e.s(["RIVE_ANIMATIONS", 0, {
        GENERAL_LOADING: "/api/rive?file=generalloading.riv",
        RECOMMENDATIONS: ["/api/rive?file=generateSite.riv", "/api/rive?file=customize.riv", "/api/rive?file=generateImage.riv", "/api/rive?file=bobSuggestions.riv", "/api/rive?file=publish.riv"]
    }, "getCachedRiveBuffer", 0, e => i.get(e) ?? null, "loadRiveBuffer", 0, r, "preloadRiveFiles", 0, l])
}
    , 90392, e => {
        "use strict";
        var i = e.i(43476)
            , t = e.i(71645)
            , r = e.i(19599)
            , l = e.i(86098);
        e.s(["default", 0, function () {
            let e = (0,
                l.useUIStore)(e => e.skipLoadingAnimation)
                , a = (0,
                    l.useUIStore)(e => e.setSkipLoadingAnimation)
                , s = (0,
                    t.useRef)(e);
            return ((0,
                t.useEffect)(() => {
                    s.current && a(!1)
                }
                    , [a]),
                s.current) ? (0,
                    i.jsx)("div", {
                        className: "fixed w-full h-full bg-background"
                    }) : (0,
                        i.jsx)("div", {
                            className: "fixed w-full h-full flex items-center justify-center bg-background",
                            children: (0,
                                i.jsx)(r.default, {
                                    className: "w-50 md:w-20"
                                })
                        })
        }
        ])
    }
]);
