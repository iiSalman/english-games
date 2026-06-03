// Connect the correct ones — the LEARN step (no stars). Tap an English word,
// then tap its picture to connect them. Hear each word. When the whole unit is
// connected, it leads on to the Listen test.
(function () {
  window.Games = window.Games || {};

  function chunk(arr, n) {
    const out = [];
    for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
    return out;
  }

  window.Games.connect = {
    render: function (container, theme) {
      const UI = window.UI;
      const groups = chunk(theme.words, 6);
      let gi = 0;

      function showGroup() {
        container.innerHTML = "";
        const words = groups[gi];
        container.appendChild(
          UI.el("p", { class: "hint", text: "اضغط الكلمة ثم اضغط صورتها الصحيحة 🔗" })
        );
        if (groups.length > 1) {
          container.appendChild(
            UI.el("div", { class: "q-progress", text: "مجموعة " + (gi + 1) + " / " + groups.length })
          );
        }

        const wrap = UI.el("div", { class: "connect-wrap" });
        const leftCol = UI.el("div", { class: "connect-col" }); // English words
        const rightCol = UI.el("div", { class: "connect-col" }); // pictures
        wrap.appendChild(leftCol);
        wrap.appendChild(rightCol);
        container.appendChild(wrap);

        let selected = null; // { w, el, side }
        let matched = 0;

        // A tap can start from EITHER side. First tap selects; a tap on the
        // opposite side tries to match; a tap on the same side moves the
        // selection; tapping the selected item again clears it.
        function handle(w, el, side) {
          if (el.classList.contains("done")) return;
          speak(w.en);
          if (!selected) {
            el.classList.add("sel");
            selected = { w: w, el: el, side: side };
            return;
          }
          if (selected.el === el) {
            el.classList.remove("sel");
            selected = null;
            return;
          }
          if (selected.side === side) {
            selected.el.classList.remove("sel");
            el.classList.add("sel");
            selected = { w: w, el: el, side: side };
            return;
          }
          // opposite sides — attempt a match
          const first = selected;
          selected = null;
          if (first.w.en === w.en) {
            first.el.classList.add("done");
            first.el.classList.remove("sel");
            el.classList.add("done");
            sfx.correct();
            matched++;
            if (matched === words.length) setTimeout(nextGroup, 700);
          } else {
            sfx.wrong();
            el.classList.add("shake");
            first.el.classList.add("shake");
            setTimeout(() => {
              el.classList.remove("shake");
              first.el.classList.remove("shake", "sel");
            }, 450);
          }
        }

        UI.shuffle(words).forEach(w => {
          const b = UI.el("button", { class: "connect-item word" }, [UI.enWord(w.en)]);
          b.addEventListener("click", () => handle(w, b, "word"));
          leftCol.appendChild(b);
        });

        UI.shuffle(words).forEach(w => {
          const b = UI.el("button", { class: "connect-item pic" }, [UI.pic(w, "connect-emoji")]);
          b.addEventListener("click", () => handle(w, b, "pic"));
          rightCol.appendChild(b);
        });
      }

      function nextGroup() {
        gi++;
        if (gi < groups.length) {
          showGroup();
        } else {
          learnDone();
        }
      }

      function learnDone() {
        sfx.win();
        const next = UI.nextStep(theme.id, "connect");
        container.innerHTML = "";
        container.appendChild(
          UI.el("div", { class: "round-done" }, [
            UI.el("div", { class: "confetti", text: "🎉" }),
            UI.el("h2", { text: "تعلّمت الوحدة!" }),
            UI.el("p", { class: "earned", text: "الآن جرّب اختبار الاستماع 👂" }),
            UI.el("div", { class: "row" }, [
              UI.el("button", {
                class: "big-btn primary",
                onclick: () => (location.hash = next.hash)
              }, [next.label]),
              UI.el("button", {
                class: "big-btn",
                onclick: () => { gi = 0; showGroup(); }
              }, ["🔁 إعادة التعلّم"])
            ])
          ])
        );
      }

      showGroup();
    }
  };
})();
