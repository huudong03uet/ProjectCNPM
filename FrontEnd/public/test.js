<!-- test -->
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
  crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>
<script>
  plugins: [
    // other plugins,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
  crossorigin="anonymous"></script>
<script src="/node_modules//owl.carousel//dist/owl.carousel.min.js"></script>
<script type="text/javascript" async src="//l.getsitecontrol.com/6y793m78.js">
</script>
<script type="text/javascript">
    window.jQuery = $;
  var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.arrayIteratorImpl = function (b) { var d = 0; return function () { return d < b.length ? { done: !1, value: b[d++] } : { done: !0 } } }; $jscomp.arrayIterator = function (b) { return { next: $jscomp.arrayIteratorImpl(b) } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, d, a) { b != Array.prototype && b != Object.prototype && (b[d] = a.value) }; $jscomp.getGlobal = function (b) { return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) };
  $jscomp.Symbol = function () { var b = 0; return function (d) { return $jscomp.SYMBOL_PREFIX + (d || "") + b++ } }(); $jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var b = $jscomp.global.Symbol.iterator; b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }); $jscomp.initSymbolIterator = function () { } };
  $jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var b = $jscomp.global.Symbol.asyncIterator; b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.iteratorPrototype = function (b) { $jscomp.initSymbolIterator(); b = { next: b }; b[$jscomp.global.Symbol.iterator] = function () { return this }; return b };
  $jscomp.iteratorFromArray = function (b, d) { $jscomp.initSymbolIterator(); b instanceof String && (b += ""); var a = 0, c = { next: function () { if (a < b.length) { var e = a++; return { value: d(e, b[e]), done: !1 } } c.next = function () { return { done: !0, value: void 0 } }; return c.next() } }; c[Symbol.iterator] = function () { return c }; return c };
  $jscomp.polyfill = function (b, d, a, c) { if (d) { a = $jscomp.global; b = b.split("."); for (c = 0; c < b.length - 1; c++) { var e = b[c]; e in a || (a[e] = {}); a = a[e] } b = b[b.length - 1]; c = a[b]; d = d(c); d != c && null != d && $jscomp.defineProperty(a, b, { configurable: !0, writable: !0, value: d }) } }; $jscomp.polyfill("Array.prototype.values", function (b) { return b ? b : function () { return $jscomp.iteratorFromArray(this, function (b, a) { return a }) } }, "es8", "es3");
  $jscomp.findInternal = function (b, d, a) { b instanceof String && (b = String(b)); for (var c = b.length, e = 0; e < c; e++) { var k = b[e]; if (d.call(a, k, e, b)) return { i: e, v: k } } return { i: -1, v: void 0 } }; $jscomp.polyfill("Array.prototype.find", function (b) { return b ? b : function (b, a) { return $jscomp.findInternal(this, b, a).v } }, "es6", "es3");
  (function (b) {
    function d(a, c) { this._initialized = !1; this.settings = null; this.popups = []; this.options = b.extend({}, d.Defaults, c); this.$element = b(a); this.init(); this.y = this.x = 0; this._interval; this._callbackOpened = this._popupOpened = this._menuOpened = !1; this.countdown = null } d.Defaults = {
      align: "right", mode: "regular", countdown: 0, drag: !1, buttonText: "Contact us", buttonSize: "large", menuSize: "normal", buttonIcon: '<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-825 -308)"><g><path transform="translate(825 308)" fill="#FFFFFF" d="M 19 4L 17 4L 17 13L 4 13L 4 15C 4 15.55 4.45 16 5 16L 16 16L 20 20L 20 5C 20 4.45 19.55 4 19 4ZM 15 10L 15 1C 15 0.45 14.55 0 14 0L 1 0C 0.45 0 0 0.45 0 1L 0 15L 4 11L 14 11C 14.55 11 15 10.55 15 10Z"/></g></g></svg>',
      //ajaxUrl: "http://localhost:3000",  
      ajaxUrl: "",
      action: "callback", phonePlaceholder: "+X-XXX-XXX-XX-XX", callbackSubmitText: "Waiting for call", reCaptcha: !1, reCaptchaAction: "callbackRequest", reCaptchaKey: "", errorMessage: "Connection error. Please try again.", callProcessText: "We are calling you to phone", callSuccessText: "Thank you.<br>We are call you back soon.", showMenuHeader: !1, menuHeaderText: "How would you like to contact us?", showHeaderCloseBtn: !0, menuInAnimationClass: "show-messageners-block", menuOutAnimationClass: "", eaderCloseBtnBgColor: "#787878",
      eaderCloseBtnColor: "#FFFFFF", items: [], itemsIconType: "rounded", iconsAnimationSpeed: 800, iconsAnimationPause: 2E3, promptPosition: "side", callbackFormFields: {
        name: { name: "name", enabled: !0, required: !0, type: "text", label: "Please enter your name", placeholder: "Your full name" }, email: { name: "email", enabled: !0, required: !1, type: "email", label: "Enter your email address", placeholder: "Optional field. Example: email@domain.com" }, time: {
          name: "time", enabled: !0, required: !1, type: "dropdown", label: "Please choose schedule time",
          values: [{ value: "asap", label: "Call me ASAP" }, "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
        }, phone: { name: "phone", enabled: !0, required: !0, type: "tel", label: "Please enter your phone number", placeholder: "+X-XXX-XXX-XX-XX" }, description: { name: "description", enabled: !0, required: !1, type: "textarea", label: "Please leave a message with your request" }
      }, theme: "#000000",
      callbackFormText: "Please enter your phone number<br>and we call you back soon", closeIcon: '<svg width="12" height="13" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-4087 108)"><g><path transform="translate(4087 -108)" fill="currentColor" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"></path></g></g></svg>', callbackStateIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>'
    };
    d.prototype.init = function () {
      if (this._initialized) return !1; this.destroy(); this.settings = b.extend({}, this.options); this.$element.addClass("arcontactus-widget").addClass("arcontactus-message"); "left" === this.settings.align ? this.$element.addClass("left") : this.$element.addClass("right"); this.settings.items.length ? (this.$element.append("\x3c!--noindex--\x3e"), this._initCallbackBlock(), "regular" == this.settings.mode && this._initMessengersBlock(), this.popups.length && this._initPopups(), this._initMessageButton(),
        this._initPrompt(), this._initEvents(), this.startAnimation(), this.$element.append("\x3c!--/noindex--\x3e"), this.$element.addClass("active")) : console.info("jquery.contactus:no items"); this._initialized = !0; this.$element.trigger("arcontactus.init")
    }; d.prototype.destroy = function () { if (!this._initialized) return !1; this.$element.html(""); this._initialized = !1; this.$element.trigger("arcontactus.destroy") }; d.prototype._initCallbackBlock = function () {
      var a = b("<div>", { class: "callback-countdown-block", style: this._colorStyle() }),
        c = b("<div>", { class: "callback-countdown-block-close", style: "background-color:" + this.settings.theme + "; color: #FFFFFF" }); c.append(this.settings.closeIcon); var e = b("<div>", { class: "callback-countdown-block-phone" }); e.append("<p>" + this.settings.callbackFormText + "</p>"); var d = b("<form>", { id: "arcu-callback-form", action: this.settings.ajaxUrl, method: "POST" }), h = b("<div>", { class: "callback-countdown-block-form-group" }), f = b("<input>", { name: "action", type: "hidden", value: this.settings.action }), g = b("<input>", {
          name: "gtoken",
          class: "ar-g-token", type: "hidden", value: ""
        }); h.append(f); h.append(g); this._initCallbackFormFields(h); f = b("<div>", { class: "arcu-form-group arcu-form-button" }); g = b("<button>", { id: "arcontactus-message-callback-phone-submit", type: "submit", style: this._backgroundStyle() }); g.text(this.settings.callbackSubmitText); f.append(g); h.append(f); f = b("<div>", { class: "callback-countdown-block-timer" }); g = b("<p>" + this.settings.callProcessText + "</p>"); var l = b("<div>", { class: "callback-countdown-block-timer_timer" }); f.append(g);
      f.append(l); g = b("<div>", { class: "callback-countdown-block-sorry" }); l = b("<p>" + this.settings.callSuccessText + "</p>"); g.append(l); d.append(h); e.append(d); a.append(c); a.append(e); a.append(f); a.append(g); this.$element.append(a)
    }; d.prototype._initCallbackFormFields = function (a) {
      var c = this; b.each(c.settings.callbackFormFields, function (e) {
        var d = b("<div>", {
          class: "arcu-form-group arcu-form-group-type-" + c.settings.callbackFormFields[e].type + " arcu-form-group-" + c.settings.callbackFormFields[e].name + (c.settings.callbackFormFields[e].required ?
            " arcu-form-group-required" : "")
        }), h = "<input>"; switch (c.settings.callbackFormFields[e].type) { case "textarea": h = "<textarea>"; break; case "dropdown": h = "<select>" }if (c.settings.callbackFormFields[e].label) { var f = b("<div>", { class: "arcu-form-label" }); f.html(c.settings.callbackFormFields[e].label); d.append(f) } var g = b(h, {
          name: c.settings.callbackFormFields[e].name, class: "arcu-form-field arcu-field-" + c.settings.callbackFormFields[e].name, required: c.settings.callbackFormFields[e].required, type: "dropdown" == c.settings.callbackFormFields[e].type ?
            null : c.settings.callbackFormFields[e].type, value: ""
        }); g.attr("placeholder", c.settings.callbackFormFields[e].placeholder); "dropdown" == c.settings.callbackFormFields[e].type && b.each(c.settings.callbackFormFields[e].values, function (a) {
          var d = c.settings.callbackFormFields[e].values[a], k = c.settings.callbackFormFields[e].values[a]; "object" == typeof c.settings.callbackFormFields[e].values[a] && (d = c.settings.callbackFormFields[e].values[a].value, k = c.settings.callbackFormFields[e].values[a].label); a = b("<option>",
            { value: d }); a.text(k); g.append(a)
        }); d.append(g); a.append(d)
      })
    }; d.prototype._initPopups = function () {
      var a = this, c = b("<div>", { class: "popups-block arcuAnimated" }), e = b("<div>", { class: "popups-list-container" }); b.each(this.popups, function () {
        var c = b("<div>", { class: "arcu-popup", id: "arcu-popup-" + this.id }), d = b("<div>", { class: "arcu-popup-header", style: a.settings.theme ? "background-color:" + a.settings.theme : null }), f = b("<div>", { class: "arcu-popup-close", style: a.settings.theme ? "background-color:" + a.settings.theme : null }),
          g = b("<div>", { class: "arcu-popup-back", style: a.settings.theme ? "background-color:" + a.settings.theme : null }); f.append(a.settings.closeIcon); g.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>');
        d.text(this.title); d.append(f); d.append(g); f = b("<div>", { class: "arcu-popup-content" }); f.html(this.popupContent); c.append(d); c.append(f); e.append(c)
      }); c.append(e); this.$element.append(c)
    }; d.prototype._initMessengersBlock = function () {
      var a = b("<div>", { class: "messangers-block arcuAnimated" }), c = b("<div>", { class: "messangers-list-container" }), e = b("<ul>", { class: "messangers-list" }); "normal" !== this.settings.menuSize && "large" !== this.settings.menuSize || a.addClass("lg"); "small" === this.settings.menuSize && a.addClass("sm");
      this._appendMessengerIcons(e); if (this.settings.showMenuHeader) { var d = b("<div>", { class: "arcu-menu-header", style: this.settings.theme ? "background-color:" + this.settings.theme : null }); d.html(this.settings.menuHeaderText); if (this.settings.showHeaderCloseBtn) { var h = b("<div>", { class: "arcu-header-close", style: "color:" + this.settings.headerCloseBtnColor + "; background:" + this.settings.headerCloseBtnBgColor }); h.append(this.settings.closeIcon); d.append(h) } a.append(d); a.addClass("has-header") } "rounded" == this.settings.itemsIconType ?
        e.addClass("rounded-items") : e.addClass("not-rounded-items"); c.append(e); a.append(c); this.$element.append(a)
    }; d.prototype._appendMessengerIcons = function (a) {
      var c = this; b.each(this.settings.items, function (e) {
        e = b("<li>", {}); if ("callback" == this.href) var d = b
          ("<div>", { class: "messanger call-back " + (this.class ? this.class : "") }); else if ("_popup" == this.href) c.popups.push(this), d = b("<div>", { class: "messanger arcu-popup-link " + (this.class ? this.class : ""), "data-id": this.id ? this.id : null }); else if (d = b("<a>", {
          class: "messanger " +
            (this.class ? this.class : ""), id: this.id ? this.id : null, rel: "nofollow noopener", href: this.href, target: this.target ? this.target : "_blank"
        }), this.onClick) { var h = this; d.on("click", function (a) { h.onClick(a) }) } var f = "rounded" == c.settings.itemsIconType ? b("<span>", { style: this.color ? "background-color:" + this.color : null }) : b("<span>", { style: (this.color ? "color:" + this.color : null) + "; background-color: transparent" }); f.append(this.icon); d.append(f); f = b("<div>", { class: "arcu-item-label" }); var g = b("<div>", { class: "arcu-item-title" });
        g.text(this.title); f.append(g); "undefined" != typeof this.subTitle && this.subTitle && (g = b("<div>", { class: "arcu-item-subtitle" }), g.text(this.subTitle), f.append(g)); d.append(f); e.append(d); a.append(e)
      })
    }; d.prototype._initMessageButton = function () {
      var a = this, c = b("<div>", { class: "arcontactus-message-button", style: this._backgroundStyle() }); "large" === this.settings.buttonSize && this.$element.addClass("lg"); "huge" === this.settings.buttonSize && this.$element.addClass("hg"); "medium" === this.settings.buttonSize && this.$element.addClass("md");
      "small" === this.settings.buttonSize && this.$element.addClass("sm"); var e = b("<div>", { class: "static" }); e.append(this.settings.buttonIcon); !1 !== this.settings.buttonText ? e.append("<p>" + this.settings.buttonText + "</p>") : c.addClass("no-text"); var d = b("<div>", { class: "callback-state", style: a._colorStyle() }); d.append(this.settings.callbackStateIcon); var h = b("<div>", { class: "icons hide" }), f = b("<div>", { class: "icons-line" }); b.each(this.settings.items, function (c) {
        c = b("<span>", { style: a._colorStyle() }); c.append(this.icon);
        f.append(c)
      }); h.append(f); var g = b("<div>", { class: "arcontactus-close" }); g.append(this.settings.closeIcon); var l = b("<div>", { class: "pulsation", style: a._backgroundStyle() }), m = b("<div>", { class: "pulsation", style: a._backgroundStyle() }); c.append(e).append(d).append(h).append(g).append(l).append(m); this.$element.append(c)
    }; d.prototype._initPrompt = function () {
      var a = b("<div>", { class: "arcontactus-prompt arcu-prompt-" + this.settings.promptPosition }), c = b("<div>", {
        class: "arcontactus-prompt-close", style: this._backgroundStyle() +
          "; color: #FFFFFF"
      }); c.append(this.settings.closeIcon); var e = b("<div>", { class: "arcontactus-prompt-inner" }); a.append(c).append(e); this.$element.append(a)
    }; d.prototype._initEvents = function () {
      var a = this.$element, c = this; a.find(".arcontactus-message-button").on("mousedown", function (a) { c.x = a.pageX; c.y = a.pageY }).on("mouseup", function (a) {
        if (c.settings.drag && a.pageX === c.x && a.pageY === c.y || !c.settings.drag) "regular" == c.settings.mode ? c._menuOpened || c._popupOpened || c._callbackOpened ? (c._menuOpened && c.closeMenu(),
          c._popupOpened && c.closePopup()) : c.openMenu() : c.openCallbackPopup(), a.preventDefault()
      }); this.settings.drag && (a.draggable(), a.get(0).addEventListener("touchmove", function (c) { var b = c.targetTouches[0]; a.get(0).style.left = b.pageX - 25 + "px"; a.get(0).style.top = b.pageY - 25 + "px"; c.preventDefault() }, !1)); b(document).on("click", function (a) { c.closeMenu(); c.closePopup() }); a.on("click", function (a) { a.stopPropagation() }); a.find(".call-back").on("click", function () { c.openCallbackPopup() }); a.find(".arcu-popup-link").on("click",
        function () { var a = b(this).data("id"); c.openPopup(a) }); a.find(".arcu-header-close").on("click", function () { c.closeMenu() }); a.find(".arcu-popup-close").on("click", function () { c.closePopup() }); a.find(".arcu-popup-back").on("click", function () { c.closePopup(); c.openMenu() }); a.find(".callback-countdown-block-close").on("click", function () { null != c.countdown && (clearInterval(c.countdown), c.countdown = null); c.closeCallbackPopup() }); a.find(".arcontactus-prompt-close").on("click", function () { c.hidePrompt() }); a.find("#arcu-callback-form").on("submit",
          function (b) { b.preventDefault(); a.find(".callback-countdown-block-phone").addClass("ar-loading"); c.settings.reCaptcha ? grecaptcha.execute(c.settings.reCaptchaKey, { action: c.settings.reCaptchaAction }).then(function (b) { a.find(".ar-g-token").val(b); c.sendCallbackRequest() }) : c.sendCallbackRequest() }); setTimeout(function () { c._processHash() }, 500); b(window).on("hashchange", function (a) { c._processHash() })
    }; d.prototype._processHash = function () {
      switch (window.location.hash) {
        case "#callback-form": case "callback-form": this.openCallbackPopup();
          break; case "#callback-form-close": case "callback-form-close": this.closeCallbackPopup(); break; case "#contactus-menu": case "contactus-menu": this.openMenu(); break; case "#contactus-menu-close": case "contactus-menu-close": this.closeMenu(); break; case "#contactus-hide": case "contactus-hide": this.hide(); break; case "#contactus-show": case "contactus-show": this.show()
      }
    }; d.prototype._callBackCountDownMethod = function () {
      var a = this.settings.countdown, c = this.$element, b = this, d = 60; c.find(".callback-countdown-block-phone, .callback-countdown-block-timer").toggleClass("display-flex");
      this.countdown = setInterval(function () { --d; var e = a, f = d; 10 > a && (e = "0" + a); 10 > d && (f = "0" + d); e = e + ":" + f; c.find(".callback-countdown-block-timer_timer").html(e); 0 === d && 0 === a && (clearInterval(b.countdown), b.countdown = null, c.find(".callback-countdown-block-sorry, .callback-countdown-block-timer").toggleClass("display-flex")); 0 === d && (d = 60, --a) }, 20)
    }; d.prototype.sendCallbackRequest = function () {
      var a = this, c = a.$element; this.$element.trigger("arcontactus.beforeSendCallbackRequest"); b.ajax({
        url: a.settings.ajaxUrl, type: "POST",
        dataType: "json", data: c.find("form").serialize(), success: function (b) { a.settings.countdown && a._callBackCountDownMethod(); c.find(".callback-countdown-block-phone").removeClass("ar-loading"); if (b.success) a.settings.countdown || c.find(".callback-countdown-block-sorry, .callback-countdown-block-phone").toggleClass("display-flex"); else if (b.errors) { var d = b.errors.join("\n\r"); alert(d) } else alert(a.settings.errorMessage); a.$element.trigger("arcontactus.successCallbackRequest", b) }, error: function () {
          c.find(".callback-countdown-block-phone").removeClass("ar-loading");
          alert(a.settings.errorMessage); a.$element.trigger("arcontactus.errorCallbackRequest")
        }
      })
    }; d.prototype.show = function () { this.$element.addClass("active"); this.$element.trigger("arcontactus.show") }; d.prototype.hide = function () { this.$element.removeClass("active"); this.$element.trigger("arcontactus.hide") }; d.prototype.openPopup = function (a) {
      this.closeMenu(); var b = this.$element; b.find("#arcu-popup-" + a).addClass("show-messageners-block"); b.find("#arcu-popup-" + a).hasClass("popup-opened") || (this.stopAnimation(),
        b.addClass("popup-opened"), b.find("#arcu-popup-" + a).addClass(this.settings.menuInAnimationClass), b.find(".arcontactus-close").addClass("show-messageners-block"), b.find(".icons, .static").addClass("hide"), b.find(".pulsation").addClass("stop"), this._popupOpened = !0, this.$element.trigger("arcontactus.openPopup"))
    }; d.prototype.closePopup = function () {
      var a = this.$element; a.find(".arcu-popup").hasClass("show-messageners-block") && (setTimeout(function () { a.removeClass("popup-opened") }, 150), a.find(".arcu-popup").removeClass(this.settings.menuInAnimationClass).addClass(this.settings.menuOutAnimationClass),
        setTimeout(function () { a.removeClass("popup-opened") }, 150), a.find(".arcontactus-close").removeClass("show-messageners-block"), a.find(".icons, .static").removeClass("hide"), a.find(".pulsation").removeClass("stop"), this.startAnimation(), this._popupOpened = !1, this.$element.trigger("arcontactus.closeMenu"))
    }; d.prototype.openMenu = function () {
      if ("callback" == this.settings.mode) return console.log("Widget in callback mode"), !1; var a = this.$element; a.find(".messangers-block").hasClass(this.settings.menuInAnimationClass) ||
        (this.stopAnimation(), a.addClass("open"), a.find(".messangers-block").addClass(this.settings.menuInAnimationClass), a.find(".arcontactus-close").addClass("show-messageners-block"), a.find(".icons, .static").addClass("hide"), a.find(".pulsation").addClass("stop"), this._menuOpened = !0, this.$element.trigger("arcontactus.openMenu"))
    }; d.prototype.closeMenu = function () {
      if ("callback" == this.settings.mode) return console.log("Widget in callback mode"), !1; var a = this.$element, b = this; a.find(".messangers-block").hasClass(this.settings.menuInAnimationClass) &&
        (setTimeout(function () { a.removeClass("open") }, 150), a.find(".messangers-block").removeClass(this.settings.menuInAnimationClass).addClass(this.settings.menuOutAnimationClass), setTimeout(function () { a.find(".messangers-block").removeClass(b.settings.menuOutAnimationClass) }, 1E3), a.find(".arcontactus-close").removeClass("show-messageners-block"), a.find(".icons, .static").removeClass("hide"), a.find(".pulsation").removeClass("stop"), this.startAnimation(), this._menuOpened = !1, this.$element.trigger("arcontactus.closeMenu"))
    };
    d.prototype.toggleMenu = function () { var a = this.$element; this.hidePrompt(); if (a.find(".callback-countdown-block").hasClass("display-flex")) return !1; a.find(".messangers-block").hasClass(this.settings.menuInAnimationClass) ? this.closeMenu() : this.openMenu(); this.$element.trigger("arcontactus.toggleMenu") }; d.prototype.openCallbackPopup = function () {
      var a = this.$element; a.addClass("opened"); this.closeMenu(); this.stopAnimation(); a.find(".icons, .static").addClass("hide"); a.find(".pulsation").addClass("stop");
      a.find(".callback-countdown-block").addClass("display-flex"); a.find(".callback-countdown-block-phone").addClass("display-flex"); a.find(".callback-state").addClass("display-flex"); this._callbackOpened = !0; this.$element.trigger("arcontactus.openCallbackPopup")
    }; d.prototype.closeCallbackPopup = function () {
      var a = this.$element; a.removeClass("opened"); a.find(".messangers-block").removeClass(this.settings.menuInAnimationClass); a.find(".arcontactus-close").removeClass("show-messageners-block"); a.find(".icons, .static").removeClass("hide");
      a.find(".pulsation").removeClass("stop"); a.find(".callback-countdown-block, .callback-countdown-block-phone, .callback-countdown-block-sorry, .callback-countdown-block-timer").removeClass("display-flex"); a.find(".callback-state").removeClass("display-flex"); this.startAnimation(); this._callbackOpened = !1; this.$element.trigger("arcontactus.closeCallbackPopup")
    }; d.prototype.startAnimation = function () {
      var a = this.$element, b = a.find(".icons-line"), d = a.find(".static"), k = a.find(".icons-line>span:first-child").width() +
        40; if ("huge" === this.settings.buttonSize) var h = 2, f = 0; "large" === this.settings.buttonSize && (h = 2, f = 0); "medium" === this.settings.buttonSize && (h = 4, f = -2); "small" === this.settings.buttonSize && (h = 4, f = -2); var g = a.find(".icons-line>span").length, l = 0; this.stopAnimation(); if (0 === this.settings.iconsAnimationSpeed) return !1; var m = this; this._interval = setInterval(function () {
          0 === l && (b.parent().removeClass("hide"), d.addClass("hide")); var a = "translate(" + -(k * l + h) + "px, " + f + "px)"; b.css({
            "-webkit-transform": a, "-ms-transform": a,
            transform: a
          }); l++; if (l > g) { if (l > g + 1) { if (m.settings.iconsAnimationPause) return m.stopAnimation(), setTimeout(function () { if (m._callbackOpened || m._menuOpened || m._popupOpened) return !1; m.startAnimation() }, m.settings.iconsAnimationPause), !1; l = 0 } b.parent().addClass("hide"); d.removeClass("hide"); a = "translate(" + -h + "px, " + f + "px)"; b.css({ "-webkit-transform": a, "-ms-transform": a, transform: a }) }
        }, this.settings.iconsAnimationSpeed)
    }; d.prototype.stopAnimation = function () {
      clearInterval(this._interval); var a = this.$element,
        b = a.find(".icons-line"); a = a.find(".static"); b.parent().addClass("hide"); a.removeClass("hide"); b.css({ "-webkit-transform": "translate(-2px, 0px)", "-ms-transform": "translate(-2px, 0px)", transform: "translate(-2px, 0px)" })
    }; d.prototype.showPrompt = function (a) { var b = this.$element.find(".arcontactus-prompt"); a && a.content && b.find(".arcontactus-prompt-inner").html(a.content); b.addClass("active"); this.$element.trigger("arcontactus.showPrompt") }; d.prototype.hidePrompt = function () {
      this.$element.find(".arcontactus-prompt").removeClass("active");
      this.$element.trigger("arcontactus.hidePrompt")
    }; d.prototype.showPromptTyping = function () { this.$element.find(".arcontactus-prompt").find(".arcontactus-prompt-inner").html(""); this._insertPromptTyping(); this.showPrompt({}); this.$element.trigger("arcontactus.showPromptTyping") }; d.prototype._insertPromptTyping = function () { var a = this.$element.find(".arcontactus-prompt-inner"), c = b("<div>", { class: "arcontactus-prompt-typing" }), d = b("<div>"); c.append(d); c.append(d.clone()); c.append(d.clone()); a.append(c) }; d.prototype.hidePromptTyping =
      function () { this.$element.find(".arcontactus-prompt").removeClass("active"); this.$element.trigger("arcontactus.hidePromptTyping") }; d.prototype._backgroundStyle = function () { return "background-color: " + this.settings.theme }; d.prototype._colorStyle = function () { return "color: " + this.settings.theme }; b.fn.contactUs = function (a) {
        var c = Array.prototype.slice.call(arguments, 1); return this.each(function () {
          var e = b(this), k = e.data("ar.contactus"); k || (k = new d(this, "object" == typeof a && a), e.data("ar.contactus", k)); "string" ==
            typeof a && "_" !== a.charAt(0) && k[a].apply(k, c)
        })
      }; b.fn.contactUs.Constructor = d
  })(jQuery);
</script>
<script type="text/javascript">

  window.jQuery = $;


  var arCuMessages = ["hello!", "Please visit our best and<br/> greatest web site!"];
  var arCuPromptClosed = false;
  var arCuDelayFirst = 500;
  var _arCuTimeOut = null;
  var arCuDelayFirst = 2000;
  var arCuTypingTime = 2000;
  var arCuMessageTime = 4000;
  var arCuCloseLastMessage = false;
  var arCuLoop = false;
  function arCuShowMessage(index) {
    if (arCuPromptClosed) {
      return false;
    }
    if (typeof arCuMessages[index] !== 'undefined') {
      $('#contact').contactUs('showPromptTyping');

      _arCuTimeOut = setTimeout(function () {
        if (arCuPromptClosed) {
          return false;
        }
        $('#contact').contactUs('showPrompt', {
          content: arCuMessages[index]
        });
        index++;
        _arCuTimeOut = setTimeout(function () {
          if (arCuPromptClosed) {
            return false;
          }
          arCuShowMessage(index);
        }, arCuMessageTime);
      }, arCuTypingTime);
    } else {
      if (arCuCloseLastMessage) {
        $('#contact').contactUs('hidePrompt');
      }
      if (arCuLoop) {
        arCuShowMessage(0);
      }
    }
  };
  function arCuShowMessages() {
    setTimeout(function () {
      clearTimeout(_arCuTimeOut);
      arCuShowMessage(0);
    }, arCuDelayFirst);
  }
  window.addEventListener('load', function () {
    $('#contact').on('arcontactus.init', function () {
      $('#contact').addClass('arcuAnimated').addClass('flipInY');
      setTimeout(function () {
        $('#contact').removeClass('flipInY');
      }, 1000);
      arCuShowMessages();
    });
    $('#contact').contactUs({
      drag: false,
      reCaptcha: false,
      menuSize: 'small',
      buttonSize: 'small',
      buttonText: false, 
      iconsAnimationSpeed: 800,
      menuHeaderText: 'How would you like to contact us?',
      itemsIconType: 'rounded',
      countdown: 0,
      showMenuHeader: true,
      showHeaderCloseBtn: true,
      headerCloseBtnColor: '#ffffff',
      headerCloseBtnBgColor: '#f26364',
      promptPosition: 'side',
      theme: '#f26364',
      //callbackFormFields: {
      //  name: {
      //    name: 'name',
      //    enabled: true,
      //    required: false,
      //    type: 'text',
      //    label: "",
      //    placeholder: "Enter your name (optional)"
      //  },
      //  email: {
      //    name: 'email',
      //    enabled: true,
      //    required: false,
      //    type: 'text',
      //    label: "",
      //    placeholder: "Enter your email (optional)"
      //  },
      //  select: {
      //    name: 'select',
      //    enabled: true,
      //    required: false,
      //    type: 'dropdown',
      //    label: "Select field",
      //    values: [
      //      {
      //        value: 1,
      //        label: 'One'
      //      },
      //      {
      //        value: 2,
      //        label: 'Two'
      //      }
      //    ],
      //    placeholder: "Enter your email (optional)"
      //  },
      //  phone: {
      //    name: 'phone',
      //    enabled: true,
      //    required: true,
      //    type: 'tel',
      //    label: '',
      //    placeholder: "+XXX-XX-XXX-XX-XX"
      //  },
      //  gdpr: {
      //    name: 'gdpr',
      //    enabled: true,
      //    required: true,
      //    type: 'checkbox',
      //    label: "I accept D3K rules",
      //  }
      //},
      items: [
        {
          title: 'Facebook',
          subTitle: 'Typically response in 30 minutes',
         icon: '<i class="fab fa-facebook"></i>',
          href: 'https://www.facebook.com/profile.php?id=100033353748879',
          color: '#31ADFF'
        },
        {
          title: 'Messenger',
          subTitle: 'Typically response in 30 minutes',
          icon: '<i class="fab fa-facebook-messenger"></i>',
          href: 'https://www.facebook.com/profile.php?id=100033353748879',
          color: '#31ADFF'
        },
        
        {
          title: 'Zalo',
          icon: '<i class="fab fa-facebook-messenger"></i>',
          subTitle: 'Typically response in 30 minutes',
          href: 'https://chat.zalo.me/',
          color: '#7c529d'
        },
        {
          title: 'Email us',
          subTitle: 'Send email directly',
          icon: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg>',
          href: 'mailto:2102076@vnu.edu.vn',
          color: '#FF643A'
        },
        {
          title: 'Callback request',
          subTitle: 'We call you back ASAP',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>',
          href: 'callback',
          color: '#4EB625'
        }
      ]
    });
  })
</script>