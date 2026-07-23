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
    , 95057, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = {
            formatUrl: function () {
                return n
            },
            formatWithValidation: function () {
                return c
            },
            urlObjectKeys: function () {
                return o
            }
        };
        for (var s in a)
            Object.defineProperty(i, s, {
                enumerable: !0,
                get: a[s]
            });
        let r = e.r(90809)._(e.r(98183))
            , l = /https?|ftp|gopher|file/;
        function n(e) {
            let { auth: t, hostname: i } = e
                , a = e.protocol || ""
                , s = e.pathname || ""
                , n = e.hash || ""
                , o = e.query || ""
                , c = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
                e.host ? c = t + e.host : i && (c = t + (~i.indexOf(":") ? `[${i}]` : i),
                    e.port && (c += ":" + e.port)),
                o && "object" == typeof o && (o = String(r.urlQueryToSearchParams(o)));
            let d = e.search || o && `?${o}` || "";
            return a && !a.endsWith(":") && (a += ":"),
                e.slashes || (!a || l.test(a)) && !1 !== c ? (c = "//" + (c || ""),
                    s && "/" !== s[0] && (s = "/" + s)) : c || (c = ""),
                n && "#" !== n[0] && (n = "#" + n),
                d && "?" !== d[0] && (d = "?" + d),
                s = s.replace(/[?#]/g, encodeURIComponent),
                d = d.replace("#", "%23"),
                `${a}${c}${s}${d}${n}`
        }
        let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function c(e) {
            return n(e)
        }
    }
    , 73668, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "isLocalURL", {
                enumerable: !0,
                get: function () {
                    return r
                }
            });
        let a = e.r(18967)
            , s = e.r(52817);
        function r(e) {
            if (!(0,
                a.isAbsoluteUrl)(e))
                return !0;
            try {
                let t = (0,
                    a.getLocationOrigin)()
                    , i = new URL(e, t);
                return i.origin === t && (0,
                    s.hasBasePath)(i.pathname)
            } catch (e) {
                return !1
            }
        }
    }
    , 84508, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "errorOnce", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
        let a = e => { }
    }
    , 22016, (e, t, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = {
            default: function () {
                return x
            },
            useLinkStatus: function () {
                return v
            }
        };
        for (var s in a)
            Object.defineProperty(i, s, {
                enumerable: !0,
                get: a[s]
            });
        let r = e.r(90809)
            , l = e.r(43476)
            , n = r._(e.r(71645))
            , o = e.r(95057)
            , c = e.r(8372)
            , d = e.r(18581)
            , u = e.r(18967)
            , p = e.r(5550);
        e.r(33525);
        let m = e.r(88540)
            , h = e.r(91949)
            , f = e.r(73668)
            , g = e.r(9396);
        function x(t) {
            var i, a;
            let s, r, x, [v, b] = (0,
                n.useOptimistic)(h.IDLE_LINK_STATUS), w = (0,
                    n.useRef)(null), { href: j, as: N, children: S, prefetch: k = null, passHref: C, replace: _, shallow: P, scroll: E, onClick: T, onMouseEnter: M, onTouchStart: O, legacyBehavior: I = !1, onNavigate: L, transitionTypes: A, ref: U, unstable_dynamicOnHover: R, ...G } = t;
            s = S,
                I && ("string" == typeof s || "number" == typeof s) && (s = (0,
                    l.jsx)("a", {
                        children: s
                    }));
            let D = n.default.useContext(c.AppRouterContext)
                , W = !1 !== k
                , F = !1 !== k ? null === (a = k) || "auto" === a ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR
                , B = "string" == typeof (i = N || j) ? i : (0,
                    o.formatUrl)(i);
            if (I) {
                if (s?.$$typeof === Symbol.for("react.lazy"))
                    throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                        value: "E863",
                        enumerable: !1,
                        configurable: !0
                    });
                r = n.default.Children.only(s)
            }
            let z = I ? r && "object" == typeof r && r.ref : U
                , q = n.default.useCallback(e => (null !== D && (w.current = (0,
                    h.mountLinkInstance)(e, B, D, F, W, b)),
                    () => {
                        w.current && ((0,
                            h.unmountLinkForCurrentNavigation)(w.current),
                            w.current = null),
                            (0,
                                h.unmountPrefetchableInstance)(e)
                    }
                ), [W, B, D, F, b])
                , $ = {
                    ref: (0,
                        d.useMergedRef)(q, z),
                    onClick(t) {
                        I || "function" != typeof T || T(t),
                            I && r.props && "function" == typeof r.props.onClick && r.props.onClick(t),
                            !D || t.defaultPrevented || function (t, i, a, s, r, l, o) {
                                if ("u" > typeof window) {
                                    let c, { nodeName: d } = t.currentTarget;
                                    if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download"))
                                        return;
                                    if (!(0,
                                        f.isLocalURL)(i)) {
                                        s && (t.preventDefault(),
                                            location.replace(i));
                                        return
                                    }
                                    if (t.preventDefault(),
                                        l) {
                                        let e = !1;
                                        if (l({
                                            preventDefault: () => {
                                                e = !0
                                            }
                                        }),
                                            e)
                                            return
                                    }
                                    let { dispatchNavigateAction: u } = e.r(99781);
                                    n.default.startTransition(() => {
                                        u(i, s ? "replace" : "push", !1 === r ? m.ScrollBehavior.NoScroll : m.ScrollBehavior.Default, a.current, o)
                                    }
                                    )
                                }
                            }(t, B, w, _, E, L, A)
                    },
                    onMouseEnter(e) {
                        I || "function" != typeof M || M(e),
                            I && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                            D && W && (0,
                                h.onNavigationIntent)(e.currentTarget, !0 === R)
                    },
                    onTouchStart: function (e) {
                        I || "function" != typeof O || O(e),
                            I && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                            D && W && (0,
                                h.onNavigationIntent)(e.currentTarget, !0 === R)
                    }
                };
            return (0,
                u.isAbsoluteUrl)(B) ? $.href = B : I && !C && ("a" !== r.type || "href" in r.props) || ($.href = (0,
                    p.addBasePath)(B)),
                x = I ? n.default.cloneElement(r, $) : (0,
                    l.jsx)("a", {
                        ...G,
                        ...$,
                        children: s
                    }),
                (0,
                    l.jsx)(y.Provider, {
                        value: v,
                        children: x
                    })
        }
        e.r(84508);
        let y = (0,
            n.createContext)(h.IDLE_LINK_STATUS)
            , v = () => (0,
                n.useContext)(y);
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
            Object.assign(i.default, i),
            t.exports = i.default)
    }
    , 1741, e => {
        "use strict";
        var t = e.i(932)
            , i = e.i(71645)
            , a = e.i(26288);
        function s() {
            return a.sessionStorageUtils.getLimits()
        }
        e.s(["useLimits", 0, () => {
            let e, r, l = (0,
                t.c)(2), [n, o] = (0,
                    i.useState)(s);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                let e = () => {
                    o(a.sessionStorageUtils.getLimits())
                }
                    ;
                return e(),
                    window.addEventListener(a.sessionStorageUtils.LIMITS_UPDATE_EVENT, e),
                    () => {
                        window.removeEventListener(a.sessionStorageUtils.LIMITS_UPDATE_EVENT, e)
                    }
            }
                ,
                r = [],
                l[0] = e,
                l[1] = r) : (e = l[0],
                    r = l[1]),
                (0,
                    i.useEffect)(e, r),
                n
        }
        ])
    }
    , 28853, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , a = e.i(75157);
        e.s(["default", 0, e => {
            let s, r, l = (0,
                i.c)(4), { className: n } = e;
            return l[0] !== n ? (s = (0,
                a.cls)("border-t-2 border-black/5", n),
                l[0] = n,
                l[1] = s) : s = l[1],
                l[2] !== s ? (r = (0,
                    t.jsx)("div", {
                        className: s
                    }),
                    l[2] = s,
                    l[3] = r) : r = l[3],
                r
        }
        ])
    }
    , 26288, e => {
        "use strict";
        let t = "user_limits"
            , i = "user_limits_updated"
            , a = "pending_prompt"
            , s = {
                setLimits: e => {
                    try {
                        localStorage.setItem(t, JSON.stringify(e)),
                            window.dispatchEvent(new CustomEvent(i))
                    } catch (e) { }
                }
                ,
                getLimits: () => {
                    try {
                        let e = localStorage.getItem(t);
                        if (!e)
                            return null;
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearLimits: () => {
                    try {
                        localStorage.removeItem(t),
                            window.dispatchEvent(new CustomEvent(i))
                    } catch (e) { }
                }
                ,
                updateLimits: e => {
                    let t = s.getLimits();
                    t && s.setLimits({
                        ...t,
                        ...e
                    })
                }
                ,
                setPendingPrompt: e => {
                    try {
                        sessionStorage.setItem(a, e)
                    } catch (e) { }
                }
                ,
                getPendingPrompt: () => {
                    try {
                        return sessionStorage.getItem(a)
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearPendingPrompt: () => {
                    try {
                        sessionStorage.removeItem(a)
                    } catch (e) { }
                }
                ,
                LIMITS_UPDATE_EVENT: i
            };
        e.s(["sessionStorageUtils", 0, s])
    }
    , 196, e => {
        "use strict";
        let t = (0,
            e.i(68834).create)(e => ({
                isModalVisible: !1,
                showModal: () => e({
                    isModalVisible: !0
                }),
                hideModal: () => e({
                    isModalVisible: !1
                })
            }));
        e.s(["useMaintenanceStore", 0, t])
    }
    , 5652, e => {
        "use strict";
        e.s(["isMaintenanceMode", 0, () => !1])
    }
    , 43531, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("check", [["path", {
                d: "M20 6 9 17l-5-5",
                key: "1gmf2c"
            }]]);
        e.s(["Check", 0, t], 43531)
    }
    , 76025, 34141, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , a = e.i(22016)
            , s = e.i(7079)
            , r = e.i(30776)
            , l = e.i(75157);
        let n = e => {
            let n, o, c, d, u, p, m, h, f, g, x, y, v = (0,
                i.c)(40), { onClick: b, href: w, isActive: j, icon: N, iconContent: S, disabled: k, tooltip: C, iconClassName: _, className: P, children: E, showTooltip: T, isExpanded: M, showBorderAnimation: O, label: I, labelClassName: L, hoverClassName: A } = e, U = void 0 !== k && k, R = void 0 === P ? "w-full" : P, G = void 0 === T || T, D = void 0 !== O && O, W = void 0 === A ? "hover:bg-grey/50" : A;
            v[0] !== N || v[1] !== _ || v[2] !== S || v[3] !== j ? (n = S || N && (0,
                t.jsx)(N, {
                    className: (0,
                        l.cls)("relative h-(--text-base) w-auto transition-colors duration-300", j ? "text-blue" : _),
                    strokeWidth: 2.125
                }),
                v[0] = N,
                v[1] = _,
                v[2] = S,
                v[3] = j,
                v[4] = n) : n = v[4],
                v[5] !== n ? (o = (0,
                    t.jsx)("div", {
                        className: "relative flex items-center justify-center shrink-0 h-7 w-auto aspect-square",
                        children: n
                    }),
                    v[5] = n,
                    v[6] = o) : o = v[6];
            let F = o;
            v[7] !== I || v[8] !== L ? (c = I ? (0,
                t.jsx)("span", {
                    className: (0,
                        l.cls)("truncate font-medium", L),
                    children: I
                }) : null,
                v[7] = I,
                v[8] = L,
                v[9] = c) : c = v[9];
            let B = c
                , z = E || B;
            v[10] !== F || v[11] !== z ? (d = (0,
                t.jsxs)(t.Fragment, {
                    children: [F, z]
                }),
                v[10] = F,
                v[11] = z,
                v[12] = d) : d = v[12];
            let q = d;
            v[13] !== R || v[14] !== U || v[15] !== W || v[16] !== j ? (u = (0,
                l.cls)("relative z-1 flex items-center justify-start gap-0 p-1 h-fit text-left text-sm rounded-extra-sm", "[transition:color_300ms_ease-in-out,background-color_300ms_ease-in-out]", U ? "opacity-40" : (0,
                    l.cls)("cursor-pointer", j ? "text-blue" : (0,
                        l.cls)("text-black", W)), R),
                v[13] = R,
                v[14] = U,
                v[15] = W,
                v[16] = j,
                v[17] = u) : u = v[17];
            let $ = u
                , Y = !1 === M ? "w-full md:w-[calc(var(--height-7)+var(--spacing-1)*2)]" : !0 === M ? "w-full md:w-[calc(var(--width-15)-var(--spacing-5)*2)]" : "w-full";
            v[18] !== Y ? (p = (0,
                l.cls)("absolute! top-0 left-0 h-full rounded-extra-sm card-active transition-[width] duration-300 ease-out", Y),
                v[18] = Y,
                v[19] = p) : p = v[19],
                v[20] === Symbol.for("react.memo_cache_sentinel") ? (m = (0,
                    t.jsx)("div", {
                        className: "w-full h-full"
                    }),
                    v[20] = m) : m = v[20],
                v[21] !== j || v[22] !== p ? (h = (0,
                    t.jsx)(r.default, {
                        isVisible: j,
                        className: p,
                        children: m
                    }),
                    v[21] = j,
                    v[22] = p,
                    v[23] = h) : h = v[23];
            let V = h;
            v[24] !== $ || v[25] !== q || v[26] !== U || v[27] !== w || v[28] !== b ? (f = w ? (0,
                t.jsx)(a.default, {
                    href: w,
                    onClick: b,
                    className: $,
                    children: q
                }) : (0,
                    t.jsx)("button", {
                        onClick: U ? void 0 : b,
                        disabled: U,
                        className: $,
                        children: q
                    }),
                v[24] = $,
                v[25] = q,
                v[26] = U,
                v[27] = w,
                v[28] = b,
                v[29] = f) : f = v[29];
            let H = f;
            return v[30] !== H || v[31] !== D ? (g = D ? (0,
                t.jsx)(s.default, {
                    roundedClass: "rounded-extra-sm",
                    padding: "1.5px",
                    children: H
                }) : H,
                v[30] = H,
                v[31] = D,
                v[32] = g) : g = v[32],
                v[33] !== G || v[34] !== C ? (x = C && G && (0,
                    t.jsx)("div", {
                        className: "absolute! left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 text-xs text-white button-tooltip rounded-max-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-50",
                        children: C
                    }),
                    v[33] = G,
                    v[34] = C,
                    v[35] = x) : x = v[35],
                v[36] !== V || v[37] !== g || v[38] !== x ? (y = (0,
                    t.jsxs)("div", {
                        className: "relative group",
                        children: [V, g, x]
                    }),
                    v[36] = V,
                    v[37] = g,
                    v[38] = x,
                    v[39] = y) : y = v[39],
                y
        }
            , o = e => {
                let a, s, r, o, c = (0,
                    i.c)(22), { onClick: d, href: u, isActive: p, icon: m, iconContent: h, label: f, isExpanded: g, disabled: x, iconClassName: y, className: v, showBorderAnimation: b, labelClassName: w, hoverClassName: j } = e, N = void 0 !== x && x, S = void 0 === v ? "w-full md:w-fit" : v;
                c[0] !== f ? (a = f.length > 18 ? `${f.slice(0, 18)}...` : f,
                    c[0] = f,
                    c[1] = a) : a = c[1];
                let k = a
                    , C = !g
                    , _ = g ? "max-w-full md:max-w-(--width-15) opacity-100 blur-none" : "max-w-full opacity-100 blur-none md:max-w-0 md:opacity-0 md:blur-[1px]";
                return c[2] !== w || c[3] !== _ ? (s = (0,
                    l.cls)("inline-block overflow-hidden whitespace-nowrap font-medium transition-[max-width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]", _, w),
                    c[2] = w,
                    c[3] = _,
                    c[4] = s) : s = c[4],
                    c[5] !== s || c[6] !== k ? (r = (0,
                        t.jsx)("span", {
                            className: s,
                            children: k
                        }),
                        c[5] = s,
                        c[6] = k,
                        c[7] = r) : r = c[7],
                    c[8] !== S || c[9] !== N || c[10] !== j || c[11] !== u || c[12] !== m || c[13] !== y || c[14] !== h || c[15] !== p || c[16] !== g || c[17] !== d || c[18] !== b || c[19] !== C || c[20] !== r ? (o = (0,
                        t.jsx)(n, {
                            onClick: d,
                            href: u,
                            isActive: p,
                            icon: m,
                            iconContent: h,
                            disabled: N,
                            iconClassName: y,
                            className: S,
                            showTooltip: C,
                            isExpanded: g,
                            showBorderAnimation: b,
                            hoverClassName: j,
                            children: r
                        }),
                        c[8] = S,
                        c[9] = N,
                        c[10] = j,
                        c[11] = u,
                        c[12] = m,
                        c[13] = y,
                        c[14] = h,
                        c[15] = p,
                        c[16] = g,
                        c[17] = d,
                        c[18] = b,
                        c[19] = C,
                        c[20] = r,
                        c[21] = o) : o = c[21],
                    o
            }
            ;
        e.s(["default", 0, o], 34141);
        var c = e.i(71645);
        e.s(["default", 0, e => {
            let a, s, r, d, u, p, m, h = (0,
                i.c)(41), { categories: f, title: g, disabled: x, onItemSelect: y, onMobileClose: v, className: b, initialExpandedCategory: w, showTooltips: j, isExpanded: N, itemClassName: S, labelClassName: k, hoverClassName: C } = e, _ = void 0 !== x && x, P = void 0 !== j && j, { selectedCategory: E, handleCategoryClick: T } = ((e, t) => {
                    let a, s, r, l, n, o, d = (0,
                        i.c)(9), u = t ?? e[0]?.id ?? null, [p, m] = (0,
                            c.useState)(u), [h, f] = (0,
                                c.useState)(!1);
                    d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        requestAnimationFrame(() => f(!0))
                    }
                        ,
                        s = [],
                        d[0] = a,
                        d[1] = s) : (a = d[0],
                            s = d[1]),
                        (0,
                            c.useEffect)(a, s),
                        d[2] !== t ? (r = () => {
                            t && m(t)
                        }
                            ,
                            l = [t],
                            d[2] = t,
                            d[3] = r,
                            d[4] = l) : (r = d[3],
                                l = d[4]),
                        (0,
                            c.useEffect)(r, l),
                        d[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (e, t) => {
                            e.onClick ? e.onClick() : (m(e.id),
                                t?.(e.id))
                        }
                            ,
                            d[5] = n) : n = d[5];
                    let g = n;
                    return d[6] !== h || d[7] !== p ? (o = {
                        selectedCategory: p,
                        mounted: h,
                        handleCategoryClick: g
                    },
                        d[6] = h,
                        d[7] = p,
                        d[8] = o) : o = d[8],
                        o
                }
                )(f, w), M = void 0 !== N;
            h[0] !== T || h[1] !== y || h[2] !== v ? (a = e => {
                T(e, y),
                    window.innerWidth < 1024 && v && v()
            }
                ,
                h[0] = T,
                h[1] = y,
                h[2] = v,
                h[3] = a) : a = h[3];
            let O = a
                , I = _ && "pointer-events-none";
            h[4] !== b || h[5] !== I ? (s = (0,
                l.cls)(I, b),
                h[4] = b,
                h[5] = I,
                h[6] = s) : s = h[6],
                h[7] !== M || h[8] !== N || h[9] !== g ? (r = g && (0,
                    t.jsx)("div", {
                        className: "px-1 mb-1",
                        children: (0,
                            t.jsx)("h3", {
                                className: (0,
                                    l.cls)("text-sm font-medium text-black transition-opacity duration-300", M && !N ? "opacity-0" : "opacity-100"),
                                children: g
                            })
                    }),
                    h[7] = M,
                    h[8] = N,
                    h[9] = g,
                    h[10] = r) : r = h[10];
            let L = _ && "opacity-50";
            if (h[11] !== L ? (d = (0,
                l.cls)("flex flex-col gap-1 w-full list-none", L),
                h[11] = L,
                h[12] = d) : d = h[12],
                h[13] !== f || h[14] !== _ || h[15] !== C || h[16] !== M || h[17] !== N || h[18] !== S || h[19] !== k || h[20] !== O || h[21] !== E || h[22] !== P) {
                let e;
                h[24] !== _ || h[25] !== C || h[26] !== M || h[27] !== N || h[28] !== S || h[29] !== k || h[30] !== O || h[31] !== E || h[32] !== P ? (e = e => {
                    let i = e.isActive ?? E === e.id
                        , a = _ || e.disabled;
                    return (0,
                        t.jsx)("li", {
                            className: a ? "opacity-50 pointer-events-none" : "",
                            children: M ? (0,
                                t.jsx)(o, {
                                    onClick: () => O(e),
                                    href: e.href,
                                    isActive: i,
                                    icon: e.icon,
                                    label: e.label,
                                    isExpanded: N,
                                    className: N ? "w-full" : S,
                                    labelClassName: k,
                                    hoverClassName: C
                                }) : (0,
                                    t.jsx)(n, {
                                        onClick: () => O(e),
                                        href: e.href,
                                        isActive: i,
                                        icon: e.icon,
                                        label: e.label,
                                        disabled: a,
                                        tooltip: P ? e.tooltip : void 0,
                                        hoverClassName: C
                                    })
                        }, e.id)
                }
                    ,
                    h[24] = _,
                    h[25] = C,
                    h[26] = M,
                    h[27] = N,
                    h[28] = S,
                    h[29] = k,
                    h[30] = O,
                    h[31] = E,
                    h[32] = P,
                    h[33] = e) : e = h[33],
                    u = f.map(e),
                    h[13] = f,
                    h[14] = _,
                    h[15] = C,
                    h[16] = M,
                    h[17] = N,
                    h[18] = S,
                    h[19] = k,
                    h[20] = O,
                    h[21] = E,
                    h[22] = P,
                    h[23] = u
            } else
                u = h[23];
            return h[34] !== d || h[35] !== u ? (p = (0,
                t.jsx)("ul", {
                    className: d,
                    children: u
                }),
                h[34] = d,
                h[35] = u,
                h[36] = p) : p = h[36],
                h[37] !== p || h[38] !== s || h[39] !== r ? (m = (0,
                    t.jsxs)("div", {
                        className: s,
                        children: [r, p]
                    }),
                    h[37] = p,
                    h[38] = s,
                    h[39] = r,
                    h[40] = m) : m = h[40],
                m
        }
        ], 76025)
    }
    , 53727, 77832, 94351, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , a = e.i(85203)
            , s = e.i(21742)
            , r = e.i(7079)
            , l = e.i(94604)
            , n = e.i(11519)
            , o = e.i(4392)
            , c = e.i(48962);
        function d(e) {
            return e.openModal
        }
        e.s(["default", 0, e => {
            let u, p, m = (0,
                i.c)(6), { isFreePlan: h } = e, f = (0,
                    n.useModalStore)(d), g = h ? "free" : "paid";
            return m[0] !== h || m[1] !== f ? (u = h ? (0,
                t.jsx)(l.default, {
                    className: "w-full",
                    hideBenefits: !0,
                    hideComparePlans: !0
                }) : (0,
                    t.jsx)(r.default, {
                        roundedClass: "rounded-extra-sm",
                        padding: "1.5px",
                        children: (0,
                            t.jsx)(s.default, {
                                onClick: () => {
                                    (0,
                                        o.clarityEvent)("upgrade_plan_clicked"),
                                        f("pricing")
                                }
                                ,
                                className: "w-full",
                                children: c.LAYOUT_STRINGS.sidebar.upgradePlan
                            })
                    }),
                m[0] = h,
                m[1] = f,
                m[2] = u) : u = m[2],
                m[3] !== g || m[4] !== u ? (p = (0,
                    t.jsx)(a.default, {
                        animationType: "fade",
                        className: "w-full",
                        children: u
                    }, g),
                    m[3] = g,
                    m[4] = u,
                    m[5] = p) : p = m[5],
                p
        }
        ], 53727);
        var u = e.i(71645)
            , p = e.i(80580)
            , m = e.i(86098);
        function h(e) {
            return e.setTotalProjectCount
        }
        e.s(["useProjects", 0, () => {
            let e, t, a, s, r = (0,
                i.c)(9), { projects: l, isLoading: n, meta: o } = (0,
                    p.useProjectsContext)(), c = (0,
                        m.useUIStore)(h), d = o?.totalCount;
            r[0] !== c || r[1] !== d ? (e = () => {
                "number" == typeof d && c(d)
            }
                ,
                t = [d, c],
                r[0] = c,
                r[1] = d,
                r[2] = e,
                r[3] = t) : (e = r[2],
                    t = r[3]),
                (0,
                    u.useEffect)(e, t),
                r[4] !== l ? (a = l.slice(0, 20),
                    r[4] = l,
                    r[5] = a) : a = r[5];
            let f = a;
            return r[6] !== n || r[7] !== f ? (s = {
                projects: f,
                isLoading: n
            },
                r[6] = n,
                r[7] = f,
                r[8] = s) : s = r[8],
                s
        }
        ], 77832);
        let f = (0,
            e.i(75254).default)("house", [["path", {
                d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
                key: "5wwlr5"
            }], ["path", {
                d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                key: "r6nss1"
            }]]);
        e.s(["Home", 0, f], 94351)
    }
    , 39616, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("settings", [["path", {
                d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                key: "1i5ecw"
            }], ["circle", {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }]]);
        e.s(["Settings", 0, t], 39616)
    }
    , 94604, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , a = e.i(43531)
            , s = e.i(7079)
            , r = e.i(28853)
            , l = e.i(21742)
            , n = e.i(11519)
            , o = e.i(4392)
            , c = e.i(75157)
            , d = e.i(75980);
        function u(e) {
            return e.openModal
        }
        function p(e, i) {
            return (0,
                t.jsxs)("li", {
                    className: "flex items-center gap-2",
                    children: [(0,
                        t.jsx)("div", {
                            className: "h-[1em] w-auto aspect-square badge badge-green rounded-full gradient-before-rounded-full flex items-center justify-center shrink-0",
                            children: (0,
                                t.jsx)(a.Check, {
                                    className: "h-1/2 w-1/2 text-black",
                                    strokeWidth: 3
                                })
                        }), (0,
                            t.jsx)("span", {
                                className: "text-sm text-black",
                                children: e
                            })]
                }, i)
        }
        e.s(["default", 0, e => {
            let a, m, h, f, g, x, y, v, b = (0,
                i.c)(19), { className: w, hideBenefits: j, hideComparePlans: N } = e, S = void 0 !== j && j, k = void 0 !== N && N, C = (0,
                    n.useModalStore)(u);
            return b[0] !== w ? (a = (0,
                c.cls)("w-20", w),
                b[0] = w,
                b[1] = a) : a = b[1],
                b[2] === Symbol.for("react.memo_cache_sentinel") ? (m = (0,
                    t.jsx)("div", {
                        className: "flex flex-col gap-1",
                        children: (0,
                            t.jsx)("h3", {
                                className: "text-base font-medium text-black leading-snug",
                                children: d.UI_STRINGS.tooltips.upgrade.title
                            })
                    }),
                    b[2] = m) : m = b[2],
                b[3] !== S ? (h = !S && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)(r.default, {}), (0,
                                t.jsx)("ul", {
                                    className: "flex flex-col gap-2",
                                    children: d.UI_STRINGS.tooltips.upgrade.benefits.map(p)
                                })]
                    }),
                    b[3] = S,
                    b[4] = h) : h = b[4],
                b[5] !== C ? (f = (0,
                    t.jsx)(l.default, {
                        onClick: () => {
                            (0,
                                o.clarityEvent)("upgrade_tooltip_upgrade_now_clicked"),
                                C("pricing")
                        }
                        ,
                        styleClassName: "button-accent",
                        children: d.UI_STRINGS.tooltips.upgrade.upgradeNow
                    }),
                    b[5] = C,
                    b[6] = f) : f = b[6],
                b[7] !== k || b[8] !== C ? (g = !k && (0,
                    t.jsx)(l.default, {
                        onClick: () => {
                            (0,
                                o.clarityEvent)("upgrade_tooltip_compare_plans_clicked"),
                                C("pricing")
                        }
                        ,
                        styleClassName: "card",
                        children: d.UI_STRINGS.tooltips.upgrade.comparePlans
                    }),
                    b[7] = k,
                    b[8] = C,
                    b[9] = g) : g = b[9],
                b[10] !== f || b[11] !== g ? (x = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [f, g]
                    }),
                    b[10] = f,
                    b[11] = g,
                    b[12] = x) : x = b[12],
                b[13] !== h || b[14] !== x ? (y = (0,
                    t.jsxs)("div", {
                        className: "w-full button-secondary rounded-sm p-5 flex flex-col gap-4",
                        children: [m, h, x]
                    }),
                    b[13] = h,
                    b[14] = x,
                    b[15] = y) : y = b[15],
                b[16] !== a || b[17] !== y ? (v = (0,
                    t.jsx)(s.default, {
                        roundedClass: "rounded-sm",
                        padding: "1.5px",
                        className: a,
                        children: y
                    }),
                    b[16] = a,
                    b[17] = y,
                    b[18] = v) : v = b[18],
                v
        }
        ])
    }
    , 10980, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("book-open", [["path", {
                d: "M12 7v14",
                key: "1akyts"
            }], ["path", {
                d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
                key: "ruj8y"
            }]]);
        e.s(["BookOpen", 0, t], 10980)
    }
    , 85663, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("layout-template", [["rect", {
                width: "18",
                height: "7",
                x: "3",
                y: "3",
                rx: "1",
                key: "f1a2em"
            }], ["rect", {
                width: "9",
                height: "7",
                x: "3",
                y: "14",
                rx: "1",
                key: "jqznyg"
            }], ["rect", {
                width: "5",
                height: "7",
                x: "16",
                y: "14",
                rx: "1",
                key: "q5h2i8"
            }]]);
        e.s(["LayoutTemplate", 0, t], 85663)
    }
    , 72518, 99647, e => {
        "use strict";
        var t = e.i(75254);
        let i = (0,
            t.default)("panel-left-close", [["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                key: "afitv7"
            }], ["path", {
                d: "M9 3v18",
                key: "fh3hqa"
            }], ["path", {
                d: "m16 15-3-3 3-3",
                key: "14y99z"
            }]]);
        e.s(["PanelLeftClose", 0, i], 72518);
        let a = (0,
            t.default)("panel-left-open", [["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                key: "afitv7"
            }], ["path", {
                d: "M9 3v18",
                key: "fh3hqa"
            }], ["path", {
                d: "m14 9 3 3-3 3",
                key: "8010ee"
            }]]);
        e.s(["PanelLeftOpen", 0, a], 99647)
    }
    , 20846, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(71645)
            , a = e.i(18566)
            , s = e.i(38703)
            , r = e.i(76025)
            , l = e.i(85203)
            , n = e.i(932)
            , o = e.i(22016)
            , c = e.i(57688)
            , d = e.i(72518)
            , u = e.i(99647)
            , p = e.i(4392)
            , m = e.i(75157)
            , h = e.i(62788);
        let f = e => {
            let i, a, s, r, p, f = (0,
                n.c)(14), { isExpanded: y, onToggle: v } = e, b = y ? "justify-between" : "justify-center";
            f[0] !== b ? (i = (0,
                m.cls)("hidden md:flex shrink-0 h-page-padding-compact items-center", b),
                f[0] = b,
                f[1] = i) : i = f[1];
            let w = y ? "expanded" : "collapsed"
                , j = y ? "justify-between w-full" : "justify-center";
            return f[2] !== j ? (a = (0,
                m.cls)("flex items-center", j),
                f[2] = j,
                f[3] = a) : a = f[3],
                f[4] !== y || f[5] !== v ? (s = y ? (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)(o.default, {
                                href: "/",
                                className: "flex items-center w-fit h-5 cursor-pointer",
                                onClick: g,
                                children: (0,
                                    t.jsx)(c.default, {
                                        src: "https://storage.googleapis.com/webild/default/platform/brand/logo.svg",
                                        alt: h.COMMON_STRINGS.images.LOGO_ALT,
                                        width: 100,
                                        height: 100,
                                        className: "h-5 w-auto"
                                    })
                            }), (0,
                                t.jsx)("button", {
                                    onClick: e => {
                                        e.stopPropagation(),
                                            v()
                                    }
                                    ,
                                    className: "hidden xl:flex relative items-center justify-center p-1 rounded-extra-sm cursor-pointer button-secondary",
                                    children: (0,
                                        t.jsx)("div", {
                                            className: "relative flex items-center justify-center shrink-0 h-7 w-auto aspect-square",
                                            children: (0,
                                                t.jsx)(d.PanelLeftClose, {
                                                    className: "relative h-(--text-base) w-auto",
                                                    strokeWidth: 2.125
                                                })
                                        })
                                })]
                    }) : (0,
                        t.jsxs)("div", {
                            className: "relative group flex items-center justify-center",
                            style: {
                                width: "calc(var(--height-7) + var(--spacing-1) * 2)",
                                height: "calc(var(--height-7) + var(--spacing-1) * 2)"
                            },
                            children: [(0,
                                t.jsx)(o.default, {
                                    href: "/",
                                    className: "flex items-center justify-center cursor-pointer",
                                    onClick: x,
                                    children: (0,
                                        t.jsx)(c.default, {
                                            src: "https://storage.googleapis.com/webild/default/platform/brand/logo-icon.webp",
                                            alt: h.COMMON_STRINGS.images.LOGO_ALT,
                                            width: 60,
                                            height: 60,
                                            className: "h-5 w-auto"
                                        })
                                }), (0,
                                    t.jsx)("button", {
                                        onClick: e => {
                                            e.stopPropagation(),
                                                v()
                                        }
                                        ,
                                        className: "hidden xl:flex absolute inset-0 z-10 items-center justify-center p-1 rounded-extra-sm button-secondary opacity-0 group-hover:opacity-100 [transition:opacity_200ms_ease-in-out] cursor-pointer",
                                        children: (0,
                                            t.jsx)("div", {
                                                className: "relative flex items-center justify-center shrink-0 h-7 w-auto aspect-square",
                                                children: (0,
                                                    t.jsx)(u.PanelLeftOpen, {
                                                        className: "relative h-(--text-base) w-auto",
                                                        strokeWidth: 2.125
                                                    })
                                            })
                                    })]
                        }),
                    f[4] = y,
                    f[5] = v,
                    f[6] = s) : s = f[6],
                f[7] !== w || f[8] !== a || f[9] !== s ? (r = (0,
                    t.jsx)(l.default, {
                        animationType: "fade",
                        className: a,
                        children: s
                    }, w),
                    f[7] = w,
                    f[8] = a,
                    f[9] = s,
                    f[10] = r) : r = f[10],
                f[11] !== i || f[12] !== r ? (p = (0,
                    t.jsx)("div", {
                        className: i,
                        children: r
                    }),
                    f[11] = i,
                    f[12] = r,
                    f[13] = p) : p = f[13],
                p
        }
            ;
        function g() {
            return (0,
                p.clarityEvent)("logo_home_clicked")
        }
        function x() {
            return (0,
                p.clarityEvent)("logo_home_clicked")
        }
        var y = e.i(28853)
            , v = e.i(30776);
        let b = "button-secondary rounded"
            , w = () => {
                let e, i, a, s = (0,
                    n.c)(3);
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                    t.jsx)("div", {
                        className: "px-3",
                        children: (0,
                            t.jsx)("div", {
                                className: (0,
                                    m.cls)(b, "mb-2 h-[calc(var(--text-sm)*1.25)] w-24")
                            })
                    }),
                    i = (0,
                        t.jsx)(y.default, {}),
                    s[0] = e,
                    s[1] = i) : (e = s[0],
                        i = s[1]),
                    s[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0,
                        t.jsxs)("div", {
                            className: "flex flex-1 flex-col my-5 min-h-0 animate-pulse",
                            children: [e, i, (0,
                                t.jsx)("div", {
                                    className: "flex-1 overflow-y-auto py-2 min-h-0 hide-scrollbar mask-fade-y",
                                    children: (0,
                                        t.jsx)("div", {
                                            className: "flex flex-col gap-1",
                                            children: Array.from({
                                                length: 10
                                            }).map(j)
                                        })
                                }), (0,
                                    t.jsx)(y.default, {})]
                        }),
                        s[2] = a) : a = s[2],
                    a
            }
            ;
        function j(e, i) {
            return (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-2 px-2 py-2",
                    children: [(0,
                        t.jsx)("div", {
                            className: (0,
                                m.cls)(b, "shrink-0 h-5 w-auto aspect-square rounded-max-sm")
                        }), (0,
                            t.jsx)("div", {
                                className: (0,
                                    m.cls)(b, "h-[calc(var(--text-sm)*1.25)] w-32")
                            })]
                }, i)
        }
        var N = e.i(196)
            , S = e.i(5652)
            , k = e.i(48962);
        let C = e => {
            let i, a, s, r, c = (0,
                n.c)(12), { projects: d, isLoading: u, isExpanded: p } = e, m = (0,
                    N.useMaintenanceStore)(_);
            c[0] !== m ? (i = e => {
                (0,
                    S.isMaintenanceMode)() && (e.preventDefault(),
                        m())
            }
                ,
                c[0] = m,
                c[1] = i) : i = c[1];
            let f = i;
            if (!u && 0 === d.length)
                return null;
            let g = !1 !== p
                , x = u ? "loading" : "content";
            return c[2] !== f || c[3] !== u || c[4] !== d ? (a = u ? (0,
                t.jsx)(w, {}) : (0,
                    t.jsxs)("div", {
                        className: "flex flex-1 flex-col my-5 min-h-0",
                        style: {
                            minWidth: "calc(var(--width-15) - var(--spacing-5) * 2)"
                        },
                        children: [(0,
                            t.jsx)("div", {
                                className: "px-3",
                                children: (0,
                                    t.jsx)("p", {
                                        className: "mb-2 text-sm font-medium text-black",
                                        children: k.LAYOUT_STRINGS.sidebar.recentWebsites
                                    })
                            }), (0,
                                t.jsx)(y.default, {}), (0,
                                    t.jsx)("div", {
                                        className: "flex-1 overflow-y-auto min-h-0 hide-scrollbar mask-fade-y py-2",
                                        children: (0,
                                            t.jsx)("div", {
                                                className: "flex flex-col gap-1",
                                                children: d.map(e => (0,
                                                    t.jsxs)(o.default, {
                                                        href: `/projects/${e.id}`,
                                                        onClick: f,
                                                        className: "relative flex items-center gap-2 px-2 py-2 text-sm text-black cursor-pointer rounded-extra-sm hover:bg-grey/50 transition-colors duration-300",
                                                        children: [(0,
                                                            t.jsx)("div", {
                                                                className: "relative flex items-center justify-center shrink-0 h-5 w-auto aspect-square rounded-max-sm button-secondary",
                                                                children: (0,
                                                                    t.jsx)("span", {
                                                                        className: "relative text-xs font-semibold text-black scale-85",
                                                                        children: e.name?.charAt(0)?.toUpperCase() || "W"
                                                                    })
                                                            }), (0,
                                                                t.jsx)("p", {
                                                                    className: "relative flex-1 max-w-[20ch] text-left leading-snug capitalize truncate",
                                                                    children: e.name || h.COMMON_STRINGS.defaults.PROJECT_NAME
                                                                })]
                                                    }, e.id))
                                            })
                                    }), (0,
                                        t.jsx)(y.default, {})]
                    }),
                c[2] = f,
                c[3] = u,
                c[4] = d,
                c[5] = a) : a = c[5],
                c[6] !== x || c[7] !== a ? (s = (0,
                    t.jsx)(l.default, {
                        className: "flex flex-1 flex-col min-h-0",
                        animationType: "fade",
                        children: a
                    }, x),
                    c[6] = x,
                    c[7] = a,
                    c[8] = s) : s = c[8],
                c[9] !== g || c[10] !== s ? (r = (0,
                    t.jsx)(v.default, {
                        isVisible: g,
                        className: "flex flex-1 flex-col min-h-0",
                        children: s
                    }),
                    c[9] = g,
                    c[10] = s,
                    c[11] = r) : r = c[11],
                r
        }
            ;
        function _(e) {
            return e.showModal
        }
        var P = e.i(39616)
            , E = e.i(10980)
            , T = e.i(75254);
        let M = (0,
            T.default)("credit-card", [["rect", {
                width: "20",
                height: "14",
                x: "2",
                y: "5",
                rx: "2",
                key: "ynyp8z"
            }], ["line", {
                x1: "2",
                x2: "22",
                y1: "10",
                y2: "10",
                key: "1b3vmo"
            }]]);
        var O = e.i(34141)
            , I = e.i(53727)
            , L = e.i(1741);
        let A = e => {
            let i, s, r, l, o, c, d, u, p = (0,
                n.c)(26), { onSettingsClick: m, onPricingClick: f, isExpanded: g } = e, x = (0,
                    a.usePathname)(), y = (0,
                        L.useLimits)(), b = !y?.plan || "free" === y.plan, w = !1 !== g;
            p[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                minWidth: "calc(var(--width-15) - var(--spacing-5) * 2)"
            },
                p[0] = i) : i = p[0],
                p[1] !== b ? (s = (0,
                    t.jsx)(I.default, {
                        isFreePlan: b
                    }),
                    p[1] = b,
                    p[2] = s) : s = p[2],
                p[3] !== w || p[4] !== s ? (r = (0,
                    t.jsx)(v.default, {
                        isVisible: w,
                        className: "w-full mb-2",
                        style: i,
                        children: s
                    }),
                    p[3] = w,
                    p[4] = s,
                    p[5] = r) : r = p[5];
            let j = "/pricing" === x
                , N = g ?? !0
                , S = g ? "w-full" : void 0;
            p[6] !== f || p[7] !== j || p[8] !== N || p[9] !== S ? (l = (0,
                t.jsx)(O.default, {
                    onClick: f,
                    isActive: j,
                    icon: M,
                    label: h.COMMON_STRINGS.labels.PRICING,
                    isExpanded: N,
                    className: S
                }),
                p[6] = f,
                p[7] = j,
                p[8] = N,
                p[9] = S,
                p[10] = l) : l = p[10],
                p[11] !== x ? (o = x?.startsWith("/docs") ?? !1,
                    p[11] = x,
                    p[12] = o) : o = p[12];
            let k = g ?? !0
                , C = g ? "w-full" : void 0;
            p[13] !== k || p[14] !== C || p[15] !== o ? (c = (0,
                t.jsx)(O.default, {
                    href: "/docs",
                    isActive: o,
                    icon: E.BookOpen,
                    label: h.COMMON_STRINGS.labels.DOCUMENTATION,
                    isExpanded: k,
                    className: C
                }),
                p[13] = k,
                p[14] = C,
                p[15] = o,
                p[16] = c) : c = p[16];
            let _ = g ?? !0
                , T = g ? "w-full" : void 0;
            return p[17] !== m || p[18] !== _ || p[19] !== T ? (d = (0,
                t.jsx)(O.default, {
                    onClick: m,
                    isActive: !1,
                    icon: P.Settings,
                    label: h.COMMON_STRINGS.buttons.SETTINGS,
                    isExpanded: _,
                    className: T
                }),
                p[17] = m,
                p[18] = _,
                p[19] = T,
                p[20] = d) : d = p[20],
                p[21] !== c || p[22] !== d || p[23] !== r || p[24] !== l ? (u = (0,
                    t.jsxs)("div", {
                        className: "mt-auto flex flex-col gap-1",
                        children: [r, l, c, d]
                    }),
                    p[21] = c,
                    p[22] = d,
                    p[23] = r,
                    p[24] = l,
                    p[25] = u) : u = p[25],
                u
        }
            ;
        var U = e.i(77832)
            , R = e.i(86098);
        function G() {
            return window.innerWidth < 768
        }
        function D() {
            return window.innerWidth >= 768
        }
        var W = e.i(11519);
        let F = (0,
            T.default)("folder", [["path", {
                d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
                key: "1kt360"
            }]]);
        var B = e.i(94351)
            , z = e.i(85663);
        let q = () => {
            let e = document.getElementById("main-content");
            e && e.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
            , $ = "var(--width-15)"
            , Y = "calc(var(--spacing-5)*2 + var(--height-7) + var(--spacing-1)*2)";
        e.s(["default", 0, () => {
            let { isSignedIn: e } = (0,
                s.useAuth)()
                , o = (0,
                    a.useRouter)()
                , c = (0,
                    a.usePathname)()
                , { sidebarRef: d, isOpen: u, handleSidebarClick: p, handleSettingsClick: h } = (() => {
                    let e, t, s, r, l, o, c, d = (0,
                        n.c)(18), u = (0,
                            a.usePathname)(), p = (0,
                                i.useRef)(null), { isSidebarOpen: m, setSidebarOpen: h, setSettingsModalOpen: f } = (0,
                                    R.useUIStore)();
                    d[0] !== m || d[1] !== h ? (e = () => {
                        h(!m)
                    }
                        ,
                        d[0] = m,
                        d[1] = h,
                        d[2] = e) : e = d[2];
                    let g = e;
                    d[3] !== f ? (t = () => {
                        f(!0)
                    }
                        ,
                        d[3] = f,
                        d[4] = t) : t = d[4];
                    let x = t;
                    return d[5] !== m || d[6] !== h ? (s = () => {
                        if (!m)
                            return;
                        let e = e => {
                            let t = e.target;
                            p.current?.contains(t) || t.closest("[data-sidebar-toggle]") || h(!1)
                        }
                            , t = e => {
                                "Escape" === e.key && h(!1)
                            }
                            ;
                        return document.addEventListener("mousedown", e),
                            document.addEventListener("keydown", t),
                            () => {
                                document.removeEventListener("mousedown", e),
                                    document.removeEventListener("keydown", t)
                            }
                    }
                        ,
                        r = [m, h],
                        d[5] = m,
                        d[6] = h,
                        d[7] = s,
                        d[8] = r) : (s = d[7],
                            r = d[8]),
                        (0,
                            i.useEffect)(s, r),
                        d[9] !== h ? (l = () => {
                            G() && h(!1)
                        }
                            ,
                            d[9] = h,
                            d[10] = l) : l = d[10],
                        d[11] !== u || d[12] !== h ? (o = [u, h, G],
                            d[11] = u,
                            d[12] = h,
                            d[13] = o) : o = d[13],
                        (0,
                            i.useEffect)(l, o),
                        d[14] !== x || d[15] !== g || d[16] !== m ? (c = {
                            sidebarRef: p,
                            isOpen: m,
                            isMobile: G,
                            isDesktop: D,
                            handleSidebarClick: g,
                            handleSettingsClick: x
                        },
                            d[14] = x,
                            d[15] = g,
                            d[16] = m,
                            d[17] = c) : c = d[17],
                        c
                }
                )()
                , { openModal: g } = (0,
                    W.useModalStore)()
                , { projects: x, isLoading: y } = (0,
                    U.useProjects)()
                , { isSidebarExpanded: v, toggleSidebarExpanded: b } = (0,
                    R.useUIStore)()
                , [w, j] = (0,
                    i.useState)(!1);
            (0,
                i.useEffect)(() => {
                    let e = () => {
                        j(window.innerWidth < 1280)
                    }
                        ;
                    return e(),
                        window.addEventListener("resize", e),
                        () => window.removeEventListener("resize", e)
                }
                    , []);
            let N = !w && v
                , S = [{
                    id: "home",
                    label: "Home",
                    icon: B.Home,
                    onClick: () => {
                        "/" === c ? q() : o.push("/")
                    }
                    ,
                    isActive: "/" === c
                }, {
                    id: "templates",
                    label: "Templates",
                    icon: z.LayoutTemplate,
                    onClick: () => {
                        "/templates" === c ? q() : o.push("/templates")
                    }
                    ,
                    isActive: "/templates" === c
                }, {
                    id: "projects",
                    label: "All Websites",
                    icon: F,
                    onClick: () => {
                        "/projects" === c ? q() : o.push("/projects")
                    }
                    ,
                    isActive: "/projects" === c
                }]
                , k = c?.startsWith("/preview/") || c?.startsWith("/templates/") && "/templates" !== c
                , _ = "/creating-project" === c
                , P = c?.startsWith("/projects/");
            return !e || k || _ || P ? null : (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                        t.jsx)("div", {
                            className: "hidden md:block h-full shrink-0 transition-[width] duration-300",
                            style: {
                                width: N ? $ : Y
                            }
                        }), (0,
                            t.jsx)("div", {
                                ref: d,
                                className: (0,
                                    m.cls)("fixed z-100 overflow-hidden", "top-(--padding-page-padding) h-sidebar-height w-50", "transition-all duration-800 ease-in-out", u ? "left-5 scale-100" : "-left-(--width-50) scale-95", "md:inset-y-0 md:left-0 md:h-full md:w-(--sidebar-width) md:scale-100 md:transition-[width] md:duration-300"),
                                style: {
                                    "--sidebar-width": N ? $ : Y
                                },
                                onClick: p,
                                children: (0,
                                    t.jsxs)(l.default, {
                                        className: "relative flex flex-col overflow-hidden p-5 md:pt-0 h-full rounded md:rounded-none md:w-(--sidebar-width) md:transition-[width] md:duration-300",
                                        children: [(0,
                                            t.jsx)("div", {
                                                className: "absolute! inset-0 button-secondary md:hidden"
                                            }), (0,
                                                t.jsx)(f, {
                                                    isExpanded: N,
                                                    onToggle: b
                                                }), (0,
                                                    t.jsx)(r.default, {
                                                        categories: S,
                                                        onMobileClose: () => { }
                                                        ,
                                                        isExpanded: N
                                                    }), (0,
                                                        t.jsx)(C, {
                                                            projects: x,
                                                            isLoading: y,
                                                            isExpanded: N
                                                        }), (0,
                                                            t.jsx)(A, {
                                                                onSettingsClick: h,
                                                                onPricingClick: () => {
                                                                    g("pricing")
                                                                }
                                                                ,
                                                                isExpanded: N
                                                            })]
                                    })
                            })]
                })
        }
        ], 20846)
    }
    , 303, e => {
        e.n(e.i(20846))
    }
]);
