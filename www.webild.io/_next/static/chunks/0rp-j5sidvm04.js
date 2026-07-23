(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 85710, e => {
    "use strict";
    let t = "webild-subscription-plans"
        , r = "webild-referral-data"
        , l = "webild-credits-data"
        , a = "webild-charges-data"
        , n = "webild-subscription-summary"
        , i = {
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
                    localStorage.setItem(l, JSON.stringify(t))
                } catch (e) { }
            }
            ,
            getCredits: () => {
                try {
                    let e = localStorage.getItem(l);
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
                    localStorage.removeItem(l)
                } catch (e) { }
            }
            ,
            setCharges: e => {
                try {
                    let t = {
                        charges: e,
                        timestamp: Date.now()
                    };
                    localStorage.setItem(a, JSON.stringify(t))
                } catch (e) { }
            }
            ,
            getCharges: () => {
                try {
                    let e = localStorage.getItem(a);
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
                    localStorage.removeItem(a)
                } catch (e) { }
            }
            ,
            setSubscription: e => {
                try {
                    if (!e)
                        return void localStorage.removeItem(n);
                    let t = {
                        subscription: e,
                        timestamp: Date.now()
                    };
                    localStorage.setItem(n, JSON.stringify(t))
                } catch (e) { }
            }
            ,
            getSubscription: () => {
                try {
                    let e = localStorage.getItem(n);
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
                    localStorage.removeItem(n)
                } catch (e) { }
            }
            ,
            clearAll: () => {
                i.clearPlans(),
                    i.clearReferralData(),
                    i.clearCredits(),
                    i.clearCharges(),
                    i.clearSubscription()
            }
            ,
            getPlanByAmount: e => {
                let t = i.getPlans();
                return t && t.find(t => t.unitAmount === e) || null
            }
            ,
            getPlanByCode: e => {
                let t = i.getPlans();
                return t && t.find(t => t.planCode === e) || null
            }
            ,
            getCreditByAmount: e => {
                let t = i.getCredits();
                return t && t.find(t => t.unitAmount === e) || null
            }
        };
    e.s(["billingStorage", 0, i])
}
    , 7208, e => {
        "use strict";
        var t = e.i(71645)
            , r = e.i(38703)
            , l = e.i(18279)
            , a = e.i(46475)
            , n = e.i(85710);
        e.s(["default", 0, () => ((() => {
            let { isSignedIn: e, getToken: i } = (0,
                r.useAuth)()
                , s = (0,
                    t.useRef)(null);
            (0,
                t.useEffect)(() => {
                    (async () => {
                        if (e)
                            try {
                                let e = await (0,
                                    a.getAuthToken)(i);
                                if (!e)
                                    return;
                                let [t, r, s] = await Promise.allSettled([(0,
                                    l.getSubscriptionPlansAPI)(e), (0,
                                        l.getAdditionalCreditsAPI)(e), (0,
                                            l.getBillingHistoryAPI)(e)]);
                                "fulfilled" === t.status && t.value?.data?.plans && n.billingStorage.setPlans(t.value.data.plans),
                                    "fulfilled" === r.status && r.value?.data?.plans && n.billingStorage.setCredits(r.value.data.plans),
                                    "fulfilled" === s.status && s.value?.data?.charges && (n.billingStorage.setCharges(s.value.data.charges),
                                        n.billingStorage.setSubscription(s.value.data.subscription ?? null))
                            } catch { }
                    }
                    )()
                }
                    , [e, i]),
                (0,
                    t.useEffect)(() => {
                        !0 === s.current && !1 === e && n.billingStorage.clearAll(),
                            s.current = e
                    }
                        , [e])
        }
        )(),
            null)], 7208)
    }
    , 4947, e => {
        e.n(e.i(7208))
    }
]);
