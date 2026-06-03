// Content for "We Can! 2" Workbook (Grade 2, term 2), organized to mirror the book's
// five units. UNITS = top level. THEMES = vocabulary topics, each tagged with `unit`.
// SENTENCES = per-unit talk-time sentences for the build-the-sentence game.
// word = { en, ar, emoji, img? }  (img is a real photo when there is no clean emoji)

window.UNITS = [
  { id: "u1", num: "١", ar: "الحيوانات البرية", en: "Wild Animals", emoji: "🦁", color: "#ffb703" },
  { id: "u2", num: "٢", ar: "من هنا إلى هناك", en: "From Here to There", emoji: "🚌", color: "#2a9d8f" },
  { id: "u3", num: "٣", ar: "منزلي", en: "My House", emoji: "🏠", color: "#fb8500" },
  { id: "u4", num: "٤", ar: "أشيائي", en: "My Things", emoji: "✏️", color: "#e76f51" },
  { id: "u5", num: "٥", ar: "يومي وعالمي", en: "My Day & World", emoji: "☀️", color: "#4361ee" }
];

window.THEMES = [
  // ---------------- Unit 1 ----------------
  {
    id: "animals", unit: "u1", en: "Wild Animals", ar: "الحيوانات البرية", emoji: "🦁", color: "#ffb703",
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
      { en: "crocodile", ar: "تمساح", emoji: "🐊" },
      { en: "polar bear", ar: "دب قطبي", emoji: "🐻‍❄️" },
      { en: "chimpanzee", ar: "شمبانزي", emoji: "🐵" },
      { en: "iguana", ar: "إغوانا", emoji: "🦎" },
      { en: "ostrich", ar: "نعامة", emoji: "🦤", img: "img/animals/ostrich.jpg" },
      { en: "hyena", ar: "ضبع", emoji: "🐺", img: "img/animals/hyena.jpg" }
    ]
  },
  {
    id: "body", unit: "u1", en: "Body Parts", ar: "أجزاء الجسم", emoji: "👀", color: "#ffb703",
    words: [
      { en: "eye", ar: "عين", emoji: "👁️" },
      { en: "nose", ar: "أنف", emoji: "👃" },
      { en: "ear", ar: "أذن", emoji: "👂" },
      { en: "mouth", ar: "فم", emoji: "👄" },
      { en: "hand", ar: "يد", emoji: "✋" },
      { en: "foot", ar: "قدم", emoji: "🦶" },
      { en: "tooth", ar: "سن", emoji: "🦷" },
      { en: "tongue", ar: "لسان", emoji: "👅" }
    ]
  },

  // ---------------- Unit 2 ----------------
  {
    id: "transport", unit: "u2", en: "Getting Around", ar: "المواصلات", emoji: "🚌", color: "#2a9d8f",
    words: [
      { en: "bus", ar: "حافلة", emoji: "🚌" },
      { en: "car", ar: "سيارة", emoji: "🚗" },
      { en: "train", ar: "قطار", emoji: "🚆" },
      { en: "bike", ar: "دراجة", emoji: "🚲" },
      { en: "plane", ar: "طائرة", emoji: "✈️" },
      { en: "boat", ar: "قارب", emoji: "⛵" },
      { en: "taxi", ar: "سيارة أجرة", emoji: "🚕" },
      { en: "truck", ar: "شاحنة", emoji: "🚚" },
      { en: "rocket", ar: "صاروخ", emoji: "🚀" }
    ]
  },
  {
    id: "traffic", unit: "u2", en: "Traffic Lights", ar: "إشارة المرور", emoji: "🚦", color: "#2a9d8f",
    words: [
      { en: "red", ar: "أحمر", emoji: "🔴" },
      { en: "yellow", ar: "أصفر", emoji: "🟡" },
      { en: "green", ar: "أخضر", emoji: "🟢" },
      { en: "stop", ar: "قِف", emoji: "🛑" },
      { en: "wait", ar: "انتظر", emoji: "✋" },
      { en: "go", ar: "انطلق", emoji: "✅" }
    ]
  },
  {
    id: "places", unit: "u2", en: "Places to Go", ar: "أماكن نذهب إليها", emoji: "🏫", color: "#2a9d8f",
    words: [
      { en: "school", ar: "مدرسة", emoji: "🏫" },
      { en: "hospital", ar: "مستشفى", emoji: "🏥" },
      { en: "train station", ar: "محطة القطار", emoji: "🚉" },
      { en: "space station", ar: "محطة الفضاء", emoji: "🛰️" },
      { en: "moon", ar: "القمر", emoji: "🌙" }
    ]
  },

  // ---------------- Unit 3 ----------------
  {
    id: "house", unit: "u3", en: "Rooms", ar: "غرف المنزل", emoji: "🏠", color: "#fb8500",
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
    id: "furniture", unit: "u3", en: "Furniture", ar: "الأثاث", emoji: "🪑", color: "#fb8500",
    words: [
      { en: "chair", ar: "كرسي", emoji: "🪑" },
      { en: "bed", ar: "سرير", emoji: "🛏️" },
      { en: "sofa", ar: "أريكة", emoji: "🛋️" },
      { en: "clock", ar: "ساعة حائط", emoji: "🕐" },
      { en: "table", ar: "طاولة", emoji: "🪵", img: "img/furniture/table.jpg" },
      { en: "cupboard", ar: "دولاب", emoji: "🚪", img: "img/furniture/cupboard.jpg" },
      { en: "fridge", ar: "ثلاجة", emoji: "🧊", img: "img/furniture/fridge.jpg" }
    ]
  },

  // ---------------- Unit 4 ----------------
  {
    id: "school", unit: "u4", en: "School Things", ar: "أدوات مدرسية", emoji: "✏️", color: "#e76f51",
    words: [
      { en: "pen", ar: "قلم حبر", emoji: "🖊️" },
      { en: "pencil", ar: "قلم رصاص", emoji: "✏️" },
      { en: "scissors", ar: "مقص", emoji: "✂️" },
      { en: "ruler", ar: "مسطرة", emoji: "📏" },
      { en: "book", ar: "كتاب", emoji: "📖" },
      { en: "crayon", ar: "قلم تلوين", emoji: "🖍️" },
      { en: "backpack", ar: "حقيبة", emoji: "🎒" },
      { en: "eraser", ar: "ممحاة", emoji: "🩹", img: "img/school/eraser.jpg" },
      { en: "glue", ar: "صمغ", emoji: "🧴", img: "img/school/glue.jpg" }
    ]
  },
  {
    id: "mythings", unit: "u4", en: "My Things", ar: "أشيائي الخاصة", emoji: "👛", color: "#e76f51",
    words: [
      { en: "wallet", ar: "محفظة", emoji: "👛" },
      { en: "cell phone", ar: "جوال", emoji: "📱" },
      { en: "comic book", ar: "قصص مصورة", emoji: "📔" },
      { en: "watch", ar: "ساعة يد", emoji: "⌚" },
      { en: "candy", ar: "حلوى", emoji: "🍬" }
    ]
  },
  {
    id: "numbers", unit: "u4", en: "Numbers", ar: "الأرقام", emoji: "🔢", color: "#e76f51",
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
  },

  // ---------------- Unit 5 ----------------
  {
    id: "myday", unit: "u5", en: "My Day", ar: "يومي", emoji: "🌞", color: "#4361ee",
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
    id: "weather", unit: "u5", en: "Weather", ar: "الطقس", emoji: "🌦️", color: "#4361ee",
    words: [
      { en: "sunny", ar: "مشمس", emoji: "☀️" },
      { en: "rainy", ar: "ممطر", emoji: "🌧️" },
      { en: "cloudy", ar: "غائم", emoji: "☁️" },
      { en: "snowy", ar: "مثلج", emoji: "❄️" },
      { en: "windy", ar: "عاصف", emoji: "🌬️" },
      { en: "hot", ar: "حار", emoji: "🥵" },
      { en: "cold", ar: "بارد", emoji: "🥶" }
    ]
  },
  {
    id: "jobs", unit: "u5", en: "Jobs", ar: "المهن", emoji: "👩‍⚕️", color: "#4361ee",
    words: [
      { en: "doctor", ar: "طبيب", emoji: "🧑‍⚕️" },
      { en: "teacher", ar: "معلم", emoji: "🧑‍🏫" },
      { en: "farmer", ar: "مزارع", emoji: "🧑‍🌾" },
      { en: "pilot", ar: "طيار", emoji: "🧑‍✈️" },
      { en: "cook", ar: "طباخ", emoji: "🧑‍🍳" },
      { en: "firefighter", ar: "رجل إطفاء", emoji: "🧑‍🚒" },
      { en: "astronaut", ar: "رائد فضاء", emoji: "🧑‍🚀" },
      { en: "businessman", ar: "رجل أعمال", emoji: "💼" }
    ]
  },
  {
    id: "town", unit: "u5", en: "In Town", ar: "أماكن في المدينة", emoji: "🏙️", color: "#4361ee",
    words: [
      { en: "restaurant", ar: "مطعم", emoji: "🍽️" },
      { en: "museum", ar: "متحف", emoji: "🏛️" },
      { en: "supermarket", ar: "سوبر ماركت", emoji: "🏪" },
      { en: "bookstore", ar: "مكتبة", emoji: "📚" },
      { en: "post office", ar: "مكتب بريد", emoji: "🏤" },
      { en: "gym", ar: "صالة رياضية", emoji: "🏋️" },
      { en: "bus station", ar: "محطة الحافلات", emoji: "🚏" }
    ]
  },
  {
    id: "actions", unit: "u5", en: "Animal Actions", ar: "أفعال الحيوانات", emoji: "🤸", color: "#4361ee",
    words: [
      { en: "jump", ar: "يقفز", emoji: "🤸" },
      { en: "swim", ar: "يسبح", emoji: "🏊" },
      { en: "run", ar: "يجري", emoji: "🏃" },
      { en: "fly", ar: "يطير", emoji: "🕊️" },
      { en: "dive", ar: "يغطس", emoji: "🤿" },
      { en: "walk", ar: "يمشي", emoji: "🚶" },
      { en: "climb", ar: "يتسلق", emoji: "🧗" }
    ]
  }
];

// Build-the-sentence content, per unit. Kid-level statements/questions from the book.
// `emoji` gives the sentence a picture; tokens are split on spaces at render time.
window.SENTENCES = {
  u1: [
    { en: "Monkeys are cute", ar: "القرود لطيفة", emoji: "🐒" },
    { en: "Elephants are big", ar: "الفِيَلة ضخمة", emoji: "🐘" },
    { en: "It can jump", ar: "يستطيع القفز", emoji: "🦘" },
    { en: "It can swim", ar: "يستطيع السباحة", emoji: "🐊" },
    { en: "Snakes can bite", ar: "الثعابين تعض", emoji: "🐍" },
    { en: "I like lions", ar: "أحب الأسود", emoji: "🦁" }
  ],
  u2: [
    { en: "I go to school by bus", ar: "أذهب إلى المدرسة بالحافلة", emoji: "🚌" },
    { en: "I walk to school", ar: "أمشي إلى المدرسة", emoji: "🚶" },
    { en: "Take a taxi to the station", ar: "خذ سيارة أجرة إلى المحطة", emoji: "🚕" },
    { en: "Stop at the red light", ar: "قف عند الضوء الأحمر", emoji: "🔴" },
    { en: "Go at the green light", ar: "انطلق عند الضوء الأخضر", emoji: "🟢" },
    { en: "Turn left", ar: "انعطف يسارًا", emoji: "⬅️" }
  ],
  u3: [
    { en: "Mom is in the kitchen", ar: "أمي في المطبخ", emoji: "👩" },
    { en: "He is in the bathroom", ar: "هو في الحمّام", emoji: "🛁" },
    { en: "The cat is under the bed", ar: "القطة تحت السرير", emoji: "🐱" },
    { en: "This is the living room", ar: "هذه غرفة المعيشة", emoji: "🛋️" },
    { en: "Welcome to my house", ar: "أهلًا بك في منزلي", emoji: "🏠" },
    { en: "The chair is in the room", ar: "الكرسي في الغرفة", emoji: "🪑" }
  ],
  u4: [
    { en: "It is a watch", ar: "إنها ساعة", emoji: "⌚" },
    { en: "They are pencils", ar: "إنها أقلام رصاص", emoji: "✏️" },
    { en: "Can I have some candy", ar: "هل يمكنني الحصول على بعض الحلوى", emoji: "🍬" },
    { en: "Can I use your pen", ar: "هل يمكنني استخدام قلمك", emoji: "🖊️" },
    { en: "This is my wallet", ar: "هذه محفظتي", emoji: "👛" },
    { en: "I have a comic book", ar: "لديّ كتاب قصص مصورة", emoji: "📔" }
  ],
  u5: [
    { en: "It is sunny and hot", ar: "الجو مشمس وحار", emoji: "☀️" },
    { en: "He is a doctor", ar: "هو طبيب", emoji: "🧑‍⚕️" },
    { en: "She has long hair", ar: "لديها شعر طويل", emoji: "👧" },
    { en: "There is a museum", ar: "يوجد متحف", emoji: "🏛️" },
    { en: "I get up at seven", ar: "أستيقظ في السابعة", emoji: "⏰" },
    { en: "Penguins live in cold places", ar: "البطاريق تعيش في أماكن باردة", emoji: "🐧" }
  ]
};
