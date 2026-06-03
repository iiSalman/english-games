// Build the sentence: see the Arabic meaning + picture, hear the English sentence,
// tap the scrambled word-tiles into the right order. Word-level version of spell.
// theme = { id: unitId, color, sentences: [{ en, ar, emoji }] }
(function () {
  window.Games = window.Games || {};
  window.Games.sentence = {
    render: function (container, theme) {
      const UI = window.UI;
      const N = Math.min(6, theme.sentences.length);
      const queue = UI.pickN(theme.sentences, N);
      let qi = 0;
      let earned = 0;
      const back = "unit/" + theme.id;

      const hint = UI.el("p", { class: "hint", text: "رتّب الكلمات لتكوين الجملة 💬" });
      const bar = UI.progress(N);
      const stage = UI.el("div", { class: "sent-stage" });
      container.appendChild(hint);
      container.appendChild(bar.el);
      container.appendChild(stage);

      function ask() {
        const s = queue[qi];
        bar.set(qi);
        const words = s.en.split(" ");
        let placed = [];

        stage.innerHTML = "";
        stage.appendChild(
          UI.el("div", { class: "sent-head" }, [
            UI.el("span", { class: "sent-emoji", text: s.emoji || "💬" }),
            UI.el("div", { class: "sent-ar", text: s.ar }),
            UI.el("button", { class: "speak-btn", title: "اسمع", onclick: () => speak(s.en) }, ["🔊"]),
            UI.el("div", { class: "q-progress", text: "جملة " + (qi + 1) + " / " + N })
          ])
        );

        const slots = UI.el("div", { class: "sent-slots" });
        const slotEls = words.map(() => UI.el("div", { class: "sent-slot" }));
        slotEls.forEach(s2 => slots.appendChild(s2));
        stage.appendChild(slots);

        const bank = UI.el("div", { class: "word-bank" });
        stage.appendChild(bank);

        // scramble the words; reshuffle if it happens to land in order
        let order = UI.shuffle(words.map((w, i) => i));
        if (words.length > 1 && order.join() === words.map((_, k) => k).join()) {
          order = UI.shuffle(order);
        }
        order.forEach(srcIdx => {
          const tile = UI.el("button", { class: "word-tile" }, [UI.enWord(words[srcIdx])]);
          tile.addEventListener("click", () => {
            if (tile.classList.contains("used")) return;
            const slot = slotEls[placed.length];
            slot.textContent = "";
            slot.appendChild(UI.enWord(words[srcIdx]));
            slot.classList.add("filled");
            tile.classList.add("used");
            placed.push(tile);
            if (placed.length === words.length) check();
          });
          bank.appendChild(tile);
        });

        stage.appendChild(
          UI.el("div", { class: "row" }, [
            UI.el("button", { class: "nav-btn", onclick: clearAll }, ["🧹 مسح"])
          ])
        );

        function clearAll() {
          placed.forEach(t => t.classList.remove("used"));
          placed = [];
          slotEls.forEach(s2 => {
            s2.textContent = "";
            s2.classList.remove("filled", "ok", "bad");
          });
        }

        function check() {
          const guess = slotEls.map(s2 => s2.textContent).join(" ").toLowerCase();
          if (guess === s.en.toLowerCase()) {
            slotEls.forEach(s2 => s2.classList.add("ok"));
            sfx.correct();
            speak(s.en);
            bar.set(qi + 1);
            Stars.add(1, slots);
            earned++;
            setTimeout(next, 1300);
          } else {
            slotEls.forEach(s2 => s2.classList.add("bad"));
            sfx.wrong();
            speak(s.en);
            setTimeout(clearAll, 900);
          }
        }
      }

      function next() {
        qi++;
        if (qi >= N) {
          UI.roundComplete(container, earned, () => Games.sentence.render(container, theme), back, null);
          return;
        }
        ask();
      }

      ask();
    }
  };
})();
