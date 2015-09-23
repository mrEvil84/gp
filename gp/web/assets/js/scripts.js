/*! piotr.kowerzanow | http://piotr.kowerzanow.com/ 23-09-2015 */
!function(a) {
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
});

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