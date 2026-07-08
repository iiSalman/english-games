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


// ============================ NEW TERM-1 BUNDLES (added by build) ============================
// Grades 1-5, Term 1. We Can! 1-3 (G1-G3) + Top Goal 1-2 (G4-G5).
// G1/G4/G5 are Term-1 only for now; G2/G3 Term 1 combine with their existing Term 2 below.

// ============================ GRADE 1 (We Can! 1) — Term 1 ============================
// We Can! Workbook 1, Term 1 — five units for age-6 first English.
// Very concrete, basic words. Every word carries a real flashcard image.
var G1T1_UNITS = [
  { id: "g1u1", num: "١", ar: "أصدقائي", en: "My Friends", emoji: "👋", color: "#ef476f" },
  { id: "g1u2", num: "٢", ar: "جسمي", en: "My Body", emoji: "🧒", color: "#06d6a0" },
  { id: "g1u3", num: "٣", ar: "عائلتي", en: "My Family", emoji: "👨‍👩‍👧‍👦", color: "#118ab2" },
  { id: "g1u4", num: "٤", ar: "كم عمرك؟", en: "How Old Are You?", emoji: "🎂", color: "#ffd166" },
  { id: "g1u5", num: "٥", ar: "ما هذا؟ ما ذاك؟", en: "What's This? What's That?", emoji: "✏️", color: "#9b5de5" }
];

var G1T1_THEMES = [
  // ---------------- Unit 1: My Friends ----------------
  {
    id: "g1-greetings", unit: "g1u1", en: "Greetings", ar: "التحيات", emoji: "👋", color: "#ef476f",
    words: [
      { en: "hi", ar: "مرحبًا", emoji: "👋", img: "img/g1/g1-greetings/hi.jpg" },
      { en: "hello", ar: "أهلًا", emoji: "🙋", img: "img/g1/g1-greetings/hello.jpg" },
      { en: "bye", ar: "وداعًا", emoji: "👋", img: "img/g1/g1-greetings/bye.jpg" },
      { en: "friend", ar: "صديق", emoji: "🧑‍🤝‍🧑", img: "img/g1/g1-greetings/friend.jpg" },
      { en: "boy", ar: "ولد", emoji: "👦", img: "img/g1/g1-greetings/boy.jpg" },
      { en: "girl", ar: "بنت", emoji: "👧", img: "img/g1/g1-greetings/girl.jpg" },
      { en: "name", ar: "اسم", emoji: "🏷️", img: "img/g1/g1-greetings/name.jpg" }
    ]
  },

  // ---------------- Unit 2: My Body ----------------
  {
    id: "g1-body", unit: "g1u2", en: "My Body", ar: "جسمي", emoji: "🧒", color: "#06d6a0",
    words: [
      { en: "head", ar: "رأس", emoji: "🧠", img: "img/g1/g1-body/head.jpg" },
      { en: "hair", ar: "شعر", emoji: "💇", img: "img/g1/g1-body/hair.jpg" },
      { en: "eye", ar: "عين", emoji: "👁️", img: "img/g1/g1-body/eye.jpg" },
      { en: "ear", ar: "أذن", emoji: "👂", img: "img/g1/g1-body/ear.jpg" },
      { en: "nose", ar: "أنف", emoji: "👃", img: "img/g1/g1-body/nose.jpg" },
      { en: "mouth", ar: "فم", emoji: "👄", img: "img/g1/g1-body/mouth.jpg" },
      { en: "hand", ar: "يد", emoji: "✋", img: "img/g1/g1-body/hand.jpg" },
      { en: "leg", ar: "رِجل", emoji: "🦵", img: "img/g1/g1-body/leg.jpg" },
      { en: "foot", ar: "قدم", emoji: "🦶", img: "img/g1/g1-body/foot.jpg" }
    ]
  },

  // ---------------- Unit 3: My Family ----------------
  {
    id: "g1-family", unit: "g1u3", en: "My Family", ar: "عائلتي", emoji: "👨‍👩‍👧‍👦", color: "#118ab2",
    words: [
      { en: "family", ar: "عائلة", emoji: "👨‍👩‍👧‍👦", img: "img/g1/g1-family/family.jpg" },
      { en: "father", ar: "أب", emoji: "👨", img: "img/g1/g1-family/father.jpg" },
      { en: "mother", ar: "أم", emoji: "👩", img: "img/g1/g1-family/mother.jpg" },
      { en: "brother", ar: "أخ", emoji: "👦", img: "img/g1/g1-family/brother.jpg" },
      { en: "sister", ar: "أخت", emoji: "👧", img: "img/g1/g1-family/sister.jpg" },
      { en: "baby", ar: "طفل", emoji: "👶", img: "img/g1/g1-family/baby.jpg" },
      { en: "grandfather", ar: "جد", emoji: "👴", img: "img/g1/g1-family/grandfather.jpg" },
      { en: "grandmother", ar: "جدة", emoji: "👵", img: "img/g1/g1-family/grandmother.jpg" }
    ]
  },

  // ---------------- Unit 4: How Old Are You? ----------------
  {
    id: "g1-numbers", unit: "g1u4", en: "Numbers 1-10", ar: "الأرقام ١-١٠", emoji: "🔢", color: "#ffd166",
    words: [
      { en: "one", ar: "١ واحد", emoji: "1️⃣", img: "img/g1/g1-numbers/one.jpg" },
      { en: "two", ar: "٢ اثنان", emoji: "2️⃣", img: "img/g1/g1-numbers/two.jpg" },
      { en: "three", ar: "٣ ثلاثة", emoji: "3️⃣", img: "img/g1/g1-numbers/three.jpg" },
      { en: "four", ar: "٤ أربعة", emoji: "4️⃣", img: "img/g1/g1-numbers/four.jpg" },
      { en: "five", ar: "٥ خمسة", emoji: "5️⃣", img: "img/g1/g1-numbers/five.jpg" },
      { en: "six", ar: "٦ ستة", emoji: "6️⃣", img: "img/g1/g1-numbers/six.jpg" },
      { en: "seven", ar: "٧ سبعة", emoji: "7️⃣", img: "img/g1/g1-numbers/seven.jpg" },
      { en: "eight", ar: "٨ ثمانية", emoji: "8️⃣", img: "img/g1/g1-numbers/eight.jpg" },
      { en: "nine", ar: "٩ تسعة", emoji: "9️⃣", img: "img/g1/g1-numbers/nine.jpg" },
      { en: "ten", ar: "١٠ عشرة", emoji: "🔟", img: "img/g1/g1-numbers/ten.jpg" }
    ]
  },
  {
    id: "g1-birthday", unit: "g1u4", en: "Birthday", ar: "عيد الميلاد", emoji: "🎂", color: "#ffd166",
    words: [
      { en: "birthday", ar: "عيد ميلاد", emoji: "🎂", img: "img/g1/g1-birthday/birthday.jpg" },
      { en: "cake", ar: "كعكة", emoji: "🍰", img: "img/g1/g1-birthday/cake.jpg" },
      { en: "candle", ar: "شمعة", emoji: "🕯️", img: "img/g1/g1-birthday/candle.jpg" },
      { en: "balloon", ar: "بالون", emoji: "🎈", img: "img/g1/g1-birthday/balloon.jpg" },
      { en: "gift", ar: "هدية", emoji: "🎁", img: "img/g1/g1-birthday/gift.jpg" }
    ]
  },

  // ---------------- Unit 5: What's This? What's That? ----------------
  {
    id: "g1-classroom", unit: "g1u5", en: "Classroom Things", ar: "أدوات الفصل", emoji: "✏️", color: "#9b5de5",
    words: [
      { en: "pencil", ar: "قلم رصاص", emoji: "✏️", img: "img/g1/g1-classroom/pencil.jpg" },
      { en: "pen", ar: "قلم", emoji: "🖊️", img: "img/g1/g1-classroom/pen.jpg" },
      { en: "book", ar: "كتاب", emoji: "📖", img: "img/g1/g1-classroom/book.jpg" },
      { en: "bag", ar: "حقيبة", emoji: "🎒", img: "img/g1/g1-classroom/bag.jpg" },
      { en: "ruler", ar: "مسطرة", emoji: "📏", img: "img/g1/g1-classroom/ruler.jpg" },
      { en: "eraser", ar: "ممحاة", emoji: "🧽", img: "img/g1/g1-classroom/eraser.jpg" },
      { en: "chair", ar: "كرسي", emoji: "🪑", img: "img/g1/g1-classroom/chair.jpg" },
      { en: "desk", ar: "طاولة", emoji: "🪑", img: "img/g1/g1-classroom/desk.jpg" },
      { en: "door", ar: "باب", emoji: "🚪", img: "img/g1/g1-classroom/door.jpg" }
    ]
  }
];

var G1T1_SENTENCES = {
  g1u1: [
    { en: "Hi, I am Sara", ar: "مرحبًا، أنا سارة", emoji: "👋" },
    { en: "Hello, my friend", ar: "أهلًا يا صديقي", emoji: "🙋" },
    { en: "What is your name", ar: "ما اسمك", emoji: "🏷️" },
    { en: "This is my friend", ar: "هذا صديقي", emoji: "🧑‍🤝‍🧑" },
    { en: "I am a boy", ar: "أنا ولد", emoji: "👦" },
    { en: "Bye bye", ar: "إلى اللقاء", emoji: "👋" }
  ],
  g1u2: [
    { en: "This is my head", ar: "هذا رأسي", emoji: "🧒" },
    { en: "I have two eyes", ar: "لدي عينان", emoji: "👁️" },
    { en: "Touch your nose", ar: "المس أنفك", emoji: "👃" },
    { en: "I have two hands", ar: "لدي يدان", emoji: "✋" },
    { en: "Move your legs", ar: "حرّك رجليك", emoji: "🦵" },
    { en: "This is my ear", ar: "هذه أذني", emoji: "👂" }
  ],
  g1u3: [
    { en: "This is my family", ar: "هذه عائلتي", emoji: "👨‍👩‍👧‍👦" },
    { en: "This is my father", ar: "هذا أبي", emoji: "👨" },
    { en: "This is my mother", ar: "هذه أمي", emoji: "👩" },
    { en: "I have a brother", ar: "لدي أخ", emoji: "👦" },
    { en: "I have a sister", ar: "لدي أخت", emoji: "👧" },
    { en: "I love my family", ar: "أحب عائلتي", emoji: "❤️" }
  ],
  g1u4: [
    { en: "How old are you", ar: "كم عمرك", emoji: "🎂" },
    { en: "I am six", ar: "عمري ست سنوات", emoji: "6️⃣" },
    { en: "Happy birthday", ar: "عيد ميلاد سعيد", emoji: "🎉" },
    { en: "I have one cake", ar: "لدي كعكة واحدة", emoji: "🍰" },
    { en: "Count to ten", ar: "عُدّ إلى عشرة", emoji: "🔟" },
    { en: "This is my gift", ar: "هذه هديتي", emoji: "🎁" }
  ],
  g1u5: [
    { en: "What is this", ar: "ما هذا", emoji: "✏️" },
    { en: "It is a pencil", ar: "إنه قلم رصاص", emoji: "✏️" },
    { en: "What is that", ar: "ما ذاك", emoji: "📖" },
    { en: "It is a book", ar: "إنه كتاب", emoji: "📖" },
    { en: "This is my bag", ar: "هذه حقيبتي", emoji: "🎒" },
    { en: "Open the door", ar: "افتح الباب", emoji: "🚪" }
  ]
};

// ============================ GRADE 2 — TERM 1 (We Can! 2, Term 1) ============================
// We Can! Workbook 2, Term 1 — five units. Full-photo standard: every word has an img.
// ids are prefixed g2t1… to avoid colliding with the existing Grade 2 Term 2 (u1/animals/…).
var G2T1_UNITS = [
  { id: "g2t1u1", num: "١", ar: "المشاعر", en: "Feelings", emoji: "😊", color: "#ffd166" },
  { id: "g2t1u2", num: "٢", ar: "ما نلبس", en: "Things We Wear", emoji: "👕", color: "#ef476f" },
  { id: "g2t1u3", num: "٣", ar: "ما نفعل", en: "Things We Do", emoji: "🏃", color: "#06d6a0" },
  { id: "g2t1u4", num: "٤", ar: "الطبيعة الجميلة", en: "Beautiful Nature", emoji: "🌳", color: "#118ab2" },
  { id: "g2t1u5", num: "٥", ar: "أصدقاء وأفعال وأشياء", en: "Friends, Actions & Things", emoji: "🧒", color: "#8338ec" }
];

var G2T1_THEMES = [
  // ---------------- Unit 1: Feelings ----------------
  {
    id: "g2t1-feelings", unit: "g2t1u1", en: "Feelings", ar: "المشاعر", emoji: "😊", color: "#ffd166",
    words: [
      { en: "happy", ar: "سعيد", emoji: "😊", img: "img/g2t1/g2t1-feelings/happy.jpg" },
      { en: "sad", ar: "حزين", emoji: "😢", img: "img/g2t1/g2t1-feelings/sad.jpg" },
      { en: "angry", ar: "غاضب", emoji: "😠", img: "img/g2t1/g2t1-feelings/angry.jpg" },
      { en: "tired", ar: "متعب", emoji: "😴", img: "img/g2t1/g2t1-feelings/tired.jpg" },
      { en: "hungry", ar: "جائع", emoji: "🍽️", img: "img/g2t1/g2t1-feelings/hungry.jpg" },
      { en: "thirsty", ar: "عطشان", emoji: "🥤", img: "img/g2t1/g2t1-feelings/thirsty.jpg" },
      { en: "scared", ar: "خائف", emoji: "😨", img: "img/g2t1/g2t1-feelings/scared.jpg" },
      { en: "excited", ar: "متحمّس", emoji: "🤩", img: "img/g2t1/g2t1-feelings/excited.jpg" }
    ]
  },

  // ---------------- Unit 2: Things We Wear ----------------
  {
    id: "g2t1-clothes", unit: "g2t1u2", en: "Clothes", ar: "الملابس", emoji: "👕", color: "#ef476f",
    words: [
      { en: "shirt", ar: "قميص", emoji: "👕", img: "img/g2t1/g2t1-clothes/shirt.jpg" },
      { en: "pants", ar: "بنطال", emoji: "👖", img: "img/g2t1/g2t1-clothes/pants.jpg" },
      { en: "dress", ar: "فستان", emoji: "👗", img: "img/g2t1/g2t1-clothes/dress.jpg" },
      { en: "shoes", ar: "حذاء", emoji: "👟", img: "img/g2t1/g2t1-clothes/shoes.jpg" },
      { en: "hat", ar: "قبعة", emoji: "🧢", img: "img/g2t1/g2t1-clothes/hat.jpg" },
      { en: "socks", ar: "جوارب", emoji: "🧦", img: "img/g2t1/g2t1-clothes/socks.jpg" },
      { en: "skirt", ar: "تنورة", emoji: "👚", img: "img/g2t1/g2t1-clothes/skirt.jpg" },
      { en: "jacket", ar: "سترة", emoji: "🧥", img: "img/g2t1/g2t1-clothes/jacket.jpg" }
    ]
  },

  // ---------------- Unit 3: Things We Do ----------------
  {
    id: "g2t1-actions", unit: "g2t1u3", en: "Things We Do", ar: "ما نفعل", emoji: "🏃", color: "#06d6a0",
    words: [
      { en: "run", ar: "يجري", emoji: "🏃", img: "img/g2t1/g2t1-actions/run.jpg" },
      { en: "jump", ar: "يقفز", emoji: "🤸", img: "img/g2t1/g2t1-actions/jump.jpg" },
      { en: "eat", ar: "يأكل", emoji: "🍎", img: "img/g2t1/g2t1-actions/eat.jpg" },
      { en: "drink", ar: "يشرب", emoji: "🥛", img: "img/g2t1/g2t1-actions/drink.jpg" },
      { en: "read", ar: "يقرأ", emoji: "📖", img: "img/g2t1/g2t1-actions/read.jpg" },
      { en: "write", ar: "يكتب", emoji: "✏️", img: "img/g2t1/g2t1-actions/write.jpg" },
      { en: "sleep", ar: "ينام", emoji: "😴", img: "img/g2t1/g2t1-actions/sleep.jpg" },
      { en: "play", ar: "يلعب", emoji: "⚽", img: "img/g2t1/g2t1-actions/play.jpg" },
      { en: "sing", ar: "يغني", emoji: "🎤", img: "img/g2t1/g2t1-actions/sing.jpg" }
    ]
  },

  // ---------------- Unit 4: Beautiful Nature ----------------
  {
    id: "g2t1-nature", unit: "g2t1u4", en: "Beautiful Nature", ar: "الطبيعة الجميلة", emoji: "🌳", color: "#118ab2",
    words: [
      { en: "tree", ar: "شجرة", emoji: "🌳", img: "img/g2t1/g2t1-nature/tree.jpg" },
      { en: "flower", ar: "زهرة", emoji: "🌸", img: "img/g2t1/g2t1-nature/flower.jpg" },
      { en: "sun", ar: "شمس", emoji: "☀️", img: "img/g2t1/g2t1-nature/sun.jpg" },
      { en: "moon", ar: "قمر", emoji: "🌙", img: "img/g2t1/g2t1-nature/moon.jpg" },
      { en: "star", ar: "نجمة", emoji: "⭐", img: "img/g2t1/g2t1-nature/star.jpg" },
      { en: "river", ar: "نهر", emoji: "🏞️", img: "img/g2t1/g2t1-nature/river.jpg" },
      { en: "mountain", ar: "جبل", emoji: "⛰️", img: "img/g2t1/g2t1-nature/mountain.jpg" },
      { en: "sky", ar: "سماء", emoji: "🌤️", img: "img/g2t1/g2t1-nature/sky.jpg" },
      { en: "cloud", ar: "سحابة", emoji: "☁️", img: "img/g2t1/g2t1-nature/cloud.jpg" }
    ]
  },

  // ---------------- Unit 5: Friends, Actions & Things (review) ----------------
  {
    id: "g2t1-review", unit: "g2t1u5", en: "Friends, Actions & Things", ar: "أصدقاء وأفعال وأشياء", emoji: "🧒", color: "#8338ec",
    words: [
      { en: "friend", ar: "صديق", emoji: "🧒", img: "img/g2t1/g2t1-review/friend.jpg" },
      { en: "ball", ar: "كرة", emoji: "⚽", img: "img/g2t1/g2t1-review/ball.jpg" },
      { en: "book", ar: "كتاب", emoji: "📚", img: "img/g2t1/g2t1-review/book.jpg" },
      { en: "smile", ar: "ابتسامة", emoji: "😄", img: "img/g2t1/g2t1-review/smile.jpg" },
      { en: "walk", ar: "يمشي", emoji: "🚶", img: "img/g2t1/g2t1-review/walk.jpg" },
      { en: "garden", ar: "حديقة", emoji: "🌷", img: "img/g2t1/g2t1-review/garden.jpg" }
    ]
  }
];

var G2T1_SENTENCES = {
  g2t1u1: [
    { en: "I am happy today", ar: "أنا سعيد اليوم", emoji: "😊" },
    { en: "She is sad", ar: "هي حزينة", emoji: "😢" },
    { en: "Are you hungry", ar: "هل أنت جائع", emoji: "🍽️" },
    { en: "He is very tired", ar: "هو متعب جدًا", emoji: "😴" },
    { en: "I am not scared", ar: "أنا لست خائفًا", emoji: "😨" },
    { en: "We are excited", ar: "نحن متحمسون", emoji: "🤩" }
  ],
  g2t1u2: [
    { en: "This is my shirt", ar: "هذا قميصي", emoji: "👕" },
    { en: "I wear my shoes", ar: "ألبس حذائي", emoji: "👟" },
    { en: "She has a red dress", ar: "لديها فستان أحمر", emoji: "👗" },
    { en: "Put on your hat", ar: "البس قبعتك", emoji: "🧢" },
    { en: "My socks are blue", ar: "جواربي زرقاء", emoji: "🧦" },
    { en: "I like my jacket", ar: "أحب سترتي", emoji: "🧥" }
  ],
  g2t1u3: [
    { en: "I can run fast", ar: "أستطيع الجري بسرعة", emoji: "🏃" },
    { en: "Let us jump", ar: "لنقفز", emoji: "🤸" },
    { en: "I read a book", ar: "أقرأ كتابًا", emoji: "📖" },
    { en: "She likes to sing", ar: "هي تحب الغناء", emoji: "🎤" },
    { en: "We play together", ar: "نلعب معًا", emoji: "⚽" },
    { en: "I eat an apple", ar: "آكل تفاحة", emoji: "🍎" }
  ],
  g2t1u4: [
    { en: "The tree is tall", ar: "الشجرة طويلة", emoji: "🌳" },
    { en: "The sun is hot", ar: "الشمس حارة", emoji: "☀️" },
    { en: "I see a flower", ar: "أرى زهرة", emoji: "🌸" },
    { en: "Stars are in the sky", ar: "النجوم في السماء", emoji: "⭐" },
    { en: "The river is long", ar: "النهر طويل", emoji: "🏞️" },
    { en: "The moon is bright", ar: "القمر مضيء", emoji: "🌙" }
  ],
  g2t1u5: [
    { en: "He is my friend", ar: "هو صديقي", emoji: "🧒" },
    { en: "I have a book", ar: "لديّ كتاب", emoji: "📚" },
    { en: "We walk to the garden", ar: "نمشي إلى الحديقة", emoji: "🌷" },
    { en: "I like your smile", ar: "أحب ابتسامتك", emoji: "😄" },
    { en: "Kick the ball", ar: "اركل الكرة", emoji: "⚽" },
    { en: "Play with your friends", ar: "العب مع أصدقائك", emoji: "🧒" }
  ]
};

var G3T1_UNITS = [
  { id: "g3t1u1", num: "١", ar: "سعيد بلقائك!", en: "It's Nice to Meet You!", emoji: "🤝", color: "#ef476f" },
  { id: "g3t1u2", num: "٢", ar: "حيوانات البحر", en: "Sea Animals", emoji: "🐬", color: "#118ab2" },
  { id: "g3t1u3", num: "٣", ar: "الرياضة والأنشطة", en: "Sports and Activities", emoji: "⚽", color: "#06d6a0" },
  { id: "g3t1u4", num: "٤", ar: "الأعمال المنزلية", en: "Chores", emoji: "🧹", color: "#ffd166" },
  { id: "g3t1u5", num: "٥", ar: "الأمس واليوم", en: "Yesterday and Today", emoji: "📅", color: "#9b5de5" },
  { id: "g3t1u6", num: "٦", ar: "الوظائف", en: "Jobs", emoji: "👩‍⚕️", color: "#f4a261" }
];

var G3T1_THEMES = [
  // ---------- Unit 1: It's Nice to Meet You! ----------
  {
    id: "g3t1-greetings", unit: "g3t1u1", en: "Greetings", ar: "التحيات", emoji: "👋", color: "#ef476f",
    words: [
      { en: "hello", ar: "مرحبًا", emoji: "👋", img: "img/g3t1/g3t1-greetings/hello.jpg" },
      { en: "hi", ar: "أهلًا", emoji: "🙋", img: "img/g3t1/g3t1-greetings/hi.jpg" },
      { en: "good morning", ar: "صباح الخير", emoji: "🌅", img: "img/g3t1/g3t1-greetings/good_morning.jpg" },
      { en: "good afternoon", ar: "مساء الخير", emoji: "🌇", img: "img/g3t1/g3t1-greetings/good_afternoon.jpg" },
      { en: "goodbye", ar: "مع السلامة", emoji: "👋", img: "img/g3t1/g3t1-greetings/goodbye.jpg" },
      { en: "welcome", ar: "أهلًا وسهلًا", emoji: "🤗", img: "img/g3t1/g3t1-greetings/welcome.jpg" }
    ]
  },
  {
    id: "g3t1-meeting", unit: "g3t1u1", en: "Meeting People", ar: "لقاء الناس", emoji: "🤝", color: "#ef476f",
    words: [
      { en: "friend", ar: "صديق", emoji: "🧑‍🤝‍🧑", img: "img/g3t1/g3t1-meeting/friend.jpg" },
      { en: "name", ar: "اسم", emoji: "🏷️", img: "img/g3t1/g3t1-meeting/name.jpg" },
      { en: "shake hands", ar: "يصافح", emoji: "🤝", img: "img/g3t1/g3t1-meeting/shake_hands.jpg" },
      { en: "wave", ar: "يلوّح", emoji: "👋", img: "img/g3t1/g3t1-meeting/wave.jpg" },
      { en: "new student", ar: "طالب جديد", emoji: "🎒", img: "img/g3t1/g3t1-meeting/new_student.jpg" },
      { en: "teacher", ar: "معلّم", emoji: "👨‍🏫", img: "img/g3t1/g3t1-meeting/teacher.jpg" }
    ]
  },

  // ---------- Unit 2: Sea Animals ----------
  {
    id: "g3t1-seaanimals", unit: "g3t1u2", en: "Sea Animals", ar: "حيوانات البحر", emoji: "🐠", color: "#118ab2",
    words: [
      { en: "fish", ar: "سمكة", emoji: "🐟", img: "img/g3t1/g3t1-seaanimals/fish.jpg" },
      { en: "shark", ar: "قرش", emoji: "🦈", img: "img/g3t1/g3t1-seaanimals/shark.jpg" },
      { en: "whale", ar: "حوت", emoji: "🐋", img: "img/g3t1/g3t1-seaanimals/whale.jpg" },
      { en: "dolphin", ar: "دلفين", emoji: "🐬", img: "img/g3t1/g3t1-seaanimals/dolphin.jpg" },
      { en: "octopus", ar: "أخطبوط", emoji: "🐙", img: "img/g3t1/g3t1-seaanimals/octopus.jpg" },
      { en: "crab", ar: "سلطعون", emoji: "🦀", img: "img/g3t1/g3t1-seaanimals/crab.jpg" },
      { en: "jellyfish", ar: "قنديل البحر", emoji: "🎐", img: "img/g3t1/g3t1-seaanimals/jellyfish.jpg" },
      { en: "seahorse", ar: "حصان البحر", emoji: "🐴", img: "img/g3t1/g3t1-seaanimals/seahorse.jpg" },
      { en: "turtle", ar: "سلحفاة", emoji: "🐢", img: "img/g3t1/g3t1-seaanimals/turtle.jpg" }
    ]
  },

  // ---------- Unit 3: Sports and Activities ----------
  {
    id: "g3t1-sports", unit: "g3t1u3", en: "Sports", ar: "الرياضة", emoji: "⚽", color: "#06d6a0",
    words: [
      { en: "soccer", ar: "كرة القدم", emoji: "⚽", img: "img/g3t1/g3t1-sports/soccer.jpg" },
      { en: "basketball", ar: "كرة السلة", emoji: "🏀", img: "img/g3t1/g3t1-sports/basketball.jpg" },
      { en: "tennis", ar: "التنس", emoji: "🎾", img: "img/g3t1/g3t1-sports/tennis.jpg" },
      { en: "swimming", ar: "السباحة", emoji: "🏊", img: "img/g3t1/g3t1-sports/swimming.jpg" },
      { en: "running", ar: "الجري", emoji: "🏃", img: "img/g3t1/g3t1-sports/running.jpg" },
      { en: "cycling", ar: "ركوب الدراجة", emoji: "🚴", img: "img/g3t1/g3t1-sports/cycling.jpg" }
    ]
  },
  {
    id: "g3t1-activities", unit: "g3t1u3", en: "Fun Activities", ar: "أنشطة ممتعة", emoji: "🎨", color: "#06d6a0",
    words: [
      { en: "jump", ar: "يقفز", emoji: "🤸", img: "img/g3t1/g3t1-activities/jump.jpg" },
      { en: "throw", ar: "يرمي", emoji: "🤾", img: "img/g3t1/g3t1-activities/throw.jpg" },
      { en: "catch", ar: "يمسك", emoji: "🧤", img: "img/g3t1/g3t1-activities/catch.jpg" },
      { en: "ride a bike", ar: "يركب دراجة", emoji: "🚲", img: "img/g3t1/g3t1-activities/ride_a_bike.jpg" },
      { en: "fly a kite", ar: "يطير طائرة ورقية", emoji: "🪁", img: "img/g3t1/g3t1-activities/fly_a_kite.jpg" },
      { en: "skate", ar: "يتزلّج", emoji: "⛸️", img: "img/g3t1/g3t1-activities/skate.jpg" }
    ]
  },

  // ---------- Unit 4: Chores ----------
  {
    id: "g3t1-chores", unit: "g3t1u4", en: "Chores", ar: "الأعمال المنزلية", emoji: "🧹", color: "#ffd166",
    words: [
      { en: "wash the dishes", ar: "يغسل الأطباق", emoji: "🍽️", img: "img/g3t1/g3t1-chores/wash_the_dishes.jpg" },
      { en: "sweep the floor", ar: "يكنس الأرض", emoji: "🧹", img: "img/g3t1/g3t1-chores/sweep_the_floor.jpg" },
      { en: "make the bed", ar: "يرتّب السرير", emoji: "🛏️", img: "img/g3t1/g3t1-chores/make_the_bed.jpg" },
      { en: "take out the trash", ar: "يخرج القمامة", emoji: "🗑️", img: "img/g3t1/g3t1-chores/take_out_the_trash.jpg" },
      { en: "water the plants", ar: "يسقي النباتات", emoji: "🪴", img: "img/g3t1/g3t1-chores/water_the_plants.jpg" },
      { en: "set the table", ar: "يجهّز المائدة", emoji: "🍴", img: "img/g3t1/g3t1-chores/set_the_table.jpg" },
      { en: "feed the cat", ar: "يطعم القطة", emoji: "🐱", img: "img/g3t1/g3t1-chores/feed_the_cat.jpg" }
    ]
  },

  // ---------- Unit 5: Yesterday and Today ----------
  {
    id: "g3t1-yesterday", unit: "g3t1u5", en: "Yesterday (Past)", ar: "الأمس (الماضي)", emoji: "⏪", color: "#9b5de5",
    words: [
      { en: "yesterday", ar: "أمس", emoji: "📆", img: "img/g3t1/g3t1-yesterday/yesterday.jpg" },
      { en: "went", ar: "ذهب", emoji: "🚶", img: "img/g3t1/g3t1-yesterday/went.jpg" },
      { en: "played", ar: "لعب", emoji: "🎲", img: "img/g3t1/g3t1-yesterday/played.jpg" },
      { en: "ate", ar: "أكل", emoji: "🍎", img: "img/g3t1/g3t1-yesterday/ate.jpg" },
      { en: "watched", ar: "شاهد", emoji: "📺", img: "img/g3t1/g3t1-yesterday/watched.jpg" }
    ]
  },
  {
    id: "g3t1-today", unit: "g3t1u5", en: "Today (Present)", ar: "اليوم (المضارع)", emoji: "⏩", color: "#9b5de5",
    words: [
      { en: "today", ar: "اليوم", emoji: "📅", img: "img/g3t1/g3t1-today/today.jpg" },
      { en: "go", ar: "يذهب", emoji: "🚶", img: "img/g3t1/g3t1-today/go.jpg" },
      { en: "play", ar: "يلعب", emoji: "🎲", img: "img/g3t1/g3t1-today/play.jpg" },
      { en: "eat", ar: "يأكل", emoji: "🍽️", img: "img/g3t1/g3t1-today/eat.jpg" },
      { en: "read", ar: "يقرأ", emoji: "📖", img: "img/g3t1/g3t1-today/read.jpg" }
    ]
  },

  // ---------- Unit 6: Jobs ----------
  {
    id: "g3t1-jobs", unit: "g3t1u6", en: "Jobs", ar: "الوظائف", emoji: "👷", color: "#f4a261",
    words: [
      { en: "doctor", ar: "طبيب", emoji: "🩺", img: "img/g3t1/g3t1-jobs/doctor.jpg" },
      { en: "teacher", ar: "معلّم", emoji: "👨‍🏫", img: "img/g3t1/g3t1-jobs/teacher.jpg" },
      { en: "engineer", ar: "مهندس", emoji: "👷", img: "img/g3t1/g3t1-jobs/engineer.jpg" },
      { en: "nurse", ar: "ممرّضة", emoji: "👩‍⚕️", img: "img/g3t1/g3t1-jobs/nurse.jpg" },
      { en: "pilot", ar: "طيّار", emoji: "✈️", img: "img/g3t1/g3t1-jobs/pilot.jpg" },
      { en: "chef", ar: "طبّاخ", emoji: "👨‍🍳", img: "img/g3t1/g3t1-jobs/chef.jpg" },
      { en: "police officer", ar: "شرطي", emoji: "👮", img: "img/g3t1/g3t1-jobs/police_officer.jpg" },
      { en: "farmer", ar: "مزارع", emoji: "🧑‍🌾", img: "img/g3t1/g3t1-jobs/farmer.jpg" }
    ]
  }
];

var G3T1_SENTENCES = {
  g3t1u1: [
    { en: "Hello, my name is Sara", ar: "مرحبًا، اسمي سارة", emoji: "👋" },
    { en: "It's nice to meet you", ar: "سعيد بلقائك", emoji: "🤝" },
    { en: "This is my friend", ar: "هذا صديقي", emoji: "🧑‍🤝‍🧑" },
    { en: "Good morning, teacher", ar: "صباح الخير يا معلّم", emoji: "🌅" },
    { en: "What is your name?", ar: "ما اسمك؟", emoji: "🏷️" },
    { en: "Goodbye, see you soon", ar: "مع السلامة، أراك قريبًا", emoji: "👋" }
  ],
  g3t1u2: [
    { en: "The shark is very big", ar: "القرش كبير جدًا", emoji: "🦈" },
    { en: "I can see a dolphin", ar: "أستطيع رؤية دلفين", emoji: "🐬" },
    { en: "The octopus has eight arms", ar: "الأخطبوط له ثمانية أذرع", emoji: "🐙" },
    { en: "A turtle swims slowly", ar: "السلحفاة تسبح ببطء", emoji: "🐢" },
    { en: "The whale lives in the sea", ar: "الحوت يعيش في البحر", emoji: "🐋" }
  ],
  g3t1u3: [
    { en: "I like to play soccer", ar: "أحب أن ألعب كرة القدم", emoji: "⚽" },
    { en: "She is good at swimming", ar: "هي بارعة في السباحة", emoji: "🏊" },
    { en: "Can you ride a bike?", ar: "هل تستطيع ركوب الدراجة؟", emoji: "🚲" },
    { en: "We play basketball after school", ar: "نلعب كرة السلة بعد المدرسة", emoji: "🏀" },
    { en: "Let's fly a kite today", ar: "لنطير طائرة ورقية اليوم", emoji: "🪁" }
  ],
  g3t1u4: [
    { en: "I wash the dishes", ar: "أغسل الأطباق", emoji: "🍽️" },
    { en: "He makes the bed", ar: "هو يرتّب السرير", emoji: "🛏️" },
    { en: "Please take out the trash", ar: "من فضلك أخرج القمامة", emoji: "🗑️" },
    { en: "I water the plants every day", ar: "أسقي النباتات كل يوم", emoji: "🪴" },
    { en: "Can you set the table?", ar: "هل يمكنك تجهيز المائدة؟", emoji: "🍴" }
  ],
  g3t1u5: [
    { en: "Yesterday I played outside", ar: "أمس لعبت في الخارج", emoji: "⏪" },
    { en: "Today I read a book", ar: "اليوم قرأت كتابًا", emoji: "📖" },
    { en: "I ate an apple yesterday", ar: "أكلت تفاحة أمس", emoji: "🍎" },
    { en: "We go to school today", ar: "نذهب إلى المدرسة اليوم", emoji: "🚶" },
    { en: "She watched TV last night", ar: "شاهدت التلفاز الليلة الماضية", emoji: "📺" }
  ],
  g3t1u6: [
    { en: "My father is a doctor", ar: "أبي طبيب", emoji: "🩺" },
    { en: "The pilot flies a plane", ar: "الطيّار يقود الطائرة", emoji: "✈️" },
    { en: "I want to be an engineer", ar: "أريد أن أصبح مهندسًا", emoji: "👷" },
    { en: "The chef cooks good food", ar: "الطبّاخ يطبخ طعامًا لذيذًا", emoji: "👨‍🍳" },
    { en: "A nurse helps sick people", ar: "الممرّضة تساعد المرضى", emoji: "👩‍⚕️" }
  ]
};

// ============================ GRADE 4 (Top Goal 1) — TERM 1 ============================
var G4T1_UNITS = [
  { id: "g4u1", num: "١", ar: "المناسبات العائلية", en: "Family Events", emoji: "🎉", color: "#e63946" },
  { id: "g4u2", num: "٢", ar: "الأعمال المنزلية", en: "Chores", emoji: "🧹", color: "#2a9d8f" },
  { id: "g4u3", num: "٣", ar: "القصص", en: "Stories", emoji: "📖", color: "#7209b7" },
  { id: "g4u4", num: "٤", ar: "المرح بعد المدرسة", en: "After-School Fun", emoji: "🎨", color: "#f4a261" }
];

var G4T1_THEMES = [
  // ---------------- Unit 1: Family Events ----------------
  {
    id: "g4-celebrations", unit: "g4u1", en: "Celebrations", ar: "الاحتفالات", emoji: "🎉", color: "#e63946",
    words: [
      { en: "birthday", ar: "عيد ميلاد", emoji: "🎂", img: "img/g4/g4-celebrations/birthday.jpg" },
      { en: "wedding", ar: "حفل زفاف", emoji: "💒", img: "img/g4/g4-celebrations/wedding.jpg" },
      { en: "party", ar: "حفلة", emoji: "🎈", img: "img/g4/g4-celebrations/party.jpg" },
      { en: "celebration", ar: "احتفال", emoji: "🎊", img: "img/g4/g4-celebrations/celebration.jpg" },
      { en: "guest", ar: "ضيف", emoji: "🙋", img: "img/g4/g4-celebrations/guest.jpg" },
      { en: "invitation", ar: "دعوة", emoji: "💌", img: "img/g4/g4-celebrations/invitation.jpg" },
      { en: "graduation", ar: "حفل تخرّج", emoji: "🎓", img: "img/g4/g4-celebrations/graduation.jpg" }
    ]
  },
  {
    id: "g4-party-things", unit: "g4u1", en: "Party Things", ar: "أشياء الحفلة", emoji: "🎁", color: "#e63946",
    words: [
      { en: "gift", ar: "هدية", emoji: "🎁", img: "img/g4/g4-party-things/gift.jpg" },
      { en: "cake", ar: "كعكة", emoji: "🎂", img: "img/g4/g4-party-things/cake.jpg" },
      { en: "balloon", ar: "بالون", emoji: "🎈", img: "img/g4/g4-party-things/balloon.jpg" },
      { en: "candle", ar: "شمعة", emoji: "🕯️", img: "img/g4/g4-party-things/candle.jpg" },
      { en: "card", ar: "بطاقة", emoji: "💳", img: "img/g4/g4-party-things/card.jpg" },
      { en: "decorations", ar: "زينة", emoji: "🎏", img: "img/g4/g4-party-things/decorations.jpg" },
      { en: "juice", ar: "عصير", emoji: "🧃", img: "img/g4/g4-party-things/juice.jpg" }
    ]
  },

  // ---------------- Unit 2: Chores ----------------
  {
    id: "g4-chores", unit: "g4u2", en: "Household Chores", ar: "الأعمال المنزلية", emoji: "🧹", color: "#2a9d8f",
    words: [
      { en: "do the laundry", ar: "غسل الملابس", emoji: "🧺", img: "img/g4/g4-chores/do_the_laundry.jpg" },
      { en: "wash the car", ar: "غسل السيارة", emoji: "🚗", img: "img/g4/g4-chores/wash_the_car.jpg" },
      { en: "set the table", ar: "تجهيز الطاولة", emoji: "🍽️", img: "img/g4/g4-chores/set_the_table.jpg" },
      { en: "feed the pet", ar: "إطعام الحيوان الأليف", emoji: "🐕", img: "img/g4/g4-chores/feed_the_pet.jpg" },
      { en: "vacuum the floor", ar: "تنظيف الأرض بالمكنسة", emoji: "🧹", img: "img/g4/g4-chores/vacuum_the_floor.jpg" },
      { en: "wash the dishes", ar: "غسل الأطباق", emoji: "🍽️", img: "img/g4/g4-chores/wash_the_dishes.jpg" },
      { en: "take out the trash", ar: "إخراج القمامة", emoji: "🗑️", img: "img/g4/g4-chores/take_out_the_trash.jpg" },
      { en: "make the bed", ar: "ترتيب السرير", emoji: "🛏️", img: "img/g4/g4-chores/make_the_bed.jpg" },
      { en: "water the plants", ar: "سقي النباتات", emoji: "🪴", img: "img/g4/g4-chores/water_the_plants.jpg" }
    ]
  },

  // ---------------- Unit 3: Stories ----------------
  {
    id: "g4-stories", unit: "g4u3", en: "Story Words", ar: "كلمات القصة", emoji: "📖", color: "#7209b7",
    words: [
      { en: "story", ar: "قصة", emoji: "📖", img: "img/g4/g4-stories/story.jpg" },
      { en: "book", ar: "كتاب", emoji: "📚", img: "img/g4/g4-stories/book.jpg" },
      { en: "character", ar: "شخصية", emoji: "🎭", img: "img/g4/g4-stories/character.jpg" },
      { en: "adventure", ar: "مغامرة", emoji: "🗺️", img: "img/g4/g4-stories/adventure.jpg" },
      { en: "fairy tale", ar: "حكاية خرافية", emoji: "🧚", img: "img/g4/g4-stories/fairy_tale.jpg" }
    ]
  },
  {
    id: "g4-story-characters", unit: "g4u3", en: "Story Characters", ar: "شخصيات القصة", emoji: "🐉", color: "#7209b7",
    words: [
      { en: "hero", ar: "بطل", emoji: "🦸", img: "img/g4/g4-story-characters/hero.jpg" },
      { en: "dragon", ar: "تنّين", emoji: "🐉", img: "img/g4/g4-story-characters/dragon.jpg" },
      { en: "castle", ar: "قلعة", emoji: "🏰", img: "img/g4/g4-story-characters/castle.jpg" },
      { en: "king", ar: "ملك", emoji: "🤴", img: "img/g4/g4-story-characters/king.jpg" },
      { en: "queen", ar: "ملكة", emoji: "👸", img: "img/g4/g4-story-characters/queen.jpg" },
      { en: "knight", ar: "فارس", emoji: "⚔️", img: "img/g4/g4-story-characters/knight.jpg" },
      { en: "giant", ar: "عملاق", emoji: "🧗", img: "img/g4/g4-story-characters/giant.jpg" }
    ]
  },

  // ---------------- Unit 4: After-School Fun ----------------
  {
    id: "g4-clubs", unit: "g4u4", en: "Clubs & Activities", ar: "النوادي والأنشطة", emoji: "🎨", color: "#f4a261",
    words: [
      { en: "art club", ar: "نادي الفنون", emoji: "🎨", img: "img/g4/g4-clubs/art_club.jpg" },
      { en: "music", ar: "الموسيقى", emoji: "🎵", img: "img/g4/g4-clubs/music.jpg" },
      { en: "chess", ar: "الشطرنج", emoji: "♟️", img: "img/g4/g4-clubs/chess.jpg" },
      { en: "drawing", ar: "الرسم", emoji: "✏️", img: "img/g4/g4-clubs/drawing.jpg" },
      { en: "painting", ar: "التلوين", emoji: "🖌️", img: "img/g4/g4-clubs/painting.jpg" },
      { en: "reading club", ar: "نادي القراءة", emoji: "📚", img: "img/g4/g4-clubs/reading_club.jpg" },
      { en: "swimming", ar: "السباحة", emoji: "🏊", img: "img/g4/g4-clubs/swimming.jpg" },
      { en: "cooking", ar: "الطبخ", emoji: "🍳", img: "img/g4/g4-clubs/cooking.jpg" }
    ]
  },
  {
    id: "g4-after-school", unit: "g4u4", en: "After School", ar: "بعد المدرسة", emoji: "🎒", color: "#f4a261",
    words: [
      { en: "homework", ar: "الواجب المنزلي", emoji: "📝", img: "img/g4/g4-after-school/homework.jpg" },
      { en: "practice", ar: "التدريب", emoji: "🔁", img: "img/g4/g4-after-school/practice.jpg" },
      { en: "playground", ar: "الملعب", emoji: "🛝", img: "img/g4/g4-after-school/playground.jpg" },
      { en: "snack", ar: "وجبة خفيفة", emoji: "🍎", img: "img/g4/g4-after-school/snack.jpg" },
      { en: "teammate", ar: "زميل الفريق", emoji: "🤝", img: "img/g4/g4-after-school/teammate.jpg" },
      { en: "hobby", ar: "هواية", emoji: "🎯", img: "img/g4/g4-after-school/hobby.jpg" }
    ]
  }
];

var G4T1_SENTENCES = {
  g4u1: [
    { en: "Happy birthday to you", ar: "عيد ميلاد سعيد لك", emoji: "🎂" },
    { en: "I got a wonderful gift", ar: "حصلت على هدية رائعة", emoji: "🎁" },
    { en: "We went to a wedding", ar: "ذهبنا إلى حفل زفاف", emoji: "💒" },
    { en: "Please come to my party", ar: "تفضّل بالحضور إلى حفلتي", emoji: "🎈" },
    { en: "There are many guests", ar: "هناك ضيوف كثيرون", emoji: "🙋" },
    { en: "Blow out the candles", ar: "أطفئ الشموع", emoji: "🕯️" }
  ],
  g4u2: [
    { en: "I help my mom set the table", ar: "أساعد أمي في تجهيز الطاولة", emoji: "🍽️" },
    { en: "It is my turn to feed the pet", ar: "حان دوري لإطعام الحيوان الأليف", emoji: "🐕" },
    { en: "Did you make your bed", ar: "هل رتبت سريرك", emoji: "🛏️" },
    { en: "I wash the dishes after dinner", ar: "أغسل الأطباق بعد العشاء", emoji: "🍽️" },
    { en: "Please take out the trash", ar: "من فضلك أخرج القمامة", emoji: "🗑️" },
    { en: "I water the plants every day", ar: "أسقي النباتات كل يوم", emoji: "🪴" }
  ],
  g4u3: [
    { en: "I love reading stories", ar: "أحب قراءة القصص", emoji: "📖" },
    { en: "The hero saved the king", ar: "أنقذ البطل الملك", emoji: "🦸" },
    { en: "The dragon lived in a castle", ar: "عاش التنين في قلعة", emoji: "🐉" },
    { en: "Once upon a time", ar: "كان يا ما كان", emoji: "🏰" },
    { en: "My favorite character is brave", ar: "شخصيتي المفضلة شجاعة", emoji: "🎭" },
    { en: "It was a great adventure", ar: "كانت مغامرة رائعة", emoji: "🗺️" }
  ],
  g4u4: [
    { en: "I go to the art club", ar: "أذهب إلى نادي الفنون", emoji: "🎨" },
    { en: "I like drawing and painting", ar: "أحب الرسم والتلوين", emoji: "🖌️" },
    { en: "Let's play chess after school", ar: "لنلعب الشطرنج بعد المدرسة", emoji: "♟️" },
    { en: "I finish my homework first", ar: "أنهي واجبي أولًا", emoji: "📝" },
    { en: "We practice every week", ar: "نتدرب كل أسبوع", emoji: "🔁" },
    { en: "What is your favorite hobby", ar: "ما هي هوايتك المفضلة", emoji: "🎯" }
  ]
};

// ============================ GRADE 5 (Top Goal 2) — TERM 1 ============================
var G5T1_UNITS = [
  { id: "g5u1", num: "١", ar: "الاهتمامات الشخصية", en: "Personal Interests", emoji: "🎨", color: "#4361ee" },
  { id: "g5u2", num: "٢", ar: "تصاميم المنازل", en: "House Designs", emoji: "🏡", color: "#2a9d8f" },
  { id: "g5u3", num: "٣", ar: "المسارات المهنية", en: "Job Paths", emoji: "👩‍💼", color: "#e76f51" },
  { id: "g5u4", num: "٤", ar: "الطعام الشهي", en: "Glorious Food", emoji: "🍲", color: "#fb8500" }
];

var G5T1_THEMES = [
  // ---------------- Unit 1: Personal Interests ----------------
  {
    id: "g5-hobbies", unit: "g5u1", en: "Hobbies & Interests", ar: "الهوايات والاهتمامات", emoji: "🎨", color: "#4361ee",
    words: [
      { en: "reading", ar: "القراءة", emoji: "📖", img: "img/g5/g5-hobbies/reading.jpg" },
      { en: "drawing", ar: "الرسم", emoji: "✏️", img: "img/g5/g5-hobbies/drawing.jpg" },
      { en: "painting", ar: "التلوين بالفرشاة", emoji: "🎨", img: "img/g5/g5-hobbies/painting.jpg" },
      { en: "photography", ar: "التصوير الفوتوغرافي", emoji: "📷", img: "img/g5/g5-hobbies/photography.jpg" },
      { en: "gardening", ar: "البستنة", emoji: "🪴", img: "img/g5/g5-hobbies/gardening.jpg" },
      { en: "cooking", ar: "الطبخ", emoji: "🍳", img: "img/g5/g5-hobbies/cooking.jpg" },
      { en: "collecting stamps", ar: "جمع الطوابع", emoji: "📮", img: "img/g5/g5-hobbies/collecting_stamps.jpg" },
      { en: "playing chess", ar: "لعب الشطرنج", emoji: "♟️", img: "img/g5/g5-hobbies/playing_chess.jpg" }
    ]
  },
  {
    id: "g5-freetime", unit: "g5u1", en: "Free-Time Activities", ar: "أنشطة وقت الفراغ", emoji: "🎧", color: "#4361ee",
    words: [
      { en: "playing video games", ar: "لعب ألعاب الفيديو", emoji: "🎮", img: "img/g5/g5-freetime/playing_video_games.jpg" },
      { en: "listening to music", ar: "الاستماع إلى الموسيقى", emoji: "🎧", img: "img/g5/g5-freetime/listening_to_music.jpg" },
      { en: "cycling", ar: "ركوب الدراجة", emoji: "🚴", img: "img/g5/g5-freetime/cycling.jpg" },
      { en: "swimming", ar: "السباحة", emoji: "🏊", img: "img/g5/g5-freetime/swimming.jpg" },
      { en: "camping", ar: "التخييم", emoji: "⛺", img: "img/g5/g5-freetime/camping.jpg" },
      { en: "fishing", ar: "صيد السمك", emoji: "🎣", img: "img/g5/g5-freetime/fishing.jpg" },
      { en: "hiking", ar: "المشي في الجبال", emoji: "🥾", img: "img/g5/g5-freetime/hiking.jpg" }
    ]
  },

  // ---------------- Unit 2: House Designs ----------------
  {
    id: "g5-rooms", unit: "g5u2", en: "Rooms & Spaces", ar: "الغرف والمساحات", emoji: "🏡", color: "#2a9d8f",
    words: [
      { en: "living room", ar: "غرفة المعيشة", emoji: "🛋️", img: "img/g5/g5-rooms/living_room.jpg" },
      { en: "bedroom", ar: "غرفة النوم", emoji: "🛏️", img: "img/g5/g5-rooms/bedroom.jpg" },
      { en: "kitchen", ar: "المطبخ", emoji: "🍽️", img: "img/g5/g5-rooms/kitchen.jpg" },
      { en: "balcony", ar: "الشرفة", emoji: "🪟", img: "img/g5/g5-rooms/balcony.jpg" },
      { en: "garage", ar: "المرآب", emoji: "🚗", img: "img/g5/g5-rooms/garage.jpg" },
      { en: "staircase", ar: "الدرج", emoji: "🪜", img: "img/g5/g5-rooms/staircase.jpg" },
      { en: "garden", ar: "الحديقة", emoji: "🌳", img: "img/g5/g5-rooms/garden.jpg" },
      { en: "roof", ar: "السطح", emoji: "🏠", img: "img/g5/g5-rooms/roof.jpg" }
    ]
  },
  {
    id: "g5-features", unit: "g5u2", en: "Home Features", ar: "مميزات المنزل", emoji: "🪑", color: "#2a9d8f",
    words: [
      { en: "furniture", ar: "الأثاث", emoji: "🛋️", img: "img/g5/g5-features/furniture.jpg" },
      { en: "fireplace", ar: "المدفأة", emoji: "🔥", img: "img/g5/g5-features/fireplace.jpg" },
      { en: "window", ar: "النافذة", emoji: "🪟", img: "img/g5/g5-features/window.jpg" },
      { en: "modern house", ar: "منزل عصري", emoji: "🏢", img: "img/g5/g5-features/modern_house.jpg" },
      { en: "swimming pool", ar: "حمام السباحة", emoji: "🏊", img: "img/g5/g5-features/swimming_pool.jpg" },
      { en: "elevator", ar: "المصعد", emoji: "🛗", img: "img/g5/g5-features/elevator.jpg" }
    ]
  },

  // ---------------- Unit 3: Job Paths ----------------
  {
    id: "g5-jobpaths", unit: "g5u3", en: "Careers", ar: "المهن", emoji: "👩‍💼", color: "#e76f51",
    words: [
      { en: "engineer", ar: "مهندس", emoji: "👷", img: "img/g5/g5-jobpaths/engineer.jpg" },
      { en: "architect", ar: "مهندس معماري", emoji: "📐", img: "img/g5/g5-jobpaths/architect.jpg" },
      { en: "scientist", ar: "عالِم", emoji: "🔬", img: "img/g5/g5-jobpaths/scientist.jpg" },
      { en: "journalist", ar: "صحفي", emoji: "🎙️", img: "img/g5/g5-jobpaths/journalist.jpg" },
      { en: "dentist", ar: "طبيب أسنان", emoji: "🦷", img: "img/g5/g5-jobpaths/dentist.jpg" },
      { en: "pharmacist", ar: "صيدلي", emoji: "💊", img: "img/g5/g5-jobpaths/pharmacist.jpg" },
      { en: "programmer", ar: "مبرمج", emoji: "💻", img: "img/g5/g5-jobpaths/programmer.jpg" },
      { en: "veterinarian", ar: "طبيب بيطري", emoji: "🐾", img: "img/g5/g5-jobpaths/veterinarian.jpg" },
      { en: "pilot", ar: "طيار", emoji: "✈️", img: "img/g5/g5-jobpaths/pilot.jpg" }
    ]
  },

  // ---------------- Unit 4: Glorious Food ----------------
  {
    id: "g5-ingredients", unit: "g5u4", en: "Ingredients", ar: "المكونات", emoji: "🥗", color: "#fb8500",
    words: [
      { en: "vegetables", ar: "الخضروات", emoji: "🥦", img: "img/g5/g5-ingredients/vegetables.jpg" },
      { en: "fruit", ar: "الفواكه", emoji: "🍎", img: "img/g5/g5-ingredients/fruit.jpg" },
      { en: "rice", ar: "الأرز", emoji: "🍚", img: "img/g5/g5-ingredients/rice.jpg" },
      { en: "chicken", ar: "الدجاج", emoji: "🍗", img: "img/g5/g5-ingredients/chicken.jpg" },
      { en: "cheese", ar: "الجبن", emoji: "🧀", img: "img/g5/g5-ingredients/cheese.jpg" },
      { en: "eggs", ar: "البيض", emoji: "🥚", img: "img/g5/g5-ingredients/eggs.jpg" },
      { en: "flour", ar: "الطحين", emoji: "🌾", img: "img/g5/g5-ingredients/flour.jpg" }
    ]
  },
  {
    id: "g5-dishes", unit: "g5u4", en: "Dishes & Cooking", ar: "الأطباق والطبخ", emoji: "🍲", color: "#fb8500",
    words: [
      { en: "recipe", ar: "الوصفة", emoji: "📋", img: "img/g5/g5-dishes/recipe.jpg" },
      { en: "salad", ar: "السلطة", emoji: "🥗", img: "img/g5/g5-dishes/salad.jpg" },
      { en: "soup", ar: "الشوربة", emoji: "🥣", img: "img/g5/g5-dishes/soup.jpg" },
      { en: "grilled chicken", ar: "الدجاج المشوي", emoji: "🍗", img: "img/g5/g5-dishes/grilled_chicken.jpg" },
      { en: "dessert", ar: "الحلوى", emoji: "🍰", img: "img/g5/g5-dishes/dessert.jpg" },
      { en: "fresh juice", ar: "العصير الطازج", emoji: "🧃", img: "img/g5/g5-dishes/fresh_juice.jpg" }
    ]
  }
];

var G5T1_SENTENCES = {
  g5u1: [
    { en: "My favorite hobby is reading", ar: "هوايتي المفضلة هي القراءة", emoji: "📖" },
    { en: "I am interested in photography", ar: "أنا مهتم بالتصوير الفوتوغرافي", emoji: "📷" },
    { en: "She loves gardening on weekends", ar: "هي تحب البستنة في عطلة نهاية الأسبوع", emoji: "🪴" },
    { en: "We play chess together", ar: "نلعب الشطرنج معًا", emoji: "♟️" },
    { en: "What do you do in your free time", ar: "ماذا تفعل في وقت فراغك", emoji: "🎧" },
    { en: "He enjoys listening to music", ar: "هو يستمتع بالاستماع إلى الموسيقى", emoji: "🎧" }
  ],
  g5u2: [
    { en: "Our living room is very big", ar: "غرفة معيشتنا كبيرة جدًا", emoji: "🛋️" },
    { en: "The balcony has a nice view", ar: "الشرفة لديها إطلالة جميلة", emoji: "🪟" },
    { en: "We park the car in the garage", ar: "نركن السيارة في المرآب", emoji: "🚗" },
    { en: "This is a modern house", ar: "هذا منزل عصري", emoji: "🏢" },
    { en: "There is a garden behind the house", ar: "توجد حديقة خلف المنزل", emoji: "🌳" },
    { en: "The staircase leads to the roof", ar: "الدرج يؤدي إلى السطح", emoji: "🪜" }
  ],
  g5u3: [
    { en: "I want to be an engineer", ar: "أريد أن أصبح مهندسًا", emoji: "👷" },
    { en: "An architect designs buildings", ar: "المهندس المعماري يصمم المباني", emoji: "📐" },
    { en: "The dentist takes care of teeth", ar: "طبيب الأسنان يعتني بالأسنان", emoji: "🦷" },
    { en: "A programmer writes computer code", ar: "المبرمج يكتب أكواد الحاسوب", emoji: "💻" },
    { en: "The veterinarian helps sick animals", ar: "الطبيب البيطري يساعد الحيوانات المريضة", emoji: "🐾" },
    { en: "What do you want to be", ar: "ماذا تريد أن تصبح", emoji: "👩‍💼" }
  ],
  g5u4: [
    { en: "I follow the recipe carefully", ar: "أتّبع الوصفة بعناية", emoji: "📋" },
    { en: "We need fresh vegetables for the salad", ar: "نحتاج خضروات طازجة للسلطة", emoji: "🥗" },
    { en: "The grilled chicken smells delicious", ar: "الدجاج المشوي رائحته لذيذة", emoji: "🍗" },
    { en: "Can I have some dessert please", ar: "هل يمكنني الحصول على بعض الحلوى من فضلك", emoji: "🍰" },
    { en: "This soup is warm and tasty", ar: "هذه الشوربة دافئة ولذيذة", emoji: "🥣" },
    { en: "Mix the flour and the eggs", ar: "اخلط الطحين والبيض", emoji: "🥚" }
  ]
};


// ============================ GRADE REGISTRY ============================
// Each grade is a self-contained bundle. setGrade() swaps the live globals the
// games and router read (UNITS / THEMES / SENTENCES) and remembers the choice.
// Grades that have two terms concatenate Term 1 first, then Term 2.
function _mergeSentences() {
  var out = {};
  for (var i = 0; i < arguments.length; i++) {
    var s = arguments[i];
    for (var k in s) { if (s.hasOwnProperty(k)) out[k] = s[k]; }
  }
  return out;
}

window.GRADES = [
  { id: "g1", label: "الأول", en: "Grade 1", emoji: "1️⃣",
    UNITS: G1T1_UNITS, THEMES: G1T1_THEMES, SENTENCES: G1T1_SENTENCES },
  { id: "g2", label: "الثاني", en: "Grade 2", emoji: "2️⃣",
    UNITS: G2T1_UNITS.concat(G2_UNITS),
    THEMES: G2T1_THEMES.concat(G2_THEMES),
    SENTENCES: _mergeSentences(G2T1_SENTENCES, G2_SENTENCES) },
  { id: "g3", label: "الثالث", en: "Grade 3", emoji: "3️⃣",
    UNITS: G3T1_UNITS.concat(G3_UNITS),
    THEMES: G3T1_THEMES.concat(G3_THEMES),
    SENTENCES: _mergeSentences(G3T1_SENTENCES, G3_SENTENCES) },
  { id: "g4", label: "الرابع", en: "Grade 4", emoji: "4️⃣",
    UNITS: G4T1_UNITS, THEMES: G4T1_THEMES, SENTENCES: G4T1_SENTENCES },
  { id: "g5", label: "الخامس", en: "Grade 5", emoji: "5️⃣",
    UNITS: G5T1_UNITS, THEMES: G5T1_THEMES, SENTENCES: G5T1_SENTENCES }
];

window.getGradeId = function () {
  var saved = null;
  try { saved = localStorage.getItem("grade"); } catch (e) {}
  return window.GRADES.some(function (g) { return g.id === saved; }) ? saved : "g1";
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
