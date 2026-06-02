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

        let selected = null; // {w, el}
        let matched = 0;

        UI.shuffle(words).forEach(w => {
          const b = UI.el("button", { class: "connect-item word" }, [UI.enWord(w.en)]);
          b._w = w;
          b.addEventListener("click", () => {
            if (b.classList.contains("done")) return;
            speak(w.en);
            leftCol.querySelectorAll(".connect-item").forEach(x => x.classList.remove("sel"));
            b.classList.add("sel");
            selected = { w: w, el: b };
          });
          leftCol.appendChild(b);
        });

        UI.shuffle(words).forEach(w => {
          const b = UI.el("button", { class: "connect-item pic" }, [
            UI.el("span", { class: "connect-emoji", text: w.emoji })
          ]);
          b._w = w;
          b.addEventListener("click", () => {
            if (b.classList.contains("done")) return;
            if (!selected) {
              speak(w.en);
              return;
            }
            if (selected.w.en === w.en) {
              selected.el.classList.add("done");
              selected.el.classList.remove("sel");
              b.classList.add("done");
              sfx.correct();
              speak(w.en);
              selected = null;
              matched++;
              if (matched === words.length) {
                setTimeout(nextGroup, 700);
              }
            } else {
              sfx.wrong();
              b.classList.add("shake");
              selected.el.classList.add("shake");
              const prev = selected;
              setTimeout(() => {
                b.classList.remove("shake");
                prev.el.classList.remove("shake", "sel");
              }, 450);
              selected = null;
            }
          });
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
