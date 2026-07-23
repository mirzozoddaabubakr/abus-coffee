(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 15619, e => {
    "use strict";
    var t = e.i(43476)
        , a = e.i(932)
        , l = e.i(71645)
        , i = e.i(74080);
    e.s(["default", 0, e => {
        let s, n, r, o, d = (0,
            a.c)(9), { children: c, container: g, id: u, className: h } = e, [p, m] = (0,
                l.useState)(!1), I = g ?? ("u" > typeof document ? document.body : null);
        if (d[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => (m(!0),
            () => m(!1)),
            n = [],
            d[0] = s,
            d[1] = n) : (s = d[0],
                n = d[1]),
            (0,
                l.useEffect)(s, n),
            !p || !I)
            return null;
        d[2] !== c || d[3] !== h || d[4] !== u ? (r = h || u ? (0,
            t.jsx)("div", {
                id: u,
                className: h,
                children: c
            }) : c,
            d[2] = c,
            d[3] = h,
            d[4] = u,
            d[5] = r) : r = d[5];
        let f = r;
        return d[6] !== f || d[7] !== I ? (o = (0,
            i.createPortal)(f, I),
            d[6] = f,
            d[7] = I,
            d[8] = o) : o = d[8],
            o
    }
    ])
}
    , 64711, 69693, e => {
        "use strict";
        var t = e.i(68834)
            , a = e.i(79473)
            , l = e.i(18279);
        let i = (0,
            t.create)()((0,
                a.devtools)((e, t) => ({
                    changes: [],
                    isDirty: !1,
                    projectId: null,
                    versionId: null,
                    token: null,
                    iframeChanges: [],
                    savedChanges: [],
                    setProjectContext: (a, l, i) => {
                        e({
                            projectId: a,
                            versionId: l,
                            token: i
                        }),
                            t().loadSavedChanges()
                    }
                    ,
                    addChange: t => {
                        let a = {
                            ...t,
                            id: `change-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
                            timestamp: Date.now()
                        };
                        e(e => ({
                            changes: [...e.changes, a],
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
                        let { changes: a, iframeChanges: i, projectId: s, versionId: n, token: r } = t();
                        if (!s || !n || !r)
                            return e({
                                changes: [],
                                isDirty: !1
                            }),
                                Promise.resolve();
                        try {
                            if (i.length > 0) {
                                let t = i.map(e => ({
                                    oldValue: e.oldValue || "",
                                    newValue: e.newValue || "",
                                    sectionId: e.sectionId || "hero"
                                }))
                                    , a = await (0,
                                        l.editMessageAPI)(s, n, t, r)
                                    , o = `webild-changes-${s}-${n}`;
                                return localStorage.removeItem(o),
                                    e({
                                        changes: [],
                                        iframeChanges: [],
                                        savedChanges: [],
                                        isDirty: !1
                                    }),
                                    a.data
                            }
                            let t = a.filter(e => "updateText" === e.type);
                            if (t.length > 0) {
                                let a = t.filter(e => void 0 !== e.data.oldValue && void 0 !== e.data.newValue).map(e => ({
                                    oldValue: String(e.data.oldValue),
                                    newValue: String(e.data.newValue),
                                    sectionId: e.selector
                                }));
                                if (a.length > 0) {
                                    let t = await (0,
                                        l.editMessageAPI)(s, n, a, r);
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
                        let { projectId: a, versionId: l } = t();
                        if (!a || !l)
                            return;
                        let i = `webild-changes-${a}-${l}`
                            , s = localStorage.getItem(i);
                        if (s)
                            try {
                                let t = JSON.parse(s);
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
        e.s(["useProjectChangesStore", 0, i], 69693);
        let s = (e, t) => `webild-changes-${e}-${t}`
            , n = (e, t, a) => {
                try {
                    let l = s(e, t);
                    localStorage.setItem(l, JSON.stringify(a))
                } catch (e) { }
            }
            , r = (e, t) => {
                try {
                    let a = s(e, t);
                    localStorage.removeItem(a)
                } catch (e) { }
            }
            , o = (0,
                t.create)()((0,
                    a.devtools)((e, t) => ({
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
                        setEditMode: (t, a = !1, l) => {
                            e({
                                isEditMode: t,
                                isFromImageGenerationFlow: !!t && a,
                                previousView: t && l || null,
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
                        setProjectInfo: (a, l) => {
                            let i = t();
                            if (i.projectId === a && i.versionId === l)
                                return;
                            let s = i.projectId === a ? i.localChanges : [];
                            i.projectId && i.versionId && r(i.projectId, i.versionId),
                                e({
                                    projectId: a,
                                    versionId: l,
                                    localChanges: s
                                }),
                                r(a, l),
                                s.length > 0 && n(a, l, s)
                        }
                        ,
                        addLocalChange: a => {
                            let l = t();
                            if (!l.projectId || !l.versionId)
                                return;
                            let i = e => e.selector === a.selector && e.sectionId === a.sectionId || "replaceImage" === e.type && "replaceImage" === a.type && e.oldValue === a.oldValue && (e.sectionId ?? "") === (a.sectionId ?? "")
                                , s = l.localChanges.find(i)
                                , r = [...l.localChanges.filter(e => !i(e)), s ? {
                                    ...a,
                                    oldValue: s.oldValue
                                } : a];
                            e({
                                localChanges: r
                            }),
                                n(l.projectId, l.versionId, r)
                        }
                        ,
                        clearLocalChanges: () => {
                            let a = t();
                            if (!a.projectId || !a.versionId)
                                return;
                            e({
                                localChanges: []
                            }),
                                r(a.projectId, a.versionId);
                            let l = document.querySelector("iframe");
                            l?.contentWindow && l.contentWindow.postMessage({
                                type: "webild-clear-local-changes"
                            }, "*")
                        }
                        ,
                        saveLocalChanges: async a => {
                            let s = t();
                            if (!s.localChanges.length || !s.projectId || !s.versionId)
                                return null;
                            e({
                                isSaving: !0
                            });
                            try {
                                if (!a)
                                    throw Error("No auth token available");
                                let t = s.localChanges
                                    , o = t.map(e => ({
                                        oldValue: e.oldValue,
                                        newValue: e.newValue,
                                        sectionId: e.sectionId,
                                        page: e.page,
                                        ...e.src ? {
                                            src: e.src
                                        } : {}
                                    }))
                                    , d = await (0,
                                        l.visualEditAPI)(s.projectId, s.versionId, o, a)
                                    , c = d?.data ?? null
                                    , g = (c?.skipped ?? []).map(e => t[e]).filter(Boolean).map(e => ({
                                        ...e,
                                        failCount: (e.failCount ?? 0) + 1
                                    })).filter(e => e.failCount < 3)
                                    , u = c?.version?.id ?? s.versionId;
                                return e({
                                    localChanges: g,
                                    versionId: u
                                }),
                                    r(s.projectId, s.versionId),
                                    g.length > 0 && n(s.projectId, u, g),
                                    i.getState().setIframeChanges([]),
                                    c
                            } finally {
                                e({
                                    isSaving: !1
                                })
                            }
                        }
                        ,
                        updateElementInRealTime: (e, t, a) => {
                            let l = document.querySelector("iframe");
                            if (!l?.contentWindow || !e)
                                return;
                            let i = {
                                type: `webild-update-${t}`,
                                data: {
                                    selector: e,
                                    ...a
                                }
                            };
                            l.contentWindow.postMessage(i, "*")
                        }
                    }), {
                        name: "edit-mode-store"
                    }));
        e.s(["useEditModeStore", 0, o], 64711)
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
    , 96825, e => {
        "use strict";
        var t = e.i(43476)
            , a = e.i(71645)
            , l = e.i(38703)
            , i = e.i(83086)
            , s = e.i(46696)
            , n = e.i(15619)
            , r = e.i(21742)
            , o = e.i(85203)
            , d = e.i(64711)
            , c = e.i(86098)
            , g = e.i(18279)
            , u = e.i(75157);
        e.s(["default", 0, () => {
            let { getToken: e } = (0,
                l.useAuth)()
                , h = (0,
                    d.useEditModeStore)(e => e.skippedEditsInfo)
                , p = (0,
                    d.useEditModeStore)(e => e.setSkippedEditsInfo)
                , m = (0,
                    d.useEditModeStore)(e => e.localChanges)
                , I = (0,
                    d.useEditModeStore)(e => e.clearLocalChanges)
                , f = (0,
                    d.useEditModeStore)(e => e.projectId)
                , v = (0,
                    d.useEditModeStore)(e => e.versionId)
                , [y, S] = (0,
                    a.useState)(!1)
                , [C, w] = (0,
                    a.useState)(!1);
            (0,
                a.useEffect)(() => {
                    let e = setTimeout(() => {
                        S(!0),
                            setTimeout(() => p(null), 300)
                    }
                        , 5e3);
                    return () => clearTimeout(e)
                }
                    , [p]);
            let E = async () => {
                if (m.length && f && v) {
                    w(!0);
                    try {
                        let t = await e();
                        if (!t)
                            throw Error("Authentication required");
                        await (0,
                            g.visualEditFixAPI)(f, v, m.map(e => ({
                                oldValue: e.oldValue,
                                newValue: e.newValue,
                                sectionId: e.sectionId,
                                page: e.page
                            })), t),
                            I(),
                            p(null),
                            c.useUIStore.getState().setProjectIsGenerating(f, !0),
                            s.toast.info("AI is applying your changes — they'll appear shortly")
                    } catch {
                        s.toast.error("Couldn't start the AI fix — your changes are still kept")
                    } finally {
                        w(!1)
                    }
                }
            }
                ;
            return h ? (0,
                t.jsx)(n.default, {
                    children: (0,
                        t.jsx)(o.default, {
                            className: (0,
                                u.cls)("fixed bottom-5 left-5 right-5 md:left-auto md:right-5 z-9999 transition-all duration-300", y ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"),
                            children: (0,
                                t.jsx)("div", {
                                    className: "relative w-fit transition-all duration-200",
                                    role: "alert",
                                    "aria-live": "polite",
                                    children: (0,
                                        t.jsxs)("div", {
                                            className: "relative card rounded p-3 flex items-center gap-3",
                                            children: [(0,
                                                t.jsxs)("p", {
                                                    className: "text-sm text-black",
                                                    children: [h.skippedCount, " of", " ", h.skippedCount + h.appliedCount, " ", "changes weren't applied"]
                                                }), (0,
                                                    t.jsxs)(r.default, {
                                                        onClick: E,
                                                        disabled: C,
                                                        isLoading: C,
                                                        loadingText: "Fixing",
                                                        className: "h-8 px-4 flex items-center justify-center gap-2",
                                                        styleClassName: "button-accent",
                                                        children: [!C && (0,
                                                            t.jsx)(i.Sparkles, {
                                                                className: "h-(--text-sm) w-auto"
                                                            }), "Fix with AI"]
                                                    })]
                                        })
                                })
                        })
                }) : null
        }
        ])
    }
    , 31509, e => {
        e.n(e.i(96825))
    }
]);
