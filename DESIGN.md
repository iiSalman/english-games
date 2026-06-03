# DESIGN

Design system for the kids' English game. Plain HTML/CSS/JS, no build step.

## Color
Strategy: **Committed** — a blue→violet gradient owns the whole surface; gold is the
single reward/action accent. Per-theme accent colors tint cards only.

- Surface gradient: `#6a8dff` → `#9b5de5` (fixed background).
- Cards / panels: white, large radius, soft layered shadow (`0 8px 0 rgba(0,0,0,.12), 0 14px 28px rgba(0,0,0,.18)`).
- Accent (reward, primary action, selection): gold `#ffce3a`.
- Semantic: success `#2ec27e`, gentle-wrong `#ff6b6b` (used only for a soft shake, never a harsh X).
- Per-theme hues (card top/side): animals `#ffb703`, house `#fb8500`, transport `#2a9d8f`,
  things `#e76f51`, my-day `#4361ee`, numbers `#9b5de5`.
- Text: ink `#2b2d42` on white; white on the gradient.

## Typography
- **Display / UI (Arabic + Latin):** "Baloo Bhaijaan 2" — rounded, friendly, supports Arabic shaping.
- **English target words:** "Fredoka" — wrapped `dir=ltr` so they read correctly inside the RTL page.
- Big, high-contrast scale. Headings 1.4–3rem; the word being learned is the largest element on a card.

## Shape & layout
- Everything rounded (16–28px radii). Pill buttons. No sharp corners.
- RTL throughout (`dir="rtl"`); English spans isolated LTR.
- Generous spacing; one decision at a time. Touch targets ≥ 48px, usually much larger.
- Fixed round corner buttons (back/home, sound) stay out of the content flow so they never
  shift the layout on small screens.

## Motion
- Short, ease-out (`pop`, `flip-in`, `shake`). Reward = a star that flies to the counter + a happy chime.
- No layout-property animation; transforms/opacity only.

## Pictures
- Emoji for clear themes (Animals, Transport, My Things, Numbers).
- Real openly-licensed photos for My House & My Day, each with the Arabic word captioned on it.
- `UI.pic(word)` renders a photo when the word has `.img`, else its emoji.

## Audio
- Web Speech API speaks the English word (slow, friendly). WebAudio chimes for correct/wrong/win.
- Reward-only feedback philosophy: wrong = soft low blip + shake, never a buzzer.
