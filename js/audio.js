// Pronunciation via the browser's built-in Web Speech API (free, no key).
// Plus tiny WebAudio sound effects for correct / wrong feedback.
(function () {
  let enVoice = null;
  function pickVoice() {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    // Prefer a natural English (US/GB) voice.
    enVoice =
      voices.find(v => /en[-_]US/i.test(v.lang) && /female|samantha|google/i.test(v.name)) ||
      voices.find(v => /en[-_]US/i.test(v.lang)) ||
      voices.find(v => /^en/i.test(v.lang)) ||
      null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  // Global sound on/off, remembered across sessions.
  const MUTE_KEY = "eg_muted";
  let muted = localStorage.getItem(MUTE_KEY) === "1";
  window.Sound = {
    isMuted: function () { return muted; },
    toggle: function () {
      muted = !muted;
      localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
      if (muted && window.speechSynthesis) speechSynthesis.cancel();
      return muted;
    }
  };

  // Speak an English word slowly and clearly for a young learner.
  window.speak = function (text) {
    if (muted || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.8;
    u.pitch = 1.1;
    if (enVoice) u.voice = enVoice;
    speechSynthesis.speak(u);
  };

  // --- Sound effects -------------------------------------------------------
  let ctx = null;
  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    return ctx;
  }
  function tone(freq, start, dur, type, gain) {
    if (muted) return;
    const c = ac();
    if (!c) return;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.value = gain || 0.15;
    o.connect(g);
    g.connect(c.destination);
    const t = c.currentTime + start;
    o.start(t);
    g.gain.setValueAtTime(g.gain.value, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.stop(t + dur);
  }

  window.sfx = {
    correct: function () {
      // happy rising arpeggio
      tone(523, 0, 0.15, "triangle", 0.18); // C5
      tone(659, 0.1, 0.15, "triangle", 0.18); // E5
      tone(784, 0.2, 0.25, "triangle", 0.2); // G5
    },
    wrong: function () {
      // gentle low "try again" blip (never harsh)
      tone(300, 0, 0.18, "sine", 0.12);
      tone(240, 0.12, 0.2, "sine", 0.12);
    },
    win: function () {
      tone(523, 0, 0.15, "triangle", 0.2);
      tone(659, 0.12, 0.15, "triangle", 0.2);
      tone(784, 0.24, 0.15, "triangle", 0.2);
      tone(1047, 0.36, 0.35, "triangle", 0.22); // C6
    }
  };
})();
