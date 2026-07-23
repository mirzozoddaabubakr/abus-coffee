(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 78530, e => {
    "use strict";
    let s = new Map
        , a = new Map
        , t = e => {
            let t = s.get(e);
            if (t)
                return Promise.resolve(t);
            let l = a.get(e);
            if (l)
                return l;
            let i = fetch(e).then(s => {
                if (!s.ok)
                    throw Error(`Failed to load Rive file: ${e}`);
                return s.arrayBuffer()
            }
            ).then(t => (s.set(e, t),
                a.delete(e),
                t)).catch(s => {
                    throw a.delete(e),
                    s
                }
                );
            return a.set(e, i),
                i
        }
        , l = async e => {
            await Promise.allSettled(e.map(e => t(e)))
        }
        ;
    e.s(["RIVE_ANIMATIONS", 0, {
        GENERAL_LOADING: "/api/rive?file=generalloading.riv",
        RECOMMENDATIONS: ["/api/rive?file=generateSite.riv", "/api/rive?file=customize.riv", "/api/rive?file=generateImage.riv", "/api/rive?file=bobSuggestions.riv", "/api/rive?file=publish.riv"]
    }, "getCachedRiveBuffer", 0, e => s.get(e) ?? null, "loadRiveBuffer", 0, t, "preloadRiveFiles", 0, l])
}
    , 59684, e => {
        "use strict";
        var s = e.i(43476)
            , a = e.i(932)
            , t = e.i(70703)
            , l = e.i(19599);
        let i = () => {
            let e, t = (0,
                a.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                s.jsx)("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-background"
                }),
                t[0] = e) : e = t[0],
                e
        }
            , n = (0,
                t.default)(() => e.A(1011), {
                    loadableGenerated: {
                        modules: [5394]
                    },
                    loading: i,
                    ssr: !1
                })
            , c = (0,
                t.default)(() => e.A(38841), {
                    loadableGenerated: {
                        modules: [69232]
                    },
                    loading: i,
                    ssr: !1
                })
            , r = (0,
                t.default)(() => e.A(63629), {
                    loadableGenerated: {
                        modules: [94901]
                    },
                    loading: i,
                    ssr: !1
                })
            , d = (0,
                t.default)(() => e.A(69484), {
                    loadableGenerated: {
                        modules: [79109]
                    },
                    loading: i,
                    ssr: !1
                })
            , o = (0,
                t.default)(() => e.A(49080), {
                    loadableGenerated: {
                        modules: [6700]
                    },
                    loading: i,
                    ssr: !1
                })
            , u = (0,
                t.default)(() => e.A(87849), {
                    loadableGenerated: {
                        modules: [37427]
                    },
                    loading: () => (0,
                        s.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-background",
                            children: (0,
                                s.jsx)(l.default, {})
                        }),
                    ssr: !1
                });
        (0,
            t.default)(() => e.A(50134), {
                loadableGenerated: {
                    modules: [12764]
                },
                loading: i,
                ssr: !1
            }),
            (0,
                t.default)(() => e.A(45134), {
                    loadableGenerated: {
                        modules: [75891]
                    },
                    loading: i,
                    ssr: !1
                }),
            (0,
                t.default)(() => e.A(74656), {
                    loadableGenerated: {
                        modules: [65669]
                    },
                    loading: i,
                    ssr: !1
                });
        let j = (0,
            t.default)(() => e.A(65122), {
                loadableGenerated: {
                    modules: [8305]
                },
                ssr: !1
            });
        (0,
            t.default)(() => e.A(41957), {
                loadableGenerated: {
                    modules: [83476]
                },
                loading: i,
                ssr: !1
            }),
            (0,
                t.default)(() => e.A(55494), {
                    loadableGenerated: {
                        modules: [32960]
                    },
                    loading: i,
                    ssr: !1
                }),
            (0,
                t.default)(() => e.A(84909), {
                    loadableGenerated: {
                        modules: [63764]
                    },
                    ssr: !1
                });
        let m = (0,
            t.default)(() => e.A(61629), {
                loadableGenerated: {
                    modules: [74876]
                },
                ssr: !1
            });
        (0,
            t.default)(() => e.A(49778), {
                loadableGenerated: {
                    modules: [99519]
                },
                ssr: !1
            }),
            (0,
                t.default)(() => e.A(28337), {
                    loadableGenerated: {
                        modules: [2863]
                    },
                    ssr: !1
                });
        let k = (0,
            t.default)(() => e.A(70448), {
                loadableGenerated: {
                    modules: [44241]
                },
                loading: i,
                ssr: !1
            });
        e.s(["DynamicDeleteProjectConfirmation", 0, j, "DynamicHelpModal", 0, o, "DynamicInsufficientCreditsModal", 0, r, "DynamicMaintenanceModal", 0, d, "DynamicPricingModal", 0, n, "DynamicProjectDomains", 0, u, "DynamicReferralModal", 0, c, "DynamicSettingsModal", 0, m, "DynamicTransferWebsiteModal", 0, k])
    }
    , 22535, e => {
        "use strict";
        var s = e.i(43476)
            , a = e.i(932)
            , t = e.i(71645)
            , l = e.i(59684);
        e.s(["default", 0, () => {
            let e, i = (0,
                a.c)(1);
            return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                s.jsxs)(t.Suspense, {
                    fallback: null,
                    children: [(0,
                        s.jsx)(l.DynamicPricingModal, {}), (0,
                            s.jsx)(l.DynamicReferralModal, {}), (0,
                                s.jsx)(l.DynamicInsufficientCreditsModal, {}), (0,
                                    s.jsx)(l.DynamicMaintenanceModal, {}), (0,
                                        s.jsx)(l.DynamicHelpModal, {}), (0,
                                            s.jsx)(l.DynamicTransferWebsiteModal, {})]
                }),
                i[0] = e) : e = i[0],
                e
        }
        ])
    }
    , 82175, e => {
        e.n(e.i(22535))
    }
    , 1011, e => {
        e.v(s => Promise.all(["static/chunks/0mji-8x9ijr1k.js", "static/chunks/06_a_~sl.puky.js", "static/chunks/09d072vk66obm.js", "static/chunks/0s9.k66jbkjy6.js", "static/chunks/0dx85c4e258f2.js"].map(s => e.l(s))).then(() => s(5394)))
    }
    , 38841, e => {
        e.v(s => Promise.all(["static/chunks/09d072vk66obm.js", "static/chunks/0h-ri1c8as4h3.js", "static/chunks/06_a_~sl.puky.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(69232)))
    }
    , 63629, e => {
        e.v(s => Promise.all(["static/chunks/185_jmm0js-_y.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(94901)))
    }
    , 69484, e => {
        e.v(s => Promise.all(["static/chunks/01..gfj7utxqw.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(79109)))
    }
    , 49080, e => {
        e.v(s => Promise.all(["static/chunks/0xyml16zd5~dl.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(6700)))
    }
    , 87849, e => {
        e.v(s => Promise.all(["static/chunks/188hedaz7ta0_.js", "static/chunks/06_a_~sl.puky.js", "static/chunks/0oo0w9_k9wb2p.js", "static/chunks/0s9.k66jbkjy6.js", "static/chunks/12pi7nowkpy53.js", "static/chunks/0veks5kw-i33x.js"].map(s => e.l(s))).then(() => s(37427)))
    }
    , 50134, e => {
        e.v(s => Promise.all(["static/chunks/0coe0s~jtk0x3.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(12764)))
    }
    , 45134, e => {
        e.v(s => Promise.all(["static/chunks/0~mjhiaeopt81.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(75891)))
    }
    , 74656, e => {
        e.v(s => Promise.all(["static/chunks/01vayaa91yjm8.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(65669)))
    }
    , 65122, e => {
        e.v(s => Promise.all(["static/chunks/0cq2.s4-zccqa.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(8305)))
    }
    , 41957, e => {
        e.v(s => Promise.all(["static/chunks/10v~utt8hc_ey.js", "static/chunks/0_1yoos5pg_v_.js", "static/chunks/0vj3rkv00f2wx.js"].map(s => e.l(s))).then(() => s(83476)))
    }
    , 55494, e => {
        e.v(s => Promise.all(["static/chunks/110ytpntq56~6.js", "static/chunks/0~95bcdfyb502.js", "static/chunks/10v~utt8hc_ey.js"].map(s => e.l(s))).then(() => s(32960)))
    }
    , 84909, e => {
        e.v(s => Promise.all(["static/chunks/0_nr6im4e_uyq.js"].map(s => e.l(s))).then(() => s(63764)))
    }
    , 49778, e => {
        e.v(s => Promise.all(["static/chunks/08lxjeygh2jkd.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(99519)))
    }
    , 28337, e => {
        e.v(s => Promise.all(["static/chunks/0rcv7dpse0cre.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(2863)))
    }
    , 70448, e => {
        e.v(s => Promise.all(["static/chunks/0im0hjzt_8erm.js", "static/chunks/0s9.k66jbkjy6.js"].map(s => e.l(s))).then(() => s(44241)))
    }
]);
