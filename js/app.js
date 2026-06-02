// Tiny hash router + shared UI helpers. Screens: home / theme menu / game.
(function () {
  const root = document.getElementById("app");

  // ---- helpers shared with games ----
  function el(tag, props, children) {
    const n = document.createElement(tag);
    if (props) {
      for (const k in props) {
        if (k === "class") n.className = props[k];
        else if (k === "html") n.innerHTML = props[k];
        else if (k === "text") n.textContent = props[k];
        else if (k.slice(0, 2) === "on" && typeof props[k] === "function")
          n.addEventListener(k.slice(2).toLowerCase(), props[k]);
        else if (props[k] != null) n.setAttribute(k, props[k]);
      }
    }
    (children || []).forEach(c => {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function pickN(a, n) {
    return shuffle(a).slice(0, n);
  }
  // An English word wrapped so it always reads left-to-right inside the RTL page.
  function enWord(text, cls) {
    return el("span", { class: "en " + (cls || ""), dir: "ltr", text: text });
  }

  // Fixed round back button — lives outside normal flow so it can never widen
  // the layout, and sits where a child's thumb can always reach it.
  function setBackButton(backHash) {
    let b = document.getElementById("backFab");
    if (!b) {
      b = el("button", { id: "backFab", class: "back-fab", title: "رجوع" });
      document.body.appendChild(b);
    }
    b.textContent = backHash === "" ? "🏠" : "⟶";
    b.onclick = () => (location.hash = backHash);
    b.style.display = "flex";
  }
  function hideBackButton() {
    const b = document.getElementById("backFab");
    if (b) b.style.display = "none";
  }

  // Centered title bar (star badge + title stacked) shown inside games/menus.
  function topBar(title, backHash) {
    setBackButton(backHash);
    return el("div", { class: "topbar" }, [
      el("div", { class: "star-badge", title: "نجومك" }, [
        "⭐ ",
        el("span", { "data-star-total": "1", text: String(Stars.get()) })
      ]),
      el("h2", { class: "topbar-title", text: title })
    ]);
  }

  // Celebration screen at the end of a game round.
  function roundComplete(container, earned, onAgain, backHash) {
    sfx.win();
    const overlay = el("div", { class: "round-done" }, [
      el("div", { class: "confetti", text: "🎉" }),
      el("h2", { text: "أحسنت!" }),
      el("p", { class: "earned", html: "ربحت <b>" + earned + "</b> ⭐ في هذه الجولة!" }),
      el("div", { class: "row" }, [
        el("button", { class: "big-btn primary", onclick: onAgain }, ["🔁 العب مرة أخرى"]),
        el("button", { class: "big-btn", onclick: () => (location.hash = backHash) }, [
          "🎮 ألعاب أخرى"
        ])
      ])
    ]);
    container.appendChild(overlay);
  }

  window.UI = { el, shuffle, pickN, enWord, topBar, roundComplete };

  // ---- screens ----
  function homeScreen() {
    hideBackButton();
    root.innerHTML = "";
    const head = el("header", { class: "home-head" }, [
      el("div", { class: "star-badge big", title: "مجموع نجومك" }, [
        "⭐ ",
        el("span", { "data-star-total": "1", text: String(Stars.get()) })
      ]),
      el("h1", { class: "logo", text: "ألعاب الإنجليزي" }),
      el("p", { class: "subtitle", text: "اختر موضوعًا وابدأ اللعب! 🎈" })
    ]);

    const grid = el("div", { class: "theme-grid" });
    THEMES.forEach(t => {
      grid.appendChild(
        el("button", {
          class: "theme-card",
          style: "--c:" + t.color,
          onclick: () => (location.hash = "theme/" + t.id)
        }, [
          el("div", { class: "theme-emoji", text: t.emoji }),
          el("div", { class: "theme-ar", text: t.ar }),
          UI.enWord(t.en, "theme-en"),
          el("div", { class: "theme-count", text: t.words.length + " كلمات" })
        ])
      );
    });

    root.appendChild(head);
    root.appendChild(grid);
    root.appendChild(
      el("footer", { class: "foot" }, [
        el("button", {
          class: "reset-link",
          onclick: () => {
            if (confirm("هل تريد تصفير عدد النجوم والبدء من جديد؟")) Stars.reset();
          }
        }, ["تصفير النجوم"])
      ])
    );
  }

  const GAMES = [
    { id: "flashcards", ar: "البطاقات", emoji: "🃏", desc: "تعلّم الكلمات واسمع نطقها" },
    { id: "memory", ar: "طابق الصور", emoji: "🧠", desc: "جد الأزواج المتشابهة" },
    { id: "listen", ar: "اسمع واختر", emoji: "👂", desc: "اسمع الكلمة واختر الصورة" },
    { id: "spell", ar: "اكتب الكلمة", emoji: "🔤", desc: "رتّب الحروف لتكوين الكلمة" }
  ];

  function themeScreen(themeId) {
    const theme = THEMES.find(t => t.id === themeId);
    if (!theme) return (location.hash = "");
    root.innerHTML = "";
    root.appendChild(UI.topBar(theme.emoji + " " + theme.ar, ""));

    const grid = el("div", { class: "game-grid" });
    GAMES.forEach(g => {
      grid.appendChild(
        el("button", {
          class: "game-card",
          style: "--c:" + theme.color,
          onclick: () => (location.hash = "game/" + theme.id + "/" + g.id)
        }, [
          el("div", { class: "game-emoji", text: g.emoji }),
          el("div", { class: "game-ar", text: g.ar }),
          el("div", { class: "game-desc", text: g.desc })
        ])
      );
    });
    root.appendChild(grid);
  }

  function gameScreen(themeId, gameId) {
    const theme = THEMES.find(t => t.id === themeId);
    const game = window.Games && window.Games[gameId];
    if (!theme || !game) return (location.hash = "");
    root.innerHTML = "";
    root.appendChild(UI.topBar(theme.emoji + " " + theme.ar, "theme/" + theme.id));
    const container = el("div", { class: "game-area" });
    root.appendChild(container);
    game.render(container, theme);
  }

  function route() {
    const h = location.hash.replace(/^#/, "");
    const parts = h.split("/").filter(Boolean);
    window.scrollTo(0, 0);
    if (parts[0] === "theme" && parts[1]) themeScreen(parts[1]);
    else if (parts[0] === "game" && parts[1] && parts[2]) gameScreen(parts[1], parts[2]);
    else homeScreen();
    Stars.refresh();
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
  if (document.readyState !== "loading") route();
})();
