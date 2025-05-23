var zL = Object.defineProperty
  , QL = Object.defineProperties
  , KL = Object.getOwnPropertyDescriptors
  , p0 = Object.getOwnPropertySymbols
  , YL = Object.prototype.hasOwnProperty
  , ZL = Object.prototype.propertyIsEnumerable
  , g0 = (at,pe,we)=>pe in at ? zL(at, pe, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: we
}) : at[pe] = we
  , F = (at,pe)=>{
    for (var we in pe || (pe = {}))
        YL.call(pe, we) && g0(at, we, pe[we]);
    if (p0)
        for (var we of p0(pe))
            ZL.call(pe, we) && g0(at, we, pe[we]);
    return at
}
  , st = (at,pe)=>QL(at, KL(pe));
(self.webpackChunkFirebase = self.webpackChunkFirebase || []).push([[179], {
    659: function(at) {
        at.exports = function() {
            "use strict";
            const pe = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            })
              , we = "SweetAlert2:"
              , Gt = c=>c.charAt(0).toUpperCase() + c.slice(1)
              , Je = c=>Array.prototype.slice.call(c)
              , Ae = c=>{
                console.warn("".concat(we, " ").concat("object" == typeof c ? c.join(" ") : c))
            }
              , Ie = c=>{
                console.error("".concat(we, " ").concat(c))
            }
              , so = []
              , Wo = (c,d)=>{
                (c=>{
                    so.includes(c) || (so.push(c),
                    Ae(c))
                }
                )('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(d, '" instead.'))
            }
              , Wt = c=>"function" == typeof c ? c() : c
              , Nr = c=>c && "function" == typeof c.toPromise
              , Fr = c=>Nr(c) ? c.toPromise() : Promise.resolve(c)
              , Or = c=>c && Promise.resolve(c) === c
              , el = c=>c instanceof Element || (c=>"object" == typeof c && c.jquery)(c)
              , jn = c=>{
                const d = {};
                for (const p in c)
                    d[c[p]] = "swal2-" + c[p];
                return d
            }
              , D = jn(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"])
              , ao = jn(["success", "warning", "info", "question", "error"])
              , ke = ()=>document.body.querySelector(".".concat(D.container))
              , ur = c=>{
                const d = ke();
                return d ? d.querySelector(c) : null
            }
              , ht = c=>ur(".".concat(c))
              , le = ()=>ht(D.popup)
              , cr = ()=>ht(D.icon)
              , tl = ()=>ht(D.title)
              , kr = ()=>ht(D["html-container"])
              , Hn = ()=>ht(D.image)
              , Nc = ()=>ht(D["progress-steps"])
              , lo = ()=>ht(D["validation-message"])
              , oe = ()=>ur(".".concat(D.actions, " .").concat(D.confirm))
              , wn = ()=>ur(".".concat(D.actions, " .").concat(D.deny))
              , Vr = ()=>ur(".".concat(D.loader))
              , dr = ()=>ur(".".concat(D.actions, " .").concat(D.cancel))
              , Ot = ()=>ht(D.actions)
              , ds = ()=>ht(D.footer)
              , uo = ()=>ht(D["timer-progress-bar"])
              , Fe = ()=>ht(D.close)
              , ce = ()=>{
                const c = Je(le().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((p,_)=>(p = parseInt(p.getAttribute("tabindex"))) > (_ = parseInt(_.getAttribute("tabindex"))) ? 1 : p < _ ? -1 : 0)
                  , d = Je(le().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(p=>"-1" !== p.getAttribute("tabindex"));
                return (c=>{
                    const d = [];
                    for (let p = 0; p < c.length; p++)
                        -1 === d.indexOf(c[p]) && d.push(c[p]);
                    return d
                }
                )(c.concat(d)).filter(p=>kt(p))
            }
              , co = ()=>!qo() && !document.body.classList.contains(D["no-backdrop"])
              , qo = ()=>document.body.classList.contains(D["toast-shown"])
              , fo = {
                previousBodyPadding: null
            }
              , lt = (c,d)=>{
                if (c.textContent = "",
                d) {
                    const _ = (new DOMParser).parseFromString(d, "text/html");
                    Je(_.querySelector("head").childNodes).forEach(E=>{
                        c.appendChild(E)
                    }
                    ),
                    Je(_.querySelector("body").childNodes).forEach(E=>{
                        c.appendChild(E)
                    }
                    )
                }
            }
              , zo = (c,d)=>{
                if (!d)
                    return !1;
                const p = d.split(/\s+/);
                for (let _ = 0; _ < p.length; _++)
                    if (!c.classList.contains(p[_]))
                        return !1;
                return !0
            }
              , qt = (c,d,p)=>{
                if (((c,d)=>{
                    Je(c.classList).forEach(p=>{
                        !Object.values(D).includes(p) && !Object.values(ao).includes(p) && !Object.values(d.showClass).includes(p) && c.classList.remove(p)
                    }
                    )
                }
                )(c, d),
                d.customClass && d.customClass[p]) {
                    if ("string" != typeof d.customClass[p] && !d.customClass[p].forEach)
                        return Ae("Invalid type of customClass.".concat(p, '! Expected string or iterable object, got "').concat(typeof d.customClass[p], '"'));
                    te(c, d.customClass[p])
                }
            }
              , rl = (c,d)=>{
                if (!d)
                    return null;
                switch (d) {
                case "select":
                case "textarea":
                case "file":
                    return Cn(c, D[d]);
                case "checkbox":
                    return c.querySelector(".".concat(D.checkbox, " input"));
                case "radio":
                    return c.querySelector(".".concat(D.radio, " input:checked")) || c.querySelector(".".concat(D.radio, " input:first-child"));
                case "range":
                    return c.querySelector(".".concat(D.range, " input"));
                default:
                    return Cn(c, D.input)
                }
            }
              , fs = c=>{
                if (c.focus(),
                "file" !== c.type) {
                    const d = c.value;
                    c.value = "",
                    c.value = d
                }
            }
              , Oc = (c,d,p)=>{
                !c || !d || ("string" == typeof d && (d = d.split(/\s+/).filter(Boolean)),
                d.forEach(_=>{
                    c.forEach ? c.forEach(E=>{
                        p ? E.classList.add(_) : E.classList.remove(_)
                    }
                    ) : p ? c.classList.add(_) : c.classList.remove(_)
                }
                ))
            }
              , te = (c,d)=>{
                Oc(c, d, !0)
            }
              , on = (c,d)=>{
                Oc(c, d, !1)
            }
              , Cn = (c,d)=>{
                for (let p = 0; p < c.childNodes.length; p++)
                    if (zo(c.childNodes[p], d))
                        return c.childNodes[p]
            }
              , Qo = (c,d,p)=>{
                p === "".concat(parseInt(p)) && (p = parseInt(p)),
                p || 0 === parseInt(p) ? c.style[d] = "number" == typeof p ? "".concat(p, "px") : p : c.style.removeProperty(d)
            }
              , Xe = function(c) {
                c.style.display = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex"
            }
              , be = c=>{
                c.style.display = "none"
            }
              , ol = (c,d,p,_)=>{
                const E = c.querySelector(d);
                E && (E.style[p] = _)
            }
              , hs = (c,d,p)=>{
                d ? Xe(c, p) : be(c)
            }
              , kt = c=>!(!c || !(c.offsetWidth || c.offsetHeight || c.getClientRects().length))
              , il = c=>c.scrollHeight > c.clientHeight
              , kc = c=>{
                const d = window.getComputedStyle(c)
                  , p = parseFloat(d.getPropertyValue("animation-duration") || "0")
                  , _ = parseFloat(d.getPropertyValue("transition-duration") || "0");
                return p > 0 || _ > 0
            }
              , sl = function(c) {
                let d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const p = uo();
                kt(p) && (d && (p.style.transition = "none",
                p.style.width = "100%"),
                setTimeout(()=>{
                    p.style.transition = "width ".concat(c / 1e3, "s linear"),
                    p.style.width = "0%"
                }
                , 10))
            }
              , Vc = ()=>"undefined" == typeof window || "undefined" == typeof document
              , al = '\n <div xxx aria-labelledby="'.concat(D.title, '" aria-describedby="').concat(D["html-container"], '" class="').concat(D.popup, '" tabindex="-1">\n   <button type="button" class="').concat(D.close, '"></button>\n   <ul class="').concat(D["progress-steps"], '"></ul>\n   <div class="').concat(D.icon, '"></div>\n   <img class="').concat(D.image, '" />\n   <h2 class="').concat(D.title, '" id="').concat(D.title, '"></h2>\n   <div class="').concat(D["html-container"], '" id="').concat(D["html-container"], '"></div>\n   <input class="').concat(D.input, '" />\n   <input type="file" class="').concat(D.file, '" />\n   <div class="').concat(D.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(D.select, '"></select>\n   <div class="').concat(D.radio, '"></div>\n   <label for="').concat(D.checkbox, '" class="').concat(D.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(D.label, '"></span>\n   </label>\n   <textarea id="mongmuon" class="').concat(D.textarea, '">xxxx</textarea>\n   <div class="').concat(D["validation-message"], '" id="').concat(D["validation-message"], '"></div>\n   <div class="').concat(D.actions, '">\n     <div class="').concat(D.loader, '"></div>\n     <button type="button" class="').concat(D.confirm, '"></button>\n     <button type="button" class="').concat(D.deny, '"></button>\n     <button type="button" class="').concat(D.cancel, '"></button>\n   </div>\n   <div class="').concat(D.footer, '"></div>\n   <div class="').concat(D["timer-progress-bar-container"], '">\n     <div class="').concat(D["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, "")
              , Un = ()=>{
                $r.isVisible() && $r.resetValidationMessage()
            }
              , fl = c=>{
                const d = (()=>{
                    const c = ke();
                    return !!c && (c.remove(),
                    on([document.documentElement, document.body], [D["no-backdrop"], D["toast-shown"], D["has-column"]]),
                    !0)
                }
                )();
                if (Vc())
                    return void Ie("SweetAlert2 requires document to initialize");
                const p = document.createElement("div");
                p.className = D.container,
                d && te(p, D["no-transition"]),
                lt(p, al);
                const _ = (c=>"string" == typeof c ? document.querySelector(c) : c)(c.target);
                _.appendChild(p),
                (c=>{
                    const d = le();
                    d.setAttribute("role", c.toast ? "alert" : "dialog"),
                    d.setAttribute("aria-live", c.toast ? "polite" : "assertive"),
                    c.toast || d.setAttribute("aria-modal", "true")
                }
                )(c),
                (c=>{
                    "rtl" === window.getComputedStyle(c).direction && te(ke(), D.rtl)
                }
                )(_),
                (()=>{
                    const c = le()
                      , d = Cn(c, D.input)
                      , p = Cn(c, D.file)
                      , _ = c.querySelector(".".concat(D.range, " input"))
                      , E = c.querySelector(".".concat(D.range, " output"))
                      , P = Cn(c, D.select)
                      , Ue = c.querySelector(".".concat(D.checkbox, " input"))
                      , Mt = Cn(c, D.textarea);
                    d.oninput = Un,
                    p.onchange = Un,
                    P.onchange = Un,
                    Ue.onchange = Un,
                    Mt.oninput = Un,
                    _.oninput = ()=>{
                        Un(),
                        E.value = _.value
                    }
                    ,
                    _.onchange = ()=>{
                        Un(),
                        _.nextSibling.value = _.value
                    }
                }
                )()
            }
              , Ko = (c,d)=>{
                c instanceof HTMLElement ? d.appendChild(c) : "object" == typeof c ? hl(c, d) : c && lt(d, c)
            }
              , hl = (c,d)=>{
                c.jquery ? sn(d, c) : lt(d, c.toString())
            }
              , sn = (c,d)=>{
                if (c.textContent = "",
                0 in d)
                    for (let p = 0; p in d; p++)
                        c.appendChild(d[p].cloneNode(!0));
                else
                    c.appendChild(d.cloneNode(!0))
            }
              , ho = (()=>{
                if (Vc())
                    return !1;
                const c = document.createElement("div")
                  , d = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
                for (const p in d)
                    if (Object.prototype.hasOwnProperty.call(d, p) && void 0 !== c.style[p])
                        return d[p];
                return !1
            }
            )()
              , jc = (c,d)=>{
                const p = Ot()
                  , _ = Vr();
                d.showConfirmButton || d.showDenyButton || d.showCancelButton ? Xe(p) : be(p),
                qt(p, d, "actions"),
                function(c, d, p) {
                    const _ = oe()
                      , E = wn()
                      , P = dr();
                    ps(_, "confirm", p),
                    ps(E, "deny", p),
                    ps(P, "cancel", p),
                    function(c, d, p, _) {
                        if (!_.buttonsStyling)
                            return on([c, d, p], D.styled);
                        te([c, d, p], D.styled),
                        _.confirmButtonColor && (c.style.backgroundColor = _.confirmButtonColor,
                        te(c, D["default-outline"])),
                        _.denyButtonColor && (d.style.backgroundColor = _.denyButtonColor,
                        te(d, D["default-outline"])),
                        _.cancelButtonColor && (p.style.backgroundColor = _.cancelButtonColor,
                        te(p, D["default-outline"]))
                    }(_, E, P, p),
                    p.reverseButtons && (p.toast ? (c.insertBefore(P, _),
                    c.insertBefore(E, _)) : (c.insertBefore(P, d),
                    c.insertBefore(E, d),
                    c.insertBefore(_, d)))
                }(p, _, d),
                lt(_, d.loaderHtml),
                qt(_, d, "loader")
            }
            ;
            function ps(c, d, p) {
                hs(c, p["show".concat(Gt(d), "Button")], "inline-block"),
                lt(c, p["".concat(d, "ButtonText")]),
                c.setAttribute("aria-label", p["".concat(d, "ButtonAriaLabel")]),
                c.className = D[d],
                qt(c, p, "".concat(d, "Button")),
                te(c, p["".concat(d, "ButtonClass")])
            }
            const Le = (c,d)=>{
                const p = ke();
                !p || (function(c, d) {
                    "string" == typeof d ? c.style.background = d : d || te([document.documentElement, document.body], D["no-backdrop"])
                }(p, d.backdrop),
                function(c, d) {
                    d in D ? te(c, D[d]) : (Ae('The "position" parameter is not valid, defaulting to "center"'),
                    te(c, D.center))
                }(p, d.position),
                function(c, d) {
                    if (d && "string" == typeof d) {
                        const p = "grow-".concat(d);
                        p in D && te(c, D[p])
                    }
                }(p, d.grow),
                qt(p, d, "container"))
            }
            ;
            var U = {
                awaitingPromise: new WeakMap,
                promise: new WeakMap,
                innerParams: new WeakMap,
                domCache: new WeakMap
            };
            const Dn = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
              , Gc = c=>{
                if (!ut[c.input])
                    return Ie('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const d = ms(c.input)
                  , p = ut[c.input](d, c);
                Xe(p),
                setTimeout(()=>{
                    fs(p)
                }
                )
            }
              , gs = (c,d)=>{
                const p = rl(le(), c);
                if (p) {
                    (c=>{
                        for (let d = 0; d < c.attributes.length; d++) {
                            const p = c.attributes[d].name;
                            ["type", "value", "style"].includes(p) || c.removeAttribute(p)
                        }
                    }
                    )(p);
                    for (const _ in d)
                        p.setAttribute(_, d[_])
                }
            }
              , gl = c=>{
                const d = ms(c.input);
                c.customClass && te(d, c.customClass.input)
            }
              , fr = (c,d)=>{
                (!c.placeholder || d.inputPlaceholder) && (c.placeholder = d.inputPlaceholder)
            }
              , po = (c,d,p)=>{
                if (p.inputLabel) {
                    c.id = D.input;
                    const _ = document.createElement("label")
                      , E = D["input-label"];
                    _.setAttribute("for", c.id),
                    _.className = E,
                    te(_, p.customClass.inputLabel),
                    _.innerText = p.inputLabel,
                    d.insertAdjacentElement("beforebegin", _)
                }
            }
              , ms = c=>{
                const d = D[c] ? D[c] : D.input;
                return Cn(le(), d)
            }
              , ut = {};
            ut.text = ut.email = ut.password = ut.number = ut.tel = ut.url = (c,d)=>("string" == typeof d.inputValue || "number" == typeof d.inputValue ? c.value = d.inputValue : Or(d.inputValue) || Ae('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof d.inputValue, '"')),
            po(c, c, d),
            fr(c, d),
            c.type = d.input,
            c),
            ut.file = (c,d)=>(po(c, c, d),
            fr(c, d),
            c),
            ut.range = (c,d)=>{
                const p = c.querySelector("input")
                  , _ = c.querySelector("output");
                return p.value = d.inputValue,
                p.type = d.input,
                _.value = d.inputValue,
                po(p, c, d),
                c
            }
            ,
            ut.select = (c,d)=>{
                if (c.textContent = "",
                d.inputPlaceholder) {
                    const p = document.createElement("option");
                    lt(p, d.inputPlaceholder),
                    p.value = "",
                    p.disabled = !0,
                    p.selected = !0,
                    c.appendChild(p)
                }
                return po(c, c, d),
                c
            }
            ,
            ut.radio = c=>(c.textContent = "",
            c),
            ut.checkbox = (c,d)=>{
                const p = rl(le(), "checkbox");
                p.value = 1,
                p.id = D.checkbox,
                p.checked = Boolean(d.inputValue);
                const _ = c.querySelector("span");
                return lt(_, d.inputPlaceholder),
                c
            }
            ,
            ut.textarea = (c,d)=>{
                c.value = d.inputValue,
                fr(c, d),
                po(c, c, d);
                return setTimeout(()=>{
                    if ("MutationObserver"in window) {
                        const _ = parseInt(window.getComputedStyle(le()).width);
                        new MutationObserver(()=>{
                            const P = c.offsetWidth + (_=>parseInt(window.getComputedStyle(_).marginLeft) + parseInt(window.getComputedStyle(_).marginRight))(c);
                            le().style.width = P > _ ? "".concat(P, "px") : null
                        }
                        ).observe(c, {
                            attributes: !0,
                            attributeFilter: ["style"]
                        })
                    }
                }
                ),
                c
            }
            ;
            const qc = (c,d)=>{
                const p = kr();
                qt(p, d, "htmlContainer"),
                d.html ? (Ko(d.html, p),
                Xe(p, "block")) : d.text ? (p.textContent = d.text,
                Xe(p, "block")) : be(p),
                ((c,d)=>{
                    const p = le()
                      , _ = U.innerParams.get(c)
                      , E = !_ || d.input !== _.input;
                    Dn.forEach(P=>{
                        const Ue = D[P]
                          , Mt = Cn(p, Ue);
                        gs(P, d.inputAttributes),
                        Mt.className = Ue,
                        E && be(Mt)
                    }
                    ),
                    d.input && (E && Gc(d),
                    gl(d))
                }
                )(c, d)
            }
              , ys = (c,d)=>{
                for (const p in ao)
                    d.icon !== p && on(c, ao[p]);
                te(c, ao[d.icon]),
                Be(c, d),
                Yc(),
                qt(c, d, "icon")
            }
              , Yc = ()=>{
                const c = le()
                  , d = window.getComputedStyle(c).getPropertyValue("background-color")
                  , p = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let _ = 0; _ < p.length; _++)
                    p[_].style.backgroundColor = d
            }
              , ml = (c,d)=>{
                c.textContent = "",
                lt(c, d.iconHtml ? yl(d.iconHtml) : "success" === d.icon ? '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ' : "error" === d.icon ? '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ' : yl({
                    question: "?",
                    warning: "!",
                    info: "i"
                }[d.icon]))
            }
              , Be = (c,d)=>{
                if (d.iconColor) {
                    c.style.color = d.iconColor,
                    c.style.borderColor = d.iconColor;
                    for (const p of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
                        ol(c, p, "backgroundColor", d.iconColor);
                    ol(c, ".swal2-success-ring", "borderColor", d.iconColor)
                }
            }
              , yl = c=>'<div class="'.concat(D["icon-content"], '">').concat(c, "</div>")
              , ue = (c,d)=>{
                const p = Nc();
                if (!d.progressSteps || 0 === d.progressSteps.length)
                    return be(p);
                Xe(p),
                p.textContent = "",
                d.currentProgressStep >= d.progressSteps.length && Ae("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
                d.progressSteps.forEach((_,E)=>{
                    const P = (c=>{
                        const d = document.createElement("li");
                        return te(d, D["progress-step"]),
                        lt(d, c),
                        d
                    }
                    )(_);
                    if (p.appendChild(P),
                    E === d.currentProgressStep && te(P, D["active-progress-step"]),
                    E !== d.progressSteps.length - 1) {
                        const Ue = (c=>{
                            const d = document.createElement("li");
                            return te(d, D["progress-step-line"]),
                            c.progressStepsDistance && (d.style.width = c.progressStepsDistance),
                            d
                        }
                        )(d);
                        p.appendChild(Ue)
                    }
                }
                )
            }
              , Cs = (c,d)=>{
                c.className = "".concat(D.popup, " ").concat(kt(c) ? d.showClass.popup : ""),
                d.toast ? (te([document.documentElement, document.body], D["toast-shown"]),
                te(c, D.toast)) : te(c, D.modal),
                qt(c, d, "popup"),
                "string" == typeof d.customClass && te(c, d.customClass),
                d.icon && te(c, D["icon-".concat(d.icon)])
            }
              , _l = (c,d)=>{
                ((c,d)=>{
                    const p = ke()
                      , _ = le();
                    d.toast ? (Qo(p, "width", d.width),
                    _.style.width = "100%",
                    _.insertBefore(Vr(), cr())) : Qo(_, "width", d.width),
                    Qo(_, "padding", d.padding),
                    d.background && (_.style.background = d.background),
                    be(lo()),
                    Cs(_, d)
                }
                )(0, d),
                Le(0, d),
                ue(0, d),
                ((c,d)=>{
                    const p = U.innerParams.get(c)
                      , _ = cr();
                    p && d.icon === p.icon ? (ml(_, d),
                    ys(_, d)) : d.icon || d.iconHtml ? d.icon && -1 === Object.keys(ao).indexOf(d.icon) ? (Ie('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon, '"')),
                    be(_)) : (Xe(_),
                    ml(_, d),
                    ys(_, d),
                    te(_, d.showClass.icon)) : be(_)
                }
                )(c, d),
                ((c,d)=>{
                    const p = Hn();
                    if (!d.imageUrl)
                        return be(p);
                    Xe(p, ""),
                    p.setAttribute("src", d.imageUrl),
                    p.setAttribute("alt", d.imageAlt),
                    Qo(p, "width", d.imageWidth),
                    Qo(p, "height", d.imageHeight),
                    p.className = D.image,
                    qt(p, d, "image")
                }
                )(0, d),
                ((c,d)=>{
                    const p = tl();
                    hs(p, d.title || d.titleText, "block"),
                    d.title && Ko(d.title, p),
                    d.titleText && (p.innerText = d.titleText),
                    qt(p, d, "title")
                }
                )(0, d),
                ((c,d)=>{
                    const p = Fe();
                    lt(p, d.closeButtonHtml),
                    qt(p, d, "closeButton"),
                    hs(p, d.showCloseButton),
                    p.setAttribute("aria-label", d.closeButtonAriaLabel)
                }
                )(0, d),
                qc(c, d),
                jc(0, d),
                ((c,d)=>{
                    const p = ds();
                    hs(p, d.footer),
                    d.footer && Ko(d.footer, p),
                    qt(p, d, "footer")
                }
                )(0, d),
                "function" == typeof d.didRender && d.didRender(le())
            }
              , R = ()=>oe() && oe().click();
            const $n = c=>{
                let d = le();
                d || $r.fire(),
                d = le();
                const p = Vr();
                qo() ? be(cr()) : B(d, c),
                Xe(p),
                d.setAttribute("data-loading", !0),
                d.setAttribute("aria-busy", !0),
                d.focus()
            }
              , B = (c,d)=>{
                const p = Ot()
                  , _ = Vr();
                !d && kt(oe()) && (d = oe()),
                Xe(p),
                d && (be(d),
                _.setAttribute("data-button-to-replace", d.className)),
                _.parentNode.insertBefore(_, d),
                te([c, p], D.loading)
            }
              , $ = {}
              , Vg = c=>new Promise(d=>{
                if (!c)
                    return d();
                const p = window.scrollX
                  , _ = window.scrollY;
                $.restoreFocusTimeout = setTimeout(()=>{
                    $.previousActiveElement && $.previousActiveElement.focus ? ($.previousActiveElement.focus(),
                    $.previousActiveElement = null) : document.body && document.body.focus(),
                    d()
                }
                , 100),
                window.scrollTo(p, _)
            }
            )
              , pt = ()=>{
                if ($.timeout)
                    return (()=>{
                        const c = uo()
                          , d = parseInt(window.getComputedStyle(c).width);
                        c.style.removeProperty("transition"),
                        c.style.width = "100%";
                        const p = parseInt(window.getComputedStyle(c).width)
                          , _ = parseInt(d / p * 100);
                        c.style.removeProperty("transition"),
                        c.style.width = "".concat(_, "%")
                    }
                    )(),
                    $.timeout.stop()
            }
              , Jc = ()=>{
                if ($.timeout) {
                    const c = $.timeout.start();
                    return sl(c),
                    c
                }
            }
            ;
            let ed = !1;
            const Cl = {};
            const jg = c=>{
                for (let d = c.target; d && d !== document; d = d.parentNode)
                    for (const p in Cl) {
                        const _ = d.getAttribute(p);
                        if (_)
                            return void Cl[p].fire({
                                template: _
                            })
                    }
            }
              , Lr = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                footer: "",
                icon: void 0,
                iconColor: void 0,
                iconHtml: void 0,
                template: void 0,
                toast: !1,
                showClass: {
                    popup: "swal2-show",
                    backdrop: "swal2-backdrop-show",
                    icon: "swal2-icon-show"
                },
                hideClass: {
                    popup: "swal2-hide",
                    backdrop: "swal2-backdrop-hide",
                    icon: "swal2-icon-hide"
                },
                customClass: {},
                target: "body",
                backdrop: !0,
                heightAuto: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                stopKeydownPropagation: !0,
                keydownListenerCapture: !1,
                showConfirmButton: !0,
                showDenyButton: !1,
                showCancelButton: !1,
                preConfirm: void 0,
                preDeny: void 0,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: void 0,
                denyButtonText: "No",
                denyButtonAriaLabel: "",
                denyButtonColor: void 0,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: void 0,
                buttonsStyling: !0,
                reverseButtons: !1,
                focusConfirm: !0,
                focusDeny: !1,
                focusCancel: !1,
                returnFocus: !0,
                showCloseButton: !1,
                closeButtonHtml: "&times;",
                closeButtonAriaLabel: "Close this dialog",
                loaderHtml: "",
                showLoaderOnConfirm: !1,
                showLoaderOnDeny: !1,
                imageUrl: void 0,
                imageWidth: void 0,
                imageHeight: void 0,
                imageAlt: "",
                timer: void 0,
                timerProgressBar: !1,
                width: void 0,
                padding: void 0,
                background: void 0,
                input: void 0,
                inputPlaceholder: "",
                inputLabel: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputAttributes: {},
                inputValidator: void 0,
                returnInputValueOnDeny: !1,
                validationMessage: void 0,
                grow: !1,
                position: "center",
                progressSteps: [],
                currentProgressStep: void 0,
                progressStepsDistance: void 0,
                willOpen: void 0,
                didOpen: void 0,
                didRender: void 0,
                willClose: void 0,
                didClose: void 0,
                didDestroy: void 0,
                scrollbarPadding: !0
            }
              , Hg = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
              , td = {}
              , Ug = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
              , gt = c=>Object.prototype.hasOwnProperty.call(Lr, c)
              , vl = c=>td[c]
              , $g = c=>{
                gt(c) || Ae('Unknown parameter "'.concat(c, '"'))
            }
              , Gg = c=>{
                Ug.includes(c) && Ae('The parameter "'.concat(c, '" is incompatible with toasts'))
            }
              , Q = c=>{
                vl(c) && Wo(c, vl(c))
            }
              , Wg = c=>{
                !c.backdrop && c.allowOutsideClick && Ae('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const d in c)
                    $g(d),
                    c.toast && Gg(d),
                    Q(d)
            }
            ;
            var bt = Object.freeze({
                isValidParameter: gt,
                isUpdatableParameter: c=>-1 !== Hg.indexOf(c),
                isDeprecatedParameter: vl,
                argsToParams: c=>{
                    const d = {};
                    return "object" != typeof c[0] || el(c[0]) ? ["title", "html", "icon"].forEach((p,_)=>{
                        const E = c[_];
                        "string" == typeof E || el(E) ? d[p] = E : void 0 !== E && Ie("Unexpected type of ".concat(p, '! Expected "string" or "Element", got ').concat(typeof E))
                    }
                    ) : Object.assign(d, c[0]),
                    d
                }
                ,
                isVisible: ()=>kt(le()),
                clickConfirm: R,
                clickDeny: ()=>wn() && wn().click(),
                clickCancel: ()=>dr() && dr().click(),
                getContainer: ke,
                getPopup: le,
                getTitle: tl,
                getHtmlContainer: kr,
                getImage: Hn,
                getIcon: cr,
                getInputLabel: ()=>ht(D["input-label"]),
                getCloseButton: Fe,
                getActions: Ot,
                getConfirmButton: oe,
                getDenyButton: wn,
                getCancelButton: dr,
                getLoader: Vr,
                getFooter: ds,
                getTimerProgressBar: uo,
                getFocusableElements: ce,
                getValidationMessage: lo,
                isLoading: ()=>le().hasAttribute("data-loading"),
                fire: function() {
                    const c = this;
                    for (var d = arguments.length, p = new Array(d), _ = 0; _ < d; _++)
                        p[_] = arguments[_];
                    return new c(...p)
                },
                mixin: function(c) {
                    return class extends (this) {
                        _main(_, E) {
                            return super._main(_, Object.assign({}, c, E))
                        }
                    }
                },
                showLoading: $n,
                enableLoading: $n,
                getTimerLeft: ()=>$.timeout && $.timeout.getTimerLeft(),
                stopTimer: pt,
                resumeTimer: Jc,
                toggleTimer: ()=>{
                    const c = $.timeout;
                    return c && (c.running ? pt() : Jc())
                }
                ,
                increaseTimer: c=>{
                    if ($.timeout) {
                        const d = $.timeout.increase(c);
                        return sl(d, !0),
                        d
                    }
                }
                ,
                isTimerRunning: ()=>$.timeout && $.timeout.isRunning(),
                bindClickHandler: function() {
                    Cl[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template"] = this,
                    ed || (document.body.addEventListener("click", jg),
                    ed = !0)
                }
            });
            function an() {
                const c = U.innerParams.get(this);
                if (!c)
                    return;
                const d = U.domCache.get(this);
                be(d.loader),
                qo() ? c.icon && Xe(cr()) : Dl(d),
                on([d.popup, d.actions], D.loading),
                d.popup.removeAttribute("aria-busy"),
                d.popup.removeAttribute("data-loading"),
                d.confirmButton.disabled = !1,
                d.denyButton.disabled = !1,
                d.cancelButton.disabled = !1
            }
            const Dl = c=>{
                const d = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
                d.length ? Xe(d[0], "inline-block") : !kt(oe()) && !kt(wn()) && !kt(dr()) && be(c.actions)
            }
            ;
            const rd = ()=>{
                null === fo.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (fo.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
                document.body.style.paddingRight = "".concat(fo.previousBodyPadding + (()=>{
                    const c = document.createElement("div");
                    c.className = D["scrollbar-measure"],
                    document.body.appendChild(c);
                    const d = c.getBoundingClientRect().width - c.clientWidth;
                    return document.body.removeChild(c),
                    d
                }
                )(), "px"))
            }
              , vs = ()=>{
                if (!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)) {
                    const d = 44;
                    le().scrollHeight > window.innerHeight - d && (ke().style.paddingBottom = "".concat(d, "px"))
                }
            }
              , El = ()=>{
                const c = ke();
                let d;
                c.ontouchstart = p=>{
                    d = od(p)
                }
                ,
                c.ontouchmove = p=>{
                    d && (p.preventDefault(),
                    p.stopPropagation())
                }
            }
              , od = c=>{
                const d = c.target
                  , p = ke();
                return !(O(c) || Ds(c) || d !== p && (il(p) || "INPUT" === d.tagName || "TEXTAREA" === d.tagName || il(kr()) && kr().contains(d)))
            }
              , O = c=>c.touches && c.touches.length && "stylus" === c.touches[0].touchType
              , Ds = c=>c.touches && c.touches.length > 1
              , bs = ()=>{
                Je(document.body.children).forEach(d=>{
                    d.hasAttribute("data-previous-aria-hidden") ? (d.setAttribute("aria-hidden", d.getAttribute("data-previous-aria-hidden")),
                    d.removeAttribute("data-previous-aria-hidden")) : d.removeAttribute("aria-hidden")
                }
                )
            }
            ;
            var Xo = {
                swalPromiseResolve: new WeakMap,
                swalPromiseReject: new WeakMap
            };
            function En(c, d, p, _) {
                qo() ? ld(c, _) : (Vg(p).then(()=>ld(c, _)),
                $.keydownTarget.removeEventListener("keydown", $.keydownHandler, {
                    capture: $.keydownListenerCapture
                }),
                $.keydownHandlerAdded = !1),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (d.setAttribute("style", "display:none !important"),
                d.removeAttribute("class"),
                d.innerHTML = "") : d.remove(),
                co() && (null !== fo.previousBodyPadding && (document.body.style.paddingRight = "".concat(fo.previousBodyPadding, "px"),
                fo.previousBodyPadding = null),
                (()=>{
                    if (zo(document.body, D.iosfix)) {
                        const c = parseInt(document.body.style.top, 10);
                        on(document.body, D.iosfix),
                        document.body.style.top = "",
                        document.body.scrollTop = -1 * c
                    }
                }
                )(),
                bs()),
                on([document.documentElement, document.body], [D.shown, D["height-auto"], D["no-backdrop"], D["toast-shown"]])
            }
            function Es(c) {
                c = ad(c);
                const d = Xo.swalPromiseResolve.get(this)
                  , p = Et(this);
                this.isAwaitingPromise() ? c.isDismissed || (Al(this),
                d(c)) : p && d(c)
            }
            const Et = c=>{
                const d = le();
                if (!d)
                    return !1;
                const p = U.innerParams.get(c);
                if (!p || zo(d, p.hideClass.popup))
                    return !1;
                on(d, p.showClass.popup),
                te(d, p.hideClass.popup);
                const _ = ke();
                return on(_, p.showClass.backdrop),
                te(_, p.hideClass.backdrop),
                zg(c, d, p),
                !0
            }
            ;
            const Al = c=>{
                c.isAwaitingPromise() && (U.awaitingPromise.delete(c),
                U.innerParams.get(c) || c._destroy())
            }
              , ad = c=>void 0 === c ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c)
              , zg = (c,d,p)=>{
                const _ = ke()
                  , E = ho && kc(d);
                "function" == typeof p.willClose && p.willClose(d),
                E ? ae(c, d, _, p.returnFocus, p.didClose) : En(c, _, p.returnFocus, p.didClose)
            }
              , ae = (c,d,p,_,E)=>{
                $.swalCloseEventFinishedCallback = En.bind(null, c, p, _, E),
                d.addEventListener(ho, function(P) {
                    P.target === d && ($.swalCloseEventFinishedCallback(),
                    delete $.swalCloseEventFinishedCallback)
                })
            }
              , ld = (c,d)=>{
                setTimeout(()=>{
                    "function" == typeof d && d.bind(c.params)(),
                    c._destroy()
                }
                )
            }
            ;
            function ud(c, d, p) {
                const _ = U.domCache.get(c);
                d.forEach(E=>{
                    _[E].disabled = p
                }
                )
            }
            function pr(c, d) {
                if (!c)
                    return !1;
                if ("radio" === c.type) {
                    const _ = c.parentNode.parentNode.querySelectorAll("input");
                    for (let E = 0; E < _.length; E++)
                        _[E].disabled = d
                } else
                    c.disabled = d
            }
            class cd {
                constructor(d, p) {
                    this.callback = d,
                    this.remaining = p,
                    this.running = !1,
                    this.start()
                }
                start() {
                    return this.running || (this.running = !0,
                    this.started = new Date,
                    this.id = setTimeout(this.callback, this.remaining)),
                    this.remaining
                }
                stop() {
                    return this.running && (this.running = !1,
                    clearTimeout(this.id),
                    this.remaining -= new Date - this.started),
                    this.remaining
                }
                increase(d) {
                    const p = this.running;
                    return p && this.stop(),
                    this.remaining += d,
                    p && this.start(),
                    this.remaining
                }
                getTimerLeft() {
                    return this.running && (this.stop(),
                    this.start()),
                    this.remaining
                }
                isRunning() {
                    return this.running
                }
            }
            var mo = {
                email: (c,d)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(d || "Invalid email address"),
                url: (c,d)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(d || "Invalid URL")
            };
            function Sl(c) {
                (function(c) {
                    c.inputValidator || Object.keys(mo).forEach(d=>{
                        c.input === d && (c.inputValidator = mo[d])
                    }
                    )
                }
                )(c),
                c.showLoaderOnConfirm && !c.preConfirm && Ae("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
                function(c) {
                    (!c.target || "string" == typeof c.target && !document.querySelector(c.target) || "string" != typeof c.target && !c.target.appendChild) && (Ae('Target parameter is not valid, defaulting to "body"'),
                    c.target = "body")
                }(c),
                "string" == typeof c.title && (c.title = c.title.split("\n").join("<br />")),
                fl(c)
            }
            const Ms = ["swal-title", "swal-html", "swal-footer"]
              , fd = c=>{
                const d = {};
                return Je(c.querySelectorAll("swal-param")).forEach(p=>{
                    je(p, ["name", "value"]);
                    const _ = p.getAttribute("name");
                    let E = p.getAttribute("value");
                    "boolean" == typeof Lr[_] && "false" === E && (E = !1),
                    "object" == typeof Lr[_] && (E = JSON.parse(E)),
                    d[_] = E
                }
                ),
                d
            }
              , Tl = c=>{
                const d = {};
                return Je(c.querySelectorAll("swal-button")).forEach(p=>{
                    je(p, ["type", "color", "aria-label"]);
                    const _ = p.getAttribute("type");
                    d["".concat(_, "ButtonText")] = p.innerHTML,
                    d["show".concat(Gt(_), "Button")] = !0,
                    p.hasAttribute("color") && (d["".concat(_, "ButtonColor")] = p.getAttribute("color")),
                    p.hasAttribute("aria-label") && (d["".concat(_, "ButtonAriaLabel")] = p.getAttribute("aria-label"))
                }
                ),
                d
            }
              , V = c=>{
                const d = {}
                  , p = c.querySelector("swal-image");
                return p && (je(p, ["src", "width", "height", "alt"]),
                p.hasAttribute("src") && (d.imageUrl = p.getAttribute("src")),
                p.hasAttribute("width") && (d.imageWidth = p.getAttribute("width")),
                p.hasAttribute("height") && (d.imageHeight = p.getAttribute("height")),
                p.hasAttribute("alt") && (d.imageAlt = p.getAttribute("alt"))),
                d
            }
              , mt = c=>{
                const d = {}
                  , p = c.querySelector("swal-icon");
                return p && (je(p, ["type", "color"]),
                p.hasAttribute("type") && (d.icon = p.getAttribute("type")),
                p.hasAttribute("color") && (d.iconColor = p.getAttribute("color")),
                d.iconHtml = p.innerHTML),
                d
            }
              , et = c=>{
                const d = {}
                  , p = c.querySelector("swal-input");
                p && (je(p, ["type", "label", "placeholder", "value"]),
                d.input = p.getAttribute("type") || "text",
                p.hasAttribute("label") && (d.inputLabel = p.getAttribute("label")),
                p.hasAttribute("placeholder") && (d.inputPlaceholder = p.getAttribute("placeholder")),
                p.hasAttribute("value") && (d.inputValue = p.getAttribute("value")));
                const _ = c.querySelectorAll("swal-input-option");
                return _.length && (d.inputOptions = {},
                Je(_).forEach(E=>{
                    je(E, ["value"]);
                    const P = E.getAttribute("value");
                    d.inputOptions[P] = E.innerHTML
                }
                )),
                d
            }
              , Wn = (c,d)=>{
                const p = {};
                for (const _ in d) {
                    const E = d[_]
                      , P = c.querySelector(E);
                    P && (je(P, []),
                    p[E.replace(/^swal-/, "")] = P.innerHTML.trim())
                }
                return p
            }
              , gr = c=>{
                const d = Ms.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Je(c.children).forEach(p=>{
                    const _ = p.tagName.toLowerCase();
                    -1 === d.indexOf(_) && Ae("Unrecognized element <".concat(_, ">"))
                }
                )
            }
              , je = (c,d)=>{
                Je(c.attributes).forEach(p=>{
                    -1 === d.indexOf(p.name) && Ae(['Unrecognized attribute "'.concat(p.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(d.length ? "Allowed attributes are: ".concat(d.join(", ")) : "To set the value, use HTML within the element.")])
                }
                )
            }
              , M = c=>{
                const d = ke()
                  , p = le();
                "function" == typeof c.willOpen && c.willOpen(p);
                const E = window.getComputedStyle(document.body).overflowY;
                mr(d, p, c),
                setTimeout(()=>{
                    Ce(d, p)
                }
                , 10),
                co() && (It(d, c.scrollbarPadding, E),
                Je(document.body.children).forEach(d=>{
                    d === ke() || d.contains(ke()) || (d.hasAttribute("aria-hidden") && d.setAttribute("data-previous-aria-hidden", d.getAttribute("aria-hidden")),
                    d.setAttribute("aria-hidden", "true"))
                }
                )),
                !qo() && !$.previousActiveElement && ($.previousActiveElement = document.activeElement),
                "function" == typeof c.didOpen && setTimeout(()=>c.didOpen(p)),
                on(d, D["no-transition"])
            }
              , Y = c=>{
                const d = le();
                if (c.target !== d)
                    return;
                const p = ke();
                d.removeEventListener(ho, Y),
                p.style.overflowY = "auto"
            }
              , Ce = (c,d)=>{
                ho && kc(d) ? (c.style.overflowY = "hidden",
                d.addEventListener(ho, Y)) : c.style.overflowY = "auto"
            }
              , It = (c,d,p)=>{
                (()=>{
                    if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !zo(document.body, D.iosfix)) {
                        const d = document.body.scrollTop;
                        document.body.style.top = "".concat(-1 * d, "px"),
                        te(document.body, D.iosfix),
                        El(),
                        vs()
                    }
                }
                )(),
                d && "hidden" !== p && rd(),
                setTimeout(()=>{
                    c.scrollTop = 0
                }
                )
            }
              , mr = (c,d,p)=>{
                te(c, p.showClass.backdrop),
                d.style.setProperty("opacity", "0", "important"),
                Xe(d, "grid"),
                setTimeout(()=>{
                    te(d, p.showClass.popup),
                    d.style.removeProperty("opacity")
                }
                , 10),
                te([document.documentElement, document.body], D.shown),
                p.heightAuto && p.backdrop && !p.toast && te([document.documentElement, document.body], D["height-auto"])
            }
              , Me = c=>c.checked ? 1 : 0
              , yo = c=>c.checked ? c.value : null
              , Br = c=>c.files.length ? null !== c.getAttribute("multiple") ? c.files : c.files[0] : null
              , q = (c,d)=>{
                const p = le()
                  , _ = E=>jr[d.input](p, _o(E), d);
                Nr(d.inputOptions) || Or(d.inputOptions) ? ($n(oe()),
                Fr(d.inputOptions).then(E=>{
                    c.hideLoading(),
                    _(E)
                }
                )) : "object" == typeof d.inputOptions ? _(d.inputOptions) : Ie("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof d.inputOptions))
            }
              , ti = (c,d)=>{
                const p = c.getInput();
                be(p),
                Fr(d.inputValue).then(_=>{
                    p.value = "number" === d.input ? parseFloat(_) || 0 : "".concat(_),
                    Xe(p),
                    p.focus(),
                    c.hideLoading()
                }
                ).catch(_=>{
                    Ie("Error in inputValue promise: ".concat(_)),
                    p.value = "",
                    Xe(p),
                    p.focus(),
                    c.hideLoading()
                }
                )
            }
              , jr = {
                select: (c,d,p)=>{
                    const _ = Cn(c, D.select)
                      , E = (P,Ue,Mt)=>{
                        const nt = document.createElement("option");
                        nt.value = Mt,
                        lt(nt, Ue),
                        nt.selected = _r(Mt, p.inputValue),
                        P.appendChild(nt)
                    }
                    ;
                    d.forEach(P=>{
                        const Ue = P[0]
                          , Mt = P[1];
                        if (Array.isArray(Mt)) {
                            const nt = document.createElement("optgroup");
                            nt.label = Ue,
                            nt.disabled = !1,
                            _.appendChild(nt),
                            Mt.forEach(wr=>E(nt, wr[1], wr[0]))
                        } else
                            E(_, Mt, Ue)
                    }
                    ),
                    _.focus()
                }
                ,
                radio: (c,d,p)=>{
                    const _ = Cn(c, D.radio);
                    d.forEach(P=>{
                        const Ue = P[0]
                          , Mt = P[1]
                          , nt = document.createElement("input")
                          , wr = document.createElement("label");
                        nt.type = "radio",
                        nt.name = D.radio,
                        nt.value = Ue,
                        _r(Ue, p.inputValue) && (nt.checked = !0);
                        const xs = document.createElement("span");
                        lt(xs, Mt),
                        xs.className = D.label,
                        wr.appendChild(nt),
                        wr.appendChild(xs),
                        _.appendChild(wr)
                    }
                    );
                    const E = _.querySelectorAll("input");
                    E.length && E[0].focus()
                }
            }
              , _o = c=>{
                const d = [];
                return "undefined" != typeof Map && c instanceof Map ? c.forEach((p,_)=>{
                    let E = p;
                    "object" == typeof E && (E = _o(E)),
                    d.push([_, E])
                }
                ) : Object.keys(c).forEach(p=>{
                    let _ = c[p];
                    "object" == typeof _ && (_ = _o(_)),
                    d.push([p, _])
                }
                ),
                d
            }
              , _r = (c,d)=>d && d.toString() === c.toString()
              , Lt = (c,d)=>{
                const p = U.innerParams.get(c)
                  , _ = ((c,d)=>{
                    const p = c.getInput();
                    if (!p)
                        return null;
                    switch (d.input) {
                    case "checkbox":
                        return Me(p);
                    case "radio":
                        return yo(p);
                    case "file":
                        return Br(p);
                    default:
                        return d.inputAutoTrim ? p.value.trim() : p.value
                    }
                }
                )(c, p);
                p.inputValidator ? me(c, _, d) : c.getInput().checkValidity() ? "deny" === d ? Ss(c, _) : vo(c, _) : (c.enableButtons(),
                c.showValidationMessage(p.validationMessage))
            }
              , me = (c,d,p)=>{
                const _ = U.innerParams.get(c);
                c.disableInput(),
                Promise.resolve().then(()=>Fr(_.inputValidator(d, _.validationMessage))).then(P=>{
                    c.enableButtons(),
                    c.enableInput(),
                    P ? c.showValidationMessage(P) : "deny" === p ? Ss(c, d) : vo(c, d)
                }
                )
            }
              , Ss = (c,d)=>{
                const p = U.innerParams.get(c || void 0);
                p.showLoaderOnDeny && $n(wn()),
                p.preDeny ? (U.awaitingPromise.set(c || void 0, !0),
                Promise.resolve().then(()=>Fr(p.preDeny(d, p.validationMessage))).then(E=>{
                    !1 === E ? c.hideLoading() : c.closePopup({
                        isDenied: !0,
                        value: void 0 === E ? d : E
                    })
                }
                ).catch(E=>Co(c || void 0, E))) : c.closePopup({
                    isDenied: !0,
                    value: d
                })
            }
              , xl = (c,d)=>{
                c.closePopup({
                    isConfirmed: !0,
                    value: d
                })
            }
              , Co = (c,d)=>{
                c.rejectPromise(d)
            }
              , vo = (c,d)=>{
                const p = U.innerParams.get(c || void 0);
                p.showLoaderOnConfirm && $n(),
                p.preConfirm ? (c.resetValidationMessage(),
                U.awaitingPromise.set(c || void 0, !0),
                Promise.resolve().then(()=>Fr(p.preConfirm(d, p.validationMessage))).then(E=>{
                    kt(lo()) || !1 === E ? c.hideLoading() : xl(c, void 0 === E ? d : E)
                }
                ).catch(E=>Co(c || void 0, E))) : xl(c, d)
            }
              , Ur = (c,d,p)=>{
                const _ = ce();
                if (_.length)
                    return (d += p) === _.length ? d = 0 : -1 === d && (d = _.length - 1),
                    _[d].focus();
                le().focus()
            }
              , qn = ["ArrowRight", "ArrowDown"]
              , tt = ["ArrowLeft", "ArrowUp"]
              , hd = (c,d,p)=>{
                const _ = U.innerParams.get(c);
                !_ || (_.stopKeydownPropagation && d.stopPropagation(),
                "Enter" === d.key ? ln(c, d, _) : "Tab" === d.key ? Qt(d, _) : [...qn, ...tt].includes(d.key) ? Ts(d.key) : "Escape" === d.key && ni(d, _, p))
            }
              , ln = (c,d,p)=>{
                if (!d.isComposing && d.target && c.getInput() && d.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(p.input))
                        return;
                    R(),
                    d.preventDefault()
                }
            }
              , Qt = (c,d)=>{
                const p = c.target
                  , _ = ce();
                let E = -1;
                for (let P = 0; P < _.length; P++)
                    if (p === _[P]) {
                        E = P;
                        break
                    }
                Ur(0, E, c.shiftKey ? -1 : 1),
                c.stopPropagation(),
                c.preventDefault()
            }
              , Ts = c=>{
                if (![oe(), wn(), dr()].includes(document.activeElement))
                    return;
                const E = qn.includes(c) ? "nextElementSibling" : "previousElementSibling"
                  , P = document.activeElement[E];
                P && P.focus()
            }
              , ni = (c,d,p)=>{
                Wt(d.allowEscapeKey) && (c.preventDefault(),
                p(pe.esc))
            }
              , Kt = (c,d,p)=>{
                d.popup.onclick = ()=>{
                    const _ = U.innerParams.get(c);
                    _.showConfirmButton || _.showDenyButton || _.showCancelButton || _.showCloseButton || _.timer || _.input || p(pe.close)
                }
            }
            ;
            let oi = !1;
            const Qg = c=>{
                c.popup.onmousedown = ()=>{
                    c.container.onmouseup = function(d) {
                        c.container.onmouseup = void 0,
                        d.target === c.container && (oi = !0)
                    }
                }
            }
              , pd = c=>{
                c.container.onmousedown = ()=>{
                    c.popup.onmouseup = function(d) {
                        c.popup.onmouseup = void 0,
                        (d.target === c.popup || c.popup.contains(d.target)) && (oi = !0)
                    }
                }
            }
              , gd = (c,d,p)=>{
                d.container.onclick = _=>{
                    const E = U.innerParams.get(c);
                    oi ? oi = !1 : _.target === d.container && Wt(E.allowOutsideClick) && p(pe.backdrop)
                }
            }
            ;
            const Yg = (c,d)=>{
                const p = (c=>{
                    const d = "string" == typeof c.template ? document.querySelector(c.template) : c.template;
                    if (!d)
                        return {};
                    const p = d.content;
                    return gr(p),
                    Object.assign(fd(p), Tl(p), V(p), mt(p), et(p), Wn(p, Ms))
                }
                )(c)
                  , _ = Object.assign({}, Lr, d, p, c);
                return _.showClass = Object.assign({}, Lr.showClass, _.showClass),
                _.hideClass = Object.assign({}, Lr.hideClass, _.hideClass),
                _
            }
              , Zg = (c,d,p)=>new Promise((_,E)=>{
                const P = Ue=>{
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ue
                    })
                }
                ;
                Xo.swalPromiseResolve.set(c, _),
                Xo.swalPromiseReject.set(c, E),
                d.confirmButton.onclick = ()=>(c=>{
                    const d = U.innerParams.get(c);
                    c.disableButtons(),
                    d.input ? Lt(c, "confirm") : vo(c, !0)
                }
                )(c),
                d.denyButton.onclick = ()=>(c=>{
                    const d = U.innerParams.get(c);
                    c.disableButtons(),
                    d.returnInputValueOnDeny ? Lt(c, "deny") : Ss(c, !1)
                }
                )(c),
                d.cancelButton.onclick = ()=>((c,d)=>{
                    c.disableButtons(),
                    d(pe.cancel)
                }
                )(c, P),
                d.closeButton.onclick = ()=>P(pe.close),
                ((c,d,p)=>{
                    U.innerParams.get(c).toast ? Kt(c, d, p) : (Qg(d),
                    pd(d),
                    gd(c, d, p))
                }
                )(c, d, P),
                ((c,d,p,_)=>{
                    d.keydownTarget && d.keydownHandlerAdded && (d.keydownTarget.removeEventListener("keydown", d.keydownHandler, {
                        capture: d.keydownListenerCapture
                    }),
                    d.keydownHandlerAdded = !1),
                    p.toast || (d.keydownHandler = E=>hd(c, E, _),
                    d.keydownTarget = p.keydownListenerCapture ? window : le(),
                    d.keydownListenerCapture = p.keydownListenerCapture,
                    d.keydownTarget.addEventListener("keydown", d.keydownHandler, {
                        capture: d.keydownListenerCapture
                    }),
                    d.keydownHandlerAdded = !0)
                }
                )(c, $, p, P),
                ((c,d)=>{
                    "select" === d.input || "radio" === d.input ? q(c, d) : ["text", "email", "number", "tel", "textarea"].includes(d.input) && (Nr(d.inputValue) || Or(d.inputValue)) && ($n(oe()),
                    ti(c, d))
                }
                )(c, p),
                M(p),
                Xg($, p, P),
                em(d, p),
                setTimeout(()=>{
                    d.container.scrollTop = 0
                }
                )
            }
            )
              , Jg = c=>{
                const d = {
                    popup: le(),
                    container: ke(),
                    actions: Ot(),
                    confirmButton: oe(),
                    denyButton: wn(),
                    cancelButton: dr(),
                    loader: Vr(),
                    closeButton: Fe(),
                    validationMessage: lo(),
                    progressSteps: Nc()
                };
                return U.domCache.set(c, d),
                d
            }
              , Xg = (c,d,p)=>{
                const _ = uo();
                be(_),
                d.timer && (c.timeout = new cd(()=>{
                    p("timer"),
                    delete c.timeout
                }
                ,d.timer),
                d.timerProgressBar && (Xe(_),
                setTimeout(()=>{
                    c.timeout && c.timeout.running && sl(d.timer)
                }
                )))
            }
              , em = (c,d)=>{
                if (!d.toast) {
                    if (!Wt(d.allowEnterKey))
                        return nm();
                    tm(c, d) || Ur(0, -1, 1)
                }
            }
              , tm = (c,d)=>d.focusDeny && kt(c.denyButton) ? (c.denyButton.focus(),
            !0) : d.focusCancel && kt(c.cancelButton) ? (c.cancelButton.focus(),
            !0) : !(!d.focusConfirm || !kt(c.confirmButton) || (c.confirmButton.focus(),
            0))
              , nm = ()=>{
                document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
            }
            ;
            const im = c=>{
                md(c),
                delete c.params,
                delete $.keydownHandler,
                delete $.keydownTarget,
                delete $.currentInstance
            }
              , md = c=>{
                c.isAwaitingPromise() ? (Rl(U, c),
                U.awaitingPromise.set(c, !0)) : (Rl(Xo, c),
                Rl(U, c))
            }
              , Rl = (c,d)=>{
                for (const p in c)
                    c[p].delete(d)
            }
            ;
            var yd = Object.freeze({
                hideLoading: an,
                disableLoading: an,
                getInput: function(c) {
                    const d = U.innerParams.get(c || this)
                      , p = U.domCache.get(c || this);
                    return p ? rl(p.popup, d.input) : null
                },
                close: Es,
                isAwaitingPromise: function() {
                    return !!U.awaitingPromise.get(this)
                },
                rejectPromise: function(c) {
                    const d = Xo.swalPromiseReject.get(this);
                    Al(this),
                    d && d(c)
                },
                closePopup: Es,
                closeModal: Es,
                closeToast: Es,
                enableButtons: function() {
                    ud(this, ["confirmButton", "denyButton", "cancelButton"], !1)
                },
                disableButtons: function() {
                    ud(this, ["confirmButton", "denyButton", "cancelButton"], !0)
                },
                enableInput: function() {
                    return pr(this.getInput(), !1)
                },
                disableInput: function() {
                    return pr(this.getInput(), !0)
                },
                showValidationMessage: function(c) {
                    const d = U.domCache.get(this)
                      , p = U.innerParams.get(this);
                    lt(d.validationMessage, c),
                    d.validationMessage.className = D["validation-message"],
                    p.customClass && p.customClass.validationMessage && te(d.validationMessage, p.customClass.validationMessage),
                    Xe(d.validationMessage);
                    const _ = this.getInput();
                    _ && (_.setAttribute("aria-invalid", !0),
                    _.setAttribute("aria-describedby", D["validation-message"]),
                    fs(_),
                    te(_, D.inputerror))
                },
                resetValidationMessage: function() {
                    const c = U.domCache.get(this);
                    c.validationMessage && be(c.validationMessage);
                    const d = this.getInput();
                    d && (d.removeAttribute("aria-invalid"),
                    d.removeAttribute("aria-describedby"),
                    on(d, D.inputerror))
                },
                getProgressSteps: function() {
                    return U.domCache.get(this).progressSteps
                },
                _main: function(c) {
                    let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Wg(Object.assign({}, d, c)),
                    $.currentInstance && ($.currentInstance._destroy(),
                    co() && bs()),
                    $.currentInstance = this;
                    const p = Yg(c, d);
                    Sl(p),
                    Object.freeze(p),
                    $.timeout && ($.timeout.stop(),
                    delete $.timeout),
                    clearTimeout($.restoreFocusTimeout);
                    const _ = Jg(this);
                    return _l(this, p),
                    U.innerParams.set(this, p),
                    Zg(this, _, p)
                },
                update: function(c) {
                    const d = le()
                      , p = U.innerParams.get(this);
                    if (!d || zo(d, p.hideClass.popup))
                        return Ae("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                    const _ = {};
                    Object.keys(c).forEach(P=>{
                        $r.isUpdatableParameter(P) ? _[P] = c[P] : Ae('Invalid parameter to update: "'.concat(P, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
                    }
                    );
                    const E = Object.assign({}, p, _);
                    _l(this, E),
                    U.innerParams.set(this, E),
                    Object.defineProperties(this, {
                        params: {
                            value: Object.assign({}, this.params, c),
                            writable: !1,
                            enumerable: !0
                        }
                    })
                },
                _destroy: function() {
                    const c = U.domCache.get(this)
                      , d = U.innerParams.get(this);
                    d ? (c.popup && $.swalCloseEventFinishedCallback && ($.swalCloseEventFinishedCallback(),
                    delete $.swalCloseEventFinishedCallback),
                    $.deferDisposalTimer && (clearTimeout($.deferDisposalTimer),
                    delete $.deferDisposalTimer),
                    "function" == typeof d.didDestroy && d.didDestroy(),
                    im(this)) : md(this)
                }
            });
            let ii;
            class zn {
                constructor() {
                    if ("undefined" == typeof window)
                        return;
                    ii = this;
                    for (var d = arguments.length, p = new Array(d), _ = 0; _ < d; _++)
                        p[_] = arguments[_];
                    const E = Object.freeze(this.constructor.argsToParams(p));
                    Object.defineProperties(this, {
                        params: {
                            value: E,
                            writable: !1,
                            enumerable: !0,
                            configurable: !0
                        }
                    });
                    const P = this._main(this.params);
                    U.promise.set(this, P)
                }
                then(d) {
                    return U.promise.get(this).then(d)
                }
                finally(d) {
                    return U.promise.get(this).finally(d)
                }
            }
            Object.assign(zn.prototype, yd),
            Object.assign(zn, bt),
            Object.keys(yd).forEach(c=>{
                zn[c] = function() {
                    if (ii)
                        return ii[c](...arguments)
                }
            }
            ),
            zn.DismissReason = pe,
            zn.version = "11.1.10";
            const $r = zn;
            return $r.default = $r,
            $r
        }(),
        void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
        "undefined" != typeof document && function(pe, we) {
            var ie = pe.createElement("style");
            if (pe.getElementsByTagName("head")[0].appendChild(ie),
            ie.styleSheet)
                ie.styleSheet.disabled || (ie.styleSheet.cssText = we);
            else
                try {
                    ie.innerHTML = we
                } catch (Gt) {
                    ie.innerText = we
                }
        }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
    },
    952: at=>{
        "use strict";
        at.exports = function() {
            AOS.init(),
            document.getElementById("sound").play(),
            new Sakura("body");
            var Gt = document.getElementById("canvas")
              , Je = Gt.getContext("2d");
            Gt.width = innerWidth,
            Gt.height = innerHeight;
            var Ae = smokemachine(Je, [85, 85, 85]);
            Ae.start(),
            Ae.setPreDrawCallback(function(Ie) {
                Ae.addSmoke(innerWidth / 2, innerHeight / 3, .2),
                Gt.width = innerWidth,
                Gt.height = innerHeight
            }),
            onmousemove = function(Ie) {
                var so = Ie.clientX
                  , Go = Ie.clientY
                  , Wt = Math.floor(200 * Math.random()) + 3800;
                Ae.addsmoke(so, Go, .2, Wt)
            }
        }
    }
    ,
    864: (at,pe,we)=>{
        "use strict";
        function ie(e) {
            return "function" == typeof e
        }
        function Gt(e) {
            const n = e(r=>{
                Error.call(r),
                r.stack = (new Error).stack
            }
            );
            return n.prototype = Object.create(Error.prototype),
            n.prototype.constructor = n,
            n
        }
        const Je = Gt(e=>function(n) {
            e(this),
            this.message = n ? `${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o + 1}) ${r.toString()}`).join("\n  ")}` : "",
            this.name = "UnsubscriptionError",
            this.errors = n
        }
        );
        function Ae(e, t) {
            if (e) {
                const n = e.indexOf(t);
                0 <= n && e.splice(n, 1)
            }
        }
        class Ie {
            constructor(t) {
                this.initialTeardown = t,
                this.closed = !1,
                this._parentage = null,
                this._teardowns = null
            }
            unsubscribe() {
                let t;
                if (!this.closed) {
                    this.closed = !0;
                    const {_parentage: n} = this;
                    if (n)
                        if (this._parentage = null,
                        Array.isArray(n))
                            for (const i of n)
                                i.remove(this);
                        else
                            n.remove(this);
                    const {initialTeardown: r} = this;
                    if (ie(r))
                        try {
                            r()
                        } catch (i) {
                            t = i instanceof Je ? i.errors : [i]
                        }
                    const {_teardowns: o} = this;
                    if (o) {
                        this._teardowns = null;
                        for (const i of o)
                            try {
                                Wo(i)
                            } catch (s) {
                                t = null != t ? t : [],
                                s instanceof Je ? t = [...t, ...s.errors] : t.push(s)
                            }
                    }
                    if (t)
                        throw new Je(t)
                }
            }
            add(t) {
                var n;
                if (t && t !== this)
                    if (this.closed)
                        Wo(t);
                    else {
                        if (t instanceof Ie) {
                            if (t.closed || t._hasParent(this))
                                return;
                            t._addParent(this)
                        }
                        (this._teardowns = null !== (n = this._teardowns) && void 0 !== n ? n : []).push(t)
                    }
            }
            _hasParent(t) {
                const {_parentage: n} = this;
                return n === t || Array.isArray(n) && n.includes(t)
            }
            _addParent(t) {
                const {_parentage: n} = this;
                this._parentage = Array.isArray(n) ? (n.push(t),
                n) : n ? [n, t] : t
            }
            _removeParent(t) {
                const {_parentage: n} = this;
                n === t ? this._parentage = null : Array.isArray(n) && Ae(n, t)
            }
            remove(t) {
                const {_teardowns: n} = this;
                n && Ae(n, t),
                t instanceof Ie && t._removeParent(this)
            }
        }
        Ie.EMPTY = (()=>{
            const e = new Ie;
            return e.closed = !0,
            e
        }
        )();
        const so = Ie.EMPTY;
        function Go(e) {
            return e instanceof Ie || e && "closed"in e && ie(e.remove) && ie(e.add) && ie(e.unsubscribe)
        }
        function Wo(e) {
            ie(e) ? e() : e.unsubscribe()
        }
        const Wt = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1
        }
          , Nr = {
            setTimeout(...e) {
                const {delegate: t} = Nr;
                return ((null == t ? void 0 : t.setTimeout) || setTimeout)(...e)
            },
            clearTimeout(e) {
                const {delegate: t} = Nr;
                return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
            },
            delegate: void 0
        };
        function Fr(e) {
            Nr.setTimeout(()=>{
                const {onUnhandledError: t} = Wt;
                if (!t)
                    throw e;
                t(e)
            }
            )
        }
        function Or() {}
        const Rc = cs("C", void 0, void 0);
        function cs(e, t, n) {
            return {
                kind: e,
                value: t,
                error: n
            }
        }
        let jn = null;
        function D(e) {
            if (Wt.useDeprecatedSynchronousErrorHandling) {
                const t = !jn;
                if (t && (jn = {
                    errorThrown: !1,
                    error: null
                }),
                e(),
                t) {
                    const {errorThrown: n, error: r} = jn;
                    if (jn = null,
                    n)
                        throw r
                }
            } else
                e()
        }
        class ke extends Ie {
            constructor(t) {
                super(),
                this.isStopped = !1,
                t ? (this.destination = t,
                Go(t) && t.add(this)) : this.destination = tl
            }
            static create(t, n, r) {
                return new ur(t,n,r)
            }
            next(t) {
                this.isStopped ? cr(cs("N", t, void 0), this) : this._next(t)
            }
            error(t) {
                this.isStopped ? cr(cs("E", void 0, t), this) : (this.isStopped = !0,
                this._error(t))
            }
            complete() {
                this.isStopped ? cr(Rc, this) : (this.isStopped = !0,
                this._complete())
            }
            unsubscribe() {
                this.closed || (this.isStopped = !0,
                super.unsubscribe(),
                this.destination = null)
            }
            _next(t) {
                this.destination.next(t)
            }
            _error(t) {
                try {
                    this.destination.error(t)
                } finally {
                    this.unsubscribe()
                }
            }
            _complete() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }
        }
        class ur extends ke {
            constructor(t, n, r) {
                let o;
                if (super(),
                ie(t))
                    o = t;
                else if (t) {
                    let i;
                    ({next: o, error: n, complete: r} = t),
                    this && Wt.useDeprecatedNextContext ? (i = Object.create(t),
                    i.unsubscribe = ()=>this.unsubscribe()) : i = t,
                    o = null == o ? void 0 : o.bind(i),
                    n = null == n ? void 0 : n.bind(i),
                    r = null == r ? void 0 : r.bind(i)
                }
                this.destination = {
                    next: o ? ht(o) : Or,
                    error: ht(null != n ? n : le),
                    complete: r ? ht(r) : Or
                }
            }
        }
        function ht(e, t) {
            return (...n)=>{
                try {
                    e(...n)
                } catch (r) {
                    Wt.useDeprecatedSynchronousErrorHandling ? function(e) {
                        Wt.useDeprecatedSynchronousErrorHandling && jn && (jn.errorThrown = !0,
                        jn.error = e)
                    }(r) : Fr(r)
                }
            }
        }
        function le(e) {
            throw e
        }
        function cr(e, t) {
            const {onStoppedNotification: n} = Wt;
            n && Nr.setTimeout(()=>n(e, t))
        }
        const tl = {
            closed: !0,
            next: Or,
            error: le,
            complete: Or
        }
          , kr = "function" == typeof Symbol && Symbol.observable || "@@observable";
        function Hn(e) {
            return e
        }
        let oe = (()=>{
            class e {
                constructor(n) {
                    n && (this._subscribe = n)
                }
                lift(n) {
                    const r = new e;
                    return r.source = this,
                    r.operator = n,
                    r
                }
                subscribe(n, r, o) {
                    const i = function(e) {
                        return e && e instanceof ke || function(e) {
                            return e && ie(e.next) && ie(e.error) && ie(e.complete)
                        }(e) && Go(e)
                    }(n) ? n : new ur(n,r,o);
                    return D(()=>{
                        const {operator: s, source: a} = this;
                        i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i))
                    }
                    ),
                    i
                }
                _trySubscribe(n) {
                    try {
                        return this._subscribe(n)
                    } catch (r) {
                        n.error(r)
                    }
                }
                forEach(n, r) {
                    return new (r = wn(r))((o,i)=>{
                        let s;
                        s = this.subscribe(a=>{
                            try {
                                n(a)
                            } catch (l) {
                                i(l),
                                null == s || s.unsubscribe()
                            }
                        }
                        , i, o)
                    }
                    )
                }
                _subscribe(n) {
                    var r;
                    return null === (r = this.source) || void 0 === r ? void 0 : r.subscribe(n)
                }
                [kr]() {
                    return this
                }
                pipe(...n) {
                    return function(e) {
                        return 0 === e.length ? Hn : 1 === e.length ? e[0] : function(n) {
                            return e.reduce((r,o)=>o(r), n)
                        }
                    }(n)(this)
                }
                toPromise(n) {
                    return new (n = wn(n))((r,o)=>{
                        let i;
                        this.subscribe(s=>i = s, s=>o(s), ()=>r(i))
                    }
                    )
                }
            }
            return e.create = t=>new e(t),
            e
        }
        )();
        function wn(e) {
            var t;
            return null !== (t = null != e ? e : Wt.Promise) && void 0 !== t ? t : Promise
        }
        const dr = Gt(e=>function() {
            e(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
        );
        let Ot = (()=>{
            class e extends oe {
                constructor() {
                    super(),
                    this.closed = !1,
                    this.observers = [],
                    this.isStopped = !1,
                    this.hasError = !1,
                    this.thrownError = null
                }
                lift(n) {
                    const r = new ds(this,this);
                    return r.operator = n,
                    r
                }
                _throwIfClosed() {
                    if (this.closed)
                        throw new dr
                }
                next(n) {
                    D(()=>{
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            const r = this.observers.slice();
                            for (const o of r)
                                o.next(n)
                        }
                    }
                    )
                }
                error(n) {
                    D(()=>{
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.hasError = this.isStopped = !0,
                            this.thrownError = n;
                            const {observers: r} = this;
                            for (; r.length; )
                                r.shift().error(n)
                        }
                    }
                    )
                }
                complete() {
                    D(()=>{
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.isStopped = !0;
                            const {observers: n} = this;
                            for (; n.length; )
                                n.shift().complete()
                        }
                    }
                    )
                }
                unsubscribe() {
                    this.isStopped = this.closed = !0,
                    this.observers = null
                }
                get observed() {
                    var n;
                    return (null === (n = this.observers) || void 0 === n ? void 0 : n.length) > 0
                }
                _trySubscribe(n) {
                    return this._throwIfClosed(),
                    super._trySubscribe(n)
                }
                _subscribe(n) {
                    return this._throwIfClosed(),
                    this._checkFinalizedStatuses(n),
                    this._innerSubscribe(n)
                }
                _innerSubscribe(n) {
                    const {hasError: r, isStopped: o, observers: i} = this;
                    return r || o ? so : (i.push(n),
                    new Ie(()=>Ae(i, n)))
                }
                _checkFinalizedStatuses(n) {
                    const {hasError: r, thrownError: o, isStopped: i} = this;
                    r ? n.error(o) : i && n.complete()
                }
                asObservable() {
                    const n = new oe;
                    return n.source = this,
                    n
                }
            }
            return e.create = (t,n)=>new ds(t,n),
            e
        }
        )();
        class ds extends Ot {
            constructor(t, n) {
                super(),
                this.destination = t,
                this.source = n
            }
            next(t) {
                var n, r;
                null === (r = null === (n = this.destination) || void 0 === n ? void 0 : n.next) || void 0 === r || r.call(n, t)
            }
            error(t) {
                var n, r;
                null === (r = null === (n = this.destination) || void 0 === n ? void 0 : n.error) || void 0 === r || r.call(n, t)
            }
            complete() {
                var t, n;
                null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.complete) || void 0 === n || n.call(t)
            }
            _subscribe(t) {
                var n, r;
                return null !== (r = null === (n = this.source) || void 0 === n ? void 0 : n.subscribe(t)) && void 0 !== r ? r : so
            }
        }
        function uo(e) {
            return ie(null == e ? void 0 : e.lift)
        }
        function Fe(e) {
            return t=>{
                if (uo(t))
                    return t.lift(function(n) {
                        try {
                            return e(n, this)
                        } catch (r) {
                            this.error(r)
                        }
                    });
                throw new TypeError("Unable to lift unknown Observable type")
            }
        }
        class Ve extends ke {
            constructor(t, n, r, o, i) {
                super(t),
                this.onFinalize = i,
                this._next = n ? function(s) {
                    try {
                        n(s)
                    } catch (a) {
                        t.error(a)
                    }
                }
                : super._next,
                this._error = o ? function(s) {
                    try {
                        o(s)
                    } catch (a) {
                        t.error(a)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : super._error,
                this._complete = r ? function() {
                    try {
                        r()
                    } catch (s) {
                        t.error(s)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : super._complete
            }
            unsubscribe() {
                var t;
                const {closed: n} = this;
                super.unsubscribe(),
                !n && (null === (t = this.onFinalize) || void 0 === t || t.call(this))
            }
        }
        function ce(e, t) {
            return Fe((n,r)=>{
                let o = 0;
                n.subscribe(new Ve(r,i=>{
                    r.next(e.call(t, i, o++))
                }
                ))
            }
            )
        }
        function be(e) {
            return this instanceof be ? (this.v = e,
            this) : new be(e)
        }
        function ol(e, t, n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var o, r = n.apply(e, t || []), i = [];
            return o = {},
            s("next"),
            s("throw"),
            s("return"),
            o[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            o;
            function s(g) {
                r[g] && (o[g] = function(m) {
                    return new Promise(function(y, C) {
                        i.push([g, m, y, C]) > 1 || a(g, m)
                    }
                    )
                }
                )
            }
            function a(g, m) {
                try {
                    !function(g) {
                        g.value instanceof be ? Promise.resolve(g.value.v).then(u, f) : h(i[0][2], g)
                    }(r[g](m))
                } catch (y) {
                    h(i[0][3], y)
                }
            }
            function u(g) {
                a("next", g)
            }
            function f(g) {
                a("throw", g)
            }
            function h(g, m) {
                g(m),
                i.shift(),
                i.length && a(i[0][0], i[0][1])
            }
        }
        function kt(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, t = e[Symbol.asyncIterator];
            return t ? t.call(e) : (e = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator
                  , n = t && e[t]
                  , r = 0;
                if (n)
                    return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && r >= e.length && (e = void 0),
                            {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }(e),
            n = {},
            r("next"),
            r("throw"),
            r("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n);
            function r(i) {
                n[i] = e[i] && function(s) {
                    return new Promise(function(a, l) {
                        !function(i, s, a, l) {
                            Promise.resolve(l).then(function(u) {
                                i({
                                    value: u,
                                    done: a
                                })
                            }, s)
                        }(a, l, (s = e[i](s)).done, s.value)
                    }
                    )
                }
            }
        }
        const al = e=>e && "number" == typeof e.length && "function" != typeof e;
        function ll(e) {
            return ie(null == e ? void 0 : e.then)
        }
        function Un(e) {
            return ie(e[kr])
        }
        function ul(e) {
            return Symbol.asyncIterator && ie(null == e ? void 0 : e[Symbol.asyncIterator])
        }
        function cl(e) {
            return new TypeError(`You provided ${null !== e && "object" == typeof e ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
        }
        const dl = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
        function fl(e) {
            return ie(null == e ? void 0 : e[dl])
        }
        function Ko(e) {
            return ol(this, arguments, function*() {
                const n = e.getReader();
                try {
                    for (; ; ) {
                        const {value: r, done: o} = yield be(n.read());
                        if (o)
                            return yield be(void 0);
                        yield yield be(r)
                    }
                } finally {
                    n.releaseLock()
                }
            })
        }
        function hl(e) {
            return ie(null == e ? void 0 : e.getReader)
        }
        function sn(e) {
            if (e instanceof oe)
                return e;
            if (null != e) {
                if (Un(e))
                    return function(e) {
                        return new oe(t=>{
                            const n = e[kr]();
                            if (ie(n.subscribe))
                                return n.subscribe(t);
                            throw new TypeError("Provided object does not correctly implement Symbol.observable")
                        }
                        )
                    }(e);
                if (al(e))
                    return function(e) {
                        return new oe(t=>{
                            for (let n = 0; n < e.length && !t.closed; n++)
                                t.next(e[n]);
                            t.complete()
                        }
                        )
                    }(e);
                if (ll(e))
                    return function(e) {
                        return new oe(t=>{
                            e.then(n=>{
                                t.closed || (t.next(n),
                                t.complete())
                            }
                            , n=>t.error(n)).then(null, Fr)
                        }
                        )
                    }(e);
                if (ul(e))
                    return pl(e);
                if (fl(e))
                    return function(e) {
                        return new oe(t=>{
                            for (const n of e)
                                if (t.next(n),
                                t.closed)
                                    return;
                            t.complete()
                        }
                        )
                    }(e);
                if (hl(e))
                    return function(e) {
                        return pl(Ko(e))
                    }(e)
            }
            throw cl(e)
        }
        function pl(e) {
            return new oe(t=>{
                (function(e, t) {
                    var n, r, o, i;
                    return function(e, t, n, r) {
                        return new (n || (n = Promise))(function(i, s) {
                            function a(f) {
                                try {
                                    u(r.next(f))
                                } catch (h) {
                                    s(h)
                                }
                            }
                            function l(f) {
                                try {
                                    u(r.throw(f))
                                } catch (h) {
                                    s(h)
                                }
                            }
                            function u(f) {
                                f.done ? i(f.value) : function(i) {
                                    return i instanceof n ? i : new n(function(s) {
                                        s(i)
                                    }
                                    )
                                }(f.value).then(a, l)
                            }
                            u((r = r.apply(e, t || [])).next())
                        }
                        )
                    }(this, void 0, void 0, function*() {
                        try {
                            for (n = kt(e); !(r = yield n.next()).done; )
                                if (t.next(r.value),
                                t.closed)
                                    return
                        } catch (s) {
                            o = {
                                error: s
                            }
                        } finally {
                            try {
                                r && !r.done && (i = n.return) && (yield i.call(n))
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                        t.complete()
                    })
                }
                )(e, t).catch(n=>t.error(n))
            }
            )
        }
        function vn(e, t, n, r=0, o=!1) {
            const i = t.schedule(function() {
                n(),
                o ? e.add(this.schedule(null, r)) : this.unsubscribe()
            }, r);
            if (e.add(i),
            !o)
                return i
        }
        function Le(e, t, n=1 / 0) {
            return ie(t) ? Le((r,o)=>ce((i,s)=>t(r, i, o, s))(sn(e(r, o))), n) : ("number" == typeof t && (n = t),
            Fe((r,o)=>function(e, t, n, r, o, i, s, a) {
                const l = [];
                let u = 0
                  , f = 0
                  , h = !1;
                const g = ()=>{
                    h && !l.length && !u && t.complete()
                }
                  , m = C=>u < r ? y(C) : l.push(C)
                  , y = C=>{
                    u++;
                    let w = !1;
                    sn(n(C, f++)).subscribe(new Ve(t,b=>{
                        t.next(b)
                    }
                    ,()=>{
                        w = !0
                    }
                    ,void 0,()=>{
                        if (w)
                            try {
                                for (u--; l.length && u < r; ) {
                                    const b = l.shift();
                                    y(b)
                                }
                                g()
                            } catch (b) {
                                t.error(b)
                            }
                    }
                    ))
                }
                ;
                return e.subscribe(new Ve(t,m,()=>{
                    h = !0,
                    g()
                }
                )),
                ()=>{}
            }(r, o, e, n)))
        }
        function U(e=1 / 0) {
            return Le(Hn, e)
        }
        const Dn = new oe(e=>e.complete());
        function gs(e) {
            return e[e.length - 1]
        }
        function gl(e) {
            return ie(gs(e)) ? e.pop() : void 0
        }
        function fr(e) {
            return function(e) {
                return e && ie(e.schedule)
            }(gs(e)) ? e.pop() : void 0
        }
        function ms(e, t=0) {
            return Fe((n,r)=>{
                n.subscribe(new Ve(r,o=>vn(r, e, ()=>r.next(o), t),()=>vn(r, e, ()=>r.complete(), t),o=>vn(r, e, ()=>r.error(o), t)))
            }
            )
        }
        function ut(e, t=0) {
            return Fe((n,r)=>{
                r.add(e.schedule(()=>n.subscribe(r), t))
            }
            )
        }
        function ys(e, t) {
            if (!e)
                throw new Error("Iterable cannot be null");
            return new oe(n=>{
                vn(n, t, ()=>{
                    const r = e[Symbol.asyncIterator]();
                    vn(n, t, ()=>{
                        r.next().then(o=>{
                            o.done ? n.complete() : n.next(o.value)
                        }
                        )
                    }
                    , 0, !0)
                }
                )
            }
            )
        }
        function Be(e, t) {
            return t ? function(e, t) {
                if (null != e) {
                    if (Un(e))
                        return function(e, t) {
                            return sn(e).pipe(ut(t), ms(t))
                        }(e, t);
                    if (al(e))
                        return function(e, t) {
                            return new oe(n=>{
                                let r = 0;
                                return t.schedule(function() {
                                    r === e.length ? n.complete() : (n.next(e[r++]),
                                    n.closed || this.schedule())
                                })
                            }
                            )
                        }(e, t);
                    if (ll(e))
                        return function(e, t) {
                            return sn(e).pipe(ut(t), ms(t))
                        }(e, t);
                    if (ul(e))
                        return ys(e, t);
                    if (fl(e))
                        return function(e, t) {
                            return new oe(n=>{
                                let r;
                                return vn(n, t, ()=>{
                                    r = e[dl](),
                                    vn(n, t, ()=>{
                                        let o, i;
                                        try {
                                            ({value: o, done: i} = r.next())
                                        } catch (s) {
                                            return void n.error(s)
                                        }
                                        i ? n.complete() : n.next(o)
                                    }
                                    , 0, !0)
                                }
                                ),
                                ()=>ie(null == r ? void 0 : r.return) && r.return()
                            }
                            )
                        }(e, t);
                    if (hl(e))
                        return function(e, t) {
                            return ys(Ko(e), t)
                        }(e, t)
                }
                throw cl(e)
            }(e, t) : sn(e)
        }
        function Yo(e) {
            return e <= 0 ? ()=>Dn : Fe((t,n)=>{
                let r = 0;
                t.subscribe(new Ve(n,o=>{
                    ++r <= e && (n.next(o),
                    e <= r && n.complete())
                }
                ))
            }
            )
        }
        function _s(e, t, ...n) {
            return !0 === t ? (e(),
            null) : !1 === t ? null : t(...n).pipe(Yo(1)).subscribe(()=>e())
        }
        function ue(e) {
            for (let t in e)
                if (e[t] === ue)
                    return t;
            throw Error("Could not find renamed property on target object.")
        }
        function ws(e, t) {
            for (const n in t)
                t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
        }
        function z(e) {
            if ("string" == typeof e)
                return e;
            if (Array.isArray(e))
                return "[" + e.map(z).join(", ") + "]";
            if (null == e)
                return "" + e;
            if (e.overriddenName)
                return `${e.overriddenName}`;
            if (e.name)
                return `${e.name}`;
            const t = e.toString();
            if (null == t)
                return "" + t;
            const n = t.indexOf("\n");
            return -1 === n ? t : t.substring(0, n)
        }
        function Cs(e, t) {
            return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
        }
        const _l = ue({
            __forward_ref__: ue
        });
        function ge(e) {
            return e.__forward_ref__ = ge,
            e.toString = function() {
                return z(this())
            }
            ,
            e
        }
        function R(e) {
            return wl(e) ? e() : e
        }
        function wl(e) {
            return "function" == typeof e && e.hasOwnProperty(_l) && e.__forward_ref__ === ge
        }
        class hr extends Error {
            constructor(t, n) {
                super(function(e, t) {
                    return `${e ? `NG0${e}: ` : ""}${t}`
                }(t, n)),
                this.code = t
            }
        }
        function ct(e) {
            return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : function(e) {
                return "string" == typeof e ? e : null == e ? "" : String(e)
            }(e)
        }
        function Zo(e, t) {
            const n = t ? ` in ${t}` : "";
            throw new hr("201",`No provider for ${ct(e)} found${n}`)
        }
        function gt(e, t) {
            null == e && function(e, t, n, r) {
                throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
            }(t, e, null, "!=")
        }
        function Q(e) {
            return {
                token: e.token,
                providedIn: e.providedIn || null,
                factory: e.factory,
                value: void 0
            }
        }
        function bt(e) {
            return {
                providers: e.providers || [],
                imports: e.imports || []
            }
        }
        function an(e) {
            return Dl(e, Jo) || Dl(e, El)
        }
        function Dl(e, t) {
            return e.hasOwnProperty(t) ? e[t] : null
        }
        function bl(e) {
            return e && (e.hasOwnProperty(vs) || e.hasOwnProperty(od)) ? e[vs] : null
        }
        const Jo = ue({
            \u0275prov: ue
        })
          , vs = ue({
            \u0275inj: ue
        })
          , El = ue({
            ngInjectableDef: ue
        })
          , od = ue({
            ngInjectorDef: ue
        });
        var O = (()=>((O = O || {})[O.Default = 0] = "Default",
        O[O.Host = 1] = "Host",
        O[O.Self = 2] = "Self",
        O[O.SkipSelf = 4] = "SkipSelf",
        O[O.Optional = 8] = "Optional",
        O))();
        let Ds;
        function Gn(e) {
            const t = Ds;
            return Ds = e,
            t
        }
        function bs(e, t, n) {
            const r = an(e);
            return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & O.Optional ? null : void 0 !== t ? t : void Zo(z(e), "Injector")
        }
        function En(e) {
            return {
                toString: e
            }.toString()
        }
        var Vt = (()=>((Vt = Vt || {})[Vt.OnPush = 0] = "OnPush",
        Vt[Vt.Default = 1] = "Default",
        Vt))()
          , Et = (()=>{
            return (e = Et || (Et = {}))[e.Emulated = 0] = "Emulated",
            e[e.None = 2] = "None",
            e[e.ShadowDom = 3] = "ShadowDom",
            Et;
            var e
        }
        )();
        const sd = "undefined" != typeof globalThis && globalThis
          , Al = "undefined" != typeof window && window
          , ad = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self
          , ae = sd || "undefined" != typeof global && global || Al || ad
          , pr = {}
          , de = []
          , ei = ue({
            \u0275cmp: ue
        })
          , As = ue({
            \u0275dir: ue
        })
          , Is = ue({
            \u0275pipe: ue
        })
          , Il = ue({
            \u0275mod: ue
        })
          , An = ue({
            \u0275fac: ue
        })
          , go = ue({
            __NG_ELEMENT_ID__: ue
        });
        let cd = 0;
        function mo(e) {
            return En(()=>{
                const n = {}
                  , r = {
                    type: e.type,
                    providersResolver: null,
                    decls: e.decls,
                    vars: e.vars,
                    factory: null,
                    template: e.template || null,
                    consts: e.consts || null,
                    ngContentSelectors: e.ngContentSelectors,
                    hostBindings: e.hostBindings || null,
                    hostVars: e.hostVars || 0,
                    hostAttrs: e.hostAttrs || null,
                    contentQueries: e.contentQueries || null,
                    declaredInputs: n,
                    inputs: null,
                    outputs: null,
                    exportAs: e.exportAs || null,
                    onPush: e.changeDetection === Vt.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    selectors: e.selectors || de,
                    viewQuery: e.viewQuery || null,
                    features: e.features || null,
                    data: e.data || {},
                    encapsulation: e.encapsulation || Et.Emulated,
                    id: "c",
                    styles: e.styles || de,
                    _: null,
                    setInput: null,
                    schemas: e.schemas || null,
                    tView: null
                }
                  , o = e.directives
                  , i = e.features
                  , s = e.pipes;
                return r.id += cd++,
                r.inputs = Tl(e.inputs, n),
                r.outputs = Tl(e.outputs),
                i && i.forEach(a=>a(r)),
                r.directiveDefs = o ? ()=>("function" == typeof o ? o() : o).map(Ml) : null,
                r.pipeDefs = s ? ()=>("function" == typeof s ? s() : s).map(Sl) : null,
                r
            }
            )
        }
        function Ml(e) {
            return et(e) || function(e) {
                return e[As] || null
            }(e)
        }
        function Sl(e) {
            return function(e) {
                return e[Is] || null
            }(e)
        }
        const Ms = {};
        function zt(e) {
            return En(()=>{
                const t = {
                    type: e.type,
                    bootstrap: e.bootstrap || de,
                    declarations: e.declarations || de,
                    imports: e.imports || de,
                    exports: e.exports || de,
                    transitiveCompileScopes: null,
                    schemas: e.schemas || null,
                    id: e.id || null
                };
                return null != e.id && (Ms[e.id] = e.type),
                t
            }
            )
        }
        function Tl(e, t) {
            if (null == e)
                return pr;
            const n = {};
            for (const r in e)
                if (e.hasOwnProperty(r)) {
                    let o = e[r]
                      , i = o;
                    Array.isArray(o) && (i = o[1],
                    o = o[0]),
                    n[o] = r,
                    t && (t[o] = i)
                }
            return n
        }
        const V = mo;
        function et(e) {
            return e[ei] || null
        }
        function je(e, t) {
            const n = e[Il] || null;
            if (!n && !0 === t)
                throw new Error(`Type ${z(e)} does not have '\u0275mod' property.`);
            return n
        }
        const q = 11;
        function ln(e) {
            return Array.isArray(e) && "object" == typeof e[1]
        }
        function Qt(e) {
            return Array.isArray(e) && !0 === e[1]
        }
        function Ts(e) {
            return 0 != (8 & e.flags)
        }
        function ni(e) {
            return 2 == (2 & e.flags)
        }
        function ri(e) {
            return 1 == (1 & e.flags)
        }
        function Kt(e) {
            return null !== e.template
        }
        function oi(e) {
            return 0 != (512 & e[2])
        }
        function p(e, t) {
            return e.hasOwnProperty(An) ? e[An] : null
        }
        class _ {
            constructor(t, n, r) {
                this.previousValue = t,
                this.currentValue = n,
                this.firstChange = r
            }
            isFirstChange() {
                return this.firstChange
            }
        }
        function E() {
            return P
        }
        function P(e) {
            return e.type.prototype.ngOnChanges && (e.setInput = Mt),
            Ue
        }
        function Ue() {
            const e = wr(this)
              , t = null == e ? void 0 : e.current;
            if (t) {
                const n = e.previous;
                if (n === pr)
                    e.previous = t;
                else
                    for (let r in t)
                        n[r] = t[r];
                e.current = null,
                this.ngOnChanges(t)
            }
        }
        function Mt(e, t, n, r) {
            const o = wr(e) || function(e, t) {
                return e[nt] = t
            }(e, {
                previous: pr,
                current: null
            })
              , i = o.current || (o.current = {})
              , s = o.previous
              , a = this.declaredInputs[n]
              , l = s[a];
            i[a] = new _(l && l.currentValue,t,s === pr),
            e[r] = t
        }
        E.ngInherit = !0;
        const nt = "__ngSimpleChanges__";
        function wr(e) {
            return e[nt] || null
        }
        let wd;
        function xe(e) {
            return !!e.listen
        }
        const lm = {
            createRenderer: (e,t)=>void 0 !== wd ? wd : "undefined" != typeof document ? document : void 0
        };
        function $e(e) {
            for (; Array.isArray(e); )
                e = e[0];
            return e
        }
        function cn(e, t) {
            return $e(t[e.index])
        }
        function vd(e, t) {
            return e.data[t]
        }
        function Yt(e, t) {
            const n = t[e];
            return ln(n) ? n : n[0]
        }
        function Dd(e) {
            return 128 == (128 & e[2])
        }
        function Gr(e, t) {
            return null == t ? null : e[t]
        }
        function cm(e) {
            e[18] = 0
        }
        function bd(e, t) {
            e[5] += t;
            let n = e
              , r = e[3];
            for (; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]); )
                r[5] += t,
                n = r,
                r = r[3]
        }
        const j = {
            lFrame: _m(null),
            bindingsEnabled: !0,
            isInCheckNoChangesMode: !1
        };
        function dm() {
            return j.bindingsEnabled
        }
        function A() {
            return j.lFrame.lView
        }
        function se() {
            return j.lFrame.tView
        }
        function ze() {
            let e = fm();
            for (; null !== e && 64 === e.type; )
                e = e.parent;
            return e
        }
        function fm() {
            return j.lFrame.currentTNode
        }
        function Qn(e, t) {
            const n = j.lFrame;
            n.currentTNode = e,
            n.isParent = t
        }
        function Ed() {
            return j.lFrame.isParent
        }
        function Nl() {
            return j.isInCheckNoChangesMode
        }
        function Fl(e) {
            j.isInCheckNoChangesMode = e
        }
        function x0(e, t) {
            const n = j.lFrame;
            n.bindingIndex = n.bindingRootIndex = e,
            Id(t)
        }
        function Id(e) {
            j.lFrame.currentDirectiveIndex = e
        }
        function Sd(e) {
            j.lFrame.currentQueryIndex = e
        }
        function P0(e) {
            const t = e[1];
            return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null
        }
        function mm(e, t, n) {
            if (n & O.SkipSelf) {
                let o = t
                  , i = e;
                for (; !(o = o.parent,
                null !== o || n & O.Host || (o = P0(i),
                null === o || (i = i[15],
                10 & o.type))); )
                    ;
                if (null === o)
                    return !1;
                t = o,
                e = i
            }
            const r = j.lFrame = ym();
            return r.currentTNode = t,
            r.lView = e,
            !0
        }
        function Ol(e) {
            const t = ym()
              , n = e[1];
            j.lFrame = t,
            t.currentTNode = n.firstChild,
            t.lView = e,
            t.tView = n,
            t.contextLView = e,
            t.bindingIndex = n.bindingStartIndex,
            t.inI18n = !1
        }
        function ym() {
            const e = j.lFrame
              , t = null === e ? null : e.child;
            return null === t ? _m(e) : t
        }
        function _m(e) {
            const t = {
                currentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: -1,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: e,
                child: null,
                inI18n: !1
            };
            return null !== e && (e.child = t),
            t
        }
        function wm() {
            const e = j.lFrame;
            return j.lFrame = e.parent,
            e.currentTNode = null,
            e.lView = null,
            e
        }
        const Cm = wm;
        function kl() {
            const e = wm();
            e.isParent = !0,
            e.tView = null,
            e.selectedIndex = -1,
            e.contextLView = null,
            e.elementDepthCount = 0,
            e.currentDirectiveIndex = -1,
            e.currentNamespace = null,
            e.bindingRootIndex = -1,
            e.bindingIndex = -1,
            e.currentQueryIndex = 0
        }
        function Tt() {
            return j.lFrame.selectedIndex
        }
        function Wr(e) {
            j.lFrame.selectedIndex = e
        }
        function Vl(e, t) {
            for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                const i = e.data[n].type.prototype
                  , {ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: l, ngAfterViewChecked: u, ngOnDestroy: f} = i;
                s && (e.contentHooks || (e.contentHooks = [])).push(-n, s),
                a && ((e.contentHooks || (e.contentHooks = [])).push(n, a),
                (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, a)),
                l && (e.viewHooks || (e.viewHooks = [])).push(-n, l),
                u && ((e.viewHooks || (e.viewHooks = [])).push(n, u),
                (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, u)),
                null != f && (e.destroyHooks || (e.destroyHooks = [])).push(n, f)
            }
        }
        function Ll(e, t, n) {
            vm(e, t, 3, n)
        }
        function Bl(e, t, n, r) {
            (3 & e[2]) === n && vm(e, t, n, r)
        }
        function Td(e, t) {
            let n = e[2];
            (3 & n) === t && (n &= 2047,
            n += 1,
            e[2] = n)
        }
        function vm(e, t, n, r) {
            const i = null != r ? r : -1
              , s = t.length - 1;
            let a = 0;
            for (let l = void 0 !== r ? 65535 & e[18] : 0; l < s; l++)
                if ("number" == typeof t[l + 1]) {
                    if (a = t[l],
                    null != r && a >= r)
                        break
                } else
                    t[l] < 0 && (e[18] += 65536),
                    (a < i || -1 == i) && (H0(e, n, t, l),
                    e[18] = (4294901760 & e[18]) + l + 2),
                    l++
        }
        function H0(e, t, n, r) {
            const o = n[r] < 0
              , i = n[r + 1]
              , a = e[o ? -n[r] : n[r]];
            if (o) {
                if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
                    e[2] += 2048;
                    try {
                        i.call(a)
                    } finally {}
                }
            } else
                try {
                    i.call(a)
                } finally {}
        }
        class Ps {
            constructor(t, n, r) {
                this.factory = t,
                this.resolving = !1,
                this.canSeeViewProviders = n,
                this.injectImpl = r
            }
        }
        function jl(e, t, n) {
            const r = xe(e);
            let o = 0;
            for (; o < n.length; ) {
                const i = n[o];
                if ("number" == typeof i) {
                    if (0 !== i)
                        break;
                    o++;
                    const s = n[o++]
                      , a = n[o++]
                      , l = n[o++];
                    r ? e.setAttribute(t, a, l, s) : t.setAttributeNS(s, a, l)
                } else {
                    const s = i
                      , a = n[++o];
                    Rd(s) ? r && e.setProperty(t, s, a) : r ? e.setAttribute(t, s, a) : t.setAttribute(s, a),
                    o++
                }
            }
            return o
        }
        function Dm(e) {
            return 3 === e || 4 === e || 6 === e
        }
        function Rd(e) {
            return 64 === e.charCodeAt(0)
        }
        function Hl(e, t) {
            if (null !== t && 0 !== t.length)
                if (null === e || 0 === e.length)
                    e = t.slice();
                else {
                    let n = -1;
                    for (let r = 0; r < t.length; r++) {
                        const o = t[r];
                        "number" == typeof o ? n = o : 0 === n || bm(e, n, o, null, -1 === n || 2 === n ? t[++r] : null)
                    }
                }
            return e
        }
        function bm(e, t, n, r, o) {
            let i = 0
              , s = e.length;
            if (-1 === t)
                s = -1;
            else
                for (; i < e.length; ) {
                    const a = e[i++];
                    if ("number" == typeof a) {
                        if (a === t) {
                            s = -1;
                            break
                        }
                        if (a > t) {
                            s = i - 1;
                            break
                        }
                    }
                }
            for (; i < e.length; ) {
                const a = e[i];
                if ("number" == typeof a)
                    break;
                if (a === n) {
                    if (null === r)
                        return void (null !== o && (e[i + 1] = o));
                    if (r === e[i + 1])
                        return void (e[i + 2] = o)
                }
                i++,
                null !== r && i++,
                null !== o && i++
            }
            -1 !== s && (e.splice(s, 0, t),
            i = s + 1),
            e.splice(i++, 0, n),
            null !== r && e.splice(i++, 0, r),
            null !== o && e.splice(i++, 0, o)
        }
        function Em(e) {
            return -1 !== e
        }
        function li(e) {
            return 32767 & e
        }
        function ui(e, t) {
            let n = function(e) {
                return e >> 16
            }(e)
              , r = t;
            for (; n > 0; )
                r = r[15],
                n--;
            return r
        }
        let Pd = !0;
        function Ul(e) {
            const t = Pd;
            return Pd = e,
            t
        }
        let z0 = 0;
        function Fs(e, t) {
            const n = Fd(e, t);
            if (-1 !== n)
                return n;
            const r = t[1];
            r.firstCreatePass && (e.injectorIndex = t.length,
            Nd(r.data, e),
            Nd(t, null),
            Nd(r.blueprint, null));
            const o = $l(e, t)
              , i = e.injectorIndex;
            if (Em(o)) {
                const s = li(o)
                  , a = ui(o, t)
                  , l = a[1].data;
                for (let u = 0; u < 8; u++)
                    t[i + u] = a[s + u] | l[s + u]
            }
            return t[i + 8] = o,
            i
        }
        function Nd(e, t) {
            e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
        }
        function Fd(e, t) {
            return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
        }
        function $l(e, t) {
            if (e.parent && -1 !== e.parent.injectorIndex)
                return e.parent.injectorIndex;
            let n = 0
              , r = null
              , o = t;
            for (; null !== o; ) {
                const i = o[1]
                  , s = i.type;
                if (r = 2 === s ? i.declTNode : 1 === s ? o[6] : null,
                null === r)
                    return -1;
                if (n++,
                o = o[15],
                -1 !== r.injectorIndex)
                    return r.injectorIndex | n << 16
            }
            return -1
        }
        function Gl(e, t, n) {
            !function(e, t, n) {
                let r;
                "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(go) && (r = n[go]),
                null == r && (r = n[go] = z0++);
                const o = 255 & r;
                t.data[e + (o >> 5)] |= 1 << o
            }(e, t, n)
        }
        function Mm(e, t, n) {
            if (n & O.Optional)
                return e;
            Zo(t, "NodeInjector")
        }
        function Sm(e, t, n, r) {
            if (n & O.Optional && void 0 === r && (r = null),
            0 == (n & (O.Self | O.Host))) {
                const o = e[9]
                  , i = Gn(void 0);
                try {
                    return o ? o.get(t, r, n & O.Optional) : bs(t, r, n & O.Optional)
                } finally {
                    Gn(i)
                }
            }
            return Mm(r, t, n)
        }
        function Tm(e, t, n, r=O.Default, o) {
            if (null !== e) {
                const i = function(e) {
                    if ("string" == typeof e)
                        return e.charCodeAt(0) || 0;
                    const t = e.hasOwnProperty(go) ? e[go] : void 0;
                    return "number" == typeof t ? t >= 0 ? 255 & t : Y0 : t
                }(n);
                if ("function" == typeof i) {
                    if (!mm(t, e, r))
                        return r & O.Host ? Mm(o, n, r) : Sm(t, n, r, o);
                    try {
                        const s = i(r);
                        if (null != s || r & O.Optional)
                            return s;
                        Zo(n)
                    } finally {
                        Cm()
                    }
                } else if ("number" == typeof i) {
                    let s = null
                      , a = Fd(e, t)
                      , l = -1
                      , u = r & O.Host ? t[16][6] : null;
                    for ((-1 === a || r & O.SkipSelf) && (l = -1 === a ? $l(e, t) : t[a + 8],
                    -1 !== l && Pm(r, !1) ? (s = t[1],
                    a = li(l),
                    t = ui(l, t)) : a = -1); -1 !== a; ) {
                        const f = t[1];
                        if (Rm(i, a, f.data)) {
                            const h = Z0(a, t, n, s, r, u);
                            if (h !== xm)
                                return h
                        }
                        l = t[a + 8],
                        -1 !== l && Pm(r, t[1].data[a + 8] === u) && Rm(i, a, t) ? (s = f,
                        a = li(l),
                        t = ui(l, t)) : a = -1
                    }
                }
            }
            return Sm(t, n, r, o)
        }
        const xm = {};
        function Y0() {
            return new ci(ze(),A())
        }
        function Z0(e, t, n, r, o, i) {
            const s = t[1]
              , a = s.data[e + 8]
              , f = function(e, t, n, r, o) {
                const i = e.providerIndexes
                  , s = t.data
                  , a = 1048575 & i
                  , l = e.directiveStart
                  , f = i >> 20
                  , g = o ? a + f : e.directiveEnd;
                for (let m = r ? a : a + f; m < g; m++) {
                    const y = s[m];
                    if (m < l && n === y || m >= l && y.type === n)
                        return m
                }
                if (o) {
                    const m = s[l];
                    if (m && Kt(m) && m.type === n)
                        return l
                }
                return null
            }(a, s, n, null == r ? ni(a) && Pd : r != s && 0 != (3 & a.type), o & O.Host && i === a);
            return null !== f ? Os(t, s, f, a) : xm
        }
        function Os(e, t, n, r) {
            let o = e[n];
            const i = t.data;
            if (function(e) {
                return e instanceof Ps
            }(o)) {
                const s = o;
                s.resolving && function(e, t) {
                    throw new hr("200",`Circular dependency in DI detected for ${e}`)
                }(ct(i[n]));
                const a = Ul(s.canSeeViewProviders);
                s.resolving = !0;
                const l = s.injectImpl ? Gn(s.injectImpl) : null;
                mm(e, r, O.Default);
                try {
                    o = e[n] = s.factory(void 0, i, e, r),
                    t.firstCreatePass && n >= r.directiveStart && function(e, t, n) {
                        const {ngOnChanges: r, ngOnInit: o, ngDoCheck: i} = t.type.prototype;
                        if (r) {
                            const s = P(t);
                            (n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                            (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, s)
                        }
                        o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                        i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                        (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i))
                    }(n, i[n], t)
                } finally {
                    null !== l && Gn(l),
                    Ul(a),
                    s.resolving = !1,
                    Cm()
                }
            }
            return o
        }
        function Rm(e, t, n) {
            return !!(n[t + (e >> 5)] & 1 << e)
        }
        function Pm(e, t) {
            return !(e & O.Self || e & O.Host && t)
        }
        class ci {
            constructor(t, n) {
                this._tNode = t,
                this._lView = n
            }
            get(t, n, r) {
                return Tm(this._tNode, this._lView, t, r, n)
            }
        }
        function Od(e) {
            return wl(e) ? ()=>{
                const t = Od(R(e));
                return t && t()
            }
            : p(e)
        }
        const fi = "__parameters__";
        function bo(e, t, n) {
            return En(()=>{
                const r = function(e) {
                    return function(...n) {
                        if (e) {
                            const r = e(...n);
                            for (const o in r)
                                this[o] = r[o]
                        }
                    }
                }(t);
                function o(...i) {
                    if (this instanceof o)
                        return r.apply(this, i),
                        this;
                    const s = new o(...i);
                    return a.annotation = s,
                    a;
                    function a(l, u, f) {
                        const h = l.hasOwnProperty(fi) ? l[fi] : Object.defineProperty(l, fi, {
                            value: []
                        })[fi];
                        for (; h.length <= f; )
                            h.push(null);
                        return (h[f] = h[f] || []).push(s),
                        l
                    }
                }
                return n && (o.prototype = Object.create(n.prototype)),
                o.prototype.ngMetadataName = e,
                o.annotationCls = o,
                o
            }
            )
        }
        class X {
            constructor(t, n) {
                this._desc = t,
                this.ngMetadataName = "InjectionToken",
                this.\u0275prov = void 0,
                "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = Q({
                    token: this,
                    providedIn: n.providedIn || "root",
                    factory: n.factory
                }))
            }
            toString() {
                return `InjectionToken ${this._desc}`
            }
        }
        const tA = new X("AnalyzeForEntryComponents");
        function Kn(e, t) {
            e.forEach(n=>Array.isArray(n) ? Kn(n, t) : t(n))
        }
        function ql(e, t, n) {
            t >= e.length ? e.push(n) : e.splice(t, 0, n)
        }
        function Eo(e, t) {
            return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
        }
        function Jt(e, t, n) {
            let r = pi(e, t);
            return r >= 0 ? e[1 | r] = n : (r = ~r,
            function(e, t, n, r) {
                let o = e.length;
                if (o == t)
                    e.push(n, r);
                else if (1 === o)
                    e.push(r, e[0]),
                    e[0] = n;
                else {
                    for (o--,
                    e.push(e[o - 1], e[o]); o > t; )
                        e[o] = e[o - 2],
                        o--;
                    e[t] = n,
                    e[t + 1] = r
                }
            }(e, r, t, n)),
            r
        }
        function Ld(e, t) {
            const n = pi(e, t);
            if (n >= 0)
                return e[1 | n]
        }
        function pi(e, t) {
            return function(e, t, n) {
                let r = 0
                  , o = e.length >> n;
                for (; o !== r; ) {
                    const i = r + (o - r >> 1)
                      , s = e[i << n];
                    if (t === s)
                        return i << n;
                    s > t ? o = i : r = i + 1
                }
                return ~(o << n)
            }(e, t, 1)
        }
        const Hs = {}
          , jd = "__NG_DI_FLAG__"
          , gi = "ngTempTokenPath"
          , dA = /\n/gm
          , Hd = "__source"
          , Ud = ue({
            provide: String,
            useValue: ue
        });
        let Us;
        function mi(e) {
            const t = Us;
            return Us = e,
            t
        }
        function hA(e, t=O.Default) {
            if (void 0 === Us)
                throw new Error("inject() must be called from an injection context");
            return null === Us ? bs(e, void 0, t) : Us.get(e, t & O.Optional ? null : void 0, t)
        }
        function N(e, t=O.Default) {
            return (Ds || hA)(R(e), t)
        }
        function Ao(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const r = R(e[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length)
                        throw new Error("Arguments array must have arguments.");
                    let o, i = O.Default;
                    for (let s = 0; s < r.length; s++) {
                        const a = r[s]
                          , l = pA(a);
                        "number" == typeof l ? -1 === l ? o = a.token : i |= l : o = a
                    }
                    t.push(N(o, i))
                } else
                    t.push(N(r))
            }
            return t
        }
        function $s(e, t) {
            return e[jd] = t,
            e.prototype[jd] = t,
            e
        }
        function pA(e) {
            return e[jd]
        }
        function Vm(e, t, n, r) {
            const o = e[gi];
            throw t[Hd] && o.unshift(t[Hd]),
            e.message = function(e, t, n, r=null) {
                e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                let o = z(t);
                if (Array.isArray(t))
                    o = t.map(z).join(" -> ");
                else if ("object" == typeof t) {
                    let i = [];
                    for (let s in t)
                        if (t.hasOwnProperty(s)) {
                            let a = t[s];
                            i.push(s + ":" + ("string" == typeof a ? JSON.stringify(a) : z(a)))
                        }
                    o = `{${i.join(", ")}}`
                }
                return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(dA, "\n  ")}`
            }("\n" + e.message, o, n, r),
            e.ngTokenPath = o,
            e[gi] = null,
            e
        }
        const yi = $s(bo("Inject", e=>({
            token: e
        })), -1)
          , Bt = $s(bo("Optional"), 8)
          , Qr = $s(bo("SkipSelf"), 4);
        const ny = "__ngContext__";
        function _t(e, t) {
            e[ny] = t
        }
        function Jd(e) {
            const t = function(e) {
                return e[ny] || null
            }(e);
            return t ? Array.isArray(t) ? t : t.lView : null
        }
        function Xl(e) {
            return e.ngOriginalError
        }
        function aI(e, ...t) {}
        class Mo {
            constructor() {
                this._console = console
            }
            handleError(t) {
                const n = this._findOriginalError(t)
                  , r = this._findContext(t)
                  , o = (e = t) && e.ngErrorLogger || aI;
                var e;
                o(this._console, "ERROR", t),
                n && o(this._console, "ORIGINAL ERROR", n),
                r && o(this._console, "ERROR CONTEXT", r)
            }
            _findContext(t) {
                return t ? t.ngDebugContext || this._findContext(Xl(t)) : null
            }
            _findOriginalError(t) {
                let n = t && Xl(t);
                for (; n && Xl(n); )
                    n = Xl(n);
                return n || null
            }
        }
        const dy = (()=>("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(ae))();
        function Jn(e) {
            return e instanceof Function ? e() : e
        }
        var en = (()=>((en = en || {})[en.Important = 1] = "Important",
        en[en.DashCase = 2] = "DashCase",
        en))();
        function tf(e, t) {
            return undefined(e, t)
        }
        function Ks(e) {
            const t = e[3];
            return Qt(t) ? t[3] : t
        }
        function nf(e) {
            return my(e[13])
        }
        function rf(e) {
            return my(e[4])
        }
        function my(e) {
            for (; null !== e && !Qt(e); )
                e = e[4];
            return e
        }
        function vi(e, t, n, r, o) {
            if (null != r) {
                let i, s = !1;
                Qt(r) ? i = r : ln(r) && (s = !0,
                r = r[0]);
                const a = $e(r);
                0 === e && null !== n ? null == o ? Dy(t, n, a) : So(t, n, a, o || null, !0) : 1 === e && null !== n ? So(t, n, a, o || null, !0) : 2 === e ? function(e, t, n) {
                    const r = tu(e, t);
                    r && function(e, t, n, r) {
                        xe(e) ? e.removeChild(t, n, r) : t.removeChild(n)
                    }(e, r, t, n)
                }(t, a, s) : 3 === e && t.destroyNode(a),
                null != i && function(e, t, n, r, o) {
                    const i = n[7];
                    i !== $e(n) && vi(t, e, r, i, o);
                    for (let a = 10; a < n.length; a++) {
                        const l = n[a];
                        Ys(l[1], l, e, t, r, i)
                    }
                }(t, e, i, n, o)
            }
        }
        function sf(e, t, n) {
            return xe(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
        }
        function _y(e, t) {
            const n = e[9]
              , r = n.indexOf(t)
              , o = t[3];
            1024 & t[2] && (t[2] &= -1025,
            bd(o, -1)),
            n.splice(r, 1)
        }
        function af(e, t) {
            if (e.length <= 10)
                return;
            const n = 10 + t
              , r = e[n];
            if (r) {
                const o = r[17];
                null !== o && o !== e && _y(o, r),
                t > 0 && (e[n - 1][4] = r[4]);
                const i = Eo(e, 10 + t);
                !function(e, t) {
                    Ys(e, t, t[q], 2, null, null),
                    t[0] = null,
                    t[6] = null
                }(r[1], r);
                const s = i[19];
                null !== s && s.detachView(i[1]),
                r[3] = null,
                r[4] = null,
                r[2] &= -129
            }
            return r
        }
        function wy(e, t) {
            if (!(256 & t[2])) {
                const n = t[q];
                xe(n) && n.destroyNode && Ys(e, t, n, 3, null, null),
                function(e) {
                    let t = e[13];
                    if (!t)
                        return lf(e[1], e);
                    for (; t; ) {
                        let n = null;
                        if (ln(t))
                            n = t[13];
                        else {
                            const r = t[10];
                            r && (n = r)
                        }
                        if (!n) {
                            for (; t && !t[4] && t !== e; )
                                ln(t) && lf(t[1], t),
                                t = t[3];
                            null === t && (t = e),
                            ln(t) && lf(t[1], t),
                            n = t && t[4]
                        }
                        t = n
                    }
                }(t)
            }
        }
        function lf(e, t) {
            if (!(256 & t[2])) {
                t[2] &= -129,
                t[2] |= 256,
                function(e, t) {
                    let n;
                    if (null != e && null != (n = e.destroyHooks))
                        for (let r = 0; r < n.length; r += 2) {
                            const o = t[n[r]];
                            if (!(o instanceof Ps)) {
                                const i = n[r + 1];
                                if (Array.isArray(i))
                                    for (let s = 0; s < i.length; s += 2) {
                                        const a = o[i[s]]
                                          , l = i[s + 1];
                                        try {
                                            l.call(a)
                                        } finally {}
                                    }
                                else
                                    try {
                                        i.call(o)
                                    } finally {}
                            }
                        }
                }(e, t),
                function(e, t) {
                    const n = e.cleanup
                      , r = t[7];
                    let o = -1;
                    if (null !== n)
                        for (let i = 0; i < n.length - 1; i += 2)
                            if ("string" == typeof n[i]) {
                                const s = n[i + 1]
                                  , a = "function" == typeof s ? s(t) : $e(t[s])
                                  , l = r[o = n[i + 2]]
                                  , u = n[i + 3];
                                "boolean" == typeof u ? a.removeEventListener(n[i], l, u) : u >= 0 ? r[o = u]() : r[o = -u].unsubscribe(),
                                i += 2
                            } else {
                                const s = r[o = n[i + 1]];
                                n[i].call(s)
                            }
                    if (null !== r) {
                        for (let i = o + 1; i < r.length; i++)
                            r[i]();
                        t[7] = null
                    }
                }(e, t),
                1 === t[1].type && xe(t[q]) && t[q].destroy();
                const n = t[17];
                if (null !== n && Qt(t[3])) {
                    n !== t[3] && _y(n, t);
                    const r = t[19];
                    null !== r && r.detachView(e)
                }
            }
        }
        function Cy(e, t, n) {
            return function(e, t, n) {
                let r = t;
                for (; null !== r && 40 & r.type; )
                    r = (t = r).parent;
                if (null === r)
                    return n[0];
                if (2 & r.flags) {
                    const o = e.data[r.directiveStart].encapsulation;
                    if (o === Et.None || o === Et.Emulated)
                        return null
                }
                return cn(r, n)
            }(e, t.parent, n)
        }
        function So(e, t, n, r, o) {
            xe(e) ? e.insertBefore(t, n, r, o) : t.insertBefore(n, r, o)
        }
        function Dy(e, t, n) {
            xe(e) ? e.appendChild(t, n) : t.appendChild(n)
        }
        function by(e, t, n, r, o) {
            null !== r ? So(e, t, n, r, o) : Dy(e, t, n)
        }
        function tu(e, t) {
            return xe(e) ? e.parentNode(t) : t.parentNode
        }
        let Iy = function(e, t, n) {
            return 40 & e.type ? cn(e, n) : null
        };
        function nu(e, t, n, r) {
            const o = Cy(e, r, t)
              , i = t[q]
              , a = function(e, t, n) {
                return Iy(e, t, n)
            }(r.parent || t[6], r, t);
            if (null != o)
                if (Array.isArray(n))
                    for (let l = 0; l < n.length; l++)
                        by(i, o, n[l], a, !1);
                else
                    by(i, o, n, a, !1)
        }
        function ru(e, t) {
            if (null !== t) {
                const n = t.type;
                if (3 & n)
                    return cn(t, e);
                if (4 & n)
                    return cf(-1, e[t.index]);
                if (8 & n) {
                    const r = t.child;
                    if (null !== r)
                        return ru(e, r);
                    {
                        const o = e[t.index];
                        return Qt(o) ? cf(-1, o) : $e(o)
                    }
                }
                if (32 & n)
                    return tf(t, e)() || $e(e[t.index]);
                {
                    const r = Sy(e, t);
                    return null !== r ? Array.isArray(r) ? r[0] : ru(Ks(e[16]), r) : ru(e, t.next)
                }
            }
            return null
        }
        function Sy(e, t) {
            return null !== t ? e[16][6].projection[t.projection] : null
        }
        function cf(e, t) {
            const n = 10 + e + 1;
            if (n < t.length) {
                const r = t[n]
                  , o = r[1].firstChild;
                if (null !== o)
                    return ru(r, o)
            }
            return t[7]
        }
        function df(e, t, n, r, o, i, s) {
            for (; null != n; ) {
                const a = r[n.index]
                  , l = n.type;
                if (s && 0 === t && (a && _t($e(a), r),
                n.flags |= 4),
                64 != (64 & n.flags))
                    if (8 & l)
                        df(e, t, n.child, r, o, i, !1),
                        vi(t, e, o, a, i);
                    else if (32 & l) {
                        const u = tf(n, r);
                        let f;
                        for (; f = u(); )
                            vi(t, e, o, f, i);
                        vi(t, e, o, a, i)
                    } else
                        16 & l ? xy(e, t, r, n, o, i) : vi(t, e, o, a, i);
                n = s ? n.projectionNext : n.next
            }
        }
        function Ys(e, t, n, r, o, i) {
            df(n, r, e.firstChild, t, o, i, !1)
        }
        function xy(e, t, n, r, o, i) {
            const s = n[16]
              , l = s[6].projection[r.projection];
            if (Array.isArray(l))
                for (let u = 0; u < l.length; u++)
                    vi(t, e, o, l[u], i);
            else
                df(e, t, l, s[3], o, i, !0)
        }
        function Ry(e, t, n) {
            xe(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
        }
        function ff(e, t, n) {
            xe(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
        }
        function Py(e, t, n) {
            let r = e.length;
            for (; ; ) {
                const o = e.indexOf(t, n);
                if (-1 === o)
                    return o;
                if (0 === o || e.charCodeAt(o - 1) <= 32) {
                    const i = t.length;
                    if (o + i === r || e.charCodeAt(o + i) <= 32)
                        return o
                }
                n = o + 1
            }
        }
        const Ny = "ng-template";
        function NI(e, t, n) {
            let r = 0;
            for (; r < e.length; ) {
                let o = e[r++];
                if (n && "class" === o) {
                    if (o = e[r],
                    -1 !== Py(o.toLowerCase(), t, 0))
                        return !0
                } else if (1 === o) {
                    for (; r < e.length && "string" == typeof (o = e[r++]); )
                        if (o.toLowerCase() === t)
                            return !0;
                    return !1
                }
            }
            return !1
        }
        function Fy(e) {
            return 4 === e.type && e.value !== Ny
        }
        function FI(e, t, n) {
            return t === (4 !== e.type || n ? e.value : Ny)
        }
        function OI(e, t, n) {
            let r = 4;
            const o = e.attrs || []
              , i = function(e) {
                for (let t = 0; t < e.length; t++)
                    if (Dm(e[t]))
                        return t;
                return e.length
            }(o);
            let s = !1;
            for (let a = 0; a < t.length; a++) {
                const l = t[a];
                if ("number" != typeof l) {
                    if (!s)
                        if (4 & r) {
                            if (r = 2 | 1 & r,
                            "" !== l && !FI(e, l, n) || "" === l && 1 === t.length) {
                                if (In(r))
                                    return !1;
                                s = !0
                            }
                        } else {
                            const u = 8 & r ? l : t[++a];
                            if (8 & r && null !== e.attrs) {
                                if (!NI(e.attrs, u, n)) {
                                    if (In(r))
                                        return !1;
                                    s = !0
                                }
                                continue
                            }
                            const h = kI(8 & r ? "class" : l, o, Fy(e), n);
                            if (-1 === h) {
                                if (In(r))
                                    return !1;
                                s = !0;
                                continue
                            }
                            if ("" !== u) {
                                let g;
                                g = h > i ? "" : o[h + 1].toLowerCase();
                                const m = 8 & r ? g : null;
                                if (m && -1 !== Py(m, u, 0) || 2 & r && u !== g) {
                                    if (In(r))
                                        return !1;
                                    s = !0
                                }
                            }
                        }
                } else {
                    if (!s && !In(r) && !In(l))
                        return !1;
                    if (s && In(l))
                        continue;
                    s = !1,
                    r = l | 1 & r
                }
            }
            return In(r) || s
        }
        function In(e) {
            return 0 == (1 & e)
        }
        function kI(e, t, n, r) {
            if (null === t)
                return -1;
            let o = 0;
            if (r || !n) {
                let i = !1;
                for (; o < t.length; ) {
                    const s = t[o];
                    if (s === e)
                        return o;
                    if (3 === s || 6 === s)
                        i = !0;
                    else {
                        if (1 === s || 2 === s) {
                            let a = t[++o];
                            for (; "string" == typeof a; )
                                a = t[++o];
                            continue
                        }
                        if (4 === s)
                            break;
                        if (0 === s) {
                            o += 4;
                            continue
                        }
                    }
                    o += i ? 1 : 2
                }
                return -1
            }
            return function(e, t) {
                let n = e.indexOf(4);
                if (n > -1)
                    for (n++; n < e.length; ) {
                        const r = e[n];
                        if ("number" == typeof r)
                            return -1;
                        if (r === t)
                            return n;
                        n++
                    }
                return -1
            }(t, e)
        }
        function Oy(e, t, n=!1) {
            for (let r = 0; r < t.length; r++)
                if (OI(e, t[r], n))
                    return !0;
            return !1
        }
        function ky(e, t) {
            return e ? ":not(" + t.trim() + ")" : t
        }
        function HI(e) {
            let t = e[0]
              , n = 1
              , r = 2
              , o = ""
              , i = !1;
            for (; n < e.length; ) {
                let s = e[n];
                if ("string" == typeof s)
                    if (2 & r) {
                        const a = e[++n];
                        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
                    } else
                        8 & r ? o += "." + s : 4 & r && (o += " " + s);
                else
                    "" !== o && !In(s) && (t += ky(i, o),
                    o = ""),
                    r = s,
                    i = i || !In(r);
                n++
            }
            return "" !== o && (t += ky(i, o)),
            t
        }
        const W = {};
        function Ly(e, t, n, r) {
            if (!r)
                if (3 == (3 & t[2])) {
                    const i = e.preOrderCheckHooks;
                    null !== i && Ll(t, i, n)
                } else {
                    const i = e.preOrderHooks;
                    null !== i && Bl(t, i, 0, n)
                }
            Wr(n)
        }
        function ou(e, t) {
            return e << 17 | t << 2
        }
        function Mn(e) {
            return e >> 17 & 32767
        }
        function hf(e) {
            return 2 | e
        }
        function Dr(e) {
            return (131068 & e) >> 2
        }
        function pf(e, t) {
            return -131069 & e | t << 2
        }
        function gf(e) {
            return 1 | e
        }
        function Ky(e, t) {
            const n = e.contentQueries;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2) {
                    const o = n[r]
                      , i = n[r + 1];
                    if (-1 !== i) {
                        const s = e.data[i];
                        Sd(o),
                        s.contentQueries(2, t[i], i)
                    }
                }
        }
        function Zs(e, t, n, r, o, i, s, a, l, u) {
            const f = t.blueprint.slice();
            return f[0] = o,
            f[2] = 140 | r,
            cm(f),
            f[3] = f[15] = e,
            f[8] = n,
            f[10] = s || e && e[10],
            f[q] = a || e && e[q],
            f[12] = l || e && e[12] || null,
            f[9] = u || e && e[9] || null,
            f[6] = i,
            f[16] = 2 == t.type ? e[16] : f,
            f
        }
        function Di(e, t, n, r, o) {
            let i = e.data[t];
            if (null === i)
                i = function(e, t, n, r, o) {
                    const i = fm()
                      , s = Ed()
                      , l = e.data[t] = function(e, t, n, r, o, i) {
                        return {
                            type: n,
                            index: r,
                            insertBeforeIndex: null,
                            injectorIndex: t ? t.injectorIndex : -1,
                            directiveStart: -1,
                            directiveEnd: -1,
                            directiveStylingLast: -1,
                            propertyBindings: null,
                            flags: 0,
                            providerIndexes: 0,
                            value: o,
                            attrs: i,
                            mergedAttrs: null,
                            localNames: null,
                            initialInputs: void 0,
                            inputs: null,
                            outputs: null,
                            tViews: null,
                            next: null,
                            projectionNext: null,
                            child: null,
                            parent: t,
                            projection: null,
                            styles: null,
                            stylesWithoutHost: null,
                            residualStyles: void 0,
                            classes: null,
                            classesWithoutHost: null,
                            residualClasses: void 0,
                            classBindings: 0,
                            styleBindings: 0
                        }
                    }(0, s ? i : i && i.parent, n, t, r, o);
                    return null === e.firstChild && (e.firstChild = l),
                    null !== i && (s ? null == i.child && null !== l.parent && (i.child = l) : null === i.next && (i.next = l)),
                    l
                }(e, t, n, r, o),
                j.lFrame.inI18n && (i.flags |= 64);
            else if (64 & i.type) {
                i.type = n,
                i.value = r,
                i.attrs = o;
                const s = function() {
                    const e = j.lFrame
                      , t = e.currentTNode;
                    return e.isParent ? t : t.parent
                }();
                i.injectorIndex = null === s ? -1 : s.injectorIndex
            }
            return Qn(i, !0),
            i
        }
        function bi(e, t, n, r) {
            if (0 === n)
                return -1;
            const o = t.length;
            for (let i = 0; i < n; i++)
                t.push(r),
                e.blueprint.push(r),
                e.data.push(null);
            return o
        }
        function Js(e, t, n) {
            Ol(t);
            try {
                const r = e.viewQuery;
                null !== r && Nf(1, r, n);
                const o = e.template;
                null !== o && Yy(e, t, o, 1, n),
                e.firstCreatePass && (e.firstCreatePass = !1),
                e.staticContentQueries && Ky(e, t),
                e.staticViewQueries && Nf(2, e.viewQuery, n);
                const i = e.components;
                null !== i && function(e, t) {
                    for (let n = 0; n < t.length; n++)
                        bM(e, t[n])
                }(t, i)
            } catch (r) {
                throw e.firstCreatePass && (e.incompleteFirstPass = !0,
                e.firstCreatePass = !1),
                r
            } finally {
                t[2] &= -5,
                kl()
            }
        }
        function Ei(e, t, n, r) {
            const o = t[2];
            if (256 == (256 & o))
                return;
            Ol(t);
            const i = Nl();
            try {
                cm(t),
                function(e) {
                    j.lFrame.bindingIndex = e
                }(e.bindingStartIndex),
                null !== n && Yy(e, t, n, 2, r);
                const s = 3 == (3 & o);
                if (!i)
                    if (s) {
                        const u = e.preOrderCheckHooks;
                        null !== u && Ll(t, u, null)
                    } else {
                        const u = e.preOrderHooks;
                        null !== u && Bl(t, u, 0, null),
                        Td(t, 0)
                    }
                if (function(e) {
                    for (let t = nf(e); null !== t; t = rf(t)) {
                        if (!t[2])
                            continue;
                        const n = t[9];
                        for (let r = 0; r < n.length; r++) {
                            const o = n[r]
                              , i = o[3];
                            0 == (1024 & o[2]) && bd(i, 1),
                            o[2] |= 1024
                        }
                    }
                }(t),
                function(e) {
                    for (let t = nf(e); null !== t; t = rf(t))
                        for (let n = 10; n < t.length; n++) {
                            const r = t[n]
                              , o = r[1];
                            Dd(r) && Ei(o, r, o.template, r[8])
                        }
                }(t),
                null !== e.contentQueries && Ky(e, t),
                !i)
                    if (s) {
                        const u = e.contentCheckHooks;
                        null !== u && Ll(t, u)
                    } else {
                        const u = e.contentHooks;
                        null !== u && Bl(t, u, 1),
                        Td(t, 1)
                    }
                !function(e, t) {
                    const n = e.hostBindingOpCodes;
                    if (null !== n)
                        try {
                            for (let r = 0; r < n.length; r++) {
                                const o = n[r];
                                if (o < 0)
                                    Wr(~o);
                                else {
                                    const i = o
                                      , s = n[++r]
                                      , a = n[++r];
                                    x0(s, i),
                                    a(2, t[i])
                                }
                            }
                        } finally {
                            Wr(-1)
                        }
                }(e, t);
                const a = e.components;
                null !== a && function(e, t) {
                    for (let n = 0; n < t.length; n++)
                        DM(e, t[n])
                }(t, a);
                const l = e.viewQuery;
                if (null !== l && Nf(2, l, r),
                !i)
                    if (s) {
                        const u = e.viewCheckHooks;
                        null !== u && Ll(t, u)
                    } else {
                        const u = e.viewHooks;
                        null !== u && Bl(t, u, 2),
                        Td(t, 2)
                    }
                !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
                i || (t[2] &= -73),
                1024 & t[2] && (t[2] &= -1025,
                bd(t[3], -1))
            } finally {
                kl()
            }
        }
        function rM(e, t, n, r) {
            const o = t[10]
              , i = !Nl()
              , s = function(e) {
                return 4 == (4 & e[2])
            }(t);
            try {
                i && !s && o.begin && o.begin(),
                s && Js(e, t, r),
                Ei(e, t, n, r)
            } finally {
                i && !s && o.end && o.end()
            }
        }
        function Yy(e, t, n, r, o) {
            const i = Tt()
              , s = 2 & r;
            try {
                Wr(-1),
                s && t.length > 20 && Ly(e, t, 20, Nl()),
                n(r, o)
            } finally {
                Wr(i)
            }
        }
        function Jy(e) {
            const t = e.tView;
            return null === t || t.incompleteFirstPass ? e.tView = au(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
        }
        function au(e, t, n, r, o, i, s, a, l, u) {
            const f = 20 + r
              , h = f + o
              , g = function(e, t) {
                const n = [];
                for (let r = 0; r < t; r++)
                    n.push(r < e ? null : W);
                return n
            }(f, h)
              , m = "function" == typeof u ? u() : u;
            return g[1] = {
                type: e,
                blueprint: g,
                template: n,
                queries: null,
                viewQuery: a,
                declTNode: t,
                data: g.slice().fill(null, f),
                bindingStartIndex: f,
                expandoStartIndex: h,
                hostBindingOpCodes: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof i ? i() : i,
                pipeRegistry: "function" == typeof s ? s() : s,
                firstChild: null,
                schemas: l,
                consts: m,
                incompleteFirstPass: !1
            }
        }
        function n_(e, t, n) {
            for (let r in e)
                if (e.hasOwnProperty(r)) {
                    const o = e[r];
                    (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, o) : n[r] = [t, o]
                }
            return n
        }
        function o_(e, t, n, r, o, i) {
            const s = i.hostBindings;
            if (s) {
                let a = e.hostBindingOpCodes;
                null === a && (a = e.hostBindingOpCodes = []);
                const l = ~t.index;
                (function(e) {
                    let t = e.length;
                    for (; t > 0; ) {
                        const n = e[--t];
                        if ("number" == typeof n && n < 0)
                            return n
                    }
                    return 0
                }
                )(a) != l && a.push(l),
                a.push(r, o, s)
            }
        }
        function i_(e, t) {
            null !== e.hostBindings && e.hostBindings(1, t)
        }
        function s_(e, t) {
            t.flags |= 2,
            (e.components || (e.components = [])).push(t.index)
        }
        function mM(e, t, n) {
            if (n) {
                if (t.exportAs)
                    for (let r = 0; r < t.exportAs.length; r++)
                        n[t.exportAs[r]] = e;
                Kt(t) && (n[""] = e)
            }
        }
        function a_(e, t, n) {
            e.flags |= 1,
            e.directiveStart = t,
            e.directiveEnd = t + n,
            e.providerIndexes = t
        }
        function l_(e, t, n, r, o) {
            e.data[r] = o;
            const i = o.factory || (o.factory = p(o.type))
              , s = new Ps(i,Kt(o),null);
            e.blueprint[r] = s,
            n[r] = s,
            o_(e, t, 0, r, bi(e, n, o.hostVars, W), o)
        }
        function yM(e, t, n) {
            const r = cn(t, e)
              , o = Jy(n)
              , i = e[10]
              , s = lu(e, Zs(e, o, null, n.onPush ? 64 : 16, r, t, i, i.createRenderer(r, n), null, null));
            e[t.index] = s
        }
        function _M(e, t, n, r, o, i) {
            const s = i[t];
            if (null !== s) {
                const a = r.setInput;
                for (let l = 0; l < s.length; ) {
                    const u = s[l++]
                      , f = s[l++]
                      , h = s[l++];
                    null !== a ? r.setInput(n, h, u, f) : n[f] = h
                }
            }
        }
        function wM(e, t) {
            let n = null
              , r = 0;
            for (; r < t.length; ) {
                const o = t[r];
                if (0 !== o)
                    if (5 !== o) {
                        if ("number" == typeof o)
                            break;
                        e.hasOwnProperty(o) && (null === n && (n = []),
                        n.push(o, e[o], t[r + 1])),
                        r += 2
                    } else
                        r += 2;
                else
                    r += 4
            }
            return n
        }
        function DM(e, t) {
            const n = Yt(t, e);
            if (Dd(n)) {
                const r = n[1];
                80 & n[2] ? Ei(r, n, r.template, n[8]) : n[5] > 0 && Tf(n)
            }
        }
        function Tf(e) {
            for (let r = nf(e); null !== r; r = rf(r))
                for (let o = 10; o < r.length; o++) {
                    const i = r[o];
                    if (1024 & i[2]) {
                        const s = i[1];
                        Ei(s, i, s.template, i[8])
                    } else
                        i[5] > 0 && Tf(i)
                }
            const n = e[1].components;
            if (null !== n)
                for (let r = 0; r < n.length; r++) {
                    const o = Yt(n[r], e);
                    Dd(o) && o[5] > 0 && Tf(o)
                }
        }
        function bM(e, t) {
            const n = Yt(t, e)
              , r = n[1];
            (function(e, t) {
                for (let n = t.length; n < e.blueprint.length; n++)
                    t.push(e.blueprint[n])
            }
            )(r, n),
            Js(r, n, n[8])
        }
        function lu(e, t) {
            return e[13] ? e[14][4] = t : e[13] = t,
            e[14] = t,
            t
        }
        function xf(e) {
            for (; e; ) {
                e[2] |= 64;
                const t = Ks(e);
                if (oi(e) && !t)
                    return e;
                e = t
            }
            return null
        }
        function Pf(e, t, n) {
            const r = t[10];
            r.begin && r.begin();
            try {
                Ei(e, t, e.template, n)
            } catch (o) {
                throw p_(t, o),
                o
            } finally {
                r.end && r.end()
            }
        }
        function c_(e) {
            !function(e) {
                for (let t = 0; t < e.components.length; t++) {
                    const n = e.components[t]
                      , r = Jd(n)
                      , o = r[1];
                    rM(o, r, o.template, n)
                }
            }(e[8])
        }
        function Nf(e, t, n) {
            Sd(0),
            t(e, n)
        }
        const SM = (()=>Promise.resolve(null))();
        function d_(e) {
            return e[7] || (e[7] = [])
        }
        function f_(e) {
            return e.cleanup || (e.cleanup = [])
        }
        function p_(e, t) {
            const n = e[9]
              , r = n ? n.get(Mo, null) : null;
            r && r.handleError(t)
        }
        function g_(e, t, n, r, o) {
            for (let i = 0; i < n.length; ) {
                const s = n[i++]
                  , a = n[i++]
                  , l = t[s]
                  , u = e.data[s];
                null !== u.setInput ? u.setInput(l, o, r, a) : l[a] = o
            }
        }
        function uu(e, t, n) {
            let r = n ? e.styles : null
              , o = n ? e.classes : null
              , i = 0;
            if (null !== t)
                for (let s = 0; s < t.length; s++) {
                    const a = t[s];
                    "number" == typeof a ? i = a : 1 == i ? o = Cs(o, a) : 2 == i && (r = Cs(r, a + ": " + t[++s] + ";"))
                }
            n ? e.styles = r : e.stylesWithoutHost = r,
            n ? e.classes = o : e.classesWithoutHost = o
        }
        const Xs = new X("INJECTOR",-1);
        class m_ {
            get(t, n=Hs) {
                if (n === Hs) {
                    const r = new Error(`NullInjectorError: No provider for ${z(t)}!`);
                    throw r.name = "NullInjectorError",
                    r
                }
                return n
            }
        }
        const ea = new X("Set Injector scope.")
          , ta = {}
          , RM = {};
        let Ff;
        function y_() {
            return void 0 === Ff && (Ff = new m_),
            Ff
        }
        function __(e, t=null, n=null, r) {
            return new NM(e,n,t || y_(),r)
        }
        class NM {
            constructor(t, n, r, o=null) {
                this.parent = r,
                this.records = new Map,
                this.injectorDefTypes = new Set,
                this.onDestroy = new Set,
                this._destroyed = !1;
                const i = [];
                n && Kn(n, a=>this.processProvider(a, t, n)),
                Kn([t], a=>this.processInjectorType(a, [], i)),
                this.records.set(Xs, Ai(void 0, this));
                const s = this.records.get(ea);
                this.scope = null != s ? s.value : null,
                this.source = o || ("object" == typeof t ? null : z(t))
            }
            get destroyed() {
                return this._destroyed
            }
            destroy() {
                this.assertNotDestroyed(),
                this._destroyed = !0;
                try {
                    this.onDestroy.forEach(t=>t.ngOnDestroy())
                } finally {
                    this.records.clear(),
                    this.onDestroy.clear(),
                    this.injectorDefTypes.clear()
                }
            }
            get(t, n=Hs, r=O.Default) {
                this.assertNotDestroyed();
                const o = mi(this)
                  , i = Gn(void 0);
                try {
                    if (!(r & O.SkipSelf)) {
                        let a = this.records.get(t);
                        if (void 0 === a) {
                            const l = ("function" == typeof (e = t) || "object" == typeof e && e instanceof X) && an(t);
                            a = l && this.injectableDefInScope(l) ? Ai(Of(t), ta) : null,
                            this.records.set(t, a)
                        }
                        if (null != a)
                            return this.hydrate(t, a)
                    }
                    return (r & O.Self ? y_() : this.parent).get(t, n = r & O.Optional && n === Hs ? null : n)
                } catch (s) {
                    if ("NullInjectorError" === s.name) {
                        if ((s[gi] = s[gi] || []).unshift(z(t)),
                        o)
                            throw s;
                        return Vm(s, t, "R3InjectorError", this.source)
                    }
                    throw s
                } finally {
                    Gn(i),
                    mi(o)
                }
                var e
            }
            _resolveInjectorDefTypes() {
                this.injectorDefTypes.forEach(t=>this.get(t))
            }
            toString() {
                const t = [];
                return this.records.forEach((r,o)=>t.push(z(o))),
                `R3Injector[${t.join(", ")}]`
            }
            assertNotDestroyed() {
                if (this._destroyed)
                    throw new Error("Injector has already been destroyed.")
            }
            processInjectorType(t, n, r) {
                if (!(t = R(t)))
                    return !1;
                let o = bl(t);
                const i = null == o && t.ngModule || void 0
                  , s = void 0 === i ? t : i
                  , a = -1 !== r.indexOf(s);
                if (void 0 !== i && (o = bl(i)),
                null == o)
                    return !1;
                if (null != o.imports && !a) {
                    let f;
                    r.push(s);
                    try {
                        Kn(o.imports, h=>{
                            this.processInjectorType(h, n, r) && (void 0 === f && (f = []),
                            f.push(h))
                        }
                        )
                    } finally {}
                    if (void 0 !== f)
                        for (let h = 0; h < f.length; h++) {
                            const {ngModule: g, providers: m} = f[h];
                            Kn(m, y=>this.processProvider(y, g, m || de))
                        }
                }
                this.injectorDefTypes.add(s);
                const l = p(s) || (()=>new s);
                this.records.set(s, Ai(l, ta));
                const u = o.providers;
                if (null != u && !a) {
                    const f = t;
                    Kn(u, h=>this.processProvider(h, f, u))
                }
                return void 0 !== i && void 0 !== t.providers
            }
            processProvider(t, n, r) {
                let o = Ii(t = R(t)) ? t : R(t && t.provide);
                const i = (e = t,
                C_(e) ? Ai(void 0, e.useValue) : Ai(w_(e), ta));
                var e;
                if (Ii(t) || !0 !== t.multi)
                    this.records.get(o);
                else {
                    let s = this.records.get(o);
                    s || (s = Ai(void 0, ta, !0),
                    s.factory = ()=>Ao(s.multi),
                    this.records.set(o, s)),
                    o = t,
                    s.multi.push(t)
                }
                this.records.set(o, i)
            }
            hydrate(t, n) {
                return n.value === ta && (n.value = RM,
                n.value = n.factory()),
                "object" == typeof n.value && n.value && null !== (e = n.value) && "object" == typeof e && "function" == typeof e.ngOnDestroy && this.onDestroy.add(n.value),
                n.value;
                var e
            }
            injectableDefInScope(t) {
                if (!t.providedIn)
                    return !1;
                const n = R(t.providedIn);
                return "string" == typeof n ? "any" === n || n === this.scope : this.injectorDefTypes.has(n)
            }
        }
        function Of(e) {
            const t = an(e)
              , n = null !== t ? t.factory : p(e);
            if (null !== n)
                return n;
            if (e instanceof X)
                throw new Error(`Token ${z(e)} is missing a \u0275prov definition.`);
            if (e instanceof Function)
                return function(e) {
                    const t = e.length;
                    if (t > 0) {
                        const r = function(e, t) {
                            const n = [];
                            for (let r = 0; r < e; r++)
                                n.push(t);
                            return n
                        }(t, "?");
                        throw new Error(`Can't resolve all parameters for ${z(e)}: (${r.join(", ")}).`)
                    }
                    const n = function(e) {
                        const t = e && (e[Jo] || e[El]);
                        if (t) {
                            const n = function(e) {
                                if (e.hasOwnProperty("name"))
                                    return e.name;
                                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                                return null === t ? "" : t[1]
                            }(e);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),
                            t
                        }
                        return null
                    }(e);
                    return null !== n ? ()=>n.factory(e) : ()=>new e
                }(e);
            throw new Error("unreachable")
        }
        function w_(e, t, n) {
            let r;
            if (Ii(e)) {
                const o = R(e);
                return p(o) || Of(o)
            }
            if (C_(e))
                r = ()=>R(e.useValue);
            else if (function(e) {
                return !(!e || !e.useFactory)
            }(e))
                r = ()=>e.useFactory(...Ao(e.deps || []));
            else if (function(e) {
                return !(!e || !e.useExisting)
            }(e))
                r = ()=>N(R(e.useExisting));
            else {
                const o = R(e && (e.useClass || e.provide));
                if (!function(e) {
                    return !!e.deps
                }(e))
                    return p(o) || Of(o);
                r = ()=>new o(...Ao(e.deps))
            }
            return r
        }
        function Ai(e, t, n=!1) {
            return {
                factory: e,
                value: t,
                multi: n ? [] : void 0
            }
        }
        function C_(e) {
            return null !== e && "object" == typeof e && Ud in e
        }
        function Ii(e) {
            return "function" == typeof e
        }
        const v_ = function(e, t, n) {
            return function(e, t=null, n=null, r) {
                const o = __(e, t, n, r);
                return o._resolveInjectorDefTypes(),
                o
            }({
                name: n
            }, t, e, n)
        };
        let he = (()=>{
            class e {
                static create(n, r) {
                    return Array.isArray(n) ? v_(n, r, "") : v_(n.providers, n.parent, n.name || "")
                }
            }
            return e.THROW_IF_NOT_FOUND = Hs,
            e.NULL = new m_,
            e.\u0275prov = Q({
                token: e,
                providedIn: "any",
                factory: ()=>N(Xs)
            }),
            e.__NG_ELEMENT_ID__ = -1,
            e
        }
        )();
        function eS(e, t) {
            Vl(Jd(e)[1], ze())
        }
        function ve(e) {
            let t = function(e) {
                return Object.getPrototypeOf(e.prototype).constructor
            }(e.type)
              , n = !0;
            const r = [e];
            for (; t; ) {
                let o;
                if (Kt(e))
                    o = t.\u0275cmp || t.\u0275dir;
                else {
                    if (t.\u0275cmp)
                        throw new Error("Directives cannot inherit Components");
                    o = t.\u0275dir
                }
                if (o) {
                    if (n) {
                        r.push(o);
                        const s = e;
                        s.inputs = Hf(e.inputs),
                        s.declaredInputs = Hf(e.declaredInputs),
                        s.outputs = Hf(e.outputs);
                        const a = o.hostBindings;
                        a && oS(e, a);
                        const l = o.viewQuery
                          , u = o.contentQueries;
                        if (l && nS(e, l),
                        u && rS(e, u),
                        ws(e.inputs, o.inputs),
                        ws(e.declaredInputs, o.declaredInputs),
                        ws(e.outputs, o.outputs),
                        Kt(o) && o.data.animation) {
                            const f = e.data;
                            f.animation = (f.animation || []).concat(o.data.animation)
                        }
                    }
                    const i = o.features;
                    if (i)
                        for (let s = 0; s < i.length; s++) {
                            const a = i[s];
                            a && a.ngInherit && a(e),
                            a === ve && (n = !1)
                        }
                }
                t = Object.getPrototypeOf(t)
            }
            !function(e) {
                let t = 0
                  , n = null;
                for (let r = e.length - 1; r >= 0; r--) {
                    const o = e[r];
                    o.hostVars = t += o.hostVars,
                    o.hostAttrs = Hl(o.hostAttrs, n = Hl(n, o.hostAttrs))
                }
            }(r)
        }
        function Hf(e) {
            return e === pr ? {} : e === de ? [] : e
        }
        function nS(e, t) {
            const n = e.viewQuery;
            e.viewQuery = n ? (r,o)=>{
                t(r, o),
                n(r, o)
            }
            : t
        }
        function rS(e, t) {
            const n = e.contentQueries;
            e.contentQueries = n ? (r,o,i)=>{
                t(r, o, i),
                n(r, o, i)
            }
            : t
        }
        function oS(e, t) {
            const n = e.hostBindings;
            e.hostBindings = n ? (r,o)=>{
                t(r, o),
                n(r, o)
            }
            : t
        }
        let cu = null;
        function Mi() {
            if (!cu) {
                const e = ae.Symbol;
                if (e && e.iterator)
                    cu = e.iterator;
                else {
                    const t = Object.getOwnPropertyNames(Map.prototype);
                    for (let n = 0; n < t.length; ++n) {
                        const r = t[n];
                        "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (cu = r)
                    }
                }
            }
            return cu
        }
        function ra(e) {
            return !!Uf(e) && (Array.isArray(e) || !(e instanceof Map) && Mi()in e)
        }
        function Uf(e) {
            return null !== e && ("function" == typeof e || "object" == typeof e)
        }
        function wt(e, t, n) {
            return !Object.is(e[t], n) && (e[t] = n,
            !0)
        }
        function I(e, t=O.Default) {
            const n = A();
            return null === n ? N(e, t) : Tm(ze(), n, R(e), t)
        }
        function zf() {
            throw new Error("invalid")
        }
        function Qf(e, t, n) {
            const r = A();
            return wt(r, j.lFrame.bindingIndex++, t) && function(e, t, n, r, o, i, s, a) {
                const l = cn(t, n);
                let f, u = t.inputs;
                !a && null != u && (f = u[r]) ? (g_(e, n, f, r, o),
                ni(t) && function(e, t) {
                    const n = Yt(t, e);
                    16 & n[2] || (n[2] |= 64)
                }(n, t.index)) : 3 & t.type && (r = function(e) {
                    return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e
                }(r),
                o = null != s ? s(o, t.value || "", r) : o,
                xe(i) ? i.setProperty(l, r, o) : Rd(r) || (l.setProperty ? l.setProperty(r, o) : l[r] = o))
            }(se(), function() {
                const e = j.lFrame;
                return vd(e.tView, e.selectedIndex)
            }(), r, e, t, r[q], n, !1),
            Qf
        }
        function Kf(e, t, n, r, o) {
            const s = o ? "class" : "style";
            g_(e, n, t.inputs[s], s, r)
        }
        function jt(e, t, n, r) {
            const o = A()
              , i = se()
              , s = 20 + e
              , a = o[q]
              , l = o[s] = sf(a, t, j.lFrame.currentNamespace)
              , u = i.firstCreatePass ? function(e, t, n, r, o, i, s) {
                const a = t.consts
                  , u = Di(t, e, 2, o, Gr(a, i));
                return function(e, t, n, r) {
                    let o = !1;
                    if (dm()) {
                        const i = function(e, t, n) {
                            const r = e.directiveRegistry;
                            let o = null;
                            if (r)
                                for (let i = 0; i < r.length; i++) {
                                    const s = r[i];
                                    Oy(n, s.selectors, !1) && (o || (o = []),
                                    Gl(Fs(n, t), e, s.type),
                                    Kt(s) ? (s_(e, n),
                                    o.unshift(s)) : o.push(s))
                                }
                            return o
                        }(e, t, n)
                          , s = null === r ? null : {
                            "": -1
                        };
                        if (null !== i) {
                            o = !0,
                            a_(n, e.data.length, i.length);
                            for (let f = 0; f < i.length; f++) {
                                const h = i[f];
                                h.providersResolver && h.providersResolver(h)
                            }
                            let a = !1
                              , l = !1
                              , u = bi(e, t, i.length, null);
                            for (let f = 0; f < i.length; f++) {
                                const h = i[f];
                                n.mergedAttrs = Hl(n.mergedAttrs, h.hostAttrs),
                                l_(e, n, t, u, h),
                                mM(u, h, s),
                                null !== h.contentQueries && (n.flags |= 8),
                                (null !== h.hostBindings || null !== h.hostAttrs || 0 !== h.hostVars) && (n.flags |= 128);
                                const g = h.type.prototype;
                                !a && (g.ngOnChanges || g.ngOnInit || g.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                                a = !0),
                                !l && (g.ngOnChanges || g.ngDoCheck) && ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index),
                                l = !0),
                                u++
                            }
                            !function(e, t) {
                                const r = t.directiveEnd
                                  , o = e.data
                                  , i = t.attrs
                                  , s = [];
                                let a = null
                                  , l = null;
                                for (let u = t.directiveStart; u < r; u++) {
                                    const f = o[u]
                                      , h = f.inputs
                                      , g = null === i || Fy(t) ? null : wM(h, i);
                                    s.push(g),
                                    a = n_(h, u, a),
                                    l = n_(f.outputs, u, l)
                                }
                                null !== a && (a.hasOwnProperty("class") && (t.flags |= 16),
                                a.hasOwnProperty("style") && (t.flags |= 32)),
                                t.initialInputs = s,
                                t.inputs = a,
                                t.outputs = l
                            }(e, n)
                        }
                        s && function(e, t, n) {
                            if (t) {
                                const r = e.localNames = [];
                                for (let o = 0; o < t.length; o += 2) {
                                    const i = n[t[o + 1]];
                                    if (null == i)
                                        throw new hr("301",`Export of name '${t[o + 1]}' not found!`);
                                    r.push(t[o], i)
                                }
                            }
                        }(n, r, s)
                    }
                    n.mergedAttrs = Hl(n.mergedAttrs, n.attrs)
                }(t, n, u, Gr(a, s)),
                null !== u.attrs && uu(u, u.attrs, !1),
                null !== u.mergedAttrs && uu(u, u.mergedAttrs, !0),
                null !== t.queries && t.queries.elementStart(t, u),
                u
            }(s, i, o, 0, t, n, r) : i.data[s];
            Qn(u, !0);
            const f = u.mergedAttrs;
            null !== f && jl(a, l, f);
            const h = u.classes;
            null !== h && ff(a, l, h);
            const g = u.styles;
            null !== g && Ry(a, l, g),
            64 != (64 & u.flags) && nu(i, o, l, u),
            0 === j.lFrame.elementDepthCount && _t(l, o),
            j.lFrame.elementDepthCount++,
            ri(u) && (function(e, t, n) {
                !dm() || (function(e, t, n, r) {
                    const o = n.directiveStart
                      , i = n.directiveEnd;
                    e.firstCreatePass || Fs(n, t),
                    _t(r, t);
                    const s = n.initialInputs;
                    for (let a = o; a < i; a++) {
                        const l = e.data[a]
                          , u = Kt(l);
                        u && yM(t, n, l);
                        const f = Os(t, e, a, n);
                        _t(f, t),
                        null !== s && _M(0, a - o, f, l, 0, s),
                        u && (Yt(n.index, t)[8] = f)
                    }
                }(e, t, n, cn(n, t)),
                128 == (128 & n.flags) && function(e, t, n) {
                    const r = n.directiveStart
                      , o = n.directiveEnd
                      , s = n.index
                      , a = j.lFrame.currentDirectiveIndex;
                    try {
                        Wr(s);
                        for (let l = r; l < o; l++) {
                            const u = e.data[l]
                              , f = t[l];
                            Id(l),
                            (null !== u.hostBindings || 0 !== u.hostVars || null !== u.hostAttrs) && i_(u, f)
                        }
                    } finally {
                        Wr(-1),
                        Id(a)
                    }
                }(e, t, n))
            }(i, o, u),
            function(e, t, n) {
                if (Ts(t)) {
                    const o = t.directiveEnd;
                    for (let i = t.directiveStart; i < o; i++) {
                        const s = e.data[i];
                        s.contentQueries && s.contentQueries(1, n[i], i)
                    }
                }
            }(i, u, o)),
            null !== r && function(e, t, n=cn) {
                const r = t.localNames;
                if (null !== r) {
                    let o = t.index + 1;
                    for (let i = 0; i < r.length; i += 2) {
                        const s = r[i + 1]
                          , a = -1 === s ? n(t, e) : e[s];
                        e[o++] = a
                    }
                }
            }(o, u)
        }
        function Ht() {
            let e = ze();
            Ed() ? j.lFrame.isParent = !1 : (e = e.parent,
            Qn(e, !1));
            const t = e;
            j.lFrame.elementDepthCount--;
            const n = se();
            n.firstCreatePass && (Vl(n, e),
            Ts(e) && n.queries.elementEnd(e)),
            null != t.classesWithoutHost && function(e) {
                return 0 != (16 & e.flags)
            }(t) && Kf(n, t, A(), t.classesWithoutHost, !0),
            null != t.stylesWithoutHost && function(e) {
                return 0 != (32 & e.flags)
            }(t) && Kf(n, t, A(), t.stylesWithoutHost, !1)
        }
        function Ar(e, t, n, r) {
            jt(e, t, n, r),
            Ht()
        }
        function ia(e) {
            return !!e && "function" == typeof e.then
        }
        const hu = function(e) {
            return !!e && "function" == typeof e.subscribe
        };
        function Ut(e, t, n, r) {
            const o = A()
              , i = se()
              , s = ze();
            return function(e, t, n, r, o, i, s, a) {
                const l = ri(r)
                  , f = e.firstCreatePass && f_(e)
                  , h = t[8]
                  , g = d_(t);
                let m = !0;
                if (3 & r.type || a) {
                    const w = cn(r, t)
                      , b = a ? a(w) : w
                      , v = g.length
                      , T = a ? x=>a($e(x[r.index])) : r.index;
                    if (xe(n)) {
                        let x = null;
                        if (!a && l && (x = function(e, t, n, r) {
                            const o = e.cleanup;
                            if (null != o)
                                for (let i = 0; i < o.length - 1; i += 2) {
                                    const s = o[i];
                                    if (s === n && o[i + 1] === r) {
                                        const a = t[7]
                                          , l = o[i + 2];
                                        return a.length > l ? a[l] : null
                                    }
                                    "string" == typeof s && (i += 2)
                                }
                            return null
                        }(e, t, o, r.index)),
                        null !== x)
                            (x.__ngLastListenerFn__ || x).__ngNextListenerFn__ = i,
                            x.__ngLastListenerFn__ = i,
                            m = !1;
                        else {
                            i = Yf(r, t, h, i, !1);
                            const K = n.listen(b, o, i);
                            g.push(i, K),
                            f && f.push(o, T, v, v + 1)
                        }
                    } else
                        i = Yf(r, t, h, i, !0),
                        b.addEventListener(o, i, s),
                        g.push(i),
                        f && f.push(o, T, v, s)
                } else
                    i = Yf(r, t, h, i, !1);
                const y = r.outputs;
                let C;
                if (m && null !== y && (C = y[o])) {
                    const w = C.length;
                    if (w)
                        for (let b = 0; b < w; b += 2) {
                            const Ze = t[C[b]][C[b + 1]].subscribe(i)
                              , _n = g.length;
                            g.push(i, Ze),
                            f && f.push(o, r.index, _n, -(_n + 1))
                        }
                }
            }(i, o, o[q], s, e, t, !!n, r),
            Ut
        }
        function cw(e, t, n, r) {
            try {
                return !1 !== n(r)
            } catch (o) {
                return p_(e, o),
                !1
            }
        }
        function Yf(e, t, n, r, o) {
            return function i(s) {
                if (s === Function)
                    return r;
                const a = 2 & e.flags ? Yt(e.index, t) : t;
                0 == (32 & t[2]) && xf(a);
                let l = cw(t, 0, r, s)
                  , u = i.__ngNextListenerFn__;
                for (; u; )
                    l = cw(t, 0, u, s) && l,
                    u = u.__ngNextListenerFn__;
                return o && !1 === l && (s.preventDefault(),
                s.returnValue = !1),
                l
            }
        }
        function Cw(e, t, n, r, o) {
            const i = e[n + 1]
              , s = null === t;
            let a = r ? Mn(i) : Dr(i)
              , l = !1;
            for (; 0 !== a && (!1 === l || s); ) {
                const f = e[a + 1];
                zS(e[a], t) && (l = !0,
                e[a + 1] = r ? gf(f) : hf(f)),
                a = r ? Mn(f) : Dr(f)
            }
            l && (e[n + 1] = r ? hf(i) : gf(i))
        }
        function zS(e, t) {
            return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && pi(e, t) >= 0
        }
        function pu(e, t) {
            return function(e, t, n, r) {
                const o = A()
                  , i = se()
                  , s = function(e) {
                    const t = j.lFrame
                      , n = t.bindingIndex;
                    return t.bindingIndex = t.bindingIndex + e,
                    n
                }(2);
                i.firstUpdatePass && function(e, t, n, r) {
                    const o = e.data;
                    if (null === o[n + 1]) {
                        const i = o[Tt()]
                          , s = function(e, t) {
                            return t >= e.expandoStartIndex
                        }(e, n);
                        (function(e, t) {
                            return 0 != (e.flags & (t ? 16 : 32))
                        }
                        )(i, r) && null === t && !s && (t = !1),
                        t = function(e, t, n, r) {
                            const o = function(e) {
                                const t = j.lFrame.currentDirectiveIndex;
                                return -1 === t ? null : e[t]
                            }(e);
                            let i = r ? t.residualClasses : t.residualStyles;
                            if (null === o)
                                0 === (r ? t.classBindings : t.styleBindings) && (n = sa(n = Jf(null, e, t, n, r), t.attrs, r),
                                i = null);
                            else {
                                const s = t.directiveStylingLast;
                                if (-1 === s || e[s] !== o)
                                    if (n = Jf(o, e, t, n, r),
                                    null === i) {
                                        let l = function(e, t, n) {
                                            const r = n ? t.classBindings : t.styleBindings;
                                            if (0 !== Dr(r))
                                                return e[Mn(r)]
                                        }(e, t, r);
                                        void 0 !== l && Array.isArray(l) && (l = Jf(null, e, t, l[1], r),
                                        l = sa(l, t.attrs, r),
                                        function(e, t, n, r) {
                                            e[Mn(n ? t.classBindings : t.styleBindings)] = r
                                        }(e, t, r, l))
                                    } else
                                        i = function(e, t, n) {
                                            let r;
                                            const o = t.directiveEnd;
                                            for (let i = 1 + t.directiveStylingLast; i < o; i++)
                                                r = sa(r, e[i].hostAttrs, n);
                                            return sa(r, t.attrs, n)
                                        }(e, t, r)
                            }
                            return void 0 !== i && (r ? t.residualClasses = i : t.residualStyles = i),
                            n
                        }(o, i, t, r),
                        function(e, t, n, r, o, i) {
                            let s = i ? t.classBindings : t.styleBindings
                              , a = Mn(s)
                              , l = Dr(s);
                            e[r] = n;
                            let f, u = !1;
                            if (Array.isArray(n)) {
                                const h = n;
                                f = h[1],
                                (null === f || pi(h, f) > 0) && (u = !0)
                            } else
                                f = n;
                            if (o)
                                if (0 !== l) {
                                    const g = Mn(e[a + 1]);
                                    e[r + 1] = ou(g, a),
                                    0 !== g && (e[g + 1] = pf(e[g + 1], r)),
                                    e[a + 1] = function(e, t) {
                                        return 131071 & e | t << 17
                                    }(e[a + 1], r)
                                } else
                                    e[r + 1] = ou(a, 0),
                                    0 !== a && (e[a + 1] = pf(e[a + 1], r)),
                                    a = r;
                            else
                                e[r + 1] = ou(l, 0),
                                0 === a ? a = r : e[l + 1] = pf(e[l + 1], r),
                                l = r;
                            u && (e[r + 1] = hf(e[r + 1])),
                            Cw(e, f, r, !0),
                            Cw(e, f, r, !1),
                            function(e, t, n, r, o) {
                                const i = o ? e.residualClasses : e.residualStyles;
                                null != i && "string" == typeof t && pi(i, t) >= 0 && (n[r + 1] = gf(n[r + 1]))
                            }(t, f, e, r, i),
                            s = ou(a, l),
                            i ? t.classBindings = s : t.styleBindings = s
                        }(o, i, t, n, s, r)
                    }
                }(i, e, s, r),
                t !== W && wt(o, s, t) && function(e, t, n, r, o, i, s, a) {
                    if (!(3 & t.type))
                        return;
                    const l = e.data
                      , u = l[a + 1];
                    gu(function(e) {
                        return 1 == (1 & e)
                    }(u) ? Pw(l, t, n, o, Dr(u), s) : void 0) || (gu(i) || function(e) {
                        return 2 == (2 & e)
                    }(u) && (i = Pw(l, null, n, o, a, s)),
                    function(e, t, n, r, o) {
                        const i = xe(e);
                        if (t)
                            o ? i ? e.addClass(n, r) : n.classList.add(r) : i ? e.removeClass(n, r) : n.classList.remove(r);
                        else {
                            let s = -1 === r.indexOf("-") ? void 0 : en.DashCase;
                            if (null == o)
                                i ? e.removeStyle(n, r, s) : n.style.removeProperty(r);
                            else {
                                const a = "string" == typeof o && o.endsWith("!important");
                                a && (o = o.slice(0, -10),
                                s |= en.Important),
                                i ? e.setStyle(n, r, o, s) : n.style.setProperty(r, o, a ? "important" : "")
                            }
                        }
                    }(r, s, function(e, t) {
                        return $e(t[e])
                    }(Tt(), n), o, i))
                }(i, i.data[Tt()], o, o[q], e, o[s + 1] = function(e, t) {
                    return null == e || ("string" == typeof t ? e += t : "object" == typeof e && (e = z(function(e) {
                        return e instanceof class {
                            constructor(t) {
                                this.changingThisBreaksApplicationSecurity = t
                            }
                            toString() {
                                return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
                            }
                        }
                        ? e.changingThisBreaksApplicationSecurity : e
                    }(e)))),
                    e
                }(t, n), r, s)
            }(e, t, null, !0),
            pu
        }
        function Jf(e, t, n, r, o) {
            let i = null;
            const s = n.directiveEnd;
            let a = n.directiveStylingLast;
            for (-1 === a ? a = n.directiveStart : a++; a < s && (i = t[a],
            r = sa(r, i.hostAttrs, o),
            i !== e); )
                a++;
            return null !== e && (n.directiveStylingLast = a),
            r
        }
        function sa(e, t, n) {
            const r = n ? 1 : 2;
            let o = -1;
            if (null !== t)
                for (let i = 0; i < t.length; i++) {
                    const s = t[i];
                    "number" == typeof s ? o = s : o === r && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                    Jt(e, s, !!n || t[++i]))
                }
            return void 0 === e ? null : e
        }
        function Pw(e, t, n, r, o, i) {
            const s = null === t;
            let a;
            for (; o > 0; ) {
                const l = e[o]
                  , u = Array.isArray(l)
                  , f = u ? l[1] : l
                  , h = null === f;
                let g = n[o + 1];
                g === W && (g = h ? de : void 0);
                let m = h ? Ld(g, r) : f === r ? g : void 0;
                if (u && !gu(m) && (m = Ld(l, r)),
                gu(m) && (a = m,
                s))
                    return a;
                const y = e[o + 1];
                o = s ? Mn(y) : Dr(y)
            }
            if (null !== t) {
                let l = i ? t.residualClasses : t.residualStyles;
                null != l && (a = Ld(l, r))
            }
            return a
        }
        function gu(e) {
            return void 0 !== e
        }
        function Fw(e, t="") {
            const n = A()
              , r = se()
              , o = e + 20
              , i = r.firstCreatePass ? Di(r, o, 1, t, null) : r.data[o]
              , s = n[o] = function(e, t) {
                return xe(e) ? e.createText(t) : e.createTextNode(t)
            }(n[q], t);
            nu(r, n, s, i),
            Qn(i, !1)
        }
        const xo = void 0;
        var ST = ["en", [["a", "p"], ["AM", "PM"], xo], [["AM", "PM"], xo, xo], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], xo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], xo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", xo, "{1} 'at' {0}", xo], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function(e) {
            const n = Math.floor(Math.abs(e))
              , r = e.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === n && 0 === r ? 1 : 5
        }
        ];
        let Bi = {};
        function nC(e) {
            return e in Bi || (Bi[e] = ae.ng && ae.ng.common && ae.ng.common.locales && ae.ng.common.locales[e]),
            Bi[e]
        }
        var S = (()=>((S = S || {})[S.LocaleId = 0] = "LocaleId",
        S[S.DayPeriodsFormat = 1] = "DayPeriodsFormat",
        S[S.DayPeriodsStandalone = 2] = "DayPeriodsStandalone",
        S[S.DaysFormat = 3] = "DaysFormat",
        S[S.DaysStandalone = 4] = "DaysStandalone",
        S[S.MonthsFormat = 5] = "MonthsFormat",
        S[S.MonthsStandalone = 6] = "MonthsStandalone",
        S[S.Eras = 7] = "Eras",
        S[S.FirstDayOfWeek = 8] = "FirstDayOfWeek",
        S[S.WeekendRange = 9] = "WeekendRange",
        S[S.DateFormat = 10] = "DateFormat",
        S[S.TimeFormat = 11] = "TimeFormat",
        S[S.DateTimeFormat = 12] = "DateTimeFormat",
        S[S.NumberSymbols = 13] = "NumberSymbols",
        S[S.NumberFormats = 14] = "NumberFormats",
        S[S.CurrencyCode = 15] = "CurrencyCode",
        S[S.CurrencySymbol = 16] = "CurrencySymbol",
        S[S.CurrencyName = 17] = "CurrencyName",
        S[S.Currencies = 18] = "Currencies",
        S[S.Directionality = 19] = "Directionality",
        S[S.PluralCase = 20] = "PluralCase",
        S[S.ExtraData = 21] = "ExtraData",
        S))();
        const mu = "en-US";
        let rC = mu;
        function nh(e, t, n, r, o) {
            if (e = R(e),
            Array.isArray(e))
                for (let i = 0; i < e.length; i++)
                    nh(e[i], t, n, r, o);
            else {
                const i = se()
                  , s = A();
                let a = Ii(e) ? e : R(e.provide)
                  , l = w_(e);
                const u = ze()
                  , f = 1048575 & u.providerIndexes
                  , h = u.directiveStart
                  , g = u.providerIndexes >> 20;
                if (Ii(e) || !e.multi) {
                    const m = new Ps(l,o,I)
                      , y = oh(a, t, o ? f : f + g, h);
                    -1 === y ? (Gl(Fs(u, s), i, a),
                    rh(i, e, t.length),
                    t.push(a),
                    u.directiveStart++,
                    u.directiveEnd++,
                    o && (u.providerIndexes += 1048576),
                    n.push(m),
                    s.push(m)) : (n[y] = m,
                    s[y] = m)
                } else {
                    const m = oh(a, t, f + g, h)
                      , y = oh(a, t, f, f + g)
                      , C = m >= 0 && n[m]
                      , w = y >= 0 && n[y];
                    if (o && !w || !o && !C) {
                        Gl(Fs(u, s), i, a);
                        const b = function(e, t, n, r, o) {
                            const i = new Ps(e,n,I);
                            return i.multi = [],
                            i.index = t,
                            i.componentProviders = 0,
                            MC(i, o, r && !n),
                            i
                        }(o ? Ix : Ax, n.length, o, r, l);
                        !o && w && (n[y].providerFactory = b),
                        rh(i, e, t.length, 0),
                        t.push(a),
                        u.directiveStart++,
                        u.directiveEnd++,
                        o && (u.providerIndexes += 1048576),
                        n.push(b),
                        s.push(b)
                    } else
                        rh(i, e, m > -1 ? m : y, MC(n[o ? y : m], l, !o && r));
                    !o && r && w && n[y].componentProviders++
                }
            }
        }
        function rh(e, t, n, r) {
            const o = Ii(t);
            if (o || function(e) {
                return !!e.useClass
            }(t)) {
                const s = (t.useClass || t).prototype.ngOnDestroy;
                if (s) {
                    const a = e.destroyHooks || (e.destroyHooks = []);
                    if (!o && t.multi) {
                        const l = a.indexOf(n);
                        -1 === l ? a.push(n, [r, s]) : a[l + 1].push(r, s)
                    } else
                        a.push(n, s)
                }
            }
        }
        function MC(e, t, n) {
            return n && e.componentProviders++,
            e.multi.push(t) - 1
        }
        function oh(e, t, n, r) {
            for (let o = n; o < r; o++)
                if (t[o] === e)
                    return o;
            return -1
        }
        function Ax(e, t, n, r) {
            return ih(this.multi, [])
        }
        function Ix(e, t, n, r) {
            const o = this.multi;
            let i;
            if (this.providerFactory) {
                const s = this.providerFactory.componentProviders
                  , a = Os(n, n[1], this.providerFactory.index, r);
                i = a.slice(0, s),
                ih(o, i);
                for (let l = s; l < a.length; l++)
                    i.push(a[l])
            } else
                i = [],
                ih(o, i);
            return i
        }
        function ih(e, t) {
            for (let n = 0; n < e.length; n++)
                t.push((0,
                e[n])());
            return t
        }
        function Ee(e, t=[]) {
            return n=>{
                n.providersResolver = (r,o)=>function(e, t, n) {
                    const r = se();
                    if (r.firstCreatePass) {
                        const o = Kt(e);
                        nh(n, r.data, r.blueprint, o, !0),
                        nh(t, r.data, r.blueprint, o, !1)
                    }
                }(r, o ? o(e) : e, t)
            }
        }
        class SC {
        }
        const xC = "ngComponent";
        class Tx {
            resolveComponentFactory(t) {
                throw function(e) {
                    const t = Error(`No component factory found for ${z(e)}. Did you add it to @NgModule.entryComponents?`);
                    return t[xC] = e,
                    t
                }(t)
            }
        }
        let Ro = (()=>{
            class e {
            }
            return e.NULL = new Tx,
            e
        }
        )();
        function vu(...e) {}
        function Hi(e, t) {
            return new rt(cn(e, t))
        }
        const Px = function() {
            return Hi(ze(), A())
        };
        let rt = (()=>{
            class e {
                constructor(n) {
                    this.nativeElement = n
                }
            }
            return e.__NG_ELEMENT_ID__ = Px,
            e
        }
        )();
        class Du {
        }
        let Ir = (()=>{
            class e {
            }
            return e.__NG_ELEMENT_ID__ = ()=>Fx(),
            e
        }
        )();
        const Fx = function() {
            const e = A()
              , n = Yt(ze().index, e);
            return function(e) {
                return e[q]
            }(ln(n) ? n : e)
        };
        let ah = (()=>{
            class e {
            }
            return e.\u0275prov = Q({
                token: e,
                providedIn: "root",
                factory: ()=>null
            }),
            e
        }
        )();
        class da {
            constructor(t) {
                this.full = t,
                this.major = t.split(".")[0],
                this.minor = t.split(".")[1],
                this.patch = t.split(".").slice(2).join(".")
            }
        }
        const PC = new da("13.0.1")
          , Ui = {};
        function bu(e, t, n, r, o=!1) {
            for (; null !== n; ) {
                const i = t[n.index];
                if (null !== i && r.push($e(i)),
                Qt(i))
                    for (let a = 10; a < i.length; a++) {
                        const l = i[a]
                          , u = l[1].firstChild;
                        null !== u && bu(l[1], l, u, r)
                    }
                const s = n.type;
                if (8 & s)
                    bu(e, t, n.child, r);
                else if (32 & s) {
                    const a = tf(n, t);
                    let l;
                    for (; l = a(); )
                        r.push(l)
                } else if (16 & s) {
                    const a = Sy(t, n);
                    if (Array.isArray(a))
                        r.push(...a);
                    else {
                        const l = Ks(t[16]);
                        bu(l[1], l, a, r, !0)
                    }
                }
                n = o ? n.projectionNext : n.next
            }
            return r
        }
        class fa {
            constructor(t, n) {
                this._lView = t,
                this._cdRefInjectingView = n,
                this._appRef = null,
                this._attachedToViewContainer = !1
            }
            get rootNodes() {
                const t = this._lView
                  , n = t[1];
                return bu(n, t, n.firstChild, [])
            }
            get context() {
                return this._lView[8]
            }
            set context(t) {
                this._lView[8] = t
            }
            get destroyed() {
                return 256 == (256 & this._lView[2])
            }
            destroy() {
                if (this._appRef)
                    this._appRef.detachView(this);
                else if (this._attachedToViewContainer) {
                    const t = this._lView[3];
                    if (Qt(t)) {
                        const n = t[8]
                          , r = n ? n.indexOf(this) : -1;
                        r > -1 && (af(t, r),
                        Eo(n, r))
                    }
                    this._attachedToViewContainer = !1
                }
                wy(this._lView[1], this._lView)
            }
            onDestroy(t) {
                !function(e, t, n, r) {
                    const o = d_(t);
                    null === n ? o.push(r) : (o.push(n),
                    e.firstCreatePass && f_(e).push(r, o.length - 1))
                }(this._lView[1], this._lView, null, t)
            }
            markForCheck() {
                xf(this._cdRefInjectingView || this._lView)
            }
            detach() {
                this._lView[2] &= -129
            }
            reattach() {
                this._lView[2] |= 128
            }
            detectChanges() {
                Pf(this._lView[1], this._lView, this.context)
            }
            checkNoChanges() {
                !function(e, t, n) {
                    Fl(!0);
                    try {
                        Pf(e, t, n)
                    } finally {
                        Fl(!1)
                    }
                }(this._lView[1], this._lView, this.context)
            }
            attachToViewContainerRef() {
                if (this._appRef)
                    throw new Error("This view is already attached directly to the ApplicationRef!");
                this._attachedToViewContainer = !0
            }
            detachFromAppRef() {
                var t;
                this._appRef = null,
                Ys(this._lView[1], t = this._lView, t[q], 2, null, null)
            }
            attachToAppRef(t) {
                if (this._attachedToViewContainer)
                    throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = t
            }
        }
        class Vx extends fa {
            constructor(t) {
                super(t),
                this._view = t
            }
            detectChanges() {
                c_(this._view)
            }
            checkNoChanges() {
                !function(e) {
                    Fl(!0);
                    try {
                        c_(e)
                    } finally {
                        Fl(!1)
                    }
                }(this._view)
            }
            get context() {
                return null
            }
        }
        class NC extends Ro {
            constructor(t) {
                super(),
                this.ngModule = t
            }
            resolveComponentFactory(t) {
                const n = et(t);
                return new lh(n,this.ngModule)
            }
        }
        function FC(e) {
            const t = [];
            for (let n in e)
                e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
            return t
        }
        const Bx = new X("SCHEDULER_TOKEN",{
            providedIn: "root",
            factory: ()=>dy
        });
        class lh extends SC {
            constructor(t, n) {
                super(),
                this.componentDef = t,
                this.ngModule = n,
                this.componentType = t.type,
                this.selector = t.selectors.map(HI).join(","),
                this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [],
                this.isBoundToModule = !!n
            }
            get inputs() {
                return FC(this.componentDef.inputs)
            }
            get outputs() {
                return FC(this.componentDef.outputs)
            }
            create(t, n, r, o) {
                const i = (o = o || this.ngModule) ? function(e, t) {
                    return {
                        get: (n,r,o)=>{
                            const i = e.get(n, Ui, o);
                            return i !== Ui || r === Ui ? i : t.get(n, r, o)
                        }
                    }
                }(t, o.injector) : t
                  , s = i.get(Du, lm)
                  , a = i.get(ah, null)
                  , l = s.createRenderer(null, this.componentDef)
                  , u = this.componentDef.selectors[0][0] || "div"
                  , f = r ? function(e, t, n) {
                    if (xe(e))
                        return e.selectRootElement(t, n === Et.ShadowDom);
                    let r = "string" == typeof t ? e.querySelector(t) : t;
                    return r.textContent = "",
                    r
                }(l, r, this.componentDef.encapsulation) : sf(s.createRenderer(null, this.componentDef), u, function(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "http://www.w3.org/2000/svg" : "math" === t ? "http://www.w3.org/1998/MathML/" : null
                }(u))
                  , h = this.componentDef.onPush ? 576 : 528
                  , g = function(e, t) {
                    return {
                        components: [],
                        scheduler: e || dy,
                        clean: SM,
                        playerHandler: t || null,
                        flags: 0
                    }
                }()
                  , m = au(0, null, null, 1, 0, null, null, null, null, null)
                  , y = Zs(null, m, g, h, null, null, s, l, a, i);
                let C, w;
                Ol(y);
                try {
                    const b = function(e, t, n, r, o, i) {
                        const s = n[1];
                        n[20] = e;
                        const l = Di(s, 20, 2, "#host", null)
                          , u = l.mergedAttrs = t.hostAttrs;
                        null !== u && (uu(l, u, !0),
                        null !== e && (jl(o, e, u),
                        null !== l.classes && ff(o, e, l.classes),
                        null !== l.styles && Ry(o, e, l.styles)));
                        const f = r.createRenderer(e, t)
                          , h = Zs(n, Jy(t), null, t.onPush ? 64 : 16, n[20], l, r, f, i || null, null);
                        return s.firstCreatePass && (Gl(Fs(l, n), s, t.type),
                        s_(s, l),
                        a_(l, n.length, 1)),
                        lu(n, h),
                        n[20] = h
                    }(f, this.componentDef, y, s, l);
                    if (f)
                        if (r)
                            jl(l, f, ["ng-version", PC.full]);
                        else {
                            const {attrs: v, classes: T} = function(e) {
                                const t = []
                                  , n = [];
                                let r = 1
                                  , o = 2;
                                for (; r < e.length; ) {
                                    let i = e[r];
                                    if ("string" == typeof i)
                                        2 === o ? "" !== i && t.push(i, e[++r]) : 8 === o && n.push(i);
                                    else {
                                        if (!In(o))
                                            break;
                                        o = i
                                    }
                                    r++
                                }
                                return {
                                    attrs: t,
                                    classes: n
                                }
                            }(this.componentDef.selectors[0]);
                            v && jl(l, f, v),
                            T && T.length > 0 && ff(l, f, T.join(" "))
                        }
                    if (w = vd(m, 20),
                    void 0 !== n) {
                        const v = w.projection = [];
                        for (let T = 0; T < this.ngContentSelectors.length; T++) {
                            const x = n[T];
                            v.push(null != x ? Array.from(x) : null)
                        }
                    }
                    C = function(e, t, n, r, o) {
                        const i = n[1]
                          , s = function(e, t, n) {
                            const r = ze();
                            e.firstCreatePass && (n.providersResolver && n.providersResolver(n),
                            l_(e, r, t, bi(e, t, 1, null), n));
                            const o = Os(t, e, r.directiveStart, r);
                            _t(o, t);
                            const i = cn(r, t);
                            return i && _t(i, t),
                            o
                        }(i, n, t);
                        if (r.components.push(s),
                        e[8] = s,
                        o && o.forEach(l=>l(s, t)),
                        t.contentQueries) {
                            const l = ze();
                            t.contentQueries(1, s, l.directiveStart)
                        }
                        const a = ze();
                        return !i.firstCreatePass || null === t.hostBindings && null === t.hostAttrs || (Wr(a.index),
                        o_(n[1], a, 0, a.directiveStart, a.directiveEnd, t),
                        i_(t, s)),
                        s
                    }(b, this.componentDef, y, g, [eS]),
                    Js(m, y, null)
                } finally {
                    kl()
                }
                return new Ux(this.componentType,C,Hi(w, y),y,w)
            }
        }
        class Ux extends class {
        }
        {
            constructor(t, n, r, o, i) {
                super(),
                this.location = r,
                this._rootLView = o,
                this._tNode = i,
                this.instance = n,
                this.hostView = this.changeDetectorRef = new Vx(o),
                this.componentType = t
            }
            get injector() {
                return new ci(this._tNode,this._rootLView)
            }
            destroy() {
                this.hostView.destroy()
            }
            onDestroy(t) {
                this.hostView.onDestroy(t)
            }
        }
        class or {
        }
        class OC {
        }
        const $i = new Map;
        class VC extends or {
            constructor(t, n) {
                super(),
                this._parent = n,
                this._bootstrapComponents = [],
                this.injector = this,
                this.destroyCbs = [],
                this.componentFactoryResolver = new NC(this);
                const r = je(t);
                this._bootstrapComponents = Jn(r.bootstrap),
                this._r3Injector = __(t, n, [{
                    provide: or,
                    useValue: this
                }, {
                    provide: Ro,
                    useValue: this.componentFactoryResolver
                }], z(t)),
                this._r3Injector._resolveInjectorDefTypes(),
                this.instance = this.get(t)
            }
            get(t, n=he.THROW_IF_NOT_FOUND, r=O.Default) {
                return t === he || t === or || t === Xs ? this : this._r3Injector.get(t, n, r)
            }
            destroy() {
                const t = this._r3Injector;
                !t.destroyed && t.destroy(),
                this.destroyCbs.forEach(n=>n()),
                this.destroyCbs = null
            }
            onDestroy(t) {
                this.destroyCbs.push(t)
            }
        }
        class ch extends OC {
            constructor(t) {
                super(),
                this.moduleType = t,
                null !== je(t) && function(e) {
                    const t = new Set;
                    !function n(r) {
                        const o = je(r, !0)
                          , i = o.id;
                        null !== i && (function(e, t, n) {
                            if (t && t !== n)
                                throw new Error(`Duplicate module registered for ${e} - ${z(t)} vs ${z(t.name)}`)
                        }(i, $i.get(i), r),
                        $i.set(i, r));
                        const s = Jn(o.imports);
                        for (const a of s)
                            t.has(a) || (t.add(a),
                            n(a))
                    }(e)
                }(t)
            }
            create(t) {
                return new VC(this.moduleType,t)
            }
        }
        function dh(e) {
            return t=>{
                setTimeout(e, void 0, t)
            }
        }
        const Ne = class extends Ot {
            constructor(t=!1) {
                super(),
                this.__isAsync = t
            }
            emit(t) {
                super.next(t)
            }
            subscribe(t, n, r) {
                var l, u, f;
                let o = t
                  , i = n || (()=>null)
                  , s = r;
                if (t && "object" == typeof t) {
                    const h = t;
                    o = null == (l = h.next) ? void 0 : l.bind(h),
                    i = null == (u = h.error) ? void 0 : u.bind(h),
                    s = null == (f = h.complete) ? void 0 : f.bind(h)
                }
                this.__isAsync && (i = dh(i),
                o && (o = dh(o)),
                s && (s = dh(s)));
                const a = super.subscribe({
                    next: o,
                    error: i,
                    complete: s
                });
                return t instanceof Ie && t.add(a),
                a
            }
        }
        ;
        Symbol;
        const m1 = function() {
            return function(e, t) {
                let n;
                const r = t[e.index];
                if (Qt(r))
                    n = r;
                else {
                    let o;
                    if (8 & e.type)
                        o = $e(r);
                    else {
                        const i = t[q];
                        o = i.createComment("");
                        const s = cn(e, t);
                        So(i, tu(i, s), o, function(e, t) {
                            return xe(e) ? e.nextSibling(t) : t.nextSibling
                        }(i, s), !1)
                    }
                    t[e.index] = n = function(e, t, n, r) {
                        return new Array(e,!0,!1,t,null,0,r,n,null,null)
                    }(r, t, o, e),
                    lu(t, n)
                }
                return new $C(n,e,t)
            }(ze(), A())
        };
        let Rn = (()=>{
            class e {
            }
            return e.__NG_ELEMENT_ID__ = m1,
            e
        }
        )();
        const _1 = Rn
          , $C = class extends _1 {
            constructor(t, n, r) {
                super(),
                this._lContainer = t,
                this._hostTNode = n,
                this._hostLView = r
            }
            get element() {
                return Hi(this._hostTNode, this._hostLView)
            }
            get injector() {
                return new ci(this._hostTNode,this._hostLView)
            }
            get parentInjector() {
                const t = $l(this._hostTNode, this._hostLView);
                if (Em(t)) {
                    const n = ui(t, this._hostLView)
                      , r = li(t);
                    return new ci(n[1].data[r + 8],n)
                }
                return new ci(null,this._hostLView)
            }
            clear() {
                for (; this.length > 0; )
                    this.remove(this.length - 1)
            }
            get(t) {
                const n = GC(this._lContainer);
                return null !== n && n[t] || null
            }
            get length() {
                return this._lContainer.length - 10
            }
            createEmbeddedView(t, n, r) {
                const o = t.createEmbeddedView(n || {});
                return this.insert(o, r),
                o
            }
            createComponent(t, n, r, o, i) {
                const s = t && !("function" == typeof t);
                let a;
                if (s)
                    a = n;
                else {
                    const h = n || {};
                    a = h.index,
                    r = h.injector,
                    o = h.projectableNodes,
                    i = h.ngModuleRef
                }
                const l = s ? t : new lh(et(t))
                  , u = r || this.parentInjector;
                if (!i && null == l.ngModule && u) {
                    const h = u.get(or, null);
                    h && (i = h)
                }
                const f = l.create(u, o, void 0, i);
                return this.insert(f.hostView, a),
                f
            }
            insert(t, n) {
                const r = t._lView
                  , o = r[1];
                if (Qt(r[3])) {
                    const f = this.indexOf(t);
                    if (-1 !== f)
                        this.detach(f);
                    else {
                        const h = r[3]
                          , g = new $C(h,h[6],h[3]);
                        g.detach(g.indexOf(t))
                    }
                }
                const i = this._adjustIndex(n)
                  , s = this._lContainer;
                !function(e, t, n, r) {
                    const o = 10 + r
                      , i = n.length;
                    r > 0 && (n[o - 1][4] = t),
                    r < i - 10 ? (t[4] = n[o],
                    ql(n, 10 + r, t)) : (n.push(t),
                    t[4] = null),
                    t[3] = n;
                    const s = t[17];
                    null !== s && n !== s && function(e, t) {
                        const n = e[9];
                        t[16] !== t[3][3][16] && (e[2] = !0),
                        null === n ? e[9] = [t] : n.push(t)
                    }(s, t);
                    const a = t[19];
                    null !== a && a.insertView(e),
                    t[2] |= 128
                }(o, r, s, i);
                const a = cf(i, s)
                  , l = r[q]
                  , u = tu(l, s[7]);
                return null !== u && function(e, t, n, r, o, i) {
                    r[0] = o,
                    r[6] = t,
                    Ys(e, r, n, 1, o, i)
                }(o, s[6], l, r, u, a),
                t.attachToViewContainerRef(),
                ql(fh(s), i, t),
                t
            }
            move(t, n) {
                return this.insert(t, n)
            }
            indexOf(t) {
                const n = GC(this._lContainer);
                return null !== n ? n.indexOf(t) : -1
            }
            remove(t) {
                const n = this._adjustIndex(t, -1)
                  , r = af(this._lContainer, n);
                r && (Eo(fh(this._lContainer), n),
                wy(r[1], r))
            }
            detach(t) {
                const n = this._adjustIndex(t, -1)
                  , r = af(this._lContainer, n);
                return r && null != Eo(fh(this._lContainer), n) ? new fa(r) : null
            }
            _adjustIndex(t, n=0) {
                return null == t ? this.length + n : t
            }
        }
        ;
        function GC(e) {
            return e[8]
        }
        function fh(e) {
            return e[8] || (e[8] = [])
        }
        const ma = new X("Application Initializer");
        let Wi = (()=>{
            class e {
                constructor(n) {
                    this.appInits = n,
                    this.resolve = vu,
                    this.reject = vu,
                    this.initialized = !1,
                    this.done = !1,
                    this.donePromise = new Promise((r,o)=>{
                        this.resolve = r,
                        this.reject = o
                    }
                    )
                }
                runInitializers() {
                    if (this.initialized)
                        return;
                    const n = []
                      , r = ()=>{
                        this.done = !0,
                        this.resolve()
                    }
                    ;
                    if (this.appInits)
                        for (let o = 0; o < this.appInits.length; o++) {
                            const i = this.appInits[o]();
                            if (ia(i))
                                n.push(i);
                            else if (hu(i)) {
                                const s = new Promise((a,l)=>{
                                    i.subscribe({
                                        complete: a,
                                        error: l
                                    })
                                }
                                );
                                n.push(s)
                            }
                        }
                    Promise.all(n).then(()=>{
                        r()
                    }
                    ).catch(o=>{
                        this.reject(o)
                    }
                    ),
                    0 === n.length && r(),
                    this.initialized = !0
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(ma, 8))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        const ya = new X("AppId")
          , tR = {
            provide: ya,
            useFactory: function() {
                return `${Ih()}${Ih()}${Ih()}`
            },
            deps: []
        };
        function Ih() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const pv = new X("Platform Initializer")
          , Mh = new X("Platform ID")
          , gv = new X("appBootstrapListener");
        let Su = (()=>{
            class e {
                log(n) {
                    console.log(n)
                }
                warn(n) {
                    console.warn(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        const Zr = new X("LocaleId")
          , mv = new X("DefaultCurrencyCode");
        class rR {
            constructor(t, n) {
                this.ngModuleFactory = t,
                this.componentFactories = n
            }
        }
        const Sh = function(e) {
            return new ch(e)
        }
          , oR = Sh
          , iR = function(e) {
            return Promise.resolve(Sh(e))
        }
          , _v = function(e) {
            const t = Sh(e)
              , r = Jn(je(e).declarations).reduce((o,i)=>{
                const s = et(i);
                return s && o.push(new lh(s)),
                o
            }
            , []);
            return new rR(t,r)
        }
          , sR = _v
          , aR = function(e) {
            return Promise.resolve(_v(e))
        };
        let Tu = (()=>{
            class e {
                constructor() {
                    this.compileModuleSync = oR,
                    this.compileModuleAsync = iR,
                    this.compileModuleAndAllComponentsSync = sR,
                    this.compileModuleAndAllComponentsAsync = aR
                }
                clearCache() {}
                clearCacheFor(n) {}
                getModuleId(n) {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        const cR = (()=>Promise.resolve(0))();
        function Th(e) {
            "undefined" == typeof Zone ? cR.then(()=>{
                e && e.apply(null, null)
            }
            ) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
        }
        class Ge {
            constructor({enableLongStackTrace: t=!1, shouldCoalesceEventChangeDetection: n=!1, shouldCoalesceRunChangeDetection: r=!1}) {
                if (this.hasPendingMacrotasks = !1,
                this.hasPendingMicrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new Ne(!1),
                this.onMicrotaskEmpty = new Ne(!1),
                this.onStable = new Ne(!1),
                this.onError = new Ne(!1),
                "undefined" == typeof Zone)
                    throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched();
                const o = this;
                o._nesting = 0,
                o._outer = o._inner = Zone.current,
                Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec)),
                t && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
                o.shouldCoalesceEventChangeDetection = !r && n,
                o.shouldCoalesceRunChangeDetection = r,
                o.lastRequestAnimationFrameId = -1,
                o.nativeRequestAnimationFrame = function() {
                    let e = ae.requestAnimationFrame
                      , t = ae.cancelAnimationFrame;
                    if ("undefined" != typeof Zone && e && t) {
                        const n = e[Zone.__symbol__("OriginalDelegate")];
                        n && (e = n);
                        const r = t[Zone.__symbol__("OriginalDelegate")];
                        r && (t = r)
                    }
                    return {
                        nativeRequestAnimationFrame: e,
                        nativeCancelAnimationFrame: t
                    }
                }().nativeRequestAnimationFrame,
                function(e) {
                    const t = ()=>{
                        !function(e) {
                            e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ae, ()=>{
                                e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", ()=>{
                                    e.lastRequestAnimationFrameId = -1,
                                    Rh(e),
                                    e.isCheckStableRunning = !0,
                                    xh(e),
                                    e.isCheckStableRunning = !1
                                }
                                , void 0, ()=>{}
                                , ()=>{}
                                )),
                                e.fakeTopEventTask.invoke()
                            }
                            ),
                            Rh(e))
                        }(e)
                    }
                    ;
                    e._inner = e._inner.fork({
                        name: "angular",
                        properties: {
                            isAngularZone: !0
                        },
                        onInvokeTask: (n,r,o,i,s,a)=>{
                            try {
                                return wv(e),
                                n.invokeTask(o, i, s, a)
                            } finally {
                                (e.shouldCoalesceEventChangeDetection && "eventTask" === i.type || e.shouldCoalesceRunChangeDetection) && t(),
                                Cv(e)
                            }
                        }
                        ,
                        onInvoke: (n,r,o,i,s,a,l)=>{
                            try {
                                return wv(e),
                                n.invoke(o, i, s, a, l)
                            } finally {
                                e.shouldCoalesceRunChangeDetection && t(),
                                Cv(e)
                            }
                        }
                        ,
                        onHasTask: (n,r,o,i)=>{
                            n.hasTask(o, i),
                            r === o && ("microTask" == i.change ? (e._hasPendingMicrotasks = i.microTask,
                            Rh(e),
                            xh(e)) : "macroTask" == i.change && (e.hasPendingMacrotasks = i.macroTask))
                        }
                        ,
                        onHandleError: (n,r,o,i)=>(n.handleError(o, i),
                        e.runOutsideAngular(()=>e.onError.emit(i)),
                        !1)
                    })
                }(o)
            }
            static isInAngularZone() {
                return !0 === Zone.current.get("isAngularZone")
            }
            static assertInAngularZone() {
                if (!Ge.isInAngularZone())
                    throw new Error("Expected to be in Angular Zone, but it is not!")
            }
            static assertNotInAngularZone() {
                if (Ge.isInAngularZone())
                    throw new Error("Expected to not be in Angular Zone, but it is!")
            }
            run(t, n, r) {
                return this._inner.run(t, n, r)
            }
            runTask(t, n, r, o) {
                const i = this._inner
                  , s = i.scheduleEventTask("NgZoneEvent: " + o, t, fR, vu, vu);
                try {
                    return i.runTask(s, n, r)
                } finally {
                    i.cancelTask(s)
                }
            }
            runGuarded(t, n, r) {
                return this._inner.runGuarded(t, n, r)
            }
            runOutsideAngular(t) {
                return this._outer.run(t)
            }
        }
        const fR = {};
        function xh(e) {
            if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
                try {
                    e._nesting++,
                    e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--,
                    !e.hasPendingMicrotasks)
                        try {
                            e.runOutsideAngular(()=>e.onStable.emit(null))
                        } finally {
                            e.isStable = !0
                        }
                }
        }
        function Rh(e) {
            e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
        }
        function wv(e) {
            e._nesting++,
            e.isStable && (e.isStable = !1,
            e.onUnstable.emit(null))
        }
        function Cv(e) {
            e._nesting--,
            xh(e)
        }
        class gR {
            constructor() {
                this.hasPendingMicrotasks = !1,
                this.hasPendingMacrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new Ne,
                this.onMicrotaskEmpty = new Ne,
                this.onStable = new Ne,
                this.onError = new Ne
            }
            run(t, n, r) {
                return t.apply(n, r)
            }
            runGuarded(t, n, r) {
                return t.apply(n, r)
            }
            runOutsideAngular(t) {
                return t()
            }
            runTask(t, n, r, o) {
                return t.apply(n, r)
            }
        }
        let Ph = (()=>{
            class e {
                constructor(n) {
                    this._ngZone = n,
                    this._pendingCount = 0,
                    this._isZoneStable = !0,
                    this._didWork = !1,
                    this._callbacks = [],
                    this.taskTrackingZone = null,
                    this._watchAngularEvents(),
                    n.run(()=>{
                        this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                    }
                    )
                }
                _watchAngularEvents() {
                    this._ngZone.onUnstable.subscribe({
                        next: ()=>{
                            this._didWork = !0,
                            this._isZoneStable = !1
                        }
                    }),
                    this._ngZone.runOutsideAngular(()=>{
                        this._ngZone.onStable.subscribe({
                            next: ()=>{
                                Ge.assertNotInAngularZone(),
                                Th(()=>{
                                    this._isZoneStable = !0,
                                    this._runCallbacksIfReady()
                                }
                                )
                            }
                        })
                    }
                    )
                }
                increasePendingRequestCount() {
                    return this._pendingCount += 1,
                    this._didWork = !0,
                    this._pendingCount
                }
                decreasePendingRequestCount() {
                    if (this._pendingCount -= 1,
                    this._pendingCount < 0)
                        throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(),
                    this._pendingCount
                }
                isStable() {
                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                }
                _runCallbacksIfReady() {
                    if (this.isStable())
                        Th(()=>{
                            for (; 0 !== this._callbacks.length; ) {
                                let n = this._callbacks.pop();
                                clearTimeout(n.timeoutId),
                                n.doneCb(this._didWork)
                            }
                            this._didWork = !1
                        }
                        );
                    else {
                        let n = this.getPendingTasks();
                        this._callbacks = this._callbacks.filter(r=>!r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId),
                        !1)),
                        this._didWork = !0
                    }
                }
                getPendingTasks() {
                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n=>({
                        source: n.source,
                        creationLocation: n.creationLocation,
                        data: n.data
                    })) : []
                }
                addCallback(n, r, o) {
                    let i = -1;
                    r && r > 0 && (i = setTimeout(()=>{
                        this._callbacks = this._callbacks.filter(s=>s.timeoutId !== i),
                        n(this._didWork, this.getPendingTasks())
                    }
                    , r)),
                    this._callbacks.push({
                        doneCb: n,
                        timeoutId: i,
                        updateCb: o
                    })
                }
                whenStable(n, r, o) {
                    if (o && !this.taskTrackingZone)
                        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                    this.addCallback(n, r, o),
                    this._runCallbacksIfReady()
                }
                getPendingRequestCount() {
                    return this._pendingCount
                }
                findProviders(n, r, o) {
                    return []
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(Ge))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
          , vv = (()=>{
            class e {
                constructor() {
                    this._applications = new Map,
                    Nh.addToWindow(this)
                }
                registerApplication(n, r) {
                    this._applications.set(n, r)
                }
                unregisterApplication(n) {
                    this._applications.delete(n)
                }
                unregisterAllApplications() {
                    this._applications.clear()
                }
                getTestability(n) {
                    return this._applications.get(n) || null
                }
                getAllTestabilities() {
                    return Array.from(this._applications.values())
                }
                getAllRootElements() {
                    return Array.from(this._applications.keys())
                }
                findTestabilityInTree(n, r=!0) {
                    return Nh.findTestabilityInTree(this, n, r)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        class mR {
            addToWindow(t) {}
            findTestabilityInTree(t, n, r) {
                return null
            }
        }
        let Nh = new mR
          , Dv = !0
          , bv = !1;
        let Pn;
        const Av = new X("AllowMultipleToken");
        class Fh {
            constructor(t, n) {
                this.name = t,
                this.token = n
            }
        }
        function Iv(e, t, n=[]) {
            const r = `Platform: ${t}`
              , o = new X(r);
            return (i=[])=>{
                let s = Mv();
                if (!s || s.injector.get(Av, !1))
                    if (e)
                        e(n.concat(i).concat({
                            provide: o,
                            useValue: !0
                        }));
                    else {
                        const a = n.concat(i).concat({
                            provide: o,
                            useValue: !0
                        }, {
                            provide: ea,
                            useValue: "platform"
                        });
                        !function(e) {
                            if (Pn && !Pn.destroyed && !Pn.injector.get(Av, !1))
                                throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                            Pn = e.get(Sv);
                            const t = e.get(pv, null);
                            t && t.forEach(n=>n())
                        }(he.create({
                            providers: a,
                            name: r
                        }))
                    }
                return function(e) {
                    const t = Mv();
                    if (!t)
                        throw new Error("No platform exists!");
                    if (!t.injector.get(e, null))
                        throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return t
                }(o)
            }
        }
        function Mv() {
            return Pn && !Pn.destroyed ? Pn : null
        }
        let Sv = (()=>{
            class e {
                constructor(n) {
                    this._injector = n,
                    this._modules = [],
                    this._destroyListeners = [],
                    this._destroyed = !1
                }
                bootstrapModuleFactory(n, r) {
                    const a = function(e, t) {
                        let n;
                        return n = "noop" === e ? new gR : ("zone.js" === e ? void 0 : e) || new Ge({
                            enableLongStackTrace: (bv = !0,
                            Dv),
                            shouldCoalesceEventChangeDetection: !!(null == t ? void 0 : t.ngZoneEventCoalescing),
                            shouldCoalesceRunChangeDetection: !!(null == t ? void 0 : t.ngZoneRunCoalescing)
                        }),
                        n
                    }(r ? r.ngZone : void 0, {
                        ngZoneEventCoalescing: r && r.ngZoneEventCoalescing || !1,
                        ngZoneRunCoalescing: r && r.ngZoneRunCoalescing || !1
                    })
                      , l = [{
                        provide: Ge,
                        useValue: a
                    }];
                    return a.run(()=>{
                        const u = he.create({
                            providers: l,
                            parent: this.injector,
                            name: n.moduleType.name
                        })
                          , f = n.create(u)
                          , h = f.injector.get(Mo, null);
                        if (!h)
                            throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return a.runOutsideAngular(()=>{
                            const g = a.onError.subscribe({
                                next: m=>{
                                    h.handleError(m)
                                }
                            });
                            f.onDestroy(()=>{
                                Oh(this._modules, f),
                                g.unsubscribe()
                            }
                            )
                        }
                        ),
                        function(e, t, n) {
                            try {
                                const r = n();
                                return ia(r) ? r.catch(o=>{
                                    throw t.runOutsideAngular(()=>e.handleError(o)),
                                    o
                                }
                                ) : r
                            } catch (r) {
                                throw t.runOutsideAngular(()=>e.handleError(r)),
                                r
                            }
                        }(h, a, ()=>{
                            const g = f.injector.get(Wi);
                            return g.runInitializers(),
                            g.donePromise.then(()=>(function(e) {
                                gt(e, "Expected localeId to be defined"),
                                "string" == typeof e && (rC = e.toLowerCase().replace(/_/g, "-"))
                            }(f.injector.get(Zr, mu) || mu),
                            this._moduleDoBootstrap(f),
                            f))
                        }
                        )
                    }
                    )
                }
                bootstrapModule(n, r=[]) {
                    const o = Tv({}, r);
                    return function(e, t, n) {
                        const r = new ch(n);
                        return Promise.resolve(r)
                    }(0, 0, n).then(i=>this.bootstrapModuleFactory(i, o))
                }
                _moduleDoBootstrap(n) {
                    const r = n.injector.get(qi);
                    if (n._bootstrapComponents.length > 0)
                        n._bootstrapComponents.forEach(o=>r.bootstrap(o));
                    else {
                        if (!n.instance.ngDoBootstrap)
                            throw new Error(`The module ${z(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                        n.instance.ngDoBootstrap(r)
                    }
                    this._modules.push(n)
                }
                onDestroy(n) {
                    this._destroyListeners.push(n)
                }
                get injector() {
                    return this._injector
                }
                destroy() {
                    if (this._destroyed)
                        throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(n=>n.destroy()),
                    this._destroyListeners.forEach(n=>n()),
                    this._destroyed = !0
                }
                get destroyed() {
                    return this._destroyed
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(he))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        function Tv(e, t) {
            return Array.isArray(t) ? t.reduce(Tv, e) : F(F({}, e), t)
        }
        let qi = (()=>{
            class e {
                constructor(n, r, o, i, s) {
                    this._zone = n,
                    this._injector = r,
                    this._exceptionHandler = o,
                    this._componentFactoryResolver = i,
                    this._initStatus = s,
                    this._bootstrapListeners = [],
                    this._views = [],
                    this._runningTick = !1,
                    this._stable = !0,
                    this.componentTypes = [],
                    this.components = [],
                    this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                        next: ()=>{
                            this._zone.run(()=>{
                                this.tick()
                            }
                            )
                        }
                    });
                    const a = new oe(u=>{
                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks,
                        this._zone.runOutsideAngular(()=>{
                            u.next(this._stable),
                            u.complete()
                        }
                        )
                    }
                    )
                      , l = new oe(u=>{
                        let f;
                        this._zone.runOutsideAngular(()=>{
                            f = this._zone.onStable.subscribe(()=>{
                                Ge.assertNotInAngularZone(),
                                Th(()=>{
                                    !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0,
                                    u.next(!0))
                                }
                                )
                            }
                            )
                        }
                        );
                        const h = this._zone.onUnstable.subscribe(()=>{
                            Ge.assertInAngularZone(),
                            this._stable && (this._stable = !1,
                            this._zone.runOutsideAngular(()=>{
                                u.next(!1)
                            }
                            ))
                        }
                        );
                        return ()=>{
                            f.unsubscribe(),
                            h.unsubscribe()
                        }
                    }
                    );
                    this.isStable = function(...e) {
                        const t = fr(e)
                          , n = function(e, t) {
                            return "number" == typeof gs(e) ? e.pop() : 1 / 0
                        }(e)
                          , r = e;
                        return r.length ? 1 === r.length ? sn(r[0]) : U(n)(Be(r, t)) : Dn
                    }(a, l.pipe(function(e={}) {
                        const {connector: t=(()=>new Ot), resetOnError: n=!0, resetOnComplete: r=!0, resetOnRefCountZero: o=!0} = e;
                        return i=>{
                            let s = null
                              , a = null
                              , l = null
                              , u = 0
                              , f = !1
                              , h = !1;
                            const g = ()=>{
                                null == a || a.unsubscribe(),
                                a = null
                            }
                              , m = ()=>{
                                g(),
                                s = l = null,
                                f = h = !1
                            }
                              , y = ()=>{
                                const C = s;
                                m(),
                                null == C || C.unsubscribe()
                            }
                            ;
                            return Fe((C,w)=>{
                                u++,
                                !h && !f && g();
                                const b = l = null != l ? l : t();
                                w.add(()=>{
                                    u--,
                                    0 === u && !h && !f && (a = _s(y, o))
                                }
                                ),
                                b.subscribe(w),
                                s || (s = new ur({
                                    next: v=>b.next(v),
                                    error: v=>{
                                        h = !0,
                                        g(),
                                        a = _s(m, n, v),
                                        b.error(v)
                                    }
                                    ,
                                    complete: ()=>{
                                        f = !0,
                                        g(),
                                        a = _s(m, r),
                                        b.complete()
                                    }
                                }),
                                Be(C).subscribe(s))
                            }
                            )(i)
                        }
                    }()))
                }
                bootstrap(n, r) {
                    if (!this._initStatus.done)
                        throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    let o;
                    o = n instanceof SC ? n : this._componentFactoryResolver.resolveComponentFactory(n),
                    this.componentTypes.push(o.componentType);
                    const i = function(e) {
                        return e.isBoundToModule
                    }(o) ? void 0 : this._injector.get(or)
                      , a = o.create(he.NULL, [], r || o.selector, i)
                      , l = a.location.nativeElement
                      , u = a.injector.get(Ph, null)
                      , f = u && a.injector.get(vv);
                    return u && f && f.registerApplication(l, u),
                    a.onDestroy(()=>{
                        this.detachView(a.hostView),
                        Oh(this.components, a),
                        f && f.unregisterApplication(l)
                    }
                    ),
                    this._loadComponent(a),
                    a
                }
                tick() {
                    if (this._runningTick)
                        throw new Error("ApplicationRef.tick is called recursively");
                    try {
                        this._runningTick = !0;
                        for (let n of this._views)
                            n.detectChanges()
                    } catch (n) {
                        this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))
                    } finally {
                        this._runningTick = !1
                    }
                }
                attachView(n) {
                    const r = n;
                    this._views.push(r),
                    r.attachToAppRef(this)
                }
                detachView(n) {
                    const r = n;
                    Oh(this._views, r),
                    r.detachFromAppRef()
                }
                _loadComponent(n) {
                    this.attachView(n.hostView),
                    this.tick(),
                    this.components.push(n),
                    this._injector.get(gv, []).concat(this._bootstrapListeners).forEach(o=>o(n))
                }
                ngOnDestroy() {
                    this._views.slice().forEach(n=>n.destroy()),
                    this._onMicrotaskEmptySubscription.unsubscribe()
                }
                get viewCount() {
                    return this._views.length
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(Ge),N(he),N(Mo),N(Ro),N(Wi))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        function Oh(e, t) {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        const RR = function(e) {
            return function(e, t, n) {
                if (ni(e) && !n) {
                    const r = Yt(e.index, t);
                    return new fa(r,r)
                }
                return 47 & e.type ? new fa(t[16],t) : null
            }(ze(), A(), 16 == (16 & e))
        };
        let Vh = (()=>{
            class e {
            }
            return e.__NG_ELEMENT_ID__ = RR,
            e
        }
        )();
        class kv {
            constructor() {}
            supports(t) {
                return ra(t)
            }
            create(t) {
                return new GR(t)
            }
        }
        const $R = (e,t)=>t;
        class GR {
            constructor(t) {
                this.length = 0,
                this._linkedRecords = null,
                this._unlinkedRecords = null,
                this._previousItHead = null,
                this._itHead = null,
                this._itTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._movesHead = null,
                this._movesTail = null,
                this._removalsHead = null,
                this._removalsTail = null,
                this._identityChangesHead = null,
                this._identityChangesTail = null,
                this._trackByFn = t || $R
            }
            forEachItem(t) {
                let n;
                for (n = this._itHead; null !== n; n = n._next)
                    t(n)
            }
            forEachOperation(t) {
                let n = this._itHead
                  , r = this._removalsHead
                  , o = 0
                  , i = null;
                for (; n || r; ) {
                    const s = !r || n && n.currentIndex < Lv(r, o, i) ? n : r
                      , a = Lv(s, o, i)
                      , l = s.currentIndex;
                    if (s === r)
                        o--,
                        r = r._nextRemoved;
                    else if (n = n._next,
                    null == s.previousIndex)
                        o++;
                    else {
                        i || (i = []);
                        const u = a - o
                          , f = l - o;
                        if (u != f) {
                            for (let g = 0; g < u; g++) {
                                const m = g < i.length ? i[g] : i[g] = 0
                                  , y = m + g;
                                f <= y && y < u && (i[g] = m + 1)
                            }
                            i[s.previousIndex] = f - u
                        }
                    }
                    a !== l && t(s, a, l)
                }
            }
            forEachPreviousItem(t) {
                let n;
                for (n = this._previousItHead; null !== n; n = n._nextPrevious)
                    t(n)
            }
            forEachAddedItem(t) {
                let n;
                for (n = this._additionsHead; null !== n; n = n._nextAdded)
                    t(n)
            }
            forEachMovedItem(t) {
                let n;
                for (n = this._movesHead; null !== n; n = n._nextMoved)
                    t(n)
            }
            forEachRemovedItem(t) {
                let n;
                for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                    t(n)
            }
            forEachIdentityChange(t) {
                let n;
                for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange)
                    t(n)
            }
            diff(t) {
                if (null == t && (t = []),
                !ra(t))
                    throw new Error(`Error trying to diff '${z(t)}'. Only arrays and iterables are allowed`);
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let o, i, s, n = this._itHead, r = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (let a = 0; a < this.length; a++)
                        i = t[a],
                        s = this._trackByFn(a, i),
                        null !== n && Object.is(n.trackById, s) ? (r && (n = this._verifyReinsertion(n, i, s, a)),
                        Object.is(n.item, i) || this._addIdentityChange(n, i)) : (n = this._mismatch(n, i, s, a),
                        r = !0),
                        n = n._next
                } else
                    o = 0,
                    function(e, t) {
                        if (Array.isArray(e))
                            for (let n = 0; n < e.length; n++)
                                t(e[n]);
                        else {
                            const n = e[Mi()]();
                            let r;
                            for (; !(r = n.next()).done; )
                                t(r.value)
                        }
                    }(t, a=>{
                        s = this._trackByFn(o, a),
                        null !== n && Object.is(n.trackById, s) ? (r && (n = this._verifyReinsertion(n, a, s, o)),
                        Object.is(n.item, a) || this._addIdentityChange(n, a)) : (n = this._mismatch(n, a, s, o),
                        r = !0),
                        n = n._next,
                        o++
                    }
                    ),
                    this.length = o;
                return this._truncate(n),
                this.collection = t,
                this.isDirty
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                        t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null,
                    t = this._movesHead; null !== t; t = t._nextMoved)
                        t.previousIndex = t.currentIndex;
                    this._movesHead = this._movesTail = null,
                    this._removalsHead = this._removalsTail = null,
                    this._identityChangesHead = this._identityChangesTail = null
                }
            }
            _mismatch(t, n, r, o) {
                let i;
                return null === t ? i = this._itTail : (i = t._prev,
                this._remove(t)),
                null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, o)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o)) : t = this._addAfter(new WR(n,r), i, o),
                t
            }
            _verifyReinsertion(t, n, r, o) {
                let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
                return null !== i ? t = this._reinsertAfter(i, t._prev, o) : t.currentIndex != o && (t.currentIndex = o,
                this._addToMoves(t, o)),
                t
            }
            _truncate(t) {
                for (; null !== t; ) {
                    const n = t._next;
                    this._addToRemovals(this._unlink(t)),
                    t = n
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }
            _reinsertAfter(t, n, r) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                const o = t._prevRemoved
                  , i = t._nextRemoved;
                return null === o ? this._removalsHead = i : o._nextRemoved = i,
                null === i ? this._removalsTail = o : i._prevRemoved = o,
                this._insertAfter(t, n, r),
                this._addToMoves(t, r),
                t
            }
            _moveAfter(t, n, r) {
                return this._unlink(t),
                this._insertAfter(t, n, r),
                this._addToMoves(t, r),
                t
            }
            _addAfter(t, n, r) {
                return this._insertAfter(t, n, r),
                this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t,
                t
            }
            _insertAfter(t, n, r) {
                const o = null === n ? this._itHead : n._next;
                return t._next = o,
                t._prev = n,
                null === o ? this._itTail = t : o._prev = t,
                null === n ? this._itHead = t : n._next = t,
                null === this._linkedRecords && (this._linkedRecords = new Vv),
                this._linkedRecords.put(t),
                t.currentIndex = r,
                t
            }
            _remove(t) {
                return this._addToRemovals(this._unlink(t))
            }
            _unlink(t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                const n = t._prev
                  , r = t._next;
                return null === n ? this._itHead = r : n._next = r,
                null === r ? this._itTail = n : r._prev = n,
                t
            }
            _addToMoves(t, n) {
                return t.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t),
                t
            }
            _addToRemovals(t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new Vv),
                this._unlinkedRecords.put(t),
                t.currentIndex = null,
                t._nextRemoved = null,
                null === this._removalsTail ? (this._removalsTail = this._removalsHead = t,
                t._prevRemoved = null) : (t._prevRemoved = this._removalsTail,
                this._removalsTail = this._removalsTail._nextRemoved = t),
                t
            }
            _addIdentityChange(t, n) {
                return t.item = n,
                this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t,
                t
            }
        }
        class WR {
            constructor(t, n) {
                this.item = t,
                this.trackById = n,
                this.currentIndex = null,
                this.previousIndex = null,
                this._nextPrevious = null,
                this._prev = null,
                this._next = null,
                this._prevDup = null,
                this._nextDup = null,
                this._prevRemoved = null,
                this._nextRemoved = null,
                this._nextAdded = null,
                this._nextMoved = null,
                this._nextIdentityChange = null
            }
        }
        class qR {
            constructor() {
                this._head = null,
                this._tail = null
            }
            add(t) {
                null === this._head ? (this._head = this._tail = t,
                t._nextDup = null,
                t._prevDup = null) : (this._tail._nextDup = t,
                t._prevDup = this._tail,
                t._nextDup = null,
                this._tail = t)
            }
            get(t, n) {
                let r;
                for (r = this._head; null !== r; r = r._nextDup)
                    if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t))
                        return r;
                return null
            }
            remove(t) {
                const n = t._prevDup
                  , r = t._nextDup;
                return null === n ? this._head = r : n._nextDup = r,
                null === r ? this._tail = n : r._prevDup = n,
                null === this._head
            }
        }
        class Vv {
            constructor() {
                this.map = new Map
            }
            put(t) {
                const n = t.trackById;
                let r = this.map.get(n);
                r || (r = new qR,
                this.map.set(n, r)),
                r.add(t)
            }
            get(t, n) {
                const o = this.map.get(t);
                return o ? o.get(t, n) : null
            }
            remove(t) {
                const n = t.trackById;
                return this.map.get(n).remove(t) && this.map.delete(n),
                t
            }
            get isEmpty() {
                return 0 === this.map.size
            }
            clear() {
                this.map.clear()
            }
        }
        function Lv(e, t, n) {
            const r = e.previousIndex;
            if (null === r)
                return r;
            let o = 0;
            return n && r < n.length && (o = n[r]),
            r + t + o
        }
        class Bv {
            constructor() {}
            supports(t) {
                return t instanceof Map || Uf(t)
            }
            create() {
                return new zR
            }
        }
        class zR {
            constructor() {
                this._records = new Map,
                this._mapHead = null,
                this._appendAfter = null,
                this._previousMapHead = null,
                this._changesHead = null,
                this._changesTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._removalsHead = null,
                this._removalsTail = null
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }
            forEachItem(t) {
                let n;
                for (n = this._mapHead; null !== n; n = n._next)
                    t(n)
            }
            forEachPreviousItem(t) {
                let n;
                for (n = this._previousMapHead; null !== n; n = n._nextPrevious)
                    t(n)
            }
            forEachChangedItem(t) {
                let n;
                for (n = this._changesHead; null !== n; n = n._nextChanged)
                    t(n)
            }
            forEachAddedItem(t) {
                let n;
                for (n = this._additionsHead; null !== n; n = n._nextAdded)
                    t(n)
            }
            forEachRemovedItem(t) {
                let n;
                for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                    t(n)
            }
            diff(t) {
                if (t) {
                    if (!(t instanceof Map || Uf(t)))
                        throw new Error(`Error trying to diff '${z(t)}'. Only maps and objects are allowed`)
                } else
                    t = new Map;
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let n = this._mapHead;
                if (this._appendAfter = null,
                this._forEach(t, (r,o)=>{
                    if (n && n.key === o)
                        this._maybeAddToChanges(n, r),
                        this._appendAfter = n,
                        n = n._next;
                    else {
                        const i = this._getOrCreateRecordForKey(o, r);
                        n = this._insertBeforeOrAppend(n, i)
                    }
                }
                ),
                n) {
                    n._prev && (n._prev._next = null),
                    this._removalsHead = n;
                    for (let r = n; null !== r; r = r._nextRemoved)
                        r === this._mapHead && (this._mapHead = null),
                        this._records.delete(r.key),
                        r._nextRemoved = r._next,
                        r.previousValue = r.currentValue,
                        r.currentValue = null,
                        r._prev = null,
                        r._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
            }
            _insertBeforeOrAppend(t, n) {
                if (t) {
                    const r = t._prev;
                    return n._next = t,
                    n._prev = r,
                    t._prev = n,
                    r && (r._next = n),
                    t === this._mapHead && (this._mapHead = n),
                    this._appendAfter = t,
                    t
                }
                return this._appendAfter ? (this._appendAfter._next = n,
                n._prev = this._appendAfter) : this._mapHead = n,
                this._appendAfter = n,
                null
            }
            _getOrCreateRecordForKey(t, n) {
                if (this._records.has(t)) {
                    const o = this._records.get(t);
                    this._maybeAddToChanges(o, n);
                    const i = o._prev
                      , s = o._next;
                    return i && (i._next = s),
                    s && (s._prev = i),
                    o._next = null,
                    o._prev = null,
                    o
                }
                const r = new QR(t);
                return this._records.set(t, r),
                r.currentValue = n,
                this._addToAdditions(r),
                r
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (this._previousMapHead = this._mapHead,
                    t = this._previousMapHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._changesHead; null !== t; t = t._nextChanged)
                        t.previousValue = t.currentValue;
                    for (t = this._additionsHead; null != t; t = t._nextAdded)
                        t.previousValue = t.currentValue;
                    this._changesHead = this._changesTail = null,
                    this._additionsHead = this._additionsTail = null,
                    this._removalsHead = null
                }
            }
            _maybeAddToChanges(t, n) {
                Object.is(n, t.currentValue) || (t.previousValue = t.currentValue,
                t.currentValue = n,
                this._addToChanges(t))
            }
            _addToAdditions(t) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t,
                this._additionsTail = t)
            }
            _addToChanges(t) {
                null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t,
                this._changesTail = t)
            }
            _forEach(t, n) {
                t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r=>n(t[r], r))
            }
        }
        class QR {
            constructor(t) {
                this.key = t,
                this.previousValue = null,
                this.currentValue = null,
                this._nextPrevious = null,
                this._next = null,
                this._prev = null,
                this._nextAdded = null,
                this._nextRemoved = null,
                this._nextChanged = null
            }
        }
        function jv() {
            return new _a([new kv])
        }
        let _a = (()=>{
            class e {
                constructor(n) {
                    this.factories = n
                }
                static create(n, r) {
                    if (null != r) {
                        const o = r.factories.slice();
                        n = n.concat(o)
                    }
                    return new e(n)
                }
                static extend(n) {
                    return {
                        provide: e,
                        useFactory: r=>e.create(n, r || jv()),
                        deps: [[e, new Qr, new Bt]]
                    }
                }
                find(n) {
                    const r = this.factories.find(o=>o.supports(n));
                    if (null != r)
                        return r;
                    throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e) {
                        return e.name || typeof e
                    }(n)}'`)
                }
            }
            return e.\u0275prov = Q({
                token: e,
                providedIn: "root",
                factory: jv
            }),
            e
        }
        )();
        function Hv() {
            return new zi([new Bv])
        }
        let zi = (()=>{
            class e {
                constructor(n) {
                    this.factories = n
                }
                static create(n, r) {
                    if (r) {
                        const o = r.factories.slice();
                        n = n.concat(o)
                    }
                    return new e(n)
                }
                static extend(n) {
                    return {
                        provide: e,
                        useFactory: r=>e.create(n, r || Hv()),
                        deps: [[e, new Qr, new Bt]]
                    }
                }
                find(n) {
                    const r = this.factories.find(o=>o.supports(n));
                    if (r)
                        return r;
                    throw new Error(`Cannot find a differ supporting object '${n}'`)
                }
            }
            return e.\u0275prov = Q({
                token: e,
                providedIn: "root",
                factory: Hv
            }),
            e
        }
        )();
        const YR = [new Bv]
          , JR = new _a([new kv])
          , XR = new zi(YR)
          , eP = Iv(null, "core", [{
            provide: Mh,
            useValue: "unknown"
        }, {
            provide: Sv,
            deps: [he]
        }, {
            provide: vv,
            deps: []
        }, {
            provide: Su,
            deps: []
        }])
          , iP = [{
            provide: qi,
            useClass: qi,
            deps: [Ge, he, Mo, Ro, Wi]
        }, {
            provide: Bx,
            deps: [Ge],
            useFactory: function(e) {
                let t = [];
                return e.onStable.subscribe(()=>{
                    for (; t.length; )
                        t.pop()()
                }
                ),
                function(n) {
                    t.push(n)
                }
            }
        }, {
            provide: Wi,
            useClass: Wi,
            deps: [[new Bt, ma]]
        }, {
            provide: Tu,
            useClass: Tu,
            deps: []
        }, tR, {
            provide: _a,
            useFactory: function() {
                return JR
            },
            deps: []
        }, {
            provide: zi,
            useFactory: function() {
                return XR
            },
            deps: []
        }, {
            provide: Zr,
            useFactory: function(e) {
                return e || "undefined" != typeof $localize && $localize.locale || mu
            },
            deps: [[new yi(Zr), new Bt, new Qr]]
        }, {
            provide: mv,
            useValue: "USD"
        }];
        let aP = (()=>{
            class e {
                constructor(n) {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(qi))
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({
                providers: iP
            }),
            e
        }
        )()
          , $u = null;
        function ir() {
            return $u
        }
        const dt = new X("DocumentToken");
        let ko = (()=>{
            class e {
                historyGo(n) {
                    throw new Error("Not implemented")
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: function() {
                    return N(AD)
                },
                providedIn: "platform"
            }),
            e
        }
        )();
        const tF = new X("Location Initialized");
        let AD = (()=>{
            class e extends ko {
                constructor(n) {
                    super(),
                    this._doc = n,
                    this._init()
                }
                _init() {
                    this.location = window.location,
                    this._history = window.history
                }
                getBaseHrefFromDOM() {
                    return ir().getBaseHref(this._doc)
                }
                onPopState(n) {
                    const r = ir().getGlobalEventTarget(this._doc, "window");
                    return r.addEventListener("popstate", n, !1),
                    ()=>r.removeEventListener("popstate", n)
                }
                onHashChange(n) {
                    const r = ir().getGlobalEventTarget(this._doc, "window");
                    return r.addEventListener("hashchange", n, !1),
                    ()=>r.removeEventListener("hashchange", n)
                }
                get href() {
                    return this.location.href
                }
                get protocol() {
                    return this.location.protocol
                }
                get hostname() {
                    return this.location.hostname
                }
                get port() {
                    return this.location.port
                }
                get pathname() {
                    return this.location.pathname
                }
                get search() {
                    return this.location.search
                }
                get hash() {
                    return this.location.hash
                }
                set pathname(n) {
                    this.location.pathname = n
                }
                pushState(n, r, o) {
                    ID() ? this._history.pushState(n, r, o) : this.location.hash = o
                }
                replaceState(n, r, o) {
                    ID() ? this._history.replaceState(n, r, o) : this.location.hash = o
                }
                forward() {
                    this._history.forward()
                }
                back() {
                    this._history.back()
                }
                historyGo(n=0) {
                    this._history.go(n)
                }
                getState() {
                    return this._history.state
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(dt))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: function() {
                    return new AD(N(dt))
                },
                providedIn: "platform"
            }),
            e
        }
        )();
        function ID() {
            return !!window.history.pushState
        }
        function cp(e, t) {
            if (0 == e.length)
                return t;
            if (0 == t.length)
                return e;
            let n = 0;
            return e.endsWith("/") && n++,
            t.startsWith("/") && n++,
            2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
        }
        function MD(e) {
            const t = e.match(/#|\?|$/)
              , n = t && t.index || e.length;
            return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
        }
        function Tr(e) {
            return e && "?" !== e[0] ? "?" + e : e
        }
        let Xi = (()=>{
            class e {
                historyGo(n) {
                    throw new Error("Not implemented")
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: function() {
                    return function(e) {
                        const t = N(dt).location;
                        return new SD(N(ko),t && t.origin || "")
                    }()
                },
                providedIn: "root"
            }),
            e
        }
        )();
        const dp = new X("appBaseHref");
        let SD = (()=>{
            class e extends Xi {
                constructor(n, r) {
                    if (super(),
                    this._platformLocation = n,
                    this._removeListenerFns = [],
                    null == r && (r = this._platformLocation.getBaseHrefFromDOM()),
                    null == r)
                        throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    this._baseHref = r
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(n) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
                }
                getBaseHref() {
                    return this._baseHref
                }
                prepareExternalUrl(n) {
                    return cp(this._baseHref, n)
                }
                path(n=!1) {
                    const r = this._platformLocation.pathname + Tr(this._platformLocation.search)
                      , o = this._platformLocation.hash;
                    return o && n ? `${r}${o}` : r
                }
                pushState(n, r, o, i) {
                    const s = this.prepareExternalUrl(o + Tr(i));
                    this._platformLocation.pushState(n, r, s)
                }
                replaceState(n, r, o, i) {
                    const s = this.prepareExternalUrl(o + Tr(i));
                    this._platformLocation.replaceState(n, r, s)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                historyGo(n=0) {
                    var r, o;
                    null == (o = (r = this._platformLocation).historyGo) || o.call(r, n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(ko),N(dp, 8))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
          , oF = (()=>{
            class e extends Xi {
                constructor(n, r) {
                    super(),
                    this._platformLocation = n,
                    this._baseHref = "",
                    this._removeListenerFns = [],
                    null != r && (this._baseHref = r)
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(n) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
                }
                getBaseHref() {
                    return this._baseHref
                }
                path(n=!1) {
                    let r = this._platformLocation.hash;
                    return null == r && (r = "#"),
                    r.length > 0 ? r.substring(1) : r
                }
                prepareExternalUrl(n) {
                    const r = cp(this._baseHref, n);
                    return r.length > 0 ? "#" + r : r
                }
                pushState(n, r, o, i) {
                    let s = this.prepareExternalUrl(o + Tr(i));
                    0 == s.length && (s = this._platformLocation.pathname),
                    this._platformLocation.pushState(n, r, s)
                }
                replaceState(n, r, o, i) {
                    let s = this.prepareExternalUrl(o + Tr(i));
                    0 == s.length && (s = this._platformLocation.pathname),
                    this._platformLocation.replaceState(n, r, s)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                historyGo(n=0) {
                    var r, o;
                    null == (o = (r = this._platformLocation).historyGo) || o.call(r, n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(ko),N(dp, 8))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
          , fp = (()=>{
            class e {
                constructor(n, r) {
                    this._subject = new Ne,
                    this._urlChangeListeners = [],
                    this._platformStrategy = n;
                    const o = this._platformStrategy.getBaseHref();
                    this._platformLocation = r,
                    this._baseHref = MD(TD(o)),
                    this._platformStrategy.onPopState(i=>{
                        this._subject.emit({
                            url: this.path(!0),
                            pop: !0,
                            state: i.state,
                            type: i.type
                        })
                    }
                    )
                }
                path(n=!1) {
                    return this.normalize(this._platformStrategy.path(n))
                }
                getState() {
                    return this._platformLocation.getState()
                }
                isCurrentPathEqualTo(n, r="") {
                    return this.path() == this.normalize(n + Tr(r))
                }
                normalize(n) {
                    return e.stripTrailingSlash(function(e, t) {
                        return e && t.startsWith(e) ? t.substring(e.length) : t
                    }(this._baseHref, TD(n)))
                }
                prepareExternalUrl(n) {
                    return n && "/" !== n[0] && (n = "/" + n),
                    this._platformStrategy.prepareExternalUrl(n)
                }
                go(n, r="", o=null) {
                    this._platformStrategy.pushState(o, "", n, r),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Tr(r)), o)
                }
                replaceState(n, r="", o=null) {
                    this._platformStrategy.replaceState(o, "", n, r),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Tr(r)), o)
                }
                forward() {
                    this._platformStrategy.forward()
                }
                back() {
                    this._platformStrategy.back()
                }
                historyGo(n=0) {
                    var r, o;
                    null == (o = (r = this._platformStrategy).historyGo) || o.call(r, n)
                }
                onUrlChange(n) {
                    this._urlChangeListeners.push(n),
                    this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(r=>{
                        this._notifyUrlChangeListeners(r.url, r.state)
                    }
                    ))
                }
                _notifyUrlChangeListeners(n="", r) {
                    this._urlChangeListeners.forEach(o=>o(n, r))
                }
                subscribe(n, r, o) {
                    return this._subject.subscribe({
                        next: n,
                        error: r,
                        complete: o
                    })
                }
            }
            return e.normalizeQueryParams = Tr,
            e.joinWithSlash = cp,
            e.stripTrailingSlash = MD,
            e.\u0275fac = function(n) {
                return new (n || e)(N(Xi),N(ko))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: function() {
                    return new fp(N(Xi),N(ko))
                },
                providedIn: "root"
            }),
            e
        }
        )();
        function TD(e) {
            return e.replace(/\/index.html$/, "")
        }
        var We = (()=>((We = We || {})[We.Zero = 0] = "Zero",
        We[We.One = 1] = "One",
        We[We.Two = 2] = "Two",
        We[We.Few = 3] = "Few",
        We[We.Many = 4] = "Many",
        We[We.Other = 5] = "Other",
        We))();
        const hF = function(e) {
            return function(e) {
                const t = function(e) {
                    return e.toLowerCase().replace(/_/g, "-")
                }(e);
                let n = nC(t);
                if (n)
                    return n;
                const r = t.split("-")[0];
                if (n = nC(r),
                n)
                    return n;
                if ("en" === r)
                    return ST;
                throw new Error(`Missing locale data for the locale "${e}".`)
            }(e)[S.PluralCase]
        };
        class Xu {
        }
        let UF = (()=>{
            class e extends Xu {
                constructor(n) {
                    super(),
                    this.locale = n
                }
                getPluralCategory(n, r) {
                    switch (hF(r || this.locale)(n)) {
                    case We.Zero:
                        return "zero";
                    case We.One:
                        return "one";
                    case We.Two:
                        return "two";
                    case We.Few:
                        return "few";
                    case We.Many:
                        return "many";
                    default:
                        return "other"
                    }
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(Zr))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
          , bO = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({
                providers: [{
                    provide: Xu,
                    useClass: UF
                }]
            }),
            e
        }
        )();
        let MO = (()=>{
            class e {
            }
            return e.\u0275prov = Q({
                token: e,
                providedIn: "root",
                factory: ()=>new SO(N(dt),window)
            }),
            e
        }
        )();
        class SO {
            constructor(t, n) {
                this.document = t,
                this.window = n,
                this.offset = ()=>[0, 0]
            }
            setOffset(t) {
                this.offset = Array.isArray(t) ? ()=>t : t
            }
            getScrollPosition() {
                return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
            }
            scrollToPosition(t) {
                this.supportsScrolling() && this.window.scrollTo(t[0], t[1])
            }
            scrollToAnchor(t) {
                if (!this.supportsScrolling())
                    return;
                const n = function(e, t) {
                    const n = e.getElementById(t) || e.getElementsByName(t)[0];
                    if (n)
                        return n;
                    if ("function" == typeof e.createTreeWalker && e.body && (e.body.createShadowRoot || e.body.attachShadow)) {
                        const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
                        let o = r.currentNode;
                        for (; o; ) {
                            const i = o.shadowRoot;
                            if (i) {
                                const s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
                                if (s)
                                    return s
                            }
                            o = r.nextNode()
                        }
                    }
                    return null
                }(this.document, t);
                n && (this.scrollToElement(n),
                this.attemptFocus(n))
            }
            setHistoryScrollRestoration(t) {
                if (this.supportScrollRestoration()) {
                    const n = this.window.history;
                    n && n.scrollRestoration && (n.scrollRestoration = t)
                }
            }
            scrollToElement(t) {
                const n = t.getBoundingClientRect()
                  , r = n.left + this.window.pageXOffset
                  , o = n.top + this.window.pageYOffset
                  , i = this.offset();
                this.window.scrollTo(r - i[0], o - i[1])
            }
            attemptFocus(t) {
                return t.focus(),
                this.document.activeElement === t
            }
            supportScrollRestoration() {
                try {
                    if (!this.supportsScrolling())
                        return !1;
                    const t = $D(this.window.history) || $D(Object.getPrototypeOf(this.window.history));
                    return !(!t || !t.writable && !t.set)
                } catch (t) {
                    return !1
                }
            }
            supportsScrolling() {
                try {
                    return !!this.window && !!this.window.scrollTo && "pageXOffset"in this.window
                } catch (t) {
                    return !1
                }
            }
        }
        function $D(e) {
            return Object.getOwnPropertyDescriptor(e, "scrollRestoration")
        }
        class Ap extends class extends class {
        }
        {
            constructor() {
                super(...arguments),
                this.supportsDOMEvents = !0
            }
        }
        {
            static makeCurrent() {
                var e;
                e = new Ap,
                $u || ($u = e)
            }
            onAndCancel(t, n, r) {
                return t.addEventListener(n, r, !1),
                ()=>{
                    t.removeEventListener(n, r, !1)
                }
            }
            dispatchEvent(t, n) {
                t.dispatchEvent(n)
            }
            remove(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }
            createElement(t, n) {
                return (n = n || this.getDefaultDocument()).createElement(t)
            }
            createHtmlDocument() {
                return document.implementation.createHTMLDocument("fakeTitle")
            }
            getDefaultDocument() {
                return document
            }
            isElementNode(t) {
                return t.nodeType === Node.ELEMENT_NODE
            }
            isShadowRoot(t) {
                return t instanceof DocumentFragment
            }
            getGlobalEventTarget(t, n) {
                return "window" === n ? window : "document" === n ? t : "body" === n ? t.body : null
            }
            getBaseHref(t) {
                const n = (Pa = Pa || document.querySelector("base"),
                Pa ? Pa.getAttribute("href") : null);
                return null == n ? null : function(e) {
                    ec = ec || document.createElement("a"),
                    ec.setAttribute("href", e);
                    const t = ec.pathname;
                    return "/" === t.charAt(0) ? t : `/${t}`
                }(n)
            }
            resetBaseElement() {
                Pa = null
            }
            getUserAgent() {
                return window.navigator.userAgent
            }
            getCookie(t) {
                return function(e, t) {
                    t = encodeURIComponent(t);
                    for (const n of e.split(";")) {
                        const r = n.indexOf("=")
                          , [o,i] = -1 == r ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
                        if (o.trim() === t)
                            return decodeURIComponent(i)
                    }
                    return null
                }(document.cookie, t)
            }
        }
        let ec, Pa = null;
        const GD = new X("TRANSITION_ID")
          , OO = [{
            provide: ma,
            useFactory: function(e, t, n) {
                return ()=>{
                    n.get(Wi).donePromise.then(()=>{
                        const r = ir()
                          , o = t.querySelectorAll(`style[ng-transition="${e}"]`);
                        for (let i = 0; i < o.length; i++)
                            r.remove(o[i])
                    }
                    )
                }
            },
            deps: [GD, dt, he],
            multi: !0
        }];
        class Ip {
            static init() {
                var e;
                e = new Ip,
                Nh = e
            }
            addToWindow(t) {
                ae.getAngularTestability = (r,o=!0)=>{
                    const i = t.findTestabilityInTree(r, o);
                    if (null == i)
                        throw new Error("Could not find testability for element.");
                    return i
                }
                ,
                ae.getAllAngularTestabilities = ()=>t.getAllTestabilities(),
                ae.getAllAngularRootElements = ()=>t.getAllRootElements(),
                ae.frameworkStabilizers || (ae.frameworkStabilizers = []),
                ae.frameworkStabilizers.push(r=>{
                    const o = ae.getAllAngularTestabilities();
                    let i = o.length
                      , s = !1;
                    const a = function(l) {
                        s = s || l,
                        i--,
                        0 == i && r(s)
                    };
                    o.forEach(function(l) {
                        l.whenStable(a)
                    })
                }
                )
            }
            findTestabilityInTree(t, n, r) {
                if (null == n)
                    return null;
                const o = t.getTestability(n);
                return null != o ? o : r ? ir().isShadowRoot(n) ? this.findTestabilityInTree(t, n.host, !0) : this.findTestabilityInTree(t, n.parentElement, !0) : null
            }
        }
        let kO = (()=>{
            class e {
                build() {
                    return new XMLHttpRequest
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        const Na = new X("EventManagerPlugins");
        let nc = (()=>{
            class e {
                constructor(n, r) {
                    this._zone = r,
                    this._eventNameToPlugin = new Map,
                    n.forEach(o=>o.manager = this),
                    this._plugins = n.slice().reverse()
                }
                addEventListener(n, r, o) {
                    return this._findPluginFor(r).addEventListener(n, r, o)
                }
                addGlobalEventListener(n, r, o) {
                    return this._findPluginFor(r).addGlobalEventListener(n, r, o)
                }
                getZone() {
                    return this._zone
                }
                _findPluginFor(n) {
                    const r = this._eventNameToPlugin.get(n);
                    if (r)
                        return r;
                    const o = this._plugins;
                    for (let i = 0; i < o.length; i++) {
                        const s = o[i];
                        if (s.supports(n))
                            return this._eventNameToPlugin.set(n, s),
                            s
                    }
                    throw new Error(`No event manager plugin found for event ${n}`)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(Na),N(Ge))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        class Mp {
            constructor(t) {
                this._doc = t
            }
            addGlobalEventListener(t, n, r) {
                const o = ir().getGlobalEventTarget(this._doc, t);
                if (!o)
                    throw new Error(`Unsupported event target ${o} for event ${n}`);
                return this.addEventListener(o, n, r)
            }
        }
        let qD = (()=>{
            class e {
                constructor() {
                    this._stylesSet = new Set
                }
                addStyles(n) {
                    const r = new Set;
                    n.forEach(o=>{
                        this._stylesSet.has(o) || (this._stylesSet.add(o),
                        r.add(o))
                    }
                    ),
                    this.onStylesAdded(r)
                }
                onStylesAdded(n) {}
                getAllStyles() {
                    return Array.from(this._stylesSet)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
          , Fa = (()=>{
            class e extends qD {
                constructor(n) {
                    super(),
                    this._doc = n,
                    this._hostNodes = new Map,
                    this._hostNodes.set(n.head, [])
                }
                _addStylesToHost(n, r, o) {
                    n.forEach(i=>{
                        const s = this._doc.createElement("style");
                        s.textContent = i,
                        o.push(r.appendChild(s))
                    }
                    )
                }
                addHost(n) {
                    const r = [];
                    this._addStylesToHost(this._stylesSet, n, r),
                    this._hostNodes.set(n, r)
                }
                removeHost(n) {
                    const r = this._hostNodes.get(n);
                    r && r.forEach(zD),
                    this._hostNodes.delete(n)
                }
                onStylesAdded(n) {
                    this._hostNodes.forEach((r,o)=>{
                        this._addStylesToHost(n, o, r)
                    }
                    )
                }
                ngOnDestroy() {
                    this._hostNodes.forEach(n=>n.forEach(zD))
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(dt))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        function zD(e) {
            ir().remove(e)
        }
        const Sp = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
          , Tp = /%COMP%/g;
        function rc(e, t, n) {
            for (let r = 0; r < t.length; r++) {
                let o = t[r];
                Array.isArray(o) ? rc(e, o, n) : (o = o.replace(Tp, e),
                n.push(o))
            }
            return n
        }
        function YD(e) {
            return t=>{
                if ("__ngUnwrap__" === t)
                    return e;
                !1 === e(t) && (t.preventDefault(),
                t.returnValue = !1)
            }
        }
        let xp = (()=>{
            class e {
                constructor(n, r, o) {
                    this.eventManager = n,
                    this.sharedStylesHost = r,
                    this.appId = o,
                    this.rendererByCompId = new Map,
                    this.defaultRenderer = new Rp(n)
                }
                createRenderer(n, r) {
                    if (!n || !r)
                        return this.defaultRenderer;
                    switch (r.encapsulation) {
                    case Et.Emulated:
                        {
                            let o = this.rendererByCompId.get(r.id);
                            return o || (o = new ZO(this.eventManager,this.sharedStylesHost,r,this.appId),
                            this.rendererByCompId.set(r.id, o)),
                            o.applyToHost(n),
                            o
                        }
                    case 1:
                    case Et.ShadowDom:
                        return new JO(this.eventManager,this.sharedStylesHost,n,r);
                    default:
                        if (!this.rendererByCompId.has(r.id)) {
                            const o = rc(r.id, r.styles, []);
                            this.sharedStylesHost.addStyles(o),
                            this.rendererByCompId.set(r.id, this.defaultRenderer)
                        }
                        return this.defaultRenderer
                    }
                }
                begin() {}
                end() {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(nc),N(Fa),N(ya))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        class Rp {
            constructor(t) {
                this.eventManager = t,
                this.data = Object.create(null),
                this.destroyNode = null
            }
            destroy() {}
            createElement(t, n) {
                return n ? document.createElementNS(Sp[n] || n, t) : document.createElement(t)
            }
            createComment(t) {
                return document.createComment(t)
            }
            createText(t) {
                return document.createTextNode(t)
            }
            appendChild(t, n) {
                t.appendChild(n)
            }
            insertBefore(t, n, r) {
                t && t.insertBefore(n, r)
            }
            removeChild(t, n) {
                t && t.removeChild(n)
            }
            selectRootElement(t, n) {
                let r = "string" == typeof t ? document.querySelector(t) : t;
                if (!r)
                    throw new Error(`The selector "${t}" did not match any elements`);
                return n || (r.textContent = ""),
                r
            }
            parentNode(t) {
                return t.parentNode
            }
            nextSibling(t) {
                return t.nextSibling
            }
            setAttribute(t, n, r, o) {
                if (o) {
                    n = o + ":" + n;
                    const i = Sp[o];
                    i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r)
                } else
                    t.setAttribute(n, r)
            }
            removeAttribute(t, n, r) {
                if (r) {
                    const o = Sp[r];
                    o ? t.removeAttributeNS(o, n) : t.removeAttribute(`${r}:${n}`)
                } else
                    t.removeAttribute(n)
            }
            addClass(t, n) {
                t.classList.add(n)
            }
            removeClass(t, n) {
                t.classList.remove(n)
            }
            setStyle(t, n, r, o) {
                o & (en.DashCase | en.Important) ? t.style.setProperty(n, r, o & en.Important ? "important" : "") : t.style[n] = r
            }
            removeStyle(t, n, r) {
                r & en.DashCase ? t.style.removeProperty(n) : t.style[n] = ""
            }
            setProperty(t, n, r) {
                t[n] = r
            }
            setValue(t, n) {
                t.nodeValue = n
            }
            listen(t, n, r) {
                return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, n, YD(r)) : this.eventManager.addEventListener(t, n, YD(r))
            }
        }
        class ZO extends Rp {
            constructor(t, n, r, o) {
                super(t),
                this.component = r;
                const i = rc(o + "-" + r.id, r.styles, []);
                n.addStyles(i),
                this.contentAttr = "_ngcontent-%COMP%".replace(Tp, o + "-" + r.id),
                this.hostAttr = "_nghost-%COMP%".replace(Tp, o + "-" + r.id)
            }
            applyToHost(t) {
                super.setAttribute(t, this.hostAttr, "")
            }
            createElement(t, n) {
                const r = super.createElement(t, n);
                return super.setAttribute(r, this.contentAttr, ""),
                r
            }
        }
        class JO extends Rp {
            constructor(t, n, r, o) {
                super(t),
                this.sharedStylesHost = n,
                this.hostEl = r,
                this.shadowRoot = r.attachShadow({
                    mode: "open"
                }),
                this.sharedStylesHost.addHost(this.shadowRoot);
                const i = rc(o.id, o.styles, []);
                for (let s = 0; s < i.length; s++) {
                    const a = document.createElement("style");
                    a.textContent = i[s],
                    this.shadowRoot.appendChild(a)
                }
            }
            nodeOrShadowRoot(t) {
                return t === this.hostEl ? this.shadowRoot : t
            }
            destroy() {
                this.sharedStylesHost.removeHost(this.shadowRoot)
            }
            appendChild(t, n) {
                return super.appendChild(this.nodeOrShadowRoot(t), n)
            }
            insertBefore(t, n, r) {
                return super.insertBefore(this.nodeOrShadowRoot(t), n, r)
            }
            removeChild(t, n) {
                return super.removeChild(this.nodeOrShadowRoot(t), n)
            }
            parentNode(t) {
                return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
            }
        }
        let XO = (()=>{
            class e extends Mp {
                constructor(n) {
                    super(n)
                }
                supports(n) {
                    return !0
                }
                addEventListener(n, r, o) {
                    return n.addEventListener(r, o, !1),
                    ()=>this.removeEventListener(n, r, o)
                }
                removeEventListener(n, r, o) {
                    return n.removeEventListener(r, o)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(dt))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        const XD = ["alt", "control", "meta", "shift"]
          , sk = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }
          , eb = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        }
          , ak = {
            alt: e=>e.altKey,
            control: e=>e.ctrlKey,
            meta: e=>e.metaKey,
            shift: e=>e.shiftKey
        };
        let lk = (()=>{
            class e extends Mp {
                constructor(n) {
                    super(n)
                }
                supports(n) {
                    return null != e.parseEventName(n)
                }
                addEventListener(n, r, o) {
                    const i = e.parseEventName(r)
                      , s = e.eventCallback(i.fullKey, o, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(()=>ir().onAndCancel(n, i.domEventName, s))
                }
                static parseEventName(n) {
                    const r = n.toLowerCase().split(".")
                      , o = r.shift();
                    if (0 === r.length || "keydown" !== o && "keyup" !== o)
                        return null;
                    const i = e._normalizeKey(r.pop());
                    let s = "";
                    if (XD.forEach(l=>{
                        const u = r.indexOf(l);
                        u > -1 && (r.splice(u, 1),
                        s += l + ".")
                    }
                    ),
                    s += i,
                    0 != r.length || 0 === i.length)
                        return null;
                    const a = {};
                    return a.domEventName = o,
                    a.fullKey = s,
                    a
                }
                static getEventFullKey(n) {
                    let r = ""
                      , o = function(e) {
                        let t = e.key;
                        if (null == t) {
                            if (t = e.keyIdentifier,
                            null == t)
                                return "Unidentified";
                            t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)),
                            3 === e.location && eb.hasOwnProperty(t) && (t = eb[t]))
                        }
                        return sk[t] || t
                    }(n);
                    return o = o.toLowerCase(),
                    " " === o ? o = "space" : "." === o && (o = "dot"),
                    XD.forEach(i=>{
                        i != o && ak[i](n) && (r += i + ".")
                    }
                    ),
                    r += o,
                    r
                }
                static eventCallback(n, r, o) {
                    return i=>{
                        e.getEventFullKey(i) === n && o.runGuarded(()=>r(i))
                    }
                }
                static _normalizeKey(n) {
                    return "esc" === n ? "escape" : n
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(dt))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        const mk = Iv(eP, "browser", [{
            provide: Mh,
            useValue: "browser"
        }, {
            provide: pv,
            useValue: function() {
                Ap.makeCurrent(),
                Ip.init()
            },
            multi: !0
        }, {
            provide: dt,
            useFactory: function() {
                return e = document,
                wd = e,
                document;
                var e
            },
            deps: []
        }])
          , yk = [[], {
            provide: ea,
            useValue: "root"
        }, {
            provide: Mo,
            useFactory: function() {
                return new Mo
            },
            deps: []
        }, {
            provide: Na,
            useClass: XO,
            multi: !0,
            deps: [dt, Ge, Mh]
        }, {
            provide: Na,
            useClass: lk,
            multi: !0,
            deps: [dt]
        }, [], {
            provide: xp,
            useClass: xp,
            deps: [nc, Fa, ya]
        }, {
            provide: Du,
            useExisting: xp
        }, {
            provide: qD,
            useExisting: Fa
        }, {
            provide: Fa,
            useClass: Fa,
            deps: [dt]
        }, {
            provide: Ph,
            useClass: Ph,
            deps: [Ge]
        }, {
            provide: nc,
            useClass: nc,
            deps: [Na, Ge]
        }, {
            provide: class {
            }
            ,
            useClass: kO,
            deps: []
        }, []];
        let _k = (()=>{
            class e {
                constructor(n) {
                    if (n)
                        throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }
                static withServerTransition(n) {
                    return {
                        ngModule: e,
                        providers: [{
                            provide: ya,
                            useValue: n.appId
                        }, {
                            provide: GD,
                            useExisting: ya
                        }, OO]
                    }
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(e, 12))
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({
                providers: yk,
                imports: [bO, aP]
            }),
            e
        }
        )();
        function J(...e) {
            return Be(e, fr(e))
        }
        "undefined" != typeof window && window;
        class Bn extends Ot {
            constructor(t) {
                super(),
                this._value = t
            }
            get value() {
                return this.getValue()
            }
            _subscribe(t) {
                const n = super._subscribe(t);
                return !n.closed && t.next(this._value),
                n
            }
            getValue() {
                const {hasError: t, thrownError: n, _value: r} = this;
                if (t)
                    throw n;
                return this._throwIfClosed(),
                r
            }
            next(t) {
                super.next(this._value = t)
            }
        }
        const {isArray: Ik} = Array
          , {getPrototypeOf: Mk, prototype: Sk, keys: Tk} = Object;
        function nb(e) {
            if (1 === e.length) {
                const t = e[0];
                if (Ik(t))
                    return {
                        args: t,
                        keys: null
                    };
                if (function(e) {
                    return e && "object" == typeof e && Mk(e) === Sk
                }(t)) {
                    const n = Tk(t);
                    return {
                        args: n.map(r=>t[r]),
                        keys: n
                    }
                }
            }
            return {
                args: e,
                keys: null
            }
        }
        const {isArray: Rk} = Array;
        function rb(e) {
            return ce(t=>function(e, t) {
                return Rk(t) ? e(...t) : e(t)
            }(e, t))
        }
        function ob(e, t) {
            return e.reduce((n,r,o)=>(n[r] = t[o],
            n), {})
        }
        function ib(e, t, n) {
            e ? vn(n, e, t) : t()
        }
        const oc = Gt(e=>function() {
            e(this),
            this.name = "EmptyError",
            this.message = "no elements in sequence"
        }
        );
        function kp(...e) {
            return U(1)(Be(e, fr(e)))
        }
        function sb(e) {
            return new oe(t=>{
                sn(e()).subscribe(t)
            }
            )
        }
        function ab() {
            return Fe((e,t)=>{
                let n = null;
                e._refCount++;
                const r = new Ve(t,void 0,void 0,void 0,()=>{
                    if (!e || e._refCount <= 0 || 0 < --e._refCount)
                        return void (n = null);
                    const o = e._connection
                      , i = n;
                    n = null,
                    o && (!i || o === i) && o.unsubscribe(),
                    t.unsubscribe()
                }
                );
                e.subscribe(r),
                r.closed || (n = e.connect())
            }
            )
        }
        class kk extends oe {
            constructor(t, n) {
                super(),
                this.source = t,
                this.subjectFactory = n,
                this._subject = null,
                this._refCount = 0,
                this._connection = null,
                uo(t) && (this.lift = t.lift)
            }
            _subscribe(t) {
                return this.getSubject().subscribe(t)
            }
            getSubject() {
                const t = this._subject;
                return (!t || t.isStopped) && (this._subject = this.subjectFactory()),
                this._subject
            }
            _teardown() {
                this._refCount = 0;
                const {_connection: t} = this;
                this._subject = this._connection = null,
                null == t || t.unsubscribe()
            }
            connect() {
                let t = this._connection;
                if (!t) {
                    t = this._connection = new Ie;
                    const n = this.getSubject();
                    t.add(this.source.subscribe(new Ve(n,void 0,()=>{
                        this._teardown(),
                        n.complete()
                    }
                    ,r=>{
                        this._teardown(),
                        n.error(r)
                    }
                    ,()=>this._teardown()))),
                    t.closed && (this._connection = null,
                    t = Ie.EMPTY)
                }
                return t
            }
            refCount() {
                return ab()(this)
            }
        }
        function Vo(e, t) {
            return Fe((n,r)=>{
                let o = null
                  , i = 0
                  , s = !1;
                const a = ()=>s && !o && r.complete();
                n.subscribe(new Ve(r,l=>{
                    null == o || o.unsubscribe();
                    let u = 0;
                    const f = i++;
                    sn(e(l, f)).subscribe(o = new Ve(r,h=>r.next(t ? t(l, h, f, u++) : h),()=>{
                        o = null,
                        a()
                    }
                    ))
                }
                ,()=>{
                    s = !0,
                    a()
                }
                ))
            }
            )
        }
        function Lk(e, t, n, r, o) {
            return (i,s)=>{
                let a = n
                  , l = t
                  , u = 0;
                i.subscribe(new Ve(s,f=>{
                    const h = u++;
                    l = a ? e(l, f, h) : (a = !0,
                    f),
                    r && s.next(l)
                }
                ,o && (()=>{
                    a && s.next(l),
                    s.complete()
                }
                )))
            }
        }
        function lb(e, t) {
            return Fe(Lk(e, t, arguments.length >= 2, !0))
        }
        function es(e, t) {
            return Fe((n,r)=>{
                let o = 0;
                n.subscribe(new Ve(r,i=>e.call(t, i, o++) && r.next(i)))
            }
            )
        }
        function to(e) {
            return Fe((t,n)=>{
                let i, r = null, o = !1;
                r = t.subscribe(new Ve(n,void 0,void 0,s=>{
                    i = sn(e(s, to(e)(t))),
                    r ? (r.unsubscribe(),
                    r = null,
                    i.subscribe(n)) : o = !0
                }
                )),
                o && (r.unsubscribe(),
                r = null,
                i.subscribe(n))
            }
            )
        }
        function Oa(e, t) {
            return ie(t) ? Le(e, t, 1) : Le(e, 1)
        }
        function Vp(e) {
            return e <= 0 ? ()=>Dn : Fe((t,n)=>{
                let r = [];
                t.subscribe(new Ve(n,o=>{
                    r.push(o),
                    e < r.length && r.shift()
                }
                ,()=>{
                    for (const o of r)
                        n.next(o);
                    n.complete()
                }
                ,void 0,()=>{
                    r = null
                }
                ))
            }
            )
        }
        function ub(e=Bk) {
            return Fe((t,n)=>{
                let r = !1;
                t.subscribe(new Ve(n,o=>{
                    r = !0,
                    n.next(o)
                }
                ,()=>r ? n.complete() : n.error(e())))
            }
            )
        }
        function Bk() {
            return new oc
        }
        function cb(e) {
            return Fe((t,n)=>{
                let r = !1;
                t.subscribe(new Ve(n,o=>{
                    r = !0,
                    n.next(o)
                }
                ,()=>{
                    r || n.next(e),
                    n.complete()
                }
                ))
            }
            )
        }
        function ts(e, t) {
            const n = arguments.length >= 2;
            return r=>r.pipe(e ? es((o,i)=>e(o, i, r)) : Hn, Yo(1), n ? cb(t) : ub(()=>new oc))
        }
        function nn(e, t, n) {
            const r = ie(e) || t || n ? {
                next: e,
                error: t,
                complete: n
            } : e;
            return r ? Fe((o,i)=>{
                var s;
                null === (s = r.subscribe) || void 0 === s || s.call(r);
                let a = !0;
                o.subscribe(new Ve(i,l=>{
                    var u;
                    null === (u = r.next) || void 0 === u || u.call(r, l),
                    i.next(l)
                }
                ,()=>{
                    var l;
                    a = !1,
                    null === (l = r.complete) || void 0 === l || l.call(r),
                    i.complete()
                }
                ,l=>{
                    var u;
                    a = !1,
                    null === (u = r.error) || void 0 === u || u.call(r, l),
                    i.error(l)
                }
                ,()=>{
                    var l, u;
                    a && (null === (l = r.unsubscribe) || void 0 === l || l.call(r)),
                    null === (u = r.finalize) || void 0 === u || u.call(r)
                }
                ))
            }
            ) : Hn
        }
        class Rr {
            constructor(t, n) {
                this.id = t,
                this.url = n
            }
        }
        class Lp extends Rr {
            constructor(t, n, r="imperative", o=null) {
                super(t, n),
                this.navigationTrigger = r,
                this.restoredState = o
            }
            toString() {
                return `NavigationStart(id: ${this.id}, url: '${this.url}')`
            }
        }
        class ka extends Rr {
            constructor(t, n, r) {
                super(t, n),
                this.urlAfterRedirects = r
            }
            toString() {
                return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
            }
        }
        class db extends Rr {
            constructor(t, n, r) {
                super(t, n),
                this.reason = r
            }
            toString() {
                return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
            }
        }
        class Uk extends Rr {
            constructor(t, n, r) {
                super(t, n),
                this.error = r
            }
            toString() {
                return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
            }
        }
        class $k extends Rr {
            constructor(t, n, r, o) {
                super(t, n),
                this.urlAfterRedirects = r,
                this.state = o
            }
            toString() {
                return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class Gk extends Rr {
            constructor(t, n, r, o) {
                super(t, n),
                this.urlAfterRedirects = r,
                this.state = o
            }
            toString() {
                return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class Wk extends Rr {
            constructor(t, n, r, o, i) {
                super(t, n),
                this.urlAfterRedirects = r,
                this.state = o,
                this.shouldActivate = i
            }
            toString() {
                return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
            }
        }
        class qk extends Rr {
            constructor(t, n, r, o) {
                super(t, n),
                this.urlAfterRedirects = r,
                this.state = o
            }
            toString() {
                return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class zk extends Rr {
            constructor(t, n, r, o) {
                super(t, n),
                this.urlAfterRedirects = r,
                this.state = o
            }
            toString() {
                return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class fb {
            constructor(t) {
                this.route = t
            }
            toString() {
                return `RouteConfigLoadStart(path: ${this.route.path})`
            }
        }
        class hb {
            constructor(t) {
                this.route = t
            }
            toString() {
                return `RouteConfigLoadEnd(path: ${this.route.path})`
            }
        }
        class Qk {
            constructor(t) {
                this.snapshot = t
            }
            toString() {
                return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class Kk {
            constructor(t) {
                this.snapshot = t
            }
            toString() {
                return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class Yk {
            constructor(t) {
                this.snapshot = t
            }
            toString() {
                return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class Zk {
            constructor(t) {
                this.snapshot = t
            }
            toString() {
                return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class pb {
            constructor(t, n, r) {
                this.routerEvent = t,
                this.position = n,
                this.anchor = r
            }
            toString() {
                return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`
            }
        }
        const ee = "primary";
        class Jk {
            constructor(t) {
                this.params = t || {}
            }
            has(t) {
                return Object.prototype.hasOwnProperty.call(this.params, t)
            }
            get(t) {
                if (this.has(t)) {
                    const n = this.params[t];
                    return Array.isArray(n) ? n[0] : n
                }
                return null
            }
            getAll(t) {
                if (this.has(t)) {
                    const n = this.params[t];
                    return Array.isArray(n) ? n : [n]
                }
                return []
            }
            get keys() {
                return Object.keys(this.params)
            }
        }
        function ns(e) {
            return new Jk(e)
        }
        const gb = "ngNavigationCancelingError";
        function Bp(e) {
            const t = Error("NavigationCancelingError: " + e);
            return t[gb] = !0,
            t
        }
        function e2(e, t, n) {
            const r = n.path.split("/");
            if (r.length > e.length || "full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
                return null;
            const o = {};
            for (let i = 0; i < r.length; i++) {
                const s = r[i]
                  , a = e[i];
                if (s.startsWith(":"))
                    o[s.substring(1)] = a;
                else if (s !== a.path)
                    return null
            }
            return {
                consumed: e.slice(0, r.length),
                posParams: o
            }
        }
        function sr(e, t) {
            const n = e ? Object.keys(e) : void 0
              , r = t ? Object.keys(t) : void 0;
            if (!n || !r || n.length != r.length)
                return !1;
            let o;
            for (let i = 0; i < n.length; i++)
                if (o = n[i],
                !mb(e[o], t[o]))
                    return !1;
            return !0
        }
        function mb(e, t) {
            if (Array.isArray(e) && Array.isArray(t)) {
                if (e.length !== t.length)
                    return !1;
                const n = [...e].sort()
                  , r = [...t].sort();
                return n.every((o,i)=>r[i] === o)
            }
            return e === t
        }
        function yb(e) {
            return Array.prototype.concat.apply([], e)
        }
        function _b(e) {
            return e.length > 0 ? e[e.length - 1] : null
        }
        function ft(e, t) {
            for (const n in e)
                e.hasOwnProperty(n) && t(e[n], n)
        }
        function ar(e) {
            return hu(e) ? e : ia(e) ? Be(Promise.resolve(e)) : J(e)
        }
        const r2 = {
            exact: function vb(e, t, n) {
                if (!Bo(e.segments, t.segments) || !ic(e.segments, t.segments, n) || e.numberOfChildren !== t.numberOfChildren)
                    return !1;
                for (const r in t.children)
                    if (!e.children[r] || !vb(e.children[r], t.children[r], n))
                        return !1;
                return !0
            },
            subset: Db
        }
          , wb = {
            exact: function(e, t) {
                return sr(e, t)
            },
            subset: function(e, t) {
                return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every(n=>mb(e[n], t[n]))
            },
            ignored: ()=>!0
        };
        function Cb(e, t, n) {
            return r2[n.paths](e.root, t.root, n.matrixParams) && wb[n.queryParams](e.queryParams, t.queryParams) && !("exact" === n.fragment && e.fragment !== t.fragment)
        }
        function Db(e, t, n) {
            return bb(e, t, t.segments, n)
        }
        function bb(e, t, n, r) {
            if (e.segments.length > n.length) {
                const o = e.segments.slice(0, n.length);
                return !(!Bo(o, n) || t.hasChildren() || !ic(o, n, r))
            }
            if (e.segments.length === n.length) {
                if (!Bo(e.segments, n) || !ic(e.segments, n, r))
                    return !1;
                for (const o in t.children)
                    if (!e.children[o] || !Db(e.children[o], t.children[o], r))
                        return !1;
                return !0
            }
            {
                const o = n.slice(0, e.segments.length)
                  , i = n.slice(e.segments.length);
                return !!(Bo(e.segments, o) && ic(e.segments, o, r) && e.children[ee]) && bb(e.children[ee], t, i, r)
            }
        }
        function ic(e, t, n) {
            return t.every((r,o)=>wb[n](e[o].parameters, r.parameters))
        }
        class Lo {
            constructor(t, n, r) {
                this.root = t,
                this.queryParams = n,
                this.fragment = r
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = ns(this.queryParams)),
                this._queryParamMap
            }
            toString() {
                return l2.serialize(this)
            }
        }
        class re {
            constructor(t, n) {
                this.segments = t,
                this.children = n,
                this.parent = null,
                ft(n, (r,o)=>r.parent = this)
            }
            hasChildren() {
                return this.numberOfChildren > 0
            }
            get numberOfChildren() {
                return Object.keys(this.children).length
            }
            toString() {
                return sc(this)
            }
        }
        class Va {
            constructor(t, n) {
                this.path = t,
                this.parameters = n
            }
            get parameterMap() {
                return this._parameterMap || (this._parameterMap = ns(this.parameters)),
                this._parameterMap
            }
            toString() {
                return Sb(this)
            }
        }
        function Bo(e, t) {
            return e.length === t.length && e.every((n,r)=>n.path === t[r].path)
        }
        class Eb {
        }
        class Ab {
            parse(t) {
                const n = new y2(t);
                return new Lo(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())
            }
            serialize(t) {
                const n = `/${La(t.root, !0)}`
                  , r = function(e) {
                    const t = Object.keys(e).map(n=>{
                        const r = e[n];
                        return Array.isArray(r) ? r.map(o=>`${ac(n)}=${ac(o)}`).join("&") : `${ac(n)}=${ac(r)}`
                    }
                    ).filter(n=>!!n);
                    return t.length ? `?${t.join("&")}` : ""
                }(t.queryParams);
                var e;
                return `${n}${r}${"string" == typeof t.fragment ? `#${e = t.fragment,
                encodeURI(e)}` : ""}`
            }
        }
        const l2 = new Ab;
        function sc(e) {
            return e.segments.map(t=>Sb(t)).join("/")
        }
        function La(e, t) {
            if (!e.hasChildren())
                return sc(e);
            if (t) {
                const n = e.children[ee] ? La(e.children[ee], !1) : ""
                  , r = [];
                return ft(e.children, (o,i)=>{
                    i !== ee && r.push(`${i}:${La(o, !1)}`)
                }
                ),
                r.length > 0 ? `${n}(${r.join("//")})` : n
            }
            {
                const n = function(e, t) {
                    let n = [];
                    return ft(e.children, (r,o)=>{
                        o === ee && (n = n.concat(t(r, o)))
                    }
                    ),
                    ft(e.children, (r,o)=>{
                        o !== ee && (n = n.concat(t(r, o)))
                    }
                    ),
                    n
                }(e, (r,o)=>o === ee ? [La(e.children[ee], !1)] : [`${o}:${La(r, !1)}`]);
                return 1 === Object.keys(e.children).length && null != e.children[ee] ? `${sc(e)}/${n[0]}` : `${sc(e)}/(${n.join("//")})`
            }
        }
        function Ib(e) {
            return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }
        function ac(e) {
            return Ib(e).replace(/%3B/gi, ";")
        }
        function jp(e) {
            return Ib(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }
        function lc(e) {
            return decodeURIComponent(e)
        }
        function Mb(e) {
            return lc(e.replace(/\+/g, "%20"))
        }
        function Sb(e) {
            return `${jp(e.path)}${function(e) {
                return Object.keys(e).map(t=>`;${jp(t)}=${jp(e[t])}`).join("")
            }(e.parameters)}`
        }
        const f2 = /^[^\/()?;=#]+/;
        function uc(e) {
            const t = e.match(f2);
            return t ? t[0] : ""
        }
        const h2 = /^[^=?&#]+/
          , g2 = /^[^&#]+/;
        class y2 {
            constructor(t) {
                this.url = t,
                this.remaining = t
            }
            parseRootSegment() {
                return this.consumeOptional("/"),
                "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new re([],{}) : new re([],this.parseChildren())
            }
            parseQueryParams() {
                const t = {};
                if (this.consumeOptional("?"))
                    do {
                        this.parseQueryParam(t)
                    } while (this.consumeOptional("&"));
                return t
            }
            parseFragment() {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }
            parseChildren() {
                if ("" === this.remaining)
                    return {};
                this.consumeOptional("/");
                const t = [];
                for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); )
                    this.capture("/"),
                    t.push(this.parseSegment());
                let n = {};
                this.peekStartsWith("/(") && (this.capture("/"),
                n = this.parseParens(!0));
                let r = {};
                return this.peekStartsWith("(") && (r = this.parseParens(!1)),
                (t.length > 0 || Object.keys(n).length > 0) && (r[ee] = new re(t,n)),
                r
            }
            parseSegment() {
                const t = uc(this.remaining);
                if ("" === t && this.peekStartsWith(";"))
                    throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
                return this.capture(t),
                new Va(lc(t),this.parseMatrixParams())
            }
            parseMatrixParams() {
                const t = {};
                for (; this.consumeOptional(";"); )
                    this.parseParam(t);
                return t
            }
            parseParam(t) {
                const n = uc(this.remaining);
                if (!n)
                    return;
                this.capture(n);
                let r = "";
                if (this.consumeOptional("=")) {
                    const o = uc(this.remaining);
                    o && (r = o,
                    this.capture(r))
                }
                t[lc(n)] = lc(r)
            }
            parseQueryParam(t) {
                const n = function(e) {
                    const t = e.match(h2);
                    return t ? t[0] : ""
                }(this.remaining);
                if (!n)
                    return;
                this.capture(n);
                let r = "";
                if (this.consumeOptional("=")) {
                    const s = function(e) {
                        const t = e.match(g2);
                        return t ? t[0] : ""
                    }(this.remaining);
                    s && (r = s,
                    this.capture(r))
                }
                const o = Mb(n)
                  , i = Mb(r);
                if (t.hasOwnProperty(o)) {
                    let s = t[o];
                    Array.isArray(s) || (s = [s],
                    t[o] = s),
                    s.push(i)
                } else
                    t[o] = i
            }
            parseParens(t) {
                const n = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
                    const r = uc(this.remaining)
                      , o = this.remaining[r.length];
                    if ("/" !== o && ")" !== o && ";" !== o)
                        throw new Error(`Cannot parse url '${this.url}'`);
                    let i;
                    r.indexOf(":") > -1 ? (i = r.substr(0, r.indexOf(":")),
                    this.capture(i),
                    this.capture(":")) : t && (i = ee);
                    const s = this.parseChildren();
                    n[i] = 1 === Object.keys(s).length ? s[ee] : new re([],s),
                    this.consumeOptional("//")
                }
                return n
            }
            peekStartsWith(t) {
                return this.remaining.startsWith(t)
            }
            consumeOptional(t) {
                return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length),
                !0)
            }
            capture(t) {
                if (!this.consumeOptional(t))
                    throw new Error(`Expected "${t}".`)
            }
        }
        class Tb {
            constructor(t) {
                this._root = t
            }
            get root() {
                return this._root.value
            }
            parent(t) {
                const n = this.pathFromRoot(t);
                return n.length > 1 ? n[n.length - 2] : null
            }
            children(t) {
                const n = Hp(t, this._root);
                return n ? n.children.map(r=>r.value) : []
            }
            firstChild(t) {
                const n = Hp(t, this._root);
                return n && n.children.length > 0 ? n.children[0].value : null
            }
            siblings(t) {
                const n = Up(t, this._root);
                return n.length < 2 ? [] : n[n.length - 2].children.map(o=>o.value).filter(o=>o !== t)
            }
            pathFromRoot(t) {
                return Up(t, this._root).map(n=>n.value)
            }
        }
        function Hp(e, t) {
            if (e === t.value)
                return t;
            for (const n of t.children) {
                const r = Hp(e, n);
                if (r)
                    return r
            }
            return null
        }
        function Up(e, t) {
            if (e === t.value)
                return [t];
            for (const n of t.children) {
                const r = Up(e, n);
                if (r.length)
                    return r.unshift(t),
                    r
            }
            return []
        }
        class Pr {
            constructor(t, n) {
                this.value = t,
                this.children = n
            }
            toString() {
                return `TreeNode(${this.value})`
            }
        }
        function rs(e) {
            const t = {};
            return e && e.children.forEach(n=>t[n.value.outlet] = n),
            t
        }
        class xb extends Tb {
            constructor(t, n) {
                super(t),
                this.snapshot = n,
                $p(this, t)
            }
            toString() {
                return this.snapshot.toString()
            }
        }
        function Rb(e, t) {
            const n = function(e, t) {
                const s = new cc([],{},{},"",{},ee,t,null,e.root,-1,{});
                return new Nb("",new Pr(s,[]))
            }(e, t)
              , r = new Bn([new Va("",{})])
              , o = new Bn({})
              , i = new Bn({})
              , s = new Bn({})
              , a = new Bn("")
              , l = new os(r,o,s,a,i,ee,t,n.root);
            return l.snapshot = n.root,
            new xb(new Pr(l,[]),n)
        }
        class os {
            constructor(t, n, r, o, i, s, a, l) {
                this.url = t,
                this.params = n,
                this.queryParams = r,
                this.fragment = o,
                this.data = i,
                this.outlet = s,
                this.component = a,
                this._futureSnapshot = l
            }
            get routeConfig() {
                return this._futureSnapshot.routeConfig
            }
            get root() {
                return this._routerState.root
            }
            get parent() {
                return this._routerState.parent(this)
            }
            get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
            get paramMap() {
                return this._paramMap || (this._paramMap = this.params.pipe(ce(t=>ns(t)))),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(ce(t=>ns(t)))),
                this._queryParamMap
            }
            toString() {
                return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
            }
        }
        function Pb(e, t="emptyOnly") {
            const n = e.pathFromRoot;
            let r = 0;
            if ("always" !== t)
                for (r = n.length - 1; r >= 1; ) {
                    const o = n[r]
                      , i = n[r - 1];
                    if (o.routeConfig && "" === o.routeConfig.path)
                        r--;
                    else {
                        if (i.component)
                            break;
                        r--
                    }
                }
            return function(e) {
                return e.reduce((t,n)=>({
                    params: F(F({}, t.params), n.params),
                    data: F(F({}, t.data), n.data),
                    resolve: F(F({}, t.resolve), n._resolvedData)
                }), {
                    params: {},
                    data: {},
                    resolve: {}
                })
            }(n.slice(r))
        }
        class cc {
            constructor(t, n, r, o, i, s, a, l, u, f, h) {
                this.url = t,
                this.params = n,
                this.queryParams = r,
                this.fragment = o,
                this.data = i,
                this.outlet = s,
                this.component = a,
                this.routeConfig = l,
                this._urlSegment = u,
                this._lastPathIndex = f,
                this._resolve = h
            }
            get root() {
                return this._routerState.root
            }
            get parent() {
                return this._routerState.parent(this)
            }
            get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
            get paramMap() {
                return this._paramMap || (this._paramMap = ns(this.params)),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = ns(this.queryParams)),
                this._queryParamMap
            }
            toString() {
                return `Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`
            }
        }
        class Nb extends Tb {
            constructor(t, n) {
                super(n),
                this.url = t,
                $p(this, n)
            }
            toString() {
                return Fb(this._root)
            }
        }
        function $p(e, t) {
            t.value._routerState = e,
            t.children.forEach(n=>$p(e, n))
        }
        function Fb(e) {
            const t = e.children.length > 0 ? ` { ${e.children.map(Fb).join(", ")} } ` : "";
            return `${e.value}${t}`
        }
        function Gp(e) {
            if (e.snapshot) {
                const t = e.snapshot
                  , n = e._futureSnapshot;
                e.snapshot = n,
                sr(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams),
                t.fragment !== n.fragment && e.fragment.next(n.fragment),
                sr(t.params, n.params) || e.params.next(n.params),
                function(e, t) {
                    if (e.length !== t.length)
                        return !1;
                    for (let n = 0; n < e.length; ++n)
                        if (!sr(e[n], t[n]))
                            return !1;
                    return !0
                }(t.url, n.url) || e.url.next(n.url),
                sr(t.data, n.data) || e.data.next(n.data)
            } else
                e.snapshot = e._futureSnapshot,
                e.data.next(e._futureSnapshot.data)
        }
        function Wp(e, t) {
            const n = sr(e.params, t.params) && function(e, t) {
                return Bo(e, t) && e.every((n,r)=>sr(n.parameters, t[r].parameters))
            }(e.url, t.url);
            return n && !(!e.parent != !t.parent) && (!e.parent || Wp(e.parent, t.parent))
        }
        function Ba(e, t, n) {
            if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
                const r = n.value;
                r._futureSnapshot = t.value;
                const o = function(e, t, n) {
                    return t.children.map(r=>{
                        for (const o of n.children)
                            if (e.shouldReuseRoute(r.value, o.value.snapshot))
                                return Ba(e, r, o);
                        return Ba(e, r)
                    }
                    )
                }(e, t, n);
                return new Pr(r,o)
            }
            {
                if (e.shouldAttach(t.value)) {
                    const i = e.retrieve(t.value);
                    if (null !== i) {
                        const s = i.route;
                        return s.value._futureSnapshot = t.value,
                        s.children = t.children.map(a=>Ba(e, a)),
                        s
                    }
                }
                const r = function(e) {
                    return new os(new Bn(e.url),new Bn(e.params),new Bn(e.queryParams),new Bn(e.fragment),new Bn(e.data),e.outlet,e.component,e)
                }(t.value)
                  , o = t.children.map(i=>Ba(e, i));
                return new Pr(r,o)
            }
        }
        function dc(e) {
            return "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        }
        function ja(e) {
            return "object" == typeof e && null != e && e.outlets
        }
        function qp(e, t, n, r, o) {
            let i = {};
            return r && ft(r, (s,a)=>{
                i[a] = Array.isArray(s) ? s.map(l=>`${l}`) : `${s}`
            }
            ),
            new Lo(n.root === e ? t : Ob(n.root, e, t),i,o)
        }
        function Ob(e, t, n) {
            const r = {};
            return ft(e.children, (o,i)=>{
                r[i] = o === t ? n : Ob(o, t, n)
            }
            ),
            new re(e.segments,r)
        }
        class kb {
            constructor(t, n, r) {
                if (this.isAbsolute = t,
                this.numberOfDoubleDots = n,
                this.commands = r,
                t && r.length > 0 && dc(r[0]))
                    throw new Error("Root segment cannot have matrix parameters");
                const o = r.find(ja);
                if (o && o !== _b(r))
                    throw new Error("{outlets:{}} has to be the last command")
            }
            toRoot() {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }
        }
        class zp {
            constructor(t, n, r) {
                this.segmentGroup = t,
                this.processChildren = n,
                this.index = r
            }
        }
        function Vb(e, t, n) {
            if (e || (e = new re([],{})),
            0 === e.segments.length && e.hasChildren())
                return fc(e, t, n);
            const r = function(e, t, n) {
                let r = 0
                  , o = t;
                const i = {
                    match: !1,
                    pathIndex: 0,
                    commandIndex: 0
                };
                for (; o < e.segments.length; ) {
                    if (r >= n.length)
                        return i;
                    const s = e.segments[o]
                      , a = n[r];
                    if (ja(a))
                        break;
                    const l = `${a}`
                      , u = r < n.length - 1 ? n[r + 1] : null;
                    if (o > 0 && void 0 === l)
                        break;
                    if (l && u && "object" == typeof u && void 0 === u.outlets) {
                        if (!Bb(l, u, s))
                            return i;
                        r += 2
                    } else {
                        if (!Bb(l, {}, s))
                            return i;
                        r++
                    }
                    o++
                }
                return {
                    match: !0,
                    pathIndex: o,
                    commandIndex: r
                }
            }(e, t, n)
              , o = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < e.segments.length) {
                const i = new re(e.segments.slice(0, r.pathIndex),{});
                return i.children[ee] = new re(e.segments.slice(r.pathIndex),e.children),
                fc(i, 0, o)
            }
            return r.match && 0 === o.length ? new re(e.segments,{}) : r.match && !e.hasChildren() ? Qp(e, t, n) : r.match ? fc(e, 0, o) : Qp(e, t, n)
        }
        function fc(e, t, n) {
            if (0 === n.length)
                return new re(e.segments,{});
            {
                const r = function(e) {
                    return ja(e[0]) ? e[0].outlets : {
                        [ee]: e
                    }
                }(n)
                  , o = {};
                return ft(r, (i,s)=>{
                    "string" == typeof i && (i = [i]),
                    null !== i && (o[s] = Vb(e.children[s], t, i))
                }
                ),
                ft(e.children, (i,s)=>{
                    void 0 === r[s] && (o[s] = i)
                }
                ),
                new re(e.segments,o)
            }
        }
        function Qp(e, t, n) {
            const r = e.segments.slice(0, t);
            let o = 0;
            for (; o < n.length; ) {
                const i = n[o];
                if (ja(i)) {
                    const l = T2(i.outlets);
                    return new re(r,l)
                }
                if (0 === o && dc(n[0])) {
                    r.push(new Va(e.segments[t].path,Lb(n[0]))),
                    o++;
                    continue
                }
                const s = ja(i) ? i.outlets[ee] : `${i}`
                  , a = o < n.length - 1 ? n[o + 1] : null;
                s && a && dc(a) ? (r.push(new Va(s,Lb(a))),
                o += 2) : (r.push(new Va(s,{})),
                o++)
            }
            return new re(r,{})
        }
        function T2(e) {
            const t = {};
            return ft(e, (n,r)=>{
                "string" == typeof n && (n = [n]),
                null !== n && (t[r] = Qp(new re([],{}), 0, n))
            }
            ),
            t
        }
        function Lb(e) {
            const t = {};
            return ft(e, (n,r)=>t[r] = `${n}`),
            t
        }
        function Bb(e, t, n) {
            return e == n.path && sr(t, n.parameters)
        }
        class R2 {
            constructor(t, n, r, o) {
                this.routeReuseStrategy = t,
                this.futureState = n,
                this.currState = r,
                this.forwardEvent = o
            }
            activate(t) {
                const n = this.futureState._root
                  , r = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(n, r, t),
                Gp(this.futureState.root),
                this.activateChildRoutes(n, r, t)
            }
            deactivateChildRoutes(t, n, r) {
                const o = rs(n);
                t.children.forEach(i=>{
                    const s = i.value.outlet;
                    this.deactivateRoutes(i, o[s], r),
                    delete o[s]
                }
                ),
                ft(o, (i,s)=>{
                    this.deactivateRouteAndItsChildren(i, r)
                }
                )
            }
            deactivateRoutes(t, n, r) {
                const o = t.value
                  , i = n ? n.value : null;
                if (o === i)
                    if (o.component) {
                        const s = r.getContext(o.outlet);
                        s && this.deactivateChildRoutes(t, n, s.children)
                    } else
                        this.deactivateChildRoutes(t, n, r);
                else
                    i && this.deactivateRouteAndItsChildren(n, r)
            }
            deactivateRouteAndItsChildren(t, n) {
                this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, n) : this.deactivateRouteAndOutlet(t, n)
            }
            detachAndStoreRouteSubtree(t, n) {
                const r = n.getContext(t.value.outlet)
                  , o = r && t.value.component ? r.children : n
                  , i = rs(t);
                for (const s of Object.keys(i))
                    this.deactivateRouteAndItsChildren(i[s], o);
                if (r && r.outlet) {
                    const s = r.outlet.detach()
                      , a = r.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(t.value.snapshot, {
                        componentRef: s,
                        route: t,
                        contexts: a
                    })
                }
            }
            deactivateRouteAndOutlet(t, n) {
                const r = n.getContext(t.value.outlet)
                  , o = r && t.value.component ? r.children : n
                  , i = rs(t);
                for (const s of Object.keys(i))
                    this.deactivateRouteAndItsChildren(i[s], o);
                r && r.outlet && (r.outlet.deactivate(),
                r.children.onOutletDeactivated(),
                r.attachRef = null,
                r.resolver = null,
                r.route = null)
            }
            activateChildRoutes(t, n, r) {
                const o = rs(n);
                t.children.forEach(i=>{
                    this.activateRoutes(i, o[i.value.outlet], r),
                    this.forwardEvent(new Zk(i.value.snapshot))
                }
                ),
                t.children.length && this.forwardEvent(new Kk(t.value.snapshot))
            }
            activateRoutes(t, n, r) {
                const o = t.value
                  , i = n ? n.value : null;
                if (Gp(o),
                o === i)
                    if (o.component) {
                        const s = r.getOrCreateContext(o.outlet);
                        this.activateChildRoutes(t, n, s.children)
                    } else
                        this.activateChildRoutes(t, n, r);
                else if (o.component) {
                    const s = r.getOrCreateContext(o.outlet);
                    if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
                        const a = this.routeReuseStrategy.retrieve(o.snapshot);
                        this.routeReuseStrategy.store(o.snapshot, null),
                        s.children.onOutletReAttached(a.contexts),
                        s.attachRef = a.componentRef,
                        s.route = a.route.value,
                        s.outlet && s.outlet.attach(a.componentRef, a.route.value),
                        Gp(a.route.value),
                        this.activateChildRoutes(t, null, s.children)
                    } else {
                        const a = function(e) {
                            for (let t = e.parent; t; t = t.parent) {
                                const n = t.routeConfig;
                                if (n && n._loadedConfig)
                                    return n._loadedConfig;
                                if (n && n.component)
                                    return null
                            }
                            return null
                        }(o.snapshot)
                          , l = a ? a.module.componentFactoryResolver : null;
                        s.attachRef = null,
                        s.route = o,
                        s.resolver = l,
                        s.outlet && s.outlet.activateWith(o, l),
                        this.activateChildRoutes(t, null, s.children)
                    }
                } else
                    this.activateChildRoutes(t, null, r)
            }
        }
        class Kp {
            constructor(t, n) {
                this.routes = t,
                this.module = n
            }
        }
        function no(e) {
            return "function" == typeof e
        }
        function jo(e) {
            return e instanceof Lo
        }
        const Ha = Symbol("INITIAL_VALUE");
        function Ua() {
            return Vo(e=>function(...e) {
                const t = fr(e)
                  , n = gl(e)
                  , {args: r, keys: o} = nb(e);
                if (0 === r.length)
                    return Be([], t);
                const i = new oe(function(e, t, n=Hn) {
                    return r=>{
                        ib(t, ()=>{
                            const {length: o} = e
                              , i = new Array(o);
                            let s = o
                              , a = o;
                            for (let l = 0; l < o; l++)
                                ib(t, ()=>{
                                    const u = Be(e[l], t);
                                    let f = !1;
                                    u.subscribe(new Ve(r,h=>{
                                        i[l] = h,
                                        f || (f = !0,
                                        a--),
                                        a || r.next(n(i.slice()))
                                    }
                                    ,()=>{
                                        --s || r.complete()
                                    }
                                    ))
                                }
                                , r)
                        }
                        , r)
                    }
                }(r, t, o ? s=>ob(o, s) : Hn));
                return n ? i.pipe(rb(n)) : i
            }(e.map(t=>t.pipe(Yo(1), function(...e) {
                const t = fr(e);
                return Fe((n,r)=>{
                    (t ? kp(e, n, t) : kp(e, n)).subscribe(r)
                }
                )
            }(Ha)))).pipe(lb((t,n)=>{
                let r = !1;
                return n.reduce((o,i,s)=>o !== Ha ? o : (i === Ha && (r = !0),
                r || !1 !== i && s !== n.length - 1 && !jo(i) ? o : i), t)
            }
            , Ha), es(t=>t !== Ha), ce(t=>jo(t) ? t : !0 === t), Yo(1)))
        }
        class L2 {
            constructor() {
                this.outlet = null,
                this.route = null,
                this.resolver = null,
                this.children = new $a,
                this.attachRef = null
            }
        }
        class $a {
            constructor() {
                this.contexts = new Map
            }
            onChildOutletCreated(t, n) {
                const r = this.getOrCreateContext(t);
                r.outlet = n,
                this.contexts.set(t, r)
            }
            onChildOutletDestroyed(t) {
                const n = this.getContext(t);
                n && (n.outlet = null,
                n.attachRef = null)
            }
            onOutletDeactivated() {
                const t = this.contexts;
                return this.contexts = new Map,
                t
            }
            onOutletReAttached(t) {
                this.contexts = t
            }
            getOrCreateContext(t) {
                let n = this.getContext(t);
                return n || (n = new L2,
                this.contexts.set(t, n)),
                n
            }
            getContext(t) {
                return this.contexts.get(t) || null
            }
        }
        let jb = (()=>{
            class e {
                constructor(n, r, o, i, s) {
                    this.parentContexts = n,
                    this.location = r,
                    this.resolver = o,
                    this.changeDetector = s,
                    this.activated = null,
                    this._activatedRoute = null,
                    this.activateEvents = new Ne,
                    this.deactivateEvents = new Ne,
                    this.attachEvents = new Ne,
                    this.detachEvents = new Ne,
                    this.name = i || ee,
                    n.onChildOutletCreated(this.name, this)
                }
                ngOnDestroy() {
                    this.parentContexts.onChildOutletDestroyed(this.name)
                }
                ngOnInit() {
                    if (!this.activated) {
                        const n = this.parentContexts.getContext(this.name);
                        n && n.route && (n.attachRef ? this.attach(n.attachRef, n.route) : this.activateWith(n.route, n.resolver || null))
                    }
                }
                get isActivated() {
                    return !!this.activated
                }
                get component() {
                    if (!this.activated)
                        throw new Error("Outlet is not activated");
                    return this.activated.instance
                }
                get activatedRoute() {
                    if (!this.activated)
                        throw new Error("Outlet is not activated");
                    return this._activatedRoute
                }
                get activatedRouteData() {
                    return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                }
                detach() {
                    if (!this.activated)
                        throw new Error("Outlet is not activated");
                    this.location.detach();
                    const n = this.activated;
                    return this.activated = null,
                    this._activatedRoute = null,
                    this.detachEvents.emit(n.instance),
                    n
                }
                attach(n, r) {
                    this.activated = n,
                    this._activatedRoute = r,
                    this.location.insert(n.hostView),
                    this.attachEvents.emit(n.instance)
                }
                deactivate() {
                    if (this.activated) {
                        const n = this.component;
                        this.activated.destroy(),
                        this.activated = null,
                        this._activatedRoute = null,
                        this.deactivateEvents.emit(n)
                    }
                }
                activateWith(n, r) {
                    if (this.isActivated)
                        throw new Error("Cannot activate an already activated outlet");
                    this._activatedRoute = n;
                    const s = (r = r || this.resolver).resolveComponentFactory(n._futureSnapshot.routeConfig.component)
                      , a = this.parentContexts.getOrCreateContext(this.name).children
                      , l = new B2(n,a,this.location.injector);
                    this.activated = this.location.createComponent(s, this.location.length, l),
                    this.changeDetector.markForCheck(),
                    this.activateEvents.emit(this.activated.instance)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(I($a),I(Rn),I(Ro),function(e) {
                    return function(e, t) {
                        if ("class" === t)
                            return e.classes;
                        if ("style" === t)
                            return e.styles;
                        const n = e.attrs;
                        if (n) {
                            const r = n.length;
                            let o = 0;
                            for (; o < r; ) {
                                const i = n[o];
                                if (Dm(i))
                                    break;
                                if (0 === i)
                                    o += 2;
                                else if ("number" == typeof i)
                                    for (o++; o < r && "string" == typeof n[o]; )
                                        o++;
                                else {
                                    if (i === t)
                                        return n[o + 1];
                                    o += 2
                                }
                            }
                        }
                        return null
                    }(ze(), e)
                }("name"),I(Vh))
            }
            ,
            e.\u0275dir = V({
                type: e,
                selectors: [["router-outlet"]],
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate",
                    attachEvents: "attach",
                    detachEvents: "detach"
                },
                exportAs: ["outlet"]
            }),
            e
        }
        )();
        class B2 {
            constructor(t, n, r) {
                this.route = t,
                this.childContexts = n,
                this.parent = r
            }
            get(t, n) {
                return t === os ? this.route : t === $a ? this.childContexts : this.parent.get(t, n)
            }
        }
        let Hb = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275cmp = mo({
                type: e,
                selectors: [["ng-component"]],
                decls: 1,
                vars: 0,
                template: function(n, r) {
                    1 & n && Ar(0, "router-outlet")
                },
                directives: [jb],
                encapsulation: 2
            }),
            e
        }
        )();
        function Ub(e, t="") {
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                j2(r, H2(t, r))
            }
        }
        function j2(e, t) {
            e.children && Ub(e.children, t)
        }
        function H2(e, t) {
            return t ? e || t.path ? e && !t.path ? `${e}/` : !e && t.path ? t.path : `${e}/${t.path}` : "" : e
        }
        function Yp(e) {
            const t = e.children && e.children.map(Yp)
              , n = t ? st(F({}, e), {
                children: t
            }) : F({}, e);
            return !n.component && (t || n.loadChildren) && n.outlet && n.outlet !== ee && (n.component = Hb),
            n
        }
        function yn(e) {
            return e.outlet || ee
        }
        function $b(e, t) {
            const n = e.filter(r=>yn(r) === t);
            return n.push(...e.filter(r=>yn(r) !== t)),
            n
        }
        const Gb = {
            matched: !1,
            consumedSegments: [],
            lastChild: 0,
            parameters: {},
            positionalParamSegments: {}
        };
        function hc(e, t, n) {
            var a;
            if ("" === t.path)
                return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? F({}, Gb) : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    parameters: {},
                    positionalParamSegments: {}
                };
            const o = (t.matcher || e2)(n, e, t);
            if (!o)
                return F({}, Gb);
            const i = {};
            ft(o.posParams, (l,u)=>{
                i[u] = l.path
            }
            );
            const s = o.consumed.length > 0 ? F(F({}, i), o.consumed[o.consumed.length - 1].parameters) : i;
            return {
                matched: !0,
                consumedSegments: o.consumed,
                lastChild: o.consumed.length,
                parameters: s,
                positionalParamSegments: null != (a = o.posParams) ? a : {}
            }
        }
        function pc(e, t, n, r, o="corrected") {
            if (n.length > 0 && function(e, t, n) {
                return n.some(r=>gc(e, t, r) && yn(r) !== ee)
            }(e, n, r)) {
                const s = new re(t,function(e, t, n, r) {
                    const o = {};
                    o[ee] = r,
                    r._sourceSegment = e,
                    r._segmentIndexShift = t.length;
                    for (const i of n)
                        if ("" === i.path && yn(i) !== ee) {
                            const s = new re([],{});
                            s._sourceSegment = e,
                            s._segmentIndexShift = t.length,
                            o[yn(i)] = s
                        }
                    return o
                }(e, t, r, new re(n,e.children)));
                return s._sourceSegment = e,
                s._segmentIndexShift = t.length,
                {
                    segmentGroup: s,
                    slicedSegments: []
                }
            }
            if (0 === n.length && function(e, t, n) {
                return n.some(r=>gc(e, t, r))
            }(e, n, r)) {
                const s = new re(e.segments,function(e, t, n, r, o, i) {
                    const s = {};
                    for (const a of r)
                        if (gc(e, n, a) && !o[yn(a)]) {
                            const l = new re([],{});
                            l._sourceSegment = e,
                            l._segmentIndexShift = "legacy" === i ? e.segments.length : t.length,
                            s[yn(a)] = l
                        }
                    return F(F({}, o), s)
                }(e, t, n, r, e.children, o));
                return s._sourceSegment = e,
                s._segmentIndexShift = t.length,
                {
                    segmentGroup: s,
                    slicedSegments: n
                }
            }
            const i = new re(e.segments,e.children);
            return i._sourceSegment = e,
            i._segmentIndexShift = t.length,
            {
                segmentGroup: i,
                slicedSegments: n
            }
        }
        function gc(e, t, n) {
            return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path
        }
        function Wb(e, t, n, r) {
            return !!(yn(e) === r || r !== ee && gc(t, n, e)) && ("**" === e.path || hc(t, e, n).matched)
        }
        function qb(e, t, n) {
            return 0 === t.length && !e.children[n]
        }
        class Ga {
            constructor(t) {
                this.segmentGroup = t || null
            }
        }
        class zb {
            constructor(t) {
                this.urlTree = t
            }
        }
        function mc(e) {
            return new oe(t=>t.error(new Ga(e)))
        }
        function Qb(e) {
            return new oe(t=>t.error(new zb(e)))
        }
        function q2(e) {
            return new oe(t=>t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))
        }
        class K2 {
            constructor(t, n, r, o, i) {
                this.configLoader = n,
                this.urlSerializer = r,
                this.urlTree = o,
                this.config = i,
                this.allowRedirects = !0,
                this.ngModule = t.get(or)
            }
            apply() {
                const t = pc(this.urlTree.root, [], [], this.config).segmentGroup
                  , n = new re(t.segments,t.children);
                return this.expandSegmentGroup(this.ngModule, this.config, n, ee).pipe(ce(i=>this.createUrlTree(Zp(i), this.urlTree.queryParams, this.urlTree.fragment))).pipe(to(i=>{
                    if (i instanceof zb)
                        return this.allowRedirects = !1,
                        this.match(i.urlTree);
                    throw i instanceof Ga ? this.noMatchError(i) : i
                }
                ))
            }
            match(t) {
                return this.expandSegmentGroup(this.ngModule, this.config, t.root, ee).pipe(ce(o=>this.createUrlTree(Zp(o), t.queryParams, t.fragment))).pipe(to(o=>{
                    throw o instanceof Ga ? this.noMatchError(o) : o
                }
                ))
            }
            noMatchError(t) {
                return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
            }
            createUrlTree(t, n, r) {
                const o = t.segments.length > 0 ? new re([],{
                    [ee]: t
                }) : t;
                return new Lo(o,n,r)
            }
            expandSegmentGroup(t, n, r, o) {
                return 0 === r.segments.length && r.hasChildren() ? this.expandChildren(t, n, r).pipe(ce(i=>new re([],i))) : this.expandSegment(t, r, n, r.segments, o, !0)
            }
            expandChildren(t, n, r) {
                const o = [];
                for (const i of Object.keys(r.children))
                    "primary" === i ? o.unshift(i) : o.push(i);
                return Be(o).pipe(Oa(i=>{
                    const s = r.children[i]
                      , a = $b(n, i);
                    return this.expandSegmentGroup(t, a, s, i).pipe(ce(l=>({
                        segment: l,
                        outlet: i
                    })))
                }
                ), lb((i,s)=>(i[s.outlet] = s.segment,
                i), {}), function(e, t) {
                    const n = arguments.length >= 2;
                    return r=>r.pipe(e ? es((o,i)=>e(o, i, r)) : Hn, Vp(1), n ? cb(t) : ub(()=>new oc))
                }())
            }
            expandSegment(t, n, r, o, i, s) {
                return Be(r).pipe(Oa(a=>this.expandSegmentAgainstRoute(t, n, r, a, o, i, s).pipe(to(u=>{
                    if (u instanceof Ga)
                        return J(null);
                    throw u
                }
                ))), ts(a=>!!a), to((a,l)=>{
                    if (a instanceof oc || "EmptyError" === a.name) {
                        if (qb(n, o, i))
                            return J(new re([],{}));
                        throw new Ga(n)
                    }
                    throw a
                }
                ))
            }
            expandSegmentAgainstRoute(t, n, r, o, i, s, a) {
                return Wb(o, n, i, s) ? void 0 === o.redirectTo ? this.matchSegmentAgainstRoute(t, n, o, i, s) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s) : mc(n) : mc(n)
            }
            expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s) {
                return "**" === o.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, r, o, s) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s)
            }
            expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, o) {
                const i = this.applyRedirectCommands([], r.redirectTo, {});
                return r.redirectTo.startsWith("/") ? Qb(i) : this.lineralizeSegments(r, i).pipe(Le(s=>{
                    const a = new re(s,{});
                    return this.expandSegment(t, a, n, s, o, !1)
                }
                ))
            }
            expandRegularSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s) {
                const {matched: a, consumedSegments: l, lastChild: u, positionalParamSegments: f} = hc(n, o, i);
                if (!a)
                    return mc(n);
                const h = this.applyRedirectCommands(l, o.redirectTo, f);
                return o.redirectTo.startsWith("/") ? Qb(h) : this.lineralizeSegments(o, h).pipe(Le(g=>this.expandSegment(t, n, r, g.concat(i.slice(u)), s, !1)))
            }
            matchSegmentAgainstRoute(t, n, r, o, i) {
                if ("**" === r.path)
                    return r.loadChildren ? (r._loadedConfig ? J(r._loadedConfig) : this.configLoader.load(t.injector, r)).pipe(ce(g=>(r._loadedConfig = g,
                    new re(o,{})))) : J(new re(o,{}));
                const {matched: s, consumedSegments: a, lastChild: l} = hc(n, r, o);
                if (!s)
                    return mc(n);
                const u = o.slice(l);
                return this.getChildConfig(t, r, o).pipe(Le(h=>{
                    const g = h.module
                      , m = h.routes
                      , {segmentGroup: y, slicedSegments: C} = pc(n, a, u, m)
                      , w = new re(y.segments,y.children);
                    if (0 === C.length && w.hasChildren())
                        return this.expandChildren(g, m, w).pipe(ce(x=>new re(a,x)));
                    if (0 === m.length && 0 === C.length)
                        return J(new re(a,{}));
                    const b = yn(r) === i;
                    return this.expandSegment(g, w, m, C, b ? ee : i, !0).pipe(ce(T=>new re(a.concat(T.segments),T.children)))
                }
                ))
            }
            getChildConfig(t, n, r) {
                return n.children ? J(new Kp(n.children,t)) : n.loadChildren ? void 0 !== n._loadedConfig ? J(n._loadedConfig) : this.runCanLoadGuards(t.injector, n, r).pipe(Le(o=>{
                    return o ? this.configLoader.load(t.injector, n).pipe(ce(i=>(n._loadedConfig = i,
                    i))) : (e = n,
                    new oe(t=>t.error(Bp(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`))));
                    var e
                }
                )) : J(new Kp([],t))
            }
            runCanLoadGuards(t, n, r) {
                const o = n.canLoad;
                return o && 0 !== o.length ? J(o.map(s=>{
                    const a = t.get(s);
                    let l;
                    if ((e = a) && no(e.canLoad))
                        l = a.canLoad(n, r);
                    else {
                        if (!no(a))
                            throw new Error("Invalid CanLoad guard");
                        l = a(n, r)
                    }
                    var e;
                    return ar(l)
                }
                )).pipe(Ua(), nn(s=>{
                    if (!jo(s))
                        return;
                    const a = Bp(`Redirecting to "${this.urlSerializer.serialize(s)}"`);
                    throw a.url = s,
                    a
                }
                ), ce(s=>!0 === s)) : J(!0)
            }
            lineralizeSegments(t, n) {
                let r = []
                  , o = n.root;
                for (; ; ) {
                    if (r = r.concat(o.segments),
                    0 === o.numberOfChildren)
                        return J(r);
                    if (o.numberOfChildren > 1 || !o.children[ee])
                        return q2(t.redirectTo);
                    o = o.children[ee]
                }
            }
            applyRedirectCommands(t, n, r) {
                return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), t, r)
            }
            applyRedirectCreatreUrlTree(t, n, r, o) {
                const i = this.createSegmentGroup(t, n.root, r, o);
                return new Lo(i,this.createQueryParams(n.queryParams, this.urlTree.queryParams),n.fragment)
            }
            createQueryParams(t, n) {
                const r = {};
                return ft(t, (o,i)=>{
                    if ("string" == typeof o && o.startsWith(":")) {
                        const a = o.substring(1);
                        r[i] = n[a]
                    } else
                        r[i] = o
                }
                ),
                r
            }
            createSegmentGroup(t, n, r, o) {
                const i = this.createSegments(t, n.segments, r, o);
                let s = {};
                return ft(n.children, (a,l)=>{
                    s[l] = this.createSegmentGroup(t, a, r, o)
                }
                ),
                new re(i,s)
            }
            createSegments(t, n, r, o) {
                return n.map(i=>i.path.startsWith(":") ? this.findPosParam(t, i, o) : this.findOrReturn(i, r))
            }
            findPosParam(t, n, r) {
                const o = r[n.path.substring(1)];
                if (!o)
                    throw new Error(`Cannot redirect to '${t}'. Cannot find '${n.path}'.`);
                return o
            }
            findOrReturn(t, n) {
                let r = 0;
                for (const o of n) {
                    if (o.path === t.path)
                        return n.splice(r),
                        o;
                    r++
                }
                return t
            }
        }
        function Zp(e) {
            const t = {};
            for (const r of Object.keys(e.children)) {
                const i = Zp(e.children[r]);
                (i.segments.length > 0 || i.hasChildren()) && (t[r] = i)
            }
            return function(e) {
                if (1 === e.numberOfChildren && e.children[ee]) {
                    const t = e.children[ee];
                    return new re(e.segments.concat(t.segments),t.children)
                }
                return e
            }(new re(e.segments,t))
        }
        class Kb {
            constructor(t) {
                this.path = t,
                this.route = this.path[this.path.length - 1]
            }
        }
        class yc {
            constructor(t, n) {
                this.component = t,
                this.route = n
            }
        }
        function J2(e, t, n) {
            const r = e._root;
            return Wa(r, t ? t._root : null, n, [r.value])
        }
        function _c(e, t, n) {
            const r = function(e) {
                if (!e)
                    return null;
                for (let t = e.parent; t; t = t.parent) {
                    const n = t.routeConfig;
                    if (n && n._loadedConfig)
                        return n._loadedConfig
                }
                return null
            }(t);
            return (r ? r.module.injector : n).get(e)
        }
        function Wa(e, t, n, r, o={
            canDeactivateChecks: [],
            canActivateChecks: []
        }) {
            const i = rs(t);
            return e.children.forEach(s=>{
                (function(e, t, n, r, o={
                    canDeactivateChecks: [],
                    canActivateChecks: []
                }) {
                    const i = e.value
                      , s = t ? t.value : null
                      , a = n ? n.getContext(e.value.outlet) : null;
                    if (s && i.routeConfig === s.routeConfig) {
                        const l = function(e, t, n) {
                            if ("function" == typeof n)
                                return n(e, t);
                            switch (n) {
                            case "pathParamsChange":
                                return !Bo(e.url, t.url);
                            case "pathParamsOrQueryParamsChange":
                                return !Bo(e.url, t.url) || !sr(e.queryParams, t.queryParams);
                            case "always":
                                return !0;
                            case "paramsOrQueryParamsChange":
                                return !Wp(e, t) || !sr(e.queryParams, t.queryParams);
                            default:
                                return !Wp(e, t)
                            }
                        }(s, i, i.routeConfig.runGuardsAndResolvers);
                        l ? o.canActivateChecks.push(new Kb(r)) : (i.data = s.data,
                        i._resolvedData = s._resolvedData),
                        Wa(e, t, i.component ? a ? a.children : null : n, r, o),
                        l && a && a.outlet && a.outlet.isActivated && o.canDeactivateChecks.push(new yc(a.outlet.component,s))
                    } else
                        s && qa(t, a, o),
                        o.canActivateChecks.push(new Kb(r)),
                        Wa(e, null, i.component ? a ? a.children : null : n, r, o)
                }
                )(s, i[s.value.outlet], n, r.concat([s.value]), o),
                delete i[s.value.outlet]
            }
            ),
            ft(i, (s,a)=>qa(s, n.getContext(a), o)),
            o
        }
        function qa(e, t, n) {
            const r = rs(e)
              , o = e.value;
            ft(r, (i,s)=>{
                qa(i, o.component ? t ? t.children.getContext(s) : null : t, n)
            }
            ),
            n.canDeactivateChecks.push(new yc(o.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null,o))
        }
        class dV {
        }
        function Yb(e) {
            return new oe(t=>t.error(e))
        }
        class hV {
            constructor(t, n, r, o, i, s) {
                this.rootComponentType = t,
                this.config = n,
                this.urlTree = r,
                this.url = o,
                this.paramsInheritanceStrategy = i,
                this.relativeLinkResolution = s
            }
            recognize() {
                const t = pc(this.urlTree.root, [], [], this.config.filter(s=>void 0 === s.redirectTo), this.relativeLinkResolution).segmentGroup
                  , n = this.processSegmentGroup(this.config, t, ee);
                if (null === n)
                    return null;
                const r = new cc([],Object.freeze({}),Object.freeze(F({}, this.urlTree.queryParams)),this.urlTree.fragment,{},ee,this.rootComponentType,null,this.urlTree.root,-1,{})
                  , o = new Pr(r,n)
                  , i = new Nb(this.url,o);
                return this.inheritParamsAndData(i._root),
                i
            }
            inheritParamsAndData(t) {
                const n = t.value
                  , r = Pb(n, this.paramsInheritanceStrategy);
                n.params = Object.freeze(r.params),
                n.data = Object.freeze(r.data),
                t.children.forEach(o=>this.inheritParamsAndData(o))
            }
            processSegmentGroup(t, n, r) {
                return 0 === n.segments.length && n.hasChildren() ? this.processChildren(t, n) : this.processSegment(t, n, n.segments, r)
            }
            processChildren(t, n) {
                const r = [];
                for (const i of Object.keys(n.children)) {
                    const s = n.children[i]
                      , a = $b(t, i)
                      , l = this.processSegmentGroup(a, s, i);
                    if (null === l)
                        return null;
                    r.push(...l)
                }
                const o = Zb(r);
                return o.sort((t,n)=>t.value.outlet === ee ? -1 : n.value.outlet === ee ? 1 : t.value.outlet.localeCompare(n.value.outlet)),
                o
            }
            processSegment(t, n, r, o) {
                for (const i of t) {
                    const s = this.processSegmentAgainstRoute(i, n, r, o);
                    if (null !== s)
                        return s
                }
                return qb(n, r, o) ? [] : null
            }
            processSegmentAgainstRoute(t, n, r, o) {
                if (t.redirectTo || !Wb(t, n, r, o))
                    return null;
                let i, s = [], a = [];
                if ("**" === t.path) {
                    const m = r.length > 0 ? _b(r).parameters : {};
                    i = new cc(r,m,Object.freeze(F({}, this.urlTree.queryParams)),this.urlTree.fragment,eE(t),yn(t),t.component,t,Jb(n),Xb(n) + r.length,tE(t))
                } else {
                    const m = hc(n, t, r);
                    if (!m.matched)
                        return null;
                    s = m.consumedSegments,
                    a = r.slice(m.lastChild),
                    i = new cc(s,m.parameters,Object.freeze(F({}, this.urlTree.queryParams)),this.urlTree.fragment,eE(t),yn(t),t.component,t,Jb(n),Xb(n) + s.length,tE(t))
                }
                const l = (e = t).children ? e.children : e.loadChildren ? e._loadedConfig.routes : []
                  , {segmentGroup: u, slicedSegments: f} = pc(n, s, a, l.filter(m=>void 0 === m.redirectTo), this.relativeLinkResolution);
                var e;
                if (0 === f.length && u.hasChildren()) {
                    const m = this.processChildren(l, u);
                    return null === m ? null : [new Pr(i,m)]
                }
                if (0 === l.length && 0 === f.length)
                    return [new Pr(i,[])];
                const h = yn(t) === o
                  , g = this.processSegment(l, u, f, h ? ee : o);
                return null === g ? null : [new Pr(i,g)]
            }
        }
        function mV(e) {
            const t = e.value.routeConfig;
            return t && "" === t.path && void 0 === t.redirectTo
        }
        function Zb(e) {
            const t = []
              , n = new Set;
            for (const r of e) {
                if (!mV(r)) {
                    t.push(r);
                    continue
                }
                const o = t.find(i=>r.value.routeConfig === i.value.routeConfig);
                void 0 !== o ? (o.children.push(...r.children),
                n.add(o)) : t.push(r)
            }
            for (const r of n) {
                const o = Zb(r.children);
                t.push(new Pr(r.value,o))
            }
            return t.filter(r=>!n.has(r))
        }
        function Jb(e) {
            let t = e;
            for (; t._sourceSegment; )
                t = t._sourceSegment;
            return t
        }
        function Xb(e) {
            let t = e
              , n = t._segmentIndexShift ? t._segmentIndexShift : 0;
            for (; t._sourceSegment; )
                t = t._sourceSegment,
                n += t._segmentIndexShift ? t._segmentIndexShift : 0;
            return n - 1
        }
        function eE(e) {
            return e.data || {}
        }
        function tE(e) {
            return e.resolve || {}
        }
        function Jp(e) {
            return Vo(t=>{
                const n = e(t);
                return n ? Be(n).pipe(ce(()=>t)) : J(t)
            }
            )
        }
        class EV extends class {
            shouldDetach(t) {
                return !1
            }
            store(t, n) {}
            shouldAttach(t) {
                return !1
            }
            retrieve(t) {
                return null
            }
            shouldReuseRoute(t, n) {
                return t.routeConfig === n.routeConfig
            }
        }
        {
        }
        const Xp = new X("ROUTES");
        class nE {
            constructor(t, n, r, o) {
                this.injector = t,
                this.compiler = n,
                this.onLoadStartListener = r,
                this.onLoadEndListener = o
            }
            load(t, n) {
                if (n._loader$)
                    return n._loader$;
                this.onLoadStartListener && this.onLoadStartListener(n);
                const o = this.loadModuleFactory(n.loadChildren).pipe(ce(i=>{
                    this.onLoadEndListener && this.onLoadEndListener(n);
                    const s = i.create(t);
                    return new Kp(yb(s.injector.get(Xp, void 0, O.Self | O.Optional)).map(Yp),s)
                }
                ), to(i=>{
                    throw n._loader$ = void 0,
                    i
                }
                ));
                return n._loader$ = new kk(o,()=>new Ot).pipe(ab()),
                n._loader$
            }
            loadModuleFactory(t) {
                return ar(t()).pipe(Le(n=>n instanceof OC ? J(n) : Be(this.compiler.compileModuleAsync(n))))
            }
        }
        class IV {
            shouldProcessUrl(t) {
                return !0
            }
            extract(t) {
                return t
            }
            merge(t, n) {
                return t
            }
        }
        function MV(e) {
            throw e
        }
        function SV(e, t, n) {
            return t.parse("/")
        }
        function rE(e, t) {
            return J(null)
        }
        const TV = {
            paths: "exact",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "exact"
        }
          , xV = {
            paths: "subset",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "subset"
        };
        let rn = (()=>{
            class e {
                constructor(n, r, o, i, s, a, l) {
                    this.rootComponentType = n,
                    this.urlSerializer = r,
                    this.rootContexts = o,
                    this.location = i,
                    this.config = l,
                    this.lastSuccessfulNavigation = null,
                    this.currentNavigation = null,
                    this.disposed = !1,
                    this.navigationId = 0,
                    this.currentPageId = 0,
                    this.isNgZoneEnabled = !1,
                    this.events = new Ot,
                    this.errorHandler = MV,
                    this.malformedUriErrorHandler = SV,
                    this.navigated = !1,
                    this.lastSuccessfulId = -1,
                    this.hooks = {
                        beforePreactivation: rE,
                        afterPreactivation: rE
                    },
                    this.urlHandlingStrategy = new IV,
                    this.routeReuseStrategy = new EV,
                    this.onSameUrlNavigation = "ignore",
                    this.paramsInheritanceStrategy = "emptyOnly",
                    this.urlUpdateStrategy = "deferred",
                    this.relativeLinkResolution = "corrected",
                    this.canceledNavigationResolution = "replace",
                    this.ngModule = s.get(or),
                    this.console = s.get(Su);
                    const h = s.get(Ge);
                    this.isNgZoneEnabled = h instanceof Ge && Ge.isInAngularZone(),
                    this.resetConfig(l),
                    this.currentUrlTree = new Lo(new re([],{}),{},null),
                    this.rawUrlTree = this.currentUrlTree,
                    this.browserUrlTree = this.currentUrlTree,
                    this.configLoader = new nE(s,a,g=>this.triggerEvent(new fb(g)),g=>this.triggerEvent(new hb(g))),
                    this.routerState = Rb(this.currentUrlTree, this.rootComponentType),
                    this.transitions = new Bn({
                        id: 0,
                        targetPageId: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {
                            canActivateChecks: [],
                            canDeactivateChecks: []
                        },
                        guardsResult: null
                    }),
                    this.navigations = this.setupNavigations(this.transitions),
                    this.processNavigations()
                }
                get browserPageId() {
                    var n;
                    return null == (n = this.location.getState()) ? void 0 : n.\u0275routerPageId
                }
                setupNavigations(n) {
                    const r = this.events;
                    return n.pipe(es(o=>0 !== o.id), ce(o=>st(F({}, o), {
                        extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl)
                    })), Vo(o=>{
                        let i = !1
                          , s = !1;
                        return J(o).pipe(nn(a=>{
                            this.currentNavigation = {
                                id: a.id,
                                initialUrl: a.currentRawUrl,
                                extractedUrl: a.extractedUrl,
                                trigger: a.source,
                                extras: a.extras,
                                previousNavigation: this.lastSuccessfulNavigation ? st(F({}, this.lastSuccessfulNavigation), {
                                    previousNavigation: null
                                }) : null
                            }
                        }
                        ), Vo(a=>{
                            const l = this.browserUrlTree.toString()
                              , u = !this.navigated || a.extractedUrl.toString() !== l || l !== this.currentUrlTree.toString();
                            if (("reload" === this.onSameUrlNavigation || u) && this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                                return wc(a.source) && (this.browserUrlTree = a.extractedUrl),
                                J(a).pipe(Vo(h=>{
                                    const g = this.transitions.getValue();
                                    return r.next(new Lp(h.id,this.serializeUrl(h.extractedUrl),h.source,h.restoredState)),
                                    g !== this.transitions.getValue() ? Dn : Promise.resolve(h)
                                }
                                ), function(e, t, n, r) {
                                    return Vo(o=>function(e, t, n, r, o) {
                                        return new K2(e,t,n,r,o).apply()
                                    }(e, t, n, o.extractedUrl, r).pipe(ce(i=>st(F({}, o), {
                                        urlAfterRedirects: i
                                    }))))
                                }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), nn(h=>{
                                    this.currentNavigation = st(F({}, this.currentNavigation), {
                                        finalUrl: h.urlAfterRedirects
                                    })
                                }
                                ), function(e, t, n, r, o) {
                                    return Le(i=>function(e, t, n, r, o="emptyOnly", i="legacy") {
                                        try {
                                            const s = new hV(e,t,n,r,o,i).recognize();
                                            return null === s ? Yb(new dV) : J(s)
                                        } catch (s) {
                                            return Yb(s)
                                        }
                                    }(e, t, i.urlAfterRedirects, n(i.urlAfterRedirects), r, o).pipe(ce(s=>st(F({}, i), {
                                        targetSnapshot: s
                                    }))))
                                }(this.rootComponentType, this.config, h=>this.serializeUrl(h), this.paramsInheritanceStrategy, this.relativeLinkResolution), nn(h=>{
                                    if ("eager" === this.urlUpdateStrategy) {
                                        if (!h.extras.skipLocationChange) {
                                            const m = this.urlHandlingStrategy.merge(h.urlAfterRedirects, h.rawUrl);
                                            this.setBrowserUrl(m, h)
                                        }
                                        this.browserUrlTree = h.urlAfterRedirects
                                    }
                                    const g = new $k(h.id,this.serializeUrl(h.extractedUrl),this.serializeUrl(h.urlAfterRedirects),h.targetSnapshot);
                                    r.next(g)
                                }
                                ));
                            if (u && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                const {id: g, extractedUrl: m, source: y, restoredState: C, extras: w} = a
                                  , b = new Lp(g,this.serializeUrl(m),y,C);
                                r.next(b);
                                const v = Rb(m, this.rootComponentType).snapshot;
                                return J(st(F({}, a), {
                                    targetSnapshot: v,
                                    urlAfterRedirects: m,
                                    extras: st(F({}, w), {
                                        skipLocationChange: !1,
                                        replaceUrl: !1
                                    })
                                }))
                            }
                            return this.rawUrlTree = a.rawUrl,
                            a.resolve(null),
                            Dn
                        }
                        ), Jp(a=>{
                            const {targetSnapshot: l, id: u, extractedUrl: f, rawUrl: h, extras: {skipLocationChange: g, replaceUrl: m}} = a;
                            return this.hooks.beforePreactivation(l, {
                                navigationId: u,
                                appliedUrlTree: f,
                                rawUrlTree: h,
                                skipLocationChange: !!g,
                                replaceUrl: !!m
                            })
                        }
                        ), nn(a=>{
                            const l = new Gk(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);
                            this.triggerEvent(l)
                        }
                        ), ce(a=>st(F({}, a), {
                            guards: J2(a.targetSnapshot, a.currentSnapshot, this.rootContexts)
                        })), function(e, t) {
                            return Le(n=>{
                                const {targetSnapshot: r, currentSnapshot: o, guards: {canActivateChecks: i, canDeactivateChecks: s}} = n;
                                return 0 === s.length && 0 === i.length ? J(st(F({}, n), {
                                    guardsResult: !0
                                })) : function(e, t, n, r) {
                                    return Be(e).pipe(Le(o=>function(e, t, n, r, o) {
                                        const i = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                        return i && 0 !== i.length ? J(i.map(a=>{
                                            const l = _c(a, t, o);
                                            let u;
                                            if (function(e) {
                                                return e && no(e.canDeactivate)
                                            }(l))
                                                u = ar(l.canDeactivate(e, t, n, r));
                                            else {
                                                if (!no(l))
                                                    throw new Error("Invalid CanDeactivate guard");
                                                u = ar(l(e, t, n, r))
                                            }
                                            return u.pipe(ts())
                                        }
                                        )).pipe(Ua()) : J(!0)
                                    }(o.component, o.route, n, t, r)), ts(o=>!0 !== o, !0))
                                }(s, r, o, e).pipe(Le(a=>a && function(e) {
                                    return "boolean" == typeof e
                                }(a) ? function(e, t, n, r) {
                                    return Be(t).pipe(Oa(o=>kp(function(e, t) {
                                        return null !== e && t && t(new Qk(e)),
                                        J(!0)
                                    }(o.route.parent, r), function(e, t) {
                                        return null !== e && t && t(new Yk(e)),
                                        J(!0)
                                    }(o.route, r), function(e, t, n) {
                                        const r = t[t.length - 1]
                                          , i = t.slice(0, t.length - 1).reverse().map(s=>function(e) {
                                            const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                                            return t && 0 !== t.length ? {
                                                node: e,
                                                guards: t
                                            } : null
                                        }(s)).filter(s=>null !== s).map(s=>sb(()=>J(s.guards.map(l=>{
                                            const u = _c(l, s.node, n);
                                            let f;
                                            if (function(e) {
                                                return e && no(e.canActivateChild)
                                            }(u))
                                                f = ar(u.canActivateChild(r, e));
                                            else {
                                                if (!no(u))
                                                    throw new Error("Invalid CanActivateChild guard");
                                                f = ar(u(r, e))
                                            }
                                            return f.pipe(ts())
                                        }
                                        )).pipe(Ua())));
                                        return J(i).pipe(Ua())
                                    }(e, o.path, n), function(e, t, n) {
                                        const r = t.routeConfig ? t.routeConfig.canActivate : null;
                                        if (!r || 0 === r.length)
                                            return J(!0);
                                        const o = r.map(i=>sb(()=>{
                                            const s = _c(i, t, n);
                                            let a;
                                            if (function(e) {
                                                return e && no(e.canActivate)
                                            }(s))
                                                a = ar(s.canActivate(t, e));
                                            else {
                                                if (!no(s))
                                                    throw new Error("Invalid CanActivate guard");
                                                a = ar(s(t, e))
                                            }
                                            return a.pipe(ts())
                                        }
                                        ));
                                        return J(o).pipe(Ua())
                                    }(e, o.route, n))), ts(o=>!0 !== o, !0))
                                }(r, i, e, t) : J(a)), ce(a=>st(F({}, n), {
                                    guardsResult: a
                                })))
                            }
                            )
                        }(this.ngModule.injector, a=>this.triggerEvent(a)), nn(a=>{
                            if (jo(a.guardsResult)) {
                                const u = Bp(`Redirecting to "${this.serializeUrl(a.guardsResult)}"`);
                                throw u.url = a.guardsResult,
                                u
                            }
                            const l = new Wk(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);
                            this.triggerEvent(l)
                        }
                        ), es(a=>!!a.guardsResult || (this.restoreHistory(a),
                        this.cancelNavigationTransition(a, ""),
                        !1)), Jp(a=>{
                            if (a.guards.canActivateChecks.length)
                                return J(a).pipe(nn(l=>{
                                    const u = new qk(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);
                                    this.triggerEvent(u)
                                }
                                ), Vo(l=>{
                                    let u = !1;
                                    return J(l).pipe(function(e, t) {
                                        return Le(n=>{
                                            const {targetSnapshot: r, guards: {canActivateChecks: o}} = n;
                                            if (!o.length)
                                                return J(n);
                                            let i = 0;
                                            return Be(o).pipe(Oa(s=>function(e, t, n, r) {
                                                return function(e, t, n, r) {
                                                    const o = Object.keys(e);
                                                    if (0 === o.length)
                                                        return J({});
                                                    const i = {};
                                                    return Be(o).pipe(Le(s=>function(e, t, n, r) {
                                                        const o = _c(e, t, r);
                                                        return ar(o.resolve ? o.resolve(t, n) : o(t, n))
                                                    }(e[s], t, n, r).pipe(nn(a=>{
                                                        i[s] = a
                                                    }
                                                    ))), Vp(1), Le(()=>Object.keys(i).length === o.length ? J(i) : Dn))
                                                }(e._resolve, e, t, r).pipe(ce(i=>(e._resolvedData = i,
                                                e.data = F(F({}, e.data), Pb(e, n).resolve),
                                                null)))
                                            }(s.route, r, e, t)), nn(()=>i++), Vp(1), Le(s=>i === o.length ? J(n) : Dn))
                                        }
                                        )
                                    }(this.paramsInheritanceStrategy, this.ngModule.injector), nn({
                                        next: ()=>u = !0,
                                        complete: ()=>{
                                            u || (this.restoreHistory(l),
                                            this.cancelNavigationTransition(l, "At least one route resolver didn't emit any value."))
                                        }
                                    }))
                                }
                                ), nn(l=>{
                                    const u = new zk(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);
                                    this.triggerEvent(u)
                                }
                                ))
                        }
                        ), Jp(a=>{
                            const {targetSnapshot: l, id: u, extractedUrl: f, rawUrl: h, extras: {skipLocationChange: g, replaceUrl: m}} = a;
                            return this.hooks.afterPreactivation(l, {
                                navigationId: u,
                                appliedUrlTree: f,
                                rawUrlTree: h,
                                skipLocationChange: !!g,
                                replaceUrl: !!m
                            })
                        }
                        ), ce(a=>{
                            const l = function(e, t, n) {
                                const r = Ba(e, t._root, n ? n._root : void 0);
                                return new xb(r,t)
                            }(this.routeReuseStrategy, a.targetSnapshot, a.currentRouterState);
                            return st(F({}, a), {
                                targetRouterState: l
                            })
                        }
                        ), nn(a=>{
                            this.currentUrlTree = a.urlAfterRedirects,
                            this.rawUrlTree = this.urlHandlingStrategy.merge(a.urlAfterRedirects, a.rawUrl),
                            this.routerState = a.targetRouterState,
                            "deferred" === this.urlUpdateStrategy && (a.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, a),
                            this.browserUrlTree = a.urlAfterRedirects)
                        }
                        ), ((e,t,n)=>ce(r=>(new R2(t,r.targetRouterState,r.currentRouterState,n).activate(e),
                        r)))(this.rootContexts, this.routeReuseStrategy, a=>this.triggerEvent(a)), nn({
                            next() {
                                i = !0
                            },
                            complete() {
                                i = !0
                            }
                        }), function(e) {
                            return Fe((t,n)=>{
                                try {
                                    t.subscribe(n)
                                } finally {
                                    n.add(e)
                                }
                            }
                            )
                        }(()=>{
                            var a;
                            i || s || this.cancelNavigationTransition(o, `Navigation ID ${o.id} is not equal to the current navigation id ${this.navigationId}`),
                            (null == (a = this.currentNavigation) ? void 0 : a.id) === o.id && (this.currentNavigation = null)
                        }
                        ), to(a=>{
                            if (s = !0,
                            function(e) {
                                return e && e[gb]
                            }(a)) {
                                const l = jo(a.url);
                                l || (this.navigated = !0,
                                this.restoreHistory(o, !0));
                                const u = new db(o.id,this.serializeUrl(o.extractedUrl),a.message);
                                r.next(u),
                                l ? setTimeout(()=>{
                                    const f = this.urlHandlingStrategy.merge(a.url, this.rawUrlTree)
                                      , h = {
                                        skipLocationChange: o.extras.skipLocationChange,
                                        replaceUrl: "eager" === this.urlUpdateStrategy || wc(o.source)
                                    };
                                    this.scheduleNavigation(f, "imperative", null, h, {
                                        resolve: o.resolve,
                                        reject: o.reject,
                                        promise: o.promise
                                    })
                                }
                                , 0) : o.resolve(!1)
                            } else {
                                this.restoreHistory(o, !0);
                                const l = new Uk(o.id,this.serializeUrl(o.extractedUrl),a);
                                r.next(l);
                                try {
                                    o.resolve(this.errorHandler(a))
                                } catch (u) {
                                    o.reject(u)
                                }
                            }
                            return Dn
                        }
                        ))
                    }
                    ))
                }
                resetRootComponentType(n) {
                    this.rootComponentType = n,
                    this.routerState.root.component = this.rootComponentType
                }
                setTransition(n) {
                    this.transitions.next(F(F({}, this.transitions.value), n))
                }
                initialNavigation() {
                    this.setUpLocationChangeListener(),
                    0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                        replaceUrl: !0
                    })
                }
                setUpLocationChangeListener() {
                    this.locationSubscription || (this.locationSubscription = this.location.subscribe(n=>{
                        const r = "popstate" === n.type ? "popstate" : "hashchange";
                        "popstate" === r && setTimeout(()=>{
                            var a;
                            const o = {
                                replaceUrl: !0
                            }
                              , i = (null == (a = n.state) ? void 0 : a.navigationId) ? n.state : null;
                            if (i) {
                                const l = F({}, i);
                                delete l.navigationId,
                                delete l.\u0275routerPageId,
                                0 !== Object.keys(l).length && (o.state = l)
                            }
                            const s = this.parseUrl(n.url);
                            this.scheduleNavigation(s, r, i, o)
                        }
                        , 0)
                    }
                    ))
                }
                get url() {
                    return this.serializeUrl(this.currentUrlTree)
                }
                getCurrentNavigation() {
                    return this.currentNavigation
                }
                triggerEvent(n) {
                    this.events.next(n)
                }
                resetConfig(n) {
                    Ub(n),
                    this.config = n.map(Yp),
                    this.navigated = !1,
                    this.lastSuccessfulId = -1
                }
                ngOnDestroy() {
                    this.dispose()
                }
                dispose() {
                    this.transitions.complete(),
                    this.locationSubscription && (this.locationSubscription.unsubscribe(),
                    this.locationSubscription = void 0),
                    this.disposed = !0
                }
                createUrlTree(n, r={}) {
                    const {relativeTo: o, queryParams: i, fragment: s, queryParamsHandling: a, preserveFragment: l} = r
                      , u = o || this.routerState.root
                      , f = l ? this.currentUrlTree.fragment : s;
                    let h = null;
                    switch (a) {
                    case "merge":
                        h = F(F({}, this.currentUrlTree.queryParams), i);
                        break;
                    case "preserve":
                        h = this.currentUrlTree.queryParams;
                        break;
                    default:
                        h = i || null
                    }
                    return null !== h && (h = this.removeEmptyProps(h)),
                    function(e, t, n, r, o) {
                        if (0 === n.length)
                            return qp(t.root, t.root, t, r, o);
                        const i = function(e) {
                            if ("string" == typeof e[0] && 1 === e.length && "/" === e[0])
                                return new kb(!0,0,e);
                            let t = 0
                              , n = !1;
                            const r = e.reduce((o,i,s)=>{
                                if ("object" == typeof i && null != i) {
                                    if (i.outlets) {
                                        const a = {};
                                        return ft(i.outlets, (l,u)=>{
                                            a[u] = "string" == typeof l ? l.split("/") : l
                                        }
                                        ),
                                        [...o, {
                                            outlets: a
                                        }]
                                    }
                                    if (i.segmentPath)
                                        return [...o, i.segmentPath]
                                }
                                return "string" != typeof i ? [...o, i] : 0 === s ? (i.split("/").forEach((a,l)=>{
                                    0 == l && "." === a || (0 == l && "" === a ? n = !0 : ".." === a ? t++ : "" != a && o.push(a))
                                }
                                ),
                                o) : [...o, i]
                            }
                            , []);
                            return new kb(n,t,r)
                        }(n);
                        if (i.toRoot())
                            return qp(t.root, new re([],{}), t, r, o);
                        const s = function(e, t, n) {
                            if (e.isAbsolute)
                                return new zp(t.root,!0,0);
                            if (-1 === n.snapshot._lastPathIndex) {
                                const i = n.snapshot._urlSegment;
                                return new zp(i,i === t.root,0)
                            }
                            const r = dc(e.commands[0]) ? 0 : 1;
                            return function(e, t, n) {
                                let r = e
                                  , o = t
                                  , i = n;
                                for (; i > o; ) {
                                    if (i -= o,
                                    r = r.parent,
                                    !r)
                                        throw new Error("Invalid number of '../'");
                                    o = r.segments.length
                                }
                                return new zp(r,!1,o - i)
                            }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots)
                        }(i, t, e)
                          , a = s.processChildren ? fc(s.segmentGroup, s.index, i.commands) : Vb(s.segmentGroup, s.index, i.commands);
                        return qp(s.segmentGroup, a, t, r, o)
                    }(u, this.currentUrlTree, n, h, null != f ? f : null)
                }
                navigateByUrl(n, r={
                    skipLocationChange: !1
                }) {
                    const o = jo(n) ? n : this.parseUrl(n)
                      , i = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
                    return this.scheduleNavigation(i, "imperative", null, r)
                }
                navigate(n, r={
                    skipLocationChange: !1
                }) {
                    return function(e) {
                        for (let t = 0; t < e.length; t++) {
                            const n = e[t];
                            if (null == n)
                                throw new Error(`The requested path contains ${n} segment at index ${t}`)
                        }
                    }(n),
                    this.navigateByUrl(this.createUrlTree(n, r), r)
                }
                serializeUrl(n) {
                    return this.urlSerializer.serialize(n)
                }
                parseUrl(n) {
                    let r;
                    try {
                        r = this.urlSerializer.parse(n)
                    } catch (o) {
                        r = this.malformedUriErrorHandler(o, this.urlSerializer, n)
                    }
                    return r
                }
                isActive(n, r) {
                    let o;
                    if (o = !0 === r ? F({}, TV) : !1 === r ? F({}, xV) : r,
                    jo(n))
                        return Cb(this.currentUrlTree, n, o);
                    const i = this.parseUrl(n);
                    return Cb(this.currentUrlTree, i, o)
                }
                removeEmptyProps(n) {
                    return Object.keys(n).reduce((r,o)=>{
                        const i = n[o];
                        return null != i && (r[o] = i),
                        r
                    }
                    , {})
                }
                processNavigations() {
                    this.navigations.subscribe(n=>{
                        this.navigated = !0,
                        this.lastSuccessfulId = n.id,
                        this.currentPageId = n.targetPageId,
                        this.events.next(new ka(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),
                        this.lastSuccessfulNavigation = this.currentNavigation,
                        n.resolve(!0)
                    }
                    , n=>{
                        this.console.warn(`Unhandled Navigation Error: ${n}`)
                    }
                    )
                }
                scheduleNavigation(n, r, o, i, s) {
                    var b, v, T;
                    if (this.disposed)
                        return Promise.resolve(!1);
                    const a = this.transitions.value
                      , l = wc(r) && a && !wc(a.source)
                      , u = a.rawUrl.toString() === n.toString()
                      , f = a.id === (null == (b = this.currentNavigation) ? void 0 : b.id);
                    if (l && u && f)
                        return Promise.resolve(!0);
                    let g, m, y;
                    s ? (g = s.resolve,
                    m = s.reject,
                    y = s.promise) : y = new Promise((x,K)=>{
                        g = x,
                        m = K
                    }
                    );
                    const C = ++this.navigationId;
                    let w;
                    return "computed" === this.canceledNavigationResolution ? (0 === this.currentPageId && (o = this.location.getState()),
                    w = o && o.\u0275routerPageId ? o.\u0275routerPageId : i.replaceUrl || i.skipLocationChange ? null != (v = this.browserPageId) ? v : 0 : (null != (T = this.browserPageId) ? T : 0) + 1) : w = 0,
                    this.setTransition({
                        id: C,
                        targetPageId: w,
                        source: r,
                        restoredState: o,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: n,
                        extras: i,
                        resolve: g,
                        reject: m,
                        promise: y,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState
                    }),
                    y.catch(x=>Promise.reject(x))
                }
                setBrowserUrl(n, r) {
                    const o = this.urlSerializer.serialize(n)
                      , i = F(F({}, r.extras.state), this.generateNgRouterState(r.id, r.targetPageId));
                    this.location.isCurrentPathEqualTo(o) || r.extras.replaceUrl ? this.location.replaceState(o, "", i) : this.location.go(o, "", i)
                }
                restoreHistory(n, r=!1) {
                    var o, i;
                    if ("computed" === this.canceledNavigationResolution) {
                        const s = this.currentPageId - n.targetPageId;
                        "popstate" !== n.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== (null == (o = this.currentNavigation) ? void 0 : o.finalUrl) || 0 === s ? this.currentUrlTree === (null == (i = this.currentNavigation) ? void 0 : i.finalUrl) && 0 === s && (this.resetState(n),
                        this.browserUrlTree = n.currentUrlTree,
                        this.resetUrlToCurrentUrlTree()) : this.location.historyGo(s)
                    } else
                        "replace" === this.canceledNavigationResolution && (r && this.resetState(n),
                        this.resetUrlToCurrentUrlTree())
                }
                resetState(n) {
                    this.routerState = n.currentRouterState,
                    this.currentUrlTree = n.currentUrlTree,
                    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n.rawUrl)
                }
                resetUrlToCurrentUrlTree() {
                    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                }
                cancelNavigationTransition(n, r) {
                    const o = new db(n.id,this.serializeUrl(n.extractedUrl),r);
                    this.triggerEvent(o),
                    n.resolve(!1)
                }
                generateNgRouterState(n, r) {
                    return "computed" === this.canceledNavigationResolution ? {
                        navigationId: n,
                        \u0275routerPageId: r
                    } : {
                        navigationId: n
                    }
                }
            }
            return e.\u0275fac = function(n) {
                zf()
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        function wc(e) {
            return "imperative" !== e
        }
        class oE {
        }
        class iE {
            preload(t, n) {
                return J(null)
            }
        }
        let sE = (()=>{
            class e {
                constructor(n, r, o, i) {
                    this.router = n,
                    this.injector = o,
                    this.preloadingStrategy = i,
                    this.loader = new nE(o,r,l=>n.triggerEvent(new fb(l)),l=>n.triggerEvent(new hb(l)))
                }
                setUpPreloading() {
                    this.subscription = this.router.events.pipe(es(n=>n instanceof ka), Oa(()=>this.preload())).subscribe(()=>{}
                    )
                }
                preload() {
                    const n = this.injector.get(or);
                    return this.processRoutes(n, this.router.config)
                }
                ngOnDestroy() {
                    this.subscription && this.subscription.unsubscribe()
                }
                processRoutes(n, r) {
                    const o = [];
                    for (const i of r)
                        if (i.loadChildren && !i.canLoad && i._loadedConfig) {
                            const s = i._loadedConfig;
                            o.push(this.processRoutes(s.module, s.routes))
                        } else
                            i.loadChildren && !i.canLoad ? o.push(this.preloadConfig(n, i)) : i.children && o.push(this.processRoutes(n, i.children));
                    return Be(o).pipe(U(), ce(i=>{}
                    ))
                }
                preloadConfig(n, r) {
                    return this.preloadingStrategy.preload(r, ()=>(r._loadedConfig ? J(r._loadedConfig) : this.loader.load(n.injector, r)).pipe(Le(i=>(r._loadedConfig = i,
                    this.processRoutes(i.module, i.routes)))))
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(rn),N(Tu),N(he),N(oE))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )()
          , ng = (()=>{
            class e {
                constructor(n, r, o={}) {
                    this.router = n,
                    this.viewportScroller = r,
                    this.options = o,
                    this.lastId = 0,
                    this.lastSource = "imperative",
                    this.restoredId = 0,
                    this.store = {},
                    o.scrollPositionRestoration = o.scrollPositionRestoration || "disabled",
                    o.anchorScrolling = o.anchorScrolling || "disabled"
                }
                init() {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"),
                    this.routerEventsSubscription = this.createScrollEvents(),
                    this.scrollEventsSubscription = this.consumeScrollEvents()
                }
                createScrollEvents() {
                    return this.router.events.subscribe(n=>{
                        n instanceof Lp ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(),
                        this.lastSource = n.navigationTrigger,
                        this.restoredId = n.restoredState ? n.restoredState.navigationId : 0) : n instanceof ka && (this.lastId = n.id,
                        this.scheduleScrollEvent(n, this.router.parseUrl(n.urlAfterRedirects).fragment))
                    }
                    )
                }
                consumeScrollEvents() {
                    return this.router.events.subscribe(n=>{
                        n instanceof pb && (n.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(n.position) : n.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(n.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                    }
                    )
                }
                scheduleScrollEvent(n, r) {
                    this.router.triggerEvent(new pb(n,"popstate" === this.lastSource ? this.store[this.restoredId] : null,r))
                }
                ngOnDestroy() {
                    this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                    this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                }
            }
            return e.\u0275fac = function(n) {
                zf()
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        const Ho = new X("ROUTER_CONFIGURATION")
          , aE = new X("ROUTER_FORROOT_GUARD")
          , OV = [fp, {
            provide: Eb,
            useClass: Ab
        }, {
            provide: rn,
            useFactory: function(e, t, n, r, o, i, s={}, a, l) {
                const u = new rn(null,e,t,n,r,o,yb(i));
                return a && (u.urlHandlingStrategy = a),
                l && (u.routeReuseStrategy = l),
                function(e, t) {
                    e.errorHandler && (t.errorHandler = e.errorHandler),
                    e.malformedUriErrorHandler && (t.malformedUriErrorHandler = e.malformedUriErrorHandler),
                    e.onSameUrlNavigation && (t.onSameUrlNavigation = e.onSameUrlNavigation),
                    e.paramsInheritanceStrategy && (t.paramsInheritanceStrategy = e.paramsInheritanceStrategy),
                    e.relativeLinkResolution && (t.relativeLinkResolution = e.relativeLinkResolution),
                    e.urlUpdateStrategy && (t.urlUpdateStrategy = e.urlUpdateStrategy),
                    e.canceledNavigationResolution && (t.canceledNavigationResolution = e.canceledNavigationResolution)
                }(s, u),
                s.enableTracing && u.events.subscribe(f=>{
                    var h, g;
                    null == (h = console.group) || h.call(console, `Router Event: ${f.constructor.name}`),
                    console.log(f.toString()),
                    console.log(f),
                    null == (g = console.groupEnd) || g.call(console)
                }
                ),
                u
            },
            deps: [Eb, $a, fp, he, Tu, Xp, Ho, [class {
            }
            , new Bt], [class {
            }
            , new Bt]]
        }, $a, {
            provide: os,
            useFactory: function(e) {
                return e.routerState.root
            },
            deps: [rn]
        }, sE, iE, class {
            preload(t, n) {
                return n().pipe(to(()=>J(null)))
            }
        }
        , {
            provide: Ho,
            useValue: {
                enableTracing: !1
            }
        }];
        function kV() {
            return new Fh("Router",rn)
        }
        let lE = (()=>{
            class e {
                constructor(n, r) {}
                static forRoot(n, r) {
                    return {
                        ngModule: e,
                        providers: [OV, uE(n), {
                            provide: aE,
                            useFactory: BV,
                            deps: [[rn, new Bt, new Qr]]
                        }, {
                            provide: Ho,
                            useValue: r || {}
                        }, {
                            provide: Xi,
                            useFactory: LV,
                            deps: [ko, [new yi(dp), new Bt], Ho]
                        }, {
                            provide: ng,
                            useFactory: VV,
                            deps: [rn, MO, Ho]
                        }, {
                            provide: oE,
                            useExisting: r && r.preloadingStrategy ? r.preloadingStrategy : iE
                        }, {
                            provide: Fh,
                            multi: !0,
                            useFactory: kV
                        }, [rg, {
                            provide: ma,
                            multi: !0,
                            useFactory: $V,
                            deps: [rg]
                        }, {
                            provide: cE,
                            useFactory: GV,
                            deps: [rg]
                        }, {
                            provide: gv,
                            multi: !0,
                            useExisting: cE
                        }]]
                    }
                }
                static forChild(n) {
                    return {
                        ngModule: e,
                        providers: [uE(n)]
                    }
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(aE, 8),N(rn, 8))
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({}),
            e
        }
        )();
        function VV(e, t, n) {
            return n.scrollOffset && t.setOffset(n.scrollOffset),
            new ng(e,t,n)
        }
        function LV(e, t, n={}) {
            return n.useHash ? new oF(e,t) : new SD(e,t)
        }
        function BV(e) {
            return "guarded"
        }
        function uE(e) {
            return [{
                provide: tA,
                multi: !0,
                useValue: e
            }, {
                provide: Xp,
                multi: !0,
                useValue: e
            }]
        }
        let rg = (()=>{
            class e {
                constructor(n) {
                    this.injector = n,
                    this.initNavigation = !1,
                    this.destroyed = !1,
                    this.resultOfPreactivationDone = new Ot
                }
                appInitializer() {
                    return this.injector.get(tF, Promise.resolve(null)).then(()=>{
                        if (this.destroyed)
                            return Promise.resolve(!0);
                        let r = null;
                        const o = new Promise(a=>r = a)
                          , i = this.injector.get(rn)
                          , s = this.injector.get(Ho);
                        return "disabled" === s.initialNavigation ? (i.setUpLocationChangeListener(),
                        r(!0)) : "enabled" === s.initialNavigation || "enabledBlocking" === s.initialNavigation ? (i.hooks.afterPreactivation = ()=>this.initNavigation ? J(null) : (this.initNavigation = !0,
                        r(!0),
                        this.resultOfPreactivationDone),
                        i.initialNavigation()) : r(!0),
                        o
                    }
                    )
                }
                bootstrapListener(n) {
                    const r = this.injector.get(Ho)
                      , o = this.injector.get(sE)
                      , i = this.injector.get(ng)
                      , s = this.injector.get(rn)
                      , a = this.injector.get(qi);
                    n === a.components[0] && (("enabledNonBlocking" === r.initialNavigation || void 0 === r.initialNavigation) && s.initialNavigation(),
                    o.setUpPreloading(),
                    i.init(),
                    s.resetRootComponentType(a.componentTypes[0]),
                    this.resultOfPreactivationDone.next(null),
                    this.resultOfPreactivationDone.complete())
                }
                ngOnDestroy() {
                    this.destroyed = !0
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(N(he))
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )();
        function $V(e) {
            return e.appInitializer.bind(e)
        }
        function GV(e) {
            return e.bootstrapListener.bind(e)
        }
        const cE = new X("Router Initializer")
          , qV = [];
        let zV = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({
                imports: [[lE.forRoot(qV)], lE]
            }),
            e
        }
        )();
        var QV = we(659)
          , KV = we.n(QV);
        let dE = (()=>{
            class e {
                constructor(n, r) {
                    this._renderer = n,
                    this._elementRef = r,
                    this.onChange = o=>{}
                    ,
                    this.onTouched = ()=>{}
                }
                setProperty(n, r) {
                    this._renderer.setProperty(this._elementRef.nativeElement, n, r)
                }
                registerOnTouched(n) {
                    this.onTouched = n
                }
                registerOnChange(n) {
                    this.onChange = n
                }
                setDisabledState(n) {
                    this.setProperty("disabled", n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(I(Ir),I(rt))
            }
            ,
            e.\u0275dir = V({
                type: e
            }),
            e
        }
        )()
          , Uo = (()=>{
            class e extends dE {
            }
            return e.\u0275fac = function() {
                let t;
                return function(r) {
                    return (t || (t = function(e) {
                        return En(()=>{
                            const t = e.prototype.constructor
                              , n = t[An] || Od(t)
                              , r = Object.prototype;
                            let o = Object.getPrototypeOf(e.prototype).constructor;
                            for (; o && o !== r; ) {
                                const i = o[An] || Od(o);
                                if (i && i !== n)
                                    return i;
                                o = Object.getPrototypeOf(o)
                            }
                            return i=>new i
                        }
                        )
                    }(e)))(r || e)
                }
            }(),
            e.\u0275dir = V({
                type: e,
                features: [ve]
            }),
            e
        }
        )();
        const lr = new X("NgValueAccessor")
          , JV = {
            provide: lr,
            useExisting: ge(()=>Cc),
            multi: !0
        }
          , eL = new X("CompositionEventMode");
        let Cc = (()=>{
            class e extends dE {
                constructor(n, r, o) {
                    super(n, r),
                    this._compositionMode = o,
                    this._composing = !1,
                    null == this._compositionMode && (this._compositionMode = !function() {
                        const e = ir() ? ir().getUserAgent() : "";
                        return /android (\d+)/.test(e.toLowerCase())
                    }())
                }
                writeValue(n) {
                    this.setProperty("value", null == n ? "" : n)
                }
                _handleInput(n) {
                    (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(n)
                }
                _compositionStart() {
                    this._composing = !0
                }
                _compositionEnd(n) {
                    this._composing = !1,
                    this._compositionMode && this.onChange(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(I(Ir),I(rt),I(eL, 8))
            }
            ,
            e.\u0275dir = V({
                type: e,
                selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
                hostBindings: function(n, r) {
                    1 & n && Ut("input", function(i) {
                        return r._handleInput(i.target.value)
                    })("blur", function() {
                        return r.onTouched()
                    })("compositionstart", function() {
                        return r._compositionStart()
                    })("compositionend", function(i) {
                        return r._compositionEnd(i.target.value)
                    })
                },
                features: [Ee([JV]), ve]
            }),
            e
        }
        )();
        function ro(e) {
            return null == e || 0 === e.length
        }
        function hE(e) {
            return null != e && "number" == typeof e.length
        }
        const Dt = new X("NgValidators")
          , oo = new X("NgAsyncValidators")
          , tL = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        class nL {
            static min(t) {
                return e = t,
                t=>{
                    if (ro(t.value) || ro(e))
                        return null;
                    const n = parseFloat(t.value);
                    return !isNaN(n) && n < e ? {
                        min: {
                            min: e,
                            actual: t.value
                        }
                    } : null
                }
                ;
                var e
            }
            static max(t) {
                return e = t,
                t=>{
                    if (ro(t.value) || ro(e))
                        return null;
                    const n = parseFloat(t.value);
                    return !isNaN(n) && n > e ? {
                        max: {
                            max: e,
                            actual: t.value
                        }
                    } : null
                }
                ;
                var e
            }
            static required(t) {
                return ro(t.value) ? {
                    required: !0
                } : null
            }
            static requiredTrue(t) {
                return !0 === t.value ? null : {
                    required: !0
                }
            }
            static email(t) {
                return ro((e = t).value) || tL.test(e.value) ? null : {
                    email: !0
                };
                var e
            }
            static minLength(t) {
                return e = t,
                t=>ro(t.value) || !hE(t.value) ? null : t.value.length < e ? {
                    minlength: {
                        requiredLength: e,
                        actualLength: t.value.length
                    }
                } : null;
                var e
            }
            static maxLength(t) {
                return e = t,
                t=>hE(t.value) && t.value.length > e ? {
                    maxlength: {
                        requiredLength: e,
                        actualLength: t.value.length
                    }
                } : null;
                var e
            }
            static pattern(t) {
                return function(e) {
                    if (!e)
                        return za;
                    let t, n;
                    return "string" == typeof e ? (n = "",
                    "^" !== e.charAt(0) && (n += "^"),
                    n += e,
                    "$" !== e.charAt(e.length - 1) && (n += "$"),
                    t = new RegExp(n)) : (n = e.toString(),
                    t = e),
                    r=>{
                        if (ro(r.value))
                            return null;
                        const o = r.value;
                        return t.test(o) ? null : {
                            pattern: {
                                requiredPattern: n,
                                actualValue: o
                            }
                        }
                    }
                }(t)
            }
            static nullValidator(t) {
                return null
            }
            static compose(t) {
                return ME(t)
            }
            static composeAsync(t) {
                return SE(t)
            }
        }
        function za(e) {
            return null
        }
        function DE(e) {
            return null != e
        }
        function bE(e) {
            const t = ia(e) ? Be(e) : e;
            return hu(t),
            t
        }
        function EE(e) {
            let t = {};
            return e.forEach(n=>{
                t = null != n ? F(F({}, t), n) : t
            }
            ),
            0 === Object.keys(t).length ? null : t
        }
        function AE(e, t) {
            return t.map(n=>n(e))
        }
        function IE(e) {
            return e.map(t=>function(e) {
                return !e.validate
            }(t) ? t : n=>t.validate(n))
        }
        function ME(e) {
            if (!e)
                return null;
            const t = e.filter(DE);
            return 0 == t.length ? null : function(n) {
                return EE(AE(n, t))
            }
        }
        function og(e) {
            return null != e ? ME(IE(e)) : null
        }
        function SE(e) {
            if (!e)
                return null;
            const t = e.filter(DE);
            return 0 == t.length ? null : function(n) {
                return function(...e) {
                    const t = gl(e)
                      , {args: n, keys: r} = nb(e)
                      , o = new oe(i=>{
                        const {length: s} = n;
                        if (!s)
                            return void i.complete();
                        const a = new Array(s);
                        let l = s
                          , u = s;
                        for (let f = 0; f < s; f++) {
                            let h = !1;
                            sn(n[f]).subscribe(new Ve(i,g=>{
                                h || (h = !0,
                                u--),
                                a[f] = g
                            }
                            ,()=>l--,void 0,()=>{
                                (!l || !h) && (u || i.next(r ? ob(r, a) : a),
                                i.complete())
                            }
                            ))
                        }
                    }
                    );
                    return t ? o.pipe(rb(t)) : o
                }(AE(n, t).map(bE)).pipe(ce(EE))
            }
        }
        function ig(e) {
            return null != e ? SE(IE(e)) : null
        }
        function TE(e, t) {
            return null === e ? [t] : Array.isArray(e) ? [...e, t] : [e, t]
        }
        function xE(e) {
            return e._rawValidators
        }
        function RE(e) {
            return e._rawAsyncValidators
        }
        function sg(e) {
            return e ? Array.isArray(e) ? e : [e] : []
        }
        function vc(e, t) {
            return Array.isArray(e) ? e.includes(t) : e === t
        }
        function PE(e, t) {
            const n = sg(t);
            return sg(e).forEach(o=>{
                vc(n, o) || n.push(o)
            }
            ),
            n
        }
        function NE(e, t) {
            return sg(t).filter(n=>!vc(e, n))
        }
        class FE {
            constructor() {
                this._rawValidators = [],
                this._rawAsyncValidators = [],
                this._onDestroyCallbacks = []
            }
            get value() {
                return this.control ? this.control.value : null
            }
            get valid() {
                return this.control ? this.control.valid : null
            }
            get invalid() {
                return this.control ? this.control.invalid : null
            }
            get pending() {
                return this.control ? this.control.pending : null
            }
            get disabled() {
                return this.control ? this.control.disabled : null
            }
            get enabled() {
                return this.control ? this.control.enabled : null
            }
            get errors() {
                return this.control ? this.control.errors : null
            }
            get pristine() {
                return this.control ? this.control.pristine : null
            }
            get dirty() {
                return this.control ? this.control.dirty : null
            }
            get touched() {
                return this.control ? this.control.touched : null
            }
            get status() {
                return this.control ? this.control.status : null
            }
            get untouched() {
                return this.control ? this.control.untouched : null
            }
            get statusChanges() {
                return this.control ? this.control.statusChanges : null
            }
            get valueChanges() {
                return this.control ? this.control.valueChanges : null
            }
            get path() {
                return null
            }
            _setValidators(t) {
                this._rawValidators = t || [],
                this._composedValidatorFn = og(this._rawValidators)
            }
            _setAsyncValidators(t) {
                this._rawAsyncValidators = t || [],
                this._composedAsyncValidatorFn = ig(this._rawAsyncValidators)
            }
            get validator() {
                return this._composedValidatorFn || null
            }
            get asyncValidator() {
                return this._composedAsyncValidatorFn || null
            }
            _registerOnDestroy(t) {
                this._onDestroyCallbacks.push(t)
            }
            _invokeOnDestroyCallbacks() {
                this._onDestroyCallbacks.forEach(t=>t()),
                this._onDestroyCallbacks = []
            }
            reset(t) {
                this.control && this.control.reset(t)
            }
            hasError(t, n) {
                return !!this.control && this.control.hasError(t, n)
            }
            getError(t, n) {
                return this.control ? this.control.getError(t, n) : null
            }
        }
        class Ft extends FE {
            get formDirective() {
                return null
            }
            get path() {
                return null
            }
        }
        class io extends FE {
            constructor() {
                super(...arguments),
                this._parent = null,
                this.name = null,
                this.valueAccessor = null
            }
        }
        class OE {
            constructor(t) {
                this._cd = t
            }
            is(t) {
                var n, r, o;
                return "submitted" === t ? !!(null == (n = this._cd) ? void 0 : n.submitted) : !!(null == (o = null == (r = this._cd) ? void 0 : r.control) ? void 0 : o[t])
            }
        }
        let kE = (()=>{
            class e extends OE {
                constructor(n) {
                    super(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(I(io, 2))
            }
            ,
            e.\u0275dir = V({
                type: e,
                selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
                hostVars: 14,
                hostBindings: function(n, r) {
                    2 & n && pu("ng-untouched", r.is("untouched"))("ng-touched", r.is("touched"))("ng-pristine", r.is("pristine"))("ng-dirty", r.is("dirty"))("ng-valid", r.is("valid"))("ng-invalid", r.is("invalid"))("ng-pending", r.is("pending"))
                },
                features: [ve]
            }),
            e
        }
        )()
          , VE = (()=>{
            class e extends OE {
                constructor(n) {
                    super(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(I(Ft, 10))
            }
            ,
            e.\u0275dir = V({
                type: e,
                selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
                hostVars: 16,
                hostBindings: function(n, r) {
                    2 & n && pu("ng-untouched", r.is("untouched"))("ng-touched", r.is("touched"))("ng-pristine", r.is("pristine"))("ng-dirty", r.is("dirty"))("ng-valid", r.is("valid"))("ng-invalid", r.is("invalid"))("ng-pending", r.is("pending"))("ng-submitted", r.is("submitted"))
                },
                features: [ve]
            }),
            e
        }
        )();
        function Qa(e, t) {
            ug(e, t),
            t.valueAccessor.writeValue(e.value),
            function(e, t) {
                t.valueAccessor.registerOnChange(n=>{
                    e._pendingValue = n,
                    e._pendingChange = !0,
                    e._pendingDirty = !0,
                    "change" === e.updateOn && LE(e, t)
                }
                )
            }(e, t),
            function(e, t) {
                const n = (r,o)=>{
                    t.valueAccessor.writeValue(r),
                    o && t.viewToModelUpdate(r)
                }
                ;
                e.registerOnChange(n),
                t._registerOnDestroy(()=>{
                    e._unregisterOnChange(n)
                }
                )
            }(e, t),
            function(e, t) {
                t.valueAccessor.registerOnTouched(()=>{
                    e._pendingTouched = !0,
                    "blur" === e.updateOn && e._pendingChange && LE(e, t),
                    "submit" !== e.updateOn && e.markAsTouched()
                }
                )
            }(e, t),
            function(e, t) {
                if (t.valueAccessor.setDisabledState) {
                    const n = r=>{
                        t.valueAccessor.setDisabledState(r)
                    }
                    ;
                    e.registerOnDisabledChange(n),
                    t._registerOnDestroy(()=>{
                        e._unregisterOnDisabledChange(n)
                    }
                    )
                }
            }(e, t)
        }
        function Ec(e, t, n=!0) {
            const r = ()=>{}
            ;
            t.valueAccessor && (t.valueAccessor.registerOnChange(r),
            t.valueAccessor.registerOnTouched(r)),
            Ic(e, t),
            e && (t._invokeOnDestroyCallbacks(),
            e._registerOnCollectionChange(()=>{}
            ))
        }
        function Ac(e, t) {
            e.forEach(n=>{
                n.registerOnValidatorChange && n.registerOnValidatorChange(t)
            }
            )
        }
        function ug(e, t) {
            const n = xE(e);
            null !== t.validator ? e.setValidators(TE(n, t.validator)) : "function" == typeof n && e.setValidators([n]);
            const r = RE(e);
            null !== t.asyncValidator ? e.setAsyncValidators(TE(r, t.asyncValidator)) : "function" == typeof r && e.setAsyncValidators([r]);
            const o = ()=>e.updateValueAndValidity();
            Ac(t._rawValidators, o),
            Ac(t._rawAsyncValidators, o)
        }
        function Ic(e, t) {
            let n = !1;
            if (null !== e) {
                if (null !== t.validator) {
                    const o = xE(e);
                    if (Array.isArray(o) && o.length > 0) {
                        const i = o.filter(s=>s !== t.validator);
                        i.length !== o.length && (n = !0,
                        e.setValidators(i))
                    }
                }
                if (null !== t.asyncValidator) {
                    const o = RE(e);
                    if (Array.isArray(o) && o.length > 0) {
                        const i = o.filter(s=>s !== t.asyncValidator);
                        i.length !== o.length && (n = !0,
                        e.setAsyncValidators(i))
                    }
                }
            }
            const r = ()=>{}
            ;
            return Ac(t._rawValidators, r),
            Ac(t._rawAsyncValidators, r),
            n
        }
        function LE(e, t) {
            e._pendingDirty && e.markAsDirty(),
            e.setValue(e._pendingValue, {
                emitModelToViewChange: !1
            }),
            t.viewToModelUpdate(e._pendingValue),
            e._pendingChange = !1
        }
        function Mc(e, t) {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        const Ka = "VALID"
          , Sc = "INVALID"
          , ss = "PENDING"
          , Ya = "DISABLED";
        function fg(e) {
            return (pg(e) ? e.validators : e) || null
        }
        function HE(e) {
            return Array.isArray(e) ? og(e) : e || null
        }
        function hg(e, t) {
            return (pg(t) ? t.asyncValidators : e) || null
        }
        function UE(e) {
            return Array.isArray(e) ? ig(e) : e || null
        }
        function pg(e) {
            return null != e && !Array.isArray(e) && "object" == typeof e
        }
        class gg {
            constructor(t, n) {
                this._hasOwnPendingAsyncValidator = !1,
                this._onCollectionChange = ()=>{}
                ,
                this._parent = null,
                this.pristine = !0,
                this.touched = !1,
                this._onDisabledChange = [],
                this._rawValidators = t,
                this._rawAsyncValidators = n,
                this._composedValidatorFn = HE(this._rawValidators),
                this._composedAsyncValidatorFn = UE(this._rawAsyncValidators)
            }
            get validator() {
                return this._composedValidatorFn
            }
            set validator(t) {
                this._rawValidators = this._composedValidatorFn = t
            }
            get asyncValidator() {
                return this._composedAsyncValidatorFn
            }
            set asyncValidator(t) {
                this._rawAsyncValidators = this._composedAsyncValidatorFn = t
            }
            get parent() {
                return this._parent
            }
            get valid() {
                return this.status === Ka
            }
            get invalid() {
                return this.status === Sc
            }
            get pending() {
                return this.status == ss
            }
            get disabled() {
                return this.status === Ya
            }
            get enabled() {
                return this.status !== Ya
            }
            get dirty() {
                return !this.pristine
            }
            get untouched() {
                return !this.touched
            }
            get updateOn() {
                return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
            }
            setValidators(t) {
                this._rawValidators = t,
                this._composedValidatorFn = HE(t)
            }
            setAsyncValidators(t) {
                this._rawAsyncValidators = t,
                this._composedAsyncValidatorFn = UE(t)
            }
            addValidators(t) {
                this.setValidators(PE(t, this._rawValidators))
            }
            addAsyncValidators(t) {
                this.setAsyncValidators(PE(t, this._rawAsyncValidators))
            }
            removeValidators(t) {
                this.setValidators(NE(t, this._rawValidators))
            }
            removeAsyncValidators(t) {
                this.setAsyncValidators(NE(t, this._rawAsyncValidators))
            }
            hasValidator(t) {
                return vc(this._rawValidators, t)
            }
            hasAsyncValidator(t) {
                return vc(this._rawAsyncValidators, t)
            }
            clearValidators() {
                this.validator = null
            }
            clearAsyncValidators() {
                this.asyncValidator = null
            }
            markAsTouched(t={}) {
                this.touched = !0,
                this._parent && !t.onlySelf && this._parent.markAsTouched(t)
            }
            markAllAsTouched() {
                this.markAsTouched({
                    onlySelf: !0
                }),
                this._forEachChild(t=>t.markAllAsTouched())
            }
            markAsUntouched(t={}) {
                this.touched = !1,
                this._pendingTouched = !1,
                this._forEachChild(n=>{
                    n.markAsUntouched({
                        onlySelf: !0
                    })
                }
                ),
                this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }
            markAsDirty(t={}) {
                this.pristine = !1,
                this._parent && !t.onlySelf && this._parent.markAsDirty(t)
            }
            markAsPristine(t={}) {
                this.pristine = !0,
                this._pendingDirty = !1,
                this._forEachChild(n=>{
                    n.markAsPristine({
                        onlySelf: !0
                    })
                }
                ),
                this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }
            markAsPending(t={}) {
                this.status = ss,
                !1 !== t.emitEvent && this.statusChanges.emit(this.status),
                this._parent && !t.onlySelf && this._parent.markAsPending(t)
            }
            disable(t={}) {
                const n = this._parentMarkedDirty(t.onlySelf);
                this.status = Ya,
                this.errors = null,
                this._forEachChild(r=>{
                    r.disable(st(F({}, t), {
                        onlySelf: !0
                    }))
                }
                ),
                this._updateValue(),
                !1 !== t.emitEvent && (this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._updateAncestors(st(F({}, t), {
                    skipPristineCheck: n
                })),
                this._onDisabledChange.forEach(r=>r(!0))
            }
            enable(t={}) {
                const n = this._parentMarkedDirty(t.onlySelf);
                this.status = Ka,
                this._forEachChild(r=>{
                    r.enable(st(F({}, t), {
                        onlySelf: !0
                    }))
                }
                ),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                }),
                this._updateAncestors(st(F({}, t), {
                    skipPristineCheck: n
                })),
                this._onDisabledChange.forEach(r=>r(!1))
            }
            _updateAncestors(t) {
                this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t),
                t.skipPristineCheck || this._parent._updatePristine(),
                this._parent._updateTouched())
            }
            setParent(t) {
                this._parent = t
            }
            updateValueAndValidity(t={}) {
                this._setInitialStatus(),
                this._updateValue(),
                this.enabled && (this._cancelExistingSubscription(),
                this.errors = this._runValidator(),
                this.status = this._calculateStatus(),
                (this.status === Ka || this.status === ss) && this._runAsyncValidator(t.emitEvent)),
                !1 !== t.emitEvent && (this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
            }
            _updateTreeValidity(t={
                emitEvent: !0
            }) {
                this._forEachChild(n=>n._updateTreeValidity(t)),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }
            _setInitialStatus() {
                this.status = this._allControlsDisabled() ? Ya : Ka
            }
            _runValidator() {
                return this.validator ? this.validator(this) : null
            }
            _runAsyncValidator(t) {
                if (this.asyncValidator) {
                    this.status = ss,
                    this._hasOwnPendingAsyncValidator = !0;
                    const n = bE(this.asyncValidator(this));
                    this._asyncValidationSubscription = n.subscribe(r=>{
                        this._hasOwnPendingAsyncValidator = !1,
                        this.setErrors(r, {
                            emitEvent: t
                        })
                    }
                    )
                }
            }
            _cancelExistingSubscription() {
                this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(),
                this._hasOwnPendingAsyncValidator = !1)
            }
            setErrors(t, n={}) {
                this.errors = t,
                this._updateControlsErrors(!1 !== n.emitEvent)
            }
            get(t) {
                return function(e, t, n) {
                    if (null == t || (Array.isArray(t) || (t = t.split(".")),
                    Array.isArray(t) && 0 === t.length))
                        return null;
                    let r = e;
                    return t.forEach(o=>{
                        r = r instanceof Za ? r.controls.hasOwnProperty(o) ? r.controls[o] : null : r instanceof mg && r.at(o) || null
                    }
                    ),
                    r
                }(this, t)
            }
            getError(t, n) {
                const r = n ? this.get(n) : this;
                return r && r.errors ? r.errors[t] : null
            }
            hasError(t, n) {
                return !!this.getError(t, n)
            }
            get root() {
                let t = this;
                for (; t._parent; )
                    t = t._parent;
                return t
            }
            _updateControlsErrors(t) {
                this.status = this._calculateStatus(),
                t && this.statusChanges.emit(this.status),
                this._parent && this._parent._updateControlsErrors(t)
            }
            _initObservables() {
                this.valueChanges = new Ne,
                this.statusChanges = new Ne
            }
            _calculateStatus() {
                return this._allControlsDisabled() ? Ya : this.errors ? Sc : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ss) ? ss : this._anyControlsHaveStatus(Sc) ? Sc : Ka
            }
            _anyControlsHaveStatus(t) {
                return this._anyControls(n=>n.status === t)
            }
            _anyControlsDirty() {
                return this._anyControls(t=>t.dirty)
            }
            _anyControlsTouched() {
                return this._anyControls(t=>t.touched)
            }
            _updatePristine(t={}) {
                this.pristine = !this._anyControlsDirty(),
                this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }
            _updateTouched(t={}) {
                this.touched = this._anyControlsTouched(),
                this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }
            _isBoxedValue(t) {
                return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value"in t && "disabled"in t
            }
            _registerOnCollectionChange(t) {
                this._onCollectionChange = t
            }
            _setUpdateStrategy(t) {
                pg(t) && null != t.updateOn && (this._updateOn = t.updateOn)
            }
            _parentMarkedDirty(t) {
                return !t && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty()
            }
        }
        class $o extends gg {
            constructor(t=null, n, r) {
                super(fg(n), hg(r, n)),
                this._onChange = [],
                this._applyFormState(t),
                this._setUpdateStrategy(n),
                this._initObservables(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            setValue(t, n={}) {
                this.value = this._pendingValue = t,
                this._onChange.length && !1 !== n.emitModelToViewChange && this._onChange.forEach(r=>r(this.value, !1 !== n.emitViewToModelChange)),
                this.updateValueAndValidity(n)
            }
            patchValue(t, n={}) {
                this.setValue(t, n)
            }
            reset(t=null, n={}) {
                this._applyFormState(t),
                this.markAsPristine(n),
                this.markAsUntouched(n),
                this.setValue(this.value, n),
                this._pendingChange = !1
            }
            _updateValue() {}
            _anyControls(t) {
                return !1
            }
            _allControlsDisabled() {
                return this.disabled
            }
            registerOnChange(t) {
                this._onChange.push(t)
            }
            _unregisterOnChange(t) {
                Mc(this._onChange, t)
            }
            registerOnDisabledChange(t) {
                this._onDisabledChange.push(t)
            }
            _unregisterOnDisabledChange(t) {
                Mc(this._onDisabledChange, t)
            }
            _forEachChild(t) {}
            _syncPendingControls() {
                return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(),
                this._pendingTouched && this.markAsTouched(),
                !this._pendingChange) || (this.setValue(this._pendingValue, {
                    onlySelf: !0,
                    emitModelToViewChange: !1
                }),
                0))
            }
            _applyFormState(t) {
                this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value,
                t.disabled ? this.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }) : this.enable({
                    onlySelf: !0,
                    emitEvent: !1
                })) : this.value = this._pendingValue = t
            }
        }
        class Za extends gg {
            constructor(t, n, r) {
                super(fg(n), hg(r, n)),
                this.controls = t,
                this._initObservables(),
                this._setUpdateStrategy(n),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            registerControl(t, n) {
                return this.controls[t] ? this.controls[t] : (this.controls[t] = n,
                n.setParent(this),
                n._registerOnCollectionChange(this._onCollectionChange),
                n)
            }
            addControl(t, n, r={}) {
                this.registerControl(t, n),
                this.updateValueAndValidity({
                    emitEvent: r.emitEvent
                }),
                this._onCollectionChange()
            }
            removeControl(t, n={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                delete this.controls[t],
                this.updateValueAndValidity({
                    emitEvent: n.emitEvent
                }),
                this._onCollectionChange()
            }
            setControl(t, n, r={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                delete this.controls[t],
                n && this.registerControl(t, n),
                this.updateValueAndValidity({
                    emitEvent: r.emitEvent
                }),
                this._onCollectionChange()
            }
            contains(t) {
                return this.controls.hasOwnProperty(t) && this.controls[t].enabled
            }
            setValue(t, n={}) {
                this._checkAllValuesPresent(t),
                Object.keys(t).forEach(r=>{
                    this._throwIfControlMissing(r),
                    this.controls[r].setValue(t[r], {
                        onlySelf: !0,
                        emitEvent: n.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(n)
            }
            patchValue(t, n={}) {
                null != t && (Object.keys(t).forEach(r=>{
                    this.controls[r] && this.controls[r].patchValue(t[r], {
                        onlySelf: !0,
                        emitEvent: n.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(n))
            }
            reset(t={}, n={}) {
                this._forEachChild((r,o)=>{
                    r.reset(t[o], {
                        onlySelf: !0,
                        emitEvent: n.emitEvent
                    })
                }
                ),
                this._updatePristine(n),
                this._updateTouched(n),
                this.updateValueAndValidity(n)
            }
            getRawValue() {
                return this._reduceChildren({}, (t,n,r)=>(t[r] = n instanceof $o ? n.value : n.getRawValue(),
                t))
            }
            _syncPendingControls() {
                let t = this._reduceChildren(!1, (n,r)=>!!r._syncPendingControls() || n);
                return t && this.updateValueAndValidity({
                    onlySelf: !0
                }),
                t
            }
            _throwIfControlMissing(t) {
                if (!Object.keys(this.controls).length)
                    throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.controls[t])
                    throw new Error(`Cannot find form control with name: ${t}.`)
            }
            _forEachChild(t) {
                Object.keys(this.controls).forEach(n=>{
                    const r = this.controls[n];
                    r && t(r, n)
                }
                )
            }
            _setUpControls() {
                this._forEachChild(t=>{
                    t.setParent(this),
                    t._registerOnCollectionChange(this._onCollectionChange)
                }
                )
            }
            _updateValue() {
                this.value = this._reduceValue()
            }
            _anyControls(t) {
                for (const n of Object.keys(this.controls)) {
                    const r = this.controls[n];
                    if (this.contains(n) && t(r))
                        return !0
                }
                return !1
            }
            _reduceValue() {
                return this._reduceChildren({}, (t,n,r)=>((n.enabled || this.disabled) && (t[r] = n.value),
                t))
            }
            _reduceChildren(t, n) {
                let r = t;
                return this._forEachChild((o,i)=>{
                    r = n(r, o, i)
                }
                ),
                r
            }
            _allControlsDisabled() {
                for (const t of Object.keys(this.controls))
                    if (this.controls[t].enabled)
                        return !1;
                return Object.keys(this.controls).length > 0 || this.disabled
            }
            _checkAllValuesPresent(t) {
                this._forEachChild((n,r)=>{
                    if (void 0 === t[r])
                        throw new Error(`Must supply a value for form control with name: '${r}'.`)
                }
                )
            }
        }
        class mg extends gg {
            constructor(t, n, r) {
                super(fg(n), hg(r, n)),
                this.controls = t,
                this._initObservables(),
                this._setUpdateStrategy(n),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            at(t) {
                return this.controls[t]
            }
            push(t, n={}) {
                this.controls.push(t),
                this._registerControl(t),
                this.updateValueAndValidity({
                    emitEvent: n.emitEvent
                }),
                this._onCollectionChange()
            }
            insert(t, n, r={}) {
                this.controls.splice(t, 0, n),
                this._registerControl(n),
                this.updateValueAndValidity({
                    emitEvent: r.emitEvent
                })
            }
            removeAt(t, n={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                this.controls.splice(t, 1),
                this.updateValueAndValidity({
                    emitEvent: n.emitEvent
                })
            }
            setControl(t, n, r={}) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(()=>{}
                ),
                this.controls.splice(t, 1),
                n && (this.controls.splice(t, 0, n),
                this._registerControl(n)),
                this.updateValueAndValidity({
                    emitEvent: r.emitEvent
                }),
                this._onCollectionChange()
            }
            get length() {
                return this.controls.length
            }
            setValue(t, n={}) {
                this._checkAllValuesPresent(t),
                t.forEach((r,o)=>{
                    this._throwIfControlMissing(o),
                    this.at(o).setValue(r, {
                        onlySelf: !0,
                        emitEvent: n.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(n)
            }
            patchValue(t, n={}) {
                null != t && (t.forEach((r,o)=>{
                    this.at(o) && this.at(o).patchValue(r, {
                        onlySelf: !0,
                        emitEvent: n.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(n))
            }
            reset(t=[], n={}) {
                this._forEachChild((r,o)=>{
                    r.reset(t[o], {
                        onlySelf: !0,
                        emitEvent: n.emitEvent
                    })
                }
                ),
                this._updatePristine(n),
                this._updateTouched(n),
                this.updateValueAndValidity(n)
            }
            getRawValue() {
                return this.controls.map(t=>t instanceof $o ? t.value : t.getRawValue())
            }
            clear(t={}) {
                this.controls.length < 1 || (this._forEachChild(n=>n._registerOnCollectionChange(()=>{}
                )),
                this.controls.splice(0),
                this.updateValueAndValidity({
                    emitEvent: t.emitEvent
                }))
            }
            _syncPendingControls() {
                let t = this.controls.reduce((n,r)=>!!r._syncPendingControls() || n, !1);
                return t && this.updateValueAndValidity({
                    onlySelf: !0
                }),
                t
            }
            _throwIfControlMissing(t) {
                if (!this.controls.length)
                    throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.at(t))
                    throw new Error(`Cannot find form control at index ${t}`)
            }
            _forEachChild(t) {
                this.controls.forEach((n,r)=>{
                    t(n, r)
                }
                )
            }
            _updateValue() {
                this.value = this.controls.filter(t=>t.enabled || this.disabled).map(t=>t.value)
            }
            _anyControls(t) {
                return this.controls.some(n=>n.enabled && t(n))
            }
            _setUpControls() {
                this._forEachChild(t=>this._registerControl(t))
            }
            _checkAllValuesPresent(t) {
                this._forEachChild((n,r)=>{
                    if (void 0 === t[r])
                        throw new Error(`Must supply a value for form control at index: ${r}.`)
                }
                )
            }
            _allControlsDisabled() {
                for (const t of this.controls)
                    if (t.enabled)
                        return !1;
                return this.controls.length > 0 || this.disabled
            }
            _registerControl(t) {
                t.setParent(this),
                t._registerOnCollectionChange(this._onCollectionChange)
            }
        }
        let zE = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275dir = V({
                type: e,
                selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
                hostAttrs: ["novalidate", ""]
            }),
            e
        }
        )()
          , KE = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({}),
            e
        }
        )();
        const _g = new X("NgModelWithFormControlWarning")
          , bL = {
            provide: Ft,
            useExisting: ge(()=>Tc)
        };
        let Tc = (()=>{
            class e extends Ft {
                constructor(n, r) {
                    super(),
                    this.validators = n,
                    this.asyncValidators = r,
                    this.submitted = !1,
                    this._onCollectionChange = ()=>this._updateDomValue(),
                    this.directives = [],
                    this.form = null,
                    this.ngSubmit = new Ne,
                    this._setValidators(n),
                    this._setAsyncValidators(r)
                }
                ngOnChanges(n) {
                    this._checkFormPresent(),
                    n.hasOwnProperty("form") && (this._updateValidators(),
                    this._updateDomValue(),
                    this._updateRegistrations(),
                    this._oldForm = this.form)
                }
                ngOnDestroy() {
                    this.form && (Ic(this.form, this),
                    this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange(()=>{}
                    ))
                }
                get formDirective() {
                    return this
                }
                get control() {
                    return this.form
                }
                get path() {
                    return []
                }
                addControl(n) {
                    const r = this.form.get(n.path);
                    return Qa(r, n),
                    r.updateValueAndValidity({
                        emitEvent: !1
                    }),
                    this.directives.push(n),
                    r
                }
                getControl(n) {
                    return this.form.get(n.path)
                }
                removeControl(n) {
                    Ec(n.control || null, n, !1),
                    Mc(this.directives, n)
                }
                addFormGroup(n) {
                    this._setUpFormContainer(n)
                }
                removeFormGroup(n) {
                    this._cleanUpFormContainer(n)
                }
                getFormGroup(n) {
                    return this.form.get(n.path)
                }
                addFormArray(n) {
                    this._setUpFormContainer(n)
                }
                removeFormArray(n) {
                    this._cleanUpFormContainer(n)
                }
                getFormArray(n) {
                    return this.form.get(n.path)
                }
                updateModel(n, r) {
                    this.form.get(n.path).setValue(r)
                }
                onSubmit(n) {
                    return this.submitted = !0,
                    function(e, t) {
                        e._syncPendingControls(),
                        t.forEach(n=>{
                            const r = n.control;
                            "submit" === r.updateOn && r._pendingChange && (n.viewToModelUpdate(r._pendingValue),
                            r._pendingChange = !1)
                        }
                        )
                    }(this.form, this.directives),
                    this.ngSubmit.emit(n),
                    !1
                }
                onReset() {
                    this.resetForm()
                }
                resetForm(n) {
                    this.form.reset(n),
                    this.submitted = !1
                }
                _updateDomValue() {
                    this.directives.forEach(n=>{
                        const r = n.control
                          , o = this.form.get(n.path);
                        r !== o && (Ec(r || null, n),
                        o instanceof $o && (Qa(o, n),
                        n.control = o))
                    }
                    ),
                    this.form._updateTreeValidity({
                        emitEvent: !1
                    })
                }
                _setUpFormContainer(n) {
                    const r = this.form.get(n.path);
                    (function(e, t) {
                        ug(e, t)
                    }
                    )(r, n),
                    r.updateValueAndValidity({
                        emitEvent: !1
                    })
                }
                _cleanUpFormContainer(n) {
                    if (this.form) {
                        const r = this.form.get(n.path);
                        r && function(e, t) {
                            return Ic(e, t)
                        }(r, n) && r.updateValueAndValidity({
                            emitEvent: !1
                        })
                    }
                }
                _updateRegistrations() {
                    this.form._registerOnCollectionChange(this._onCollectionChange),
                    this._oldForm && this._oldForm._registerOnCollectionChange(()=>{}
                    )
                }
                _updateValidators() {
                    ug(this.form, this),
                    this._oldForm && Ic(this._oldForm, this)
                }
                _checkFormPresent() {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(I(Dt, 10),I(oo, 10))
            }
            ,
            e.\u0275dir = V({
                type: e,
                selectors: [["", "formGroup", ""]],
                hostBindings: function(n, r) {
                    1 & n && Ut("submit", function(i) {
                        return r.onSubmit(i)
                    })("reset", function() {
                        return r.onReset()
                    })
                },
                inputs: {
                    form: ["formGroup", "form"]
                },
                outputs: {
                    ngSubmit: "ngSubmit"
                },
                exportAs: ["ngForm"],
                features: [Ee([bL]), ve, E]
            }),
            e
        }
        )();
        const IL = {
            provide: io,
            useExisting: ge(()=>vg)
        };
        let vg = (()=>{
            class e extends io {
                constructor(n, r, o, i, s) {
                    super(),
                    this._ngModelWarningConfig = s,
                    this._added = !1,
                    this.update = new Ne,
                    this._ngModelWarningSent = !1,
                    this._parent = n,
                    this._setValidators(r),
                    this._setAsyncValidators(o),
                    this.valueAccessor = function(e, t) {
                        if (!t)
                            return null;
                        let n, r, o;
                        return Array.isArray(t),
                        t.forEach(i=>{
                            i.constructor === Cc ? n = i : function(e) {
                                return Object.getPrototypeOf(e.constructor) === Uo
                            }(i) ? r = i : o = i
                        }
                        ),
                        o || r || n || null
                    }(0, i)
                }
                set isDisabled(n) {}
                ngOnChanges(n) {
                    this._added || this._setUpControl(),
                    function(e, t) {
                        if (!e.hasOwnProperty("model"))
                            return !1;
                        const n = e.model;
                        return !!n.isFirstChange() || !Object.is(t, n.currentValue)
                    }(n, this.viewModel) && (this.viewModel = this.model,
                    this.formDirective.updateModel(this, this.model))
                }
                ngOnDestroy() {
                    this.formDirective && this.formDirective.removeControl(this)
                }
                viewToModelUpdate(n) {
                    this.viewModel = n,
                    this.update.emit(n)
                }
                get path() {
                    return function(e, t) {
                        return [...t.path, e]
                    }(null == this.name ? this.name : this.name.toString(), this._parent)
                }
                get formDirective() {
                    return this._parent ? this._parent.formDirective : null
                }
                _checkParentType() {}
                _setUpControl() {
                    this._checkParentType(),
                    this.control = this.formDirective.addControl(this),
                    this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0),
                    this._added = !0
                }
            }
            return e._ngModelWarningSentOnce = !1,
            e.\u0275fac = function(n) {
                return new (n || e)(I(Ft, 13),I(Dt, 10),I(oo, 10),I(lr, 10),I(_g, 8))
            }
            ,
            e.\u0275dir = V({
                type: e,
                selectors: [["", "formControlName", ""]],
                inputs: {
                    name: ["formControlName", "name"],
                    isDisabled: ["disabled", "isDisabled"],
                    model: ["ngModel", "model"]
                },
                outputs: {
                    update: "ngModelChange"
                },
                features: [Ee([IL]), ve, E]
            }),
            e
        }
        )()
          , f0 = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({
                imports: [[KE]]
            }),
            e
        }
        )()
          , HL = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({
                imports: [f0]
            }),
            e
        }
        )()
          , h0 = (()=>{
            class e {
                static withConfig(n) {
                    return {
                        ngModule: e,
                        providers: [{
                            provide: _g,
                            useValue: n.warnOnNgModelWithFormControl
                        }]
                    }
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275mod = zt({
                type: e
            }),
            e.\u0275inj = bt({
                imports: [f0]
            }),
            e
        }
        )()
          , $L = (()=>{
            class e {
                group(n, r=null) {
                    const o = this._reduceControls(n);
                    let a, i = null, s = null;
                    return null != r && (function(e) {
                        return void 0 !== e.asyncValidators || void 0 !== e.validators || void 0 !== e.updateOn
                    }(r) ? (i = null != r.validators ? r.validators : null,
                    s = null != r.asyncValidators ? r.asyncValidators : null,
                    a = null != r.updateOn ? r.updateOn : void 0) : (i = null != r.validator ? r.validator : null,
                    s = null != r.asyncValidator ? r.asyncValidator : null)),
                    new Za(o,{
                        asyncValidators: s,
                        updateOn: a,
                        validators: i
                    })
                }
                control(n, r, o) {
                    return new $o(n,r,o)
                }
                array(n, r, o) {
                    const i = n.map(s=>this._createControl(s));
                    return new mg(i,r,o)
                }
                _reduceControls(n) {
                    const r = {};
                    return Object.keys(n).forEach(o=>{
                        r[o] = this._createControl(n[o])
                    }
                    ),
                    r
                }
                _createControl(n) {
                    return n instanceof $o || n instanceof Za || n instanceof mg ? n : Array.isArray(n) ? this.control(n[0], n.length > 1 ? n[1] : null, n.length > 2 ? n[2] : null) : this.control(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Q({
                token: e,
                factory: e.\u0275fac,
                providedIn: h0
            }),
            e
        }
        )();
        var GL = we(952);
        let WL = (()=>{
            class e {
                constructor(n) {
                    this.form = n,
                    this.title = "Pray",
                    this.curentNumber = 0,
                    this.prayForm = this.form.group({
                        desire: new $o("",[nL.required])
                    })
                }
                praySubmit() {
                    var val_mongmuon = $("textarea").val();
                    var val_mongmuon_full = $("textarea").val();
                    if (val_mongmuon.length > 65) {
                      val_mongmuon = val_mongmuon.slice(0, 65) + '...';
                    }
                    if (val_mongmuon == "") {
                        KV().fire("Kiểm tra thông tin", "Bạn chưa nhập thông tin để ước nguyện", "warning");
                        return;
                    }
                    // var filteremail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    // if (!filteremail.test(val_ten)) {
                    //     KV().fire("Kiểm tra thông tin", "Email của bạn không đúng định dạng.", "warning");
                    //     return;
                    // }
                    var myData = {
                        txtMonguoc: val_mongmuon
                    };
                    // jQuery.ajax({
                    //     type: "POST",
                    //     url: "https://fpt.edu.vn/DataPrayAsync",
                    //     dataType: "JSON",
                    //     data: myData,
                    //     success: function(msg) {
                    //         console.log(msg);
                    //     },
                    //     error: function(msg) {
                    //         console.log(msg);
                    //     }
                    // });
                   this.prayForm.valid && (1 == 1 ? (GL(),
                    this.prayForm.reset(),
                    this.setSession()) : KV().fire("Quay l\u1ea1i sau nh\xe9", "B\u1ea1n \u0111\xe3 th\u1eafp h\u01b0\u01a1ng r\u1ed3i, l\u1eddi c\u1ea7u nguy\u1ec7n c\u1ee7a b\u1ea1n c\u0169ng \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi \u0111i, ch\xfac b\u1ea1n may m\u1eafn", "success"))
                    $(".blink").remove();
                    const numClouds = 6;
                    for (let i = 0; i < numClouds; i++) {
                      const cloud = document.createElement('div');
                      cloud.className = 'cloud';
                      cloud.textContent = val_mongmuon;
                      cloud.style.padding = '60px';
                      cloud.style.paddingTop = '95px';
                      cloud.style.fontSize = '15px';
                      cloud.style.zIndex = -1;
                      // Vị trí top ngẫu nhiên
                      cloud.style.top = Math.random() * 80 + 'vh';
                      // Kích thước ngẫu nhiên
                      cloud.style.width = '300px';
                      cloud.style.height = '200px';
                      // Thời gian bay ngẫu nhiên
                      const duration = 20 + Math.random() * 20;
                      cloud.style.animationDuration = duration + 's';
                      // Trễ ngẫu nhiên để tạo hiệu ứng liên tục
                      cloud.style.animationDelay = (-Math.random() * duration) + 's';
                      document.body.appendChild(cloud);
                    }
                    $("<span class='blink'>Mong ước: [" + val_mongmuon_full + "] đã được gửi!</span>").insertAfter("button");
                    let inputValue = document.getElementById("wish").value;
                    const textarea = document.getElementsByTagName('textarea')[0];
                    if (textarea) {
                      textarea.style.display = 'none';
                    }
                    const btn = document.getElementsByTagName('button')[0]; // nút đầu tiên
                    if (btn) {
                      btn.style.display = 'none';
                    }
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // hoặc 'auto' nếu không muốn hiệu ứng mượt
                    });
                }
                setSession() {
                    sessionStorage.setItem("PRAY", "Isvalid")
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(I($L))
            }
            ,
            e.\u0275cmp = mo({
                type: e,
                selectors: [["app-root"]],
                decls: 20,
                vars: 1,
                consts: [["id", "canvas"], ["id", "hi"], [1, "header"], [1, "container"], [1, "row", "mx-auto", "pointer"], [1, "text-center", "ripple", "ripple-surface-info", "disable-select"], [1, "relative"], ["src", "assets/img/anh.png", "alt", "", 1, "img-fluid", "ban-tho", "rounded", "pt-5", 2, "height", "500px"], ["src", "assets/img/nhang.png", "alt", "", "data-aos", "fade-down", "data-aos-duration", "2500", 1, "text-center", "nhang", 2, "height", "115px", "left", "48.9%"], [1, "col-lg-3", "col-sm-3", "mx-auto", "mt-5"], [1, "progress", "mt-5"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-danger", "w-100"], [1, "content", "text-center", "mt-5"], ["id", "pray", 3, "formGroup", "ngSubmit"], [1, "col-lg-3", "mb-4", "mx-auto"], ["rows", "4", "formControlName", "desire", "placeholder", "Mong mu\u1ed1n c\u1ee7a b\u1ea1n...", 1, "form-control", "bg-none"], ["type", "submit", 1, "btn", "btn-outline-primary save"], ["id", "sound", "controls", "", "loop", "", 1, "d-none"], ["src", "./assets/audio/backgound11.mp3", "type", "audio/mp3"], ["id", "inputname"]],
                template: function(n, r) {
                    1 & n && (Ar(0, "canvas", 0),
                    jt(1, "div", 1),
                    jt(2, "header", 2),
                    jt(3, "div", 3),
                    jt(4, "div", 4),
                    jt(5, "div", 5),
                    jt(6, "a", 6),
                    Ar(7, "img", 7),
                    Ar(8, "img", 8),
                    Ar(9, "div", 9),
                    jt(10, "div", 10),
                    Ar(11, "div", 11),
                    Ht(),
                    Ht(),
                    Ht(),
                    Ht(),
                    jt(12, "div", 12),
                    jt(13, "form", 13),
                    Ut("ngSubmit", function() {
                        return r.praySubmit()
                    }),
                    jt(14, "div", 14),
                    // Ar(15, "input", 15),
                    // Ht(),
                    Ar(15, "textarea", 15),
                    Ht(),
                    jt(16, "button", 16),
                    Fw(17, "Thắp Hương"),
                    Ht(),
                    Ht(),
                    Ht(),
                    Ht(),
                    jt(18, "audio", 17),
                    Ar(19, "source", 18),
                    Ht(),
                    Ht(),
                    Ht()),
                    2 & n && (function(e) {
                        Ly(se(), A(), Tt() + e, Nl())
                    }(13),
                    Qf("formGroup", r.prayForm))
                },
                directives: [zE, VE, Tc, Cc, kE, vg],
                styles: [".disable-select[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.row[_ngcontent-%COMP%]{--mdb-gutter-x: 0}img[_ngcontent-%COMP%]{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-user-drag:none}.bg-none[_ngcontent-%COMP%]{background:white}.relative[_ngcontent-%COMP%]{position:relative;display:block;}.nhang[_ngcontent-%COMP%]{position:absolute;top:150px;left:48.6%} @media only screen and (max-width: 768px) { .nhang[_ngcontent-jnj-c10] {left: 47.5%; !important;}} .pointer[_ngcontent-%COMP%]{cursor:pointer}"]
            }),
            e
        }
        )()
          , qL = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275mod = zt({
                type: e,
                bootstrap: [WL]
            }),
            e.\u0275inj = bt({
                providers: [],
                imports: [[_k, zV, HL, h0]]
            }),
            e
        }
        )();
        (function() {
            if (bv)
                throw new Error("Cannot enable prod mode after platform setup.");
            Dv = !1
        }
        )(),
        mk().bootstrapModule(qL).catch(e=>console.error(e))
    }
}, at=>{
    at(at.s = 864),
    $("input").attr("placeholder", "Họ và tên / Full Name");
    $("textarea").attr("placeholder", "Mong muốn của bạn / Your wish");
}
]);
