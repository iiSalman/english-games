// Star scoring: every correct answer earns a star. Total persists in localStorage
// so the child keeps their stars across sessions. Reward-only: never subtracts.
(function () {
  const KEY = "eg_stars_total";

  function read() {
    const n = parseInt(localStorage.getItem(KEY) || "0", 10);
    return isNaN(n) ? 0 : n;
  }
  function write(n) {
    localStorage.setItem(KEY, String(n));
  }

  function renderAll() {
    const total = read();
    document.querySelectorAll("[data-star-total]").forEach(el => {
      el.textContent = total;
    });
  }

  // Fly a star from (x,y) up to the home counter badge for a satisfying reward.
  function flyStar(fromX, fromY) {
    const badge = document.querySelector(".star-badge");
    const star = document.createElement("div");
    star.className = "flying-star";
    star.textContent = "⭐";
    star.style.left = fromX + "px";
    star.style.top = fromY + "px";
    document.body.appendChild(star);

    const toX = badge ? badge.getBoundingClientRect().left + 20 : window.innerWidth / 2;
    const toY = badge ? badge.getBoundingClientRect().top + 20 : 40;

    requestAnimationFrame(() => {
      star.style.transform =
        "translate(" + (toX - fromX) + "px," + (toY - fromY) + "px) scale(0.4)";
      star.style.opacity = "0";
    });
    setTimeout(() => star.remove(), 750);
  }

  window.Stars = {
    get: read,
    // add n stars; optional event/element to launch the flying-star animation from.
    add: function (n, originEl) {
      n = n || 1;
      write(read() + n);
      renderAll();
      // bump the badge
      const badge = document.querySelector(".star-badge");
      if (badge) {
        badge.classList.remove("pop");
        void badge.offsetWidth;
        badge.classList.add("pop");
      }
      if (originEl && originEl.getBoundingClientRect) {
        const r = originEl.getBoundingClientRect();
        flyStar(r.left + r.width / 2, r.top + r.height / 2);
      }
    },
    reset: function () {
      write(0);
      renderAll();
    },
    refresh: renderAll
  };
})();
