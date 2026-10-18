// Renders the case files from links.js, with search and a kind filter.
(function () {
  var site = window.SITE || {};
  var cases = (window.CASES || []).slice().sort(function (a, b) { return b.n - a.n; });
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "className") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function host(url) {
    try { return new URL(url).host.replace(/^www\./, ""); } catch (e) { return url; }
  }

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  // header + hero
  if (site.brand) { $("brand-a").textContent = site.brand[0]; $("brand-b").textContent = site.brand[1]; }
  if (site.title) { $("title").textContent = site.title; }
  $("tagline").textContent = site.tagline || "";
  $("handle").textContent = site.handle || "";
  $("handle").href = site.instagram || "#";
  $("follow").href = site.instagram || "#";
  $("count").textContent = cases.length + (cases.length === 1 ? " case filed" : " cases filed");

  // filters
  var kinds = ["All"].concat(cases.map(function (c) { return c.kind; }).filter(function (k, i, a) { return a.indexOf(k) === i; }));
  var state = { kind: "All", q: "" };
  kinds.forEach(function (k) {
    var b = el("button", { className: "chip", type: "button", "aria-pressed": k === "All" ? "true" : "false", text: k });
    b.addEventListener("click", function () {
      state.kind = k;
      [].forEach.call($("chips").children, function (c) { c.setAttribute("aria-pressed", c.textContent === k ? "true" : "false"); });
      render();
    });
    $("chips").appendChild(b);
  });
  if (kinds.length < 3) $("chips").hidden = true; // one kind only: nothing to filter yet
  $("q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });

  function card(c, newest) {
    var tags = (c.tags || []).map(function (t) {
      return el("span", { className: "pill" + (/free|no sign/i.test(t) ? " green" : ""), text: t });
    });
    return el("article", { className: "card case" + (newest ? " is-new" : ""), id: "case-" + pad(c.n) }, [
      newest ? el("span", { className: "new", text: "New", "aria-label": "Newest" }) : null,
      el("div", { className: "case-top" }, [
        el("span", { className: "case-no", text: "CASE " + pad(c.n) }),
        el("span", { className: "pill kind", text: c.kind }),
        c.date ? el("time", { className: "case-date", datetime: c.date, text: c.date }) : null,
      ]),
      el("h2", { text: c.name }),
      el("p", { className: "host", text: host(c.url) }),
      el("p", { className: "blurb", text: c.blurb }),
      tags.length ? el("div", { className: "tags" }, tags) : null,
      el("div", { className: "case-actions" }, [
        el("a", { className: "btn btn-solid", href: c.url, target: "_blank", rel: "noopener", text: "Open " + (c.kind === "GitHub repo" ? "repo" : "site") + " ↗" }),
        c.reel ? el("a", { className: "btn btn-ghost", href: c.reel, target: "_blank", rel: "noopener", text: "Watch the reel" }) : null,
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
})();
