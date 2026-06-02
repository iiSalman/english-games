// Listen & pick: hear an English word, tap the matching picture.
// 8 questions per round; 4 emoji choices each; correct answer earns a star.
(function () {
  window.Games = window.Games || {};
  window.Games.listen = {
    render: function (container, theme) {
      const UI = window.UI;
      const pool = theme.words;
      const N = Math.min(8, pool.length);
      const queue = UI.pickN(pool, N);
      let qi = 0;
      let earned = 0;

      const hint = UI.el("p", { class: "hint", text: "اسمع الكلمة ثم اختر الصورة الصحيحة 👂" });
      const replay = UI.el("button", { class: "speak-btn big-speak", title: "أعد" }, ["🔊"]);
      const progress = UI.el("div", { class: "q-progress" });
      const choices = UI.el("div", { class: "listen-choices" });
      container.appendChild(hint);
      container.appendChild(replay);
      container.appendChild(progress);
      container.appendChild(choices);

      replay.addEventListener("click", () => speak(queue[qi].en));

      function ask() {
        const w = queue[qi];
        progress.textContent = "سؤال " + (qi + 1) + " / " + N;
        // build 4 choices: the answer + 3 distractors from the same theme
        const distractors = UI.pickN(pool.filter(x => x.en !== w.en), 3);
        const opts = UI.shuffle([w].concat(distractors));
        choices.innerHTML = "";
        opts.forEach(o => {
          const btn = UI.el("button", { class: "choice-card" }, [
            UI.el("span", { class: "choice-emoji", text: o.emoji })
          ]);
          btn.addEventListener("click", () => {
            if (btn.classList.contains("locked")) return;
            if (o.en === w.en) {
              btn.classList.add("right");
              choices.querySelectorAll(".choice-card").forEach(c => c.classList.add("locked"));
              sfx.correct();
              speak(w.en);
              Stars.add(1, btn);
              earned++;
              setTimeout(next, 900);
            } else {
              btn.classList.add("wrong", "locked");
              sfx.wrong();
            }
          });
          choices.appendChild(btn);
        });
        setTimeout(() => speak(w.en), 350);
      }

      function next() {
        qi++;
        if (qi >= N) {
          UI.roundComplete(
            container,
            earned,
            () => Games.listen.render(container, theme),
            "theme/" + theme.id,
            UI.nextStep(theme.id, "listen")
          );
          return;
        }
        ask();
      }

      ask();
    }
  };
})();
