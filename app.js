// Renders the case files from links.js (Material 3 markup), with search and a kind filter.
(function () {
  var site = window.SITE || {};
  var cases = (window.CASES || []).slice().sort(function (a, b) { return b.n - a.n; });
  var extras = window.EXTRAS || [];
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "className") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return node;
  }
  function icon(name, filled) { return el("span", { className: "ms" + (filled ? " filled" : ""), "aria-hidden": "true", text: name }); }

  function host(url) {
    try { return new URL(url).host.replace(/^www\./, ""); } catch (e) { return url; }
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function tagIcon(t) {
    if (/free|no sign/i.test(t)) return "check_circle";
    if (/android/i.test(t)) return "android";
    if (/windows/i.test(t)) return "desktop_windows";
    if (/web/i.test(t)) return "language";
    if (/music/i.test(t)) return "music_note";
    return "sell";
  }
  function tag(t) { return el("span", { className: "tag" + (/free|no sign|ad-free/i.test(t) ? " good" : "") }, [icon(tagIcon(t)), t]); }

  // header + hero
  if (site.title) $("title").textContent = site.title;
  $("tagline").textContent = site.tagline || "";
  $("handle-title").textContent = site.handle || "";
  $("ig").href = site.instagram || "#";
  $("follow").href = site.instagram || "#";
  $("count").textContent = cases.length + (cases.length === 1 ? " case filed" : " cases filed");
  window.addEventListener("scroll", function () { $("appbar").classList.toggle("scrolled", window.scrollY > 4); }, { passive: true });

  // filter chips (hidden until there is more than one kind)
  var kinds = ["All"].concat(cases.map(function (c) { return c.kind; }).filter(function (k, i, a) { return a.indexOf(k) === i; }));
  var state = { kind: "All", q: "" };
  function paintChips() {
    [].forEach.call($("chips").children, function (c) {
      var on = c.getAttribute("data-kind") === state.kind;
      c.setAttribute("aria-pressed", on ? "true" : "false");
      c.firstChild.hidden = !on;
    });
  }
  kinds.forEach(function (k) {
    var b = el("button", { className: "chip", type: "button", "data-kind": k }, [icon("check"), k]);
    b.addEventListener("click", function () { state.kind = k; paintChips(); render(); });
    $("chips").appendChild(b);
  });
  paintChips();
  if (kinds.length < 3) $("chips").hidden = true;
  $("q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });

  function card(c, newest) {
    var isRepo = c.kind === "GitHub repo";
    return el("article", { className: "card case", id: "case-" + pad(c.n) }, [
      el("div", { className: "case-media" }, [
        el("span", { className: "monogram", "aria-hidden": "true", text: pad(c.n) }),
        el("div", { className: "case-head" }, [
          el("div", { className: "overline", text: "Case " + pad(c.n) + " · " + c.kind }),
          el("div", { className: "sub", text: host(c.url) + (c.date ? " · " + c.date : "") }),
        ]),
        newest ? el("span", { className: "badge-new", text: "New" }) : null,
      ]),
      el("div", { className: "case-body" }, [
        el("h3", { text: c.name }),
        el("p", { className: "blurb", text: c.blurb }),
        (c.tags || []).length ? el("div", { className: "tags" }, c.tags.map(tag)) : null,
      ]),
      el("div", { className: "card-actions" }, [
        c.reel ? el("a", { className: "btn outlined", href: c.reel, target: "_blank", rel: "noopener" }, [icon("play_circle"), "Watch the reel"]) : null,
        el("a", { className: "btn filled", href: c.url, target: "_blank", rel: "noopener" }, [icon("open_in_new"), isRepo ? "Open repo" : "Open site"]),
      ]),
    ]);
  }

  function render() {
    var list = cases.filter(function (c) {
      if (state.kind !== "All" && c.kind !== state.kind) return false;
      if (!state.q) return true;
      return [c.name, c.blurb, c.kind, c.url].concat(c.tags || []).join(" ").toLowerCase().indexOf(state.q) >= 0;
    });
    var box = $("cases");
    box.textContent = "";
    list.forEach(function (c) { box.appendChild(card(c, c === cases[0])); });
    $("empty").hidden = list.length > 0;
  }
  render();

  // my own apps
  if (!extras.length) $("extras-title").hidden = true;
  extras.forEach(function (x) {
    $("extras").appendChild(
      el("article", { className: "card extra" }, [
        el("div", { className: "extra-top" }, [
          x.icon ? el("img", { className: "extra-icon", src: x.icon, alt: x.name + " icon", width: "72", height: "72", loading: "lazy" }) : null,
        ]),
        el("div", { className: "case-body" }, [
          el("h3", { text: x.name }),
          el("p", { className: "blurb", text: x.blurb }),
          (x.tags || []).length ? el("div", { className: "tags" }, x.tags.map(tag)) : null,
        ]),
        el("div", { className: "card-actions" }, [
          el("a", { className: "btn filled", href: x.url, target: "_blank", rel: "noopener" }, [icon("shop"), x.cta || "Open"]),
        ]),
      ]),
    );
  });
})();
