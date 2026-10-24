// Renders the cases from links.js in the Useful Cursor Desk style: latest-case banner, kind tabs with counts,
// search, case cards (CASE NN, kind pill, tags, open + reel buttons) and the "Made by me" apps.
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
  function newTab() { return el("span", { className: "sr", text: " (opens in a new tab)" }); }
  function host(url) {
    try { return new URL(url).host.replace(/^www\./, ""); } catch (e) { return url; }
  }
  function firstSentence(t) { var i = t.indexOf(". "); return i < 0 ? t : t.slice(0, i + 1); }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-"); }
  function openLabel(c) { return c.kind === "GitHub repo" ? "Open repo" : c.kind === "AI tool" ? "Open tool" : "Open site"; }
  function link(cls, href, label) {
    return el("a", { className: cls, href: href, target: "_blank", rel: "noopener" }, [label + " ↗", newTab()]);
  }

  // header
  $("eyebrow").textContent = site.title || "Useful websites, explained";
  if (site.handle) $("handle").firstChild.textContent = site.handle;
  $("tagline").textContent = site.tagline || "";
  $("ig").href = site.instagram || "#";
  if (site.youtube) $("yt").href = site.youtube; else $("yt").hidden = true;

  // latest case
  var latest = cases[0];
  if (latest) {
    $("latest").appendChild(el("span", { className: "label", text: "Latest · Case " + pad(latest.n) }));
    $("latest").appendChild(el("span", { className: "grow" }, [el("b", { text: latest.name }), " · " + firstSentence(latest.blurb)]));
    $("latest").appendChild(el("span", { className: "actions" }, [
      link("btn primary", latest.url, openLabel(latest)),
      latest.reel ? link("btn", latest.reel, "Watch the reel") : null,
    ]));
    $("latest").hidden = false;
  }

  // kind tabs with counts (hidden while there is only one kind)
  var kinds = ["All"].concat(cases.map(function (c) { return c.kind; }).filter(function (k, i, a) { return a.indexOf(k) === i; }));
  var state = { kind: "All", q: "" };
  kinds.forEach(function (k) {
    var n = k === "All" ? cases.length : cases.filter(function (c) { return c.kind === k; }).length;
    var label = k === "All" ? "All" : k + (n === 1 ? "" : "s");
    var b = el("button", { className: "tab", type: "button", "data-kind": k, "aria-pressed": k === "All" ? "true" : "false" }, [label, el("span", { className: "count", text: String(n) })]);
    b.addEventListener("click", function () {
      state.kind = k;
      [].forEach.call($("tabs").children, function (t) { t.setAttribute("aria-pressed", t === b ? "true" : "false"); });
      render();
    });
    $("tabs").appendChild(b);
  });
  if (kinds.length < 3) $("tabs").hidden = true;
  $("q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });

  function card(c) {
    return el("article", { className: "case", id: "case-" + pad(c.n) }, [
      el("div", { className: "row" }, [
        el("span", { className: "num", text: "CASE " + pad(c.n) }),
        el("span", { className: "row" }, [
          c === latest ? el("span", { className: "pill new", text: "New" }) : null,
          el("span", { className: "pill kind-" + slug(c.kind), text: c.kind }),
        ]),
      ]),
      el("h3", { text: c.name }),
      el("p", { className: "sub", text: host(c.url) + (c.date ? " · filed " + c.date : "") }),
      el("p", { className: "blurb", text: c.blurb }),
      (c.tags || []).length ? el("div", { className: "tags" }, c.tags.map(function (t) { return el("span", { className: "tag", text: t }); })) : null,
      el("div", { className: "actions" }, [
        link("btn primary", c.url, openLabel(c)),
        c.reel ? link("btn", c.reel, "Watch the reel") : null,
      ]),
    ]);
  }

  var announce = false;
  function render() {
    var list = cases.filter(function (c) {
      if (state.kind !== "All" && c.kind !== state.kind) return false;
      if (!state.q) return true;
      return [c.name, c.blurb, c.kind, c.url].concat(c.tags || []).join(" ").toLowerCase().indexOf(state.q) >= 0;
    });
    var box = $("cases");
    box.textContent = "";
    list.forEach(function (c) { box.appendChild(card(c)); });
    $("empty").hidden = list.length > 0;
    if (announce) $("results-status").textContent = list.length + (list.length === 1 ? " case" : " cases");
  }
  render();
  announce = true;

  // my own apps
  if (!extras.length) $("extras-wrap").hidden = true;
  extras.forEach(function (x) {
    $("extras").appendChild(el("article", { className: "app" }, [
      x.icon ? el("img", { src: x.icon, alt: x.name + " app icon", width: "72", height: "72", loading: "lazy" }) : null,
      el("div", { className: "body" }, [
        el("h3", { text: x.name }),
        el("p", { text: x.blurb }),
        (x.tags || []).length ? el("div", { className: "tags" }, x.tags.map(function (t) { return el("span", { className: "tag", text: t }); })) : null,
        el("div", { className: "actions" }, [link("btn primary", x.url, x.cta || "Open")]),
      ]),
    ]));
  });
})();
