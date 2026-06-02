// Flashcards: learn mode. Big emoji + English word + Arabic gloss, tap to hear.
// Tapping "أعرفها" (I know it) earns a star — once per word per round.
(function () {
  window.Games = window.Games || {};
  window.Games.flashcards = {
    render: function (container, theme) {
      const UI = window.UI;
      const words = theme.words;
      let i = 0;
      const known = new Set();

      const card = UI.el("div", { class: "flash-card" });
      const emoji = UI.el("div", { class: "flash-emoji" });
      const enLine = UI.el("div", { class: "flash-en" });
      const arLine = UI.el("div", { class: "flash-ar" });
      const speakBtn = UI.el("button", { class: "speak-btn", title: "اسمع" }, ["🔊"]);
      card.appendChild(emoji);
      card.appendChild(enLine);
      card.appendChild(arLine);
      card.appendChild(speakBtn);

      const dots = UI.el("div", { class: "dots" });
      const knowBtn = UI.el("button", { class: "big-btn primary" }, ["⭐ أعرفها!"]);
      const prevBtn = UI.el("button", { class: "nav-btn" }, ["السابق ›"]);
      const nextBtn = UI.el("button", { class: "nav-btn" }, ["‹ التالي"]);

      function show() {
        const w = words[i];
        emoji.textContent = w.emoji;
        enLine.innerHTML = "";
        enLine.appendChild(UI.enWord(w.en));
        arLine.textContent = w.ar;
        knowBtn.classList.toggle("done", known.has(w.en));
        knowBtn.textContent = known.has(w.en) ? "✓ أحسنت" : "⭐ أعرفها!";
        // progress dots
        dots.innerHTML = "";
        words.forEach((_, k) => {
          dots.appendChild(UI.el("span", { class: "dot" + (k === i ? " on" : "") }));
        });
        card.classList.remove("flip-in");
        void card.offsetWidth;
        card.classList.add("flip-in");
        speak(w.en);
      }

      speakBtn.addEventListener("click", () => speak(words[i].en));
      card.addEventListener("click", e => {
        if (e.target === speakBtn) return;
        speak(words[i].en);
      });
      knowBtn.addEventListener("click", e => {
        const w = words[i];
        if (!known.has(w.en)) {
          known.add(w.en);
          sfx.correct();
          Stars.add(1, e.currentTarget);
          show();
          setTimeout(() => {
            if (i < words.length - 1) {
              i++;
              show();
            }
          }, 550);
        }
      });
      nextBtn.addEventListener("click", () => {
        i = (i + 1) % words.length;
        show();
      });
      prevBtn.addEventListener("click", () => {
        i = (i - 1 + words.length) % words.length;
        show();
      });

      container.appendChild(UI.el("p", { class: "hint", text: "اضغط على البطاقة لتسمع الكلمة 👆" }));
      container.appendChild(card);
      container.appendChild(dots);
      container.appendChild(UI.el("div", { class: "row" }, [prevBtn, knowBtn, nextBtn]));
      show();
    }
  };
})();
