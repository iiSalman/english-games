// Content for the "We Can!" workbooks (Grade 2 term 2 + Grade 3 term 2), organized
// to mirror each book's units. Each grade is its own bundle of UNITS / THEMES /
// SENTENCES; a grade switcher on the home screen picks which one is live.
// UNITS = top level. THEMES = vocabulary topics, each tagged with `unit`.
// SENTENCES = per-unit talk-time sentences for the build-the-sentence game.
// word = { en, ar, emoji, img? }  (img is a real photo when there is no clean emoji)

// ============================ GRADE 2 (We Can! 2) ============================
var G2_UNITS = [
  { id: "u1", num: "١", ar: "الحيوانات البرية", en: "Wild Animals", emoji: "🦁", color: "#ffb703" },
  { id: "u2", num: "٢", ar: "من هنا إلى هناك", en: "From Here to There", emoji: "🚌", color: "#2a9d8f" },
  { id: "u3", num: "٣", ar: "منزلي", en: "My House", emoji: "🏠", color: "#fb8500" },
  { id: "u4", num: "٤", ar: "أشيائي", en: "My Things", emoji: "✏️", color: "#e76f51" },
  { id: "u5", num: "٥", ar: "يومي وعالمي", en: "My Day & World", emoji: "☀️", color: "#4361ee" }
];

var G2_THEMES = [
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
var G2_SENTENCES = {
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

// ============================ GRADE 3 (We Can! 3) ============================
// We Can! Workbook 3, Term 2 — six units (Goals 49–96). Emoji-only words.
var G3_UNITS = [
  { id: "g3u1", num: "١", ar: "متعة عطلة الأسبوع", en: "Fun on the Weekend", emoji: "🎮", color: "#ef476f" },
  { id: "g3u2", num: "٢", ar: "تقلبات الحياة", en: "Life's Ups and Downs", emoji: "🎢", color: "#118ab2" },
  { id: "g3u3", num: "٣", ar: "مدرستي رائعة", en: "My School is Cool!", emoji: "🏫", color: "#06d6a0" },
  { id: "g3u4", num: "٤", ar: "حياة صحية", en: "A Healthy Life", emoji: "🍎", color: "#ffd166" },
  { id: "g3u5", num: "٥", ar: "التجول في المدينة", en: "Hanging Out in Town", emoji: "🏙️", color: "#9b5de5" },
  { id: "g3u6", num: "٦", ar: "عطلة أحلامي", en: "My Dream Vacation", emoji: "✈️", color: "#f4a261" }
];

var G3_THEMES = [
  // ---------------- Unit 1: Fun on the Weekend ----------------
  {
    id: "g3-weekend", unit: "g3u1", en: "Weekend Things", ar: "أفعال العطلة", emoji: "🧹", color: "#ef476f",
    words: [
      { en: "cleaned", ar: "نظّف", emoji: "🧹", img: "img/g3/g3-weekend/cleaned.jpg" },
      { en: "played", ar: "لعب", emoji: "🎮", img: "img/g3/g3-weekend/played.jpg" },
      { en: "watched", ar: "شاهد", emoji: "📺", img: "img/g3/g3-weekend/watched.jpg" },
      { en: "cooked", ar: "طبخ", emoji: "🍳", img: "img/g3/g3-weekend/cooked.jpg" },
      { en: "studied", ar: "درس", emoji: "📚", img: "img/g3/g3-weekend/studied.jpg" },
      { en: "practiced", ar: "تدرّب", emoji: "🎯", img: "img/g3/g3-weekend/practiced.jpg" },
      { en: "kicked", ar: "ركل", emoji: "⚽", img: "img/g3/g3-weekend/kicked.jpg" },
      { en: "stayed", ar: "بقي", emoji: "🏠", img: "img/g3/g3-weekend/stayed.jpg" }
    ]
  },
  {
    id: "g3-comments", unit: "g3u1", en: "Comments", ar: "تعليقات", emoji: "😮", color: "#ef476f",
    words: [
      { en: "fantastic", ar: "مذهل", emoji: "🤩", img: "img/g3/g3-comments/fantastic.jpg" },
      { en: "great", ar: "رائع", emoji: "😀", img: "img/g3/g3-comments/great.jpg" },
      { en: "okay", ar: "مقبول", emoji: "🙂", img: "img/g3/g3-comments/okay.jpg" },
      { en: "boring", ar: "ممل", emoji: "😑", img: "img/g3/g3-comments/boring.jpg" },
      { en: "scary", ar: "مخيف", emoji: "😱", img: "img/g3/g3-comments/scary.jpg" }
    ]
  },
  {
    id: "g3-food", unit: "g3u1", en: "Food at the Café", ar: "طعام المقهى", emoji: "🍔", color: "#ef476f",
    words: [
      { en: "burger", ar: "برجر", emoji: "🍔", img: "img/g3/g3-food/burger.jpg" },
      { en: "fries", ar: "بطاطس مقلية", emoji: "🍟", img: "img/g3/g3-food/fries.jpg" },
      { en: "soup", ar: "حساء", emoji: "🍲", img: "img/g3/g3-food/soup.jpg" },
      { en: "water", ar: "ماء", emoji: "💧", img: "img/g3/g3-food/water.jpg" },
      { en: "flour", ar: "دقيق", emoji: "🌾", img: "img/g3/g3-food/flour.jpg" },
      { en: "eggs", ar: "بيض", emoji: "🥚", img: "img/g3/g3-food/eggs.jpg" },
      { en: "milk", ar: "حليب", emoji: "🥛", img: "img/g3/g3-food/milk.jpg" },
      { en: "apples", ar: "تفاح", emoji: "🍎", img: "img/g3/g3-food/apples.jpg" }
    ]
  },

  // ---------------- Unit 2: Life's Ups and Downs ----------------
  {
    id: "g3-feelings", unit: "g3u2", en: "Feelings", ar: "المشاعر", emoji: "😊", color: "#118ab2",
    words: [
      { en: "happy", ar: "سعيد", emoji: "😄", img: "img/g3/g3-feelings/happy.jpg" },
      { en: "sad", ar: "حزين", emoji: "😢", img: "img/g3/g3-feelings/sad.jpg" },
      { en: "scared", ar: "خائف", emoji: "😨", img: "img/g3/g3-feelings/scared.jpg" },
      { en: "worried", ar: "قلق", emoji: "😟", img: "img/g3/g3-feelings/worried.jpg" },
      { en: "excited", ar: "متحمس", emoji: "🤗", img: "img/g3/g3-feelings/excited.jpg" }
    ]
  },
  {
    id: "g3-pasttime", unit: "g3u2", en: "Things That Happened", ar: "أشياء حدثت", emoji: "🏆", color: "#118ab2",
    words: [
      { en: "won", ar: "فاز", emoji: "🏆", img: "img/g3/g3-pasttime/won.jpg" },
      { en: "lost", ar: "خسر", emoji: "❌", img: "img/g3/g3-pasttime/lost.jpg" },
      { en: "saw", ar: "رأى", emoji: "👀", img: "img/g3/g3-pasttime/saw.jpg" },
      { en: "made", ar: "صنع", emoji: "🛠️", img: "img/g3/g3-pasttime/made.jpg" },
      { en: "broke", ar: "كسر", emoji: "🦴", img: "img/g3/g3-pasttime/broke.jpg" },
      { en: "caught", ar: "أمسك / أُصيب", emoji: "🤧", img: "img/g3/g3-pasttime/caught.jpg" },
      { en: "got", ar: "حصل", emoji: "🎁", img: "img/g3/g3-pasttime/got.jpg" },
      { en: "had", ar: "ملك / لديه", emoji: "✋", img: "img/g3/g3-pasttime/had.jpg" }
    ]
  },
  {
    id: "g3-events", unit: "g3u2", en: "Good & Bad Things", ar: "أشياء جيدة وسيئة", emoji: "🛸", color: "#118ab2",
    words: [
      { en: "UFO", ar: "جسم طائر مجهول", emoji: "🛸", img: "img/g3/g3-events/ufo.jpg" },
      { en: "shooting star", ar: "شهاب", emoji: "🌠", img: "img/g3/g3-events/shooting_star.jpg" },
      { en: "operation", ar: "عملية", emoji: "🏥", img: "img/g3/g3-events/operation.jpg" },
      { en: "cold", ar: "نزلة برد", emoji: "🤒", img: "img/g3/g3-events/cold.jpg" },
      { en: "race", ar: "سباق", emoji: "🏁", img: "img/g3/g3-events/race.jpg" },
      { en: "trophy", ar: "كأس", emoji: "🏆", img: "img/g3/g3-events/trophy.jpg" }
    ]
  },

  // ---------------- Unit 3: My School is Cool! ----------------
  {
    id: "g3-subjects", unit: "g3u3", en: "School Subjects", ar: "المواد الدراسية", emoji: "📘", color: "#06d6a0",
    words: [
      { en: "math", ar: "رياضيات", emoji: "➗", img: "img/g3/g3-subjects/math.jpg" },
      { en: "science", ar: "علوم", emoji: "🔬", img: "img/g3/g3-subjects/science.jpg" },
      { en: "English", ar: "إنجليزي", emoji: "🔤", img: "img/g3/g3-subjects/english.jpg" },
      { en: "art", ar: "رسم", emoji: "🎨", img: "img/g3/g3-subjects/art.jpg" },
      { en: "PE", ar: "تربية بدنية", emoji: "🤸", img: "img/g3/g3-subjects/pe.jpg" },
      { en: "history", ar: "تاريخ", emoji: "📜", img: "img/g3/g3-subjects/history.jpg" },
      { en: "social studies", ar: "اجتماعيات", emoji: "🌍", img: "img/g3/g3-subjects/social_studies.jpg" }
    ]
  },
  {
    id: "g3-schoolplaces", unit: "g3u3", en: "Around School", ar: "أماكن المدرسة", emoji: "📚", color: "#06d6a0",
    words: [
      { en: "library", ar: "المكتبة", emoji: "📚", img: "img/g3/g3-schoolplaces/library.jpg" },
      { en: "classroom", ar: "الفصل", emoji: "🪑", img: "img/g3/g3-schoolplaces/classroom.jpg" },
      { en: "hall", ar: "القاعة", emoji: "🚪", img: "img/g3/g3-schoolplaces/hall.jpg" },
      { en: "school yard", ar: "فناء المدرسة", emoji: "🏫", img: "img/g3/g3-schoolplaces/school_yard.jpg" },
      { en: "uniform", ar: "زي مدرسي", emoji: "👔", img: "img/g3/g3-schoolplaces/uniform.jpg" },
      { en: "school bus", ar: "حافلة مدرسية", emoji: "🚌", img: "img/g3/g3-schoolplaces/school_bus.jpg" },
      { en: "teacher", ar: "معلم", emoji: "🧑‍🏫", img: "img/g3/g3-schoolplaces/teacher.jpg" }
    ]
  },
  {
    id: "g3-ordinals", unit: "g3u3", en: "Grades", ar: "الصفوف", emoji: "🔢", color: "#06d6a0",
    words: [
      { en: "first", ar: "الأول", emoji: "1️⃣", img: "img/g3/g3-ordinals/first.jpg" },
      { en: "second", ar: "الثاني", emoji: "2️⃣", img: "img/g3/g3-ordinals/second.jpg" },
      { en: "third", ar: "الثالث", emoji: "3️⃣", img: "img/g3/g3-ordinals/third.jpg" },
      { en: "fourth", ar: "الرابع", emoji: "4️⃣", img: "img/g3/g3-ordinals/fourth.jpg" },
      { en: "fifth", ar: "الخامس", emoji: "5️⃣", img: "img/g3/g3-ordinals/fifth.jpg" },
      { en: "sixth", ar: "السادس", emoji: "6️⃣", img: "img/g3/g3-ordinals/sixth.jpg" }
    ]
  },

  // ---------------- Unit 4: A Healthy Life ----------------
  {
    id: "g3-routine", unit: "g3u4", en: "Daily Routine", ar: "الروتين اليومي", emoji: "🪥", color: "#ffd166",
    words: [
      { en: "wake", ar: "يستيقظ", emoji: "⏰", img: "img/g3/g3-routine/wake.jpg" },
      { en: "breakfast", ar: "الفطور", emoji: "🥣", img: "img/g3/g3-routine/breakfast.jpg" },
      { en: "brush", ar: "يفرش", emoji: "🪥", img: "img/g3/g3-routine/brush.jpg" },
      { en: "shower", ar: "يستحم", emoji: "🚿", img: "img/g3/g3-routine/shower.jpg" },
      { en: "sleep", ar: "ينام", emoji: "🛏️", img: "img/g3/g3-routine/sleep.jpg" },
      { en: "exercise", ar: "تمارين", emoji: "🏃", img: "img/g3/g3-routine/exercise.jpg" }
    ]
  },
  {
    id: "g3-aches", unit: "g3u4", en: "Aches & Health", ar: "الآلام والصحة", emoji: "🤕", color: "#ffd166",
    words: [
      { en: "headache", ar: "صداع", emoji: "🤕", img: "img/g3/g3-aches/headache.jpg" },
      { en: "stomachache", ar: "ألم في البطن", emoji: "🤢", img: "img/g3/g3-aches/stomachache.jpg" },
      { en: "toothache", ar: "ألم في الأسنان", emoji: "🦷", img: "img/g3/g3-aches/toothache.jpg" },
      { en: "earache", ar: "ألم في الأذن", emoji: "👂", img: "img/g3/g3-aches/earache.jpg" },
      { en: "doctor", ar: "طبيب", emoji: "🧑‍⚕️", img: "img/g3/g3-aches/doctor.jpg" },
      { en: "junk food", ar: "وجبات سريعة", emoji: "🍟", img: "img/g3/g3-aches/junk_food.jpg" }
    ]
  },
  {
    id: "g3-clothes", unit: "g3u4", en: "Clothes", ar: "الملابس", emoji: "👕", color: "#ffd166",
    words: [
      { en: "scarf", ar: "وشاح", emoji: "🧣", img: "img/g3/g3-clothes/scarf.jpg" },
      { en: "skirt", ar: "تنورة", emoji: "👗", img: "img/g3/g3-clothes/skirt.jpg" },
      { en: "T-shirt", ar: "قميص", emoji: "👕", img: "img/g3/g3-clothes/t_shirt.jpg" },
      { en: "trousers", ar: "سروال", emoji: "👖", img: "img/g3/g3-clothes/trousers.jpg" },
      { en: "shorts", ar: "سروال قصير", emoji: "🩳", img: "img/g3/g3-clothes/shorts.jpg" },
      { en: "sweater", ar: "كنزة", emoji: "🧥", img: "img/g3/g3-clothes/sweater.jpg" },
      { en: "warm hat", ar: "قبعة دافئة", emoji: "🧢", img: "img/g3/g3-clothes/warm_hat.jpg" },
      { en: "belt", ar: "حزام", emoji: "🪢", img: "img/g3/g3-clothes/belt.jpg" }
    ]
  },

  // ---------------- Unit 5: Hanging Out in Town ----------------
  {
    id: "g3-stores", unit: "g3u5", en: "Stores", ar: "المحلات", emoji: "🏪", color: "#9b5de5",
    words: [
      { en: "bakery", ar: "مخبز", emoji: "🥖", img: "img/g3/g3-stores/bakery.jpg" },
      { en: "bookstore", ar: "محل الكتب", emoji: "📖", img: "img/g3/g3-stores/bookstore.jpg" },
      { en: "candy store", ar: "محل الحلوى", emoji: "🍬", img: "img/g3/g3-stores/candy_store.jpg" },
      { en: "flower store", ar: "محل الزهور", emoji: "💐", img: "img/g3/g3-stores/flower_store.jpg" },
      { en: "stationery store", ar: "محل الأدوات المكتبية", emoji: "✏️", img: "img/g3/g3-stores/stationery_store.jpg" },
      { en: "supermarket", ar: "سوبر ماركت", emoji: "🛒", img: "img/g3/g3-stores/supermarket.jpg" }
    ]
  },
  {
    id: "g3-directions", unit: "g3u5", en: "Directions", ar: "الاتجاهات", emoji: "🧭", color: "#9b5de5",
    words: [
      { en: "straight", ar: "إلى الأمام", emoji: "⬆️", img: "img/g3/g3-directions/straight.jpg" },
      { en: "left", ar: "يسار", emoji: "⬅️", img: "img/g3/g3-directions/left.jpg" },
      { en: "right", ar: "يمين", emoji: "➡️", img: "img/g3/g3-directions/right.jpg" },
      { en: "turn", ar: "انعطف", emoji: "🔄", img: "img/g3/g3-directions/turn.jpg" },
      { en: "map", ar: "خريطة", emoji: "🗺️", img: "img/g3/g3-directions/map.jpg" },
      { en: "minutes", ar: "دقائق", emoji: "⏱️", img: "img/g3/g3-directions/minutes.jpg" }
    ]
  },
  {
    id: "g3-signs", unit: "g3u5", en: "Town Signs", ar: "علامات المدينة", emoji: "🚷", color: "#9b5de5",
    words: [
      { en: "entrance", ar: "مدخل", emoji: "🚪", img: "img/g3/g3-signs/entrance.jpg" },
      { en: "exit", ar: "مخرج", emoji: "🚪", img: "img/g3/g3-signs/exit.jpg" },
      { en: "stop", ar: "قف", emoji: "🛑", img: "img/g3/g3-signs/stop.jpg" },
      { en: "no parking", ar: "ممنوع الوقوف", emoji: "🚫", img: "img/g3/g3-signs/no_parking.jpg" },
      { en: "no litter", ar: "ممنوع رمي القمامة", emoji: "🗑️", img: "img/g3/g3-signs/no_litter.jpg" },
      { en: "police", ar: "شرطة", emoji: "🚓", img: "img/g3/g3-signs/police.jpg" }
    ]
  },

  // ---------------- Unit 6: My Dream Vacation ----------------
  {
    id: "g3-activities", unit: "g3u6", en: "Trip Activities", ar: "أنشطة الرحلة", emoji: "🏕️", color: "#f4a261",
    words: [
      { en: "camping", ar: "تخييم", emoji: "🏕️", img: "img/g3/g3-activities/camping.jpg" },
      { en: "sightseeing", ar: "زيارة المعالم", emoji: "📷", img: "img/g3/g3-activities/sightseeing.jpg" },
      { en: "fishing", ar: "صيد السمك", emoji: "🎣", img: "img/g3/g3-activities/fishing.jpg" },
      { en: "sailing", ar: "الإبحار", emoji: "⛵", img: "img/g3/g3-activities/sailing.jpg" },
      { en: "skiing", ar: "التزلج", emoji: "⛷️", img: "img/g3/g3-activities/skiing.jpg" },
      { en: "diving", ar: "الغوص", emoji: "🤿", img: "img/g3/g3-activities/diving.jpg" },
      { en: "shopping", ar: "التسوق", emoji: "🛍️", img: "img/g3/g3-activities/shopping.jpg" },
      { en: "snowboarding", ar: "التزلج على الجليد", emoji: "🏂", img: "img/g3/g3-activities/snowboarding.jpg" }
    ]
  },
  {
    id: "g3-places", unit: "g3u6", en: "Dream Places", ar: "أماكن الأحلام", emoji: "🗺️", color: "#f4a261",
    words: [
      { en: "Makkah", ar: "مكة", emoji: "🕋", img: "img/g3/g3-places/makkah.jpg" },
      { en: "Riyadh", ar: "الرياض", emoji: "🏙️", img: "img/g3/g3-places/riyadh.jpg" },
      { en: "Jeddah", ar: "جدة", emoji: "🌊", img: "img/g3/g3-places/jeddah.jpg" },
      { en: "Sydney", ar: "سيدني", emoji: "🇦🇺", img: "img/g3/g3-places/sydney.jpg" },
      { en: "Dubai", ar: "دبي", emoji: "🏗️", img: "img/g3/g3-places/dubai.jpg" },
      { en: "Paris", ar: "باريس", emoji: "🗼", img: "img/g3/g3-places/paris.jpg" }
    ]
  },
  {
    id: "g3-nature", unit: "g3u6", en: "Nature & Travel", ar: "الطبيعة والسفر", emoji: "🏔️", color: "#f4a261",
    words: [
      { en: "snow", ar: "ثلج", emoji: "❄️", img: "img/g3/g3-nature/snow.jpg" },
      { en: "sea", ar: "بحر", emoji: "🌊", img: "img/g3/g3-nature/sea.jpg" },
      { en: "beach", ar: "شاطئ", emoji: "🏖️", img: "img/g3/g3-nature/beach.jpg" },
      { en: "museum", ar: "متحف", emoji: "🏛️", img: "img/g3/g3-nature/museum.jpg" },
      { en: "desert", ar: "صحراء", emoji: "🏜️", img: "img/g3/g3-nature/desert.jpg" },
      { en: "postcard", ar: "بطاقة بريدية", emoji: "📮", img: "img/g3/g3-nature/postcard.jpg" }
    ]
  }
];

var G3_SENTENCES = {
  g3u1: [
    { en: "I cleaned my room", ar: "نظّفت غرفتي", emoji: "🧹" },
    { en: "I played computer games", ar: "لعبت ألعاب الحاسب", emoji: "🎮" },
    { en: "That's fantastic", ar: "هذا مذهل", emoji: "🤩" },
    { en: "I'd like a burger and fries", ar: "أريد برجر وبطاطس", emoji: "🍔" },
    { en: "How many eggs do we need", ar: "كم بيضة نحتاج", emoji: "🥚" },
    { en: "We have some milk", ar: "لدينا بعض الحليب", emoji: "🥛" }
  ],
  g3u2: [
    { en: "I won a game", ar: "فزت بمباراة", emoji: "🏆" },
    { en: "I was very happy", ar: "كنت سعيدًا جدًا", emoji: "😄" },
    { en: "Congratulations", ar: "مبروك", emoji: "🎉" },
    { en: "I broke my leg", ar: "كسرت قدمي", emoji: "🦴" },
    { en: "I saw a shooting star", ar: "رأيت شهابًا", emoji: "🌠" },
    { en: "How scary", ar: "كم هو مخيف", emoji: "😱" }
  ],
  g3u3: [
    { en: "I like math and science", ar: "أحب الرياضيات والعلوم", emoji: "➗" },
    { en: "My school starts at eight", ar: "مدرستي تبدأ الساعة الثامنة", emoji: "🕗" },
    { en: "We have a school uniform", ar: "لدينا زي مدرسي", emoji: "👔" },
    { en: "The library is the best place", ar: "المكتبة أفضل مكان", emoji: "📚" },
    { en: "I was in the second grade", ar: "كنت في الصف الثاني", emoji: "2️⃣" },
    { en: "Respect your teachers", ar: "احترم معلميك", emoji: "🧑‍🏫" }
  ],
  g3u4: [
    { en: "I should eat breakfast", ar: "يجب أن أتناول الفطور", emoji: "🥣" },
    { en: "I shouldn't eat junk food", ar: "يجب ألا آكل الوجبات السريعة", emoji: "🍟" },
    { en: "I brushed my teeth this morning", ar: "فرشت أسناني هذا الصباح", emoji: "🪥" },
    { en: "He has a toothache", ar: "لديه ألم في الأسنان", emoji: "🦷" },
    { en: "I want a scarf", ar: "أريد وشاحًا", emoji: "🧣" },
    { en: "Early to bed and early to rise", ar: "النوم مبكرًا والاستيقاظ مبكرًا", emoji: "🛏️" }
  ],
  g3u5: [
    { en: "Where is the post office", ar: "أين مكتب البريد", emoji: "🏤" },
    { en: "Go straight and turn left", ar: "سر للأمام ثم انعطف يسارًا", emoji: "⬅️" },
    { en: "A bakery sells bread", ar: "المخبز يبيع الخبز", emoji: "🥖" },
    { en: "I'm going to the bookstore", ar: "أنا ذاهب إلى محل الكتب", emoji: "📖" },
    { en: "It's only a few minutes", ar: "إنها بضع دقائق فقط", emoji: "⏱️" },
    { en: "There was a little green house", ar: "كان هناك منزل أخضر صغير", emoji: "🏠" }
  ],
  g3u6: [
    { en: "I'm going to Makkah", ar: "أنا ذاهب إلى مكة", emoji: "🕋" },
    { en: "I'm going sightseeing", ar: "أنا ذاهب لزيارة المعالم", emoji: "📷" },
    { en: "It takes four hours to get there", ar: "يستغرق أربع ساعات للوصول", emoji: "🕓" },
    { en: "I want to drink orange juice", ar: "أريد عصير برتقال", emoji: "🧃" },
    { en: "The desert is amazing", ar: "الصحراء مذهلة", emoji: "🏜️" },
    { en: "I'm having a great time", ar: "أقضي وقتًا رائعًا", emoji: "🎉" }
  ]
};

// ============================ GRADE REGISTRY ============================
// Each grade is a self-contained bundle. setGrade() swaps the live globals the
// games and router read (UNITS / THEMES / SENTENCES) and remembers the choice.
window.GRADES = [
  { id: "g2", label: "الصف الثاني", en: "Grade 2", emoji: "2️⃣",
    UNITS: G2_UNITS, THEMES: G2_THEMES, SENTENCES: G2_SENTENCES },
  { id: "g3", label: "الصف الثالث", en: "Grade 3", emoji: "3️⃣",
    UNITS: G3_UNITS, THEMES: G3_THEMES, SENTENCES: G3_SENTENCES }
];

window.getGradeId = function () {
  var saved = null;
  try { saved = localStorage.getItem("grade"); } catch (e) {}
  return window.GRADES.some(function (g) { return g.id === saved; }) ? saved : "g2";
};

window.setGrade = function (id) {
  var g = window.GRADES.find(function (x) { return x.id === id; }) || window.GRADES[0];
  window.UNITS = g.UNITS;
  window.THEMES = g.THEMES;
  window.SENTENCES = g.SENTENCES;
  window.CURRENT_GRADE = g.id;
  try { localStorage.setItem("grade", g.id); } catch (e) {}
  return g;
};

// Pick the saved (or default) grade on load.
window.setGrade(window.getGradeId());
