/*! For license information please see maine77b85bfc9f2565f78b9.js.LICENSE.txt */
(() => {
    var t = {
        896: () => {
          var t = document.querySelector(".header__dark-mode"),
            e = document.querySelector("body"),
            r = localStorage.getItem("mode")
              ? localStorage.getItem("mode")
              : null;
          r && e.classList.add("dark-mode"),
            t.addEventListener("click", function () {
              e.classList.toggle("dark-mode"),
                r
                  ? localStorage.setItem("mode", "")
                  : localStorage.setItem("mode", "dark");
            });
        },
      },
      e = {};
    function r(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var i = (e[n] = { exports: {} });
      return t[n](i, i.exports, r), i.exports;
    }
    (() => {
      "use strict";
      var t = document.querySelector(".loader");
      const e = function (e) {
        e ? t.classList.remove("hidden") : t.classList.add("hidden");
      };
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          n(t)
        );
      }
      function o() {
        o = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          c = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function f(t, e, r, n) {
          var o = e && e.prototype instanceof d ? e : d,
            a = Object.create(o.prototype),
            c = new j(n || []);
          return i(a, "_invoke", { value: _(t, r, c) }), a;
        }
        function h(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function d() {}
        function v() {}
        function y() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          w = g && g(g(O([])));
        w && w !== e && r.call(w, c) && (m = w);
        var x = (y.prototype = d.prototype = Object.create(m));
        function L(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          function o(i, a, c, u) {
            var s = h(t[i], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == n(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, u);
                    },
                    function (t) {
                      o("throw", t, c, u);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return o("throw", t, c, u);
                    },
                  );
            }
            u(s.arg);
          }
          var a;
          i(this, "_invoke", {
            value: function (t, r) {
              function n() {
                return new e(function (e, n) {
                  o(t, r, e, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            },
          });
        }
        function _(t, e, r) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return { value: void 0, done: !0 };
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate;
              if (a) {
                var c = E(a, r);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = h(t, e, r);
              if ("normal" === u.type) {
                if (((n = r.done ? "completed" : "suspendedYield"), u.arg === p))
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function E(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              p
            );
          var o = h(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              p);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function j(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(S, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[c];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: q };
        }
        function q() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = y),
          i(x, "constructor", { value: y, configurable: !0 }),
          i(y, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(y, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === v || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          L(b.prototype),
          l(b.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(f(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          L(x),
          l(x, s, "Generator"),
          l(x, c, function () {
            return this;
          }),
          l(x, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = O),
          (j.prototype = {
            constructor: j,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, "catchLoc"),
                    u = r.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), k(r), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    k(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function i(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      const a = (function () {
        var t,
          r =
            ((t = o().mark(function t(r) {
              var n, i;
              return o().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return e(!0), (t.next = 3), fetch(r);
                    case 3:
                      if ((n = t.sent).ok) {
                        t.next = 7;
                        break;
                      }
                      throw (e(!1), new Error("Something went wrong :("));
                    case 7:
                      return (t.next = 9), n.json();
                    case 9:
                      return (i = t.sent), e(!1), t.abrupt("return", i);
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, o) {
                var a = t.apply(e, r);
                function c(t) {
                  i(a, n, o, c, u, "next", t);
                }
                function u(t) {
                  i(a, n, o, c, u, "throw", t);
                }
                c(void 0);
              });
            });
        return function (t) {
          return r.apply(this, arguments);
        };
      })();
      var c = document.querySelector(".cards"),
        u = function (t) {
          (c.innerHTML = ""),
            t.forEach(function (t) {
              var e = t.name.common,
                r = t.population,
                n = t.region,
                o = t.capital ? t.capital[0] : "No Capital",
                i = t.flags.svg,
                a = document.createElement("li");
              a.classList.add("cards__item"),
                (a.innerHTML =
                  '\n            <a href="./about.html?country=/name/'
                    .concat(e, '">\n                <img src=')
                    .concat(
                      i,
                      ' alt="germany-flag" width="267" height="160">\n                <div class="cards__item-inner">\n                    <h3 class="cards__title">',
                    )
                    .concat(
                      e,
                      '</h3>\n                    <p class="population">Population: <span>',
                    )
                    .concat(
                      r,
                      '</span></p>\n                    <p class="region">Region: <span>',
                    )
                    .concat(
                      n,
                      '</span></p>\n                    <p class="capital">Capital: <span>',
                    )
                    .concat(
                      o,
                      "</span></p>\n                </div>\n            </a>\n        ",
                    )),
                c.appendChild(a);
            });
        },
        s =
          (document.querySelector(".country-info"),
          document.querySelector(".search"));
      s.search.addEventListener("input", function () {
        var t = s.search.value.toLowerCase(),
          e = document.querySelectorAll(".cards__item");
        document.querySelectorAll(".cards__title").forEach(function (r, n) {
          r.textContent.toLowerCase().includes(t)
            ? (e[n].style.display = "block")
            : (e[n].style.display = "none");
        });
      });
      var l = document.querySelectorAll(".search__select-list li"),
        f = document.querySelector(".search__select span");
      l.forEach(function (t) {
        t.addEventListener("click", function () {
          var e;
          (f.textContent = t.textContent),
            (e =
              "All" == t.textContent
                ? "https://restcountries.com/v3.1/all"
                : "https://restcountries.com/v3.1/region/".concat(t.textContent)),
            a(e)
              .then(function (t) {
                u(t);
              })
              .catch(function (t) {
                alert(t.message);
              });
        });
      }),
        r(896),
        a("https://restcountries.com/v3.1/all")
          .then(function (t) {
            u(t);
          })
          .catch(function (t) {
            alert(t.message);
          });
    })();
  })();
  