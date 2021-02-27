npm((window["webpackJsonp"] = window["webpackJsonp"] || [])).push([
  ["Pictures"],
  {
    "026f": function(t, e, i) {
      t.exports = i.p + "img/archery13.6a2509cf.jpg";
    },
    "0595": function(t, e, i) {
      t.exports = i.p + "img/archery5.ebdb5a17.jpeg";
    },
    "067c": function(t, e, i) {
      (function(e, s) {
        t.exports = s(i("a4b2"), i("8680"), i("ef31"), i("bc44"), i("33d5"));
      })(0, function(t, e, i, s, n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n;
        var o = {
          props: {
            images: {
              type: Array,
              default: function() {
                return [];
              },
            },
            options: {
              type: Object,
              default: function() {
                return {};
              },
            },
            carousel: { type: Boolean, default: !1 },
            index: { type: Number },
            id: { type: String, default: "blueimp-gallery" },
          },
          data: function() {
            return { instance: null };
          },
          watch: {
            index: function(t) {
              this.carousel ||
                (null !== t
                  ? this.open(t)
                  : (this.instance && this.instance.close(),
                    this.$emit("close")));
            },
          },
          mounted: function() {
            this.carousel && this.open();
          },
          destroyed: function() {
            null !== this.instance &&
              (this.instance.destroyEventListeners(),
              this.instance.close(),
              (this.instance = null));
          },
          methods: {
            open: function() {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                i = "undefined" !== typeof n.Gallery ? n.Gallery : n,
                s = Object.assign(
                  {
                    toggleControlsOnReturn: !1,
                    toggleControlsOnSlideClick: !1,
                    closeOnSlideClick: !1,
                    carousel: this.carousel,
                    container: "#".concat(this.id),
                    index: e,
                    onopen: function() {
                      return t.$emit("onopen");
                    },
                    onopened: function() {
                      return t.$emit("onopened");
                    },
                    onslide: this.onSlideCustom,
                    onslideend: function(e, i) {
                      return t.$emit("onslideend", { index: e, slide: i });
                    },
                    onslidecomplete: function(e, i) {
                      return t.$emit("onslidecomplete", { index: e, slide: i });
                    },
                    onclose: function() {
                      return t.$emit("close");
                    },
                    onclosed: function() {
                      return t.$emit("onclosed");
                    },
                  },
                  this.options
                );
              this.carousel && (s.container = this.$el),
                (this.instance = i(this.images, s));
            },
            onSlideCustom: function(t, e) {
              this.$emit("onslide", { index: t, slide: e });
              var i = this.images[t];
              if (void 0 !== i) {
                var s = i.description,
                  n = this.instance.container.find(".description");
                s && (n.empty(), n[0].appendChild(document.createTextNode(s)));
              }
            },
          },
        };
        function a(t, e, i, s, n, o, a, l, r, h) {
          "boolean" !== typeof a && ((r = l), (l = a), (a = !1));
          var c,
            d = "function" === typeof i ? i.options : i;
          if (
            (t &&
              t.render &&
              ((d.render = t.render),
              (d.staticRenderFns = t.staticRenderFns),
              (d._compiled = !0),
              n && (d.functional = !0)),
            s && (d._scopeId = s),
            o
              ? ((c = function(t) {
                  (t =
                    t ||
                    (this.$vnode && this.$vnode.ssrContext) ||
                    (this.parent &&
                      this.parent.$vnode &&
                      this.parent.$vnode.ssrContext)),
                    t ||
                      "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                      (t = __VUE_SSR_CONTEXT__),
                    e && e.call(this, r(t)),
                    t &&
                      t._registeredComponents &&
                      t._registeredComponents.add(o);
                }),
                (d._ssrRegister = c))
              : e &&
                (c = a
                  ? function() {
                      e.call(this, h(this.$root.$options.shadowRoot));
                    }
                  : function(t) {
                      e.call(this, l(t));
                    }),
            c)
          )
            if (d.functional) {
              var u = d.render;
              d.render = function(t, e) {
                return c.call(e), u(t, e);
              };
            } else {
              var p = d.beforeCreate;
              d.beforeCreate = p ? [].concat(p, c) : [c];
            }
          return i;
        }
        var l = a,
          r =
            "undefined" !== typeof navigator &&
            /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
        function h(t) {
          return function(t, e) {
            return u(t, e);
          };
        }
        var c = document.head || document.getElementsByTagName("head")[0],
          d = {};
        function u(t, e) {
          var i = r ? e.media || "default" : t,
            s = d[i] || (d[i] = { ids: new Set(), styles: [] });
          if (!s.ids.has(t)) {
            s.ids.add(t);
            var n = e.source;
            if (
              (e.map &&
                ((n += "\n/*# sourceURL=" + e.map.sources[0] + " */"),
                (n +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) +
                  " */")),
              s.element ||
                ((s.element = document.createElement("style")),
                (s.element.type = "text/css"),
                e.media && s.element.setAttribute("media", e.media),
                c.appendChild(s.element)),
              "styleSheet" in s.element)
            )
              s.styles.push(n),
                (s.element.styleSheet.cssText = s.styles
                  .filter(Boolean)
                  .join("\n"));
            else {
              var o = s.ids.size - 1,
                a = document.createTextNode(n),
                l = s.element.childNodes;
              l[o] && s.element.removeChild(l[o]),
                l.length
                  ? s.element.insertBefore(a, l[o])
                  : s.element.appendChild(a);
            }
          }
        }
        var p = h;
        const m = o;
        var f = function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                staticClass: "blueimp-gallery blueimp-gallery-controls",
                class: { "blueimp-gallery-carousel": t.carousel },
                attrs: { id: t.id },
              },
              [
                i("div", { staticClass: "slides" }),
                t._v(" "),
                i("h3", { staticClass: "title" }),
                t._v(" "),
                i("p", { staticClass: "description" }),
                t._v(" "),
                i("a", { staticClass: "prev" }, [t._t("prev", [t._v("‹")])], 2),
                t._v(" "),
                i("a", { staticClass: "next" }, [t._t("next", [t._v("›")])], 2),
                t._v(" "),
                t.carousel
                  ? t._e()
                  : i(
                      "a",
                      { staticClass: "close" },
                      [t._t("close", [t._v("×")])],
                      2
                    ),
                t._v(" "),
                t.carousel ? t._e() : i("ol", { staticClass: "indicator" }),
                t._v(" "),
                t.carousel ? i("a", { staticClass: "play-pause" }) : t._e(),
              ]
            );
          },
          g = [];
        const y = function(t) {
            t &&
              t("data-v-6d2033ba_0", {
                source:
                  ".blueimp-gallery>.description{position:absolute;top:30px;left:15px;color:#fff;display:none}.blueimp-gallery-controls>.description{display:block}",
                map: void 0,
                media: void 0,
              });
          },
          v = void 0,
          C = void 0,
          w = !1;
        var b = l({ render: f, staticRenderFns: g }, y, m, v, w, C, p, void 0);
        return b;
      });
    },
    "0818": function(t, e, i) {
      t.exports = i.p + "img/archery11.99dc3626.jpeg";
    },
    2248: function(t, e, i) {
      t.exports = i.p + "img/archery2.a75661fe.jpeg";
    },
    "33d5": function(t, e, i) {
      var s, n, o;
      (function(a) {
        "use strict";
        (n = [i("e5ff")]),
          (s = a),
          (o = "function" === typeof s ? s.apply(e, n) : s),
          void 0 === o || (t.exports = o);
      })(function(t) {
        "use strict";
        function e(t, i) {
          return void 0 === document.body.style.maxHeight
            ? null
            : this && this.options === e.prototype.options
            ? void (t && t.length
                ? ((this.list = t),
                  (this.num = t.length),
                  this.initOptions(i),
                  this.initialize())
                : this.console.log(
                    "blueimp Gallery: No or empty list provided as first argument.",
                    t
                  ))
            : new e(t, i);
        }
        return (
          t.extend(e.prototype, {
            options: {
              container: "#blueimp-gallery",
              slidesContainer: "div",
              titleElement: "h3",
              displayClass: "blueimp-gallery-display",
              controlsClass: "blueimp-gallery-controls",
              singleClass: "blueimp-gallery-single",
              leftEdgeClass: "blueimp-gallery-left",
              rightEdgeClass: "blueimp-gallery-right",
              playingClass: "blueimp-gallery-playing",
              slideClass: "slide",
              slideLoadingClass: "slide-loading",
              slideErrorClass: "slide-error",
              slideContentClass: "slide-content",
              toggleClass: "toggle",
              prevClass: "prev",
              nextClass: "next",
              closeClass: "close",
              playPauseClass: "play-pause",
              typeProperty: "type",
              titleProperty: "title",
              altTextProperty: "alt",
              urlProperty: "href",
              srcsetProperty: "urlset",
              displayTransition: !0,
              clearSlides: !0,
              stretchImages: !1,
              toggleControlsOnReturn: !0,
              toggleControlsOnSlideClick: !0,
              toggleSlideshowOnSpace: !0,
              enableKeyboardNavigation: !0,
              closeOnEscape: !0,
              closeOnSlideClick: !0,
              closeOnSwipeUpOrDown: !0,
              closeOnHashChange: !0,
              emulateTouchEvents: !0,
              stopTouchEventsPropagation: !1,
              hidePageScrollbars: !0,
              disableScroll: !0,
              carousel: !1,
              continuous: !0,
              unloadElements: !0,
              startSlideshow: !1,
              slideshowInterval: 5e3,
              slideshowDirection: "ltr",
              index: 0,
              preloadRange: 2,
              transitionDuration: 300,
              slideshowTransitionDuration: 500,
              event: void 0,
              onopen: void 0,
              onopened: void 0,
              onslide: void 0,
              onslideend: void 0,
              onslidecomplete: void 0,
              onclose: void 0,
              onclosed: void 0,
            },
            carouselOptions: {
              hidePageScrollbars: !1,
              toggleControlsOnReturn: !1,
              toggleSlideshowOnSpace: !1,
              enableKeyboardNavigation: !1,
              closeOnEscape: !1,
              closeOnSlideClick: !1,
              closeOnSwipeUpOrDown: !1,
              disableScroll: !1,
              startSlideshow: !0,
            },
            console:
              window.console && "function" === typeof window.console.log
                ? window.console
                : { log: function() {} },
            support: (function(e) {
              var i,
                s = {
                  touch:
                    void 0 !== window.ontouchstart ||
                    (window.DocumentTouch && document instanceof DocumentTouch),
                },
                n = {
                  webkitTransition: {
                    end: "webkitTransitionEnd",
                    prefix: "-webkit-",
                  },
                  MozTransition: { end: "transitionend", prefix: "-moz-" },
                  OTransition: { end: "otransitionend", prefix: "-o-" },
                  transition: { end: "transitionend", prefix: "" },
                };
              for (i in n)
                if (
                  Object.prototype.hasOwnProperty.call(n, i) &&
                  void 0 !== e.style[i]
                ) {
                  (s.transition = n[i]), (s.transition.name = i);
                  break;
                }
              function o() {
                var t,
                  i,
                  n = s.transition;
                document.body.appendChild(e),
                  n &&
                    ((t = n.name.slice(0, -9) + "ransform"),
                    void 0 !== e.style[t] &&
                      ((e.style[t] = "translateZ(0)"),
                      (i = window
                        .getComputedStyle(e)
                        .getPropertyValue(n.prefix + "transform")),
                      (s.transform = {
                        prefix: n.prefix,
                        name: t,
                        translate: !0,
                        translateZ: !!i && "none" !== i,
                      }))),
                  void 0 !== e.style.backgroundSize &&
                    ((s.backgroundSize = {}),
                    (e.style.backgroundSize = "contain"),
                    (s.backgroundSize.contain =
                      "contain" ===
                      window
                        .getComputedStyle(e)
                        .getPropertyValue("background-size")),
                    (e.style.backgroundSize = "cover"),
                    (s.backgroundSize.cover =
                      "cover" ===
                      window
                        .getComputedStyle(e)
                        .getPropertyValue("background-size"))),
                  document.body.removeChild(e);
              }
              return (
                document.body ? o() : t(document).on("DOMContentLoaded", o), s
              );
            })(document.createElement("div")),
            requestAnimationFrame:
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame,
            cancelAnimationFrame:
              window.cancelAnimationFrame ||
              window.webkitCancelRequestAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame,
            initialize: function() {
              if ((this.initStartIndex(), !1 === this.initWidget())) return !1;
              this.initEventListeners(),
                this.onslide(this.index),
                this.ontransitionend(),
                this.options.startSlideshow && this.play();
            },
            slide: function(t, e) {
              window.clearTimeout(this.timeout);
              var i,
                s,
                n,
                o = this.index;
              if (o !== t && 1 !== this.num) {
                if (
                  (e || (e = this.options.transitionDuration),
                  this.support.transform)
                ) {
                  this.options.continuous || (t = this.circle(t)),
                    (i = Math.abs(o - t) / (o - t)),
                    this.options.continuous &&
                      ((s = i),
                      (i = -this.positions[this.circle(t)] / this.slideWidth),
                      i !== s && (t = -i * this.num + t)),
                    (n = Math.abs(o - t) - 1);
                  while (n)
                    (n -= 1),
                      this.move(
                        this.circle((t > o ? t : o) - n - 1),
                        this.slideWidth * i,
                        0
                      );
                  (t = this.circle(t)),
                    this.move(o, this.slideWidth * i, e),
                    this.move(t, 0, e),
                    this.options.continuous &&
                      this.move(this.circle(t - i), -this.slideWidth * i, 0);
                } else
                  (t = this.circle(t)),
                    this.animate(o * -this.slideWidth, t * -this.slideWidth, e);
                this.onslide(t);
              }
            },
            getIndex: function() {
              return this.index;
            },
            getNumber: function() {
              return this.num;
            },
            prev: function() {
              (this.options.continuous || this.index) &&
                this.slide(this.index - 1);
            },
            next: function() {
              (this.options.continuous || this.index < this.num - 1) &&
                this.slide(this.index + 1);
            },
            play: function(t) {
              var e = this,
                i =
                  this.index +
                  ("rtl" === this.options.slideshowDirection ? -1 : 1);
              window.clearTimeout(this.timeout),
                (this.interval = t || this.options.slideshowInterval),
                this.elements[this.index] > 1 &&
                  (this.timeout = this.setTimeout(
                    (!this.requestAnimationFrame && this.slide) ||
                      function(t, i) {
                        e.animationFrameId = e.requestAnimationFrame.call(
                          window,
                          function() {
                            e.slide(t, i);
                          }
                        );
                      },
                    [i, this.options.slideshowTransitionDuration],
                    this.interval
                  )),
                this.container.addClass(this.options.playingClass);
            },
            pause: function() {
              window.clearTimeout(this.timeout),
                (this.interval = null),
                this.cancelAnimationFrame &&
                  (this.cancelAnimationFrame.call(
                    window,
                    this.animationFrameId
                  ),
                  (this.animationFrameId = null)),
                this.container.removeClass(this.options.playingClass);
            },
            add: function(t) {
              var e;
              for (
                t.concat || (t = Array.prototype.slice.call(t)),
                  this.list.concat ||
                    (this.list = Array.prototype.slice.call(this.list)),
                  this.list = this.list.concat(t),
                  this.num = this.list.length,
                  this.num > 2 &&
                    null === this.options.continuous &&
                    ((this.options.continuous = !0),
                    this.container.removeClass(this.options.leftEdgeClass)),
                  this.container
                    .removeClass(this.options.rightEdgeClass)
                    .removeClass(this.options.singleClass),
                  e = this.num - t.length;
                e < this.num;
                e += 1
              )
                this.addSlide(e), this.positionSlide(e);
              (this.positions.length = this.num), this.initSlides(!0);
            },
            resetSlides: function() {
              this.slidesContainer.empty(),
                this.unloadAllSlides(),
                (this.slides = []);
            },
            handleClose: function() {
              var t = this.options;
              this.destroyEventListeners(),
                this.pause(),
                (this.container[0].style.display = "none"),
                this.container
                  .removeClass(t.displayClass)
                  .removeClass(t.singleClass)
                  .removeClass(t.leftEdgeClass)
                  .removeClass(t.rightEdgeClass),
                t.hidePageScrollbars &&
                  (document.body.style.overflow = this.bodyOverflowStyle),
                this.options.clearSlides && this.resetSlides(),
                this.options.onclosed && this.options.onclosed.call(this);
            },
            close: function() {
              var t = this;
              function e(i) {
                i.target === t.container[0] &&
                  (t.container.off(t.support.transition.end, e),
                  t.handleClose());
              }
              this.options.onclose && this.options.onclose.call(this),
                this.support.transition && this.options.displayTransition
                  ? (this.container.on(this.support.transition.end, e),
                    this.container.removeClass(this.options.displayClass))
                  : this.handleClose();
            },
            circle: function(t) {
              return (this.num + (t % this.num)) % this.num;
            },
            move: function(t, e, i) {
              this.translateX(t, e, i), (this.positions[t] = e);
            },
            translate: function(t, e, i, s) {
              if (this.slides[t]) {
                var n = this.slides[t].style,
                  o = this.support.transition,
                  a = this.support.transform;
                (n[o.name + "Duration"] = s + "ms"),
                  (n[a.name] =
                    "translate(" +
                    e +
                    "px, " +
                    i +
                    "px)" +
                    (a.translateZ ? " translateZ(0)" : ""));
              }
            },
            translateX: function(t, e, i) {
              this.translate(t, e, 0, i);
            },
            translateY: function(t, e, i) {
              this.translate(t, 0, e, i);
            },
            animate: function(t, e, i) {
              if (i)
                var s = this,
                  n = new Date().getTime(),
                  o = window.setInterval(function() {
                    var a = new Date().getTime() - n;
                    if (a > i)
                      return (
                        (s.slidesContainer[0].style.left = e + "px"),
                        s.ontransitionend(),
                        void window.clearInterval(o)
                      );
                    s.slidesContainer[0].style.left =
                      (e - t) * (Math.floor((a / i) * 100) / 100) + t + "px";
                  }, 4);
              else this.slidesContainer[0].style.left = e + "px";
            },
            preventDefault: function(t) {
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
            },
            stopPropagation: function(t) {
              t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
            },
            onresize: function() {
              this.initSlides(!0);
            },
            onhashchange: function() {
              this.options.closeOnHashChange && this.close();
            },
            onmousedown: function(t) {
              t.which &&
                1 === t.which &&
                "VIDEO" !== t.target.nodeName &&
                "AUDIO" !== t.target.nodeName &&
                (t.preventDefault(),
                ((t.originalEvent || t).touches = [
                  { pageX: t.pageX, pageY: t.pageY },
                ]),
                this.ontouchstart(t));
            },
            onmousemove: function(t) {
              this.touchStart &&
                (((t.originalEvent || t).touches = [
                  { pageX: t.pageX, pageY: t.pageY },
                ]),
                this.ontouchmove(t));
            },
            onmouseup: function(t) {
              this.touchStart && (this.ontouchend(t), delete this.touchStart);
            },
            onmouseout: function(e) {
              if (this.touchStart) {
                var i = e.target,
                  s = e.relatedTarget;
                (s && (s === i || t.contains(i, s))) || this.onmouseup(e);
              }
            },
            ontouchstart: function(t) {
              this.options.stopTouchEventsPropagation &&
                this.stopPropagation(t);
              var e = (t.originalEvent || t).touches[0];
              (this.touchStart = { x: e.pageX, y: e.pageY, time: Date.now() }),
                (this.isScrolling = void 0),
                (this.touchDelta = {});
            },
            ontouchmove: function(t) {
              this.options.stopTouchEventsPropagation &&
                this.stopPropagation(t);
              var e,
                i,
                s = (t.originalEvent || t).touches,
                n = s[0],
                o = (t.originalEvent || t).scale,
                a = this.index;
              if (!(s.length > 1 || (o && 1 !== o)))
                if (
                  (this.options.disableScroll && t.preventDefault(),
                  (this.touchDelta = {
                    x: n.pageX - this.touchStart.x,
                    y: n.pageY - this.touchStart.y,
                  }),
                  (e = this.touchDelta.x),
                  void 0 === this.isScrolling &&
                    (this.isScrolling =
                      this.isScrolling ||
                      Math.abs(e) < Math.abs(this.touchDelta.y)),
                  this.isScrolling)
                )
                  this.options.carousel ||
                    this.translateY(
                      a,
                      this.touchDelta.y + this.positions[a],
                      0
                    );
                else {
                  t.preventDefault(),
                    window.clearTimeout(this.timeout),
                    this.options.continuous
                      ? (i = [this.circle(a + 1), a, this.circle(a - 1)])
                      : ((this.touchDelta.x = e /=
                          (!a && e > 0) || (a === this.num - 1 && e < 0)
                            ? Math.abs(e) / this.slideWidth + 1
                            : 1),
                        (i = [a]),
                        a && i.push(a - 1),
                        a < this.num - 1 && i.unshift(a + 1));
                  while (i.length)
                    (a = i.pop()), this.translateX(a, e + this.positions[a], 0);
                }
            },
            ontouchend: function(t) {
              this.options.stopTouchEventsPropagation &&
                this.stopPropagation(t);
              var e,
                i,
                s,
                n,
                o,
                a = this.index,
                l = Math.abs(this.touchDelta.x),
                r = this.slideWidth,
                h = Math.ceil(
                  (this.options.transitionDuration * (1 - l / r)) / 2
                ),
                c = l > 20,
                d =
                  (!a && this.touchDelta.x > 0) ||
                  (a === this.num - 1 && this.touchDelta.x < 0),
                u =
                  !c &&
                  this.options.closeOnSwipeUpOrDown &&
                  Math.abs(this.touchDelta.y) > 20;
              this.options.continuous && (d = !1),
                (e = this.touchDelta.x < 0 ? -1 : 1),
                this.isScrolling
                  ? u
                    ? this.close()
                    : this.translateY(a, 0, h)
                  : c && !d
                  ? ((i = a + e),
                    (s = a - e),
                    (n = r * e),
                    (o = -r * e),
                    this.options.continuous
                      ? (this.move(this.circle(i), n, 0),
                        this.move(this.circle(a - 2 * e), o, 0))
                      : i >= 0 && i < this.num && this.move(i, n, 0),
                    this.move(a, this.positions[a] + n, h),
                    this.move(
                      this.circle(s),
                      this.positions[this.circle(s)] + n,
                      h
                    ),
                    (a = this.circle(s)),
                    this.onslide(a))
                  : this.options.continuous
                  ? (this.move(this.circle(a - 1), -r, h),
                    this.move(a, 0, h),
                    this.move(this.circle(a + 1), r, h))
                  : (a && this.move(a - 1, -r, h),
                    this.move(a, 0, h),
                    a < this.num - 1 && this.move(a + 1, r, h));
            },
            ontouchcancel: function(t) {
              this.touchStart && (this.ontouchend(t), delete this.touchStart);
            },
            ontransitionend: function(t) {
              var e = this.slides[this.index];
              (t && e !== t.target) ||
                (this.interval && this.play(),
                this.setTimeout(this.options.onslideend, [this.index, e]));
            },
            oncomplete: function(e) {
              var i,
                s = e.target || e.srcElement,
                n = s && s.parentNode;
              s &&
                n &&
                ((i = this.getNodeIndex(n)),
                t(n).removeClass(this.options.slideLoadingClass),
                "error" === e.type
                  ? (t(n).addClass(this.options.slideErrorClass),
                    (this.elements[i] = 3))
                  : (this.elements[i] = 2),
                s.clientHeight > this.container[0].clientHeight &&
                  (s.style.maxHeight = this.container[0].clientHeight),
                this.interval && this.slides[this.index] === n && this.play(),
                this.setTimeout(this.options.onslidecomplete, [i, n]));
            },
            onload: function(t) {
              this.oncomplete(t);
            },
            onerror: function(t) {
              this.oncomplete(t);
            },
            onkeydown: function(t) {
              switch (t.which || t.keyCode) {
                case 13:
                  this.options.toggleControlsOnReturn &&
                    (this.preventDefault(t), this.toggleControls());
                  break;
                case 27:
                  this.options.closeOnEscape &&
                    (this.close(), t.stopImmediatePropagation());
                  break;
                case 32:
                  this.options.toggleSlideshowOnSpace &&
                    (this.preventDefault(t), this.toggleSlideshow());
                  break;
                case 37:
                  this.options.enableKeyboardNavigation &&
                    (this.preventDefault(t), this.prev());
                  break;
                case 39:
                  this.options.enableKeyboardNavigation &&
                    (this.preventDefault(t), this.next());
                  break;
              }
            },
            handleClick: function(e) {
              var i = this.options,
                s = e.target || e.srcElement,
                n = s.parentNode;
              function o(e) {
                return t(s).hasClass(e) || t(n).hasClass(e);
              }
              o(i.toggleClass)
                ? (this.preventDefault(e), this.toggleControls())
                : o(i.prevClass)
                ? (this.preventDefault(e), this.prev())
                : o(i.nextClass)
                ? (this.preventDefault(e), this.next())
                : o(i.closeClass)
                ? (this.preventDefault(e), this.close())
                : o(i.playPauseClass)
                ? (this.preventDefault(e), this.toggleSlideshow())
                : n === this.slidesContainer[0]
                ? i.closeOnSlideClick
                  ? (this.preventDefault(e), this.close())
                  : i.toggleControlsOnSlideClick &&
                    (this.preventDefault(e), this.toggleControls())
                : n.parentNode &&
                  n.parentNode === this.slidesContainer[0] &&
                  i.toggleControlsOnSlideClick &&
                  (this.preventDefault(e), this.toggleControls());
            },
            onclick: function(t) {
              if (
                !(
                  this.options.emulateTouchEvents &&
                  this.touchDelta &&
                  (Math.abs(this.touchDelta.x) > 20 ||
                    Math.abs(this.touchDelta.y) > 20)
                )
              )
                return this.handleClick(t);
              delete this.touchDelta;
            },
            updateEdgeClasses: function(t) {
              t
                ? this.container.removeClass(this.options.leftEdgeClass)
                : this.container.addClass(this.options.leftEdgeClass),
                t === this.num - 1
                  ? this.container.addClass(this.options.rightEdgeClass)
                  : this.container.removeClass(this.options.rightEdgeClass);
            },
            handleSlide: function(t) {
              this.options.continuous || this.updateEdgeClasses(t),
                this.loadElements(t),
                this.options.unloadElements && this.unloadElements(t),
                this.setTitle(t);
            },
            onslide: function(t) {
              (this.index = t),
                this.handleSlide(t),
                this.setTimeout(this.options.onslide, [t, this.slides[t]]);
            },
            setTitle: function(t) {
              var e = this.slides[t].firstChild,
                i = e.title || e.alt,
                s = this.titleElement;
              s.length &&
                (this.titleElement.empty(),
                i && s[0].appendChild(document.createTextNode(i)));
            },
            setTimeout: function(t, e, i) {
              var s = this;
              return (
                t &&
                window.setTimeout(function() {
                  t.apply(s, e || []);
                }, i || 0)
              );
            },
            imageFactory: function(e, i) {
              var s,
                n,
                o,
                a,
                l = this,
                r = this.imagePrototype.cloneNode(!1),
                h = e,
                c = this.options.stretchImages;
              function d(e) {
                if (!s) {
                  if (((e = { type: e.type, target: n }), !n.parentNode))
                    return l.setTimeout(d, [e]);
                  (s = !0),
                    t(r).off("load error", d),
                    c &&
                      "load" === e.type &&
                      ((n.style.background =
                        'url("' + h + '") center no-repeat'),
                      (n.style.backgroundSize = c)),
                    i(e);
                }
              }
              return (
                "string" !== typeof h &&
                  ((h = this.getItemProperty(e, this.options.urlProperty)),
                  (o = this.getItemProperty(e, this.options.titleProperty)),
                  (a =
                    this.getItemProperty(e, this.options.altTextProperty) ||
                    o)),
                !0 === c && (c = "contain"),
                (c =
                  this.support.backgroundSize &&
                  this.support.backgroundSize[c] &&
                  c),
                c
                  ? (n = this.elementPrototype.cloneNode(!1))
                  : ((n = r), (r.draggable = !1)),
                o && (n.title = o),
                a && (n.alt = a),
                t(r).on("load error", d),
                (r.src = h),
                n
              );
            },
            createElement: function(e, i) {
              var s = e && this.getItemProperty(e, this.options.typeProperty),
                n =
                  (s && this[s.split("/")[0] + "Factory"]) || this.imageFactory,
                o = e && n.call(this, e, i),
                a = this.getItemProperty(e, this.options.srcsetProperty);
              return (
                o ||
                  ((o = this.elementPrototype.cloneNode(!1)),
                  this.setTimeout(i, [{ type: "error", target: o }])),
                a && o.setAttribute("srcset", a),
                t(o).addClass(this.options.slideContentClass),
                o
              );
            },
            loadElement: function(e) {
              this.elements[e] ||
                (this.slides[e].firstChild
                  ? (this.elements[e] = t(this.slides[e]).hasClass(
                      this.options.slideErrorClass
                    )
                      ? 3
                      : 2)
                  : ((this.elements[e] = 1),
                    t(this.slides[e]).addClass(this.options.slideLoadingClass),
                    this.slides[e].appendChild(
                      this.createElement(this.list[e], this.proxyListener)
                    )));
            },
            loadElements: function(t) {
              var e,
                i = Math.min(this.num, 2 * this.options.preloadRange + 1),
                s = t;
              for (e = 0; e < i; e += 1)
                (s += e * (e % 2 === 0 ? -1 : 1)),
                  (s = this.circle(s)),
                  this.loadElement(s);
            },
            unloadElements: function(t) {
              var e, i;
              for (e in this.elements)
                Object.prototype.hasOwnProperty.call(this.elements, e) &&
                  ((i = Math.abs(t - e)),
                  i > this.options.preloadRange &&
                    i + this.options.preloadRange < this.num &&
                    (this.unloadSlide(e), delete this.elements[e]));
            },
            addSlide: function(t) {
              var e = this.slidePrototype.cloneNode(!1);
              e.setAttribute("data-index", t),
                this.slidesContainer[0].appendChild(e),
                this.slides.push(e);
            },
            positionSlide: function(t) {
              var e = this.slides[t];
              (e.style.width = this.slideWidth + "px"),
                this.support.transform &&
                  ((e.style.left = t * -this.slideWidth + "px"),
                  this.move(
                    t,
                    this.index > t
                      ? -this.slideWidth
                      : this.index < t
                      ? this.slideWidth
                      : 0,
                    0
                  ));
            },
            initSlides: function(e) {
              var i, s;
              for (
                e ||
                  ((this.positions = []),
                  (this.positions.length = this.num),
                  (this.elements = {}),
                  (this.imagePrototype = document.createElement("img")),
                  (this.elementPrototype = document.createElement("div")),
                  (this.slidePrototype = document.createElement("div")),
                  t(this.slidePrototype).addClass(this.options.slideClass),
                  (this.slides = this.slidesContainer[0].children),
                  (i =
                    this.options.clearSlides ||
                    this.slides.length !== this.num)),
                  this.slideWidth = this.container[0].clientWidth,
                  this.slideHeight = this.container[0].clientHeight,
                  this.slidesContainer[0].style.width =
                    this.num * this.slideWidth + "px",
                  i && this.resetSlides(),
                  s = 0;
                s < this.num;
                s += 1
              )
                i && this.addSlide(s), this.positionSlide(s);
              this.options.continuous &&
                this.support.transform &&
                (this.move(this.circle(this.index - 1), -this.slideWidth, 0),
                this.move(this.circle(this.index + 1), this.slideWidth, 0)),
                this.support.transform ||
                  (this.slidesContainer[0].style.left =
                    this.index * -this.slideWidth + "px");
            },
            unloadSlide: function(t) {
              var e, i;
              (e = this.slides[t]),
                (i = e.firstChild),
                null !== i && e.removeChild(i);
            },
            unloadAllSlides: function() {
              var t, e;
              for (t = 0, e = this.slides.length; t < e; t++)
                this.unloadSlide(t);
            },
            toggleControls: function() {
              var t = this.options.controlsClass;
              this.container.hasClass(t)
                ? this.container.removeClass(t)
                : this.container.addClass(t);
            },
            toggleSlideshow: function() {
              this.interval ? this.pause() : this.play();
            },
            getNodeIndex: function(t) {
              return parseInt(t.getAttribute("data-index"), 10);
            },
            getNestedProperty: function(t, e) {
              return (
                e.replace(
                  /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
                  function(e, i, s, n, o) {
                    var a = o || i || s || (n && parseInt(n, 10));
                    e && t && (t = t[a]);
                  }
                ),
                t
              );
            },
            getDataProperty: function(e, i) {
              var s, n;
              if (
                (e.dataset
                  ? ((s = i.replace(/-([a-z])/g, function(t, e) {
                      return e.toUpperCase();
                    })),
                    (n = e.dataset[s]))
                  : e.getAttribute &&
                    (n = e.getAttribute(
                      "data-" + i.replace(/([A-Z])/g, "-$1").toLowerCase()
                    )),
                "string" === typeof n)
              ) {
                if (
                  /^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(
                    n
                  )
                )
                  try {
                    return t.parseJSON(n);
                  } catch (o) {}
                return n;
              }
            },
            getItemProperty: function(t, e) {
              var i = this.getDataProperty(t, e);
              return (
                void 0 === i && (i = t[e]),
                void 0 === i && (i = this.getNestedProperty(t, e)),
                i
              );
            },
            initStartIndex: function() {
              var t,
                e = this.options.index,
                i = this.options.urlProperty;
              if (e && "number" !== typeof e)
                for (t = 0; t < this.num; t += 1)
                  if (
                    this.list[t] === e ||
                    this.getItemProperty(this.list[t], i) ===
                      this.getItemProperty(e, i)
                  ) {
                    e = t;
                    break;
                  }
              this.index = this.circle(parseInt(e, 10) || 0);
            },
            initEventListeners: function() {
              var e = this,
                i = this.slidesContainer;
              function s(t) {
                var i =
                  e.support.transition && e.support.transition.end === t.type
                    ? "transitionend"
                    : t.type;
                e["on" + i](t);
              }
              t(window).on("resize", s),
                t(window).on("hashchange", s),
                t(document.body).on("keydown", s),
                this.container.on("click", s),
                this.support.touch
                  ? i.on("touchstart touchmove touchend touchcancel", s)
                  : this.options.emulateTouchEvents &&
                    this.support.transition &&
                    i.on("mousedown mousemove mouseup mouseout", s),
                this.support.transition && i.on(this.support.transition.end, s),
                (this.proxyListener = s);
            },
            destroyEventListeners: function() {
              var e = this.slidesContainer,
                i = this.proxyListener;
              t(window).off("resize", i),
                t(document.body).off("keydown", i),
                this.container.off("click", i),
                this.support.touch
                  ? e.off("touchstart touchmove touchend touchcancel", i)
                  : this.options.emulateTouchEvents &&
                    this.support.transition &&
                    e.off("mousedown mousemove mouseup mouseout", i),
                this.support.transition &&
                  e.off(this.support.transition.end, i);
            },
            handleOpen: function() {
              this.options.onopened && this.options.onopened.call(this);
            },
            initWidget: function() {
              var e = this;
              function i(t) {
                t.target === e.container[0] &&
                  (e.container.off(e.support.transition.end, i),
                  e.handleOpen());
              }
              return (
                (this.container = t(this.options.container)),
                this.container.length
                  ? ((this.slidesContainer = this.container
                      .find(this.options.slidesContainer)
                      .first()),
                    this.slidesContainer.length
                      ? ((this.titleElement = this.container
                          .find(this.options.titleElement)
                          .first()),
                        1 === this.num &&
                          this.container.addClass(this.options.singleClass),
                        this.options.onopen && this.options.onopen.call(this),
                        this.support.transition &&
                        this.options.displayTransition
                          ? this.container.on(this.support.transition.end, i)
                          : this.handleOpen(),
                        this.options.hidePageScrollbars &&
                          ((this.bodyOverflowStyle =
                            document.body.style.overflow),
                          (document.body.style.overflow = "hidden")),
                        (this.container[0].style.display = "block"),
                        this.initSlides(),
                        void this.container.addClass(this.options.displayClass))
                      : (this.console.log(
                          "blueimp Gallery: Slides container not found.",
                          this.options.slidesContainer
                        ),
                        !1))
                  : (this.console.log(
                      "blueimp Gallery: Widget container not found.",
                      this.options.container
                    ),
                    !1)
              );
            },
            initOptions: function(e) {
              (this.options = t.extend({}, this.options)),
                ((e && e.carousel) ||
                  (this.options.carousel && (!e || !1 !== e.carousel))) &&
                  t.extend(this.options, this.carouselOptions),
                t.extend(this.options, e),
                this.num < 3 &&
                  (this.options.continuous = !!this.options.continuous && null),
                this.support.transition ||
                  (this.options.emulateTouchEvents = !1),
                this.options.event && this.preventDefault(this.options.event);
            },
          }),
          e
        );
      });
    },
    "438a": function(t, e, i) {
      t.exports = i.p + "img/archery10.dee98aee.jpeg";
    },
    4957: function(t, e, i) {
      t.exports = i.p + "img/noarcheryclubbanner.029e6edc.jpg";
    },
    "65f02": function(t, e, i) {
      t.exports = i.p + "img/archery8.e1ba9f43.jpeg";
    },
    "76a5": function(t, e, i) {
      t.exports = i.p + "img/archery4.043f83a7.jpeg";
    },
    8043: function(t, e, i) {
      t.exports = i.p + "img/archery3.0b2fb749.jpeg";
    },
    8680: function(t, e, i) {
      var s, n, o;
      (function(a) {
        "use strict";
        (n = [i("e5ff"), i("33d5")]),
          (s = a),
          (o = "function" === typeof s ? s.apply(e, n) : s),
          void 0 === o || (t.exports = o);
      })(function(t, e) {
        "use strict";
        var i = e.prototype;
        t.extend(i.options, { fullScreen: !1 });
        var s = i.initialize,
          n = i.close;
        return (
          t.extend(i, {
            getFullScreenElement: function() {
              return (
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
              );
            },
            requestFullScreen: function(t) {
              t.requestFullscreen
                ? t.requestFullscreen()
                : t.webkitRequestFullscreen
                ? t.webkitRequestFullscreen()
                : t.mozRequestFullScreen
                ? t.mozRequestFullScreen()
                : t.msRequestFullscreen && t.msRequestFullscreen();
            },
            exitFullScreen: function() {
              document.exitFullscreen
                ? document.exitFullscreen()
                : document.webkitCancelFullScreen
                ? document.webkitCancelFullScreen()
                : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.msExitFullscreen && document.msExitFullscreen();
            },
            initialize: function() {
              s.call(this),
                this.options.fullScreen &&
                  !this.getFullScreenElement() &&
                  this.requestFullScreen(this.container[0]);
            },
            close: function() {
              this.getFullScreenElement() === this.container[0] &&
                this.exitFullScreen(),
                n.call(this);
            },
          }),
          e
        );
      });
    },
    a4b2: function(t, e, i) {},
    ae4a: function(t, e, i) {
      t.exports = i.p + "img/archery6.00a1a754.jpeg";
    },
    b378: function(t, e, i) {},
    b761: function(t, e, i) {
      t.exports = i.p + "img/archery1.36305fc3.jpeg";
    },
    bc44: function(t, e, i) {
      var s, n, o;
      (function(a) {
        "use strict";
        (n = [i("e5ff"), i("ef31")]),
          (s = a),
          (o = "function" === typeof s ? s.apply(e, n) : s),
          void 0 === o || (t.exports = o);
      })(function(t, e) {
        "use strict";
        if (!window.postMessage) return e;
        var i = e.prototype;
        t.extend(i.options, {
          youTubeVideoIdProperty: "youtube",
          youTubePlayerVars: { wmode: "transparent" },
          youTubeClickToPlay: !0,
        });
        var s = i.textFactory || i.imageFactory,
          n = function(t, e, i) {
            (this.videoId = t),
              (this.playerVars = e),
              (this.clickToPlay = i),
              (this.element = document.createElement("div")),
              (this.listeners = {});
          };
        return (
          t.extend(n.prototype, {
            canPlayType: function() {
              return !0;
            },
            on: function(t, e) {
              return (this.listeners[t] = e), this;
            },
            loadAPI: function() {
              var t,
                e = this,
                i = window.onYouTubeIframeAPIReady,
                s = "//www.youtube.com/iframe_api",
                n = document.getElementsByTagName("script"),
                o = n.length;
              window.onYouTubeIframeAPIReady = function() {
                i && i.apply(this), e.playOnReady && e.play();
              };
              while (o) if (((o -= 1), n[o].src === s)) return;
              (t = document.createElement("script")),
                (t.src = s),
                n[0].parentNode.insertBefore(t, n[0]);
            },
            onReady: function() {
              (this.ready = !0), this.playOnReady && this.play();
            },
            onPlaying: function() {
              this.playStatus < 2 &&
                (this.listeners.playing(), (this.playStatus = 2));
            },
            onPause: function() {
              i.setTimeout.call(this, this.checkSeek, null, 2e3);
            },
            checkSeek: function() {
              (this.stateChange !== YT.PlayerState.PAUSED &&
                this.stateChange !== YT.PlayerState.ENDED) ||
                (this.listeners.pause(), delete this.playStatus);
            },
            onStateChange: function(t) {
              switch (t.data) {
                case YT.PlayerState.PLAYING:
                  (this.hasPlayed = !0), this.onPlaying();
                  break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
                  this.onPause();
                  break;
              }
              this.stateChange = t.data;
            },
            onError: function(t) {
              this.listeners.error(t);
            },
            play: function() {
              var t = this;
              this.playStatus || (this.listeners.play(), (this.playStatus = 1)),
                this.ready
                  ? !this.hasPlayed &&
                    (this.clickToPlay ||
                      (window.navigator &&
                        /iP(hone|od|ad)/.test(window.navigator.platform)))
                    ? this.onPlaying()
                    : this.player.playVideo()
                  : ((this.playOnReady = !0),
                    window.YT && YT.Player
                      ? this.player ||
                        (this.player = new YT.Player(this.element, {
                          videoId: this.videoId,
                          playerVars: this.playerVars,
                          events: {
                            onReady: function() {
                              t.onReady();
                            },
                            onStateChange: function(e) {
                              t.onStateChange(e);
                            },
                            onError: function(e) {
                              t.onError(e);
                            },
                          },
                        }))
                      : this.loadAPI());
            },
            pause: function() {
              this.ready
                ? this.player.pauseVideo()
                : this.playStatus &&
                  (delete this.playOnReady,
                  this.listeners.pause(),
                  delete this.playStatus);
            },
          }),
          t.extend(i, {
            YouTubePlayer: n,
            textFactory: function(t, e) {
              var i = this.options,
                o = this.getItemProperty(t, i.youTubeVideoIdProperty);
              return o
                ? (void 0 === this.getItemProperty(t, i.urlProperty) &&
                    (t[i.urlProperty] = "//www.youtube.com/watch?v=" + o),
                  void 0 === this.getItemProperty(t, i.videoPosterProperty) &&
                    (t[i.videoPosterProperty] =
                      "//img.youtube.com/vi/" + o + "/maxresdefault.jpg"),
                  this.videoFactory(
                    t,
                    e,
                    new n(o, i.youTubePlayerVars, i.youTubeClickToPlay)
                  ))
                : s.call(this, t, e);
            },
          }),
          e
        );
      });
    },
    c8dd: function(t, e, i) {
      t.exports = i.p + "img/archery12.d2610606.jpg";
    },
    d8ac: function(t, e, i) {
      "use strict";
      i("b378");
    },
    e1f1: function(t, e, i) {
      "use strict";
      i.r(e);
      var s = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("container", [
            i(
              "div",
              { staticClass: "gallery" },
              [
                i(
                  "v-row",
                  [
                    i(
                      "v-col",
                      [
                        i(
                          "v-flex",
                          { attrs: { "justify-center": "" } },
                          [
                            i("gallery", {
                              attrs: { images: t.images, index: t.index },
                              on: {
                                close: function(e) {
                                  t.index = null;
                                },
                              },
                            }),
                            t._l(t.images, function(e, s) {
                              return i("div", {
                                key: s,
                                staticClass: "image",
                                style: {
                                  backgroundImage: "url(" + e + ")",
                                  width: "350px",
                                  height: "250px",
                                },
                                on: {
                                  click: function(e) {
                                    t.index = s;
                                  },
                                },
                              });
                            }),
                            t._l(t.longImages, function(e, s) {
                              return i("div", {
                                key: s,
                                staticClass: "image",
                                style: {
                                  backgroundImage: "url(" + e + ")",
                                  width: "710px",
                                  height: "200px",
                                },
                                on: {
                                  click: function(e) {
                                    t.index = s;
                                  },
                                },
                              });
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        n = [],
        o = i("067c"),
        a = i.n(o),
        l = i("b761"),
        r = i.n(l),
        h = i("2248"),
        c = i.n(h),
        d = i("8043"),
        u = i.n(d),
        p = i("76a5"),
        m = i.n(p),
        f = i("0595"),
        g = i.n(f),
        y = i("ae4a"),
        v = i.n(y),
        C = i("c8dd"),
        w = i.n(C),
        b = i("65f02"),
        S = i.n(b),
        x = i("438a"),
        P = i.n(x),
        E = i("0818"),
        T = i.n(E),
        k = i("4957"),
        D = i.n(k),
        O = i("026f"),
        I = i.n(O),
        F = {
          data: function() {
            return {
              images: [D.a, r.a, P.a, m.a, g.a, v.a, w.a, S.a, T.a, I.a],
              longImages: [c.a, u.a],
              index: null,
            };
          },
          components: { gallery: a.a },
        },
        N = F,
        _ = (i("d8ac"), i("2877")),
        A = i("6544"),
        R = i.n(A),
        z = i("62ad"),
        L = (i("20f6"), i("e8f2")),
        j = Object(L["a"])("flex"),
        V = i("0fd9"),
        W = Object(_["a"])(N, s, n, !1, null, "6369c669", null);
      e["default"] = W.exports;
      R()(W, { VCol: z["a"], VFlex: j, VRow: V["a"] });
    },
    e5ff: function(t, e, i) {
      var s;
      (function() {
        "use strict";
        function n(t, e) {
          var i;
          for (i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }
        function o(t) {
          if (!this || this.find !== o.prototype.find) return new o(t);
          if (((this.length = 0), t))
            if (
              ("string" === typeof t && (t = this.find(t)),
              t.nodeType || t === t.window)
            )
              (this.length = 1), (this[0] = t);
            else {
              var e = t.length;
              this.length = e;
              while (e) (e -= 1), (this[e] = t[e]);
            }
        }
        (o.extend = n),
          (o.contains = function(t, e) {
            do {
              if (((e = e.parentNode), e === t)) return !0;
            } while (e);
            return !1;
          }),
          (o.parseJSON = function(t) {
            return window.JSON && JSON.parse(t);
          }),
          n(o.prototype, {
            find: function(t) {
              var e = this[0] || document;
              return (
                "string" === typeof t &&
                  (t = e.querySelectorAll
                    ? e.querySelectorAll(t)
                    : "#" === t.charAt(0)
                    ? e.getElementById(t.slice(1))
                    : e.getElementsByTagName(t)),
                new o(t)
              );
            },
            hasClass: function(t) {
              return (
                !!this[0] &&
                new RegExp("(^|\\s+)" + t + "(\\s+|$)").test(this[0].className)
              );
            },
            addClass: function(t) {
              var e,
                i = this.length;
              while (i) {
                if (((i -= 1), (e = this[i]), !e.className))
                  return (e.className = t), this;
                if (this.hasClass(t)) return this;
                e.className += " " + t;
              }
              return this;
            },
            removeClass: function(t) {
              var e,
                i = new RegExp("(^|\\s+)" + t + "(\\s+|$)"),
                s = this.length;
              while (s)
                (s -= 1),
                  (e = this[s]),
                  (e.className = e.className.replace(i, " "));
              return this;
            },
            on: function(t, e) {
              var i,
                s,
                n = t.split(/\s+/);
              while (n.length) {
                (t = n.shift()), (i = this.length);
                while (i)
                  (i -= 1),
                    (s = this[i]),
                    s.addEventListener
                      ? s.addEventListener(t, e, !1)
                      : s.attachEvent && s.attachEvent("on" + t, e);
              }
              return this;
            },
            off: function(t, e) {
              var i,
                s,
                n = t.split(/\s+/);
              while (n.length) {
                (t = n.shift()), (i = this.length);
                while (i)
                  (i -= 1),
                    (s = this[i]),
                    s.removeEventListener
                      ? s.removeEventListener(t, e, !1)
                      : s.detachEvent && s.detachEvent("on" + t, e);
              }
              return this;
            },
            empty: function() {
              var t,
                e = this.length;
              while (e) {
                (e -= 1), (t = this[e]);
                while (t.hasChildNodes()) t.removeChild(t.lastChild);
              }
              return this;
            },
            first: function() {
              return new o(this[0]);
            },
          }),
          (s = function() {
            return o;
          }.call(e, i, e, t)),
          void 0 === s || (t.exports = s);
      })();
    },
    ef31: function(t, e, i) {
      var s, n, o;
      (function(a) {
        "use strict";
        (n = [i("e5ff"), i("33d5")]),
          (s = a),
          (o = "function" === typeof s ? s.apply(e, n) : s),
          void 0 === o || (t.exports = o);
      })(function(t, e) {
        "use strict";
        var i = e.prototype;
        t.extend(i.options, {
          videoContentClass: "video-content",
          videoLoadingClass: "video-loading",
          videoPlayingClass: "video-playing",
          videoPosterProperty: "poster",
          videoSourcesProperty: "sources",
        });
        var s = i.handleSlide;
        return (
          t.extend(i, {
            handleSlide: function(t) {
              s.call(this, t), this.playingVideo && this.playingVideo.pause();
            },
            videoFactory: function(e, i, s) {
              var n,
                o,
                a,
                l,
                r,
                h = this,
                c = this.options,
                d = this.elementPrototype.cloneNode(!1),
                u = t(d),
                p = [{ type: "error", target: d }],
                m = s || document.createElement("video"),
                f = this.getItemProperty(e, c.urlProperty),
                g = this.getItemProperty(e, c.typeProperty),
                y = this.getItemProperty(e, c.titleProperty),
                v = this.getItemProperty(e, this.options.altTextProperty) || y,
                C = this.getItemProperty(e, c.videoPosterProperty),
                w = this.getItemProperty(e, c.videoSourcesProperty);
              if (
                (u.addClass(c.videoContentClass),
                y && (d.title = y),
                m.canPlayType)
              )
                if (f && g && m.canPlayType(g)) m.src = f;
                else if (w)
                  while (w.length)
                    if (
                      ((o = w.shift()),
                      (f = this.getItemProperty(o, c.urlProperty)),
                      (g = this.getItemProperty(o, c.typeProperty)),
                      f && g && m.canPlayType(g))
                    ) {
                      m.src = f;
                      break;
                    }
              return (
                C &&
                  ((m.poster = C),
                  (n = this.imagePrototype.cloneNode(!1)),
                  t(n).addClass(c.toggleClass),
                  (n.src = C),
                  (n.draggable = !1),
                  (n.alt = v),
                  d.appendChild(n)),
                (a = document.createElement("a")),
                a.setAttribute("target", "_blank"),
                s || a.setAttribute("download", y),
                (a.href = f),
                m.src &&
                  ((m.controls = !0),
                  (s || t(m))
                    .on("error", function() {
                      h.setTimeout(i, p);
                    })
                    .on("pause", function() {
                      m.seeking ||
                        ((l = !1),
                        u
                          .removeClass(h.options.videoLoadingClass)
                          .removeClass(h.options.videoPlayingClass),
                        r && h.container.addClass(h.options.controlsClass),
                        delete h.playingVideo,
                        h.interval && h.play());
                    })
                    .on("playing", function() {
                      (l = !1),
                        u
                          .removeClass(h.options.videoLoadingClass)
                          .addClass(h.options.videoPlayingClass),
                        h.container.hasClass(h.options.controlsClass)
                          ? ((r = !0),
                            h.container.removeClass(h.options.controlsClass))
                          : (r = !1);
                    })
                    .on("play", function() {
                      window.clearTimeout(h.timeout),
                        (l = !0),
                        u.addClass(h.options.videoLoadingClass),
                        (h.playingVideo = m);
                    }),
                  t(a).on("click", function(t) {
                    h.preventDefault(t), l ? m.pause() : m.play();
                  }),
                  d.appendChild((s && s.element) || m)),
                d.appendChild(a),
                this.setTimeout(i, [{ type: "load", target: d }]),
                d
              );
            },
          }),
          e
        );
      });
    },
  },
]);
//# sourceMappingURL=Pictures.b932096a.js.map
