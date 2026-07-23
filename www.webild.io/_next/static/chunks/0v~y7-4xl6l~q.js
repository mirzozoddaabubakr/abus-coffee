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
        let r = {
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
        e.s(["UI_STRINGS", 0, r])
    }
    , 1741, e => {
        "use strict";
        var t = e.i(932)
            , r = e.i(71645)
            , a = e.i(26288);
        function n() {
            return a.sessionStorageUtils.getLimits()
        }
        e.s(["useLimits", 0, () => {
            let e, i, o = (0,
                t.c)(2), [s, l] = (0,
                    r.useState)(n);
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                let e = () => {
                    l(a.sessionStorageUtils.getLimits())
                }
                    ;
                return e(),
                    window.addEventListener(a.sessionStorageUtils.LIMITS_UPDATE_EVENT, e),
                    () => {
                        window.removeEventListener(a.sessionStorageUtils.LIMITS_UPDATE_EVENT, e)
                    }
            }
                ,
                i = [],
                o[0] = e,
                o[1] = i) : (e = o[0],
                    i = o[1]),
                (0,
                    r.useEffect)(e, i),
                s
        }
        ])
    }
    , 91091, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , a = e.i(71645)
            , n = e.i(75157);
        let i = {
            top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
            bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
            left: "right-full top-1/2 -translate-y-1/2 mr-2",
            right: "left-full top-1/2 -translate-y-1/2 ml-2",
            "bottom-left": "top-full right-0 mt-2"
        }
            , o = {
                top: "-bottom-1 left-1/2 -translate-x-1/2",
                bottom: "-top-1 left-1/2 -translate-x-1/2",
                left: "-right-1 top-1/2 -translate-y-1/2",
                right: "-left-1 top-1/2 -translate-y-1/2",
                "bottom-left": "-top-1 right-2"
            }
            , s = {
                top: "bottom-0 left-0 w-full h-3 translate-y-full",
                bottom: "top-0 left-0 w-full h-3 -translate-y-full",
                left: "right-0 top-0 h-full w-3 translate-x-full",
                right: "left-0 top-0 h-full w-3 -translate-x-full",
                "bottom-left": "top-0 left-0 w-full h-3 -translate-y-full"
            };
        e.s(["default", 0, e => {
            let l, c, d, u, m, p, h, g = (0,
                r.c)(30), { children: f, content: y, customContent: v, position: b, className: S, contentClassName: w, disabled: x, hideArrow: I, interactive: C, forceVisible: P, onClose: k, preserveWrapper: j } = e, D = void 0 === b ? "bottom" : b, E = void 0 !== x && x, N = void 0 !== I && I, T = void 0 !== P && P, [M, L] = (0,
                    a.useState)(!1), _ = (0,
                        a.useRef)(null);
            g[0] !== T ? (l = () => {
                T && L(!0)
            }
                ,
                g[0] = T,
                g[1] = l) : l = g[1];
            let A = l;
            g[2] !== T || g[3] !== M || g[4] !== k ? (c = () => {
                T && M && k?.()
            }
                ,
                g[2] = T,
                g[3] = M,
                g[4] = k,
                g[5] = c) : c = g[5];
            let R = c;
            if (g[6] !== T || g[7] !== k ? (u = () => {
                if (!T)
                    return void L(!1);
                let e = e => {
                    _.current && !_.current.contains(e.target) && k?.()
                }
                    ;
                return document.addEventListener("mousedown", e),
                    () => document.removeEventListener("mousedown", e)
            }
                ,
                d = [T, k],
                g[6] = T,
                g[7] = k,
                g[8] = d,
                g[9] = u) : (d = g[8],
                    u = g[9]),
                (0,
                    a.useEffect)(u, d),
                !(void 0 !== j && j) && (E || !y && !v)) {
                let e;
                return g[10] !== f ? (e = (0,
                    t.jsx)(t.Fragment, {
                        children: f
                    }),
                    g[10] = f,
                    g[11] = e) : e = g[11],
                    e
            }
            let U = void 0 !== C && C || T
                , O = !E && (y || v)
                , F = T ? "pointer-events-auto" : U ? "group-hover:pointer-events-auto pointer-events-none" : "pointer-events-none";
            return g[12] !== S ? (m = (0,
                n.cls)("relative group w-fit", S),
                g[12] = S,
                g[13] = m) : m = g[13],
                g[14] !== y || g[15] !== w || g[16] !== v || g[17] !== T || g[18] !== N || g[19] !== U || g[20] !== F || g[21] !== D || g[22] !== O ? (p = O && (0,
                    t.jsxs)("div", {
                        className: (0,
                            n.cls)("hidden md:block absolute! z-100 transition-opacity duration-300", T ? "opacity-100" : "opacity-0 group-hover:opacity-100", F, i[D], w),
                        children: [U && (0,
                            t.jsx)("div", {
                                className: (0,
                                    n.cls)("absolute", s[D])
                            }), v || (0,
                                t.jsxs)(t.Fragment, {
                                    children: [!N && (0,
                                        t.jsx)("div", {
                                            className: (0,
                                                n.cls)("absolute! w-2 h-2 bg-black rotate-45", o[D])
                                        }), (0,
                                            t.jsx)("div", {
                                                className: "relative px-3 py-1 text-xs text-white button-tooltip rounded-max-sm whitespace-nowrap",
                                                children: y
                                            })]
                                })]
                    }),
                    g[14] = y,
                    g[15] = w,
                    g[16] = v,
                    g[17] = T,
                    g[18] = N,
                    g[19] = U,
                    g[20] = F,
                    g[21] = D,
                    g[22] = O,
                    g[23] = p) : p = g[23],
                g[24] !== f || g[25] !== A || g[26] !== R || g[27] !== m || g[28] !== p ? (h = (0,
                    t.jsxs)("div", {
                        ref: _,
                        className: m,
                        onMouseEnter: A,
                        onMouseLeave: R,
                        children: [f, p]
                    }),
                    g[24] = f,
                    g[25] = A,
                    g[26] = R,
                    g[27] = m,
                    g[28] = p,
                    g[29] = h) : h = g[29],
                h
        }
        ])
    }
    , 64711, 69693, e => {
        "use strict";
        var t = e.i(68834)
            , r = e.i(79473)
            , a = e.i(18279);
        let n = (0,
            t.create)()((0,
                r.devtools)((e, t) => ({
                    changes: [],
                    isDirty: !1,
                    projectId: null,
                    versionId: null,
                    token: null,
                    iframeChanges: [],
                    savedChanges: [],
                    setProjectContext: (r, a, n) => {
                        e({
                            projectId: r,
                            versionId: a,
                            token: n
                        }),
                            t().loadSavedChanges()
                    }
                    ,
                    addChange: t => {
                        let r = {
                            ...t,
                            id: `change-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
                            timestamp: Date.now()
                        };
                        e(e => ({
                            changes: [...e.changes, r],
                            isDirty: !0
                        }))
                    }
                    ,
                    clearChanges: () => {
                        e({
                            changes: [],
                            isDirty: !1
                        })
                    }
                    ,
                    removeChange: t => {
                        e(e => ({
                            changes: e.changes.filter(e => e.id !== t),
                            isDirty: e.changes.length > 1
                        }))
                    }
                    ,
                    applyChanges: async () => {
                        let { changes: r, iframeChanges: n, projectId: i, versionId: o, token: s } = t();
                        if (!i || !o || !s)
                            return e({
                                changes: [],
                                isDirty: !1
                            }),
                                Promise.resolve();
                        try {
                            if (n.length > 0) {
                                let t = n.map(e => ({
                                    oldValue: e.oldValue || "",
                                    newValue: e.newValue || "",
                                    sectionId: e.sectionId || "hero"
                                }))
                                    , r = await (0,
                                        a.editMessageAPI)(i, o, t, s)
                                    , l = `webild-changes-${i}-${o}`;
                                return localStorage.removeItem(l),
                                    e({
                                        changes: [],
                                        iframeChanges: [],
                                        savedChanges: [],
                                        isDirty: !1
                                    }),
                                    r.data
                            }
                            let t = r.filter(e => "updateText" === e.type);
                            if (t.length > 0) {
                                let r = t.filter(e => void 0 !== e.data.oldValue && void 0 !== e.data.newValue).map(e => ({
                                    oldValue: String(e.data.oldValue),
                                    newValue: String(e.data.newValue),
                                    sectionId: e.selector
                                }));
                                if (r.length > 0) {
                                    let t = await (0,
                                        a.editMessageAPI)(i, o, r, s);
                                    return e({
                                        changes: [],
                                        isDirty: !1
                                    }),
                                        t.data
                                }
                            }
                            e({
                                changes: [],
                                isDirty: !1
                            })
                        } catch {
                            e({
                                changes: [],
                                isDirty: !1
                            })
                        }
                        return Promise.resolve()
                    }
                    ,
                    setIframeChanges: t => {
                        e({
                            iframeChanges: t,
                            isDirty: !0
                        })
                    }
                    ,
                    getSavedChanges: () => t().savedChanges,
                    loadSavedChanges: () => {
                        let { projectId: r, versionId: a } = t();
                        if (!r || !a)
                            return;
                        let n = `webild-changes-${r}-${a}`
                            , i = localStorage.getItem(n);
                        if (i)
                            try {
                                let t = JSON.parse(i);
                                e({
                                    savedChanges: t
                                })
                            } catch (e) { }
                    }
                    ,
                    undoLastChange: () => {
                        e(e => {
                            if (0 === e.changes.length)
                                return e;
                            let t = e.changes.slice(0, -1);
                            return {
                                changes: t,
                                isDirty: t.length > 0
                            }
                        }
                        )
                    }
                    ,
                    getChangesForExport: () => {
                        let e = t().changes;
                        return {
                            timestamp: Date.now(),
                            totalChanges: e.length,
                            operations: e.map(e => ({
                                type: e.type,
                                selector: e.selector,
                                ...e.data
                            }))
                        }
                    }
                }), {
                    name: "project-changes-store"
                }));
        e.s(["useProjectChangesStore", 0, n], 69693);
        let i = (e, t) => `webild-changes-${e}-${t}`
            , o = (e, t, r) => {
                try {
                    let a = i(e, t);
                    localStorage.setItem(a, JSON.stringify(r))
                } catch (e) { }
            }
            , s = (e, t) => {
                try {
                    let r = i(e, t);
                    localStorage.removeItem(r)
                } catch (e) { }
            }
            , l = (0,
                t.create)()((0,
                    r.devtools)((e, t) => ({
                        isEditMode: !1,
                        isFromImageGenerationFlow: !1,
                        previousView: null,
                        hoveredElement: null,
                        selectedElement: null,
                        isTextEditing: !1,
                        isSaving: !1,
                        isImageReplacing: !1,
                        isColorUpdating: !1,
                        iframeReloadTrigger: 0,
                        pendingVercelSandboxUrl: null,
                        localChanges: [],
                        projectId: null,
                        versionId: null,
                        mediaSearchQuery: "",
                        showDiscardModal: !1,
                        skippedEditsInfo: null,
                        setMediaSearchQuery: t => e({
                            mediaSearchQuery: t
                        }),
                        setShowDiscardModal: t => e({
                            showDiscardModal: t
                        }),
                        setSkippedEditsInfo: t => e({
                            skippedEditsInfo: t
                        }),
                        setEditMode: (t, r = !1, a) => {
                            e({
                                isEditMode: t,
                                isFromImageGenerationFlow: !!t && r,
                                previousView: t && a || null,
                                isTextEditing: !1,
                                isSaving: !1,
                                isImageReplacing: !1,
                                ...!t && {
                                    hoveredElement: null,
                                    mediaSearchQuery: ""
                                }
                            })
                        }
                        ,
                        toggleEditMode: () => e(e => ({
                            isEditMode: !e.isEditMode,
                            isFromImageGenerationFlow: !1,
                            previousView: null,
                            isTextEditing: !1,
                            isSaving: !1,
                            isImageReplacing: !1,
                            hoveredElement: null,
                            selectedElement: null,
                            mediaSearchQuery: ""
                        })),
                        setHoveredElement: t => e({
                            hoveredElement: t
                        }),
                        setSelectedElement: t => {
                            e({
                                selectedElement: t
                            })
                        }
                        ,
                        clearInspectorState: () => e({
                            hoveredElement: null,
                            selectedElement: null
                        }),
                        setTextEditing: t => e({
                            isTextEditing: t
                        }),
                        setSaving: t => e({
                            isSaving: t
                        }),
                        setImageReplacing: t => e({
                            isImageReplacing: t
                        }),
                        setColorUpdating: t => e({
                            isColorUpdating: t
                        }),
                        triggerIframeReload: () => e(e => ({
                            iframeReloadTrigger: e.iframeReloadTrigger + 1
                        })),
                        setPendingVercelSandboxUrl: t => e({
                            pendingVercelSandboxUrl: t
                        }),
                        setProjectInfo: (r, a) => {
                            let n = t();
                            if (n.projectId === r && n.versionId === a)
                                return;
                            let i = n.projectId === r ? n.localChanges : [];
                            n.projectId && n.versionId && s(n.projectId, n.versionId),
                                e({
                                    projectId: r,
                                    versionId: a,
                                    localChanges: i
                                }),
                                s(r, a),
                                i.length > 0 && o(r, a, i)
                        }
                        ,
                        addLocalChange: r => {
                            let a = t();
                            if (!a.projectId || !a.versionId)
                                return;
                            let n = e => e.selector === r.selector && e.sectionId === r.sectionId || "replaceImage" === e.type && "replaceImage" === r.type && e.oldValue === r.oldValue && (e.sectionId ?? "") === (r.sectionId ?? "")
                                , i = a.localChanges.find(n)
                                , s = [...a.localChanges.filter(e => !n(e)), i ? {
                                    ...r,
                                    oldValue: i.oldValue
                                } : r];
                            e({
                                localChanges: s
                            }),
                                o(a.projectId, a.versionId, s)
                        }
                        ,
                        clearLocalChanges: () => {
                            let r = t();
                            if (!r.projectId || !r.versionId)
                                return;
                            e({
                                localChanges: []
                            }),
                                s(r.projectId, r.versionId);
                            let a = document.querySelector("iframe");
                            a?.contentWindow && a.contentWindow.postMessage({
                                type: "webild-clear-local-changes"
                            }, "*")
                        }
                        ,
                        saveLocalChanges: async r => {
                            let i = t();
                            if (!i.localChanges.length || !i.projectId || !i.versionId)
                                return null;
                            e({
                                isSaving: !0
                            });
                            try {
                                if (!r)
                                    throw Error("No auth token available");
                                let t = i.localChanges
                                    , l = t.map(e => ({
                                        oldValue: e.oldValue,
                                        newValue: e.newValue,
                                        sectionId: e.sectionId,
                                        page: e.page,
                                        ...e.src ? {
                                            src: e.src
                                        } : {}
                                    }))
                                    , c = await (0,
                                        a.visualEditAPI)(i.projectId, i.versionId, l, r)
                                    , d = c?.data ?? null
                                    , u = (d?.skipped ?? []).map(e => t[e]).filter(Boolean).map(e => ({
                                        ...e,
                                        failCount: (e.failCount ?? 0) + 1
                                    })).filter(e => e.failCount < 3)
                                    , m = d?.version?.id ?? i.versionId;
                                return e({
                                    localChanges: u,
                                    versionId: m
                                }),
                                    s(i.projectId, i.versionId),
                                    u.length > 0 && o(i.projectId, m, u),
                                    n.getState().setIframeChanges([]),
                                    d
                            } finally {
                                e({
                                    isSaving: !1
                                })
                            }
                        }
                        ,
                        updateElementInRealTime: (e, t, r) => {
                            let a = document.querySelector("iframe");
                            if (!a?.contentWindow || !e)
                                return;
                            let n = {
                                type: `webild-update-${t}`,
                                data: {
                                    selector: e,
                                    ...r
                                }
                            };
                            a.contentWindow.postMessage(n, "*")
                        }
                    }), {
                        name: "edit-mode-store"
                    }));
        e.s(["useEditModeStore", 0, l], 64711)
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
    , 64659, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("chevron-down", [["path", {
                d: "m6 9 6 6 6-6",
                key: "qrunsl"
            }]]);
        e.s(["ChevronDown", 0, t], 64659)
    }
    , 95380, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , a = e.i(71645)
            , n = e.i(30776)
            , i = e.i(75157);
        e.s(["default", 0, e => {
            var o;
            let s, l, c, d, u, m, p, h, g = (0,
                r.c)(12), { isOpen: f, onClose: y, children: v, className: b, contentClassName: S, styleClassName: w, triggerRef: x } = e, I = void 0 === w ? "card" : w, C = (0,
                    a.useRef)(null);
            return g[0] !== x ? (s = x ? [x] : void 0,
                g[0] = x,
                g[1] = s) : s = g[1],
                o = s,
                p = (0,
                    r.c)(6),
                h = void 0 === f || f,
                p[0] !== o || p[1] !== y || p[2] !== h || p[3] !== C ? (u = () => {
                    if (!h)
                        return;
                    let e = e => {
                        C.current && !C.current.contains(e.target) && (o?.some(t => t.current?.contains(e.target)) || y())
                    }
                        , t = e => {
                            "Escape" === e.key && y()
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
                    m = [C, y, h, o],
                    p[0] = o,
                    p[1] = y,
                    p[2] = h,
                    p[3] = C,
                    p[4] = u,
                    p[5] = m) : (u = p[4],
                        m = p[5]),
                (0,
                    a.useEffect)(u, m),
                g[2] !== b || g[3] !== I ? (l = (0,
                    i.cls)("absolute! z-50 right-0 top-12 rounded origin-top-right", I, b),
                    g[2] = b,
                    g[3] = I,
                    g[4] = l) : l = g[4],
                g[5] !== v || g[6] !== S ? (c = (0,
                    t.jsx)("div", {
                        ref: C,
                        className: S,
                        children: v
                    }),
                    g[5] = v,
                    g[6] = S,
                    g[7] = c) : c = g[7],
                g[8] !== f || g[9] !== l || g[10] !== c ? (d = (0,
                    t.jsx)(n.default, {
                        isVisible: f,
                        variant: "fade-scale",
                        className: l,
                        children: c
                    }),
                    g[8] = f,
                    g[9] = l,
                    g[10] = c,
                    g[11] = d) : d = g[11],
                d
        }
        ], 95380)
    }
    , 28853, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , a = e.i(75157);
        e.s(["default", 0, e => {
            let n, i, o = (0,
                r.c)(4), { className: s } = e;
            return o[0] !== s ? (n = (0,
                a.cls)("border-t-2 border-black/5", s),
                o[0] = s,
                o[1] = n) : n = o[1],
                o[2] !== n ? (i = (0,
                    t.jsx)("div", {
                        className: n
                    }),
                    o[2] = n,
                    o[3] = i) : i = o[3],
                i
        }
        ])
    }
    , 26288, e => {
        "use strict";
        let t = "user_limits"
            , r = "user_limits_updated"
            , a = "pending_prompt"
            , n = {
                setLimits: e => {
                    try {
                        localStorage.setItem(t, JSON.stringify(e)),
                            window.dispatchEvent(new CustomEvent(r))
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
                            window.dispatchEvent(new CustomEvent(r))
                    } catch (e) { }
                }
                ,
                updateLimits: e => {
                    let t = n.getLimits();
                    t && n.setLimits({
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
                LIMITS_UPDATE_EVENT: r
            };
        e.s(["sessionStorageUtils", 0, n])
    }
    , 95057, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = {
            formatUrl: function () {
                return s
            },
            formatWithValidation: function () {
                return c
            },
            urlObjectKeys: function () {
                return l
            }
        };
        for (var n in a)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = e.r(90809)._(e.r(98183))
            , o = /https?|ftp|gopher|file/;
        function s(e) {
            let { auth: t, hostname: r } = e
                , a = e.protocol || ""
                , n = e.pathname || ""
                , s = e.hash || ""
                , l = e.query || ""
                , c = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
                e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r),
                    e.port && (c += ":" + e.port)),
                l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
            let d = e.search || l && `?${l}` || "";
            return a && !a.endsWith(":") && (a += ":"),
                e.slashes || (!a || o.test(a)) && !1 !== c ? (c = "//" + (c || ""),
                    n && "/" !== n[0] && (n = "/" + n)) : c || (c = ""),
                s && "#" !== s[0] && (s = "#" + s),
                d && "?" !== d[0] && (d = "?" + d),
                n = n.replace(/[?#]/g, encodeURIComponent),
                d = d.replace("#", "%23"),
                `${a}${c}${n}${d}${s}`
        }
        let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function c(e) {
            return s(e)
        }
    }
    , 73668, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "isLocalURL", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
        let a = e.r(18967)
            , n = e.r(52817);
        function i(e) {
            if (!(0,
                a.isAbsoluteUrl)(e))
                return !0;
            try {
                let t = (0,
                    a.getLocationOrigin)()
                    , r = new URL(e, t);
                return r.origin === t && (0,
                    n.hasBasePath)(r.pathname)
            } catch (e) {
                return !1
            }
        }
    }
    , 84508, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "errorOnce", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
        let a = e => { }
    }
    , 22016, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = {
            default: function () {
                return y
            },
            useLinkStatus: function () {
                return b
            }
        };
        for (var n in a)
            Object.defineProperty(r, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = e.r(90809)
            , o = e.r(43476)
            , s = i._(e.r(71645))
            , l = e.r(95057)
            , c = e.r(8372)
            , d = e.r(18581)
            , u = e.r(18967)
            , m = e.r(5550);
        e.r(33525);
        let p = e.r(88540)
            , h = e.r(91949)
            , g = e.r(73668)
            , f = e.r(9396);
        function y(t) {
            var r, a;
            let n, i, y, [b, S] = (0,
                s.useOptimistic)(h.IDLE_LINK_STATUS), w = (0,
                    s.useRef)(null), { href: x, as: I, children: C, prefetch: P = null, passHref: k, replace: j, shallow: D, scroll: E, onClick: N, onMouseEnter: T, onTouchStart: M, legacyBehavior: L = !1, onNavigate: _, transitionTypes: A, ref: R, unstable_dynamicOnHover: U, ...O } = t;
            n = C,
                L && ("string" == typeof n || "number" == typeof n) && (n = (0,
                    o.jsx)("a", {
                        children: n
                    }));
            let F = s.default.useContext(c.AppRouterContext)
                , G = !1 !== P
                , B = !1 !== P ? null === (a = P) || "auto" === a ? f.FetchStrategy.PPR : f.FetchStrategy.Full : f.FetchStrategy.PPR
                , $ = "string" == typeof (r = I || x) ? r : (0,
                    l.formatUrl)(r);
            if (L) {
                if (n?.$$typeof === Symbol.for("react.lazy"))
                    throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                        value: "E863",
                        enumerable: !1,
                        configurable: !0
                    });
                i = s.default.Children.only(n)
            }
            let V = L ? i && "object" == typeof i && i.ref : R
                , W = s.default.useCallback(e => (null !== F && (w.current = (0,
                    h.mountLinkInstance)(e, $, F, B, G, S)),
                    () => {
                        w.current && ((0,
                            h.unmountLinkForCurrentNavigation)(w.current),
                            w.current = null),
                            (0,
                                h.unmountPrefetchableInstance)(e)
                    }
                ), [G, $, F, B, S])
                , q = {
                    ref: (0,
                        d.useMergedRef)(W, V),
                    onClick(t) {
                        L || "function" != typeof N || N(t),
                            L && i.props && "function" == typeof i.props.onClick && i.props.onClick(t),
                            !F || t.defaultPrevented || function (t, r, a, n, i, o, l) {
                                if ("u" > typeof window) {
                                    let c, { nodeName: d } = t.currentTarget;
                                    if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download"))
                                        return;
                                    if (!(0,
                                        g.isLocalURL)(r)) {
                                        n && (t.preventDefault(),
                                            location.replace(r));
                                        return
                                    }
                                    if (t.preventDefault(),
                                        o) {
                                        let e = !1;
                                        if (o({
                                            preventDefault: () => {
                                                e = !0
                                            }
                                        }),
                                            e)
                                            return
                                    }
                                    let { dispatchNavigateAction: u } = e.r(99781);
                                    s.default.startTransition(() => {
                                        u(r, n ? "replace" : "push", !1 === i ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, a.current, l)
                                    }
                                    )
                                }
                            }(t, $, w, j, E, _, A)
                    },
                    onMouseEnter(e) {
                        L || "function" != typeof T || T(e),
                            L && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e),
                            F && G && (0,
                                h.onNavigationIntent)(e.currentTarget, !0 === U)
                    },
                    onTouchStart: function (e) {
                        L || "function" != typeof M || M(e),
                            L && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e),
                            F && G && (0,
                                h.onNavigationIntent)(e.currentTarget, !0 === U)
                    }
                };
            return (0,
                u.isAbsoluteUrl)($) ? q.href = $ : L && !k && ("a" !== i.type || "href" in i.props) || (q.href = (0,
                    m.addBasePath)($)),
                y = L ? s.default.cloneElement(i, q) : (0,
                    o.jsx)("a", {
                        ...O,
                        ...q,
                        children: n
                    }),
                (0,
                    o.jsx)(v.Provider, {
                        value: b,
                        children: y
                    })
        }
        e.r(84508);
        let v = (0,
            s.createContext)(h.IDLE_LINK_STATUS)
            , b = () => (0,
                s.useContext)(v);
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }),
            Object.assign(r.default, r),
            t.exports = r.default)
    }
    , 56073, e => {
        "use strict";
        let t = {
            DISCORD: "https://discord.gg/YM9bHzH5uX",
            LINKEDIN: "https://www.linkedin.com/company/webildio",
            X: "https://x.com/webild_io",
            INSTAGRAM: "https://www.instagram.com/webild",
            SUPPORT_EMAIL: "mailto:support@webild.com"
        }
            , r = [{
                name: "Discord",
                icon: "https://storage.googleapis.com/webild/default/platform/icons/discord.svg",
                url: t.DISCORD,
                type: "image"
            }, {
                name: "LinkedIn",
                icon: "https://storage.googleapis.com/webild/default/platform/icons/linkedin.svg",
                url: t.LINKEDIN,
                type: "image"
            }, {
                name: "X",
                icon: "https://storage.googleapis.com/webild/default/platform/icons/x.svg",
                url: t.X,
                type: "image"
            }, {
                name: "Instagram",
                url: t.INSTAGRAM,
                type: "lucide"
            }]
            , a = [{
                label: "X (Twitter)",
                href: t.X
            }, {
                label: "LinkedIn",
                href: t.LINKEDIN
            }, {
                label: "Instagram",
                href: t.INSTAGRAM
            }, {
                label: "Discord",
                href: t.DISCORD
            }];
        e.s(["FOOTER_SOCIAL_LINKS", 0, a, "SOCIAL_LINKS", 0, r, "URLS", 0, t])
    }
    , 77402, e => {
        "use strict";
        var t = e.i(932)
            , r = e.i(18566);
        e.s(["useButtonClick", 0, (e, a) => {
            let n, i = (0,
                t.c)(4), o = (0,
                    r.useRouter)();
            return i[0] !== e || i[1] !== a || i[2] !== o ? (n = () => {
                if (e) {
                    let t = /^(https?:\/\/|www\.)/.test(e)
                        , r = e.startsWith("/");
                    if (t)
                        window.open(e.startsWith("www.") ? `https://${e}` : e, "_blank", "noopener,noreferrer");
                    else if (r)
                        o.push(e);
                    else {
                        let t = document.getElementById(e);
                        t && t.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }
                a?.()
            }
                ,
                i[0] = e,
                i[1] = a,
                i[2] = o,
                i[3] = n) : n = i[3],
                n
        }
        ])
    }
    , 83086, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("sparkles", [["path", {
                d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                key: "1s2grr"
            }], ["path", {
                d: "M20 2v4",
                key: "1rf3ol"
            }], ["path", {
                d: "M22 4h-4",
                key: "gwowj6"
            }], ["circle", {
                cx: "4",
                cy: "20",
                r: "2",
                key: "6kqj1y"
            }]]);
        e.s(["Sparkles", 0, t], 83086)
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
    , 85710, e => {
        "use strict";
        let t = "webild-subscription-plans"
            , r = "webild-referral-data"
            , a = "webild-credits-data"
            , n = "webild-charges-data"
            , i = "webild-subscription-summary"
            , o = {
                setPlans: e => {
                    try {
                        let r = {
                            plans: e,
                            timestamp: Date.now()
                        };
                        localStorage.setItem(t, JSON.stringify(r))
                    } catch (e) { }
                }
                ,
                getPlans: () => {
                    try {
                        let e = localStorage.getItem(t);
                        if (!e)
                            return null;
                        return JSON.parse(e).plans
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearPlans: () => {
                    try {
                        localStorage.removeItem(t)
                    } catch (e) { }
                }
                ,
                setReferralData: e => {
                    try {
                        let t = {
                            referralCode: e,
                            timestamp: Date.now()
                        };
                        localStorage.setItem(r, JSON.stringify(t))
                    } catch (e) { }
                }
                ,
                getReferralData: () => {
                    try {
                        let e = localStorage.getItem(r);
                        if (!e)
                            return null;
                        return JSON.parse(e).referralCode
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearReferralData: () => {
                    try {
                        localStorage.removeItem(r)
                    } catch (e) { }
                }
                ,
                setCredits: e => {
                    try {
                        let t = {
                            plans: e,
                            timestamp: Date.now()
                        };
                        localStorage.setItem(a, JSON.stringify(t))
                    } catch (e) { }
                }
                ,
                getCredits: () => {
                    try {
                        let e = localStorage.getItem(a);
                        if (!e)
                            return null;
                        return JSON.parse(e).plans
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearCredits: () => {
                    try {
                        localStorage.removeItem(a)
                    } catch (e) { }
                }
                ,
                setCharges: e => {
                    try {
                        let t = {
                            charges: e,
                            timestamp: Date.now()
                        };
                        localStorage.setItem(n, JSON.stringify(t))
                    } catch (e) { }
                }
                ,
                getCharges: () => {
                    try {
                        let e = localStorage.getItem(n);
                        if (!e)
                            return null;
                        return JSON.parse(e).charges
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearCharges: () => {
                    try {
                        localStorage.removeItem(n)
                    } catch (e) { }
                }
                ,
                setSubscription: e => {
                    try {
                        if (!e)
                            return void localStorage.removeItem(i);
                        let t = {
                            subscription: e,
                            timestamp: Date.now()
                        };
                        localStorage.setItem(i, JSON.stringify(t))
                    } catch (e) { }
                }
                ,
                getSubscription: () => {
                    try {
                        let e = localStorage.getItem(i);
                        if (!e)
                            return null;
                        return JSON.parse(e).subscription
                    } catch (e) {
                        return null
                    }
                }
                ,
                clearSubscription: () => {
                    try {
                        localStorage.removeItem(i)
                    } catch (e) { }
                }
                ,
                clearAll: () => {
                    o.clearPlans(),
                        o.clearReferralData(),
                        o.clearCredits(),
                        o.clearCharges(),
                        o.clearSubscription()
                }
                ,
                getPlanByAmount: e => {
                    let t = o.getPlans();
                    return t && t.find(t => t.unitAmount === e) || null
                }
                ,
                getPlanByCode: e => {
                    let t = o.getPlans();
                    return t && t.find(t => t.planCode === e) || null
                }
                ,
                getCreditByAmount: e => {
                    let t = o.getCredits();
                    return t && t.find(t => t.unitAmount === e) || null
                }
            };
        e.s(["billingStorage", 0, o])
    }
    , 40846, e => {
        "use strict";
        var t = e.i(68834)
            , r = e.i(79473);
        let a = (0,
            t.create)()((0,
                r.subscribeWithSelector)((e, t) => ({
                    userDomains: [],
                    projectDomains: [],
                    allProjectDomains: [],
                    currentProjectInfo: null,
                    isLoading: !0,
                    error: null,
                    lastFetch: 0,
                    pendingRequests: new Set,
                    pendingDomainView: null,
                    pendingDomainSearchQuery: null,
                    skipToPurchase: !1,
                    isProcessingStripePurchase: !1,
                    isDeployingFromPublishDropdown: !1,
                    cameFromWebsiteTab: !1,
                    cameFromAnalyticsTab: !1,
                    setUserDomains: t => e({
                        userDomains: t,
                        lastFetch: Date.now()
                    }),
                    setProjectDomains: (t, r) => e({
                        projectDomains: t,
                        currentProjectInfo: r || null,
                        lastFetch: Date.now()
                    }),
                    setAllProjectDomains: t => e({
                        allProjectDomains: t,
                        lastFetch: Date.now()
                    }),
                    setLoading: t => e({
                        isLoading: t
                    }),
                    setError: t => e({
                        error: t
                    }),
                    setPendingDomainView: t => e({
                        pendingDomainView: t
                    }),
                    setPendingDomainSearchQuery: t => e({
                        pendingDomainSearchQuery: t
                    }),
                    setSkipToPurchase: t => e({
                        skipToPurchase: t
                    }),
                    setIsProcessingStripePurchase: t => e({
                        isProcessingStripePurchase: t
                    }),
                    setIsDeployingFromPublishDropdown: t => e({
                        isDeployingFromPublishDropdown: t
                    }),
                    setCameFromWebsiteTab: t => e({
                        cameFromWebsiteTab: t
                    }),
                    setCameFromAnalyticsTab: t => e({
                        cameFromAnalyticsTab: t
                    }),
                    addPendingRequest: t => e(e => ({
                        pendingRequests: new Set([...e.pendingRequests, t])
                    })),
                    removePendingRequest: t => e(e => {
                        let r = new Set(e.pendingRequests);
                        return r.delete(t),
                        {
                            pendingRequests: r
                        }
                    }
                    ),
                    isPendingRequest: e => t().pendingRequests.has(e),
                    addProjectDomain: t => e(e => ({
                        projectDomains: [...e.projectDomains.filter(e => e.domain.name !== t.domain.name), t]
                    })),
                    removeProjectDomain: t => e(e => ({
                        projectDomains: e.projectDomains.filter(e => e.domain.name !== t)
                    })),
                    updateDomainAutoRenewal: (t, r) => e(e => ({
                        userDomains: e.userDomains.map(e => e.name === t ? {
                            ...e,
                            auto_renew: r
                        } : e)
                    })),
                    getDomainStatus: e => {
                        let r = t().projectDomains.find(t => t.domain.name === e);
                        return r ? r.domain.verified ? "connected" : r.config.misconfigured && !r.domain.verified ? "error" : "pending" : "not_connected"
                    }
                    ,
                    getPrimaryDomain: () => {
                        let e = t()
                            , r = e.projectDomains.filter(e => !e.domain.name.includes("vercel.app"))
                            , a = r.filter(e => e.domain.verified);
                        if (a.length > 0)
                            return a[0].domain.name;
                        if (r.length > 0)
                            return r[0].domain.name;
                        let n = e.projectDomains.find(e => e.domain.name.includes("vercel.app"));
                        return n ? n.domain.name : null
                    }
                    ,
                    findDomainProject: e => {
                        let r = t();
                        if (r.projectDomains.find(t => t.domain.name === e) && r.currentProjectInfo)
                            return r.currentProjectInfo;
                        for (let t of r.allProjectDomains)
                            if (t.domains.find(t => t.domain.name === e))
                                return {
                                    projectId: t.projectId,
                                    projectName: t.projectName
                                };
                        return null
                    }
                    ,
                    getUserDomainsWithUsage: e => {
                        let r = t();
                        return r.userDomains.map(t => {
                            let a = r.findDomainProject(t.name)
                                , n = a?.projectId === e;
                            return {
                                ...t,
                                isConnectedToCurrentProject: n,
                                connectedProjectId: a?.projectId,
                                connectedProjectName: a?.projectName
                            }
                        }
                        )
                    }
                    ,
                    getDisplayDomains: e => {
                        let r = t()
                            , a = []
                            , n = r.projectDomains.filter(e => !e.domain.name.includes("vercel.app"))
                            , i = n.filter(e => e.domain.verified)
                            , o = i.length > 0 ? i[0] : n.length > 0 ? n[0] : null;
                        return r.projectDomains.forEach(t => {
                            if (!t.domain.name.includes("vercel.app")) {
                                let n = r.getDomainStatus(t.domain.name)
                                    , i = o ? t.domain.name === o.domain.name : t.domain.name === e;
                                a.push({
                                    name: t.domain.name,
                                    status: n,
                                    statusColor: "connected" === n ? "text-green-400" : "pending" === n ? "text-yellow-400" : "text-red-400",
                                    isVerified: t.domain.verified,
                                    isCurrentDomain: i,
                                    canConnect: "connected" !== n
                                })
                            }
                        }
                        ),
                            a
                    }
                    ,
                    invalidateCache: () => e({
                        lastFetch: 0
                    }),
                    shouldRefetch: () => {
                        let e = t();
                        return Date.now() - e.lastFetch > 3e5
                    }
                })));
        e.s(["selectPrimaryDomain", 0, e => e.getPrimaryDomain, "useDomainStore", 0, a])
    }
    , 48256, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("globe", [["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }], ["path", {
                d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                key: "13o1zl"
            }], ["path", {
                d: "M2 12h20",
                key: "9i4pu4"
            }]]);
        e.s(["Globe", 0, t], 48256)
    }
    , 31343, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("play", [["path", {
                d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
                key: "10ikf1"
            }]]);
        e.s(["Play", 0, t], 31343)
    }
    , 92037, e => {
        "use strict";
        var t = e.i(68834)
            , r = e.i(79473);
        let a = (0,
            t.create)()((0,
                r.devtools)((e, t) => ({
                    user: null,
                    isLoading: !1,
                    error: null,
                    setUser: t => e({
                        user: t,
                        error: null
                    }),
                    setLoading: t => e({
                        isLoading: t
                    }),
                    setError: t => e({
                        error: t
                    }),
                    clearUser: () => e({
                        user: null,
                        error: null
                    }),
                    fetchUser: async e => {
                        let { setLoading: r, setUser: a, setError: n } = t();
                        r(!0),
                            n(null);
                        try {
                            let t = await e();
                            if (!t)
                                throw Error("Token not found");
                            let r = await fetch("https://api.webild.io/users/me", {
                                method: "GET",
                                headers: {
                                    Accept: "application/json",
                                    Authorization: `Bearer ${t}`
                                }
                            });
                            if (!r.ok)
                                throw Error(`Error status: ${r.status}`);
                            let n = await r.json();
                            a(n)
                        } catch (e) {
                            n(e instanceof Error ? e.message : "Unknown error")
                        } finally {
                            r(!1)
                        }
                    }
                }), {
                    name: "user-store"
                }));
        e.s(["useUserStore", 0, a])
    }
    , 66289, 9244, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , a = e.i(71645);
        let n = new Date("2026-03-06T08:00:00-08:00");
        e.s(["LAUNCH_OFFER_END_DATE", 0, n, "isLaunchOfferActive", 0, () => new Date < n], 9244);
        var i = e.i(1741);
        function o(e) {
            return e.toString().padStart(2, "0")
        }
        var s = e.i(11519)
            , l = e.i(75157)
            , c = e.i(48962);
        e.s(["default", 0, e => {
            let d, u, m, p, h, g, f, y, v, b, S, w, x, I, C, P, k = (0,
                r.c)(39), { disableClick: j } = e, D = void 0 !== j && j, { openModal: E } = (0,
                    s.useModalStore)(), { timeLeft: N, shouldHide: T, formatNumber: M } = (() => {
                        let e, t, s, l, c = (0,
                            r.c)(8), d = (0,
                                i.useLimits)();
                        c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        },
                            c[0] = e) : e = c[0];
                        let [u, m] = (0,
                            a.useState)(e)
                            , [p, h] = (0,
                                a.useState)(!1);
                        c[1] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                            let e = () => {
                                let e = new Date
                                    , t = n.getTime() - e.getTime();
                                if (t <= 0)
                                    return h(!0),
                                    {
                                        hours: 0,
                                        minutes: 0,
                                        seconds: 0
                                    };
                                let r = Math.floor(t / 36e5);
                                return {
                                    hours: r,
                                    minutes: Math.floor(t % 36e5 / 6e4),
                                    seconds: Math.floor(t % 6e4 / 1e3)
                                }
                            }
                                ;
                            m(e());
                            let t = setInterval(() => {
                                m(e())
                            }
                                , 1e3);
                            return () => clearInterval(t)
                        }
                            ,
                            s = [],
                            c[1] = t,
                            c[2] = s) : (t = c[1],
                                s = c[2]),
                            (0,
                                a.useEffect)(t, s);
                        let g = d?.plan && "free" !== d.plan
                            , f = p || g;
                        return c[3] !== g || c[4] !== p || c[5] !== f || c[6] !== u ? (l = {
                            timeLeft: u,
                            isExpired: p,
                            hasPaidPlan: g,
                            shouldHide: f,
                            formatNumber: o
                        },
                            c[3] = g,
                            c[4] = p,
                            c[5] = f,
                            c[6] = u,
                            c[7] = l) : l = c[7],
                            l
                    }
                    )();
            if (T)
                return null;
            let L = !D && "cursor-pointer";
            k[0] !== L ? (d = (0,
                l.cls)("group relative flex items-center gap-4 pl-5 pr-2 2xl:pr-1 max-w-full min-w-0 h-9 button-accent rounded", L),
                k[0] = L,
                k[1] = d) : d = k[1],
                k[2] !== D || k[3] !== E ? (u = D ? void 0 : () => E("pricing", {
                    annually: !0
                }),
                    k[2] = D,
                    k[3] = E,
                    k[4] = u) : u = k[4];
            let _ = !D && "transition-all duration-300 group-hover:opacity-0 group-hover:blur-sm";
            return k[5] !== _ ? (m = (0,
                l.cls)("flex items-center gap-2 h-9", _),
                k[5] = _,
                k[6] = m) : m = k[6],
                k[7] === Symbol.for("react.memo_cache_sentinel") ? (p = (0,
                    t.jsxs)("p", {
                        className: "min-w-0 text-sm font-medium text-white truncate",
                        children: [c.LAYOUT_STRINGS.launchOffer.prefix, " ", (0,
                            t.jsx)("span", {
                                className: "font-bold",
                                children: c.LAYOUT_STRINGS.launchOffer.discount
                            }), " ", c.LAYOUT_STRINGS.launchOffer.suffix]
                    }),
                    k[7] = p) : p = k[7],
                k[8] !== M || k[9] !== N.hours ? (h = M(N.hours),
                    k[8] = M,
                    k[9] = N.hours,
                    k[10] = h) : h = k[10],
                k[11] !== h ? (g = (0,
                    t.jsx)("span", {
                        children: h
                    }),
                    k[11] = h,
                    k[12] = g) : g = k[12],
                k[13] === Symbol.for("react.memo_cache_sentinel") ? (f = (0,
                    t.jsx)("span", {
                        className: "text-blue",
                        children: ":"
                    }),
                    k[13] = f) : f = k[13],
                k[14] !== M || k[15] !== N.minutes ? (y = M(N.minutes),
                    k[14] = M,
                    k[15] = N.minutes,
                    k[16] = y) : y = k[16],
                k[17] !== y ? (v = (0,
                    t.jsx)("span", {
                        children: y
                    }),
                    k[17] = y,
                    k[18] = v) : v = k[18],
                k[19] === Symbol.for("react.memo_cache_sentinel") ? (b = (0,
                    t.jsx)("span", {
                        className: "text-blue",
                        children: ":"
                    }),
                    k[19] = b) : b = k[19],
                k[20] !== M || k[21] !== N.seconds ? (S = M(N.seconds),
                    k[20] = M,
                    k[21] = N.seconds,
                    k[22] = S) : S = k[22],
                k[23] !== S ? (w = (0,
                    t.jsx)("span", {
                        children: S
                    }),
                    k[23] = S,
                    k[24] = w) : w = k[24],
                k[25] !== v || k[26] !== w || k[27] !== g ? (x = (0,
                    t.jsxs)("div", {
                        className: "shrink-0 flex items-center gap-0.25 px-2 h-[calc(100%-var(--spacing-4))] 2xl:h-[calc(100%-var(--spacing-2))] text-xs font-semibold text-blue card rounded-max-sm gradient-before-max-sm",
                        children: [g, f, v, b, w]
                    }),
                    k[25] = v,
                    k[26] = w,
                    k[27] = g,
                    k[28] = x) : x = k[28],
                k[29] !== x || k[30] !== m ? (I = (0,
                    t.jsxs)("div", {
                        className: m,
                        children: [p, x]
                    }),
                    k[29] = x,
                    k[30] = m,
                    k[31] = I) : I = k[31],
                k[32] !== D ? (C = !D && (0,
                    t.jsx)("p", {
                        className: "absolute flex items-center justify-center inset-0 text-sm font-semibold text-white opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-none",
                        children: c.LAYOUT_STRINGS.launchOffer.claimDiscount
                    }),
                    k[32] = D,
                    k[33] = C) : C = k[33],
                k[34] !== I || k[35] !== C || k[36] !== d || k[37] !== u ? (P = (0,
                    t.jsxs)("div", {
                        className: d,
                        onClick: u,
                        children: [I, C]
                    }),
                    k[34] = I,
                    k[35] = C,
                    k[36] = d,
                    k[37] = u,
                    k[38] = P) : P = k[38],
                P
        }
        ], 66289)
    }
    , 94983, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("message-circle", [["path", {
                d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
                key: "1sd12s"
            }]]);
        e.s(["MessageCircle", 0, t], 94983)
    }
    , 48876, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("list-ordered", [["path", {
                d: "M11 5h10",
                key: "1cz7ny"
            }], ["path", {
                d: "M11 12h10",
                key: "1438ji"
            }], ["path", {
                d: "M11 19h10",
                key: "11t30w"
            }], ["path", {
                d: "M4 4h1v5",
                key: "10yrso"
            }], ["path", {
                d: "M4 9h2",
                key: "r1h2o0"
            }], ["path", {
                d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
                key: "xtkcd5"
            }]]);
        e.s(["ListOrdered", 0, t], 48876)
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
        let r = (0,
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
        e.s(["PanelLeftClose", 0, r], 72518);
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
    , 29871, e => {
        "use strict";
        e.s(["formatCredits", 0, e => {
            if (e >= 1e6) {
                let t = e / 1e6
                    , r = t % 1 == 0 ? t.toFixed(0) : t.toFixed(1);
                return `${r}M`
            }
            if (e >= 1e3) {
                let t = e / 1e3
                    , r = t % 1 == 0 ? t.toFixed(0) : t.toFixed(1);
                return `${r}K`
            }
            return e.toString()
        }
            , "formatMetricValue", 0, (e, t, r = "-") => null == e ? r : t ? `${e}%` : (e => {
                if (e >= 1e6) {
                    let t = e / 1e6;
                    return t >= 10 ? `${Math.round(t)}M` : t % 1 == 0 ? `${t}M` : `${t.toFixed(1)}M`
                }
                if (e >= 1e3) {
                    let t = e / 1e3;
                    if (t >= 100)
                        return `${Math.round(t)}k`;
                    if (t >= 10)
                        return t % 1 == 0 ? `${t}k` : `${t.toFixed(1)}k`;
                    let r = Math.round(100 * t) / 100;
                    return r % 1 == 0 ? `${r}k` : 10 * r % 1 == 0 ? `${r.toFixed(1)}k` : `${r.toFixed(2)}k`
                }
                return e.toString()
            }
            )(e), "formatNumber", 0, e => {
                if (e >= 1e5) {
                    let t = e / 1e6;
                    return `${t.toFixed(1)}M`
                }
                if (e >= 1e3) {
                    let t = Math.round(e / 1e3 * 10) / 10;
                    return `${t}K`
                }
                return e.toString()
            }
        ])
    }
    , 11377, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , a = e.i(75157);
        e.s(["default", 0, e => {
            let n, i, o, s = (0,
                r.c)(7), { percentage: l, className: c } = e;
            s[0] !== c ? (n = (0,
                a.cls)("w-full rounded-full card overflow-hidden p-1", c),
                s[0] = c,
                s[1] = n) : n = s[1];
            let d = `${l}%`;
            return s[2] !== d ? (i = (0,
                t.jsx)("div", {
                    className: "relative button-accent h-3.25 rounded-full transition-all duration-300",
                    style: {
                        width: d
                    }
                }),
                s[2] = d,
                s[3] = i) : i = s[3],
                s[4] !== n || s[5] !== i ? (o = (0,
                    t.jsx)("div", {
                        className: n,
                        children: i
                    }),
                    s[4] = n,
                    s[5] = i,
                    s[6] = o) : o = s[6],
                o
        }
        ])
    }
    , 16945, 90089, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , a = e.i(71645)
            , n = e.i(57688)
            , i = e.i(75157);
        let o = (0,
            a.forwardRef)(({ user: e, onClick: r, className: a }, o) => (0,
                t.jsx)("div", {
                    ref: o,
                    onClick: r,
                    className: (0,
                        i.cls)("relative shrink-0 rounded-full h-9 w-auto aspect-square button-secondary p-1 cursor-pointer", a),
                    children: e?.imageUrl ? (0,
                        t.jsx)(n.default, {
                            src: e.imageUrl,
                            alt: "user",
                            width: 36,
                            height: 36,
                            className: "h-full w-full object-cover rounded-full"
                        }) : (0,
                            t.jsx)("div", {
                                className: "h-full w-full flex items-center justify-center text-white text-sm",
                                children: e?.firstName?.[0] ?? "U"
                            })
                }));
        function s() { }
        o.displayName = "ProfileAvatar",
            e.s(["default", 0, o], 90089),
            e.s(["default", 0, e => {
                let a, n, i, l, c, d = (0,
                    r.c)(12), { user: u } = e;
                d[0] !== u ? (a = (0,
                    t.jsx)(o, {
                        user: u,
                        onClick: s
                    }),
                    d[0] = u,
                    d[1] = a) : a = d[1];
                let m = u?.fullName;
                d[2] !== m ? (n = (0,
                    t.jsx)("p", {
                        className: "text-sm font-medium leading-snug truncate",
                        children: m
                    }),
                    d[2] = m,
                    d[3] = n) : n = d[3];
                let p = u?.primaryEmailAddress?.emailAddress;
                return d[4] !== p ? (i = (0,
                    t.jsx)("p", {
                        className: "text-xs text-black leading-snug truncate",
                        children: p
                    }),
                    d[4] = p,
                    d[5] = i) : i = d[5],
                    d[6] !== n || d[7] !== i ? (l = (0,
                        t.jsxs)("div", {
                            className: "truncate",
                            children: [n, i]
                        }),
                        d[6] = n,
                        d[7] = i,
                        d[8] = l) : l = d[8],
                    d[9] !== a || d[10] !== l ? (c = (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [a, l]
                        }),
                        d[9] = a,
                        d[10] = l,
                        d[11] = c) : c = d[11],
                    c
            }
            ], 16945)
    }
    , 94604, e => {
        "use strict";
        var t = e.i(43476)
            , r = e.i(932)
            , a = e.i(43531)
            , n = e.i(7079)
            , i = e.i(28853)
            , o = e.i(21742)
            , s = e.i(11519)
            , l = e.i(4392)
            , c = e.i(75157)
            , d = e.i(75980);
        function u(e) {
            return e.openModal
        }
        function m(e, r) {
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
                }, r)
        }
        e.s(["default", 0, e => {
            let a, p, h, g, f, y, v, b, S = (0,
                r.c)(19), { className: w, hideBenefits: x, hideComparePlans: I } = e, C = void 0 !== x && x, P = void 0 !== I && I, k = (0,
                    s.useModalStore)(u);
            return S[0] !== w ? (a = (0,
                c.cls)("w-20", w),
                S[0] = w,
                S[1] = a) : a = S[1],
                S[2] === Symbol.for("react.memo_cache_sentinel") ? (p = (0,
                    t.jsx)("div", {
                        className: "flex flex-col gap-1",
                        children: (0,
                            t.jsx)("h3", {
                                className: "text-base font-medium text-black leading-snug",
                                children: d.UI_STRINGS.tooltips.upgrade.title
                            })
                    }),
                    S[2] = p) : p = S[2],
                S[3] !== C ? (h = !C && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)(i.default, {}), (0,
                                t.jsx)("ul", {
                                    className: "flex flex-col gap-2",
                                    children: d.UI_STRINGS.tooltips.upgrade.benefits.map(m)
                                })]
                    }),
                    S[3] = C,
                    S[4] = h) : h = S[4],
                S[5] !== k ? (g = (0,
                    t.jsx)(o.default, {
                        onClick: () => {
                            (0,
                                l.clarityEvent)("upgrade_tooltip_upgrade_now_clicked"),
                                k("pricing")
                        }
                        ,
                        styleClassName: "button-accent",
                        children: d.UI_STRINGS.tooltips.upgrade.upgradeNow
                    }),
                    S[5] = k,
                    S[6] = g) : g = S[6],
                S[7] !== P || S[8] !== k ? (f = !P && (0,
                    t.jsx)(o.default, {
                        onClick: () => {
                            (0,
                                l.clarityEvent)("upgrade_tooltip_compare_plans_clicked"),
                                k("pricing")
                        }
                        ,
                        styleClassName: "card",
                        children: d.UI_STRINGS.tooltips.upgrade.comparePlans
                    }),
                    S[7] = P,
                    S[8] = k,
                    S[9] = f) : f = S[9],
                S[10] !== g || S[11] !== f ? (y = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [g, f]
                    }),
                    S[10] = g,
                    S[11] = f,
                    S[12] = y) : y = S[12],
                S[13] !== h || S[14] !== y ? (v = (0,
                    t.jsxs)("div", {
                        className: "w-full button-secondary rounded-sm p-5 flex flex-col gap-4",
                        children: [p, h, y]
                    }),
                    S[13] = h,
                    S[14] = y,
                    S[15] = v) : v = S[15],
                S[16] !== a || S[17] !== v ? (b = (0,
                    t.jsx)(n.default, {
                        roundedClass: "rounded-sm",
                        padding: "1.5px",
                        className: a,
                        children: v
                    }),
                    S[16] = a,
                    S[17] = v,
                    S[18] = b) : b = S[18],
                b
        }
        ])
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
    , 74875, e => {
        "use strict";
        let t = (0,
            e.i(75254).default)("circle-question-mark", [["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }], ["path", {
                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
                key: "1u773s"
            }], ["path", {
                d: "M12 17h.01",
                key: "p32p05"
            }]]);
        e.s(["HelpCircle", 0, t], 74875)
    }
    , 97373, e => {
        e.v(t => Promise.all(["static/chunks/07_85_tvk2zb5.js"].map(t => e.l(t))).then(() => t(30094)))
    }
    , 41007, e => {
        e.v(t => Promise.all(["static/chunks/10p3cw~nsr.gp.js", "static/chunks/0k_x58a86_tml.js"].map(t => e.l(t))).then(() => t(32109)))
    }
]);
