(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 62788, e => {
    "use strict";
    e.s(["COMMON_STRINGS", 0, {
        buttons: {
            SAVE: "Save",
            DELETE: "Delete",
            EDIT: "Edit",
            CLOSE: "Close",
            UPGRADE_PLAN: "Upgrade Plan",
            SETTINGS: "Settings",
            SIGN_OUT: "Sign out",
            JOIN_COMMUNITY: "Join community"
        },
        labels: {
            DOCUMENTATION: "Documentation",
            PRICING: "Pricing"
        },
        placeholders: {
            SEARCH: "Search"
        },
        images: {
            LOGO_ALT: "Logo"
        },
        defaults: {
            PROJECT_NAME: "Webild Project"
        }
    }])
}
    , 75980, e => {
        "use strict";
        var t = e.i(62788);
        let i = {
            modals: {
                maintenance: {
                    title: "We're making a quick adjustment on our end.",
                    description: "One of our partners is temporarily unavailable. Please try again in a moment.",
                    imageAlt: "Maintenance"
                },
                paymentSuccess: {
                    subscription: {
                        title: "Subscription Activated!",
                        description: "Your subscription has been successfully activated. You can now enjoy all the benefits of your plan."
                    },
                    credits: {
                        title: "Credits Purchased!",
                        description: "Your credits have been successfully added to your account. Start creating amazing projects!"
                    },
                    continueButton: "Continue"
                },
                paymentCancel: {
                    title: "Payment Cancelled",
                    description: "Your payment was cancelled. No charges were made to your account. You can try again anytime.",
                    continueButton: "Continue"
                },
                insufficientCredits: {
                    title: "Insufficient Credits",
                    subtitle: e => `You need more credits to ${e}`,
                    required: "Required",
                    available: "Available"
                },
                confirmation: {
                    cancelButton: "Cancel",
                    confirmButton: "Confirm"
                },
                dragDrop: {
                    title: "Add files",
                    description: "Drop any files here to add them to your message"
                }
            },
            tooltips: {
                upgrade: {
                    title: "Unlock Premium Features",
                    benefits: ["Get 150 NEW AI credits monthly", "Get Custom Domains", "Free Secure Hosting"],
                    upgradeNow: "Upgrade Now",
                    comparePlans: "Compare Plans"
                }
            },
            errors: {
                route: {
                    title: "Oops. Something went wrong",
                    description: "Looks like that didn't go through. Please try again.",
                    tryAgain: "Try Again",
                    goHome: "Go Home"
                },
                screenshot: {
                    unpublished: "Publish to view preview",
                    noPreview: "No Preview available"
                }
            },
            notifications: {
                cookie: {
                    title: "Cookie preferences",
                    description: "We use cookies to analyze how you use our site and improve your experience.",
                    learnMore: "Learn more about our cookie policy",
                    decline: "Decline",
                    accept: "Accept"
                },
                creditWarning: {
                    outOfCredits: "Out of Credits",
                    lowOnCredits: "Low on Credits",
                    left: "left",
                    clickToUpgrade: "Click to upgrade your plan",
                    featuresDisabled: "Some features are disabled",
                    cantUse: e => `Can't use: ${e}`
                },
                maintenance: {
                    title: "Maintenance Mode",
                    description: "Some features are temporarily unavailable",
                    learnMore: "Learn More"
                }
            },
            input: {
                outOfCredits: "Out of credits. Upgrade to continue.",
                enhanceButton: "Enhance prompt",
                placeholders: {
                    enhancing: "Enhancing your prompt",
                    listening: "Listening...",
                    projectPage: "Ask Webild...",
                    homePage: "Make me a clean apple like website for my ai startup"
                },
                errors: {
                    enhanceFailed: "Failed to enhance prompt. Please try again.",
                    requestProcessing: "Please wait — your previous request is still processing.",
                    minCharacters: "Please enter at least 5 characters",
                    maxFileCount: e => `You can upload a maximum of ${e} images.`,
                    duplicateFile: e => `File "${e}" is already added.`,
                    fileTooLarge: e => `File "${e}" is too large. Maximum size is 4 MB.`,
                    unsupportedFormat: e => `File "${e}" has an unsupported format. Please upload only PNG, JPG, or JPEG images.`
                },
                tooltips: {
                    add: "Add",
                    voice: "Speech to text",
                    send: "Send",
                    visualEdit: "Select elements on your site to edit them directly",
                    enhance: "Improve your prompt with AI"
                }
            },
            dividers: {
                or: "or"
            },
            buttons: {
                close: t.COMMON_STRINGS.buttons.CLOSE,
                upgradePlan: t.COMMON_STRINGS.buttons.UPGRADE_PLAN
            },
            select: {
                province: {
                    placeholder: "Select a province/state",
                    selectCountryFirst: "Select a country first",
                    noProvincesAvailable: "No provinces available",
                    searchPlaceholder: "Search province/state",
                    notFound: "Province/state not found."
                },
                country: {
                    placeholder: "Select a country",
                    searchPlaceholder: "Search country",
                    notFound: "Country not found."
                }
            },
            dataStates: {
                error: {
                    title: "Failed to load data",
                    description: "Something went wrong while loading the data.",
                    chartDescription: "Something went wrong while loading the chart data."
                },
                empty: {
                    title: "No data available",
                    tableDescription: "There are no items to display.",
                    chartDescription: "There is no data to display for the selected period."
                }
            },
            chat: {
                imageMessage: {
                    generatingImage: "Generating Image",
                    generationImageAlt: "Generation Image"
                }
            },
            preview: {
                editMode: {
                    title: "Visual edit",
                    selectPrompt: "Click on any element on your site to edit it.",
                    describeChanges: e => `Describe your changes to this ${e}.`,
                    text: {
                        title: "You selected Text",
                        description: "Use the prompt box below for more advanced text edits like colors, fonts, and sizing."
                    },
                    image: {
                        title: "You selected Image",
                        description: "Use the prompt box below to describe the image you want, or use the toolbar to replace it."
                    },
                    button: {
                        title: "You selected Button",
                        description: "Use the prompt box below to modify the button text, link, or style."
                    },
                    section: {
                        title: "You selected Section",
                        description: "Use the prompt box below to modify this section's layout or content."
                    },
                    generic: {
                        title: "You selected an Element",
                        description: "Use the prompt box below to describe your changes."
                    },
                    selectImage: {
                        title: "Select an image",
                        description: "Click an image on your site to replace it"
                    },
                    noSelection: "Click on any element on your site to edit it.",
                    imageHint: "Use the left panel to upload, generate, or browse images.",
                    otherElementHint: "Use the prompt box on the left to describe changes to this element.",
                    inputPlaceholder: "Ask Webild how to modify the selected element...",
                    buttonEditor: {
                        linkType: "Link type",
                        label: "Label",
                        section: "Section",
                        sectionHelper: "Select a section on this page",
                        page: "Page",
                        url: "URL",
                        phone: "Phone",
                        email: "Email",
                        placeholders: {
                            url: "https://...",
                            phone: "tel:+1234567890",
                            email: "mailto:example@email.com",
                            page: "Select a page"
                        }
                    }
                },
                block: {
                    selectedBlock: "Selected block",
                    selectedPage: "Selected page"
                },
                item: {
                    defaultSubtitle: "New page"
                }
            }
        };
        e.s(["UI_STRINGS", 0, i])
    }
    , 85203, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(71645)
            , n = e.i(75157);
        e.s(["default", 0, e => {
            let o, a, l, s, c, u, d, f, p, m = (0,
                i.c)(16);
            m[0] !== e ? ({ children: o, className: s, animationType: c, style: l, ...a } = e,
                m[0] = e,
                m[1] = o,
                m[2] = a,
                m[3] = l,
                m[4] = s,
                m[5] = c) : (o = m[1],
                    a = m[2],
                    l = m[3],
                    s = m[4],
                    c = m[5]);
            let g = void 0 === s ? "flex flex-col gap-5 w-full h-fit" : s
                , h = void 0 === c ? "full" : c
                , [y, b] = (0,
                    r.useState)("full" === h ? "animation-container" : "animation-container-fade")
                , v = (0,
                    r.useRef)(!1);
            return m[6] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
                if (v.current)
                    return;
                v.current = !0;
                let e = setTimeout(() => {
                    b("")
                }
                    , 800);
                return () => clearTimeout(e)
            }
                ,
                d = [],
                m[6] = u,
                m[7] = d) : (u = m[6],
                    d = m[7]),
                (0,
                    r.useEffect)(u, d),
                m[8] !== y || m[9] !== g ? (f = (0,
                    n.cls)(g, y),
                    m[8] = y,
                    m[9] = g,
                    m[10] = f) : f = m[10],
                m[11] !== o || m[12] !== a || m[13] !== l || m[14] !== f ? (p = (0,
                    t.jsx)("div", {
                        className: f,
                        style: l,
                        ...a,
                        children: o
                    }),
                    m[11] = o,
                    m[12] = a,
                    m[13] = l,
                    m[14] = f,
                    m[15] = p) : p = m[15],
                p
        }
        ])
    }
    , 31278, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("loader-circle", [["path", {
                d: "M21 12a9 9 0 1 1-6.219-8.56",
                key: "13zald"
            }]]);
        e.s(["Loader2", 0, t], 31278)
    }
    , 21742, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(71645)
            , r = e.i(31278)
            , n = e.i(75157);
        let o = (0,
            i.forwardRef)(({ children: e, className: i, styleClassName: o = "button-secondary", gradientRoundedClassName: a, type: l = "button", onClick: s, onMouseEnter: c, disabled: u = !1, isLoading: d = !1, loadingText: f }, p) => (0,
                t.jsx)("button", {
                    ref: p,
                    type: l,
                    disabled: u || d,
                    onMouseEnter: c,
                    className: (0,
                        n.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", a, o, i, (u || d) && "opacity-50 select-none pointer-events-none"),
                    onClick: s,
                    children: d ? (0,
                        t.jsxs)("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0,
                                t.jsx)(r.Loader2, {
                                    className: "h-[1em] w-auto animate-spin"
                                }), f ?? e]
                        }) : e
                }));
        o.displayName = "Button",
            e.s(["default", 0, o])
    }
    , 18581, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "useMergedRef", {
                enumerable: !0,
                get: function () {
                    return n
                }
            });
        let r = e.r(71645);
        function n(e, t) {
            let i = (0,
                r.useRef)(null)
                , n = (0,
                    r.useRef)(null);
            return (0,
                r.useCallback)(r => {
                    if (null === r) {
                        let e = i.current;
                        e && (i.current = null,
                            e());
                        let t = n.current;
                        t && (n.current = null,
                            t())
                    } else
                        e && (i.current = o(e, r)),
                            t && (n.current = o(t, r))
                }
                    , [e, t])
        }
        function o(e, t) {
            if ("function" != typeof e)
                return e.current = t,
                    () => {
                        e.current = null
                    }
                    ;
            {
                let i = e(t);
                return "function" == typeof i ? i : () => e(null)
            }
        }
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
            Object.assign(i.default, i),
            t.exports = i.default)
    }
    , 88143, (e, t, i) => {
        "use strict";
        function r({ widthInt: e, heightInt: t, blurWidth: i, blurHeight: n, blurDataURL: o, objectFit: a }) {
            let l = i ? 40 * i : e
                , s = n ? 40 * n : t
                , c = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "getImageBlurSvg", {
                enumerable: !0,
                get: function () {
                    return r
                }
            })
    }
    , 87690, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = {
            VALID_LOADERS: function () {
                return o
            },
            imageConfigDefault: function () {
                return a
            }
        };
        for (var n in r)
            Object.defineProperty(i, n, {
                enumerable: !0,
                get: r[n]
            });
        let o = ["default", "imgix", "cloudinary", "akamai", "custom"]
            , a = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                loaderFile: "",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 14400,
                formats: ["image/webp"],
                maximumDiskCacheSize: void 0,
                maximumRedirects: 3,
                maximumResponseBody: 5e7,
                dangerouslyAllowLocalIP: !1,
                dangerouslyAllowSVG: !1,
                contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                contentDispositionType: "attachment",
                localPatterns: void 0,
                remotePatterns: [],
                qualities: [75],
                unoptimized: !1,
                customCacheHandler: !1
            }
    }
    , 8927, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "getImgProps", {
                enumerable: !0,
                get: function () {
                    return c
                }
            }),
            e.r(33525);
        let r = e.r(43369)
            , n = e.r(88143)
            , o = e.r(87690)
            , a = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function l(e) {
            return void 0 !== e.default
        }
        function s(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function c({ src: e, sizes: t, unoptimized: i = !1, priority: u = !1, preload: d = !1, loading: f, className: p, quality: m, width: g, height: h, fill: y = !1, style: b, overrideSrc: v, onLoad: x, onLoadingComplete: S, placeholder: w = "empty", blurDataURL: _, fetchPriority: P, decoding: j = "async", layout: C, objectFit: O, objectPosition: E, lazyBoundary: N, lazyRoot: I, ...R }, k) {
            var M;
            let T, A, U, { imgConf: D, showAltText: z, blurComplete: G, defaultLoader: L } = k, $ = D || o.imageConfigDefault;
            if ("allSizes" in $)
                T = $;
            else {
                let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t)
                    , t = $.deviceSizes.sort((e, t) => e - t)
                    , i = $.qualities?.sort((e, t) => e - t);
                T = {
                    ...$,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: i
                }
            }
            if (void 0 === L)
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
            let F = R.loader || L;
            delete R.loader,
                delete R.srcSet;
            let B = "__next_img_default" in F;
            if (B) {
                if ("custom" === T.loader)
                    throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
            } else {
                let e = F;
                F = t => {
                    let { config: i, ...r } = t;
                    return e(r)
                }
            }
            if (C) {
                "fill" === C && (y = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                e && (b = {
                    ...b,
                    ...e
                });
                let i = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                i && !t && (t = i)
            }
            let W = ""
                , q = s(g)
                , Y = s(h);
            if ((M = e) && "object" == typeof M && (l(M) || void 0 !== M.src)) {
                let t = l(e) ? e.default : e;
                if (!t.src)
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                if (!t.height || !t.width)
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                if (A = t.blurWidth,
                    U = t.blurHeight,
                    _ = _ || t.blurDataURL,
                    W = t.src,
                    !y)
                    if (q || Y) {
                        if (q && !Y) {
                            let e = q / t.width;
                            Y = Math.round(t.height * e)
                        } else if (!q && Y) {
                            let e = Y / t.height;
                            q = Math.round(t.width * e)
                        }
                    } else
                        q = t.width,
                            Y = t.height
            }
            let H = !u && !d && ("lazy" === f || void 0 === f);
            (!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) && (i = !0,
                H = !1),
                T.unoptimized && (i = !0),
                B && !T.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (i = !0);
            let J = s(m)
                , V = Object.assign(y ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: O,
                    objectPosition: E
                } : {}, z ? {} : {
                    color: "transparent"
                }, b)
                , X = G || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,
                    n.getImageBlurSvg)({
                        widthInt: q,
                        heightInt: Y,
                        blurWidth: A,
                        blurHeight: U,
                        blurDataURL: _ || "",
                        objectFit: V.objectFit
                    })}")` : `url("${w}")`
                , K = a.includes(V.objectFit) ? "fill" === V.objectFit ? "100% 100%" : "cover" : V.objectFit
                , Q = X ? {
                    backgroundSize: K,
                    backgroundPosition: V.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: X
                } : {}
                , Z = function ({ config: e, src: t, unoptimized: i, width: n, quality: o, sizes: a, loader: l }) {
                    if (i) {
                        if (t.startsWith("/") && !t.startsWith("//")) {
                            let e = (0,
                                r.getDeploymentId)();
                            if (e) {
                                let i = t.indexOf("?");
                                if (-1 !== i) {
                                    let r = new URLSearchParams(t.slice(i + 1));
                                    r.get("dpl") || (r.append("dpl", e),
                                        t = t.slice(0, i) + "?" + r.toString())
                                } else
                                    t += `?dpl=${e}`
                            }
                        }
                        return {
                            src: t,
                            srcSet: void 0,
                            sizes: void 0
                        }
                    }
                    let { widths: s, kind: c } = function ({ deviceSizes: e, allSizes: t }, i, r) {
                        if (r) {
                            let i = /(^|\s)(1?\d?\d)vw/g
                                , n = [];
                            for (let e; e = i.exec(r);)
                                n.push(parseInt(e[2]));
                            if (n.length) {
                                let i = .01 * Math.min(...n);
                                return {
                                    widths: t.filter(t => t >= e[0] * i),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: t,
                                kind: "w"
                            }
                        }
                        return "number" != typeof i ? {
                            widths: e,
                            kind: "w"
                        } : {
                            widths: [...new Set([i, 2 * i].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                            kind: "x"
                        }
                    }(e, n, a)
                        , u = s.length - 1;
                    return {
                        sizes: a || "w" !== c ? a : "100vw",
                        srcSet: s.map((i, r) => `${l({
                            config: e,
                            src: t,
                            quality: o,
                            width: i
                        })} ${"w" === c ? i : r + 1}${c}`).join(", "),
                        src: l({
                            config: e,
                            src: t,
                            quality: o,
                            width: s[u]
                        })
                    }
                }({
                    config: T,
                    src: e,
                    unoptimized: i,
                    width: q,
                    quality: J,
                    sizes: t,
                    loader: F
                })
                , ee = H ? "lazy" : f;
            return {
                props: {
                    ...R,
                    loading: ee,
                    fetchPriority: P,
                    width: q,
                    height: Y,
                    decoding: j,
                    className: p,
                    style: {
                        ...V,
                        ...Q
                    },
                    sizes: Z.sizes,
                    srcSet: Z.srcSet,
                    src: v || Z.src
                },
                meta: {
                    unoptimized: i,
                    preload: d || u,
                    placeholder: w,
                    fill: y
                }
            }
        }
    }
    , 98879, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function () {
                    return l
                }
            });
        let r = e.r(71645)
            , n = "u" < typeof window
            , o = n ? () => { }
                : r.useLayoutEffect
            , a = n ? () => { }
                : r.useEffect;
        function l(e) {
            let { headManager: t, reduceComponentsToState: i } = e;
            function l() {
                if (t && t.mountedInstances) {
                    let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(i(e))
                }
            }
            return n && (t?.mountedInstances?.add(e.children),
                l()),
                o(() => (t?.mountedInstances?.add(e.children),
                    () => {
                        t?.mountedInstances?.delete(e.children)
                    }
                )),
                o(() => (t && (t._pendingUpdate = l),
                    () => {
                        t && (t._pendingUpdate = l)
                    }
                )),
                a(() => (t && t._pendingUpdate && (t._pendingUpdate(),
                    t._pendingUpdate = null),
                    () => {
                        t && t._pendingUpdate && (t._pendingUpdate(),
                            t._pendingUpdate = null)
                    }
                )),
                null
        }
    }
    , 25633, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = {
            default: function () {
                return g
            },
            defaultHead: function () {
                return d
            }
        };
        for (var n in r)
            Object.defineProperty(i, n, {
                enumerable: !0,
                get: r[n]
            });
        let o = e.r(55682)
            , a = e.r(90809)
            , l = e.r(43476)
            , s = a._(e.r(71645))
            , c = o._(e.r(98879))
            , u = e.r(42732);
        function d() {
            return [(0,
                l.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset"), (0,
                    l.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width"
                    }, "viewport")]
        }
        function f(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        e.r(33525);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(e) {
            let t, i, r, n;
            return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set,
                i = new Set,
                r = new Set,
                n = {},
                e => {
                    let o = !0
                        , a = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        a = !0;
                        let i = e.key.slice(e.key.indexOf("$") + 1);
                        t.has(i) ? o = !1 : t.add(i)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            i.has(e.type) ? o = !1 : i.add(e.type);
                            break;
                        case "meta":
                            for (let t = 0, i = p.length; t < i; t++) {
                                let i = p[t];
                                if (e.props.hasOwnProperty(i))
                                    if ("charSet" === i)
                                        r.has(i) ? o = !1 : r.add(i);
                                    else {
                                        let t = e.props[i]
                                            , r = n[i] || new Set;
                                        ("name" !== i || !a) && r.has(t) ? o = !1 : (r.add(t),
                                            n[i] = r)
                                    }
                            }
                    }
                    return o
                }
            )).reverse().map((e, t) => {
                let i = e.key || t;
                return s.default.cloneElement(e, {
                    key: i
                })
            }
            )
        }
        let g = function ({ children: e }) {
            let t = (0,
                s.useContext)(u.HeadManagerContext);
            return (0,
                l.jsx)(c.default, {
                    reduceComponentsToState: m,
                    headManager: t,
                    children: e
                })
        };
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
            Object.assign(i.default, i),
            t.exports = i.default)
    }
    , 18556, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "ImageConfigContext", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
        let r = e.r(55682)._(e.r(71645))
            , n = e.r(87690)
            , o = r.default.createContext(n.imageConfigDefault)
    }
    , 70965, (e, t, i) => {
        "use strict";
        function r(e, t) {
            let i = e || 75;
            return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e, t.qualities[0]) : i
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "findClosestQuality", {
                enumerable: !0,
                get: function () {
                    return r
                }
            })
    }
    , 1948, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
        let r = e.r(70965)
            , n = e.r(43369);
        function o({ config: e, src: t, width: i, quality: a }) {
            let l = (0,
                n.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//")) {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let i = new URLSearchParams(t.slice(e + 1))
                        , r = i.get("dpl");
                    if (r) {
                        l = r,
                            i.delete("dpl");
                        let n = i.toString();
                        t = t.slice(0, e) + (n ? "?" + n : "")
                    }
                }
            }
            if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
                throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                    value: "E871",
                    enumerable: !1,
                    configurable: !0
                });
            let s = (0,
                r.findClosestQuality)(a, e);
            return `${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${s}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`
        }
        o.__next_img_default = !0;
        let a = o
    }
    , 85437, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "Image", {
                enumerable: !0,
                get: function () {
                    return x
                }
            });
        let r = e.r(55682)
            , n = e.r(90809)
            , o = e.r(43476)
            , a = n._(e.r(71645))
            , l = r._(e.r(74080))
            , s = r._(e.r(25633))
            , c = e.r(8927)
            , u = e.r(87690)
            , d = e.r(18556);
        e.r(33525);
        let f = e.r(65856)
            , p = r._(e.r(1948))
            , m = e.r(18581)
            , g = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !0,
                unoptimized: !1
            };
        function h(e, t, i, r, n, o, a) {
            let l = e?.src;
            e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
                ("decode" in e ? e.decode() : Promise.resolve()).catch(() => { }
                ).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && n(!0),
                            i?.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1
                                , n = !1;
                            i.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => n,
                                persist: () => { }
                                ,
                                preventDefault: () => {
                                    r = !0,
                                        t.preventDefault()
                                }
                                ,
                                stopPropagation: () => {
                                    n = !0,
                                        t.stopPropagation()
                                }
                            })
                        }
                        r?.current && r.current(e)
                    }
                }
                ))
        }
        function y(e) {
            return a.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let b = (0,
            a.forwardRef)(({ src: e, srcSet: t, sizes: i, height: r, width: n, decoding: l, className: s, style: c, fetchPriority: u, placeholder: d, loading: f, unoptimized: p, fill: g, onLoadRef: b, onLoadingCompleteRef: v, setBlurComplete: x, setShowAltText: S, sizesInput: w, onLoad: _, onError: P, ...j }, C) => {
                let O = (0,
                    a.useCallback)(e => {
                        e && (P && (e.src = e.src),
                            e.complete && h(e, d, b, v, x, p, w))
                    }
                        , [e, d, b, v, x, P, p, w])
                    , E = (0,
                        m.useMergedRef)(C, O);
                return (0,
                    o.jsx)("img", {
                        ...j,
                        ...y(u),
                        loading: f,
                        width: n,
                        height: r,
                        decoding: l,
                        "data-nimg": g ? "fill" : "1",
                        className: s,
                        style: c,
                        sizes: i,
                        srcSet: t,
                        src: e,
                        ref: E,
                        onLoad: e => {
                            h(e.currentTarget, d, b, v, x, p, w)
                        }
                        ,
                        onError: e => {
                            S(!0),
                                "empty" !== d && x(!0),
                                P && P(e)
                        }
                    })
            }
            );
        function v({ isAppRouter: e, imgAttributes: t }) {
            let i = {
                as: "image",
                imageSrcSet: t.srcSet,
                imageSizes: t.sizes,
                crossOrigin: t.crossOrigin,
                referrerPolicy: t.referrerPolicy,
                ...y(t.fetchPriority)
            };
            return e && l.default.preload ? (l.default.preload(t.src, i),
                null) : (0,
                    o.jsx)(s.default, {
                        children: (0,
                            o.jsx)("link", {
                                rel: "preload",
                                href: t.srcSet ? void 0 : t.src,
                                ...i
                            }, "__nimg-" + t.src + t.srcSet + t.sizes)
                    })
        }
        let x = (0,
            a.forwardRef)((e, t) => {
                let i = (0,
                    a.useContext)(f.RouterContext)
                    , r = (0,
                        a.useContext)(d.ImageConfigContext)
                    , n = (0,
                        a.useMemo)(() => {
                            let e = g || r || u.imageConfigDefault
                                , t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t)
                                , i = e.deviceSizes.sort((e, t) => e - t)
                                , n = e.qualities?.sort((e, t) => e - t);
                            return {
                                ...e,
                                allSizes: t,
                                deviceSizes: i,
                                qualities: n,
                                localPatterns: "u" < typeof window ? r?.localPatterns : e.localPatterns
                            }
                        }
                            , [r])
                    , { onLoad: l, onLoadingComplete: s } = e
                    , m = (0,
                        a.useRef)(l);
                (0,
                    a.useEffect)(() => {
                        m.current = l
                    }
                        , [l]);
                let h = (0,
                    a.useRef)(s);
                (0,
                    a.useEffect)(() => {
                        h.current = s
                    }
                        , [s]);
                let [y, x] = (0,
                    a.useState)(!1)
                    , [S, w] = (0,
                        a.useState)(!1)
                    , { props: _, meta: P } = (0,
                        c.getImgProps)(e, {
                            defaultLoader: p.default,
                            imgConf: n,
                            blurComplete: y,
                            showAltText: S
                        });
                return (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                            o.jsx)(b, {
                                ..._,
                                unoptimized: P.unoptimized,
                                placeholder: P.placeholder,
                                fill: P.fill,
                                onLoadRef: m,
                                onLoadingCompleteRef: h,
                                setBlurComplete: x,
                                setShowAltText: w,
                                sizesInput: e.sizes,
                                ref: t
                            }), P.preload ? (0,
                                o.jsx)(v, {
                                    isAppRouter: !i,
                                    imgAttributes: _
                                }) : null]
                    })
            }
            );
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
            Object.assign(i.default, i),
            t.exports = i.default)
    }
    , 94909, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = {
            default: function () {
                return u
            },
            getImageProps: function () {
                return c
            }
        };
        for (var n in r)
            Object.defineProperty(i, n, {
                enumerable: !0,
                get: r[n]
            });
        let o = e.r(55682)
            , a = e.r(8927)
            , l = e.r(85437)
            , s = o._(e.r(1948));
        function c(e) {
            let { props: t } = (0,
                a.getImgProps)(e, {
                    defaultLoader: s.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [32, 48, 64, 96, 128, 256, 384],
                        qualities: [75],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !0,
                        unoptimized: !1
                    }
                });
            for (let [e, i] of Object.entries(t))
                void 0 === i && delete t[e];
            return {
                props: t
            }
        }
        let u = l.Image
    }
    , 57688, (e, t, i) => {
        t.exports = e.r(94909)
    }
    , 55436, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("search", [["path", {
                d: "m21 21-4.34-4.34",
                key: "14j7rj"
            }], ["circle", {
                cx: "11",
                cy: "11",
                r: "8",
                key: "4ej97u"
            }]]);
        e.s(["Search", 0, t], 55436)
    }
    , 30906, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(57688)
            , n = e.i(55436)
            , o = e.i(21742)
            , a = e.i(75157);
        e.s(["default", 0, e => {
            let l, s, c, u, d, f, p, m, g = (0,
                i.c)(36), { icon: h, imageSrc: y, imageClassName: b, imageWrapperClassName: v, title: x, description: S, buttonLabel: w, onButtonClick: _, buttonDisabled: P, buttonStyleClassName: j, buttonIsLoading: C, buttonLoadingText: O, className: E, iconClassName: N, iconInnerClassName: I, titleClassName: R, descriptionClassName: k, removeBackground: M, children: T } = e, A = void 0 === h ? n.Search : h, U = void 0 === b ? "h-20 w-auto" : b, D = void 0 !== P && P, z = void 0 === j ? "button-secondary" : j, G = void 0 !== C && C, L = !(void 0 !== M && M) && "card rounded-extra-sm p-10 px-10 md:px-20";
            return g[0] !== E || g[1] !== L ? (l = (0,
                a.cls)("relative flex flex-col gap-3 items-center justify-center mx-auto w-fit text-center", L, E),
                g[0] = E,
                g[1] = L,
                g[2] = l) : l = g[2],
                g[3] !== A || g[4] !== z || g[5] !== N || g[6] !== I || g[7] !== U || g[8] !== y || g[9] !== v || g[10] !== x ? (s = y ? (0,
                    t.jsx)("div", {
                        className: (0,
                            a.cls)("flex justify-center", v),
                        children: (0,
                            t.jsx)(r.default, {
                                src: y,
                                width: 500,
                                height: 500,
                                className: U,
                                alt: x
                            })
                    }) : (0,
                        t.jsx)("div", {
                            className: (0,
                                a.cls)("relative flex items-center justify-center overflow-hidden h-15 aspect-square rounded-sm", z, N),
                            children: (0,
                                t.jsx)(A, {
                                    className: (0,
                                        a.cls)("relative z-10 h-4/10 w-auto", z?.includes("button-accent") ? "text-white" : "text-black", I),
                                    strokeWidth: 1.25
                                })
                        }),
                    g[3] = A,
                    g[4] = z,
                    g[5] = N,
                    g[6] = I,
                    g[7] = U,
                    g[8] = y,
                    g[9] = v,
                    g[10] = x,
                    g[11] = s) : s = g[11],
                g[12] !== R ? (c = (0,
                    a.cls)("text-lg leading-snug font-medium", R),
                    g[12] = R,
                    g[13] = c) : c = g[13],
                g[14] !== c || g[15] !== x ? (u = (0,
                    t.jsx)("p", {
                        className: c,
                        children: x
                    }),
                    g[14] = c,
                    g[15] = x,
                    g[16] = u) : u = g[16],
                g[17] !== S || g[18] !== k ? (d = S && (0,
                    t.jsx)("p", {
                        className: (0,
                            a.cls)("text-sm text-black/75 leading-snug", k),
                        children: S
                    }),
                    g[17] = S,
                    g[18] = k,
                    g[19] = d) : d = g[19],
                g[20] !== u || g[21] !== d ? (f = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col items-center gap-1 mb-0.5",
                        children: [u, d]
                    }),
                    g[20] = u,
                    g[21] = d,
                    g[22] = f) : f = g[22],
                g[23] !== D || g[24] !== G || g[25] !== w || g[26] !== O || g[27] !== z || g[28] !== _ ? (p = w && _ && (0,
                    t.jsx)(o.default, {
                        styleClassName: z,
                        onClick: _,
                        disabled: D,
                        isLoading: G,
                        loadingText: O,
                        children: w
                    }),
                    g[23] = D,
                    g[24] = G,
                    g[25] = w,
                    g[26] = O,
                    g[27] = z,
                    g[28] = _,
                    g[29] = p) : p = g[29],
                g[30] !== T || g[31] !== f || g[32] !== p || g[33] !== l || g[34] !== s ? (m = (0,
                    t.jsxs)("div", {
                        className: l,
                        children: [s, f, p, T]
                    }),
                    g[30] = T,
                    g[31] = f,
                    g[32] = p,
                    g[33] = l,
                    g[34] = s,
                    g[35] = m) : m = g[35],
                m
        }
        ])
    }
    , 61653, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("circle-alert", [["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }], ["line", {
                x1: "12",
                x2: "12",
                y1: "8",
                y2: "12",
                key: "1pkeuh"
            }], ["line", {
                x1: "12",
                x2: "12.01",
                y1: "16",
                y2: "16",
                key: "4dfq90"
            }]]);
        e.s(["default", 0, t])
    }
    , 63209, e => {
        "use strict";
        var t = e.i(61653);
        e.s(["AlertCircle", () => t.default])
    }
    , 16508, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(71645)
            , n = e.i(18566)
            , o = e.i(38703)
            , a = e.i(63209)
            , l = e.i(21742)
            , s = e.i(85203)
            , c = e.i(30906)
            , u = e.i(75157)
            , d = e.i(86098)
            , f = e.i(75980);
        function p(e) {
            return e.setIsErrorPage
        }
        e.s(["default", 0, e => {
            let m, g, h, y, b, v, x, S, w = (0,
                i.c)(25), { reset: _ } = e, P = (0,
                    n.useRouter)(), j = (0,
                        n.usePathname)(), { isSignedIn: C } = (0,
                            o.useAuth)(), O = (0,
                                d.useUIStore)(p), E = j?.startsWith("/projects/") && j.split("/").length > 2;
            w[0] !== O ? (m = () => (O(!0),
                () => O(!1)),
                g = [O],
                w[0] = O,
                w[1] = m,
                w[2] = g) : (m = w[1],
                    g = w[2]),
                (0,
                    r.useEffect)(m, g),
                w[3] !== _ || w[4] !== P ? (h = () => {
                    (0,
                        r.startTransition)(() => {
                            P.refresh(),
                                _()
                        }
                        )
                }
                    ,
                    w[3] = _,
                    w[4] = P,
                    w[5] = h) : h = w[5];
            let N = h;
            if (C && !E) {
                let e, i, r;
                return w[6] !== P ? (e = (0,
                    t.jsx)(l.default, {
                        onClick: () => P.push("/"),
                        className: "px-8",
                        children: f.UI_STRINGS.errors.route.goHome
                    }),
                    w[6] = P,
                    w[7] = e) : e = w[7],
                    w[8] !== N ? (i = (0,
                        t.jsx)(l.default, {
                            onClick: N,
                            styleClassName: "button-accent",
                            className: "px-8",
                            children: f.UI_STRINGS.errors.route.tryAgain
                        }),
                        w[8] = N,
                        w[9] = i) : i = w[9],
                    w[10] !== e || w[11] !== i ? (r = (0,
                        t.jsx)(s.default, {
                            className: "w-full min-h-full flex-1 flex flex-col items-center justify-center",
                            children: (0,
                                t.jsx)(c.default, {
                                    icon: a.AlertCircle,
                                    title: f.UI_STRINGS.errors.route.title,
                                    description: f.UI_STRINGS.errors.route.description,
                                    removeBackground: !0,
                                    children: (0,
                                        t.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [e, i]
                                        })
                                })
                        }),
                        w[10] = e,
                        w[11] = i,
                        w[12] = r) : r = w[12],
                    r
            }
            let I = C ? "pt-page-padding" : "pt-page-padding-logged-out";
            return w[13] !== I ? (y = (0,
                u.cls)("w-full h-screen flex flex-col items-center justify-center p-5 transition-[padding] duration-300", I),
                w[13] = I,
                w[14] = y) : y = w[14],
                w[15] !== P ? (b = (0,
                    t.jsx)(l.default, {
                        onClick: () => P.push("/"),
                        className: "px-8",
                        children: f.UI_STRINGS.errors.route.goHome
                    }),
                    w[15] = P,
                    w[16] = b) : b = w[16],
                w[17] !== N ? (v = (0,
                    t.jsx)(l.default, {
                        onClick: N,
                        styleClassName: "button-accent",
                        className: "px-8",
                        children: f.UI_STRINGS.errors.route.tryAgain
                    }),
                    w[17] = N,
                    w[18] = v) : v = w[18],
                w[19] !== b || w[20] !== v ? (x = (0,
                    t.jsx)("div", {
                        className: "w-full h-full card rounded flex items-center justify-center",
                        children: (0,
                            t.jsx)(c.default, {
                                icon: a.AlertCircle,
                                title: f.UI_STRINGS.errors.route.title,
                                description: f.UI_STRINGS.errors.route.description,
                                removeBackground: !0,
                                children: (0,
                                    t.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [b, v]
                                    })
                            })
                    }),
                    w[19] = b,
                    w[20] = v,
                    w[21] = x) : x = w[21],
                w[22] !== y || w[23] !== x ? (S = (0,
                    t.jsx)(s.default, {
                        className: y,
                        children: x
                    }),
                    w[22] = y,
                    w[23] = x,
                    w[24] = S) : S = w[24],
                S
        }
        ])
    }
    , 93165, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(16508);
        e.s(["default", 0, function (e) {
            let n, o = (0,
                i.c)(2), { reset: a } = e;
            return o[0] !== a ? (n = (0,
                t.jsx)(r.default, {
                    reset: a
                }),
                o[0] = a,
                o[1] = n) : n = o[1],
                n
        }
        ])
    }
]);
