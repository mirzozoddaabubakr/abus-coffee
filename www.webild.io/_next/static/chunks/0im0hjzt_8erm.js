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
            , a = e.i(75157);
        e.s(["default", 0, e => {
            let n, s, o, l, c, d, u, f, p, m = (0,
                i.c)(16);
            m[0] !== e ? ({ children: n, className: l, animationType: c, style: o, ...s } = e,
                m[0] = e,
                m[1] = n,
                m[2] = s,
                m[3] = o,
                m[4] = l,
                m[5] = c) : (n = m[1],
                    s = m[2],
                    o = m[3],
                    l = m[4],
                    c = m[5]);
            let h = void 0 === l ? "flex flex-col gap-5 w-full h-fit" : l
                , g = void 0 === c ? "full" : c
                , [y, b] = (0,
                    r.useState)("full" === g ? "animation-container" : "animation-container-fade")
                , v = (0,
                    r.useRef)(!1);
            return m[6] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
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
                u = [],
                m[6] = d,
                m[7] = u) : (d = m[6],
                    u = m[7]),
                (0,
                    r.useEffect)(d, u),
                m[8] !== y || m[9] !== h ? (f = (0,
                    a.cls)(h, y),
                    m[8] = y,
                    m[9] = h,
                    m[10] = f) : f = m[10],
                m[11] !== n || m[12] !== s || m[13] !== o || m[14] !== f ? (p = (0,
                    t.jsx)("div", {
                        className: f,
                        style: o,
                        ...s,
                        children: n
                    }),
                    m[11] = n,
                    m[12] = s,
                    m[13] = o,
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
            , a = e.i(75157);
        let n = (0,
            i.forwardRef)(({ children: e, className: i, styleClassName: n = "button-secondary", gradientRoundedClassName: s, type: o = "button", onClick: l, onMouseEnter: c, disabled: d = !1, isLoading: u = !1, loadingText: f }, p) => (0,
                t.jsx)("button", {
                    ref: p,
                    type: o,
                    disabled: d || u,
                    onMouseEnter: c,
                    className: (0,
                        a.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", s, n, i, (d || u) && "opacity-50 select-none pointer-events-none"),
                    onClick: l,
                    children: u ? (0,
                        t.jsxs)("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0,
                                t.jsx)(r.Loader2, {
                                    className: "h-[1em] w-auto animate-spin"
                                }), f ?? e]
                        }) : e
                }));
        n.displayName = "Button",
            e.s(["default", 0, n])
    }
    , 18581, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "useMergedRef", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
        let r = e.r(71645);
        function a(e, t) {
            let i = (0,
                r.useRef)(null)
                , a = (0,
                    r.useRef)(null);
            return (0,
                r.useCallback)(r => {
                    if (null === r) {
                        let e = i.current;
                        e && (i.current = null,
                            e());
                        let t = a.current;
                        t && (a.current = null,
                            t())
                    } else
                        e && (i.current = n(e, r)),
                            t && (a.current = n(t, r))
                }
                    , [e, t])
        }
        function n(e, t) {
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
        function r({ widthInt: e, heightInt: t, blurWidth: i, blurHeight: a, blurDataURL: n, objectFit: s }) {
            let o = i ? 40 * i : e
                , l = a ? 40 * a : t
                , c = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
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
                return n
            },
            imageConfigDefault: function () {
                return s
            }
        };
        for (var a in r)
            Object.defineProperty(i, a, {
                enumerable: !0,
                get: r[a]
            });
        let n = ["default", "imgix", "cloudinary", "akamai", "custom"]
            , s = {
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
            , a = e.r(88143)
            , n = e.r(87690)
            , s = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function o(e) {
            return void 0 !== e.default
        }
        function l(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function c({ src: e, sizes: t, unoptimized: i = !1, priority: d = !1, preload: u = !1, loading: f, className: p, quality: m, width: h, height: g, fill: y = !1, style: b, overrideSrc: v, onLoad: x, onLoadingComplete: w, placeholder: S = "empty", blurDataURL: j, fetchPriority: P, decoding: C = "async", layout: N, objectFit: E, objectPosition: k, lazyBoundary: _, lazyRoot: I, ...R }, M) {
            var O;
            let T, L, A, { imgConf: z, showAltText: G, blurComplete: U, defaultLoader: B } = M, D = z || n.imageConfigDefault;
            if ("allSizes" in D)
                T = D;
            else {
                let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t)
                    , t = D.deviceSizes.sort((e, t) => e - t)
                    , i = D.qualities?.sort((e, t) => e - t);
                T = {
                    ...D,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: i
                }
            }
            if (void 0 === B)
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
            let W = R.loader || B;
            delete R.loader,
                delete R.srcSet;
            let $ = "__next_img_default" in W;
            if ($) {
                if ("custom" === T.loader)
                    throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
            } else {
                let e = W;
                W = t => {
                    let { config: i, ...r } = t;
                    return e(r)
                }
            }
            if (N) {
                "fill" === N && (y = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[N];
                e && (b = {
                    ...b,
                    ...e
                });
                let i = {
                    responsive: "100vw",
                    fill: "100vw"
                }[N];
                i && !t && (t = i)
            }
            let F = ""
                , V = l(h)
                , Y = l(g);
            if ((O = e) && "object" == typeof O && (o(O) || void 0 !== O.src)) {
                let t = o(e) ? e.default : e;
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
                if (L = t.blurWidth,
                    A = t.blurHeight,
                    j = j || t.blurDataURL,
                    F = t.src,
                    !y)
                    if (V || Y) {
                        if (V && !Y) {
                            let e = V / t.width;
                            Y = Math.round(t.height * e)
                        } else if (!V && Y) {
                            let e = Y / t.height;
                            V = Math.round(t.width * e)
                        }
                    } else
                        V = t.width,
                            Y = t.height
            }
            let q = !d && !u && ("lazy" === f || void 0 === f);
            (!(e = "string" == typeof e ? e : F) || e.startsWith("data:") || e.startsWith("blob:")) && (i = !0,
                q = !1),
                T.unoptimized && (i = !0),
                $ && !T.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (i = !0);
            let H = l(m)
                , X = Object.assign(y ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: E,
                    objectPosition: k
                } : {}, G ? {} : {
                    color: "transparent"
                }, b)
                , J = U || "empty" === S ? null : "blur" === S ? `url("data:image/svg+xml;charset=utf-8,${(0,
                    a.getImageBlurSvg)({
                        widthInt: V,
                        heightInt: Y,
                        blurWidth: L,
                        blurHeight: A,
                        blurDataURL: j || "",
                        objectFit: X.objectFit
                    })}")` : `url("${S}")`
                , K = s.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit
                , Q = J ? {
                    backgroundSize: K,
                    backgroundPosition: X.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: J
                } : {}
                , Z = function ({ config: e, src: t, unoptimized: i, width: a, quality: n, sizes: s, loader: o }) {
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
                    let { widths: l, kind: c } = function ({ deviceSizes: e, allSizes: t }, i, r) {
                        if (r) {
                            let i = /(^|\s)(1?\d?\d)vw/g
                                , a = [];
                            for (let e; e = i.exec(r);)
                                a.push(parseInt(e[2]));
                            if (a.length) {
                                let i = .01 * Math.min(...a);
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
                    }(e, a, s)
                        , d = l.length - 1;
                    return {
                        sizes: s || "w" !== c ? s : "100vw",
                        srcSet: l.map((i, r) => `${o({
                            config: e,
                            src: t,
                            quality: n,
                            width: i
                        })} ${"w" === c ? i : r + 1}${c}`).join(", "),
                        src: o({
                            config: e,
                            src: t,
                            quality: n,
                            width: l[d]
                        })
                    }
                }({
                    config: T,
                    src: e,
                    unoptimized: i,
                    width: V,
                    quality: H,
                    sizes: t,
                    loader: W
                })
                , ee = q ? "lazy" : f;
            return {
                props: {
                    ...R,
                    loading: ee,
                    fetchPriority: P,
                    width: V,
                    height: Y,
                    decoding: C,
                    className: p,
                    style: {
                        ...X,
                        ...Q
                    },
                    sizes: Z.sizes,
                    srcSet: Z.srcSet,
                    src: v || Z.src
                },
                meta: {
                    unoptimized: i,
                    preload: u || d,
                    placeholder: S,
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
                    return o
                }
            });
        let r = e.r(71645)
            , a = "u" < typeof window
            , n = a ? () => { }
                : r.useLayoutEffect
            , s = a ? () => { }
                : r.useEffect;
        function o(e) {
            let { headManager: t, reduceComponentsToState: i } = e;
            function o() {
                if (t && t.mountedInstances) {
                    let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(i(e))
                }
            }
            return a && (t?.mountedInstances?.add(e.children),
                o()),
                n(() => (t?.mountedInstances?.add(e.children),
                    () => {
                        t?.mountedInstances?.delete(e.children)
                    }
                )),
                n(() => (t && (t._pendingUpdate = o),
                    () => {
                        t && (t._pendingUpdate = o)
                    }
                )),
                s(() => (t && t._pendingUpdate && (t._pendingUpdate(),
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
                return h
            },
            defaultHead: function () {
                return u
            }
        };
        for (var a in r)
            Object.defineProperty(i, a, {
                enumerable: !0,
                get: r[a]
            });
        let n = e.r(55682)
            , s = e.r(90809)
            , o = e.r(43476)
            , l = s._(e.r(71645))
            , c = n._(e.r(98879))
            , d = e.r(42732);
        function u() {
            return [(0,
                o.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset"), (0,
                    o.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width"
                    }, "viewport")]
        }
        function f(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        e.r(33525);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(e) {
            let t, i, r, a;
            return e.reduce(f, []).reverse().concat(u().reverse()).filter((t = new Set,
                i = new Set,
                r = new Set,
                a = {},
                e => {
                    let n = !0
                        , s = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        s = !0;
                        let i = e.key.slice(e.key.indexOf("$") + 1);
                        t.has(i) ? n = !1 : t.add(i)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            i.has(e.type) ? n = !1 : i.add(e.type);
                            break;
                        case "meta":
                            for (let t = 0, i = p.length; t < i; t++) {
                                let i = p[t];
                                if (e.props.hasOwnProperty(i))
                                    if ("charSet" === i)
                                        r.has(i) ? n = !1 : r.add(i);
                                    else {
                                        let t = e.props[i]
                                            , r = a[i] || new Set;
                                        ("name" !== i || !s) && r.has(t) ? n = !1 : (r.add(t),
                                            a[i] = r)
                                    }
                            }
                    }
                    return n
                }
            )).reverse().map((e, t) => {
                let i = e.key || t;
                return l.default.cloneElement(e, {
                    key: i
                })
            }
            )
        }
        let h = function ({ children: e }) {
            let t = (0,
                l.useContext)(d.HeadManagerContext);
            return (0,
                o.jsx)(c.default, {
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
                    return n
                }
            });
        let r = e.r(55682)._(e.r(71645))
            , a = e.r(87690)
            , n = r.default.createContext(a.imageConfigDefault)
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
                    return s
                }
            });
        let r = e.r(70965)
            , a = e.r(43369);
        function n({ config: e, src: t, width: i, quality: s }) {
            let o = (0,
                a.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//")) {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let i = new URLSearchParams(t.slice(e + 1))
                        , r = i.get("dpl");
                    if (r) {
                        o = r,
                            i.delete("dpl");
                        let a = i.toString();
                        t = t.slice(0, e) + (a ? "?" + a : "")
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
            let l = (0,
                r.findClosestQuality)(s, e);
            return `${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${l}${t.startsWith("/") && o ? `&dpl=${o}` : ""}`
        }
        n.__next_img_default = !0;
        let s = n
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
            , a = e.r(90809)
            , n = e.r(43476)
            , s = a._(e.r(71645))
            , o = r._(e.r(74080))
            , l = r._(e.r(25633))
            , c = e.r(8927)
            , d = e.r(87690)
            , u = e.r(18556);
        e.r(33525);
        let f = e.r(65856)
            , p = r._(e.r(1948))
            , m = e.r(18581)
            , h = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !0,
                unoptimized: !1
            };
        function g(e, t, i, r, a, n, s) {
            let o = e?.src;
            e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o,
                ("decode" in e ? e.decode() : Promise.resolve()).catch(() => { }
                ).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && a(!0),
                            i?.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1
                                , a = !1;
                            i.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => a,
                                persist: () => { }
                                ,
                                preventDefault: () => {
                                    r = !0,
                                        t.preventDefault()
                                }
                                ,
                                stopPropagation: () => {
                                    a = !0,
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
            return s.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let b = (0,
            s.forwardRef)(({ src: e, srcSet: t, sizes: i, height: r, width: a, decoding: o, className: l, style: c, fetchPriority: d, placeholder: u, loading: f, unoptimized: p, fill: h, onLoadRef: b, onLoadingCompleteRef: v, setBlurComplete: x, setShowAltText: w, sizesInput: S, onLoad: j, onError: P, ...C }, N) => {
                let E = (0,
                    s.useCallback)(e => {
                        e && (P && (e.src = e.src),
                            e.complete && g(e, u, b, v, x, p, S))
                    }
                        , [e, u, b, v, x, P, p, S])
                    , k = (0,
                        m.useMergedRef)(N, E);
                return (0,
                    n.jsx)("img", {
                        ...C,
                        ...y(d),
                        loading: f,
                        width: a,
                        height: r,
                        decoding: o,
                        "data-nimg": h ? "fill" : "1",
                        className: l,
                        style: c,
                        sizes: i,
                        srcSet: t,
                        src: e,
                        ref: k,
                        onLoad: e => {
                            g(e.currentTarget, u, b, v, x, p, S)
                        }
                        ,
                        onError: e => {
                            w(!0),
                                "empty" !== u && x(!0),
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
            return e && o.default.preload ? (o.default.preload(t.src, i),
                null) : (0,
                    n.jsx)(l.default, {
                        children: (0,
                            n.jsx)("link", {
                                rel: "preload",
                                href: t.srcSet ? void 0 : t.src,
                                ...i
                            }, "__nimg-" + t.src + t.srcSet + t.sizes)
                    })
        }
        let x = (0,
            s.forwardRef)((e, t) => {
                let i = (0,
                    s.useContext)(f.RouterContext)
                    , r = (0,
                        s.useContext)(u.ImageConfigContext)
                    , a = (0,
                        s.useMemo)(() => {
                            let e = h || r || d.imageConfigDefault
                                , t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t)
                                , i = e.deviceSizes.sort((e, t) => e - t)
                                , a = e.qualities?.sort((e, t) => e - t);
                            return {
                                ...e,
                                allSizes: t,
                                deviceSizes: i,
                                qualities: a,
                                localPatterns: "u" < typeof window ? r?.localPatterns : e.localPatterns
                            }
                        }
                            , [r])
                    , { onLoad: o, onLoadingComplete: l } = e
                    , m = (0,
                        s.useRef)(o);
                (0,
                    s.useEffect)(() => {
                        m.current = o
                    }
                        , [o]);
                let g = (0,
                    s.useRef)(l);
                (0,
                    s.useEffect)(() => {
                        g.current = l
                    }
                        , [l]);
                let [y, x] = (0,
                    s.useState)(!1)
                    , [w, S] = (0,
                        s.useState)(!1)
                    , { props: j, meta: P } = (0,
                        c.getImgProps)(e, {
                            defaultLoader: p.default,
                            imgConf: a,
                            blurComplete: y,
                            showAltText: w
                        });
                return (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                            n.jsx)(b, {
                                ...j,
                                unoptimized: P.unoptimized,
                                placeholder: P.placeholder,
                                fill: P.fill,
                                onLoadRef: m,
                                onLoadingCompleteRef: g,
                                setBlurComplete: x,
                                setShowAltText: S,
                                sizesInput: e.sizes,
                                ref: t
                            }), P.preload ? (0,
                                n.jsx)(v, {
                                    isAppRouter: !i,
                                    imgAttributes: j
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
                return d
            },
            getImageProps: function () {
                return c
            }
        };
        for (var a in r)
            Object.defineProperty(i, a, {
                enumerable: !0,
                get: r[a]
            });
        let n = e.r(55682)
            , s = e.r(8927)
            , o = e.r(85437)
            , l = n._(e.r(1948));
        function c(e) {
            let { props: t } = (0,
                s.getImgProps)(e, {
                    defaultLoader: l.default,
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
        let d = o.Image
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
            , a = e.i(55436)
            , n = e.i(21742)
            , s = e.i(75157);
        e.s(["default", 0, e => {
            let o, l, c, d, u, f, p, m, h = (0,
                i.c)(36), { icon: g, imageSrc: y, imageClassName: b, imageWrapperClassName: v, title: x, description: w, buttonLabel: S, onButtonClick: j, buttonDisabled: P, buttonStyleClassName: C, buttonIsLoading: N, buttonLoadingText: E, className: k, iconClassName: _, iconInnerClassName: I, titleClassName: R, descriptionClassName: M, removeBackground: O, children: T } = e, L = void 0 === g ? a.Search : g, A = void 0 === b ? "h-20 w-auto" : b, z = void 0 !== P && P, G = void 0 === C ? "button-secondary" : C, U = void 0 !== N && N, B = !(void 0 !== O && O) && "card rounded-extra-sm p-10 px-10 md:px-20";
            return h[0] !== k || h[1] !== B ? (o = (0,
                s.cls)("relative flex flex-col gap-3 items-center justify-center mx-auto w-fit text-center", B, k),
                h[0] = k,
                h[1] = B,
                h[2] = o) : o = h[2],
                h[3] !== L || h[4] !== G || h[5] !== _ || h[6] !== I || h[7] !== A || h[8] !== y || h[9] !== v || h[10] !== x ? (l = y ? (0,
                    t.jsx)("div", {
                        className: (0,
                            s.cls)("flex justify-center", v),
                        children: (0,
                            t.jsx)(r.default, {
                                src: y,
                                width: 500,
                                height: 500,
                                className: A,
                                alt: x
                            })
                    }) : (0,
                        t.jsx)("div", {
                            className: (0,
                                s.cls)("relative flex items-center justify-center overflow-hidden h-15 aspect-square rounded-sm", G, _),
                            children: (0,
                                t.jsx)(L, {
                                    className: (0,
                                        s.cls)("relative z-10 h-4/10 w-auto", G?.includes("button-accent") ? "text-white" : "text-black", I),
                                    strokeWidth: 1.25
                                })
                        }),
                    h[3] = L,
                    h[4] = G,
                    h[5] = _,
                    h[6] = I,
                    h[7] = A,
                    h[8] = y,
                    h[9] = v,
                    h[10] = x,
                    h[11] = l) : l = h[11],
                h[12] !== R ? (c = (0,
                    s.cls)("text-lg leading-snug font-medium", R),
                    h[12] = R,
                    h[13] = c) : c = h[13],
                h[14] !== c || h[15] !== x ? (d = (0,
                    t.jsx)("p", {
                        className: c,
                        children: x
                    }),
                    h[14] = c,
                    h[15] = x,
                    h[16] = d) : d = h[16],
                h[17] !== w || h[18] !== M ? (u = w && (0,
                    t.jsx)("p", {
                        className: (0,
                            s.cls)("text-sm text-black/75 leading-snug", M),
                        children: w
                    }),
                    h[17] = w,
                    h[18] = M,
                    h[19] = u) : u = h[19],
                h[20] !== d || h[21] !== u ? (f = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col items-center gap-1 mb-0.5",
                        children: [d, u]
                    }),
                    h[20] = d,
                    h[21] = u,
                    h[22] = f) : f = h[22],
                h[23] !== z || h[24] !== U || h[25] !== S || h[26] !== E || h[27] !== G || h[28] !== j ? (p = S && j && (0,
                    t.jsx)(n.default, {
                        styleClassName: G,
                        onClick: j,
                        disabled: z,
                        isLoading: U,
                        loadingText: E,
                        children: S
                    }),
                    h[23] = z,
                    h[24] = U,
                    h[25] = S,
                    h[26] = E,
                    h[27] = G,
                    h[28] = j,
                    h[29] = p) : p = h[29],
                h[30] !== T || h[31] !== f || h[32] !== p || h[33] !== o || h[34] !== l ? (m = (0,
                    t.jsxs)("div", {
                        className: o,
                        children: [l, f, p, T]
                    }),
                    h[30] = T,
                    h[31] = f,
                    h[32] = p,
                    h[33] = o,
                    h[34] = l,
                    h[35] = m) : m = h[35],
                m
        }
        ])
    }
    , 37727, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("x", [["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }], ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]]);
        e.s(["X", 0, t], 37727)
    }
    , 30776, 88653, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932);
        e.i(47167);
        var r = e.i(71645)
            , a = e.i(31178)
            , n = e.i(47414)
            , s = e.i(74008)
            , o = e.i(21476)
            , l = e.i(72846)
            , c = r
            , d = e.i(37806);
        function u(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        class f extends c.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.childRef.current;
                if ((0,
                    l.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                    let e = t.offsetParent
                        , i = (0,
                            l.isHTMLElement)(e) && e.offsetWidth || 0
                        , r = (0,
                            l.isHTMLElement)(e) && e.offsetHeight || 0
                        , a = getComputedStyle(t)
                        , n = this.props.sizeRef.current;
                    n.height = parseFloat(a.height),
                        n.width = parseFloat(a.width),
                        n.top = t.offsetTop,
                        n.left = t.offsetLeft,
                        n.right = i - n.width - n.left,
                        n.bottom = r - n.height - n.top
                }
                return null
            }
            componentDidUpdate() { }
            render() {
                return this.props.children
            }
        }
        function p({ children: e, isPresent: i, anchorX: a, anchorY: n, root: s, pop: o }) {
            let l = (0,
                c.useId)()
                , m = (0,
                    c.useRef)(null)
                , h = (0,
                    c.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    })
                , { nonce: g } = (0,
                    c.useContext)(d.MotionConfigContext)
                , y = function (...e) {
                    return r.useCallback(function (...e) {
                        return t => {
                            let i = !1
                                , r = e.map(e => {
                                    let r = u(e, t);
                                    return i || "function" != typeof r || (i = !0),
                                        r
                                }
                                );
                            if (i)
                                return () => {
                                    for (let t = 0; t < r.length; t++) {
                                        let i = r[t];
                                        "function" == typeof i ? i() : u(e[t], null)
                                    }
                                }
                        }
                    }(...e), e)
                }(m, e.props?.ref ?? e?.ref);
            return (0,
                c.useInsertionEffect)(() => {
                    let { width: e, height: t, top: r, left: c, right: d, bottom: u } = h.current;
                    if (i || !1 === o || !m.current || !e || !t)
                        return;
                    let f = "left" === a ? `left: ${c}` : `right: ${d}`
                        , p = "bottom" === n ? `bottom: ${u}` : `top: ${r}`;
                    m.current.dataset.motionPopId = l;
                    let y = document.createElement("style");
                    g && (y.nonce = g);
                    let b = s ?? document.head;
                    return b.appendChild(y),
                        y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${f}px !important;
            ${p}px !important;
          }
        `),
                        () => {
                            m.current?.removeAttribute("data-motion-pop-id"),
                                b.contains(y) && b.removeChild(y)
                        }
                }
                    , [i]),
                (0,
                    t.jsx)(f, {
                        isPresent: i,
                        childRef: m,
                        sizeRef: h,
                        pop: o,
                        children: !1 === o ? e : c.cloneElement(e, {
                            ref: y
                        })
                    })
        }
        let m = ({ children: e, initial: i, isPresent: a, onExitComplete: s, custom: l, presenceAffectsLayout: c, mode: d, anchorX: u, anchorY: f, root: m }) => {
            let g = (0,
                n.useConstant)(h)
                , y = (0,
                    r.useId)()
                , b = !0
                , v = (0,
                    r.useMemo)(() => (b = !1,
                    {
                        id: y,
                        initial: i,
                        isPresent: a,
                        custom: l,
                        onExitComplete: e => {
                            for (let t of (g.set(e, !0),
                                g.values()))
                                if (!t)
                                    return;
                            s && s()
                        }
                        ,
                        register: e => (g.set(e, !1),
                            () => g.delete(e))
                    }), [a, g, s]);
            return c && b && (v = {
                ...v
            }),
                (0,
                    r.useMemo)(() => {
                        g.forEach((e, t) => g.set(t, !1))
                    }
                        , [a]),
                r.useEffect(() => {
                    a || g.size || !s || s()
                }
                    , [a]),
                e = (0,
                    t.jsx)(p, {
                        pop: "popLayout" === d,
                        isPresent: a,
                        anchorX: u,
                        anchorY: f,
                        root: m,
                        children: e
                    }),
                (0,
                    t.jsx)(o.PresenceContext.Provider, {
                        value: v,
                        children: e
                    })
        }
            ;
        function h() {
            return new Map
        }
        var g = e.i(64978);
        let y = e => e.key || "";
        function b(e) {
            let t = [];
            return r.Children.forEach(e, e => {
                (0,
                    r.isValidElement)(e) && t.push(e)
            }
            ),
                t
        }
        let v = ({ children: e, custom: i, initial: o = !0, onExitComplete: l, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: u = !1, anchorX: f = "left", anchorY: p = "top", root: h }) => {
            let [v, x] = (0,
                g.usePresence)(u)
                , w = (0,
                    r.useMemo)(() => b(e), [e])
                , S = u && !v ? [] : w.map(y)
                , j = (0,
                    r.useRef)(!0)
                , P = (0,
                    r.useRef)(w)
                , C = (0,
                    n.useConstant)(() => new Map)
                , N = (0,
                    r.useRef)(new Set)
                , [E, k] = (0,
                    r.useState)(w)
                , [_, I] = (0,
                    r.useState)(w);
            (0,
                s.useIsomorphicLayoutEffect)(() => {
                    j.current = !1,
                        P.current = w;
                    for (let e = 0; e < _.length; e++) {
                        let t = y(_[e]);
                        S.includes(t) ? (C.delete(t),
                            N.current.delete(t)) : !0 !== C.get(t) && C.set(t, !1)
                    }
                }
                    , [_, S.length, S.join("-")]);
            let R = [];
            if (w !== E) {
                let e = [...w];
                for (let t = 0; t < _.length; t++) {
                    let i = _[t]
                        , r = y(i);
                    S.includes(r) || (e.splice(t, 0, i),
                        R.push(i))
                }
                return "wait" === d && R.length && (e = R),
                    I(b(e)),
                    k(w),
                    null
            }
            let { forceRender: M } = (0,
                r.useContext)(a.LayoutGroupContext);
            return (0,
                t.jsx)(t.Fragment, {
                    children: _.map(e => {
                        let r = y(e)
                            , a = (!u || !!v) && (w === _ || S.includes(r));
                        return (0,
                            t.jsx)(m, {
                                isPresent: a,
                                initial: (!j.current || !!o) && void 0,
                                custom: i,
                                presenceAffectsLayout: c,
                                mode: d,
                                root: h,
                                onExitComplete: a ? void 0 : () => {
                                    if (N.current.has(r) || !C.has(r))
                                        return;
                                    N.current.add(r),
                                        C.set(r, !0);
                                    let e = !0;
                                    C.forEach(t => {
                                        t || (e = !1)
                                    }
                                    ),
                                        e && (M?.(),
                                            I(P.current),
                                            u && x?.(),
                                            l && l())
                                }
                                ,
                                anchorX: f,
                                anchorY: p,
                                children: e
                            }, r)
                    }
                    )
                })
        }
            ;
        e.s(["AnimatePresence", 0, v], 88653);
        var x = e.i(46932);
        let w = {
            fade: {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                }
            },
            "fade-scale": {
                initial: {
                    opacity: 0,
                    scale: .95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .95
                }
            }
        };
        e.s(["default", 0, e => {
            let r, a, n = (0,
                i.c)(21), { isVisible: s, children: o, className: l, style: c, duration: d, variant: u, keepMounted: f } = e, p = void 0 === d ? .2 : d, m = void 0 === u ? "fade" : u;
            if (void 0 !== f && f) {
                let e, i, r, a = s ? w[m].animate : w[m].exit;
                n[0] !== p ? (e = {
                    duration: p
                },
                    n[0] = p,
                    n[1] = e) : e = n[1];
                let d = s ? "auto" : "none"
                    , u = s ? "visible" : "hidden";
                return n[2] !== c || n[3] !== d || n[4] !== u ? (i = {
                    ...c,
                    pointerEvents: d,
                    visibility: u
                },
                    n[2] = c,
                    n[3] = d,
                    n[4] = u,
                    n[5] = i) : i = n[5],
                    n[6] !== o || n[7] !== l || n[8] !== a || n[9] !== e || n[10] !== i ? (r = (0,
                        t.jsx)(x.motion.div, {
                            initial: !1,
                            animate: a,
                            transition: e,
                            className: l,
                            style: i,
                            children: o
                        }),
                        n[6] = o,
                        n[7] = l,
                        n[8] = a,
                        n[9] = e,
                        n[10] = i,
                        n[11] = r) : r = n[11],
                    r
            }
            return n[12] !== o || n[13] !== l || n[14] !== p || n[15] !== s || n[16] !== c || n[17] !== m ? (r = s && (0,
                t.jsx)(x.motion.div, {
                    ...w[m],
                    transition: {
                        duration: p
                    },
                    className: l,
                    style: c,
                    children: o
                }),
                n[12] = o,
                n[13] = l,
                n[14] = p,
                n[15] = s,
                n[16] = c,
                n[17] = m,
                n[18] = r) : r = n[18],
                n[19] !== r ? (a = (0,
                    t.jsx)(v, {
                        children: r
                    }),
                    n[19] = r,
                    n[20] = a) : a = n[20],
                a
        }
        ], 30776)
    }
    , 15619, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(71645)
            , a = e.i(74080);
        e.s(["default", 0, e => {
            let n, s, o, l, c = (0,
                i.c)(9), { children: d, container: u, id: f, className: p } = e, [m, h] = (0,
                    r.useState)(!1), g = u ?? ("u" > typeof document ? document.body : null);
            if (c[0] === Symbol.for("react.memo_cache_sentinel") ? (n = () => (h(!0),
                () => h(!1)),
                s = [],
                c[0] = n,
                c[1] = s) : (n = c[0],
                    s = c[1]),
                (0,
                    r.useEffect)(n, s),
                !m || !g)
                return null;
            c[2] !== d || c[3] !== p || c[4] !== f ? (o = p || f ? (0,
                t.jsx)("div", {
                    id: f,
                    className: p,
                    children: d
                }) : d,
                c[2] = d,
                c[3] = p,
                c[4] = f,
                c[5] = o) : o = c[5];
            let y = o;
            return c[6] !== y || c[7] !== g ? (l = (0,
                a.createPortal)(y, g),
                c[6] = y,
                c[7] = g,
                c[8] = l) : l = c[8],
                l
        }
        ])
    }
    , 67082, 15446, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(71645)
            , a = e.i(15619)
            , n = e.i(30776);
        let s = e => {
            let t, a, n = (0,
                i.c)(3);
            n[0] !== e ? (t = () => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "",
                o),
                a = [e],
                n[0] = e,
                n[1] = t,
                n[2] = a) : (t = n[1],
                    a = n[2]),
                (0,
                    r.useEffect)(t, a)
        }
            ;
        function o() {
            document.body.style.overflow = ""
        }
        e.s(["useBodyScrollLock", 0, s], 15446);
        var l = e.i(75157);
        function c(e) {
            return e.stopPropagation()
        }
        e.s(["default", 0, e => {
            let o, d, u, f, p, m, h, g, y, b = (0,
                i.c)(26), { isVisible: v, onClose: x, children: w, zIndexClass: S, backdropClassName: j, closeOnEscape: P, lockScroll: C, container: N, contentClassName: E, overlayOnClickClose: k } = e, _ = void 0 === S ? "z-200" : S, I = void 0 === P || P;
            s((void 0 === C || C) && v),
                b[0] !== I || b[1] !== v || b[2] !== x ? (o = () => {
                    if (!v || !I)
                        return;
                    let e = e => {
                        "Escape" === e.key && x()
                    }
                        ;
                    return document.addEventListener("keydown", e),
                        () => document.removeEventListener("keydown", e)
                }
                    ,
                    d = [v, I, x],
                    b[0] = I,
                    b[1] = v,
                    b[2] = x,
                    b[3] = o,
                    b[4] = d) : (o = b[3],
                        d = b[4]),
                (0,
                    r.useEffect)(o, d),
                b[5] !== j || b[6] !== _ ? (u = (0,
                    l.cls)("fixed flex items-center justify-center top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm", _, j),
                    b[5] = j,
                    b[6] = _,
                    b[7] = u) : u = b[7];
            let R = void 0 === k || k ? x : void 0;
            return b[8] !== R ? (f = (0,
                t.jsx)("div", {
                    onClick: R,
                    className: "absolute inset-0",
                    role: "dialog",
                    "aria-modal": "true"
                }),
                b[8] = R,
                b[9] = f) : f = b[9],
                b[10] !== E ? (p = (0,
                    l.cls)("relative", E),
                    b[10] = E,
                    b[11] = p) : p = b[11],
                b[12] !== w ? (m = (0,
                    t.jsx)("div", {
                        onClick: c,
                        className: "contents",
                        children: w
                    }),
                    b[12] = w,
                    b[13] = m) : m = b[13],
                b[14] !== v || b[15] !== p || b[16] !== m ? (h = (0,
                    t.jsx)(n.default, {
                        isVisible: v,
                        variant: "fade-scale",
                        className: p,
                        children: m
                    }),
                    b[14] = v,
                    b[15] = p,
                    b[16] = m,
                    b[17] = h) : h = b[17],
                b[18] !== v || b[19] !== h || b[20] !== u || b[21] !== f ? (g = (0,
                    t.jsxs)(n.default, {
                        isVisible: v,
                        className: u,
                        children: [f, h]
                    }),
                    b[18] = v,
                    b[19] = h,
                    b[20] = u,
                    b[21] = f,
                    b[22] = g) : g = b[22],
                b[23] !== N || b[24] !== g ? (y = (0,
                    t.jsx)(a.default, {
                        container: N,
                        children: g
                    }),
                    b[23] = N,
                    b[24] = g,
                    b[25] = y) : y = b[25],
                y
        }
        ], 67082)
    }
    , 86536, 77705, e => {
        "use strict";
        var t = e.i(75254);
        let i = (0,
            t.default)("eye", [["path", {
                d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
                key: "1nclc0"
            }], ["circle", {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }]]);
        e.s(["Eye", 0, i], 86536);
        let r = (0,
            t.default)("eye-off", [["path", {
                d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
                key: "ct8e1f"
            }], ["path", {
                d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
                key: "151rxh"
            }], ["path", {
                d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
                key: "13bj9a"
            }], ["path", {
                d: "m2 2 20 20",
                key: "1ooewy"
            }]]);
        e.s(["EyeOff", 0, r], 77705)
    }
    , 52571, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("info", [["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }], ["path", {
                d: "M12 16v-4",
                key: "1dtifu"
            }], ["path", {
                d: "M12 8h.01",
                key: "e9boi3"
            }]]);
        e.s(["Info", 0, t], 52571)
    }
    , 14283, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(71645)
            , a = e.i(52571)
            , n = e.i(75157);
        e.s(["default", 0, e => {
            let s, o, l, c, d, u, f, p, m, h, g, y, b, v, x = (0,
                i.c)(58), { label: w, tooltip: S, tooltipPosition: j, tooltipVerticalPosition: P, tooltipMultiLine: C, className: N, tooltipClassName: E, labelClassName: k } = e, _ = void 0 === j ? "right" : j, I = void 0 !== C && C, [R, M] = (0,
                    r.useState)(!1), O = S ? R ? "opacity-100" : "opacity-0" : "opacity-0 pointer-events-none select-none", T = S ? "text-black cursor-pointer" : "opacity-0 pointer-events-none";
            x[0] !== T ? (s = (0,
                n.cls)("h-(--text-sm) w-(--text-sm) shrink-0", T),
                x[0] = T,
                x[1] = s) : s = x[1],
                x[2] !== S ? (o = S ? () => M(!0) : void 0,
                    x[2] = S,
                    x[3] = o) : o = x[3],
                x[4] !== S ? (l = S ? () => M(!1) : void 0,
                    x[4] = S,
                    x[5] = l) : l = x[5],
                x[6] !== s || x[7] !== o || x[8] !== l ? (c = (0,
                    t.jsx)(a.Info, {
                        className: s,
                        onMouseEnter: o,
                        onMouseLeave: l
                    }),
                    x[6] = s,
                    x[7] = o,
                    x[8] = l,
                    x[9] = c) : c = x[9];
            let L = c
                , A = I && "leading-snug";
            x[10] !== k || x[11] !== A ? (d = (0,
                n.cls)("block text-sm font-medium text-black text-nowrap truncate", A, k),
                x[10] = k,
                x[11] = A,
                x[12] = d) : d = x[12],
                x[13] !== w || x[14] !== d ? (u = (0,
                    t.jsx)("label", {
                        className: d,
                        children: w
                    }),
                    x[13] = w,
                    x[14] = d,
                    x[15] = u) : u = x[15];
            let z = u
                , G = "left" === _ ? "right-1" : "left-2";
            x[16] !== G || x[17] !== E || x[18] !== O ? (f = (0,
                n.cls)("absolute min-w-0 w-fit max-w-full pointer-events-none top-0 px-3 py-1 text-xs text-white button-tooltip rounded-max-sm truncate whitespace-nowrap transition-opacity duration-300", G, O, E),
                x[16] = G,
                x[17] = E,
                x[18] = O,
                x[19] = f) : f = x[19];
            let U = S || "tooltip";
            x[20] !== f || x[21] !== U ? (p = (0,
                t.jsx)("div", {
                    className: f,
                    children: U
                }),
                x[20] = f,
                x[21] = U,
                x[22] = p) : p = x[22];
            let B = p
                , D = "below" === (void 0 === P ? "above" : P) ? "top-[calc(var(--text-sm)*1.25+var(--spacing))]" : "bottom-[calc(var(--text-sm)*1.25+var(--spacing))]";
            x[23] !== D || x[24] !== E || x[25] !== O ? (m = (0,
                n.cls)("absolute! w-fit max-w-full px-3 py-1 text-xs text-white button-tooltip rounded-max-sm transition-opacity duration-300 pointer-events-none", D, O, E),
                x[23] = D,
                x[24] = E,
                x[25] = O,
                x[26] = m) : m = x[26];
            let W = S || "tooltip";
            x[27] !== m || x[28] !== W ? (h = (0,
                t.jsx)("div", {
                    className: m,
                    children: W
                }),
                x[27] = m,
                x[28] = W,
                x[29] = h) : h = x[29];
            let $ = h
                , F = !I && "relative";
            x[30] !== N || x[31] !== F ? (g = (0,
                n.cls)("z-10 flex items-center gap-1 mb-2 w-full min-w-0", F, N),
                x[30] = N,
                x[31] = F,
                x[32] = g) : g = x[32];
            let V = g;
            if (I) {
                let e, i, r;
                return x[33] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                    t.jsx)("div", {
                        className: "relative inline-flex flex-1 items-center w-0! min-w-0",
                        children: (0,
                            t.jsx)("div", {
                                className: "absolute min-w-0 w-fit max-w-full left-2 top-0 px-3 py-1 text-xs text-white button-tooltip rounded-max-sm truncate whitespace-nowrap transition-opacity duration-300 opacity-0 pointer-events-none select-none",
                                children: "tooltip"
                            })
                    }),
                    x[33] = e) : e = x[33],
                    x[34] !== L || x[35] !== z || x[36] !== $ ? (i = (0,
                        t.jsxs)("div", {
                            className: "relative flex items-center gap-1 w-full",
                            children: [$, z, L, e]
                        }),
                        x[34] = L,
                        x[35] = z,
                        x[36] = $,
                        x[37] = i) : i = x[37],
                    x[38] !== i || x[39] !== V ? (r = (0,
                        t.jsx)("div", {
                            className: V,
                            children: i
                        }),
                        x[38] = i,
                        x[39] = V,
                        x[40] = r) : r = x[40],
                    r
            }
            if ("left" === _) {
                let e, i;
                return x[41] !== B ? (e = (0,
                    t.jsx)("div", {
                        className: "relative inline-flex flex-1 items-center min-w-0",
                        children: B
                    }),
                    x[41] = B,
                    x[42] = e) : e = x[42],
                    x[43] !== L || x[44] !== z || x[45] !== e || x[46] !== V ? (i = (0,
                        t.jsxs)("div", {
                            className: V,
                            children: [e, z, L]
                        }),
                        x[43] = L,
                        x[44] = z,
                        x[45] = e,
                        x[46] = V,
                        x[47] = i) : i = x[47],
                    i
            }
            let Y = !S && "w-0!";
            return x[48] !== Y ? (y = (0,
                n.cls)("relative inline-flex flex-1 items-center min-w-0", Y),
                x[48] = Y,
                x[49] = y) : y = x[49],
                x[50] !== L || x[51] !== y || x[52] !== B ? (b = (0,
                    t.jsxs)("div", {
                        className: y,
                        children: [L, B]
                    }),
                    x[50] = L,
                    x[51] = y,
                    x[52] = B,
                    x[53] = b) : b = x[53],
                x[54] !== z || x[55] !== b || x[56] !== V ? (v = (0,
                    t.jsxs)("div", {
                        className: V,
                        children: [z, b]
                    }),
                    x[54] = z,
                    x[55] = b,
                    x[56] = V,
                    x[57] = v) : v = x[57],
                v
        }
        ])
    }
    , 16366, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(71645)
            , r = e.i(86536)
            , a = e.i(77705)
            , n = e.i(30776)
            , s = e.i(14283)
            , o = e.i(75157);
        let l = (0,
            i.forwardRef)(({ value: e, onChange: i, type: l = "text", placeholder: c, label: d, tooltip: u, tooltipMultiLine: f, className: p, inputClassName: m, styleClassName: h = "card", disabled: g = !1, readOnly: y = !1, showPassword: b, onTogglePassword: v, onKeyDown: x, onBlur: w, onFocus: S, error: j = !1 }, P) => {
                let C = "password" === l && void 0 !== v
                    , N = C && b ? "text" : l;
                return (0,
                    t.jsxs)("div", {
                        className: p,
                        children: [d && (0,
                            t.jsx)(s.default, {
                                label: d,
                                tooltip: u,
                                tooltipMultiLine: f
                            }), (0,
                                t.jsxs)("div", {
                                    className: (0,
                                        o.cls)("relative w-full rounded-extra-sm transition-[outline] duration-300", h, j && "outline outline-red-100!"),
                                    children: [(0,
                                        t.jsx)("input", {
                                            ref: P,
                                            type: N,
                                            value: e,
                                            onChange: i ? e => i(e.target.value) : void 0,
                                            onKeyDown: x,
                                            onBlur: w,
                                            onFocus: S,
                                            placeholder: c,
                                            disabled: g,
                                            readOnly: y,
                                            className: (0,
                                                o.cls)("p-3 w-full text-sm text-black placeholder:text-black/75 focus:outline-none focus:border-none", C && "pr-10", m)
                                        }), C && (0,
                                            t.jsxs)("button", {
                                                type: "button",
                                                onClick: v,
                                                className: "absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-black/75 h-(--text-sm) w-auto aspect-square",
                                                children: [(0,
                                                    t.jsx)(n.default, {
                                                        isVisible: !b,
                                                        className: "absolute! inset-0 flex items-center justify-center",
                                                        children: (0,
                                                            t.jsx)(r.Eye, {
                                                                className: "h-full w-auto"
                                                            })
                                                    }), (0,
                                                        t.jsx)(n.default, {
                                                            isVisible: !!b,
                                                            className: "absolute! inset-0 flex items-center justify-center",
                                                            children: (0,
                                                                t.jsx)(a.EyeOff, {
                                                                    className: "h-full w-auto"
                                                                })
                                                        })]
                                            })]
                                })]
                    })
            }
            );
        l.displayName = "LabeledInput",
            e.s(["default", 0, l])
    }
    , 98031, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("circle-x", [["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }], ["path", {
                d: "m15 9-6 6",
                key: "1uzhvr"
            }], ["path", {
                d: "m9 9 6 6",
                key: "z0biqf"
            }]]);
        e.s(["default", 0, t])
    }
    , 64160, e => {
        "use strict";
        e.s(["PREVIEW_STRINGS", 0, {
            domainSection: {
                isAvailable: "is available!",
                getYourDomain: "Get Your Domain"
            },
            pageSelector: {
                loading: "Loading",
                noPages: "No pages found",
                tooltip: "Switch and manage site pages",
                manageButton: "Manage",
                addPageButton: "Add Page"
            },
            loadingRecommendation: {
                title: "Don't leave this tab",
                generationTime: "Generation usually takes 3-4 minutes",
                bobAvatarAlt: "Bob Avatar"
            },
            toolbar: {
                tooltips: {
                    edit: "Edit text, images, colors, fonts, and layouts",
                    undoRedo: "Undo and redo changes made to the page",
                    deviceSwitch: "Switch between desktop and mobile",
                    imageGeneration: "Generate images with AI",
                    fonts: "Change site fonts",
                    colors: "Change color palette",
                    layouts: "Add layouts and sections",
                    uploadImage: "Upload image from your device",
                    share: "Share your site",
                    publish: "Publish your site",
                    versionHistory: "Version history"
                },
                buttons: {
                    saving: "Saving",
                    save: "Save",
                    cancel: "Cancel",
                    close: "Close",
                    customize: "Visual edit",
                    imageGeneration: "Image Generation",
                    fonts: "Fonts",
                    colors: "Colors",
                    layouts: "Layouts",
                    replace: "Replace",
                    share: "Share",
                    publish: "Publish",
                    generate: "Generate Image",
                    changeFont: "Change Font",
                    changeColor: "Change Color",
                    addLayouts: "Add Layouts and Sections",
                    replacing: "Replacing",
                    uploadNew: "Upload new"
                },
                searchPlaceholder: "Search through image library"
            },
            publishDropdown: {
                lowCreditsError: "Oops, You're Low on credits!",
                titlePublished: "Your site is published",
                titleUnpublished: "Publish your site",
                titleUpgrade: "Upgrade to publish",
                descriptionPublished: "Publish to make your changes live.",
                descriptionUnpublished: "Ready to go live? Publish your site for the world to see.",
                descriptionUpgrade: "Upgrade your plan to publish your site.",
                domainSettingsButton: "domain settings",
                siteSettingsButton: "Site settings",
                transferWebsiteButton: "Transfer website",
                searchPlaceholder: "Search for a domain...",
                letsGoButton: "Let's Go",
                publishButton: "Publish",
                publishingButton: "Publishing",
                upgradeButton: "Upgrade"
            },
            transferModal: {
                title: "Transfer site to a new owner",
                inputLabel: "Who will be the new site owner?",
                inputPlaceholder: "Enter an email address",
                cancelButton: "Cancel",
                transferButton: "Transfer",
                transferringButton: "Transferring",
                successTitle: "Transfer invite sent",
                errorTitle: "Couldn't transfer this site",
                errorDescription: "This site may have already been transferred or there was an issue. Please try again later.",
                successDescription: e => `The invite was sent to ${e}`,
                whatsNext: "What's next?",
                nextSteps: "The new owner needs to accept the transfer via the invite email. The invite expires in 3 days. You'll get an email when the transfer is complete.",
                gotItButton: "Got it",
                tryAgainButton: "Try again"
            },
            shareDropdown: {
                shareMessage: "Check out my website made with Webild!",
                title: "Share your website",
                description: "Share your website with others using the link below.",
                copiedButton: "Copied!",
                copyLinkButton: "Copy link",
                linkCopiedToast: "Link copied to clipboard!",
                copyFailedToast: "Failed to copy link",
                instagramCopiedToast: "Link copied! Paste it on Instagram to share.",
                noPreview: "No preview available yet."
            },
            versionSelector: {
                previousError: "Failed to switch to previous version",
                nextError: "Failed to switch to next version",
                selectError: "Failed to switch to selected version",
                generationLabel: "Generation",
                versionLabel: "Version",
                noPrompt: "No description"
            },
            discardChangesModal: {
                title: "You have unsaved changes",
                titleWithPendingPrompt: "You have unsaved visual edits",
                description: "Save your changes before leaving Visual Edit.",
                descriptionWithPendingPrompt: "Save your visual edits first, or discard them to send your prompt.",
                keepEditingButton: "Keep Editing",
                saveAndExitButton: "Save and Exit",
                saveChangesButton: "Save Edits",
                exitWithoutSavingLink: "Exit without saving",
                discardAndSendLink: "Discard edits & send prompt",
                unsavedEditSingular: "Unsaved edit",
                unsavedEditPlural: "Unsaved edits"
            }
        }])
    }
    , 32046, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(31278)
            , a = e.i(75157);
        e.s(["default", 0, e => {
            let n, s, o, l = (0,
                i.c)(5), { size: c } = e, d = "small" === (void 0 === c ? "default" : c) ? "h-6" : "h-9";
            return l[0] !== d ? (n = (0,
                a.cls)("aspect-square", d),
                l[0] = d,
                l[1] = n) : n = l[1],
                l[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0,
                    t.jsx)(r.Loader2, {
                        className: "animate-spin size-full text-black",
                        strokeWidth: 1.5
                    }),
                    l[2] = s) : s = l[2],
                l[3] !== n ? (o = (0,
                    t.jsx)("div", {
                        className: n,
                        children: s
                    }),
                    l[3] = n,
                    l[4] = o) : o = l[4],
                o
        }
        ])
    }
    , 55385, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , r = e.i(71645)
            , a = e.i(57688)
            , n = e.i(75157)
            , s = e.i(75980);
        let o = e => {
            let r, o, c, d, u, f = (0,
                i.c)(12), { projectId: p, fallbackClassName: m, isUnpublished: h } = e;
            f[0] !== p ? (r = p ? p.split("").reduce(l, 0) % 360 : 0,
                f[0] = p,
                f[1] = r) : r = f[1];
            let g = r;
            f[2] !== m ? (o = (0,
                n.cls)("w-full h-full aspect-video rounded-sm flex items-center justify-center", m),
                f[2] = m,
                f[3] = o) : o = f[3];
            let y = `hue-rotate(${g}deg)`;
            f[4] !== y ? (c = (0,
                t.jsx)(a.default, {
                    src: "https://storage.googleapis.com/webild/default/platform/images/image-generation.webp",
                    alt: "",
                    fill: !0,
                    className: "object-cover rounded-extra-sm",
                    style: {
                        filter: y
                    }
                }),
                f[4] = y,
                f[5] = c) : c = f[5];
            let b = h ? s.UI_STRINGS.errors.screenshot.unpublished : s.UI_STRINGS.errors.screenshot.noPreview;
            return f[6] !== b ? (d = (0,
                t.jsx)("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: (0,
                        t.jsx)("div", {
                            className: "relative card px-4 py-3 rounded-extra-sm",
                            children: (0,
                                t.jsx)("p", {
                                    className: "text-xs text-black",
                                    children: b
                                })
                        })
                }),
                f[6] = b,
                f[7] = d) : d = f[7],
                f[8] !== o || f[9] !== c || f[10] !== d ? (u = (0,
                    t.jsxs)("div", {
                        className: o,
                        children: [c, d]
                    }),
                    f[8] = o,
                    f[9] = c,
                    f[10] = d,
                    f[11] = u) : u = f[11],
                u
        }
            ;
        function l(e, t) {
            return e + t.charCodeAt(0)
        }
        var c = e.i(85203)
            , d = e.i(32046);
        e.s(["default", 0, e => {
            let a, s, l, u, f, p = (0,
                i.c)(19), { projectId: m, url: h, fallbackClassName: g, isUnpublished: y, isPublishing: b, styleClassName: v } = e, x = void 0 === v ? "card" : v, w = !!h, S = (0,
                    r.useRef)(null), [j, P] = (0,
                        r.useState)(0), [C, N] = (0,
                            r.useState)(!1), [E, k] = (0,
                                r.useState)(!1);
            p[0] !== w ? (a = () => {
                let e = S.current;
                if (!e || !w)
                    return;
                let t = () => {
                    let t = e.offsetWidth;
                    t > 0 && P(t / 1280)
                }
                    ;
                t();
                let i = new ResizeObserver(t);
                i.observe(e);
                let r = new IntersectionObserver(e => {
                    let [t] = e;
                    t.isIntersecting && (N(!0),
                        r.disconnect())
                }
                    , {
                        rootMargin: "200px"
                    });
                return r.observe(e),
                    () => {
                        i.disconnect(),
                            r.disconnect()
                    }
            }
                ,
                s = [w],
                p[0] = w,
                p[1] = a,
                p[2] = s) : (a = p[1],
                    s = p[2]),
                (0,
                    r.useEffect)(a, s);
            let _ = w ? "screenshot" : "error";
            return p[3] !== x ? (l = (0,
                n.cls)("relative w-full p-1 rounded-sm", x),
                p[3] = x,
                p[4] = l) : l = p[4],
                p[5] !== g || p[6] !== w || p[7] !== E || p[8] !== b || p[9] !== y || p[10] !== C || p[11] !== m || p[12] !== j || p[13] !== h ? (u = b ? (0,
                    t.jsx)("div", {
                        className: "relative w-full aspect-video flex items-center justify-center",
                        children: (0,
                            t.jsx)(d.default, {
                                size: "small"
                            })
                    }) : w ? (0,
                        t.jsxs)("div", {
                            ref: S,
                            className: "relative w-full aspect-video overflow-hidden rounded-sm bg-background",
                            children: [!E && C && (0,
                                t.jsx)("div", {
                                    className: "absolute inset-0 flex items-center justify-center z-10",
                                    children: (0,
                                        t.jsx)(d.default, {
                                            size: "small"
                                        })
                                }), j > 0 && C && (0,
                                    t.jsx)("iframe", {
                                        src: h,
                                        title: "Preview",
                                        className: "absolute top-0 left-0 border-none pointer-events-none",
                                        style: {
                                            width: "1280px",
                                            height: "720px",
                                            transform: `scale(${j})`,
                                            transformOrigin: "top left",
                                            opacity: +!!E,
                                            transition: "opacity 0.3s ease"
                                        },
                                        tabIndex: -1,
                                        loading: "lazy",
                                        sandbox: "allow-scripts allow-same-origin",
                                        onLoad: () => k(!0)
                                    })]
                        }) : (0,
                            t.jsx)(o, {
                                projectId: m,
                                fallbackClassName: g,
                                error: "No URL provided",
                                isUnpublished: y
                            }),
                    p[5] = g,
                    p[6] = w,
                    p[7] = E,
                    p[8] = b,
                    p[9] = y,
                    p[10] = C,
                    p[11] = m,
                    p[12] = j,
                    p[13] = h,
                    p[14] = u) : u = p[14],
                p[15] !== _ || p[16] !== l || p[17] !== u ? (f = (0,
                    t.jsx)(c.default, {
                        className: l,
                        children: u
                    }, _),
                    p[15] = _,
                    p[16] = l,
                    p[17] = u,
                    p[18] = f) : f = p[18],
                f
        }
        ], 55385)
    }
    , 14764, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("send", [["path", {
                d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
                key: "1ffxy3"
            }], ["path", {
                d: "m21.854 2.147-10.94 10.939",
                key: "12cjpa"
            }]]);
        e.s(["Send", 0, t], 14764)
    }
    , 67779, e => {
        "use strict";
        var t = e.i(932)
            , i = e.i(11519);
        e.s(["useTransferWebsiteModal", 0, () => {
            let e, r, a, n = (0,
                t.c)(11), { activeModal: s, modalData: o, closeModal: l, openModal: c } = (0,
                    i.useModalStore)(), d = "transfer-website" === s, u = o.projectId, f = o.projectName, p = o.screenshotUrl;
            n[0] !== c ? (e = e => {
                c("transfer-website", e)
            }
                ,
                n[0] = c,
                n[1] = e) : e = n[1];
            let m = e;
            n[2] !== l ? (r = () => {
                l()
            }
                ,
                n[2] = l,
                n[3] = r) : r = n[3];
            let h = r;
            return n[4] !== h || n[5] !== m || n[6] !== d || n[7] !== u || n[8] !== f || n[9] !== p ? (a = {
                isVisible: d,
                projectId: u,
                projectName: f,
                screenshotUrl: p,
                handleOpen: m,
                handleClose: h
            },
                n[4] = h,
                n[5] = m,
                n[6] = d,
                n[7] = u,
                n[8] = f,
                n[9] = p,
                n[10] = a) : a = n[10],
                a
        }
        ])
    }
    , 31601, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(71645)
            , r = e.i(37727)
            , a = e.i(14764)
            , n = e.i(98031)
            , n = n
            , s = e.i(67082)
            , o = e.i(21742)
            , l = e.i(55385)
            , c = e.i(16366)
            , d = e.i(30906)
            , u = e.i(85203)
            , f = e.i(38703)
            , p = e.i(67779)
            , m = e.i(18279)
            , h = e.i(46475)
            , g = e.i(64160);
        e.s(["default", 0, () => {
            let e, { isVisible: y, projectId: b, screenshotUrl: v, handleClose: x } = (0,
                p.useTransferWebsiteModal)(), { getToken: w } = (0,
                    f.useAuth)(), [S, j] = (0,
                        i.useState)(""), [P, C] = (0,
                            i.useState)(!1), [N, E] = (0,
                                i.useState)(null), [k, _] = (0,
                                    i.useState)(!1), I = async () => {
                                        let e;
                                        if (e = S.trim(),
                                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && b) {
                                            C(!0);
                                            try {
                                                let e = await (0,
                                                    h.getAuthToken)(w);
                                                if (!e)
                                                    throw Error("Authentication token not found");
                                                await (0,
                                                    m.transferProjectAPI)(b, S.trim(), e),
                                                    E(S.trim()),
                                                    j("")
                                            } catch (e) {
                                                _(!0)
                                            } finally {
                                                C(!1)
                                            }
                                        }
                                    }
                , R = () => {
                    j(""),
                        E(null),
                        _(!1),
                        x()
                }
                ;
            return (0,
                t.jsx)(s.default, {
                    isVisible: y,
                    onClose: R,
                    backdropClassName: "p-5",
                    contentClassName: "w-full max-w-sm",
                    overlayOnClickClose: !0,
                    children: (0,
                        t.jsxs)("div", {
                            className: "relative flex flex-col gap-5 p-5 w-full card rounded-sm",
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-labelledby": "transfer-modal-title",
                            children: [(0,
                                t.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0,
                                        t.jsx)("h2", {
                                            id: "transfer-modal-title",
                                            className: "text-lg font-medium text-black",
                                            children: g.PREVIEW_STRINGS.transferModal.title
                                        }), (0,
                                            t.jsx)(o.default, {
                                                onClick: R,
                                                className: "shrink-0 p-0 h-fit",
                                                styleClassName: "transparent",
                                                "aria-label": "Close transfer modal",
                                                children: (0,
                                                    t.jsx)(r.X, {
                                                        className: "h-(--text-lg) w-auto text-black"
                                                    })
                                            })]
                                }), (0,
                                    t.jsx)(u.default, {
                                        className: "flex flex-col gap-5",
                                        animationType: "fade",
                                        children: N ? (0,
                                            t.jsxs)(t.Fragment, {
                                                children: [(0,
                                                    t.jsxs)("div", {
                                                        className: "flex flex-col gap-5 p-5 button-secondary rounded-sm",
                                                        children: [(0,
                                                            t.jsx)(d.default, {
                                                                icon: a.Send,
                                                                title: g.PREVIEW_STRINGS.transferModal.successTitle,
                                                                description: g.PREVIEW_STRINGS.transferModal.successDescription(N),
                                                                removeBackground: !0,
                                                                buttonStyleClassName: "button-accent"
                                                            }), (0,
                                                                t.jsxs)("div", {
                                                                    className: "relative flex items-center gap-4",
                                                                    children: [(0,
                                                                        t.jsx)("div", {
                                                                            className: "flex-1 border-t-2 border-black/5"
                                                                        }), (0,
                                                                            t.jsx)("span", {
                                                                                className: "text-sm text-black font-medium",
                                                                                children: g.PREVIEW_STRINGS.transferModal.whatsNext
                                                                            }), (0,
                                                                                t.jsx)("div", {
                                                                                    className: "flex-1 border-t-2 border-black/5"
                                                                                })]
                                                                }), (0,
                                                                    t.jsx)("p", {
                                                                        className: "text-sm text-black/75 text-center",
                                                                        children: g.PREVIEW_STRINGS.transferModal.nextSteps
                                                                    })]
                                                    }), (0,
                                                        t.jsx)(o.default, {
                                                            onClick: R,
                                                            styleClassName: "button-accent",
                                                            className: "w-full",
                                                            children: g.PREVIEW_STRINGS.transferModal.gotItButton
                                                        })]
                                            }) : k ? (0,
                                                t.jsxs)(t.Fragment, {
                                                    children: [(0,
                                                        t.jsx)("div", {
                                                            className: "flex flex-col gap-5 p-5 button-secondary rounded-sm",
                                                            children: (0,
                                                                t.jsx)(d.default, {
                                                                    icon: n.default,
                                                                    title: g.PREVIEW_STRINGS.transferModal.errorTitle,
                                                                    description: g.PREVIEW_STRINGS.transferModal.errorDescription,
                                                                    removeBackground: !0,
                                                                    buttonStyleClassName: "badge badge-yellow"
                                                                })
                                                        }), (0,
                                                            t.jsxs)("div", {
                                                                className: "flex gap-5 w-full",
                                                                children: [(0,
                                                                    t.jsx)(o.default, {
                                                                        onClick: R,
                                                                        className: "w-1/2",
                                                                        children: g.PREVIEW_STRINGS.transferModal.cancelButton
                                                                    }), (0,
                                                                        t.jsx)(o.default, {
                                                                            onClick: () => {
                                                                                _(!1)
                                                                            }
                                                                            ,
                                                                            styleClassName: "button-accent",
                                                                            className: "w-1/2",
                                                                            children: g.PREVIEW_STRINGS.transferModal.tryAgainButton
                                                                        })]
                                                            })]
                                                }) : (0,
                                                    t.jsxs)(t.Fragment, {
                                                        children: [(0,
                                                            t.jsx)("div", {
                                                                className: "w-full",
                                                                children: (0,
                                                                    t.jsx)(l.default, {
                                                                        url: v,
                                                                        styleClassName: "button-secondary"
                                                                    })
                                                            }), (0,
                                                                t.jsx)(c.default, {
                                                                    label: g.PREVIEW_STRINGS.transferModal.inputLabel,
                                                                    value: S,
                                                                    onChange: j,
                                                                    type: "email",
                                                                    placeholder: g.PREVIEW_STRINGS.transferModal.inputPlaceholder,
                                                                    styleClassName: "button-secondary"
                                                                }), (0,
                                                                    t.jsxs)("div", {
                                                                        className: "flex gap-5 w-full",
                                                                        children: [(0,
                                                                            t.jsx)(o.default, {
                                                                                onClick: R,
                                                                                className: "w-1/2",
                                                                                children: g.PREVIEW_STRINGS.transferModal.cancelButton
                                                                            }), (0,
                                                                                t.jsx)(o.default, {
                                                                                    onClick: I,
                                                                                    styleClassName: "button-accent",
                                                                                    className: "w-1/2",
                                                                                    disabled: (e = S.trim(),
                                                                                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)),
                                                                                    isLoading: P,
                                                                                    loadingText: g.PREVIEW_STRINGS.transferModal.transferringButton,
                                                                                    children: g.PREVIEW_STRINGS.transferModal.transferButton
                                                                                })]
                                                                    })]
                                                    })
                                    }, N ? "success" : k ? "error" : "form")]
                        })
                })
        }
        ], 31601)
    }
    , 44241, e => {
        e.n(e.i(31601))
    }
]);
