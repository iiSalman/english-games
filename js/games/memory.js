// Memory match: flip cards to pair an emoji card with its English-word card.
// Round uses 6 words (12 cards). Each matched pair earns a star.
(function () {
  window.Games = window.Games || {};
  window.Games.memory = {
    render: function (container, theme) {
      const UI = window.UI;

      function start() {
        container.innerHTML = "";
        const picked = UI.pickN(theme.words, Math.min(6, theme.words.length));
        let cards = [];
        picked.forEach(w => {
          cards.push({ id: w.en, kind: "emoji", w: w });
          cards.push({ id: w.en, kind: "text", w: w });
        });
        cards = UI.shuffle(cards);

        let first = null;
        let lock = false;
        let matched = 0;
        let earned = 0;

        container.appendChild(
          UI.el("p", { class: "hint", text: "اقلب البطاقات وطابق الصورة مع الكلمة 🧠" })
        );
        const board = UI.el("div", { class: "memory-board" });
        container.appendChild(board);

        cards.forEach(c => {
          const back = UI.el("div", { class: "m-face m-back", text: "❓" });
          const front = UI.el(
            "div",
            { class: "m-face m-front" },
            c.kind === "emoji"
              ? [UI.el("span", { class: "m-emoji", text: c.w.emoji })]
              : [UI.enWord(c.w.en, "m-word")]
          );
          const cardEl = UI.el("button", { class: "m-card" }, [back, front]);
          c.el = cardEl;

          cardEl.addEventListener("click", () => {
            if (lock || cardEl.classList.contains("open") || cardEl.classList.contains("done"))
              return;
            cardEl.classList.add("open");
            speak(c.w.en);
            if (!first) {
              first = c;
              return;
            }
            if (first.id === c.id) {
              // match!
              lock = true;
              setTimeout(() => {
                first.el.classList.add("done");
                c.el.classList.add("done");
                sfx.correct();
                Stars.add(1, c.el);
                earned++;
                matched++;
                first = null;
                lock = false;
                if (matched === picked.length) {
                  setTimeout(
                    () => UI.roundComplete(container, earned, start, "theme/" + theme.id),
                    500
                  );
                }
              }, 450);
            } else {
              // mismatch — flip both back
              lock = true;
              sfx.wrong();
              const a = first;
              setTimeout(() => {
                a.el.classList.remove("open");
                c.el.classList.remove("open");
                first = null;
                lock = false;
              }, 800);
            }
          });
          board.appendChild(cardEl);
        });
      }

      start();
    }
  };
})();
