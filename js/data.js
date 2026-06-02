// Vocabulary for "We Can! 2" Workbook (Part 2), Grade 2 primary, term 2.
// Each theme groups bite-size words. word = { en, ar, emoji }.
// `ar` = Arabic gloss (shown to the child), `en` = target English word (the thing being learned).
window.THEMES = [
  {
    id: "animals",
    en: "Wild Animals",
    ar: "الحيوانات البرية",
    emoji: "🦁",
    color: "#ffb703",
    words: [
      { en: "lion", ar: "أسد", emoji: "🦁" },
      { en: "elephant", ar: "فيل", emoji: "🐘" },
      { en: "monkey", ar: "قرد", emoji: "🐒" },
      { en: "giraffe", ar: "زرافة", emoji: "🦒" },
      { en: "zebra", ar: "حمار وحشي", emoji: "🦓" },
      { en: "tiger", ar: "نمر", emoji: "🐅" },
      { en: "snake", ar: "ثعبان", emoji: "🐍" },
      { en: "kangaroo", ar: "كنغر", emoji: "🦘" },
      { en: "koala", ar: "كوالا", emoji: "🐨" },
      { en: "hippo", ar: "فرس النهر", emoji: "🦛" },
      { en: "rhino", ar: "وحيد القرن", emoji: "🦏" },
      { en: "crocodile", ar: "تمساح", emoji: "🐊" }
    ]
  },
  {
    id: "house",
    en: "My House",
    ar: "منزلي",
    emoji: "🏠",
    color: "#fb8500",
    words: [
      { en: "house", ar: "منزل", emoji: "🏠", img: "img/house/house.jpg" },
      { en: "bedroom", ar: "غرفة النوم", emoji: "🛏️", img: "img/house/bedroom.jpg" },
      { en: "bathroom", ar: "الحمّام", emoji: "🛁", img: "img/house/bathroom.jpg" },
      { en: "kitchen", ar: "المطبخ", emoji: "🍳", img: "img/house/kitchen.jpg" },
      { en: "living room", ar: "غرفة المعيشة", emoji: "🛋️", img: "img/house/livingroom.jpg" },
      { en: "dining room", ar: "غرفة الطعام", emoji: "🍽️", img: "img/house/diningroom.jpg" },
      { en: "door", ar: "باب", emoji: "🚪", img: "img/house/door.jpg" },
      { en: "window", ar: "نافذة", emoji: "🪟", img: "img/house/window.jpg" },
      { en: "key", ar: "مفتاح", emoji: "🔑", img: "img/house/key.jpg" },
      { en: "lamp", ar: "مصباح", emoji: "💡", img: "img/house/lamp.jpg" }
    ]
  },
  {
    id: "transport",
    en: "Getting Around",
    ar: "المواصلات",
    emoji: "🚌",
    color: "#2a9d8f",
    words: [
      { en: "bus", ar: "حافلة", emoji: "🚌" },
      { en: "car", ar: "سيارة", emoji: "🚗" },
      { en: "train", ar: "قطار", emoji: "🚆" },
      { en: "bike", ar: "دراجة", emoji: "🚲" },
      { en: "plane", ar: "طائرة", emoji: "✈️" },
      { en: "boat", ar: "قارب", emoji: "⛵" },
      { en: "taxi", ar: "سيارة أجرة", emoji: "🚕" },
      { en: "school", ar: "مدرسة", emoji: "🏫" }
    ]
  },
  {
    id: "things",
    en: "My Things",
    ar: "أشيائي",
    emoji: "✏️",
    color: "#e76f51",
    words: [
      { en: "pen", ar: "قلم حبر", emoji: "🖊️" },
      { en: "pencil", ar: "قلم رصاص", emoji: "✏️" },
      { en: "paper", ar: "ورقة", emoji: "📄" },
      { en: "scissors", ar: "مقص", emoji: "✂️" },
      { en: "book", ar: "كتاب", emoji: "📖" },
      { en: "candy", ar: "حلوى", emoji: "🍬" },
      { en: "ruler", ar: "مسطرة", emoji: "📏" },
      { en: "backpack", ar: "حقيبة", emoji: "🎒" },
      { en: "crayon", ar: "قلم تلوين", emoji: "🖍️" }
    ]
  },
  {
    id: "myday",
    en: "My Day",
    ar: "يومي",
    emoji: "☀️",
    color: "#4361ee",
    words: [
      { en: "wake up", ar: "يستيقظ", emoji: "⏰", img: "img/myday/wakeup.jpg" },
      { en: "breakfast", ar: "فطور", emoji: "🥞", img: "img/myday/breakfast.jpg" },
      { en: "school", ar: "مدرسة", emoji: "🏫", img: "img/myday/school.jpg" },
      { en: "lunch", ar: "غداء", emoji: "🍽️", img: "img/myday/lunch.jpg" },
      { en: "play", ar: "يلعب", emoji: "⚽", img: "img/myday/play.jpg" },
      { en: "read", ar: "يقرأ", emoji: "📖", img: "img/myday/read.jpg" },
      { en: "homework", ar: "واجب", emoji: "📝", img: "img/myday/homework.jpg" },
      { en: "dinner", ar: "عشاء", emoji: "🍲", img: "img/myday/dinner.jpg" },
      { en: "sleep", ar: "ينام", emoji: "😴", img: "img/myday/sleep.jpg" }
    ]
  },
  {
    id: "numbers",
    en: "Numbers",
    ar: "الأرقام",
    emoji: "🔢",
    color: "#9b5de5",
    words: [
      { en: "one", ar: "١ واحد", emoji: "1️⃣" },
      { en: "two", ar: "٢ اثنان", emoji: "2️⃣" },
      { en: "three", ar: "٣ ثلاثة", emoji: "3️⃣" },
      { en: "four", ar: "٤ أربعة", emoji: "4️⃣" },
      { en: "five", ar: "٥ خمسة", emoji: "5️⃣" },
      { en: "six", ar: "٦ ستة", emoji: "6️⃣" },
      { en: "seven", ar: "٧ سبعة", emoji: "7️⃣" },
      { en: "eight", ar: "٨ ثمانية", emoji: "8️⃣" },
      { en: "nine", ar: "٩ تسعة", emoji: "9️⃣" },
      { en: "ten", ar: "١٠ عشرة", emoji: "🔟" }
    ]
  }
];
