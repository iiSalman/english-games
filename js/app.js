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
  // A word's picture: a real photo if the word has one, otherwise its emoji.
  // Photos get the Arabic word written across the bottom so it's unmistakable.
  // Pass {caption:false} to omit the label (e.g. spell screen shows it separately).
  function pic(word, cls, opts) {
    opts = opts || {};
    if (word.img) {
      const img = el("img", { class: "word-img", src: word.img, alt: word.en, loading: "lazy" });
      if (opts.caption === false) {
        img.className = "word-img " + (cls || "");
        return img;
      }
      return el("figure", { class: "pic-fig " + (cls || "") }, [
        img,
        el("figcaption", { class: "pic-cap", dir: "rtl", text: word.ar })
      ]);
    }
    return el("span", { class: "word-emoji " + (cls || ""), text: word.emoji });
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

  // Always-visible sound on/off button (top corner, opposite the back button).
  function ensureSoundButton() {
    let b = document.getElementById("soundFab");
    if (!b) {
      b = el("button", { id: "soundFab", class: "sound-fab" });
      b.onclick = () => {
        const m = Sound.toggle();
        paintSound(b, m);
        if (!m) sfx.correct(); // a tiny chime confirming sound is back on
      };
      document.body.appendChild(b);
    }
    paintSound(b, Sound.isMuted());
  }
  function paintSound(b, muted) {
    b.textContent = muted ? "🔇" : "🔊";
    b.title = muted ? "الصوت مغلق" : "الصوت مفتوح";
    b.classList.toggle("off", muted);
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

  // A friendly segmented progress bar for test rounds (fills as the child advances).
  function progress(total) {
    const wrap = el("div", { class: "prog" });
    const segs = [];
    for (let i = 0; i < total; i++) {
      const s = el("span", { class: "prog-seg" });
      segs.push(s);
      wrap.appendChild(s);
    }
    return {
      el: wrap,
      set: function (done) {
        segs.forEach((s, i) => s.classList.toggle("on", i < done));
      }
    };
  }

  // The 3-step learning journey per theme: learn -> listen test -> spell test.
  const STEPS = [
    { id: "connect", ar: "تعلّم الوحدة", emoji: "🔗", desc: "صِل الكلمة بالصورة", test: false },
    { id: "listen", ar: "اختبار الاستماع", emoji: "👂", desc: "اسمع الكلمة واختر الصورة", test: true },
    { id: "spell", ar: "اختبار الكتابة", emoji: "🔤", desc: "رتّب الحروف لتكوين الكلمة", test: true }
  ];
  // The step that follows the given one (or null if it's the last).
  function nextStep(themeId, stepId) {
    const i = STEPS.findIndex(s => s.id === stepId);
    if (i < 0 || i >= STEPS.length - 1) return null;
    const n = STEPS[i + 1];
    return { hash: "game/" + themeId + "/" + n.id, label: "▶ التالي: " + n.ar, step: n };
  }

  // Celebration screen at the end of a test round. `next` (optional) links onward.
  function roundComplete(container, earned, onAgain, backHash, next) {
    sfx.win();
    const buttons = [];
    if (next)
      buttons.push(
        el("button", { class: "big-btn primary", onclick: () => (location.hash = next.hash) }, [
          next.label
        ])
      );
    buttons.push(el("button", { class: "big-btn", onclick: onAgain }, ["🔁 إعادة"]));
    buttons.push(
      el("button", { class: "big-btn", onclick: () => (location.hash = backHash) }, ["🏠 رجوع"])
    );
    const overlay = el("div", { class: "round-done" }, [
      el("div", { class: "confetti", text: "🎉" }),
      el("h2", { text: "أحسنت!" }),
      el("p", { class: "earned", html: "ربحت <b>" + earned + "</b> ⭐ في هذه الجولة!" }),
      el("div", { class: "row" }, buttons)
    ]);
    container.appendChild(overlay);
  }

  window.UI = { el, shuffle, pickN, enWord, pic, progress, topBar, roundComplete, nextStep };

  // Grade picker: a segmented control letting the child switch between the
  // Grade 2 and Grade 3 word banks. Re-renders home so the units update.
  function gradeSwitcher() {
    const wrap = el("div", { class: "grade-switch", role: "group", "aria-label": "اختر الصف" });
    GRADES.forEach(g => {
      const on = g.id === CURRENT_GRADE;
      wrap.appendChild(
        el("button", {
          class: "grade-btn" + (on ? " on" : ""),
          onclick: () => {
            if (g.id === CURRENT_GRADE) return;
            setGrade(g.id);
            homeScreen();
          }
        }, [g.emoji + " " + g.label])
      );
    });
    return wrap;
  }

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
      el("p", { class: "subtitle", text: "اختر وحدة وابدأ التعلّم! 🎈" }),
      gradeSwitcher()
    ]);

    const grid = el("div", { class: "theme-grid" });
    UNITS.forEach(u => {
      grid.appendChild(
        el("button", {
          class: "theme-card unit-card",
          style: "--c:" + u.color,
          onclick: () => (location.hash = "unit/" + u.id)
        }, [
          el("div", { class: "unit-badge", text: u.num }),
          el("div", { class: "theme-emoji", text: u.emoji }),
          el("div", { class: "theme-ar", text: u.ar }),
          UI.enWord(u.en, "theme-en")
        ])
      );
    });

    root.appendChild(head);
    root.appendChild(grid);
    // Reset is a parent action: requires a deliberate press-and-hold so a child
    // can't wipe their stars with a stray tap. A quick tap does nothing.
    const resetBtn = el("button", { class: "reset-link parent" }, [
      "⚙︎ تصفير النجوم — اضغط مطولاً"
    ]);
    let holdTimer = null;
    const startHold = () => {
      resetBtn.classList.add("holding");
      holdTimer = setTimeout(() => {
        resetBtn.classList.remove("holding");
        if (confirm("إجراء خاص بالأهل: تصفير كل النجوم والبدء من جديد؟")) Stars.reset();
      }, 1100);
    };
    const cancelHold = () => {
      clearTimeout(holdTimer);
      resetBtn.classList.remove("holding");
    };
    resetBtn.addEventListener("pointerdown", startHold);
    ["pointerup", "pointerleave", "pointercancel"].forEach(ev =>
      resetBtn.addEventListener(ev, cancelHold)
    );
    resetBtn.addEventListener("click", e => e.preventDefault());
    root.appendChild(el("footer", { class: "foot" }, [resetBtn]));
  }

  // A unit screen: its vocabulary topics + the build-the-sentence tile.
  function unitScreen(unitId) {
    const unit = UNITS.find(u => u.id === unitId);
    if (!unit) return (location.hash = "");
    root.innerHTML = "";
    root.appendChild(UI.topBar("الوحدة " + unit.num + ": " + unit.ar, ""));
    root.appendChild(el("p", { class: "hint", text: "اختر موضوعًا لتتعلّمه 👇" }));

    const grid = el("div", { class: "game-grid" });
    THEMES.filter(t => t.unit === unitId).forEach(t => {
      grid.appendChild(
        el("button", {
          class: "game-card",
          style: "--c:" + unit.color,
          onclick: () => (location.hash = "theme/" + t.id)
        }, [
          el("div", { class: "game-emoji", text: t.emoji }),
          el("div", { class: "game-ar", text: t.ar }),
          el("div", { class: "game-desc", text: t.words.length + " كلمات" })
        ])
      );
    });
    if (window.SENTENCES && SENTENCES[unitId] && SENTENCES[unitId].length) {
      grid.appendChild(
        el("button", {
          class: "game-card sentence-tile",
          style: "--c:" + unit.color,
          onclick: () => (location.hash = "sentence/" + unitId)
        }, [
          el("div", { class: "game-emoji", text: "💬" }),
          el("div", { class: "game-ar", text: "كوّن الجملة" }),
          el("div", { class: "game-desc", text: "رتّب الكلمات لتكوين جملة" })
        ])
      );
    }
    root.appendChild(grid);
  }

  function sentenceScreen(unitId) {
    const unit = UNITS.find(u => u.id === unitId);
    const game = window.Games && window.Games.sentence;
    if (!unit || !game || !(window.SENTENCES && SENTENCES[unitId])) return (location.hash = "");
    root.innerHTML = "";
    root.appendChild(UI.topBar("💬 كوّن الجملة", "unit/" + unitId));
    const container = el("div", { class: "game-area" });
    root.appendChild(container);
    game.render(container, { id: unitId, color: unit.color, sentences: SENTENCES[unitId] });
  }

  function themeScreen(themeId) {
    const theme = THEMES.find(t => t.id === themeId);
    if (!theme) return (location.hash = "");
    root.innerHTML = "";
    root.appendChild(UI.topBar(theme.emoji + " " + theme.ar, "unit/" + theme.unit));
    root.appendChild(
      el("p", { class: "hint", text: "ابدأ بالتعلّم ثم اجتز الاختبارَين بالترتيب 👇" })
    );

    const path = el("div", { class: "step-path" });
    STEPS.forEach((s, idx) => {
      path.appendChild(
        el("button", {
          class: "step-card" + (s.test ? " test" : " learn"),
          style: "--c:" + theme.color,
          onclick: () => (location.hash = "game/" + theme.id + "/" + s.id)
        }, [
          el("div", { class: "step-num", text: String(idx + 1) }),
          el("div", { class: "step-emoji", text: s.emoji }),
          el("div", { class: "step-body" }, [
            el("div", { class: "step-ar", text: s.ar }),
            el("div", { class: "step-desc", text: s.desc })
          ]),
          el("div", { class: "step-tag", text: s.test ? "⭐ اختبار" : "تعلّم" })
        ])
      );
    });
    root.appendChild(path);
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
    if (parts[0] === "unit" && parts[1]) unitScreen(parts[1]);
    else if (parts[0] === "theme" && parts[1]) themeScreen(parts[1]);
    else if (parts[0] === "game" && parts[1] && parts[2]) gameScreen(parts[1], parts[2]);
    else if (parts[0] === "sentence" && parts[1]) sentenceScreen(parts[1]);
    else homeScreen();
    ensureSoundButton();
    Stars.refresh();
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
  if (document.readyState !== "loading") route();
})();
