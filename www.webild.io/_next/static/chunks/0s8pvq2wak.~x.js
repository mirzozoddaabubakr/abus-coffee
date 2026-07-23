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
            , a = e.i(31278)
            , o = e.i(75157);
        let n = (0,
            i.forwardRef)(({ children: e, className: i, styleClassName: n = "button-secondary", gradientRoundedClassName: s, type: l = "button", onClick: r, onMouseEnter: c, disabled: d = !1, isLoading: u = !1, loadingText: m }, p) => (0,
                t.jsx)("button", {
                    ref: p,
                    type: l,
                    disabled: d || u,
                    onMouseEnter: c,
                    className: (0,
                        o.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", s, n, i, (d || u) && "opacity-50 select-none pointer-events-none"),
                    onClick: r,
                    children: u ? (0,
                        t.jsxs)("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [(0,
                                t.jsx)(a.Loader2, {
                                    className: "h-[1em] w-auto animate-spin"
                                }), m ?? e]
                        }) : e
                }));
        n.displayName = "Button",
            e.s(["default", 0, n])
    }
    , 85203, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , a = e.i(71645)
            , o = e.i(75157);
        e.s(["default", 0, e => {
            let n, s, l, r, c, d, u, m, p, h = (0,
                i.c)(16);
            h[0] !== e ? ({ children: n, className: r, animationType: c, style: l, ...s } = e,
                h[0] = e,
                h[1] = n,
                h[2] = s,
                h[3] = l,
                h[4] = r,
                h[5] = c) : (n = h[1],
                    s = h[2],
                    l = h[3],
                    r = h[4],
                    c = h[5]);
            let f = void 0 === r ? "flex flex-col gap-5 w-full h-fit" : r
                , g = void 0 === c ? "full" : c
                , [y, b] = (0,
                    a.useState)("full" === g ? "animation-container" : "animation-container-fade")
                , S = (0,
                    a.useRef)(!1);
            return h[6] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
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
                u = [],
                h[6] = d,
                h[7] = u) : (d = h[6],
                    u = h[7]),
                (0,
                    a.useEffect)(d, u),
                h[8] !== y || h[9] !== f ? (m = (0,
                    o.cls)(f, y),
                    h[8] = y,
                    h[9] = f,
                    h[10] = m) : m = h[10],
                h[11] !== n || h[12] !== s || h[13] !== l || h[14] !== m ? (p = (0,
                    t.jsx)("div", {
                        className: m,
                        style: l,
                        ...s,
                        children: n
                    }),
                    h[11] = n,
                    h[12] = s,
                    h[13] = l,
                    h[14] = m,
                    h[15] = p) : p = h[15],
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
    , 15619, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , a = e.i(71645)
            , o = e.i(74080);
        e.s(["default", 0, e => {
            let n, s, l, r, c = (0,
                i.c)(9), { children: d, container: u, id: m, className: p } = e, [h, f] = (0,
                    a.useState)(!1), g = u ?? ("u" > typeof document ? document.body : null);
            if (c[0] === Symbol.for("react.memo_cache_sentinel") ? (n = () => (f(!0),
                () => f(!1)),
                s = [],
                c[0] = n,
                c[1] = s) : (n = c[0],
                    s = c[1]),
                (0,
                    a.useEffect)(n, s),
                !h || !g)
                return null;
            c[2] !== d || c[3] !== p || c[4] !== m ? (l = p || m ? (0,
                t.jsx)("div", {
                    id: m,
                    className: p,
                    children: d
                }) : d,
                c[2] = d,
                c[3] = p,
                c[4] = m,
                c[5] = l) : l = c[5];
            let y = l;
            return c[6] !== y || c[7] !== g ? (r = (0,
                o.createPortal)(y, g),
                c[6] = y,
                c[7] = g,
                c[8] = r) : r = c[8],
                r
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
    , 96833, e => {
        "use strict";
        var t = e.i(43476)
            , i = e.i(932)
            , a = e.i(71645)
            , o = e.i(52571)
            , n = e.i(37727)
            , s = e.i(15619)
            , l = e.i(21742)
            , r = e.i(85203)
            , c = e.i(18566)
            , d = e.i(5652)
            , u = e.i(196)
            , m = e.i(75157)
            , p = e.i(75980);
        function h(e) {
            return e.showModal
        }
        e.s(["default", 0, () => {
            let e, f, g, y, b, S, v, x, N, w, C, P, k, M, j = (0,
                i.c)(23), T = (0,
                    c.usePathname)(), I = (0,
                        u.useMaintenanceStore)(h), [_, E] = (0,
                            a.useState)(!1), [A, O] = (0,
                                a.useState)(!1);
            j[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
                d.isMaintenanceMode)(),
                j[0] = e) : e = j[0];
            let U = e;
            j[1] === Symbol.for("react.memo_cache_sentinel") ? (f = () => {
                E(!1),
                    O(!1)
            }
                ,
                j[1] = f) : f = j[1],
                j[2] !== T ? (g = [T, U],
                    j[2] = T,
                    j[3] = g) : g = j[3],
                (0,
                    a.useEffect)(f, g),
                j[4] === Symbol.for("react.memo_cache_sentinel") ? (y = () => {
                    O(!0),
                        setTimeout(() => E(!0), 300)
                }
                    ,
                    j[4] = y) : y = j[4];
            let G = y;
            j[5] !== I ? (b = () => {
                I()
            }
                ,
                j[5] = I,
                j[6] = b) : b = j[6];
            let L = b
                , R = T?.startsWith("/preview/");
            if (!U || _ || R)
                return null;
            let D = A ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0";
            return j[7] !== D ? (S = (0,
                m.cls)("fixed bottom-5 left-5 right-5 md:left-auto md:right-5 z-9999 transition-all duration-300", D),
                j[7] = D,
                j[8] = S) : S = j[8],
                j[9] !== L ? (v = (0,
                    t.jsx)(l.default, {
                        onClick: e => {
                            e.stopPropagation(),
                                L()
                        }
                        ,
                        className: "h-8 w-full text-xs",
                        children: p.UI_STRINGS.notifications.maintenance.learnMore
                    }),
                    j[9] = L,
                    j[10] = v) : v = j[10],
                j[11] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                    e.stopPropagation(),
                        G()
                }
                    ,
                    j[11] = x) : x = j[11],
                j[12] === Symbol.for("react.memo_cache_sentinel") ? (N = (0,
                    t.jsx)(l.default, {
                        "aria-label": "Close notification",
                        onClick: x,
                        className: "h-8 aspect-square p-0 flex items-center justify-center",
                        gradientRoundedClassName: "gradient-before-rounded-full",
                        children: (0,
                            t.jsx)(n.X, {
                                className: "h-4/10 w-4/10",
                                strokeWidth: 2
                            })
                    }),
                    j[12] = N) : N = j[12],
                j[13] !== v ? (w = (0,
                    t.jsxs)("div", {
                        className: "absolute inset-1 z-10 backdrop-blur-sm bg-white/20 rounded flex gap-3 p-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300",
                        children: [v, N]
                    }),
                    j[13] = v,
                    j[14] = w) : w = j[14],
                j[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0,
                    t.jsx)("div", {
                        className: "relative h-8 flex items-center justify-center rounded card aspect-square px-0",
                        children: (0,
                            t.jsx)(o.Info, {
                                className: "relative size-4/10 text-black"
                            })
                    }),
                    j[15] = C) : C = j[15],
                j[16] === Symbol.for("react.memo_cache_sentinel") ? (P = (0,
                    t.jsx)("div", {
                        className: "relative badge badge-yellow rounded p-3 transition-all duration-300",
                        children: (0,
                            t.jsxs)("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [C, (0,
                                    t.jsxs)("div", {
                                        className: "flex-1 h-full min-w-0",
                                        children: [(0,
                                            t.jsx)("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: (0,
                                                    t.jsx)("h4", {
                                                        className: "text-base font-medium text-black leading-snug",
                                                        children: p.UI_STRINGS.notifications.maintenance.title
                                                    })
                                            }), (0,
                                                t.jsx)("p", {
                                                    className: "text-xs text-black/75 leading-snug",
                                                    children: p.UI_STRINGS.notifications.maintenance.description
                                                })]
                                    })]
                            })
                    }),
                    j[16] = P) : P = j[16],
                j[17] !== L || j[18] !== w ? (k = (0,
                    t.jsxs)("div", {
                        onClick: L,
                        className: "relative w-full md:w-20 cursor-pointer group transition-all duration-200 hover:-translate-y-[3px]",
                        role: "alert",
                        "aria-live": "polite",
                        children: [w, P]
                    }),
                    j[17] = L,
                    j[18] = w,
                    j[19] = k) : k = j[19],
                j[20] !== k || j[21] !== S ? (M = (0,
                    t.jsx)(s.default, {
                        children: (0,
                            t.jsx)(r.default, {
                                className: S,
                                children: k
                            })
                    }),
                    j[20] = k,
                    j[21] = S,
                    j[22] = M) : M = j[22],
                M
        }
        ])
    }
    , 24989, e => {
        e.n(e.i(96833))
    }
]);
