console.log("Siri+Spotlight🔍"), (() => {
    "use strict";
    let e, t, r, n, a, i, s;
    var o, l, c, u, d, h, f, p, g, m, b, y = {},
        w = {};
    
    function k(e) {
        var t = w[e];
        if (void 0 !== t) return t.exports;
        var r = w[e] = {
            exports: {}
        };
        return y[e](r, r.exports, k), r.exports
    }
    k.rv = function() {
        return "1.1.5"
    }, k.ruid = "bundler=rspack@1.1.5";
    let _ = (() => {
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
    class T {
        static #e = new Map([]);
        static #t = [];
        static #r = new Map([]);
        static clear = () => {};
        static count = (e = "default") => {
            switch (T.#e.has(e)) {
                case !0:
                    T.#e.set(e, T.#e.get(e) + 1);
                    break;
                case !1:
                    T.#e.set(e, 0)
            }
            T.log(`${e}: ${T.#e.get(e)}`)
        };
        static countReset = (e = "default") => {
            switch (T.#e.has(e)) {
                case !0:
                    T.#e.set(e, 0), T.log(`${e}: ${T.#e.get(e)}`);
                    break;
                case !1:
                    T.warn(`Counter "${e}" doesn’t exist`)
            }
        };
        static debug = (...e) => {
            !(T.#n < 4) && (e = e.map(e => `🅱️ ${e}`), T.log(...e))
        };
        static error(...e) {
            if (!(T.#n < 1)) {
                switch (_) {
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
                T.log(...e)
            }
        }
        static exception = (...e) => T.error(...e);
        static group = e => T.#t.unshift(e);
        static groupEnd = () => T.#t.shift();
        static info(...e) {
            !(T.#n < 3) && (e = e.map(e => `ℹ️ ${e}`), T.log(...e))
        }
        static #n = 3;
        static get logLevel() {
            switch (T.#n) {
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
                    T.#n = 0;
                    break;
                case 1:
                case "error":
                    T.#n = 1;
                    break;
                case 2:
                case "warn":
                case "warning":
                default:
                    T.#n = 2;
                    break;
                case 3:
                case "info":
                    T.#n = 3;
                    break;
                case 4:
                case "debug":
                    T.#n = 4;
                    break;
                case 5:
                case "all":
                    T.#n = 5
            }
        }
        static log = (...e) => {
            0 !== T.#n && (e = e.map(e => {
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
            }), T.#t.forEach(t => {
                (e = e.map(e => `  ${e}`)).unshift(`▼ ${t}:`)
            }), console.log((e = ["", ...e]).join("\n")))
        };
        static time = (e = "default") => T.#r.set(e, Date.now());
        static timeEnd = (e = "default") => T.#r.delete(e);
        static timeLog = (e = "default") => {
            let t = T.#r.get(e);
            t ? T.log(`${e}: ${Date.now()-t}ms`) : T.warn(`Timer "${e}" doesn’t exist`)
        };
        static warn(...e) {
            !(T.#n < 2) && (e = e.map(e => `⚠️ ${e}`), T.log(...e))
        }
    }
    class v {
        static get(e = {}, t = "", r) {
            !Array.isArray(t) && (t = v.toPath(t));
            let n = t.reduce((e, t) => Object(e)[t], e);
            return void 0 === n ? r : n
        }
        static set(e, t, r) {
            return !Array.isArray(t) && (t = v.toPath(t)), t.slice(0, -1).reduce((e, r, n) => Object(e[r]) === e[r] ? e[r] : e[r] = /^\d+$/.test(t[n + 1]) ? [] : {}, e)[t[t.length - 1]] = r, e
        }
        static unset(e = {}, t = "") {
            return !Array.isArray(t) && (t = v.toPath(t)), t.reduce((e, r, n) => n === t.length - 1 ? (delete e[r], !0) : Object(e)[r], e)
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
    let N = {
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
    };
    
    function S(e = {}) {
        switch (_) {
            case "Surge":
                e.policy && v.set(e, "headers.X-Surge-Policy", e.policy), T.log("\uD83D\uDEA9 执行结束!", `🕛 ${new Date().getTime()/1e3-$script.startTime} 秒`), $done(e);
                break;
            case "Loon":
                e.policy && (e.node = e.policy), T.log("\uD83D\uDEA9 执行结束!", `🕛 ${(new Date-$script.startTime)/1e3} 秒`), $done(e);
                break;
            case "Stash":
                e.policy && v.set(e, "headers.X-Stash-Selected-Proxy", encodeURI(e.policy)), T.log("\uD83D\uDEA9 执行结束!", `🕛 ${(new Date-$script.startTime)/1e3} 秒`), $done(e);
                break;
            case "Egern":
            case "Shadowrocket":
            default:
                T.log("\uD83D\uDEA9 执行结束!"), $done(e);
                break;
            case "Quantumult X":
                switch (e.policy && v.set(e, "opts.policy", e.policy), e["auto-redirect"] = void 0, e["auto-cookie"] = void 0, e["binary-mode"] = void 0, e.charset = void 0, e.host = void 0, e.insecure = void 0, e.method = void 0, e.ok = void 0, e.opt = void 0, e.path = void 0, e.policy = void 0, e["policy-descriptor"] = void 0, e.scheme = void 0, e.sessionIndex = void 0, e.statusCode = void 0, e.timeout = void 0, typeof e.status) {
                    case "number":
                        e.status = N[e.status];
                        break;
                    case "string":
                    case "undefined":
                        break;
                    default:
                        e.status = void 0
                }
                e.body instanceof ArrayBuffer ? (e.bodyBytes = e.body, e.body = void 0) : ArrayBuffer.isView(e.body) ? (e.bodyBytes = e.body.buffer.slice(e.body.byteOffset, e.body.byteLength + e.body.byteOffset), e.body = void 0) : e.body && (e.bodyBytes = void 0), T.log("\uD83D\uDEA9 执行结束!"), $done(e);
                break;
            case "Node.js":
                T.log("\uD83D\uDEA9 执行结束!"), process.exit(1)
        }
    }
    let x = e => {
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
                let r = e.open || e["open-url"] || e.url || e.openUrl,
                    n = e.copy || e["update-pasteboard"] || e.updatePasteboard,
                    a = e.media || e["media-url"] || e.mediaUrl;
                switch ($app) {
                    case "Surge":
                    case "Stash":
                    case "Egern":
                    case "Shadowrocket":
                    default:
                        if (r && (t.action = "open-url", t.url = r), n && (t.action = "clipboard", t.text = n), a) switch (!0) {
                            case a.startsWith("http"):
                                t["media-url"] = a;
                                break;
                            case a.startsWith("data:"): {
                                let {
                                    MIME: r,
                                    Base64: n
                                } = a.match(/^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/).groups;
                                t["media-base64"] = n, t["media-base64-mime"] = e.mime || r;
                                break
                            }
                            default:
                                switch (t["media-base64"] = a, !0) {
                                    case a.startsWith("CiVQREYt"):
                                    case a.startsWith("JVBERi0"):
                                        t["media-base64-mime"] = "application/pdf";
                                        break;
                                    case a.startsWith("R0lGODdh"):
                                    case a.startsWith("R0lGODlh"):
                                        t["media-base64-mime"] = "image/gif";
                                        break;
                                    case a.startsWith("iVBORw0KGgo"):
                                        t["media-base64-mime"] = "image/png";
                                        break;
                                    case a.startsWith("/9j/"):
                                        t["media-base64-mime"] = "image/jpg";
                                        break;
                                    case a.startsWith("Qk02U"):
                                        t["media-base64-mime"] = "image/bmp"
                                }
                        }
                        e["auto-dismiss"] && (t["auto-dismiss"] = e["auto-dismiss"]), e.sound && (t.sound = e.sound);
                        break;
                    case "Loon":
                        r && (t.openUrl = r), a?.startsWith("http") && (t.mediaUrl = a);
                        break;
                    case "Quantumult X":
                        r && (t["open-url"] = r), a?.startsWith("http") && (t["media-url"] = a), n && (t["update-pasteboard"] = n);
                    case "Node.js":
                }
                break
            }
            default:
                Console.error(`不支持的通知参数类型: ${typeof e}`, "")
        }
        return t
    };
    class E {
        static data = null;
        static dataFile = "box.dat";
        static #a = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
        static getItem(e, t = null) {
            let r = t;
            if (!0 === e.startsWith("@")) {
                let {
                    key: t,
                    path: n
                } = e.match(E.#a)?.groups;
                e = t;
                let a = E.getItem(e, {});
                "object" != typeof a && (a = {}), r = v.get(a, n);
                try {
                    r = JSON.parse(r)
                } catch (e) {}
            } else {
                switch (_) {
                    case "Surge":
                    case "Loon":
                    case "Stash":
                    case "Egern":
                    case "Shadowrocket":
                        r = $persistentStore.read(e);
                        break;
                    case "Quantumult X":
                        r = $prefs.valueForKey(e);
                        break;
                    case "Node.js":
                        E.data = E.#i(E.dataFile), r = E.data?.[e];
                        break;
                    default:
                        r = E.data?.[e] || null
                }
                try {
                    r = JSON.parse(r)
                } catch (e) {}
            }
            return r ?? t
        }
        static setItem(e = new String, t = new String) {
            let r = !1;
            if ("object" == typeof t) t = JSON.stringify(t);
            else t = String(t);
            if (!0 === e.startsWith("@")) {
                let {
                    key: n,
                    path: a
                } = e.match(E.#a)?.groups;
                e = n;
                let i = E.getItem(e, {});
                "object" != typeof i && (i = {}), v.set(i, a, t), r = E.setItem(e, i)
            } else switch (_) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Egern":
                case "Shadowrocket":
                    r = $persistentStore.write(t, e);
                    break;
                case "Quantumult X":
                    r = $prefs.setValueForKey(t, e);
                    break;
                case "Node.js":
                    E.data = E.#i(E.dataFile), E.data[e] = t, E.#s(E.dataFile), r = !0;
                    break;
                default:
                    r = E.data?.[e] || null
            }
            return r
        }
        static removeItem(e) {
            let t = !1;
            if (!0 === e.startsWith("@")) {
                let {
                    key: r,
                    path: n
                } = e.match(E.#a)?.groups;
                e = r;
                let a = E.getItem(e);
                "object" != typeof a && (a = {}), keyValue = v.unset(a, n), t = E.setItem(e, a)
            } else switch (_) {
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
            switch (_) {
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
        static #i = e => {
            if ("Node.js" !== _) return {};
            {
                this.fs = this.fs ? this.fs : require("node:fs"), this.path = this.path ? this.path : require("node:path");
                let t = this.path.resolve(e),
                    r = this.path.resolve(process.cwd(), e),
                    n = this.fs.existsSync(t),
                    a = !n && this.fs.existsSync(r);
                if (!n && !a) return {};
                try {
                    return JSON.parse(this.fs.readFileSync(n ? t : r))
                } catch (e) {
                    return {}
                }
            }
        };
        static #s = (e = this.dataFile) => {
            if ("Node.js" === _) {
                this.fs = this.fs ? this.fs : require("node:fs"), this.path = this.path ? this.path : require("node:path");
                let t = this.path.resolve(e),
                    r = this.path.resolve(process.cwd(), e),
                    n = this.fs.existsSync(t),
                    a = !n && this.fs.existsSync(r),
                    i = JSON.stringify(this.data);
                n ? this.fs.writeFileSync(t, i) : a ? this.fs.writeFileSync(r, i) : this.fs.writeFileSync(t, i)
            }
        }
    }
    
    function U(e) {
        let t = e.length;
        for (; --t >= 0;) e[t] = 0
    }
    let B = 286,
        I = 2 * B + 1,
        R = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
        O = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
        A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
        C = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        L = Array((B + 2) * 2);
    U(L);
    let D = Array(60);
    U(D);
    let F = Array(512);
    U(F);
    let P = Array(256);
    U(P);
    let $ = Array(29);
    U($);
    let z = Array(30);
    
    function q(e, t, r, n, a) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = a, this.has_stree = e && e.length
    }
    
    function W(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
    }
    U(z);
    let j = e => e < 256 ? F[e] : F[256 + (e >>> 7)],
        V = (e, t) => {
            e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
        },
        M = (e, t, r) => {
            e.bi_valid > 16 - r ? (e.bi_buf |= t << e.bi_valid & 65535, V(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += r - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r)
        },
        K = (e, t, r) => {
            M(e, r[2 * t], r[2 * t + 1])
        },
        H = (e, t) => {
            let r = 0;
            do r |= 1 & e, e >>>= 1, r <<= 1; while (--t > 0);
            return r >>> 1
        },
        Z = e => {
            16 === e.bi_valid ? (V(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
        },
        G = (e, t) => {
            let r, n, a, i, s, o;
            let l = t.dyn_tree,
                c = t.max_code,
                u = t.stat_desc.static_tree,
                d = t.stat_desc.has_stree,
                h = t.stat_desc.extra_bits,
                f = t.stat_desc.extra_base,
                p = t.stat_desc.max_length,
                g = 0;
            for (i = 0; i <= 15; i++) e.bl_count[i] = 0;
            for (l[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < I; r++) {
                if ((i = l[2 * l[2 * (n = e.heap[r]) + 1] + 1] + 1) > p && (i = p, g++), l[2 * n + 1] = i, !(n > c)) e.bl_count[i]++, s = 0, n >= f && (s = h[n - f]), o = l[2 * n], e.opt_len += o * (i + s), d && (e.static_len += o * (u[2 * n + 1] + s))
            }
            if (0 !== g) {
                do {
                    for (i = p - 1; 0 === e.bl_count[i];) i--;
                    e.bl_count[i]--, e.bl_count[i + 1] += 2, e.bl_count[p]--, g -= 2
                } while (g > 0);
                for (i = p; 0 !== i; i--)
                    for (n = e.bl_count[i]; 0 !== n;) {
                        if (!((a = e.heap[--r]) > c)) l[2 * a + 1] !== i && (e.opt_len += (i - l[2 * a + 1]) * l[2 * a], l[2 * a + 1] = i), n--
                    }
            }
        },
        J = (e, t, r) => {
            let n, a;
            let i = Array(16),
                s = 0;
            for (n = 1; n <= 15; n++) s = s + r[n - 1] << 1, i[n] = s;
            for (a = 0; a <= t; a++) {
                let t = e[2 * a + 1];
                if (0 !== t) e[2 * a] = H(i[t]++, t)
            }
        },
        X = () => {
            let n, a, i, s, o;
            let l = Array(16);
            for (s = 0, i = 0; s < 28; s++)
                for (n = 0, $[s] = i; n < 1 << R[s]; n++) P[i++] = s;
            for (P[i - 1] = s, o = 0, s = 0; s < 16; s++)
                for (n = 0, z[s] = o; n < 1 << O[s]; n++) F[o++] = s;
            for (o >>= 7; s < 30; s++)
                for (n = 0, z[s] = o << 7; n < 1 << O[s] - 7; n++) F[256 + o++] = s;
            for (a = 0; a <= 15; a++) l[a] = 0;
            for (n = 0; n <= 143;) L[2 * n + 1] = 8, n++, l[8]++;
            for (; n <= 255;) L[2 * n + 1] = 9, n++, l[9]++;
            for (; n <= 279;) L[2 * n + 1] = 7, n++, l[7]++;
            for (; n <= 287;) L[2 * n + 1] = 8, n++, l[8]++;
            for (J(L, B + 1, l), n = 0; n < 30; n++) D[2 * n + 1] = 5, D[2 * n] = H(n, 5);
            e = new q(L, R, 257, B, 15), t = new q(D, O, 0, 30, 15), r = new q([], A, 0, 19, 7)
        },
        Q = e => {
            let t;
            for (t = 0; t < B; t++) e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
            e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0
        },
        Y = e => {
            e.bi_valid > 8 ? V(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
        },
        ee = (e, t, r, n) => {
            let a = 2 * t,
                i = 2 * r;
            return e[a] < e[i] || e[a] === e[i] && n[t] <= n[r]
        },
        et = (e, t, r) => {
            let n = e.heap[r],
                a = r << 1;
            for (; a <= e.heap_len && (a < e.heap_len && ee(t, e.heap[a + 1], e.heap[a], e.depth) && a++, !ee(t, n, e.heap[a], e.depth));) {
                ;
                e.heap[r] = e.heap[a], r = a, a <<= 1
            }
            e.heap[r] = n
        },
        er = (e, t, r) => {
            let n, a, i, s;
            let o = 0;
            if (0 !== e.sym_next)
                do n = (255 & e.pending_buf[e.sym_buf + o++]) + ((255 & e.pending_buf[e.sym_buf + o++]) << 8), a = e.pending_buf[e.sym_buf + o++], 0 === n ? K(e, a, t) : (K(e, (i = P[a]) + 256 + 1, t), 0 !== (s = R[i]) && M(e, a -= $[i], s), K(e, i = j(--n), r), 0 !== (s = O[i]) && M(e, n -= z[i], s)); while (o < e.sym_next);
            K(e, 256, t)
        },
        en = (e, t) => {
            let r, n, a;
            let i = t.dyn_tree,
                s = t.stat_desc.static_tree,
                o = t.stat_desc.has_stree,
                l = t.stat_desc.elems,
                c = -1;
            for (r = 0, e.heap_len = 0, e.heap_max = I; r < l; r++) 0 !== i[2 * r] ? (e.heap[++e.heap_len] = c = r, e.depth[r] = 0) : i[2 * r + 1] = 0;
            for (; e.heap_len < 2;) i[2 * (a = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1, e.depth[a] = 0, e.opt_len--, o && (e.static_len -= s[2 * a + 1]);
            for (t.max_code = c, r = e.heap_len >> 1; r >= 1; r--) et(e, i, r);
            a = l;
            do r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], et(e, i, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, i[2 * a] = i[2 * r] + i[2 * n], e.depth[a] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, i[2 * r + 1] = i[2 * n + 1] = a, e.heap[1] = a++, et(e, i, 1); while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1], G(e, t), J(i, c, e.bl_count)
        },
        ea = (e, t, r) => {
            let n, a;
            let i = -1,
                s = t[1],
                o = 0,
                l = 7,
                c = 4;
            for (0 === s && (l = 138, c = 3), t[(r + 1) * 2 + 1] = 65535, n = 0; n <= r; n++) {
                if (a = s, s = t[(n + 1) * 2 + 1], !(++o < l) || a !== s) {
                    o < c ? e.bl_tree[2 * a] += o : 0 !== a ? (a !== i && e.bl_tree[2 * a]++, e.bl_tree[32]++) : o <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++;
                    o = 0, i = a, 0 === s ? (l = 138, c = 3) : a === s ? (l = 6, c = 3) : (l = 7, c = 4)
                }
            }
        },
        ei = (e, t, r) => {
            let n, a;
            let i = -1,
                s = t[1],
                o = 0,
                l = 7,
                c = 4;
            for (0 === s && (l = 138, c = 3), n = 0; n <= r; n++) {
                if (a = s, s = t[(n + 1) * 2 + 1], !(++o < l) || a !== s) {
                    if (o < c)
                        do K(e, a, e.bl_tree); while (0 != --o);
                    else 0 !== a ? (a !== i && (K(e, a, e.bl_tree), o--), K(e, 16, e.bl_tree), M(e, o - 3, 2)) : o <= 10 ? (K(e, 17, e.bl_tree), M(e, o - 3, 3)) : (K(e, 18, e.bl_tree), M(e, o - 11, 7));
                    o = 0, i = a, 0 === s ? (l = 138, c = 3) : a === s ? (l = 6, c = 3) : (l = 7, c = 4)
                }
            }
        },
        es = e => {
            let t;
            for (ea(e, e.dyn_ltree, e.l_desc.max_code), ea(e, e.dyn_dtree, e.d_desc.max_code), en(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * C[t] + 1]; t--);
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
        },
        eo = (e, t, r, n) => {
            let a;
            for (M(e, t - 257, 5), M(e, r - 1, 5), M(e, n - 4, 4), a = 0; a < n; a++) M(e, e.bl_tree[2 * C[a] + 1], 3);
            ei(e, e.dyn_ltree, t - 1), ei(e, e.dyn_dtree, r - 1)
        },
        el = e => {
            let t, r = 0xf3ffc07f;
            for (t = 0; t <= 31; t++, r >>>= 1)
                if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
            for (t = 32; t < 256; t++)
                if (0 !== e.dyn_ltree[2 * t]) return 1;
            return 0
        },
        ec = !1,
        eu = (e, t, r, n) => {
            M(e, 0 + (n ? 1 : 0), 3), Y(e), V(e, r), V(e, ~r), r && e.pending_buf.set(e.window.subarray(t, t + r), e.pending), e.pending += r
        };
    var ed = {
            _tr_init: n => {
                !ec && (X(), ec = !0), n.l_desc = new W(n.dyn_ltree, e), n.d_desc = new W(n.dyn_dtree, t), n.bl_desc = new W(n.bl_tree, r), n.bi_buf = 0, n.bi_valid = 0, Q(n)
            },
            _tr_stored_block: eu,
            _tr_flush_block: (e, t, r, n) => {
                let a, i;
                let s = 0;
                e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = el(e)), en(e, e.l_desc), en(e, e.d_desc), s = es(e), a = e.opt_len + 3 + 7 >>> 3, (i = e.static_len + 3 + 7 >>> 3) <= a && (a = i)) : a = i = r + 5, r + 4 <= a && -1 !== t ? eu(e, t, r, n) : 4 === e.strategy || i === a ? (M(e, 2 + (n ? 1 : 0), 3), er(e, L, D)) : (M(e, 4 + (n ? 1 : 0), 3), eo(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), er(e, e.dyn_ltree, e.dyn_dtree)), Q(e), n && Y(e)
            },
            _tr_tally: (e, t, r) => (e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = r, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[(P[r] + 256 + 1) * 2]++, e.dyn_dtree[2 * j(t)]++), e.sym_next === e.sym_end),
            _tr_align: e => {
                M(e, 2, 3), K(e, 256, L), Z(e)
            }
        },
        eh = (e, t, r, n) => {
            let a = 65535 & e | 0,
                i = e >>> 16 & 65535 | 0,
                s = 0;
            for (; 0 !== r;) {
                s = r > 2e3 ? 2e3 : r, r -= s;
                do i = i + (a = a + t[n++] | 0) | 0; while (--s);
                a %= 65521, i %= 65521
            }
            return a | i << 16 | 0
        };
    let ef = new Uint32Array((() => {
        let e, t = [];
        for (var r = 0; r < 256; r++) {
            e = r;
            for (var n = 0; n < 8; n++) e = 1 & e ? 0xedb88320 ^ e >>> 1 : e >>> 1;
            t[r] = e
        }
        return t
    })());
    var ep = (e, t, r, n) => {
            let a = n + r;
            e ^= -1;
            for (let r = n; r < a; r++) e = e >>> 8 ^ ef[(e ^ t[r]) & 255];
            return -1 ^ e
        },
        eg = {
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
        em = {
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
        _tr_init: eb,
        _tr_stored_block: ey,
        _tr_flush_block: ew,
        _tr_tally: ek,
        _tr_align: e_
    } = ed, {
        Z_NO_FLUSH: eT,
        Z_PARTIAL_FLUSH: ev,
        Z_FULL_FLUSH: eN,
        Z_FINISH: eS,
        Z_BLOCK: ex,
        Z_OK: eE,
        Z_STREAM_END: eU,
        Z_STREAM_ERROR: eB,
        Z_DATA_ERROR: eI,
        Z_BUF_ERROR: eR,
        Z_DEFAULT_COMPRESSION: eO,
        Z_FILTERED: eA,
        Z_HUFFMAN_ONLY: eC,
        Z_RLE: eL,
        Z_FIXED: eD,
        Z_DEFAULT_STRATEGY: eF,
        Z_UNKNOWN: eP,
        Z_DEFLATED: e$
    } = em, ez = 286, eq = 2 * ez + 1, eW = 262, ej = (e, t) => (e.msg = eg[t], t), eV = e => 2 * e - (e > 4 ? 9 : 0), eM = e => {
        let t = e.length;
        for (; --t >= 0;) e[t] = 0
    }, eK = e => {
        let t, r, n;
        let a = e.w_size;
        n = t = e.hash_size;
        do r = e.head[--n], e.head[n] = r >= a ? r - a : 0; while (--t);
        n = t = a;
        do r = e.prev[--n], e.prev[n] = r >= a ? r - a : 0; while (--t)
    }, eH = (e, t, r) => (t << e.hash_shift ^ r) & e.hash_mask, eZ = e => {
        let t = e.state,
            r = t.pending;
        if (r > e.avail_out && (r = e.avail_out), 0 !== r) e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + r), e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0)
    }, eG = (e, t) => {
        ew(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, eZ(e.strm)
    }, eJ = (e, t) => {
        e.pending_buf[e.pending++] = t
    }, eX = (e, t) => {
        e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
    }, eQ = (e, t, r, n) => {
        let a = e.avail_in;
        return (a > n && (a = n), 0 === a) ? 0 : (e.avail_in -= a, t.set(e.input.subarray(e.next_in, e.next_in + a), r), 1 === e.state.wrap ? e.adler = eh(e.adler, t, a, r) : 2 === e.state.wrap && (e.adler = ep(e.adler, t, a, r)), e.next_in += a, e.total_in += a, a)
    }, eY = (e, t) => {
        let r, n, a = e.max_chain_length,
            i = e.strstart,
            s = e.prev_length,
            o = e.nice_match,
            l = e.strstart > e.w_size - eW ? e.strstart - (e.w_size - eW) : 0,
            c = e.window,
            u = e.w_mask,
            d = e.prev,
            h = e.strstart + 258,
            f = c[i + s - 1],
            p = c[i + s];
        e.prev_length >= e.good_match && (a >>= 2), o > e.lookahead && (o = e.lookahead);
        do {
            if (c[(r = t) + s] !== p || c[r + s - 1] !== f || c[r] !== c[i] || c[++r] !== c[i + 1]) continue;
            i += 2, r++;
            do; while (c[++i] === c[++r] && c[++i] === c[++r] && c[++i] === c[++r] && c[++i] === c[++r] && c[++i] === c[++r] && c[++i] === c[++r] && c[++i] === c[++r] && c[++i] === c[++r] && i < h);
            if (n = 258 - (h - i), i = h - 258, n > s) {
                if (e.match_start = t, s = n, n >= o) break;
                f = c[i + s - 1], p = c[i + s]
            }
        } while ((t = d[t & u]) > l && 0 != --a);
        return s <= e.lookahead ? s : e.lookahead
    }, e0 = e => {
        let t, r, n;
        let a = e.w_size;
        do {
            if (r = e.window_size - e.lookahead - e.strstart, e.strstart >= a + (a - eW) && (e.window.set(e.window.subarray(a, a + a - r), 0), e.match_start -= a, e.strstart -= a, e.block_start -= a, e.insert > e.strstart && (e.insert = e.strstart), eK(e), r += a), 0 === e.strm.avail_in) break;
            if (t = eQ(e.strm, e.window, e.strstart + e.lookahead, r), e.lookahead += t, e.lookahead + e.insert >= 3)
                for (n = e.strstart - e.insert, e.ins_h = e.window[n], e.ins_h = eH(e, e.ins_h, e.window[n + 1]); e.insert && (e.ins_h = eH(e, e.ins_h, e.window[n + 3 - 1]), e.prev[n & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = n, n++, e.insert--, !(e.lookahead + e.insert < 3)););
        } while (e.lookahead < eW && 0 !== e.strm.avail_in)
    }, e1 = (e, t) => {
        let r = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5,
            n, a, i, s = 0,
            o = e.strm.avail_in;
        do {
            if (n = 65535, i = e.bi_valid + 42 >> 3, e.strm.avail_out < i) break;
            if (i = e.strm.avail_out - i, n > (a = e.strstart - e.block_start) + e.strm.avail_in && (n = a + e.strm.avail_in), n > i && (n = i), n < r && (0 === n && t !== eS || t === eT || n !== a + e.strm.avail_in)) break;
            s = t === eS && n === a + e.strm.avail_in ? 1 : 0, ey(e, 0, 0, s), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, eZ(e.strm), a && (a > n && (a = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + a), e.strm.next_out), e.strm.next_out += a, e.strm.avail_out -= a, e.strm.total_out += a, e.block_start += a, n -= a), n && (eQ(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n)
        } while (0 === s);
        return ((o -= e.strm.avail_in) && (o >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= o && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), s) ? 4 : t !== eT && t !== eS && 0 === e.strm.avail_in && e.strstart === e.block_start ? 2 : (i = e.window_size - e.strstart, e.strm.avail_in > i && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, i += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), i > e.strm.avail_in && (i = e.strm.avail_in), i && (eQ(e.strm, e.window, e.strstart, i), e.strstart += i, e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i), e.high_water < e.strstart && (e.high_water = e.strstart), i = e.bi_valid + 42 >> 3, r = (i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i) > e.w_size ? e.w_size : i, ((a = e.strstart - e.block_start) >= r || (a || t === eS) && t !== eT && 0 === e.strm.avail_in && a <= i) && (n = a > i ? i : a, s = t === eS && 0 === e.strm.avail_in && n === a ? 1 : 0, ey(e, e.block_start, n, s), e.block_start += n, eZ(e.strm)), s ? 3 : 1)
    }, e2 = (e, t) => {
        let r, n;
        for (;;) {
            if (e.lookahead < eW) {
                if (e0(e), e.lookahead < eW && t === eT) return 1;
                if (0 === e.lookahead) break
            }
            if (r = 0, e.lookahead >= 3 && (e.ins_h = eH(e, e.ins_h, e.window[e.strstart + 3 - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - eW && (e.match_length = eY(e, r)), e.match_length >= 3) {
                if (n = ek(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                    e.match_length--;
                    do e.strstart++, e.ins_h = eH(e, e.ins_h, e.window[e.strstart + 3 - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart; while (0 != --e.match_length);
                    e.strstart++
                } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = eH(e, e.ins_h, e.window[e.strstart + 1])
            } else n = ek(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
            if (n && (eG(e, !1), 0 === e.strm.avail_out)) return 1
        }
        if (e.insert = e.strstart < 2 ? e.strstart : 2, t === eS) return (eG(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eG(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }, e3 = (e, t) => {
        let r, n, a;
        for (;;) {
            if (e.lookahead < eW) {
                if (e0(e), e.lookahead < eW && t === eT) return 1;
                if (0 === e.lookahead) break
            }
            if (r = 0, e.lookahead >= 3 && (e.ins_h = eH(e, e.ins_h, e.window[e.strstart + 3 - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - eW && (e.match_length = eY(e, r), e.match_length <= 5 && (e.strategy === eA || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                a = e.strstart + e.lookahead - 3, n = ek(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                do ++e.strstart <= a && (e.ins_h = eH(e, e.ins_h, e.window[e.strstart + 3 - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart); while (0 != --e.prev_length);
                if (e.match_available = 0, e.match_length = 2, e.strstart++, n && (eG(e, !1), 0 === e.strm.avail_out)) return 1
            } else if (e.match_available) {
                if ((n = ek(e, 0, e.window[e.strstart - 1])) && eG(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
            } else e.match_available = 1, e.strstart++, e.lookahead--
        }
        if (e.match_available && (n = ek(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, t === eS) return (eG(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eG(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }, e4 = (e, t) => {
        let r, n, a, i;
        let s = e.window;
        for (;;) {
            if (e.lookahead <= 258) {
                if (e0(e), e.lookahead <= 258 && t === eT) return 1;
                if (0 === e.lookahead) break
            }
            if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (n = s[a = e.strstart - 1]) === s[++a] && n === s[++a] && n === s[++a]) {
                i = e.strstart + 258;
                do; while (n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && a < i);
                e.match_length = 258 - (i - a), e.match_length > e.lookahead && (e.match_length = e.lookahead)
            }
            if (e.match_length >= 3 ? (r = ek(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = ek(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (eG(e, !1), 0 === e.strm.avail_out)) return 1
        }
        if (e.insert = 0, t === eS) return (eG(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eG(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }, e5 = (e, t) => {
        let r;
        for (;;) {
            if (0 === e.lookahead && (e0(e), 0 === e.lookahead)) {
                if (t === eT) return 1;
                break
            }
            if (e.match_length = 0, r = ek(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (eG(e, !1), 0 === e.strm.avail_out)) return 1
        }
        if (e.insert = 0, t === eS) return (eG(e, !0), 0 === e.strm.avail_out) ? 3 : 4;
        return e.sym_next && (eG(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    };
    
    function e6(e, t, r, n, a) {
        this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = a
    }
    let e8 = [new e6(0, 0, 0, 0, e1), new e6(4, 4, 8, 4, e2), new e6(4, 5, 16, 8, e2), new e6(4, 6, 32, 32, e2), new e6(4, 4, 16, 16, e3), new e6(8, 16, 32, 32, e3), new e6(8, 16, 128, 128, e3), new e6(8, 32, 128, 256, e3), new e6(32, 128, 258, 1024, e3), new e6(32, 258, 258, 4096, e3)],
        e9 = e => {
            e.window_size = 2 * e.w_size, eM(e.head), e.max_lazy_match = e8[e.level].max_lazy, e.good_match = e8[e.level].good_length, e.nice_match = e8[e.level].nice_length, e.max_chain_length = e8[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = 2, e.match_available = 0, e.ins_h = 0
        };
    
    function e7() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = e$, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(2 * eq), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), eM(this.dyn_ltree), eM(this.dyn_dtree), eM(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(2 * ez + 1), eM(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * ez + 1), eM(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
    }
    let te = e => {
            if (!e) return 1;
            let t = e.state;
            return t && t.strm === e && (42 === t.status || 57 === t.status || 69 === t.status || 73 === t.status || 91 === t.status || 103 === t.status || 113 === t.status || 666 === t.status) ? 0 : 1
        },
        tt = e => {
            if (te(e)) return ej(e, eB);
            e.total_in = e.total_out = 0, e.data_type = eP;
            let t = e.state;
            return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = 2 === t.wrap ? 57 : t.wrap ? 42 : 113, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = -2, eb(t), eE
        },
        tr = e => {
            let t = tt(e);
            return t === eE && e9(e.state), t
        },
        tn = (e, t, r, n, a, i) => {
            if (!e) return eB;
            let s = 1;
            if (t === eO && (t = 6), n < 0 ? (s = 0, n = -n) : n > 15 && (s = 2, n -= 16), a < 1 || a > 9 || r !== e$ || n < 8 || n > 15 || t < 0 || t > 9 || i < 0 || i > eD || 8 === n && 1 !== s) return ej(e, eB);
            8 === n && (n = 9);
            let o = new e7;
            return e.state = o, o.strm = e, o.status = 42, o.wrap = s, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = a + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << a + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.sym_buf = o.lit_bufsize, o.sym_end = (o.lit_bufsize - 1) * 3, o.level = t, o.strategy = i, o.method = r, tr(e)
        };
    var ta = {
        deflateInit2: tn,
        deflateSetHeader: (e, t) => te(e) || 2 !== e.state.wrap ? eB : (e.state.gzhead = t, eE),
        deflate: (e, t) => {
            if (te(e) || t > ex || t < 0) return e ? ej(e, eB) : eB;
            let r = e.state;
            if (!e.output || 0 !== e.avail_in && !e.input || 666 === r.status && t !== eS) return ej(e, 0 === e.avail_out ? eR : eB);
            let n = r.last_flush;
            if (r.last_flush = t, 0 !== r.pending) {
                if (eZ(e), 0 === e.avail_out) return r.last_flush = -1, eE
            } else if (0 === e.avail_in && eV(t) <= eV(n) && t !== eS) return ej(e, eR);
            if (666 === r.status && 0 !== e.avail_in) return ej(e, eR);
            if (42 === r.status && 0 === r.wrap && (r.status = 113), 42 === r.status) {
                let t = e$ + (r.w_bits - 8 << 4) << 8,
                    n = -1;
                if (t |= (n = r.strategy >= eC || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6, 0 !== r.strstart && (t |= 32), eX(r, t += 31 - t % 31), 0 !== r.strstart && (eX(r, e.adler >>> 16), eX(r, 65535 & e.adler)), e.adler = 1, r.status = 113, eZ(e), 0 !== r.pending) return r.last_flush = -1, eE
            }
            if (57 === r.status) {
                if (e.adler = 0, eJ(r, 31), eJ(r, 139), eJ(r, 8), r.gzhead) eJ(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), eJ(r, 255 & r.gzhead.time), eJ(r, r.gzhead.time >> 8 & 255), eJ(r, r.gzhead.time >> 16 & 255), eJ(r, r.gzhead.time >> 24 & 255), eJ(r, 9 === r.level ? 2 : r.strategy >= eC || r.level < 2 ? 4 : 0), eJ(r, 255 & r.gzhead.os), r.gzhead.extra && r.gzhead.extra.length && (eJ(r, 255 & r.gzhead.extra.length), eJ(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = ep(e.adler, r.pending_buf, r.pending, 0)), r.gzindex = 0, r.status = 69;
                else if (eJ(r, 0), eJ(r, 0), eJ(r, 0), eJ(r, 0), eJ(r, 0), eJ(r, 9 === r.level ? 2 : r.strategy >= eC || r.level < 2 ? 4 : 0), eJ(r, 3), r.status = 113, eZ(e), 0 !== r.pending) return r.last_flush = -1, eE
            }
            if (69 === r.status) {
                if (r.gzhead.extra) {
                    let t = r.pending,
                        n = (65535 & r.gzhead.extra.length) - r.gzindex;
                    for (; r.pending + n > r.pending_buf_size;) {
                        let a = r.pending_buf_size - r.pending;
                        if (r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + a), r.pending), r.pending = r.pending_buf_size, r.gzhead.hcrc && r.pending > t && (e.adler = ep(e.adler, r.pending_buf, r.pending - t, t)), r.gzindex += a, eZ(e), 0 !== r.pending) return r.last_flush = -1, eE;
                        t = 0, n -= a
                    }
                    let a = new Uint8Array(r.gzhead.extra);
                    r.pending_buf.set(a.subarray(r.gzindex, r.gzindex + n), r.pending), r.pending += n, r.gzhead.hcrc && r.pending > t && (e.adler = ep(e.adler, r.pending_buf, r.pending - t, t)), r.gzindex = 0
                }
                r.status = 73
            }
            if (73 === r.status) {
                if (r.gzhead.name) {
                    let t, n = r.pending;
                    do {
                        if (r.pending === r.pending_buf_size) {
                            if (r.gzhead.hcrc && r.pending > n && (e.adler = ep(e.adler, r.pending_buf, r.pending - n, n)), eZ(e), 0 !== r.pending) return r.last_flush = -1, eE;
                            n = 0
                        }
                        t = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0, eJ(r, t)
                    } while (0 !== t);
                    r.gzhead.hcrc && r.pending > n && (e.adler = ep(e.adler, r.pending_buf, r.pending - n, n)), r.gzindex = 0
                }
                r.status = 91
            }
            if (91 === r.status) {
                if (r.gzhead.comment) {
                    let t, n = r.pending;
                    do {
                        if (r.pending === r.pending_buf_size) {
                            if (r.gzhead.hcrc && r.pending > n && (e.adler = ep(e.adler, r.pending_buf, r.pending - n, n)), eZ(e), 0 !== r.pending) return r.last_flush = -1, eE;
                            n = 0
                        }
                        t = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0, eJ(r, t)
                    } while (0 !== t);
                    r.gzhead.hcrc && r.pending > n && (e.adler = ep(e.adler, r.pending_buf, r.pending - n, n))
                }
                r.status = 103
            }
            if (103 === r.status) {
                if (r.gzhead.hcrc) {
                    if (r.pending + 2 > r.pending_buf_size && (eZ(e), 0 !== r.pending)) return r.last_flush = -1, eE;
                    eJ(r, 255 & e.adler), eJ(r, e.adler >> 8 & 255), e.adler = 0
                }
                if (r.status = 113, eZ(e), 0 !== r.pending) return r.last_flush = -1, eE
            }
            if (0 !== e.avail_in || 0 !== r.lookahead || t !== eT && 666 !== r.status) {
                let n = 0 === r.level ? e1(r, t) : r.strategy === eC ? e5(r, t) : r.strategy === eL ? e4(r, t) : e8[r.level].func(r, t);
                if ((3 === n || 4 === n) && (r.status = 666), 1 === n || 3 === n) return 0 === e.avail_out && (r.last_flush = -1), eE;
                if (2 === n && (t === ev ? e_(r) : t !== ex && (ey(r, 0, 0, !1), t === eN && (eM(r.head), 0 === r.lookahead && (r.strstart = 0, r.block_start = 0, r.insert = 0))), eZ(e), 0 === e.avail_out)) return r.last_flush = -1, eE
            }
            return t !== eS ? eE : r.wrap <= 0 ? eU : (2 === r.wrap ? (eJ(r, 255 & e.adler), eJ(r, e.adler >> 8 & 255), eJ(r, e.adler >> 16 & 255), eJ(r, e.adler >> 24 & 255), eJ(r, 255 & e.total_in), eJ(r, e.total_in >> 8 & 255), eJ(r, e.total_in >> 16 & 255), eJ(r, e.total_in >> 24 & 255)) : (eX(r, e.adler >>> 16), eX(r, 65535 & e.adler)), eZ(e), r.wrap > 0 && (r.wrap = -r.wrap), 0 !== r.pending ? eE : eU)
        },
        deflateEnd: e => {
            if (te(e)) return eB;
            let t = e.state.status;
            return e.state = null, 113 === t ? ej(e, eI) : eE
        },
        deflateSetDictionary: (e, t) => {
            let r = t.length;
            if (te(e)) return eB;
            let n = e.state,
                a = n.wrap;
            if (2 === a || 1 === a && 42 !== n.status || n.lookahead) return eB;
            if (1 === a && (e.adler = eh(e.adler, t, r, 0)), n.wrap = 0, r >= n.w_size) {
                0 === a && (eM(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
                let e = new Uint8Array(n.w_size);
                e.set(t.subarray(r - n.w_size, r), 0), t = e, r = n.w_size
            }
            let i = e.avail_in,
                s = e.next_in,
                o = e.input;
            for (e.avail_in = r, e.next_in = 0, e.input = t, e0(n); n.lookahead >= 3;) {
                let e = n.strstart,
                    t = n.lookahead - 2;
                do n.ins_h = eH(n, n.ins_h, n.window[e + 3 - 1]), n.prev[e & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = e, e++; while (--t);
                n.strstart = e, n.lookahead = 2, e0(n)
            }
            return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = 2, n.match_available = 0, e.next_in = s, e.input = o, e.avail_in = i, n.wrap = a, eE
        }
    };
    let ti = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var ts = {
        assign: function(e) {
            let t = Array.prototype.slice.call(arguments, 1);
            for (; t.length;) {
                let r = t.shift();
                if (!!r) {
                    if ("object" != typeof r) throw TypeError(r + "must be non-object");
                    for (let t in r) ti(r, t) && (e[t] = r[t])
                }
            }
            return e
        },
        flattenChunks: e => {
            let t = 0;
            for (let r = 0, n = e.length; r < n; r++) t += e[r].length;
            let r = new Uint8Array(t);
            for (let t = 0, n = 0, a = e.length; t < a; t++) {
                let a = e[t];
                r.set(a, n), n += a.length
            }
            return r
        }
    };
    let to = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (e) {
        to = !1
    }
    let tl = new Uint8Array(256);
    for (let e = 0; e < 256; e++) tl[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
    tl[254] = tl[254] = 1;
    let tc = (e, t) => {
        if (t < 65534 && e.subarray && to) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
        let r = "";
        for (let n = 0; n < t; n++) r += String.fromCharCode(e[n]);
        return r
    };
    var tu = {
            string2buf: e => {
                if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(e);
                let t, r, n, a, i, s = e.length,
                    o = 0;
                for (a = 0; a < s; a++)(64512 & (r = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (n = e.charCodeAt(a + 1))) == 56320 && (r = 65536 + (r - 55296 << 10) + (n - 56320), a++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                for (i = 0, t = new Uint8Array(o), a = 0; i < o; a++)(64512 & (r = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (n = e.charCodeAt(a + 1))) == 56320 && (r = 65536 + (r - 55296 << 10) + (n - 56320), a++), r < 128 ? t[i++] = r : (r < 2048 ? t[i++] = 192 | r >>> 6 : (r < 65536 ? t[i++] = 224 | r >>> 12 : (t[i++] = 240 | r >>> 18, t[i++] = 128 | r >>> 12 & 63), t[i++] = 128 | r >>> 6 & 63), t[i++] = 128 | 63 & r);
                return t
            },
            buf2string: (e, t) => {
                let r, n;
                let a = t || e.length;
                if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(e.subarray(0, t));
                let i = Array(2 * a);
                for (n = 0, r = 0; r < a;) {
                    let t = e[r++];
                    if (t < 128) {
                        i[n++] = t;
                        continue
                    }
                    let s = tl[t];
                    if (s > 4) {
                        i[n++] = 65533, r += s - 1;
                        continue
                    }
                    for (t &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && r < a;) t = t << 6 | 63 & e[r++], s--;
                    if (s > 1) {
                        i[n++] = 65533;
                        continue
                    }
                    t < 65536 ? i[n++] = t : (t -= 65536, i[n++] = 55296 | t >> 10 & 1023, i[n++] = 56320 | 1023 & t)
                }
                return tc(i, n)
            },
            utf8border: (e, t) => {
                (t = t || e.length) > e.length && (t = e.length);
                let r = t - 1;
                for (; r >= 0 && (192 & e[r]) == 128;) r--;
                return r < 0 || 0 === r ? t : r + tl[e[r]] > t ? r : t
            }
        },
        td = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        };
    let th = Object.prototype.toString,
        {
            Z_NO_FLUSH: tf,
            Z_SYNC_FLUSH: tp,
            Z_FULL_FLUSH: tg,
            Z_FINISH: tm,
            Z_OK: tb,
            Z_STREAM_END: ty,
            Z_DEFAULT_COMPRESSION: tw,
            Z_DEFAULT_STRATEGY: tk,
            Z_DEFLATED: t_
        } = em;
    
    function tT(e) {
        this.options = ts.assign({
            level: tw,
            method: t_,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: tk
        }, e || {});
        let t = this.options;
        t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new td, this.strm.avail_out = 0;
        let r = ta.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (r !== tb) throw Error(eg[r]);
        if (t.header && ta.deflateSetHeader(this.strm, t.header), t.dictionary) {
            let e;
            if (e = "string" == typeof t.dictionary ? tu.string2buf(t.dictionary) : "[object ArrayBuffer]" === th.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (r = ta.deflateSetDictionary(this.strm, e)) !== tb) throw Error(eg[r]);
            this._dict_set = !0
        }
    }
    
    function tv(e, t) {
        let r = new tT(t);
        if (r.push(e, !0), r.err) throw r.msg || eg[r.err];
        return r.result
    }
    tT.prototype.push = function(e, t) {
        let r, n;
        let a = this.strm,
            i = this.options.chunkSize;
        if (this.ended) return !1;
        for (n = t === ~~t ? t : !0 === t ? tm : tf, "string" == typeof e ? a.input = tu.string2buf(e) : "[object ArrayBuffer]" === th.call(e) ? a.input = new Uint8Array(e) : a.input = e, a.next_in = 0, a.avail_in = a.input.length;;) {
            if (0 === a.avail_out && (a.output = new Uint8Array(i), a.next_out = 0, a.avail_out = i), (n === tp || n === tg) && a.avail_out <= 6) {
                this.onData(a.output.subarray(0, a.next_out)), a.avail_out = 0;
                continue
            }
            if ((r = ta.deflate(a, n)) === ty) return a.next_out > 0 && this.onData(a.output.subarray(0, a.next_out)), r = ta.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === tb;
            if (0 === a.avail_out) {
                this.onData(a.output);
                continue
            }
            if (n > 0 && a.next_out > 0) {
                this.onData(a.output.subarray(0, a.next_out)), a.avail_out = 0;
                continue
            }
            if (0 === a.avail_in) break
        }
        return !0
    }, tT.prototype.onData = function(e) {
        this.chunks.push(e)
    }, tT.prototype.onEnd = function(e) {
        e === tb && (this.result = ts.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };
    var tN = function(e, t) {
        let r, n, a, i, s, o, l, c, u, d, h, f, p, g, m, b, y, w, k, _, T, v, N, S;
        let x = e.state;
        r = e.next_in, N = e.input, n = r + (e.avail_in - 5), a = e.next_out, S = e.output, i = a - (t - e.avail_out), s = a + (e.avail_out - 257), o = x.dmax, l = x.wsize, c = x.whave, u = x.wnext, d = x.window, h = x.hold, f = x.bits, p = x.lencode, g = x.distcode, m = (1 << x.lenbits) - 1, b = (1 << x.distbits) - 1;
        e: do
                for (f < 15 && (h += N[r++] << f, f += 8, h += N[r++] << f, f += 8), y = p[h & m];;) {
                    if (h >>>= w = y >>> 24, f -= w, 0 == (w = y >>> 16 & 255)) S[a++] = 65535 & y;
                    else if (16 & w)
                        for (k = 65535 & y, (w &= 15) && (f < w && (h += N[r++] << f, f += 8), k += h & (1 << w) - 1, h >>>= w, f -= w), f < 15 && (h += N[r++] << f, f += 8, h += N[r++] << f, f += 8), y = g[h & b];;) {
                            if (h >>>= w = y >>> 24, f -= w, 16 & (w = y >>> 16 & 255)) {
                                if (_ = 65535 & y, f < (w &= 15) && (h += N[r++] << f, (f += 8) < w && (h += N[r++] << f, f += 8)), (_ += h & (1 << w) - 1) > o) {
                                    e.msg = "invalid distance too far back", x.mode = 16209;
                                    break e
                                }
                                if (h >>>= w, f -= w, _ > (w = a - i)) {
                                    if ((w = _ - w) > c && x.sane) {
                                        e.msg = "invalid distance too far back", x.mode = 16209;
                                        break e
                                    }
                                    if (T = 0, v = d, 0 === u) {
                                        if (T += l - w, w < k) {
                                            k -= w;
                                            do S[a++] = d[T++]; while (--w);
                                            T = a - _, v = S
                                        }
                                    } else if (u < w) {
                                        if (T += l + u - w, (w -= u) < k) {
                                            k -= w;
                                            do S[a++] = d[T++]; while (--w);
                                            if (T = 0, u < k) {
                                                k -= w = u;
                                                do S[a++] = d[T++]; while (--w);
                                                T = a - _, v = S
                                            }
                                        }
                                    } else if (T += u - w, w < k) {
                                        k -= w;
                                        do S[a++] = d[T++]; while (--w);
                                        T = a - _, v = S
                                    }
                                    for (; k > 2;) S[a++] = v[T++], S[a++] = v[T++], S[a++] = v[T++], k -= 3;
                                    k && (S[a++] = v[T++], k > 1 && (S[a++] = v[T++]))
                                } else {
                                    T = a - _;
                                    do S[a++] = S[T++], S[a++] = S[T++], S[a++] = S[T++], k -= 3; while (k > 2);
                                    k && (S[a++] = S[T++], k > 1 && (S[a++] = S[T++]))
                                }
                            } else if ((64 & w) == 0) {
                                y = g[(65535 & y) + (h & (1 << w) - 1)];
                                continue
                            } else {
                                e.msg = "invalid distance code", x.mode = 16209;
                                break e
                            }
                            break
                        } else if ((64 & w) == 0) {
                            y = p[(65535 & y) + (h & (1 << w) - 1)];
                            continue
                        } else if (32 & w) {
                        x.mode = 16191;
                        break e
                    } else {
                        e.msg = "invalid literal/length code", x.mode = 16209;
                        break e
                    }
                    break
                }
            while (r < n && a < s);
        r -= k = f >> 3, f -= k << 3, h &= (1 << f) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < n ? 5 + (n - r) : 5 - (r - n), e.avail_out = a < s ? 257 + (s - a) : 257 - (a - s), x.hold = h, x.bits = f
    };
    let tS = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
        tx = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
        tE = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
        tU = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var tB = (e, t, r, n, a, i, s, o) => {
        let l, c, u, d, h, f, p, g, m;
        let b = o.bits,
            y = 0,
            w = 0,
            k = 0,
            _ = 0,
            T = 0,
            v = 0,
            N = 0,
            S = 0,
            x = 0,
            E = 0,
            U = null,
            B = new Uint16Array(16),
            I = new Uint16Array(16),
            R = null;
        for (y = 0; y <= 15; y++) B[y] = 0;
        for (w = 0; w < n; w++) B[t[r + w]]++;
        for (_ = 15, T = b; _ >= 1 && 0 === B[_]; _--);
        if (T > _ && (T = _), 0 === _) return a[i++] = 0x1400000, a[i++] = 0x1400000, o.bits = 1, 0;
        for (k = 1; k < _ && 0 === B[k]; k++);
        for (T < k && (T = k), S = 1, y = 1; y <= 15; y++)
            if (S <<= 1, (S -= B[y]) < 0) return -1;
        if (S > 0 && (0 === e || 1 !== _)) return -1;
        for (y = 1, I[1] = 0; y < 15; y++) I[y + 1] = I[y] + B[y];
        for (w = 0; w < n; w++) 0 !== t[r + w] && (s[I[t[r + w]]++] = w);
        if (0 === e ? (U = R = s, f = 20) : 1 === e ? (U = tS, R = tx, f = 257) : (U = tE, R = tU, f = 0), E = 0, w = 0, y = k, h = i, v = T, N = 0, u = -1, d = (x = 1 << T) - 1, 1 === e && x > 852 || 2 === e && x > 592) return 1;
        for (;;) {
            p = y - N, s[w] + 1 < f ? (g = 0, m = s[w]) : s[w] >= f ? (g = R[s[w] - f], m = U[s[w] - f]) : (g = 96, m = 0), l = 1 << y - N, k = c = 1 << v;
            do a[h + (E >> N) + (c -= l)] = p << 24 | g << 16 | m | 0; while (0 !== c);
            for (l = 1 << y - 1; E & l;) l >>= 1;
            if (0 !== l ? (E &= l - 1, E += l) : E = 0, w++, 0 == --B[y]) {
                if (y === _) break;
                y = t[r + s[w]]
            }
            if (y > T && (E & d) !== u) {
                for (0 === N && (N = T), h += k, S = 1 << (v = y - N); v + N < _ && !((S -= B[v + N]) <= 0);) {
                    ;
                    v++, S <<= 1
                }
                if (x += 1 << v, 1 === e && x > 852 || 2 === e && x > 592) return 1;
                a[u = E & d] = T << 24 | v << 16 | h - i | 0
            }
        }
        return 0 !== E && (a[h + E] = y - N << 24 | 4194304), o.bits = T, 0
    };
    let {
        Z_FINISH: tI,
        Z_BLOCK: tR,
        Z_TREES: tO,
        Z_OK: tA,
        Z_STREAM_END: tC,
        Z_NEED_DICT: tL,
        Z_STREAM_ERROR: tD,
        Z_DATA_ERROR: tF,
        Z_MEM_ERROR: tP,
        Z_BUF_ERROR: t$,
        Z_DEFLATED: tz
    } = em, tq = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
    
    function tW() {
        this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
    }
    let tj = e => {
            if (!e) return 1;
            let t = e.state;
            return !t || t.strm !== e || t.mode < 16180 || t.mode > 16211 ? 1 : 0
        },
        tV = e => {
            if (tj(e)) return tD;
            let t = e.state;
            return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 16180, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(852), t.distcode = t.distdyn = new Int32Array(592), t.sane = 1, t.back = -1, tA
        },
        tM = e => {
            if (tj(e)) return tD;
            let t = e.state;
            return t.wsize = 0, t.whave = 0, t.wnext = 0, tV(e)
        },
        tK = (e, t) => {
            let r;
            if (tj(e)) return tD;
            let n = e.state;
            return (t < 0 ? (r = 0, t = -t) : (r = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? tD : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, tM(e))
        },
        tH = (e, t) => {
            if (!e) return tD;
            let r = new tW;
            e.state = r, r.strm = e, r.window = null, r.mode = 16180;
            let n = tK(e, t);
            return n !== tA && (e.state = null), n
        },
        tZ = !0,
        tG = e => {
            if (tZ) {
                n = new Int32Array(512), a = new Int32Array(32);
                let t = 0;
                for (; t < 144;) e.lens[t++] = 8;
                for (; t < 256;) e.lens[t++] = 9;
                for (; t < 280;) e.lens[t++] = 7;
                for (; t < 288;) e.lens[t++] = 8;
                for (tB(1, e.lens, 0, 288, n, 0, e.work, {
                        bits: 9
                    }), t = 0; t < 32;) e.lens[t++] = 5;
                tB(2, e.lens, 0, 32, a, 0, e.work, {
                    bits: 5
                }), tZ = !1
            }
            e.lencode = n, e.lenbits = 9, e.distcode = a, e.distbits = 5
        },
        tJ = (e, t, r, n) => {
            let a;
            let i = e.state;
            return null === i.window && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0, i.window = new Uint8Array(i.wsize)), n >= i.wsize ? (i.window.set(t.subarray(r - i.wsize, r), 0), i.wnext = 0, i.whave = i.wsize) : ((a = i.wsize - i.wnext) > n && (a = n), i.window.set(t.subarray(r - n, r - n + a), i.wnext), (n -= a) ? (i.window.set(t.subarray(r - n, r), 0), i.wnext = n, i.whave = i.wsize) : (i.wnext += a, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += a))), 0
        };
    var tX = {
            inflateReset: tM,
            inflateInit2: tH,
            inflate: (e, t) => {
                let r, n, a, i, s, o, l, c, u, d, h, f, p, g, m, b, y, w, k, _, T, v, N, S;
                let x = 0,
                    E = new Uint8Array(4),
                    U = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                if (tj(e) || !e.output || !e.input && 0 !== e.avail_in) return tD;
                16191 === (r = e.state).mode && (r.mode = 16192), s = e.next_out, a = e.output, l = e.avail_out, i = e.next_in, n = e.input, o = e.avail_in, c = r.hold, u = r.bits, d = o, h = l, v = tA;
                t: for (;;) switch (r.mode) {
                    case 16180:
                        if (0 === r.wrap) {
                            r.mode = 16192;
                            break
                        }
                        for (; u < 16;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        if (2 & r.wrap && 35615 === c) {
                            0 === r.wbits && (r.wbits = 15), r.check = 0, E[0] = 255 & c, E[1] = c >>> 8 & 255, r.check = ep(r.check, E, 2, 0), c = 0, u = 0, r.mode = 16181;
                            break
                        }
                        if (r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & c) << 8) + (c >> 8)) % 31) {
                            e.msg = "incorrect header check", r.mode = 16209;
                            break
                        }
                        if ((15 & c) !== tz) {
                            e.msg = "unknown compression method", r.mode = 16209;
                            break
                        }
                        if (c >>>= 4, u -= 4, T = (15 & c) + 8, 0 === r.wbits && (r.wbits = T), T > 15 || T > r.wbits) {
                            e.msg = "invalid window size", r.mode = 16209;
                            break
                        }
                        r.dmax = 1 << r.wbits, r.flags = 0, e.adler = r.check = 1, r.mode = 512 & c ? 16189 : 16191, c = 0, u = 0;
                        break;
                    case 16181:
                        for (; u < 16;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        if (r.flags = c, (255 & r.flags) !== tz) {
                            e.msg = "unknown compression method", r.mode = 16209;
                            break
                        }
                        if (57344 & r.flags) {
                            e.msg = "unknown header flags set", r.mode = 16209;
                            break
                        }
                        r.head && (r.head.text = c >> 8 & 1), 512 & r.flags && 4 & r.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, r.check = ep(r.check, E, 2, 0)), c = 0, u = 0, r.mode = 16182;
                    case 16182:
                        for (; u < 32;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        r.head && (r.head.time = c), 512 & r.flags && 4 & r.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, E[2] = c >>> 16 & 255, E[3] = c >>> 24 & 255, r.check = ep(r.check, E, 4, 0)), c = 0, u = 0, r.mode = 16183;
                    case 16183:
                        for (; u < 16;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        r.head && (r.head.xflags = 255 & c, r.head.os = c >> 8), 512 & r.flags && 4 & r.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, r.check = ep(r.check, E, 2, 0)), c = 0, u = 0, r.mode = 16184;
                    case 16184:
                        if (1024 & r.flags) {
                            for (; u < 16;) {
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            r.length = c, r.head && (r.head.extra_len = c), 512 & r.flags && 4 & r.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, r.check = ep(r.check, E, 2, 0)), c = 0, u = 0
                        } else r.head && (r.head.extra = null);
                        r.mode = 16185;
                    case 16185:
                        if (1024 & r.flags && ((f = r.length) > o && (f = o), f && (r.head && (T = r.head.extra_len - r.length, !r.head.extra && (r.head.extra = new Uint8Array(r.head.extra_len)), r.head.extra.set(n.subarray(i, i + f), T)), 512 & r.flags && 4 & r.wrap && (r.check = ep(r.check, n, f, i)), o -= f, i += f, r.length -= f), r.length)) break t;
                        r.length = 0, r.mode = 16186;
                    case 16186:
                        if (2048 & r.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do T = n[i + f++], r.head && T && r.length < 65536 && (r.head.name += String.fromCharCode(T)); while (T && f < o);
                            if (512 & r.flags && 4 & r.wrap && (r.check = ep(r.check, n, f, i)), o -= f, i += f, T) break t
                        } else r.head && (r.head.name = null);
                        r.length = 0, r.mode = 16187;
                    case 16187:
                        if (4096 & r.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do T = n[i + f++], r.head && T && r.length < 65536 && (r.head.comment += String.fromCharCode(T)); while (T && f < o);
                            if (512 & r.flags && 4 & r.wrap && (r.check = ep(r.check, n, f, i)), o -= f, i += f, T) break t
                        } else r.head && (r.head.comment = null);
                        r.mode = 16188;
                    case 16188:
                        if (512 & r.flags) {
                            for (; u < 16;) {
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            if (4 & r.wrap && c !== (65535 & r.check)) {
                                e.msg = "header crc mismatch", r.mode = 16209;
                                break
                            }
                            c = 0, u = 0
                        }
                        r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 16191;
                        break;
                    case 16189:
                        for (; u < 32;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        e.adler = r.check = tq(c), c = 0, u = 0, r.mode = 16190;
                    case 16190:
                        if (0 === r.havedict) return e.next_out = s, e.avail_out = l, e.next_in = i, e.avail_in = o, r.hold = c, r.bits = u, tL;
                        e.adler = r.check = 1, r.mode = 16191;
                    case 16191:
                        if (t === tR || t === tO) break t;
                    case 16192:
                        if (r.last) {
                            c >>>= 7 & u, u -= 7 & u, r.mode = 16206;
                            break
                        }
                        for (; u < 3;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        switch (r.last = 1 & c, u -= 1, 3 & (c >>>= 1)) {
                            case 0:
                                r.mode = 16193;
                                break;
                            case 1:
                                if (tG(r), r.mode = 16199, t === tO) {
                                    c >>>= 2, u -= 2;
                                    break t
                                }
                                break;
                            case 2:
                                r.mode = 16196;
                                break;
                            case 3:
                                e.msg = "invalid block type", r.mode = 16209
                        }
                        c >>>= 2, u -= 2;
                        break;
                    case 16193:
                        for (c >>>= 7 & u, u -= 7 & u; u < 32;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        if ((65535 & c) != (c >>> 16 ^ 65535)) {
                            e.msg = "invalid stored block lengths", r.mode = 16209;
                            break
                        }
                        if (r.length = 65535 & c, c = 0, u = 0, r.mode = 16194, t === tO) break t;
                    case 16194:
                        r.mode = 16195;
                    case 16195:
                        if (f = r.length) {
                            if (f > o && (f = o), f > l && (f = l), 0 === f) break t;
                            a.set(n.subarray(i, i + f), s), o -= f, i += f, l -= f, s += f, r.length -= f;
                            break
                        }
                        r.mode = 16191;
                        break;
                    case 16196:
                        for (; u < 14;) {
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        if (r.nlen = (31 & c) + 257, c >>>= 5, u -= 5, r.ndist = (31 & c) + 1, c >>>= 5, u -= 5, r.ncode = (15 & c) + 4, c >>>= 4, u -= 4, r.nlen > 286 || r.ndist > 30) {
                            e.msg = "too many length or distance symbols", r.mode = 16209;
                            break
                        }
                        r.have = 0, r.mode = 16197;
                    case 16197:
                        for (; r.have < r.ncode;) {
                            for (; u < 3;) {
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            r.lens[U[r.have++]] = 7 & c, c >>>= 3, u -= 3
                        }
                        for (; r.have < 19;) r.lens[U[r.have++]] = 0;
                        if (r.lencode = r.lendyn, r.lenbits = 7, N = {
                                bits: r.lenbits
                            }, v = tB(0, r.lens, 0, 19, r.lencode, 0, r.work, N), r.lenbits = N.bits, v) {
                            e.msg = "invalid code lengths set", r.mode = 16209;
                            break
                        }
                        r.have = 0, r.mode = 16198;
                    case 16198:
                        for (; r.have < r.nlen + r.ndist;) {
                            for (; m = (x = r.lencode[c & (1 << r.lenbits) - 1]) >>> 24, b = x >>> 16 & 255, y = 65535 & x, !(m <= u);) {
                                ;
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            if (y < 16) c >>>= m, u -= m, r.lens[r.have++] = y;
                            else {
                                if (16 === y) {
                                    for (S = m + 2; u < S;) {
                                        if (0 === o) break t;
                                        o--, c += n[i++] << u, u += 8
                                    }
                                    if (c >>>= m, u -= m, 0 === r.have) {
                                        e.msg = "invalid bit length repeat", r.mode = 16209;
                                        break
                                    }
                                    T = r.lens[r.have - 1], f = 3 + (3 & c), c >>>= 2, u -= 2
                                } else if (17 === y) {
                                    for (S = m + 3; u < S;) {
                                        if (0 === o) break t;
                                        o--, c += n[i++] << u, u += 8
                                    }
                                    c >>>= m, u -= m, T = 0, f = 3 + (7 & c), c >>>= 3, u -= 3
                                } else {
                                    for (S = m + 7; u < S;) {
                                        if (0 === o) break t;
                                        o--, c += n[i++] << u, u += 8
                                    }
                                    c >>>= m, u -= m, T = 0, f = 11 + (127 & c), c >>>= 7, u -= 7
                                }
                                if (r.have + f > r.nlen + r.ndist) {
                                    e.msg = "invalid bit length repeat", r.mode = 16209;
                                    break
                                }
                                for (; f--;) r.lens[r.have++] = T
                            }
                        }
                        if (16209 === r.mode) break;
                        if (0 === r.lens[256]) {
                            e.msg = "invalid code -- missing end-of-block", r.mode = 16209;
                            break
                        }
                        if (r.lenbits = 9, N = {
                                bits: r.lenbits
                            }, v = tB(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, N), r.lenbits = N.bits, v) {
                            e.msg = "invalid literal/lengths set", r.mode = 16209;
                            break
                        }
                        if (r.distbits = 6, r.distcode = r.distdyn, N = {
                                bits: r.distbits
                            }, v = tB(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, N), r.distbits = N.bits, v) {
                            e.msg = "invalid distances set", r.mode = 16209;
                            break
                        }
                        if (r.mode = 16199, t === tO) break t;
                    case 16199:
                        r.mode = 16200;
                    case 16200:
                        if (o >= 6 && l >= 258) {
                            e.next_out = s, e.avail_out = l, e.next_in = i, e.avail_in = o, r.hold = c, r.bits = u, tN(e, h), s = e.next_out, a = e.output, l = e.avail_out, i = e.next_in, n = e.input, o = e.avail_in, c = r.hold, u = r.bits, 16191 === r.mode && (r.back = -1);
                            break
                        }
                        for (r.back = 0; m = (x = r.lencode[c & (1 << r.lenbits) - 1]) >>> 24, b = x >>> 16 & 255, y = 65535 & x, !(m <= u);) {
                            ;
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        if (b && (240 & b) == 0) {
                            for (w = m, k = b, _ = y; m = (x = r.lencode[_ + ((c & (1 << w + k) - 1) >> w)]) >>> 24, b = x >>> 16 & 255, y = 65535 & x, !(w + m <= u);) {
                                ;
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            c >>>= w, u -= w, r.back += w
                        }
                        if (c >>>= m, u -= m, r.back += m, r.length = y, 0 === b) {
                            r.mode = 16205;
                            break
                        }
                        if (32 & b) {
                            r.back = -1, r.mode = 16191;
                            break
                        }
                        if (64 & b) {
                            e.msg = "invalid literal/length code", r.mode = 16209;
                            break
                        }
                        r.extra = 15 & b, r.mode = 16201;
                    case 16201:
                        if (r.extra) {
                            for (S = r.extra; u < S;) {
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            r.length += c & (1 << r.extra) - 1, c >>>= r.extra, u -= r.extra, r.back += r.extra
                        }
                        r.was = r.length, r.mode = 16202;
                    case 16202:
                        for (; m = (x = r.distcode[c & (1 << r.distbits) - 1]) >>> 24, b = x >>> 16 & 255, y = 65535 & x, !(m <= u);) {
                            ;
                            if (0 === o) break t;
                            o--, c += n[i++] << u, u += 8
                        }
                        if ((240 & b) == 0) {
                            for (w = m, k = b, _ = y; m = (x = r.distcode[_ + ((c & (1 << w + k) - 1) >> w)]) >>> 24, b = x >>> 16 & 255, y = 65535 & x, !(w + m <= u);) {
                                ;
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            c >>>= w, u -= w, r.back += w
                        }
                        if (c >>>= m, u -= m, r.back += m, 64 & b) {
                            e.msg = "invalid distance code", r.mode = 16209;
                            break
                        }
                        r.offset = y, r.extra = 15 & b, r.mode = 16203;
                    case 16203:
                        if (r.extra) {
                            for (S = r.extra; u < S;) {
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            r.offset += c & (1 << r.extra) - 1, c >>>= r.extra, u -= r.extra, r.back += r.extra
                        }
                        if (r.offset > r.dmax) {
                            e.msg = "invalid distance too far back", r.mode = 16209;
                            break
                        }
                        r.mode = 16204;
                    case 16204:
                        if (0 === l) break t;
                        if (f = h - l, r.offset > f) {
                            if ((f = r.offset - f) > r.whave && r.sane) {
                                e.msg = "invalid distance too far back", r.mode = 16209;
                                break
                            }
                            f > r.wnext ? (f -= r.wnext, p = r.wsize - f) : p = r.wnext - f, f > r.length && (f = r.length), g = r.window
                        } else g = a, p = s - r.offset, f = r.length;
                        f > l && (f = l), l -= f, r.length -= f;
                        do a[s++] = g[p++]; while (--f);
                        0 === r.length && (r.mode = 16200);
                        break;
                    case 16205:
                        if (0 === l) break t;
                        a[s++] = r.length, l--, r.mode = 16200;
                        break;
                    case 16206:
                        if (r.wrap) {
                            for (; u < 32;) {
                                if (0 === o) break t;
                                o--, c |= n[i++] << u, u += 8
                            }
                            if (h -= l, e.total_out += h, r.total += h, 4 & r.wrap && h && (e.adler = r.check = r.flags ? ep(r.check, a, h, s - h) : eh(r.check, a, h, s - h)), h = l, 4 & r.wrap && (r.flags ? c : tq(c)) !== r.check) {
                                e.msg = "incorrect data check", r.mode = 16209;
                                break
                            }
                            c = 0, u = 0
                        }
                        r.mode = 16207;
                    case 16207:
                        if (r.wrap && r.flags) {
                            for (; u < 32;) {
                                if (0 === o) break t;
                                o--, c += n[i++] << u, u += 8
                            }
                            if (4 & r.wrap && c !== (0xffffffff & r.total)) {
                                e.msg = "incorrect length check", r.mode = 16209;
                                break
                            }
                            c = 0, u = 0
                        }
                        r.mode = 16208;
                    case 16208:
                        v = tC;
                        break t;
                    case 16209:
                        v = tF;
                        break t;
                    case 16210:
                        return tP;
                    default:
                        return tD
                }
                return e.next_out = s, e.avail_out = l, e.next_in = i, e.avail_in = o, r.hold = c, r.bits = u, (r.wsize || h !== e.avail_out && r.mode < 16209 && (r.mode < 16206 || t !== tI)) && tJ(e, e.output, e.next_out, h - e.avail_out), d -= e.avail_in, h -= e.avail_out, e.total_in += d, e.total_out += h, r.total += h, 4 & r.wrap && h && (e.adler = r.check = r.flags ? ep(r.check, a, h, e.next_out - h) : eh(r.check, a, h, e.next_out - h)), e.data_type = r.bits + (r.last ? 64 : 0) + (16191 === r.mode ? 128 : 0) + (16199 === r.mode || 16194 === r.mode ? 256 : 0), (0 === d && 0 === h || t === tI) && v === tA && (v = t$), v
            },
            inflateEnd: e => {
                if (tj(e)) return tD;
                let t = e.state;
                return t.window && (t.window = null), e.state = null, tA
            },
            inflateGetHeader: (e, t) => {
                if (tj(e)) return tD;
                let r = e.state;
                return (2 & r.wrap) == 0 ? tD : (r.head = t, t.done = !1, tA)
            },
            inflateSetDictionary: (e, t) => {
                let r, n;
                let a = t.length;
                return tj(e) || 0 !== (r = e.state).wrap && 16190 !== r.mode ? tD : 16190 === r.mode && (n = eh(n = 1, t, a, 0)) !== r.check ? tF : tJ(e, t, a, a) ? (r.mode = 16210, tP) : (r.havedict = 1, tA)
            }
        },
        tQ = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        };
    let tY = Object.prototype.toString,
        {
            Z_NO_FLUSH: t0,
            Z_FINISH: t1,
            Z_OK: t2,
            Z_STREAM_END: t3,
            Z_NEED_DICT: t4,
            Z_STREAM_ERROR: t5,
            Z_DATA_ERROR: t6,
            Z_MEM_ERROR: t8
        } = em;
    
    function t9(e) {
        this.options = ts.assign({
            chunkSize: 65536,
            windowBits: 15,
            to: ""
        }, e || {});
        let t = this.options;
        t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new td, this.strm.avail_out = 0;
        let r = tX.inflateInit2(this.strm, t.windowBits);
        if (r !== t2) throw Error(eg[r]);
        if (this.header = new tQ, tX.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = tu.string2buf(t.dictionary) : "[object ArrayBuffer]" === tY.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (r = tX.inflateSetDictionary(this.strm, t.dictionary)) !== t2)) throw Error(eg[r])
    }
    
    function t7(e, t) {
        let r = new t9(t);
        if (r.push(e), r.err) throw r.msg || eg[r.err];
        return r.result
    }
    t9.prototype.push = function(e, t) {
        let r, n, a;
        let i = this.strm,
            s = this.options.chunkSize,
            o = this.options.dictionary;
        if (this.ended) return !1;
        for (n = t === ~~t ? t : !0 === t ? t1 : t0, "[object ArrayBuffer]" === tY.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;;) {
            for (0 === i.avail_out && (i.output = new Uint8Array(s), i.next_out = 0, i.avail_out = s), (r = tX.inflate(i, n)) === t4 && o && ((r = tX.inflateSetDictionary(i, o)) === t2 ? r = tX.inflate(i, n) : r === t6 && (r = t4)); i.avail_in > 0 && r === t3 && i.state.wrap > 0 && 0 !== e[i.next_in];) tX.inflateReset(i), r = tX.inflate(i, n);
            switch (r) {
                case t5:
                case t6:
                case t4:
                case t8:
                    return this.onEnd(r), this.ended = !0, !1
            }
            if (a = i.avail_out, i.next_out && (0 === i.avail_out || r === t3)) {
                if ("string" === this.options.to) {
                    let e = tu.utf8border(i.output, i.next_out),
                        t = i.next_out - e,
                        r = tu.buf2string(i.output, e);
                    i.next_out = t, i.avail_out = s - t, t && i.output.set(i.output.subarray(e, e + t), 0), this.onData(r)
                } else this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out))
            }
            if (r !== t2 || 0 !== a) {
                if (r === t3) return r = tX.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, !0;
                if (0 === i.avail_in) break
            }
        }
        return !0
    }, t9.prototype.onData = function(e) {
        this.chunks.push(e)
    }, t9.prototype.onEnd = function(e) {
        e === t2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = ts.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };
    let {
        Deflate: re,
        deflate: rt,
        deflateRaw: rr,
        gzip: rn
    } = {
        Deflate: tT,
        deflate: tv,
        deflateRaw: function(e, t) {
            return (t = t || {}).raw = !0, tv(e, t)
        },
        gzip: function(e, t) {
            return (t = t || {}).gzip = !0, tv(e, t)
        },
        constants: em
    }, {
        Inflate: ra,
        inflate: ri,
        inflateRaw: rs,
        ungzip: ro
    } = {
        Inflate: t9,
        inflate: t7,
        inflateRaw: function(e, t) {
            return (t = t || {}).raw = !0, t7(e, t)
        },
        ungzip: t7,
        constants: em
    };
    var rl = {
        gzip: rn,
        ungzip: ro
    };
    class rc {
        static decode(e = new Uint8Array([])) {
            T.log("☑️ gRPC.decode");
            let t = e.slice(0, 5),
                r = e.slice(5);
            switch (t[0]) {
                case 0:
                default:
                    break;
                case 1:
                    switch (_) {
                        case "Loon":
                        case "Surge":
                        case "Egern":
                            r = $utils.ungzip(r);
                            break;
                        default:
                            r = rl.ungzip(r)
                    }
                    t[0] = 0
            }
            return T.log("✅ gRPC.decode"), r
        }
        static encode(e = new Uint8Array([]), t = "identity") {
            T.log("☑️ gRPC.encode");
            let r = new Uint8Array(5),
                n = rc.#o(e.length);
            if (r.set(n, 1), "gzip" === t) r.set([1], 0), e = rl.gzip(e);
            else r.set([0], 0);
            let a = new Uint8Array(r.length + e.length);
            return a.set(r, 0), a.set(e, 5), T.log("✅ gRPC.encode"), a
        }
        static #o = (e = 0) => {
            let t = new ArrayBuffer(4);
            return new DataView(t).setUint32(0, e, !1), new Uint8Array(t)
        }
    }
    
    function ru(e) {
        return /^\d+$/.test(e) && (e = Number.parseInt(e, 10)), e
    }
    let rd = Symbol.for("protobuf-ts/message-type");
    
    function rh(e) {
        let t = !1,
            r = [];
        for (let n = 0; n < e.length; n++) {
            let a = e.charAt(n);
            "_" == a ? t = !0 : /\d/.test(a) ? (r.push(a), t = !0) : t ? (r.push(a.toUpperCase()), t = !1) : 0 == n ? r.push(a.toLowerCase()) : r.push(a)
        }
        return r.join("")
    }
    
    function rf(e) {
        var t, r, n, a;
        return e.localName = null !== (t = e.localName) && void 0 !== t ? t : rh(e.name), e.jsonName = null !== (r = e.jsonName) && void 0 !== r ? r : rh(e.name), e.repeat = null !== (n = e.repeat) && void 0 !== n ? n : c.NO, e.opt = null !== (a = e.opt) && void 0 !== a ? a : !e.repeat && !e.oneof && "message" == e.kind, e
    }! function(e) {
        e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64"
    }(o || (o = {})), ! function(e) {
        e[e.BIGINT = 0] = "BIGINT", e[e.STRING = 1] = "STRING", e[e.NUMBER = 2] = "NUMBER"
    }(l || (l = {})), ! function(e) {
        e[e.NO = 0] = "NO", e[e.PACKED = 1] = "PACKED", e[e.UNPACKED = 2] = "UNPACKED"
    }(c || (c = {}));
    class rp {
        constructor(e) {
            var t;
            this.fields = null !== (t = e.fields) && void 0 !== t ? t : []
        }
        prepare() {
            if (this.data) return;
            let e = [],
                t = [],
                r = [];
            for (let n of this.fields)
                if (n.oneof) !r.includes(n.oneof) && (r.push(n.oneof), e.push(n.oneof), t.push(n.oneof));
                else switch (t.push(n.localName), n.kind) {
                    case "scalar":
                    case "enum":
                        (!n.opt || n.repeat) && e.push(n.localName);
                        break;
                    case "message":
                        n.repeat && e.push(n.localName);
                        break;
                    case "map":
                        e.push(n.localName)
                }
            this.data = {
                req: e,
                known: t,
                oneofs: Object.values(r)
            }
        }
        is(e, t, r = !1) {
            if (t < 0) return !0;
            if (null == e || "object" != typeof e) return !1;
            this.prepare();
            let n = Object.keys(e),
                a = this.data;
            if (n.length < a.req.length || a.req.some(e => !n.includes(e)) || !r && n.some(e => !a.known.includes(e))) return !1;
            if (t < 1) return !0;
            for (let n of a.oneofs) {
                let a = e[n];
                if (! function(e) {
                        if ("object" != typeof e || null === e || !e.hasOwnProperty("oneofKind")) return !1;
                        switch (typeof e.oneofKind) {
                            case "string":
                                if (void 0 === e[e.oneofKind]) return !1;
                                return 2 == Object.keys(e).length;
                            case "undefined":
                                return 1 == Object.keys(e).length;
                            default:
                                return !1
                        }
                    }(a)) return !1;
                if (void 0 === a.oneofKind) continue;
                let i = this.fields.find(e => e.localName === a.oneofKind);
                if (!i || !this.field(a[a.oneofKind], i, r, t)) return !1
            }
            for (let n of this.fields)
                if (void 0 === n.oneof && !this.field(e[n.localName], n, r, t)) return !1;
            return !0
        }
        field(e, t, r, n) {
            let a = t.repeat;
            switch (t.kind) {
                case "scalar":
                    if (void 0 === e) return t.opt;
                    if (a) return this.scalars(e, t.T, n, t.L);
                    return this.scalar(e, t.T, t.L);
                case "enum":
                    if (void 0 === e) return t.opt;
                    if (a) return this.scalars(e, o.INT32, n);
                    return this.scalar(e, o.INT32);
                case "message":
                    if (void 0 === e) break;
                    if (a) return this.messages(e, t.T(), r, n);
                    return this.message(e, t.T(), r, n);
                case "map":
                    if ("object" != typeof e || null === e) return !1;
                    if (n < 2) break;
                    if (!this.mapKeys(e, t.K, n)) return !1;
                    switch (t.V.kind) {
                        case "scalar":
                            return this.scalars(Object.values(e), t.V.T, n, t.V.L);
                        case "enum":
                            return this.scalars(Object.values(e), o.INT32, n);
                        case "message":
                            return this.messages(Object.values(e), t.V.T(), r, n)
                    }
            }
            return !0
        }
        message(e, t, r, n) {
            return r ? t.isAssignable(e, n) : t.is(e, n)
        }
        messages(e, t, r, n) {
            if (!Array.isArray(e)) return !1;
            if (n < 2) return !0;
            if (r) {
                for (let r = 0; r < e.length && r < n; r++)
                    if (!t.isAssignable(e[r], n - 1)) return !1
            } else
                for (let r = 0; r < e.length && r < n; r++)
                    if (!t.is(e[r], n - 1)) return !1;
            return !0
        }
        scalar(e, t, r) {
            let n = typeof e;
            switch (t) {
                case o.UINT64:
                case o.FIXED64:
                case o.INT64:
                case o.SFIXED64:
                case o.SINT64:
                    switch (r) {
                        case l.BIGINT:
                            return "bigint" == n;
                        case l.NUMBER:
                            return "number" == n && !isNaN(e);
                        default:
                            return "string" == n
                    }
                case o.BOOL:
                    return "boolean" == n;
                case o.STRING:
                    return "string" == n;
                case o.BYTES:
                    return e instanceof Uint8Array;
                case o.DOUBLE:
                case o.FLOAT:
                    return "number" == n && !isNaN(e);
                default:
                    return "number" == n && Number.isInteger(e)
            }
        }
        scalars(e, t, r, n) {
            if (!Array.isArray(e)) return !1;
            if (r < 2) return !0;
            if (Array.isArray(e)) {
                for (let a = 0; a < e.length && a < r; a++)
                    if (!this.scalar(e[a], t, n)) return !1
            }
            return !0
        }
        mapKeys(e, t, r) {
            let n = Object.keys(e);
            switch (t) {
                case o.INT32:
                case o.FIXED32:
                case o.SFIXED32:
                case o.SINT32:
                case o.UINT32:
                    return this.scalars(n.slice(0, r).map(e => parseInt(e)), t, r);
                case o.BOOL:
                    return this.scalars(n.slice(0, r).map(e => "true" == e || "false" != e && e), t, r);
                default:
                    return this.scalars(n, t, r, l.STRING)
            }
        }
    }
    
    function rg(e) {
        let t = typeof e;
        if ("object" == t) {
            if (Array.isArray(e)) return "array";
            if (null === e) return "null"
        }
        return t
    }
    
    function rm(e) {
        return null !== e && "object" == typeof e && !Array.isArray(e)
    }
    let rb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
        ry = [];
    for (let e = 0; e < rb.length; e++) ry[rb[e].charCodeAt(0)] = e;
    ry["-".charCodeAt(0)] = rb.indexOf("+"), ry["_".charCodeAt(0)] = rb.indexOf("/");
    
    function rw() {
        let e = 0,
            t = 0;
        for (let r = 0; r < 28; r += 7) {
            let n = this.buf[this.pos++];
            if (e |= (127 & n) << r, (128 & n) == 0) return this.assertBounds(), [e, t]
        }
        let r = this.buf[this.pos++];
        if (e |= (15 & r) << 28, t = (112 & r) >> 4, (128 & r) == 0) return this.assertBounds(), [e, t];
        for (let r = 3; r <= 31; r += 7) {
            let n = this.buf[this.pos++];
            if (t |= (127 & n) << r, (128 & n) == 0) return this.assertBounds(), [e, t]
        }
        throw Error("invalid varint")
    }
    
    function rk(e, t, r) {
        for (let n = 0; n < 28; n += 7) {
            let a = e >>> n,
                i = !(a >>> 7 == 0 && 0 == t),
                s = (i ? 128 | a : a) & 255;
            if (r.push(s), !i) return
        }
        let n = e >>> 28 & 15 | (7 & t) << 4,
            a = t >> 3 != 0;
        if (r.push((a ? 128 | n : n) & 255), !!a) {
            for (let e = 3; e < 31; e += 7) {
                let n = t >>> e,
                    a = n >>> 7 != 0,
                    i = (a ? 128 | n : n) & 255;
                if (r.push(i), !a) return
            }
            r.push(t >>> 31 & 1)
        }
    }
    
    function r_(e) {
        let t = "-" == e[0];
        t && (e = e.slice(1));
        let r = 0,
            n = 0;
        
        function a(t, a) {
            let i = Number(e.slice(t, a));
            n *= 1e6, (r = 1e6 * r + i) >= 0x100000000 && (n += r / 0x100000000 | 0, r %= 0x100000000)
        }
        return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), [t, r, n]
    }
    
    function rT(e, t) {
        if (t >>> 0 <= 2097151) return "" + (0x100000000 * t + (e >>> 0));
        let r = (e >>> 24 | t << 8) >>> 0 & 0xffffff,
            n = t >> 16 & 65535,
            a = (0xffffff & e) + 6777216 * r + 6710656 * n,
            i = r + 8147497 * n,
            s = 2 * n;
        
        function o(e, t) {
            let r = e ? String(e) : "";
            return t ? "0000000".slice(r.length) + r : r
        }
        return a >= 1e7 && (i += Math.floor(a / 1e7), a %= 1e7), i >= 1e7 && (s += Math.floor(i / 1e7), i %= 1e7), o(s, 0) + o(i, s) + o(a, 1)
    }
    
    function rv(e, t) {
        if (e >= 0) {
            for (; e > 127;) t.push(127 & e | 128), e >>>= 7;
            t.push(e)
        } else {
            for (let r = 0; r < 9; r++) t.push(127 & e | 128), e >>= 7;
            t.push(1)
        }
    }
    
    function rN() {
        let e = this.buf[this.pos++],
            t = 127 & e;
        if ((128 & e) == 0) return this.assertBounds(), t;
        if (t |= (127 & (e = this.buf[this.pos++])) << 7, (128 & e) == 0) return this.assertBounds(), t;
        if (t |= (127 & (e = this.buf[this.pos++])) << 14, (128 & e) == 0) return this.assertBounds(), t;
        if (t |= (127 & (e = this.buf[this.pos++])) << 21, (128 & e) == 0) return this.assertBounds(), t;
        t |= (15 & (e = this.buf[this.pos++])) << 28;
        for (let t = 5;
            (128 & e) != 0 && t < 10; t++) e = this.buf[this.pos++];
        if ((128 & e) != 0) throw Error("invalid varint");
        return this.assertBounds(), t >>> 0
    }
    
    function rS(e) {
        if (!e) throw Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
    }! function() {
        let e = new DataView(new ArrayBuffer(8));
        i = void 0 !== globalThis.BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 ? {
            MIN: BigInt("-9223372036854775808"),
            MAX: BigInt("9223372036854775807"),
            UMIN: BigInt("0"),
            UMAX: BigInt("18446744073709551615"),
            C: BigInt,
            V: e
        } : void 0
    }();
    let rx = /^-?[0-9]+$/;
    class rE {
        constructor(e, t) {
            this.lo = 0 | e, this.hi = 0 | t
        }
        isZero() {
            return 0 == this.lo && 0 == this.hi
        }
        toNumber() {
            let e = 0x100000000 * this.hi + (this.lo >>> 0);
            if (!Number.isSafeInteger(e)) throw Error("cannot convert to safe number");
            return e
        }
    }
    class rU extends rE {
        static from(e) {
            if (i) switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if ("" == e) throw Error("string is no integer");
                    e = i.C(e);
                case "number":
                    if (0 === e) return this.ZERO;
                    e = i.C(e);
                case "bigint":
                    if (!e) return this.ZERO;
                    if (e < i.UMIN) throw Error("signed value for ulong");
                    if (e > i.UMAX) throw Error("ulong too large");
                    return i.V.setBigUint64(0, e, !0), new rU(i.V.getInt32(0, !0), i.V.getInt32(4, !0))
            } else switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if (e = e.trim(), !rx.test(e)) throw Error("string is no integer");
                    let [t, r, n] = r_(e);
                    if (t) throw Error("signed value for ulong");
                    return new rU(r, n);
                case "number":
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error("number is no integer");
                    if (e < 0) throw Error("signed value for ulong");
                    return new rU(e, e / 0x100000000)
            }
            throw Error("unknown value " + typeof e)
        }
        toString() {
            return i ? this.toBigInt().toString() : rT(this.lo, this.hi)
        }
        toBigInt() {
            return rS(i), i.V.setInt32(0, this.lo, !0), i.V.setInt32(4, this.hi, !0), i.V.getBigUint64(0, !0)
        }
    }
    rU.ZERO = new rU(0, 0);
    class rB extends rE {
        static from(e) {
            if (i) switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if ("" == e) throw Error("string is no integer");
                    e = i.C(e);
                case "number":
                    if (0 === e) return this.ZERO;
                    e = i.C(e);
                case "bigint":
                    if (!e) return this.ZERO;
                    if (e < i.MIN) throw Error("signed long too small");
                    if (e > i.MAX) throw Error("signed long too large");
                    return i.V.setBigInt64(0, e, !0), new rB(i.V.getInt32(0, !0), i.V.getInt32(4, !0))
            } else switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if (e = e.trim(), !rx.test(e)) throw Error("string is no integer");
                    let [t, r, n] = r_(e);
                    if (t) {
                        if (n > 0x80000000 || 0x80000000 == n && 0 != r) throw Error("signed long too small")
                    } else if (n >= 0x80000000) throw Error("signed long too large");
                    let a = new rB(r, n);
                    return t ? a.negate() : a;
                case "number":
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error("number is no integer");
                    return e > 0 ? new rB(e, e / 0x100000000) : new rB(-e, -e / 0x100000000).negate()
            }
            throw Error("unknown value " + typeof e)
        }
        isNegative() {
            return (0x80000000 & this.hi) != 0
        }
        negate() {
            let e = ~this.hi,
                t = this.lo;
            return t ? t = ~t + 1 : e += 1, new rB(t, e)
        }
        toString() {
            if (i) return this.toBigInt().toString();
            if (this.isNegative()) {
                let e = this.negate();
                return "-" + rT(e.lo, e.hi)
            }
            return rT(this.lo, this.hi)
        }
        toBigInt() {
            return rS(i), i.V.setInt32(0, this.lo, !0), i.V.setInt32(4, this.hi, !0), i.V.getBigInt64(0, !0)
        }
    }
    
    function rI(e, t) {
        if (!e) throw Error(t)
    }
    rB.ZERO = new rB(0, 0);
    
    function rR(e) {
        if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
        if (!Number.isInteger(e) || e > 0x7fffffff || e < -0x80000000) throw Error("invalid int 32: " + e)
    }
    
    function rO(e) {
        if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
        if (!Number.isInteger(e) || e > 0xffffffff || e < 0) throw Error("invalid uint 32: " + e)
    }
    
    function rA(e) {
        if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
        if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw Error("invalid float 32: " + e)
    }
    
    function rC(e, t) {
        switch (t) {
            case l.BIGINT:
                return e.toBigInt();
            case l.NUMBER:
                return e.toNumber();
            default:
                return e.toString()
        }
    }
    class rL {
        constructor(e) {
            this.info = e
        }
        prepare() {
            var e;
            if (void 0 === this.fMap)
                for (let t of (this.fMap = {}, null !== (e = this.info.fields) && void 0 !== e ? e : [])) this.fMap[t.name] = t, this.fMap[t.jsonName] = t, this.fMap[t.localName] = t
        }
        assert(e, t, r) {
            if (!e) {
                let e = rg(r);
                throw ("number" == e || "boolean" == e) && (e = r.toString()), Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`)
            }
        }
        read(e, t, r) {
            this.prepare();
            let n = [];
            for (let [a, i] of Object.entries(e)) {
                let e;
                let s = this.fMap[a];
                if (!s) {
                    if (!r.ignoreUnknownFields) throw Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${a}`);
                    continue
                }
                let c = s.localName;
                if (s.oneof) {
                    if (null === i && ("enum" !== s.kind || "google.protobuf.NullValue" !== s.T()[0])) continue;
                    if (n.includes(s.oneof)) throw Error(`Multiple members of the oneof group "${s.oneof}" of ${this.info.typeName} are present in JSON.`);
                    n.push(s.oneof), e = t[s.oneof] = {
                        oneofKind: c
                    }
                } else e = t;
                if ("map" == s.kind) {
                    if (null === i) continue;
                    this.assert(rm(i), s.name, i);
                    let t = e[c];
                    for (let [e, n] of Object.entries(i)) {
                        let a;
                        switch (this.assert(null !== n, s.name + " map value", null), s.V.kind) {
                            case "message":
                                a = s.V.T().internalJsonRead(n, r);
                                break;
                            case "enum":
                                if (!1 === (a = this.enum(s.V.T(), n, s.name, r.ignoreUnknownFields))) continue;
                                break;
                            case "scalar":
                                a = this.scalar(n, s.V.T, s.V.L, s.name)
                        }
                        this.assert(void 0 !== a, s.name + " map value", n);
                        let i = e;
                        s.K == o.BOOL && (i = "true" == i || "false" != i && i), t[i = this.scalar(i, s.K, l.STRING, s.name).toString()] = a
                    }
                } else if (s.repeat) {
                    if (null === i) continue;
                    this.assert(Array.isArray(i), s.name, i);
                    let t = e[c];
                    for (let e of i) {
                        let n;
                        switch (this.assert(null !== e, s.name, null), s.kind) {
                            case "message":
                                n = s.T().internalJsonRead(e, r);
                                break;
                            case "enum":
                                if (!1 === (n = this.enum(s.T(), e, s.name, r.ignoreUnknownFields))) continue;
                                break;
                            case "scalar":
                                n = this.scalar(e, s.T, s.L, s.name)
                        }
                        this.assert(void 0 !== n, s.name, i), t.push(n)
                    }
                } else switch (s.kind) {
                    case "message":
                        if (null === i && "google.protobuf.Value" != s.T().typeName) {
                            this.assert(void 0 === s.oneof, s.name + " (oneof member)", null);
                            continue
                        }
                        e[c] = s.T().internalJsonRead(i, r, e[c]);
                        break;
                    case "enum":
                        let u = this.enum(s.T(), i, s.name, r.ignoreUnknownFields);
                        if (!1 === u) continue;
                        e[c] = u;
                        break;
                    case "scalar":
                        e[c] = this.scalar(i, s.T, s.L, s.name)
                }
            }
        }
        enum(e, t, r, n) {
            if ("google.protobuf.NullValue" == e[0] && rI(null === t || "NULL_VALUE" === t, `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} only accepts null.`), null === t) return 0;
            switch (typeof t) {
                case "number":
                    return rI(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${r}, enum can only be integral number, got ${t}.`), t;
                case "string":
                    let a = t;
                    e[2] && t.substring(0, e[2].length) === e[2] && (a = t.substring(e[2].length));
                    let i = e[1][a];
                    if (void 0 === i && n) return !1;
                    return rI("number" == typeof i, `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} has no value for "${t}".`), i
            }
            rI(!1, `Unable to parse field ${this.info.typeName}#${r}, cannot parse enum value from ${typeof t}".`)
        }
        scalar(e, t, r, n) {
            let a;
            try {
                switch (t) {
                    case o.DOUBLE:
                    case o.FLOAT:
                        if (null === e) return 0;
                        if ("NaN" === e) return Number.NaN;
                        if ("Infinity" === e) return Number.POSITIVE_INFINITY;
                        if ("-Infinity" === e) return Number.NEGATIVE_INFINITY;
                        if ("" === e) {
                            a = "empty string";
                            break
                        }
                        if ("string" == typeof e && e.trim().length !== e.length) {
                            a = "extra whitespace";
                            break
                        }
                        if ("string" != typeof e && "number" != typeof e) break;
                        let n = Number(e);
                        if (Number.isNaN(n)) {
                            a = "not a number";
                            break
                        }
                        if (!Number.isFinite(n)) {
                            a = "too large or small";
                            break
                        }
                        return t == o.FLOAT && rA(n), n;
                    case o.INT32:
                    case o.FIXED32:
                    case o.SFIXED32:
                    case o.SINT32:
                    case o.UINT32:
                        let i;
                        if (null === e) return 0;
                        if ("number" == typeof e ? i = e : "" === e ? a = "empty string" : "string" == typeof e && (e.trim().length !== e.length ? a = "extra whitespace" : i = Number(e)), void 0 === i) break;
                        return t == o.UINT32 ? rO(i) : rR(i), i;
                    case o.INT64:
                    case o.SFIXED64:
                    case o.SINT64:
                        if (null === e) return rC(rB.ZERO, r);
                        if ("number" != typeof e && "string" != typeof e) break;
                        return rC(rB.from(e), r);
                    case o.FIXED64:
                    case o.UINT64:
                        if (null === e) return rC(rU.ZERO, r);
                        if ("number" != typeof e && "string" != typeof e) break;
                        return rC(rU.from(e), r);
                    case o.BOOL:
                        if (null === e) return !1;
                        if ("boolean" != typeof e) break;
                        return e;
                    case o.STRING:
                        if (null === e) return "";
                        if ("string" != typeof e) {
                            a = "extra whitespace";
                            break
                        }
                        try {
                            encodeURIComponent(e)
                        } catch (e) {
                            break
                        }
                        return e;
                    case o.BYTES:
                        if (null === e || "" === e) return new Uint8Array(0);
                        if ("string" != typeof e) break;
                        return function(e) {
                            let t = 3 * e.length / 4;
                            "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
                            let r = new Uint8Array(t),
                                n = 0,
                                a = 0,
                                i, s = 0;
                            for (let t = 0; t < e.length; t++) {
                                if (void 0 === (i = ry[e.charCodeAt(t)])) switch (e[t]) {
                                    case "=":
                                        a = 0;
                                    case "\n":
                                    case "\r":
                                    case "	":
                                    case " ":
                                        continue;
                                    default:
                                        throw Error("invalid base64 string.")
                                }
                                switch (a) {
                                    case 0:
                                        s = i, a = 1;
                                        break;
                                    case 1:
                                        r[n++] = s << 2 | (48 & i) >> 4, s = i, a = 2;
                                        break;
                                    case 2:
                                        r[n++] = (15 & s) << 4 | (60 & i) >> 2, s = i, a = 3;
                                        break;
                                    case 3:
                                        r[n++] = (3 & s) << 6 | i, a = 0
                                }
                            }
                            if (1 == a) throw Error("invalid base64 string.");
                            return r.subarray(0, n)
                        }(e)
                }
            } catch (e) {
                a = e.message
            }
            this.assert(!1, n + (a ? " - " + a : ""), e)
        }
    }
    class rD {
        constructor(e) {
            var t;
            this.fields = null !== (t = e.fields) && void 0 !== t ? t : []
        }
        write(e, t) {
            let r = {};
            for (let n of this.fields) {
                if (!n.oneof) {
                    let a = this.field(n, e[n.localName], t);
                    void 0 !== a && (r[t.useProtoFieldName ? n.name : n.jsonName] = a);
                    continue
                }
                let a = e[n.oneof];
                if (a.oneofKind !== n.localName) continue;
                let i = "scalar" == n.kind || "enum" == n.kind ? Object.assign(Object.assign({}, t), {
                        emitDefaultValues: !0
                    }) : t,
                    s = this.field(n, a[n.localName], i);
                rI(void 0 !== s), r[t.useProtoFieldName ? n.name : n.jsonName] = s
            }
            return r
        }
        field(e, t, r) {
            let n;
            if ("map" == e.kind) {
                rI("object" == typeof t && null !== t);
                let a = {};
                switch (e.V.kind) {
                    case "scalar":
                        for (let [r, n] of Object.entries(t)) {
                            let t = this.scalar(e.V.T, n, e.name, !1, !0);
                            rI(void 0 !== t), a[r.toString()] = t
                        }
                        break;
                    case "message":
                        let i = e.V.T();
                        for (let [n, s] of Object.entries(t)) {
                            let t = this.message(i, s, e.name, r);
                            rI(void 0 !== t), a[n.toString()] = t
                        }
                        break;
                    case "enum":
                        let s = e.V.T();
                        for (let [n, i] of Object.entries(t)) {
                            rI(void 0 === i || "number" == typeof i);
                            let t = this.enum(s, i, e.name, !1, !0, r.enumAsInteger);
                            rI(void 0 !== t), a[n.toString()] = t
                        }
                }(r.emitDefaultValues || Object.keys(a).length > 0) && (n = a)
            } else if (e.repeat) {
                rI(Array.isArray(t));
                let a = [];
                switch (e.kind) {
                    case "scalar":
                        for (let r = 0; r < t.length; r++) {
                            let n = this.scalar(e.T, t[r], e.name, e.opt, !0);
                            rI(void 0 !== n), a.push(n)
                        }
                        break;
                    case "enum":
                        let i = e.T();
                        for (let n = 0; n < t.length; n++) {
                            rI(void 0 === t[n] || "number" == typeof t[n]);
                            let s = this.enum(i, t[n], e.name, e.opt, !0, r.enumAsInteger);
                            rI(void 0 !== s), a.push(s)
                        }
                        break;
                    case "message":
                        let s = e.T();
                        for (let n = 0; n < t.length; n++) {
                            let i = this.message(s, t[n], e.name, r);
                            rI(void 0 !== i), a.push(i)
                        }
                }(r.emitDefaultValues || a.length > 0 || r.emitDefaultValues) && (n = a)
            } else switch (e.kind) {
                case "scalar":
                    n = this.scalar(e.T, t, e.name, e.opt, r.emitDefaultValues);
                    break;
                case "enum":
                    n = this.enum(e.T(), t, e.name, e.opt, r.emitDefaultValues, r.enumAsInteger);
                    break;
                case "message":
                    n = this.message(e.T(), t, e.name, r)
            }
            return n
        }
        enum(e, t, r, n, a, i) {
            if ("google.protobuf.NullValue" == e[0]) return a || n ? null : void 0;
            if (void 0 === t) {
                rI(n);
                return
            }
            if (0 !== t || a || n) return (rI("number" == typeof t), rI(Number.isInteger(t)), i || !e[1].hasOwnProperty(t)) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        }
        message(e, t, r, n) {
            return void 0 === t ? n.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, n)
        }
        scalar(e, t, r, n, a) {
            if (void 0 === t) {
                rI(n);
                return
            }
            let i = a || n;
            switch (e) {
                case o.INT32:
                case o.SFIXED32:
                case o.SINT32:
                    if (0 === t) return i ? 0 : void 0;
                    return rR(t), t;
                case o.FIXED32:
                case o.UINT32:
                    if (0 === t) return i ? 0 : void 0;
                    return rO(t), t;
                case o.FLOAT:
                    rA(t);
                case o.DOUBLE:
                    if (0 === t) return i ? 0 : void 0;
                    if (rI("number" == typeof t), Number.isNaN(t)) return "NaN";
                    if (t === Number.POSITIVE_INFINITY) return "Infinity";
                    if (t === Number.NEGATIVE_INFINITY) return "-Infinity";
                    return t;
                case o.STRING:
                    if ("" === t) return i ? "" : void 0;
                    return rI("string" == typeof t), t;
                case o.BOOL:
                    if (!1 === t) return !i && void 0;
                    return rI("boolean" == typeof t), t;
                case o.UINT64:
                case o.FIXED64:
                    rI("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                    let s = rU.from(t);
                    if (s.isZero() && !i) return;
                    return s.toString();
                case o.INT64:
                case o.SFIXED64:
                case o.SINT64:
                    rI("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                    let l = rB.from(t);
                    if (l.isZero() && !i) return;
                    return l.toString();
                case o.BYTES:
                    if (rI(t instanceof Uint8Array), !t.byteLength) return i ? "" : void 0;
                    return function(e) {
                        let t = "",
                            r = 0,
                            n, a = 0;
                        for (let i = 0; i < e.length; i++) switch (n = e[i], r) {
                            case 0:
                                t += rb[n >> 2], a = (3 & n) << 4, r = 1;
                                break;
                            case 1:
                                t += rb[a | n >> 4], a = (15 & n) << 2, r = 2;
                                break;
                            case 2:
                                t += rb[a | n >> 6], t += rb[63 & n], r = 0
                        }
                        return r && (t += rb[a], t += "=", 1 == r && (t += "=")), t
                    }(t)
            }
        }
    }! function(e) {
        e.symbol = Symbol.for("protobuf-ts/unknown"), e.onRead = (r, n, a, i, s) => {
            (t(n) ? n[e.symbol] : n[e.symbol] = []).push({
                no: a,
                wireType: i,
                data: s
            })
        }, e.onWrite = (t, r, n) => {
            for (let {
                    no: t,
                    wireType: a,
                    data: i
                }
                of e.list(r)) n.tag(t, a).raw(i)
        }, e.list = (r, n) => {
            if (t(r)) {
                let t = r[e.symbol];
                return n ? t.filter(e => e.no == n) : t
            }
            return []
        }, e.last = (t, r) => e.list(t, r).slice(-1)[0];
        let t = t => t && Array.isArray(t[e.symbol])
    }(u || (u = {}));
    
    function rF(e, t = l.STRING) {
        switch (e) {
            case o.BOOL:
                return !1;
            case o.UINT64:
            case o.FIXED64:
                return rC(rU.ZERO, t);
            case o.INT64:
            case o.SFIXED64:
            case o.SINT64:
                return rC(rB.ZERO, t);
            case o.DOUBLE:
            case o.FLOAT:
                return 0;
            case o.BYTES:
                return new Uint8Array(0);
            case o.STRING:
                return "";
            default:
                return 0
        }
    }! function(e) {
        e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32"
    }(d || (d = {}));
    class rP {
        constructor(e) {
            this.info = e
        }
        prepare() {
            var e;
            if (!this.fieldNoToField) {
                let t = null !== (e = this.info.fields) && void 0 !== e ? e : [];
                this.fieldNoToField = new Map(t.map(e => [e.no, e]))
            }
        }
        read(e, t, r, n) {
            this.prepare();
            let a = void 0 === n ? e.len : e.pos + n;
            for (; e.pos < a;) {
                let [n, a] = e.tag(), i = this.fieldNoToField.get(n);
                if (!i) {
                    let i = r.readUnknownField;
                    if ("throw" == i) throw Error(`Unknown field ${n} (wire type ${a}) for ${this.info.typeName}`);
                    let s = e.skip(a);
                    !1 !== i && (!0 === i ? u.onRead : i)(this.info.typeName, t, n, a, s);
                    continue
                }
                let s = t,
                    l = i.repeat,
                    c = i.localName;
                switch (i.oneof && (s = s[i.oneof]).oneofKind !== c && (s = t[i.oneof] = {
                        oneofKind: c
                    }), i.kind) {
                    case "scalar":
                    case "enum":
                        let h = "enum" == i.kind ? o.INT32 : i.T,
                            f = "scalar" == i.kind ? i.L : void 0;
                        if (l) {
                            let t = s[c];
                            if (a == d.LengthDelimited && h != o.STRING && h != o.BYTES) {
                                let r = e.uint32() + e.pos;
                                for (; e.pos < r;) t.push(this.scalar(e, h, f))
                            } else t.push(this.scalar(e, h, f))
                        } else s[c] = this.scalar(e, h, f);
                        break;
                    case "message":
                        if (l) {
                            let t = s[c],
                                n = i.T().internalBinaryRead(e, e.uint32(), r);
                            t.push(n)
                        } else s[c] = i.T().internalBinaryRead(e, e.uint32(), r, s[c]);
                        break;
                    case "map":
                        let [p, g] = this.mapEntry(i, e, r);
                        s[c][p] = g
                }
            }
        }
        mapEntry(e, t, r) {
            let n, a, i = t.uint32(),
                s = t.pos + i;
            for (; t.pos < s;) {
                let [i, s] = t.tag();
                switch (i) {
                    case 1:
                        n = e.K == o.BOOL ? t.bool().toString() : this.scalar(t, e.K, l.STRING);
                        break;
                    case 2:
                        switch (e.V.kind) {
                            case "scalar":
                                a = this.scalar(t, e.V.T, e.V.L);
                                break;
                            case "enum":
                                a = t.int32();
                                break;
                            case "message":
                                a = e.V.T().internalBinaryRead(t, t.uint32(), r)
                        }
                        break;
                    default:
                        throw Error(`Unknown field ${i} (wire type ${s}) in map entry for ${this.info.typeName}#${e.name}`)
                }
            }
            if (void 0 === n) {
                let t = rF(e.K);
                n = e.K == o.BOOL ? t.toString() : t
            }
            if (void 0 === a) switch (e.V.kind) {
                case "scalar":
                    a = rF(e.V.T, e.V.L);
                    break;
                case "enum":
                    a = 0;
                    break;
                case "message":
                    a = e.V.T().create()
            }
            return [n, a]
        }
        scalar(e, t, r) {
            switch (t) {
                case o.INT32:
                    return e.int32();
                case o.STRING:
                    return e.string();
                case o.BOOL:
                    return e.bool();
                case o.DOUBLE:
                    return e.double();
                case o.FLOAT:
                    return e.float();
                case o.INT64:
                    return rC(e.int64(), r);
                case o.UINT64:
                    return rC(e.uint64(), r);
                case o.FIXED64:
                    return rC(e.fixed64(), r);
                case o.FIXED32:
                    return e.fixed32();
                case o.BYTES:
                    return e.bytes();
                case o.UINT32:
                    return e.uint32();
                case o.SFIXED32:
                    return e.sfixed32();
                case o.SFIXED64:
                    return rC(e.sfixed64(), r);
                case o.SINT32:
                    return e.sint32();
                case o.SINT64:
                    return rC(e.sint64(), r)
            }
        }
    }
    class r$ {
        constructor(e) {
            this.info = e
        }
        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((e, t) => e.no - t.no)
            }
        }
        write(e, t, r) {
            for (let n of (this.prepare(), this.fields)) {
                let a, i, s = n.repeat,
                    l = n.localName;
                if (n.oneof) {
                    let t = e[n.oneof];
                    if (t.oneofKind !== l) continue;
                    a = t[l], i = !0
                } else a = e[l], i = !1;
                switch (n.kind) {
                    case "scalar":
                    case "enum":
                        let u = "enum" == n.kind ? o.INT32 : n.T;
                        if (s) {
                            if (rI(Array.isArray(a)), s == c.PACKED) this.packed(t, u, n.no, a);
                            else
                                for (let e of a) this.scalar(t, u, n.no, e, !0)
                        } else void 0 === a ? rI(n.opt) : this.scalar(t, u, n.no, a, i || n.opt);
                        break;
                    case "message":
                        if (s)
                            for (let e of (rI(Array.isArray(a)), a)) this.message(t, r, n.T(), n.no, e);
                        else this.message(t, r, n.T(), n.no, a);
                        break;
                    case "map":
                        for (let [e, i] of(rI("object" == typeof a && null !== a), Object.entries(a))) this.mapEntry(t, r, n, e, i)
                }
            }
            let n = r.writeUnknownFields;
            !1 !== n && (!0 === n ? u.onWrite : n)(this.info.typeName, e, t)
        }
        mapEntry(e, t, r, n, a) {
            e.tag(r.no, d.LengthDelimited), e.fork();
            let i = n;
            switch (r.K) {
                case o.INT32:
                case o.FIXED32:
                case o.UINT32:
                case o.SFIXED32:
                case o.SINT32:
                    i = Number.parseInt(n);
                    break;
                case o.BOOL:
                    rI("true" == n || "false" == n), i = "true" == n
            }
            switch (this.scalar(e, r.K, 1, i, !0), r.V.kind) {
                case "scalar":
                    this.scalar(e, r.V.T, 2, a, !0);
                    break;
                case "enum":
                    this.scalar(e, o.INT32, 2, a, !0);
                    break;
                case "message":
                    this.message(e, t, r.V.T(), 2, a)
            }
            e.join()
        }
        message(e, t, r, n, a) {
            void 0 !== a && (r.internalBinaryWrite(a, e.tag(n, d.LengthDelimited).fork(), t), e.join())
        }
        scalar(e, t, r, n, a) {
            let [i, s, o] = this.scalarInfo(t, n);
            (!o || a) && (e.tag(r, i), e[s](n))
        }
        packed(e, t, r, n) {
            if (!n.length) return;
            rI(t !== o.BYTES && t !== o.STRING), e.tag(r, d.LengthDelimited), e.fork();
            let [, a] = this.scalarInfo(t);
            for (let t = 0; t < n.length; t++) e[a](n[t]);
            e.join()
        }
        scalarInfo(e, t) {
            let r, n = d.Varint,
                a = void 0 === t,
                i = 0 === t;
            switch (e) {
                case o.INT32:
                    r = "int32";
                    break;
                case o.STRING:
                    i = a || !t.length, n = d.LengthDelimited, r = "string";
                    break;
                case o.BOOL:
                    i = !1 === t, r = "bool";
                    break;
                case o.UINT32:
                    r = "uint32";
                    break;
                case o.DOUBLE:
                    n = d.Bit64, r = "double";
                    break;
                case o.FLOAT:
                    n = d.Bit32, r = "float";
                    break;
                case o.INT64:
                    i = a || rB.from(t).isZero(), r = "int64";
                    break;
                case o.UINT64:
                    i = a || rU.from(t).isZero(), r = "uint64";
                    break;
                case o.FIXED64:
                    i = a || rU.from(t).isZero(), n = d.Bit64, r = "fixed64";
                    break;
                case o.BYTES:
                    i = a || !t.byteLength, n = d.LengthDelimited, r = "bytes";
                    break;
                case o.FIXED32:
                    n = d.Bit32, r = "fixed32";
                    break;
                case o.SFIXED32:
                    n = d.Bit32, r = "sfixed32";
                    break;
                case o.SFIXED64:
                    i = a || rB.from(t).isZero(), n = d.Bit64, r = "sfixed64";
                    break;
                case o.SINT32:
                    r = "sint32";
                    break;
                case o.SINT64:
                    i = a || rB.from(t).isZero(), r = "sint64"
            }
            return [n, r, a || i]
        }
    }
    
    function rz(e, t, r) {
        let n, a;
        for (let i of e.fields) {
            let e = i.localName;
            if (i.oneof) {
                let s = r[i.oneof];
                if ((null == s ? void 0 : s.oneofKind) == void 0) continue;
                if (n = s[e], (a = t[i.oneof]).oneofKind = s.oneofKind, void 0 == n) {
                    delete a[e];
                    continue
                }
            } else if (n = r[e], a = t, void 0 == n) continue;
            switch (i.repeat && (a[e].length = n.length), i.kind) {
                case "scalar":
                case "enum":
                    if (i.repeat)
                        for (let t = 0; t < n.length; t++) a[e][t] = n[t];
                    else a[e] = n;
                    break;
                case "message":
                    let s = i.T();
                    if (i.repeat)
                        for (let t = 0; t < n.length; t++) a[e][t] = s.create(n[t]);
                    else void 0 === a[e] ? a[e] = s.create(n) : s.mergePartial(a[e], n);
                    break;
                case "map":
                    switch (i.V.kind) {
                        case "scalar":
                        case "enum":
                            Object.assign(a[e], n);
                            break;
                        case "message":
                            let o = i.V.T();
                            for (let t of Object.keys(n)) a[e][t] = o.create(n[t])
                    }
            }
        }
    }
    let rq = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0
        },
        rW = {
            ignoreUnknownFields: !1
        };
    
    function rj(e) {
        return e ? Object.assign(Object.assign({}, rq), e) : rq
    }
    let rV = Object.values;
    
    function rM(e, t, r) {
        if (t === r) return !0;
        if (e !== o.BYTES) return !1;
        if (t.length !== r.length) return !1;
        for (let e = 0; e < t.length; e++)
            if (t[e] != r[e]) return !1;
        return !0
    }
    
    function rK(e, t, r) {
        if (t.length !== r.length) return !1;
        for (let n = 0; n < t.length; n++)
            if (!rM(e, t[n], r[n])) return !1;
        return !0
    }
    
    function rH(e, t, r) {
        if (t.length !== r.length) return !1;
        for (let n = 0; n < t.length; n++)
            if (!e.equals(t[n], r[n])) return !1;
        return !0
    }
    let rZ = {
        writeUnknownFields: !0,
        writerFactory: () => new rG
    };
    class rG {
        constructor(e) {
            this.stack = [], this.textEncoder = null != e ? e : new TextEncoder, this.chunks = [], this.buf = []
        }
        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
            let t = new Uint8Array(e),
                r = 0;
            for (let e = 0; e < this.chunks.length; e++) t.set(this.chunks[e], r), r += this.chunks[e].length;
            return this.chunks = [], t
        }
        fork() {
            return this.stack.push({
                chunks: this.chunks,
                buf: this.buf
            }), this.chunks = [], this.buf = [], this
        }
        join() {
            let e = this.finish(),
                t = this.stack.pop();
            if (!t) throw Error("invalid state, fork stack empty");
            return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
        }
        tag(e, t) {
            return this.uint32((e << 3 | t) >>> 0)
        }
        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
        }
        uint32(e) {
            for (rO(e); e > 127;) this.buf.push(127 & e | 128), e >>>= 7;
            return this.buf.push(e), this
        }
        int32(e) {
            return rR(e), rv(e, this.buf), this
        }
        bool(e) {
            return this.buf.push(e ? 1 : 0), this
        }
        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e)
        }
        string(e) {
            let t = this.textEncoder.encode(e);
            return this.uint32(t.byteLength), this.raw(t)
        }
        float(e) {
            rA(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
        }
        double(e) {
            let t = new Uint8Array(8);
            return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
        }
        fixed32(e) {
            rO(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
        }
        sfixed32(e) {
            rR(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
        }
        sint32(e) {
            return rR(e), rv(e = (e << 1 ^ e >> 31) >>> 0, this.buf), this
        }
        sfixed64(e) {
            let t = new Uint8Array(8),
                r = new DataView(t.buffer),
                n = rB.from(e);
            return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(t)
        }
        fixed64(e) {
            let t = new Uint8Array(8),
                r = new DataView(t.buffer),
                n = rU.from(e);
            return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(t)
        }
        int64(e) {
            let t = rB.from(e);
            return rk(t.lo, t.hi, this.buf), this
        }
        sint64(e) {
            let t = rB.from(e),
                r = t.hi >> 31;
            return rk(t.lo << 1 ^ r, (t.hi << 1 | t.lo >>> 31) ^ r, this.buf), this
        }
        uint64(e) {
            let t = rU.from(e);
            return rk(t.lo, t.hi, this.buf), this
        }
    }
    let rJ = {
        readUnknownField: !0,
        readerFactory: e => new rX(e)
    };
    class rX {
        constructor(e, t) {
            this.varint64 = rw, this.uint32 = rN, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != t ? t : new TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            })
        }
        tag() {
            let e = this.uint32(),
                t = e >>> 3,
                r = 7 & e;
            if (t <= 0 || r < 0 || r > 5) throw Error("illegal tag: field no " + t + " wire type " + r);
            return [t, r]
        }
        skip(e) {
            let t = this.pos;
            switch (e) {
                case d.Varint:
                    for (; 128 & this.buf[this.pos++];);
                    break;
                case d.Bit64:
                    this.pos += 4;
                case d.Bit32:
                    this.pos += 4;
                    break;
                case d.LengthDelimited:
                    let r = this.uint32();
                    this.pos += r;
                    break;
                case d.StartGroup:
                    let n;
                    for (;
                        (n = this.tag()[1]) !== d.EndGroup;) this.skip(n);
                    break;
                default:
                    throw Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos)
        }
        assertBounds() {
            if (this.pos > this.len) throw RangeError("premature EOF")
        }
        int32() {
            return 0 | this.uint32()
        }
        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(1 & e)
        }
        int64() {
            return new rB(...this.varint64())
        }
        uint64() {
            return new rU(...this.varint64())
        }
        sint64() {
            let [e, t] = this.varint64(), r = -(1 & e);
            return new rB(e = (e >>> 1 | (1 & t) << 31) ^ r, t = t >>> 1 ^ r)
        }
        bool() {
            let [e, t] = this.varint64();
            return 0 !== e || 0 !== t
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }
        fixed64() {
            return new rU(this.sfixed32(), this.sfixed32())
        }
        sfixed64() {
            return new rB(this.sfixed32(), this.sfixed32())
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }
        bytes() {
            let e = this.uint32(),
                t = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
        }
        string() {
            return this.textDecoder.decode(this.bytes())
        }
    }
    let rQ = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({}));
    class rY {
        constructor(e, t, r) {
            this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(rf), this.options = null != r ? r : {}, this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, rQ), {
                [rd]: {
                    value: this
                }
            })), this.refTypeCheck = new rp(this), this.refJsonReader = new rL(this), this.refJsonWriter = new rD(this), this.refBinReader = new rP(this), this.refBinWriter = new r$(this)
        }
        create(e) {
            let t = function(e) {
                let t = e.messagePrototype ? Object.create(e.messagePrototype) : Object.defineProperty({}, rd, {
                    value: e
                });
                for (let r of e.fields) {
                    let e = r.localName;
                    if (!r.opt) {
                        if (r.oneof) t[r.oneof] = {
                            oneofKind: void 0
                        };
                        else if (r.repeat) t[e] = [];
                        else switch (r.kind) {
                            case "scalar":
                                t[e] = rF(r.T, r.L);
                                break;
                            case "enum":
                                t[e] = 0;
                                break;
                            case "map":
                                t[e] = {}
                        }
                    }
                }
                return t
            }(this);
            return void 0 !== e && rz(this, t, e), t
        }
        clone(e) {
            let t = this.create();
            return rz(this, t, e), t
        }
        equals(e, t) {
            return function(e, t, r) {
                if (t === r) return !0;
                if (!t || !r) return !1;
                for (let n of e.fields) {
                    let e = n.localName,
                        a = n.oneof ? t[n.oneof][e] : t[e],
                        i = n.oneof ? r[n.oneof][e] : r[e];
                    switch (n.kind) {
                        case "enum":
                        case "scalar":
                            let s = "enum" == n.kind ? o.INT32 : n.T;
                            if (!(n.repeat ? rK(s, a, i) : rM(s, a, i))) return !1;
                            break;
                        case "map":
                            if (!("message" == n.V.kind ? rH(n.V.T(), rV(a), rV(i)) : rK("enum" == n.V.kind ? o.INT32 : n.V.T, rV(a), rV(i)))) return !1;
                            break;
                        case "message":
                            let l = n.T();
                            if (!(n.repeat ? rH(l, a, i) : l.equals(a, i))) return !1
                    }
                }
                return !0
            }(this, e, t)
        }
        is(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !1)
        }
        isAssignable(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !0)
        }
        mergePartial(e, t) {
            rz(this, e, t)
        }
        fromBinary(e, t) {
            var r;
            let n = (r = t) ? Object.assign(Object.assign({}, rJ), r) : rJ;
            return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
        }
        fromJson(e, t) {
            var r;
            return this.internalJsonRead(e, (r = t) ? Object.assign(Object.assign({}, rW), r) : rW)
        }
        fromJsonString(e, t) {
            let r = JSON.parse(e);
            return this.fromJson(r, t)
        }
        toJson(e, t) {
            return this.internalJsonWrite(e, rj(t))
        }
        toJsonString(e, t) {
            var r;
            return JSON.stringify(this.toJson(e, t), null, null !== (r = null == t ? void 0 : t.prettySpaces) && void 0 !== r ? r : 0)
        }
        toBinary(e, t) {
            var r;
            let n = (r = t) ? Object.assign(Object.assign({}, rZ), r) : rZ;
            return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
        }
        internalJsonRead(e, t, r) {
            if (null !== e && "object" == typeof e && !Array.isArray(e)) {
                let n = null != r ? r : this.create();
                return this.refJsonReader.read(e, n, t), n
            }
            throw Error(`Unable to parse message ${this.typeName} from JSON ${rg(e)}.`)
        }
        internalJsonWrite(e, t) {
            return this.refJsonWriter.write(e, t)
        }
        internalBinaryWrite(e, t, r) {
            return this.refBinWriter.write(e, t, r), t
        }
        internalBinaryRead(e, t, r, n) {
            let a = null != n ? n : this.create();
            return this.refBinReader.read(e, a, r, t), a
        }
    }
    let r0 = {
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
    };
    
    function r1(e, t) {
        T.log("☑️ modify PegasusQueryContext");
        let r = e.locale,
            [n, a] = r?.split("_") ?? [];
        switch (T.info(`Locale: ${r}`, `Language: ${n}`, `CountryCode: ${a}`), t.CountryCode) {
            case "OFF":
            case void 0:
                break;
            case "AUTO":
                e.CountryCode = a;
                break;
            default:
                e.countryCode = t.CountryCode
        }
        switch (t.Region) {
            case "OFF":
            case void 0:
                break;
            case "AUTO":
                e.region = a;
                break;
            default:
                e.region = t.Region
        }
        switch (t.SiriLocale) {
            case "OFF":
            case void 0:
                break;
            case "AUTO":
                e.siriLocale = `${n?.split("-")[0]}_${a}`;
                break;
            default:
                e.siriLocale = t.SiriLocale
        }
        switch (t.SiriResponseLanguageVariant) {
            case "OFF":
            case void 0:
                break;
            case "AUTO":
                e.siriResponseLanguageVariant = r;
                break;
            default:
                e.siriResponseLanguageVariant = t.SiriResponseLanguageVariant
        }
        return e?.skuRegion === "CH" && (e.skuRegion = "LL"), T.log("✅ modify PegasusQueryContext"), e
    }! function(e) {
        e[e.SiriEnvironment_UNKNOWN0 = 0] = "SiriEnvironment_UNKNOWN0", e[e.SiriEnvironment_UNKNOWN1 = 1] = "SiriEnvironment_UNKNOWN1", e[e.SiriEnvironment_UNKNOWN2 = 2] = "SiriEnvironment_UNKNOWN2", e[e.SiriEnvironment_UNKNOWN3 = 3] = "SiriEnvironment_UNKNOWN3", e[e.SiriEnvironment_UNKNOWN4 = 4] = "SiriEnvironment_UNKNOWN4", e[e.SiriEnvironment_UNKNOWN5 = 5] = "SiriEnvironment_UNKNOWN5", e[e.SiriEnvironment_UNKNOWN6 = 6] = "SiriEnvironment_UNKNOWN6", e[e.SiriEnvironment_UNKNOWN7 = 7] = "SiriEnvironment_UNKNOWN7"
    }(h || (h = {}));
    let r2 = new class e extends rY {
            constructor() {
                super("DeviceState", [{
                    no: 1,
                    name: "companionName",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "deviceName",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 3,
                    name: "inputOrigin",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 6,
                    name: "isAppleTv",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 7,
                    name: "isCarDnd",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 8,
                    name: "isCarPlay",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 9,
                    name: "isEyesFree",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 10,
                    name: "isHomePod",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 11,
                    name: "isLockedWithPasscode",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 12,
                    name: "isMac",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 13,
                    name: "isMultiUser",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 14,
                    name: "isPad",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 15,
                    name: "isPhone",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 16,
                    name: "isTextToSpeechEnabled",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 17,
                    name: "isVox",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 18,
                    name: "isVoiceGenderFemale",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 19,
                    name: "isVoiceGenderMale",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 20,
                    name: "isVoiceGenderUnknown",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 21,
                    name: "isVoiceTriggerEnabled",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 22,
                    name: "isWatch",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 23,
                    name: "siriLocale",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 24,
                    name: "userAssignedDeviceName",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }])
            }
        },
        r3 = new class e extends rY {
            constructor() {
                super("SiriPegasusContext", [{
                    no: 1,
                    name: "deviceState",
                    kind: "message",
                    T: () => r2
                }, {
                    no: 8,
                    name: "assistantID",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 9,
                    name: "person",
                    kind: "message",
                    T: () => r4
                }, {
                    no: 10,
                    name: "interactionID",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 14,
                    name: "contentRatingRestrictions",
                    kind: "message",
                    T: () => r6
                }])
            }
        },
        r4 = new class e extends rY {
            constructor() {
                super("Person", [{
                    no: 1,
                    name: "givenName",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "middleName",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 3,
                    name: "familyName",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 4,
                    name: "nickname",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 5,
                    name: "fullName",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 6,
                    name: "addresses",
                    kind: "message",
                    repeat: 1,
                    T: () => r5
                }, {
                    no: 7,
                    name: "contactIdentifier",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }])
            }
        },
        r5 = new class e extends rY {
            constructor() {
                super("Address", [{
                    no: 1,
                    name: "addressLabel",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "street",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 3,
                    name: "city",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 4,
                    name: "state",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 5,
                    name: "zipCode",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 6,
                    name: "countryCode",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }])
            }
        },
        r6 = new class e extends rY {
            constructor() {
                super("ContentRatingRestrictions", [{
                    no: 1,
                    name: "countryCode",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "movieRestriction",
                    kind: "scalar",
                    opt: !0,
                    T: 5
                }, {
                    no: 3,
                    name: "tvRestriction",
                    kind: "scalar",
                    opt: !0,
                    T: 5
                }])
            }
        };
    ! function(e) {
        e[e.TemperatureUnitUnknown = 0] = "TemperatureUnitUnknown", e[e.TemperatureUnitCelsius = 1] = "TemperatureUnitCelsius", e[e.TemperatureUnitFahrenheit = 2] = "TemperatureUnitFahrenheit"
    }(f || (f = {})), ! function(e) {
        e[e.MeasurementSystemUnknown = 0] = "MeasurementSystemUnknown", e[e.MeasurementSystemSI = 1] = "MeasurementSystemSI", e[e.MeasurementSystemUS = 2] = "MeasurementSystemUS", e[e.MeasurementSystemUK = 3] = "MeasurementSystemUK"
    }(p || (p = {})), ! function(e) {
        e[e.HourFormatUnknown = 0] = "HourFormatUnknown", e[e.HourFormatTwelve = 1] = "HourFormatTwelve", e[e.HourFormatTwentyFour = 2] = "HourFormatTwentyFour"
    }(g || (g = {})), ! function(e) {
        e[e.SourceUnknown = 0] = "SourceUnknown", e[e.SourceDisabledByUser = 1] = "SourceDisabledByUser", e[e.SourceDisabledByBag = 2] = "SourceDisabledByBag", e[e.SourceTooSlow = 3] = "SourceTooSlow", e[e.SourceError = 4] = "SourceError", e[e.SourceGPS = 5] = "SourceGPS", e[e.SourceCellular = 6] = "SourceCellular", e[e.SourceWiFi = 7] = "SourceWiFi"
    }(m || (m = {}));
    let r8 = new class e extends rY {
            constructor() {
                super("PegasusQueryContext", [{
                    no: 1,
                    name: "secretKey",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "countryCode",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "locale",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "effectiveSystemLanguage",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 5,
                    name: "preferredLanguages",
                    kind: "scalar",
                    repeat: 2,
                    T: 9
                }, {
                    no: 6,
                    name: "storeFront",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 7,
                    name: "userGuid",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 8,
                    name: "timeZone",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 9,
                    name: "skuRegion",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 10,
                    name: "calendar",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 11,
                    name: "temperatureUnit",
                    kind: "enum",
                    T: () => ["TemperatureUnit", f]
                }, {
                    no: 12,
                    name: "measurementSystem",
                    kind: "enum",
                    T: () => ["MeasurementSystem", p]
                }, {
                    no: 13,
                    name: "hourFormat",
                    kind: "enum",
                    T: () => ["HourFormat", g]
                }, {
                    no: 14,
                    name: "location",
                    kind: "message",
                    T: () => r9
                }, {
                    no: 16,
                    name: "subscriptions",
                    kind: "message",
                    repeat: 1,
                    T: () => r7
                }, {
                    no: 18,
                    name: "installedAppsSignature",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 19,
                    name: "uiScale",
                    kind: "scalar",
                    opt: !0,
                    T: 2
                }, {
                    no: 20,
                    name: "internalBuild",
                    kind: "scalar",
                    opt: !0,
                    T: 13
                }, {
                    no: 21,
                    name: "seedBuild",
                    kind: "scalar",
                    opt: !0,
                    T: 13
                }, {
                    no: 22,
                    name: "hsEnabled",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 26,
                    name: "siriLocale",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 27,
                    name: "region",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 28,
                    name: "sil",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 31,
                    name: "siriResponseLanguageVariant",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 32,
                    name: "marketplaceInfo",
                    kind: "message",
                    T: () => ne
                }, {
                    no: 33,
                    name: "deviceModel",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 34,
                    name: "isGenerativeModelDevice",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 38,
                    name: "longSecretKey",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 39,
                    name: "keyboardIme",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 41,
                    name: "EncryptedAuthToken",
                    kind: "scalar",
                    jsonName: "EncryptedAuthToken",
                    opt: !0,
                    T: 9
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.countryCode = "", t.locale = "", t.preferredLanguages = [], t.temperatureUnit = 0, t.measurementSystem = 0, t.hourFormat = 0, t.subscriptions = [], void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.secretKey = e.string();
                            break;
                        case 2:
                            a.countryCode = e.string();
                            break;
                        case 3:
                            a.locale = e.string();
                            break;
                        case 4:
                            a.effectiveSystemLanguage = e.string();
                            break;
                        case 5:
                            a.preferredLanguages.push(e.string());
                            break;
                        case 6:
                            a.storeFront = e.string();
                            break;
                        case 7:
                            a.userGuid = e.string();
                            break;
                        case 8:
                            a.timeZone = e.string();
                            break;
                        case 9:
                            a.skuRegion = e.string();
                            break;
                        case 10:
                            a.calendar = e.string();
                            break;
                        case 11:
                            a.temperatureUnit = e.int32();
                            break;
                        case 12:
                            a.measurementSystem = e.int32();
                            break;
                        case 13:
                            a.hourFormat = e.int32();
                            break;
                        case 14:
                            a.location = r9.internalBinaryRead(e, e.uint32(), r, a.location);
                            break;
                        case 16:
                            a.subscriptions.push(r7.internalBinaryRead(e, e.uint32(), r));
                            break;
                        case 18:
                            a.installedAppsSignature = e.string();
                            break;
                        case 19:
                            a.uiScale = e.float();
                            break;
                        case 20:
                            a.internalBuild = e.uint32();
                            break;
                        case 21:
                            a.seedBuild = e.uint32();
                            break;
                        case 22:
                            a.hsEnabled = e.bool();
                            break;
                        case 26:
                            a.siriLocale = e.string();
                            break;
                        case 27:
                            a.region = e.string();
                            break;
                        case 28:
                            a.sil = e.string();
                            break;
                        case 31:
                            a.siriResponseLanguageVariant = e.string();
                            break;
                        case 32:
                            a.marketplaceInfo = ne.internalBinaryRead(e, e.uint32(), r, a.marketplaceInfo);
                            break;
                        case 33:
                            a.deviceModel = e.string();
                            break;
                        case 34:
                            a.isGenerativeModelDevice = e.bool();
                            break;
                        case 38:
                            a.longSecretKey = e.string();
                            break;
                        case 39:
                            a.keyboardIme = e.string();
                            break;
                        case 41:
                            a.encryptedAuthToken = e.string();
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.secretKey && t.tag(1, d.LengthDelimited).string(e.secretKey), "" !== e.countryCode && t.tag(2, d.LengthDelimited).string(e.countryCode), "" !== e.locale && t.tag(3, d.LengthDelimited).string(e.locale), void 0 !== e.effectiveSystemLanguage && t.tag(4, d.LengthDelimited).string(e.effectiveSystemLanguage);
                for (let r = 0; r < e.preferredLanguages.length; r++) t.tag(5, d.LengthDelimited).string(e.preferredLanguages[r]);
                void 0 !== e.storeFront && t.tag(6, d.LengthDelimited).string(e.storeFront), void 0 !== e.userGuid && t.tag(7, d.LengthDelimited).string(e.userGuid), void 0 !== e.timeZone && t.tag(8, d.LengthDelimited).string(e.timeZone), void 0 !== e.skuRegion && t.tag(9, d.LengthDelimited).string(e.skuRegion), void 0 !== e.calendar && t.tag(10, d.LengthDelimited).string(e.calendar), 0 !== e.temperatureUnit && t.tag(11, d.Varint).int32(e.temperatureUnit), 0 !== e.measurementSystem && t.tag(12, d.Varint).int32(e.measurementSystem), 0 !== e.hourFormat && t.tag(13, d.Varint).int32(e.hourFormat), e.location && r9.internalBinaryWrite(e.location, t.tag(14, d.LengthDelimited).fork(), r).join();
                for (let n = 0; n < e.subscriptions.length; n++) r7.internalBinaryWrite(e.subscriptions[n], t.tag(16, d.LengthDelimited).fork(), r).join();
                void 0 !== e.installedAppsSignature && t.tag(18, d.LengthDelimited).string(e.installedAppsSignature), void 0 !== e.uiScale && t.tag(19, d.Bit32).float(e.uiScale), void 0 !== e.internalBuild && t.tag(20, d.Varint).uint32(e.internalBuild), void 0 !== e.seedBuild && t.tag(21, d.Varint).uint32(e.seedBuild), void 0 !== e.hsEnabled && t.tag(22, d.Varint).bool(e.hsEnabled), void 0 !== e.siriLocale && t.tag(26, d.LengthDelimited).string(e.siriLocale), void 0 !== e.region && t.tag(27, d.LengthDelimited).string(e.region), void 0 !== e.sil && t.tag(28, d.LengthDelimited).string(e.sil), void 0 !== e.siriResponseLanguageVariant && t.tag(31, d.LengthDelimited).string(e.siriResponseLanguageVariant), e.marketplaceInfo && ne.internalBinaryWrite(e.marketplaceInfo, t.tag(32, d.LengthDelimited).fork(), r).join(), void 0 !== e.deviceModel && t.tag(33, d.LengthDelimited).string(e.deviceModel), void 0 !== e.isGenerativeModelDevice && t.tag(34, d.Varint).bool(e.isGenerativeModelDevice), void 0 !== e.longSecretKey && t.tag(38, d.LengthDelimited).string(e.longSecretKey), void 0 !== e.keyboardIme && t.tag(39, d.LengthDelimited).string(e.keyboardIme), void 0 !== e.encryptedAuthToken && t.tag(41, d.LengthDelimited).string(e.encryptedAuthToken);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        r9 = new class e extends rY {
            constructor() {
                super("Location", [{
                    no: 1,
                    name: "latitude",
                    kind: "scalar",
                    opt: !0,
                    T: 2
                }, {
                    no: 2,
                    name: "longitude",
                    kind: "scalar",
                    opt: !0,
                    T: 2
                }, {
                    no: 3,
                    name: "source",
                    kind: "enum",
                    opt: !0,
                    T: () => ["Source", m]
                }, {
                    no: 4,
                    name: "horizontalAccuracy",
                    kind: "scalar",
                    opt: !0,
                    T: 2
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.latitude = e.float();
                            break;
                        case 2:
                            a.longitude = e.float();
                            break;
                        case 3:
                            a.source = e.int32();
                            break;
                        case 4:
                            a.horizontalAccuracy = e.float();
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.latitude && t.tag(1, d.Bit32).float(e.latitude), void 0 !== e.longitude && t.tag(2, d.Bit32).float(e.longitude), void 0 !== e.source && t.tag(3, d.Varint).int32(e.source), void 0 !== e.horizontalAccuracy && t.tag(4, d.Bit32).float(e.horizontalAccuracy);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        r7 = new class e extends rY {
            constructor() {
                super("Subscription", [{
                    no: 1,
                    name: "subscriptionJSON",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    if (1 === t) a.subscriptionJSON = e.string();
                    else {
                        let i = r.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                        let s = e.skip(n);
                        !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.subscriptionJSON && t.tag(1, d.LengthDelimited).string(e.subscriptionJSON);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        ne = new class e extends rY {
            constructor() {
                super("MarketplaceInfo", [{
                    no: 1,
                    name: "isMarketplaceEligible",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    if (1 === t) a.isMarketplaceEligible = e.bool();
                    else {
                        let i = r.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                        let s = e.skip(n);
                        !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.isMarketplaceEligible && t.tag(1, d.Varint).bool(e.isMarketplaceEligible);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        };
    new class e extends rY {
        constructor() {
            super("CompanionDevice", [])
        }
        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return void 0 !== e && rz(this, t, e), t
        }
        internalBinaryRead(e, t, r, n) {
            return n ?? this.create()
        }
        internalBinaryWrite(e, t, r) {
            let n = r.writeUnknownFields;
            return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
        }
    };
    let nt = new class e extends rY {
            constructor() {
                super("google.protobuf.Any", [{
                    no: 1,
                    name: "type_url",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "value",
                    kind: "scalar",
                    T: 12
                }])
            }
            pack(e, t) {
                return {
                    typeUrl: this.typeNameToUrl(t.typeName),
                    value: t.toBinary(e)
                }
            }
            unpack(e, t, r) {
                if (!this.contains(e, t)) throw Error("Cannot unpack google.protobuf.Any with typeUrl '" + e.typeUrl + "' as " + t.typeName + ".");
                return t.fromBinary(e.value, r)
            }
            contains(e, t) {
                return !!e.typeUrl.length && ("string" == typeof t ? t : t.typeName) === this.typeUrlToName(e.typeUrl)
            }
            internalJsonWrite(e, t) {
                if ("" === e.typeUrl) return {};
                let r = this.typeUrlToName(e.typeUrl),
                    n = rj(t),
                    a = n.typeRegistry?.find(e => e.typeName === r);
                if (!a) throw new globalThis.Error("Unable to convert google.protobuf.Any with typeUrl '" + e.typeUrl + "' to JSON. The specified type " + r + " is not available in the type registry.");
                let i = a.fromBinary(e.value, {
                        readUnknownField: !1
                    }),
                    s = a.internalJsonWrite(i, n);
                return (r.startsWith("google.protobuf.") || !rm(s)) && (s = {
                    value: s
                }), s["@type"] = e.typeUrl, s
            }
            internalJsonRead(e, t, r) {
                let n;
                if (!rm(e)) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON " + rg(e) + ".");
                if ("string" != typeof e["@type"] || "" == e["@type"]) return this.create();
                let a = this.typeUrlToName(e["@type"]),
                    i = t?.typeRegistry?.find(e => e.typeName == a);
                if (!i) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON. The specified type " + a + " is not available in the type registry.");
                if (a.startsWith("google.protobuf.") && e.hasOwnProperty("value")) n = i.fromJson(e.value, t);
                else {
                    let r = Object.assign({}, e);
                    delete r["@type"], n = i.fromJson(r, t)
                }
                return void 0 === r && (r = this.create()), r.typeUrl = e["@type"], r.value = i.toBinary(n), r
            }
            typeNameToUrl(e) {
                if (!e.length) throw Error("invalid type name: " + e);
                return "type.googleapis.com/" + e
            }
            typeUrlToName(e) {
                if (!e.length) throw Error("invalid type url: " + e);
                let t = e.lastIndexOf("/"),
                    r = t > 0 ? e.substring(t + 1) : e;
                if (!r.length) throw Error("invalid type url: " + e);
                return r
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.typeUrl = "", t.value = new Uint8Array(0), void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.typeUrl = e.string();
                            break;
                        case 2:
                            a.value = e.bytes();
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                "" !== e.typeUrl && t.tag(1, d.LengthDelimited).string(e.typeUrl), e.value.length && t.tag(2, d.LengthDelimited).bytes(e.value);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nr = new class e extends rY {
            constructor() {
                super("PegasusSearchQuery", [{
                    no: 1,
                    name: "utterance",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "queryID",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "asrRank",
                    kind: "scalar",
                    opt: !0,
                    T: 5
                }, {
                    no: 4,
                    name: "asrScore",
                    kind: "scalar",
                    opt: !0,
                    T: 1
                }, {
                    no: 5,
                    name: "asrInterpretation",
                    kind: "message",
                    T: () => nn
                }, {
                    no: 6,
                    name: "asrInterpretations",
                    kind: "message",
                    repeat: 1,
                    T: () => nn
                }, {
                    no: 7,
                    name: "falseTriggerMitigator",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 2001,
                    name: "personalSpans",
                    kind: "message",
                    repeat: 1,
                    T: () => ni
                }, {
                    no: 2002,
                    name: "profileSlices",
                    kind: "message",
                    repeat: 1,
                    T: () => ns
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.utterance = "", t.queryID = "", t.asrInterpretations = [], t.personalSpans = [], t.profileSlices = [], void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.utterance = e.string();
                            break;
                        case 2:
                            a.queryID = e.string();
                            break;
                        case 3:
                            a.asrRank = e.int32();
                            break;
                        case 4:
                            a.asrScore = e.double();
                            break;
                        case 5:
                            a.asrInterpretation = nn.internalBinaryRead(e, e.uint32(), r, a.asrInterpretation);
                            break;
                        case 6:
                            a.asrInterpretations.push(nn.internalBinaryRead(e, e.uint32(), r));
                            break;
                        case 7:
                            a.falseTriggerMitigator = e.bool();
                            break;
                        case 2001:
                            a.personalSpans.push(ni.internalBinaryRead(e, e.uint32(), r));
                            break;
                        case 2002:
                            a.profileSlices.push(ns.internalBinaryRead(e, e.uint32(), r));
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                "" !== e.utterance && t.tag(1, d.LengthDelimited).string(e.utterance), "" !== e.queryID && t.tag(2, d.LengthDelimited).string(e.queryID), void 0 !== e.asrRank && t.tag(3, d.Varint).int32(e.asrRank), void 0 !== e.asrScore && t.tag(4, d.Bit64).double(e.asrScore), e.asrInterpretation && nn.internalBinaryWrite(e.asrInterpretation, t.tag(5, d.LengthDelimited).fork(), r).join();
                for (let n = 0; n < e.asrInterpretations.length; n++) nn.internalBinaryWrite(e.asrInterpretations[n], t.tag(6, d.LengthDelimited).fork(), r).join();
                void 0 !== e.falseTriggerMitigator && t.tag(7, d.Varint).bool(e.falseTriggerMitigator);
                for (let n = 0; n < e.personalSpans.length; n++) ni.internalBinaryWrite(e.personalSpans[n], t.tag(2001, d.LengthDelimited).fork(), r).join();
                for (let n = 0; n < e.profileSlices.length; n++) ns.internalBinaryWrite(e.profileSlices[n], t.tag(2002, d.LengthDelimited).fork(), r).join();
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nn = new class e extends rY {
            constructor() {
                super("AsrInterpretation", [{
                    no: 1,
                    name: "preItnToken",
                    kind: "message",
                    repeat: 1,
                    T: () => na
                }, {
                    no: 2,
                    name: "postItnToken",
                    kind: "message",
                    repeat: 1,
                    T: () => na
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.preItnToken = [], t.postItnToken = [], void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.preItnToken.push(na.internalBinaryRead(e, e.uint32(), r));
                            break;
                        case 2:
                            a.postItnToken.push(na.internalBinaryRead(e, e.uint32(), r));
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                for (let n = 0; n < e.preItnToken.length; n++) na.internalBinaryWrite(e.preItnToken[n], t.tag(1, d.LengthDelimited).fork(), r).join();
                for (let n = 0; n < e.postItnToken.length; n++) na.internalBinaryWrite(e.postItnToken[n], t.tag(2, d.LengthDelimited).fork(), r).join();
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        na = new class e extends rY {
            constructor() {
                super("Token", [{
                    no: 1,
                    name: "text",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "originalText",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 3,
                    name: "phoneSequence",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 4,
                    name: "ipaPhoneSequence",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 7,
                    name: "isSpaceAddedAfter",
                    kind: "scalar",
                    opt: !0,
                    T: 8
                }, {
                    no: 8,
                    name: "startTime",
                    kind: "scalar",
                    opt: !0,
                    T: 13
                }, {
                    no: 9,
                    name: "endTime",
                    kind: "scalar",
                    opt: !0,
                    T: 13
                }, {
                    no: 10,
                    name: "silenceStartTime",
                    kind: "scalar",
                    opt: !0,
                    T: 13
                }, {
                    no: 11,
                    name: "recognitionStability",
                    kind: "scalar",
                    opt: !0,
                    T: 5
                }, {
                    no: 12,
                    name: "confidenceScore",
                    kind: "scalar",
                    opt: !0,
                    T: 1
                }, {
                    no: 13,
                    name: "acousticCost",
                    kind: "scalar",
                    opt: !0,
                    T: 1
                }, {
                    no: 14,
                    name: "graphCost",
                    kind: "scalar",
                    opt: !0,
                    T: 1
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.text = e.string();
                            break;
                        case 2:
                            a.originalText = e.string();
                            break;
                        case 3:
                            a.phoneSequence = e.string();
                            break;
                        case 4:
                            a.ipaPhoneSequence = e.string();
                            break;
                        case 7:
                            a.isSpaceAddedAfter = e.bool();
                            break;
                        case 8:
                            a.startTime = e.uint32();
                            break;
                        case 9:
                            a.endTime = e.uint32();
                            break;
                        case 10:
                            a.silenceStartTime = e.uint32();
                            break;
                        case 11:
                            a.recognitionStability = e.int32();
                            break;
                        case 12:
                            a.confidenceScore = e.double();
                            break;
                        case 13:
                            a.acousticCost = e.double();
                            break;
                        case 14:
                            a.graphCost = e.double();
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.text && t.tag(1, d.LengthDelimited).string(e.text), void 0 !== e.originalText && t.tag(2, d.LengthDelimited).string(e.originalText), void 0 !== e.phoneSequence && t.tag(3, d.LengthDelimited).string(e.phoneSequence), void 0 !== e.ipaPhoneSequence && t.tag(4, d.LengthDelimited).string(e.ipaPhoneSequence), void 0 !== e.isSpaceAddedAfter && t.tag(7, d.Varint).bool(e.isSpaceAddedAfter), void 0 !== e.startTime && t.tag(8, d.Varint).uint32(e.startTime), void 0 !== e.endTime && t.tag(9, d.Varint).uint32(e.endTime), void 0 !== e.silenceStartTime && t.tag(10, d.Varint).uint32(e.silenceStartTime), void 0 !== e.recognitionStability && t.tag(11, d.Varint).int32(e.recognitionStability), void 0 !== e.confidenceScore && t.tag(12, d.Bit64).double(e.confidenceScore), void 0 !== e.acousticCost && t.tag(13, d.Bit64).double(e.acousticCost), void 0 !== e.graphCost && t.tag(14, d.Bit64).double(e.graphCost);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        ni = new class e extends rY {
            constructor() {
                super("PersonalSpan", [{
                    no: 1,
                    name: "label",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "begin",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 3,
                    name: "end",
                    kind: "scalar",
                    T: 13
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.label = 0, t.begin = 0, t.end = 0, void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.label = e.uint32();
                            break;
                        case 2:
                            a.begin = e.uint32();
                            break;
                        case 3:
                            a.end = e.uint32();
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                0 !== e.label && t.tag(1, d.Varint).uint32(e.label), 0 !== e.begin && t.tag(2, d.Varint).uint32(e.begin), 0 !== e.end && t.tag(3, d.Varint).uint32(e.end);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        ns = new class e extends rY {
            constructor() {
                super("ProfileSlice", [{
                    no: 1,
                    name: "label",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "values",
                    kind: "message",
                    repeat: 1,
                    T: () => no
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.label = 0, t.values = [], void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.label = e.uint32();
                            break;
                        case 2:
                            a.values.push(no.internalBinaryRead(e, e.uint32(), r));
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                0 !== e.label && t.tag(1, d.Varint).uint32(e.label);
                for (let n = 0; n < e.values.length; n++) no.internalBinaryWrite(e.values[n], t.tag(2, d.LengthDelimited).fork(), r).join();
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        no = new class e extends rY {
            constructor() {
                super("Value", [{
                    no: 1,
                    name: "label",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "value",
                    kind: "message",
                    T: () => nt
                }, {
                    no: 3,
                    name: "state",
                    kind: "scalar",
                    T: 13
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.label = 0, t.state = 0, void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.label = e.uint32();
                            break;
                        case 2:
                            a.value = nt.internalBinaryRead(e, e.uint32(), r, a.value);
                            break;
                        case 3:
                            a.state = e.uint32();
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                0 !== e.label && t.tag(1, d.Varint).uint32(e.label), e.value && nt.internalBinaryWrite(e.value, t.tag(2, d.LengthDelimited).fork(), r).join(), 0 !== e.state && t.tag(3, d.Varint).uint32(e.state);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        };
    ! function(e) {
        e[e.RequestType_UNKNOWN0 = 0] = "RequestType_UNKNOWN0", e[e.RequestType_UNKNOWN1 = 1] = "RequestType_UNKNOWN1", e[e.RequestType_UNKNOWN2 = 2] = "RequestType_UNKNOWN2", e[e.RequestType_UNKNOWN3 = 3] = "RequestType_UNKNOWN3", e[e.RequestType_UNKNOWN4 = 4] = "RequestType_UNKNOWN4", e[e.RequestType_UNKNOWN5 = 5] = "RequestType_UNKNOWN5", e[e.RequestType_UNKNOWN6 = 6] = "RequestType_UNKNOWN6", e[e.RequestType_UNKNOWN7 = 7] = "RequestType_UNKNOWN7"
    }(b || (b = {}));
    let nl = new class e extends rY {
        constructor() {
            super("SiriPegasusRequest", [{
                no: 1,
                name: "queries",
                kind: "message",
                repeat: 1,
                T: () => nr
            }, {
                no: 2,
                name: "queryContext",
                kind: "message",
                T: () => r8
            }, {
                no: 3,
                name: "userDataShareOptIn",
                kind: "scalar",
                opt: !0,
                T: 8
            }, {
                no: 4,
                name: "featureFlag",
                kind: "scalar",
                opt: !0,
                T: 9
            }, {
                no: 5,
                name: "siriPegasusContext",
                kind: "message",
                T: () => r3
            }, {
                no: 6,
                name: "siriEnvironment",
                kind: "enum",
                T: () => ["SiriEnvironment", h]
            }, {
                no: 7,
                name: "isSiriInternalRequest",
                kind: "scalar",
                opt: !0,
                T: 8
            }, {
                no: 8,
                name: "isDataOnlyRequest",
                kind: "scalar",
                opt: !0,
                T: 8
            }, {
                no: 13,
                name: "requestType",
                kind: "enum",
                opt: !0,
                T: () => ["RequestType", b]
            }, {
                no: 15,
                name: "pommesRequestContext",
                kind: "message",
                T: () => nc
            }, {
                no: 16,
                name: "visualSearchContext",
                kind: "message",
                T: () => nu
            }, {
                no: 18,
                name: "searchConversationContext",
                kind: "message",
                T: () => nd
            }, {
                no: 19,
                name: "query",
                kind: "message",
                T: () => nr
            }])
        }
        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.queries = [], t.siriEnvironment = 0, void 0 !== e && rz(this, t, e), t
        }
        internalBinaryRead(e, t, r, n) {
            let a = n ?? this.create(),
                i = e.pos + t;
            for (; e.pos < i;) {
                let [t, n] = e.tag();
                switch (t) {
                    case 1:
                        a.queries.push(nr.internalBinaryRead(e, e.uint32(), r));
                        break;
                    case 2:
                        a.queryContext = r8.internalBinaryRead(e, e.uint32(), r, a.queryContext);
                        break;
                    case 3:
                        a.userDataShareOptIn = e.bool();
                        break;
                    case 4:
                        a.featureFlag = e.string();
                        break;
                    case 5:
                        a.siriPegasusContext = r3.internalBinaryRead(e, e.uint32(), r, a.siriPegasusContext);
                        break;
                    case 6:
                        a.siriEnvironment = e.int32();
                        break;
                    case 7:
                        a.isSiriInternalRequest = e.bool();
                        break;
                    case 8:
                        a.isDataOnlyRequest = e.bool();
                        break;
                    case 13:
                        a.requestType = e.int32();
                        break;
                    case 15:
                        a.pommesRequestContext = nc.internalBinaryRead(e, e.uint32(), r, a.pommesRequestContext);
                        break;
                    case 16:
                        a.visualSearchContext = nu.internalBinaryRead(e, e.uint32(), r, a.visualSearchContext);
                        break;
                    case 18:
                        a.searchConversationContext = nd.internalBinaryRead(e, e.uint32(), r, a.searchConversationContext);
                        break;
                    case 19:
                        a.query = nr.internalBinaryRead(e, e.uint32(), r, a.query);
                        break;
                    default:
                        let i = r.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                        let s = e.skip(n);
                        !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                }
            }
            return a
        }
        internalBinaryWrite(e, t, r) {
            for (let n = 0; n < e.queries.length; n++) nr.internalBinaryWrite(e.queries[n], t.tag(1, d.LengthDelimited).fork(), r).join();
            e.queryContext && r8.internalBinaryWrite(e.queryContext, t.tag(2, d.LengthDelimited).fork(), r).join(), void 0 !== e.userDataShareOptIn && t.tag(3, d.Varint).bool(e.userDataShareOptIn), void 0 !== e.featureFlag && t.tag(4, d.LengthDelimited).string(e.featureFlag), e.siriPegasusContext && r3.internalBinaryWrite(e.siriPegasusContext, t.tag(5, d.LengthDelimited).fork(), r).join(), 0 !== e.siriEnvironment && t.tag(6, d.Varint).int32(e.siriEnvironment), void 0 !== e.isSiriInternalRequest && t.tag(7, d.Varint).bool(e.isSiriInternalRequest), void 0 !== e.isDataOnlyRequest && t.tag(8, d.Varint).bool(e.isDataOnlyRequest), void 0 !== e.requestType && t.tag(13, d.Varint).int32(e.requestType), e.pommesRequestContext && nc.internalBinaryWrite(e.pommesRequestContext, t.tag(15, d.LengthDelimited).fork(), r).join(), e.visualSearchContext && nu.internalBinaryWrite(e.visualSearchContext, t.tag(16, d.LengthDelimited).fork(), r).join(), e.searchConversationContext && nd.internalBinaryWrite(e.searchConversationContext, t.tag(18, d.LengthDelimited).fork(), r).join(), e.query && nr.internalBinaryWrite(e.query, t.tag(19, d.LengthDelimited).fork(), r).join();
            let n = r.writeUnknownFields;
            return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
        }
    };
    new class e extends rY {
        constructor() {
            super("ConversationContextBytes", [])
        }
        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return void 0 !== e && rz(this, t, e), t
        }
        internalBinaryRead(e, t, r, n) {
            return n ?? this.create()
        }
        internalBinaryWrite(e, t, r) {
            let n = r.writeUnknownFields;
            return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
        }
    };
    new class e extends rY {
        constructor() {
            super("EngagementContext", [])
        }
        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return void 0 !== e && rz(this, t, e), t
        }
        internalBinaryRead(e, t, r, n) {
            return n ?? this.create()
        }
        internalBinaryWrite(e, t, r) {
            let n = r.writeUnknownFields;
            return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
        }
    };
    let nc = new class e extends rY {
            constructor() {
                super("PommesRequestContext", [{
                    no: 1,
                    name: "requestId",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    if (1 === t) a.requestId = e.string();
                    else {
                        let i = r.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                        let s = e.skip(n);
                        !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.requestId && t.tag(1, d.LengthDelimited).string(e.requestId);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nu = new class e extends rY {
            constructor() {
                super("VisualSearchContext", [])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                return n ?? this.create()
            }
            internalBinaryWrite(e, t, r) {
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        };
    new class e extends rY {
        constructor() {
            super("AsrContext", [{
                no: 1,
                name: "modelVersion",
                kind: "scalar",
                opt: !0,
                T: 9
            }, {
                no: 2,
                name: "acousticModelVersion",
                kind: "scalar",
                opt: !0,
                T: 9
            }])
        }
        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return void 0 !== e && rz(this, t, e), t
        }
        internalBinaryRead(e, t, r, n) {
            let a = n ?? this.create(),
                i = e.pos + t;
            for (; e.pos < i;) {
                let [t, n] = e.tag();
                switch (t) {
                    case 1:
                        a.modelVersion = e.string();
                        break;
                    case 2:
                        a.acousticModelVersion = e.string();
                        break;
                    default:
                        let i = r.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                        let s = e.skip(n);
                        !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                }
            }
            return a
        }
        internalBinaryWrite(e, t, r) {
            void 0 !== e.modelVersion && t.tag(1, d.LengthDelimited).string(e.modelVersion), void 0 !== e.acousticModelVersion && t.tag(2, d.LengthDelimited).string(e.acousticModelVersion);
            let n = r.writeUnknownFields;
            return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
        }
    };
    let nd = new class e extends rY {
            constructor() {
                super("SearchConversationContext", [])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                return n ?? this.create()
            }
            internalBinaryWrite(e, t, r) {
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nh = new class e extends rY {
            constructor() {
                super("SafariQueryContext", [{
                    no: 1,
                    name: "previousQuery",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "suggestQueryArg",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 3,
                    name: "localCompletionInfo",
                    kind: "message",
                    T: () => nf
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.previousQuery = e.string();
                            break;
                        case 2:
                            a.suggestQueryArg = e.string();
                            break;
                        case 3:
                            a.localCompletionInfo = nf.internalBinaryRead(e, e.uint32(), r, a.localCompletionInfo);
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.previousQuery && t.tag(1, d.LengthDelimited).string(e.previousQuery), void 0 !== e.suggestQueryArg && t.tag(2, d.LengthDelimited).string(e.suggestQueryArg), e.localCompletionInfo && nf.internalBinaryWrite(e.localCompletionInfo, t.tag(3, d.LengthDelimited).fork(), r).join();
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nf = new class e extends rY {
            constructor() {
                super("LocalCompletionInfo", [{
                    no: 1,
                    name: "completions",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 2,
                    name: "scores",
                    kind: "scalar",
                    opt: !0,
                    T: 9
                }, {
                    no: 3,
                    name: "origins",
                    kind: "scalar",
                    T: 9
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.origins = "", void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.completions = e.string();
                            break;
                        case 2:
                            a.scores = e.string();
                            break;
                        case 3:
                            a.origins = e.string();
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                void 0 !== e.completions && t.tag(1, d.LengthDelimited).string(e.completions), void 0 !== e.scores && t.tag(2, d.LengthDelimited).string(e.scores), "" !== e.origins && t.tag(3, d.LengthDelimited).string(e.origins);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        np = new class e extends rY {
            constructor() {
                super("SafariSearchRequest", [{
                    no: 1,
                    name: "searchQuery",
                    kind: "message",
                    T: () => ng
                }, {
                    no: 2,
                    name: "queryContext",
                    kind: "message",
                    T: () => r8
                }, {
                    no: 3,
                    name: "safariQueryContext",
                    kind: "message",
                    T: () => nh
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.searchQuery = ng.internalBinaryRead(e, e.uint32(), r, a.searchQuery);
                            break;
                        case 2:
                            a.queryContext = r8.internalBinaryRead(e, e.uint32(), r, a.queryContext);
                            break;
                        case 3:
                            a.safariQueryContext = nh.internalBinaryRead(e, e.uint32(), r, a.safariQueryContext);
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                e.searchQuery && ng.internalBinaryWrite(e.searchQuery, t.tag(1, d.LengthDelimited).fork(), r).join(), e.queryContext && r8.internalBinaryWrite(e.queryContext, t.tag(2, d.LengthDelimited).fork(), r).join(), e.safariQueryContext && nh.internalBinaryWrite(e.safariQueryContext, t.tag(3, d.LengthDelimited).fork(), r).join();
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        ng = new class e extends rY {
            constructor() {
                super("SearchQuery", [{
                    no: 1,
                    name: "query",
                    kind: "scalar",
                    T: 9
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.query = "", void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    if (1 === t) a.query = e.string();
                    else {
                        let i = r.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                        let s = e.skip(n);
                        !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                "" !== e.query && t.tag(1, d.LengthDelimited).string(e.query);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nm = new class e extends rY {
            constructor() {
                super("LookupSearchRequest", [{
                    no: 1,
                    name: "searchQuery",
                    kind: "message",
                    T: () => nb
                }, {
                    no: 2,
                    name: "queryContext",
                    kind: "message",
                    T: () => r8
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.searchQuery = nb.internalBinaryRead(e, e.uint32(), r, a.searchQuery);
                            break;
                        case 2:
                            a.queryContext = r8.internalBinaryRead(e, e.uint32(), r, a.queryContext);
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                e.searchQuery && nb.internalBinaryWrite(e.searchQuery, t.tag(1, d.LengthDelimited).fork(), r).join(), e.queryContext && r8.internalBinaryWrite(e.queryContext, t.tag(2, d.LengthDelimited).fork(), r).join();
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nb = new class e extends rY {
            constructor() {
                super("SearchQuery", [{
                    no: 1,
                    name: "query",
                    kind: "scalar",
                    T: 9
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return t.query = "", void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    if (1 === t) a.query = e.string();
                    else {
                        let i = r.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                        let s = e.skip(n);
                        !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                "" !== e.query && t.tag(1, d.LengthDelimited).string(e.query);
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        ny = new class e extends rY {
            constructor() {
                super("VisualQueryLite", [])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                return n ?? this.create()
            }
            internalBinaryWrite(e, t, r) {
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        },
        nw = new class e extends rY {
            constructor() {
                super("VisualSearchRequest", [{
                    no: 1,
                    name: "visualQueryLite",
                    kind: "message",
                    T: () => ny
                }, {
                    no: 3,
                    name: "queryContext",
                    kind: "message",
                    T: () => r8
                }])
            }
            create(e) {
                let t = globalThis.Object.create(this.messagePrototype);
                return void 0 !== e && rz(this, t, e), t
            }
            internalBinaryRead(e, t, r, n) {
                let a = n ?? this.create(),
                    i = e.pos + t;
                for (; e.pos < i;) {
                    let [t, n] = e.tag();
                    switch (t) {
                        case 1:
                            a.visualQueryLite = ny.internalBinaryRead(e, e.uint32(), r, a.visualQueryLite);
                            break;
                        case 3:
                            a.queryContext = r8.internalBinaryRead(e, e.uint32(), r, a.queryContext);
                            break;
                        default:
                            let i = r.readUnknownField;
                            if ("throw" === i) throw new globalThis.Error(`Unknown field ${t} (wire type ${n}) for ${this.typeName}`);
                            let s = e.skip(n);
                            !1 !== i && (!0 === i ? u.onRead : i)(this.typeName, a, t, n, s)
                    }
                }
                return a
            }
            internalBinaryWrite(e, t, r) {
                e.visualQueryLite && ny.internalBinaryWrite(e.visualQueryLite, t.tag(1, d.LengthDelimited).fork(), r).join(), e.queryContext && r8.internalBinaryWrite(e.queryContext, t.tag(3, d.LengthDelimited).fork(), r).join();
                let n = r.writeUnknownFields;
                return !1 !== n && (!0 == n ? u.onWrite : n)(this.typeName, e, t), t
            }
        };
    let nk = new URL($request.url);
    T.info(`url: ${nk.toJSON()}`);
    let n_ = nk.pathname.split("/").filter(Boolean);
    T.info(`PATHs: ${n_}`);
    let nT = ($request.headers?.["Content-Type"] ?? $request.headers?.["content-type"])?.split(";")?.[0];
    T.info(`FORMAT: ${nT}`);
    let nv = [];
    switch (nk.hostname) {
        case "api.smoot.apple.cn":
        case "api.smoot.apple.com":
        case "api2.smoot.apple.com":
        default:
            nv.push("Spotlight");
            break;
        case "guzzoni.smoot.apple.com":
        case "api-siri.smoot.apple.com":
            nv.push("Siri")
    }
    T.info(`PLATFORM: ${nv}`), (async () => {
        let e, t, r;
        let {
            Settings: n,
            Caches: a,
            Configs: i
        } = function(e, t, r) {
            T.log("☑️ Set Environment Variables");
            let {
                Settings: n,
                Caches: a,
                Configs: i
            } = function(e, t, r) {
                t = [t].flat(Number.POSITIVE_INFINITY);
                let n = {
                    Settings: r?.Default?.Settings || {},
                    Configs: r?.Default?.Configs || {},
                    Caches: {}
                };
                switch (t.forEach(e => {
                        n.Settings = {
                            ...n.Settings,
                            ...r?.[e]?.Settings
                        }, n.Configs = {
                            ...n.Configs,
                            ...r?.[e]?.Configs
                        }
                    }), typeof $argument) {
                    case "string":
                        $argument = Object.fromEntries($argument.split("&").map(e => e.split("=", 2).map(e => e.replace(/\"/g, ""))));
                    case "object": {
                        let e = {};
                        Object.keys($argument).forEach(t => v.set(e, t, $argument[t])), n.Settings = {
                            ...n.Settings,
                            ...e
                        }
                    }
                }
                let a = E.getItem(e);
                return a && t.forEach(e => {
                        switch (typeof a?.[e]?.Settings) {
                            case "string":
                                a[e].Settings = JSON.parse(a[e].Settings || "{}");
                            case "object":
                                n.Settings = {
                                    ...n.Settings,
                                    ...a[e].Settings
                                }
                        }
                        switch (typeof a?.[e]?.Caches) {
                            case "string":
                                a[e].Caches = JSON.parse(a[e].Caches || "{}");
                            case "object":
                                n.Caches = {
                                    ...n.Caches,
                                    ...a[e].Caches
                                }
                        }
                    }),
                    function e(t, r) {
                        for (let n in t) {
                            let a = t[n];
                            t[n] = "object" == typeof a && null !== a ? e(a, r) : r(n, a)
                        }
                        return t
                    }(n.Settings, (e, t) => ("true" === t || "false" === t ? t = JSON.parse(t) : "string" == typeof t && (t = t.includes(",") ? t.split(",").map(e => ru(e)) : ru(t)), t)), n
            }(e, t, r);
            switch (t.toString()) {
                case "Siri":
                    break;
                case "Spotlight":
                    !Array.isArray(n?.Domains) && v.set(n, "Domains", n?.Domains ? [n.Domains.toString()] : []), !Array.isArray(n?.Functions) && v.set(n, "Functions", n?.Functions ? [n.Functions.toString()] : [])
            }
            if (T.info(`typeof Settings: ${typeof n}`, `Settings: ${JSON.stringify(n,null,2)}`), i.Locale && (i.Locale = new Map(i.Locale)), i.i18n)
                for (let e in i.i18n) i.i18n[e] = new Map(i.i18n[e]);
            return T.log("✅ Set Environment Variables"), {
                Settings: n,
                Caches: a,
                Configs: i
            }
        }("iRingo", nv, r0);
        T.logLevel = n.LogLevel;
        let s = {};
        switch ($request.method) {
            case "POST":
            case "PUT":
            case "PATCH":
            case "DELETE":
                switch (nT) {
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
                    case "text/json":
                    case "application/json":
                        break;
                    case "application/protobuf":
                    case "application/x-protobuf":
                    case "application/vnd.google.protobuf":
                    case "application/grpc":
                    case "application/grpc+proto":
                    case "applecation/octet-stream": {
                        let e = "Quantumult X" === _ ? new Uint8Array($request.bodyBytes ?? []) : $request.body ?? new Uint8Array;
                        switch (nT) {
                            case "application/protobuf":
                            case "application/x-protobuf":
                            case "application/vnd.google.protobuf":
                                break;
                            case "application/grpc":
                            case "application/grpc+proto":
                                e = rc.decode(e);
                                nk.hostname;
                                switch (nk.pathname) {
                                    case "/apple.parsec.siri.v2alpha.SiriSearch/SiriSearch": {
                                        $request.headers["user-agent"]?.includes("grpc-node-js") && ($request.headers["user-agent"] = "PegasusKit/1 (Mac16,1; macOS 15.2 24C101) siri/1"), s = nl.fromBinary(e), T.debug(`body: ${JSON.stringify(s,null,2)}`), s.queryContext = r1(s.queryContext, n);
                                        let t = !0,
                                            r = (s?.queries?.[0]?.utterance ?? "").toLowerCase();
                                        switch (!0) {
                                            case r.includes("什么是") || r.includes("是什么") || r.includes("what's ") || r.includes("what is ") || r.includes("what does ") || r.includes("what do "):
                                            case r.includes("怎么样") || r.includes("怎样") || r.includes("如何") || r.includes("how's ") || r.includes("how is ") || r.includes("how does ") || r.includes("how do "):
                                            case r.includes("为什么") || r.includes("why ") || r.includes("why is ") || r.includes("why does "):
                                            case r.includes("搜索") || r.includes("search "):
                                            case r.includes(" mean") || r.includes("meaning") || r.includes("explain") || r.includes("look up ") || r.includes("translat") || r.includes(" in ") && !r.includes(" here") || r.includes("web") || r.includes(" internet") || r.includes("defin") || r.includes(" wikipedia") || r.includes("解释") || r.includes("翻译") || r.includes("怎么说") || r.includes("意思"):
                                                t = !0;
                                                break;
                                            case r.includes("天气") || r.includes("weather"):
                                            case r.includes("气压") || r.includes("air pressure") || r.includes("barometric pressure") || r.includes("atmospheric pressure") || r.includes("atmosphere pressure"):
                                            case r.includes("湿度") || r.includes("humidity"):
                                            case r.includes("温度") || r.includes("temperature"):
                                            case r.includes("风速") || r.includes("wind speed"):
                                            case r.includes("风向") || r.includes("wind direction"):
                                            case r.includes("空气质量") || r.includes("air quality"):
                                            case r.includes("月相") || r.includes("moon") && r.includes("phase"):
                                            case r.includes("紫外线") || r.includes("uv index") || r.includes("ultraviolet index outside"):
                                            case r.includes("能见度") || r.includes("visibility"):
                                            case r.includes("日出") || r.includes("sunrise"):
                                            case r.includes("日落") || r.includes("sunset"):
                                            case r.includes("sun ") && (r.includes("rise") || r.includes("set") || r.includes("fall")) || r.includes("sunrise") || r.includes("sunset"):
                                            case r.includes("太阳") && (r.includes("升") || r.includes("落") || r.includes("下山")) || r.includes("日出") || r.includes("日落"):
                                            case (r.includes("is it") || r.includes("it is") || r.includes("it's")) && (r.includes("humid") || r.includes("rain") || r.includes("shin") || r.includes("sunny") || r.includes("hot") || r.includes("cold") || r.includes("freez") || r.includes("warm") || r.includes("wind") || r.includes("fog") || r.includes("haz") || r.includes("thunder") || r.includes("storm") || r.includes("lightn") || r.includes("snow") || r.includes("hail") || r.includes("clear") || r.includes("tornado") || r.includes("hurricane")):
                                            case (r.includes("有") || r.includes("会") || r.includes("吗")) && (r.includes("下雨") || r.includes("晒") || r.includes("晴") || r.includes("热") || r.includes("冷") || r.includes("暖") || r.includes("风") || r.includes("雾") || r.includes("霾") || r.includes("雷") || r.includes("风暴") || r.includes("电") || r.includes("雪") || r.includes("雹")):
                                            case r.includes("precipitation") || r.includes("forecast") || (r.includes("chance") || r.includes("possibilit")) && (r.includes(" rain") || r.includes(" snow")):
                                            case r.includes("降雪") || r.includes("降水") || r.includes("预报") || (r.includes("概率") || r.includes("几率")) && (r.includes("降水") || r.includes("降雪")):
                                                t = !1;
                                                break;
                                            case r.includes("附近") || r.includes(" nearby"):
                                            case r.includes("周围") || r.includes(" around me") || r.includes(" around here"):
                                            case r.includes("导航") || r.includes("navigat"):
                                            case r.includes("方向") || r.includes(" direction"):
                                            case r.includes("指引") || r.includes("direct ") && r.includes(" to "):
                                            case r.includes("指引") || r.includes("guide ") && r.includes(" to "):
                                            case r.includes("带我去") || r.includes("take me to "):
                                            case r.includes("路线") || r.includes("route "):
                                            case r.includes("路径") || r.includes("path to "):
                                            case (r.includes("怎样") || r.includes("如何") || r.includes("怎么")) && (r.includes("到") || r.includes("去") || r.includes("抵达") || r.includes("走")):
                                            case r.includes("how ") && (r.includes(" get ") || r.includes(" go ") || r.includes(" arrive ") || r.includes(" reach ")):
                                                t = !1
                                        }
                                        s?.queries?.[0]?.profileSlices.forEach(e => {
                                            if (e?.values?.[0]?.value?.typeUrl === "type.googleapis.com/apple.parsec.siri.v2alpha.AppInfo") {
                                                let r = new class e extends rY {
                                                    constructor() {
                                                        super("ApplicationInfomationRequest", [{
                                                            no: 2,
                                                            name: "bundleID",
                                                            kind: "scalar",
                                                            T: 9
                                                        }, {
                                                            no: 4,
                                                            name: "launchIntent",
                                                            kind: "scalar",
                                                            T: 9
                                                        }])
                                                    }
                                                }().fromBinary(e?.values?.[0]?.value?.value);
                                                switch (T.debug(`AppInfo: ${JSON.stringify(r)}`), r?.bundleID) {
                                                    case "com.apple.weather":
                                                    case "com.heweather.weatherapp":
                                                    case "com.apple.store.Jolly":
                                                    case "com.apple.Music":
                                                    case "com.apple.AppStore":
                                                        t = !1
                                                }
                                            }
                                        }), T.debug(`fixLocation: ${t}`), t && delete s?.queryContext?.location, T.debug(`body: ${JSON.stringify(s,null,2)}`), e = nl.toBinary(s);
                                        break
                                    }
                                    case "/apple.parsec.safari.v1alpha.SafariSearch/SafariSearch":
                                        $request.headers["user-agent"]?.includes("grpc-node-js") && ($request.headers["user-agent"] = "PegasusKit/1 (Mac16,1; macOS 15.2 24C101) safari/1"), s = np.fromBinary(e), T.debug(`body: ${JSON.stringify(s,null,2)}`), s.queryContext = r1(s.queryContext, n), T.debug(`body: ${JSON.stringify(s,null,2)}`), e = np.toBinary(s);
                                        break;
                                    case "/apple.parsec.lookup.v1alpha.LookupSearch/LookupSearch":
                                        $request.headers["user-agent"]?.includes("grpc-node-js") && ($request.headers["user-agent"] = "PegasusKit/1 (Mac16,1; macOS 15.2 24C101) lookup/1"), s = nm.fromBinary(e), T.debug(`body: ${JSON.stringify(s,null,2)}`), s.queryContext = r1(s.queryContext, n), T.debug(`body: ${JSON.stringify(s,null,2)}`), e = nm.toBinary(s);
                                        break;
                                    case "/apple.parsec.visualsearch.v2.VisualSearch/VisualSearch":
                                        $request.headers["user-agent"]?.includes("grpc-node-js") && ($request.headers["user-agent"] = "PegasusKit/1 (Mac16,1; macOS 15.2 24C101) visualintelligence/1"), s = nw.fromBinary(e), T.debug(`body: ${JSON.stringify(s,null,2)}`), s.queryContext = r1(s.queryContext, n), T.debug(`body: ${JSON.stringify(s,null,2)}`), e = nw.toBinary(s);
                                        break;
                                    case "/apple.parsec.responseframework.engagement.v1alpha.EngagementSearch/EngagementSearch": {
                                        let t = new class e extends rY {
                                            constructor() {
                                                super("EngagementRequest", [{
                                                    no: 1,
                                                    name: "queryContext",
                                                    kind: "message",
                                                    T: () => r8
                                                }])
                                            }
                                        };
                                        s = t.fromBinary(e), T.debug(`body: ${JSON.stringify(s,null,2)}`), s.queryContext = r1(s.queryContext, n), T.debug(`body: ${JSON.stringify(s,null,2)}`), e = t.toBinary(s);
                                        break
                                    }
                                    case "/apple.parsec.spotlight.v1alpha.ZkwSuggestService/Suggest": {
                                        let t = new class e extends rY {
                                            constructor() {
                                                super("ZkwSuggestRequest", [{
                                                    no: 2,
                                                    name: "queryContext",
                                                    kind: "message",
                                                    T: () => r8
                                                }])
                                            }
                                        };
                                        s = t.fromBinary(e), T.debug(`body: ${JSON.stringify(s,null,2)}`), s.queryContext = r1(s.queryContext, n), T.debug(`body: ${JSON.stringify(s,null,2)}`), e = t.toBinary(s)
                                    }
                                }
                                e = rc.encode(e)
                        }
                        $request.body = e
                    }
                }
            case "GET":
            case "HEAD":
            case "OPTIONS":
            default:
                if (e = e ?? nk.searchParams.get("locale"), [t, r] = e?.split("_") ?? [], T.info(`Locale: ${e}`, `Language: ${t}`, `CountryCode: ${r}`), "AUTO" === n.CountryCode) n.CountryCode = r;
                else nk.searchParams.has("cc") && nk.searchParams.set("cc", n.CountryCode);
                switch (nk.hostname) {
                    case "api.smoot.apple.cn":
                    case "api.smoot.apple.com":
                    case "api2.smoot.apple.com":
                    case "api-siri.smoot.apple.com":
                    default: {
                        let e = nk.searchParams.get("q");
                        switch (nk.pathname) {
                            case "/bag":
                            case "/warm":
                            case "/render":
                                break;
                            case "/search":
                                switch (nk.searchParams.get("qtype")) {
                                    case "card":
                                        nk.searchParams.set("card_locale", `${t}_${n.CountryCode}`);
                                        break;
                                    case "zkw":
                                        switch (n.CountryCode) {
                                            case "CN":
                                            case "HK":
                                            case "MO":
                                            case "TW":
                                            case "SG":
                                                nk.searchParams.set("locale", `${t}_TW`);
                                                break;
                                            case "US":
                                            case "CA":
                                            case "UK":
                                            case "AU":
                                                break;
                                            default:
                                                nk.searchParams.set("locale", `${t}_US`)
                                        }
                                        break;
                                    default:
                                        e?.startsWith?.("%E5%A4%A9%E6%B0%94%20") ? (T.debug("'天气 '开头"), nk.searchParams.set("q", e.replace(/%E5%A4%A9%E6%B0%94/, "weather")), /^weather%20.*%E5%B8%82$/.test(e) && nk.searchParams.set("q", e.replace(/$/, "%E5%B8%82"))) : e?.endsWith?.("%20%E5%A4%A9%E6%B0%94") && (T.debug("' 天气'结尾"), nk.searchParams.set("q", e.replace(/%E5%A4%A9%E6%B0%94/, "weather")), /.*%E5%B8%82%20weather$/.test(e) && nk.searchParams.set("q", e.replace(/%20weather$/, "%E5%B8%82%20weather")))
                                }
                                if ("4" === nk.searchParams.get("siri_env")) nk.searchParams.set("siri_locale", `${t}_${n.CountryCode}`);
                                break;
                            case "/card":
                                switch (nk.searchParams.get("include")) {
                                    case "tv":
                                    case "movies":
                                        switch (nk.searchParams.set("card_locale", `${t}_${n.CountryCode}`), nk.searchParams.get("storefront")?.match(/[\d]{6}/g)) {
                                            case "143463":
                                            case "143465":
                                                nk.searchParams.set("q", e.replace(/%2F[a-z]{2}-[A-Z]{2}/, "%2Fzh-HK"));
                                                break;
                                            case "143515":
                                                nk.searchParams.set("q", e.replace(/%2F[a-z]{2}-[A-Z]{2}/, "%2Fzh-MO"));
                                            case "143470":
                                                nk.searchParams.set("q", e.replace(/%2F[a-z]{2}-[A-Z]{2}/, "%2Fzh-TW"))
                                        }
                                        break;
                                    case "apps":
                                    case "music":
                                        nk.searchParams.set("card_locale", `${t}_${n.CountryCode}`);
                                        break;
                                    case "dictionary":
                                        switch (t) {
                                            case "zh-Hans":
                                            case "zh-Hant":
                                                nk.searchParams.set("card_locale", `en_${n.CountryCode}`)
                                        }
                                        break;
                                    default:
                                        nk.searchParams.set("card_locale", `${t}_${n.CountryCode}`)
                                }
                        }
                    }
                    case "guzzoni.smoot.apple.com":
                    case "fbs.smoot.apple.com":
                    case "cdn.smoot.apple.com":
                }
            case "CONNECT":
            case "TRACE":
        }
        $request.url = nk.toString(), T.debug(`$request.url: ${$request.url}`)
    })().catch(e => T.error(e)).finally(() => {
        switch (typeof s) {
            case "object":
                if (s.headers?.["Content-Encoding"] && (s.headers["Content-Encoding"] = "identity"), s.headers?.["content-encoding"] && (s.headers["content-encoding"] = "identity"), "Quantumult X" === _) !s.status && (s.status = "HTTP/1.1 200 OK"), delete s.headers?.["Content-Length"], delete s.headers?.["content-length"], delete s.headers?.["Transfer-Encoding"], S(s);
                else S({
                    response: s
                });
                break;
            case "undefined":
                S($request);
                break;
            default:
                T.error(`不合法的 $response 类型: ${typeof s}`)
        }
    })
})();
