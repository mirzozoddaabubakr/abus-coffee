(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 2933, (e, t, n) => {
    e.e,
        t.exports = (() => {
            "use strict";
            var e, t, n, r, i, a, o, s, u, l, c, h, f, d, p, v, m, b, g, y, w, _, A, C, M, P, R, E, I, k, F, T, L, O, x, j, S, V, D, B, W, U, N, z, $, H, Y, X, G, q, J, K, Z, Q, ee, et, en, er, ei, ea, eo, es, eu, el, ec = [, (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        Animation: () => r.Animation
                    });
                var r = n(2)
            }
                , (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            Animation: () => r
                        });
                    var r = function () {
                        function e(e, t, n, r) {
                            this.animation = e,
                                this.artboard = t,
                                this.playing = r,
                                this.loopCount = 0,
                                this.scrubTo = null,
                                this.instance = new n.LinearAnimationInstance(e, t)
                        }
                        return Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this.animation.name
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                            Object.defineProperty(e.prototype, "time", {
                                get: function () {
                                    return this.instance.time
                                },
                                set: function (e) {
                                    this.instance.time = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "loopValue", {
                                get: function () {
                                    return this.animation.loopValue
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "needsScrub", {
                                get: function () {
                                    return null !== this.scrubTo
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            e.prototype.advance = function (e) {
                                null === this.scrubTo ? this.instance.advance(e) : (this.instance.time = 0,
                                    this.instance.advance(this.scrubTo),
                                    this.scrubTo = null)
                            }
                            ,
                            e.prototype.apply = function (e) {
                                this.instance.apply(e)
                            }
                            ,
                            e.prototype.cleanup = function () {
                                this.instance.delete()
                            }
                            ,
                            e
                    }()
                }
                , (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            RuntimeLoader: () => o
                        });
                    var r = n(4)
                        , i = n(5)
                        , a = function () {
                            return (a = Object.assign || function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n])
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }
                            ).apply(this, arguments)
                        }
                        , o = function () {
                            function e() { }
                            return e.loadRuntime = function () {
                                var t = e.wasmURL
                                    , n = e.wasmBinary;
                                e.enablePerfMarks && performance.mark("rive:wasm-init:start"),
                                    r.default(a({
                                        locateFile: function () {
                                            return t
                                        }
                                    }, n ? {
                                        wasmBinary: n
                                    } : {})).then(function (t) {
                                        var n;
                                        for (e.enablePerfMarks && (performance.mark("rive:wasm-init:end"),
                                            performance.measure("rive:wasm-init", "rive:wasm-init:start", "rive:wasm-init:end")),
                                            e.runtime = t; e.callBackQueue.length > 0;)
                                            null == (n = e.callBackQueue.shift()) || n(e.runtime)
                                    }).catch(function (n) {
                                        var r = {
                                            message: (null == n ? void 0 : n.message) || "Unknown error",
                                            type: (null == n ? void 0 : n.name) || "Error",
                                            wasmError: n instanceof WebAssembly.CompileError || n instanceof WebAssembly.RuntimeError,
                                            originalError: n
                                        };
                                        console.debug("Rive WASM load error details:", r);
                                        var i = e.wasmFallbackURL
                                            , a = null !== i && t.toLowerCase() === i.toLowerCase();
                                        if (null === i || a) {
                                            var o = a ? "the configured WASM URL or its fallback (".concat(i, ")") : t;
                                            console.error(["Could not load Rive WASM file from ".concat(o, "."), "Possible reasons:\n- Network connection is down\n- WebAssembly is not supported in this environment\n- The WASM file is corrupted or incompatible\n\nError details:", "- Type: ".concat(r.type), "- Message: ".concat(r.message), "- WebAssembly-specific error: ".concat(r.wasmError), "\nTo resolve, you may need to:\n1. Check your network connection\n2. Set a new WASM source via RuntimeLoader.setWasmUrl()\n3. Call RuntimeLoader.loadRuntime() again"].join("\n"))
                                        } else
                                            console.warn("Failed to load WASM from ".concat(t, " (").concat(r.message, "), trying fallback URL: ").concat(i)),
                                                e.wasmBinary = null,
                                                e.setWasmUrl(i),
                                                e.loadRuntime()
                                    })
                            }
                                ,
                                e.getInstance = function (t) {
                                    e.isLoading || (e.isLoading = !0,
                                        e.loadRuntime()),
                                        e.runtime ? t(e.runtime) : e.callBackQueue.push(t)
                                }
                                ,
                                e.awaitInstance = function () {
                                    return new Promise(function (t) {
                                        return e.getInstance(function (e) {
                                            return t(e)
                                        })
                                    }
                                    )
                                }
                                ,
                                e.setWasmUrl = function (t) {
                                    e.wasmURL = t
                                }
                                ,
                                e.getWasmUrl = function () {
                                    return e.wasmURL
                                }
                                ,
                                e.setWasmFallbackUrl = function (t) {
                                    e.wasmFallbackURL = t
                                }
                                ,
                                e.getWasmFallbackUrl = function () {
                                    return e.wasmFallbackURL
                                }
                                ,
                                e.setWasmBinary = function (t) {
                                    if (t instanceof ArrayBuffer || null === t) {
                                        e.wasmBinary = t;
                                        return
                                    }
                                    console.error("setWasmBinary expects an ArrayBuffer or null")
                                }
                                ,
                                e.getWasmBinary = function () {
                                    return e.wasmBinary
                                }
                                ,
                                e.isLoading = !1,
                                e.callBackQueue = [],
                                e.wasmURL = "https://unpkg.com/".concat(i.name, "@").concat(i.version, "/rive.wasm"),
                                e.wasmFallbackURL = "https://cdn.jsdelivr.net/npm/".concat(i.name, "@").concat(i.version, "/rive_fallback.wasm"),
                                e.wasmBinary = null,
                                e.enablePerfMarks = !1,
                                e
                        }()
                }
                , (e, t, n) => {
                    var r;
                    n.r(t),
                        n.d(t, {
                            default: () => i
                        });
                    let i = (r = "u" > typeof document ? document.currentScript?.src : void 0,
                        function (e = {}) {
                            var t, n, i, a, o, s, u, l = new Promise((e, t) => {
                                s = e,
                                    u = t
                            }
                            ), c = "object" == typeof window, h = "function" == typeof importScripts;
                            function f() {
                                function e(e) {
                                    let a = r;
                                    n = t = 0,
                                        r = new Map,
                                        a.forEach(t => {
                                            try {
                                                t(e)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }
                                        ),
                                        this.ob(),
                                        i && i.Qb()
                                }
                                let t = 0
                                    , n = 0
                                    , r = new Map
                                    , i = null
                                    , a = null;
                                this.requestAnimationFrame = function (i) {
                                    t ||= requestAnimationFrame(e.bind(this));
                                    let a = ++n;
                                    return r.set(a, i),
                                        a
                                }
                                    ,
                                    this.cancelAnimationFrame = function (e) {
                                        r.delete(e),
                                            t && 0 == r.size && (cancelAnimationFrame(t),
                                                t = 0)
                                    }
                                    ,
                                    this.Ob = function (e) {
                                        a && (document.body.remove(a),
                                            a = null),
                                            e || ((a = document.createElement("div")).style.backgroundColor = "black",
                                                a.style.position = "fixed",
                                                a.style.right = 0,
                                                a.style.top = 0,
                                                a.style.color = "white",
                                                a.style.padding = "4px",
                                                a.innerHTML = "RIVE FPS",
                                                e = function (e) {
                                                    a.innerHTML = "RIVE FPS " + e.toFixed(1)
                                                }
                                                ,
                                                document.body.appendChild(a)),
                                            i = new function () {
                                                let t = 0
                                                    , n = 0;
                                                this.Qb = function () {
                                                    var r = performance.now();
                                                    n ? (++t,
                                                        1e3 < (r -= n) && (e(1e3 * t / r),
                                                            t = n = 0)) : (n = r,
                                                                t = 0)
                                                }
                                            }
                                    }
                                    ,
                                    this.Lb = function () {
                                        a && (document.body.remove(a),
                                            a = null),
                                            i = null
                                    }
                                    ,
                                    this.ob = function () { }
                            }
                            function d(e) {
                                console.assert(!0);
                                let t = new Map
                                    , n = -1 / 0;
                                this.push = function (r) {
                                    return r = r + ((1 << e) - 1) >> e,
                                        t.has(r) && clearTimeout(t.get(r)),
                                        t.set(r, setTimeout(function () {
                                            t.delete(r),
                                                0 == t.length ? n = -1 / 0 : r == n && console.assert((n = Math.max(...t.keys())) < r)
                                        }, 1e3)),
                                        (n = Math.max(r, n)) << e
                                }
                            }
                            let p = e.onRuntimeInitialized;
                            e.onRuntimeInitialized = function () {
                                p && p();
                                let t = e.decodeAudio;
                                e.decodeAudio = function (e, n) {
                                    n(e = t(e))
                                }
                                    ;
                                let n = e.decodeFont;
                                e.decodeFont = function (e, t) {
                                    t(e = n(e))
                                }
                                    ;
                                let r = e.setFallbackFontCb;
                                e.setFallbackFontCallback = "function" == typeof r ? function (e) {
                                    r(e)
                                }
                                    : function () {
                                        console.warn("Module.setFallbackFontCallback called, but text support is not enabled in this build.")
                                    }
                                    ;
                                let i = e.FileAssetLoader;
                                e.ptrToAsset = t => {
                                    let n = e.ptrToFileAsset(t);
                                    return n.isImage ? e.ptrToImageAsset(t) : n.isFont ? e.ptrToFontAsset(t) : n.isAudio ? e.ptrToAudioAsset(t) : n
                                }
                                    ,
                                    e.CustomFileAssetLoader = i.extend("CustomFileAssetLoader", {
                                        __construct: function ({ loadContents: e }) {
                                            this.__parent.__construct.call(this),
                                                this.Eb = e
                                        },
                                        loadContents: function (t, n) {
                                            return t = e.ptrToAsset(t),
                                                this.Eb(t, n)
                                        }
                                    }),
                                    e.CDNFileAssetLoader = i.extend("CDNFileAssetLoader", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this)
                                        },
                                        loadContents: function (t) {
                                            var n, r, i;
                                            let a = e.ptrToAsset(t);
                                            return "" !== (t = a.cdnUuid) && (n = a.cdnBaseUrl + "/" + t,
                                                r = e => {
                                                    a.decode(new Uint8Array(e.response))
                                                }
                                                ,
                                                (i = new XMLHttpRequest).responseType = "arraybuffer",
                                                i.onreadystatechange = function () {
                                                    4 == i.readyState && 200 == i.status && r(i)
                                                }
                                                ,
                                                i.open("GET", n, !0),
                                                i.send(null),
                                                !0)
                                        }
                                    }),
                                    e.FallbackFileAssetLoader = i.extend("FallbackFileAssetLoader", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this),
                                                this.kb = []
                                        },
                                        addLoader: function (e) {
                                            this.kb.push(e)
                                        },
                                        loadContents: function (e, t) {
                                            for (let n of this.kb)
                                                if (n.loadContents(e, t))
                                                    return !0;
                                            return !1
                                        }
                                    });
                                let a = e.computeAlignment;
                                e.computeAlignment = function (e, t, n, r, i = 1) {
                                    return a.call(this, e, t, n, r, i)
                                }
                            }
                                ;
                            let v = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" ")
                                , m = new function () {
                                    function e() {
                                        if (!t) {
                                            let l;
                                            var e = document.createElement("canvas")
                                                , o = {
                                                    alpha: 1,
                                                    depth: 0,
                                                    stencil: 0,
                                                    antialias: 0,
                                                    premultipliedAlpha: 1,
                                                    preserveDrawingBuffer: 0,
                                                    powerPreference: "high-performance",
                                                    failIfMajorPerformanceCaveat: 0,
                                                    enableExtensionsByDefault: 1,
                                                    explicitSwapControl: 1,
                                                    renderViaOffscreenBackBuffer: 1
                                                };
                                            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                                                if (l = e.getContext("webgl", o),
                                                    n = 1,
                                                    !l)
                                                    return console.log("No WebGL support. Image mesh will not be drawn."),
                                                        !1
                                            } else if (l = e.getContext("webgl2", o))
                                                n = 2;
                                            else {
                                                if (!(l = e.getContext("webgl", o)))
                                                    return console.log("No WebGL support. Image mesh will not be drawn."),
                                                        !1;
                                                n = 1
                                            }
                                            function s(e, t, n) {
                                                if (t = l.createShader(t),
                                                    l.shaderSource(t, n),
                                                    l.compileShader(t),
                                                    0 < ((n = l.getShaderInfoLog(t)) || "").length)
                                                    throw n;
                                                l.attachShader(e, t)
                                            }
                                            if (r = Math.min((l = new Proxy(l, {
                                                get: (e, t) => e.isContextLost() ? (u || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", t),
                                                    u = !0),
                                                    "function" == typeof e[t]) ? function () { }
                                                    : void 0 : "function" == typeof e[t] ? function (...n) {
                                                        return e[t].apply(e, n)
                                                    }
                                                    : e[t],
                                                set(e, t, n) {
                                                    if (!e.isContextLost())
                                                        return e[t] = n,
                                                            !0;
                                                    u || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + t),
                                                        u = !0)
                                                }
                                            })).getParameter(l.MAX_RENDERBUFFER_SIZE), l.getParameter(l.MAX_TEXTURE_SIZE)),
                                                s(e = l.createProgram(), l.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }"),
                                                s(e, l.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }"),
                                                l.bindAttribLocation(e, 0, "vertex"),
                                                l.bindAttribLocation(e, 1, "uv"),
                                                l.linkProgram(e),
                                                0 < ((o = l.getProgramInfoLog(e)) || "").trim().length)
                                                throw o;
                                            i = l.getUniformLocation(e, "mat"),
                                                a = l.getUniformLocation(e, "translate"),
                                                l.useProgram(e),
                                                l.bindBuffer(l.ARRAY_BUFFER, l.createBuffer()),
                                                l.enableVertexAttribArray(0),
                                                l.enableVertexAttribArray(1),
                                                l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, l.createBuffer()),
                                                l.uniform1i(l.getUniformLocation(e, "image"), 0),
                                                l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                                                t = l
                                        }
                                        return !0
                                    }
                                    let t = null
                                        , n = 0
                                        , r = 0
                                        , i = null
                                        , a = null
                                        , o = 0
                                        , s = 0
                                        , u = !1;
                                    e(),
                                        this.bc = function () {
                                            return e(),
                                                r
                                        }
                                        ,
                                        this.Kb = function (e) {
                                            t.deleteTexture && t.deleteTexture(e)
                                        }
                                        ,
                                        this.Jb = function (r) {
                                            if (!e())
                                                return null;
                                            let i = t.createTexture();
                                            return i ? (t.bindTexture(t.TEXTURE_2D, i),
                                                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r),
                                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                                2 == n ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR),
                                                    t.generateMipmap(t.TEXTURE_2D)) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                                i) : null
                                        }
                                        ;
                                    let l = new d(8)
                                        , c = new d(8)
                                        , h = new d(10)
                                        , f = new d(10);
                                    this.Nb = function (n, r, u, d, p) {
                                        if (e()) {
                                            var v = l.push(n)
                                                , m = c.push(r);
                                            if (t.canvas) {
                                                for (var b of ((t.canvas.width != v || t.canvas.height != m) && (t.canvas.width = v,
                                                    t.canvas.height = m),
                                                    t.viewport(0, m - r, n, r),
                                                    t.disable(t.SCISSOR_TEST),
                                                    t.clearColor(0, 0, 0, 0),
                                                    t.clear(t.COLOR_BUFFER_BIT),
                                                    t.enable(t.SCISSOR_TEST),
                                                    u.sort((e, t) => t.vb - e.vb),
                                                    v = h.push(d),
                                                    o != v && (t.bufferData(t.ARRAY_BUFFER, 8 * v, t.DYNAMIC_DRAW),
                                                        o = v),
                                                    v = 0,
                                                    u))
                                                    t.bufferSubData(t.ARRAY_BUFFER, v, b.Ta),
                                                        v += 4 * b.Ta.length;
                                                for (var g of (console.assert(v == 4 * d),
                                                    u))
                                                    t.bufferSubData(t.ARRAY_BUFFER, v, g.Bb),
                                                        v += 4 * g.Bb.length;
                                                for (var y of (console.assert(v == 8 * d),
                                                    v = f.push(p),
                                                    s != v && (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * v, t.DYNAMIC_DRAW),
                                                        s = v),
                                                    b = 0,
                                                    u))
                                                    t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, b, y.indices),
                                                        b += 2 * y.indices.length;
                                                for (let e of (console.assert(b == 2 * p),
                                                    y = 0,
                                                    g = !0,
                                                    v = b = 0,
                                                    u)) {
                                                    e.image.Ja != y && (t.bindTexture(t.TEXTURE_2D, e.image.Ia || null),
                                                        y = e.image.Ja),
                                                        e.hc ? (t.scissor(e.Za, m - e.$a - e.jb, e.uc, e.jb),
                                                            g = !0) : g && (t.scissor(0, m - r, n, r),
                                                                g = !1),
                                                        u = 2 / n;
                                                    let o = -2 / r;
                                                    t.uniform4f(i, e.ha[0] * u * e.Aa, e.ha[1] * o * e.Ba, e.ha[2] * u * e.Aa, e.ha[3] * o * e.Ba),
                                                        t.uniform2f(a, e.ha[4] * u * e.Aa + u * (e.Za - e.cc * e.Aa) - 1, e.ha[5] * o * e.Ba + o * (e.$a - e.dc * e.Ba) + 1),
                                                        t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, v),
                                                        t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, v + 4 * d),
                                                        t.drawElements(t.TRIANGLES, e.indices.length, t.UNSIGNED_SHORT, b),
                                                        v += 4 * e.Ta.length,
                                                        b += 2 * e.indices.length
                                                }
                                                console.assert(v == 4 * d),
                                                    console.assert(b == 2 * p)
                                            }
                                        }
                                    }
                                        ,
                                        this.canvas = function () {
                                            return e() && t.canvas
                                        }
                                }
                                , b = e.onRuntimeInitialized;
                            e.onRuntimeInitialized = function () {
                                function t(e) {
                                    switch (e) {
                                        case c.srcOver:
                                            return "source-over";
                                        case c.screen:
                                            return "screen";
                                        case c.overlay:
                                            return "overlay";
                                        case c.darken:
                                            return "darken";
                                        case c.lighten:
                                            return "lighten";
                                        case c.colorDodge:
                                            return "color-dodge";
                                        case c.colorBurn:
                                            return "color-burn";
                                        case c.hardLight:
                                            return "hard-light";
                                        case c.softLight:
                                            return "soft-light";
                                        case c.difference:
                                            return "difference";
                                        case c.exclusion:
                                            return "exclusion";
                                        case c.multiply:
                                            return "multiply";
                                        case c.hue:
                                            return "hue";
                                        case c.saturation:
                                            return "saturation";
                                        case c.color:
                                            return "color";
                                        case c.luminosity:
                                            return "luminosity"
                                    }
                                }
                                function n(e) {
                                    return "rgba(" + ((0xff0000 & e) >>> 16) + "," + ((65280 & e) >>> 8) + "," + ((255 & e) >>> 0) + "," + ((0xff000000 & e) >>> 24) / 255 + ")"
                                }
                                function r() {
                                    for (let e of (0 < M.length && (m.Nb(C.drawWidth(), C.drawHeight(), M, P, R),
                                        M = [],
                                        R = P = 0,
                                        C.reset(512, 512)),
                                        A)) {
                                        for (let t of e.I)
                                            t();
                                        e.I = []
                                    }
                                    A.clear()
                                }
                                b && b();
                                var i = e.RenderPaintStyle;
                                let a = e.RenderPath
                                    , o = e.RenderPaint
                                    , s = e.Renderer
                                    , u = e.StrokeCap
                                    , l = e.StrokeJoin
                                    , c = e.BlendMode
                                    , h = i.fill
                                    , d = i.stroke
                                    , p = e.FillRule.evenOdd
                                    , g = 1;
                                var y = e.RenderImage.extend("CanvasRenderImage", {
                                    __construct: function ({ la: e, wa: t } = {}) {
                                        this.__parent.__construct.call(this),
                                            this.Ja = g,
                                            g = g + 1 & 0x7fffffff || 1,
                                            this.la = e,
                                            this.wa = t
                                    },
                                    __destruct: function () {
                                        this.Ia && (m.Kb(this.Ia),
                                            URL.revokeObjectURL(this.Wa)),
                                            this.__parent.__destruct.call(this)
                                    },
                                    decode: function (e) {
                                        var t = this;
                                        t.wa && t.wa(t);
                                        var n = new Image;
                                        t.Wa = URL.createObjectURL(new Blob([e], {
                                            type: "image/png"
                                        })),
                                            n.onload = function () {
                                                t.Db = n,
                                                    t.Ia = m.Jb(n),
                                                    t.size(n.width, n.height),
                                                    t.la && t.la(t)
                                            }
                                            ,
                                            n.src = t.Wa
                                    }
                                })
                                    , w = a.extend("CanvasRenderPath", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this),
                                                this.U = new Path2D
                                        },
                                        rewind: function () {
                                            this.U = new Path2D
                                        },
                                        addPath: function (e, t, n, r, i, a, o) {
                                            var s = this.U
                                                , u = s.addPath;
                                            e = e.U;
                                            let l = new DOMMatrix;
                                            l.a = t,
                                                l.b = n,
                                                l.c = r,
                                                l.d = i,
                                                l.e = a,
                                                l.f = o,
                                                u.call(s, e, l)
                                        },
                                        fillRule: function (e) {
                                            this.Va = e
                                        },
                                        moveTo: function (e, t) {
                                            this.U.moveTo(e, t)
                                        },
                                        lineTo: function (e, t) {
                                            this.U.lineTo(e, t)
                                        },
                                        cubicTo: function (e, t, n, r, i, a) {
                                            this.U.bezierCurveTo(e, t, n, r, i, a)
                                        },
                                        close: function () {
                                            this.U.closePath()
                                        }
                                    })
                                    , _ = o.extend("CanvasRenderPaint", {
                                        color: function (e) {
                                            this.Xa = n(e)
                                        },
                                        thickness: function (e) {
                                            this.Gb = e
                                        },
                                        join: function (e) {
                                            switch (e) {
                                                case l.miter:
                                                    this.Ha = "miter";
                                                    break;
                                                case l.round:
                                                    this.Ha = "round";
                                                    break;
                                                case l.bevel:
                                                    this.Ha = "bevel"
                                            }
                                        },
                                        cap: function (e) {
                                            switch (e) {
                                                case u.butt:
                                                    this.Ga = "butt";
                                                    break;
                                                case u.round:
                                                    this.Ga = "round";
                                                    break;
                                                case u.square:
                                                    this.Ga = "square"
                                            }
                                        },
                                        style: function (e) {
                                            this.Fb = e
                                        },
                                        blendMode: function (e) {
                                            this.Cb = t(e)
                                        },
                                        clearGradient: function () {
                                            this.ja = null
                                        },
                                        linearGradient: function (e, t, n, r) {
                                            this.ja = {
                                                xb: e,
                                                yb: t,
                                                cb: n,
                                                eb: r,
                                                Qa: []
                                            }
                                        },
                                        radialGradient: function (e, t, n, r) {
                                            this.ja = {
                                                xb: e,
                                                yb: t,
                                                cb: n,
                                                eb: r,
                                                Qa: [],
                                                ac: !0
                                            }
                                        },
                                        addStop: function (e, t) {
                                            this.ja.Qa.push({
                                                color: e,
                                                stop: t
                                            })
                                        },
                                        completeGradient: function () { },
                                        draw: function (e, t, r, i) {
                                            let a = this.Fb;
                                            var o = this.Xa
                                                , s = this.ja;
                                            let u = e.globalCompositeOperation
                                                , l = e.globalAlpha;
                                            if (e.globalCompositeOperation = this.Cb,
                                                e.globalAlpha = i,
                                                null != s) {
                                                o = s.xb;
                                                let t = s.yb
                                                    , r = s.cb;
                                                var c = s.eb;
                                                i = s.Qa,
                                                    s.ac ? (s = r - o,
                                                        c -= t,
                                                        o = e.createRadialGradient(o, t, 0, o, t, Math.sqrt(s * s + c * c))) : o = e.createLinearGradient(o, t, r, c);
                                                for (let e = 0, t = i.length; e < t; e++)
                                                    s = i[e],
                                                        o.addColorStop(s.stop, n(s.color));
                                                this.Xa = o,
                                                    this.ja = null
                                            }
                                            switch (a) {
                                                case d:
                                                    e.strokeStyle = o,
                                                        e.lineWidth = this.Gb,
                                                        e.lineCap = this.Ga,
                                                        e.lineJoin = this.Ha,
                                                        e.stroke(t);
                                                    break;
                                                case h:
                                                    e.fillStyle = o,
                                                        e.fill(t, r)
                                            }
                                            e.globalCompositeOperation = u,
                                                e.globalAlpha = l
                                        }
                                    });
                                let A = new Set
                                    , C = null
                                    , M = []
                                    , P = 0
                                    , R = 0;
                                var E = e.CanvasRenderer = s.extend("Renderer", {
                                    __construct: function (e) {
                                        this.__parent.__construct.call(this),
                                            this.T = [1, 0, 0, 1, 0, 0],
                                            this.G = [1],
                                            this.B = e.getContext("2d"),
                                            this.Ua = e,
                                            this.I = []
                                    },
                                    save: function () {
                                        this.T.push(...this.T.slice(this.T.length - 6)),
                                            this.G.push(this.G[this.G.length - 1]),
                                            this.I.push(this.B.save.bind(this.B))
                                    },
                                    restore: function () {
                                        let e = this.T.length - 6;
                                        if (6 > e)
                                            throw "restore() called without matching save().";
                                        this.T.splice(e),
                                            this.G.pop(),
                                            this.I.push(this.B.restore.bind(this.B))
                                    },
                                    transform: function (e, t, n, r, i, a) {
                                        let o = this.T
                                            , s = o.length - 6;
                                        o.splice(s, 6, o[s] * e + o[s + 2] * t, o[s + 1] * e + o[s + 3] * t, o[s] * n + o[s + 2] * r, o[s + 1] * n + o[s + 3] * r, o[s] * i + o[s + 2] * a + o[s + 4], o[s + 1] * i + o[s + 3] * a + o[s + 5]),
                                            this.I.push(this.B.transform.bind(this.B, e, t, n, r, i, a))
                                    },
                                    rotate: function (e) {
                                        let t = Math.sin(e);
                                        e = Math.cos(e),
                                            this.transform(e, t, -t, e, 0, 0)
                                    },
                                    modulateOpacity: function (e) {
                                        this.G[this.G.length - 1] *= e
                                    },
                                    _drawPath: function (e, t) {
                                        this.I.push(t.draw.bind(t, this.B, e.U, e.Va === p ? "evenodd" : "nonzero", Math.max(0, this.G[this.G.length - 1])))
                                    },
                                    _drawRiveImage: function (e, n, r, i) {
                                        var a = e.Db;
                                        if (a) {
                                            var o = this.B
                                                , s = t(r)
                                                , u = Math.max(0, i * this.G[this.G.length - 1]);
                                            this.I.push(function () {
                                                o.globalCompositeOperation = s,
                                                    o.globalAlpha = u,
                                                    o.drawImage(a, 0, 0),
                                                    o.globalAlpha = 1
                                            })
                                        }
                                    },
                                    _getMatrix: function (e) {
                                        let t = this.T
                                            , n = t.length - 6;
                                        for (let r = 0; 6 > r; ++r)
                                            e[r] = t[n + r]
                                    },
                                    _drawImageMesh: function (n, i, a, o, s, u, l, c, h, f, d, p, v, b) {
                                        let g, y, w;
                                        try {
                                            g = e.HEAPF32.slice(s >> 2, (s >> 2) + u),
                                                y = e.HEAPF32.slice(l >> 2, (l >> 2) + c),
                                                w = e.HEAPU16.slice(h >> 1, (h >> 1) + f)
                                        } catch (e) {
                                            console.error("[Rive] _drawImageMesh: failed to read mesh data from WASM heap. Mesh skipped for this frame.");
                                            return
                                        }
                                        i = this.B.canvas.width,
                                            s = this.B.canvas.height,
                                            l = v - d,
                                            c = b - p,
                                            d = Math.max(d, 0),
                                            p = Math.max(p, 0);
                                        let _ = (v = Math.min(v, i)) - d
                                            , E = (b = Math.min(b, s)) - p;
                                        if (console.assert(_ <= Math.min(l, i)),
                                            console.assert(E <= Math.min(c, s)),
                                            !(0 >= _ || 0 >= E)) {
                                            v = _ < l || E < c,
                                                i = b = 1;
                                            var I = Math.ceil(_ * b)
                                                , k = Math.ceil(E * i);
                                            s = m.bc(),
                                                I > s && (b *= s / I,
                                                    I = s),
                                                k > s && (i *= s / k,
                                                    k = s),
                                                C || (C = new e.DynamicRectanizer(s)).reset(512, 512),
                                                0 > (s = C.addRect(I, k)) && (r(),
                                                    A.add(this),
                                                    console.assert(0 <= (s = C.addRect(I, k))));
                                            var F = 65535 & s
                                                , T = s >> 16;
                                            M.push({
                                                ha: this.T.slice(this.T.length - 6),
                                                image: n,
                                                Za: F,
                                                $a: T,
                                                cc: d,
                                                dc: p,
                                                uc: I,
                                                jb: k,
                                                Aa: b,
                                                Ba: i,
                                                Ta: g,
                                                Bb: y,
                                                indices: w,
                                                hc: v,
                                                vb: n.Ja << 1 | !!v
                                            }),
                                                P += u,
                                                R += f;
                                            var L = this.B
                                                , O = t(a)
                                                , x = Math.max(0, o * this.G[this.G.length - 1]);
                                            this.I.push(function () {
                                                L.save(),
                                                    L.resetTransform(),
                                                    L.globalCompositeOperation = O,
                                                    L.globalAlpha = x;
                                                let e = m.canvas();
                                                e && L.drawImage(e, F, T, I, k, d, p, _, E),
                                                    L.restore()
                                            })
                                        }
                                    },
                                    _clipPath: function (e) {
                                        this.I.push(this.B.clip.bind(this.B, e.U, e.Va === p ? "evenodd" : "nonzero"))
                                    },
                                    clear: function () {
                                        A.add(this),
                                            this.I.push(this.B.clearRect.bind(this.B, 0, 0, this.Ua.width, this.Ua.height))
                                    },
                                    flush: function () { },
                                    translate: function (e, t) {
                                        this.transform(1, 0, 0, 1, e, t)
                                    }
                                });
                                e.makeRenderer = function (e) {
                                    let t = new E(e)
                                        , n = t.B;
                                    return new Proxy(t, {
                                        get(e, r) {
                                            if ("function" == typeof e[r])
                                                return function (...t) {
                                                    return e[r].apply(e, t)
                                                }
                                                    ;
                                            if ("function" == typeof n[r]) {
                                                if (-1 < v.indexOf(r))
                                                    throw Error("RiveException: Method call to '" + r + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                                                return function (...e) {
                                                    t.I.push(n[r].bind(n, ...e))
                                                }
                                            }
                                            return e[r]
                                        },
                                        set(e, r, i) {
                                            if (r in n)
                                                return t.I.push(() => {
                                                    n[r] = i
                                                }
                                                ),
                                                    !0
                                        }
                                    })
                                }
                                    ,
                                    e.decodeImage = function (e, t) {
                                        new y({
                                            la: t
                                        }).decode(e)
                                    }
                                    ,
                                    e.renderFactory = {
                                        makeRenderPaint: function () {
                                            return new _
                                        },
                                        makeRenderPath: function () {
                                            return new w
                                        },
                                        makeRenderImage: function () {
                                            let e = k;
                                            return new y({
                                                wa: () => {
                                                    e.total++
                                                }
                                                ,
                                                la: () => {
                                                    if (e.loaded++,
                                                        e.loaded === e.total) {
                                                        let t = e.ready;
                                                        t && (t(),
                                                            e.ready = null)
                                                    }
                                                }
                                            })
                                        }
                                    };
                                let I = e.load
                                    , k = null;
                                e.load = function (t, n, r = !0) {
                                    let i = new e.FallbackFileAssetLoader;
                                    return void 0 !== n && i.addLoader(n),
                                        r && (n = new e.CDNFileAssetLoader,
                                            i.addLoader(n)),
                                        new Promise(function (e) {
                                            let n = null;
                                            k = {
                                                total: 0,
                                                loaded: 0,
                                                ready: function () {
                                                    e(n)
                                                }
                                            },
                                                n = I(t, i),
                                                0 == k.total && e(n)
                                        }
                                        )
                                }
                                    ;
                                let F = e.RendererWrapper.prototype.align;
                                e.RendererWrapper.prototype.align = function (e, t, n, r, i = 1) {
                                    F.call(this, e, t, n, r, i)
                                }
                                    ,
                                    e.requestAnimationFrame = (i = new f).requestAnimationFrame.bind(i),
                                    e.cancelAnimationFrame = i.cancelAnimationFrame.bind(i),
                                    e.enableFPSCounter = i.Ob.bind(i),
                                    e.disableFPSCounter = i.Lb,
                                    i.ob = r,
                                    e.resolveAnimationFrame = r,
                                    e.cleanup = function () {
                                        C && C.delete()
                                    }
                            }
                                ;
                            var g, y, w = Object.assign({}, e), _ = "./this.program", A = "";
                            (c || h) && (h ? A = self.location.href : "u" > typeof document && document.currentScript && (A = document.currentScript.src),
                                r && (A = r),
                                A = A.startsWith("blob:") ? "" : A.substr(0, A.replace(/[?#].*/, "").lastIndexOf("/") + 1),
                                h && (y = e => {
                                    var t = new XMLHttpRequest;
                                    return t.open("GET", e, !1),
                                        t.responseType = "arraybuffer",
                                        t.send(null),
                                        new Uint8Array(t.response)
                                }
                                ),
                                g = (e, t, n) => {
                                    if (H(e)) {
                                        var r = new XMLHttpRequest;
                                        r.open("GET", e, !0),
                                            r.responseType = "arraybuffer",
                                            r.onload = () => {
                                                200 == r.status || 0 == r.status && r.response ? t(r.response) : n()
                                            }
                                            ,
                                            r.onerror = n,
                                            r.send(null)
                                    } else
                                        fetch(e, {
                                            credentials: "same-origin"
                                        }).then(e => e.ok ? e.arrayBuffer() : Promise.reject(Error(e.status + " : " + e.url))).then(t, n)
                                }
                            );
                            var C = e.print || console.log.bind(console)
                                , M = e.printErr || console.error.bind(console);
                            Object.assign(e, w),
                                w = null,
                                e.thisProgram && (_ = e.thisProgram),
                                e.wasmBinary && (P = e.wasmBinary);
                            var P, R, E, I, k, F, T, L, O, x, j = !1;
                            function S() {
                                var t = R.buffer;
                                e.HEAP8 = E = new Int8Array(t),
                                    e.HEAP16 = k = new Int16Array(t),
                                    e.HEAPU8 = I = new Uint8Array(t),
                                    e.HEAPU16 = F = new Uint16Array(t),
                                    e.HEAP32 = T = new Int32Array(t),
                                    e.HEAPU32 = L = new Uint32Array(t),
                                    e.HEAPF32 = O = new Float32Array(t),
                                    e.HEAPF64 = x = new Float64Array(t)
                            }
                            var V = []
                                , D = []
                                , B = []
                                , W = 0
                                , U = null
                                , N = null;
                            function z(t) {
                                throw e.onAbort?.(t),
                                M(t = "Aborted(" + t + ")"),
                                j = !0,
                                t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info."),
                                u(t),
                                t
                            }
                            var $, H = e => e.startsWith("file://");
                            function Y(e) {
                                if (e == $ && P)
                                    return new Uint8Array(P);
                                if (y)
                                    return y(e);
                                throw "both async and sync fetching of the wasm failed"
                            }
                            function X(e, t, n) {
                                return (P ? Promise.resolve().then(() => Y(e)) : new Promise((t, n) => {
                                    g(e, e => t(new Uint8Array(e)), () => {
                                        try {
                                            t(Y(e))
                                        } catch (e) {
                                            n(e)
                                        }
                                    }
                                    )
                                }
                                )).then(e => WebAssembly.instantiate(e, t)).then(n, e => {
                                    M(`failed to asynchronously prepare wasm: ${e}`),
                                        z(e)
                                }
                                )
                            }
                            var G, q, J = {
                                480578: (e, t, n, r, i) => {
                                    if ("u" < typeof window || void 0 === (window.AudioContext || window.webkitAudioContext))
                                        return 0;
                                    if (void 0 === window.h) {
                                        window.h = {
                                            za: 0
                                        },
                                            window.h.J = {},
                                            window.h.J.xa = e,
                                            window.h.J.capture = t,
                                            window.h.J.Ka = n,
                                            window.h.ga = {},
                                            window.h.ga.stopped = r,
                                            window.h.ga.wb = i;
                                        let a = window.h;
                                        a.D = [],
                                            a.sc = function (e) {
                                                for (var t = 0; t < a.D.length; ++t)
                                                    if (null == a.D[t])
                                                        return a.D[t] = e,
                                                            t;
                                                return a.D.push(e),
                                                    a.D.length - 1
                                            }
                                            ,
                                            a.Ab = function (e) {
                                                for (a.D[e] = null; 0 < a.D.length;)
                                                    if (null == a.D[a.D.length - 1])
                                                        a.D.pop();
                                                    else
                                                        break
                                            }
                                            ,
                                            a.Pc = function (e) {
                                                for (var t = 0; t < a.D.length; ++t)
                                                    if (a.D[t] == e)
                                                        return a.Ab(t)
                                            }
                                            ,
                                            a.qa = function (e) {
                                                return a.D[e]
                                            }
                                            ,
                                            a.Sa = ["touchend", "click"],
                                            a.unlock = function () {
                                                for (var e = 0; e < a.D.length; ++e) {
                                                    var t = a.D[e];
                                                    null != t && null != t.L && t.state === a.ga.wb && t.L.resume().then(() => {
                                                        ns(t.pb)
                                                    }
                                                        , e => {
                                                            console.error("Failed to resume audiocontext", e)
                                                        }
                                                    )
                                                }
                                                a.Sa.map(function (e) {
                                                    document.removeEventListener(e, a.unlock, !0)
                                                })
                                            }
                                            ,
                                            a.Sa.map(function (e) {
                                                document.addEventListener(e, a.unlock, !0)
                                            })
                                    }
                                    return window.h.za += 1,
                                        1
                                }
                                ,
                                482756: () => {
                                    void 0 !== window.h && (window.h.Sa.map(function (e) {
                                        document.removeEventListener(e, window.h.unlock, !0)
                                    }),
                                        --window.h.za,
                                        0 === window.h.za && delete window.h)
                                }
                                ,
                                483060: () => void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
                                483164: () => {
                                    try {
                                        var e = new (window.AudioContext || window.webkitAudioContext)
                                            , t = e.sampleRate;
                                        return e.close(),
                                            t
                                    } catch (e) {
                                        return 0
                                    }
                                }
                                ,
                                483335: (e, t, n, r, i, a) => {
                                    if (void 0 === window.h)
                                        return -1;
                                    var o = {}
                                        , s = {};
                                    return e == window.h.J.xa && 0 != n && (s.sampleRate = n),
                                        o.L = new (window.AudioContext || window.webkitAudioContext)(s),
                                        o.L.suspend(),
                                        o.state = window.h.ga.stopped,
                                        n = 0,
                                        e != window.h.J.xa && (n = t),
                                        o.Z = o.L.createScriptProcessor(r, n, t),
                                        o.Z.onaudioprocess = function (n) {
                                            if ((null == o.ra || 0 == o.ra.length) && (o.ra = new Float32Array(O.buffer, i, r * t)),
                                                e == window.h.J.capture || e == window.h.J.Ka) {
                                                for (var s = 0; s < t; s += 1)
                                                    for (var u = n.inputBuffer.getChannelData(s), l = o.ra, c = 0; c < r; c += 1)
                                                        l[c * t + s] = u[c];
                                                nu(a, r, i)
                                            }
                                            if (e == window.h.J.xa || e == window.h.J.Ka)
                                                for (nl(a, r, i),
                                                    s = 0; s < n.outputBuffer.numberOfChannels; ++s)
                                                    for (u = n.outputBuffer.getChannelData(s),
                                                        l = o.ra,
                                                        c = 0; c < r; c += 1)
                                                        u[c] = l[c * t + s];
                                            else
                                                for (s = 0; s < n.outputBuffer.numberOfChannels; ++s)
                                                    n.outputBuffer.getChannelData(s).fill(0)
                                        }
                                        ,
                                        e != window.h.J.capture && e != window.h.J.Ka || navigator.mediaDevices.getUserMedia({
                                            audio: !0,
                                            video: !1
                                        }).then(function (e) {
                                            o.Ca = o.L.createMediaStreamSource(e),
                                                o.Ca.connect(o.Z),
                                                o.Z.connect(o.L.destination)
                                        }).catch(function (e) {
                                            console.log("Failed to get user media: " + e)
                                        }),
                                        e == window.h.J.xa && o.Z.connect(o.L.destination),
                                        o.pb = a,
                                        window.h.sc(o)
                                }
                                ,
                                486212: e => window.h.qa(e).L.sampleRate,
                                486285: e => {
                                    void 0 !== (e = window.h.qa(e)).Z && (e.Z.onaudioprocess = function () { }
                                        ,
                                        e.Z.disconnect(),
                                        e.Z = void 0),
                                        void 0 !== e.Ca && (e.Ca.disconnect(),
                                            e.Ca = void 0),
                                        e.L.close(),
                                        e.L = void 0,
                                        e.pb = void 0
                                }
                                ,
                                486685: e => {
                                    window.h.Ab(e)
                                }
                                ,
                                486735: e => {
                                    (e = window.h.qa(e)).L.resume(),
                                        e.state = window.h.ga.wb
                                }
                                ,
                                486874: e => {
                                    (e = window.h.qa(e)).L.suspend(),
                                        e.state = window.h.ga.stopped
                                }
                            }, K = t => {
                                for (; 0 < t.length;)
                                    t.shift()(e)
                            }
                                ;
                            function Z() {
                                var e = T[e0 >> 2];
                                return e0 += 4,
                                    e
                            }
                            var Q = (e, t) => {
                                for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                                    var i = e[r];
                                    "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1),
                                        n++) : n && (e.splice(r, 1),
                                            n--)
                                }
                                if (t)
                                    for (; n; n--)
                                        e.unshift("..");
                                return e
                            }
                                , ee = e => {
                                    var t = "/" === e.charAt(0)
                                        , n = "/" === e.substr(-1);
                                    return (e = Q(e.split("/").filter(e => !!e), !t).join("/")) || t || (e = "."),
                                        e && n && (e += "/"),
                                        (t ? "/" : "") + e
                                }
                                , et = e => {
                                    var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
                                    return (e = t[0],
                                        t = t[1],
                                        e || t) ? e + (t &&= t.substr(0, t.length - 1)) : "."
                                }
                                , en = e => {
                                    if ("/" === e)
                                        return "/";
                                    var t = (e = (e = ee(e)).replace(/\/$/, "")).lastIndexOf("/");
                                    return -1 === t ? e : e.substr(t + 1)
                                }
                                , er = e => (er = (() => {
                                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                                        return e => crypto.getRandomValues(e);
                                    z("initRandomDevice")
                                }
                                )())(e)
                                , ei = (...e) => {
                                    for (var t = "", n = !1, r = e.length - 1; -1 <= r && !n; r--) {
                                        if ("string" != typeof (n = 0 <= r ? e[r] : "/"))
                                            throw TypeError("Arguments to path.resolve must be strings");
                                        if (!n)
                                            return "";
                                        t = n + "/" + t,
                                            n = "/" === n.charAt(0)
                                    }
                                    return t = Q(t.split("/").filter(e => !!e), !n).join("/"),
                                        (n ? "/" : "") + t || "."
                                }
                                , ea = "u" > typeof TextDecoder ? new TextDecoder("utf8") : void 0
                                , eo = (e, t, n) => {
                                    var r = t + n;
                                    for (n = t; e[n] && !(n >= r);)
                                        ++n;
                                    if (16 < n - t && e.buffer && ea)
                                        return ea.decode(e.subarray(t, n));
                                    for (r = ""; t < n;) {
                                        var i = e[t++];
                                        if (128 & i) {
                                            var a = 63 & e[t++];
                                            if (192 == (224 & i))
                                                r += String.fromCharCode((31 & i) << 6 | a);
                                            else {
                                                var o = 63 & e[t++];
                                                65536 > (i = 224 == (240 & i) ? (15 & i) << 12 | a << 6 | o : (7 & i) << 18 | a << 12 | o << 6 | 63 & e[t++]) ? r += String.fromCharCode(i) : (i -= 65536,
                                                    r += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i))
                                            }
                                        } else
                                            r += String.fromCharCode(i)
                                    }
                                    return r
                                }
                                , es = []
                                , eu = e => {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var r = e.charCodeAt(n);
                                        127 >= r ? t++ : 2047 >= r ? t += 2 : 55296 <= r && 57343 >= r ? (t += 4,
                                            ++n) : t += 3
                                    }
                                    return t
                                }
                                , el = (e, t, n, r) => {
                                    if (!(0 < r))
                                        return 0;
                                    var i = n;
                                    r = n + r - 1;
                                    for (var a = 0; a < e.length; ++a) {
                                        var o = e.charCodeAt(a);
                                        if (55296 <= o && 57343 >= o && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++a)),
                                            127 >= o) {
                                            if (n >= r)
                                                break;
                                            t[n++] = o
                                        } else {
                                            if (2047 >= o) {
                                                if (n + 1 >= r)
                                                    break;
                                                t[n++] = 192 | o >> 6
                                            } else {
                                                if (65535 >= o) {
                                                    if (n + 2 >= r)
                                                        break;
                                                    t[n++] = 224 | o >> 12
                                                } else {
                                                    if (n + 3 >= r)
                                                        break;
                                                    t[n++] = 240 | o >> 18,
                                                        t[n++] = 128 | o >> 12 & 63
                                                }
                                                t[n++] = 128 | o >> 6 & 63
                                            }
                                            t[n++] = 128 | 63 & o
                                        }
                                    }
                                    return t[n] = 0,
                                        n - i
                                }
                                ;
                            function ec(e, t) {
                                var n = Array(eu(e) + 1);
                                return e = el(e, n, 0, n.length),
                                    t && (n.length = e),
                                    n
                            }
                            var eh = [];
                            function ef(e, t) {
                                var n, r;
                                eh[e] = {
                                    input: [],
                                    H: [],
                                    W: t
                                },
                                    n = e,
                                    r = ed,
                                    eb[n] = {
                                        m: r
                                    }
                            }
                            var ed = {
                                open(e) {
                                    var t = eh[e.node.ya];
                                    if (!t)
                                        throw new eA(43);
                                    e.s = t,
                                        e.seekable = !1
                                },
                                close(e) {
                                    e.s.W.pa(e.s)
                                },
                                pa(e) {
                                    e.s.W.pa(e.s)
                                },
                                read(e, t, n, r) {
                                    if (!e.s || !e.s.W.ib)
                                        throw new eA(60);
                                    for (var i = 0, a = 0; a < r; a++) {
                                        try {
                                            var o = e.s.W.ib(e.s)
                                        } catch (e) {
                                            throw new eA(29)
                                        }
                                        if (void 0 === o && 0 === i)
                                            throw new eA(6);
                                        if (null == o)
                                            break;
                                        i++,
                                            t[n + a] = o
                                    }
                                    return i && (e.node.timestamp = Date.now()),
                                        i
                                },
                                write(e, t, n, r) {
                                    if (!e.s || !e.s.W.Na)
                                        throw new eA(60);
                                    try {
                                        for (var i = 0; i < r; i++)
                                            e.s.W.Na(e.s, t[n + i])
                                    } catch (e) {
                                        throw new eA(29)
                                    }
                                    return r && (e.node.timestamp = Date.now()),
                                        i
                                }
                            };
                            function ep(e, t) {
                                var n = e.l ? e.l.length : 0;
                                n >= t || (t = Math.max(t, n * (1048576 > n ? 2 : 1.125) >>> 0),
                                    0 != n && (t = Math.max(t, 256)),
                                    n = e.l,
                                    e.l = new Uint8Array(t),
                                    0 < e.v && e.l.set(n.subarray(0, e.v), 0))
                            }
                            var ev = {
                                O: null,
                                V: () => ev.createNode(null, "/", 16895, 0),
                                createNode(e, t, n, r) {
                                    if (24576 == (61440 & n) || 4096 == (61440 & n))
                                        throw new eA(63);
                                    return ev.O || (ev.O = {
                                        dir: {
                                            node: {
                                                Y: ev.j.Y,
                                                R: ev.j.R,
                                                ka: ev.j.ka,
                                                ua: ev.j.ua,
                                                tb: ev.j.tb,
                                                zb: ev.j.zb,
                                                ub: ev.j.ub,
                                                sb: ev.j.sb,
                                                Da: ev.j.Da
                                            },
                                            stream: {
                                                ba: ev.m.ba
                                            }
                                        },
                                        file: {
                                            node: {
                                                Y: ev.j.Y,
                                                R: ev.j.R
                                            },
                                            stream: {
                                                ba: ev.m.ba,
                                                read: ev.m.read,
                                                write: ev.m.write,
                                                Ya: ev.m.Ya,
                                                lb: ev.m.lb,
                                                nb: ev.m.nb
                                            }
                                        },
                                        link: {
                                            node: {
                                                Y: ev.j.Y,
                                                R: ev.j.R,
                                                ma: ev.j.ma
                                            },
                                            stream: {}
                                        },
                                        ab: {
                                            node: {
                                                Y: ev.j.Y,
                                                R: ev.j.R
                                            },
                                            stream: eS
                                        }
                                    }),
                                        16384 == (61440 & (n = eF(e, t, n, r)).mode) ? (n.j = ev.O.dir.node,
                                            n.m = ev.O.dir.stream,
                                            n.l = {}) : 32768 == (61440 & n.mode) ? (n.j = ev.O.file.node,
                                                n.m = ev.O.file.stream,
                                                n.v = 0,
                                                n.l = null) : 40960 == (61440 & n.mode) ? (n.j = ev.O.link.node,
                                                    n.m = ev.O.link.stream) : 8192 == (61440 & n.mode) && (n.j = ev.O.ab.node,
                                                        n.m = ev.O.ab.stream),
                                        n.timestamp = Date.now(),
                                        e && (e.l[t] = n,
                                            e.timestamp = n.timestamp),
                                        n
                                },
                                Gc: e => e.l ? e.l.subarray ? e.l.subarray(0, e.v) : new Uint8Array(e.l) : new Uint8Array(0),
                                j: {
                                    Y(e) {
                                        var t = {};
                                        return t.Ec = 8192 == (61440 & e.mode) ? e.id : 1,
                                            t.Ic = e.id,
                                            t.mode = e.mode,
                                            t.Lc = 1,
                                            t.uid = 0,
                                            t.Hc = 0,
                                            t.ya = e.ya,
                                            16384 == (61440 & e.mode) ? t.size = 4096 : 32768 == (61440 & e.mode) ? t.size = e.v : 40960 == (61440 & e.mode) ? t.size = e.link.length : t.size = 0,
                                            t.wc = new Date(e.timestamp),
                                            t.Kc = new Date(e.timestamp),
                                            t.Dc = new Date(e.timestamp),
                                            t.Hb = 4096,
                                            t.xc = Math.ceil(t.size / t.Hb),
                                            t
                                    },
                                    R(e, t) {
                                        if (void 0 !== t.mode && (e.mode = t.mode),
                                            void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                                            void 0 !== t.size && (t = t.size,
                                                e.v != t))
                                            if (0 == t)
                                                e.l = null,
                                                    e.v = 0;
                                            else {
                                                var n = e.l;
                                                e.l = new Uint8Array(t),
                                                    n && e.l.set(n.subarray(0, Math.min(t, e.v))),
                                                    e.v = t
                                            }
                                    },
                                    ka() {
                                        throw eC[44]
                                    },
                                    ua: (e, t, n, r) => ev.createNode(e, t, n, r),
                                    tb(e, t, n) {
                                        if (16384 == (61440 & e.mode)) {
                                            try {
                                                var r = ek(t, n)
                                            } catch (e) { }
                                            if (r)
                                                for (var i in r.l)
                                                    throw new eA(55)
                                        }
                                        delete e.parent.l[e.name],
                                            e.parent.timestamp = Date.now(),
                                            e.name = n,
                                            t.l[n] = e,
                                            t.timestamp = e.parent.timestamp
                                    },
                                    zb(e, t) {
                                        delete e.l[t],
                                            e.timestamp = Date.now()
                                    },
                                    ub(e, t) {
                                        var n, r = ek(e, t);
                                        for (n in r.l)
                                            throw new eA(55);
                                        delete e.l[t],
                                            e.timestamp = Date.now()
                                    },
                                    sb(e) {
                                        var t, n = [".", ".."];
                                        for (t of Object.keys(e.l))
                                            n.push(t);
                                        return n
                                    },
                                    Da: (e, t, n) => ((e = ev.createNode(e, t, 41471, 0)).link = n,
                                        e),
                                    ma(e) {
                                        if (40960 != (61440 & e.mode))
                                            throw new eA(28);
                                        return e.link
                                    }
                                },
                                m: {
                                    read(e, t, n, r, i) {
                                        var a = e.node.l;
                                        if (i >= e.node.v)
                                            return 0;
                                        if (8 < (e = Math.min(e.node.v - i, r)) && a.subarray)
                                            t.set(a.subarray(i, i + e), n);
                                        else
                                            for (r = 0; r < e; r++)
                                                t[n + r] = a[i + r];
                                        return e
                                    },
                                    write(e, t, n, r, i, a) {
                                        if (t.buffer === E.buffer && (a = !1),
                                            !r)
                                            return 0;
                                        if ((e = e.node).timestamp = Date.now(),
                                            t.subarray && (!e.l || e.l.subarray)) {
                                            if (a)
                                                return e.l = t.subarray(n, n + r),
                                                    e.v = r;
                                            if (0 === e.v && 0 === i)
                                                return e.l = t.slice(n, n + r),
                                                    e.v = r;
                                            if (i + r <= e.v)
                                                return e.l.set(t.subarray(n, n + r), i),
                                                    r
                                        }
                                        if (ep(e, i + r),
                                            e.l.subarray && t.subarray)
                                            e.l.set(t.subarray(n, n + r), i);
                                        else
                                            for (a = 0; a < r; a++)
                                                e.l[i + a] = t[n + a];
                                        return e.v = Math.max(e.v, i + r),
                                            r
                                    },
                                    ba(e, t, n) {
                                        if (1 === n ? t += e.position : 2 === n && 32768 == (61440 & e.node.mode) && (t += e.node.v),
                                            0 > t)
                                            throw new eA(28);
                                        return t
                                    },
                                    Ya(e, t, n) {
                                        ep(e.node, t + n),
                                            e.node.v = Math.max(e.node.v, t + n)
                                    },
                                    lb(e, t, n, r, i) {
                                        if (32768 != (61440 & e.node.mode))
                                            throw new eA(43);
                                        if (e = e.node.l,
                                            2 & i || e.buffer !== E.buffer)
                                            throw (0 < n || n + t < e.length) && (e = e.subarray ? e.subarray(n, n + t) : Array.prototype.slice.call(e, n, n + t)),
                                            n = !0,
                                            z(),
                                            t = void 0,
                                            new eA(48);
                                        return n = !1,
                                            t = e.byteOffset,
                                        {
                                            o: t,
                                            vc: n
                                        }
                                    },
                                    nb: (e, t, n, r) => (ev.m.write(e, t, 0, r, n, !1),
                                        0)
                                }
                            }
                                , em = null
                                , eb = {}
                                , eg = []
                                , ey = 1
                                , ew = null
                                , e_ = !0
                                , eA = class {
                                    constructor(e) {
                                        this.name = "ErrnoError",
                                            this.aa = e
                                    }
                                }
                                , eC = {}
                                , eM = class {
                                    constructor() {
                                        this.h = {},
                                            this.node = null
                                    }
                                    get flags() {
                                        return this.h.flags
                                    }
                                    set flags(e) {
                                        this.h.flags = e
                                    }
                                    get position() {
                                        return this.h.position
                                    }
                                    set position(e) {
                                        this.h.position = e
                                    }
                                }
                                , eP = class {
                                    constructor(e, t, n, r) {
                                        e ||= this,
                                            this.parent = e,
                                            this.V = e.V,
                                            this.va = null,
                                            this.id = ey++,
                                            this.name = t,
                                            this.mode = n,
                                            this.j = {},
                                            this.m = {},
                                            this.ya = r
                                    }
                                    get read() {
                                        return 365 == (365 & this.mode)
                                    }
                                    set read(e) {
                                        e ? this.mode |= 365 : this.mode &= -366
                                    }
                                    get write() {
                                        return 146 == (146 & this.mode)
                                    }
                                    set write(e) {
                                        e ? this.mode |= 146 : this.mode &= -147
                                    }
                                }
                                ;
                            function eR(e, t = {}) {
                                if (!(e = ei(e)))
                                    return {
                                        path: "",
                                        node: null
                                    };
                                if (8 < (t = Object.assign({
                                    hb: !0,
                                    Pa: 0
                                }, t)).Pa)
                                    throw new eA(32);
                                e = e.split("/").filter(e => !!e);
                                for (var n = em, r = "/", i = 0; i < e.length; i++) {
                                    var a = i === e.length - 1;
                                    if (a && t.parent)
                                        break;
                                    if (n = ek(n, e[i]),
                                        r = ee(r + "/" + e[i]),
                                        n.va && (!a || a && t.hb) && (n = n.va.root),
                                        !a || t.gb) {
                                        for (a = 0; 40960 == (61440 & n.mode);)
                                            if (n = function (e) {
                                                if (!(e = eR(e).node))
                                                    throw new eA(44);
                                                if (!e.j.ma)
                                                    throw new eA(28);
                                                return ei(eE(e.parent), e.j.ma(e))
                                            }(r),
                                                n = eR(r = ei(et(r), n), {
                                                    Pa: t.Pa + 1
                                                }).node,
                                                40 < a++)
                                                throw new eA(32)
                                    }
                                }
                                return {
                                    path: r,
                                    node: n
                                }
                            }
                            function eE(e) {
                                for (var t; ;) {
                                    if (e === e.parent)
                                        return e = e.V.mb,
                                            t ? "/" !== e[e.length - 1] ? `${e}/${t}` : e + t : e;
                                    t = t ? `${e.name}/${t}` : e.name,
                                        e = e.parent
                                }
                            }
                            function eI(e, t) {
                                for (var n = 0, r = 0; r < t.length; r++)
                                    n = (n << 5) - n + t.charCodeAt(r) | 0;
                                return (e + n >>> 0) % ew.length
                            }
                            function ek(e, t) {
                                var n = 16384 == (61440 & e.mode) ? (n = eL(e, "x")) ? n : 2 * !e.j.ka : 54;
                                if (n)
                                    throw new eA(n);
                                for (n = ew[eI(e.id, t)]; n; n = n.fc) {
                                    var r = n.name;
                                    if (n.parent.id === e.id && r === t)
                                        return n
                                }
                                return e.j.ka(e, t)
                            }
                            function eF(e, t, n, r) {
                                return t = eI((e = new eP(e, t, n, r)).parent.id, e.name),
                                    e.fc = ew[t],
                                    ew[t] = e
                            }
                            function eT(e) {
                                var t = ["r", "w", "rw"][3 & e];
                                return 512 & e && (t += "w"),
                                    t
                            }
                            function eL(e, t) {
                                return e_ ? 0 : t.includes("r") && !(292 & e.mode) || t.includes("w") && !(146 & e.mode) || t.includes("x") && !(73 & e.mode) ? 2 : 0
                            }
                            function eO(e, t) {
                                try {
                                    return ek(e, t),
                                        20
                                } catch (e) { }
                                return eL(e, "wx")
                            }
                            function ex(e) {
                                if (!(e = eg[e]))
                                    throw new eA(8);
                                return e
                            }
                            function ej(e, t = -1) {
                                if (e = Object.assign(new eM, e),
                                    -1 == t)
                                    e: {
                                        for (t = 0; 4096 >= t; t++)
                                            if (!eg[t])
                                                break e;
                                        throw new eA(33)
                                    }
                                return e.X = t,
                                    eg[t] = e
                            }
                            var eS = {
                                open(e) {
                                    e.m = eb[e.node.ya].m,
                                        e.m.open?.(e)
                                },
                                ba() {
                                    throw new eA(70)
                                }
                            };
                            function eV(e, t) {
                                var n = "/" === t;
                                if (n && em)
                                    throw new eA(10);
                                if (!n && t) {
                                    var r = eR(t, {
                                        hb: !1
                                    });
                                    if (t = r.path,
                                        (r = r.node).va)
                                        throw new eA(10);
                                    if (16384 != (61440 & r.mode))
                                        throw new eA(54)
                                }
                                t = {
                                    type: e,
                                    Nc: {},
                                    mb: t,
                                    ec: []
                                },
                                    (e = e.V(t)).V = t,
                                    t.root = e,
                                    n ? em = e : r && (r.va = t,
                                        r.V && r.V.ec.push(t))
                            }
                            function eD(e, t, n) {
                                var r = eR(e, {
                                    parent: !0
                                }).node;
                                if (!(e = en(e)) || "." === e || ".." === e)
                                    throw new eA(28);
                                var i = eO(r, e);
                                if (i)
                                    throw new eA(i);
                                if (!r.j.ua)
                                    throw new eA(63);
                                return r.j.ua(r, e, t, n)
                            }
                            function eB(e) {
                                return eD(e, 16895, 0)
                            }
                            function eW(e, t, n) {
                                void 0 === n && (n = t,
                                    t = 438),
                                    eD(e, 8192 | t, n)
                            }
                            function eU(e, t) {
                                if (!ei(e))
                                    throw new eA(44);
                                var n = eR(t, {
                                    parent: !0
                                }).node;
                                if (!n)
                                    throw new eA(44);
                                var r = eO(n, t = en(t));
                                if (r)
                                    throw new eA(r);
                                if (!n.j.Da)
                                    throw new eA(63);
                                n.j.Da(n, t, e)
                            }
                            function eN(t, n, r) {
                                if ("" === t)
                                    throw new eA(44);
                                if ("string" == typeof n) {
                                    var i = {
                                        r: 0,
                                        "r+": 2,
                                        w: 577,
                                        "w+": 578,
                                        a: 1089,
                                        "a+": 1090
                                    }[n];
                                    if (void 0 === i)
                                        throw Error(`Unknown file open mode: ${n}`);
                                    n = i
                                }
                                if (r = 64 & n ? (void 0 === r ? 438 : r) & 4095 | 32768 : 0,
                                    "object" == typeof t)
                                    var a = t;
                                else {
                                    t = ee(t);
                                    try {
                                        a = eR(t, {
                                            gb: !(131072 & n)
                                        }).node
                                    } catch (e) { }
                                }
                                if (i = !1,
                                    64 & n)
                                    if (a) {
                                        if (128 & n)
                                            throw new eA(20)
                                    } else
                                        a = eD(t, r, 0),
                                            i = !0;
                                if (!a)
                                    throw new eA(44);
                                if (8192 == (61440 & a.mode) && (n &= -513),
                                    65536 & n && 16384 != (61440 & a.mode))
                                    throw new eA(54);
                                if (!i && (r = a ? 40960 == (61440 & a.mode) ? 32 : 16384 == (61440 & a.mode) && ("r" !== eT(n) || 512 & n) ? 31 : eL(a, eT(n)) : 44))
                                    throw new eA(r);
                                if (512 & n && !i) {
                                    if (!(r = "string" == typeof (r = a) ? eR(r, {
                                        gb: !0
                                    }).node : r).j.R)
                                        throw new eA(63);
                                    if (16384 == (61440 & r.mode))
                                        throw new eA(31);
                                    if (32768 != (61440 & r.mode))
                                        throw new eA(28);
                                    if (i = eL(r, "w"))
                                        throw new eA(i);
                                    r.j.R(r, {
                                        size: 0,
                                        timestamp: Date.now()
                                    })
                                }
                                return n &= -131713,
                                    (a = ej({
                                        node: a,
                                        path: eE(a),
                                        flags: n,
                                        seekable: !0,
                                        position: 0,
                                        m: a.m,
                                        tc: [],
                                        error: !1
                                    })).m.open && a.m.open(a),
                                    !e.logReadFiles || 1 & n || t in (eX ||= {}) || (eX[t] = 1),
                                    a
                            }
                            function ez(e, t, n) {
                                if (null === e.X)
                                    throw new eA(8);
                                if (!e.seekable || !e.m.ba)
                                    throw new eA(70);
                                if (0 != n && 1 != n && 2 != n)
                                    throw new eA(28);
                                e.position = e.m.ba(e, t, n),
                                    e.tc = []
                            }
                            function e$(e, t, n) {
                                e = ee("/dev/" + e);
                                var r, i = (r = 0,
                                    t && (r |= 365),
                                    n && (r |= 146),
                                    r);
                                eY ||= 64;
                                var a = eY++ << 8;
                                eb[a] = {
                                    m: {
                                        open(e) {
                                            e.seekable = !1
                                        },
                                        close() {
                                            n?.buffer?.length && n(10)
                                        },
                                        read(e, n, r, i) {
                                            for (var a = 0, o = 0; o < i; o++) {
                                                try {
                                                    var s = t()
                                                } catch (e) {
                                                    throw new eA(29)
                                                }
                                                if (void 0 === s && 0 === a)
                                                    throw new eA(6);
                                                if (null == s)
                                                    break;
                                                a++,
                                                    n[r + o] = s
                                            }
                                            return a && (e.node.timestamp = Date.now()),
                                                a
                                        },
                                        write(e, t, r, i) {
                                            for (var a = 0; a < i; a++)
                                                try {
                                                    n(t[r + a])
                                                } catch (e) {
                                                    throw new eA(29)
                                                }
                                            return i && (e.node.timestamp = Date.now()),
                                                a
                                        }
                                    }
                                },
                                    eW(e, i, a)
                            }
                            var eH, eY, eX, eG, eq, eJ, eK, eZ, eQ = {}, e0 = void 0, e1 = (e, t) => Object.defineProperty(t, "name", {
                                value: e
                            }), e2 = [], e4 = [], e3 = e => {
                                if (!e)
                                    throw new eG("Cannot use deleted val. handle = " + e);
                                return e4[e]
                            }
                                , e6 = e => {
                                    switch (e) {
                                        case void 0:
                                            return 2;
                                        case null:
                                            return 4;
                                        case !0:
                                            return 6;
                                        case !1:
                                            return 8;
                                        default:
                                            let t = e2.pop() || e4.length;
                                            return e4[t] = e,
                                                e4[t + 1] = 1,
                                                t
                                    }
                                }
                                , e5 = e => {
                                    var t = Error
                                        , n = e1(e, function (t) {
                                            this.name = e,
                                                this.message = t,
                                                void 0 !== (t = Error(t).stack) && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
                                        });
                                    return n.prototype = Object.create(t.prototype),
                                        n.prototype.constructor = n,
                                        n.prototype.toString = function () {
                                            return void 0 === this.message ? this.name : `${this.name}: ${this.message}`
                                        }
                                        ,
                                        n
                                }
                                , e8 = e => {
                                    for (var t = ""; I[e];)
                                        t += eJ[I[e++]];
                                    return t
                                }
                                , e7 = [], e9 = () => {
                                    for (; e7.length;) {
                                        var e = e7.pop();
                                        e.g.fa = !1,
                                            e.delete()
                                    }
                                }
                                , te = {}, tt = (e, t) => {
                                    if (void 0 === t)
                                        throw new eG("ptr should not be undefined");
                                    for (; e.C;)
                                        t = e.na(t),
                                            e = e.C;
                                    return t
                                }
                                , tn = {}, tr = e => {
                                    var t = e8(e = no(e));
                                    return ni(e),
                                        t
                                }
                                , ti = (e, t) => {
                                    var n = tn[e];
                                    if (void 0 === n)
                                        throw e = `${t} has unknown type ${tr(e)}`,
                                        new eG(e);
                                    return n
                                }
                                , ta = () => { }
                                , to = !1, ts = (e, t, n) => t === n ? e : void 0 === n.C || null === (e = ts(e, t, n.C)) ? null : n.Mb(e), tu = {}, tl = (e, t) => {
                                    if (!t.u || !t.o)
                                        throw new eZ("makeClassHandle requires ptr and ptrType");
                                    if (!!t.K != !!t.F)
                                        throw new eZ("Both smartPtrType and smartPtr must be specified");
                                    return t.count = {
                                        value: 1
                                    },
                                        tc(Object.create(e, {
                                            g: {
                                                value: t,
                                                writable: !0
                                            }
                                        }))
                                }
                                , tc = e => "u" < typeof FinalizationRegistry ? (tc = e => e,
                                    e) : (to = new FinalizationRegistry(e => {
                                        e = e.g,
                                            --e.count.value,
                                            0 === e.count.value && (e.F ? e.K.P(e.F) : e.u.i.P(e.o))
                                    }
                                    ),
                                        tc = e => {
                                            var t = e.g;
                                            return t.F && to.register(e, {
                                                g: t
                                            }, e),
                                                e
                                        }
                                        ,
                                        ta = e => {
                                            to.unregister(e)
                                        }
                                        ,
                                        tc(e)), th = {}, tf = e => {
                                            for (; e.length;) {
                                                var t = e.pop();
                                                e.pop()(t)
                                            }
                                        }
                                ;
                            function td(e) {
                                return this.fromWireType(L[e >> 2])
                            }
                            var tp = {}
                                , tv = {}
                                , tm = (e, t, n) => {
                                    function r(t) {
                                        if ((t = n(t)).length !== e.length)
                                            throw new eZ("Mismatched type converter count");
                                        for (var r = 0; r < e.length; ++r)
                                            tb(e[r], t[r])
                                    }
                                    e.forEach(function (e) {
                                        tv[e] = t
                                    });
                                    var i = Array(t.length)
                                        , a = []
                                        , o = 0;
                                    t.forEach((e, t) => {
                                        tn.hasOwnProperty(e) ? i[t] = tn[e] : (a.push(e),
                                            tp.hasOwnProperty(e) || (tp[e] = []),
                                            tp[e].push(() => {
                                                i[t] = tn[e],
                                                    ++o === a.length && r(i)
                                            }
                                            ))
                                    }
                                    ),
                                        0 === a.length && r(i)
                                }
                                ;
                            function tb(e, t, n = {}) {
                                if (!("argPackAdvance" in t))
                                    throw TypeError("registerType registeredInstance requires argPackAdvance");
                                return function (e, t, n = {}) {
                                    var r = t.name;
                                    if (!e)
                                        throw new eG(`type "${r}" must have a positive integer typeid pointer`);
                                    if (tn.hasOwnProperty(e)) {
                                        if (n.Wb)
                                            return;
                                        throw new eG(`Cannot register type '${r}' twice`)
                                    }
                                    tn[e] = t,
                                        delete tv[e],
                                        tp.hasOwnProperty(e) && (t = tp[e],
                                            delete tp[e],
                                            t.forEach(e => e()))
                                }(e, t, n)
                            }
                            var tg = e => {
                                throw new eG(e.g.u.i.name + " instance already deleted")
                            }
                                ;
                            function ty() { }
                            var tw = (e, t, n) => {
                                if (void 0 === e[t].A) {
                                    var r = e[t];
                                    e[t] = function (...r) {
                                        if (!e[t].A.hasOwnProperty(r.length))
                                            throw new eG(`Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].A})!`);
                                        return e[t].A[r.length].apply(this, r)
                                    }
                                        ,
                                        e[t].A = [],
                                        e[t].A[r.ea] = r
                                }
                            }
                                , t_ = (t, n, r) => {
                                    if (e.hasOwnProperty(t)) {
                                        if (void 0 === r || void 0 !== e[t].A && void 0 !== e[t].A[r])
                                            throw new eG(`Cannot register public name '${t}' twice`);
                                        if (tw(e, t, t),
                                            e.hasOwnProperty(r))
                                            throw new eG(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`);
                                        e[t].A[r] = n
                                    } else
                                        e[t] = n,
                                            void 0 !== r && (e[t].Mc = r)
                                }
                                ;
                            function tA(e, t, n, r, i, a, o, s) {
                                this.name = e,
                                    this.constructor = t,
                                    this.N = n,
                                    this.P = r,
                                    this.C = i,
                                    this.Rb = a,
                                    this.na = o,
                                    this.Mb = s,
                                    this.qb = []
                            }
                            var tC = (e, t, n) => {
                                for (; t !== n;) {
                                    if (!t.na)
                                        throw new eG(`Expected null or instance of ${n.name}, got an instance of ${t.name}`);
                                    e = t.na(e),
                                        t = t.C
                                }
                                return e
                            }
                                ;
                            function tM(e, t) {
                                if (null === t) {
                                    if (this.Ma)
                                        throw new eG(`null is not a valid ${this.name}`);
                                    return 0
                                }
                                if (!t.g)
                                    throw new eG(`Cannot pass "${tN(t)}" as a ${this.name}`);
                                if (!t.g.o)
                                    throw new eG(`Cannot pass deleted object as a pointer of type ${this.name}`);
                                return tC(t.g.o, t.g.u.i, this.i)
                            }
                            function tP(e, t) {
                                if (null === t) {
                                    if (this.Ma)
                                        throw new eG(`null is not a valid ${this.name}`);
                                    if (this.ta) {
                                        var n = this.Oa();
                                        return null !== e && e.push(this.P, n),
                                            n
                                    }
                                    return 0
                                }
                                if (!t || !t.g)
                                    throw new eG(`Cannot pass "${tN(t)}" as a ${this.name}`);
                                if (!t.g.o)
                                    throw new eG(`Cannot pass deleted object as a pointer of type ${this.name}`);
                                if (!this.sa && t.g.u.sa)
                                    throw new eG(`Cannot convert argument of type ${t.g.K ? t.g.K.name : t.g.u.name} to parameter type ${this.name}`);
                                if (n = tC(t.g.o, t.g.u.i, this.i),
                                    this.ta) {
                                    if (void 0 === t.g.F)
                                        throw new eG("Passing raw pointer to smart pointer is illegal");
                                    switch (this.nc) {
                                        case 0:
                                            if (t.g.K === this)
                                                n = t.g.F;
                                            else
                                                throw new eG(`Cannot convert argument of type ${t.g.K ? t.g.K.name : t.g.u.name} to parameter type ${this.name}`);
                                            break;
                                        case 1:
                                            n = t.g.F;
                                            break;
                                        case 2:
                                            if (t.g.K === this)
                                                n = t.g.F;
                                            else {
                                                var r = t.clone();
                                                n = this.jc(n, e6(() => r.delete())),
                                                    null !== e && e.push(this.P, n)
                                            }
                                            break;
                                        default:
                                            throw new eG("Unsupporting sharing policy")
                                    }
                                }
                                return n
                            }
                            function tR(e, t) {
                                if (null === t) {
                                    if (this.Ma)
                                        throw new eG(`null is not a valid ${this.name}`);
                                    return 0
                                }
                                if (!t.g)
                                    throw new eG(`Cannot pass "${tN(t)}" as a ${this.name}`);
                                if (!t.g.o)
                                    throw new eG(`Cannot pass deleted object as a pointer of type ${this.name}`);
                                if (t.g.u.sa)
                                    throw new eG(`Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`);
                                return tC(t.g.o, t.g.u.i, this.i)
                            }
                            function tE(e, t, n, r, i, a, o, s, u, l, c) {
                                this.name = e,
                                    this.i = t,
                                    this.Ma = n,
                                    this.sa = r,
                                    this.ta = i,
                                    this.ic = a,
                                    this.nc = o,
                                    this.rb = s,
                                    this.Oa = u,
                                    this.jc = l,
                                    this.P = c,
                                    i || void 0 !== t.C ? this.toWireType = tP : (this.toWireType = r ? tM : tR,
                                        this.M = null)
                            }
                            var tI, tk, tF = (t, n, r) => {
                                if (!e.hasOwnProperty(t))
                                    throw new eZ("Replacing nonexistent public symbol");
                                void 0 !== e[t].A && void 0 !== r ? e[t].A[r] = n : (e[t] = n,
                                    e[t].ea = r)
                            }
                                , tT = [], tL = e => {
                                    var t = tT[e];
                                    return t || (e >= tT.length && (tT.length = e + 1),
                                        tT[e] = t = tI.get(e)),
                                        t
                                }
                                , tO = (t, n) => {
                                    let r;
                                    var i = (t = e8(t)).includes("j") ? (r = t,
                                        (...t) => ((t, n, r = []) => t.includes("j") ? (0,
                                            e["dynCall_" + (t = t.replace(/p/g, "i"))])(n, ...r) : tL(n)(...r))(r, n, t)) : tL(n);
                                    if ("function" != typeof i)
                                        throw new eG(`unknown function pointer with signature ${t}: ${n}`);
                                    return i
                                }
                                , tx = (e, t) => {
                                    var n = []
                                        , r = {};
                                    throw t.forEach(function e(t) {
                                        r[t] || tn[t] || (tv[t] ? tv[t].forEach(e) : (n.push(t),
                                            r[t] = !0))
                                    }),
                                    new tk(`${e}: ` + n.map(tr).join([", "]))
                                }
                                ;
                            function tj(e, t, n, r, i) {
                                var a = t.length;
                                if (2 > a)
                                    throw new eG("argTypes array size mismatch! Must at least get return value and 'this' types!");
                                var o = null !== t[1] && null !== n
                                    , s = function (e) {
                                        for (var t = 1; t < e.length; ++t)
                                            if (null !== e[t] && void 0 === e[t].M)
                                                return !0;
                                        return !1
                                    }(t)
                                    , u = "void" !== t[0].name
                                    , l = a - 2
                                    , c = Array(l)
                                    , h = []
                                    , f = [];
                                return e1(e, function (...n) {
                                    if (n.length !== l)
                                        throw new eG(`function ${e} called with ${n.length} arguments, expected ${l}`);
                                    if (f.length = 0,
                                        h.length = o ? 2 : 1,
                                        h[0] = i,
                                        o) {
                                        var a = t[1].toWireType(f, this);
                                        h[1] = a
                                    }
                                    for (var d = 0; d < l; ++d)
                                        c[d] = t[d + 2].toWireType(f, n[d]),
                                            h.push(c[d]);
                                    if (n = r(...h),
                                        s)
                                        tf(f);
                                    else
                                        for (d = o ? 1 : 2; d < t.length; d++) {
                                            var p = 1 === d ? a : c[d - 2];
                                            null !== t[d].M && t[d].M(p)
                                        }
                                    return u ? t[0].fromWireType(n) : void 0
                                })
                            }
                            var tS, tV = (e, t) => {
                                for (var n = [], r = 0; r < e; r++)
                                    n.push(L[t + 4 * r >> 2]);
                                return n
                            }
                                , tD = e => {
                                    let t = (e = e.trim()).indexOf("(");
                                    return -1 !== t ? e.substr(0, t) : e
                                }
                                , tB = (e, t, n) => {
                                    if (!(e instanceof Object))
                                        throw new eG(`${n} with invalid "this": ${e}`);
                                    if (!(e instanceof t.i.constructor))
                                        throw new eG(`${n} incompatible with "this" of type ${e.constructor.name}`);
                                    if (!e.g.o)
                                        throw new eG(`cannot call emscripten binding method ${n} on deleted object`);
                                    return tC(e.g.o, e.g.u.i, t.i)
                                }
                                , tW = e => {
                                    9 < e && 0 == --e4[e + 1] && (e4[e] = void 0,
                                        e2.push(e))
                                }
                                , tU = {
                                    name: "emscripten::val",
                                    fromWireType: e => {
                                        var t = e3(e);
                                        return tW(e),
                                            t
                                    }
                                    ,
                                    toWireType: (e, t) => e6(t),
                                    argPackAdvance: 8,
                                    readValueFromPointer: td,
                                    M: null
                                }, tN = e => {
                                    if (null === e)
                                        return "null";
                                    var t = typeof e;
                                    return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
                                }
                                , tz = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, t$ = (e, t) => {
                                    for (var n = e >> 1, r = n + t / 2; !(n >= r) && F[n];)
                                        ++n;
                                    if (32 < (n <<= 1) - e && tz)
                                        return tz.decode(I.subarray(e, n));
                                    for (r = 0,
                                        n = ""; !(r >= t / 2); ++r) {
                                        var i = k[e + 2 * r >> 1];
                                        if (0 == i)
                                            break;
                                        n += String.fromCharCode(i)
                                    }
                                    return n
                                }
                                , tH = (e, t, n) => {
                                    if (2 > (n ??= 0x7fffffff))
                                        return 0;
                                    n -= 2;
                                    var r = t;
                                    n = n < 2 * e.length ? n / 2 : e.length;
                                    for (var i = 0; i < n; ++i)
                                        k[t >> 1] = e.charCodeAt(i),
                                            t += 2;
                                    return k[t >> 1] = 0,
                                        t - r
                                }
                                , tY = e => 2 * e.length, tX = (e, t) => {
                                    for (var n = 0, r = ""; !(n >= t / 4);) {
                                        var i = T[e + 4 * n >> 2];
                                        if (0 == i)
                                            break;
                                        ++n,
                                            65536 <= i ? (i -= 65536,
                                                r += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : r += String.fromCharCode(i)
                                    }
                                    return r
                                }
                                , tG = (e, t, n) => {
                                    if (4 > (n ??= 0x7fffffff))
                                        return 0;
                                    var r = t;
                                    n = r + n - 4;
                                    for (var i = 0; i < e.length; ++i) {
                                        var a = e.charCodeAt(i);
                                        if (55296 <= a && 57343 >= a && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++i)),
                                            T[t >> 2] = a,
                                            (t += 4) + 4 > n)
                                            break
                                    }
                                    return T[t >> 2] = 0,
                                        t - r
                                }
                                , tq = e => {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var r = e.charCodeAt(n);
                                        55296 <= r && 57343 >= r && ++n,
                                            t += 4
                                    }
                                    return t
                                }
                                , tJ = (e, t, n) => {
                                    var r = [];
                                    return e = e.toWireType(r, n),
                                        r.length && (L[t >> 2] = e6(r)),
                                        e
                                }
                                , tK = [], tZ = {}, tQ = e => {
                                    var t = tZ[e];
                                    return void 0 === t ? e8(e) : t
                                }
                                , t0 = Reflect.construct, t1 = e => 0 == e % 4 && (0 != e % 100 || 0 == e % 400), t2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], t4 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], t3 = [], t6 = {}, t5 = () => {
                                    if (!tS) {
                                        var e, t = {
                                            USER: "web_user",
                                            LOGNAME: "web_user",
                                            PATH: "/",
                                            PWD: "/",
                                            HOME: "/home/web_user",
                                            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                                            _: _ || "./this.program"
                                        };
                                        for (e in t6)
                                            void 0 === t6[e] ? delete t[e] : t[e] = t6[e];
                                        var n = [];
                                        for (e in t)
                                            n.push(`${e}=${t[e]}`);
                                        tS = n
                                    }
                                    return tS
                                }
                                , t8 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], t7 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], t9 = (e, t, n, r) => {
                                    function i(e, t, n) {
                                        for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t;)
                                            e = n[0] + e;
                                        return e
                                    }
                                    function a(e, t) {
                                        return i(e, t, "0")
                                    }
                                    function o(e, t) {
                                        var n;
                                        function r(e) {
                                            return 0 > e ? -1 : +(0 < e)
                                        }
                                        return 0 === (n = r(e.getFullYear() - t.getFullYear())) && 0 === (n = r(e.getMonth() - t.getMonth())) && (n = r(e.getDate() - t.getDate())),
                                            n
                                    }
                                    function s(e) {
                                        switch (e.getDay()) {
                                            case 0:
                                                return new Date(e.getFullYear() - 1, 11, 29);
                                            case 1:
                                                return e;
                                            case 2:
                                                return new Date(e.getFullYear(), 0, 3);
                                            case 3:
                                                return new Date(e.getFullYear(), 0, 2);
                                            case 4:
                                                return new Date(e.getFullYear(), 0, 1);
                                            case 5:
                                                return new Date(e.getFullYear() - 1, 11, 31);
                                            case 6:
                                                return new Date(e.getFullYear() - 1, 11, 30)
                                        }
                                    }
                                    function u(e) {
                                        var t = e.ca;
                                        for (e = new Date(new Date(e.da + 1900, 0, 1).getTime()); 0 < t;) {
                                            var n = e.getMonth()
                                                , r = (t1(e.getFullYear()) ? t8 : t7)[n];
                                            if (t > r - e.getDate())
                                                t -= r - e.getDate() + 1,
                                                    e.setDate(1),
                                                    11 > n ? e.setMonth(n + 1) : (e.setMonth(0),
                                                        e.setFullYear(e.getFullYear() + 1));
                                            else {
                                                e.setDate(e.getDate() + t);
                                                break
                                            }
                                        }
                                        return n = new Date(e.getFullYear() + 1, 0, 4),
                                            t = s(new Date(e.getFullYear(), 0, 4)),
                                            n = s(n),
                                            0 >= o(t, e) ? 0 >= o(n, e) ? e.getFullYear() + 1 : e.getFullYear() : e.getFullYear() - 1
                                    }
                                    var l = L[r + 40 >> 2];
                                    for (var c in r = {
                                        qc: T[r >> 2],
                                        pc: T[r + 4 >> 2],
                                        Ea: T[r + 8 >> 2],
                                        Ra: T[r + 12 >> 2],
                                        Fa: T[r + 16 >> 2],
                                        da: T[r + 20 >> 2],
                                        S: T[r + 24 >> 2],
                                        ca: T[r + 28 >> 2],
                                        Oc: T[r + 32 >> 2],
                                        oc: T[r + 36 >> 2],
                                        rc: l && l ? eo(I, l) : ""
                                    },
                                        n = n ? eo(I, n) : "",
                                        l = {
                                            "%c": "%a %b %d %H:%M:%S %Y",
                                            "%D": "%m/%d/%y",
                                            "%F": "%Y-%m-%d",
                                            "%h": "%b",
                                            "%r": "%I:%M:%S %p",
                                            "%R": "%H:%M",
                                            "%T": "%H:%M:%S",
                                            "%x": "%m/%d/%y",
                                            "%X": "%H:%M:%S",
                                            "%Ec": "%c",
                                            "%EC": "%C",
                                            "%Ex": "%m/%d/%y",
                                            "%EX": "%H:%M:%S",
                                            "%Ey": "%y",
                                            "%EY": "%Y",
                                            "%Od": "%d",
                                            "%Oe": "%e",
                                            "%OH": "%H",
                                            "%OI": "%I",
                                            "%Om": "%m",
                                            "%OM": "%M",
                                            "%OS": "%S",
                                            "%Ou": "%u",
                                            "%OU": "%U",
                                            "%OV": "%V",
                                            "%Ow": "%w",
                                            "%OW": "%W",
                                            "%Oy": "%y"
                                        })
                                        n = n.replace(RegExp(c, "g"), l[c]);
                                    var h = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
                                        , f = "January February March April May June July August September October November December".split(" ");
                                    for (c in l = {
                                        "%a": e => h[e.S].substring(0, 3),
                                        "%A": e => h[e.S],
                                        "%b": e => f[e.Fa].substring(0, 3),
                                        "%B": e => f[e.Fa],
                                        "%C": e => a((e.da + 1900) / 100 | 0, 2),
                                        "%d": e => a(e.Ra, 2),
                                        "%e": e => i(e.Ra, 2, " "),
                                        "%g": e => u(e).toString().substring(2),
                                        "%G": u,
                                        "%H": e => a(e.Ea, 2),
                                        "%I": e => (0 == (e = e.Ea) ? e = 12 : 12 < e && (e -= 12),
                                            a(e, 2)),
                                        "%j": e => {
                                            for (var t = 0, n = 0; n <= e.Fa - 1; t += (t1(e.da + 1900) ? t8 : t7)[n++])
                                                ;
                                            return a(e.Ra + t, 3)
                                        }
                                        ,
                                        "%m": e => a(e.Fa + 1, 2),
                                        "%M": e => a(e.pc, 2),
                                        "%n": () => "\n",
                                        "%p": e => 0 <= e.Ea && 12 > e.Ea ? "AM" : "PM",
                                        "%S": e => a(e.qc, 2),
                                        "%t": () => "	",
                                        "%u": e => e.S || 7,
                                        "%U": e => a(Math.floor((e.ca + 7 - e.S) / 7), 2),
                                        "%V": e => {
                                            var t = Math.floor((e.ca + 7 - (e.S + 6) % 7) / 7);
                                            if (2 >= (e.S + 371 - e.ca - 2) % 7 && t++,
                                                t)
                                                53 == t && (4 == (n = (e.S + 371 - e.ca) % 7) || 3 == n && t1(e.da) || (t = 1));
                                            else {
                                                t = 52;
                                                var n = (e.S + 7 - e.ca - 1) % 7;
                                                (4 == n || 5 == n && t1(e.da % 400 - 1)) && t++
                                            }
                                            return a(t, 2)
                                        }
                                        ,
                                        "%w": e => e.S,
                                        "%W": e => a(Math.floor((e.ca + 7 - (e.S + 6) % 7) / 7), 2),
                                        "%y": e => (e.da + 1900).toString().substring(2),
                                        "%Y": e => e.da + 1900,
                                        "%z": e => {
                                            var t = 0 <= (e = e.oc);
                                            return (t ? "+" : "-") + String("0000" + ((e = Math.abs(e) / 60) / 60 * 100 + e % 60)).slice(-4)
                                        }
                                        ,
                                        "%Z": e => e.rc,
                                        "%%": () => "%"
                                    },
                                        n = n.replace(/%%/g, "\0\0"),
                                        l)
                                        n.includes(c) && (n = n.replace(RegExp(c, "g"), l[c](r)));
                                    return (c = ec(n = n.replace(/\0\0/g, "%"), !1)).length > t ? 0 : (E.set(c, e),
                                        c.length - 1)
                                }
                                ;
                            [44].forEach(e => {
                                eC[e] = new eA(e),
                                    eC[e].stack = "<generic error, no stack>"
                            }
                            ),
                                ew = Array(4096),
                                eV(ev, "/"),
                                eB("/tmp"),
                                eB("/home"),
                                eB("/home/web_user"),
                                eB("/dev"),
                                eb[259] = {
                                    m: {
                                        read: () => 0,
                                        write: (e, t, n, r) => r
                                    }
                                },
                                eW("/dev/null", 259),
                                ef(1280, {
                                    ib() {
                                        e: {
                                            if (!es.length) {
                                                var e = null;
                                                if ("u" > typeof window && "function" == typeof window.prompt && null !== (e = window.prompt("Input: ")) && (e += "\n"),
                                                    !e) {
                                                    e = null;
                                                    break e
                                                }
                                                es = ec(e, !0)
                                            }
                                            e = es.shift()
                                        }
                                        return e
                                    },
                                    Na(e, t) {
                                        null === t || 10 === t ? (C(eo(e.H, 0)),
                                            e.H = []) : 0 != t && e.H.push(t)
                                    },
                                    pa(e) {
                                        e.H && 0 < e.H.length && (C(eo(e.H, 0)),
                                            e.H = [])
                                    },
                                    Yb: () => ({
                                        Ac: 25856,
                                        Cc: 5,
                                        zc: 191,
                                        Bc: 35387,
                                        yc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                                    }),
                                    Zb: () => 0,
                                    $b: () => [24, 80]
                                }),
                                ef(1536, {
                                    Na(e, t) {
                                        null === t || 10 === t ? (M(eo(e.H, 0)),
                                            e.H = []) : 0 != t && e.H.push(t)
                                    },
                                    pa(e) {
                                        e.H && 0 < e.H.length && (M(eo(e.H, 0)),
                                            e.H = [])
                                    }
                                }),
                                eW("/dev/tty", 1280),
                                eW("/dev/tty1", 1536),
                                t = new Uint8Array(1024),
                                n = 0,
                                e$("random", i = () => (0 === n && (n = er(t).byteLength),
                                    t[--n])),
                                e$("urandom", i),
                                eB("/dev/shm"),
                                eB("/dev/shm/tmp"),
                                eB("/proc"),
                                a = eB("/proc/self"),
                                eB("/proc/self/fd"),
                                eV({
                                    V() {
                                        var e = eF(a, "fd", 16895, 73);
                                        return e.j = {
                                            ka(e, t) {
                                                var n = ex(+t);
                                                return (e = {
                                                    parent: null,
                                                    V: {
                                                        mb: "fake"
                                                    },
                                                    j: {
                                                        ma: () => n.path
                                                    }
                                                }).parent = e
                                            }
                                        },
                                            e
                                    }
                                }, "/proc/self/fd"),
                                eG = e.BindingError = class extends Error {
                                    constructor(e) {
                                        super(e),
                                            this.name = "BindingError"
                                    }
                                }
                                ,
                                e4.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
                                e.count_emval_handles = () => e4.length / 2 - 5 - e2.length,
                                eq = e.PureVirtualError = e5("PureVirtualError");
                            for (var ne = Array(256), nt = 0; 256 > nt; ++nt)
                                ne[nt] = String.fromCharCode(nt);
                            eJ = ne,
                                e.getInheritedInstanceCount = () => Object.keys(te).length,
                                e.getLiveInheritedInstances = () => {
                                    var e, t = [];
                                    for (e in te)
                                        te.hasOwnProperty(e) && t.push(te[e]);
                                    return t
                                }
                                ,
                                e.flushPendingDeletes = e9,
                                e.setDelayFunction = e => {
                                    eK = e,
                                        e7.length && eK && eK(e9)
                                }
                                ,
                                eZ = e.InternalError = class extends Error {
                                    constructor(e) {
                                        super(e),
                                            this.name = "InternalError"
                                    }
                                }
                                ,
                                Object.assign(ty.prototype, {
                                    isAliasOf: function (e) {
                                        if (!(this instanceof ty && e instanceof ty))
                                            return !1;
                                        var t = this.g.u.i
                                            , n = this.g.o;
                                        e.g = e.g;
                                        var r = e.g.u.i;
                                        for (e = e.g.o; t.C;)
                                            n = t.na(n),
                                                t = t.C;
                                        for (; r.C;)
                                            e = r.na(e),
                                                r = r.C;
                                        return t === r && n === e
                                    },
                                    clone: function () {
                                        if (this.g.o || tg(this),
                                            this.g.ia)
                                            return this.g.count.value += 1,
                                                this;
                                        var e = tc
                                            , t = Object
                                            , n = t.create
                                            , r = Object.getPrototypeOf(this)
                                            , i = this.g;
                                        return e = e(n.call(t, r, {
                                            g: {
                                                value: {
                                                    count: i.count,
                                                    fa: i.fa,
                                                    ia: i.ia,
                                                    o: i.o,
                                                    u: i.u,
                                                    F: i.F,
                                                    K: i.K
                                                }
                                            }
                                        })),
                                            e.g.count.value += 1,
                                            e.g.fa = !1,
                                            e
                                    },
                                    delete() {
                                        if (this.g.o || tg(this),
                                            this.g.fa && !this.g.ia)
                                            throw new eG("Object already scheduled for deletion");
                                        ta(this);
                                        var e = this.g;
                                        --e.count.value,
                                            0 === e.count.value && (e.F ? e.K.P(e.F) : e.u.i.P(e.o)),
                                            this.g.ia || (this.g.F = void 0,
                                                this.g.o = void 0)
                                    },
                                    isDeleted: function () {
                                        return !this.g.o
                                    },
                                    deleteLater: function () {
                                        if (this.g.o || tg(this),
                                            this.g.fa && !this.g.ia)
                                            throw new eG("Object already scheduled for deletion");
                                        return e7.push(this),
                                            1 === e7.length && eK && eK(e9),
                                            this.g.fa = !0,
                                            this
                                    }
                                }),
                                Object.assign(tE.prototype, {
                                    Sb(e) {
                                        return this.rb && (e = this.rb(e)),
                                            e
                                    },
                                    bb(e) {
                                        this.P?.(e)
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: td,
                                    fromWireType: function (e) {
                                        function t() {
                                            return this.ta ? tl(this.i.N, {
                                                u: this.ic,
                                                o: n,
                                                K: this,
                                                F: e
                                            }) : tl(this.i.N, {
                                                u: this,
                                                o: e
                                            })
                                        }
                                        var n = this.Sb(e);
                                        if (!n)
                                            return this.bb(e),
                                                null;
                                        var r = te[tt(this.i, n)];
                                        if (void 0 !== r)
                                            return 0 === r.g.count.value ? (r.g.o = n,
                                                r.g.F = e,
                                                r.clone()) : (r = r.clone(),
                                                    this.bb(e),
                                                    r);
                                        if (!(r = tu[r = this.i.Rb(n)]))
                                            return t.call(this);
                                        r = this.sa ? r.Ib : r.pointerType;
                                        var i = ts(n, this.i, r.i);
                                        return null === i ? t.call(this) : this.ta ? tl(r.i.N, {
                                            u: r,
                                            o: i,
                                            K: this,
                                            F: e
                                        }) : tl(r.i.N, {
                                            u: r,
                                            o: i
                                        })
                                    }
                                }),
                                tk = e.UnboundTypeError = e5("UnboundTypeError");
                            var nn = {
                                __syscall_fcntl64: function (e, t, n) {
                                    e0 = n;
                                    try {
                                        var r = ex(e);
                                        switch (t) {
                                            case 0:
                                                var i = Z();
                                                if (0 > i)
                                                    break;
                                                for (; eg[i];)
                                                    i++;
                                                return function (e, t = -1) {
                                                    return e = ej(e, t),
                                                        e.m?.Fc?.(e),
                                                        e
                                                }(r, i).X;
                                            case 1:
                                            case 2:
                                            case 13:
                                            case 14:
                                                return 0;
                                            case 3:
                                                return r.flags;
                                            case 4:
                                                return i = Z(),
                                                    r.flags |= i,
                                                    0;
                                            case 12:
                                                return k[(i = Z()) + 0 >> 1] = 2,
                                                    0
                                        }
                                        return -28
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name)
                                            throw e;
                                        return -e.aa
                                    }
                                },
                                __syscall_ioctl: function (e, t, n) {
                                    e0 = n;
                                    try {
                                        var r = ex(e);
                                        switch (t) {
                                            case 21509:
                                            case 21510:
                                            case 21511:
                                            case 21512:
                                            case 21524:
                                            case 21515:
                                                return r.s ? 0 : -59;
                                            case 21505:
                                                if (!r.s)
                                                    return -59;
                                                if (r.s.W.Yb) {
                                                    e = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                                    var i = Z();
                                                    T[i >> 2] = 25856,
                                                        T[i + 4 >> 2] = 5,
                                                        T[i + 8 >> 2] = 191,
                                                        T[i + 12 >> 2] = 35387;
                                                    for (var a = 0; 32 > a; a++)
                                                        E[i + a + 17] = e[a] || 0
                                                }
                                                return 0;
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                if (!r.s)
                                                    return -59;
                                                if (r.s.W.Zb)
                                                    for (i = Z(),
                                                        e = [],
                                                        a = 0; 32 > a; a++)
                                                        e.push(E[i + a + 17]);
                                                return 0;
                                            case 21519:
                                                if (!r.s)
                                                    return -59;
                                                return T[(i = Z()) >> 2] = 0;
                                            case 21520:
                                                return r.s ? -28 : -59;
                                            case 21531:
                                                if (i = Z(),
                                                    !r.m.Xb)
                                                    throw new eA(59);
                                                return r.m.Xb(r, t, i);
                                            case 21523:
                                                if (!r.s)
                                                    return -59;
                                                return r.s.W.$b && (a = [24, 80],
                                                    k[(i = Z()) >> 1] = a[0],
                                                    k[i + 2 >> 1] = a[1]),
                                                    0;
                                            default:
                                                return -28
                                        }
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name)
                                            throw e;
                                        return -e.aa
                                    }
                                },
                                __syscall_openat: function (e, t, n, r) {
                                    e0 = r;
                                    try {
                                        var i = t = t ? eo(I, t) : "";
                                        if ("/" === i.charAt(0))
                                            t = i;
                                        else {
                                            var a = -100 === e ? "/" : ex(e).path;
                                            if (0 == i.length)
                                                throw new eA(44);
                                            t = ee(a + "/" + i)
                                        }
                                        var o = r ? Z() : 0;
                                        return eN(t, n, o).X
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name)
                                            throw e;
                                        return -e.aa
                                    }
                                },
                                _abort_js: () => {
                                    z("")
                                }
                                ,
                                _embind_create_inheriting_constructor: (e, t, n) => {
                                    e = e8(e),
                                        t = ti(t, "wrapper"),
                                        n = e3(n);
                                    var r = t.i
                                        , i = r.N
                                        , a = r.C.N
                                        , o = r.C.constructor;
                                    return e = e1(e, function (...e) {
                                        r.C.qb.forEach((function (e) {
                                            if (this[e] === a[e])
                                                throw new eq(`Pure virtual function ${e} must be implemented in JavaScript`)
                                        }
                                        ).bind(this)),
                                            Object.defineProperty(this, "__parent", {
                                                value: i
                                            }),
                                            this.__construct(...e)
                                    }),
                                        i.__construct = function (...e) {
                                            if (this === i)
                                                throw new eG("Pass correct 'this' to __construct");
                                            e = o.implement(this, ...e),
                                                ta(e);
                                            var t = e.g;
                                            if (e.notifyOnDestruction(),
                                                t.ia = !0,
                                                Object.defineProperties(this, {
                                                    g: {
                                                        value: t
                                                    }
                                                }),
                                                tc(this),
                                                e = tt(r, e = t.o),
                                                te.hasOwnProperty(e))
                                                throw new eG(`Tried to register registered instance: ${e}`);
                                            te[e] = this
                                        }
                                        ,
                                        i.__destruct = function () {
                                            if (this === i)
                                                throw new eG("Pass correct 'this' to __destruct");
                                            ta(this);
                                            var e = this.g.o;
                                            if (e = tt(r, e),
                                                te.hasOwnProperty(e))
                                                delete te[e];
                                            else
                                                throw new eG(`Tried to unregister unregistered instance: ${e}`)
                                        }
                                        ,
                                        e.prototype = Object.create(i),
                                        Object.assign(e.prototype, n),
                                        e6(e)
                                }
                                ,
                                _embind_finalize_value_object: e => {
                                    var t = th[e];
                                    delete th[e];
                                    var n = t.Oa
                                        , r = t.P
                                        , i = t.fb;
                                    tm([e], i.map(e => e.Vb).concat(i.map(e => e.lc)), e => {
                                        var a = {};
                                        return i.forEach((t, n) => {
                                            var r = e[n]
                                                , o = t.Tb
                                                , s = t.Ub
                                                , u = e[n + i.length]
                                                , l = t.kc
                                                , c = t.mc;
                                            a[t.Pb] = {
                                                read: e => r.fromWireType(o(s, e)),
                                                write: (e, t) => {
                                                    var n = [];
                                                    l(c, e, u.toWireType(n, t)),
                                                        tf(n)
                                                }
                                            }
                                        }
                                        ),
                                            [{
                                                name: t.name,
                                                fromWireType: e => {
                                                    var t, n = {};
                                                    for (t in a)
                                                        n[t] = a[t].read(e);
                                                    return r(e),
                                                        n
                                                }
                                                ,
                                                toWireType: (e, t) => {
                                                    for (var i in a)
                                                        if (!(i in t))
                                                            throw TypeError(`Missing field: "${i}"`);
                                                    var o = n();
                                                    for (i in a)
                                                        a[i].write(o, t[i]);
                                                    return null !== e && e.push(r, o),
                                                        o
                                                }
                                                ,
                                                argPackAdvance: 8,
                                                readValueFromPointer: td,
                                                M: r
                                            }]
                                    }
                                    )
                                }
                                ,
                                _embind_register_bigint: () => { }
                                ,
                                _embind_register_bool: (e, t, n, r) => {
                                    tb(e, {
                                        name: t = e8(t),
                                        fromWireType: function (e) {
                                            return !!e
                                        },
                                        toWireType: function (e, t) {
                                            return t ? n : r
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function (e) {
                                            return this.fromWireType(I[e])
                                        },
                                        M: null
                                    })
                                }
                                ,
                                _embind_register_class: (e, t, n, r, i, a, o, s, u, l, c, h, f) => {
                                    c = e8(c),
                                        a = tO(i, a),
                                        s &&= tO(o, s),
                                        l &&= tO(u, l),
                                        f = tO(h, f);
                                    var d = (e => {
                                        if (void 0 === e)
                                            return "_unknown";
                                        var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                        return 48 <= t && 57 >= t ? `_${e}` : e
                                    }
                                    )(c);
                                    t_(d, function () {
                                        tx(`Cannot construct ${c} due to unbound types`, [r])
                                    }),
                                        tm([e, t, n], r ? [r] : [], t => {
                                            if (t = t[0],
                                                r)
                                                var n, i = t.i, o = i.N;
                                            else
                                                o = ty.prototype;
                                            var u = Object.create(o, {
                                                constructor: {
                                                    value: t = e1(c, function (...e) {
                                                        if (Object.getPrototypeOf(this) !== u)
                                                            throw new eG("Use 'new' to construct " + c);
                                                        if (void 0 === h.$)
                                                            throw new eG(c + " has no accessible constructor");
                                                        var t = h.$[e.length];
                                                        if (void 0 === t)
                                                            throw new eG(`Tried to invoke ctor of ${c} with invalid number of parameters (${e.length}) - expected (${Object.keys(h.$).toString()}) parameters instead!`);
                                                        return t.apply(this, e)
                                                    })
                                                }
                                            });
                                            t.prototype = u;
                                            var h = new tA(c, t, u, f, i, a, s, l);
                                            return h.C && ((n = h.C).oa ?? (n.oa = []),
                                                h.C.oa.push(h)),
                                                i = new tE(c, h, !0, !1, !1),
                                                n = new tE(c + "*", h, !1, !1, !1),
                                                o = new tE(c + " const*", h, !1, !0, !1),
                                                tu[e] = {
                                                    pointerType: n,
                                                    Ib: o
                                                },
                                                tF(d, t),
                                                [i, n, o]
                                        }
                                        )
                                }
                                ,
                                _embind_register_class_class_function: (e, t, n, r, i, a, o) => {
                                    var s = tV(n, r);
                                    t = tD(t = e8(t)),
                                        a = tO(i, a),
                                        tm([], [e], e => {
                                            function r() {
                                                tx(`Cannot call ${i} due to unbound types`, s)
                                            }
                                            e = e[0];
                                            var i = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                                            var u = e.i.constructor;
                                            return void 0 === u[t] ? (r.ea = n - 1,
                                                u[t] = r) : (tw(u, t, i),
                                                    u[t].A[n - 1] = r),
                                                tm([], s, r => {
                                                    if (r = tj(i, [r[0], null].concat(r.slice(1)), null, a, o),
                                                        void 0 === u[t].A ? (r.ea = n - 1,
                                                            u[t] = r) : u[t].A[n - 1] = r,
                                                        e.i.oa)
                                                        for (let n of e.i.oa)
                                                            n.constructor.hasOwnProperty(t) || (n.constructor[t] = r);
                                                    return []
                                                }
                                                ),
                                                []
                                        }
                                        )
                                }
                                ,
                                _embind_register_class_class_property: (e, t, n, r, i, a, o, s) => {
                                    t = e8(t),
                                        a = tO(i, a),
                                        tm([], [e], e => {
                                            e = e[0];
                                            var i = `${e.name}.${t}`
                                                , u = {
                                                    get() {
                                                        tx(`Cannot access ${i} due to unbound types`, [n])
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0
                                                };
                                            return u.set = s ? () => {
                                                tx(`Cannot access ${i} due to unbound types`, [n])
                                            }
                                                : () => {
                                                    throw new eG(`${i} is a read-only property`)
                                                }
                                                ,
                                                Object.defineProperty(e.i.constructor, t, u),
                                                tm([], [n], n => {
                                                    n = n[0];
                                                    var i = {
                                                        get: () => n.fromWireType(a(r)),
                                                        enumerable: !0
                                                    };
                                                    return s && (s = tO(o, s),
                                                        i.set = e => {
                                                            var t = [];
                                                            s(r, n.toWireType(t, e)),
                                                                tf(t)
                                                        }
                                                    ),
                                                        Object.defineProperty(e.i.constructor, t, i),
                                                        []
                                                }
                                                ),
                                                []
                                        }
                                        )
                                }
                                ,
                                _embind_register_class_constructor: (e, t, n, r, i, a) => {
                                    var o = tV(t, n);
                                    i = tO(r, i),
                                        tm([], [e], e => {
                                            e = e[0];
                                            var n = `constructor ${e.name}`;
                                            if (void 0 === e.i.$ && (e.i.$ = []),
                                                void 0 !== e.i.$[t - 1])
                                                throw new eG(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                                            return e.i.$[t - 1] = () => {
                                                tx(`Cannot construct ${e.name} due to unbound types`, o)
                                            }
                                                ,
                                                tm([], o, r => (r.splice(1, 0, null),
                                                    e.i.$[t - 1] = tj(n, r, null, i, a),
                                                    [])),
                                                []
                                        }
                                        )
                                }
                                ,
                                _embind_register_class_function: (e, t, n, r, i, a, o, s) => {
                                    var u = tV(n, r);
                                    t = tD(t = e8(t)),
                                        a = tO(i, a),
                                        tm([], [e], e => {
                                            function r() {
                                                tx(`Cannot call ${i} due to unbound types`, u)
                                            }
                                            e = e[0];
                                            var i = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                                                s && e.i.qb.push(t);
                                            var l = e.i.N
                                                , c = l[t];
                                            return void 0 === c || void 0 === c.A && c.className !== e.name && c.ea === n - 2 ? (r.ea = n - 2,
                                                r.className = e.name,
                                                l[t] = r) : (tw(l, t, i),
                                                    l[t].A[n - 2] = r),
                                                tm([], u, r => (r = tj(i, r, e, a, o),
                                                    void 0 === l[t].A ? (r.ea = n - 2,
                                                        l[t] = r) : l[t].A[n - 2] = r,
                                                    [])),
                                                []
                                        }
                                        )
                                }
                                ,
                                _embind_register_class_property: (e, t, n, r, i, a, o, s, u, l) => {
                                    t = e8(t),
                                        i = tO(r, i),
                                        tm([], [e], e => {
                                            e = e[0];
                                            var r = `${e.name}.${t}`
                                                , c = {
                                                    get() {
                                                        tx(`Cannot access ${r} due to unbound types`, [n, o])
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0
                                                };
                                            return c.set = u ? () => tx(`Cannot access ${r} due to unbound types`, [n, o]) : () => {
                                                throw new eG(r + " is a read-only property")
                                            }
                                                ,
                                                Object.defineProperty(e.i.N, t, c),
                                                tm([], u ? [n, o] : [n], n => {
                                                    var o = n[0]
                                                        , c = {
                                                            get() {
                                                                var t = tB(this, e, r + " getter");
                                                                return o.fromWireType(i(a, t))
                                                            },
                                                            enumerable: !0
                                                        };
                                                    if (u) {
                                                        u = tO(s, u);
                                                        var h = n[1];
                                                        c.set = function (t) {
                                                            var n = tB(this, e, r + " setter")
                                                                , i = [];
                                                            u(l, n, h.toWireType(i, t)),
                                                                tf(i)
                                                        }
                                                    }
                                                    return Object.defineProperty(e.i.N, t, c),
                                                        []
                                                }
                                                ),
                                                []
                                        }
                                        )
                                }
                                ,
                                _embind_register_emval: e => tb(e, tU),
                                _embind_register_enum: (e, t, n, r) => {
                                    function i() { }
                                    t = e8(t),
                                        i.values = {},
                                        tb(e, {
                                            name: t,
                                            constructor: i,
                                            fromWireType: function (e) {
                                                return this.constructor.values[e]
                                            },
                                            toWireType: (e, t) => t.value,
                                            argPackAdvance: 8,
                                            readValueFromPointer: ((e, t, n) => {
                                                switch (t) {
                                                    case 1:
                                                        return n ? function (e) {
                                                            return this.fromWireType(E[e])
                                                        }
                                                            : function (e) {
                                                                return this.fromWireType(I[e])
                                                            }
                                                            ;
                                                    case 2:
                                                        return n ? function (e) {
                                                            return this.fromWireType(k[e >> 1])
                                                        }
                                                            : function (e) {
                                                                return this.fromWireType(F[e >> 1])
                                                            }
                                                            ;
                                                    case 4:
                                                        return n ? function (e) {
                                                            return this.fromWireType(T[e >> 2])
                                                        }
                                                            : function (e) {
                                                                return this.fromWireType(L[e >> 2])
                                                            }
                                                            ;
                                                    default:
                                                        throw TypeError(`invalid integer width (${t}): ${e}`)
                                                }
                                            }
                                            )(t, n, r),
                                            M: null
                                        }),
                                        t_(t, i)
                                }
                                ,
                                _embind_register_enum_value: (e, t, n) => {
                                    var r = ti(e, "enum");
                                    t = e8(t),
                                        e = r.constructor,
                                        r = Object.create(r.constructor.prototype, {
                                            value: {
                                                value: n
                                            },
                                            constructor: {
                                                value: e1(`${r.name}_${t}`, function () { })
                                            }
                                        }),
                                        e.values[n] = r,
                                        e[t] = r
                                }
                                ,
                                _embind_register_float: (e, t, n) => {
                                    tb(e, {
                                        name: t = e8(t),
                                        fromWireType: e => e,
                                        toWireType: (e, t) => t,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t) => {
                                            switch (t) {
                                                case 4:
                                                    return function (e) {
                                                        return this.fromWireType(O[e >> 2])
                                                    }
                                                        ;
                                                case 8:
                                                    return function (e) {
                                                        return this.fromWireType(x[e >> 3])
                                                    }
                                                        ;
                                                default:
                                                    throw TypeError(`invalid float width (${t}): ${e}`)
                                            }
                                        }
                                        )(t, n),
                                        M: null
                                    })
                                }
                                ,
                                _embind_register_function: (e, t, n, r, i, a) => {
                                    var o = tV(t, n);
                                    e = tD(e = e8(e)),
                                        i = tO(r, i),
                                        t_(e, function () {
                                            tx(`Cannot call ${e} due to unbound types`, o)
                                        }, t - 1),
                                        tm([], o, n => (tF(e, tj(e, [n[0], null].concat(n.slice(1)), null, i, a), t - 1),
                                            []))
                                }
                                ,
                                _embind_register_integer: (e, t, n, r, i) => {
                                    if (t = e8(t),
                                        -1 === i && (i = 0xffffffff),
                                        i = e => e,
                                        0 === r) {
                                        var a = 32 - 8 * n;
                                        i = e => e << a >>> a
                                    }
                                    var o = t.includes("unsigned") ? function (e, t) {
                                        return t >>> 0
                                    }
                                        : function (e, t) {
                                            return t
                                        }
                                        ;
                                    tb(e, {
                                        name: t,
                                        fromWireType: i,
                                        toWireType: o,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t, n) => {
                                            switch (t) {
                                                case 1:
                                                    return n ? e => E[e] : e => I[e];
                                                case 2:
                                                    return n ? e => k[e >> 1] : e => F[e >> 1];
                                                case 4:
                                                    return n ? e => T[e >> 2] : e => L[e >> 2];
                                                default:
                                                    throw TypeError(`invalid integer width (${t}): ${e}`)
                                            }
                                        }
                                        )(t, n, 0 !== r),
                                        M: null
                                    })
                                }
                                ,
                                _embind_register_memory_view: (e, t, n) => {
                                    function r(e) {
                                        return new i(E.buffer, L[e + 4 >> 2], L[e >> 2])
                                    }
                                    var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];
                                    tb(e, {
                                        name: n = e8(n),
                                        fromWireType: r,
                                        argPackAdvance: 8,
                                        readValueFromPointer: r
                                    }, {
                                        Wb: !0
                                    })
                                }
                                ,
                                _embind_register_std_string: (e, t) => {
                                    var n = "std::string" === (t = e8(t));
                                    tb(e, {
                                        name: t,
                                        fromWireType: function (e) {
                                            var t = L[e >> 2]
                                                , r = e + 4;
                                            if (n)
                                                for (var i = r, a = 0; a <= t; ++a) {
                                                    var o = r + a;
                                                    if (a == t || 0 == I[o]) {
                                                        if (i = i ? eo(I, i, o - i) : "",
                                                            void 0 === s)
                                                            var s = i;
                                                        else
                                                            s += "\0",
                                                                s += i;
                                                        i = o + 1
                                                    }
                                                }
                                            else {
                                                for (a = 0,
                                                    s = Array(t); a < t; ++a)
                                                    s[a] = String.fromCharCode(I[r + a]);
                                                s = s.join("")
                                            }
                                            return ni(e),
                                                s
                                        },
                                        toWireType: function (e, t) {
                                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                            var r = "string" == typeof t;
                                            if (!(r || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array))
                                                throw new eG("Cannot pass non-string to std::string");
                                            var i = n && r ? eu(t) : t.length
                                                , a = na(4 + i + 1)
                                                , o = a + 4;
                                            if (L[a >> 2] = i,
                                                n && r)
                                                el(t, I, o, i + 1);
                                            else if (r)
                                                for (r = 0; r < i; ++r) {
                                                    var s = t.charCodeAt(r);
                                                    if (255 < s)
                                                        throw ni(o),
                                                        new eG("String has UTF-16 code units that do not fit in 8 bits");
                                                    I[o + r] = s
                                                }
                                            else
                                                for (r = 0; r < i; ++r)
                                                    I[o + r] = t[r];
                                            return null !== e && e.push(ni, a),
                                                a
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: td,
                                        M(e) {
                                            ni(e)
                                        }
                                    })
                                }
                                ,
                                _embind_register_std_wstring: (e, t, n) => {
                                    if (n = e8(n),
                                        2 === t)
                                        var r = t$
                                            , i = tH
                                            , a = tY
                                            , o = e => F[e >> 1];
                                    else
                                        4 === t && (r = tX,
                                            i = tG,
                                            a = tq,
                                            o = e => L[e >> 2]);
                                    tb(e, {
                                        name: n,
                                        fromWireType: e => {
                                            for (var n, i = L[e >> 2], a = e + 4, s = 0; s <= i; ++s) {
                                                var u = e + 4 + s * t;
                                                (s == i || 0 == o(u)) && (a = r(a, u - a),
                                                    void 0 === n ? n = a : (n += "\0",
                                                        n += a),
                                                    a = u + t)
                                            }
                                            return ni(e),
                                                n
                                        }
                                        ,
                                        toWireType: (e, r) => {
                                            if ("string" != typeof r)
                                                throw new eG(`Cannot pass non-string to C++ string type ${n}`);
                                            var o = a(r)
                                                , s = na(4 + o + t);
                                            return L[s >> 2] = o / t,
                                                i(r, s + 4, o + t),
                                                null !== e && e.push(ni, s),
                                                s
                                        }
                                        ,
                                        argPackAdvance: 8,
                                        readValueFromPointer: td,
                                        M(e) {
                                            ni(e)
                                        }
                                    })
                                }
                                ,
                                _embind_register_value_object: (e, t, n, r, i, a) => {
                                    th[e] = {
                                        name: e8(t),
                                        Oa: tO(n, r),
                                        P: tO(i, a),
                                        fb: []
                                    }
                                }
                                ,
                                _embind_register_value_object_field: (e, t, n, r, i, a, o, s, u, l) => {
                                    th[e].fb.push({
                                        Pb: e8(t),
                                        Vb: n,
                                        Tb: tO(r, i),
                                        Ub: a,
                                        lc: o,
                                        kc: tO(s, u),
                                        mc: l
                                    })
                                }
                                ,
                                _embind_register_void: (e, t) => {
                                    tb(e, {
                                        Jc: !0,
                                        name: t = e8(t),
                                        argPackAdvance: 0,
                                        fromWireType: () => { }
                                        ,
                                        toWireType: () => { }
                                    })
                                }
                                ,
                                _emscripten_get_now_is_monotonic: () => 1,
                                _emscripten_memcpy_js: (e, t, n) => I.copyWithin(e, t, t + n),
                                _emscripten_throw_longjmp: () => {
                                    throw 1 / 0
                                }
                                ,
                                _emval_as: (e, t, n) => (e = e3(e),
                                    tJ(t = ti(t, "emval::as"), n, e)),
                                _emval_call: (e, t, n, r) => (e = tK[e])(null, t = e3(t), n, r),
                                _emval_call_method: (e, t, n, r, i) => (e = tK[e])(t = e3(t), t[n = tQ(n)], r, i),
                                _emval_decref: tW,
                                _emval_get_method_caller: (e, t, n) => {
                                    var r, i, a = ((e, t) => {
                                        for (var n = Array(e), r = 0; r < e; ++r)
                                            n[r] = ti(L[t + 4 * r >> 2], "parameter " + r);
                                        return n
                                    }
                                    )(e, t), o = a.shift(), s = Array(--e);
                                    return r = e1(t = `methodCaller<(${a.map(e => e.name).join(", ")}) => ${o.name}>`, (t, r, i, u) => {
                                        for (var l = 0, c = 0; c < e; ++c)
                                            s[c] = a[c].readValueFromPointer(u + l),
                                                l += a[c].argPackAdvance;
                                        return tJ(o, i, t = 1 === n ? t0(r, s) : r.apply(t, s))
                                    }
                                    ),
                                        i = tK.length,
                                        tK.push(r),
                                        i
                                }
                                ,
                                _emval_get_module_property: t => e6(e[t = tQ(t)]),
                                _emval_get_property: (e, t) => e6((e = e3(e))[t = e3(t)]),
                                _emval_incref: e => {
                                    9 < e && (e4[e + 1] += 1)
                                }
                                ,
                                _emval_new_array: () => e6([]),
                                _emval_new_cstring: e => e6(tQ(e)),
                                _emval_new_object: () => e6({}),
                                _emval_run_destructors: e => {
                                    tf(e3(e)),
                                        tW(e)
                                }
                                ,
                                _emval_set_property: (e, t, n) => {
                                    e = e3(e),
                                        t = e3(t),
                                        n = e3(n),
                                        e[t] = n
                                }
                                ,
                                _emval_take_value: (e, t) => e6(e = (e = ti(e, "_emval_take_value")).readValueFromPointer(t)),
                                _gmtime_js: function (e, t, n) {
                                    e = new Date(1e3 * (t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 0x100000000 * t : NaN)),
                                        T[n >> 2] = e.getUTCSeconds(),
                                        T[n + 4 >> 2] = e.getUTCMinutes(),
                                        T[n + 8 >> 2] = e.getUTCHours(),
                                        T[n + 12 >> 2] = e.getUTCDate(),
                                        T[n + 16 >> 2] = e.getUTCMonth(),
                                        T[n + 20 >> 2] = e.getUTCFullYear() - 1900,
                                        T[n + 24 >> 2] = e.getUTCDay(),
                                        T[n + 28 >> 2] = (e.getTime() - Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0
                                },
                                _localtime_js: function (e, t, n) {
                                    e = new Date(1e3 * (t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 0x100000000 * t : NaN)),
                                        T[n >> 2] = e.getSeconds(),
                                        T[n + 4 >> 2] = e.getMinutes(),
                                        T[n + 8 >> 2] = e.getHours(),
                                        T[n + 12 >> 2] = e.getDate(),
                                        T[n + 16 >> 2] = e.getMonth(),
                                        T[n + 20 >> 2] = e.getFullYear() - 1900,
                                        T[n + 24 >> 2] = e.getDay(),
                                        T[n + 28 >> 2] = (t1(e.getFullYear()) ? t2 : t4)[e.getMonth()] + e.getDate() - 1 | 0,
                                        T[n + 36 >> 2] = -(60 * e.getTimezoneOffset()),
                                        t = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
                                    var r = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
                                    T[n + 32 >> 2] = 0 | (t != r && e.getTimezoneOffset() == Math.min(r, t))
                                },
                                _tzset_js: (e, t, n, r) => {
                                    var i = new Date().getFullYear()
                                        , a = new Date(i, 0, 1)
                                        , o = new Date(i, 6, 1);
                                    i = a.getTimezoneOffset();
                                    var s = o.getTimezoneOffset();
                                    L[e >> 2] = 60 * Math.max(i, s),
                                        T[t >> 2] = Number(i != s),
                                        a = (e = e => e.toLocaleTimeString(void 0, {
                                            hour12: !1,
                                            timeZoneName: "short"
                                        }).split(" ")[1])(a),
                                        o = e(o),
                                        s < i ? (el(a, I, n, 17),
                                            el(o, I, r, 17)) : (el(a, I, r, 17),
                                                el(o, I, n, 17))
                                }
                                ,
                                emscripten_asm_const_int: (e, t, n) => {
                                    t3.length = 0;
                                    for (var r; r = I[t++];) {
                                        var i = 105 != r;
                                        i &= 112 != r,
                                            n += i && n % 8 ? 4 : 0,
                                            t3.push(112 == r ? L[n >> 2] : 105 == r ? T[n >> 2] : x[n >> 3]),
                                            n += i ? 8 : 4
                                    }
                                    return J[e](...t3)
                                }
                                ,
                                emscripten_date_now: () => Date.now(),
                                emscripten_get_now: () => performance.now(),
                                emscripten_resize_heap: e => {
                                    var t = I.length;
                                    if (0x80000000 < (e >>>= 0))
                                        return !1;
                                    for (var n = 1; 4 >= n; n *= 2) {
                                        var r = t * (1 + .2 / n);
                                        r = Math.min(r, e + 0x6000000);
                                        var i = Math;
                                        r = Math.max(e, r);
                                        e: {
                                            i = (i.min.call(i, 0x80000000, r + (65536 - r % 65536) % 65536) - R.buffer.byteLength + 65535) / 65536;
                                            try {
                                                R.grow(i),
                                                    S();
                                                var a = 1;
                                                break e
                                            } catch (e) { }
                                            a = void 0
                                        }
                                        if (a)
                                            return !0
                                    }
                                    return !1
                                }
                                ,
                                environ_get: (e, t) => {
                                    var n = 0;
                                    return t5().forEach((r, i) => {
                                        var a = t + n;
                                        for (i = L[e + 4 * i >> 2] = a,
                                            a = 0; a < r.length; ++a)
                                            E[i++] = r.charCodeAt(a);
                                        E[i] = 0,
                                            n += r.length + 1
                                    }
                                    ),
                                        0
                                }
                                ,
                                environ_sizes_get: (e, t) => {
                                    var n = t5();
                                    L[e >> 2] = n.length;
                                    var r = 0;
                                    return n.forEach(e => r += e.length + 1),
                                        L[t >> 2] = r,
                                        0
                                }
                                ,
                                fd_close: function (e) {
                                    try {
                                        var t = ex(e);
                                        if (null === t.X)
                                            throw new eA(8);
                                        t.La && (t.La = null);
                                        try {
                                            t.m.close && t.m.close(t)
                                        } catch (e) {
                                            throw e
                                        } finally {
                                            eg[t.X] = null
                                        }
                                        return t.X = null,
                                            0
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name)
                                            throw e;
                                        return e.aa
                                    }
                                },
                                fd_read: function (e, t, n, r) {
                                    try {
                                        e: {
                                            var i = ex(e);
                                            e = t;
                                            for (var a, o = t = 0; o < n; o++) {
                                                var s = L[e >> 2]
                                                    , u = L[e + 4 >> 2];
                                                e += 8;
                                                var l = a
                                                    , c = E;
                                                if (0 > u || 0 > l)
                                                    throw new eA(28);
                                                if (null === i.X || 1 == (2097155 & i.flags))
                                                    throw new eA(8);
                                                if (16384 == (61440 & i.node.mode))
                                                    throw new eA(31);
                                                if (!i.m.read)
                                                    throw new eA(28);
                                                var h = void 0 !== l;
                                                if (h) {
                                                    if (!i.seekable)
                                                        throw new eA(70)
                                                } else
                                                    l = i.position;
                                                var f = i.m.read(i, c, s, u, l);
                                                if (h || (i.position += f),
                                                    0 > f) {
                                                    var d = -1;
                                                    break e
                                                }
                                                if (t += f,
                                                    f < u)
                                                    break;
                                                void 0 !== a && (a += f)
                                            }
                                            d = t
                                        }
                                        return L[r >> 2] = d,
                                            0
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name)
                                            throw e;
                                        return e.aa
                                    }
                                },
                                fd_seek: function (e, t, n, r, i) {
                                    t = n + 2097152 >>> 0 < 4194305 - !!t ? (t >>> 0) + 0x100000000 * n : NaN;
                                    try {
                                        if (isNaN(t))
                                            return 61;
                                        var a = ex(e);
                                        return ez(a, t, r),
                                            q = [a.position >>> 0, (G = a.position,
                                                1 <= +Math.abs(G) ? 0 < G ? Math.floor(G / 0x100000000) >>> 0 : ~~Math.ceil((G - (~~G >>> 0)) / 0x100000000) >>> 0 : 0)],
                                            T[i >> 2] = q[0],
                                            T[i + 4 >> 2] = q[1],
                                            a.La && 0 === t && 0 === r && (a.La = null),
                                            0
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name)
                                            throw e;
                                        return e.aa
                                    }
                                },
                                fd_write: function (e, t, n, r) {
                                    try {
                                        e: {
                                            var i = ex(e);
                                            e = t;
                                            for (var a, o = t = 0; o < n; o++) {
                                                var s = L[e >> 2]
                                                    , u = L[e + 4 >> 2];
                                                e += 8;
                                                var l = a
                                                    , c = E;
                                                if (0 > u || 0 > l)
                                                    throw new eA(28);
                                                if (null === i.X || 0 == (2097155 & i.flags))
                                                    throw new eA(8);
                                                if (16384 == (61440 & i.node.mode))
                                                    throw new eA(31);
                                                if (!i.m.write)
                                                    throw new eA(28);
                                                i.seekable && 1024 & i.flags && ez(i, 0, 2);
                                                var h = void 0 !== l;
                                                if (h) {
                                                    if (!i.seekable)
                                                        throw new eA(70)
                                                } else
                                                    l = i.position;
                                                var f = i.m.write(i, c, s, u, l, void 0);
                                                if (h || (i.position += f),
                                                    0 > f) {
                                                    var d = -1;
                                                    break e
                                                }
                                                t += f,
                                                    void 0 !== a && (a += f)
                                            }
                                            d = t
                                        }
                                        return L[r >> 2] = d,
                                            0
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name)
                                            throw e;
                                        return e.aa
                                    }
                                },
                                invoke_vii: function (e, t, n) {
                                    var r = nf();
                                    try {
                                        tL(e)(t, n)
                                    } catch (e) {
                                        if (nh(r),
                                            e !== e + 0)
                                            throw e;
                                        nc(1, 0)
                                    }
                                },
                                isWindowsBrowser: function () {
                                    return -1 < navigator.platform.indexOf("Win")
                                },
                                strftime: t9,
                                strftime_l: (e, t, n, r) => t9(e, t, n, r)
                            }
                                , nr = function () {
                                    function t(t) {
                                        return R = (nr = t.exports).memory,
                                            S(),
                                            tI = nr.__indirect_function_table,
                                            D.unshift(nr.__wasm_call_ctors),
                                            W--,
                                            e.monitorRunDependencies?.(W),
                                            0 == W && (null !== U && (clearInterval(U),
                                                U = null),
                                                N && (t = N,
                                                    N = null,
                                                    t())),
                                            nr
                                    }
                                    var n, r, i = {
                                        env: nn,
                                        wasi_snapshot_preview1: nn
                                    };
                                    if (W++,
                                        e.monitorRunDependencies?.(W),
                                        e.instantiateWasm)
                                        try {
                                            return e.instantiateWasm(i, t)
                                        } catch (e) {
                                            M(`Module.instantiateWasm callback failed with error: ${e}`),
                                                u(e)
                                        }
                                    return $ ||= "canvas_advanced.wasm".startsWith("data:application/octet-stream;base64,") ? "canvas_advanced.wasm" : e.locateFile ? e.locateFile("canvas_advanced.wasm", A) : A + "canvas_advanced.wasm",
                                        (n = i,
                                            r = function (e) {
                                                t(e.instance)
                                            }
                                            ,
                                            P || "function" != typeof WebAssembly.instantiateStreaming || $.startsWith("data:application/octet-stream;base64,") || H($) || "function" != typeof fetch ? X($, n, r) : fetch($, {
                                                credentials: "same-origin"
                                            }).then(e => WebAssembly.instantiateStreaming(e, n).then(r, function (e) {
                                                return M(`wasm streaming compile failed: ${e}`),
                                                    M("falling back to ArrayBuffer instantiation"),
                                                    X($, n, r)
                                            }))).catch(u),
                                        {}
                                }()
                                , ni = e => (ni = nr.free)(e)
                                , na = e => (na = nr.malloc)(e)
                                , no = e => (no = nr.__getTypeName)(e)
                                , ns = e._ma_device__on_notification_unlocked = t => (ns = e._ma_device__on_notification_unlocked = nr.ma_device__on_notification_unlocked)(t);
                            e._ma_malloc_emscripten = (t, n) => (e._ma_malloc_emscripten = nr.ma_malloc_emscripten)(t, n),
                                e._ma_free_emscripten = (t, n) => (e._ma_free_emscripten = nr.ma_free_emscripten)(t, n);
                            var nu = e._ma_device_process_pcm_frames_capture__webaudio = (t, n, r) => (nu = e._ma_device_process_pcm_frames_capture__webaudio = nr.ma_device_process_pcm_frames_capture__webaudio)(t, n, r)
                                , nl = e._ma_device_process_pcm_frames_playback__webaudio = (t, n, r) => (nl = e._ma_device_process_pcm_frames_playback__webaudio = nr.ma_device_process_pcm_frames_playback__webaudio)(t, n, r)
                                , nc = (e, t) => (nc = nr.setThrew)(e, t)
                                , nh = e => (nh = nr._emscripten_stack_restore)(e)
                                , nf = () => (nf = nr.emscripten_stack_get_current)();
                            function nd() {
                                function t() {
                                    if (!o && (o = !0,
                                        e.calledRun = !0,
                                        !j)) {
                                        if (e.noFSInit || eH || (eH = !0,
                                            e.stdin = e.stdin,
                                            e.stdout = e.stdout,
                                            e.stderr = e.stderr,
                                            e.stdin ? e$("stdin", e.stdin) : eU("/dev/tty", "/dev/stdin"),
                                            e.stdout ? e$("stdout", null, e.stdout) : eU("/dev/tty", "/dev/stdout"),
                                            e.stderr ? e$("stderr", null, e.stderr) : eU("/dev/tty1", "/dev/stderr"),
                                            eN("/dev/stdin", 0),
                                            eN("/dev/stdout", 1),
                                            eN("/dev/stderr", 1)),
                                            e_ = !1,
                                            K(D),
                                            s(e),
                                            e.onRuntimeInitialized && e.onRuntimeInitialized(),
                                            e.postRun)
                                            for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
                                                var t = e.postRun.shift();
                                                B.unshift(t)
                                            }
                                        K(B)
                                    }
                                }
                                if (!(0 < W)) {
                                    if (e.preRun)
                                        for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;)
                                            !function () {
                                                var t = e.preRun.shift();
                                                V.unshift(t)
                                            }();
                                    K(V),
                                        0 < W || (e.setStatus ? (e.setStatus("Running..."),
                                            setTimeout(function () {
                                                setTimeout(function () {
                                                    e.setStatus("")
                                                }, 1),
                                                    t()
                                            }, 1)) : t())
                                }
                            }
                            if (e.dynCall_iiji = (t, n, r, i, a) => (e.dynCall_iiji = nr.dynCall_iiji)(t, n, r, i, a),
                                e.dynCall_jiji = (t, n, r, i, a) => (e.dynCall_jiji = nr.dynCall_jiji)(t, n, r, i, a),
                                e.dynCall_iiiji = (t, n, r, i, a, o) => (e.dynCall_iiiji = nr.dynCall_iiiji)(t, n, r, i, a, o),
                                e.dynCall_iij = (t, n, r, i) => (e.dynCall_iij = nr.dynCall_iij)(t, n, r, i),
                                e.dynCall_jii = (t, n, r) => (e.dynCall_jii = nr.dynCall_jii)(t, n, r),
                                e.dynCall_viijii = (t, n, r, i, a, o, s) => (e.dynCall_viijii = nr.dynCall_viijii)(t, n, r, i, a, o, s),
                                e.dynCall_iiiiij = (t, n, r, i, a, o, s) => (e.dynCall_iiiiij = nr.dynCall_iiiiij)(t, n, r, i, a, o, s),
                                e.dynCall_iiiiijj = (t, n, r, i, a, o, s, u, l) => (e.dynCall_iiiiijj = nr.dynCall_iiiiijj)(t, n, r, i, a, o, s, u, l),
                                e.dynCall_iiiiiijj = (t, n, r, i, a, o, s, u, l, c) => (e.dynCall_iiiiiijj = nr.dynCall_iiiiiijj)(t, n, r, i, a, o, s, u, l, c),
                                N = function e() {
                                    o || nd(),
                                        o || (N = e)
                                }
                                ,
                                e.preInit)
                                for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;)
                                    e.preInit.pop()();
                            return nd(),
                                l
                        }
                    )
                }
                , e => {
                    e.exports = JSON.parse('{"name":"@rive-app/canvas","version":"2.37.5","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts","runtimeLoader.d.ts","utils"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}')
                }
                , (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            AudioAssetWrapper: () => a.AudioAssetWrapper,
                            AudioWrapper: () => a.AudioWrapper,
                            BLANK_URL: () => i.BLANK_URL,
                            CustomFileAssetLoaderWrapper: () => a.CustomFileAssetLoaderWrapper,
                            FileAssetWrapper: () => a.FileAssetWrapper,
                            FileFinalizer: () => a.FileFinalizer,
                            FontAssetWrapper: () => a.FontAssetWrapper,
                            FontWrapper: () => a.FontWrapper,
                            ImageAssetWrapper: () => a.ImageAssetWrapper,
                            ImageWrapper: () => a.ImageWrapper,
                            RiveFont: () => o.RiveFont,
                            createFinalization: () => a.createFinalization,
                            finalizationRegistry: () => a.finalizationRegistry,
                            registerTouchInteractions: () => r.registerTouchInteractions,
                            sanitizeUrl: () => i.sanitizeUrl
                        });
                    var r = n(7)
                        , i = n(8)
                        , a = n(9)
                        , o = n(10)
                }
                , (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            registerTouchInteractions: () => o
                        });
                    var r = void 0
                        , i = function (e, t, n) {
                            var r, i = [];
                            if (t)
                                for (var a = 0; a < e.length; a++) {
                                    var o = e[a];
                                    i.push({
                                        clientX: o.clientX,
                                        clientY: o.clientY,
                                        identifier: o.identifier
                                    })
                                }
                            else {
                                var s = null !== n ? null != (r = Array.from(e).find(function (e) {
                                    return e.identifier === n
                                })) ? r : null : e[0];
                                s && i.push({
                                    clientX: s.clientX,
                                    clientY: s.clientY,
                                    identifier: s.identifier
                                })
                            }
                            return i
                        }
                        , a = function (e, t, n, r) {
                            var a;
                            return (null == (a = e.changedTouches) ? void 0 : a.length) ? (!t && ["touchstart", "touchmove"].includes(e.type) && e.preventDefault(),
                                i(e.changedTouches, n, r)) : [{
                                    clientX: e.clientX,
                                    clientY: e.clientY,
                                    identifier: 0
                                }]
                        }
                        , o = function (e) {
                            var t = e.canvas
                                , n = e.artboard
                                , i = e.stateMachines
                                , o = void 0 === i ? [] : i
                                , s = e.renderer
                                , u = e.rive
                                , l = e.fit
                                , c = e.alignment
                                , h = e.isTouchScrollEnabled
                                , f = void 0 !== h && h
                                , d = e.dispatchPointerExit
                                , p = void 0 === d || d
                                , v = e.enableMultiTouch
                                , m = void 0 !== v && v
                                , b = e.layoutScaleFactor
                                , g = void 0 === b ? 1 : b;
                            if (!t || !o.length || !s || !u || !n || "u" < typeof window)
                                return null;
                            var y = null
                                , w = !1
                                , _ = null
                                , A = function () {
                                    _ = null
                                }
                                , C = (function (e) {
                                    if (w && e instanceof MouseEvent) {
                                        "mouseup" == e.type && (w = !1);
                                        return
                                    }
                                    w = f && "touchend" === e.type && "touchstart" === y,
                                        y = e.type;
                                    var t, r = e.currentTarget.getBoundingClientRect();
                                    if (!m && "touchstart" === e.type && null === _) {
                                        var i = null == (t = e.changedTouches) ? void 0 : t[0];
                                        i && (_ = i.identifier)
                                    }
                                    var s = a(e, f, m, m ? null : _)
                                        , h = u.computeAlignment(l, c, {
                                            minX: 0,
                                            minY: 0,
                                            maxX: r.width,
                                            maxY: r.height
                                        }, n.bounds, g)
                                        , d = new u.Mat2D;
                                    switch (h.invert(d),
                                    s.forEach(function (e) {
                                        var t = e.clientX
                                            , n = e.clientY;
                                        if (t || n) {
                                            var i = t - r.left
                                                , a = n - r.top
                                                , o = new u.Vec2D(i, a)
                                                , s = u.mapXY(d, o)
                                                , l = s.x()
                                                , c = s.y();
                                            e.transformedX = l,
                                                e.transformedY = c,
                                                s.delete(),
                                                o.delete()
                                        }
                                    }),
                                    d.delete(),
                                    h.delete(),
                                    e.type) {
                                        case "mouseout":
                                            for (var v = function (e) {
                                                p ? s.forEach(function (t) {
                                                    e.pointerExit(t.transformedX, t.transformedY, t.identifier)
                                                }) : s.forEach(function (t) {
                                                    e.pointerMove(t.transformedX, t.transformedY, t.identifier)
                                                })
                                            }, b = 0; b < o.length; b++) {
                                                var A = o[b];
                                                v(A)
                                            }
                                            break;
                                        case "touchmove":
                                        case "mouseover":
                                        case "mousemove":
                                            for (var C = function (e) {
                                                s.forEach(function (t) {
                                                    e.pointerMove(t.transformedX, t.transformedY, t.identifier)
                                                })
                                            }, M = 0; M < o.length; M++) {
                                                var A = o[M];
                                                C(A)
                                            }
                                            break;
                                        case "touchstart":
                                        case "mousedown":
                                            for (var P = function (e) {
                                                s.forEach(function (t) {
                                                    e.pointerDown(t.transformedX, t.transformedY, t.identifier)
                                                })
                                            }, R = 0; R < o.length; R++) {
                                                var A = o[R];
                                                P(A)
                                            }
                                            break;
                                        case "touchend":
                                            for (var E = function (e) {
                                                s.forEach(function (t) {
                                                    e.pointerUp(t.transformedX, t.transformedY, t.identifier),
                                                        e.pointerExit(t.transformedX, t.transformedY, t.identifier)
                                                })
                                            }, I = 0; I < o.length; I++) {
                                                var A = o[I];
                                                E(A)
                                            }
                                            !m && s.some(function (e) {
                                                return e.identifier === _
                                            }) && (_ = null);
                                            break;
                                        case "mouseup":
                                            for (var k = function (e) {
                                                s.forEach(function (t) {
                                                    e.pointerUp(t.transformedX, t.transformedY, t.identifier)
                                                })
                                            }, F = 0; F < o.length; F++) {
                                                var A = o[F];
                                                k(A)
                                            }
                                    }
                                }
                                ).bind(r);
                            return t.addEventListener("mouseover", C),
                                t.addEventListener("mouseout", C),
                                t.addEventListener("mousemove", C),
                                t.addEventListener("mousedown", C),
                                t.addEventListener("mouseup", C),
                                t.addEventListener("touchmove", C, {
                                    passive: f
                                }),
                                t.addEventListener("touchstart", C, {
                                    passive: f
                                }),
                                t.addEventListener("touchend", C),
                                t.addEventListener("touchcancel", A),
                                function () {
                                    t.removeEventListener("mouseover", C),
                                        t.removeEventListener("mouseout", C),
                                        t.removeEventListener("mousemove", C),
                                        t.removeEventListener("mousedown", C),
                                        t.removeEventListener("mouseup", C),
                                        t.removeEventListener("touchmove", C),
                                        t.removeEventListener("touchstart", C),
                                        t.removeEventListener("touchend", C),
                                        t.removeEventListener("touchcancel", A)
                                }
                        }
                }
                , (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            BLANK_URL: () => l,
                            sanitizeUrl: () => c
                        });
                    var r = /^([^\w]*)(javascript|data|vbscript)/im
                        , i = /&#(\w+)(^\w|;)?/g
                        , a = /&(newline|tab);/gi
                        , o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim
                        , s = /^.+(:|&colon;)/gim
                        , u = [".", "/"]
                        , l = "about:blank";
                    function c(e) {
                        if (!e)
                            return l;
                        var t = e.replace(o, "").replace(i, function (e, t) {
                            return String.fromCharCode(t)
                        }).replace(a, "").replace(o, "").trim();
                        if (!t)
                            return l;
                        if (u.indexOf(t[0]) > -1)
                            return t;
                        var n = t.match(s);
                        if (!n)
                            return t;
                        var c = n[0];
                        return r.test(c) ? l : t
                    }
                }
                , (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            AudioAssetWrapper: () => p,
                            AudioWrapper: () => l,
                            CustomFileAssetLoaderWrapper: () => h,
                            FileAssetWrapper: () => f,
                            FileFinalizer: () => a,
                            FontAssetWrapper: () => v,
                            FontWrapper: () => c,
                            ImageAssetWrapper: () => d,
                            ImageWrapper: () => u,
                            createFinalization: () => g,
                            finalizationRegistry: () => b
                        });
                    var r, i = (r = function (e, t) {
                        return (r = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function (e, t) {
                            e.__proto__ = t
                        }
                            || function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                    ), a = function () {
                        function e(e) {
                            this.selfUnref = !1,
                                this._file = e
                        }
                        return e.prototype.unref = function () {
                            this._file && this._file.unref()
                        }
                            ,
                            e
                    }(), o = function () {
                        function e(e) {
                            this._finalizableObject = e
                        }
                        return e.prototype.unref = function () {
                            this._finalizableObject.unref()
                        }
                            ,
                            e
                    }(), s = function () {
                        function e() {
                            this.selfUnref = !1
                        }
                        return e.prototype.unref = function () { }
                            ,
                            e
                    }(), u = function (e) {
                        function t(t) {
                            var n = e.call(this) || this;
                            return n._nativeImage = t,
                                n
                        }
                        return i(t, e),
                            Object.defineProperty(t.prototype, "nativeImage", {
                                get: function () {
                                    return this._nativeImage
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            t.prototype.unref = function () {
                                this.selfUnref && this._nativeImage.unref()
                            }
                            ,
                            t
                    }(s), l = function (e) {
                        function t(t) {
                            var n = e.call(this) || this;
                            return n._nativeAudio = t,
                                n
                        }
                        return i(t, e),
                            Object.defineProperty(t.prototype, "nativeAudio", {
                                get: function () {
                                    return this._nativeAudio
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            t.prototype.unref = function () {
                                this.selfUnref && this._nativeAudio.unref()
                            }
                            ,
                            t
                    }(s), c = function (e) {
                        function t(t) {
                            var n = e.call(this) || this;
                            return n._nativeFont = t,
                                n
                        }
                        return i(t, e),
                            Object.defineProperty(t.prototype, "nativeFont", {
                                get: function () {
                                    return this._nativeFont
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            t.prototype.unref = function () {
                                this.selfUnref && this._nativeFont.unref()
                            }
                            ,
                            t
                    }(s), h = function () {
                        function e(e, t) {
                            this._assetLoaderCallback = t,
                                this.assetLoader = new e.CustomFileAssetLoader({
                                    loadContents: this.loadContents.bind(this)
                                })
                        }
                        return e.prototype.loadContents = function (e, t) {
                            var n;
                            return e.isImage ? n = new d(e) : e.isAudio ? n = new p(e) : e.isFont && (n = new v(e)),
                                this._assetLoaderCallback(n, t)
                        }
                            ,
                            e
                    }(), f = function () {
                        function e(e) {
                            this._nativeFileAsset = e
                        }
                        return e.prototype.decode = function (e) {
                            this._nativeFileAsset.decode(e)
                        }
                            ,
                            Object.defineProperty(e.prototype, "name", {
                                get: function () {
                                    return this._nativeFileAsset.name
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "fileExtension", {
                                get: function () {
                                    return this._nativeFileAsset.fileExtension
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "uniqueFilename", {
                                get: function () {
                                    return this._nativeFileAsset.uniqueFilename
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "isAudio", {
                                get: function () {
                                    return this._nativeFileAsset.isAudio
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "isImage", {
                                get: function () {
                                    return this._nativeFileAsset.isImage
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "isFont", {
                                get: function () {
                                    return this._nativeFileAsset.isFont
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "cdnUuid", {
                                get: function () {
                                    return this._nativeFileAsset.cdnUuid
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "nativeFileAsset", {
                                get: function () {
                                    return this._nativeFileAsset
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            e
                    }(), d = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return i(t, e),
                            t.prototype.setRenderImage = function (e) {
                                this._nativeFileAsset.setRenderImage(e.nativeImage)
                            }
                            ,
                            t
                    }(f), p = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return i(t, e),
                            t.prototype.setAudioSource = function (e) {
                                this._nativeFileAsset.setAudioSource(e.nativeAudio)
                            }
                            ,
                            t
                    }(f), v = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return i(t, e),
                            t.prototype.setFont = function (e) {
                                this._nativeFileAsset.setFont(e.nativeFont)
                            }
                            ,
                            t
                    }(f), m = function () {
                        function e(e) { }
                        return e.prototype.register = function (e) {
                            e.selfUnref = !0
                        }
                            ,
                            e.prototype.unregister = function (e) { }
                            ,
                            e
                    }(), b = new ("u" > typeof FinalizationRegistry ? FinalizationRegistry : m)(function (e) {
                        null == e || e.unref()
                    }
                    ), g = function (e, t) {
                        var n = new o(t);
                        b.register(e, n)
                    }
                }
                , (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            RiveFont: () => i
                        });
                    var r = n(3)
                        , i = function () {
                            function e() { }
                            return e.setFallbackFontCallback = function (t) {
                                e._fallbackFontCallback = null != t ? t : null,
                                    e._wireFallbackProc()
                            }
                                ,
                                e._fontToPtr = function (e) {
                                    if (null == e)
                                        return null;
                                    var t, n = e.nativeFont, r = null == (t = null == n ? void 0 : n.ptr) ? void 0 : t.call(n);
                                    return null != r ? r : null
                                }
                                ,
                                e._getFallbackPtr = function (t, n) {
                                    return n < 0 || n >= t.length ? null : e._fontToPtr(t[n])
                                }
                                ,
                                e._wireFallbackProc = function () {
                                    r.RuntimeLoader.getInstance(function (t) {
                                        var n = e._fallbackFontCallback;
                                        n ? t.setFallbackFontCallback(function (t, r, i) {
                                            var a = n(t, i);
                                            return a ? Array.isArray(a) ? e._getFallbackPtr(a, r) : 0 === r ? e._fontToPtr(a) : null : null
                                        }) : t.setFallbackFontCallback(null)
                                    })
                                }
                                ,
                                e._fallbackFontCallback = null,
                                e
                        }()
                }
            ], eh = {};
            function ef(e) {
                var t = eh[e];
                if (void 0 !== t)
                    return t.exports;
                var n = eh[e] = {
                    exports: {}
                };
                return ec[e](n, n.exports, ef),
                    n.exports
            }
            ef.d = (e, t) => {
                for (var n in t)
                    ef.o(t, n) && !ef.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
            }
                ,
                ef.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                ef.r = e => {
                    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                }
                ;
            var ed = {};
            return ef.r(ed),
                ef.d(ed, {
                    Alignment: () => t,
                    DataEnum: () => H,
                    DataType: () => u,
                    DrawOptimizationOptions: () => n,
                    EventType: () => a,
                    Fit: () => e,
                    Layout: () => C,
                    LoopType: () => o,
                    Rive: () => N,
                    RiveEventType: () => i,
                    RiveFile: () => U,
                    RiveFont: () => f.RiveFont,
                    RuntimeLoader: () => h.RuntimeLoader,
                    StateMachineInput: () => P,
                    StateMachineInputType: () => r,
                    Testing: () => eo,
                    ViewModel: () => $,
                    ViewModelInstance: () => X,
                    ViewModelInstanceArtboard: () => er,
                    ViewModelInstanceAssetImage: () => en,
                    ViewModelInstanceBoolean: () => K,
                    ViewModelInstanceColor: () => et,
                    ViewModelInstanceEnum: () => Q,
                    ViewModelInstanceList: () => ee,
                    ViewModelInstanceNumber: () => J,
                    ViewModelInstanceString: () => q,
                    ViewModelInstanceTrigger: () => Z,
                    ViewModelInstanceValue: () => G,
                    decodeAudio: () => es,
                    decodeFont: () => el,
                    decodeImage: () => eu
                }),
                c = ef(1),
                h = ef(3),
                f = ef(6),
                d = function (e, t) {
                    return (d = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function (e, t) {
                        e.__proto__ = t
                    }
                        || function (e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                    )(e, t)
                }
                ,
                p = function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    d(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
                ,
                v = function () {
                    return (v = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ,
                m = function (e, t, n, r) {
                    return new (n || (n = Promise))(function (i, a) {
                        function o(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }
                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }
                        function u(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                e(t)
                            }
                            )).then(o, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }
                    )
                }
                ,
                b = function (e, t) {
                    var n, r, i, a = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0])
                                throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    }, o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return o.next = s(0),
                        o.throw = s(1),
                        o.return = s(2),
                        "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }
                        ),
                        o;
                    function s(s) {
                        return function (u) {
                            var l = [s, u];
                            if (n)
                                throw TypeError("Generator is already executing.");
                            for (; o && (o = 0,
                                l[0] && (a = 0)),
                                a;)
                                try {
                                    if (n = 1,
                                        r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, l[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (l = [2 & l[0], i.value]),
                                    l[0]) {
                                        case 0:
                                        case 1:
                                            i = l;
                                            break;
                                        case 4:
                                            return a.label++,
                                            {
                                                value: l[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                                r = l[1],
                                                l = [0];
                                            continue;
                                        case 7:
                                            l = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                                a.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && a.label < i[1]) {
                                                a.label = i[1],
                                                    i = l;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2],
                                                    a.ops.push(l);
                                                break
                                            }
                                            i[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    l = t.call(e, a)
                                } catch (e) {
                                    l = [6, e],
                                        r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }
                    }
                }
                ,
                g = function (e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, i = 0, a = t.length; i < a; i++)
                            !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                                r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                }
                ,
                y = function (e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isHandledError = !0,
                            t
                    }
                    return p(t, e),
                        t
                }(Error),
                (w = e || (e = {})).Cover = "cover",
                w.Contain = "contain",
                w.Fill = "fill",
                w.FitWidth = "fitWidth",
                w.FitHeight = "fitHeight",
                w.None = "none",
                w.ScaleDown = "scaleDown",
                w.Layout = "layout",
                (_ = t || (t = {})).Center = "center",
                _.TopLeft = "topLeft",
                _.TopCenter = "topCenter",
                _.TopRight = "topRight",
                _.CenterLeft = "centerLeft",
                _.CenterRight = "centerRight",
                _.BottomLeft = "bottomLeft",
                _.BottomCenter = "bottomCenter",
                _.BottomRight = "bottomRight",
                (A = n || (n = {})).AlwaysDraw = "alwaysDraw",
                A.DrawOnChanged = "drawOnChanged",
                C = function () {
                    function n(n) {
                        var r, i, a, o, s, u, l;
                        this.fit = null != (r = null == n ? void 0 : n.fit) ? r : e.Contain,
                            this.alignment = null != (i = null == n ? void 0 : n.alignment) ? i : t.Center,
                            this.layoutScaleFactor = null != (a = null == n ? void 0 : n.layoutScaleFactor) ? a : 1,
                            this.minX = null != (o = null == n ? void 0 : n.minX) ? o : 0,
                            this.minY = null != (s = null == n ? void 0 : n.minY) ? s : 0,
                            this.maxX = null != (u = null == n ? void 0 : n.maxX) ? u : 0,
                            this.maxY = null != (l = null == n ? void 0 : n.maxY) ? l : 0
                    }
                    return n.new = function (e) {
                        var t = e.fit
                            , r = e.alignment
                            , i = e.minX
                            , a = e.minY
                            , o = e.maxX
                            , s = e.maxY;
                        return console.warn("This function is deprecated: please use `new Layout({})` instead"),
                            new n({
                                fit: t,
                                alignment: r,
                                minX: i,
                                minY: a,
                                maxX: o,
                                maxY: s
                            })
                    }
                        ,
                        n.prototype.copyWith = function (e) {
                            var t = e.fit
                                , r = e.alignment
                                , i = e.layoutScaleFactor
                                , a = e.minX
                                , o = e.minY
                                , s = e.maxX
                                , u = e.maxY;
                            return new n({
                                fit: null != t ? t : this.fit,
                                alignment: null != r ? r : this.alignment,
                                layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                                minX: null != a ? a : this.minX,
                                minY: null != o ? o : this.minY,
                                maxX: null != s ? s : this.maxX,
                                maxY: null != u ? u : this.maxY
                            })
                        }
                        ,
                        n.prototype.runtimeFit = function (t) {
                            var n;
                            return this.cachedRuntimeFit ? this.cachedRuntimeFit : (n = this.fit === e.Cover ? t.Fit.cover : this.fit === e.Contain ? t.Fit.contain : this.fit === e.Fill ? t.Fit.fill : this.fit === e.FitWidth ? t.Fit.fitWidth : this.fit === e.FitHeight ? t.Fit.fitHeight : this.fit === e.ScaleDown ? t.Fit.scaleDown : this.fit === e.Layout ? t.Fit.layout : t.Fit.none,
                                this.cachedRuntimeFit = n,
                                n)
                        }
                        ,
                        n.prototype.runtimeAlignment = function (e) {
                            var n;
                            return this.cachedRuntimeAlignment ? this.cachedRuntimeAlignment : (n = this.alignment === t.TopLeft ? e.Alignment.topLeft : this.alignment === t.TopCenter ? e.Alignment.topCenter : this.alignment === t.TopRight ? e.Alignment.topRight : this.alignment === t.CenterLeft ? e.Alignment.centerLeft : this.alignment === t.CenterRight ? e.Alignment.centerRight : this.alignment === t.BottomLeft ? e.Alignment.bottomLeft : this.alignment === t.BottomCenter ? e.Alignment.bottomCenter : this.alignment === t.BottomRight ? e.Alignment.bottomRight : e.Alignment.center,
                                this.cachedRuntimeAlignment = n,
                                n)
                        }
                        ,
                        n
                }(),
                (M = r || (r = {}))[M.Number = 56] = "Number",
                M[M.Trigger = 58] = "Trigger",
                M[M.Boolean = 59] = "Boolean",
                P = function () {
                    function e(e, t) {
                        this.type = e,
                            this.runtimeInput = t
                    }
                    return Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this.runtimeInput.name
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        Object.defineProperty(e.prototype, "value", {
                            get: function () {
                                return this.runtimeInput.value
                            },
                            set: function (e) {
                                this.runtimeInput.value = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.fire = function () {
                            this.type === r.Trigger && this.runtimeInput.fire()
                        }
                        ,
                        e.prototype.delete = function () {
                            this.runtimeInput = null
                        }
                        ,
                        e
                }(),
                (R = i || (i = {}))[R.General = 128] = "General",
                R[R.OpenUrl = 131] = "OpenUrl",
                I = function (e) {
                    function t(t, n) {
                        var r = e.call(this, !1) || this;
                        return r.nativeArtboard = t,
                            r.file = n,
                            r
                    }
                    return p(t, e),
                        t
                }(E = function (e) {
                    this.isBindableArtboard = !1,
                        this.isBindableArtboard = e
                }
                ),
                k = function (e) {
                    function t(t) {
                        var n = e.call(this, !0) || this;
                        return n.selfUnref = !1,
                            n.nativeArtboard = t,
                            n
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "viewModel", {
                            set: function (e) {
                                this.nativeViewModel = e.nativeInstance
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.destroy = function () {
                            var e;
                            this.selfUnref && (this.nativeArtboard.unref(),
                                null == (e = this.nativeViewModel) || e.unref())
                        }
                        ,
                        t
                }(E),
                F = function () {
                    function e(e, t, n, r) {
                        this.stateMachine = e,
                            this.playing = n,
                            this.artboard = r,
                            this.inputs = [],
                            this.instance = new t.StateMachineInstance(e, r),
                            this.initInputs(t)
                    }
                    return Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this.stateMachine.name
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        Object.defineProperty(e.prototype, "statesChanged", {
                            get: function () {
                                for (var e = [], t = 0; t < this.instance.stateChangedCount(); t++)
                                    e.push(this.instance.stateChangedNameByIndex(t));
                                return e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.advance = function (e) {
                            this.instance.advance(e)
                        }
                        ,
                        e.prototype.advanceAndApply = function (e) {
                            this.instance.advanceAndApply(e)
                        }
                        ,
                        e.prototype.reportedEventCount = function () {
                            return this.instance.reportedEventCount()
                        }
                        ,
                        e.prototype.reportedEventAt = function (e) {
                            return this.instance.reportedEventAt(e)
                        }
                        ,
                        e.prototype.initInputs = function (e) {
                            for (var t = 0; t < this.instance.inputCount(); t++) {
                                var n = this.instance.input(t);
                                this.inputs.push(this.mapRuntimeInput(n, e))
                            }
                        }
                        ,
                        e.prototype.mapRuntimeInput = function (e, t) {
                            return e.type === t.SMIInput.bool ? new P(r.Boolean, e.asBool()) : e.type === t.SMIInput.number ? new P(r.Number, e.asNumber()) : e.type === t.SMIInput.trigger ? new P(r.Trigger, e.asTrigger()) : void 0
                        }
                        ,
                        e.prototype.cleanup = function () {
                            this.inputs.forEach(function (e) {
                                e.delete()
                            }),
                                this.inputs.length = 0,
                                this.instance.delete()
                        }
                        ,
                        e.prototype.bindViewModelInstance = function (e) {
                            null != e.runtimeInstance && this.instance.bindViewModelInstance(e.runtimeInstance)
                        }
                        ,
                        e
                }(),
                T = function () {
                    function e(e, t, n, r, i) {
                        void 0 === r && (r = []),
                            void 0 === i && (i = []),
                            this.runtime = e,
                            this.artboard = t,
                            this.eventManager = n,
                            this.animations = r,
                            this.stateMachines = i
                    }
                    return e.prototype.add = function (e, t, n) {
                        if (void 0 === n && (n = !0),
                            0 === (e = ea(e)).length)
                            this.animations.forEach(function (e) {
                                return e.playing = t
                            }),
                                this.stateMachines.forEach(function (e) {
                                    return e.playing = t
                                });
                        else
                            for (var r = this.animations.map(function (e) {
                                return e.name
                            }), i = this.stateMachines.map(function (e) {
                                return e.name
                            }), o = 0; o < e.length; o++) {
                                var s = r.indexOf(e[o])
                                    , u = i.indexOf(e[o]);
                                if (s >= 0 || u >= 0)
                                    s >= 0 ? this.animations[s].playing = t : this.stateMachines[u].playing = t;
                                else {
                                    var l = this.artboard.animationByName(e[o]);
                                    if (l) {
                                        var h = new c.Animation(l, this.artboard, this.runtime, t);
                                        h.advance(0),
                                            h.apply(1),
                                            this.animations.push(h)
                                    } else {
                                        var f = this.artboard.stateMachineByName(e[o]);
                                        if (f) {
                                            var d = new F(f, this.runtime, t, this.artboard);
                                            this.stateMachines.push(d)
                                        }
                                    }
                                }
                            }
                        return n && (t ? this.eventManager.fire({
                            type: a.Play,
                            data: this.playing
                        }) : this.eventManager.fire({
                            type: a.Pause,
                            data: this.paused
                        })),
                            t ? this.playing : this.paused
                    }
                        ,
                        e.prototype.initLinearAnimations = function (e, t) {
                            for (var n = this.animations.map(function (e) {
                                return e.name
                            }), r = 0; r < e.length; r++) {
                                var i = n.indexOf(e[r]);
                                if (i >= 0)
                                    this.animations[i].playing = t;
                                else {
                                    var a = this.artboard.animationByName(e[r]);
                                    if (a) {
                                        var o = new c.Animation(a, this.artboard, this.runtime, t);
                                        o.advance(0),
                                            o.apply(1),
                                            this.animations.push(o)
                                    } else
                                        console.error("Animation with name ".concat(e[r], " not found."))
                                }
                            }
                        }
                        ,
                        e.prototype.initStateMachines = function (e, t) {
                            for (var n = this.stateMachines.map(function (e) {
                                return e.name
                            }), r = 0; r < e.length; r++) {
                                var i = n.indexOf(e[r]);
                                if (i >= 0)
                                    this.stateMachines[i].playing = t;
                                else {
                                    var a = this.artboard.stateMachineByName(e[r]);
                                    if (a) {
                                        var o = new F(a, this.runtime, t, this.artboard);
                                        this.stateMachines.push(o)
                                    } else
                                        console.warn("State Machine with name ".concat(e[r], " not found.")),
                                            this.initLinearAnimations([e[r]], t)
                                }
                            }
                        }
                        ,
                        e.prototype.play = function (e) {
                            return this.add(e, !0)
                        }
                        ,
                        e.prototype.advanceIfPaused = function () {
                            this.stateMachines.forEach(function (e) {
                                e.playing || e.advanceAndApply(0)
                            })
                        }
                        ,
                        e.prototype.pause = function (e) {
                            return this.add(e, !1)
                        }
                        ,
                        e.prototype.scrub = function (e, t) {
                            var n = this.animations.filter(function (t) {
                                return e.includes(t.name)
                            });
                            return n.forEach(function (e) {
                                return e.scrubTo = t
                            }),
                                n.map(function (e) {
                                    return e.name
                                })
                        }
                        ,
                        Object.defineProperty(e.prototype, "playing", {
                            get: function () {
                                return this.animations.filter(function (e) {
                                    return e.playing
                                }).map(function (e) {
                                    return e.name
                                }).concat(this.stateMachines.filter(function (e) {
                                    return e.playing
                                }).map(function (e) {
                                    return e.name
                                }))
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "paused", {
                            get: function () {
                                return this.animations.filter(function (e) {
                                    return !e.playing
                                }).map(function (e) {
                                    return e.name
                                }).concat(this.stateMachines.filter(function (e) {
                                    return !e.playing
                                }).map(function (e) {
                                    return e.name
                                }))
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.stop = function (e) {
                            var t = this;
                            e = ea(e);
                            var n = [];
                            if (0 === e.length)
                                n = this.animations.map(function (e) {
                                    return e.name
                                }).concat(this.stateMachines.map(function (e) {
                                    return e.name
                                })),
                                    this.animations.forEach(function (e) {
                                        return e.cleanup()
                                    }),
                                    this.stateMachines.forEach(function (e) {
                                        return e.cleanup()
                                    }),
                                    this.animations.splice(0, this.animations.length),
                                    this.stateMachines.splice(0, this.stateMachines.length);
                            else {
                                var r = this.animations.filter(function (t) {
                                    return e.includes(t.name)
                                });
                                r.forEach(function (e) {
                                    e.cleanup(),
                                        t.animations.splice(t.animations.indexOf(e), 1)
                                });
                                var i = this.stateMachines.filter(function (t) {
                                    return e.includes(t.name)
                                });
                                i.forEach(function (e) {
                                    e.cleanup(),
                                        t.stateMachines.splice(t.stateMachines.indexOf(e), 1)
                                }),
                                    n = r.map(function (e) {
                                        return e.name
                                    }).concat(i.map(function (e) {
                                        return e.name
                                    }))
                            }
                            return this.eventManager.fire({
                                type: a.Stop,
                                data: n
                            }),
                                n
                        }
                        ,
                        Object.defineProperty(e.prototype, "isPlaying", {
                            get: function () {
                                return this.animations.reduce(function (e, t) {
                                    return e || t.playing
                                }, !1) || this.stateMachines.reduce(function (e, t) {
                                    return e || t.playing
                                }, !1)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "isPaused", {
                            get: function () {
                                return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "isStopped", {
                            get: function () {
                                return 0 === this.animations.length && 0 === this.stateMachines.length
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.atLeastOne = function (e, t) {
                            var n;
                            return void 0 === t && (t = !0),
                                0 === this.animations.length && 0 === this.stateMachines.length && (this.artboard.animationCount() > 0 ? this.add([n = this.artboard.animationByIndex(0).name], e, t) : this.artboard.stateMachineCount() > 0 && this.add([n = this.artboard.stateMachineByIndex(0).name], e, t)),
                                n
                        }
                        ,
                        e.prototype.handleLooping = function () {
                            for (var e = 0, t = this.animations.filter(function (e) {
                                return e.playing
                            }); e < t.length; e++) {
                                var n = t[e];
                                0 === n.loopValue && n.loopCount ? (n.loopCount = 0,
                                    this.stop(n.name)) : 1 === n.loopValue && n.loopCount ? (this.eventManager.fire({
                                        type: a.Loop,
                                        data: {
                                            animation: n.name,
                                            type: o.Loop
                                        }
                                    }),
                                        n.loopCount = 0) : 2 === n.loopValue && n.loopCount > 1 && (this.eventManager.fire({
                                            type: a.Loop,
                                            data: {
                                                animation: n.name,
                                                type: o.PingPong
                                            }
                                        }),
                                            n.loopCount = 0)
                            }
                        }
                        ,
                        e.prototype.handleStateChanges = function () {
                            for (var e = [], t = 0, n = this.stateMachines.filter(function (e) {
                                return e.playing
                            }); t < n.length; t++) {
                                var r = n[t];
                                e.push.apply(e, r.statesChanged)
                            }
                            e.length > 0 && this.eventManager.fire({
                                type: a.StateChange,
                                data: e
                            })
                        }
                        ,
                        e.prototype.handleAdvancing = function (e) {
                            this.eventManager.fire({
                                type: a.Advance,
                                data: e
                            })
                        }
                        ,
                        e
                }(),
                (L = a || (a = {})).Load = "load",
                L.LoadError = "loaderror",
                L.Play = "play",
                L.Pause = "pause",
                L.Stop = "stop",
                L.Loop = "loop",
                L.Draw = "draw",
                L.Advance = "advance",
                L.StateChange = "statechange",
                L.RiveEvent = "riveevent",
                L.AudioStatusChange = "audiostatuschange",
                (O = o || (o = {})).OneShot = "oneshot",
                O.Loop = "loop",
                O.PingPong = "pingpong",
                x = function () {
                    function e(e) {
                        void 0 === e && (e = []),
                            this.listeners = e
                    }
                    return e.prototype.getListeners = function (e) {
                        return this.listeners.filter(function (t) {
                            return t.type === e
                        })
                    }
                        ,
                        e.prototype.add = function (e) {
                            this.listeners.includes(e) || this.listeners.push(e)
                        }
                        ,
                        e.prototype.remove = function (e) {
                            for (var t = 0; t < this.listeners.length; t++) {
                                var n = this.listeners[t];
                                if (n.type === e.type && n.callback === e.callback) {
                                    this.listeners.splice(t, 1);
                                    break
                                }
                            }
                        }
                        ,
                        e.prototype.removeAll = function (e) {
                            var t = this;
                            e ? this.listeners.filter(function (t) {
                                return t.type === e
                            }).forEach(function (e) {
                                return t.remove(e)
                            }) : this.listeners.splice(0, this.listeners.length)
                        }
                        ,
                        e.prototype.fire = function (e) {
                            this.getListeners(e.type).forEach(function (t) {
                                return t.callback(e)
                            })
                        }
                        ,
                        e
                }(),
                j = function () {
                    function e(e) {
                        this.eventManager = e,
                            this.queue = []
                    }
                    return e.prototype.add = function (e) {
                        this.queue.push(e)
                    }
                        ,
                        e.prototype.process = function () {
                            for (; this.queue.length > 0;) {
                                var e = this.queue.shift();
                                (null == e ? void 0 : e.action) && e.action(),
                                    (null == e ? void 0 : e.event) && this.eventManager.fire(e.event)
                            }
                        }
                        ,
                        e
                }(),
                (S = s || (s = {}))[S.AVAILABLE = 0] = "AVAILABLE",
                S[S.UNAVAILABLE = 1] = "UNAVAILABLE",
                V = new (function (e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t._started = !1,
                            t._enabled = !1,
                            t._status = s.UNAVAILABLE,
                            t
                    }
                    return p(t, e),
                        t.prototype.delay = function (e) {
                            return m(this, void 0, void 0, function () {
                                return b(this, function (t) {
                                    return [2, new Promise(function (t) {
                                        return setTimeout(t, e)
                                    }
                                    )]
                                })
                            })
                        }
                        ,
                        t.prototype.timeout = function () {
                            return m(this, void 0, void 0, function () {
                                return b(this, function (e) {
                                    return [2, new Promise(function (e, t) {
                                        return setTimeout(t, 50)
                                    }
                                    )]
                                })
                            })
                        }
                        ,
                        t.prototype.reportToListeners = function () {
                            this.fire({
                                type: a.AudioStatusChange
                            }),
                                this.removeAll()
                        }
                        ,
                        t.prototype.enableAudio = function () {
                            return m(this, void 0, void 0, function () {
                                return b(this, function (e) {
                                    return this._enabled || (this._enabled = !0,
                                        this._status = s.AVAILABLE,
                                        this.reportToListeners()),
                                        [2]
                                })
                            })
                        }
                        ,
                        t.prototype.testAudio = function () {
                            return m(this, void 0, void 0, function () {
                                return b(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            if (this._status !== s.UNAVAILABLE || null === this._audioContext)
                                                return [3, 4];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]),
                                                [4, Promise.race([this._audioContext.resume(), this.timeout()])];
                                        case 2:
                                            return e.sent(),
                                                this.enableAudio(),
                                                [3, 4];
                                        case 3:
                                            return e.sent(),
                                                [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }
                        ,
                        t.prototype._establishAudio = function () {
                            return m(this, void 0, void 0, function () {
                                return b(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            if (this._started)
                                                return [3, 5];
                                            if (this._started = !0,
                                                "u" > typeof window)
                                                return [3, 1];
                                            return this.enableAudio(),
                                                [3, 5];
                                        case 1:
                                            this._audioContext = new AudioContext,
                                                this.listenForUserAction(),
                                                e.label = 2;
                                        case 2:
                                            if (this._status !== s.UNAVAILABLE)
                                                return [3, 5];
                                            return [4, this.testAudio()];
                                        case 3:
                                            return e.sent(),
                                                [4, this.delay(1e3)];
                                        case 4:
                                            return e.sent(),
                                                [3, 2];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }
                        ,
                        t.prototype.listenForUserAction = function () {
                            var e = this;
                            document.addEventListener("pointerdown", function () {
                                return m(e, void 0, void 0, function () {
                                    return b(this, function (e) {
                                        return this.enableAudio(),
                                            [2]
                                    })
                                })
                            }, {
                                once: !0
                            })
                        }
                        ,
                        t.prototype.establishAudio = function () {
                            return m(this, void 0, void 0, function () {
                                return b(this, function (e) {
                                    return this._establishAudio(),
                                        [2]
                                })
                            })
                        }
                        ,
                        Object.defineProperty(t.prototype, "systemVolume", {
                            get: function () {
                                return this._status === s.UNAVAILABLE ? (this.testAudio(),
                                    0) : 1
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "status", {
                            get: function () {
                                return this._status
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t
                }(x)),
                D = function () {
                    function e() { }
                    return e.prototype.observe = function () { }
                        ,
                        e.prototype.unobserve = function () { }
                        ,
                        e.prototype.disconnect = function () { }
                        ,
                        e
                }(),
                B = globalThis.ResizeObserver || D,
                W = new (function () {
                    function e() {
                        var e = this;
                        this._elementsMap = new Map,
                            this._onObservedEntry = function (t) {
                                var n = e._elementsMap.get(t.target);
                                null !== n ? n.onResize(0 == t.target.clientWidth || 0 == t.target.clientHeight) : e._resizeObserver.unobserve(t.target)
                            }
                            ,
                            this._onObserved = function (t) {
                                t.forEach(e._onObservedEntry)
                            }
                            ,
                            this._resizeObserver = new B(this._onObserved)
                    }
                    return e.prototype.add = function (e, t) {
                        var n = {
                            onResize: t,
                            element: e
                        };
                        return this._elementsMap.set(e, n),
                            this._resizeObserver.observe(e),
                            n
                    }
                        ,
                        e.prototype.remove = function (e) {
                            this._resizeObserver.unobserve(e.element),
                                this._elementsMap.delete(e.element)
                        }
                        ,
                        e
                }()),
                U = function () {
                    function e(e) {
                        this.enableRiveAssetCDN = !0,
                            this.enablePerfMarks = !1,
                            this.referenceCount = 0,
                            this.destroyed = !1,
                            this.selfUnref = !1,
                            this.bindableArtboards = [],
                            this.src = e.src,
                            this.buffer = e.buffer,
                            e.assetLoader && (this.assetLoader = e.assetLoader),
                            this.enableRiveAssetCDN = "boolean" != typeof e.enableRiveAssetCDN || e.enableRiveAssetCDN,
                            this.enablePerfMarks = !!e.enablePerfMarks,
                            this.enablePerfMarks && (h.RuntimeLoader.enablePerfMarks = !0),
                            this.eventManager = new x,
                            e.onLoad && this.on(a.Load, e.onLoad),
                            e.onLoadError && this.on(a.LoadError, e.onLoadError)
                    }
                    return e.prototype.releaseFile = function () {
                        var e;
                        this.selfUnref && (null == (e = this.file) || e.unref()),
                            this.file = null
                    }
                        ,
                        e.prototype.releaseBindableArtboards = function () {
                            this.bindableArtboards.forEach(function (e) {
                                return e.destroy()
                            })
                        }
                        ,
                        e.prototype.initData = function () {
                            return m(this, void 0, void 0, function () {
                                var t, n, r, i;
                                return b(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!(this.src && !this.buffer))
                                                return [3, 2];
                                            return t = this,
                                                [4, ei(this.src)];
                                        case 1:
                                            t.buffer = o.sent(),
                                                o.label = 2;
                                        case 2:
                                            if (this.destroyed)
                                                return [2];
                                            return this.assetLoader && (n = new f.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader).assetLoader),
                                                this.enablePerfMarks && performance.mark("rive:file-load:start"),
                                                r = this,
                                                [4, this.runtime.load(new Uint8Array(this.buffer), n, this.enableRiveAssetCDN)];
                                        case 3:
                                            if (r.file = o.sent(),
                                                this.enablePerfMarks && (performance.mark("rive:file-load:end"),
                                                    performance.measure("rive:file-load", "rive:file-load:start", "rive:file-load:end")),
                                                i = new f.FileFinalizer(this.file),
                                                f.finalizationRegistry.register(this, i),
                                                this.destroyed)
                                                return this.releaseFile(),
                                                    [2];
                                            return null !== this.file ? this.eventManager.fire({
                                                type: a.Load,
                                                data: this
                                            }) : this.fireLoadError(e.fileLoadErrorMessage),
                                                [2]
                                    }
                                })
                            })
                        }
                        ,
                        e.prototype.loadRiveFileBytes = function () {
                            return m(this, void 0, void 0, function () {
                                var e;
                                return b(this, function (t) {
                                    return this.enablePerfMarks && performance.mark("rive:fetch-riv:start"),
                                        e = this.src ? ei(this.src) : Promise.resolve(this.buffer),
                                        this.enablePerfMarks && this.src && e.then(function () {
                                            performance.mark("rive:fetch-riv:end"),
                                                performance.measure("rive:fetch-riv", "rive:fetch-riv:start", "rive:fetch-riv:end")
                                        }),
                                        [2, e]
                                })
                            })
                        }
                        ,
                        e.prototype.loadRuntime = function () {
                            return m(this, void 0, void 0, function () {
                                var e;
                                return b(this, function (t) {
                                    return this.enablePerfMarks && performance.mark("rive:await-wasm:start"),
                                        e = h.RuntimeLoader.awaitInstance(),
                                        this.enablePerfMarks && e.then(function () {
                                            performance.mark("rive:await-wasm:end"),
                                                performance.measure("rive:await-wasm", "rive:await-wasm:start", "rive:await-wasm:end")
                                        }),
                                        [2, e]
                                })
                            })
                        }
                        ,
                        e.prototype.init = function () {
                            return m(this, void 0, void 0, function () {
                                var t, n, r, i;
                                return b(this, function (a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.src && !this.buffer)
                                                return this.fireLoadError(e.missingErrorMessage),
                                                    [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 4, , 5]),
                                                [4, Promise.all([this.loadRiveFileBytes(), this.loadRuntime()])];
                                        case 2:
                                            if (n = (t = a.sent())[0],
                                                r = t[1],
                                                this.destroyed)
                                                return [2];
                                            return this.buffer = n,
                                                this.runtime = r,
                                                this.enablePerfMarks && performance.mark("rive:init-data:start"),
                                                [4, this.initData()];
                                        case 3:
                                            return a.sent(),
                                                this.enablePerfMarks && (performance.mark("rive:init-data:end"),
                                                    performance.measure("rive:init-data", "rive:init-data:start", "rive:init-data:end")),
                                                [3, 5];
                                        case 4:
                                            return i = a.sent(),
                                                this.fireLoadError(i instanceof Error ? i.message : e.fileLoadErrorMessage),
                                                [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }
                        ,
                        e.prototype.fireLoadError = function (e) {
                            throw this.eventManager.fire({
                                type: a.LoadError,
                                data: e
                            }),
                            Error(e)
                        }
                        ,
                        e.prototype.on = function (e, t) {
                            this.eventManager.add({
                                type: e,
                                callback: t
                            })
                        }
                        ,
                        e.prototype.off = function (e, t) {
                            this.eventManager.remove({
                                type: e,
                                callback: t
                            })
                        }
                        ,
                        e.prototype.cleanup = function () {
                            this.referenceCount -= 1,
                                this.referenceCount <= 0 && (this.removeAllRiveEventListeners(),
                                    this.releaseFile(),
                                    this.releaseBindableArtboards(),
                                    this.destroyed = !0)
                        }
                        ,
                        e.prototype.removeAllRiveEventListeners = function (e) {
                            this.eventManager.removeAll(e)
                        }
                        ,
                        e.prototype.getInstance = function () {
                            if (null !== this.file)
                                return this.referenceCount += 1,
                                    this.file
                        }
                        ,
                        e.prototype.destroyIfUnused = function () {
                            this.referenceCount <= 0 && this.cleanup()
                        }
                        ,
                        e.prototype.createBindableArtboard = function (e) {
                            if (null != e) {
                                var t = new k(e);
                                return (0,
                                    f.createFinalization)(t, t.nativeArtboard),
                                    this.bindableArtboards.push(t),
                                    t
                            }
                            return null
                        }
                        ,
                        e.prototype.getArtboard = function (e) {
                            var t = this.file.artboardByName(e);
                            if (null != t)
                                return new I(t, this)
                        }
                        ,
                        e.prototype.getBindableArtboard = function (e) {
                            var t = this.file.bindableArtboardByName(e);
                            return this.createBindableArtboard(t)
                        }
                        ,
                        e.prototype.getDefaultBindableArtboard = function () {
                            var e = this.file.bindableArtboardDefault();
                            return this.createBindableArtboard(e)
                        }
                        ,
                        e.prototype.internalBindableArtboardFromArtboard = function (e) {
                            var t = this.file.internalBindableArtboardFromArtboard(e);
                            return this.createBindableArtboard(t)
                        }
                        ,
                        e.prototype.viewModelByName = function (e) {
                            var t = this.file.viewModelByName(e);
                            return null !== t ? new $(t) : null
                        }
                        ,
                        e.missingErrorMessage = "Rive source file or data buffer required",
                        e.fileLoadErrorMessage = "The file failed to load",
                        e
                }(),
                N = function () {
                    function t(e) {
                        var t, r, i = this;
                        this.loaded = !1,
                            this.destroyed = !1,
                            this._observed = null,
                            this.readyForPlaying = !1,
                            this.artboard = null,
                            this.eventCleanup = null,
                            this.shouldDisableRiveListeners = !1,
                            this.automaticallyHandleEvents = !1,
                            this.dispatchPointerExit = !0,
                            this.enableMultiTouch = !1,
                            this.enableRiveAssetCDN = !0,
                            this._volume = 1,
                            this._artboardWidth = void 0,
                            this._artboardHeight = void 0,
                            this._devicePixelRatioUsed = 1,
                            this._hasZeroSize = !1,
                            this._needsRedraw = !1,
                            this._currentCanvasWidth = 0,
                            this._currentCanvasHeight = 0,
                            this._audioEventListener = null,
                            this._boundDraw = null,
                            this._viewModelInstance = null,
                            this._dataEnums = null,
                            this.drawOptimization = n.DrawOnChanged,
                            this.enablePerfMarks = !1,
                            this.durations = [],
                            this.frameTimes = [],
                            this.frameCount = 0,
                            this.isTouchScrollEnabled = !1,
                            this.onCanvasResize = function (e) {
                                var t = i._hasZeroSize !== e;
                                i._hasZeroSize = e,
                                    e ? i._layout.maxX && i._layout.maxY || i.resizeToCanvas() : t && i.resizeDrawingSurfaceToCanvas()
                            }
                            ,
                            this.renderSecondTimer = 0,
                            this._boundDraw = this.draw.bind(this),
                            this.canvas = e.canvas,
                            e.canvas.constructor === HTMLCanvasElement && (this._observed = W.add(this.canvas, this.onCanvasResize)),
                            this._currentCanvasWidth = this.canvas.width,
                            this._currentCanvasHeight = this.canvas.height,
                            this.src = e.src,
                            this.buffer = e.buffer,
                            this.riveFile = e.riveFile,
                            this.layout = null != (t = e.layout) ? t : new C,
                            this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners,
                            this.isTouchScrollEnabled = !!e.isTouchScrollEnabled,
                            this.automaticallyHandleEvents = !!e.automaticallyHandleEvents,
                            this.dispatchPointerExit = !1 === e.dispatchPointerExit ? e.dispatchPointerExit : this.dispatchPointerExit,
                            this.enableMultiTouch = !!e.enableMultiTouch,
                            this.drawOptimization = null != (r = e.drawingOptions) ? r : this.drawOptimization,
                            this.enableRiveAssetCDN = void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN,
                            this.enablePerfMarks = !!e.enablePerfMarks,
                            this.enablePerfMarks && (h.RuntimeLoader.enablePerfMarks = !0),
                            this.eventManager = new x,
                            e.onLoad && this.on(a.Load, e.onLoad),
                            e.onLoadError && this.on(a.LoadError, e.onLoadError),
                            e.onPlay && this.on(a.Play, e.onPlay),
                            e.onPause && this.on(a.Pause, e.onPause),
                            e.onStop && this.on(a.Stop, e.onStop),
                            e.onLoop && this.on(a.Loop, e.onLoop),
                            e.onStateChange && this.on(a.StateChange, e.onStateChange),
                            e.onAdvance && this.on(a.Advance, e.onAdvance),
                            e.onload && !e.onLoad && this.on(a.Load, e.onload),
                            e.onloaderror && !e.onLoadError && this.on(a.LoadError, e.onloaderror),
                            e.onplay && !e.onPlay && this.on(a.Play, e.onplay),
                            e.onpause && !e.onPause && this.on(a.Pause, e.onpause),
                            e.onstop && !e.onStop && this.on(a.Stop, e.onstop),
                            e.onloop && !e.onLoop && this.on(a.Loop, e.onloop),
                            e.onstatechange && !e.onStateChange && this.on(a.StateChange, e.onstatechange),
                            e.assetLoader && (this.assetLoader = e.assetLoader),
                            this.taskQueue = new j(this.eventManager),
                            this.init({
                                src: this.src,
                                buffer: this.buffer,
                                riveFile: this.riveFile,
                                autoplay: e.autoplay,
                                autoBind: e.autoBind,
                                animations: e.animations,
                                stateMachines: e.stateMachines,
                                artboard: e.artboard,
                                useOffscreenRenderer: e.useOffscreenRenderer
                            })
                    }
                    return Object.defineProperty(t.prototype, "viewModelCount", {
                        get: function () {
                            return this.file.viewModelCount()
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        t.new = function (e) {
                            return console.warn("This function is deprecated: please use `new Rive({})` instead"),
                                new t(e)
                        }
                        ,
                        t.prototype.onSystemAudioChanged = function () {
                            this.volume = this._volume
                        }
                        ,
                        t.prototype.init = function (e) {
                            var n = this
                                , r = e.src
                                , i = e.buffer
                                , a = e.riveFile
                                , o = e.animations
                                , s = e.stateMachines
                                , u = e.artboard
                                , l = e.autoplay
                                , c = void 0 !== l && l
                                , f = e.useOffscreenRenderer
                                , d = void 0 !== f && f
                                , p = e.autoBind
                                , v = void 0 !== p && p;
                            if (!this.destroyed) {
                                if (this.src = r,
                                    this.buffer = i,
                                    this.riveFile = a,
                                    !this.src && !this.buffer && !this.riveFile)
                                    throw new y(t.missingErrorMessage);
                                var m = ea(o)
                                    , b = ea(s);
                                this.loaded = !1,
                                    this.readyForPlaying = !1,
                                    h.RuntimeLoader.awaitInstance().then(function (e) {
                                        n.destroyed || (n.runtime = e,
                                            n.removeRiveListeners(),
                                            n.deleteRiveRenderer(),
                                            n.enablePerfMarks && performance.mark("rive:make-renderer:start"),
                                            n.renderer = n.runtime.makeRenderer(n.canvas, d),
                                            n.enablePerfMarks && (performance.mark("rive:make-renderer:end"),
                                                performance.measure("rive:make-renderer", "rive:make-renderer:start", "rive:make-renderer:end")),
                                            n.canvas.width || n.canvas.height || n.resizeDrawingSurfaceToCanvas(),
                                            n.initData(u, m, b, c, v).then(function (e) {
                                                if (e)
                                                    return n.setupRiveListeners()
                                            }).catch(function (e) {
                                                console.error(e)
                                            }))
                                    }).catch(function (e) {
                                        console.error(e)
                                    })
                            }
                        }
                        ,
                        t.prototype.setupRiveListeners = function (e) {
                            var t = this;
                            if (this.eventCleanup && this.eventCleanup(),
                                !this.shouldDisableRiveListeners) {
                                var n = (this.animator.stateMachines || []).filter(function (e) {
                                    return e.playing && t.runtime.hasListeners(e.instance)
                                }).map(function (e) {
                                    return e.instance
                                })
                                    , r = this.isTouchScrollEnabled
                                    , i = this.dispatchPointerExit
                                    , a = this.enableMultiTouch;
                                e && "isTouchScrollEnabled" in e && (r = e.isTouchScrollEnabled),
                                    this.eventCleanup = (0,
                                        f.registerTouchInteractions)({
                                            canvas: this.canvas,
                                            artboard: this.artboard,
                                            stateMachines: n,
                                            renderer: this.renderer,
                                            rive: this.runtime,
                                            fit: this._layout.runtimeFit(this.runtime),
                                            alignment: this._layout.runtimeAlignment(this.runtime),
                                            isTouchScrollEnabled: r,
                                            dispatchPointerExit: i,
                                            enableMultiTouch: a,
                                            layoutScaleFactor: this._layout.layoutScaleFactor
                                        })
                            }
                        }
                        ,
                        t.prototype.removeRiveListeners = function () {
                            this.eventCleanup && (this.eventCleanup(),
                                this.eventCleanup = null)
                        }
                        ,
                        t.prototype.initializeAudio = function () {
                            var e, t = this;
                            V.status == s.UNAVAILABLE && (this.file.hasAudio || (null == (e = this.artboard) ? void 0 : e.hasAudio) && null === this._audioEventListener) && (this._audioEventListener = {
                                type: a.AudioStatusChange,
                                callback: function () {
                                    return t.onSystemAudioChanged()
                                }
                            },
                                V.add(this._audioEventListener),
                                V.establishAudio())
                        }
                        ,
                        t.prototype.initArtboardSize = function () {
                            this.artboard && (this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width,
                                this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height)
                        }
                        ,
                        t.prototype.initData = function (e, t, n, r, i) {
                            return m(this, void 0, void 0, function () {
                                var o, s, u;
                                return b(this, function (l) {
                                    switch (l.label) {
                                        case 0:
                                            if (l.trys.push([0, 3, , 4]),
                                                null != this.riveFile)
                                                return [3, 2];
                                            return o = new U({
                                                src: this.src,
                                                buffer: this.buffer,
                                                enableRiveAssetCDN: this.enableRiveAssetCDN,
                                                assetLoader: this.assetLoader,
                                                enablePerfMarks: this.enablePerfMarks
                                            }),
                                                this.riveFile = o,
                                                [4, o.init()];
                                        case 1:
                                            if (l.sent(),
                                                this.destroyed)
                                                return o.destroyIfUnused(),
                                                    [2, !1];
                                            l.label = 2;
                                        case 2:
                                            return this.file = this.riveFile.getInstance(),
                                                this.initArtboard(e, t, n, r, i),
                                                this.initArtboardSize(),
                                                this.initializeAudio(),
                                                this.loaded = !0,
                                                this.eventManager.fire({
                                                    type: a.Load,
                                                    data: null != (u = this.src) ? u : "buffer"
                                                }),
                                                this.animator.advanceIfPaused(),
                                                this.readyForPlaying = !0,
                                                this.taskQueue.process(),
                                                this.drawFrame(),
                                                [2, !0];
                                        case 3:
                                            var c;
                                            return console.warn(s = (c = l.sent()) && c.isHandledError ? c.message : "Problem loading file; may be corrupt!"),
                                                this.eventManager.fire({
                                                    type: a.LoadError,
                                                    data: s
                                                }),
                                                [2, Promise.reject(s)];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }
                        ,
                        t.prototype.initArtboard = function (e, t, n, r, i) {
                            if (this.file) {
                                var o, s = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                                if (!s) {
                                    var u = "Invalid artboard name or no default artboard";
                                    console.warn(u),
                                        this.eventManager.fire({
                                            type: a.LoadError,
                                            data: u
                                        });
                                    return
                                }
                                if (this.artboard = s,
                                    s.volume = this._volume * V.systemVolume,
                                    this.animator = new T(this.runtime, this.artboard, this.eventManager),
                                    t.length > 0 || n.length > 0 ? (o = t.concat(n),
                                        this.animator.initLinearAnimations(t, r),
                                        this.animator.initStateMachines(n, r)) : o = [this.animator.atLeastOne(r, !1)],
                                    this.taskQueue.add({
                                        event: {
                                            type: r ? a.Play : a.Pause,
                                            data: o
                                        }
                                    }),
                                    i) {
                                    var l = this.file.defaultArtboardViewModel(s);
                                    if (null !== l) {
                                        var c = l.defaultInstance();
                                        if (null !== c) {
                                            var h = new X(c, null);
                                            (0,
                                                f.createFinalization)(h, h.runtimeInstance),
                                                this.bindViewModelInstance(h)
                                        }
                                    }
                                }
                            }
                        }
                        ,
                        t.prototype.drawFrame = function () {
                            var e, t;
                            (null == (e = null == document ? void 0 : document.timeline) ? void 0 : e.currentTime) ? this.loaded && this.artboard && !this.frameRequestId && (this._boundDraw(document.timeline.currentTime),
                                null == (t = this.runtime) || t.resolveAnimationFrame()) : this.scheduleRendering()
                        }
                        ,
                        t.prototype._canvasSizeChanged = function () {
                            var e = !1;
                            return this.canvas && (this.canvas.width !== this._currentCanvasWidth && (this._currentCanvasWidth = this.canvas.width,
                                e = !0),
                                this.canvas.height !== this._currentCanvasHeight && (this._currentCanvasHeight = this.canvas.height,
                                    e = !0)),
                                e
                        }
                        ,
                        t.prototype.draw = function (e, t) {
                            this.frameRequestId = null;
                            var r, o = performance.now();
                            this.lastRenderTime || (this.lastRenderTime = e),
                                this.renderSecondTimer += e - this.lastRenderTime,
                                this.renderSecondTimer > 5e3 && (this.renderSecondTimer = 0,
                                    null == t || t());
                            var s = (e - this.lastRenderTime) / 1e3;
                            this.lastRenderTime = e;
                            for (var u = this.animator.animations.filter(function (e) {
                                return e.playing || e.needsScrub
                            }).sort(function (e) {
                                return e.needsScrub ? -1 : 1
                            }), l = 0; l < u.length; l++) {
                                var c = u[l];
                                c.advance(s),
                                    c.instance.didLoop && (c.loopCount += 1),
                                    c.apply(1)
                            }
                            for (var h = this.animator.stateMachines.filter(function (e) {
                                return e.playing
                            }), d = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1, p = 0; p < h.length; p++) {
                                var v = h[p]
                                    , m = v.reportedEventCount();
                                if (m)
                                    for (var b = 0; b < m; b++) {
                                        var g = v.reportedEventAt(b);
                                        if (g)
                                            if (g.type === i.OpenUrl) {
                                                if (this.eventManager.fire({
                                                    type: a.RiveEvent,
                                                    data: g
                                                }),
                                                    this.automaticallyHandleEvents) {
                                                    var y = document.createElement("a")
                                                        , w = g.url
                                                        , _ = g.target
                                                        , A = (0,
                                                            f.sanitizeUrl)(w);
                                                    w && y.setAttribute("href", A),
                                                        _ && y.setAttribute("target", _),
                                                        A && A !== f.BLANK_URL && y.click()
                                                }
                                            } else
                                                this.eventManager.fire({
                                                    type: a.RiveEvent,
                                                    data: g
                                                })
                                    }
                                d >= 0 && performance.mark("rive:sm-advance:start:f".concat(d)),
                                    v.advanceAndApply(s),
                                    d >= 0 && (performance.mark("rive:sm-advance:end:f".concat(d)),
                                        performance.measure("rive:sm-advance:f".concat(d), "rive:sm-advance:start:f".concat(d), "rive:sm-advance:end:f".concat(d)))
                            }
                            0 == this.animator.stateMachines.length && this.artboard.advance(s);
                            var C = this.renderer;
                            !this._hasZeroSize && (this.drawOptimization == n.AlwaysDraw || this.artboard.didChange() || this._needsRedraw || this._canvasSizeChanged()) && (C.clear(),
                                C.save(),
                                d >= 0 && performance.mark("rive:align-renderer:start:f".concat(d)),
                                this.alignRenderer(),
                                d >= 0 && (performance.mark("rive:align-renderer:end:f".concat(d)),
                                    performance.measure("rive:align-renderer:f".concat(d), "rive:align-renderer:start:f".concat(d), "rive:align-renderer:end:f".concat(d))),
                                d >= 0 && performance.mark("rive:artboard-draw:start:f".concat(d)),
                                this.artboard.draw(C),
                                d >= 0 && (performance.mark("rive:artboard-draw:end:f".concat(d)),
                                    performance.measure("rive:artboard-draw:f".concat(d), "rive:artboard-draw:start:f".concat(d), "rive:artboard-draw:end:f".concat(d))),
                                C.restore(),
                                d >= 0 && performance.mark("rive:renderer-flush:start:f".concat(d)),
                                C.flush(),
                                d >= 0 && (performance.mark("rive:renderer-flush:end:f".concat(d)),
                                    performance.measure("rive:renderer-flush:f".concat(d), "rive:renderer-flush:start:f".concat(d), "rive:renderer-flush:end:f".concat(d))),
                                this._needsRedraw = !1),
                                this.animator.handleLooping(),
                                this.animator.handleStateChanges(),
                                this.animator.handleAdvancing(s),
                                this.frameCount++;
                            var M = performance.now();
                            for (this.frameTimes.push(M),
                                this.durations.push(M - o); this.frameTimes[0] <= M - 1e3;)
                                this.frameTimes.shift(),
                                    this.durations.shift();
                            null == (r = this._viewModelInstance) || r.handleCallbacks(),
                                this.animator.isPlaying ? this.scheduleRendering() : this.animator.isPaused ? this.lastRenderTime = 0 : this.animator.isStopped && (this.lastRenderTime = 0)
                        }
                        ,
                        t.prototype.alignRenderer = function () {
                            var e = this.renderer
                                , t = this.runtime
                                , n = this._layout
                                , r = this.artboard;
                            e.align(n.runtimeFit(t), n.runtimeAlignment(t), {
                                minX: n.minX,
                                minY: n.minY,
                                maxX: n.maxX,
                                maxY: n.maxY
                            }, r.bounds, this._devicePixelRatioUsed * n.layoutScaleFactor)
                        }
                        ,
                        Object.defineProperty(t.prototype, "fps", {
                            get: function () {
                                return this.durations.length
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "frameTime", {
                            get: function () {
                                return 0 === this.durations.length ? 0 : (this.durations.reduce(function (e, t) {
                                    return e + t
                                }, 0) / this.durations.length).toFixed(4)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.cleanup = function () {
                            var e, t;
                            this.destroyed = !0,
                                this.stopRendering(),
                                this.cleanupInstances(),
                                null !== this._observed && W.remove(this._observed),
                                this.removeRiveListeners(),
                                this.file && (null == (e = this.riveFile) || e.cleanup(),
                                    this.file = null),
                                this.riveFile = null,
                                this.deleteRiveRenderer(),
                                null !== this._audioEventListener && (V.remove(this._audioEventListener),
                                    this._audioEventListener = null),
                                null == (t = this._viewModelInstance) || t.cleanup(),
                                this._viewModelInstance = null,
                                this._dataEnums = null
                        }
                        ,
                        t.prototype.deleteRiveRenderer = function () {
                            var e;
                            null == (e = this.renderer) || e.delete(),
                                this.renderer = null
                        }
                        ,
                        t.prototype.cleanupInstances = function () {
                            null !== this.eventCleanup && this.eventCleanup(),
                                this.stop(),
                                this.artboard && (this.artboard.delete(),
                                    this.artboard = null)
                        }
                        ,
                        t.prototype.retrieveTextRun = function (e) {
                            if (!e)
                                return void console.warn("No text run name provided");
                            if (!this.artboard)
                                return void console.warn("Tried to access text run, but the Artboard is null");
                            var t, n = this.artboard.textRun(e);
                            return n || void console.warn("Could not access a text run with name '".concat(e, "' in the '").concat(null == (t = this.artboard) ? void 0 : t.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."))
                        }
                        ,
                        t.prototype.getTextRunValue = function (e) {
                            var t = this.retrieveTextRun(e);
                            return t ? t.text : void 0
                        }
                        ,
                        t.prototype.setTextRunValue = function (e, t) {
                            var n = this.retrieveTextRun(e);
                            n && (n.text = t)
                        }
                        ,
                        t.prototype.play = function (e, t) {
                            var n = this;
                            (e = ea(e),
                                this.readyForPlaying) ? (this.animator.play(e),
                                    this.eventCleanup && this.eventCleanup(),
                                    this.setupRiveListeners(),
                                    this.startRendering()) : this.taskQueue.add({
                                        action: function () {
                                            return n.play(e, t)
                                        }
                                    })
                        }
                        ,
                        t.prototype.pause = function (e) {
                            var t = this;
                            (e = ea(e),
                                this.readyForPlaying) ? (this.eventCleanup && this.eventCleanup(),
                                    this.animator.pause(e)) : this.taskQueue.add({
                                        action: function () {
                                            return t.pause(e)
                                        }
                                    })
                        }
                        ,
                        t.prototype.scrub = function (e, t) {
                            var n = this;
                            (e = ea(e),
                                this.readyForPlaying) ? (this.animator.scrub(e, t || 0),
                                    this.drawFrame()) : this.taskQueue.add({
                                        action: function () {
                                            return n.scrub(e, t)
                                        }
                                    })
                        }
                        ,
                        t.prototype.stop = function (e) {
                            var t = this;
                            (e = ea(e),
                                this.readyForPlaying) ? (this.animator && this.animator.stop(e),
                                    this.eventCleanup && this.eventCleanup()) : this.taskQueue.add({
                                        action: function () {
                                            return t.stop(e)
                                        }
                                    })
                        }
                        ,
                        t.prototype.reset = function (e) {
                            var t, n, r = null == e ? void 0 : e.artboard, i = ea(null == e ? void 0 : e.animations), a = ea(null == e ? void 0 : e.stateMachines), o = null != (t = null == e ? void 0 : e.autoplay) && t, s = null != (n = null == e ? void 0 : e.autoBind) && n;
                            this.cleanupInstances(),
                                this.initArtboard(r, i, a, o, s),
                                this.taskQueue.process()
                        }
                        ,
                        t.prototype.load = function (e) {
                            this.file = null,
                                this.stop(),
                                this.init(e)
                        }
                        ,
                        Object.defineProperty(t.prototype, "layout", {
                            get: function () {
                                return this._layout
                            },
                            set: function (e) {
                                this._layout = e,
                                    e.maxX && e.maxY || this.resizeToCanvas(),
                                    this.loaded && !this.animator.isPlaying && this.drawFrame()
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.resizeToCanvas = function () {
                            this._layout = this.layout.copyWith({
                                minX: 0,
                                minY: 0,
                                maxX: this.canvas.width,
                                maxY: this.canvas.height
                            })
                        }
                        ,
                        t.prototype.resizeDrawingSurfaceToCanvas = function (t) {
                            if (this.canvas instanceof HTMLCanvasElement && window) {
                                var n = this.canvas.getBoundingClientRect()
                                    , r = n.width
                                    , i = n.height
                                    , a = t || window.devicePixelRatio || 1;
                                if (this.devicePixelRatioUsed = a,
                                    this.canvas.width = a * r,
                                    this.canvas.height = a * i,
                                    this._needsRedraw = !0,
                                    this.resizeToCanvas(),
                                    this.drawFrame(),
                                    this.layout.fit === e.Layout) {
                                    var o = this._layout.layoutScaleFactor;
                                    this.artboard.width = r / o,
                                        this.artboard.height = i / o
                                }
                            }
                        }
                        ,
                        Object.defineProperty(t.prototype, "source", {
                            get: function () {
                                return this.src
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "activeArtboard", {
                            get: function () {
                                return this.artboard ? this.artboard.name : ""
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "animationNames", {
                            get: function () {
                                if (!this.loaded || !this.artboard)
                                    return [];
                                for (var e = [], t = 0; t < this.artboard.animationCount(); t++)
                                    e.push(this.artboard.animationByIndex(t).name);
                                return e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "stateMachineNames", {
                            get: function () {
                                if (!this.loaded || !this.artboard)
                                    return [];
                                for (var e = [], t = 0; t < this.artboard.stateMachineCount(); t++)
                                    e.push(this.artboard.stateMachineByIndex(t).name);
                                return e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.stateMachineInputs = function (e) {
                            if (this.loaded) {
                                var t = this.animator.stateMachines.find(function (t) {
                                    return t.name === e
                                });
                                return null == t ? void 0 : t.inputs
                            }
                        }
                        ,
                        t.prototype.retrieveInputAtPath = function (e, t) {
                            if (!e)
                                return void console.warn("No input name provided for path '".concat(t, "'"));
                            if (!this.artboard)
                                return void console.warn("Tried to access input: '".concat(e, "', at path: '").concat(t, "', but the Artboard is null"));
                            var n = this.artboard.inputByPath(e, t);
                            return n || void console.warn("Could not access an input with name: '".concat(e, "', at path:'").concat(t, "'"))
                        }
                        ,
                        t.prototype.setBooleanStateAtPath = function (e, t, n) {
                            var i = this.retrieveInputAtPath(e, n);
                            i && (i.type === r.Boolean ? i.asBool().value = t : console.warn("Input with name: '".concat(e, "', at path:'").concat(n, "' is not a boolean")))
                        }
                        ,
                        t.prototype.setNumberStateAtPath = function (e, t, n) {
                            var i = this.retrieveInputAtPath(e, n);
                            i && (i.type === r.Number ? i.asNumber().value = t : console.warn("Input with name: '".concat(e, "', at path:'").concat(n, "' is not a number")))
                        }
                        ,
                        t.prototype.fireStateAtPath = function (e, t) {
                            var n = this.retrieveInputAtPath(e, t);
                            n && (n.type === r.Trigger ? n.asTrigger().fire() : console.warn("Input with name: '".concat(e, "', at path:'").concat(t, "' is not a trigger")))
                        }
                        ,
                        t.prototype.retrieveTextAtPath = function (e, t) {
                            if (!e)
                                return void console.warn("No text name provided for path '".concat(t, "'"));
                            if (!t)
                                return void console.warn("No path provided for text '".concat(e, "'"));
                            if (!this.artboard)
                                return void console.warn("Tried to access text: '".concat(e, "', at path: '").concat(t, "', but the Artboard is null"));
                            var n = this.artboard.textByPath(e, t);
                            return n || void console.warn("Could not access text with name: '".concat(e, "', at path:'").concat(t, "'"))
                        }
                        ,
                        t.prototype.getTextRunValueAtPath = function (e, t) {
                            var n = this.retrieveTextAtPath(e, t);
                            return n ? n.text : void console.warn("Could not get text with name: '".concat(e, "', at path:'").concat(t, "'"))
                        }
                        ,
                        t.prototype.setTextRunValueAtPath = function (e, t, n) {
                            var r = this.retrieveTextAtPath(e, n);
                            r ? r.text = t : console.warn("Could not set text with name: '".concat(e, "', at path:'").concat(n, "'"))
                        }
                        ,
                        Object.defineProperty(t.prototype, "playingStateMachineNames", {
                            get: function () {
                                return this.loaded ? this.animator.stateMachines.filter(function (e) {
                                    return e.playing
                                }).map(function (e) {
                                    return e.name
                                }) : []
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "playingAnimationNames", {
                            get: function () {
                                return this.loaded ? this.animator.animations.filter(function (e) {
                                    return e.playing
                                }).map(function (e) {
                                    return e.name
                                }) : []
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "pausedAnimationNames", {
                            get: function () {
                                return this.loaded ? this.animator.animations.filter(function (e) {
                                    return !e.playing
                                }).map(function (e) {
                                    return e.name
                                }) : []
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "pausedStateMachineNames", {
                            get: function () {
                                return this.loaded ? this.animator.stateMachines.filter(function (e) {
                                    return !e.playing
                                }).map(function (e) {
                                    return e.name
                                }) : []
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "isPlaying", {
                            get: function () {
                                return this.animator.isPlaying
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "isPaused", {
                            get: function () {
                                return this.animator.isPaused
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "isStopped", {
                            get: function () {
                                var e, t;
                                return null == (t = null == (e = this.animator) ? void 0 : e.isStopped) || t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "bounds", {
                            get: function () {
                                return this.artboard ? this.artboard.bounds : void 0
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.on = function (e, t) {
                            this.eventManager.add({
                                type: e,
                                callback: t
                            })
                        }
                        ,
                        t.prototype.off = function (e, t) {
                            this.eventManager.remove({
                                type: e,
                                callback: t
                            })
                        }
                        ,
                        t.prototype.unsubscribe = function (e, t) {
                            console.warn("This function is deprecated: please use `off()` instead."),
                                this.off(e, t)
                        }
                        ,
                        t.prototype.removeAllRiveEventListeners = function (e) {
                            this.eventManager.removeAll(e)
                        }
                        ,
                        t.prototype.unsubscribeAll = function (e) {
                            console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead."),
                                this.removeAllRiveEventListeners(e)
                        }
                        ,
                        t.prototype.stopRendering = function () {
                            this.loaded && this.frameRequestId && (this.runtime.cancelAnimationFrame ? this.runtime.cancelAnimationFrame(this.frameRequestId) : cancelAnimationFrame(this.frameRequestId),
                                this.frameRequestId = null)
                        }
                        ,
                        t.prototype.startRendering = function () {
                            this.drawFrame()
                        }
                        ,
                        t.prototype.scheduleRendering = function () {
                            this.loaded && this.artboard && !this.frameRequestId && (this.runtime.requestAnimationFrame ? this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw) : this.frameRequestId = requestAnimationFrame(this._boundDraw))
                        }
                        ,
                        t.prototype.enableFPSCounter = function (e) {
                            this.runtime.enableFPSCounter(e)
                        }
                        ,
                        t.prototype.disableFPSCounter = function () {
                            this.runtime.disableFPSCounter()
                        }
                        ,
                        Object.defineProperty(t.prototype, "contents", {
                            get: function () {
                                if (this.loaded) {
                                    for (var e = {
                                        artboards: []
                                    }, t = 0; t < this.file.artboardCount(); t++) {
                                        for (var n = this.file.artboardByIndex(t), r = {
                                            name: n.name,
                                            animations: [],
                                            stateMachines: []
                                        }, i = 0; i < n.animationCount(); i++) {
                                            var a = n.animationByIndex(i);
                                            r.animations.push(a.name)
                                        }
                                        for (var o = 0; o < n.stateMachineCount(); o++) {
                                            for (var s = n.stateMachineByIndex(o), u = s.name, l = new this.runtime.StateMachineInstance(s, n), c = [], h = 0; h < l.inputCount(); h++) {
                                                var f = l.input(h);
                                                c.push({
                                                    name: f.name,
                                                    type: f.type
                                                })
                                            }
                                            r.stateMachines.push({
                                                name: u,
                                                inputs: c
                                            })
                                        }
                                        e.artboards.push(r)
                                    }
                                    return e
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "volume", {
                            get: function () {
                                return this.artboard && this.artboard.volume !== this._volume && (this._volume = this.artboard.volume),
                                    this._volume
                            },
                            set: function (e) {
                                this._volume = e,
                                    this.artboard && (this.artboard.volume = e * V.systemVolume)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "artboardWidth", {
                            get: function () {
                                var e;
                                return this.artboard ? this.artboard.width : null != (e = this._artboardWidth) ? e : 0
                            },
                            set: function (e) {
                                this._artboardWidth = e,
                                    this.artboard && (this.artboard.width = e)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "artboardHeight", {
                            get: function () {
                                var e;
                                return this.artboard ? this.artboard.height : null != (e = this._artboardHeight) ? e : 0
                            },
                            set: function (e) {
                                this._artboardHeight = e,
                                    this.artboard && (this.artboard.height = e)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.resetArtboardSize = function () {
                            this.artboard ? (this.artboard.resetArtboardSize(),
                                this._artboardWidth = this.artboard.width,
                                this._artboardHeight = this.artboard.height) : (this._artboardWidth = void 0,
                                    this._artboardHeight = void 0)
                        }
                        ,
                        Object.defineProperty(t.prototype, "devicePixelRatioUsed", {
                            get: function () {
                                return this._devicePixelRatioUsed
                            },
                            set: function (e) {
                                this._devicePixelRatioUsed = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.bindViewModelInstance = function (e) {
                            var t;
                            this.artboard && !this.destroyed && e && e.runtimeInstance && (e.internalIncrementReferenceCount(),
                                null == (t = this._viewModelInstance) || t.cleanup(),
                                this._viewModelInstance = e,
                                this.animator.stateMachines.length > 0 ? this.animator.stateMachines.forEach(function (t) {
                                    return t.bindViewModelInstance(e)
                                }) : this.artboard.bindViewModelInstance(e.runtimeInstance))
                        }
                        ,
                        Object.defineProperty(t.prototype, "viewModelInstance", {
                            get: function () {
                                return this._viewModelInstance
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.viewModelByIndex = function (e) {
                            var t = this.file.viewModelByIndex(e);
                            return null !== t ? new $(t) : null
                        }
                        ,
                        t.prototype.viewModelByName = function (e) {
                            var t;
                            return null == (t = this.riveFile) ? void 0 : t.viewModelByName(e)
                        }
                        ,
                        t.prototype.enums = function () {
                            if (null === this._dataEnums) {
                                var e = this.file.enums();
                                this._dataEnums = e.map(function (e) {
                                    return new H(e)
                                })
                            }
                            return this._dataEnums
                        }
                        ,
                        t.prototype.defaultViewModel = function () {
                            if (this.artboard) {
                                var e = this.file.defaultArtboardViewModel(this.artboard);
                                if (e)
                                    return new $(e)
                            }
                            return null
                        }
                        ,
                        t.prototype.getArtboard = function (e) {
                            var t, n;
                            return null != (n = null == (t = this.riveFile) ? void 0 : t.getArtboard(e)) ? n : null
                        }
                        ,
                        t.prototype.getBindableArtboard = function (e) {
                            var t, n;
                            return null != (n = null == (t = this.riveFile) ? void 0 : t.getBindableArtboard(e)) ? n : null
                        }
                        ,
                        t.prototype.getDefaultBindableArtboard = function () {
                            var e, t;
                            return null != (t = null == (e = this.riveFile) ? void 0 : e.getDefaultBindableArtboard()) ? t : null
                        }
                        ,
                        t.missingErrorMessage = "Rive source file or data buffer required",
                        t.cleanupErrorMessage = "Attempt to use file after calling cleanup.",
                        t
                }(),
                (z = u || (u = {})).none = "none",
                z.string = "string",
                z.number = "number",
                z.boolean = "boolean",
                z.color = "color",
                z.list = "list",
                z.enumType = "enumType",
                z.trigger = "trigger",
                z.viewModel = "viewModel",
                z.integer = "integer",
                z.listIndex = "listIndex",
                z.image = "image",
                z.artboard = "artboard",
                $ = function () {
                    function e(e) {
                        this._viewModel = e
                    }
                    return Object.defineProperty(e.prototype, "instanceCount", {
                        get: function () {
                            return this._viewModel.instanceCount
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._viewModel.name
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.instanceByIndex = function (e) {
                            var t = this._viewModel.instanceByIndex(e);
                            if (null !== t) {
                                var n = new X(t, null);
                                return (0,
                                    f.createFinalization)(n, t),
                                    n
                            }
                            return null
                        }
                        ,
                        e.prototype.instanceByName = function (e) {
                            var t = this._viewModel.instanceByName(e);
                            if (null !== t) {
                                var n = new X(t, null);
                                return (0,
                                    f.createFinalization)(n, t),
                                    n
                            }
                            return null
                        }
                        ,
                        e.prototype.defaultInstance = function () {
                            var e = this._viewModel.defaultInstance();
                            if (null !== e) {
                                var t = new X(e, null);
                                return (0,
                                    f.createFinalization)(t, e),
                                    t
                            }
                            return null
                        }
                        ,
                        e.prototype.instance = function () {
                            var e = this._viewModel.instance();
                            if (null !== e) {
                                var t = new X(e, null);
                                return (0,
                                    f.createFinalization)(t, e),
                                    t
                            }
                            return null
                        }
                        ,
                        Object.defineProperty(e.prototype, "properties", {
                            get: function () {
                                return this._viewModel.getProperties()
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "instanceNames", {
                            get: function () {
                                return this._viewModel.getInstanceNames()
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e
                }(),
                H = function () {
                    function e(e) {
                        this._dataEnum = e
                    }
                    return Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._dataEnum.name
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        Object.defineProperty(e.prototype, "values", {
                            get: function () {
                                return this._dataEnum.values
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e
                }(),
                (Y = l || (l = {})).Number = "number",
                Y.String = "string",
                Y.Boolean = "boolean",
                Y.Color = "color",
                Y.Trigger = "trigger",
                Y.Enum = "enum",
                Y.List = "list",
                Y.Image = "image",
                Y.Artboard = "artboard",
                X = function () {
                    function e(e, t) {
                        this._parents = [],
                            this._children = [],
                            this._viewModelInstances = new Map,
                            this._propertiesWithCallbacks = [],
                            this._referenceCount = 0,
                            this.selfUnref = !1,
                            this._runtimeInstance = e,
                            null !== t && this._parents.push(t)
                    }
                    return Object.defineProperty(e.prototype, "runtimeInstance", {
                        get: function () {
                            return this._runtimeInstance
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        Object.defineProperty(e.prototype, "nativeInstance", {
                            get: function () {
                                return this._runtimeInstance
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.handleCallbacks = function () {
                            0 !== this._propertiesWithCallbacks.length && (this._propertiesWithCallbacks.forEach(function (e) {
                                e.handleCallbacks()
                            }),
                                this._propertiesWithCallbacks.forEach(function (e) {
                                    e.clearChanges()
                                })),
                                this._children.forEach(function (e) {
                                    return e.handleCallbacks()
                                })
                        }
                        ,
                        e.prototype.addParent = function (e) {
                            !this._parents.includes(e) && (this._parents.push(e),
                                (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) && e.addToViewModelCallbacks(this))
                        }
                        ,
                        e.prototype.removeParent = function (e) {
                            var t = this._parents.indexOf(e);
                            -1 !== t && (this._parents[t].removeFromViewModelCallbacks(this),
                                this._parents.splice(t, 1))
                        }
                        ,
                        e.prototype.addToPropertyCallbacks = function (e) {
                            var t = this;
                            !this._propertiesWithCallbacks.includes(e) && (this._propertiesWithCallbacks.push(e),
                                this._propertiesWithCallbacks.length > 0 && this._parents.forEach(function (e) {
                                    e.addToViewModelCallbacks(t)
                                }))
                        }
                        ,
                        e.prototype.removeFromPropertyCallbacks = function (e) {
                            var t = this;
                            this._propertiesWithCallbacks.includes(e) && (this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(function (t) {
                                return t !== e
                            }),
                                0 === this._children.length && 0 === this._propertiesWithCallbacks.length && this._parents.forEach(function (e) {
                                    e.removeFromViewModelCallbacks(t)
                                }))
                        }
                        ,
                        e.prototype.addToViewModelCallbacks = function (e) {
                            var t = this;
                            this._children.includes(e) || (this._children.push(e),
                                this._parents.forEach(function (e) {
                                    e.addToViewModelCallbacks(t)
                                }))
                        }
                        ,
                        e.prototype.removeFromViewModelCallbacks = function (e) {
                            var t = this;
                            this._children.includes(e) && (this._children = this._children.filter(function (t) {
                                return t !== e
                            }),
                                0 === this._children.length && 0 === this._propertiesWithCallbacks.length && this._parents.forEach(function (e) {
                                    e.removeFromViewModelCallbacks(t)
                                }))
                        }
                        ,
                        e.prototype.clearCallbacks = function () {
                            this._propertiesWithCallbacks.forEach(function (e) {
                                e.clearCallbacks()
                            })
                        }
                        ,
                        e.prototype.propertyFromPath = function (e, t) {
                            var n = e.split("/");
                            return this.propertyFromPathSegments(n, 0, t)
                        }
                        ,
                        e.prototype.viewModelFromPathSegments = function (e, t) {
                            var n = this.internalViewModelInstance(e[t]);
                            if (null !== n)
                                if (t == e.length - 1)
                                    return n;
                                else
                                    return n.viewModelFromPathSegments(e, t++);
                            return null
                        }
                        ,
                        e.prototype.propertyFromPathSegments = function (e, t, n) {
                            if (t < e.length - 1) {
                                var r, i, a, o, s, u, c, h, f, d, p, v, m, b, g, y, w, _, A = this.internalViewModelInstance(e[t]);
                                return null !== A ? A.propertyFromPathSegments(e, t + 1, n) : null
                            }
                            var C = null;
                            switch (n) {
                                case l.Number:
                                    if (null !== (C = null != (i = null == (r = this._runtimeInstance) ? void 0 : r.number(e[t])) ? i : null))
                                        return new J(C, this);
                                    break;
                                case l.String:
                                    if (null !== (C = null != (o = null == (a = this._runtimeInstance) ? void 0 : a.string(e[t])) ? o : null))
                                        return new q(C, this);
                                    break;
                                case l.Boolean:
                                    if (null !== (C = null != (u = null == (s = this._runtimeInstance) ? void 0 : s.boolean(e[t])) ? u : null))
                                        return new K(C, this);
                                    break;
                                case l.Color:
                                    if (null !== (C = null != (h = null == (c = this._runtimeInstance) ? void 0 : c.color(e[t])) ? h : null))
                                        return new et(C, this);
                                    break;
                                case l.Trigger:
                                    if (null !== (C = null != (d = null == (f = this._runtimeInstance) ? void 0 : f.trigger(e[t])) ? d : null))
                                        return new Z(C, this);
                                    break;
                                case l.Enum:
                                    if (null !== (C = null != (v = null == (p = this._runtimeInstance) ? void 0 : p.enum(e[t])) ? v : null))
                                        return new Q(C, this);
                                    break;
                                case l.List:
                                    if (null !== (C = null != (b = null == (m = this._runtimeInstance) ? void 0 : m.list(e[t])) ? b : null))
                                        return new ee(C, this);
                                    break;
                                case l.Image:
                                    if (null !== (C = null != (y = null == (g = this._runtimeInstance) ? void 0 : g.image(e[t])) ? y : null))
                                        return new en(C, this);
                                    break;
                                case l.Artboard:
                                    if (null !== (C = null != (_ = null == (w = this._runtimeInstance) ? void 0 : w.artboard(e[t])) ? _ : null))
                                        return new er(C, this)
                            }
                            return null
                        }
                        ,
                        e.prototype.internalViewModelInstance = function (t) {
                            if (this._viewModelInstances.has(t))
                                return this._viewModelInstances.get(t);
                            var n, r = null == (n = this._runtimeInstance) ? void 0 : n.viewModel(t);
                            if (null !== r) {
                                var i = new e(r, this);
                                return (0,
                                    f.createFinalization)(i, r),
                                    i.internalIncrementReferenceCount(),
                                    this._viewModelInstances.set(t, i),
                                    i
                            }
                            return null
                        }
                        ,
                        e.prototype.number = function (e) {
                            return this.propertyFromPath(e, l.Number)
                        }
                        ,
                        e.prototype.string = function (e) {
                            return this.propertyFromPath(e, l.String)
                        }
                        ,
                        e.prototype.boolean = function (e) {
                            return this.propertyFromPath(e, l.Boolean)
                        }
                        ,
                        e.prototype.color = function (e) {
                            return this.propertyFromPath(e, l.Color)
                        }
                        ,
                        e.prototype.trigger = function (e) {
                            return this.propertyFromPath(e, l.Trigger)
                        }
                        ,
                        e.prototype.enum = function (e) {
                            return this.propertyFromPath(e, l.Enum)
                        }
                        ,
                        e.prototype.list = function (e) {
                            return this.propertyFromPath(e, l.List)
                        }
                        ,
                        e.prototype.image = function (e) {
                            return this.propertyFromPath(e, l.Image)
                        }
                        ,
                        e.prototype.artboard = function (e) {
                            return this.propertyFromPath(e, l.Artboard)
                        }
                        ,
                        e.prototype.viewModel = function (e) {
                            var t = e.split("/")
                                , n = t.length > 1 ? this.viewModelFromPathSegments(t.slice(0, t.length - 1), 0) : this;
                            return null != n ? n.internalViewModelInstance(t[t.length - 1]) : null
                        }
                        ,
                        e.prototype.internalReplaceViewModel = function (e, t) {
                            var n;
                            if (null !== t.runtimeInstance) {
                                var r = (null == (n = this._runtimeInstance) ? void 0 : n.replaceViewModel(e, t.runtimeInstance)) || !1;
                                if (r) {
                                    t.internalIncrementReferenceCount();
                                    var i = this.internalViewModelInstance(e);
                                    null !== i && (i.removeParent(this),
                                        this._children.includes(i) && (this._children = this._children.filter(function (e) {
                                            return e !== i
                                        })),
                                        i.cleanup()),
                                        this._viewModelInstances.set(e, t),
                                        t.addParent(this)
                                }
                                return r
                            }
                            return !1
                        }
                        ,
                        e.prototype.replaceViewModel = function (e, t) {
                            var n, r = e.split("/"), i = r.length > 1 ? this.viewModelFromPathSegments(r.slice(0, r.length - 1), 0) : this;
                            return null != (n = null == i ? void 0 : i.internalReplaceViewModel(r[r.length - 1], t)) && n
                        }
                        ,
                        e.prototype.incrementReferenceCount = function () {
                            var e;
                            this._referenceCount++,
                                null == (e = this._runtimeInstance) || e.incrementReferenceCount()
                        }
                        ,
                        e.prototype.decrementReferenceCount = function () {
                            var e;
                            this._referenceCount--,
                                null == (e = this._runtimeInstance) || e.decrementReferenceCount()
                        }
                        ,
                        Object.defineProperty(e.prototype, "properties", {
                            get: function () {
                                var e;
                                return (null == (e = this._runtimeInstance) ? void 0 : e.getProperties().map(function (e) {
                                    return v({}, e)
                                })) || []
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "viewModelName", {
                            get: function () {
                                var e, t;
                                return null != (t = null == (e = this._runtimeInstance) ? void 0 : e.getViewModelName()) ? t : ""
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.internalIncrementReferenceCount = function () {
                            this._referenceCount++
                        }
                        ,
                        e.prototype.cleanup = function () {
                            var e, t = this;
                            if (this._referenceCount--,
                                this._referenceCount <= 0) {
                                this.selfUnref && (null == (e = this._runtimeInstance) || e.unref()),
                                    this._runtimeInstance = null,
                                    this.clearCallbacks(),
                                    this._propertiesWithCallbacks = [],
                                    this._viewModelInstances.forEach(function (e) {
                                        e.cleanup()
                                    }),
                                    this._viewModelInstances.clear();
                                var n = g([], this._children, !0);
                                this._children.length = 0;
                                var r = g([], this._parents, !0);
                                this._parents.length = 0,
                                    n.forEach(function (e) {
                                        e.removeParent(t)
                                    }),
                                    r.forEach(function (e) {
                                        e.removeFromViewModelCallbacks(t)
                                    })
                            }
                        }
                        ,
                        e
                }(),
                q = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "value", {
                            get: function () {
                                return this._viewModelInstanceValue.value
                            },
                            set: function (e) {
                                this._viewModelInstanceValue.value = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.internalHandleCallback = function (e) {
                            e(this.value)
                        }
                        ,
                        t
                }(G = function () {
                    function e(e, t) {
                        this.callbacks = [],
                            this._viewModelInstanceValue = e,
                            this._parentViewModel = t
                    }
                    return e.prototype.on = function (e) {
                        0 === this.callbacks.length && this._viewModelInstanceValue.clearChanges(),
                            this.callbacks.includes(e) || (this.callbacks.push(e),
                                this._parentViewModel.addToPropertyCallbacks(this))
                    }
                        ,
                        e.prototype.off = function (e) {
                            e ? this.callbacks = this.callbacks.filter(function (t) {
                                return t !== e
                            }) : this.callbacks.length = 0,
                                0 === this.callbacks.length && this._parentViewModel.removeFromPropertyCallbacks(this)
                        }
                        ,
                        e.prototype.internalHandleCallback = function (e) { }
                        ,
                        e.prototype.handleCallbacks = function () {
                            var e = this;
                            this._viewModelInstanceValue.hasChanged && this.callbacks.forEach(function (t) {
                                e.internalHandleCallback(t)
                            })
                        }
                        ,
                        e.prototype.clearChanges = function () {
                            this._viewModelInstanceValue.clearChanges()
                        }
                        ,
                        e.prototype.clearCallbacks = function () {
                            this.callbacks.length = 0
                        }
                        ,
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._viewModelInstanceValue.name
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e
                }()),
                J = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "value", {
                            get: function () {
                                return this._viewModelInstanceValue.value
                            },
                            set: function (e) {
                                this._viewModelInstanceValue.value = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.internalHandleCallback = function (e) {
                            e(this.value)
                        }
                        ,
                        t
                }(G),
                K = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "value", {
                            get: function () {
                                return this._viewModelInstanceValue.value
                            },
                            set: function (e) {
                                this._viewModelInstanceValue.value = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.internalHandleCallback = function (e) {
                            e(this.value)
                        }
                        ,
                        t
                }(G),
                Z = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        t.prototype.trigger = function () {
                            return this._viewModelInstanceValue.trigger()
                        }
                        ,
                        t.prototype.internalHandleCallback = function (e) {
                            e()
                        }
                        ,
                        t
                }(G),
                Q = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "value", {
                            get: function () {
                                return this._viewModelInstanceValue.value
                            },
                            set: function (e) {
                                this._viewModelInstanceValue.value = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "valueIndex", {
                            get: function () {
                                return this._viewModelInstanceValue.valueIndex
                            },
                            set: function (e) {
                                this._viewModelInstanceValue.valueIndex = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(t.prototype, "values", {
                            get: function () {
                                return this._viewModelInstanceValue.values
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.internalHandleCallback = function (e) {
                            e(this.value)
                        }
                        ,
                        t
                }(G),
                ee = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "length", {
                            get: function () {
                                return this._viewModelInstanceValue.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.addInstance = function (e) {
                            null != e.runtimeInstance && (this._viewModelInstanceValue.addInstance(e.runtimeInstance),
                                e.addParent(this._parentViewModel))
                        }
                        ,
                        t.prototype.addInstanceAt = function (e, t) {
                            return !!(null != e.runtimeInstance && this._viewModelInstanceValue.addInstanceAt(e.runtimeInstance, t)) && (e.addParent(this._parentViewModel),
                                !0)
                        }
                        ,
                        t.prototype.removeInstance = function (e) {
                            null != e.runtimeInstance && (this._viewModelInstanceValue.removeInstance(e.runtimeInstance),
                                e.removeParent(this._parentViewModel))
                        }
                        ,
                        t.prototype.removeInstanceAt = function (e) {
                            this._viewModelInstanceValue.removeInstanceAt(e)
                        }
                        ,
                        t.prototype.instanceAt = function (e) {
                            var t = this._viewModelInstanceValue.instanceAt(e);
                            if (null != t) {
                                var n = new X(t, this._parentViewModel);
                                return (0,
                                    f.createFinalization)(n, t),
                                    n
                            }
                            return null
                        }
                        ,
                        t.prototype.swap = function (e, t) {
                            this._viewModelInstanceValue.swap(e, t)
                        }
                        ,
                        t.prototype.internalHandleCallback = function (e) {
                            e()
                        }
                        ,
                        t
                }(G),
                et = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "value", {
                            get: function () {
                                return this._viewModelInstanceValue.value
                            },
                            set: function (e) {
                                this._viewModelInstanceValue.value = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.rgb = function (e, t, n) {
                            this._viewModelInstanceValue.rgb(e, t, n)
                        }
                        ,
                        t.prototype.rgba = function (e, t, n, r) {
                            this._viewModelInstanceValue.argb(r, e, t, n)
                        }
                        ,
                        t.prototype.argb = function (e, t, n, r) {
                            this._viewModelInstanceValue.argb(e, t, n, r)
                        }
                        ,
                        t.prototype.alpha = function (e) {
                            this._viewModelInstanceValue.alpha(e)
                        }
                        ,
                        t.prototype.opacity = function (e) {
                            this._viewModelInstanceValue.alpha(Math.round(255 * Math.max(0, Math.min(1, e))))
                        }
                        ,
                        t.prototype.internalHandleCallback = function (e) {
                            e(this.value)
                        }
                        ,
                        t
                }(G),
                en = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "value", {
                            set: function (e) {
                                var t;
                                this._viewModelInstanceValue.value(null != (t = null == e ? void 0 : e.nativeImage) ? t : null)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.internalHandleCallback = function (e) {
                            e()
                        }
                        ,
                        t
                }(G),
                er = function (e) {
                    function t(t, n) {
                        return e.call(this, t, n) || this
                    }
                    return p(t, e),
                        Object.defineProperty(t.prototype, "value", {
                            set: function (e) {
                                var t, n, r;
                                r = e.isBindableArtboard ? e : e.file.internalBindableArtboardFromArtboard(e.nativeArtboard),
                                    this._viewModelInstanceValue.value(null != (t = null == r ? void 0 : r.nativeArtboard) ? t : null),
                                    (null == r ? void 0 : r.nativeViewModel) && this._viewModelInstanceValue.viewModelInstance(null != (n = null == r ? void 0 : r.nativeViewModel) ? n : null)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.internalHandleCallback = function (e) {
                            e()
                        }
                        ,
                        t
                }(G),
                ei = function (e) {
                    return m(void 0, void 0, void 0, function () {
                        return b(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, fetch(new Request(e))];
                                case 1:
                                    return [4, t.sent().arrayBuffer()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }
                ,
                ea = function (e) {
                    return "string" == typeof e ? [e] : e instanceof Array ? e : []
                }
                ,
                eo = {
                    EventManager: x,
                    TaskQueueManager: j
                },
                es = function (e) {
                    return m(void 0, void 0, void 0, function () {
                        var t, n;
                        return b(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return [4, new Promise(function (t) {
                                        return h.RuntimeLoader.getInstance(function (n) {
                                            n.decodeAudio(e, t)
                                        })
                                    }
                                    )];
                                case 1:
                                    return t = r.sent(),
                                        n = new f.AudioWrapper(t),
                                        f.finalizationRegistry.register(n, t),
                                        [2, n]
                            }
                        })
                    })
                }
                ,
                eu = function (e) {
                    return m(void 0, void 0, void 0, function () {
                        var t, n;
                        return b(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return [4, new Promise(function (t) {
                                        return h.RuntimeLoader.getInstance(function (n) {
                                            n.decodeImage(e, t)
                                        })
                                    }
                                    )];
                                case 1:
                                    return t = r.sent(),
                                        n = new f.ImageWrapper(t),
                                        f.finalizationRegistry.register(n, t),
                                        [2, n]
                            }
                        })
                    })
                }
                ,
                el = function (e) {
                    return m(void 0, void 0, void 0, function () {
                        var t, n;
                        return b(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return [4, new Promise(function (t) {
                                        return h.RuntimeLoader.getInstance(function (n) {
                                            n.decodeFont(e, t)
                                        })
                                    }
                                    )];
                                case 1:
                                    return t = r.sent(),
                                        n = new f.FontWrapper(t),
                                        f.finalizationRegistry.register(n, t),
                                        [2, n]
                            }
                        })
                    })
                }
                ,
                ed
        }
        )()
}
    , 85317, (e, t, n) => {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, i = e.r(71645), a = e.r(2933), o = i && "object" == typeof i && "default" in i ? i : {
            default: i
        };
        function s(e) {
            var t = e || u()
                , n = i.useState(t)
                , r = n[0]
                , a = n[1];
            return i.useEffect(function () {
                if ("u" > typeof window && "matchMedia" in window) {
                    var t = function () {
                        a(e || u())
                    }
                        , n = window.matchMedia("screen and (resolution: " + r + "dppx)");
                    return n.hasOwnProperty("addEventListener") ? n.addEventListener("change", t) : n.addListener(t),
                        function () {
                            n.hasOwnProperty("removeEventListener") ? n.removeEventListener("change", t) : n.removeListener(t)
                        }
                }
            }, [r, e]),
                r
        }
        function u() {
            return Math.min(Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1), 3)
        }
        var l = function () {
            function e() { }
            var t = e.prototype;
            return t.observe = function () { }
                ,
                t.unobserve = function () { }
                ,
                t.disconnect = function () { }
                ,
                e
        }()
            , c = globalThis.ResizeObserver || l
            , h = void 0 !== globalThis.ResizeObserver
            , f = !h
            , d = {
                useDevicePixelRatio: !0,
                fitCanvasToArtboardHeight: !1,
                useOffscreenRenderer: !0,
                shouldResizeCanvasToContainer: !0
            };
        function p(e) {
            return Object.assign({}, d, e)
        }
        function v(e) {
            var t, n, r, a, o, u, l, d = e.riveLoaded, v = void 0 !== d && d, m = e.canvasElem, b = e.containerRef, g = e.options, y = e.onCanvasHasResized, w = e.artboardBounds, _ = p(void 0 === g ? {} : g), A = i.useState({
                height: 0,
                width: 0
            }), C = A[0], M = C.height, P = C.width, R = A[1], E = i.useState({
                height: 0,
                width: 0
            }), I = E[0], k = I.height, F = I.width, T = E[1], L = i.useState(!0), O = L[0], x = L[1], j = _.fitCanvasToArtboardHeight, S = _.shouldResizeCanvasToContainer, V = _.useDevicePixelRatio, D = _.customDevicePixelRatio, B = (void 0 === (t = S) && (t = !0),
                r = (n = i.useState({
                    width: 0,
                    height: 0
                }))[0],
                a = n[1],
                i.useEffect(function () {
                    if ("u" > typeof window && t) {
                        var e = function () {
                            a({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        return f && (e(),
                            window.addEventListener("resize", e)),
                            function () {
                                return window.removeEventListener("resize", e)
                            }
                    }
                }, []),
                l = i.useRef(new c((o = function (e) {
                    h && a({
                        width: e[e.length - 1].contentRect.width,
                        height: e[e.length - 1].contentRect.height
                    })
                }
                    ,
                    u = 0,
                    function () {
                        for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++)
                            n[r] = arguments[r];
                        clearTimeout(u),
                            u = window.setTimeout(function () {
                                return o.apply(e, n)
                            }, 0)
                    }
                ))),
                i.useEffect(function () {
                    var e = l.current;
                    if (!t)
                        return void e.disconnect();
                    var n = b.current;
                    return b.current && h && e.observe(b.current),
                        function () {
                            e.disconnect(),
                                n && h && e.unobserve(n)
                        }
                }, [b, l]),
                r), W = s(D), U = null != w ? w : {}, N = U.maxX, z = U.maxY, $ = i.useCallback(function () {
                    var e, t, n, r, i = null != (e = null == (n = b.current) ? void 0 : n.clientWidth) ? e : 0, a = null != (t = null == (r = b.current) ? void 0 : r.clientHeight) ? t : 0;
                    return j && w ? {
                        width: i,
                        height: w.maxY / w.maxX * i
                    } : {
                        width: i,
                        height: a
                    }
                }, [b, j, N, z]);
            i.useEffect(function () {
                if (S && b.current && v) {
                    var e = $()
                        , t = e.width
                        , n = e.height
                        , r = !1;
                    if (m) {
                        var i = t !== P || n !== M;
                        if (_.fitCanvasToArtboardHeight && i && (b.current.style.height = n + "px",
                            r = !0),
                            _.useDevicePixelRatio) {
                            var a = t * W !== F || n * W !== k;
                            if (i || a) {
                                var o = W * t
                                    , s = W * n;
                                m.width = o,
                                    m.height = s,
                                    m.style.width = t + "px",
                                    m.style.height = n + "px",
                                    T({
                                        width: o,
                                        height: s
                                    }),
                                    r = !0
                            }
                        } else
                            i && (m.width = t,
                                m.height = n,
                                T({
                                    width: t,
                                    height: n
                                }),
                                r = !0);
                        R({
                            width: t,
                            height: n
                        })
                    }
                    y && (O || r) && y && y(),
                        O && x(!1)
                }
            }, [m, b, B, W, $, O, x, k, F, M, P, y, S, j, V, v]),
                i.useEffect(function () {
                    T({
                        width: 0,
                        height: 0
                    })
                }, [m])
        }
        var m = function () {
            function e() { }
            var t = e.prototype;
            return t.observe = function () { }
                ,
                t.unobserve = function () { }
                ,
                t.disconnect = function () { }
                ,
                e
        }()
            , b = globalThis.IntersectionObserver || m
            , g = function () {
                function e() {
                    var e = this;
                    this.elementsMap = new Map,
                        this.onObserved = function (t) {
                            t.forEach(function (t) {
                                var n = e.elementsMap.get(t.target);
                                n && n(t)
                            })
                        }
                        ,
                        this.observer = new b(this.onObserved)
                }
                var t = e.prototype;
                return t.registerCallback = function (e, t) {
                    this.observer.observe(e),
                        this.elementsMap.set(e, t)
                }
                    ,
                    t.removeCallback = function (e) {
                        this.observer.unobserve(e),
                            this.elementsMap.delete(e)
                    }
                    ,
                    e
            }()
            , y = function () {
                return r || (r = new g),
                    r
            };
        function w() {
            return (w = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function _(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                    !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
        }
        function A(e) {
            var t = e.setContainerRef
                , n = e.setCanvasRef
                , r = e.className
                , i = void 0 === r ? "" : r
                , a = e.style
                , s = e.children
                , u = _(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"])
                , l = w({
                    width: "100%",
                    height: "100%"
                }, a);
            return o.default.createElement("div", w({
                ref: t,
                className: i
            }, !i && {
                style: l
            }), o.default.createElement("canvas", w({
                ref: n,
                style: {
                    verticalAlign: "top",
                    width: 0,
                    height: 0
                }
            }, u), s))
        }
        function C(e, t) {
            void 0 === t && (t = {});
            var n = i.useState(null)
                , r = n[0]
                , u = n[1]
                , l = i.useRef(null)
                , c = i.useRef(null)
                , h = i.useState(null)
                , f = h[0]
                , d = h[1]
                , m = !!e
                , b = p(t)
                , g = s()
                , C = i.useCallback(function () {
                    if (f) {
                        if (f.layout && f.layout.fit === a.Fit.Layout && r) {
                            var e = g * f.layout.layoutScaleFactor;
                            f.devicePixelRatioUsed = g,
                                f.artboardWidth = (null == r ? void 0 : r.width) / e,
                                f.artboardHeight = (null == r ? void 0 : r.height) / e
                        }
                        f.startRendering(),
                            f.resizeToCanvas()
                    }
                }, [f, g]);
            v({
                riveLoaded: !!f,
                canvasElem: r,
                containerRef: l,
                options: b,
                onCanvasHasResized: C,
                artboardBounds: null == f ? void 0 : f.bounds
            });
            var M = i.useCallback(function (e) {
                null === e && r && (r.height = 0,
                    r.width = 0),
                    u(e)
            }, []);
            i.useEffect(function () {
                if (r && e) {
                    var t, n = null != f;
                    if (null == f) {
                        var i = b.useOffscreenRenderer
                            , o = e.onRiveReady
                            , s = _(e, ["onRiveReady"]);
                        t = new a.Rive(w({
                            useOffscreenRenderer: i
                        }, s, {
                            canvas: r
                        })),
                            null != c.current && c.current.cleanup(),
                            c.current = t,
                            t.on(a.EventType.Load, function () {
                                n = !0,
                                    o && o(t),
                                    r ? d(t) : t.cleanup()
                            })
                    }
                    return function () {
                        n || null == t || t.cleanup()
                    }
                }
            }, [r, m, f]);
            var P = i.useCallback(function (e) {
                l.current = e
            }, [])
                , R = {
                    observe: i.useCallback(function (e, t) {
                        y().registerCallback(e, t)
                    }, []),
                    unobserve: i.useCallback(function (e) {
                        y().removeCallback(e)
                    }, [])
                }
                , E = R.observe
                , I = R.unobserve;
            i.useEffect(function () {
                var e, t = !1, n = function () {
                    if (r && t) {
                        var e = r.getBoundingClientRect();
                        e.width > 0 && e.height > 0 && e.top < (window.innerHeight || document.documentElement.clientHeight) && e.bottom > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.right > 0 && (null == f || f.startRendering(),
                            t = !1)
                    }
                };
                return r && !1 !== b.shouldUseIntersectionObserver && E(r, function (r) {
                    r.isIntersecting ? f && f.startRendering() : f && f.stopRendering(),
                        t = !r.isIntersecting,
                        clearTimeout(e),
                        r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10))
                }),
                    function () {
                        r && I(r)
                    }
            }, [E, I, f, r, b.shouldUseIntersectionObserver]),
                i.useEffect(function () {
                    return function () {
                        f && (f.cleanup(),
                            d(null))
                    }
                }, [f, r]),
                i.useEffect(function () {
                    return function () {
                        null != c.current && c.current.cleanup()
                    }
                }, []);
            var k = null == e ? void 0 : e.animations;
            i.useEffect(function () {
                f && k && (f.isPlaying ? (f.stop(f.animationNames),
                    f.play(k)) : f.isPaused && (f.stop(f.animationNames),
                        f.pause(k)))
            }, [k, f]);
            var F = i.useCallback(function (e) {
                return o.default.createElement(A, w({
                    setContainerRef: P,
                    setCanvasRef: M
                }, e))
            }, [M, P]);
            return {
                canvas: r,
                container: l.current,
                setCanvasRef: M,
                setContainerRef: P,
                rive: f,
                RiveComponent: F
            }
        }
        function M() {
            return (M = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function P(e, t, n) {
            var r = i.useState(null)
                , a = r[0]
                , o = r[1]
                , s = i.useState(n.defaultValue)
                , u = s[0]
                , l = s[1]
                , c = i.useState(null)
                , h = c[0]
                , f = c[1]
                , d = i.useRef(null)
                , p = i.useRef(e)
                , v = i.useRef(n);
            i.useEffect(function () {
                v.current = n
            }, [n]);
            var m = i.useCallback(function () {
                var e = d.current
                    , t = p.current
                    , n = v.current;
                if (!e || !t)
                    return o(null),
                        l(n.defaultValue),
                        f(null),
                        function () { }
                        ;
                var r = n.getProperty(e, t);
                if (r) {
                    o(r),
                        l(n.getValue(r)),
                        n.getExtendedData && f(n.getExtendedData(r));
                    var i = function () {
                        l(n.getValue(r)),
                            n.getExtendedData && f(n.getExtendedData(r)),
                            n.onPropertyEvent && n.onPropertyEvent()
                    };
                    return r.on(i),
                        function () {
                            r.off(i)
                        }
                }
                return function () { }
            }, []);
            i.useEffect(function () {
                return d.current = t,
                    p.current = e,
                    m()
            }, [t, e, m]);
            var b = i.useCallback(function (e) {
                if (a && d.current === t)
                    try {
                        e(a),
                            v.current.getExtendedData && f(v.current.getExtendedData(a));
                        return
                    } catch (e) { }
                if (d.current)
                    try {
                        var n = v.current.getProperty(d.current, p.current);
                        n && (o(n),
                            e(n),
                            v.current.getExtendedData && f(v.current.getExtendedData(n)))
                    } catch (e) { }
            }, [a, t])
                , g = i.useMemo(function () {
                    return v.current.buildPropertyOperations(b)
                }, [b])
                , y = M({
                    value: u
                }, g);
            return n.getExtendedData && (y.extendedData = h),
                y
        }
        function R(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o)
                    , u = s.value
            } catch (e) {
                n(e);
                return
            }
            s.done ? t(u) : Promise.resolve(u).then(r, i)
        }
        n.default = function (e) {
            var t = e.src
                , n = e.artboard
                , r = e.animations
                , i = e.stateMachines
                , a = e.layout
                , s = e.useOffscreenRenderer
                , u = e.shouldDisableRiveListeners
                , l = e.shouldResizeCanvasToContainer
                , c = e.automaticallyHandleEvents
                , h = e.children
                , f = function (e, t) {
                    if (null == e)
                        return {};
                    var n, r, i = {}, a = Object.getOwnPropertyNames(e);
                    for (r = 0; r < a.length; r++)
                        !(t.indexOf(n = a[r]) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i
                }(e, ["src", "artboard", "animations", "stateMachines", "layout", "useOffscreenRenderer", "shouldDisableRiveListeners", "shouldResizeCanvasToContainer", "automaticallyHandleEvents", "children"])
                , d = C({
                    src: t,
                    artboard: n,
                    animations: r,
                    layout: a,
                    stateMachines: i,
                    autoplay: !0,
                    shouldDisableRiveListeners: void 0 !== u && u,
                    automaticallyHandleEvents: void 0 !== c && c
                }, {
                    useOffscreenRenderer: void 0 === s || s,
                    shouldResizeCanvasToContainer: void 0 === l || l
                }).RiveComponent;
            return o.default.createElement(d, f, h)
        }
            ,
            n.useResizeCanvas = v,
            n.useRive = C,
            n.useRiveFile = function (e) {
                var t = i.useState(null)
                    , n = t[0]
                    , r = t[1]
                    , o = i.useState("idle")
                    , s = o[0]
                    , u = o[1];
                return i.useEffect(function () {
                    var t, n = null;
                    return (t = function () {
                        return function (e, t) {
                            var n, r, i, a = {
                                label: 0,
                                sent: function () {
                                    if (1 & i[0])
                                        throw i[1];
                                    return i[1]
                                },
                                trys: [],
                                ops: []
                            }, o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype), s = Object.defineProperty;
                            return s(o, "next", {
                                value: u(0)
                            }),
                                s(o, "throw", {
                                    value: u(1)
                                }),
                                s(o, "return", {
                                    value: u(2)
                                }),
                                "function" == typeof Symbol && s(o, Symbol.iterator, {
                                    value: function () {
                                        return this
                                    }
                                }),
                                o;
                            function u(s) {
                                return function (u) {
                                    var l = [s, u];
                                    if (n)
                                        throw TypeError("Generator is already executing.");
                                    for (; o && (o = 0,
                                        l[0] && (a = 0)),
                                        a;)
                                        try {
                                            if (n = 1,
                                                r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                                    0) : r.next) && !(i = i.call(r, l[1])).done)
                                                return i;
                                            switch (r = 0,
                                            i && (l = [2 & l[0], i.value]),
                                            l[0]) {
                                                case 0:
                                                case 1:
                                                    i = l;
                                                    break;
                                                case 4:
                                                    return a.label++,
                                                    {
                                                        value: l[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++,
                                                        r = l[1],
                                                        l = [0];
                                                    continue;
                                                case 7:
                                                    l = a.ops.pop(),
                                                        a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                                        a.label = l[1];
                                                        break
                                                    }
                                                    if (6 === l[0] && a.label < i[1]) {
                                                        a.label = i[1],
                                                            i = l;
                                                        break
                                                    }
                                                    if (i && a.label < i[2]) {
                                                        a.label = i[2],
                                                            a.ops.push(l);
                                                        break
                                                    }
                                                    i[2] && a.ops.pop(),
                                                        a.trys.pop();
                                                    continue
                                            }
                                            l = t.call(e, a)
                                        } catch (e) {
                                            l = [6, e],
                                                r = 0
                                        } finally {
                                            n = i = 0
                                        }
                                    if (5 & l[0])
                                        throw l[1];
                                    return {
                                        value: l[0] ? l[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function (t) {
                            try {
                                u("loading"),
                                    (n = new a.RiveFile(e)).init(),
                                    n.on(a.EventType.Load, function () {
                                        null == n || n.getInstance(),
                                            r(n),
                                            u("success")
                                    }),
                                    n.on(a.EventType.LoadError, function () {
                                        u("failed")
                                    }),
                                    r(n)
                            } catch (e) {
                                console.error(e),
                                    u("failed")
                            }
                            return [2]
                        })
                    }
                        ,
                        function () {
                            var e = this
                                , n = arguments;
                            return new Promise(function (r, i) {
                                var a = t.apply(e, n);
                                function o(e) {
                                    R(a, r, i, o, s, "next", e)
                                }
                                function s(e) {
                                    R(a, r, i, o, s, "throw", e)
                                }
                                o(void 0)
                            }
                            )
                        }
                    )(),
                        function () {
                            null == n || n.cleanup()
                        }
                }, [e.src, e.buffer]),
                {
                    riveFile: n,
                    status: s
                }
            }
            ,
            n.useStateMachineInput = function (e, t, n, r) {
                var o = i.useState(null)
                    , s = o[0]
                    , u = o[1];
                return i.useEffect(function () {
                    var i = function () {
                        if (e && t && n || u(null),
                            e && t && n) {
                            var i = e.stateMachineInputs(t);
                            if (i) {
                                var a = i.find(function (e) {
                                    return e.name === n
                                });
                                void 0 !== r && a && (a.value = r),
                                    u(a || null)
                            }
                        } else
                            u(null)
                    };
                    i(),
                        e && e.on(a.EventType.Load, function () {
                            i()
                        })
                }, [e]),
                    s
            }
            ,
            n.useViewModel = function (e, t) {
                var n = null != t ? t : {}
                    , r = n.name
                    , o = n.useDefault
                    , s = i.useState(null)
                    , u = s[0]
                    , l = s[1];
                return i.useEffect(function () {
                    var t = function () {
                        e ? l(null != r ? (null == e.viewModelByName ? void 0 : e.viewModelByName.call(e, r)) || null : e.defaultViewModel() || null) : l(null)
                    };
                    return t(),
                        e && e.on(a.EventType.Load, t),
                        function () {
                            e && e.off(a.EventType.Load, t)
                        }
                }, [e, r, void 0 !== o && o]),
                    u
            }
            ,
            n.useViewModelInstance = function (e, t) {
                var n = null != t ? t : {}
                    , r = n.name
                    , a = n.useDefault
                    , o = void 0 !== a && a
                    , s = n.useNew
                    , u = void 0 !== s && s
                    , l = n.rive
                    , c = i.useState(null)
                    , h = c[0]
                    , f = c[1];
                return i.useEffect(function () {
                    if (!e)
                        return void f(null);
                    var t = null;
                    f(t = null != r ? e.instanceByName(r) || null : o ? (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null : u ? (null == e.instance ? void 0 : e.instance.call(e)) || null : (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null),
                        l && t && l.viewModelInstance !== t && l.bindViewModelInstance(t)
                }, [e, r, o, u, l]),
                    h
            }
            ,
            n.useViewModelInstanceArtboard = function (e, t) {
                return {
                    setValue: P(e, t, {
                        getProperty: i.useCallback(function (e, t) {
                            return e.artboard(t)
                        }, []),
                        getValue: i.useCallback(function () { }, []),
                        defaultValue: null,
                        buildPropertyOperations: i.useCallback(function (e) {
                            return {
                                setValue: function (t) {
                                    e(function (e) {
                                        e.value = t
                                    })
                                }
                            }
                        }, [])
                    }).setValue
                }
            }
            ,
            n.useViewModelInstanceBoolean = function (e, t) {
                var n = P(e, t, {
                    getProperty: i.useCallback(function (e, t) {
                        return e.boolean(t)
                    }, []),
                    getValue: i.useCallback(function (e) {
                        return e.value
                    }, []),
                    defaultValue: null,
                    buildPropertyOperations: i.useCallback(function (e) {
                        return {
                            setValue: function (t) {
                                e(function (e) {
                                    e.value = t
                                })
                            }
                        }
                    }, [])
                });
                return {
                    value: n.value,
                    setValue: n.setValue
                }
            }
            ,
            n.useViewModelInstanceColor = function (e, t) {
                var n = P(e, t, {
                    getProperty: i.useCallback(function (e, t) {
                        return e.color(t)
                    }, []),
                    getValue: i.useCallback(function (e) {
                        return e.value
                    }, []),
                    defaultValue: null,
                    buildPropertyOperations: i.useCallback(function (e) {
                        return {
                            setValue: function (t) {
                                e(function (e) {
                                    e.value = t
                                })
                            },
                            setRgb: function (t, n, r) {
                                e(function (e) {
                                    e.rgb(t, n, r)
                                })
                            },
                            setRgba: function (t, n, r, i) {
                                e(function (e) {
                                    e.rgba(t, n, r, i)
                                })
                            },
                            setAlpha: function (t) {
                                e(function (e) {
                                    e.alpha(t)
                                })
                            },
                            setOpacity: function (t) {
                                e(function (e) {
                                    e.opacity(t)
                                })
                            }
                        }
                    }, [])
                });
                return {
                    value: n.value,
                    setValue: n.setValue,
                    setRgb: n.setRgb,
                    setRgba: n.setRgba,
                    setAlpha: n.setAlpha,
                    setOpacity: n.setOpacity
                }
            }
            ,
            n.useViewModelInstanceEnum = function (e, t) {
                var n = P(e, t, {
                    getProperty: i.useCallback(function (e, t) {
                        return e.enum(t)
                    }, []),
                    getValue: i.useCallback(function (e) {
                        return e.value
                    }, []),
                    defaultValue: null,
                    getExtendedData: i.useCallback(function (e) {
                        return e.values
                    }, []),
                    buildPropertyOperations: i.useCallback(function (e) {
                        return {
                            setValue: function (t) {
                                e(function (e) {
                                    e.value = t
                                })
                            }
                        }
                    }, [])
                });
                return {
                    value: n.value,
                    values: n.extendedData || [],
                    setValue: n.setValue
                }
            }
            ,
            n.useViewModelInstanceImage = function (e, t) {
                return {
                    setValue: P(e, t, {
                        getProperty: i.useCallback(function (e, t) {
                            return e.image(t)
                        }, []),
                        getValue: i.useCallback(function () { }, []),
                        defaultValue: null,
                        buildPropertyOperations: i.useCallback(function (e) {
                            return {
                                setValue: function (t) {
                                    e(function (e) {
                                        e.value = t
                                    })
                                }
                            }
                        }, [])
                    }).setValue
                }
            }
            ,
            n.useViewModelInstanceList = function (e, t) {
                var n, r = i.useState(0)[1], a = P(e, t, {
                    getProperty: i.useCallback(function (e, t) {
                        return e.list(t)
                    }, []),
                    getValue: i.useCallback(function (e) {
                        return e.length
                    }, []),
                    defaultValue: null,
                    onPropertyEvent: function () {
                        r(function (e) {
                            return e + 1
                        })
                    },
                    buildPropertyOperations: i.useCallback(function (e) {
                        return {
                            addInstance: function (t) {
                                e(function (e) {
                                    return e.addInstance(t)
                                })
                            },
                            addInstanceAt: function (t, n) {
                                var r = !1;
                                return e(function (e) {
                                    r = e.addInstanceAt(t, n)
                                }),
                                    r
                            },
                            removeInstance: function (t) {
                                e(function (e) {
                                    return e.removeInstance(t)
                                })
                            },
                            removeInstanceAt: function (t) {
                                e(function (e) {
                                    return e.removeInstanceAt(t)
                                })
                            },
                            getInstanceAt: function (t) {
                                var n = null;
                                return e(function (e) {
                                    n = e.instanceAt(t)
                                }),
                                    n
                            },
                            swap: function (t, n) {
                                e(function (e) {
                                    return e.swap(t, n)
                                })
                            }
                        }
                    }, [])
                });
                return {
                    length: null != (n = a.value) ? n : 0,
                    addInstance: a.addInstance,
                    addInstanceAt: a.addInstanceAt,
                    removeInstance: a.removeInstance,
                    removeInstanceAt: a.removeInstanceAt,
                    getInstanceAt: a.getInstanceAt,
                    swap: a.swap
                }
            }
            ,
            n.useViewModelInstanceNumber = function (e, t) {
                var n = P(e, t, {
                    getProperty: i.useCallback(function (e, t) {
                        return e.number(t)
                    }, []),
                    getValue: i.useCallback(function (e) {
                        return e.value
                    }, []),
                    defaultValue: null,
                    buildPropertyOperations: i.useCallback(function (e) {
                        return {
                            setValue: function (t) {
                                e(function (e) {
                                    e.value = t
                                })
                            }
                        }
                    }, [])
                });
                return {
                    value: n.value,
                    setValue: n.setValue
                }
            }
            ,
            n.useViewModelInstanceString = function (e, t) {
                var n = P(e, t, {
                    getProperty: i.useCallback(function (e, t) {
                        return e.string(t)
                    }, []),
                    getValue: i.useCallback(function (e) {
                        return e.value
                    }, []),
                    defaultValue: null,
                    buildPropertyOperations: i.useCallback(function (e) {
                        return {
                            setValue: function (t) {
                                e(function (e) {
                                    e.value = t
                                })
                            }
                        }
                    }, [])
                });
                return {
                    value: n.value,
                    setValue: n.setValue
                }
            }
            ,
            n.useViewModelInstanceTrigger = function (e, t, n) {
                var r = (null != n ? n : {}).onTrigger;
                return {
                    trigger: P(e, t, {
                        getProperty: i.useCallback(function (e, t) {
                            return e.trigger(t)
                        }, []),
                        getValue: i.useCallback(function () { }, []),
                        defaultValue: null,
                        onPropertyEvent: r,
                        buildPropertyOperations: i.useCallback(function (e) {
                            return {
                                trigger: function () {
                                    e(function (e) {
                                        e.trigger()
                                    })
                                }
                            }
                        }, [])
                    }).trigger
                }
            }
            ,
            Object.keys(a).forEach(function (e) {
                "default" === e || n.hasOwnProperty(e) || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function () {
                        return a[e]
                    }
                })
            })
    }
    , 19599, 42791, e => {
        "use strict";
        var t = e.i(43476)
            , n = e.i(932)
            , r = e.i(71645)
            , i = e.i(85317)
            , a = e.i(78530);
        let o = (e, t) => {
            let i, o, s, u, l, c, h = (0,
                n.c)(16);
            h[0] !== t ? (i = void 0 === t ? {} : t,
                h[0] = t,
                h[1] = i) : i = h[1];
            let { autoLoad: f } = i
                , d = void 0 === f || f;
            h[2] !== e ? (o = () => (0,
                a.getCachedRiveBuffer)(e),
                h[2] = e,
                h[3] = o) : o = h[3];
            let [p, v] = (0,
                r.useState)(o)
                , [m, b] = (0,
                    r.useState)(!p)
                , [g, y] = (0,
                    r.useState)(null);
            h[4] !== e ? (s = () => {
                let t = (0,
                    a.getCachedRiveBuffer)(e);
                if (t) {
                    v(t),
                        b(!1);
                    return
                }
                b(!0),
                    y(null),
                    (0,
                        a.loadRiveBuffer)(e).then(e => {
                            v(e),
                                b(!1)
                        }
                        ).catch(e => {
                            y(e),
                                b(!1)
                        }
                        )
            }
                ,
                h[4] = e,
                h[5] = s) : s = h[5];
            let w = s;
            return h[6] !== d || h[7] !== p || h[8] !== w ? (u = () => {
                d && !p && w()
            }
                ,
                l = [d, w, p],
                h[6] = d,
                h[7] = p,
                h[8] = w,
                h[9] = u,
                h[10] = l) : (u = h[9],
                    l = h[10]),
                (0,
                    r.useEffect)(u, l),
                h[11] !== p || h[12] !== g || h[13] !== m || h[14] !== w ? (c = {
                    buffer: p,
                    isLoading: m,
                    error: g,
                    load: w
                },
                    h[11] = p,
                    h[12] = g,
                    h[13] = m,
                    h[14] = w,
                    h[15] = c) : c = h[15],
                c
        }
            ;
        e.s(["useCachedRive", 0, o], 42791);
        var s = e.i(75157);
        let u = new i.Layout({
            fit: i.Fit.Contain
        });
        e.s(["default", 0, e => {
            let l, c, h, f, d, p, v = (0,
                n.c)(13), { className: m, isShare: b } = e, { buffer: g } = o(a.RIVE_ANIMATIONS.GENERAL_LOADING);
            v[0] !== g ? (l = g ? {
                buffer: g,
                autoplay: !0,
                layout: u
            } : null,
                v[0] = g,
                v[1] = l) : l = v[1];
            let { rive: y, RiveComponent: w } = (0,
                i.useRive)(l);
            v[2] !== y ? (c = () => () => y?.cleanup(),
                h = [y],
                v[2] = y,
                v[3] = c,
                v[4] = h) : (c = v[3],
                    h = v[4]),
                (0,
                    r.useEffect)(c, h);
            let _ = y || void 0 !== b && b ? "opacity-100" : "opacity-0";
            return v[5] !== m || v[6] !== _ ? (f = (0,
                s.cls)("w-35 md:w-10 aspect-square", m, _),
                v[5] = m,
                v[6] = _,
                v[7] = f) : f = v[7],
                v[8] !== w ? (d = (0,
                    t.jsx)(w, {}),
                    v[8] = w,
                    v[9] = d) : d = v[9],
                v[10] !== f || v[11] !== d ? (p = (0,
                    t.jsx)("div", {
                        className: f,
                        children: d
                    }),
                    v[10] = f,
                    v[11] = d,
                    v[12] = p) : p = v[12],
                p
        }
        ], 19599)
    }
]);
