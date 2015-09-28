/*! piotr.kowerzanow | http://piotr.kowerzanow.com/ 28-09-2015 */
if (function(a) {
    "use strict";
    function b(b) {
        var c = [ {
            re: /[\xC0-\xC6]/g,
            ch: "A"
        }, {
            re: /[\xE0-\xE6]/g,
            ch: "a"
        }, {
            re: /[\xC8-\xCB]/g,
            ch: "E"
        }, {
            re: /[\xE8-\xEB]/g,
            ch: "e"
        }, {
            re: /[\xCC-\xCF]/g,
            ch: "I"
        }, {
            re: /[\xEC-\xEF]/g,
            ch: "i"
        }, {
            re: /[\xD2-\xD6]/g,
            ch: "O"
        }, {
            re: /[\xF2-\xF6]/g,
            ch: "o"
        }, {
            re: /[\xD9-\xDC]/g,
            ch: "U"
        }, {
            re: /[\xF9-\xFC]/g,
            ch: "u"
        }, {
            re: /[\xC7-\xE7]/g,
            ch: "c"
        }, {
            re: /[\xD1]/g,
            ch: "N"
        }, {
            re: /[\xF1]/g,
            ch: "n"
        } ];
        return a.each(c, function() {
            b = b.replace(this.re, this.ch);
        }), b;
    }
    function c(a) {
        var b = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, c = "(?:" + Object.keys(b).join("|") + ")", d = new RegExp(c), e = new RegExp(c, "g"), f = null == a ? "" : "" + a;
        return d.test(f) ? f.replace(e, function(a) {
            return b[a];
        }) : f;
    }
    function d(b, c) {
        var d = arguments, f = b, g = c;
        [].shift.apply(d);
        var h, i = this.each(function() {
            var b = a(this);
            if (b.is("select")) {
                var c = b.data("selectpicker"), i = "object" == typeof f && f;
                if (c) {
                    if (i) for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j]);
                } else {
                    var k = a.extend({}, e.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                    k.template = a.extend({}, e.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), 
                    b.data("selectpicker", c = new e(this, k, g));
                }
                "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f]);
            }
        });
        return "undefined" != typeof h ? h : i;
    }
    String.prototype.includes || !function() {
        var a = {}.toString, b = function() {
            try {
                var a = {}, b = Object.defineProperty, c = b(a, a, a) && b;
            } catch (d) {}
            return c;
        }(), c = "".indexOf, d = function(b) {
            if (null == this) throw new TypeError();
            var d = String(this);
            if (b && "[object RegExp]" == a.call(b)) throw new TypeError();
            var e = d.length, f = String(b), g = f.length, h = arguments.length > 1 ? arguments[1] : void 0, i = h ? Number(h) : 0;
            i != i && (i = 0);
            var j = Math.min(Math.max(i, 0), e);
            return g + j > e ? !1 : -1 != c.call(d, f, i);
        };
        b ? b(String.prototype, "includes", {
            value: d,
            configurable: !0,
            writable: !0
        }) : String.prototype.includes = d;
    }(), String.prototype.startsWith || !function() {
        var a = function() {
            try {
                var a = {}, b = Object.defineProperty, c = b(a, a, a) && b;
            } catch (d) {}
            return c;
        }(), b = {}.toString, c = function(a) {
            if (null == this) throw new TypeError();
            var c = String(this);
            if (a && "[object RegExp]" == b.call(a)) throw new TypeError();
            var d = c.length, e = String(a), f = e.length, g = arguments.length > 1 ? arguments[1] : void 0, h = g ? Number(g) : 0;
            h != h && (h = 0);
            var i = Math.min(Math.max(h, 0), d);
            if (f + i > d) return !1;
            for (var j = -1; ++j < f; ) if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
            return !0;
        };
        a ? a(String.prototype, "startsWith", {
            value: c,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = c;
    }(), Object.keys || (Object.keys = function(a, b, c) {
        c = [];
        for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
        return c;
    }), a.fn.triggerNative = function(a) {
        var b, c = this[0];
        c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, {
            bubbles: !0
        }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : (c.fireEvent && (b = document.createEventObject(), 
        b.eventType = a, c.fireEvent("on" + a, b)), this.trigger(a));
    }, a.expr[":"].icontains = function(b, c, d) {
        var e = a(b), f = (e.data("tokens") || e.text()).toUpperCase();
        return f.includes(d[3].toUpperCase());
    }, a.expr[":"].ibegins = function(b, c, d) {
        var e = a(b), f = (e.data("tokens") || e.text()).toUpperCase();
        return f.startsWith(d[3].toUpperCase());
    }, a.expr[":"].aicontains = function(b, c, d) {
        var e = a(b), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
        return f.includes(d[3].toUpperCase());
    }, a.expr[":"].aibegins = function(b, c, d) {
        var e = a(b), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
        return f.startsWith(d[3].toUpperCase());
    };
    var e = function(b, c, d) {
        d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, 
        this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), 
        this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, 
        this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, 
        this.destroy = e.prototype.remove, this.remove = e.prototype.remove, this.show = e.prototype.show, 
        this.hide = e.prototype.hide, this.init();
    };
    e.VERSION = "1.7.2", e.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function(a, b) {
            return 1 == a ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function(a, b) {
            return [ 1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)" ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        template: {
            caret: '<span class="caret"></span>'
        },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1
    }, e.prototype = {
        constructor: e,
        init: function() {
            var b = this, c = this.$element.attr("id");
            this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), 
            this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), 
            this.$element.after(this.$newElement), this.$button = this.$newElement.children("button"), 
            this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), 
            this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), 
            "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) {
                a.preventDefault(), b.$button.focus();
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), 
            this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), 
            this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), 
            this.$newElement.on({
                "hide.bs.dropdown": function(a) {
                    b.$element.trigger("hide.bs.select", a);
                },
                "hidden.bs.dropdown": function(a) {
                    b.$element.trigger("hidden.bs.select", a);
                },
                "show.bs.dropdown": function(a) {
                    b.$element.trigger("show.bs.select", a);
                },
                "shown.bs.dropdown": function(a) {
                    b.$element.trigger("shown.bs.select", a);
                }
            }), setTimeout(function() {
                b.$element.trigger("loaded.bs.select");
            });
        },
        createDropdown: function() {
            var b = this.multiple ? " show-tick" : "", d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "", e = this.autofocus ? " autofocus" : "", f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "", g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + "></div>" : "", h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "", i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "", j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner" role="menu"></ul>' + i + "</div></div>";
            return a(j);
        },
        createView: function() {
            var a = this.createDropdown(), b = this.createLi();
            return a.find("ul")[0].innerHTML = b, a;
        },
        reloadLi: function() {
            this.destroyLi();
            var a = this.createLi();
            this.$menuInner[0].innerHTML = a;
        },
        destroyLi: function() {
            this.$menu.find("li").remove();
        },
        createLi: function() {
            var d = this, e = [], f = 0, g = document.createElement("option"), h = -1, i = function(a, b, c, d) {
                return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>";
            }, j = function(a, e, f, g) {
                return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ">" + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>';
            };
            if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
                var k = this.$element[0];
                g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), 
                g.value = "", k.insertBefore(g, k.firstChild), void 0 === a(k.options[k.selectedIndex]).attr("selected") && (g.selected = !0);
            }
            return this.$element.find("option").each(function(b) {
                var c = a(this);
                if (h++, !c.hasClass("bs-title-option")) {
                    var g = this.className || "", k = this.style.cssText, l = c.data("content") ? c.data("content") : c.html(), m = c.data("tokens") ? c.data("tokens") : null, n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "", o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "", p = this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled;
                    if ("" !== o && p && (o = "<span>" + o + "</span>"), d.options.hideDisabled && p) return void h--;
                    if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), "OPTGROUP" === this.parentElement.tagName && c.data("divider") !== !0) {
                        var q = " " + this.parentElement.className || "";
                        if (0 === c.index()) {
                            f += 1;
                            var r = this.parentElement.label, s = "undefined" != typeof c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "", t = c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "";
                            r = t + '<span class="text">' + r + s + "</span>", 0 !== b && e.length > 0 && (h++, 
                            e.push(i("", null, "divider", f + "div"))), h++, e.push(i(r, null, "dropdown-header" + q, f));
                        }
                        e.push(i(j(l, "opt " + g + q, k, m), b, "", f));
                    } else c.data("divider") === !0 ? e.push(i("", b, "divider")) : c.data("hidden") === !0 ? e.push(i(j(l, g, k, m), b, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, 
                    e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
                    d.liObj[b] = h;
                }
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), 
            e.join("");
        },
        findLis: function() {
            return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
        },
        render: function(b) {
            var c, d = this;
            b !== !1 && this.$element.find("option").each(function(a) {
                var b = d.findLis().eq(d.liObj[a]);
                d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled, b), 
                d.setSelected(a, this.selected, b);
            }), this.tabIndex();
            var e = this.$element.find("option").map(function() {
                if (this.selected) {
                    if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled)) return;
                    var b, c = a(this), e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                    return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", 
                    "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b;
                }
            }).toArray(), f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var g = this.options.selectedTextFormat.split(">");
                if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
                    c = this.options.hideDisabled ? ", [disabled]" : "";
                    var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length, i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                    f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString());
                }
            }
            void 0 == this.options.title && (this.options.title = this.$element.attr("title")), 
            "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), 
            this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), 
            this.$element.trigger("rendered.bs.select");
        },
        setStyle: function(a, b) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
            var c = a ? a : this.options.style;
            "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), 
            this.$button.addClass(c));
        },
        liHeight: function(b) {
            if (b || this.options.size !== !1 && !this.sizeInfo) {
                var c = document.createElement("div"), d = document.createElement("div"), e = document.createElement("ul"), f = document.createElement("li"), g = document.createElement("li"), h = document.createElement("a"), i = document.createElement("span"), j = this.options.header ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null, k = this.options.liveSearch ? document.createElement("div") : null, l = this.options.actionsBox && this.multiple ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null, m = this.options.doneButton && this.multiple ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", 
                d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", 
                i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), 
                e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                    var n = document.createElement("span");
                    k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k);
                }
                l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), 
                document.body.appendChild(c);
                var o = h.offsetHeight, p = j ? j.offsetHeight : 0, q = k ? k.offsetHeight : 0, r = l ? l.offsetHeight : 0, s = m ? m.offsetHeight : 0, t = a(f).outerHeight(!0), u = "function" == typeof getComputedStyle ? getComputedStyle(d) : !1, v = u ? null : a(d), w = parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")), x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
                document.body.removeChild(c), this.sizeInfo = {
                    liHeight: o,
                    headerHeight: p,
                    searchHeight: q,
                    actionsHeight: r,
                    doneButtonHeight: s,
                    dividerHeight: t,
                    menuPadding: w,
                    menuExtras: x
                };
            }
        },
        setSize: function() {
            if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), 
            this.options.size !== !1) {
                var b, c, d, e, f = this, g = this.$menu, h = this.$menuInner, i = a(window), j = this.$newElement[0].offsetHeight, k = this.sizeInfo.liHeight, l = this.sizeInfo.headerHeight, m = this.sizeInfo.searchHeight, n = this.sizeInfo.actionsHeight, o = this.sizeInfo.doneButtonHeight, p = this.sizeInfo.dividerHeight, q = this.sizeInfo.menuPadding, r = this.sizeInfo.menuExtras, s = this.options.hideDisabled ? ".disabled" : "", t = function() {
                    d = f.$newElement.offset().top - i.scrollTop(), e = i.height() - d - j;
                };
                if (t(), "auto" === this.options.size) {
                    var u = function() {
                        var i, j = function(b, c) {
                            return function(d) {
                                return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b));
                            };
                        }, p = f.$menuInner[0].getElementsByTagName("li"), s = Array.prototype.filter ? Array.prototype.filter.call(p, j("hidden", !1)) : f.$lis.not(".hidden"), u = Array.prototype.filter ? Array.prototype.filter.call(s, j("dropdown-header", !0)) : s.filter(".dropdown-header");
                        t(), b = e - r, f.options.container ? (g.data("height") || g.data("height", g.height()), 
                        c = g.data("height")) : c = g.height(), f.options.dropupAuto && f.$newElement.toggleClass("dropup", d > e && c > b - r), 
                        f.$newElement.hasClass("dropup") && (b = d - r), i = s.length + u.length > 3 ? 3 * k + r - 2 : 0, 
                        g.css({
                            "max-height": b + "px",
                            overflow: "hidden",
                            "min-height": i + l + m + n + o + "px"
                        }), h.css({
                            "max-height": b - l - m - n - o - q + "px",
                            "overflow-y": "auto",
                            "min-height": Math.max(i - q, 0) + "px"
                        });
                    };
                    u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), 
                    i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u);
                } else if (this.options.size && "auto" != this.options.size && this.$lis.not(s).length > this.options.size) {
                    var v = this.$lis.not(".divider").not(s).children().slice(0, this.options.size).last().parent().index(), w = this.$lis.slice(0, v + 1).filter(".divider").length;
                    b = k * this.options.size + w * p + q, f.options.container ? (g.data("height") || g.data("height", g.height()), 
                    c = g.data("height")) : c = g.height(), f.options.dropupAuto && this.$newElement.toggleClass("dropup", d > e && c > b - r), 
                    g.css({
                        "max-height": b + l + m + n + o + "px",
                        overflow: "hidden",
                        "min-height": ""
                    }), h.css({
                        "max-height": b - q + "px",
                        "overflow-y": "auto",
                        "min-height": ""
                    });
                }
            }
        },
        setWidth: function() {
            if ("auto" === this.options.width) {
                this.$menu.css("min-width", "0");
                var a = this.$menu.parent().clone().appendTo("body"), b = this.options.container ? this.$newElement.clone().appendTo("body") : a, c = a.children(".dropdown-menu").outerWidth(), d = b.css("width", "auto").children("button").outerWidth();
                a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px");
            } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), 
            this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), 
            this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
        },
        selectPosition: function() {
            var b, c, d = this, e = a('<div class="bs-container" />'), f = function(a) {
                e.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), 
                b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.css({
                    top: b.top + c,
                    left: b.left,
                    width: a[0].offsetWidth
                });
            };
            this.$newElement.on("click", function() {
                d.isDisabled() || (f(a(this)), e.appendTo(d.options.container), e.toggleClass("open", !a(this).hasClass("open")), 
                e.append(d.$menu));
            }), a(window).on("resize scroll", function() {
                f(d.$newElement);
            }), this.$element.on("hide.bs.select", function() {
                d.$menu.data("height", d.$menu.height()), e.detach();
            });
        },
        setSelected: function(a, b, c) {
            if (!c) var c = this.findLis().eq(this.liObj[a]);
            c.toggleClass("selected", b);
        },
        setDisabled: function(a, b, c) {
            if (!c) var c = this.findLis().eq(this.liObj[a]);
            b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0);
        },
        isDisabled: function() {
            return this.$element[0].disabled;
        },
        checkDisabled: function() {
            var a = this;
            this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), 
            this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), 
            this.$button.click(function() {
                return !a.isDisabled();
            });
        },
        tabIndex: function() {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), 
            this.$button.attr("tabindex", this.$element.data("tabindex")));
        },
        clickListener: function() {
            var b = this, c = a(document);
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) {
                a.stopPropagation();
            }), c.data("spaceSelect", !1), this.$button.on("keyup", function(a) {
                /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), 
                c.data("spaceSelect", !1));
            }), this.$newElement.on("click", function() {
                b.setSize(), b.$element.on("shown.bs.select", function() {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];
                            if ("number" != typeof a || b.options.size === !1) return;
                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c;
                        }
                    } else b.$menuInner.find(".selected a").focus();
                });
            }), this.$menuInner.on("click", "li a", function(c) {
                var d = a(this), e = d.parent().data("originalIndex"), f = b.$element.val(), g = b.$element.prop("selectedIndex");
                if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                    var h = b.$element.find("option"), i = h.eq(e), j = i.prop("selected"), k = i.parent("optgroup"), l = b.options.maxOptions, m = k.data("maxOptions") || !1;
                    if (b.multiple) {
                        if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1) {
                            var n = l < h.filter(":selected").length, o = m < k.find("option:selected").length;
                            if (l && n || m && o) if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), 
                            b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0); else if (m && 1 == m) {
                                k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                                var p = d.parent().data("optgroup");
                                b.$menuInner.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0);
                            } else {
                                var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText, r = q[0].replace("{n}", l), s = q[1].replace("{n}", m), t = a('<div class="notify"></div>');
                                q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), 
                                i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), 
                                b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), 
                                b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                    b.setSelected(e, !1);
                                }, 10), t.delay(750).fadeOut(300, function() {
                                    a(this).remove();
                                });
                            }
                        }
                    } else h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), 
                    b.setSelected(e, !0);
                    b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && (b.$element.triggerNative("change"), 
                    b.$element.trigger("changed.bs.select", [ e, i.prop("selected"), j ]));
                }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(c) {
                c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus());
            }), this.$menuInner.on("click", ".divider, .dropdown-header", function(a) {
                a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus();
            }), this.$menu.on("click", ".popover-title .close", function() {
                b.$button.click();
            }), this.$searchbox.on("click", function(a) {
                a.stopPropagation();
            }), this.$menu.on("click", ".actions-btn", function(c) {
                b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), 
                c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll(), 
                b.$element.triggerNative("change");
            }), this.$element.change(function() {
                b.render(!1);
            });
        },
        liveSearchListener: function() {
            var d = this, e = a('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), 
                d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), 
                d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                    d.$searchbox.focus();
                }, 10);
            }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(a) {
                a.stopPropagation();
            }), this.$searchbox.on("input propertychange", function() {
                if (d.$searchbox.val()) {
                    var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                    f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), 
                    f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function() {
                        var b = a(this), c = b.data("optgroup");
                        0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), 
                        d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"));
                    });
                    var g = d.$lis.not(".hidden");
                    g.each(function(b) {
                        var c = a(this);
                        c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden");
                    }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), 
                    e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), 
                    d.$menuInner.append(e));
                } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), 
                a(this).focus();
            });
        },
        _searchStyle: function() {
            var a = "icontains";
            switch (this.options.liveSearchStyle) {
              case "begins":
              case "startsWith":
                a = "ibegins";
                break;

              case "contains":            }
            return a;
        },
        val: function(a) {
            return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val();
        },
        selectAll: function() {
            this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !0), 
            this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected"), 
            this.render(!1);
        },
        deselectAll: function() {
            this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !1), 
            this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected"), 
            this.render(!1);
        },
        keydown: function(c) {
            var d, e, f, g, h, i, j, k, l, m = a(this), n = m.is("input") ? m.parent().parent() : m.parent(), o = n.data("this"), p = ":not(.disabled, .hidden, .dropdown-header, .divider)", q = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            };
            if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), 
            d = a("[role=menu] li", n), l = o.$menu.parent().hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 65 && c.keyCode <= 90) && (o.options.container ? o.$newElement.trigger("click") : (o.setSize(), 
            o.$menu.parent().addClass("open"), l = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (c.preventDefault(), 
            o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), 
            o.$button.focus()), d = a("[role=menu] li" + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), 
            d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), 
            d.length) {
                if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), 
                g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), 
                i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function(b) {
                    a(this).hasClass("disabled") || a(this).data("index", b);
                }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), 
                f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), 
                j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, 
                e != j && e > i && (e = i), g > e && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, 
                -1 == e && (e = 0), e != j && f > e && (e = f), e > h && (e = h), e == k && (e = g)), 
                m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), 
                m.focus())) : d.eq(e).children("a").focus(); else if (!m.is("input")) {
                    var r, s, t = [];
                    d.each(function() {
                        a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index());
                    }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), 
                    s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), 
                    r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus();
                }
                if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
                    if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), 
                    m.focus()); else {
                        var u = a(":focus");
                        u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0);
                    }
                    a(document).data("keycount", 0);
                }
                (/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), 
                o.options.container && o.$newElement.removeClass("open"), o.$button.focus());
            }
        },
        mobile: function() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide();
        },
        refresh: function() {
            this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), 
            this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), 
            this.$element.trigger("refreshed.bs.select");
        },
        hide: function() {
            this.$newElement.hide();
        },
        show: function() {
            this.$newElement.show();
        },
        remove: function() {
            this.$newElement.remove(), this.$element.remove();
        }
    };
    var f = a.fn.selectpicker;
    a.fn.selectpicker = d, a.fn.selectpicker.Constructor = e, a.fn.selectpicker.noConflict = function() {
        return a.fn.selectpicker = f, this;
    }, a(document).data("keycount", 0).on("keydown", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', e.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(a) {
        a.stopPropagation();
    }), a(window).on("load.bs.select.data-api", function() {
        a(".selectpicker").each(function() {
            var b = a(this);
            d.call(b, b.data());
        });
    });
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");

+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0;
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
    }, a(function() {
        a.support.transition = b();
    });
}(jQuery), +function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]', c = function(c) {
        a(c).on("click", b, this.close);
    };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove();
        }
        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), 
        f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), 
        a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d);
        });
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this;
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close);
}(jQuery), +function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d);
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(a) {
        var b = "disabled", c = this.$element, d = c.is("input") ? "val" : "html", e = c.data();
        a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), 
        setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b);
        }, 0);
    }, b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons"]'), b = !0;
        if (a.length) {
            var c = this.$element.find("input");
            "radio" === c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? b = !1 : a.find(".active").removeClass("active")), 
            b && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        }
        b && this.$element.toggleClass("active");
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c);
        });
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this;
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault();
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
        this.$items.index(this.$active);
    }, b.prototype.to = function(b) {
        var c = this, d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b);
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]();
        }
        this.sliding = !0, f && this.pause();
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
            this.$element.one("slid.bs.carousel", function() {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active");
            })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
                    e.removeClass([ b, g ].join(" ")).addClass("active"), d.removeClass([ "active", g ].join(" ")), 
                    i.sliding = !1, setTimeout(function() {
                        i.$element.trigger("slid.bs.carousel");
                    }, 0);
                }).emulateTransitionEnd(600);
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel");
            }
            return f && this.cycle(), this;
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this;
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), 
        b.preventDefault();
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, 
        this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null);
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, 
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase([ "scroll", e ].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this;
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), 
        d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h);
    });
}(jQuery), +function(a) {
    "use strict";
    function b() {
        a(d).remove(), a(e).each(function(b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"));
        });
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), 
                f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus();
            }
            return !1;
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d), g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), 
                    h.eq(i).focus();
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c);
        });
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this;
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown);
}(jQuery), +function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote);
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a);
    }, b.prototype.show = function(b) {
        var c = this, d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, 
        this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), 
            d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), 
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e);
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e);
        }));
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), 
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), 
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
        }, this));
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal");
        });
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), 
            this.$element.on("click.dismiss.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b();
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d);
        });
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus();
        });
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open");
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open");
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, 
        this.init("tooltip", a, b);
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focus", i = "hover" == g ? "mouseleave" : "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, b.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show();
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this.tip();
            this.setContent(), this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement, e = /\s?auto?\s?/i, f = e.test(d);
            f && (d = d.replace(e, "") || "top"), c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition(), h = c[0].offsetWidth, i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent(), k = d, l = document.documentElement.scrollTop || document.body.scrollTop, m = "body" == this.options.container ? window.innerWidth : j.outerWidth(), n = "body" == this.options.container ? window.innerHeight : j.outerHeight(), o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, 
                c.removeClass(k).addClass(d);
            }
            var p = this.getCalculatedOffset(d, g, h, i);
            this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type);
        }
    }, b.prototype.applyPlacement = function(a, b) {
        var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, 
        d.offset(a).addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), 
            this.replaceArrow(k - e + i, i, "left");
        } else this.replaceArrow(j - f, j, "top");
        c && d.offset(a);
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    }, b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach();
        }
        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), 
        a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), 
        this.$element.trigger("hidden.bs." + this.type), this);
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, b.prototype.hasContent = function() {
        return this.getTitle();
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset());
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, b.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template);
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    }, b.prototype.enable = function() {
        this.enabled = !0;
    }, b.prototype.disable = function() {
        this.enabled = !1;
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, b.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this;
    };
}(jQuery), +function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, 
    b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    }, b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), 
        a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, b.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this;
    };
}(jQuery), +function(a) {
    "use strict";
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), 
        this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), 
        this.process();
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#\w/.test(e) && a(e);
            return f && f.length && [ [ f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1]);
        });
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
        d.trigger("activate.bs.scrollspy");
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b);
    };
    b.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    });
                });
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
            b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), 
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
        }
        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in");
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]();
        });
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this;
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show");
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition();
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, 
            this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), 
            "bottom" == i && this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height()
            }));
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), 
            c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
        });
    });
}(jQuery), !function(a, b) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define([ "jquery" ], function(a) {
        return b(a);
    }) : b(a.jQuery);
}(this, function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, 
        this.sorter = this.options.sorter || this.sorter, this.select = this.options.select || this.select, 
        this.autoSelect = "boolean" == typeof this.options.autoSelect ? this.options.autoSelect : !0, 
        this.highlighter = this.options.highlighter || this.highlighter, this.render = this.options.render || this.render, 
        this.updater = this.options.updater || this.updater, this.displayText = this.options.displayText || this.displayText, 
        this.source = this.options.source, this.delay = this.options.delay, this.$menu = a(this.options.menu), 
        this.$appendTo = this.options.appendTo ? a(this.options.appendTo) : null, this.shown = !1, 
        this.listen(), this.showHintOnFocus = "boolean" == typeof this.options.showHintOnFocus ? this.options.showHintOnFocus : !1, 
        this.afterSelect = this.options.afterSelect, this.addItem = !1;
    };
    b.prototype = {
        constructor: b,
        select: function() {
            var a = this.$menu.find(".active").data("value");
            if (this.$element.data("active", a), this.autoSelect || a) {
                var b = this.updater(a);
                this.$element.val(this.displayText(b) || b).change(), this.afterSelect(b);
            }
            return this.hide();
        },
        updater: function(a) {
            return a;
        },
        setSource: function(a) {
            this.source = a;
        },
        show: function() {
            var b, c = a.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return b = "function" == typeof this.options.scrollHeight ? this.options.scrollHeight.call() : this.options.scrollHeight, 
            (this.$appendTo ? this.$menu.appendTo(this.$appendTo) : this.$menu.insertAfter(this.$element)).css({
                top: c.top + c.height + b,
                left: c.left
            }).show(), this.shown = !0, this;
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this;
        },
        lookup: function(b) {
            if (this.query = "undefined" != typeof b && null !== b ? b : this.$element.val() || "", 
            this.query.length < this.options.minLength) return this.shown ? this.hide() : this;
            var c = a.proxy(function() {
                a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source && this.process(this.source);
            }, this);
            clearTimeout(this.lookupWorker), this.lookupWorker = setTimeout(c, this.delay);
        },
        process: function(b) {
            var c = this;
            return b = a.grep(b, function(a) {
                return c.matcher(a);
            }), b = this.sorter(b), b.length || this.options.addItem ? (b.length > 0 ? this.$element.data("active", b[0]) : this.$element.data("active", null), 
            this.options.addItem && b.push(this.options.addItem), "all" == this.options.items ? this.render(b).show() : this.render(b.slice(0, this.options.items)).show()) : this.shown ? this.hide() : this;
        },
        matcher: function(a) {
            var b = this.displayText(a);
            return ~b.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(a) {
            for (var b, c = [], d = [], e = []; b = a.shift(); ) {
                var f = this.displayText(b);
                f.toLowerCase().indexOf(this.query.toLowerCase()) ? ~f.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
            }
            return c.concat(d, e);
        },
        highlighter: function(b) {
            var c, d, e, f, g, h = a("<div></div>"), i = this.query, j = b.toLowerCase().indexOf(i.toLowerCase());
            if (c = i.length, 0 === c) return h.text(b).html();
            for (;j > -1; ) d = b.substr(0, j), e = b.substr(j, c), f = b.substr(j + c), g = a("<strong></strong>").text(e), 
            h.append(document.createTextNode(d)).append(g), b = f, j = b.toLowerCase().indexOf(i.toLowerCase());
            return h.append(document.createTextNode(b)).html();
        },
        render: function(b) {
            var c = this, d = this, e = !1;
            return b = a(b).map(function(b, f) {
                var g = d.displayText(f);
                return b = a(c.options.item).data("value", f), b.find("a").html(c.highlighter(g)), 
                g == d.$element.val() && (b.addClass("active"), d.$element.data("active", f), e = !0), 
                b[0];
            }), this.autoSelect && !e && (b.first().addClass("active"), this.$element.data("active", b.first().data("value"))), 
            this.$menu.html(b), this;
        },
        displayText: function(a) {
            return a.name || a;
        },
        next: function(b) {
            var c = this.$menu.find(".active").removeClass("active"), d = c.next();
            d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active");
        },
        prev: function(a) {
            var b = this.$menu.find(".active").removeClass("active"), c = b.prev();
            c.length || (c = this.$menu.find("li").last()), c.addClass("active");
        },
        listen: function() {
            this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), 
            this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), 
            this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this));
        },
        destroy: function() {
            this.$element.data("typeahead", null), this.$element.data("active", null), this.$element.off("focus").off("blur").off("keypress").off("keyup"), 
            this.eventSupported("keydown") && this.$element.off("keydown"), this.$menu.remove();
        },
        eventSupported: function(a) {
            var b = a in this.$element;
            return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), 
            b;
        },
        move: function(a) {
            if (this.shown) {
                switch (a.keyCode) {
                  case 9:
                  case 13:
                  case 27:
                    a.preventDefault();
                    break;

                  case 38:
                    if (a.shiftKey) return;
                    a.preventDefault(), this.prev();
                    break;

                  case 40:
                    if (a.shiftKey) return;
                    a.preventDefault(), this.next();
                }
                a.stopPropagation();
            }
        },
        keydown: function(b) {
            this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [ 40, 38, 9, 13, 27 ]), this.shown || 40 != b.keyCode ? this.move(b) : this.lookup();
        },
        keypress: function(a) {
            this.suppressKeyPressRepeat || this.move(a);
        },
        keyup: function(a) {
            switch (a.keyCode) {
              case 40:
              case 38:
              case 16:
              case 17:
              case 18:
                break;

              case 9:
              case 13:
                if (!this.shown) return;
                this.select();
                break;

              case 27:
                if (!this.shown) return;
                this.hide();
                break;

              default:
                this.lookup();
            }
            a.stopPropagation(), a.preventDefault();
        },
        focus: function(a) {
            this.focused || (this.focused = !0, this.options.showHintOnFocus && this.lookup(""));
        },
        blur: function(a) {
            this.focused = !1, !this.mousedover && this.shown && this.hide();
        },
        click: function(a) {
            a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus();
        },
        mouseenter: function(b) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active");
        },
        mouseleave: function(a) {
            this.mousedover = !1, !this.focused && this.shown && this.hide();
        }
    };
    var c = a.fn.typeahead;
    a.fn.typeahead = function(c) {
        var d = arguments;
        return "string" == typeof c && "getActive" == c ? this.data("active") : this.each(function() {
            var e = a(this), f = e.data("typeahead"), g = "object" == typeof c && c;
            f || e.data("typeahead", f = new b(this, g)), "string" == typeof c && (d.length > 1 ? f[c].apply(f, Array.prototype.slice.call(d, 1)) : f[c]());
        });
    }, a.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
        item: '<li><a href="#" role="option"></a></li>',
        minLength: 1,
        scrollHeight: 0,
        autoSelect: !0,
        afterSelect: a.noop,
        addItem: !1,
        delay: 0
    }, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function() {
        return a.fn.typeahead = c, this;
    }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(b) {
        var c = a(this);
        c.data("typeahead") || c.typeahead(c.data());
    });
}), function(a, b, c) {
    "use strict";
    var d, e = a.document, f = a.Modernizr, g = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }, h = "Moz Webkit O Ms".split(" "), i = function(a) {
        var b, c = e.documentElement.style;
        if ("string" == typeof c[a]) return a;
        a = g(a);
        for (var d = 0, f = h.length; f > d; d++) if (b = h[d] + a, "string" == typeof c[b]) return b;
    }, j = i("transform"), k = i("transitionProperty"), l = {
        csstransforms: function() {
            return !!j;
        },
        csstransforms3d: function() {
            var a = !!i("perspective");
            if (a) {
                var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "), d = "@media (" + c.join("transform-3d),(") + "modernizr)", e = b("<style>" + d + "{#modernizr{height:3px}}</style>").appendTo("head"), f = b('<div id="modernizr" />').appendTo("html");
                a = 3 === f.height(), f.remove(), e.remove();
            }
            return a;
        },
        csstransitions: function() {
            return !!k;
        }
    };
    if (f) for (d in l) f.hasOwnProperty(d) || f.addTest(d, l[d]); else {
        f = a.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var m, n = " ";
        for (d in l) m = l[d](), f[d] = m, n += " " + (m ? "" : "no-") + d;
        b("html").addClass(n);
    }
    if (f.csstransforms) {
        var o = f.csstransforms3d ? {
            translate: function(a) {
                return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) ";
            },
            scale: function(a) {
                return "scale3d(" + a + ", " + a + ", 1) ";
            }
        } : {
            translate: function(a) {
                return "translate(" + a[0] + "px, " + a[1] + "px) ";
            },
            scale: function(a) {
                return "scale(" + a + ") ";
            }
        }, p = function(a, c, d) {
            var e, f, g = b.data(a, "isoTransform") || {}, h = {}, i = {};
            h[c] = d, b.extend(g, h);
            for (e in g) f = g[e], i[e] = o[e](f);
            var k = i.translate || "", l = i.scale || "", m = k + l;
            b.data(a, "isoTransform", g), a.style[j] = m;
        };
        b.cssNumber.scale = !0, b.cssHooks.scale = {
            set: function(a, b) {
                p(a, "scale", b);
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.scale ? d.scale : 1;
            }
        }, b.fx.step.scale = function(a) {
            b.cssHooks.scale.set(a.elem, a.now + a.unit);
        }, b.cssNumber.translate = !0, b.cssHooks.translate = {
            set: function(a, b) {
                p(a, "translate", b);
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.translate ? d.translate : [ 0, 0 ];
            }
        };
    }
    var q, r;
    f.csstransitions && (q = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[k], r = i("transitionDuration"));
    var s, t = b.event, u = b.event.handle ? "handle" : "dispatch";
    t.special.smartresize = {
        setup: function() {
            b(this).bind("resize", t.special.smartresize.handler);
        },
        teardown: function() {
            b(this).unbind("resize", t.special.smartresize.handler);
        },
        handler: function(a, b) {
            var c = this, d = arguments;
            a.type = "smartresize", s && clearTimeout(s), s = setTimeout(function() {
                t[u].apply(c, d);
            }, "execAsap" === b ? 0 : 100);
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", [ "execAsap" ]);
    }, b.Isotope = function(a, c, d) {
        this.element = b(c), this._create(a), this._init(d);
    };
    var v = [ "width", "height" ], w = b(a);
    b.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, b.Isotope.prototype = {
        _create: function(a) {
            this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
            var c = this.element[0].style;
            this.originalStyle = {};
            var d = v.slice(0);
            for (var e in this.options.containerStyle) d.push(e);
            for (var f = 0, g = d.length; g > f; f++) e = d[f], this.originalStyle[e] = c[e] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var h = {
                "original-order": function(a, b) {
                    return b.elemCount++, b.elemCount;
                },
                random: function() {
                    return Math.random();
                }
            };
            this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), 
            this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var i = this;
            setTimeout(function() {
                i.element.addClass(i.options.containerClass);
            }, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
                i.resize();
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1;
            });
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector, c = b ? a.filter(b).add(a.find(b)) : a, d = {
                position: "absolute"
            };
            return c = c.filter(function(a, b) {
                return 1 === b.nodeType;
            }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), 
            this.updateSortData(c, !0), c;
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a);
        },
        option: function(a) {
            if (b.isPlainObject(a)) {
                this.options = b.extend(!0, this.options, a);
                var c;
                for (var d in a) c = "_update" + g(d), this[c] && this[c]();
            }
        },
        _updateAnimationEngine: function() {
            var a, b = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
            switch (b) {
              case "css":
              case "none":
                a = !1;
                break;

              case "jquery":
                a = !0;
                break;

              default:
                a = !f.csstransitions;
            }
            this.isUsingJQueryAnimation = a, this._updateUsingTransforms();
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms();
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && f.csstransforms && f.csstransitions && !this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), 
            this.getPositionStyles = a ? this._translate : this._positionAbs;
        },
        _filter: function(a) {
            var b = "" === this.options.filter ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass, d = "." + c, e = a.filter(d), f = e;
            if ("*" !== b) {
                f = e.filter(b);
                var g = a.not(d).not(b).addClass(c);
                this.styleQueue.push({
                    $el: g,
                    style: this.options.hiddenStyle
                });
            }
            return this.styleQueue.push({
                $el: f,
                style: this.options.visibleStyle
            }), f.removeClass(c), a.filter(b);
        },
        updateSortData: function(a, c) {
            var d, e, f = this, g = this.options.getSortData;
            a.each(function() {
                d = b(this), e = {};
                for (var a in g) c || "original-order" !== a ? e[a] = g[a](d, f) : e[a] = b.data(this, "isotope-sort-data")[a];
                b.data(this, "isotope-sort-data", e);
            });
        },
        _sort: function() {
            var a = this.options.sortBy, b = this._getSorter, c = this.options.sortAscending ? 1 : -1, d = function(d, e) {
                var f = b(d, a), g = b(e, a);
                return f === g && "original-order" !== a && (f = b(d, "original-order"), g = b(e, "original-order")), 
                (f > g ? 1 : g > f ? -1 : 0) * c;
            };
            this.$filteredAtoms.sort(d);
        },
        _getSorter: function(a, c) {
            return b.data(a, "isotope-sort-data")[c];
        },
        _translate: function(a, b) {
            return {
                translate: [ a, b ]
            };
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            };
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            });
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            if (this["_" + c + "Layout"](a), this.options.resizesContainer) {
                var d = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: d
                });
            }
            this._processStyleQueue(a, b), this.isLaidOut = !0;
        },
        _processStyleQueue: function(a, c) {
            var d, e, g, h, i = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css", j = this.options.animationOptions, k = this.options.onLayout;
            if (e = function(a, b) {
                b.$el[i](b.style, j);
            }, this._isInserting && this.isUsingJQueryAnimation) e = function(a, b) {
                d = b.$el.hasClass("no-transition") ? "css" : i, b.$el[d](b.style, j);
            }; else if (c || k || j.complete) {
                var l = !1, m = [ c, k, j.complete ], n = this;
                if (g = !0, h = function() {
                    if (!l) {
                        for (var b, c = 0, d = m.length; d > c; c++) b = m[c], "function" == typeof b && b.call(n.element, a, n);
                        l = !0;
                    }
                }, this.isUsingJQueryAnimation && "animate" === i) j.complete = h, g = !1; else if (f.csstransitions) {
                    for (var o, p = 0, s = this.styleQueue[0], t = s && s.$el; !t || !t.length; ) {
                        if (o = this.styleQueue[p++], !o) return;
                        t = o.$el;
                    }
                    var u = parseFloat(getComputedStyle(t[0])[r]);
                    u > 0 && (e = function(a, b) {
                        b.$el[i](b.style, j).one(q, h);
                    }, g = !1);
                }
            }
            b.each(this.styleQueue, e), g && h(), this.styleQueue = [];
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout();
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a);
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c), b && b(c);
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function(a) {
                var d = c._filter(a);
                c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b);
            });
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a), c.layout(a), c._revealAppended(a, b);
            });
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, 
            this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            });
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition"), c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                }), c._isInserting = !1, c._processStyleQueue(a, b);
            }, 10);
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children());
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this, d = function() {
                a.remove(), b && b.call(c.element);
            };
            a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d();
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), 
            this.reLayout(a);
        },
        destroy: function() {
            var a = this.usingTransforms, b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[j] = "");
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), 
            w.unbind(".isotope");
        },
        _getSegments: function(a) {
            var b, c = this.options.layoutMode, d = a ? "rowHeight" : "columnWidth", e = a ? "height" : "width", f = a ? "rows" : "cols", h = this.element[e](), i = this.options[c] && this.options[c][d] || this.$filteredAtoms["outer" + g(e)](!0) || h;
            b = Math.floor(h / i), b = Math.max(b, 1), this[c][f] = b, this[c][d] = i;
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode, c = a ? "rows" : "cols", d = this[b][c];
            return this._getSegments(a), this[b][c] !== d;
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var a = this.masonry.cols;
            for (this.masonry.colYs = []; a--; ) this.masonry.colYs.push(0);
        },
        _masonryLayout: function(a) {
            var c = this, d = c.masonry;
            a.each(function() {
                var a = b(this), e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                if (e = Math.min(e, d.cols), 1 === e) c._masonryPlaceBrick(a, d.colYs); else {
                    var f, g, h = d.cols + 1 - e, i = [];
                    for (g = 0; h > g; g++) f = d.colYs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                    c._masonryPlaceBrick(a, i);
                }
            });
        },
        _masonryPlaceBrick: function(a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++) if (b[e] === c) {
                d = e;
                break;
            }
            var g = this.masonry.columnWidth * d, h = c;
            this._pushPosition(a, g, h);
            var i = c + a.outerHeight(!0), j = this.masonry.cols + 1 - f;
            for (e = 0; j > e; e++) this.masonry.colYs[d + e] = i;
        },
        _masonryGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: a
            };
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged();
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            };
        },
        _fitRowsLayout: function(a) {
            var c = this, d = this.element.width(), e = this.fitRows;
            a.each(function() {
                var a = b(this), f = a.outerWidth(!0), g = a.outerHeight(!0);
                0 !== e.x && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), 
                e.height = Math.max(e.y + g, e.height), e.x += f;
            });
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            };
        },
        _fitRowsResizeChanged: function() {
            return !0;
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0);
        },
        _cellsByRowLayout: function(a) {
            var c = this, d = this.cellsByRow;
            a.each(function() {
                var a = b(this), e = d.index % d.cols, f = Math.floor(d.index / d.cols), g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2, h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++;
            });
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            };
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged();
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            };
        },
        _straightDownLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0);
            });
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            };
        },
        _straightDownResizeChanged: function() {
            return !0;
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; a--; ) this.masonryHorizontal.rowXs.push(0);
        },
        _masonryHorizontalLayout: function(a) {
            var c = this, d = c.masonryHorizontal;
            a.each(function() {
                var a = b(this), e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                if (e = Math.min(e, d.rows), 1 === e) c._masonryHorizontalPlaceBrick(a, d.rowXs); else {
                    var f, g, h = d.rows + 1 - e, i = [];
                    for (g = 0; h > g; g++) f = d.rowXs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                    c._masonryHorizontalPlaceBrick(a, i);
                }
            });
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++) if (b[e] === c) {
                d = e;
                break;
            }
            var g = c, h = this.masonryHorizontal.rowHeight * d;
            this._pushPosition(a, g, h);
            var i = c + a.outerWidth(!0), j = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; j > e; e++) this.masonryHorizontal.rowXs[d + e] = i;
        },
        _masonryHorizontalGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: a
            };
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0);
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            };
        },
        _fitColumnsLayout: function(a) {
            var c = this, d = this.element.height(), e = this.fitColumns;
            a.each(function() {
                var a = b(this), f = a.outerWidth(!0), g = a.outerHeight(!0);
                0 !== e.y && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), 
                e.width = Math.max(e.x + f, e.width), e.y += g;
            });
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            };
        },
        _fitColumnsResizeChanged: function() {
            return !0;
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0);
        },
        _cellsByColumnLayout: function(a) {
            var c = this, d = this.cellsByColumn;
            a.each(function() {
                var a = b(this), e = Math.floor(d.index / d.rows), f = d.index % d.rows, g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2, h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++;
            });
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            };
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0);
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            };
        },
        _straightAcrossLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0);
            });
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            };
        },
        _straightAcrossResizeChanged: function() {
            return !0;
        }
    }, b.fn.imagesLoaded = function(a) {
        function c() {
            a.call(e, f);
        }
        function d(a) {
            var e = a.target;
            e.src !== h && -1 === b.inArray(e, i) && (i.push(e), --g <= 0 && (setTimeout(c), 
            f.unbind(".imagesLoaded", d)));
        }
        var e = this, f = e.find("img").add(e.filter("img")), g = f.length, h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", i = [];
        return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function() {
            var a = this.src;
            this.src = h, this.src = a;
        }), e;
    };
    var x = function(b) {
        a.console && a.console.error(b);
    };
    b.fn.isotope = function(a, c) {
        if ("string" == typeof a) {
            var d = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = b.data(this, "isotope");
                return c ? b.isFunction(c[a]) && "_" !== a.charAt(0) ? void c[a].apply(c, d) : void x("no such method '" + a + "' for isotope instance") : void x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
            });
        } else this.each(function() {
            var d = b.data(this, "isotope");
            d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c));
        });
        return this;
    };
}(window, jQuery), function(a, b) {
    function c(a) {
        var b = a.length, c = ka.type(a);
        return ka.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a) {
        var b = za[a] = {};
        return ka.each(a.match(ma) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function e(a, c, d, e) {
        if (ka.acceptData(a)) {
            var f, g, h = ka.expando, i = a.nodeType, j = i ? ka.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = ba.pop() || ka.guid++ : h), 
            j[k] || (j[k] = i ? {} : {
                toJSON: ka.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = ka.extend(j[k], c) : j[k].data = ka.extend(j[k].data, c)), 
            g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[ka.camelCase(c)] = d), 
            "string" == typeof c ? (f = g[c], null == f && (f = g[ka.camelCase(c)])) : f = g, 
            f;
        }
    }
    function f(a, b, c) {
        if (ka.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? ka.cache : a, i = f ? a[ka.expando] : ka.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    ka.isArray(b) ? b = b.concat(ka.map(b, ka.camelCase)) : b in d ? b = [ b ] : (b = ka.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    for (;e--; ) delete d[b[e]];
                    if (c ? !h(d) : !ka.isEmptyObject(d)) return;
                }
                (c || (delete g[i].data, h(g[i]))) && (f ? ka.cleanData([ a ], !0) : ka.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null);
            }
        }
    }
    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Ba, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Aa.test(d) ? ka.parseJSON(d) : d;
                } catch (f) {}
                ka.data(a, c, d);
            } else d = b;
        }
        return d;
    }
    function h(a) {
        var b;
        for (b in a) if (("data" !== b || !ka.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function i() {
        return !0;
    }
    function j() {
        return !1;
    }
    function k() {
        try {
            return Y.activeElement;
        } catch (a) {}
    }
    function l(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    function m(a, b, c) {
        if (ka.isFunction(b)) return ka.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return ka.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Qa.test(b)) return ka.filter(b, a, c);
            b = ka.filter(b, a);
        }
        return ka.grep(a, function(a) {
            return ka.inArray(a, b) >= 0 !== c;
        });
    }
    function n(a) {
        var b = Ua.split("|"), c = a.createDocumentFragment();
        if (c.createElement) for (;b.length; ) c.createElement(b.pop());
        return c;
    }
    function o(a, b) {
        return ka.nodeName(a, "table") && ka.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function p(a) {
        return a.type = (null !== ka.find.attr(a, "type")) + "/" + a.type, a;
    }
    function q(a) {
        var b = eb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ka._data(c, "globalEval", !b || ka._data(b[d], "globalEval"));
    }
    function s(a, b) {
        if (1 === b.nodeType && ka.hasData(a)) {
            var c, d, e, f = ka._data(a), g = ka._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) ka.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = ka.extend({}, g.data));
        }
    }
    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ka.support.noCloneEvent && b[ka.expando]) {
                e = ka._data(b);
                for (d in e.events) ka.removeEvent(b, d, e.handle);
                b.removeAttribute(ka.expando);
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            ka.support.html5Clone && a.innerHTML && !ka.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    function u(a, c) {
        var d, e, f = 0, g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || ka.nodeName(e, c) ? g.push(e) : ka.merge(g, u(e, c));
        return c === b || c && ka.nodeName(a, c) ? ka.merge([ a ], g) : g;
    }
    function v(a) {
        bb.test(a.type) && (a.defaultChecked = a.checked);
    }
    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yb.length; e--; ) if (b = yb[e] + c, 
        b in a) return b;
        return d;
    }
    function x(a, b) {
        return a = b || a, "none" === ka.css(a, "display") || !ka.contains(a.ownerDocument, a);
    }
    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ka._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = ka._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), 
        (c && "none" !== c || !e) && ka._data(d, "olddisplay", e ? c : ka.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function z(a, b, c) {
        var d = rb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ka.css(a, c + xb[f], !0, e)), 
        d ? ("content" === c && (g -= ka.css(a, "padding" + xb[f], !0, e)), "margin" !== c && (g -= ka.css(a, "border" + xb[f] + "Width", !0, e))) : (g += ka.css(a, "padding" + xb[f], !0, e), 
        "padding" !== c && (g += ka.css(a, "border" + xb[f] + "Width", !0, e)));
        return g;
    }
    function B(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = kb(a), g = ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lb(a, b, f), (0 > e || null == e) && (e = a.style[b]), sb.test(e)) return e;
            d = g && (ka.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function C(a) {
        var b = Y, c = ub[a];
        return c || (c = D(a, b), "none" !== c && c || (jb = (jb || ka("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (jb[0].contentWindow || jb[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = D(a, b), jb.detach()), ub[a] = c), c;
    }
    function D(a, b) {
        var c = ka(b.createElement(a)).appendTo(b.body), d = ka.css(c[0], "display");
        return c.remove(), d;
    }
    function E(a, b, c, d) {
        var e;
        if (ka.isArray(b)) ka.each(b, function(b, e) {
            c || Ab.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== ka.type(b)) d(a, b); else for (e in b) E(a + "[" + e + "]", b[e], c, d);
    }
    function F(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(ma) || [];
            if (ka.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function G(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, ka.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), 
                f(k), !1);
            }), j;
        }
        var g = {}, h = a === Rb;
        return f(c.dataTypes[0]) || !g["*"] && f("*");
    }
    function H(a, c) {
        var d, e, f = ka.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && ka.extend(!0, a, d), a;
    }
    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; ) j.shift(), 
        f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break;
        }
        if (j[0] in d) g = j[0]; else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break;
                }
                e || (e = h);
            }
            g = g || e;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b;
    }
    function J(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function K() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function M() {
        return setTimeout(function() {
            $b = b;
        }), $b = ka.now();
    }
    function N(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function O(a, b, c) {
        var d, e, f = 0, g = dc.length, h = ka.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = $b || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: ka.extend({}, b),
            opts: ka.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || M(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = ka.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++) if (d = dc[f].call(j, a, k, j.opts)) return d;
        return ka.map(k, N, j), ka.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        ka.fx.timer(ka.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function P(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = ka.camelCase(c), e = b[d], f = a[c], ka.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ka.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this, k = {}, l = a.style, m = a.nodeType && x(a), n = ka._data(a, "fxshow");
        c.queue || (h = ka._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, 
        i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--, ka.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ l.overflow, l.overflowX, l.overflowY ], 
        "inline" === ka.css(a, "display") && "none" === ka.css(a, "float") && (ka.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), 
        c.overflow && (l.overflow = "hidden", ka.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], ac.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
            k[d] = n && n[d] || ka.style(a, d);
        }
        if (!ka.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = ka._data(a, "fxshow", {}), f && (n.hidden = !m), 
            m ? ka(a).show() : j.done(function() {
                ka(a).hide();
            }), j.done(function() {
                var b;
                ka._removeData(a, "fxshow");
                for (b in k) ka.style(a, b, k[b]);
            });
            for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e);
    }
    function S(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function T(a) {
        return ka.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    var U, V, W = typeof b, X = a.location, Y = a.document, Z = Y.documentElement, $ = a.jQuery, _ = a.$, aa = {}, ba = [], ca = "1.10.2", da = ba.concat, ea = ba.push, fa = ba.slice, ga = ba.indexOf, ha = aa.toString, ia = aa.hasOwnProperty, ja = ca.trim, ka = function(a, b) {
        return new ka.fn.init(a, b, V);
    }, la = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ma = /\S+/g, na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, pa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, qa = /^[\],:{}\s]*$/, ra = /(?:^|:|,)(?:\s*\[)+/g, sa = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ta = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ua = /^-ms-/, va = /-([\da-z])/gi, wa = function(a, b) {
        return b.toUpperCase();
    }, xa = function(a) {
        (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (ya(), 
        ka.ready());
    }, ya = function() {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xa, !1), a.removeEventListener("load", xa, !1)) : (Y.detachEvent("onreadystatechange", xa), 
        a.detachEvent("onload", xa));
    };
    ka.fn = ka.prototype = {
        jquery: ca,
        constructor: ka,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : oa.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof ka ? c[0] : c, ka.merge(this, ka.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), 
                    pa.test(e[1]) && ka.isPlainObject(c)) for (e in c) ka.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                if (f = Y.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f;
                }
                return this.context = Y, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ka.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), ka.makeArray(a, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return fa.call(this);
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = ka.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return ka.each(this, a, b);
        },
        ready: function(a) {
            return ka.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(fa.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(ka.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: ea,
        sort: [].sort,
        splice: [].splice
    }, ka.fn.init.prototype = ka.fn, ka.extend = ka.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ka.isFunction(h) || (h = {}), 
        j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], 
        d = f[e], h !== d && (k && d && (ka.isPlainObject(d) || (c = ka.isArray(d))) ? (c ? (c = !1, 
        g = a && ka.isArray(a) ? a : []) : g = a && ka.isPlainObject(a) ? a : {}, h[e] = ka.extend(k, g, d)) : d !== b && (h[e] = d));
        return h;
    }, ka.extend({
        expando: "jQuery" + (ca + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === ka && (a.$ = _), b && a.jQuery === ka && (a.jQuery = $), ka;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ka.readyWait++ : ka.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--ka.readyWait : !ka.isReady) {
                if (!Y.body) return setTimeout(ka.ready);
                ka.isReady = !0, a !== !0 && --ka.readyWait > 0 || (U.resolveWith(Y, [ ka ]), ka.fn.trigger && ka(Y).trigger("ready").off("ready"));
            }
        },
        isFunction: function(a) {
            return "function" === ka.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === ka.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ha.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== ka.type(a) || a.nodeType || ka.isWindow(a)) return !1;
            try {
                if (a.constructor && !ia.call(a, "constructor") && !ia.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (d) {
                return !1;
            }
            if (ka.support.ownLast) for (c in a) return ia.call(a, c);
            for (c in a) ;
            return c === b || ia.call(a, c);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Y;
            var d = pa.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = ka.buildFragment([ a ], b, e), e && ka(e).remove(), 
            ka.merge([], d.childNodes));
        },
        parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = ka.trim(c), 
            c && qa.test(c.replace(sa, "@").replace(ta, "]").replace(ra, ""))) ? Function("return " + c)() : (ka.error("Invalid JSON: " + c), 
            b);
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser(), d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), 
                d.async = "false", d.loadXML(c));
            } catch (f) {
                d = b;
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ka.error("Invalid XML: " + c), 
            d;
        },
        noop: function() {},
        globalEval: function(b) {
            b && ka.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(ua, "ms-").replace(va, wa);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: ja && !ja.call("\ufeff ") ? function(a) {
            return null == a ? "" : ja.call(a);
        } : function(a) {
            return null == a ? "" : (a + "").replace(na, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ka.merge(d, "string" == typeof a ? [ a ] : a) : ea.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (ga) return ga.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else for (;c[f] !== b; ) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a) e = b(a[f], f, d), 
            null != e && (i[i.length] = e);
            return da.apply([], i);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), ka.isFunction(a) ? (d = fa.call(arguments, 2), 
            e = function() {
                return a.apply(c || this, d.concat(fa.call(arguments)));
            }, e.guid = a.guid = a.guid || ka.guid++, e) : b;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === ka.type(d)) {
                f = !0;
                for (i in d) ka.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, ka.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), 
            c = null) : (k = c, c = function(a, b, c) {
                return k.call(ka(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), ka.ready.promise = function(b) {
        if (!U) if (U = ka.Deferred(), "complete" === Y.readyState) setTimeout(ka.ready); else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xa, !1), 
        a.addEventListener("load", xa, !1); else {
            Y.attachEvent("onreadystatechange", xa), a.attachEvent("onload", xa);
            var c = !1;
            try {
                c = null == a.frameElement && Y.documentElement;
            } catch (d) {}
            c && c.doScroll && function e() {
                if (!ka.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    ya(), ka.ready();
                }
            }();
        }
        return U.promise(b);
    }, ka.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        aa["[object " + b + "]"] = b.toLowerCase();
    }), V = ka(Y), function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = ta.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return aa.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return aa.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wa, "\\$&") : b.setAttribute("id", l), 
                        l = "[id='" + l + "'] ", i = j.length; i--; ) j[i] = l + n(j[i]);
                        o = na.test(a) && b.parentNode || b, p = j.join(",");
                    }
                    if (p) try {
                        return aa.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        k || b.removeAttribute("id");
                    }
                }
            }
            return v(a.replace(ja, "$1"), b, c, d);
        }
        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d;
            }
            var b = [];
            return a;
        }
        function e(a) {
            return a[N] = !0, a;
        }
        function f(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) z.attrHandle[c[d]] = b;
        }
        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function k(a) {
            return e(function(b) {
                return b = +b, e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function l() {}
        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h; ) {
                (!d || (e = la.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = ma.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ja, " ")
                }), h = h.slice(d.length));
                for (g in z.filter) !(e = ra[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0);
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function o(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), 
                (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === y) return h === !0;
                } else if (i = j[d] = [ k ], i[1] = a(b, c, g) || y, i[1] === !0) return !0;
            };
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = e || u(b || "*", h.nodeType ? [ h ] : h, []), r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d) for (j = q(s, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--; ) (l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i);
                        }
                        for (k = s.length; k--; ) (l = s[k]) && (j = f ? ca.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l));
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : aa.apply(g, s);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b;
            }, g, !0), j = o(function(a) {
                return ca.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = z.relative[a[h].type]) k = [ o(p(k), c) ]; else {
                if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !z.relative[a[d].type]; d++) ;
                    return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ja, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a));
                }
                k.push(c);
            }
            return p(k);
        }
        function t(a, b) {
            var d = 0, f = b.length > 0, g = a.length > 0, h = function(e, h, i, j, k) {
                var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, v = e || g && z.find.TAG("*", k && h.parentNode || h), w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; ) if (n(l, h, i)) {
                            j.push(l);
                            break;
                        }
                        t && (P = w, y = ++d);
                    }
                    f && ((l = !n && l) && p--, e && s.push(l));
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++]; ) n(s, o, h, i);
                    if (e) {
                        if (p > 0) for (;r--; ) s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o);
                    }
                    aa.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
                }
                return t && (P = w, D = u), s;
            };
            return f ? e(h) : h;
        }
        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d;
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xa, ya), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length);
                }
                for (e = ra.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]); ) if ((i = z.find[h]) && (d = i(g.matches[0].replace(xa, ya), na.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a) return aa.apply(c, d), c;
                    break;
                }
            }
            return C(a, j)(d, b, !I, c, na.test(a)), c;
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date(), O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function(a, b) {
            return a === b ? (U = !0, 0) : 0;
        }, W = typeof b, X = 1 << 31, Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, aa = Z.push, ba = Z.slice, ca = Z.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, da = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ea = "[\\x20\\t\\r\\n\\f]", fa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ga = fa.replace("w", "w#"), ha = "\\[" + ea + "*(" + fa + ")" + ea + "*(?:([*^$|!~]?=)" + ea + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ga + ")|)|)" + ea + "*\\]", ia = ":(" + fa + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ha.replace(3, 8) + ")*)|.*)\\)|)", ja = RegExp("^" + ea + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ea + "+$", "g"), la = RegExp("^" + ea + "*," + ea + "*"), ma = RegExp("^" + ea + "*([>+~]|" + ea + ")" + ea + "*"), na = RegExp(ea + "*[+~]"), oa = RegExp("=" + ea + "*([^\\]'\"]*)" + ea + "*\\]", "g"), pa = RegExp(ia), qa = RegExp("^" + ga + "$"), ra = {
            ID: RegExp("^#(" + fa + ")"),
            CLASS: RegExp("^\\.(" + fa + ")"),
            TAG: RegExp("^(" + fa.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ha),
            PSEUDO: RegExp("^" + ia),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ea + "*(even|odd|(([+-]|)(\\d*)n|)" + ea + "*(?:([+-]|)" + ea + "*(\\d+)|))" + ea + "*\\)|)", "i"),
            bool: RegExp("^(?:" + da + ")$", "i"),
            needsContext: RegExp("^" + ea + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ea + "*((?:-\\d)?\\d*)" + ea + "*\\)|)(?=[^-]|$)", "i")
        }, sa = /^[^{]+\{\s*\[native \w/, ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ua = /^(?:input|select|textarea|button)$/i, va = /^h\d$/i, wa = /'|\\/g, xa = RegExp("\\\\([\\da-f]{1,6}" + ea + "?|(" + ea + ")|.)", "ig"), ya = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d);
        };
        try {
            aa.apply(Z = ba.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType;
        } catch (za) {
            aa = {
                apply: Z.length ? function(a, b) {
                    _.apply(a, ba.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        B = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, x = c.support = {}, F = c.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : O, d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, 
            I = !B(c), d && d.attachEvent && d !== d.top && d.attachEvent("onbeforeunload", function() {
                F();
            }), x.attributes = f(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length;
            }), x.getElementsByClassName = f(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length;
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, z.filter.ID = function(a) {
                var b = a.replace(xa, ya);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xa, ya);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), z.find.TAG = x.getElementsByTagName ? function(a, c) {
                return typeof c.getElementsByTagName !== W ? c.getElementsByTagName(a) : b;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, z.find.CLASS = x.getElementsByClassName && function(a, c) {
                return typeof c.getElementsByClassName !== W && I ? c.getElementsByClassName(a) : b;
            }, K = [], J = [], (x.qsa = sa.test(c.querySelectorAll)) && (f(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + ea + "*(?:value|" + da + ")"), 
                a.querySelectorAll(":checked").length || J.push(":checked");
            }), f(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + ea + "*(?:''|\"\")"), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (x.matchesSelector = sa.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ia);
            }), J = J.length && RegExp(J.join("|")), K = K.length && RegExp(K.join("|")), M = sa.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, V = H.compareDocumentPosition ? function(a, b) {
                if (a === b) return U = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || M(O, a) ? -1 : b === c || M(O, b) ? 1 : E ? ca.call(E, a) - ca.call(E, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var d, e = 0, f = a.parentNode, g = b.parentNode, i = [ a ], j = [ b ];
                if (a === b) return U = !0, 0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : E ? ca.call(E, a) - ca.call(E, b) : 0;
                if (f === g) return h(a, b);
                for (d = a; d = d.parentNode; ) i.unshift(d);
                for (d = b; d = d.parentNode; ) j.unshift(d);
                for (;i[e] === j[e]; ) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, c) : G;
        }, c.matches = function(a, b) {
            return c(a, null, null, b);
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(oa, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                var d = L.call(a, b);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return c(b, G, null, [ a ]).length > 0;
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()], e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e;
        }, c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }, c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return a;
        }, A = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d]; d++) c += A(b);
            return c;
        }, z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: ra,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(xa, ya), a[3] = (a[4] || a[5] || "").replace(xa, ya), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return ra.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pa.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), 
                    a[2] = d.slice(0, c)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(xa, ya).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = RegExp("(^|" + ea + ")" + a + "(" + ea + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || 0 === m % d && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [ a, a, "", b ], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--; ) d = ca.call(a, e[g]), a[d] = !(c[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, d);
                    }) : f;
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [], c = [], d = C(a.replace(ja, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0;
                    };
                }),
                contains: e(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1;
                    };
                }),
                lang: e(function(a) {
                    return qa.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xa, ya).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !z.pseudos.empty(a);
                },
                header: function(a) {
                    return va.test(a.nodeName);
                },
                input: function(a) {
                    return ua.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                first: k(function() {
                    return [ 0 ];
                }),
                last: k(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: k(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d; ) a.push(d);
                    return a;
                })
            }
        }, z.pseudos.nth = z.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l(), C = c.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d));
            }
            return f;
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), 
        x.sortDetached = f(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), f(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || g("type|href|height|width", function(a, c, d) {
            return d ? b : a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2);
        }), x.attributes && f(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || g("value", function(a, c, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? b : a.defaultValue;
        }), f(function(a) {
            return null == a.getAttribute("disabled");
        }) || g(da, function(a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && e.specified ? e.value : a[c] === !0 ? c.toLowerCase() : null;
        }), ka.find = c, ka.expr = c.selectors, ka.expr[":"] = ka.expr.pseudos, ka.unique = c.uniqueSort, 
        ka.text = c.getText, ka.isXMLDoc = c.isXML, ka.contains = c.contains;
    }(a);
    var za = {};
    ka.Callbacks = function(a) {
        a = "string" == typeof a ? za[a] || d(a) : ka.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++) if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                e = !1;
                break;
            }
            c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable());
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        ka.each(b, function(b, c) {
                            var e = ka.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c);
                        });
                    }(arguments), c ? g = j.length : e && (i = b, l(e));
                }
                return this;
            },
            remove: function() {
                return j && ka.each(arguments, function(a, b) {
                    for (var d; (d = ka.inArray(b, j, d)) > -1; ) j.splice(d, 1), c && (g >= d && g--, 
                    h >= d && h--);
                }), this;
            },
            has: function(a) {
                return a ? ka.inArray(a, j) > -1 : !(!j || !j.length);
            },
            empty: function() {
                return j = [], g = 0, this;
            },
            disable: function() {
                return j = k = e = b, this;
            },
            disabled: function() {
                return !j;
            },
            lock: function() {
                return k = b, e || m.disable(), this;
            },
            locked: function() {
                return !k;
            },
            fireWith: function(a, b) {
                return !j || f && !k || (b = b || [], b = [ a, b.slice ? b.slice() : b ], c ? k.push(b) : l(b)), 
                this;
            },
            fire: function() {
                return m.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!f;
            }
        };
        return m;
    }, ka.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", ka.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ka.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ka.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return ka.Deferred(function(c) {
                        ka.each(b, function(b, f) {
                            var g = f[0], h = ka.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && ka.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? ka.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, ka.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = fa.call(arguments), g = f.length, h = 1 !== g || a && ka.isFunction(a.promise) ? g : 0, i = 1 === h ? a : ka.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? fa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && ka.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    }), ka.support = function(b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], 
        d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, 
        b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, 
        b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), 
        b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), 
        b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, 
        b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, 
        b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, 
        b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, 
        b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test;
        } catch (m) {
            b.deleteExpando = !1;
        }
        e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), 
        e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, 
        e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), 
        g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        l.attachEvent && (l.attachEvent("onclick", function() {
            b.noCloneEvent = !1;
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in ka(b)) break;
        return b.ownLast = "0" !== k, ka(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", 
            b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            ka.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === l.offsetWidth;
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, 
            d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", 
            b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", 
            l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), 
            g.removeChild(c), c = l = e = d = null);
        }), c = f = g = h = d = e = null, b;
    }({});
    var Aa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ba = /([A-Z])/g;
    ka.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? ka.cache[a[ka.expando]] : a[ka.expando], !!a && !h(a);
        },
        data: function(a, b, c) {
            return e(a, b, c);
        },
        removeData: function(a, b) {
            return f(a, b);
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return f(a, b, !0);
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && ka.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b;
        }
    }), ka.fn.extend({
        data: function(a, c) {
            var d, e, f = null, h = 0, i = this[0];
            if (a === b) {
                if (this.length && (f = ka.data(i), 1 === i.nodeType && !ka._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = ka.camelCase(e.slice(5)), 
                    g(i, e, f[e]));
                    ka._data(i, "parsedAttrs", !0);
                }
                return f;
            }
            return "object" == typeof a ? this.each(function() {
                ka.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                ka.data(this, a, c);
            }) : i ? g(i, a, ka.data(i, a)) : null;
        },
        removeData: function(a) {
            return this.each(function() {
                ka.removeData(this, a);
            });
        }
    }), ka.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = ka._data(a, c), d && (!e || ka.isArray(d) ? e = ka._data(a, c, ka.makeArray(d)) : e.push(d)), 
            e || []) : b;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ka.queue(a, b), d = c.length, e = c.shift(), f = ka._queueHooks(a, b), g = function() {
                ka.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ka._data(a, c) || ka._data(a, c, {
                empty: ka.Callbacks("once memory").add(function() {
                    ka._removeData(a, b + "queue"), ka._removeData(a, c);
                })
            });
        }
    }), ka.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? ka.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = ka.queue(this, a, c);
                ka._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ka.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                ka.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            return a = ka.fx ? ka.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = ka.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; ) d = ka._data(g[h], a + "queueHooks"), 
            d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var Ca, Da, Ea = /[\t\r\n\f]/g, Fa = /\r/g, Ga = /^(?:input|select|textarea|button|object)$/i, Ha = /^(?:a|area)$/i, Ia = /^(?:checked|selected)$/i, Ja = ka.support.getSetAttribute, Ka = ka.support.input;
    ka.fn.extend({
        attr: function(a, b) {
            return ka.access(this, ka.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                ka.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return ka.access(this, ka.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = ka.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a];
                } catch (c) {}
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(ma) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : " ")) {
                for (f = 0; e = b[f++]; ) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = ka.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(ma) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                c.className = a ? ka.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ka.isFunction(a) ? this.each(function(c) {
                ka(this).toggleClass(a.call(this, c, this.className, b), b);
            }) : this.each(function() {
                if ("string" === c) for (var b, d = 0, e = ka(this), f = a.match(ma) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === W || "boolean" === c) && (this.className && ka._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : ka._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ea, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = ka.isFunction(a), this.each(function(c) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, c, ka(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ka.isArray(f) && (f = ka.map(f, function(a) {
                    return null == a ? "" : a + "";
                })), d = ka.valHooks[this.type] || ka.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f));
            })) : f ? (d = ka.valHooks[f.type] || ka.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, 
            "string" == typeof c ? c.replace(Fa, "") : null == c ? "" : c)) : void 0;
        }
    }), ka.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ka.find.attr(a, "value");
                    return null != b ? b : a.text;
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (ka.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ka.nodeName(c.parentNode, "optgroup"))) {
                        if (b = ka(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ka.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = ka.inArray(ka(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? ka.prop(a, c, d) : (1 === g && ka.isXMLDoc(a) || (c = c.toLowerCase(), 
            e = ka.attrHooks[c] || (ka.expr.match.bool.test(c) ? Da : Ca)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = ka.find.attr(a, c), 
            null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), 
            d) : (ka.removeAttr(a, c), b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(ma);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = ka.propFix[c] || c, ka.expr.match.bool.test(c) ? Ka && Ja || !Ia.test(c) ? a[d] = !1 : a[ka.camelCase("default-" + c)] = a[d] = !1 : ka.attr(a, c, ""), 
            a.removeAttribute(Ja ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ka.support.radioValue && "radio" === b && ka.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !ka.isXMLDoc(a), g && (c = ka.propFix[c] || c, 
            f = ka.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ka.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Ga.test(a.nodeName) || Ha.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), Da = {
        set: function(a, b, c) {
            return b === !1 ? ka.removeAttr(a, c) : Ka && Ja || !Ia.test(c) ? a.setAttribute(!Ja && ka.propFix[c] || c, c) : a[ka.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, ka.each(ka.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = ka.expr.attrHandle[c] || ka.find.attr;
        ka.expr.attrHandle[c] = Ka && Ja || !Ia.test(c) ? function(a, c, e) {
            var f = ka.expr.attrHandle[c], g = e ? b : (ka.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return ka.expr.attrHandle[c] = f, g;
        } : function(a, c, d) {
            return d ? b : a[ka.camelCase("default-" + c)] ? c.toLowerCase() : null;
        };
    }), Ka && Ja || (ka.attrHooks.value = {
        set: function(a, c, d) {
            return ka.nodeName(a, "input") ? (a.defaultValue = c, b) : Ca && Ca.set(a, c, d);
        }
    }), Ja || (Ca = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", 
            "value" === d || c === a.getAttribute(d) ? c : b;
        }
    }, ka.expr.attrHandle.id = ka.expr.attrHandle.name = ka.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null;
    }, ka.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b;
        },
        set: Ca.set
    }, ka.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Ca.set(a, "" === b ? !1 : b, c);
        }
    }, ka.each([ "width", "height" ], function(a, c) {
        ka.attrHooks[c] = {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b;
            }
        };
    })), ka.support.hrefNormalized || ka.each([ "href", "src" ], function(a, b) {
        ka.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), ka.support.style || (ka.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    }), ka.support.optSelected || (ka.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), ka.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ka.propFix[this.toLowerCase()] = this;
    }), ka.support.enctype || (ka.propFix.enctype = "encoding"), ka.each([ "radio", "checkbox" ], function() {
        ka.valHooks[this] = {
            set: function(a, c) {
                return ka.isArray(c) ? a.checked = ka.inArray(ka(a).val(), c) >= 0 : b;
            }
        }, ka.support.checkOn || (ka.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var La = /^(?:input|select|textarea)$/i, Ma = /^key/, Na = /^(?:mouse|contextmenu)|click/, Oa = /^(?:focusinfocus|focusoutblur)$/, Pa = /^([^.]*)(?:\.(.+)|)$/;
    ka.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = ka._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ka.guid++), 
                (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                    return typeof ka === W || a && ka.event.triggered === a.type ? b : ka.event.dispatch.apply(l.elem, arguments);
                }, l.elem = a), c = (c || "").match(ma) || [ "" ], i = c.length; i--; ) g = Pa.exec(c[i]) || [], 
                o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = ka.event.special[o] || {}, 
                o = (f ? k.delegateType : k.bindType) || o, k = ka.event.special[o] || {}, m = ka.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && ka.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), 
                k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), 
                ka.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ka.hasData(a) && ka._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ma) || [ "" ], j = b.length; j--; ) if (h = Pa.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = ka.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    i = f = m.length; f--; ) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), 
                    g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ka.removeEvent(a, n, q.handle), 
                    delete k[n]);
                } else for (n in k) ka.event.remove(a, n + b[j], c, d, !0);
                ka.isEmptyObject(k) && (delete q.handle, ka._removeData(a, "events"));
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [ e || Y ], o = ia.call(c, "type") ? c.type : c, p = ia.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Oa.test(o + ka.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), 
            o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[ka.expando] ? c : new ka.Event(o, "object" == typeof c && c), 
            c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            c.result = b, c.target || (c.target = e), d = null == d ? [ c ] : ka.makeArray(d, [ c ]), 
            k = ka.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !ka.isWindow(e)) {
                    for (j = k.delegateType || o, Oa.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), 
                    l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a);
                }
                for (m = 0; (i = n[m++]) && !c.isPropagationStopped(); ) c.type = m > 1 ? j : k.bindType || o, 
                g = (ka._data(i, "events") || {})[c.type] && ka._data(i, "handle"), g && g.apply(i, d), 
                g = h && i[h], g && ka.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && ka.acceptData(e) && h && e[o] && !ka.isWindow(e)) {
                    l = e[h], l && (e[h] = null), ka.event.triggered = o;
                    try {
                        e[o]();
                    } catch (q) {}
                    ka.event.triggered = b, l && (e[h] = l);
                }
                return c.result;
            }
        },
        dispatch: function(a) {
            a = ka.event.fix(a);
            var c, d, e, f, g, h = [], i = fa.call(arguments), j = (ka._data(this, "events") || {})[a.type] || [], k = ka.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = ka.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                g = 0; (e = f.handlers[g++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                a.data = e.data, d = ((ka.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ka(d, this).index(j) >= 0 : ka.find(d, this, null, [ j ]).length), 
                f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        fix: function(a) {
            if (a[ka.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new ka.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, 
                f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), 
                a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), 
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : b;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ka.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : b;
                },
                _default: function(a) {
                    return ka.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ka.extend(new ka.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ka.event.trigger(e, null, b) : ka.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, ka.removeEvent = Y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c));
    }, ka.Event = function(a, c) {
        return this instanceof ka.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, 
        c && ka.extend(this, c), this.timeStamp = a && a.timeStamp || ka.now(), this[ka.expando] = !0, 
        b) : new ka.Event(a, c);
    }, ka.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i, this.stopPropagation();
        }
    }, ka.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        ka.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !ka.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), ka.support.submitBubbles || (ka.event.special.submit = {
        setup: function() {
            return ka.nodeName(this, "form") ? !1 : (ka.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target, d = ka.nodeName(c, "input") || ka.nodeName(c, "button") ? c.form : b;
                d && !ka._data(d, "submitBubbles") && (ka.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), ka._data(d, "submitBubbles", !0));
            }), b);
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ka.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return ka.nodeName(this, "form") ? !1 : (ka.event.remove(this, "._submit"), b);
        }
    }), ka.support.changeBubbles || (ka.event.special.change = {
        setup: function() {
            return La.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ka.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), ka.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ka.event.simulate("change", this, a, !0);
            })), !1) : (ka.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                La.test(b.nodeName) && !ka._data(b, "changeBubbles") && (ka.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ka.event.simulate("change", this.parentNode, a, !0);
                }), ka._data(b, "changeBubbles", !0));
            }), b);
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b;
        },
        teardown: function() {
            return ka.event.remove(this, "._change"), !La.test(this.nodeName);
        }
    }), ka.support.focusinBubbles || ka.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            ka.event.simulate(b, a.target, ka.event.fix(a), !0);
        };
        ka.event.special[b] = {
            setup: function() {
                0 === c++ && Y.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && Y.removeEventListener(a, d, !0);
            }
        };
    }), ka.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this;
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, 
            d = b) : (e = d, d = c, c = b)), e === !1) e = j; else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return ka().off(a), h.apply(this, arguments);
            }, e.guid = h.guid || (h.guid = ka.guid++)), this.each(function() {
                ka.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ka(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), 
            this.each(function() {
                ka.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                ka.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? ka.event.trigger(a, c, d, !0) : b;
        }
    });
    var Qa = /^.[^:#\[\.,]*$/, Ra = /^(?:parents|prev(?:Until|All))/, Sa = ka.expr.match.needsContext, Ta = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ka.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(ka(a).filter(function() {
                for (b = 0; e > b; b++) if (ka.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) ka.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ka.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        has: function(a) {
            var b, c = ka(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (ka.contains(this, c[b])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0));
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1));
        },
        is: function(a) {
            return !!m(this, "string" == typeof a && Sa.test(a) ? ka(a) : a || [], !1).length;
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sa.test(a) || "string" != typeof a ? ka(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && ka.find.matchesSelector(c, a))) {
                c = f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? ka.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? ka.inArray(this[0], ka(a)) : ka.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? ka(a, b) : ka.makeArray(a && a.nodeType ? [ a ] : a), d = ka.merge(this.get(), c);
            return this.pushStack(ka.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), ka.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return ka.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return ka.dir(a, "parentNode", c);
        },
        next: function(a) {
            return l(a, "nextSibling");
        },
        prev: function(a) {
            return l(a, "previousSibling");
        },
        nextAll: function(a) {
            return ka.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return ka.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return ka.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return ka.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return ka.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return ka.sibling(a.firstChild);
        },
        contents: function(a) {
            return ka.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ka.merge([], a.childNodes);
        }
    }, function(a, b) {
        ka.fn[a] = function(c, d) {
            var e = ka.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ka.filter(d, e)), 
            this.length > 1 && (Ta[a] || (e = ka.unique(e)), Ra.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    }), ka.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ka.find.matchesSelector(d, a) ? [ d ] : [] : ka.find.matches(a, ka.grep(b, function(a) {
                return 1 === a.nodeType;
            }));
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ka(f).is(d)); ) 1 === f.nodeType && e.push(f), 
            f = f[c];
            return e;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var Ua = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Va = / jQuery\d+="(?:null|\d+)"/g, Wa = RegExp("<(?:" + Ua + ")[\\s/>]", "i"), Xa = /^\s+/, Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Za = /<([\w:]+)/, $a = /<tbody/i, _a = /<|&#?\w+;/, ab = /<(?:script|style|link)/i, bb = /^(?:checkbox|radio)$/i, cb = /checked\s*(?:[^=]|=\s*.checked.)/i, db = /^$|\/(?:java|ecma)script/i, eb = /^true\/(.*)/, fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, gb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: ka.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, hb = n(Y), ib = hb.appendChild(Y.createElement("div"));
    gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, 
    gb.th = gb.td, ka.fn.extend({
        text: function(a) {
            return ka.access(this, function(a) {
                return a === b ? ka.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? ka.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ka.cleanData(u(c)), 
            c.parentNode && (b && ka.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ka.cleanData(u(a, !1)); a.firstChild; ) a.removeChild(a.firstChild);
                a.options && ka.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return ka.clone(this, a, b);
            });
        },
        html: function(a) {
            return ka.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Va, "") : b;
                if (!("string" != typeof a || ab.test(a) || !ka.support.htmlSerialize && Wa.test(a) || !ka.support.leadingWhitespace && Xa.test(a) || gb[(Za.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(Ya, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ka.cleanData(u(c, !1)), 
                        c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = ka.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), ka(this).remove(), e.insertBefore(c, d));
            }, !0), b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b, c) {
            a = da.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, m = k - 1, n = a[0], o = ka.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || ka.support.checkClone) && cb.test(n)) return this.each(function(d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c);
            });
            if (k && (i = ka.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 
            1 === i.childNodes.length && (i = d), d)) {
                for (g = ka.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = ka.clone(e, !0, !0), 
                f && ka.merge(g, u(e, "script"))), b.call(this[j], e, j);
                if (f) for (h = g[g.length - 1].ownerDocument, ka.map(g, q), j = 0; f > j; j++) e = g[j], 
                db.test(e.type || "") && !ka._data(e, "globalEval") && ka.contains(h, e) && (e.src ? ka._evalUrl(e.src) : ka.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fb, "")));
                i = d = null;
            }
            return this;
        }
    }), ka.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ka.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ka(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), 
            ka(f[d])[b](c), ea.apply(e, c.get());
            return this.pushStack(e);
        };
    }), ka.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ka.contains(a.ownerDocument, a);
            if (ka.support.html5Clone || ka.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ib.innerHTML = a.outerHTML, 
            ib.removeChild(f = ib.firstChild)), !(ka.support.noCloneEvent && ka.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ka.isXMLDoc(a))) for (d = u(f), 
            h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b) if (c) for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]); else s(a, f);
            return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++) if (f = a[p], 
            f || 0 === f) if ("object" === ka.type(f)) ka.merge(o, f.nodeType ? [ f ] : f); else if (_a.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Za.exec(f) || [ "", "" ])[1].toLowerCase(), 
                k = gb[i] || gb._default, h.innerHTML = k[1] + f.replace(Ya, "<$1></$2>") + k[2], 
                e = k[0]; e--; ) h = h.lastChild;
                if (!ka.support.leadingWhitespace && Xa.test(f) && o.push(b.createTextNode(Xa.exec(f)[0])), 
                !ka.support.tbody) for (f = "table" !== i || $a.test(f) ? "<table>" !== k[1] || $a.test(f) ? 0 : h : h.firstChild, 
                e = f && f.childNodes.length; e--; ) ka.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ka.merge(o, h.childNodes), h.textContent = ""; h.firstChild; ) h.removeChild(h.firstChild);
                h = m.lastChild;
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), ka.support.appendChecked || ka.grep(u(o, "input"), v), 
            p = 0; f = o[p++]; ) if ((!d || -1 === ka.inArray(f, d)) && (g = ka.contains(f.ownerDocument, f), 
            h = u(m.appendChild(f), "script"), g && r(h), c)) for (e = 0; f = h[e++]; ) db.test(f.type || "") && c.push(f);
            return h = null, m;
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ka.expando, i = ka.cache, j = ka.support.deleteExpando, k = ka.event.special; null != (c = a[g]); g++) if ((b || ka.acceptData(c)) && (e = c[h], 
            f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? ka.event.remove(c, d) : ka.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, 
                ba.push(e));
            }
        },
        _evalUrl: function(a) {
            return ka.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), ka.fn.extend({
        wrapAll: function(a) {
            if (ka.isFunction(a)) return this.each(function(b) {
                ka(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = ka(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return ka.isFunction(a) ? this.each(function(b) {
                ka(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = ka(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = ka.isFunction(a);
            return this.each(function(c) {
                ka(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                ka.nodeName(this, "body") || ka(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var jb, kb, lb, mb = /alpha\([^)]*\)/i, nb = /opacity\s*=\s*([^)]*)/, ob = /^(top|right|bottom|left)$/, pb = /^(none|table(?!-c[ea]).+)/, qb = /^margin/, rb = RegExp("^(" + la + ")(.*)$", "i"), sb = RegExp("^(" + la + ")(?!px)[a-z%]+$", "i"), tb = RegExp("^([+-])=(" + la + ")", "i"), ub = {
        BODY: "block"
    }, vb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, wb = {
        letterSpacing: 0,
        fontWeight: 400
    }, xb = [ "Top", "Right", "Bottom", "Left" ], yb = [ "Webkit", "O", "Moz", "ms" ];
    ka.fn.extend({
        css: function(a, c) {
            return ka.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (ka.isArray(c)) {
                    for (f = kb(a), e = c.length; e > h; h++) g[c[h]] = ka.css(a, c[h], !1, f);
                    return g;
                }
                return d !== b ? ka.style(a, c, d) : ka.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return y(this, !0);
        },
        hide: function() {
            return y(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                x(this) ? ka(this).show() : ka(this).hide();
            });
        }
    }), ka.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ka.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = ka.camelCase(c), j = a.style;
                if (c = ka.cssProps[i] || (ka.cssProps[i] = w(j, i)), h = ka.cssHooks[c] || ka.cssHooks[i], 
                d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ka.css(a, c)), 
                g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ka.cssNumber[i] || (d += "px"), 
                ka.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d;
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = ka.camelCase(c);
            return c = ka.cssProps[i] || (ka.cssProps[i] = w(a.style, i)), h = ka.cssHooks[c] || ka.cssHooks[i], 
            h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lb(a, c, e)), "normal" === g && c in wb && (g = wb[c]), 
            "" === d || d ? (f = parseFloat(g), d === !0 || ka.isNumeric(f) ? f || 0 : g) : g;
        }
    }), a.getComputedStyle ? (kb = function(b) {
        return a.getComputedStyle(b, null);
    }, lb = function(a, c, d) {
        var e, f, g, h = d || kb(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || ka.contains(a.ownerDocument, a) || (i = ka.style(a, c)), 
        sb.test(i) && qb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }) : Y.documentElement.currentStyle && (kb = function(a) {
        return a.currentStyle;
    }, lb = function(a, c, d) {
        var e, f, g, h = d || kb(a), i = h ? h[c] : b, j = a.style;
        return null == i && j && j[c] && (i = j[c]), sb.test(i) && !ob.test(c) && (e = j.left, 
        f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, 
        i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i;
    }), ka.each([ "height", "width" ], function(a, c) {
        ka.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && pb.test(ka.css(a, "display")) ? ka.swap(a, vb, function() {
                    return B(a, c, e);
                }) : B(a, c, e) : b;
            },
            set: function(a, b, d) {
                var e = d && kb(a);
                return z(a, b, d ? A(a, c, d, ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), ka.support.opacity || (ka.cssHooks.opacity = {
        get: function(a, b) {
            return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = ka.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ka.trim(f.replace(mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = mb.test(f) ? f.replace(mb, e) : f + " " + e);
        }
    }), ka(function() {
        ka.support.reliableMarginRight || (ka.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? ka.swap(a, {
                    display: "inline-block"
                }, lb, [ a, "marginRight" ]) : b;
            }
        }), !ka.support.pixelPosition && ka.fn.position && ka.each([ "top", "left" ], function(a, c) {
            ka.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = lb(a, c), sb.test(d) ? ka(a).position()[c] + "px" : d) : b;
                }
            };
        });
    }), ka.expr && ka.expr.filters && (ka.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !ka.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ka.css(a, "display"));
    }, ka.expr.filters.visible = function(a) {
        return !ka.expr.filters.hidden(a);
    }), ka.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ka.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + xb[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, qb.test(a) || (ka.cssHooks[a + b].set = z);
    });
    var zb = /%20/g, Ab = /\[\]$/, Bb = /\r?\n/g, Cb = /^(?:submit|button|image|reset|file)$/i, Db = /^(?:input|select|textarea|keygen)/i;
    ka.fn.extend({
        serialize: function() {
            return ka.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ka.prop(this, "elements");
                return a ? ka.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !ka(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !bb.test(a));
            }).map(function(a, b) {
                var c = ka(this).val();
                return null == c ? null : ka.isArray(c) ? ka.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Bb, "\r\n")
                };
            }).get();
        }
    }), ka.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = ka.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b && (c = ka.ajaxSettings && ka.ajaxSettings.traditional), ka.isArray(a) || a.jquery && !ka.isPlainObject(a)) ka.each(a, function() {
            f(this.name, this.value);
        }); else for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zb, "+");
    }, ka.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ka.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), ka.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var Eb, Fb, Gb = ka.now(), Hb = /\?/, Ib = /#.*$/, Jb = /([?&])_=[^&]*/, Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mb = /^(?:GET|HEAD)$/, Nb = /^\/\//, Ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Pb = ka.fn.load, Qb = {}, Rb = {}, Sb = "*/".concat("*");
    try {
        Fb = X.href;
    } catch (Tb) {
        Fb = Y.createElement("a"), Fb.href = "", Fb = Fb.href;
    }
    Eb = Ob.exec(Fb.toLowerCase()) || [], ka.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pb) return Pb.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ka.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ka.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? ka("<div>").append(ka.parseHTML(a)).find(e) : a);
        }).complete(d && function(a, b) {
            h.each(d, f || [ a.responseText, b, a ]);
        }), this;
    }, ka.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        ka.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), ka.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fb,
            type: "GET",
            isLocal: Lb.test(Eb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ka.parseJSON,
                "text xml": ka.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, ka.ajaxSettings), b) : H(ka.ajaxSettings, a);
        },
        ajaxPrefilter: F(Qb),
        ajaxTransport: F(Rb),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, 
                f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), 
                f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ka.lastModified[g] = v), 
                v = w.getResponseHeader("etag"), v && (ka.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), 
                w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [ w, m, f ? l : s ]), 
                q.fireWith(n, [ w, x ]), j && (o.trigger("ajaxComplete", [ w, m ]), --ka.active || ka.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = ka.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? ka(n) : ka.event, p = ka.Deferred(), q = ka.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!l) for (l = {}; b = Kb.exec(h); ) l[b[1].toLowerCase()] = b[2];
                        b = l[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? h : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [ r[b], a[b] ]; else w.always(a[w.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    return k && k.abort(b), d(0, b), this;
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fb) + "").replace(Ib, "").replace(Nb, Eb[1] + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = ka.trim(m.dataType || "*").toLowerCase().match(ma) || [ "" ], 
            null == m.crossDomain && (e = Ob.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Eb[1] && e[2] === Eb[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Eb[3] || ("http:" === Eb[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = ka.param(m.data, m.traditional)), 
            G(Qb, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === ka.active++ && ka.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), 
            m.hasContent = !Mb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hb.test(g) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = Jb.test(g) ? g.replace(Jb, "$1_=" + Gb++) : g + (Hb.test(g) ? "&" : "?") + "_=" + Gb++)), 
            m.ifModified && (ka.lastModified[g] && w.setRequestHeader("If-Modified-Since", ka.lastModified[g]), 
            ka.etag[g] && w.setRequestHeader("If-None-Match", ka.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rb, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [ w, m ]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, k.send(s, d);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return ka.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return ka.get(a, b, c, "script");
        }
    }), ka.each([ "get", "post" ], function(a, c) {
        ka[c] = function(a, d, e, f) {
            return ka.isFunction(d) && (f = f || e, e = d, d = b), ka.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), ka.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ka.globalEval(a), a;
            }
        }
    }), ka.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), ka.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = Y.head || ka("head")[0] || Y.documentElement;
            return {
                send: function(b, e) {
                    c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), 
                    c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, 
                        c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"));
                    }, d.insertBefore(c, d.firstChild);
                },
                abort: function() {
                    c && c.onload(b, !0);
                }
            };
        }
    });
    var Ub = [], Vb = /(=)\?(?=&|$)|\?\?/;
    ka.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ub.pop() || ka.expando + "_" + Gb++;
            return this[a] = !0, a;
        }
    }), ka.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ka.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(Vb, "$1" + f) : c.jsonp !== !1 && (c.url += (Hb.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || ka.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ub.push(f)), h && ka.isFunction(g) && g(h[0]), 
            h = g = b;
        }), "script") : b;
    });
    var Wb, Xb, Yb = 0, Zb = a.ActiveXObject && function() {
        var a;
        for (a in Wb) Wb[a](b, !0);
    };
    ka.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && K() || L();
    } : K, Xb = ka.ajaxSettings.xhr(), ka.support.cors = !!Xb && "withCredentials" in Xb, 
    Xb = ka.support.ajax = !!Xb, Xb && ka.ajaxTransport(function(c) {
        if (!c.crossDomain || ka.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), 
                    c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h]);
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = ka.noop, 
                            Zb && delete Wb[g]), e) 4 !== i.readyState && i.abort(); else {
                                l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText;
                                } catch (m) {
                                    k = "";
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404;
                            }
                        } catch (n) {
                            e || f(-1, n);
                        }
                        l && f(h, k, l, j);
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yb, Zb && (Wb || (Wb = {}, 
                    ka(a).unload(Zb)), Wb[g] = d), i.onreadystatechange = d) : d();
                },
                abort: function() {
                    d && d(b, !0);
                }
            };
        }
    });
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = RegExp("^(?:([+-])=|)(" + la + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ Q ], ec = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (ka.cssNumber[a] ? "" : "px"), g = (ka.cssNumber[a] || "px" !== f && +d) && bc.exec(ka.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, ka.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    ka.Animation = ka.extend(O, {
        tweener: function(a, b) {
            ka.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a);
        }
    }), ka.Tween = R, R.prototype = {
        constructor: R,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (ka.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ka.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : R.propHooks._default.set(this), this;
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ka.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                ka.fx.step[a.prop] ? ka.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ka.cssProps[a.prop]] || ka.cssHooks[a.prop]) ? ka.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, ka.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = ka.fn[b];
        ka.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e);
        };
    }), ka.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = ka.isEmptyObject(a), f = ka.speed(b, c, d), g = function() {
                var b = O(this, ka.extend({}, a), f);
                (e || ka._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = ka.timers, g = ka._data(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && cc.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                (b || !d) && ka.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ka._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ka.timers, g = d ? d.length : 0;
                for (c.finish = !0, ka.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), ka.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        ka.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), ka.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ka.extend({}, a) : {
            complete: c || !c && b || ka.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ka.isFunction(b) && b
        };
        return d.duration = ka.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ka.fx.speeds ? ka.fx.speeds[d.duration] : ka.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            ka.isFunction(d.old) && d.old.call(this), d.queue && ka.dequeue(this, d.queue);
        }, d;
    }, ka.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, ka.timers = [], ka.fx = R.prototype.init, ka.fx.tick = function() {
        var a, c = ka.timers, d = 0;
        for ($b = ka.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || ka.fx.stop(), $b = b;
    }, ka.fx.timer = function(a) {
        a() && ka.timers.push(a) && ka.fx.start();
    }, ka.fx.interval = 13, ka.fx.start = function() {
        _b || (_b = setInterval(ka.fx.tick, ka.fx.interval));
    }, ka.fx.stop = function() {
        clearInterval(_b), _b = null;
    }, ka.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ka.fx.step = {}, ka.expr && ka.expr.filters && (ka.expr.filters.animated = function(a) {
        return ka.grep(ka.timers, function(b) {
            return a === b.elem;
        }).length;
    }), ka.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            ka.offset.setOffset(this, a, b);
        });
        var c, d, e = {
            top: 0,
            left: 0
        }, f = this[0], g = f && f.ownerDocument;
        return g ? (c = g.documentElement, ka.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), 
        d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0;
    }, ka.offset = {
        setOffset: function(a, b, c) {
            var d = ka.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = ka(a), h = g.offset(), i = ka.css(a, "top"), j = ka.css(a, "left"), k = ("absolute" === d || "fixed" === d) && ka.inArray("auto", [ i, j ]) > -1, l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), 
            ka.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), 
            null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l);
        }
    }, ka.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === ka.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), ka.nodeName(a[0], "html") || (c = a.offset()), c.top += ka.css(a[0], "borderTopWidth", !0), 
                c.left += ka.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ka.css(d, "marginTop", !0),
                    left: b.left - c.left - ka.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Z; a && !ka.nodeName(a, "html") && "static" === ka.css(a, "position"); ) a = a.offsetParent;
                return a || Z;
            });
        }
    }), ka.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        ka.fn[a] = function(e) {
            return ka.access(this, function(a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ka(g).scrollLeft() : f, d ? f : ka(g).scrollTop()) : a[e] = f, 
                b);
            }, a, e, arguments.length, null);
        };
    }), ka.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        ka.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            ka.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return ka.access(this, function(c, d, e) {
                    var f;
                    return ka.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ka.css(c, d, h) : ka.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), ka.fn.size = function() {
        return this.length;
    }, ka.fn.andSelf = ka.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ka : (a.jQuery = a.$ = ka, 
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ka;
    }));
}(window), function(a) {
    function b() {
        var a = location.href;
        return hashtag = -1 !== a.indexOf("#prettyPhoto") ? decodeURI(a.substring(a.indexOf("#prettyPhoto") + 1, a.length)) : !1, 
        hashtag;
    }
    function c() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/");
    }
    function d() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto");
    }
    function e(a, b) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var c = "[\\?&]" + a + "=([^&#]*)", d = new RegExp(c), e = d.exec(b);
        return null == e ? "" : e[1];
    }
    a.prettyPhoto = {
        version: "3.1.5"
    }, a.fn.prettyPhoto = function(f) {
        function g() {
            a(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (A / 2 - r.containerHeight / 2), 
            projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), 
            $pp_pic_holder.find(".pp_content").animate({
                height: r.contentHeight,
                width: r.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: B / 2 - r.containerWidth / 2 < 0 ? 0 : B / 2 - r.containerWidth / 2,
                width: r.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(r.height).width(r.width), 
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == l(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), 
                settings.allow_expand && (r.resized ? a("a.pp_expand,a.pp_contract").show() : a("a.pp_expand").hide()), 
                !settings.autoplay_slideshow || x || s || a.prettyPhoto.startSlideshow(), settings.changepicturecallback(), 
                s = !0;
            }), p(), f.ajaxcallback();
        }
        function h(b) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), 
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                a(".pp_loaderIcon").show(), b();
            });
        }
        function i(b) {
            b > 1 ? a(".pp_nav").show() : a(".pp_nav").hide();
        }
        function j(a, b) {
            if (resized = !1, k(a, b), imageWidth = a, imageHeight = b, (w > B || v > A) && doresize && settings.allow_resize && !z) {
                for (resized = !0, fitting = !1; !fitting; ) w > B ? (imageWidth = B - 200, imageHeight = b / a * imageWidth) : v > A ? (imageHeight = A - 200, 
                imageWidth = a / b * imageHeight) : fitting = !0, v = imageHeight, w = imageWidth;
                (w > B || v > A) && j(w, v), k(imageWidth, imageHeight);
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(v),
                containerWidth: Math.floor(w) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(t),
                contentWidth: Math.floor(u),
                resized: resized
            };
        }
        function k(b, c) {
            b = parseFloat(b), c = parseFloat(c), $pp_details = $pp_pic_holder.find(".pp_details"), 
            $pp_details.width(b), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), 
            $pp_details = $pp_details.clone().addClass(settings.theme).width(b).appendTo(a("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, 
            $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(b), 
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), 
            $pp_title = $pp_title.clone().appendTo(a("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), t = c + detailsHeight, 
            u = b, v = t + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), 
            w = b;
        }
        function l(a) {
            return a.match(/youtube\.com\/watch/i) || a.match(/youtu\.be/i) ? "youtube" : a.match(/vimeo\.com/i) ? "vimeo" : a.match(/\b.mov\b/i) ? "quicktime" : a.match(/\b.swf\b/i) ? "flash" : a.match(/\biframe=true\b/i) ? "iframe" : a.match(/\bajax=true\b/i) ? "ajax" : a.match(/\bcustom=true\b/i) ? "custom" : "#" == a.substr(0, 1) ? "inline" : "image";
        }
        function m() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = n(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), 
                projectedTop = A / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), 
                contentHeight > A) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: B / 2 + scroll_pos.scrollLeft - contentwidth / 2
                });
            }
        }
        function n() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0;
        }
        function o() {
            A = a(window).height(), B = a(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(a(document).height()).width(B);
        }
        function p() {
            isSet && settings.overlay_gallery && "image" == l(pp_images[set_position]) ? (itemWidth = 57, 
            navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, 
            itemsPerPage = Math.floor((r.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, 
            totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, 
            $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), 
            galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, 
            $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), 
            goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, 
            a.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");
        }
        function q(b) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), 
            settings.markup = settings.markup.replace("{pp_social}", ""), a("body").append(settings.markup), 
            $pp_pic_holder = a(".pp_pic_holder"), $ppt = a(".ppt"), $pp_overlay = a("div.pp_overlay"), 
            isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var c = 0; c < pp_images.length; c++) pp_images[c].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", 
                img_src = pp_images[c]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), 
                $pp_gallery = a(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), 
                $pp_gallery.find(".pp_arrow_next").click(function() {
                    return a.prettyPhoto.changeGalleryPage("next"), a.prettyPhoto.stopSlideshow(), !1;
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return a.prettyPhoto.changeGalleryPage("previous"), a.prettyPhoto.stopSlideshow(), 
                    !1;
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn();
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut();
                }), itemWidth = 57, $pp_gallery_li.each(function(b) {
                    a(this).find("a").click(function() {
                        return a.prettyPhoto.changePage(b), a.prettyPhoto.stopSlideshow(), !1;
                    });
                });
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), 
            $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return a.prettyPhoto.startSlideshow(), !1;
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: a(document).height(),
                width: a(window).width()
            }).bind("click", function() {
                settings.modal || a.prettyPhoto.close();
            }), a("a.pp_close").bind("click", function() {
                return a.prettyPhoto.close(), !1;
            }), settings.allow_expand && a("a.pp_expand").bind("click", function(b) {
                return a(this).hasClass("pp_expand") ? (a(this).removeClass("pp_expand").addClass("pp_contract"), 
                doresize = !1) : (a(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), 
                h(function() {
                    a.prettyPhoto.open();
                }), !1;
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return a.prettyPhoto.changePage("previous"), a.prettyPhoto.stopSlideshow(), !1;
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return a.prettyPhoto.changePage("next"), a.prettyPhoto.stopSlideshow(), !1;
            }), m();
        }
        f = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, f);
        var r, s, t, u, v, w, x, y = this, z = !1, A = a(window).height(), B = a(window).width();
        return doresize = !0, scroll_pos = n(), a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            m(), o();
        }), f.keyboard_shortcuts && a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(b) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (b.keyCode) {
              case 37:
                a.prettyPhoto.changePage("previous"), b.preventDefault();
                break;

              case 39:
                a.prettyPhoto.changePage("next"), b.preventDefault();
                break;

              case 27:
                settings.modal || a.prettyPhoto.close(), b.preventDefault();
            }
        }), a.prettyPhoto.initialize = function() {
            return settings = f, "pp_default" == settings.theme && (settings.horizontal_padding = 16), 
            theRel = a(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, 
            pp_images = isSet ? jQuery.map(y, function(b, c) {
                return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("href") : void 0;
            }) : a.makeArray(a(this).attr("href")), pp_titles = isSet ? jQuery.map(y, function(b, c) {
                return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).find("img").attr("alt") ? a(b).find("img").attr("alt") : "" : void 0;
            }) : a.makeArray(a(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(y, function(b, c) {
                return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("title") ? a(b).attr("title") : "" : void 0;
            }) : a.makeArray(a(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), 
            set_position = jQuery.inArray(a(this).attr("href"), pp_images), rel_index = isSet ? set_position : a("a[" + settings.hook + "^='" + theRel + "']").index(a(this)), 
            q(this), settings.allow_resize && a(window).bind("scroll.prettyphoto", function() {
                m();
            }), a.prettyPhoto.open(), !1;
        }, a.prettyPhoto.open = function(b) {
            return "undefined" == typeof settings && (settings = f, pp_images = a.makeArray(arguments[0]), 
            pp_titles = arguments[1] ? a.makeArray(arguments[1]) : a.makeArray(""), pp_descriptions = arguments[2] ? a.makeArray(arguments[2]) : a.makeArray(""), 
            isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, 
            q(b.target)), settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), 
            i(a(pp_images).size()), a(".pp_loaderIcon").show(), settings.deeplinking && c(), 
            settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), 
            $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), 
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + a(pp_images).size()), 
            "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), 
            movie_width = parseFloat(e("width", pp_images[set_position])) ? e("width", pp_images[set_position]) : settings.default_width.toString(), 
            movie_height = parseFloat(e("height", pp_images[set_position])) ? e("height", pp_images[set_position]) : settings.default_height.toString(), 
            z = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(a(window).height() * parseFloat(movie_height) / 100 - 150), 
            z = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(a(window).width() * parseFloat(movie_width) / 100 - 150), 
            z = !0), $pp_pic_holder.fadeIn(function() {
                switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(" "), 
                imgPreloader = "", skipInjection = !1, l(pp_images[set_position])) {
                  case "image":
                    imgPreloader = new Image(), nextImage = new Image(), isSet && set_position < a(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), 
                    prevImage = new Image(), isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), 
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), 
                    imgPreloader.onload = function() {
                        r = j(imgPreloader.width, imgPreloader.height), g();
                    }, imgPreloader.onerror = function() {
                        alert("Image cannot be loaded. Make sure the path is correct and image exist."), 
                        a.prettyPhoto.close();
                    }, imgPreloader.src = pp_images[set_position];
                    break;

                  case "youtube":
                    r = j(movie_width, movie_height), movie_id = e("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), 
                    movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), 
                    movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), 
                    movie = "http://www.youtube.com/embed/" + movie_id, e("rel", pp_images[set_position]) ? movie += "?rel=" + e("rel", pp_images[set_position]) : movie += "?rel=1", 
                    settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                    break;

                  case "vimeo":
                    r = j(movie_width, movie_height), movie_id = pp_images[set_position];
                    var b = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/, c = movie_id.match(b);
                    movie = "http://player.vimeo.com/video/" + c[3] + "?title=0&byline=0&portrait=0", 
                    settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = r.width + "/embed/?moog_width=" + r.width, 
                    toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, r.height).replace(/{path}/g, movie);
                    break;

                  case "quicktime":
                    r = j(movie_width, movie_height), r.height += 15, r.contentHeight += 15, r.containerHeight += 15, 
                    toInject = settings.quicktime_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                    break;

                  case "flash":
                    r = j(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), 
                    filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), 
                    toInject = settings.flash_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                    break;

                  case "iframe":
                    r = j(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), 
                    toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{path}/g, frame_url);
                    break;

                  case "ajax":
                    doresize = !1, r = j(movie_width, movie_height), doresize = !0, skipInjection = !0, 
                    a.get(pp_images[set_position], function(a) {
                        toInject = settings.inline_markup.replace(/{content}/g, a), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, 
                        g();
                    });
                    break;

                  case "custom":
                    r = j(movie_width, movie_height), toInject = settings.custom_markup;
                    break;

                  case "inline":
                    myClone = a(pp_images[set_position]).clone().append('<br clear="all" />').css({
                        width: settings.default_width
                    }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show(), 
                    doresize = !1, r = j(a(myClone).width(), a(myClone).height()), doresize = !0, a(myClone).remove(), 
                    toInject = settings.inline_markup.replace(/{content}/g, a(pp_images[set_position]).html());
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, 
                g());
            }), !1;
        }, a.prettyPhoto.changePage = function(b) {
            currentGalleryPage = 0, "previous" == b ? (set_position--, set_position < 0 && (set_position = a(pp_images).size() - 1)) : "next" == b ? (set_position++, 
            set_position > a(pp_images).size() - 1 && (set_position = 0)) : set_position = b, 
            rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && a(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), 
            h(function() {
                a.prettyPhoto.open();
            });
        }, a.prettyPhoto.changeGalleryPage = function(a) {
            "next" == a ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == a ? (currentGalleryPage--, 
            currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = a, 
            slide_speed = "next" == a || "previous" == a ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, 
            $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed);
        }, a.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof x ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return a.prettyPhoto.stopSlideshow(), !1;
            }), x = setInterval(a.prettyPhoto.startSlideshow, settings.slideshow)) : a.prettyPhoto.changePage("next");
        }, a.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return a.prettyPhoto.startSlideshow(), !1;
            }), clearInterval(x), x = void 0;
        }, a.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (a.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), 
            a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                a(this).remove();
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), 
                a(this).remove(), a(window).unbind("scroll.prettyphoto"), d(), settings.callback(), 
                doresize = !0, s = !1, delete settings;
            }));
        }, !pp_alreadyInitialized && b() && (pp_alreadyInitialized = !0, hashIndex = b(), 
        hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), 
        hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            a("a[" + f.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click");
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", a.prettyPhoto.initialize);
    };
}(jQuery);

var pp_alreadyInitialized = !1;

jQuery(function(a) {
    a(function() {
        a("#main-slider.carousel").carousel({
            interval: 8e3
        });
    }), a(".accordion-toggle").on("click", function() {
        a(this).closest(".panel-group").children().each(function() {
            a(this).find(">.panel-heading").removeClass("active");
        }), a(this).closest(".panel-heading").toggleClass("active");
    }), new WOW().init(), a(window).load(function() {
        "use strict";
        var b = a(".portfolio-filter >li>a"), c = a(".portfolio-items");
        c.isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows"
        }), b.on("click", function() {
            b.removeClass("active"), a(this).addClass("active");
            var d = a(this).attr("data-filter");
            return c.isotope({
                filter: d
            }), !1;
        });
    });
    var b = a("#main-contact-form");
    b.submit(function(c) {
        c.preventDefault();
        var d = a('<div class="form_status"></div>');
        a.ajax({
            url: a(this).attr("action"),
            beforeSend: function() {
                b.prepend(d.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function(a) {
            d.html('<p class="text-success">' + a.message + "</p>").delay(3e3).fadeOut();
        });
    }), a(".gototop").click(function(b) {
        b.preventDefault(), a("html, body").animate({
            scrollTop: a("body").offset().top
        }, 500);
    }), a("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: !1
    });
}), function() {
    var a, b, c = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    };
    a = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in a) d = a[c], null != d && (b[c] = d);
            return b;
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
        }, a;
    }(), b = this.WeakMap || (b = function() {
        function a() {
            this.keys = [], this.values = [];
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b];
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
        }, a;
    }()), this.WOW = function() {
        function d(a) {
            null == a && (a = {}), this.scrollCallback = c(this.scrollCallback, this), this.scrollHandler = c(this.scrollHandler, this), 
            this.start = c(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), 
            this.animationNameCache = new b();
        }
        return d.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        }, d.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start);
        }, d.prototype.start = function() {
            var a, b, c, d;
            if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                if (this.disabled()) return this.resetStyle();
                for (d = this.boxes, b = 0, c = d.length; c > b; b++) a = d[b], this.applyStyle(a, !0);
                return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), 
                this.interval = setInterval(this.scrollCallback, 50);
            }
        }, d.prototype.stop = function() {
            return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), 
            null != this.interval ? clearInterval(this.interval) : void 0;
        }, d.prototype.show = function(a) {
            return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass;
        }, d.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), 
            e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e);
                };
            }(this));
        }, d.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a);
            } : function(a) {
                return a();
            };
        }(), d.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
            return e;
        }, d.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", 
            c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a;
        }, d.prototype.vendors = [ "moz", "webkit" ], d.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c], a["" + c] = d, f.push(function() {
                var b, f, g, h;
                for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                return h;
            }.call(this));
            return f;
        }, d.prototype.vendorCSS = function(a, b) {
            var c, d, e, f, g, h;
            for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, 
            f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b);
            return c;
        }, d.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText;
            } catch (c) {
                b = window.getComputedStyle(a).getPropertyValue("animation-name");
            }
            return "none" === b ? "" : b;
        }, d.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a));
        }, d.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a);
        }, d.prototype.scrollHandler = function() {
            return this.scrolled = !0;
        }, d.prototype.scrollCallback = function() {
            var a;
            return this.scrolled && (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e;
            }.call(this), !this.boxes.length) ? this.stop() : void 0;
        }, d.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; ) b += a.offsetTop;
            return b;
        }, d.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, 
            e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, 
            e >= d && b >= f;
        }, d.prototype.util = function() {
            return this._util || (this._util = new a());
        }, d.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, d;
    }();
}.call(this);

var aud = aud || {};

aud.assignCampaigns = {
    init: function() {
        this.bindResultRows(".unassigned_campaigns_container"), this.bindResultRows(".existing_usages_container");
    },
    assign: function() {
        var a = [];
        $('input[name="unassignCampaignsId"]:checked').each(function() {
            a.push($(this).val());
        });
        var b = $('input[name="usageId"]:checked').val(), c = {
            unassignCampaigns: a,
            usageId: b
        };
        this.doAjaxRequest(c);
    },
    doAjaxRequest: function(a) {
        var b = $("#ajax_loader");
        b.is(":empty") && b.html('<img class="ajax.loader" id="loader-img" alt="ajax-preloader" src="/assets/images/ajax-preloader-middle.gif" width="100" height="100" align="center" />'), 
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/assign",
            data: a
        }).done(function(a, c, d) {
            return alert(a.message), a.success ? (window.location.reload(), !0) : void (b.is(":empty") || b.html(""));
        });
    },
    bindResultRows: function(a) {
        var b = $(a + " tr");
        b.on("click", function(a) {
            if ("input" !== a.target.tagName.toLowerCase()) {
                var b = $(this).find('input[type="checkbox"], input[type="radio"]'), c = !b.prop("checked");
                "radio" === b.attr("type") && (c = !0), b.prop("checked", c);
            }
            var d = $(".unassigned_campaigns_container input:checked").length, e = $(".existing_usages_container input[type='radio']:checked").length, f = $(".assign_campaign");
            d > 0 && e > 0 ? f.removeClass("aud-btn-cancel").addClass("aud-btn").on("click", function() {
                aud.assignCampaigns.assign();
            }) : f.addClass("aud-btn-cancel").removeClass("aud-btn").off("click");
        });
    }
}, $(document).ready(function() {
    aud.assignCampaigns.init(), $(document).on("ajax-request-finished", function(a, b) {
        aud.assignCampaigns.bindResultRows(b);
    });
});

var aud = aud || {};

aud.categoryTree = {
    init: function() {
        var a = $(".tree-edit");
        this.prepareEditItems(a);
    },
    prepareEditItems: function(a) {
        a.each(function() {
            var a = $(this);
            a.data("original", a.text()), a.after('<span class="icon glyphicon-minus-sign inline-delete-link"></span>'), 
            a.after('<span class="icon glyphicon-edit inline-edit-link"></span>'), a.parent().find(".inline-edit-link").click(function(a) {
                a.preventDefault();
                var b = $(this).parent().find(".tree-edit");
                return aud.categoryTree.toggleFormField(b), !1;
            }), a.parent().find(".inline-delete-link").click(function(a) {
                if (a.preventDefault(), confirm("Are you sure you want to delete this category?")) {
                    var b = $(this).parent().find(".tree-edit");
                    aud.categoryTree.deleteCategory(b);
                }
                return !1;
            });
        });
    },
    deleteCategory: function(a) {
        $.ajax({
            method: "POST",
            url: "/deleteChannel",
            data: {
                id: a.data("id"),
                type: a.data("type")
            }
        }).done(function(a, b, c) {
            return alert(a.message), a.success ? (window.location.reload(), !0) : void 0;
        });
    },
    resetAllFormFields: function() {
        $(".tree-edit").each(function() {
            $(this).html($(this).data("original")).parent().addClass("view-mode").removeClass("edit-mode");
        });
    },
    toggleFormField: function(a) {
        aud.categoryTree.resetAllFormFields(), a.html(this.getFormField(a)).parent().addClass("edit-mode").removeClass("view-mode"), 
        this.bindFormFields(a);
    },
    getFormField: function(a) {
        var b = '<div class="inline-edit-form"><input type="text" class="inline-edit-field" value="' + a.text() + '"><span class="icon glyphicon-remove-sign inline-edit-abort"></span><span class="icon glyphicon-ok-sign inline-edit-save"></span></div>';
        return b;
    },
    bindFormFields: function(a) {
        a.parent().find(".inline-edit-abort").click(function(a) {
            return a.preventDefault(), aud.categoryTree.resetAllFormFields(), !1;
        }), a.parent().find(".inline-edit-save").click(function(a) {
            return a.preventDefault(), aud.categoryTree.saveForm($(this)), !1;
        }), a.find("input").keyup(function(b) {
            return 13 == b.which ? (a.closest(".tree-edit").find(".inline-edit-save").trigger("click"), 
            !1) : void 0;
        });
    },
    saveForm: function(a) {
        var b = a.closest(".tree-edit"), c = b.find("input").val(), d = b.data("type"), e = b.data("id");
        $.ajax({
            method: "POST",
            url: "/updateChannel",
            data: {
                value: c,
                type: d,
                id: e
            }
        }).done(function(a, b, c) {
            return alert(a.message), a.success ? (window.location.reload(), !0) : void 0;
        });
    }
}, $(document).ready(function() {
    aud.categoryTree.init();
});

var confirmationDialog = function(a, b) {
    $.ajax({
        method: "POST",
        dataType: "json",
        url: "/popupConfirmation",
        data: {
            funcYes: a,
            confirmMessage: b
        }
    }).done(function(a, b, c) {
        a.success && $("#dialog-wrapper").html(a.message);
    });
}, confirmationDialogNoAnswer = function() {
    $("#dialog-wrapper").html(""), window.location.reload();
};

$(document).ready(function() {
    $("#countrySelector").bind("change", function() {
        $("#formSelectPicker").trigger("submit");
    });
});

var aud = aud || {};

aud.costs = {
    lastRequestParams: {},
    init: function() {
        var a = new Date(), b = a.getMonth(), c = a.getFullYear();
        $('.months option[value="' + (b + 1) + '"], .years option[value="' + c + '"]').attr("selected", "selected"), 
        $(".display_costs").on("click", function(a) {
            if ($(this).hasClass("disabled")) return !1;
            $(".display_costs, .display_costs_favorite").addClass("disabled"), a.preventDefault();
            var b = aud.costs.lastRequestParams, c = {
                favorite: !1,
                month: $(".months option:selected").val(),
                year: $(".years option:selected").val()
            };
            $.extend(b, c), aud.costs.displayData(b);
        }), $(".display_costs_favorite").on("click", function(a) {
            if ($(this).hasClass("disabled")) return !1;
            $(".display_costs, .display_costs_favorite").addClass("disabled"), a.preventDefault();
            var b = aud.costs.lastRequestParams, c = {
                favorite: !0,
                month: $(".months option:selected").val(),
                year: $(".years option:selected").val()
            };
            $.extend(b, c), aud.costs.displayData(b);
        }).trigger("click"), $("input[name='costsearch_keyword']").on("keypress", function(a) {
            var b = 13;
            a.keyCode === b && $(this).trigger("change");
        }).on("change", function() {
            var a = aud.costs.lastRequestParams, b = {
                month: $(".months option:selected").val(),
                year: $(".years option:selected").val(),
                searchKeyword: $(this).val()
            };
            $.extend(a, b), aud.costs.displayData(a);
        }), $("select[name='cost_type']").on("change", function(a) {
            var b = $(this).val(), c = aud.costs.lastRequestParams;
            if (c.marketingChannel = "", c.controllingChannel = "", b) if (b.match(/mc_.*/)) c.marketingChannel = b.replace(/mc_(.*)/, "$1"); else {
                if (!b.match(/cc_.*/)) return alert("Invalid channel selected"), !1;
                c.controllingChannel = b.replace(/cc_(.*)/, "$1");
            }
            aud.costs.displayData(c);
        }), $(window).resize(function() {
            aud.costs.scaleCostTableContainer();
        });
    },
    generateTable: function(a, b, c) {
        var d = $(".months option:selected").val(), e = $(".years option:selected").val(), f = "costs.year" + e + "month" + d + "day";
        this.scaleCostTableContainer();
        new Handsontable(a, {
            data: b,
            maxRows: b.length,
            fillHandle: !0,
            contextMenu: !1,
            fixedColumnsLeft: 4,
            manualColumnFreeze: !0,
            colWidths: [ 25, 30, 150, 200, 70 ],
            height: function() {
                return aud.costs.getCostTableContainerHeight();
            },
            width: function() {
                return aud.costs.getCostTableContainerWidth();
            },
            colHeaders: [ "", "Fav", "ACT", "Usage Cost", "CUR", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ],
            currentRowClassName: "active_row",
            currentColClassName: "active_col",
            columns: this.getColumns(f, c),
            cells: function(a, b, c) {
                var d = {}, e = this.instance.getDataAtRowProp(a, "favorite"), f = this.instance.getDataAtRowProp(a, "actUsage"), g = this.instance.getDataAtRowProp(a, "currency"), h = this.instance.getDataAtRowProp(a, "costName");
                return "" === e && "" === f && "" === g && "" !== h ? (d.readOnly = !0, d.type = "text") : "" === e && "favorite" === c && (d.readOnly = !0, 
                d.type = "text"), d;
            },
            afterChange: function(a, b) {
                if (a && a.length) {
                    var c = {};
                    for (var d in a) if (a.hasOwnProperty(d)) {
                        var e = a[d][0], f = a[d][1], g = a[d][2], h = a[d][3];
                        c[d] = aud.costs.prepareUpdateRequestParams(this, e, f, h, g);
                    }
                    $.ajax({
                        method: "POST",
                        url: "/updateCost",
                        data: c,
                        success: function(a, b, c) {
                            a.success || alert(a.message);
                        }
                    });
                }
            }
        });
    },
    getColumns: function(a, b) {
        for (var c = [ {
            data: "delete",
            renderer: this.deleteButtonRenderer
        }, {
            data: "favorite",
            type: "checkbox"
        }, {
            data: "actUsage",
            readOnly: !0
        }, {
            data: "costName"
        }, {
            data: "currency",
            type: "dropdown",
            source: b
        } ], d = 1; 31 >= d; d++) c.push({
            data: a + d,
            type: "numeric",
            format: "0.00",
            validator: Handsontable.NumericValidator
        });
        return c;
    },
    deleteButtonRenderer: function(a, b, c, d, e, f, g) {
        return b.innerHTML = '<span class="ht-delete-button">x</span>', $(b).find(".ht-delete-button").data(aud.costs.prepareUpdateRequestParams(a, c, "delete")).on("click", function(b) {
            return b.preventDefault(), confirm("Are you sure you want to delete this row?") && aud.costs.deleteRow($(this).data(), a, c), 
            !1;
        }), b;
    },
    deleteRow: function(a, b, c) {
        a = {
            0: a
        }, $.ajax({
            method: "DELETE",
            dataType: "json",
            url: "/updateCost",
            data: a
        }).done(function(a) {
            a.success ? b.alter("remove_row", c) : (a.message ? alert(a.message) : alert("An error occured. Please try again."), 
            aud.costs.reloadLastDisplayData());
        });
    },
    prepareUpdateRequestParams: function(a, b, c, d, e) {
        var f = {
            month: $(".months option:selected").val(),
            year: $(".years option:selected").val()
        }, g = ("costs.year" + f.year + "month" + f.month + "day").length, h = c.substr(g, c.length), i = a.getDataAtRowProp(b, "costName"), j = a.getDataAtRowProp(b, "act");
        j || (j = a.getDataAtRowProp(b, "id"));
        var k = a.getDataAtRowProp(b, "currency");
        return f.row = b, f.day = h, f.costName = i, f.actUsage = j, f.costValue = d, f.currencyISO = k, 
        f.dataType = c, f.oldValue = e, h.length || "currency" !== c || (f.changeCurrency = !0), 
        f;
    },
    getCostTableContainerHeight: function() {
        var a = $("#content"), b = $(".menu_wrapper").outerHeight(!0), c = $(".cost-table-navigation").outerHeight(!0), d = a.outerHeight(!0) - a.innerHeight(), e = b + c + d, f = $(window).height() - e, g = $(".cost_table"), h = g.outerHeight(!0) - g.height();
        return f -= h;
    },
    getCostTableContainerWidth: function() {
        return $(".cost_table").parent().width();
    },
    scaleCostTableContainer: function() {
        var a = this.getCostTableContainerHeight(), b = this.getCostTableContainerWidth();
        $(".cost_table").css({
            height: a,
            width: b
        });
    },
    displayData: function(a) {
        var b = document.getElementById("display_costs_container");
        b.innerHTML = "";
        var c = $("#ajax_loader");
        c.is(":empty") && c.html('<img class="ajax.loader" id="loader-img" alt="ajax-preloader" src="/assets/images/ajax-preloader-middle.gif" width="100" height="100" align="center" />'), 
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/display",
            data: a
        }).done(function(d) {
            d.success && d.content && d.content.length ? (aud.costs.generateTable(b, d.content, d.currencies), 
            aud.costs.lastRequestParams = a) : d.message ? alert(d.message) : $(b).html("No Results"), 
            c.is(":empty") || c.html(""), $(".display_costs, .display_costs_favorite").removeClass("disabled");
        }).fail(function() {
            alert("An error occured. Please try again!");
        });
    },
    reloadLastDisplayData: function() {
        jQuery.isEmptyObject(this.lastRequestParams) || this.displayData(this.lastRequestParams);
    }
}, $(document).ready(function() {
    aud.costs.init();
});

var aud = aud || {};

aud.homeSearch = {
    init: function() {
        this.bindSearch(".unassigned_campaigns_container"), this.bindSearch(".existing_usages_container");
    },
    bindSearch: function(a) {
        var b = $(a).find("form[name=searchForm]");
        b.on("submit", function(b) {
            b.preventDefault();
            var c = $(this).attr("name"), d = $(this).find("input[type=text]"), e = d.attr("id").replace(c + "_", ""), f = d.val();
            return aud.homeSearch.doAjaxRequest(e, f, a), !1;
        });
    },
    doAjaxRequest: function(a, b, c) {
        var d = encodeURI("/?" + a + "=" + b), e = c + " .result_container";
        $(e).addClass(aud.pagination.config.ajaxContainerClass), aud.pagination.doAjaxLoad(e, d);
    },
    getUsageAliases: function(a, b, c) {
        var d = {};
        d.usageId = a, d.dialogTitleMessage = b, $.ajax({
            method: "POST",
            dataType: "json",
            url: "/getAliasesNames",
            data: d,
            success: function(a, b, c) {
                a.success && $("#dialog-description").html(a.message);
            }
        });
    },
    popupInformation: function(a, b, c) {
        var d = {};
        d.dialogTitleMessage = a, $.ajax({
            method: "POST",
            dataType: "json",
            url: "/popupInformation",
            data: d
        }).done(function(a, d, e) {
            a.success && (aud.informationPopup.informationDialog(a.message), aud.informationPopup.bindCloseFunction("#popup_confirm_no"), 
            b && c && b(c.usageId, c.dialogTitleMessage, c.parent));
        });
    }
}, $(document).ready(function() {
    aud.homeSearch.init(), $("#countrySelector").selectpicker({
        size: 20
    });
}), $(document).on("click", ".moreAliases", function(a) {
    var b = {};
    b.usageId = $(this).data("usage-id"), b.dialogTitleMessage = $(this).data("dialog-title-message"), 
    b.parent = $(this).parent(), aud.homeSearch.popupInformation(b.dialogTitleMessage, aud.homeSearch.getUsageAliases, b);
});

var aud = aud || {};

aud.informationPopup = {
    bindCloseFunction: function(a) {
        $(a).on("click", function() {
            $("#dialog-wrapper").html("");
        });
    },
    informationDialog: function(a) {
        $("#dialog-wrapper").html(a);
    }
};

var aud = aud || {};

aud.location = {
    init: function() {
        var a = $("i#deleteTeam.icon.minus-sign"), b = $("i#deleteRegion.icon.minus-sign");
        this.bindDefaultRegionRadio(), this.bindDefaultTelephoneRadio(), $(document).on("ajax-request-finished", function(a, b) {
            aud.location.bindDefaultRegionRadio(), aud.location.bindDefaultTelephoneRadio();
        }), a.click(function(a) {
            var b = $(this).data("id"), c = $(this).data("confirmation-message");
            confirmationDialog("aud.location.deleteTeam(" + b + ")", c);
        }), b.click(function(a) {
            $(this).parents("tr").remove();
            var b = $(this).data("id"), c = $(this).data("confirmation-message");
            confirmationDialog("aud.location.deleteRegion(" + b + ")", c);
        });
    },
    bindDefaultTelephoneRadio: function() {
        $(".default-telephone-radio").on("click", function() {
            aud.location.setDefaultTelephone($(this));
        });
    },
    bindDefaultRegionRadio: function() {
        $(".default-region-radio").on("click", function() {
            aud.location.setDefaultRegion($(this));
        });
    },
    deleteRegion: function(a) {
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/location/region/delete",
            data: {
                regionId: a
            }
        }).done(function(a, b, c) {
            return a.success ? (window.location.reload(), !0) : ($("h3.form-error-title").html(a.message), 
            void $("div.form-group.form-name.form-error").show());
        });
    },
    deleteTeam: function(a) {
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/location/team/delete",
            data: {
                teamId: a
            }
        }).done(function(a, b, c) {
            return a.success ? (window.location.reload(), !0) : ($("h3.form-error-title").html(a.message), 
            void $("div.form-group.form-name.form-error").show());
        });
    },
    setDefaultRegion: function(a) {
        var b = a.val();
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/location/region/default",
            data: {
                regionId: b
            },
            error: function(a, b, c) {
                alert("An error occurred while setting the default region.");
            }
        });
    },
    setDefaultTelephone: function(a) {
        var b = a.val();
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/telephone/default",
            data: {
                regionId: b
            },
            error: function(a, b, c) {
                alert("An error occurred while setting the default phone number.");
            }
        });
    }
}, $(document).ready(function() {
    aud.location.init();
}), $(document).ready(function() {
    $(".navtoogle").click(function() {
        $(".navbar").toggleClass("down");
    });
}), $(document).ready(function() {
    $(".notification-center").css("top", -1 * $(".notification-center").outerHeight());
    var a = $(".notification-list li").length;
    a > 0 && setTimeout(function() {
        $(".notification-center").removeAttr("style"), $(".notification-center").css("visibility", "visible");
    }, 2e3);
});

var aud = aud || {};

aud.pagination = {
    config: {
        tempContainer: "paginationTemp",
        tempCount: 0,
        first: "&laquo;",
        prev: "&lt;",
        next: "&gt;",
        last: "&raquo;",
        ajaxContainerClass: "ajax-container"
    },
    init: function() {
        var a = ".pagination-wrapper", b = $(a);
        b.length && (b.show(), b.find("> .pagination").each(function() {
            $(this).data("setup") || aud.pagination.setup($(this));
        }));
    },
    preAjaxLoad: function(a) {
        var b = $(a + "." + aud.pagination.config.ajaxContainerClass).height(), c = $(a + "." + aud.pagination.config.ajaxContainerClass).width();
        $(a + "." + aud.pagination.config.ajaxContainerClass).css({
            height: b,
            width: c
        }).html('<span class="preloading"></span>');
    },
    doAjaxLoad: function(a, b) {
        this.preAjaxLoad(a);
        var c = this.createTempContainer();
        c.load(b + " " + a, function() {
            var b = $(a + "." + aud.pagination.config.ajaxContainerClass);
            c.wrapInner('<div class="temp_dimension_test"></div>');
            var d = c.find("> .temp_dimension_test");
            d.css({
                width: b.width()
            }), b.animate({
                height: d.height()
            }, 500, function() {
                b.html(c.html()), b.css({
                    height: "auto",
                    width: "auto"
                }), c.remove(), b.data("loading", !1), $(document).trigger("ajax-request-finished", [ a + "." + aud.pagination.config.ajaxContainerClass ]);
            });
        });
    },
    createTempContainer: function() {
        $(aud.pagination.config.tempContainer).length || $("body").append('<div id="' + aud.pagination.config.tempContainer + '"></div>');
        var a = $("#" + aud.pagination.config.tempContainer);
        return a.html("").css({
            width: "2000px",
            height: "auto",
            position: "absolute",
            left: "-2500px",
            overflow: "hidden"
        }), a;
    },
    setup: function(a) {
        return a.data("total") ? (this.setupPrevNextLinks(a), this.bindPages(a), $(a.data("container")).addClass(aud.pagination.config.ajaxContainerClass), 
        a.data("visible") && this.resizePaginationContainer(a), void a.data("setup", !0)) : !1;
    },
    setupPrevNextLinks: function(a) {
        var b = '<li class="page page-step" data-target="next"><a href="#">' + aud.pagination.config.next + "</a></li>", c = '<li class="page page-step" data-target="last"><a href="#">' + aud.pagination.config.last + "</a></li>", d = '<li class="page page-step" data-target="first"><a href="#">' + aud.pagination.config.first + "</a></li>", e = '<li class="page page-step" data-target="prev"><a href="#">' + aud.pagination.config.prev + "</a></li>";
        a.append(b + c), a.prepend(d + e);
    },
    bindPages: function(a) {
        a.find(".page").click(function(b) {
            var c = aud.pagination.getTargetFromPageItem($(this));
            return aud.pagination.goToPage(c, a), b.preventDefault(), !1;
        });
    },
    goToPage: function(a, b) {
        if ("last" === a ? a = b.data("total") : "first" === a && (a = 1), a > b.data("total") || 1 > a || a == b.data("current")) return !1;
        var c = b.data("container");
        if (!$(c).data("loading")) {
            $(c).data("loading", !0);
            var d = b.find('li[data-target="' + a + '"]'), e = d.find("> a"), f = e.attr("href");
            b.data("current", a), this.resizePaginationContainer(b), b.find(".active").removeClass("active"), 
            d.addClass("active"), this.doAjaxLoad(c, f);
        }
    },
    getTargetFromPageItem: function(a) {
        var b = a.closest(".pagination"), c = b.data("current"), d = a.data("target");
        switch (d) {
          case "next":
            d = c + 1;
            break;

          case "prev":
            d = c - 1;
        }
        return d;
    },
    resizePaginationContainer: function(a) {
        var b = a.data("visible"), c = a.data("total"), d = a.data("current"), e = Math.floor(b / 2), f = 1, g = b;
        d > c - e ? (f = c - b, g = c) : d > e + 1 && (f = d - e, g = d + e), a.find(".page").each(function() {
            var a = $(this).data("target");
            isNaN(a) && $(this).show(), f > a || a > g ? $(this).hide() : $(this).show();
        });
    }
}, $(document).ready(function() {
    aud.pagination.init(), $(document).on("ajax-request-finished", function(a, b) {
        aud.pagination.init();
    });
});

var chosen = "";

$("#referrerRegionNameResults").length && $(document).keydown(function(a) {
    var b = $("#referrerRegionNameResults");
    if (!b.is(":empty")) {
        if (40 == a.keyCode) {
            "" === chosen ? chosen = 0 : itemsCount > chosen + 1 && chosen++, $("li.referrerRegionListItem").removeClass("selected"), 
            $("li.referrerRegionListItem:eq(" + chosen + ")").addClass("selected");
            var c = $("p.referrerRegionItem-" + chosen).html();
            $("#referrerRegionName").val(c);
            var d = $("input.referrerRegionItemId-" + chosen).val();
            return $("#referrerRegionId").val(d), GetTelephoneNumbersForRegion(d), !1;
        }
        if (38 == a.keyCode) {
            "" === chosen ? chosen = 0 : chosen > 0 && chosen--, $("li.referrerRegionListItem").removeClass("selected"), 
            $("li.referrerRegionListItem:eq(" + chosen + ")").addClass("selected");
            var c = $("p.referrerRegionItem-" + chosen).html();
            $("#referrerRegionName").val(c);
            var d = $("input.referrerRegionItemId-" + chosen).val();
            return $("#referrerRegionId").val(d), GetTelephoneNumbersForRegion(d), !1;
        }
        if (27 == a.keyCode) return b.hide().html("").blur(), !1;
    }
});

var itemsCount = 0, ShowResultsReferrerRegionName = function(a) {
    var b = '<ul class="referrerRegionList">', c = 0;
    a.forEach(function(a) {
        b += 0 === c ? '<li class ="referrerRegionListItem selected"><p onclick="setRegion(\'' + a.regionId + "','" + a.regionName + '\')" class="referrerRegionItem-' + c + '">' + a.regionName + '</p><input type="hidden" class="referrerRegionItemId-' + c + '" value="' + a.regionId + '" /></li>' : '<li class ="referrerRegionListItem"><p onclick="setRegion(\'' + a.regionId + "','" + a.regionName + '\')" class="referrerRegionItem-' + c + '">' + a.regionName + '</p><input type="hidden" class="referrerRegionItemId-' + c + '" value="' + a.regionId + '" /></li>', 
        c++;
    }), b += "</ul>", $("#referrerRegionNameResults").html(b), $("#referrerRegionNameResults").show(), 
    itemsCount = c;
}, setRegion = function(a, b) {
    $("#referrerRegionName").val(b), $("#referrerRegionId").val(a), $("#referrerRegionNameResults").hide(), 
    GetTelephoneNumbersForRegion(a);
}, PopulateTelephoneSelectBox = function(a) {
    $("#referrerTelephone").html("");
    var b = '<option class="referrerSelectOption-0" value="" selected>Select telephone number</option>', c = 0;
    a.forEach(function(a) {
        b += '<option class="referrerSelectOption-' + c + '" value="' + a.telephoneId + '">' + a.telephoneNumber + "</option>", 
        c++;
    }), $("#referrerTelephone").html(b);
}, ClearResultsReffererRegionName = function() {
    $("#referrerRegionNameResults").html(""), $("#referrerRegionNameResults").hide();
}, GetTelephoneNumbersForRegion = function(a) {
    var b = {};
    b.regionId = a, $.ajax({
        method: "POST",
        dataType: "json",
        url: "/referrerGetTelephones",
        data: b,
        success: function(a, b, c) {
            a.success ? PopulateTelephoneSelectBox(a.message) : alert("No telephones for region.");
        }
    });
};

$(document).ready(function() {
    $("#referrerCreateButton").click(function() {
        var a = {};
        a.referrerName = $("#referrerName").val(), a.referrerTelephoneId = $("#referrerTelephone option:selected").val(), 
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/referrer/create",
            data: a,
            success: function(a, b, c) {
                if (a.success) {
                    var d = $("#referrerIndexUrl").val();
                    $(location).attr("href", d);
                } else $("h3.form-error-title").html(a.message), $("div.form-group.form-name.form-error").show();
            }
        });
    }), $("#referrerUpdateButton").click(function() {
        var a = {};
        a.referrerId = $("#referrerId").val(), a.referrerName = $("#referrerName").val(), 
        a.referrerTelephoneId = $("#referrerTelephone option:selected").val(), $.ajax({
            method: "POST",
            dataType: "json",
            url: "/referrer/update",
            data: a,
            success: function(a, b, c) {
                if (a.success) {
                    var d = $("#referrerIndexUrl").val();
                    $(location).attr("href", d);
                } else $("h3.form-error-title").html(a.message), $("div.form-group.form-name.form-error").show();
            }
        });
    });
    $("#referrerRegionName").val();
    $("#referrerRegionName").keyup(function(a) {
        if ($("#referrerRegionName").val() != content) {
            var b = $("#referrerRegionName").val();
            if (0 !== b.length && b) {
                var c = {};
                c.regionName = b, $.ajax({
                    method: "POST",
                    dataType: "json",
                    url: "/referrerGetRegions",
                    data: c,
                    success: function(a, b, c) {
                        a.success ? ShowResultsReferrerRegionName(a.message) : alert("No regions in database.");
                    }
                });
            } else ClearResultsReffererRegionName();
        }
    });
});

var aud = aud || {};

aud.searchSuggestions = {
    loaded: [],
    init: function() {
        var a = {
            "#searchForm_usage_keyword": "/getUsageSuggestions",
            "#searchForm_unassigned_campaign_keyword": "/getUnassignedCampaignSuggestions"
        };
        for (var b in a) if (a.hasOwnProperty(b)) {
            if (!$(b).length || -1 !== this.loaded.indexOf(b)) continue;
            this.loaded.push(b), this.prepareSuggestions(b, a[b]);
        }
    },
    prepareSuggestions: function(a, b) {
        $.ajax({
            method: "GET",
            dataType: "json",
            url: b
        }).done(function(b, c, d) {
            if (b.success && b.suggestions) {
                var e = jQuery.makeArray(b.suggestions);
                $(a).typeahead({
                    source: e,
                    items: -1,
                    minLength: 2,
                    autoSelect: !1,
                    afterSelect: function() {
                        $(a).closest("form").trigger("submit");
                    },
                    displayText: function(a) {
                        return a.length > 45 && (a = a.substr(0, 43) + "..."), a;
                    }
                }).bind("keyup", function(a) {
                    13 === a.keyCode && $(this).closest("form").trigger("submit");
                });
            }
        });
    }
}, $(document).ready(function() {
    aud.searchSuggestions.init();
}), $(document).ready(function() {
    $("select.selectpicker").focus(function() {
        $(this).next(".bootstrap-select").find(".selectpicker").focus();
    });
}), $(document).ready(function() {
    1 == $("h3.form-error-title").length && $("h3.form-error-title").html().length > 0 ? $("div.form-group.form-name.form-error").show() : $("div.form-group.form-name.form-error").hide(), 
    $("#selectAct").change(function() {
        var a = $("#selectAct option:selected").val();
        getTelephonesForUsage(a), $("#SelectedUsageId").val(a);
    }), $("#seoBacklinkActTelephone").change(function() {
        var a = $("#seoBacklinkActTelephone option:selected").val();
        $("#SelectedTelephoneId").val(a);
    }), $("#seoBacklinkActCreateButton").click(function() {
        CreateSeoBacklinkAct();
    }), $("#seoBacklinkActUpdateButton").click(function() {
        UpdateSeoBacklinkAct();
    });
});

var CreateSeoBacklinkAct = function() {
    var a = {};
    a.usageId = $("#selectAct option:selected").val(), a.telephoneId = $("#seoBacklinkActTelephone option:selected").val(), 
    $.ajax({
        method: "POST",
        dataType: "json",
        url: "/SeoBacklinkAct/create",
        data: a,
        success: function(a, b, c) {
            if (a.success) {
                var d = $("#seoBacklinkActIndexUrl").val();
                $(location).attr("href", d);
            } else $("h3.form-error-title").html(a.message), $("div.form-group.form-name.form-error").show();
        }
    });
}, UpdateSeoBacklinkAct = function() {
    var a = {};
    a.usageId = $("#selectAct option:selected").val(), a.telephoneId = $("#seoBacklinkActTelephone option:selected").val(), 
    a.seoBacklinkActId = $("#seoBacklinkActId").val(), $.ajax({
        method: "POST",
        dataType: "json",
        url: "/SeoBacklinkAct/update",
        data: a,
        success: function(a, b, c) {
            if (a.success) {
                var d = $("#seoBacklinkActIndexUrl").val();
                $(location).attr("href", d);
            } else $("h3.form-error-title").html(a.message), $("div.form-group.form-name.form-error").show();
        }
    });
}, getTelephonesForUsage = function(a) {
    var b = {};
    b.usageId = a, $.ajax({
        method: "POST",
        dataType: "json",
        url: "/SeoBacklinksAct/getTelephones",
        data: b,
        success: function(a, b, c) {
            if (a.success) {
                a.message;
                PopulateTelephoneNumbers(a.message);
            } else $("h3.form-error-title").html(a.message), $("div.form-group.form-name.form-error").show();
        }
    });
}, PopulateTelephoneNumbers = function(a) {
    var b = '<option value="" selected>Select telephone number</option>', c = 0;
    a.forEach(function(a) {
        b += '<option value="' + a.telephoneId + '">' + a.telephoneNumber + "</option>", 
        c++;
    }), $("#seoBacklinkActTelephone").html(""), $("#seoBacklinkActTelephone").html(b);
};

$(document).ready(function() {
    $(".categories_list_wrapper h2, .arrow-right").on("click", function() {
        $("#content").toggleClass("sidebarClosed");
    });
}), $(function() {
    function a(a, b, c) {
        $(a).length && (c = "undefined" != typeof c && c, $(".tree > ul > li").addClass("parent_li"), 
        $(a + " li .item").on("click", function(c) {
            var d = $(this).parent("li").find(" > ul > li, .input-tree");
            if (d.length > 0) $(this).find(" > i").toggleClass("arrow-right").toggleClass("arrow-down"), 
            d.is(":visible") ? d.hide("fast") : d.show("fast"); else {
                $(a).find(".activeCat").removeClass("activeCat"), $(this).addClass("activeCat");
                var e = $(".tree .activeCat").parent().parent().parent().find("> span.item span").html(), f = $(this).find(" > span").html();
                $(b + " .assigned-cat").html(" / " + e + " / " + f), $(b).closest("form").find("[type=submit]").removeClass("disabled");
            }
            c.stopPropagation();
        }), $(a).closest("form").find("[type=submit]").addClass("disabled"));
    }
    a(".tree-parent-cat", ".form-category", !0), $(".tree-parent-cat .parent_li > .item").each(function() {
        var a = $(this).parent("li").find(" > ul > li, .input-tree");
        a.length > 0 && ($(this).find(" > i").toggleClass("arrow-right").toggleClass("arrow-down"), 
        a.is(":visible") ? a.hide("fast") : a.show("fast"));
    }), a(".tree-campaign-aliases", ".form-camp-aliases");
});

var aud = aud || {};

aud.truncateText = {
    init: function() {
        var a = ".truncate-text";
        $(a).each(function() {
            if (!$(this).hasClass("is_truncated")) {
                $(this).addClass("is_truncated");
                var a = .9, b = $(this).parent().width() * a;
                $(this).css({
                    width: "auto"
                }).parent().css({
                    "white-space": "nowrap"
                });
                var c = $(this).width();
                c > b && ($(this).width(b), $(this).hasClass("truncate-text-tooltip") && aud.truncateText.tooltip($(this)));
            }
        });
    },
    tooltip: function(a) {
        a.data("content", a.text()), a.popover({
            trigger: "hover",
            placement: "top"
        });
    }
}, $(function() {
    aud.truncateText.init(), $(document).on("ajax-request-finished", function() {
        aud.truncateText.init();
    });
});

var unassignCampaign = function(a, b) {
    var c = {
        campaignAliasId: a,
        usageId: b
    }, d = $("#ajax_loader");
    d.is(":empty") && d.html('<img class="ajax.loader" id="loader-img" alt="ajax-preloader" src="/assets/images/ajax-preloader-middle.gif" width="100" height="100" align="center" />'), 
    $.ajax({
        method: "POST",
        dataType: "json",
        url: "/unassign",
        data: c
    }).done(function(a, b, c) {
        return alert(a.message), a.success ? (window.location.reload(), !0) : void (d.is(":empty") || d.html(""));
    });
}, aud = aud || {};

aud.usage = {
    init: function() {
        $(".usage_channel_selection").on("change", function(a) {
            $(this).closest("form").trigger("submit");
        });
    }
}, $(document).ready(function() {
    aud.usage.init();
});

var aud = aud || {};

aud.user = {
    messages: {
        confirmDeactivate: "Are you sure you want to deactivate this user?",
        confirmDelete: "Are you sure you want to DELETE this user?"
    },
    allCountriesField: null,
    defaultCountryField: null,
    init: function() {
        $(".user-toggle").on("mousedown", function(a) {
            var b = $(this).prop("checked");
            if (b) {
                if (confirm(aud.user.messages.confirmDeactivate)) return window.location.replace($(this).data("path")), 
                !0;
            } else window.location.replace($(this).data("path"));
            return !1;
        }), $(".user-delete").on("click", function(a) {
            return confirm(aud.user.messages.confirmDelete);
        }), this.bindCountrySelectorDependency();
    },
    getAllCountriesField: function() {
        return null === this.allCountriesField && (this.allCountriesField = $('select[name="user_countries[]"]')), 
        this.allCountriesField;
    },
    getDefaultCountryField: function() {
        return null === this.defaultCountryField && (this.defaultCountryField = $('select[name="campaigntool_campaigntoolbundle_user[defaultCountry]"]')), 
        this.defaultCountryField;
    },
    bindCountrySelectorDependency: function() {
        this.getAllCountriesField().on("change", function() {
            aud.user.limitDefaultCountryOptions();
        }).trigger("change");
    },
    getDefaultCountryFieldDisabledContainer: function() {
        var a = this.getDefaultCountryField().parent().find(".hidden-disabled");
        return a.length || (this.getDefaultCountryField().before('<span style="display: none" class="hidden-disabled"></span>'), 
        a = this.getDefaultCountryField().parent().find(".hidden-disabled")), a;
    },
    allowedValues: [],
    limitDefaultCountryOptions: function() {
        aud.user.allowedValues = [];
        var a = this.getAllCountriesField().find(":selected");
        a.each(function() {
            aud.user.allowedValues.push($(this).val());
        }), this.getDefaultCountryFieldDisabledContainer().find("option").appendTo(this.getDefaultCountryField()), 
        this.getDefaultCountryField().find("option").each(function() {
            -1 === $.inArray($(this).val(), aud.user.allowedValues) && $(this).appendTo(aud.user.getDefaultCountryFieldDisabledContainer());
        }), this.getDefaultCountryField().selectpicker("refresh");
    }
}, $(document).ready(function() {
    aud.user.init();
});