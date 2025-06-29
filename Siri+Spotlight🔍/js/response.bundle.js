console.log("Siri+Spotlight🔍"), (() => {
    "use strict";
    let e, t, a, s, i;
    var r = {},
        n = {};
    
    function o(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var a = n[e] = {
            exports: {}
        };
        return r[e](a, a.exports, o), a.exports
    }
    o.rv = function() {
        return "1.1.5"
    }, o.ruid = "bundler=rspack@1.1.5";
    let l = (() => {
        let e = Object.keys(globalThis);
        switch (!0) {
            case e.includes("$task"):
                return "Quantumult X";
            case e.includes("$loon"):
                return "Loon";
            case e.includes("$rocket"):
                return "Shadowrocket";
            case "undefined" != typeof module:
                return "Node.js";
            case e.includes("Egern"):
                return "Egern";
            case e.includes("$environment"):
                if ($environment["surge-version"]) return "Surge";
                if ($environment["stash-version"]) return "Stash";
                return;
            default:
                return
        }
    })();
    class d {
        static #e = new Map([]);
        static #t = [];
        static #a = new Map([]);
        static clear = () => {};
        static count = (e = "default") => {
            switch (d.#e.has(e)) {
                case !0:
                    d.#e.set(e, d.#e.get(e) + 1);
                    break;
                case !1:
                    d.#e.set(e, 0)
            }
            d.log(`${e}: ${d.#e.get(e)}`)
        };
        static countReset = (e = "default") => {
            switch (d.#e.has(e)) {
                case !0:
                    d.#e.set(e, 0), d.log(`${e}: ${d.#e.get(e)}`);
                    break;
                case !1:
                    d.warn(`Counter "${e}" doesn’t exist`)
            }
        };
        static debug = (...e) => {
            !(d.#s < 4) && (e = e.map(e => `🅱️ ${e}`), d.log(...e))
        };
        static error(...e) {
            if (!(d.#s < 1)) {
                switch (l) {
                    case "Surge":
                    case "Loon":
                    case "Stash":
                    case "Egern":
                    case "Shadowrocket":
                    case "Quantumult X":
                    default:
                        e = e.map(e => `❌ ${e}`);
                        break;
                    case "Node.js":
                        e = e.map(e => `❌ ${e.stack}`)
                }
                d.log(...e)
            }
        }
        static exception = (...e) => d.error(...e);
        static group = e => d.#t.unshift(e);
        static groupEnd = () => d.#t.shift();
        static info(...e) {
            !(d.#s < 3) && (e = e.map(e => `ℹ️ ${e}`), d.log(...e))
        }
        static #s = 3;
        static get logLevel() {
            switch (d.#s) {
                case 0:
                    return "OFF";
                case 1:
                    return "ERROR";
                case 2:
                    return "WARN";
                case 3:
                default:
                    return "INFO";
                case 4:
                    return "DEBUG";
                case 5:
                    return "ALL"
            }
        }
        static set logLevel(e) {
            switch (typeof e) {
                case "string":
                    e = e.toLowerCase();
                    break;
                case "number":
                    break;
                default:
                    e = "warn"
            }
            switch (e) {
                case 0:
                case "off":
                    d.#s = 0;
                    break;
                case 1:
                case "error":
                    d.#s = 1;
                    break;
                case 2:
                case "warn":
                case "warning":
                default:
                    d.#s = 2;
                    break;
                case 3:
                case "info":
                    d.#s = 3;
                    break;
                case 4:
                case "debug":
                    d.#s = 4;
                    break;
                case 5:
                case "all":
                    d.#s = 5
            }
        }
        static log = (...e) => {
            0 !== d.#s && (e = e.map(e => {
                switch (typeof e) {
                    case "object":
                        e = JSON.stringify(e);
                        break;
                    case "bigint":
                    case "number":
                    case "boolean":
                    case "string":
                        e = e.toString()
                }
                return e
            }), d.#t.forEach(t => {
                (e = e.map(e => `  ${e}`)).unshift(`▼ ${t}:`)
            }), console.log((e = ["", ...e]).join("\n")))
        };
        static time = (e = "default") => d.#a.set(e, Date.now());
        static timeEnd = (e = "default") => d.#a.delete(e);
        static timeLog = (e = "default") => {
            let t = d.#a.get(e);
            t ? d.log(`${e}: ${Date.now()-t}ms`) : d.warn(`Timer "${e}" doesn’t exist`)
        };
        static warn(...e) {
            !(d.#s < 2) && (e = e.map(e => `⚠️ ${e}`), d.log(...e))
        }
    }
    class h {
        static get(e = {}, t = "", a) {
            !Array.isArray(t) && (t = h.toPath(t));
            let s = t.reduce((e, t) => Object(e)[t], e);
            return void 0 === s ? a : s
        }
        static set(e, t, a) {
            return !Array.isArray(t) && (t = h.toPath(t)), t.slice(0, -1).reduce((e, a, s) => Object(e[a]) === e[a] ? e[a] : e[a] = /^\d+$/.test(t[s + 1]) ? [] : {}, e)[t[t.length - 1]] = a, e
        }
        static unset(e = {}, t = "") {
            return !Array.isArray(t) && (t = h.toPath(t)), t.reduce((e, a, s) => s === t.length - 1 ? (delete e[a], !0) : Object(e)[a], e)
        }
        static toPath(e) {
            return e.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean)
        }
        static escape(e) {
            let t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };
            return e.replace(/[&<>"']/g, e => t[e])
        }
        static unescape(e) {
            let t = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            };
            return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, e => t[e])
        }
    }
    let c = {
            100: "HTTP/1.1 100 Continue",
            101: "HTTP/1.1 101 Switching Protocols",
            102: "HTTP/1.1 102 Processing",
            103: "HTTP/1.1 103 Early Hints",
            200: "HTTP/1.1 200 OK",
            201: "HTTP/1.1 201 Created",
            202: "HTTP/1.1 202 Accepted",
            203: "HTTP/1.1 203 Non-Authoritative Information",
            204: "HTTP/1.1 204 No Content",
            205: "HTTP/1.1 205 Reset Content",
            206: "HTTP/1.1 206 Partial Content",
            207: "HTTP/1.1 207 Multi-Status",
            208: "HTTP/1.1 208 Already Reported",
            226: "HTTP/1.1 226 IM Used",
            300: "HTTP/1.1 300 Multiple Choices",
            301: "HTTP/1.1 301 Moved Permanently",
            302: "HTTP/1.1 302 Found",
            304: "HTTP/1.1 304 Not Modified",
            307: "HTTP/1.1 307 Temporary Redirect",
            308: "HTTP/1.1 308 Permanent Redirect",
            400: "HTTP/1.1 400 Bad Request",
            401: "HTTP/1.1 401 Unauthorized",
            402: "HTTP/1.1 402 Payment Required",
            403: "HTTP/1.1 403 Forbidden",
            404: "HTTP/1.1 404 Not Found",
            405: "HTTP/1.1 405 Method Not Allowed",
            406: "HTTP/1.1 406 Not Acceptable",
            407: "HTTP/1.1 407 Proxy Authentication Required",
            408: "HTTP/1.1 408 Request Timeout",
            409: "HTTP/1.1 409 Conflict",
            410: "HTTP/1.1 410 Gone",
            411: "HTTP/1.1 411 Length Required",
            412: "HTTP/1.1 412 Precondition Failed",
            413: "HTTP/1.1 413 Content Too Large",
            414: "HTTP/1.1 414 URI Too Long",
            415: "HTTP/1.1 415 Unsupported Media Type",
            416: "HTTP/1.1 416 Range Not Satisfiable",
            417: "HTTP/1.1 417 Expectation Failed",
            418: "HTTP/1.1 418 I'm a teapot",
            421: "HTTP/1.1 421 Misdirected Request",
            422: "HTTP/1.1 422 Unprocessable Entity",
            423: "HTTP/1.1 423 Locked",
            424: "HTTP/1.1 424 Failed Dependency",
            425: "HTTP/1.1 425 Too Early",
            426: "HTTP/1.1 426 Upgrade Required",
            428: "HTTP/1.1 428 Precondition Required",
            429: "HTTP/1.1 429 Too Many Requests",
            431: "HTTP/1.1 431 Request Header Fields Too Large",
            451: "HTTP/1.1 451 Unavailable For Legal Reasons",
            500: "HTTP/1.1 500 Internal Server Error",
            501: "HTTP/1.1 501 Not Implemented",
            502: "HTTP/1.1 502 Bad Gateway",
            503: "HTTP/1.1 503 Service Unavailable",
            504: "HTTP/1.1 504 Gateway Timeout",
            505: "HTTP/1.1 505 HTTP Version Not Supported",
            506: "HTTP/1.1 506 Variant Also Negotiates",
            507: "HTTP/1.1 507 Insufficient Storage",
            508: "HTTP/1.1 508 Loop Detected",
            510: "HTTP/1.1 510 Not Extended",
            511: "HTTP/1.1 511 Network Authentication Required"
        },
        u = e => {
            let t = {};
            switch (typeof e) {
                case void 0:
                    break;
                case "string":
                case "number":
                case "boolean":
                    switch ($app) {
                        case "Surge":
                        case "Stash":
                        case "Egern":
                        default:
                            t.url = e;
                            break;
                        case "Loon":
                        case "Shadowrocket":
                            t.openUrl = e;
                            break;
                        case "Quantumult X":
                            t["open-url"] = e;
                        case "Node.js":
                    }
                    break;
                case "object": {
                    let a = e.open || e["open-url"] || e.url || e.openUrl,
                        s = e.copy || e["update-pasteboard"] || e.updatePasteboard,
                        i = e.media || e["media-url"] || e.mediaUrl;
                    switch ($app) {
                        case "Surge":
                        case "Stash":
                        case "Egern":
                        case "Shadowrocket":
                        default:
                            if (a && (t.action = "open-url", t.url = a), s && (t.action = "clipboard", t.text = s), i) switch (!0) {
                                case i.startsWith("http"):
                                    t["media-url"] = i;
                                    break;
                                case i.startsWith("data:"): {
                                    let {
                                        MIME: a,
                                        Base64: s
                                    } = i.match(/^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/).groups;
                                    t["media-base64"] = s, t["media-base64-mime"] = e.mime || a;
                                    break
                                }
                                default:
                                    switch (t["media-base64"] = i, !0) {
                                        case i.startsWith("CiVQREYt"):
                                        case i.startsWith("JVBERi0"):
                                            t["media-base64-mime"] = "application/pdf";
                                            break;
                                        case i.startsWith("R0lGODdh"):
                                        case i.startsWith("R0lGODlh"):
                                            t["media-base64-mime"] = "image/gif";
                                            break;
                                        case i.startsWith("iVBORw0KGgo"):
                                            t["media-base64-mime"] = "image/png";
                                            break;
                                        case i.startsWith("/9j/"):
                                            t["media-base64-mime"] = "image/jpg";
                                            break;
                                        case i.startsWith("Qk02U"):
                                            t["media-base64-mime"] = "image/bmp"
                                    }
                            }
                            e["auto-dismiss"] && (t["auto-dismiss"] = e["auto-dismiss"]), e.sound && (t.sound = e.sound);
                            break;
                        case "Loon":
                            a && (t.openUrl = a), i?.startsWith("http") && (t.mediaUrl = i);
                            break;
                        case "Quantumult X":
                            a && (t["open-url"] = a), i?.startsWith("http") && (t["media-url"] = i), s && (t["update-pasteboard"] = s);
                        case "Node.js":
                    }
                    break
                }
                default:
                    Console.error(`不支持的通知参数类型: ${typeof e}`, "")
            }
            return t
        };
    class _ {
        static data = null;
        static dataFile = "box.dat";
        static #i = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
        static getItem(e, t = null) {
            let a = t;
            if (!0 === e.startsWith("@")) {
                let {
                    key: t,
                    path: s
                } = e.match(_.#i)?.groups;
                e = t;
                let i = _.getItem(e, {});
                "object" != typeof i && (i = {}), a = h.get(i, s);
                try {
                    a = JSON.parse(a)
                } catch (e) {}
            } else {
                switch (l) {
                    case "Surge":
                    case "Loon":
                    case "Stash":
                    case "Egern":
                    case "Shadowrocket":
                        a = $persistentStore.read(e);
                        break;
                    case "Quantumult X":
                        a = $prefs.valueForKey(e);
                        break;
                    case "Node.js":
                        _.data = _.#r(_.dataFile), a = _.data?.[e];
                        break;
                    default:
                        a = _.data?.[e] || null
                }
                try {
                    a = JSON.parse(a)
                } catch (e) {}
            }
            return a ?? t
        }
        static setItem(e = new String, t = new String) {
            let a = !1;
            if ("object" == typeof t) t = JSON.stringify(t);
            else t = String(t);
            if (!0 === e.startsWith("@")) {
                let {
                    key: s,
                    path: i
                } = e.match(_.#i)?.groups;
                e = s;
                let r = _.getItem(e, {});
                "object" != typeof r && (r = {}), h.set(r, i, t), a = _.setItem(e, r)
            } else switch (l) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Egern":
                case "Shadowrocket":
                    a = $persistentStore.write(t, e);
                    break;
                case "Quantumult X":
                    a = $prefs.setValueForKey(t, e);
                    break;
                case "Node.js":
                    _.data = _.#r(_.dataFile), _.data[e] = t, _.#n(_.dataFile), a = !0;
                    break;
                default:
                    a = _.data?.[e] || null
            }
            return a
        }
        static removeItem(e) {
            let t = !1;
            if (!0 === e.startsWith("@")) {
                let {
                    key: a,
                    path: s
                } = e.match(_.#i)?.groups;
                e = a;
                let i = _.getItem(e);
                "object" != typeof i && (i = {}), keyValue = h.unset(i, s), t = _.setItem(e, i)
            } else switch (l) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Egern":
                case "Shadowrocket":
                case "Node.js":
                    t = !1;
                    break;
                case "Quantumult X":
                    t = $prefs.removeValueForKey(e);
                    break;
                default:
                    t = !1
            }
            return t
        }
        static clear() {
            let e = !1;
            switch (l) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Egern":
                case "Shadowrocket":
                case "Node.js":
                    e = !1;
                    break;
                case "Quantumult X":
                    e = $prefs.removeAllValues();
                    break;
                default:
                    e = !1
            }
            return e
        }
        static #r = e => {
            if ("Node.js" !== l) return {};
            {
                this.fs = this.fs ? this.fs : require("node:fs"), this.path = this.path ? this.path : require("node:path");
                let t = this.path.resolve(e),
                    a = this.path.resolve(process.cwd(), e),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(a);
                if (!s && !i) return {};
                try {
                    return JSON.parse(this.fs.readFileSync(s ? t : a))
                } catch (e) {
                    return {}
                }
            }
        };
        static #n = (e = this.dataFile) => {
            if ("Node.js" === l) {
                this.fs = this.fs ? this.fs : require("node:fs"), this.path = this.path ? this.path : require("node:path");
                let t = this.path.resolve(e),
                    a = this.path.resolve(process.cwd(), e),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(a),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(a, r) : this.fs.writeFileSync(t, r)
            }
        }
    }
    
    function f(e) {
        let t = e.length;
        for (; --t >= 0;) e[t] = 0
    }
    let p = 286,
        m = 2 * p + 1,
        g = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
        b = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
        w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
        k = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        y = Array((p + 2) * 2);
    f(y);
    let v = Array(60);
    f(v);
    let x = Array(512);
    f(x);
    let T = Array(256);
    f(T);
    let S = Array(29);
    f(S);
    let A = Array(30);
    
    function z(e, t, a, s, i) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = a, this.elems = s, this.max_length = i, this.has_stree = e && e.length
    }
    
    function E(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
    }
    f(A);
    let R = e => e < 256 ? x[e] : x[256 + (e >>> 7)],
        N = (e, t) => {
            e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
        },
        P = (e, t, a) => {
            e.bi_valid > 16 - a ? (e.bi_buf |= t << e.bi_valid & 65535, N(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += a - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += a)
        },
        H = (e, t, a) => {
            P(e, a[2 * t], a[2 * t + 1])
        },
        L = (e, t) => {
            let a = 0;
            do a |= 1 & e, e >>>= 1, a <<= 1; while (--t > 0);
            return a >>> 1
        },
        O = e => {
            16 === e.bi_valid ? (N(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
        },
        U = (e, t) => {
            let a, s, i, r, n, o;
            let l = t.dyn_tree,
                d = t.max_code,
                h = t.stat_desc.static_tree,
                c = t.stat_desc.has_stree,
                u = t.stat_desc.extra_bits,
                _ = t.stat_desc.extra_base,
                f = t.stat_desc.max_length,
                p = 0;
            for (r = 0; r <= 15; r++) e.bl_count[r] = 0;
            for (l[2 * e.heap[e.heap_max] + 1] = 0, a = e.heap_max + 1; a < m; a++) {
                if ((r = l[2 * l[2 * (s = e.heap[a]) + 1] + 1] + 1) > f && (r = f, p++), l[2 * s + 1] = r, !(s > d)) e.bl_count[r]++, n = 0, s >= _ && (n = u[s - _]), o = l[2 * s], e.opt_len += o * (r + n), c && (e.static_len += o * (h[2 * s + 1] + n))
            }
            if (0 !== p) {
                do {
                    for (r = f - 1; 0 === e.bl_count[r];) r--;
                    e.bl_count[r]--, e.bl_count[r + 1] += 2, e.bl_count[f]--, p -= 2
                } while (p > 0);
                for (r = f; 0 !== r; r--)
                    for (s = e.bl_count[r]; 0 !== s;) {
                        if (!((i = e.heap[--a]) > d)) l[2 * i + 1] !== r && (e.opt_len += (r - l[2 * i + 1]) * l[2 * i], l[2 * i + 1] = r), s--
                    }
            }
        },
        C = (e, t, a) => {
            let s, i;
            let r = Array(16),
                n = 0;
            for (s = 1; s <= 15; s++) n = n + a[s - 1] << 1, r[s] = n;
            for (i = 0; i <= t; i++) {
                let t = e[2 * i + 1];
                if (0 !== t) e[2 * i] = L(r[t]++, t)
            }
        },
        D = () => {
            let s, i, r, n, o;
            let l = Array(16);
            for (n = 0, r = 0; n < 28; n++)
                for (s = 0, S[n] = r; s < 1 << g[n]; s++) T[r++] = n;
            for (T[r - 1] = n, o = 0, n = 0; n < 16; n++)
                for (s = 0, A[n] = o; s < 1 << b[n]; s++) x[o++] = n;
            for (o >>= 7; n < 30; n++)
                for (s = 0, A[n] = o << 7; s < 1 << b[n] - 7; s++) x[256 + o++] = n;
            for (i = 0; i <= 15; i++) l[i] = 0;
            for (s = 0; s <= 143;) y[2 * s + 1] = 8, s++, l[8]++;
            for (; s <= 255;) y[2 * s + 1] = 9, s++, l[9]++;
            for (; s <= 279;) y[2 * s + 1] = 7, s++, l[7]++;
            for (; s <= 287;) y[2 * s + 1] = 8, s++, l[8]++;
            for (C(y, p + 1, l), s = 0; s < 30; s++) v[2 * s + 1] = 5, v[2 * s] = L(s, 5);
            e = new z(y, g, 257, p, 15), t = new z(v, b, 0, 30, 15), a = new z([], w, 0, 19, 7)
        },
        I = e => {
            let t;
            for (t = 0; t < p; t++) e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
            e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0
        },
        B = e => {
            e.bi_valid > 8 ? N(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
        },
        M = (e, t, a, s) => {
            let i = 2 * t,
                r = 2 * a;
            return e[i] < e[r] || e[i] === e[r] && s[t] <= s[a]
        },
        F = (e, t, a) => {
            let s = e.heap[a],
                i = a << 1;
            for (; i <= e.heap_len && (i < e.heap_len && M(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !M(t, s, e.heap[i], e.depth));) {
                ;
                e.heap[a] = e.heap[i], a = i, i <<= 1
            }
            e.heap[a] = s
        },
        Z = (e, t, a) => {
            let s, i, r, n;
            let o = 0;
            if (0 !== e.sym_next)
                do s = (255 & e.pending_buf[e.sym_buf + o++]) + ((255 & e.pending_buf[e.sym_buf + o++]) << 8), i = e.pending_buf[e.sym_buf + o++], 0 === s ? H(e, i, t) : (H(e, (r = T[i]) + 256 + 1, t), 0 !== (n = g[r]) && P(e, i -= S[r], n), H(e, r = R(--s), a), 0 !== (n = b[r]) && P(e, s -= A[r], n)); while (o < e.sym_next);
            H(e, 256, t)
        },
        $ = (e, t) => {
            let a, s, i;
            let r = t.dyn_tree,
                n = t.stat_desc.static_tree,
                o = t.stat_desc.has_stree,
                l = t.stat_desc.elems,
                d = -1;
            for (a = 0, e.heap_len = 0, e.heap_max = m; a < l; a++) 0 !== r[2 * a] ? (e.heap[++e.heap_len] = d = a, e.depth[a] = 0) : r[2 * a + 1] = 0;
            for (; e.heap_len < 2;) r[2 * (i = e.heap[++e.heap_len] = d < 2 ? ++d : 0)] = 1, e.depth[i] = 0, e.opt_len--, o && (e.static_len -= n[2 * i + 1]);
            for (t.max_code = d, a = e.heap_len >> 1; a >= 1; a--) F(e, r, a);
            i = l;
            do a = e.heap[1], e.heap[1] = e.heap[e.heap_len--], F(e, r, 1), s = e.heap[1], e.heap[--e.heap_max] = a, e.heap[--e.heap_max] = s, r[2 * i] = r[2 * a] + r[2 * s], e.depth[i] = (e.depth[a] >= e.depth[s] ? e.depth[a] : e.depth[s]) + 1, r[2 * a + 1] = r[2 * s + 1] = i, e.heap[1] = i++, F(e, r, 1); while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1], U(e, t), C(r, d, e.bl_count)
        },
        j = (e, t, a) => {
            let s, i;
            let r = -1,
                n = t[1],
                o = 0,
                l = 7,
                d = 4;
            for (0 === n && (l = 138, d = 3), t[(a + 1) * 2 + 1] = 65535, s = 0; s <= a; s++) {
                if (i = n, n = t[(s + 1) * 2 + 1], !(++o < l) || i !== n) {
                    o < d ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== r && e.bl_tree[2 * i]++, e.bl_tree[32]++) : o <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++;
                    o = 0, r = i, 0 === n ? (l = 138, d = 3) : i === n ? (l = 6, d = 3) : (l = 7, d = 4)
                }
            }
        },
        G = (e, t, a) => {
            let s, i;
            let r = -1,
                n = t[1],
                o = 0,
                l = 7,
                d = 4;
            for (0 === n && (l = 138, d = 3), s = 0; s <= a; s++) {
                if (i = n, n = t[(s + 1) * 2 + 1], !(++o < l) || i !== n) {
                    if (o < d)
                        do H(e, i, e.bl_tree); while (0 != --o);
                    else 0 !== i ? (i !== r && (H(e, i, e.bl_tree), o--), H(e, 16, e.bl_tree), P(e, o - 3, 2)) : o <= 10 ? (H(e, 17, e.bl_tree), P(e, o - 3, 3)) : (H(e, 18, e.bl_tree), P(e, o - 11, 7));
                    o = 0, r = i, 0 === n ? (l = 138, d = 3) : i === n ? (l = 6, d = 3) : (l = 7, d = 4)
                }
            }
        },
        K = e => {
            let t;
            for (j(e, e.dyn_ltree, e.l_desc.max_code), j(e, e.dyn_dtree, e.d_desc.max_code), $(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * k[t] + 1]; t--);
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
        },
        V = (e, t, a, s) => {
            let i;
            for (P(e, t - 257, 5), P(e, a - 1, 5), P(e, s - 4, 4), i = 0; i < s; i++) P(e, e.bl_tree[2 * k[i] + 1], 3);
            G(e, e.dyn_ltree, t - 1), G(e, e.dyn_dtree, a - 1)
        },
        W = e => {
            let t, a = 0xf3ffc07f;
            for (t = 0; t <= 31; t++, a >>>= 1)
                if (1 & a && 0 !== e.dyn_ltree[2 * t]) return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
            for (t = 32; t < 256; t++)
                if (0 !== e.dyn_ltree[2 * t]) return 1;
            return 0
        },
        J = !1,
        Y = (e, t, a, s) => {
            P(e, 0 + (s ? 1 : 0), 3), B(e), N(e, a), N(e, ~a), a && e.pending_buf.set(e.window.subarray(t, t + a), e.pending), e.pending += a
        };
    var q = {
            _tr_init: s => {
                !J && (D(), J = !0), s.l_desc = new E(s.dyn_ltree, e), s.d_desc = new E(s.dyn_dtree, t), s.bl_desc = new E(s.bl_tree, a), s.bi_buf = 0, s.bi_valid = 0, I(s)
            },
            _tr_stored_block: Y,
            _tr_flush_block: (e, t, a, s) => {
                let i, r;
                let n = 0;
                e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = W(e)), $(e, e.l_desc), $(e, e.d_desc), n = K(e), i = e.opt_len + 3 + 7 >>> 3, (r = e.static_len + 3 + 7 >>> 3) <= i && (i = r)) : i = r = a + 5, a + 4 <= i && -1 !== t ? Y(e, t, a, s) : 4 === e.strategy || r === i ? (P(e, 2 + (s ? 1 : 0), 3), Z(e, y, v)) : (P(e, 4 + (s ? 1 : 0), 3), V(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, n + 1), Z(e, e.dyn_ltree, e.dyn_dtree)), I(e), s && B(e)
            },
            _tr_tally: (e, t, a) => (e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = a, 0 === t ? e.dyn_ltree[2 * a]++ : (e.matches++, t--, e.dyn_ltree[(T[a] + 256 + 1) * 2]++, e.dyn_dtree[2 * R(t)]++), e.sym_next === e.sym_end),
            _tr_align: e => {
                P(e, 2, 3), H(e, 256, y), O(e)
            }
        },
        X = (e, t, a, s) => {
            let i = 65535 & e | 0,
                r = e >>> 16 & 65535 | 0,
                n = 0;
            for (; 0 !== a;) {
                n = a > 2e3 ? 2e3 : a, a -= n;
                do r = r + (i = i + t[s++] | 0) | 0; while (--n);
                i %= 65521, r %= 65521
            }
            return i | r << 16 | 0
        };
    let Q = new Uint32Array((() => {
        let e, t = [];
        for (var a = 0; a < 256; a++) {
            e = a;
            for (var s = 0; s < 8; s++) e = 1 & e ? 0xedb88320 ^ e >>> 1 : e >>> 1;
            t[a] = e
        }
        return t
    })());
    var ee = (e, t, a, s) => {
            let i = s + a;
            e ^= -1;
            for (let a = s; a < i; a++) e = e >>> 8 ^ Q[(e ^ t[a]) & 255];
            return -1 ^ e
        },
        et = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        },
        ea = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        };
    let {
        _tr_init: es,
        _tr_stored_block: ei,
        _tr_flush_block: er,
        _tr_tally: en,
        _tr_align: eo
    } = q, {
        Z_NO_FLUSH: el,
        Z_PARTIAL_FLUSH: ed,
        Z_FULL_FLUSH: eh,
        Z_FINISH: ec,
        Z_BLOCK: eu,
        Z_OK: e_,
        Z_STREAM_END: ef,
        Z_STREAM_ERROR: ep,
        Z_DATA_ERROR: em,
        Z_BUF_ERROR: eg,
        Z_DEFAULT_COMPRESSION: eb,
        Z_FILTERED: ew,
        Z_HUFFMAN_ONLY: ek,
        Z_RLE: ey,
        Z_FIXED: ev,
        Z_DEFAULT_STRATEGY: ex,
        Z_UNKNOWN: eT,
        Z_DEFLATED: eS
    } = ea, eA = 286, ez = 2 * eA + 1, eE = 262, eR = (e, t) => (e.msg = et[t], t), eN = e => 2 * e - (e > 4 ? 9 : 0), eP = e => {
        let t = e.length;
        for (; --t >= 0;) e[t] = 0
    }, eH = e => {
        let t, a, s;
        let i = e.w_size;
        s = t = e.hash_size;
        do a = e.head[--s], e.head[s] = a >= i ? a - i : 0; while (--t);
        s = t = i;
        do a = e.prev[--s], e.prev[s] = a >= i ? a - i : 0; while (--t)
    }, eL = (e, t, a) => (t << e.hash_shift ^ a) & e.hash_mask, eO = e => {
        let t = e.state,
            a = t.pending;
        if (a > e.avail_out && (a = e.avail_out), 0 !== a) e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + a), e.next_out), e.next_out += a, t.pending_out += a, e.total_out += a, e.avail_out -= a, t.pending -= a, 0 === t.pending && (t.pending_out = 0)
    }, eU = (e, t) => {
        er(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, eO(e.strm)
    }, eC = (e, t) => {
        e.pending_buf[e.pending++] = t
    }, eD = (e, t) => {
        e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
    }, eI = (e, t, a, s) => {
        let i = e.avail_in;
        return (i > s && (i = s), 0 === i) ? 0 : (e.avail_in -= i, t.set(e.input.subarray(e.next_in, e.next_in + i), a), 1 === e.state.wrap ? e.adler = X(e.adler, t, i, a) : 2 === e.state.wrap && (e.adler = ee(e.adler, t, i, a)), e.next_in += i, e.total_in += i, i)
    }, eB = (e, t) => {
        let a, s, i = e.max_chain_length,
            r = e.strstart,
            n = e.prev_length,
            o = e.nice_match,
            l = e.strstart > e.w_size - eE ? e.strstart - (e.w_size - eE) : 0,
            d = e.window,
            h = e.w_mask,
            c = e.prev,
            u = e.strstart + 258,
            _ = d[r + n - 1],
            f = d[r + n];
        e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
        do {
            if (d[(a = t) + n] !== f || d[a + n - 1] !== _ || d[a] !== d[r] || d[++a] !== d[r + 1]) continue;
            r += 2, a++;
            do; while (d[++r] === d[++a] && d[++r] === d[++a] && d[++r] === d[++a] && d[++r] === d[++a] && d[++r] === d[++a] && d[++r] === d[++a] && d[++r] === d[++a] && d[++r] === d[++a] && r < u);
            if (s = 258 - (u - r), r = u - 258, s > n) {
                if (e.match_start = t, n = s, s >= o) break;
                _ = d[r + n - 1], f = d[r + n]
            }
        } while ((t = c[t & h]) > l && 0 != --i);
        return n <= e.lookahead ? n : e.lookahead
    }, eM = e => {
        let t, a, s;
        let i = e.w_size;
        do {
            if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= i + (i - eE) && (e.window.set(e.window.subarray(i, i + i - a), 0), e.match_start -= i, e.strstart -= i, e.block_start -= i, e.insert > e.strstart && (e.insert = e.strstart), eH(e), a += i), 0 === e.strm.avail_in) break;
            if (t = eI(e.strm, e.window, e.strstart + e.lookahead, a), e.lookahead += t, e.lookahead + e.insert >= 3)
                for (s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = eL(e, e.ins_h, e.window[s + 1]); e.insert && (e.ins_h = eL(e, e.ins_h, e.window[s + 3 - 1]), e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < 3)););
        } while (e.lookahead < eE && 0 !== e.strm.avail_in)
    }, eF = (e, t) => {
        let a = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5,
            s, i, r, n = 0,
            o = e.strm.avail_in;
        do {
            if (s = 65535, r = e.bi_valid + 42 >> 3, e.strm.avail_out < r) break;
            if (r = e.strm.avail_out - r, s > (i = e.strstart - e.block_start) + e.strm.avail_in && (s = i + e.strm.avail_in), s > r && (s = r), s < a && (0 === s && t !== ec || t === el || s !== i + e.strm.avail_in)) break;
            n = t === ec && s === i + e.strm.avail_in ? 1 : 0, ei(e, 0, 0, n), e.pending_buf[e.pending - 4] = s, e.pending_buf[e.pending - 3] = s >> 8, e.pending_buf[e.pending - 2] = ~s, e.pending_buf[e.pending - 1] = ~s >> 8, eO(e.strm), i && (i > s && (i = s), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i, e.block_start += i, s -= i), s && (eI(e.strm, e.strm.output, e.strm.next_out, s), e.strm.next_out += s, e.strm.avail_out -= s, e.strm.total_out += s)
        } while (0 === n);
        return ((o -= e.strm.avail_in) && (o >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= o && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), n) ? 4 : t !== el && t !== ec && 0 === e.strm.avail_in && e.strstart === e.block_start ? 2 : (r = e.window_size - e.strstart, e.strm.avail_in > r && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, r += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), r > e.strm.avail_in && (r = e.strm.avail_in), r && (eI(e.strm, e.window, e.strstart, r), e.strstart += r, e.insert += r > e.w_size - e.insert ? e.w_size - e.insert : r), e.high_water < e.strstart && (e.high_water = e.strstart), r = e.bi_valid + 42 >> 3, a = (r = e.pending_buf_size - r > 65535 ? 65535 : e.pending_buf_size - r) > e.w_size ? e.w_size : r, ((i = e.strstart - e.block_start) >= a || (i || t === ec) && t !== el && 0 === e.strm.avail_in && i <= r) && (s = i > r ? r : i, n = t === ec && 0 === e.strm.avail_in && s === i ? 1 : 0, ei(e, e.block_start, s, n), e.block_start += s, eO(e.strm)), n ? 3 : 1)
    }, eZ = (e, t) => {
        let a, s;
        for (;;) {
            if (e.lookahead < eE) {
                if (eM(e), e.lookahead < eE && t === el) return 1;
                if (0 === e.lookahead) break
            }
            if (a = 0, e.lookahead >= 3 && (e.ins_h = eL(e, e.ins_h, e.window[e.strstart + 3 - 1]), a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== a && e.strstart - a <= e.w_size - eE && (e.match_length = eB(e, a)), e.match_length >= 3) {
                if (s = en(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                    e.match_length--;
                    do e.strstart++, e.ins_h = eL(e, e.ins_h, e.window[e.strstart + 3 - 1]), a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart; while (0 != --e.match_length);
                    e.strstart++
                } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = eL(e, e.ins_h, e.window[e.strstart + 1])
            } else s = en(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
            if (s && (eU(e, !1), 0 === e.strm.avail_out)) return 1
        }
        if (e.insert = e.strstart < 2 ? e.strstart : 2, t === ec) return (eU(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eU(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }, e$ = (e, t) => {
        let a, s, i;
        for (;;) {
            if (e.lookahead < eE) {
                if (eM(e), e.lookahead < eE && t === el) return 1;
                if (0 === e.lookahead) break
            }
            if (a = 0, e.lookahead >= 3 && (e.ins_h = eL(e, e.ins_h, e.window[e.strstart + 3 - 1]), a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== a && e.prev_length < e.max_lazy_match && e.strstart - a <= e.w_size - eE && (e.match_length = eB(e, a), e.match_length <= 5 && (e.strategy === ew || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                i = e.strstart + e.lookahead - 3, s = en(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                do ++e.strstart <= i && (e.ins_h = eL(e, e.ins_h, e.window[e.strstart + 3 - 1]), a = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart); while (0 != --e.prev_length);
                if (e.match_available = 0, e.match_length = 2, e.strstart++, s && (eU(e, !1), 0 === e.strm.avail_out)) return 1
            } else if (e.match_available) {
                if ((s = en(e, 0, e.window[e.strstart - 1])) && eU(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
            } else e.match_available = 1, e.strstart++, e.lookahead--
        }
        if (e.match_available && (s = en(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, t === ec) return (eU(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eU(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }, ej = (e, t) => {
        let a, s, i, r;
        let n = e.window;
        for (;;) {
            if (e.lookahead <= 258) {
                if (eM(e), e.lookahead <= 258 && t === el) return 1;
                if (0 === e.lookahead) break
            }
            if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (s = n[i = e.strstart - 1]) === n[++i] && s === n[++i] && s === n[++i]) {
                r = e.strstart + 258;
                do; while (s === n[++i] && s === n[++i] && s === n[++i] && s === n[++i] && s === n[++i] && s === n[++i] && s === n[++i] && s === n[++i] && i < r);
                e.match_length = 258 - (r - i), e.match_length > e.lookahead && (e.match_length = e.lookahead)
            }
            if (e.match_length >= 3 ? (a = en(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (a = en(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), a && (eU(e, !1), 0 === e.strm.avail_out)) return 1
        }
        if (e.insert = 0, t === ec) return (eU(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eU(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }, eG = (e, t) => {
        let a;
        for (;;) {
            if (0 === e.lookahead && (eM(e), 0 === e.lookahead)) {
                if (t === el) return 1;
                break
            }
            if (e.match_length = 0, a = en(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, a && (eU(e, !1), 0 === e.strm.avail_out)) return 1
        }
        if (e.insert = 0, t === ec) return (eU(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eU(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    };
    
    function eK(e, t, a, s, i) {
        this.good_length = e, this.max_lazy = t, this.nice_length = a, this.max_chain = s, this.func = i
    }
    let eV = [new eK(0, 0, 0, 0, eF), new eK(4, 4, 8, 4, eZ), new eK(4, 5, 16, 8, eZ), new eK(4, 6, 32, 32, eZ), new eK(4, 4, 16, 16, e$), new eK(8, 16, 32, 32, e$), new eK(8, 16, 128, 128, e$), new eK(8, 32, 128, 256, e$), new eK(32, 128, 258, 1024, e$), new eK(32, 258, 258, 4096, e$)],
        eW = e => {
            e.window_size = 2 * e.w_size, eP(e.head), e.max_lazy_match = eV[e.level].max_lazy, e.good_match = eV[e.level].good_length, e.nice_match = eV[e.level].nice_length, e.max_chain_length = eV[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = 2, e.match_available = 0, e.ins_h = 0
        };
    
    function eJ() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = eS, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(2 * ez), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), eP(this.dyn_ltree), eP(this.dyn_dtree), eP(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(2 * eA + 1), eP(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * eA + 1), eP(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
    }
    let eY = e => {
            if (!e) return 1;
            let t = e.state;
            return t && t.strm === e && (42 === t.status || 57 === t.status || 69 === t.status || 73 === t.status || 91 === t.status || 103 === t.status || 113 === t.status || 666 === t.status) ? 0 : 1
        },
        eq = e => {
            if (eY(e)) return eR(e, ep);
            e.total_in = e.total_out = 0, e.data_type = eT;
            let t = e.state;
            return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = 2 === t.wrap ? 57 : t.wrap ? 42 : 113, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = -2, es(t), e_
        },
        eX = e => {
            let t = eq(e);
            return t === e_ && eW(e.state), t
        },
        eQ = (e, t, a, s, i, r) => {
            if (!e) return ep;
            let n = 1;
            if (t === eb && (t = 6), s < 0 ? (n = 0, s = -s) : s > 15 && (n = 2, s -= 16), i < 1 || i > 9 || a !== eS || s < 8 || s > 15 || t < 0 || t > 9 || r < 0 || r > ev || 8 === s && 1 !== n) return eR(e, ep);
            8 === s && (s = 9);
            let o = new eJ;
            return e.state = o, o.strm = e, o.status = 42, o.wrap = n, o.gzhead = null, o.w_bits = s, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.sym_buf = o.lit_bufsize, o.sym_end = (o.lit_bufsize - 1) * 3, o.level = t, o.strategy = r, o.method = a, eX(e)
        };
    var e1 = {
        deflateInit2: eQ,
        deflateSetHeader: (e, t) => eY(e) || 2 !== e.state.wrap ? ep : (e.state.gzhead = t, e_),
        deflate: (e, t) => {
            if (eY(e) || t > eu || t < 0) return e ? eR(e, ep) : ep;
            let a = e.state;
            if (!e.output || 0 !== e.avail_in && !e.input || 666 === a.status && t !== ec) return eR(e, 0 === e.avail_out ? eg : ep);
            let s = a.last_flush;
            if (a.last_flush = t, 0 !== a.pending) {
                if (eO(e), 0 === e.avail_out) return a.last_flush = -1, e_
            } else if (0 === e.avail_in && eN(t) <= eN(s) && t !== ec) return eR(e, eg);
            if (666 === a.status && 0 !== e.avail_in) return eR(e, eg);
            if (42 === a.status && 0 === a.wrap && (a.status = 113), 42 === a.status) {
                let t = eS + (a.w_bits - 8 << 4) << 8,
                    s = -1;
                if (t |= (s = a.strategy >= ek || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6, 0 !== a.strstart && (t |= 32), eD(a, t += 31 - t % 31), 0 !== a.strstart && (eD(a, e.adler >>> 16), eD(a, 65535 & e.adler)), e.adler = 1, a.status = 113, eO(e), 0 !== a.pending) return a.last_flush = -1, e_
            }
            if (57 === a.status) {
                if (e.adler = 0, eC(a, 31), eC(a, 139), eC(a, 8), a.gzhead) eC(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), eC(a, 255 & a.gzhead.time), eC(a, a.gzhead.time >> 8 & 255), eC(a, a.gzhead.time >> 16 & 255), eC(a, a.gzhead.time >> 24 & 255), eC(a, 9 === a.level ? 2 : a.strategy >= ek || a.level < 2 ? 4 : 0), eC(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (eC(a, 255 & a.gzhead.extra.length), eC(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (e.adler = ee(e.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = 69;
                else if (eC(a, 0), eC(a, 0), eC(a, 0), eC(a, 0), eC(a, 0), eC(a, 9 === a.level ? 2 : a.strategy >= ek || a.level < 2 ? 4 : 0), eC(a, 3), a.status = 113, eO(e), 0 !== a.pending) return a.last_flush = -1, e_
            }
            if (69 === a.status) {
                if (a.gzhead.extra) {
                    let t = a.pending,
                        s = (65535 & a.gzhead.extra.length) - a.gzindex;
                    for (; a.pending + s > a.pending_buf_size;) {
                        let i = a.pending_buf_size - a.pending;
                        if (a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex, a.gzindex + i), a.pending), a.pending = a.pending_buf_size, a.gzhead.hcrc && a.pending > t && (e.adler = ee(e.adler, a.pending_buf, a.pending - t, t)), a.gzindex += i, eO(e), 0 !== a.pending) return a.last_flush = -1, e_;
                        t = 0, s -= i
                    }
                    let i = new Uint8Array(a.gzhead.extra);
                    a.pending_buf.set(i.subarray(a.gzindex, a.gzindex + s), a.pending), a.pending += s, a.gzhead.hcrc && a.pending > t && (e.adler = ee(e.adler, a.pending_buf, a.pending - t, t)), a.gzindex = 0
                }
                a.status = 73
            }
            if (73 === a.status) {
                if (a.gzhead.name) {
                    let t, s = a.pending;
                    do {
                        if (a.pending === a.pending_buf_size) {
                            if (a.gzhead.hcrc && a.pending > s && (e.adler = ee(e.adler, a.pending_buf, a.pending - s, s)), eO(e), 0 !== a.pending) return a.last_flush = -1, e_;
                            s = 0
                        }
                        t = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, eC(a, t)
                    } while (0 !== t);
                    a.gzhead.hcrc && a.pending > s && (e.adler = ee(e.adler, a.pending_buf, a.pending - s, s)), a.gzindex = 0
                }
                a.status = 91
            }
            if (91 === a.status) {
                if (a.gzhead.comment) {
                    let t, s = a.pending;
                    do {
                        if (a.pending === a.pending_buf_size) {
                            if (a.gzhead.hcrc && a.pending > s && (e.adler = ee(e.adler, a.pending_buf, a.pending - s, s)), eO(e), 0 !== a.pending) return a.last_flush = -1, e_;
                            s = 0
                        }
                        t = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, eC(a, t)
                    } while (0 !== t);
                    a.gzhead.hcrc && a.pending > s && (e.adler = ee(e.adler, a.pending_buf, a.pending - s, s))
                }
                a.status = 103
            }
            if (103 === a.status) {
                if (a.gzhead.hcrc) {
                    if (a.pending + 2 > a.pending_buf_size && (eO(e), 0 !== a.pending)) return a.last_flush = -1, e_;
                    eC(a, 255 & e.adler), eC(a, e.adler >> 8 & 255), e.adler = 0
                }
                if (a.status = 113, eO(e), 0 !== a.pending) return a.last_flush = -1, e_
            }
            if (0 !== e.avail_in || 0 !== a.lookahead || t !== el && 666 !== a.status) {
                let s = 0 === a.level ? eF(a, t) : a.strategy === ek ? eG(a, t) : a.strategy === ey ? ej(a, t) : eV[a.level].func(a, t);
                if ((3 === s || 4 === s) && (a.status = 666), 1 === s || 3 === s) return 0 === e.avail_out && (a.last_flush = -1), e_;
                if (2 === s && (t === ed ? eo(a) : t !== eu && (ei(a, 0, 0, !1), t === eh && (eP(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), eO(e), 0 === e.avail_out)) return a.last_flush = -1, e_
            }
            return t !== ec ? e_ : a.wrap <= 0 ? ef : (2 === a.wrap ? (eC(a, 255 & e.adler), eC(a, e.adler >> 8 & 255), eC(a, e.adler >> 16 & 255), eC(a, e.adler >> 24 & 255), eC(a, 255 & e.total_in), eC(a, e.total_in >> 8 & 255), eC(a, e.total_in >> 16 & 255), eC(a, e.total_in >> 24 & 255)) : (eD(a, e.adler >>> 16), eD(a, 65535 & e.adler)), eO(e), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? e_ : ef)
        },
        deflateEnd: e => {
            if (eY(e)) return ep;
            let t = e.state.status;
            return e.state = null, 113 === t ? eR(e, em) : e_
        },
        deflateSetDictionary: (e, t) => {
            let a = t.length;
            if (eY(e)) return ep;
            let s = e.state,
                i = s.wrap;
            if (2 === i || 1 === i && 42 !== s.status || s.lookahead) return ep;
            if (1 === i && (e.adler = X(e.adler, t, a, 0)), s.wrap = 0, a >= s.w_size) {
                0 === i && (eP(s.head), s.strstart = 0, s.block_start = 0, s.insert = 0);
                let e = new Uint8Array(s.w_size);
                e.set(t.subarray(a - s.w_size, a), 0), t = e, a = s.w_size
            }
            let r = e.avail_in,
                n = e.next_in,
                o = e.input;
            for (e.avail_in = a, e.next_in = 0, e.input = t, eM(s); s.lookahead >= 3;) {
                let e = s.strstart,
                    t = s.lookahead - 2;
                do s.ins_h = eL(s, s.ins_h, s.window[e + 3 - 1]), s.prev[e & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = e, e++; while (--t);
                s.strstart = e, s.lookahead = 2, eM(s)
            }
            return s.strstart += s.lookahead, s.block_start = s.strstart, s.insert = s.lookahead, s.lookahead = 0, s.match_length = s.prev_length = 2, s.match_available = 0, e.next_in = n, e.input = o, e.avail_in = r, s.wrap = i, e_
        }
    };
    let e0 = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var e2 = {
        assign: function(e) {
            let t = Array.prototype.slice.call(arguments, 1);
            for (; t.length;) {
                let a = t.shift();
                if (!!a) {
                    if ("object" != typeof a) throw TypeError(a + "must be non-object");
                    for (let t in a) e0(a, t) && (e[t] = a[t])
                }
            }
            return e
        },
        flattenChunks: e => {
            let t = 0;
            for (let a = 0, s = e.length; a < s; a++) t += e[a].length;
            let a = new Uint8Array(t);
            for (let t = 0, s = 0, i = e.length; t < i; t++) {
                let i = e[t];
                a.set(i, s), s += i.length
            }
            return a
        }
    };
    let e5 = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (e) {
        e5 = !1
    }
    let e4 = new Uint8Array(256);
    for (let e = 0; e < 256; e++) e4[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
    e4[254] = e4[254] = 1;
    let e3 = (e, t) => {
        if (t < 65534 && e.subarray && e5) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
        let a = "";
        for (let s = 0; s < t; s++) a += String.fromCharCode(e[s]);
        return a
    };
    var e6 = {
            string2buf: e => {
                if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(e);
                let t, a, s, i, r, n = e.length,
                    o = 0;
                for (i = 0; i < n; i++)(64512 & (a = e.charCodeAt(i))) == 55296 && i + 1 < n && (64512 & (s = e.charCodeAt(i + 1))) == 56320 && (a = 65536 + (a - 55296 << 10) + (s - 56320), i++), o += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
                for (r = 0, t = new Uint8Array(o), i = 0; r < o; i++)(64512 & (a = e.charCodeAt(i))) == 55296 && i + 1 < n && (64512 & (s = e.charCodeAt(i + 1))) == 56320 && (a = 65536 + (a - 55296 << 10) + (s - 56320), i++), a < 128 ? t[r++] = a : (a < 2048 ? t[r++] = 192 | a >>> 6 : (a < 65536 ? t[r++] = 224 | a >>> 12 : (t[r++] = 240 | a >>> 18, t[r++] = 128 | a >>> 12 & 63), t[r++] = 128 | a >>> 6 & 63), t[r++] = 128 | 63 & a);
                return t
            },
            buf2string: (e, t) => {
                let a, s;
                let i = t || e.length;
                if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(e.subarray(0, t));
                let r = Array(2 * i);
                for (s = 0, a = 0; a < i;) {
                    let t = e[a++];
                    if (t < 128) {
                        r[s++] = t;
                        continue
                    }
                    let n = e4[t];
                    if (n > 4) {
                        r[s++] = 65533, a += n - 1;
                        continue
                    }
                    for (t &= 2 === n ? 31 : 3 === n ? 15 : 7; n > 1 && a < i;) t = t << 6 | 63 & e[a++], n--;
                    if (n > 1) {
                        r[s++] = 65533;
                        continue
                    }
                    t < 65536 ? r[s++] = t : (t -= 65536, r[s++] = 55296 | t >> 10 & 1023, r[s++] = 56320 | 1023 & t)
                }
                return e3(r, s)
            },
            utf8border: (e, t) => {
                (t = t || e.length) > e.length && (t = e.length);
                let a = t - 1;
                for (; a >= 0 && (192 & e[a]) == 128;) a--;
                return a < 0 || 0 === a ? t : a + e4[e[a]] > t ? a : t
            }
        },
        e8 = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        };
    let e9 = Object.prototype.toString,
        {
            Z_NO_FLUSH: e7,
            Z_SYNC_FLUSH: te,
            Z_FULL_FLUSH: tt,
            Z_FINISH: ta,
            Z_OK: ts,
            Z_STREAM_END: ti,
            Z_DEFAULT_COMPRESSION: tr,
            Z_DEFAULT_STRATEGY: tn,
            Z_DEFLATED: to
        } = ea;
    
    function tl(e) {
        this.options = e2.assign({
            level: tr,
            method: to,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: tn
        }, e || {});
        let t = this.options;
        t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new e8, this.strm.avail_out = 0;
        let a = e1.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (a !== ts) throw Error(et[a]);
        if (t.header && e1.deflateSetHeader(this.strm, t.header), t.dictionary) {
            let e;
            if (e = "string" == typeof t.dictionary ? e6.string2buf(t.dictionary) : "[object ArrayBuffer]" === e9.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (a = e1.deflateSetDictionary(this.strm, e)) !== ts) throw Error(et[a]);
            this._dict_set = !0
        }
    }
    
    function td(e, t) {
        let a = new tl(t);
        if (a.push(e, !0), a.err) throw a.msg || et[a.err];
        return a.result
    }
    tl.prototype.push = function(e, t) {
        let a, s;
        let i = this.strm,
            r = this.options.chunkSize;
        if (this.ended) return !1;
        for (s = t === ~~t ? t : !0 === t ? ta : e7, "string" == typeof e ? i.input = e6.string2buf(e) : "[object ArrayBuffer]" === e9.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;;) {
            if (0 === i.avail_out && (i.output = new Uint8Array(r), i.next_out = 0, i.avail_out = r), (s === te || s === tt) && i.avail_out <= 6) {
                this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
                continue
            }
            if ((a = e1.deflate(i, s)) === ti) return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)), a = e1.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === ts;
            if (0 === i.avail_out) {
                this.onData(i.output);
                continue
            }
            if (s > 0 && i.next_out > 0) {
                this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
                continue
            }
            if (0 === i.avail_in) break
        }
        return !0
    }, tl.prototype.onData = function(e) {
        this.chunks.push(e)
    }, tl.prototype.onEnd = function(e) {
        e === ts && (this.result = e2.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };
    var th = function(e, t) {
        let a, s, i, r, n, o, l, d, h, c, u, _, f, p, m, g, b, w, k, y, v, x, T, S;
        let A = e.state;
        a = e.next_in, T = e.input, s = a + (e.avail_in - 5), i = e.next_out, S = e.output, r = i - (t - e.avail_out), n = i + (e.avail_out - 257), o = A.dmax, l = A.wsize, d = A.whave, h = A.wnext, c = A.window, u = A.hold, _ = A.bits, f = A.lencode, p = A.distcode, m = (1 << A.lenbits) - 1, g = (1 << A.distbits) - 1;
        e: do
                for (_ < 15 && (u += T[a++] << _, _ += 8, u += T[a++] << _, _ += 8), b = f[u & m];;) {
                    if (u >>>= w = b >>> 24, _ -= w, 0 == (w = b >>> 16 & 255)) S[i++] = 65535 & b;
                    else if (16 & w)
                        for (k = 65535 & b, (w &= 15) && (_ < w && (u += T[a++] << _, _ += 8), k += u & (1 << w) - 1, u >>>= w, _ -= w), _ < 15 && (u += T[a++] << _, _ += 8, u += T[a++] << _, _ += 8), b = p[u & g];;) {
                            if (u >>>= w = b >>> 24, _ -= w, 16 & (w = b >>> 16 & 255)) {
                                if (y = 65535 & b, _ < (w &= 15) && (u += T[a++] << _, (_ += 8) < w && (u += T[a++] << _, _ += 8)), (y += u & (1 << w) - 1) > o) {
                                    e.msg = "invalid distance too far back", A.mode = 16209;
                                    break e
                                }
                                if (u >>>= w, _ -= w, y > (w = i - r)) {
                                    if ((w = y - w) > d && A.sane) {
                                        e.msg = "invalid distance too far back", A.mode = 16209;
                                        break e
                                    }
                                    if (v = 0, x = c, 0 === h) {
                                        if (v += l - w, w < k) {
                                            k -= w;
                                            do S[i++] = c[v++]; while (--w);
                                            v = i - y, x = S
                                        }
                                    } else if (h < w) {
                                        if (v += l + h - w, (w -= h) < k) {
                                            k -= w;
                                            do S[i++] = c[v++]; while (--w);
                                            if (v = 0, h < k) {
                                                k -= w = h;
                                                do S[i++] = c[v++]; while (--w);
                                                v = i - y, x = S
                                            }
                                        }
                                    } else if (v += h - w, w < k) {
                                        k -= w;
                                        do S[i++] = c[v++]; while (--w);
                                        v = i - y, x = S
                                    }
                                    for (; k > 2;) S[i++] = x[v++], S[i++] = x[v++], S[i++] = x[v++], k -= 3;
                                    k && (S[i++] = x[v++], k > 1 && (S[i++] = x[v++]))
                                } else {
                                    v = i - y;
                                    do S[i++] = S[v++], S[i++] = S[v++], S[i++] = S[v++], k -= 3; while (k > 2);
                                    k && (S[i++] = S[v++], k > 1 && (S[i++] = S[v++]))
                                }
                            } else if ((64 & w) == 0) {
                                b = p[(65535 & b) + (u & (1 << w) - 1)];
                                continue
                            } else {
                                e.msg = "invalid distance code", A.mode = 16209;
                                break e
                            }
                            break
                        } else if ((64 & w) == 0) {
                            b = f[(65535 & b) + (u & (1 << w) - 1)];
                            continue
                        } else if (32 & w) {
                        A.mode = 16191;
                        break e
                    } else {
                        e.msg = "invalid literal/length code", A.mode = 16209;
                        break e
                    }
                    break
                }
            while (a < s && i < n);
        a -= k = _ >> 3, _ -= k << 3, u &= (1 << _) - 1, e.next_in = a, e.next_out = i, e.avail_in = a < s ? 5 + (s - a) : 5 - (a - s), e.avail_out = i < n ? 257 + (n - i) : 257 - (i - n), A.hold = u, A.bits = _
    };
    let tc = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
        tu = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
        t_ = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
        tf = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var tp = (e, t, a, s, i, r, n, o) => {
        let l, d, h, c, u, _, f, p, m;
        let g = o.bits,
            b = 0,
            w = 0,
            k = 0,
            y = 0,
            v = 0,
            x = 0,
            T = 0,
            S = 0,
            A = 0,
            z = 0,
            E = null,
            R = new Uint16Array(16),
            N = new Uint16Array(16),
            P = null;
        for (b = 0; b <= 15; b++) R[b] = 0;
        for (w = 0; w < s; w++) R[t[a + w]]++;
        for (y = 15, v = g; y >= 1 && 0 === R[y]; y--);
        if (v > y && (v = y), 0 === y) return i[r++] = 0x1400000, i[r++] = 0x1400000, o.bits = 1, 0;
        for (k = 1; k < y && 0 === R[k]; k++);
        for (v < k && (v = k), S = 1, b = 1; b <= 15; b++)
            if (S <<= 1, (S -= R[b]) < 0) return -1;
        if (S > 0 && (0 === e || 1 !== y)) return -1;
        for (b = 1, N[1] = 0; b < 15; b++) N[b + 1] = N[b] + R[b];
        for (w = 0; w < s; w++) 0 !== t[a + w] && (n[N[t[a + w]]++] = w);
        if (0 === e ? (E = P = n, _ = 20) : 1 === e ? (E = tc, P = tu, _ = 257) : (E = t_, P = tf, _ = 0), z = 0, w = 0, b = k, u = r, x = v, T = 0, h = -1, c = (A = 1 << v) - 1, 1 === e && A > 852 || 2 === e && A > 592) return 1;
        for (;;) {
            f = b - T, n[w] + 1 < _ ? (p = 0, m = n[w]) : n[w] >= _ ? (p = P[n[w] - _], m = E[n[w] - _]) : (p = 96, m = 0), l = 1 << b - T, k = d = 1 << x;
            do i[u + (z >> T) + (d -= l)] = f << 24 | p << 16 | m | 0; while (0 !== d);
            for (l = 1 << b - 1; z & l;) l >>= 1;
            if (0 !== l ? (z &= l - 1, z += l) : z = 0, w++, 0 == --R[b]) {
                if (b === y) break;
                b = t[a + n[w]]
            }
            if (b > v && (z & c) !== h) {
                for (0 === T && (T = v), u += k, S = 1 << (x = b - T); x + T < y && !((S -= R[x + T]) <= 0);) {
                    ;
                    x++, S <<= 1
                }
                if (A += 1 << x, 1 === e && A > 852 || 2 === e && A > 592) return 1;
                i[h = z & c] = v << 24 | x << 16 | u - r | 0
            }
        }
        return 0 !== z && (i[u + z] = b - T << 24 | 4194304), o.bits = v, 0
    };
    let {
        Z_FINISH: tm,
        Z_BLOCK: tg,
        Z_TREES: tb,
        Z_OK: tw,
        Z_STREAM_END: tk,
        Z_NEED_DICT: ty,
        Z_STREAM_ERROR: tv,
        Z_DATA_ERROR: tx,
        Z_MEM_ERROR: tT,
        Z_BUF_ERROR: tS,
        Z_DEFLATED: tA
    } = ea, tz = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
    
    function tE() {
        this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
    }
    let tR = e => {
            if (!e) return 1;
            let t = e.state;
            return !t || t.strm !== e || t.mode < 16180 || t.mode > 16211 ? 1 : 0
        },
        tN = e => {
            if (tR(e)) return tv;
            let t = e.state;
            return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 16180, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(852), t.distcode = t.distdyn = new Int32Array(592), t.sane = 1, t.back = -1, tw
        },
        tP = e => {
            if (tR(e)) return tv;
            let t = e.state;
            return t.wsize = 0, t.whave = 0, t.wnext = 0, tN(e)
        },
        tH = (e, t) => {
            let a;
            if (tR(e)) return tv;
            let s = e.state;
            return (t < 0 ? (a = 0, t = -t) : (a = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? tv : (null !== s.window && s.wbits !== t && (s.window = null), s.wrap = a, s.wbits = t, tP(e))
        },
        tL = (e, t) => {
            if (!e) return tv;
            let a = new tE;
            e.state = a, a.strm = e, a.window = null, a.mode = 16180;
            let s = tH(e, t);
            return s !== tw && (e.state = null), s
        },
        tO = !0,
        tU = e => {
            if (tO) {
                s = new Int32Array(512), i = new Int32Array(32);
                let t = 0;
                for (; t < 144;) e.lens[t++] = 8;
                for (; t < 256;) e.lens[t++] = 9;
                for (; t < 280;) e.lens[t++] = 7;
                for (; t < 288;) e.lens[t++] = 8;
                for (tp(1, e.lens, 0, 288, s, 0, e.work, {
                        bits: 9
                    }), t = 0; t < 32;) e.lens[t++] = 5;
                tp(2, e.lens, 0, 32, i, 0, e.work, {
                    bits: 5
                }), tO = !1
            }
            e.lencode = s, e.lenbits = 9, e.distcode = i, e.distbits = 5
        },
        tC = (e, t, a, s) => {
            let i;
            let r = e.state;
            return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new Uint8Array(r.wsize)), s >= r.wsize ? (r.window.set(t.subarray(a - r.wsize, a), 0), r.wnext = 0, r.whave = r.wsize) : ((i = r.wsize - r.wnext) > s && (i = s), r.window.set(t.subarray(a - s, a - s + i), r.wnext), (s -= i) ? (r.window.set(t.subarray(a - s, a), 0), r.wnext = s, r.whave = r.wsize) : (r.wnext += i, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += i))), 0
        };
    var tD = {
            inflateReset: tP,
            inflateInit2: tL,
            inflate: (e, t) => {
                let a, s, i, r, n, o, l, d, h, c, u, _, f, p, m, g, b, w, k, y, v, x, T, S;
                let A = 0,
                    z = new Uint8Array(4),
                    E = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                if (tR(e) || !e.output || !e.input && 0 !== e.avail_in) return tv;
                16191 === (a = e.state).mode && (a.mode = 16192), n = e.next_out, i = e.output, l = e.avail_out, r = e.next_in, s = e.input, o = e.avail_in, d = a.hold, h = a.bits, c = o, u = l, x = tw;
                t: for (;;) switch (a.mode) {
                    case 16180:
                        if (0 === a.wrap) {
                            a.mode = 16192;
                            break
                        }
                        for (; h < 16;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        if (2 & a.wrap && 35615 === d) {
                            0 === a.wbits && (a.wbits = 15), a.check = 0, z[0] = 255 & d, z[1] = d >>> 8 & 255, a.check = ee(a.check, z, 2, 0), d = 0, h = 0, a.mode = 16181;
                            break
                        }
                        if (a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & d) << 8) + (d >> 8)) % 31) {
                            e.msg = "incorrect header check", a.mode = 16209;
                            break
                        }
                        if ((15 & d) !== tA) {
                            e.msg = "unknown compression method", a.mode = 16209;
                            break
                        }
                        if (d >>>= 4, h -= 4, v = (15 & d) + 8, 0 === a.wbits && (a.wbits = v), v > 15 || v > a.wbits) {
                            e.msg = "invalid window size", a.mode = 16209;
                            break
                        }
                        a.dmax = 1 << a.wbits, a.flags = 0, e.adler = a.check = 1, a.mode = 512 & d ? 16189 : 16191, d = 0, h = 0;
                        break;
                    case 16181:
                        for (; h < 16;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        if (a.flags = d, (255 & a.flags) !== tA) {
                            e.msg = "unknown compression method", a.mode = 16209;
                            break
                        }
                        if (57344 & a.flags) {
                            e.msg = "unknown header flags set", a.mode = 16209;
                            break
                        }
                        a.head && (a.head.text = d >> 8 & 1), 512 & a.flags && 4 & a.wrap && (z[0] = 255 & d, z[1] = d >>> 8 & 255, a.check = ee(a.check, z, 2, 0)), d = 0, h = 0, a.mode = 16182;
                    case 16182:
                        for (; h < 32;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        a.head && (a.head.time = d), 512 & a.flags && 4 & a.wrap && (z[0] = 255 & d, z[1] = d >>> 8 & 255, z[2] = d >>> 16 & 255, z[3] = d >>> 24 & 255, a.check = ee(a.check, z, 4, 0)), d = 0, h = 0, a.mode = 16183;
                    case 16183:
                        for (; h < 16;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        a.head && (a.head.xflags = 255 & d, a.head.os = d >> 8), 512 & a.flags && 4 & a.wrap && (z[0] = 255 & d, z[1] = d >>> 8 & 255, a.check = ee(a.check, z, 2, 0)), d = 0, h = 0, a.mode = 16184;
                    case 16184:
                        if (1024 & a.flags) {
                            for (; h < 16;) {
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            a.length = d, a.head && (a.head.extra_len = d), 512 & a.flags && 4 & a.wrap && (z[0] = 255 & d, z[1] = d >>> 8 & 255, a.check = ee(a.check, z, 2, 0)), d = 0, h = 0
                        } else a.head && (a.head.extra = null);
                        a.mode = 16185;
                    case 16185:
                        if (1024 & a.flags && ((_ = a.length) > o && (_ = o), _ && (a.head && (v = a.head.extra_len - a.length, !a.head.extra && (a.head.extra = new Uint8Array(a.head.extra_len)), a.head.extra.set(s.subarray(r, r + _), v)), 512 & a.flags && 4 & a.wrap && (a.check = ee(a.check, s, _, r)), o -= _, r += _, a.length -= _), a.length)) break t;
                        a.length = 0, a.mode = 16186;
                    case 16186:
                        if (2048 & a.flags) {
                            if (0 === o) break t;
                            _ = 0;
                            do v = s[r + _++], a.head && v && a.length < 65536 && (a.head.name += String.fromCharCode(v)); while (v && _ < o);
                            if (512 & a.flags && 4 & a.wrap && (a.check = ee(a.check, s, _, r)), o -= _, r += _, v) break t
                        } else a.head && (a.head.name = null);
                        a.length = 0, a.mode = 16187;
                    case 16187:
                        if (4096 & a.flags) {
                            if (0 === o) break t;
                            _ = 0;
                            do v = s[r + _++], a.head && v && a.length < 65536 && (a.head.comment += String.fromCharCode(v)); while (v && _ < o);
                            if (512 & a.flags && 4 & a.wrap && (a.check = ee(a.check, s, _, r)), o -= _, r += _, v) break t
                        } else a.head && (a.head.comment = null);
                        a.mode = 16188;
                    case 16188:
                        if (512 & a.flags) {
                            for (; h < 16;) {
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            if (4 & a.wrap && d !== (65535 & a.check)) {
                                e.msg = "header crc mismatch", a.mode = 16209;
                                break
                            }
                            d = 0, h = 0
                        }
                        a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), e.adler = a.check = 0, a.mode = 16191;
                        break;
                    case 16189:
                        for (; h < 32;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        e.adler = a.check = tz(d), d = 0, h = 0, a.mode = 16190;
                    case 16190:
                        if (0 === a.havedict) return e.next_out = n, e.avail_out = l, e.next_in = r, e.avail_in = o, a.hold = d, a.bits = h, ty;
                        e.adler = a.check = 1, a.mode = 16191;
                    case 16191:
                        if (t === tg || t === tb) break t;
                    case 16192:
                        if (a.last) {
                            d >>>= 7 & h, h -= 7 & h, a.mode = 16206;
                            break
                        }
                        for (; h < 3;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        switch (a.last = 1 & d, h -= 1, 3 & (d >>>= 1)) {
                            case 0:
                                a.mode = 16193;
                                break;
                            case 1:
                                if (tU(a), a.mode = 16199, t === tb) {
                                    d >>>= 2, h -= 2;
                                    break t
                                }
                                break;
                            case 2:
                                a.mode = 16196;
                                break;
                            case 3:
                                e.msg = "invalid block type", a.mode = 16209
                        }
                        d >>>= 2, h -= 2;
                        break;
                    case 16193:
                        for (d >>>= 7 & h, h -= 7 & h; h < 32;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        if ((65535 & d) != (d >>> 16 ^ 65535)) {
                            e.msg = "invalid stored block lengths", a.mode = 16209;
                            break
                        }
                        if (a.length = 65535 & d, d = 0, h = 0, a.mode = 16194, t === tb) break t;
                    case 16194:
                        a.mode = 16195;
                    case 16195:
                        if (_ = a.length) {
                            if (_ > o && (_ = o), _ > l && (_ = l), 0 === _) break t;
                            i.set(s.subarray(r, r + _), n), o -= _, r += _, l -= _, n += _, a.length -= _;
                            break
                        }
                        a.mode = 16191;
                        break;
                    case 16196:
                        for (; h < 14;) {
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        if (a.nlen = (31 & d) + 257, d >>>= 5, h -= 5, a.ndist = (31 & d) + 1, d >>>= 5, h -= 5, a.ncode = (15 & d) + 4, d >>>= 4, h -= 4, a.nlen > 286 || a.ndist > 30) {
                            e.msg = "too many length or distance symbols", a.mode = 16209;
                            break
                        }
                        a.have = 0, a.mode = 16197;
                    case 16197:
                        for (; a.have < a.ncode;) {
                            for (; h < 3;) {
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            a.lens[E[a.have++]] = 7 & d, d >>>= 3, h -= 3
                        }
                        for (; a.have < 19;) a.lens[E[a.have++]] = 0;
                        if (a.lencode = a.lendyn, a.lenbits = 7, T = {
                                bits: a.lenbits
                            }, x = tp(0, a.lens, 0, 19, a.lencode, 0, a.work, T), a.lenbits = T.bits, x) {
                            e.msg = "invalid code lengths set", a.mode = 16209;
                            break
                        }
                        a.have = 0, a.mode = 16198;
                    case 16198:
                        for (; a.have < a.nlen + a.ndist;) {
                            for (; m = (A = a.lencode[d & (1 << a.lenbits) - 1]) >>> 24, g = A >>> 16 & 255, b = 65535 & A, !(m <= h);) {
                                ;
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            if (b < 16) d >>>= m, h -= m, a.lens[a.have++] = b;
                            else {
                                if (16 === b) {
                                    for (S = m + 2; h < S;) {
                                        if (0 === o) break t;
                                        o--, d += s[r++] << h, h += 8
                                    }
                                    if (d >>>= m, h -= m, 0 === a.have) {
                                        e.msg = "invalid bit length repeat", a.mode = 16209;
                                        break
                                    }
                                    v = a.lens[a.have - 1], _ = 3 + (3 & d), d >>>= 2, h -= 2
                                } else if (17 === b) {
                                    for (S = m + 3; h < S;) {
                                        if (0 === o) break t;
                                        o--, d += s[r++] << h, h += 8
                                    }
                                    d >>>= m, h -= m, v = 0, _ = 3 + (7 & d), d >>>= 3, h -= 3
                                } else {
                                    for (S = m + 7; h < S;) {
                                        if (0 === o) break t;
                                        o--, d += s[r++] << h, h += 8
                                    }
                                    d >>>= m, h -= m, v = 0, _ = 11 + (127 & d), d >>>= 7, h -= 7
                                }
                                if (a.have + _ > a.nlen + a.ndist) {
                                    e.msg = "invalid bit length repeat", a.mode = 16209;
                                    break
                                }
                                for (; _--;) a.lens[a.have++] = v
                            }
                        }
                        if (16209 === a.mode) break;
                        if (0 === a.lens[256]) {
                            e.msg = "invalid code -- missing end-of-block", a.mode = 16209;
                            break
                        }
                        if (a.lenbits = 9, T = {
                                bits: a.lenbits
                            }, x = tp(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, T), a.lenbits = T.bits, x) {
                            e.msg = "invalid literal/lengths set", a.mode = 16209;
                            break
                        }
                        if (a.distbits = 6, a.distcode = a.distdyn, T = {
                                bits: a.distbits
                            }, x = tp(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, T), a.distbits = T.bits, x) {
                            e.msg = "invalid distances set", a.mode = 16209;
                            break
                        }
                        if (a.mode = 16199, t === tb) break t;
                    case 16199:
                        a.mode = 16200;
                    case 16200:
                        if (o >= 6 && l >= 258) {
                            e.next_out = n, e.avail_out = l, e.next_in = r, e.avail_in = o, a.hold = d, a.bits = h, th(e, u), n = e.next_out, i = e.output, l = e.avail_out, r = e.next_in, s = e.input, o = e.avail_in, d = a.hold, h = a.bits, 16191 === a.mode && (a.back = -1);
                            break
                        }
                        for (a.back = 0; m = (A = a.lencode[d & (1 << a.lenbits) - 1]) >>> 24, g = A >>> 16 & 255, b = 65535 & A, !(m <= h);) {
                            ;
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        if (g && (240 & g) == 0) {
                            for (w = m, k = g, y = b; m = (A = a.lencode[y + ((d & (1 << w + k) - 1) >> w)]) >>> 24, g = A >>> 16 & 255, b = 65535 & A, !(w + m <= h);) {
                                ;
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            d >>>= w, h -= w, a.back += w
                        }
                        if (d >>>= m, h -= m, a.back += m, a.length = b, 0 === g) {
                            a.mode = 16205;
                            break
                        }
                        if (32 & g) {
                            a.back = -1, a.mode = 16191;
                            break
                        }
                        if (64 & g) {
                            e.msg = "invalid literal/length code", a.mode = 16209;
                            break
                        }
                        a.extra = 15 & g, a.mode = 16201;
                    case 16201:
                        if (a.extra) {
                            for (S = a.extra; h < S;) {
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            a.length += d & (1 << a.extra) - 1, d >>>= a.extra, h -= a.extra, a.back += a.extra
                        }
                        a.was = a.length, a.mode = 16202;
                    case 16202:
                        for (; m = (A = a.distcode[d & (1 << a.distbits) - 1]) >>> 24, g = A >>> 16 & 255, b = 65535 & A, !(m <= h);) {
                            ;
                            if (0 === o) break t;
                            o--, d += s[r++] << h, h += 8
                        }
                        if ((240 & g) == 0) {
                            for (w = m, k = g, y = b; m = (A = a.distcode[y + ((d & (1 << w + k) - 1) >> w)]) >>> 24, g = A >>> 16 & 255, b = 65535 & A, !(w + m <= h);) {
                                ;
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            d >>>= w, h -= w, a.back += w
                        }
                        if (d >>>= m, h -= m, a.back += m, 64 & g) {
                            e.msg = "invalid distance code", a.mode = 16209;
                            break
                        }
                        a.offset = b, a.extra = 15 & g, a.mode = 16203;
                    case 16203:
                        if (a.extra) {
                            for (S = a.extra; h < S;) {
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            a.offset += d & (1 << a.extra) - 1, d >>>= a.extra, h -= a.extra, a.back += a.extra
                        }
                        if (a.offset > a.dmax) {
                            e.msg = "invalid distance too far back", a.mode = 16209;
                            break
                        }
                        a.mode = 16204;
                    case 16204:
                        if (0 === l) break t;
                        if (_ = u - l, a.offset > _) {
                            if ((_ = a.offset - _) > a.whave && a.sane) {
                                e.msg = "invalid distance too far back", a.mode = 16209;
                                break
                            }
                            _ > a.wnext ? (_ -= a.wnext, f = a.wsize - _) : f = a.wnext - _, _ > a.length && (_ = a.length), p = a.window
                        } else p = i, f = n - a.offset, _ = a.length;
                        _ > l && (_ = l), l -= _, a.length -= _;
                        do i[n++] = p[f++]; while (--_);
                        0 === a.length && (a.mode = 16200);
                        break;
                    case 16205:
                        if (0 === l) break t;
                        i[n++] = a.length, l--, a.mode = 16200;
                        break;
                    case 16206:
                        if (a.wrap) {
                            for (; h < 32;) {
                                if (0 === o) break t;
                                o--, d |= s[r++] << h, h += 8
                            }
                            if (u -= l, e.total_out += u, a.total += u, 4 & a.wrap && u && (e.adler = a.check = a.flags ? ee(a.check, i, u, n - u) : X(a.check, i, u, n - u)), u = l, 4 & a.wrap && (a.flags ? d : tz(d)) !== a.check) {
                                e.msg = "incorrect data check", a.mode = 16209;
                                break
                            }
                            d = 0, h = 0
                        }
                        a.mode = 16207;
                    case 16207:
                        if (a.wrap && a.flags) {
                            for (; h < 32;) {
                                if (0 === o) break t;
                                o--, d += s[r++] << h, h += 8
                            }
                            if (4 & a.wrap && d !== (0xffffffff & a.total)) {
                                e.msg = "incorrect length check", a.mode = 16209;
                                break
                            }
                            d = 0, h = 0
                        }
                        a.mode = 16208;
                    case 16208:
                        x = tk;
                        break t;
                    case 16209:
                        x = tx;
                        break t;
                    case 16210:
                        return tT;
                    default:
                        return tv
                }
                return e.next_out = n, e.avail_out = l, e.next_in = r, e.avail_in = o, a.hold = d, a.bits = h, (a.wsize || u !== e.avail_out && a.mode < 16209 && (a.mode < 16206 || t !== tm)) && tC(e, e.output, e.next_out, u - e.avail_out), c -= e.avail_in, u -= e.avail_out, e.total_in += c, e.total_out += u, a.total += u, 4 & a.wrap && u && (e.adler = a.check = a.flags ? ee(a.check, i, u, e.next_out - u) : X(a.check, i, u, e.next_out - u)), e.data_type = a.bits + (a.last ? 64 : 0) + (16191 === a.mode ? 128 : 0) + (16199 === a.mode || 16194 === a.mode ? 256 : 0), (0 === c && 0 === u || t === tm) && x === tw && (x = tS), x
            },
            inflateEnd: e => {
                if (tR(e)) return tv;
                let t = e.state;
                return t.window && (t.window = null), e.state = null, tw
            },
            inflateGetHeader: (e, t) => {
                if (tR(e)) return tv;
                let a = e.state;
                return (2 & a.wrap) == 0 ? tv : (a.head = t, t.done = !1, tw)
            },
            inflateSetDictionary: (e, t) => {
                let a, s;
                let i = t.length;
                return tR(e) || 0 !== (a = e.state).wrap && 16190 !== a.mode ? tv : 16190 === a.mode && (s = X(s = 1, t, i, 0)) !== a.check ? tx : tC(e, t, i, i) ? (a.mode = 16210, tT) : (a.havedict = 1, tw)
            }
        },
        tI = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        };
    let tB = Object.prototype.toString,
        {
            Z_NO_FLUSH: tM,
            Z_FINISH: tF,
            Z_OK: tZ,
            Z_STREAM_END: t$,
            Z_NEED_DICT: tj,
            Z_STREAM_ERROR: tG,
            Z_DATA_ERROR: tK,
            Z_MEM_ERROR: tV
        } = ea;
    
    function tW(e) {
        this.options = e2.assign({
            chunkSize: 65536,
            windowBits: 15,
            to: ""
        }, e || {});
        let t = this.options;
        t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new e8, this.strm.avail_out = 0;
        let a = tD.inflateInit2(this.strm, t.windowBits);
        if (a !== tZ) throw Error(et[a]);
        if (this.header = new tI, tD.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = e6.string2buf(t.dictionary) : "[object ArrayBuffer]" === tB.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (a = tD.inflateSetDictionary(this.strm, t.dictionary)) !== tZ)) throw Error(et[a])
    }
    
    function tJ(e, t) {
        let a = new tW(t);
        if (a.push(e), a.err) throw a.msg || et[a.err];
        return a.result
    }
    tW.prototype.push = function(e, t) {
        let a, s, i;
        let r = this.strm,
            n = this.options.chunkSize,
            o = this.options.dictionary;
        if (this.ended) return !1;
        for (s = t === ~~t ? t : !0 === t ? tF : tM, "[object ArrayBuffer]" === tB.call(e) ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length;;) {
            for (0 === r.avail_out && (r.output = new Uint8Array(n), r.next_out = 0, r.avail_out = n), (a = tD.inflate(r, s)) === tj && o && ((a = tD.inflateSetDictionary(r, o)) === tZ ? a = tD.inflate(r, s) : a === tK && (a = tj)); r.avail_in > 0 && a === t$ && r.state.wrap > 0 && 0 !== e[r.next_in];) tD.inflateReset(r), a = tD.inflate(r, s);
            switch (a) {
                case tG:
                case tK:
                case tj:
                case tV:
                    return this.onEnd(a), this.ended = !0, !1
            }
            if (i = r.avail_out, r.next_out && (0 === r.avail_out || a === t$)) {
                if ("string" === this.options.to) {
                    let e = e6.utf8border(r.output, r.next_out),
                        t = r.next_out - e,
                        a = e6.buf2string(r.output, e);
                    r.next_out = t, r.avail_out = n - t, t && r.output.set(r.output.subarray(e, e + t), 0), this.onData(a)
                } else this.onData(r.output.length === r.next_out ? r.output : r.output.subarray(0, r.next_out))
            }
            if (a !== tZ || 0 !== i) {
                if (a === t$) return a = tD.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
                if (0 === r.avail_in) break
            }
        }
        return !0
    }, tW.prototype.onData = function(e) {
        this.chunks.push(e)
    }, tW.prototype.onEnd = function(e) {
        e === tZ && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = e2.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };
    let {
        Deflate: tY,
        deflate: tq,
        deflateRaw: tX,
        gzip: tQ
    } = {
        Deflate: tl,
        deflate: td,
        deflateRaw: function(e, t) {
            return (t = t || {}).raw = !0, td(e, t)
        },
        gzip: function(e, t) {
            return (t = t || {}).gzip = !0, td(e, t)
        },
        constants: ea
    }, {
        Inflate: t1,
        inflate: t0,
        inflateRaw: t2,
        ungzip: t5
    } = {
        Inflate: tW,
        inflate: tJ,
        inflateRaw: function(e, t) {
            return (t = t || {}).raw = !0, tJ(e, t)
        },
        ungzip: tJ,
        constants: ea
    };
    
    function t4(e) {
        return /^\d+$/.test(e) && (e = Number.parseInt(e, 10)), e
    }
    let t3 = {
            Siri: {
                Settings: {
                    CountryCode: "TW",
                    SiriLocale: "zh_TW",
                    Region: "OFF",
                    SiriResponseLanguageVariant: "zh_TW"
                }
            },
            Spotlight: {
                Settings: {
                    CountryCode: "US",
                    Domains: ["web", "itunes", "app_store", "movies", "restaurants", "maps"],
                    Functions: ["flightutilities", "lookup", "mail", "messages", "news", "safari", "siri", "spotlight", "visualintelligence"],
                    SafariSmartHistory: !0
                },
                Configs: {
                    VisualIntelligence: {
                        EnableDomains: ["pets", "media", "books", "art", "nature", "landmarks"],
                        SupportedDomains: ["ART", "BOOK", "MEDIA", "LANDMARK", "ANIMALS", "BIRDS", "FOOD", "SIGN_SYMBOL", "AUTO_SYMBOL", "DOGS", "NATURE", "NATURAL_LANDMARK", "INSECTS", "REPTILES", "ALBUM", "STOREFRONT", "LAUNDRY_CARE_SYMBOL", "CATS", "OBJECT_2D", "SCULPTURE", "SKYLINE", "MAMMALS"]
                    }
                }
            },
            Default: {
                Settings: {
                    LogLevel: "WARN"
                },
                Configs: {
                    Storefront: {
                        AE: "143481",
                        AF: "143610",
                        AG: "143540",
                        AI: "143538",
                        AL: "143575",
                        AM: "143524",
                        AO: "143564",
                        AR: "143505",
                        AT: "143445",
                        AU: "143460",
                        AZ: "143568",
                        BA: "143612",
                        BB: "143541",
                        BD: "143490",
                        BE: "143446",
                        BF: "143578",
                        BG: "143526",
                        BH: "143559",
                        BJ: "143576",
                        BM: "143542",
                        BN: "143560",
                        BO: "143556",
                        BR: "143503",
                        BS: "143539",
                        BT: "143577",
                        BW: "143525",
                        BY: "143565",
                        BZ: "143555",
                        CA: "143455",
                        CD: "143613",
                        CG: "143582",
                        CH: "143459",
                        CI: "143527",
                        CL: "143483",
                        CM: "143574",
                        CN: "143465",
                        CO: "143501",
                        CR: "143495",
                        CV: "143580",
                        CY: "143557",
                        CZ: "143489",
                        DE: "143443",
                        DK: "143458",
                        DM: "143545",
                        DO: "143508",
                        DZ: "143563",
                        EC: "143509",
                        EE: "143518",
                        EG: "143516",
                        ES: "143454",
                        FI: "143447",
                        FJ: "143583",
                        FM: "143591",
                        FR: "143442",
                        GA: "143614",
                        GB: "143444",
                        GD: "143546",
                        GF: "143615",
                        GH: "143573",
                        GM: "143584",
                        GR: "143448",
                        GT: "143504",
                        GW: "143585",
                        GY: "143553",
                        HK: "143463",
                        HN: "143510",
                        HR: "143494",
                        HU: "143482",
                        ID: "143476",
                        IE: "143449",
                        IL: "143491",
                        IN: "143467",
                        IQ: "143617",
                        IS: "143558",
                        IT: "143450",
                        JM: "143511",
                        JO: "143528",
                        JP: "143462",
                        KE: "143529",
                        KG: "143586",
                        KH: "143579",
                        KN: "143548",
                        KP: "143466",
                        KR: "143466",
                        KW: "143493",
                        KY: "143544",
                        KZ: "143517",
                        TC: "143552",
                        TD: "143581",
                        TJ: "143603",
                        TH: "143475",
                        TM: "143604",
                        TN: "143536",
                        TO: "143608",
                        TR: "143480",
                        TT: "143551",
                        TW: "143470",
                        TZ: "143572",
                        LA: "143587",
                        LB: "143497",
                        LC: "143549",
                        LI: "143522",
                        LK: "143486",
                        LR: "143588",
                        LT: "143520",
                        LU: "143451",
                        LV: "143519",
                        LY: "143567",
                        MA: "143620",
                        MD: "143523",
                        ME: "143619",
                        MG: "143531",
                        MK: "143530",
                        ML: "143532",
                        MM: "143570",
                        MN: "143592",
                        MO: "143515",
                        MR: "143590",
                        MS: "143547",
                        MT: "143521",
                        MU: "143533",
                        MV: "143488",
                        MW: "143589",
                        MX: "143468",
                        MY: "143473",
                        MZ: "143593",
                        NA: "143594",
                        NE: "143534",
                        NG: "143561",
                        NI: "143512",
                        NL: "143452",
                        NO: "143457",
                        NP: "143484",
                        NR: "143606",
                        NZ: "143461",
                        OM: "143562",
                        PA: "143485",
                        PE: "143507",
                        PG: "143597",
                        PH: "143474",
                        PK: "143477",
                        PL: "143478",
                        PT: "143453",
                        PW: "143595",
                        PY: "143513",
                        QA: "143498",
                        RO: "143487",
                        RS: "143500",
                        RU: "143469",
                        RW: "143621",
                        SA: "143479",
                        SB: "143601",
                        SC: "143599",
                        SE: "143456",
                        SG: "143464",
                        SI: "143499",
                        SK: "143496",
                        SL: "143600",
                        SN: "143535",
                        SR: "143554",
                        ST: "143598",
                        SV: "143506",
                        SZ: "143602",
                        UA: "143492",
                        UG: "143537",
                        US: "143441",
                        UY: "143514",
                        UZ: "143566",
                        VC: "143550",
                        VE: "143502",
                        VG: "143543",
                        VN: "143471",
                        VU: "143609",
                        XK: "143624",
                        YE: "143571",
                        ZA: "143472",
                        ZM: "143622",
                        ZW: "143605"
                    }
                }
            }
        },
        t6 = new URL($request.url);
    d.info(`url: ${t6.toJSON()}`);
    let t8 = t6.pathname.split("/").filter(Boolean);
    d.info(`PATHs: ${t8}`);
    let t9 = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
    d.info(`FORMAT: ${t9}`);
    let t7 = [];
    switch (t6.hostname) {
        case "api.smoot.apple.cn":
        case "api.smoot.apple.com":
        case "api2.smoot.apple.com":
        default:
            t7.push("Spotlight");
            break;
        case "guzzoni.smoot.apple.com":
        case "api-siri.smoot.apple.com":
            t7.push("Siri")
    }
    d.info(`PLATFORM: ${t7}`), (async () => {
        let {
            Settings: e,
            Caches: t,
            Configs: a
        } = function(e, t, a) {
            d.log("☑️ Set Environment Variables");
            let {
                Settings: s,
                Caches: i,
                Configs: r
            } = function(e, t, a) {
                t = [t].flat(Number.POSITIVE_INFINITY);
                let s = {
                    Settings: a?.Default?.Settings || {},
                    Configs: a?.Default?.Configs || {},
                    Caches: {}
                };
                switch (t.forEach(e => {
                        s.Settings = {
                            ...s.Settings,
                            ...a?.[e]?.Settings
                        }, s.Configs = {
                            ...s.Configs,
                            ...a?.[e]?.Configs
                        }
                    }), typeof $argument) {
                    case "string":
                        $argument = Object.fromEntries($argument.split("&").map(e => e.split("=", 2).map(e => e.replace(/\"/g, ""))));
                    case "object": {
                        let e = {};
                        Object.keys($argument).forEach(t => h.set(e, t, $argument[t])), s.Settings = {
                            ...s.Settings,
                            ...e
                        }
                    }
                }
                let i = _.getItem(e);
                return i && t.forEach(e => {
                        switch (typeof i?.[e]?.Settings) {
                            case "string":
                                i[e].Settings = JSON.parse(i[e].Settings || "{}");
                            case "object":
                                s.Settings = {
                                    ...s.Settings,
                                    ...i[e].Settings
                                }
                        }
                        switch (typeof i?.[e]?.Caches) {
                            case "string":
                                i[e].Caches = JSON.parse(i[e].Caches || "{}");
                            case "object":
                                s.Caches = {
                                    ...s.Caches,
                                    ...i[e].Caches
                                }
                        }
                    }),
                    function e(t, a) {
                        for (let s in t) {
                            let i = t[s];
                            t[s] = "object" == typeof i && null !== i ? e(i, a) : a(s, i)
                        }
                        return t
                    }(s.Settings, (e, t) => ("true" === t || "false" === t ? t = JSON.parse(t) : "string" == typeof t && (t = t.includes(",") ? t.split(",").map(e => t4(e)) : t4(t)), t)), s
            }(e, t, a);
            switch (t.toString()) {
                case "Siri":
                    break;
                case "Spotlight":
                    !Array.isArray(s?.Domains) && h.set(s, "Domains", s?.Domains ? [s.Domains.toString()] : []), !Array.isArray(s?.Functions) && h.set(s, "Functions", s?.Functions ? [s.Functions.toString()] : [])
            }
            if (d.info(`typeof Settings: ${typeof s}`, `Settings: ${JSON.stringify(s,null,2)}`), r.Locale && (r.Locale = new Map(r.Locale)), r.i18n)
                for (let e in r.i18n) r.i18n[e] = new Map(r.i18n[e]);
            return d.log("✅ Set Environment Variables"), {
                Settings: s,
                Caches: i,
                Configs: r
            }
        }("iRingo", t7, t3);
        d.logLevel = e.LogLevel;
        let s = {};
        switch (t9) {
            case void 0:
            case "application/x-www-form-urlencoded":
            case "text/plain":
            default:
            case "application/x-mpegURL":
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
            case "audio/mpegurl":
            case "text/xml":
            case "text/html":
            case "text/plist":
            case "application/xml":
            case "application/plist":
            case "application/x-plist":
            case "text/vtt":
            case "application/vtt":
                break;
            case "text/json":
            case "application/json":
                switch (s = JSON.parse($response.body ?? "{}"), t6.hostname) {
                    case "api.smoot.apple.com":
                    case "api.smoot.apple.cn":
                        if ("/bag" === t6.pathname) {
                            s.enabled = !0, s.feedback_enabled = !0, s?.enabled_domains && (s.enabled_domains = [...new Set([...s?.enabled_domains ?? [], ...e.Domains])], d.info("领域列表", `enabled_domains: ${JSON.stringify(s.enabled_domains)}`)), s?.scene_aware_lookup_enabled_domains && (s.scene_aware_lookup_enabled_domains = [...new Set([...s?.scene_aware_lookup_enabled_domains ?? [], ...e.Domains])], d.info("领域列表", `scene_aware_lookup_enabled_domains: ${JSON.stringify(s.scene_aware_lookup_enabled_domains)}`)), s.min_query_len = 3;
                            let t = s?.overrides;
                            t && [...new Set([...Object.keys(t), ...e.Functions])].forEach(e => {
                                switch (d.info("覆盖列表", `Function: ${e}`), e) {
                                    case "flightutilities":
                                        h.set(t, "flightutilities.enabled", !0), h.set(t, "flightutilities.feedback_enabled", !0);
                                        break;
                                    case "lookup":
                                        h.set(t, "lookup.enabled", !0), h.set(t, "lookup.feedback_enabled", !0);
                                        break;
                                    case "mail":
                                        h.set(t, "mail.enabled", !0), h.set(t, "mail.feedback_enabled", !0);
                                        break;
                                    case "messages":
                                        h.set(t, "messages.enabled", !0), h.set(t, "messages.feedback_enabled", !0);
                                        break;
                                    case "news":
                                        h.set(t, "news.enabled", !0), h.set(t, "news.feedback_enabled", !0);
                                        break;
                                    case "safari":
                                        h.set(t, "safari.enabled", !0), h.set(t, "safari.feedback_enabled", !0), h.set(t, "safari.experiments_custom_feedback_enabled", !0);
                                        break;
                                    case "spotlight":
                                        h.set(t, "spotlight.enabled", !0), h.set(t, "spotlight.feedback_enabled", !0);
                                        break;
                                    case "visualintelligence":
                                        h.set(t, "visualintelligence.enabled", !0), h.set(t, "visualintelligence.feedback_enabled", !0), h.set(t, "visualintelligence.enabled_domains", [...new Set([...t.visualIntelligence?.enabled_domains ?? [], ...a.VisualIntelligence.EnableDomains])]), h.set(t, "visualintelligence.supported_domains", [...new Set([...t.visualIntelligence?.supported_domains ?? [], ...a.VisualIntelligence.SupportedDomains])])
                                }
                            }), s.safari_smart_history_enabled = e.SafariSmartHistory, s.smart_history_feature_feedback_enabled = e.SafariSmartHistory
                        }
                        break;
                    case "fbs.smoot.apple.com":
                    case "cdn.smoot.apple.com":
                        break;
                    default:
                        t6.pathname
                }
                $response.body = JSON.stringify(s);
            case "application/protobuf":
            case "application/x-protobuf":
            case "application/vnd.google.protobuf":
            case "application/grpc":
            case "application/grpc+proto":
            case "application/octet-stream":
        }
    })().catch(e => d.error(e)).finally(() => (function(e = {}) {
        switch (l) {
            case "Surge":
                e.policy && h.set(e, "headers.X-Surge-Policy", e.policy), d.log("\uD83D\uDEA9 执行结束!", `🕛 ${new Date().getTime()/1e3-$script.startTime} 秒`), $done(e);
                break;
            case "Loon":
                e.policy && (e.node = e.policy), d.log("\uD83D\uDEA9 执行结束!", `🕛 ${(new Date-$script.startTime)/1e3} 秒`), $done(e);
                break;
            case "Stash":
                e.policy && h.set(e, "headers.X-Stash-Selected-Proxy", encodeURI(e.policy)), d.log("\uD83D\uDEA9 执行结束!", `🕛 ${(new Date-$script.startTime)/1e3} 秒`), $done(e);
                break;
            case "Egern":
            case "Shadowrocket":
            default:
                d.log("\uD83D\uDEA9 执行结束!"), $done(e);
                break;
            case "Quantumult X":
                switch (e.policy && h.set(e, "opts.policy", e.policy), e["auto-redirect"] = void 0, e["auto-cookie"] = void 0, e["binary-mode"] = void 0, e.charset = void 0, e.host = void 0, e.insecure = void 0, e.method = void 0, e.ok = void 0, e.opt = void 0, e.path = void 0, e.policy = void 0, e["policy-descriptor"] = void 0, e.scheme = void 0, e.sessionIndex = void 0, e.statusCode = void 0, e.timeout = void 0, typeof e.status) {
                    case "number":
                        e.status = c[e.status];
                        break;
                    case "string":
                    case "undefined":
                        break;
                    default:
                        e.status = void 0
                }
                e.body instanceof ArrayBuffer ? (e.bodyBytes = e.body, e.body = void 0) : ArrayBuffer.isView(e.body) ? (e.bodyBytes = e.body.buffer.slice(e.body.byteOffset, e.body.byteLength + e.body.byteOffset), e.body = void 0) : e.body && (e.bodyBytes = void 0), d.log("\uD83D\uDEA9 执行结束!"), $done(e);
                break;
            case "Node.js":
                d.log("\uD83D\uDEA9 执行结束!"), process.exit(1)
        }
    })($response))
})();
