(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 64056, e => {
    "use strict";
    var t = e.i(43476)
        , s = e.i(932)
        , l = e.i(53355)
        , a = e.i(71645)
        , i = e.i(57688)
        , n = e.i(22016)
        , r = e.i(92448)
        , o = e.i(64659)
        , c = e.i(21742)
        , d = e.i(75157)
        , u = e.i(85203)
        , m = e.i(48962);
    let h = e => {
        let l, a, i, n, r, o, c = (0,
            s.c)(17), { isActive: u, onClick: h, className: f } = e;
        c[0] !== f ? (l = (0,
            d.cls)("relative flex justify-center items-center h-10 aspect-square button-secondary rounded-sm cursor-pointer", f),
            c[0] = f,
            c[1] = l) : l = c[1];
        let p = u ? m.LAYOUT_STRINGS.navigation.mobile.closeMenu : m.LAYOUT_STRINGS.navigation.mobile.openMenu
            , x = u ? "translate-y-0 rotate-45" : "-translate-y-1";
        c[2] !== x ? (a = (0,
            d.cls)("absolute w-[30%] h-px bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(0.5,0.5,0,1)]", x),
            c[2] = x,
            c[3] = a) : a = c[3],
            c[4] !== a ? (i = (0,
                t.jsx)("span", {
                    "aria-hidden": "true",
                    className: a
                }),
                c[4] = a,
                c[5] = i) : i = c[5];
        let b = u ? "translate-y-0 -rotate-45" : "translate-y-1";
        return c[6] !== b ? (n = (0,
            d.cls)("absolute w-[30%] h-px bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(0.5,0.5,0,1)]", b),
            c[6] = b,
            c[7] = n) : n = c[7],
            c[8] !== n ? (r = (0,
                t.jsx)("span", {
                    "aria-hidden": "true",
                    className: n
                }),
                c[8] = n,
                c[9] = r) : r = c[9],
            c[10] !== u || c[11] !== h || c[12] !== l || c[13] !== p || c[14] !== i || c[15] !== r ? (o = (0,
                t.jsxs)("button", {
                    onClick: h,
                    className: l,
                    "aria-label": p,
                    "aria-expanded": u,
                    children: [i, r]
                }),
                c[10] = u,
                c[11] = h,
                c[12] = l,
                c[13] = p,
                c[14] = i,
                c[15] = r,
                c[16] = o) : o = c[16],
            o
    }
        ;
    var f = e.i(18566);
    function p(e) {
        return !e
    }
    function x() {
        document.body.style.overflow = ""
    }
    var b = e.i(86098)
        , g = e.i(11519)
        , j = e.i(64711)
        , v = e.i(40846)
        , y = e.i(1741)
        , N = e.i(4392);
    let w = () => {
        let e, t, l, i, n, r, o, c, d, u, m, h, p, x, w, k, _, C, T = (0,
            s.c)(73), O = (0,
                f.usePathname)(), I = (0,
                    f.useRouter)(), M = (0,
                        y.useLimits)(), { isSidebarOpen: E, setSidebarOpen: R, isChatCollapsed: L, setChatCollapsed: G, currentProject: U, hasSandboxLoadedOnce: A, isSandboxSleeping: W, isSandboxReady: D, getProjectMutateCallback: P, setSettingsModalOpen: B, setSettingsModalTab: Y } = (0,
                            b.useUIStore)(), { openModal: F } = (0,
                                g.useModalStore)(), { isEditMode: q, setEditMode: z } = (0,
                                    j.useEditModeStore)(), { setPendingDomainView: V, setIsDeployingFromPublishDropdown: $, setCameFromWebsiteTab: H } = (0,
                                        v.useDomainStore)(), [K, Q] = (0,
                                            a.useState)(!1), [J, X] = (0,
                                                a.useState)(!1);
        T[0] !== O ? (e = O?.startsWith("/sign-in") || O?.startsWith("/sign-up") || O?.startsWith("/forgot-password") || O?.startsWith("/signing-in"),
            T[0] = O,
            T[1] = e) : e = T[1];
        let Z = e;
        T[2] !== O ? (t = O?.startsWith("/preview/") || O?.startsWith("/templates/") && "/templates" !== O,
            T[2] = O,
            T[3] = t) : t = T[3];
        let ee = t
            , et = "/creating-project" === O;
        T[4] !== O ? (l = O?.startsWith("/projects/"),
            T[4] = O,
            T[5] = l) : l = T[5];
        let es = l;
        T[6] !== O ? (i = O?.match(/^\/projects\/[^/]+$/) !== null || O?.match(/^\/projects\/[^/]+\/website/) !== null,
            T[6] = O,
            T[7] = i) : i = T[7];
        let el = i
            , ea = U?.versions?.find(e => e.id === U?.activeVersionId)?.version_status;
        T[8] !== U?.versions ? (n = U?.versions?.some(S),
            T[8] = U?.versions,
            T[9] = n) : n = T[9];
        let ei = n
            , en = !!((ei || A || "processing" !== ea ? U?.preview_url : null) || U?.publish_url || ei)
            , er = !M?.plan || "free" === M.plan;
        T[10] !== q || T[11] !== z ? (r = () => {
            q && z(!1)
        }
            ,
            T[10] = q,
            T[11] = z,
            T[12] = r) : r = T[12];
        let eo = r;
        T[13] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
            Q(!1)
        }
            ,
            T[13] = o) : o = T[13];
        let ec = o;
        T[14] !== O || T[15] !== I ? (c = e => {
            if ("/" === O) {
                let t = document.getElementById(e)
                    , s = document.getElementById("signed-out-content") || document.getElementById("main-content");
                if (t && s) {
                    let e = t.getBoundingClientRect().top
                        , l = s.scrollTop;
                    s.scrollTo({
                        top: e + l - 100,
                        behavior: "smooth"
                    })
                }
            } else
                I.push(`/#${e}`)
        }
            ,
            T[14] = O,
            T[15] = I,
            T[16] = c) : c = T[16];
        let ed = c;
        T[17] !== eo || T[18] !== E || T[19] !== R ? (d = () => {
            eo(),
                (0,
                    N.clarityEvent)("sidebar_toggled"),
                R(!E)
        }
            ,
            T[17] = eo,
            T[18] = E,
            T[19] = R,
            T[20] = d) : d = T[20];
        let eu = d;
        T[21] !== L || T[22] !== G ? (u = () => {
            (0,
                N.clarityEvent)("chat_panel_toggled"),
                G(!L)
        }
            ,
            T[21] = L,
            T[22] = G,
            T[23] = u) : u = T[23];
        let em = u;
        T[24] !== eo || T[25] !== F ? (m = () => {
            eo(),
                (0,
                    N.clarityEvent)("upgrade_plan_clicked"),
                F("pricing")
        }
            ,
            T[24] = eo,
            T[25] = F,
            T[26] = m) : m = T[26];
        let eh = m;
        T[27] !== eo || T[28] !== F ? (h = () => {
            eo(),
                (0,
                    N.clarityEvent)("referral_modal_opened"),
                F("referral")
        }
            ,
            T[27] = eo,
            T[28] = F,
            T[29] = h) : h = T[29];
        let ef = h;
        T[30] !== eo || T[31] !== B || T[32] !== Y ? (p = () => {
            eo(),
                Y("general-domains"),
                B(!0)
        }
            ,
            T[30] = eo,
            T[31] = B,
            T[32] = Y,
            T[33] = p) : p = T[33];
        let ep = p;
        T[34] !== U || T[35] !== eo || T[36] !== I || T[37] !== H || T[38] !== $ || T[39] !== V ? (x = () => {
            U?.id && (eo(),
                $(!0),
                V("buy"),
                H(!0),
                I.push(`/projects/${U.id}/domains`))
        }
            ,
            T[34] = U,
            T[35] = eo,
            T[36] = I,
            T[37] = H,
            T[38] = $,
            T[39] = V,
            T[40] = x) : x = T[40];
        let ex = x;
        T[41] !== U || T[42] !== P ? (w = () => {
            if (U?.id)
                return P(U.id)
        }
            ,
            T[41] = U,
            T[42] = P,
            T[43] = w) : w = T[43];
        let eb = w;
        return T[44] !== A || T[45] !== J || T[46] !== er || T[47] !== es ? (k = () => {
            if (es && A && er && !J) {
                let e = setTimeout(() => {
                    Q(!0),
                        X(!0)
                }
                    , 1e3);
                return () => clearTimeout(e)
            }
        }
            ,
            _ = [es, A, er, J],
            T[44] = A,
            T[45] = J,
            T[46] = er,
            T[47] = es,
            T[48] = k,
            T[49] = _) : (k = T[48],
                _ = T[49]),
            (0,
                a.useEffect)(k, _),
            T[50] !== U || T[51] !== eb || T[52] !== ex || T[53] !== em || T[54] !== ep || T[55] !== ef || T[56] !== eu || T[57] !== eh || T[58] !== en || T[59] !== Z || T[60] !== L || T[61] !== et || T[62] !== q || T[63] !== er || T[64] !== ee || T[65] !== es || T[66] !== D || T[67] !== W || T[68] !== E || T[69] !== el || T[70] !== ed || T[71] !== K ? (C = {
                isAuthPage: Z,
                isPreviewPage: ee,
                isCreatingProjectPage: et,
                isProjectPage: es,
                isWebsiteTab: el,
                isSidebarOpen: E,
                isChatCollapsed: L,
                currentProject: U,
                isEditMode: q,
                hasPreviewUrl: en,
                isFreePlan: er,
                showUpgradeTooltip: K,
                isSandboxSleeping: W,
                isSandboxReady: D,
                scrollToSection: ed,
                handleSidebarToggle: eu,
                handleChatToggle: em,
                handleUpgradeClick: eh,
                handleReferralClick: ef,
                handleCloseUpgradeTooltip: ec,
                handleDomainsClick: ep,
                handleBuyDomainClick: ex,
                getMutateProject: eb
            },
                T[50] = U,
                T[51] = eb,
                T[52] = ex,
                T[53] = em,
                T[54] = ep,
                T[55] = ef,
                T[56] = eu,
                T[57] = eh,
                T[58] = en,
                T[59] = Z,
                T[60] = L,
                T[61] = et,
                T[62] = q,
                T[63] = er,
                T[64] = ee,
                T[65] = es,
                T[66] = D,
                T[67] = W,
                T[68] = E,
                T[69] = el,
                T[70] = ed,
                T[71] = K,
                T[72] = C) : C = T[72],
            C
    }
        ;
    function S(e) {
        return "executed" === e.version_status || "published" === e.version_status
    }
    var k = e.i(56073);
    let _ = {
        compare: [{
            label: "Webild vs Lovable",
            href: "/webild-vs-lovable",
            description: "See how Webild compares to Lovable",
            image: "https://storage.googleapis.com/webild/default/platform/brand/competitors/lovable.svg"
        }, {
            label: "Webild vs Base44",
            href: "/webild-vs-base44",
            description: "See how Webild compares to Base44",
            image: "https://storage.googleapis.com/webild/default/platform/brand/competitors/base44.svg"
        }, {
            label: "Webild vs Wix",
            href: "/webild-vs-wix",
            description: "See how Webild compares to Wix",
            image: "https://storage.googleapis.com/webild/default/platform/brand/competitors/wix.svg"
        }],
        product: [{
            label: "Templates",
            href: "/templates",
            description: "Browse our template library",
            icon: "LayoutTemplate"
        }, {
            label: "Core Features",
            sectionId: "showcase",
            description: "Explore what Webild can do",
            icon: "Sparkles"
        }, {
            label: "Domains",
            sectionId: "domains",
            description: "Get your custom domain",
            icon: "Globe"
        }],
        resources: [{
            label: "FAQ",
            href: "/faq",
            description: "Frequently asked questions",
            icon: "ListOrdered"
        }, {
            label: "Help Center",
            description: "Get help and support",
            icon: "HelpCircle",
            modal: "help"
        }]
    }
        , C = [{
            label: "Product",
            key: "product",
            hasDropdown: !0
        }, {
            label: "Resources",
            key: "resources",
            hasDropdown: !0
        }, {
            label: "Pricing",
            href: "/pricing",
            hasDropdown: !1
        }];
    [...[{
        label: "Features",
        sectionId: "features"
    }, {
        label: "FAQ",
        sectionId: "faq"
    }].map(e => ({
        label: e.label,
        sectionId: e.sectionId
    })), ...[{
        label: "Templates",
        href: "/templates"
    }, {
        label: "Pricing",
        href: "/pricing"
    }, {
        label: "Docs",
        href: "/docs"
    }].map(e => ({
        label: e.label,
        href: e.href
    }))];
    var T = e.i(85663)
        , O = e.i(83086)
        , I = e.i(48256)
        , M = e.i(10980)
        , E = e.i(48876)
        , R = e.i(74875);
    let L = {
        LayoutTemplate: T.LayoutTemplate,
        Sparkles: O.Sparkles,
        Globe: I.Globe,
        BookOpen: M.BookOpen,
        ListOrdered: E.ListOrdered,
        HelpCircle: R.HelpCircle
    };
    var G = e.i(62788);
    let U = Object.keys(_)
        , A = e => {
            let l, a, r, o, c, d, u, m, h = (0,
                s.c)(34), { item: f, onNavigate: p, onModalOpen: x, onSectionScroll: b } = e, g = "icon" in f ? L[f.icon] : null;
            h[0] !== g || h[1] !== f ? (l = "image" in f ? (0,
                t.jsx)(i.default, {
                    src: f.image,
                    alt: f.label,
                    width: 20,
                    height: 20,
                    className: "w-1/2 h-1/2 object-contain"
                }) : g ? (0,
                    t.jsx)(g, {
                        className: "w-1/2 h-1/2 text-black",
                        strokeWidth: 1.5
                    }) : null,
                h[0] = g,
                h[1] = f,
                h[2] = l) : l = h[2],
                h[3] !== l ? (a = (0,
                    t.jsx)("div", {
                        className: "button-secondary rounded-sm h-10 w-auto aspect-square flex items-center justify-center shrink-0",
                        children: l
                    }),
                    h[3] = l,
                    h[4] = a) : a = h[4],
                h[5] !== f.label ? (r = (0,
                    t.jsx)("h3", {
                        className: "text-base font-medium leading-snug text-black",
                        children: f.label
                    }),
                    h[5] = f.label,
                    h[6] = r) : r = h[6],
                h[7] !== f.description ? (o = (0,
                    t.jsx)("p", {
                        className: "text-sm leading-snug text-black/75",
                        children: f.description
                    }),
                    h[7] = f.description,
                    h[8] = o) : o = h[8],
                h[9] !== r || h[10] !== o ? (c = (0,
                    t.jsxs)("div", {
                        className: "flex flex-col",
                        children: [r, o]
                    }),
                    h[9] = r,
                    h[10] = o,
                    h[11] = c) : c = h[11],
                h[12] !== a || h[13] !== c ? (d = (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [a, c]
                    }),
                    h[12] = a,
                    h[13] = c,
                    h[14] = d) : d = h[14];
            let j = d;
            if ("modal" in f) {
                let e, s;
                return h[15] !== f.modal || h[16] !== x ? (e = () => x(f.modal),
                    h[15] = f.modal,
                    h[16] = x,
                    h[17] = e) : e = h[17],
                    h[18] !== j || h[19] !== e ? (s = (0,
                        t.jsx)("button", {
                            type: "button",
                            onClick: e,
                            className: "card rounded-sm p-3 text-left",
                            children: j
                        }),
                        h[18] = j,
                        h[19] = e,
                        h[20] = s) : s = h[20],
                    s
            }
            if ("sectionId" in f) {
                let e, s;
                return h[21] !== f.sectionId || h[22] !== b ? (e = () => b(f.sectionId),
                    h[21] = f.sectionId,
                    h[22] = b,
                    h[23] = e) : e = h[23],
                    h[24] !== j || h[25] !== e ? (s = (0,
                        t.jsx)("button", {
                            type: "button",
                            onClick: e,
                            className: "card card-interactive rounded-sm p-3 text-left w-full",
                            children: j
                        }),
                        h[24] = j,
                        h[25] = e,
                        h[26] = s) : s = h[26],
                    s
            }
            return h[27] !== f.href || h[28] !== p ? (u = () => p(f.href),
                h[27] = f.href,
                h[28] = p,
                h[29] = u) : u = h[29],
                h[30] !== j || h[31] !== f.href || h[32] !== u ? (m = (0,
                    t.jsx)(n.default, {
                        href: f.href,
                        onClick: u,
                        className: "card card-interactive rounded-sm p-3",
                        children: j
                    }),
                    h[30] = j,
                    h[31] = f.href,
                    h[32] = u,
                    h[33] = m) : m = h[33],
                m
        }
        , W = () => {
            let e, l, b, j, v, y, N, S, k, T, O, I, M, E, R, L, W, D = (0,
                s.c)(43), { isActive: Y, expandedKey: F, handleToggle: q, handleClose: z, handleDropdownToggle: V, handleNavClick: $ } = (() => {
                    let e, t, l, i, n, r, o, c, d, u = (0,
                        s.c)(15), [m, h] = (0,
                            a.useState)(!1), [b, g] = (0,
                                a.useState)(null), j = (0,
                                    f.useRouter)();
                    u[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => h(p),
                        u[0] = e) : e = u[0];
                    let v = e;
                    u[1] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                        h(!1),
                            g(null)
                    }
                        ,
                        u[1] = t) : t = u[1];
                    let y = t;
                    u[2] === Symbol.for("react.memo_cache_sentinel") ? (l = e => {
                        g(t => t === e ? null : e)
                    }
                        ,
                        u[2] = l) : l = u[2];
                    let N = l;
                    u[3] !== j ? (i = e => {
                        y(),
                            j.push(e)
                    }
                        ,
                        u[3] = j,
                        u[4] = i) : i = u[4];
                    let w = i;
                    return u[5] !== m ? (n = () => {
                        let e = e => {
                            "Escape" === e.key && m && h(!1)
                        }
                            ;
                        return document.addEventListener("keydown", e),
                            () => document.removeEventListener("keydown", e)
                    }
                        ,
                        r = [m],
                        u[5] = m,
                        u[6] = n,
                        u[7] = r) : (n = u[6],
                            r = u[7]),
                        (0,
                            a.useEffect)(n, r),
                        u[8] !== m ? (o = () => (m ? document.body.style.overflow = "hidden" : document.body.style.overflow = "",
                            x),
                            c = [m],
                            u[8] = m,
                            u[9] = o,
                            u[10] = c) : (o = u[9],
                                c = u[10]),
                        (0,
                            a.useEffect)(o, c),
                        u[11] !== b || u[12] !== w || u[13] !== m ? (d = {
                            isActive: m,
                            expandedKey: b,
                            handleToggle: v,
                            handleClose: y,
                            handleDropdownToggle: N,
                            handleNavClick: w
                        },
                            u[11] = b,
                            u[12] = w,
                            u[13] = m,
                            u[14] = d) : d = u[14],
                        d
                }
                )(), { scrollToSection: H } = w(), { openModal: K } = (0,
                    g.useModalStore)();
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {},
                D[0] = e) : e = D[0];
            let Q = (0,
                a.useRef)(e)
                , [J, X] = (0,
                    a.useState)(P);
            D[1] !== F ? (l = () => {
                let e = Object.fromEntries(U.map(B));
                F && Q.current[F] && (e[F] = `${Q.current[F]?.scrollHeight}px`),
                    X(e)
            }
                ,
                b = [F],
                D[1] = F,
                D[2] = l,
                D[3] = b) : (l = D[2],
                    b = D[3]),
                (0,
                    a.useEffect)(l, b),
                D[4] !== z || D[5] !== K ? (j = e => {
                    z(),
                        K(e)
                }
                    ,
                    D[4] = z,
                    D[5] = K,
                    D[6] = j) : j = D[6];
            let Z = j;
            D[7] !== z || D[8] !== H ? (v = e => {
                z(),
                    H(e)
            }
                ,
                D[7] = z,
                D[8] = H,
                D[9] = v) : v = D[9];
            let ee = v
                , et = Y ? "active" : "not-active"
                , es = Y ? "opacity-15 visible" : "opacity-0 invisible";
            D[10] !== es ? (y = (0,
                d.cls)("absolute inset-0 bg-black pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.5,0.5,0,1)]", es),
                D[10] = es,
                D[11] = y) : y = D[11],
                D[12] !== z || D[13] !== y ? (N = (0,
                    t.jsx)("div", {
                        className: y,
                        onClick: z
                    }),
                    D[12] = z,
                    D[13] = y,
                    D[14] = N) : N = D[14],
                D[15] === Symbol.for("react.memo_cache_sentinel") ? (S = (0,
                    t.jsx)(n.default, {
                        href: "/",
                        children: (0,
                            t.jsx)(i.default, {
                                src: "https://storage.googleapis.com/webild/default/platform/brand/logo.svg",
                                alt: G.COMMON_STRINGS.images.LOGO_ALT,
                                width: 100,
                                height: 100,
                                className: "h-5 w-auto cursor-pointer"
                            })
                    }),
                    D[15] = S) : S = D[15],
                D[16] === Symbol.for("react.memo_cache_sentinel") ? (k = (0,
                    t.jsx)(r.SignInButton, {
                        children: (0,
                            t.jsx)(c.default, {
                                children: m.LAYOUT_STRINGS.navigation.buttons.logIn
                            })
                    }),
                    D[16] = k) : k = D[16],
                D[17] === Symbol.for("react.memo_cache_sentinel") ? (T = (0,
                    t.jsx)(r.SignUpButton, {
                        children: (0,
                            t.jsx)(c.default, {
                                styleClassName: "button-accent",
                                children: m.LAYOUT_STRINGS.navigation.buttons.signUp
                            })
                    }),
                    D[17] = T) : T = D[17],
                D[18] !== q || D[19] !== Y ? (O = (0,
                    t.jsxs)("div", {
                        className: "flex justify-between items-center p-3",
                        children: [S, (0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [k, T, (0,
                                    t.jsx)(h, {
                                        isActive: Y,
                                        onClick: q
                                    })]
                            })]
                    }),
                    D[18] = q,
                    D[19] = Y,
                    D[20] = O) : O = D[20];
            let el = Y ? "max-h-[600px]" : "max-h-0";
            return D[21] !== el ? (I = (0,
                d.cls)("overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)]", el),
                D[21] = el,
                D[22] = I) : I = D[22],
                D[23] !== F || D[24] !== V || D[25] !== Z || D[26] !== $ || D[27] !== ee || D[28] !== J || D[29] !== Y ? (M = C.map((e, s) => (0,
                    t.jsxs)(a.Fragment, {
                        children: [(0,
                            t.jsx)("li", {
                                className: "overflow-hidden",
                                children: e.hasDropdown && "key" in e ? (0,
                                    t.jsxs)(t.Fragment, {
                                        children: [(0,
                                            t.jsxs)("button", {
                                                type: "button",
                                                onClick: () => V(e.key),
                                                className: (0,
                                                    d.cls)("w-full flex justify-between items-center py-3 px-2 bg-transparent border-none cursor-pointer group transition-all", "duration-500", Y ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                                                style: {
                                                    transitionDelay: `${50 * s}ms`
                                                },
                                                children: [(0,
                                                    t.jsx)("span", {
                                                        className: "text-base font-medium text-black",
                                                        children: e.label
                                                    }), (0,
                                                        t.jsx)(o.ChevronDown, {
                                                            className: (0,
                                                                d.cls)("h-(--text-base) w-auto text-black transition-transform duration-300 ease-out", F === e.key && "rotate-180"),
                                                            strokeWidth: 2.25
                                                        })]
                                            }), (0,
                                                t.jsx)("div", {
                                                    ref: t => {
                                                        Q.current[e.key] = t
                                                    }
                                                    ,
                                                    style: {
                                                        maxHeight: J[e.key]
                                                    },
                                                    className: "overflow-hidden transition-all duration-500 ease-out",
                                                    children: (0,
                                                        t.jsx)("div", {
                                                            className: "flex flex-col gap-2 pb-2",
                                                            children: _[e.key].map(e => (0,
                                                                t.jsx)(A, {
                                                                    item: e,
                                                                    onNavigate: $,
                                                                    onModalOpen: Z,
                                                                    onSectionScroll: ee
                                                                }, e.label))
                                                        })
                                                })]
                                    }) : (0,
                                        t.jsx)(n.default, {
                                            href: "href" in e ? e.href : "/",
                                            onClick: () => $("href" in e ? e.href : "/"),
                                            className: (0,
                                                d.cls)("w-full flex justify-between items-center py-3 px-2 group transition-all", "duration-500", Y ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                                            style: {
                                                transitionDelay: `${50 * s}ms`
                                            },
                                            children: (0,
                                                t.jsx)("span", {
                                                    className: "text-base font-medium text-black group-hover:ml-2 transition-[margin] duration-300",
                                                    children: e.label
                                                })
                                        })
                            }), s < C.length - 1 && (0,
                                t.jsx)("div", {
                                    className: (0,
                                        d.cls)("h-px bg-black/10 transition-all ease-[cubic-bezier(0.65,0,0,1)]", "duration-500", Y ? "w-full" : "w-0"),
                                    style: {
                                        transitionDelay: `${50 * s}ms`
                                    }
                                })]
                    }, e.label)),
                    D[23] = F,
                    D[24] = V,
                    D[25] = Z,
                    D[26] = $,
                    D[27] = ee,
                    D[28] = J,
                    D[29] = Y,
                    D[30] = M) : M = D[30],
                D[31] !== M ? (E = (0,
                    t.jsx)("div", {
                        className: "p-3 pt-0",
                        children: (0,
                            t.jsx)("div", {
                                className: "button-secondary rounded-sm p-3",
                                children: (0,
                                    t.jsx)("ul", {
                                        className: "flex flex-col gap-1 m-0 p-0 list-none",
                                        children: M
                                    })
                            })
                    }),
                    D[31] = M,
                    D[32] = E) : E = D[32],
                D[33] !== I || D[34] !== E ? (R = (0,
                    t.jsx)("div", {
                        className: I,
                        children: E
                    }),
                    D[33] = I,
                    D[34] = E,
                    D[35] = R) : R = D[35],
                D[36] !== O || D[37] !== R ? (L = (0,
                    t.jsxs)("div", {
                        className: "pointer-events-auto absolute top-5 left-1/2 -translate-x-1/2 w-content-width card rounded-sm flex flex-col",
                        children: [O, R]
                    }),
                    D[36] = O,
                    D[37] = R,
                    D[38] = L) : L = D[38],
                D[39] !== L || D[40] !== et || D[41] !== N ? (W = (0,
                    t.jsx)(u.default, {
                        animationType: "fade",
                        className: "md:hidden z-50",
                        children: (0,
                            t.jsxs)("nav", {
                                role: "navigation",
                                "aria-label": m.LAYOUT_STRINGS.navigation.mobile.ariaLabel,
                                "data-navigation-status": et,
                                className: "fixed inset-0 z-100 pointer-events-none",
                                children: [N, L]
                            })
                    }, "mobile-nav"),
                    D[39] = L,
                    D[40] = et,
                    D[41] = N,
                    D[42] = W) : W = D[42],
                W
        }
        ;
    function D(e) {
        return [e, "0px"]
    }
    function P() {
        return Object.fromEntries(U.map(D))
    }
    function B(e) {
        return [e, "0px"]
    }
    var Y = e.i(46932)
        , F = e.i(88653)
        , q = e.i(31343)
        , z = e.i(77402);
    let V = ["compare", "product", "resources"]
        , $ = [.16, 1, .3, 1]
        , H = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: .04,
                    delayChildren: .25
                }
            },
            exit: {
                transition: {
                    staggerChildren: .03,
                    staggerDirection: -1
                }
            }
        }
        , K = {
            hidden: {
                opacity: 0,
                y: -15
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: .7,
                    ease: $
                }
            },
            exit: {
                opacity: 0,
                y: -15,
                transition: {
                    duration: .5,
                    ease: $
                }
            }
        }
        , Q = ({ activeKey: e, isVisible: s, onClose: l }) => {
            let r = (0,
                a.useRef)(null)
                , o = (0,
                    a.useRef)(!1)
                , { openModal: c } = (0,
                    g.useModalStore)()
                , { scrollToSection: u } = w()
                , h = (0,
                    z.useButtonClick)("https://youtube.com")
                , [f, p] = (0,
                    a.useState)(0);
            (0,
                a.useEffect)(() => {
                    let t = s && !!e;
                    t && !o.current && p(e => e + 1),
                        o.current = t
                }
                    , [s, e]);
            let x = 0;
            if (r.current && e && r.current !== e) {
                let t = V.indexOf(r.current);
                x = V.indexOf(e) > t ? 1 : -1
            }
            (0,
                a.useEffect)(() => {
                    e ? r.current = e : r.current = null
                }
                    , [e]);
            let b = 0 === x
                , j = e ? V.indexOf(e) : -1;
            return (0,
                t.jsx)(F.AnimatePresence, {
                    children: s && e && (0,
                        t.jsx)("div", {
                            className: "w-full overflow-hidden",
                            children: (0,
                                t.jsx)(Y.motion.div, {
                                    initial: {
                                        y: "-100%"
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    exit: {
                                        y: "-100%",
                                        transition: {
                                            delay: .25,
                                            duration: .6,
                                            ease: $
                                        }
                                    },
                                    transition: {
                                        duration: .7,
                                        ease: $
                                    },
                                    className: "bg-white/80 backdrop-blur-sm border-b border-black/5 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.05)]",
                                    children: (0,
                                        t.jsxs)("div", {
                                            className: "w-content-width mx-auto py-5 relative flex gap-5 items-start",
                                            children: [(0,
                                                t.jsx)("div", {
                                                    className: "flex-7 relative",
                                                    children: V.map((s, a) => {
                                                        let r = _[s]
                                                            , o = e === s
                                                            , m = b && o;
                                                        return (0,
                                                            t.jsx)(Y.motion.div, {
                                                                initial: !!m && "hidden",
                                                                animate: m ? "visible" : {
                                                                    opacity: +!!o,
                                                                    x: o ? 0 : a < j ? -30 : 30,
                                                                    y: 0
                                                                },
                                                                exit: m ? "exit" : {
                                                                    opacity: 0
                                                                },
                                                                variants: m ? H : void 0,
                                                                transition: m ? void 0 : {
                                                                    duration: .7,
                                                                    ease: $
                                                                },
                                                                className: (0,
                                                                    d.cls)("flex gap-5", o ? "relative" : "absolute inset-0 pointer-events-none"),
                                                                children: r.map(e => {
                                                                    let s = "icon" in e ? L[e.icon] : null
                                                                        , a = (0,
                                                                            t.jsxs)(t.Fragment, {
                                                                                children: [(0,
                                                                                    t.jsx)("div", {
                                                                                        className: "button-secondary rounded-sm h-10 2xl:h-14 w-auto aspect-square flex items-center justify-center shrink-0",
                                                                                        children: "image" in e ? (0,
                                                                                            t.jsx)(i.default, {
                                                                                                src: e.image,
                                                                                                alt: e.label,
                                                                                                width: 20,
                                                                                                height: 20,
                                                                                                className: "w-1/2 h-1/2 object-contain"
                                                                                            }) : s ? (0,
                                                                                                t.jsx)(s, {
                                                                                                    className: "w-1/2 h-1/2 text-black",
                                                                                                    strokeWidth: 1.5
                                                                                                }) : null
                                                                                    }), (0,
                                                                                        t.jsx)("div", {
                                                                                            className: "flex flex-col",
                                                                                            children: (0,
                                                                                                t.jsx)("h3", {
                                                                                                    className: "text-base font-medium leading-snug text-black",
                                                                                                    children: e.label
                                                                                                })
                                                                                        })]
                                                                            });
                                                                    return (0,
                                                                        t.jsx)(Y.motion.div, {
                                                                            className: "flex-1",
                                                                            variants: m ? K : void 0,
                                                                            animate: m ? void 0 : {
                                                                                opacity: +!!o,
                                                                                y: 0
                                                                            },
                                                                            transition: m ? void 0 : {
                                                                                duration: .7,
                                                                                ease: $
                                                                            },
                                                                            children: "modal" in e ? (0,
                                                                                t.jsx)("button", {
                                                                                    type: "button",
                                                                                    onClick: () => {
                                                                                        c(e.modal),
                                                                                            l?.()
                                                                                    }
                                                                                    ,
                                                                                    className: "card rounded-sm p-5 flex items-center gap-5 group h-full w-full text-left cursor-pointer",
                                                                                    children: a
                                                                                }) : "sectionId" in e ? (0,
                                                                                    t.jsx)("button", {
                                                                                        type: "button",
                                                                                        onClick: () => {
                                                                                            u(e.sectionId),
                                                                                                l?.()
                                                                                        }
                                                                                        ,
                                                                                        className: "card card-interactive rounded-sm p-5 flex items-center gap-5 group h-full w-full text-left cursor-pointer",
                                                                                        children: a
                                                                                    }) : (0,
                                                                                        t.jsx)(n.default, {
                                                                                            href: e.href,
                                                                                            onClick: l,
                                                                                            className: "card card-interactive rounded-sm p-5 flex items-center gap-5 group h-full",
                                                                                            children: a
                                                                                        })
                                                                        }, e.label)
                                                                }
                                                                )
                                                            }, s)
                                                    }
                                                    )
                                                }), (0,
                                                    t.jsx)(Y.motion.div, {
                                                        className: "w-px bg-black/10 mx-2 self-stretch",
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            transition: {
                                                                duration: .5,
                                                                ease: $
                                                            }
                                                        },
                                                        transition: {
                                                            duration: 1.2,
                                                            ease: $
                                                        }
                                                    }), (0,
                                                        t.jsx)(Y.motion.div, {
                                                            className: "flex-3",
                                                            initial: {
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                opacity: 1
                                                            },
                                                            exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                    duration: .5,
                                                                    ease: $
                                                                }
                                                            },
                                                            transition: {
                                                                duration: 1.2,
                                                                ease: $
                                                            },
                                                            children: (0,
                                                                t.jsxs)("button", {
                                                                    type: "button",
                                                                    onClick: h,
                                                                    className: "group flex flex-col gap-2 w-full cursor-pointer",
                                                                    children: [(0,
                                                                        t.jsxs)("div", {
                                                                            className: "relative rounded-sm aspect-4/3 overflow-hidden",
                                                                            children: [(0,
                                                                                t.jsx)(i.default, {
                                                                                    src: "https://storage.googleapis.com/webild/default/platform/images/demo-thumbnail.webp",
                                                                                    alt: "How Webild works",
                                                                                    fill: !0,
                                                                                    className: "object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                                                                                }), (0,
                                                                                    t.jsx)("div", {
                                                                                        className: "absolute inset-0 flex items-center justify-center",
                                                                                        children: (0,
                                                                                            t.jsx)("div", {
                                                                                                className: "relative button-accent-rounded-full rounded-full h-10 2xl:h-12 w-auto aspect-square flex items-center justify-center",
                                                                                                children: (0,
                                                                                                    t.jsx)(q.Play, {
                                                                                                        className: "h-4/10 w-4/10 text-white fill-white"
                                                                                                    })
                                                                                            })
                                                                                    })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex items-center justify-between w-full text-base font-medium",
                                                                                children: [(0,
                                                                                    t.jsx)("p", {
                                                                                        className: "text-black",
                                                                                        children: m.LAYOUT_STRINGS.navigation.dropdown.howItWorks
                                                                                    }), (0,
                                                                                        t.jsx)("p", {
                                                                                            className: "text-blue",
                                                                                            children: m.LAYOUT_STRINGS.navigation.dropdown.watchVideo
                                                                                        })]
                                                                            })]
                                                                })
                                                        })]
                                        })
                                }, `dropdown-${f}`)
                        })
                })
        }
        , J = () => {
            let [e, s] = (0,
                a.useState)(!1)
                , [l, h] = (0,
                    a.useState)(null)
                , f = (0,
                    a.useRef)(!1);
            (0,
                a.useEffect)(() => {
                    l && (f.current = !0)
                }
                    , [l]),
                (0,
                    a.useEffect)(() => {
                        if (!l && f.current) {
                            let e = setTimeout(() => {
                                f.current = !1
                            }
                                , 1e3);
                            return () => clearTimeout(e)
                        }
                    }
                        , [l]);
            let p = !l && f.current;
            (0,
                a.useEffect)(() => {
                    let e = () => {
                        let e = document.getElementById("signed-out-content");
                        s((e?.scrollTop ?? window.scrollY) > 50)
                    }
                        , t = document.getElementById("signed-out-content");
                    return t?.addEventListener("scroll", e, {
                        passive: !0
                    }),
                        window.addEventListener("scroll", e, {
                            passive: !0
                        }),
                        () => {
                            t?.removeEventListener("scroll", e),
                                window.removeEventListener("scroll", e)
                        }
                }
                    , []);
            let x = () => {
                h(null)
            }
                ;
            return (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                        t.jsx)(W, {}), (0,
                            t.jsxs)("div", {
                                className: "fixed top-0 left-0 w-full z-50 hidden md:block",
                                onMouseLeave: x,
                                children: [(0,
                                    t.jsx)(u.default, {
                                        animationType: "fade",
                                        className: (0,
                                            d.cls)("w-full py-5 border-b transition-all", l ? "duration-200 ease-expo-out" : p ? "duration-700 ease-in-out delay-500" : "duration-700 ease-in-out", e || l ? "bg-white/80 backdrop-blur-sm shadow-[0_4px_24px_-6px_rgba(0,0,0,0.05)] border-black/5" : "bg-transparent border-transparent"),
                                        children: (0,
                                            t.jsxs)("div", {
                                                className: "relative mx-auto flex items-center justify-between h-full w-content-width",
                                                children: [(0,
                                                    t.jsx)(n.default, {
                                                        href: "/",
                                                        onMouseEnter: x,
                                                        children: (0,
                                                            t.jsx)(i.default, {
                                                                src: "https://storage.googleapis.com/webild/default/platform/brand/logo.svg",
                                                                alt: G.COMMON_STRINGS.images.LOGO_ALT,
                                                                width: 100,
                                                                height: 100,
                                                                className: "h-6 w-auto cursor-pointer"
                                                            })
                                                    }), (0,
                                                        t.jsx)("nav", {
                                                            className: "flex items-center gap-5 absolute left-1/2 -translate-x-1/2",
                                                            children: C.map(e => e.hasDropdown && "key" in e ? (0,
                                                                t.jsxs)("button", {
                                                                    type: "button",
                                                                    className: "group flex items-center gap-1 cursor-pointer",
                                                                    onMouseEnter: () => {
                                                                        h(e.key)
                                                                    }
                                                                    ,
                                                                    children: [(0,
                                                                        t.jsx)("p", {
                                                                            className: "text-base font-medium text-black",
                                                                            children: e.label
                                                                        }), (0,
                                                                            t.jsx)(o.ChevronDown, {
                                                                                className: (0,
                                                                                    d.cls)("h-(--text-base) w-auto text-black transition-transform duration-300 ease-out", l === e.key && "rotate-180"),
                                                                                strokeWidth: 2.25
                                                                            })]
                                                                }, e.key) : (0,
                                                                    t.jsx)("div", {
                                                                        onMouseEnter: x,
                                                                        children: (0,
                                                                            t.jsx)(n.default, {
                                                                                href: "href" in e ? e.href : "/",
                                                                                className: "text-base font-medium text-black",
                                                                                children: e.label
                                                                            })
                                                                    }, e.label))
                                                        }), (0,
                                                            t.jsxs)("div", {
                                                                className: "flex items-center gap-3",
                                                                onMouseEnter: x,
                                                                children: [(0,
                                                                    t.jsx)(r.SignInButton, {
                                                                        children: (0,
                                                                            t.jsx)(c.default, {
                                                                                children: m.LAYOUT_STRINGS.navigation.buttons.logIn
                                                                            })
                                                                    }), (0,
                                                                        t.jsx)(r.SignUpButton, {
                                                                            children: (0,
                                                                                t.jsx)(c.default, {
                                                                                    styleClassName: "button-accent",
                                                                                    children: m.LAYOUT_STRINGS.navigation.buttons.getStarted
                                                                                })
                                                                        })]
                                                            })]
                                            })
                                    }, "home-nav"), (0,
                                        t.jsx)(Q, {
                                            activeKey: l,
                                            isVisible: null !== l,
                                            onClose: x
                                        })]
                            })]
                })
        }
        ;
    var X = e.i(70703)
        , Z = e.i(75254);
    let ee = (0,
        Z.default)("chevron-first", [["path", {
            d: "m17 18-6-6 6-6",
            key: "1yerx2"
        }], ["path", {
            d: "M7 6v12",
            key: "1p53r6"
        }]])
        , et = (0,
            Z.default)("chevron-last", [["path", {
                d: "m7 18 6-6-6-6",
                key: "lwmzdw"
            }], ["path", {
                d: "M17 6v12",
                key: "1o0aio"
            }]]);
    var es = e.i(30699)
        , el = e.i(92161)
        , ea = e.i(72518)
        , ei = e.i(99647)
        , en = e.i(91091)
        , er = e.i(94604)
        , eo = e.i(7079)
        , ec = e.i(30776)
        , ed = e.i(39616);
    let eu = (0,
        Z.default)("log-out", [["path", {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }], ["path", {
            d: "M21 12H9",
            key: "dn1m92"
        }], ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }]]);
    var em = e.i(94983)
        , eh = e.i(95380)
        , ef = e.i(28853)
        , ep = e.i(11377)
        , ex = e.i(29871);
    let eb = () => {
        let e, l, a, i, n, r, o, d, h, f = (0,
            s.c)(21), p = (0,
                y.useLimits)(), { openModal: x } = (0,
                    g.useModalStore)(), b = p?.messages_token_left ?? 0, j = b + (p?.messages_token_usage ?? 0), v = j > 0 ? b / j * 100 : 0, N = p ? "loaded" : "loading";
        return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0,
            t.jsx)("span", {
                className: "text-sm",
                children: m.LAYOUT_STRINGS.credits.title
            }),
            f[0] = e) : e = f[0],
            f[1] !== p || f[2] !== b ? (l = p ? `${(0,
                ex.formatCredits)(b)} ${m.LAYOUT_STRINGS.credits.left}` : "…",
                f[1] = p,
                f[2] = b,
                f[3] = l) : l = f[3],
            f[4] !== l ? (a = (0,
                t.jsxs)("div", {
                    className: "flex justify-between",
                    children: [e, (0,
                        t.jsx)("span", {
                            className: "text-sm",
                            children: l
                        })]
                }),
                f[4] = l,
                f[5] = a) : a = f[5],
            f[6] !== v ? (i = (0,
                t.jsx)(ep.default, {
                    percentage: v
                }),
                f[6] = v,
                f[7] = i) : i = f[7],
            f[8] === Symbol.for("react.memo_cache_sentinel") ? (n = (0,
                t.jsx)("span", {
                    className: "inline-block h-2 w-auto aspect-square rounded-full bg-black align-middle mr-1"
                }),
                f[8] = n) : n = f[8],
            f[9] !== p ? (r = (0,
                t.jsxs)("div", {
                    className: "text-xs text-black mt-1",
                    children: [n, p?.plan && p?.plan !== "free" && p ? (0,
                        t.jsx)("span", {
                            children: m.LAYOUT_STRINGS.credits.monthlyResetMessage
                        }) : (0,
                            t.jsx)("span", {
                                children: m.LAYOUT_STRINGS.credits.freePlanMessage
                            })]
                }),
                f[9] = p,
                f[10] = r) : r = f[10],
            f[11] !== a || f[12] !== i || f[13] !== r ? (o = (0,
                t.jsxs)("div", {
                    className: "relative p-4 flex flex-col gap-2 button-secondary rounded-extra-sm",
                    children: [a, i, r]
                }),
                f[11] = a,
                f[12] = i,
                f[13] = r,
                f[14] = o) : o = f[14],
            f[15] !== x ? (d = (0,
                t.jsx)(c.default, {
                    onClick: () => x("pricing"),
                    styleClassName: "button-accent",
                    className: "w-full justify-center text-xs h-8",
                    children: m.LAYOUT_STRINGS.credits.upgrade
                }),
                f[15] = x,
                f[16] = d) : d = f[16],
            f[17] !== N || f[18] !== o || f[19] !== d ? (h = (0,
                t.jsxs)(u.default, {
                    className: "flex flex-col gap-3",
                    children: [o, d]
                }, N),
                f[17] = N,
                f[18] = o,
                f[19] = d,
                f[20] = h) : h = f[20],
            h
    }
        ;
    var eg = e.i(90089)
        , ej = e.i(16945)
        , ev = e.i(27085)
        , ey = e.i(85710)
        , eN = e.i(26288)
        , ew = e.i(92037);
    function eS() {
        return window.open(k.URLS.DISCORD, "_blank")
    }
    let ek = e => {
        let l, i, n, r, o, u, h, p, x, g, v, y, N, w, S, k, _, C, T = (0,
            s.c)(41), { className: O } = e, I = (0,
                a.useRef)(null), { isOpen: E, user: R, handleMouseEnter: L, handleMouseLeave: U, toggleDropdown: A, closeDropdown: W, handleSettingsClick: D, handleReportBugClick: P, handleDocsClick: B, handleSignOut: Y } = (() => {
                    let e, t, l, i, n, r, o, c, d = (0,
                        s.c)(29), [u, m] = (0,
                            a.useState)(!1), [h, p] = (0,
                                a.useState)(!1), { user: x } = (0,
                                    ev.useUser)(), { signOut: g } = (0,
                                        ev.useClerk)(), v = (0,
                                            f.useRouter)(), { isEditMode: y, setEditMode: N } = (0,
                                                j.useEditModeStore)(), { setSettingsModalOpen: w } = (0,
                                                    b.useUIStore)(), { clearUser: S } = (0,
                                                        ew.useUserStore)();
                    d[0] !== h ? (e = () => {
                        h || m(!0)
                    }
                        ,
                        d[0] = h,
                        d[1] = e) : e = d[1];
                    let k = e;
                    d[2] !== h ? (t = () => {
                        h || m(!1)
                    }
                        ,
                        d[2] = h,
                        d[3] = t) : t = d[3];
                    let _ = t;
                    d[4] !== h || d[5] !== y || d[6] !== u || d[7] !== N ? (l = () => {
                        y && N(!1),
                            u && h ? (m(!1),
                                p(!1)) : (m(!0),
                                    p(!0))
                    }
                        ,
                        d[4] = h,
                        d[5] = y,
                        d[6] = u,
                        d[7] = N,
                        d[8] = l) : l = d[8];
                    let C = l;
                    d[9] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                        m(!1),
                            p(!1)
                    }
                        ,
                        d[9] = i) : i = d[9];
                    let T = i;
                    d[10] !== y || d[11] !== N || d[12] !== w ? (n = () => {
                        y && N(!1),
                            w(!0)
                    }
                        ,
                        d[10] = y,
                        d[11] = N,
                        d[12] = w,
                        d[13] = n) : n = d[13];
                    let O = n;
                    d[14] !== v ? (r = () => v.push("/docs"),
                        d[14] = v,
                        d[15] = r) : r = d[15];
                    let I = r;
                    d[16] !== S || d[17] !== v || d[18] !== g ? (o = async () => {
                        try {
                            await g(),
                                ey.billingStorage.clearAll(),
                                eN.sessionStorageUtils.clearLimits(),
                                S(),
                                v.push("/")
                        } catch { }
                    }
                        ,
                        d[16] = S,
                        d[17] = v,
                        d[18] = g,
                        d[19] = o) : o = d[19];
                    let M = o;
                    return d[20] !== I || d[21] !== k || d[22] !== _ || d[23] !== O || d[24] !== M || d[25] !== u || d[26] !== C || d[27] !== x ? (c = {
                        isOpen: u,
                        user: x,
                        handleMouseEnter: k,
                        handleMouseLeave: _,
                        toggleDropdown: C,
                        closeDropdown: T,
                        handleSettingsClick: O,
                        handleReportBugClick: eS,
                        handleDocsClick: I,
                        handleSignOut: M
                    },
                        d[20] = I,
                        d[21] = k,
                        d[22] = _,
                        d[23] = O,
                        d[24] = M,
                        d[25] = u,
                        d[26] = C,
                        d[27] = x,
                        d[28] = c) : c = d[28],
                        c
                }
                )();
        return T[0] !== O ? (l = (0,
            d.cls)("h-10!", O),
            T[0] = O,
            T[1] = l) : l = T[1],
            T[2] !== l || T[3] !== A || T[4] !== R ? (i = (0,
                t.jsx)(eg.default, {
                    ref: I,
                    user: R,
                    onClick: A,
                    className: l
                }),
                T[2] = l,
                T[3] = A,
                T[4] = R,
                T[5] = i) : i = T[5],
            T[6] !== E ? (n = E && (0,
                t.jsx)("div", {
                    className: "absolute top-full left-0 w-full h-3"
                }),
                T[6] = E,
                T[7] = n) : n = T[7],
            T[8] !== R ? (r = (0,
                t.jsx)(ej.default, {
                    user: R
                }),
                T[8] = R,
                T[9] = r) : r = T[9],
            T[10] === Symbol.for("react.memo_cache_sentinel") ? (o = (0,
                t.jsx)(ef.default, {}),
                u = (0,
                    t.jsx)(eb, {}),
                T[10] = o,
                T[11] = u) : (o = T[10],
                    u = T[11]),
            T[12] === Symbol.for("react.memo_cache_sentinel") ? (h = (0,
                t.jsx)(ed.Settings, {
                    className: "h-(--text-sm) w-auto"
                }),
                T[12] = h) : h = T[12],
            T[13] !== D ? (p = (0,
                t.jsxs)(c.default, {
                    className: "flex items-center h-fit gap-2 justify-start py-2 px-0! w-full md:hover:bg-grey/50 md:hover:px-4! transition-all duration-300",
                    styleClassName: "transparent",
                    onClick: D,
                    children: [h, G.COMMON_STRINGS.buttons.SETTINGS]
                }),
                T[13] = D,
                T[14] = p) : p = T[14],
            T[15] === Symbol.for("react.memo_cache_sentinel") ? (x = (0,
                t.jsx)(em.MessageCircle, {
                    className: "h-(--text-sm) w-auto"
                }),
                T[15] = x) : x = T[15],
            T[16] !== P ? (g = (0,
                t.jsxs)(c.default, {
                    className: "flex items-center h-fit gap-2 justify-start py-2 px-0! w-full md:hover:bg-grey/50 md:hover:px-4! transition-all duration-300",
                    styleClassName: "transparent",
                    onClick: P,
                    children: [x, m.LAYOUT_STRINGS.profileDropdown.reportBug]
                }),
                T[16] = P,
                T[17] = g) : g = T[17],
            T[18] === Symbol.for("react.memo_cache_sentinel") ? (v = (0,
                t.jsx)(M.BookOpen, {
                    className: "h-(--text-sm) w-auto"
                }),
                T[18] = v) : v = T[18],
            T[19] !== B ? (y = (0,
                t.jsxs)(c.default, {
                    className: "flex items-center h-fit gap-2 justify-start py-2 px-0! w-full md:hover:bg-grey/50 md:hover:px-4! transition-all duration-300",
                    styleClassName: "transparent",
                    onClick: B,
                    children: [v, G.COMMON_STRINGS.labels.DOCUMENTATION]
                }),
                T[19] = B,
                T[20] = y) : y = T[20],
            T[21] === Symbol.for("react.memo_cache_sentinel") ? (N = (0,
                d.cls)("flex items-center h-fit gap-2 justify-start py-2 px-0! w-full md:hover:bg-grey/50 md:hover:px-4! transition-all duration-300", "text-black"),
                T[21] = N) : N = T[21],
            T[22] === Symbol.for("react.memo_cache_sentinel") ? (w = (0,
                t.jsx)(eu, {
                    className: "h-(--text-sm) w-auto"
                }),
                T[22] = w) : w = T[22],
            T[23] !== Y ? (S = (0,
                t.jsxs)(c.default, {
                    onClick: Y,
                    className: N,
                    styleClassName: "transparent",
                    children: [w, G.COMMON_STRINGS.buttons.SIGN_OUT]
                }),
                T[23] = Y,
                T[24] = S) : S = T[24],
            T[25] !== g || T[26] !== y || T[27] !== S || T[28] !== p ? (k = (0,
                t.jsxs)("div", {
                    className: "flex flex-col gap-0",
                    children: [p, g, y, S]
                }),
                T[25] = g,
                T[26] = y,
                T[27] = S,
                T[28] = p,
                T[29] = k) : k = T[29],
            T[30] !== W || T[31] !== E || T[32] !== k || T[33] !== r ? (_ = (0,
                t.jsxs)(eh.default, {
                    isOpen: E,
                    onClose: W,
                    triggerRef: I,
                    className: "right-0 w-70 md:w-20 p-5",
                    contentClassName: "space-y-4",
                    children: [r, o, u, k]
                }),
                T[30] = W,
                T[31] = E,
                T[32] = k,
                T[33] = r,
                T[34] = _) : _ = T[34],
            T[35] !== L || T[36] !== U || T[37] !== _ || T[38] !== i || T[39] !== n ? (C = (0,
                t.jsxs)("div", {
                    className: "relative flex items-center justify-center",
                    onMouseEnter: L,
                    onMouseLeave: U,
                    children: [i, n, _]
                }),
                T[35] = L,
                T[36] = U,
                T[37] = _,
                T[38] = i,
                T[39] = n,
                T[40] = C) : C = T[40],
            C
    }
        ;
    var e_ = e.i(66289);
    function eC(e) {
        return !e
    }
    function eT(e) {
        return e.setEditMode
    }
    var eO = e.i(64160);
    let eI = (0,
        X.default)(() => e.A(97373), {
            loadableGenerated: {
                modules: [30094]
            },
            ssr: !1
        })
        , eM = (0,
            X.default)(() => e.A(41007), {
                loadableGenerated: {
                    modules: [32109]
                },
                ssr: !1
            })
        , eE = e => {
            let l, r, o, m, h, f, p, x, g, v, y, N, w, S, k, _, C, T, O, I = (0,
                s.c)(97), { isProjectPage: M, isWebsiteTab: E, isSidebarOpen: R, isChatCollapsed: L, currentProject: U, isEditMode: A, hasPreviewUrl: W, isFreePlan: D, showUpgradeTooltip: P, isSandboxSleeping: B, isSandboxReady: Y, onSidebarToggle: F, onChatToggle: q, onUpgradeClick: z, onReferralClick: V, onCloseUpgradeTooltip: $, onMobileMenuClick: H, onDomainsClick: K, onBuyDomainClick: Q, getMutateProject: J } = e, X = (0,
                    b.useUIStore)(eR), Z = (0,
                        b.useUIStore)(eL), ed = (() => {
                            let e, t, l = (0,
                                s.c)(3), [i, n] = (0,
                                    a.useState)(!1);
                            return 768 !== l[0] ? (e = () => {
                                let e = () => {
                                    n(window.innerWidth < 768)
                                }
                                    ;
                                return e(),
                                    window.addEventListener("resize", e),
                                    () => window.removeEventListener("resize", e)
                            }
                                ,
                                t = [768],
                                l[0] = 768,
                                l[1] = e,
                                l[2] = t) : (e = l[1],
                                    t = l[2]),
                                (0,
                                    a.useEffect)(e, t),
                                i
                        }
                        )(), eu = A || !W, em = M && !E, eh = (0,
                            a.useRef)(null), ef = (0,
                                a.useRef)(null), ep = !W || !Y || A || B;
            I[0] !== ep ? (l = {
                isDisabled: ep
            },
                I[0] = ep,
                I[1] = l) : l = I[1];
            let { isShareDropdownOpen: ex, handleShareMouseEnter: eb, handleShareMouseLeave: eg, toggleShareDropdown: ej, closeShareDropdown: ev, isPublishDropdownOpen: ey, handlePublishMouseEnter: eN, handlePublishMouseLeave: ew, togglePublishDropdown: eS, handleClosePublishDropdown: eE } = (e => {
                let t, l, i, n, r, o, c, d, u, m = (0,
                    s.c)(37), { isDisabled: h } = e, { isPublishDropdownOpen: f, openPublishDropdown: p, closePublishDropdown: x } = (() => {
                        let e, t, l, i, n = (0,
                            s.c)(5), [r, o] = (0,
                                a.useState)(!1);
                        n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                            o(eC)
                        }
                            ,
                            n[0] = e) : e = n[0];
                        let c = e;
                        n[1] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                            o(!0)
                        }
                            ,
                            n[1] = t) : t = n[1];
                        let d = t;
                        n[2] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
                            o(!1)
                        }
                            ,
                            n[2] = l) : l = n[2];
                        let u = l;
                        return n[3] !== r ? (i = {
                            isPublishDropdownOpen: r,
                            togglePublishDropdown: c,
                            openPublishDropdown: d,
                            closePublishDropdown: u
                        },
                            n[3] = r,
                            n[4] = i) : i = n[4],
                            i
                    }
                    )(), b = (0,
                        j.useEditModeStore)(eT), [g, v] = (0,
                            a.useState)(!1), [y, N] = (0,
                                a.useState)(!1), [w, S] = (0,
                                    a.useState)(!1);
                m[0] !== x || m[1] !== h || m[2] !== y ? (t = () => {
                    !h && (y || (v(!0),
                        x(),
                        S(!1)))
                }
                    ,
                    m[0] = x,
                    m[1] = h,
                    m[2] = y,
                    m[3] = t) : t = m[3];
                let k = t;
                m[4] !== y ? (l = () => {
                    y || v(!1)
                }
                    ,
                    m[4] = y,
                    m[5] = l) : l = m[5];
                let _ = l;
                m[6] !== x || m[7] !== y || m[8] !== g || m[9] !== b ? (i = () => {
                    j.useEditModeStore.getState().isEditMode && b(!1),
                        g && y ? (v(!1),
                            N(!1)) : (v(!0),
                                N(!0),
                                x(),
                                S(!1))
                }
                    ,
                    m[6] = x,
                    m[7] = y,
                    m[8] = g,
                    m[9] = b,
                    m[10] = i) : i = m[10];
                let C = i;
                m[11] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                    v(!1),
                        N(!1)
                }
                    ,
                    m[11] = n) : n = m[11];
                let T = n;
                m[12] !== h || m[13] !== w || m[14] !== p ? (r = () => {
                    !h && (w || (p(),
                        v(!1),
                        N(!1)))
                }
                    ,
                    m[12] = h,
                    m[13] = w,
                    m[14] = p,
                    m[15] = r) : r = m[15];
                let O = r;
                m[16] !== x || m[17] !== w ? (o = () => {
                    w || x()
                }
                    ,
                    m[16] = x,
                    m[17] = w,
                    m[18] = o) : o = m[18];
                let I = o;
                m[19] !== x || m[20] !== w || m[21] !== f || m[22] !== p || m[23] !== b ? (c = () => {
                    j.useEditModeStore.getState().isEditMode && b(!1),
                        f && w ? (x(),
                            S(!1)) : (p(),
                                S(!0),
                                v(!1),
                                N(!1))
                }
                    ,
                    m[19] = x,
                    m[20] = w,
                    m[21] = f,
                    m[22] = p,
                    m[23] = b,
                    m[24] = c) : c = m[24];
                let M = c;
                m[25] !== x ? (d = () => {
                    x(),
                        S(!1)
                }
                    ,
                    m[25] = x,
                    m[26] = d) : d = m[26];
                let E = d;
                return m[27] !== E || m[28] !== O || m[29] !== I || m[30] !== k || m[31] !== _ || m[32] !== f || m[33] !== g || m[34] !== M || m[35] !== C ? (u = {
                    isShareDropdownOpen: g,
                    handleShareMouseEnter: k,
                    handleShareMouseLeave: _,
                    toggleShareDropdown: C,
                    closeShareDropdown: T,
                    isPublishDropdownOpen: f,
                    handlePublishMouseEnter: O,
                    handlePublishMouseLeave: I,
                    togglePublishDropdown: M,
                    handleClosePublishDropdown: E
                },
                    m[27] = E,
                    m[28] = O,
                    m[29] = I,
                    m[30] = k,
                    m[31] = _,
                    m[32] = f,
                    m[33] = g,
                    m[34] = M,
                    m[35] = C,
                    m[36] = u) : u = m[36],
                    u
            }
            )(l)
                , eA = M ? "h-page-padding" : "h-page-padding md:h-page-padding-compact"
                , eW = !M && "md:relative";
            I[2] !== em || I[3] !== M || I[4] !== eA || I[5] !== eW || I[6] !== X ? (r = (0,
                d.cls)("z-40 w-full fixed", eA, eW, M && !X ? (0,
                    d.cls)("flex justify-center", em ? "px-5 md:pr-5 md:pl-[calc(var(--width-15)+var(--spacing-5))]" : "px-5 md:pl-0 md:pr-5") : "flex items-center px-5 md:pl-0 md:pr-5 justify-between gap-4 md:gap-0"),
                I[2] = em,
                I[3] = M,
                I[4] = eA,
                I[5] = eW,
                I[6] = X,
                I[7] = r) : r = I[7],
                I[8] !== M ? (o = !M && (0,
                    t.jsx)("div", {
                        className: "hidden md:block absolute inset-0 card-sidebar"
                    }),
                    I[8] = M,
                    I[9] = o) : o = I[9];
            let eD = !M && "md:gap-0"
                , eP = !X && E && "md:pl-[calc(var(--spacing-5)*2+var(--height-7)+var(--spacing-1)*2+var(--spacing-5))]"
                , eB = !X && M && L && "md:gap-0"
                , eY = !X && em && "lg:w-70";
            I[10] !== eD || I[11] !== eP || I[12] !== eB || I[13] !== eY ? (m = (0,
                d.cls)("flex items-center justify-between gap-5 w-full h-full transition-all duration-300", eD, eP, eB, eY),
                I[10] = eD,
                I[11] = eP,
                I[12] = eB,
                I[13] = eY,
                I[14] = m) : m = I[14];
            let eF = !M && "md:gap-0"
                , eq = !X && M && (L ? "md:w-0 md:overflow-hidden md:opacity-0" : "md:w-[35%] lg:w-[27.5%]");
            I[15] !== eF || I[16] !== eq ? (h = (0,
                d.cls)("relative flex items-center gap-3 h-full transition-all duration-100 ease-in-out", eF, eq),
                I[15] = eF,
                I[16] = eq,
                I[17] = h) : h = I[17];
            let ez = M ? "project" : "other";
            I[18] !== M || I[19] !== R || I[20] !== H || I[21] !== F ? (f = M ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                        t.jsx)(c.default, {
                            onClick: H,
                            className: "md:hidden flex items-center justify-center px-0 h-10 aspect-square",
                            children: (0,
                                t.jsx)(el.Menu, {
                                    className: "h-4/10 w-4/10",
                                    strokeWidth: 1.5
                                })
                        }), (0,
                            t.jsx)(n.default, {
                                href: "/",
                                className: "hidden md:flex shrink-0 items-center w-fit h-full cursor-pointer transition-transform duration-300 hover:-translate-y-0.5",
                                onClick: eG,
                                children: (0,
                                    t.jsx)(i.default, {
                                        src: "https://storage.googleapis.com/webild/default/platform/brand/logo.svg",
                                        alt: G.COMMON_STRINGS.images.LOGO_ALT,
                                        width: 100,
                                        height: 100,
                                        className: "h-5 w-auto"
                                    })
                            })]
                }) : (0,
                    t.jsxs)("div", {
                        className: "md:hidden group shrink-0 flex items-center gap-2 hover:gap-3 w-fit h-full cursor-pointer transition-all duration-300",
                        "data-sidebar-toggle": !0,
                        onClick: F,
                        children: [(0,
                            t.jsx)(i.default, {
                                src: "https://storage.googleapis.com/webild/default/platform/brand/logo.svg",
                                alt: G.COMMON_STRINGS.images.LOGO_ALT,
                                width: 100,
                                height: 100,
                                className: "h-5 w-auto"
                            }), (0,
                                t.jsxs)("div", {
                                    className: "relative flex items-center justify-center mt-1 h-5 w-auto aspect-square button-secondary rounded-full",
                                    children: [(0,
                                        t.jsx)(et, {
                                            className: (0,
                                                d.cls)("absolute h-6/10 w-6/10 transition-opacity duration-300", R ? "opacity-0" : "opacity-100")
                                        }), (0,
                                            t.jsx)(ee, {
                                                className: (0,
                                                    d.cls)("absolute h-6/10 w-6/10 transition-opacity duration-300", R ? "opacity-100" : "opacity-0")
                                            })]
                                })]
                    }),
                I[18] = M,
                I[19] = R,
                I[20] = H,
                I[21] = F,
                I[22] = f) : f = I[22],
                I[23] !== ez || I[24] !== f ? (p = (0,
                    t.jsx)(u.default, {
                        className: "shrink-0 w-fit",
                        children: f
                    }, ez),
                    I[23] = ez,
                    I[24] = f,
                    I[25] = p) : p = I[25],
                I[26] !== M ? (x = !M && (0,
                    t.jsxs)(c.default, {
                        onClick: eU,
                        className: "hidden md:flex items-center gap-2 text-nowrap h-[calc(var(--height-7)+var(--spacing-1)*2)]",
                        children: [(0,
                            t.jsx)(i.default, {
                                src: "https://storage.googleapis.com/webild/default/platform/icons/discord.svg",
                                alt: "",
                                width: 20,
                                height: 20,
                                className: "h-(--text-xs) w-auto"
                            }), G.COMMON_STRINGS.buttons.JOIN_COMMUNITY]
                    }),
                    I[26] = M,
                    I[27] = x) : x = I[27],
                I[28] !== U || I[29] !== M ? (g = M && U?.name && (0,
                    t.jsxs)(u.default, {
                        className: "flex items-center gap-3 w-full min-w-0",
                        children: [(0,
                            t.jsx)("div", {
                                className: "hidden md:block h-5 w-[2px] bg-black/5"
                            }), (0,
                                t.jsx)("p", {
                                    className: "hidden md:block flex-1 text-sm font-medium text-black truncate",
                                    children: U.name
                                })]
                    }),
                    I[28] = U,
                    I[29] = M,
                    I[30] = g) : g = I[30],
                I[31] !== h || I[32] !== p || I[33] !== x || I[34] !== g ? (v = (0,
                    t.jsxs)("div", {
                        className: h,
                        children: [p, x, g]
                    }),
                    I[31] = h,
                    I[32] = p,
                    I[33] = x,
                    I[34] = g,
                    I[35] = v) : v = I[35];
            let eV = !X && M && "flex-1";
            I[36] !== eV ? (y = (0,
                d.cls)("flex items-center gap-3", eV),
                I[36] = eV,
                I[37] = y) : y = I[37],
                I[38] !== L || I[39] !== eu || I[40] !== D || I[41] !== M || I[42] !== E || I[43] !== q || I[44] !== $ || I[45] !== z || I[46] !== P || I[47] !== X ? (N = !X && M && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsxs)(ec.default, {
                                isVisible: E,
                                className: "hidden md:flex shrink-0 items-center gap-3",
                                children: [(0,
                                    t.jsx)(c.default, {
                                        onClick: q,
                                        disabled: eu,
                                        className: (0,
                                            d.cls)("flex items-center justify-center px-0 h-9 aspect-square", eu && "opacity-50 pointer-events-none"),
                                        children: L ? (0,
                                            t.jsx)(ei.PanelLeftOpen, {
                                                className: "h-4/10 w-4/10",
                                                strokeWidth: 1.5
                                            }) : (0,
                                                t.jsx)(ea.PanelLeftClose, {
                                                    className: "h-4/10 w-4/10",
                                                    strokeWidth: 1.5
                                                })
                                    }), (0,
                                        t.jsx)(en.default, {
                                            position: "bottom",
                                            customContent: (0,
                                                t.jsx)(er.default, {}),
                                            contentClassName: "right-0 left-auto translate-x-0",
                                            interactive: !0,
                                            forceVisible: P,
                                            onClose: $,
                                            disabled: !D,
                                            children: (0,
                                                t.jsx)(eo.default, {
                                                    isActive: !0,
                                                    children: (0,
                                                        t.jsx)(c.default, {
                                                            onClick: z,
                                                            className: "flex items-center gap-2",
                                                            children: G.COMMON_STRINGS.buttons.UPGRADE_PLAN
                                                        })
                                                })
                                        })]
                            }), (0,
                                t.jsx)("div", {
                                    className: "hidden xl:flex flex-1 justify-center min-w-0",
                                    children: (0,
                                        t.jsx)(e_.default, {})
                                })]
                    }),
                    I[38] = L,
                    I[39] = eu,
                    I[40] = D,
                    I[41] = M,
                    I[42] = E,
                    I[43] = q,
                    I[44] = $,
                    I[45] = z,
                    I[46] = P,
                    I[47] = X,
                    I[48] = N) : N = I[48];
            let e$ = M && E ? "website-tab" : "other"
                , eH = !X && M ? "ml-auto xl:ml-0" : "ml-auto";
            return I[49] !== eH ? (w = (0,
                d.cls)("flex shrink-0 items-center gap-3", eH),
                I[49] = eH,
                I[50] = w) : w = I[50],
                I[51] !== ev || I[52] !== U || I[53] !== J || I[54] !== eE || I[55] !== eN || I[56] !== ew || I[57] !== eb || I[58] !== eg || I[59] !== ed || I[60] !== M || I[61] !== ey || I[62] !== ex || I[63] !== ep || I[64] !== E || I[65] !== Q || I[66] !== K || I[67] !== z || I[68] !== Z || I[69] !== eS || I[70] !== ej ? (S = M && E && U && (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0,
                            t.jsx)(eo.default, {
                                isActive: !0,
                                className: "md:hidden",
                                children: (0,
                                    t.jsx)(c.default, {
                                        onClick: z,
                                        className: "flex items-center gap-2",
                                        children: G.COMMON_STRINGS.buttons.UPGRADE_PLAN
                                    })
                            }), (0,
                                t.jsxs)("div", {
                                    className: "relative hidden md:block",
                                    onMouseEnter: eb,
                                    onMouseLeave: eg,
                                    children: [(0,
                                        t.jsx)(en.default, {
                                            content: eO.PREVIEW_STRINGS.toolbar.tooltips.share,
                                            disabled: ex,
                                            children: (0,
                                                t.jsx)(c.default, {
                                                    ref: eh,
                                                    disabled: ep,
                                                    onClick: ej,
                                                    className: "flex items-center gap-2",
                                                    children: eO.PREVIEW_STRINGS.toolbar.buttons.share
                                                })
                                        }), ex && (0,
                                            t.jsx)("div", {
                                                className: "absolute top-full left-0 w-full h-3"
                                            }), (0,
                                                t.jsx)(eI, {
                                                    project: U,
                                                    isOpen: ex,
                                                    onClose: ev,
                                                    triggerRef: eh
                                                })]
                                }), (0,
                                    t.jsxs)("div", {
                                        className: "relative",
                                        onMouseEnter: eN,
                                        onMouseLeave: ew,
                                        children: [(0,
                                            t.jsx)(en.default, {
                                                content: eO.PREVIEW_STRINGS.toolbar.tooltips.publish,
                                                disabled: ey,
                                                children: (0,
                                                    t.jsx)(c.default, {
                                                        ref: ef,
                                                        onClick: () => {
                                                            ed && Z("preview"),
                                                                eS()
                                                        }
                                                        ,
                                                        disabled: ep,
                                                        styleClassName: "button-accent",
                                                        className: "flex items-center gap-2",
                                                        children: eO.PREVIEW_STRINGS.toolbar.buttons.publish
                                                    })
                                            }), ey && (0,
                                                t.jsx)("div", {
                                                    className: "absolute top-full left-0 w-full h-3"
                                                }), (0,
                                                    t.jsx)(eM, {
                                                        project: U,
                                                        isOpen: ey,
                                                        onClose: eE,
                                                        onDeploy: J(),
                                                        onDomainsClick: K,
                                                        onBuyDomainClick: Q,
                                                        triggerRef: ef
                                                    })]
                                    }), (0,
                                        t.jsx)(ek, {})]
                    }),
                    I[51] = ev,
                    I[52] = U,
                    I[53] = J,
                    I[54] = eE,
                    I[55] = eN,
                    I[56] = ew,
                    I[57] = eb,
                    I[58] = eg,
                    I[59] = ed,
                    I[60] = M,
                    I[61] = ey,
                    I[62] = ex,
                    I[63] = ep,
                    I[64] = E,
                    I[65] = Q,
                    I[66] = K,
                    I[67] = z,
                    I[68] = Z,
                    I[69] = eS,
                    I[70] = ej,
                    I[71] = S) : S = I[71],
                I[72] !== D || I[73] !== M || I[74] !== E || I[75] !== $ || I[76] !== V || I[77] !== z || I[78] !== P ? (k = !(M && E) && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)("div", {
                                className: (0,
                                    d.cls)(!M && "md:hidden"),
                                children: (0,
                                    t.jsx)(en.default, {
                                        position: "bottom",
                                        customContent: (0,
                                            t.jsx)(er.default, {}),
                                        contentClassName: "right-0 left-auto translate-x-0",
                                        interactive: !0,
                                        forceVisible: P,
                                        onClose: $,
                                        disabled: !D,
                                        children: (0,
                                            t.jsx)(eo.default, {
                                                isActive: !0,
                                                children: (0,
                                                    t.jsx)(c.default, {
                                                        onClick: z,
                                                        className: "flex items-center gap-2",
                                                        children: G.COMMON_STRINGS.buttons.UPGRADE_PLAN
                                                    })
                                            })
                                    })
                            }), (0,
                                t.jsx)(c.default, {
                                    onClick: V,
                                    className: (0,
                                        d.cls)("flex items-center justify-center px-0 h-9 aspect-square rounded-full! gradient-before-rounded-full", !M && "md:h-[calc(var(--height-7)+var(--spacing-1)*2)]"),
                                    children: (0,
                                        t.jsx)(es.Gift, {
                                            className: "h-4/10 w-4/10",
                                            strokeWidth: 1.5
                                        })
                                }), (0,
                                    t.jsx)(ek, {
                                        className: M ? void 0 : "md:h-[calc(var(--height-7)+var(--spacing-1)*2)]"
                                    })]
                    }),
                    I[72] = D,
                    I[73] = M,
                    I[74] = E,
                    I[75] = $,
                    I[76] = V,
                    I[77] = z,
                    I[78] = P,
                    I[79] = k) : k = I[79],
                I[80] !== e$ || I[81] !== w || I[82] !== S || I[83] !== k ? (_ = (0,
                    t.jsxs)(u.default, {
                        className: w,
                        animationType: "fade",
                        children: [S, k]
                    }, e$),
                    I[80] = e$,
                    I[81] = w,
                    I[82] = S,
                    I[83] = k,
                    I[84] = _) : _ = I[84],
                I[85] !== y || I[86] !== N || I[87] !== _ ? (C = (0,
                    t.jsxs)("div", {
                        className: y,
                        children: [N, _]
                    }),
                    I[85] = y,
                    I[86] = N,
                    I[87] = _,
                    I[88] = C) : C = I[88],
                I[89] !== m || I[90] !== v || I[91] !== C ? (T = (0,
                    t.jsxs)("div", {
                        className: m,
                        children: [v, C]
                    }),
                    I[89] = m,
                    I[90] = v,
                    I[91] = C,
                    I[92] = T) : T = I[92],
                I[93] !== T || I[94] !== r || I[95] !== o ? (O = (0,
                    t.jsxs)(u.default, {
                        className: r,
                        children: [o, T]
                    }),
                    I[93] = T,
                    I[94] = r,
                    I[95] = o,
                    I[96] = O) : O = I[96],
                O
        }
        ;
    function eR(e) {
        return e.isErrorPage
    }
    function eL(e) {
        return e.setMobileBuildView
    }
    function eG() {
        return (0,
            N.clarityEvent)("logo_home_clicked")
    }
    function eU() {
        return window.open(k.URLS.DISCORD, "_blank")
    }
    function eA(e) {
        return e.setMobileProjectSidebarOpen
    }
    e.s(["default", 0, () => {
        let e, a, i, n = (0,
            s.c)(24), { isAuthPage: r, isPreviewPage: o, isCreatingProjectPage: c, isProjectPage: d, isWebsiteTab: u, isSidebarOpen: m, isChatCollapsed: h, currentProject: f, isEditMode: p, hasPreviewUrl: x, isFreePlan: g, showUpgradeTooltip: j, isSandboxSleeping: v, isSandboxReady: y, handleSidebarToggle: N, handleChatToggle: S, handleUpgradeClick: k, handleReferralClick: _, handleCloseUpgradeTooltip: C, handleDomainsClick: T, handleBuyDomainClick: O, getMutateProject: I } = w(), M = (0,
                b.useUIStore)(eA);
        n[0] !== M ? (e = () => {
            M(!0)
        }
            ,
            n[0] = M,
            n[1] = e) : e = n[1];
        let E = e;
        return r || o || c ? null : (n[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0,
            t.jsx)(l.SignedOut, {
                children: (0,
                    t.jsx)(J, {})
            }),
            n[2] = a) : a = n[2],
            n[3] !== f || n[4] !== I || n[5] !== O || n[6] !== S || n[7] !== C || n[8] !== T || n[9] !== E || n[10] !== _ || n[11] !== N || n[12] !== k || n[13] !== x || n[14] !== h || n[15] !== p || n[16] !== g || n[17] !== d || n[18] !== y || n[19] !== v || n[20] !== m || n[21] !== u || n[22] !== j ? (i = (0,
                t.jsxs)(t.Fragment, {
                    children: [a, (0,
                        t.jsx)(l.SignedIn, {
                            children: (0,
                                t.jsx)(eE, {
                                    isProjectPage: d,
                                    isWebsiteTab: u,
                                    isSidebarOpen: m,
                                    isChatCollapsed: h,
                                    currentProject: f,
                                    isEditMode: p,
                                    hasPreviewUrl: x,
                                    isFreePlan: g,
                                    showUpgradeTooltip: j,
                                    isSandboxSleeping: v,
                                    isSandboxReady: y,
                                    onSidebarToggle: N,
                                    onChatToggle: S,
                                    onUpgradeClick: k,
                                    onReferralClick: _,
                                    onCloseUpgradeTooltip: C,
                                    onMobileMenuClick: E,
                                    onDomainsClick: T,
                                    onBuyDomainClick: O,
                                    getMutateProject: I
                                })
                        })]
                }),
                n[3] = f,
                n[4] = I,
                n[5] = O,
                n[6] = S,
                n[7] = C,
                n[8] = T,
                n[9] = E,
                n[10] = _,
                n[11] = N,
                n[12] = k,
                n[13] = x,
                n[14] = h,
                n[15] = p,
                n[16] = g,
                n[17] = d,
                n[18] = y,
                n[19] = v,
                n[20] = m,
                n[21] = u,
                n[22] = j,
                n[23] = i) : i = n[23],
            i)
    }
    ], 64056)
}
    , 2372, e => {
        e.n(e.i(64056))
    }
]);
