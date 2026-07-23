(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 31278, e => {
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
            , n = e.i(31278)
            , o = e.i(75157);
        let a = (0,
            i.forwardRef)(({ children: e, className: i, styleClassName: a = "button-secondary", gradientRoundedClassName: r, type: s = "button", onClick: l, onMouseEnter: c, disabled: u = !1, isLoading: d = !1, loadingText: m }, p) => (0,
                t.jsx)("button", {
                    ref: p,
                    type: s,
                    disabled: u || d,
                    onMouseEnter: c,
                    className: (0,
                        o.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", r, a, i, (u || d) && "opacity-50 select-none pointer-events-none"),
                    onClick: l,
                    children: d ? (0,
                        t.jsxs)("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0,
                                t.jsx)(n.Loader2, {
                                    className: "h-[1em] w-auto animate-spin"
                                }), m ?? e]
                        }) : e
                }));
        a.displayName = "Button",
            e.s(["default", 0, a])
    }
    , 85203, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , n = e.i(71645)
            , o = e.i(75157);
        e.s(["default", 0, e => {
            let a, r, s, l, c, u, d, m, p, g = (0,
                i.c)(16);
            g[0] !== e ? ({ children: a, className: l, animationType: c, style: s, ...r } = e,
                g[0] = e,
                g[1] = a,
                g[2] = r,
                g[3] = s,
                g[4] = l,
                g[5] = c) : (a = g[1],
                    r = g[2],
                    s = g[3],
                    l = g[4],
                    c = g[5]);
            let h = void 0 === l ? "flex flex-col gap-5 w-full h-fit" : l
                , f = void 0 === c ? "full" : c
                , [y, b] = (0,
                    n.useState)("full" === f ? "animation-container" : "animation-container-fade")
                , S = (0,
                    n.useRef)(!1);
            return g[6] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
                if (S.current)
                    return;
                S.current = !0;
                let e = setTimeout(() => {
                    b("")
                }
                    , 800);
                return () => clearTimeout(e)
            }
                ,
                d = [],
                g[6] = u,
                g[7] = d) : (u = g[6],
                    d = g[7]),
                (0,
                    n.useEffect)(u, d),
                g[8] !== y || g[9] !== h ? (m = (0,
                    o.cls)(h, y),
                    g[8] = y,
                    g[9] = h,
                    g[10] = m) : m = g[10],
                g[11] !== a || g[12] !== r || g[13] !== s || g[14] !== m ? (p = (0,
                    t.jsx)("div", {
                        className: m,
                        style: s,
                        ...r,
                        children: a
                    }),
                    g[11] = a,
                    g[12] = r,
                    g[13] = s,
                    g[14] = m,
                    g[15] = p) : p = g[15],
                p
        }
        ])
    }
    , 62788, e => {
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
    , 15619, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , n = e.i(71645)
            , o = e.i(74080);
        e.s(["default", 0, e => {
            let a, r, s, l, c = (0,
                i.c)(9), { children: u, container: d, id: m, className: p } = e, [g, h] = (0,
                    n.useState)(!1), f = d ?? ("u" > typeof document ? document.body : null);
            if (c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => (h(!0),
                () => h(!1)),
                r = [],
                c[0] = a,
                c[1] = r) : (a = c[0],
                    r = c[1]),
                (0,
                    n.useEffect)(a, r),
                !g || !f)
                return null;
            c[2] !== u || c[3] !== p || c[4] !== m ? (s = p || m ? (0,
                t.jsx)("div", {
                    id: m,
                    className: p,
                    children: u
                }) : u,
                c[2] = u,
                c[3] = p,
                c[4] = m,
                c[5] = s) : s = c[5];
            let y = s;
            return c[6] !== y || c[7] !== f ? (l = (0,
                o.createPortal)(y, f),
                c[6] = y,
                c[7] = f,
                c[8] = l) : l = c[8],
                l
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
    , 26288, e => {
        "use strict";
        let t = "user_limits"
            , i = "user_limits_updated"
            , n = "pending_prompt"
            , o = {
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
                    let t = o.getLimits();
                    t && o.setLimits({
                        ...t,
                        ...e
                    })
                }
                ,
                setPendingPrompt: e => {
                    try {
                        sessionStorage.setItem(n, e)
                    } catch (e) { }
                }
                ,
                getPendingPrompt: () => {
                    try {
                        return sessionStorage.getItem(n)
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearPendingPrompt: () => {
                    try {
                        sessionStorage.removeItem(n)
                    } catch (e) { }
                }
                ,
                LIMITS_UPDATE_EVENT: i
            };
        e.s(["sessionStorageUtils", 0, o])
    }
    , 1741, e => {
        "use strict";
        var t = e.i(932)
            , i = e.i(71645)
            , n = e.i(26288);
        function o() {
            return n.sessionStorageUtils.getLimits()
        }
        e.s(["useLimits", 0, () => {
            let e, a, r = (0,
                t.c)(2), [s, l] = (0,
                    i.useState)(o);
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                let e = () => {
                    l(n.sessionStorageUtils.getLimits())
                }
                    ;
                return e(),
                    window.addEventListener(n.sessionStorageUtils.LIMITS_UPDATE_EVENT, e),
                    () => {
                        window.removeEventListener(n.sessionStorageUtils.LIMITS_UPDATE_EVENT, e)
                    }
            }
                ,
                a = [],
                r[0] = e,
                r[1] = a) : (e = r[0],
                    a = r[1]),
                (0,
                    i.useEffect)(e, a),
                s
        }
        ])
    }
    , 34354, e => {
        "use strict";
        let t = {
            projectGeneration: 6,
            projectDeployment: 3,
            projectEditing: 3,
            suggestionAcceptance: 3,
            imageGeneration: 1
        }
            , i = {
                projectGeneration: "Project Generation",
                projectDeployment: "Project Deployment",
                projectEditing: "Project Editing",
                suggestionAcceptance: "Suggestion Acceptance",
                imageGeneration: "Image Generation"
            };
        function n(e, i) {
            return "projectEditing" === i && "number" == typeof e?.edit_action_cost ? e.edit_action_cost : t[i]
        }
        function o(e) {
            return i[e]
        }
        function a(e) {
            if (!e)
                return {
                    projectGeneration: !1,
                    projectDeployment: !1,
                    projectEditing: !1,
                    suggestionAcceptance: !1,
                    imageGeneration: !1
                };
            let t = e.messages_token_left || 0
                , i = "free" !== e.plan;
            return {
                projectGeneration: t >= 6,
                projectDeployment: t >= 3,
                projectEditing: t >= n(e, "projectEditing"),
                suggestionAcceptance: t >= 3,
                imageGeneration: i && t >= 1
            }
        }
        e.s(["checkCreditsForAction", 0, function (e, t) {
            let i = e?.messages_token_left || 0
                , o = n(e, t)
                , a = Math.max(0, o - i);
            return {
                hasEnoughCredits: i >= o,
                creditsNeeded: o,
                creditsAvailable: i,
                shortfall: a
            }
        }
            , "getActionName", 0, o, "getCreditErrorMessage", 0, function (e, t, i) {
                let n = Math.max(0, t - i)
                    , a = o(e);
                return 0 === i ? `You're out of credits. ${a} requires ${t} credits.` : `Insufficient credits for ${a}. You need ${t} credits but only have ${i}. You need ${n} more credits.`
            }
            , "getDisabledFeatures", 0, function (e) {
                let t = a(e)
                    , i = [];
                return t.projectGeneration || i.push("Project Generation"),
                    t.projectDeployment || i.push("Deployment"),
                    t.projectEditing || i.push("Editing"),
                    t.suggestionAcceptance || i.push("Suggestion Acceptance"),
                    t.imageGeneration || i.push("Image Generation"),
                    i
            }
            , "getFeatureAvailability", 0, a, "isLowOnCredits", 0, function (e) {
                if (!e)
                    return !1;
                let t = e.messages_token_left || 0;
                return t > 0 && t <= 5
            }
        ], 34354)
    }
    , 94733, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , n = e.i(71645)
            , o = e.i(18566);
        let a = (0,
            e.i(75254).default)("shield-alert", [["path", {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }], ["path", {
                d: "M12 8v4",
                key: "1got3b"
            }], ["path", {
                d: "M12 16h.01",
                key: "1drbdi"
            }]]);
        var r = e.i(37727)
            , s = e.i(85203)
            , l = e.i(21742)
            , c = e.i(15619)
            , u = e.i(38703)
            , d = e.i(11519)
            , m = e.i(1741)
            , p = e.i(34354)
            , g = e.i(75157)
            , h = e.i(75980);
        e.s(["default", 0, () => {
            let e, f, y, b, S, v, x, N, w, C, P, j, _, E, I, k, T, G = (0,
                i.c)(36), { showWarning: A, creditsLeft: U, isOutOfCreditsState: L, disabledFeatures: M, handleClick: O } = (() => {
                    let e, t, n, o, a = (0,
                        i.c)(12), r = (0,
                            m.useLimits)(), { openModal: s } = (0,
                                d.useModalStore)(), { isSignedIn: l } = (0,
                                    u.useAuth)(), c = r?.messages_token_left || 0, g = 0 === c;
                    a[0] !== r ? (e = (0,
                        p.isLowOnCredits)(r),
                        a[0] = r,
                        a[1] = e) : e = a[1];
                    let h = e;
                    a[2] !== r ? (t = (0,
                        p.getDisabledFeatures)(r),
                        a[2] = r,
                        a[3] = t) : t = a[3];
                    let f = t
                        , y = l && (g || h) && !!r;
                    a[4] !== s ? (n = () => s("pricing"),
                        a[4] = s,
                        a[5] = n) : n = a[5];
                    let b = n;
                    return a[6] !== c || a[7] !== f || a[8] !== b || a[9] !== g || a[10] !== y ? (o = {
                        showWarning: y,
                        creditsLeft: c,
                        isOutOfCreditsState: g,
                        disabledFeatures: f,
                        handleClick: b
                    },
                        a[6] = c,
                        a[7] = f,
                        a[8] = b,
                        a[9] = g,
                        a[10] = y,
                        a[11] = o) : o = a[11],
                        o
                }
                )(), D = (0,
                    o.usePathname)(), [R, F] = (0,
                        n.useState)(!1), [Y, W] = (0,
                            n.useState)(!1);
            G[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                F(!1),
                    W(!1)
            }
                ,
                G[0] = e) : e = G[0],
                G[1] !== D || G[2] !== A ? (f = [D, A],
                    G[1] = D,
                    G[2] = A,
                    G[3] = f) : f = G[3],
                (0,
                    n.useEffect)(e, f),
                G[4] === Symbol.for("react.memo_cache_sentinel") ? (y = () => {
                    W(!0),
                        setTimeout(() => F(!0), 300)
                }
                    ,
                    G[4] = y) : y = G[4];
            let $ = y
                , B = D?.startsWith("/preview/");
            if (!A || R || B)
                return null;
            let z = Y ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0";
            G[5] !== z ? (b = (0,
                g.cls)("hidden md:block fixed z-9999 bottom-5 right-5 transition-all duration-300", z),
                G[5] = z,
                G[6] = b) : b = G[6],
                G[7] !== O ? (S = (0,
                    t.jsx)(l.default, {
                        onClick: e => {
                            e.stopPropagation(),
                                O()
                        }
                        ,
                        className: "h-8 w-full text-xs",
                        styleClassName: "button-accent",
                        children: h.UI_STRINGS.buttons.upgradePlan
                    }),
                    G[7] = O,
                    G[8] = S) : S = G[8],
                G[9] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                    e.stopPropagation(),
                        $()
                }
                    ,
                    G[9] = v) : v = G[9],
                G[10] === Symbol.for("react.memo_cache_sentinel") ? (x = (0,
                    t.jsx)(l.default, {
                        "aria-label": "Close notification",
                        onClick: v,
                        className: "flex items-center justify-center p-0 h-8 aspect-square",
                        gradientRoundedClassName: "gradient-before-rounded-full",
                        children: (0,
                            t.jsx)(r.X, {
                                className: "h-4/10 w-4/10",
                                strokeWidth: 2
                            })
                    }),
                    G[10] = x) : x = G[10],
                G[11] !== S ? (N = (0,
                    t.jsxs)("div", {
                        className: "absolute z-10 flex items-center justify-center gap-3 inset-1 p-2 bg-white/20 rounded backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100",
                        children: [S, x]
                    }),
                    G[11] = S,
                    G[12] = N) : N = G[12],
                G[13] === Symbol.for("react.memo_cache_sentinel") ? (w = (0,
                    t.jsx)("div", {
                        className: "relative flex items-center justify-center px-0 h-8 aspect-square button-accent rounded-full",
                        children: (0,
                            t.jsx)(a, {
                                className: "relative size-45/100 text-white"
                            })
                    }),
                    G[13] = w) : w = G[13];
            let q = L ? h.UI_STRINGS.notifications.creditWarning.outOfCredits : h.UI_STRINGS.notifications.creditWarning.lowOnCredits;
            return G[14] !== q ? (C = (0,
                t.jsx)("h4", {
                    className: "text-base font-medium text-black leading-snug",
                    children: q
                }),
                G[14] = q,
                G[15] = C) : C = G[15],
                G[16] !== U ? (P = (0,
                    t.jsxs)("span", {
                        className: "text-xs text-black/75",
                        children: [U, " ", h.UI_STRINGS.notifications.creditWarning.left]
                    }),
                    G[16] = U,
                    G[17] = P) : P = G[17],
                G[18] !== C || G[19] !== P ? (j = (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [C, P]
                    }),
                    G[18] = C,
                    G[19] = P,
                    G[20] = j) : j = G[20],
                G[21] !== M || G[22] !== L ? (_ = L ? h.UI_STRINGS.notifications.creditWarning.clickToUpgrade : M.length > 0 ? h.UI_STRINGS.notifications.creditWarning.cantUse(M.join(", ")) : h.UI_STRINGS.notifications.creditWarning.featuresDisabled,
                    G[21] = M,
                    G[22] = L,
                    G[23] = _) : _ = G[23],
                G[24] !== _ ? (E = (0,
                    t.jsx)("p", {
                        className: "text-xs text-black/75 leading-snug",
                        children: _
                    }),
                    G[24] = _,
                    G[25] = E) : E = G[25],
                G[26] !== j || G[27] !== E ? (I = (0,
                    t.jsx)("div", {
                        className: "relative card rounded p-3 transition-all duration-300",
                        children: (0,
                            t.jsxs)("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [w, (0,
                                    t.jsxs)("div", {
                                        className: "flex-1 h-full min-w-0",
                                        children: [j, E]
                                    })]
                            })
                    }),
                    G[26] = j,
                    G[27] = E,
                    G[28] = I) : I = G[28],
                G[29] !== O || G[30] !== I || G[31] !== N ? (k = (0,
                    t.jsxs)("div", {
                        onClick: O,
                        className: "relative w-70 md:w-20 cursor-pointer group transition-all duration-200 hover:-translate-y-[3px]",
                        role: "alert",
                        "aria-live": "polite",
                        children: [N, I]
                    }),
                    G[29] = O,
                    G[30] = I,
                    G[31] = N,
                    G[32] = k) : k = G[32],
                G[33] !== k || G[34] !== b ? (T = (0,
                    t.jsx)(c.default, {
                        children: (0,
                            t.jsx)(s.default, {
                                className: b,
                                children: k
                            })
                    }),
                    G[33] = k,
                    G[34] = b,
                    G[35] = T) : T = G[35],
                T
        }
        ], 94733)
    }
    , 76175, e => {
        e.n(e.i(94733))
    }
]);
