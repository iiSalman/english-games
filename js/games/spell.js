// Spell the word: see the picture, hear the word, tap scrambled letters to build it.
// Single-word vocabulary only (no spaces). 6 words per round; each earns a star.
(function () {
  window.Games = window.Games || {};
  window.Games.spell = {
    render: function (container, theme) {
      const UI = window.UI;
      const pool = theme.words.filter(w => !w.en.includes(" "));
      const N = Math.min(6, pool.length);
      const queue = UI.pickN(pool, N);
      let qi = 0;
      let earned = 0;

      const hint = UI.el("p", { class: "hint", text: "رتّب الحروف لتكوين الكلمة 🔤" });
      const stage = UI.el("div", { class: "spell-stage" });
      container.appendChild(hint);
      container.appendChild(stage);

      function ask() {
        const w = queue[qi];
        const letters = w.en.split("");
        let placed = []; // indices into bank, in slot order

        stage.innerHTML = "";
        stage.appendChild(
          UI.el("div", { class: "spell-head" }, [
            UI.pic(w, "spell-emoji", { caption: false }),
            UI.el("div", { class: "spell-ar", text: w.ar }),
            UI.el("button", { class: "speak-btn", title: "اسمع",
              onclick: () => speak(w.en) }, ["🔊"]),
            UI.el("div", { class: "q-progress", text: "كلمة " + (qi + 1) + " / " + N })
          ])
        );

        const slots = UI.el("div", { class: "slots" });
        const slotEls = letters.map(() => UI.el("div", { class: "slot" }));
        slotEls.forEach(s => slots.appendChild(s));
        stage.appendChild(slots);

        const bank = UI.el("div", { class: "letter-bank" });
        stage.appendChild(bank);

        // scramble letters (ensure not already in order for >1 unique)
        let order = UI.shuffle(letters.map((c, idx) => idx));
        if (letters.length > 1 && order.join() === letters.map((_, k) => k).join()) {
          order = UI.shuffle(order);
        }
        const tiles = order.map(srcIdx => {
          const tile = UI.el("button", { class: "tile", text: letters[srcIdx] });
          tile.addEventListener("click", () => {
            if (tile.classList.contains("used")) return;
            const slot = slotEls[placed.length];
            slot.textContent = letters[srcIdx];
            slot.classList.add("filled");
            tile.classList.add("used");
            placed.push(tile);
            if (placed.length === letters.length) check();
          });
          bank.appendChild(tile);
          return tile;
        });

        const tools = UI.el("div", { class: "row" }, [
          UI.el("button", { class: "nav-btn", onclick: clearAll }, ["🧹 مسح"])
        ]);
        stage.appendChild(tools);

        function clearAll() {
          placed.forEach(t => t.classList.remove("used"));
          placed = [];
          slotEls.forEach(s => {
            s.textContent = "";
            s.classList.remove("filled", "ok", "bad");
          });
        }

        function check() {
          const guess = slotEls.map(s => s.textContent).join("");
          if (guess === w.en) {
            slotEls.forEach(s => s.classList.add("ok"));
            sfx.correct();
            speak(w.en);
            Stars.add(1, slots);
            earned++;
            setTimeout(next, 1000);
          } else {
            slotEls.forEach(s => s.classList.add("bad"));
            sfx.wrong();
            setTimeout(clearAll, 700);
          }
        }
      }

      function next() {
        qi++;
        if (qi >= N) {
          UI.roundComplete(
            container,
            earned,
            () => Games.spell.render(container, theme),
            "theme/" + theme.id,
            UI.nextStep(theme.id, "spell")
          );
          return;
        }
        ask();
      }

      ask();
    }
  };
})();
