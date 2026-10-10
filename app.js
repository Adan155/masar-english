/* MASAR English Journey — app.js
   30 A2 lessons for adult learners (Arabic support).
   Progress is saved in localStorage under "masar-progress".
   Progress is now stored by lesson ID (so lessons can be re-ordered safely);
   progress saved by the older 5-lesson version is migrated automatically. */

const lessons = [
  {
    id: "introducing-yourself",
    title: "Introducing Yourself",
    icon: "👋",
    time: "5 min",
    desc: "Introduce yourself naturally and share basic information.",
    objective: "By the end of this lesson, you can introduce yourself and talk about your name, nationality, and job.",
    phrases: [
      ["My name is Sara.", "اسمي سارة."],
      ["I'm from Sudan.", "أنا من السودان."],
      ["I live in Libya.", "أعيش في ليبيا."],
      ["I'm a student.", "أنا طالبة."],
      ["Nice to meet you.", "سعيدة بلقائك."]
    ],
    vocabulary: [
      ["Name", "الاسم"],
      ["Country", "الدولة"],
      ["Nationality", "الجنسية"],
      ["Job", "الوظيفة"],
      ["Live", "يعيش / يسكن"]
    ],
    grammar: {
      title: "Subject + be",
      explanation: "نستخدم am مع I، وis مع he/she/it، وare مع you/we/they.",
      examples: [
        ["I am a teacher.", "أنا معلّم/معلّمة."],
        ["She is Sudanese.", "هي سودانية."],
        ["They are students.", "هم طلاب."]
      ]
    },
    conversation: [
      ["A: Hi! What's your name?", "أهلًا! ما اسمك؟"],
      ["B: My name is Sara. What's your name?", "اسمي سارة. ما اسمك؟"],
      ["A: I'm Adam. Where are you from?", "أنا آدم. من أين أنت؟"],
      ["B: I'm from Sudan, but I live in Libya.", "أنا من السودان، لكنني أعيش في ليبيا."]
    ],
    mistake: {
      wrong: "I am name Sara.",
      correct: "My name is Sara.",
      explanation: "للتعريف باسمك نقول My name is... أو I'm..."
    },
    q: "Choose the correct sentence.",
    answers: [
      "I am name Sara.",
      "My name is Sara.",
      "I name Sara."
    ],
    correct: 1,
    explain: "Use My name is + name, or I'm + name.",
    challenge: "Introduce yourself in 4 sentences. Say your name, country, city, and job or study status."
  },

  {
    id: "daily-routines",
    title: "Daily Routines",
    icon: "☀️",
    time: "5 min",
    desc: "Talk about your everyday activities.",
    objective: "Describe your routine and say how often you do things.",
    phrases: [
      ["I wake up at seven.", "أستيقظ الساعة السابعة."],
      ["I have breakfast in the morning.", "أتناول الإفطار في الصباح."],
      ["I go to work.", "أذهب إلى العمل."],
      ["I usually drink tea.", "عادةً أشرب الشاي."],
      ["I go to bed at ten.", "أذهب إلى الفراش الساعة العاشرة."]
    ],
    vocabulary: [
      ["Wake up", "يستيقظ"],
      ["Get dressed", "يرتدي ملابسه"],
      ["Have breakfast", "يتناول الإفطار"],
      ["Usually", "عادةً"],
      ["Go to bed", "يذهب إلى الفراش"]
    ],
    grammar: {
      title: "Present Simple",
      explanation: "نستخدم المضارع البسيط للروتين والعادات. مع I/you/we/they نستخدم الفعل الأساسي، ومع he/she/it نضيف غالبًا s.",
      examples: [
        ["I work every day.", "أعمل كل يوم."],
        ["She works every day.", "هي تعمل كل يوم."],
        ["He usually wakes up early.", "هو عادةً يستيقظ مبكرًا."]
      ]
    },
    conversation: [
      ["A: What time do you wake up?", "في أي وقت تستيقظ؟"],
      ["B: I usually wake up at seven.", "عادةً أستيقظ الساعة السابعة."],
      ["A: Do you have breakfast at home?", "هل تتناول الإفطار في المنزل؟"],
      ["B: Yes, I do. I have bread and tea.", "نعم. أتناول الخبز والشاي."]
    ],
    mistake: {
      wrong: "She wake up at seven.",
      correct: "She wakes up at seven.",
      explanation: "في المضارع البسيط نضيف s إلى الفعل مع he/she/it."
    },
    q: "Complete: She ___ up at six every day.",
    answers: ["wake", "wakes", "waking"],
    correct: 1,
    explain: "Use wakes with she in the present simple.",
    challenge: "Describe your morning routine in 4–5 sentences."
  },

  {
    id: "talking-about-family",
    title: "Talking About Family",
    icon: "👨‍👩‍👧",
    time: "5 min",
    desc: "Talk about your family and relatives.",
    objective: "Describe your family and say how many brothers and sisters you have.",
    phrases: [
      ["I have two brothers.", "لديّ أخوان."],
      ["I have one sister.", "لديّ أخت واحدة."],
      ["My family is quite big.", "عائلتي كبيرة إلى حدّ ما."],
      ["We live together.", "نحن نعيش معًا."],
      ["I'm married.", "أنا متزوج/متزوجة."]
    ],
    vocabulary: [
      ["Parents", "الوالدان"],
      ["Brother", "أخ"],
      ["Sister", "أخت"],
      ["Husband", "زوج"],
      ["Wife", "زوجة"]
    ],
    grammar: {
      title: "Have and Has",
      explanation: "نستخدم have مع I/you/we/they، ونستخدم has مع he/she/it.",
      examples: [
        ["I have two brothers.", "لديّ أخوان."],
        ["She has one sister.", "لديها أخت واحدة."],
        ["They have three children.", "لديهم ثلاثة أطفال."]
      ]
    },
    conversation: [
      ["A: Do you have any brothers or sisters?", "هل لديك إخوة أو أخوات؟"],
      ["B: Yes, I have two brothers and one sister.", "نعم، لديّ أخوان وأخت واحدة."],
      ["A: Do you live together?", "هل تعيشون معًا؟"],
      ["B: No, we live in different cities.", "لا، نعيش في مدن مختلفة."]
    ],
    mistake: {
      wrong: "She have two brothers.",
      correct: "She has two brothers.",
      explanation: "نستخدم has مع she، وليس have."
    },
    q: "Choose the correct sentence.",
    answers: [
      "He have a sister.",
      "He has a sister.",
      "He haves a sister."
    ],
    correct: 1,
    explain: "Use has with he, she, and it.",
    challenge: "Talk about your family. Mention at least three family members."
  },

  {
    id: "describing-people",
    title: "Describing People",
    icon: "😊",
    time: "5 min",
    desc: "Describe people's appearance and personality.",
    objective: "Use basic adjectives to describe people.",
    phrases: [
      ["She is very friendly.", "هي ودودة جدًا."],
      ["He is quite tall.", "هو طويل إلى حدّ ما."],
      ["My friend has curly hair.", "صديقي لديه شعر مجعد."],
      ["She has a lovely smile.", "لديها ابتسامة جميلة."],
      ["He is kind and helpful.", "هو طيب ومتعاون."]
    ],
    vocabulary: [
      ["Friendly", "ودود"],
      ["Kind", "طيب"],
      ["Tall", "طويل"],
      ["Short", "قصير"],
      ["Curly hair", "شعر مجعد"]
    ],
    grammar: {
      title: "Be vs. Have",
      explanation: "نستخدم be لوصف الصفات، وhave/has عند الحديث عن الشعر أو الملامح التي يمتلكها الشخص.",
      examples: [
        ["She is friendly.", "هي ودودة."],
        ["He is tall.", "هو طويل."],
        ["She has long hair.", "لديها شعر طويل."]
      ]
    },
    conversation: [
      ["A: What is your new teacher like?", "كيف تبدو شخصية معلمك الجديد؟"],
      ["B: She is friendly and helpful.", "هي ودودة ومتعاونة."],
      ["A: What does she look like?", "كيف يبدو شكلها؟"],
      ["B: She is tall and has long hair.", "هي طويلة ولديها شعر طويل."]
    ],
    mistake: {
      wrong: "She has friendly.",
      correct: "She is friendly.",
      explanation: "Friendly صفة، لذلك نستخدم معها is، وليس has."
    },
    q: "Complete: My brother ___ very tall.",
    answers: ["has", "is", "does"],
    correct: 1,
    explain: "Use is before an adjective describing a person.",
    challenge: "Describe a friend or family member using three adjectives."
  },

  {
    id: "a-typical-week",
    title: "A Typical Week",
    icon: "🗓️",
    time: "5 min",
    desc: "Talk about your weekly schedule.",
    objective: "Describe activities you do on different days of the week.",
    phrases: [
      ["I work from Sunday to Thursday.", "أعمل من الأحد إلى الخميس."],
      ["I'm usually busy on Mondays.", "عادةً أكون مشغولًا يوم الاثنين."],
      ["I visit my family at weekends.", "أزور عائلتي في عطلة نهاية الأسبوع."],
      ["I have English classes twice a week.", "لديّ دروس إنجليزية مرتين في الأسبوع."],
      ["I'm free on Friday.", "أنا متفرغ يوم الجمعة."]
    ],
    vocabulary: [
      ["Weekday", "يوم من أيام الأسبوع"],
      ["Weekend", "عطلة نهاية الأسبوع"],
      ["Schedule", "جدول"],
      ["Busy", "مشغول"],
      ["Twice a week", "مرتين في الأسبوع"]
    ],
    grammar: {
      title: "Prepositions of Time",
      explanation: "نستخدم on مع أيام الأسبوع، وat مع تعبيرات مثل at weekends في الإنجليزية البريطانية، وfrom...to للمدى الزمني.",
      examples: [
        ["I study on Monday.", "أدرس يوم الاثنين."],
        ["I work from Sunday to Thursday.", "أعمل من الأحد إلى الخميس."],
        ["I visit my family at weekends.", "أزور عائلتي في عطلة نهاية الأسبوع."]
      ]
    },
    conversation: [
      ["A: What do you usually do on Fridays?", "ماذا تفعل عادةً أيام الجمعة؟"],
      ["B: I visit my family or relax at home.", "أزور عائلتي أو أسترخي في المنزل."],
      ["A: Are you busy on Saturdays?", "هل تكون مشغولًا أيام السبت؟"],
      ["B: Sometimes, but I'm usually free in the evening.", "أحيانًا، لكنني عادةً أكون متفرغًا في المساء."]
    ],
    mistake: {
      wrong: "I study in Monday.",
      correct: "I study on Monday.",
      explanation: "نستخدم on مع أيام الأسبوع."
    },
    q: "Complete: I have an English class ___ Tuesday.",
    answers: ["in", "at", "on"],
    correct: 2,
    explain: "Use on with days of the week.",
    challenge: "Describe three things you usually do during the week."
  },

  {
    id: "food-and-meals",
    title: "Food and Meals",
    icon: "🍽️",
    time: "5 min",
    desc: "Talk about food, meals, and preferences.",
    objective: "Say what you like, dislike, and usually eat.",
    phrases: [
      ["I really like rice.", "أحب الأرز كثيرًا."],
      ["I don't like spicy food.", "لا أحب الطعام الحار."],
      ["My favourite meal is lunch.", "وجبتي المفضلة هي الغداء."],
      ["I usually eat at home.", "عادةً أتناول الطعام في المنزل."],
      ["Would you like some tea?", "هل ترغب في بعض الشاي؟"]
    ],
    vocabulary: [
      ["Breakfast", "الإفطار"],
      ["Lunch", "الغداء"],
      ["Dinner", "العشاء"],
      ["Spicy", "حار"],
      ["Favourite", "المفضل"]
    ],
    grammar: {
      title: "Like, Love, and Don't Like",
      explanation: "يمكن استخدام like/love/don't like مع اسم أو مع فعل ينتهي بـ -ing.",
      examples: [
        ["I like tea.", "أحب الشاي."],
        ["I love cooking.", "أحب الطبخ."],
        ["She doesn't like coffee.", "هي لا تحب القهوة."]
      ]
    },
    conversation: [
      ["A: What do you usually have for breakfast?", "ماذا تتناول عادةً على الإفطار؟"],
      ["B: I usually have bread, eggs, and tea.", "عادةً أتناول الخبز والبيض والشاي."],
      ["A: Do you like coffee?", "هل تحب القهوة؟"],
      ["B: Not really. I prefer tea.", "ليس كثيرًا. أفضّل الشاي."]
    ],
    mistake: {
      wrong: "I am like tea.",
      correct: "I like tea.",
      explanation: "Like فعل عادي، ولا نضع am قبله في المضارع البسيط."
    },
    q: "Choose the correct sentence.",
    answers: [
      "I am like rice.",
      "I likes rice.",
      "I like rice."
    ],
    correct: 2,
    explain: "Use I like, without am and without s.",
    challenge: "Talk about your favourite meal and what you usually eat."
  },

  {
    id: "at-the-supermarket",
    title: "At the Supermarket",
    icon: "🛒",
    time: "6 min",
    desc: "Ask for products, quantities, and prices.",
    objective: "Shop confidently using common supermarket expressions.",
    phrases: [
      ["How much is this?", "كم سعر هذا؟"],
      ["I'd like a bottle of water.", "أريد زجاجة ماء."],
      ["Where can I find the milk?", "أين أجد الحليب؟"],
      ["Can I have two kilos of rice?", "هل يمكنني الحصول على كيلوغرامين من الأرز؟"],
      ["That's all, thank you.", "هذا كل شيء، شكرًا."]
    ],
    vocabulary: [
      ["Bottle", "زجاجة"],
      ["Packet", "عبوة"],
      ["Kilo", "كيلوغرام"],
      ["Price", "السعر"],
      ["Shopping basket", "سلة التسوق"]
    ],
    grammar: {
      title: "Countable and Uncountable Nouns",
      explanation: "نستخدم many مع الأسماء المعدودة، وmuch مع الأسماء غير المعدودة. ويمكننا استخدام a bottle of أو a kilo of لتحديد كمية.",
      examples: [
        ["How many apples do you need?", "كم تفاحة تحتاج؟"],
        ["How much milk do you need?", "كم تحتاج من الحليب؟"],
        ["I'd like a bottle of water.", "أريد زجاجة ماء."]
      ]
    },
    conversation: [
      ["A: Can I help you?", "هل يمكنني مساعدتك؟"],
      ["B: Yes, where can I find the rice?", "نعم، أين أجد الأرز؟"],
      ["A: It's in aisle three.", "إنه في الممر الثالث."],
      ["B: Thank you. How much is this bottle of oil?", "شكرًا. كم سعر زجاجة الزيت هذه؟"]
    ],
    mistake: {
      wrong: "How many water do you need?",
      correct: "How much water do you need?",
      explanation: "Water اسم غير معدود، لذلك نستخدم much."
    },
    q: "You want to ask about the price. What do you say?",
    answers: [
      "How much is this?",
      "How many is this?",
      "How old is this?"
    ],
    correct: 0,
    explain: "How much is this? is a common question about price.",
    challenge: "Imagine you are shopping. Ask for two products and ask about one price."
  },

  {
    id: "cooking-at-home",
    title: "Cooking at Home",
    icon: "🍳",
    time: "5 min",
    desc: "Explain how you prepare a simple meal.",
    objective: "Describe simple cooking steps and ingredients.",
    phrases: [
      ["First, wash the vegetables.", "أولًا، اغسل الخضروات."],
      ["Then, cut the onions.", "ثم قطّع البصل."],
      ["Add a little salt.", "أضف قليلًا من الملح."],
      ["Cook it for ten minutes.", "اطهه لمدة عشر دقائق."],
      ["It's ready to serve.", "أصبح جاهزًا للتقديم."]
    ],
    vocabulary: [
      ["Ingredient", "مكوّن"],
      ["Chop", "يقطّع"],
      ["Boil", "يغلي / يسلق"],
      ["Fry", "يقلي"],
      ["Add", "يضيف"]
    ],
    grammar: {
      title: "Imperatives",
      explanation: "نستخدم الفعل الأساسي لإعطاء تعليمات أو شرح خطوات. لا نحتاج إلى وضع you قبل الفعل.",
      examples: [
        ["Wash the vegetables.", "اغسل الخضروات."],
        ["Add some water.", "أضف بعض الماء."],
        ["Don't add too much salt.", "لا تضف الكثير من الملح."]
      ]
    },
    conversation: [
      ["A: How do you make your rice?", "كيف تحضّر الأرز؟"],
      ["B: First, wash the rice.", "أولًا، اغسل الأرز."],
      ["A: What do you do next?", "ماذا تفعل بعد ذلك؟"],
      ["B: Add water and salt, then cook it.", "أضف الماء والملح، ثم اطهه."]
    ],
    mistake: {
      wrong: "You add the salt! (when giving a simple instruction)",
      correct: "Add the salt!",
      explanation: "في التعليمات المباشرة نبدأ بالفعل الأساسي دون الحاجة إلى you."
    },
    q: "Choose the correct instruction.",
    answers: [
      "Adding the water.",
      "Add the water.",
      "You are add the water."
    ],
    correct: 1,
    explain: "Use the base form of the verb for a direct instruction.",
    challenge: "Explain how to make tea or prepare a simple meal in four steps."
  },

  {
    id: "my-home",
    title: "My Home",
    icon: "🏠",
    time: "5 min",
    desc: "Describe your home and where things are.",
    objective: "Describe rooms and use basic prepositions of place.",
    phrases: [
      ["I live in a small flat.", "أعيش في شقة صغيرة."],
      ["There are two bedrooms.", "توجد غرفتا نوم."],
      ["The kitchen is next to the living room.", "المطبخ بجوار غرفة المعيشة."],
      ["The keys are on the table.", "المفاتيح على الطاولة."],
      ["My home is comfortable.", "منزلي مريح."]
    ],
    vocabulary: [
      ["Kitchen", "مطبخ"],
      ["Bedroom", "غرفة نوم"],
      ["Living room", "غرفة المعيشة"],
      ["Next to", "بجوار"],
      ["Between", "بين"]
    ],
    grammar: {
      title: "There Is and There Are",
      explanation: "نستخدم there is مع المفرد أو الاسم غير المعدود، وthere are مع الجمع.",
      examples: [
        ["There is a sofa in the living room.", "توجد أريكة في غرفة المعيشة."],
        ["There are two bedrooms.", "توجد غرفتا نوم."],
        ["The phone is on the table.", "الهاتف على الطاولة."]
      ]
    },
    conversation: [
      ["A: Tell me about your home.", "حدثني عن منزلك."],
      ["B: I live in a small flat with my family.", "أعيش في شقة صغيرة مع عائلتي."],
      ["A: Is there a balcony?", "هل توجد شرفة؟"],
      ["B: Yes, there is. It's next to the living room.", "نعم، توجد. إنها بجوار غرفة المعيشة."]
    ],
    mistake: {
      wrong: "There are a kitchen.",
      correct: "There is a kitchen.",
      explanation: "نستخدم there is مع الاسم المفرد مثل a kitchen."
    },
    q: "Complete: There ___ three chairs in the room.",
    answers: ["is", "are", "be"],
    correct: 1,
    explain: "Use there are with plural nouns such as three chairs.",
    challenge: "Describe your home in four sentences. Mention two rooms and where something is."
  },

  {
    id: "around-town",
    title: "Around Town",
    icon: "🏙️",
    time: "5 min",
    desc: "Talk about places and facilities in your town.",
    objective: "Name local places and explain where you go for everyday activities.",
    phrases: [
      ["There is a pharmacy near my home.", "توجد صيدلية بالقرب من منزلي."],
      ["The supermarket is opposite the bank.", "السوبرماركت مقابل البنك."],
      ["I go to the market every Friday.", "أذهب إلى السوق كل يوم جمعة."],
      ["The bus station is far from here.", "محطة الحافلات بعيدة من هنا."],
      ["It's within walking distance.", "يمكن الوصول إليه سيرًا على الأقدام."]
    ],
    vocabulary: [
      ["Pharmacy", "صيدلية"],
      ["Bank", "بنك"],
      ["Bus station", "محطة حافلات"],
      ["Opposite", "مقابل"],
      ["Near", "بالقرب من"]
    ],
    grammar: {
      title: "Prepositions of Place",
      explanation: "نستخدم near للقرب، وopposite للمقابلة، وbetween لشيء يقع بين مكانين، وnext to للمجاورة.",
      examples: [
        ["The bank is near the market.", "البنك بالقرب من السوق."],
        ["The café is opposite the hotel.", "المقهى مقابل الفندق."],
        ["The pharmacy is next to the supermarket.", "الصيدلية بجوار السوبرماركت."]
      ]
    },
    conversation: [
      ["A: Is there a pharmacy near here?", "هل توجد صيدلية بالقرب من هنا؟"],
      ["B: Yes. It's next to the supermarket.", "نعم. إنها بجوار السوبرماركت."],
      ["A: Is it far from here?", "هل هي بعيدة من هنا؟"],
      ["B: No, it's only a five-minute walk.", "لا، إنها تبعد خمس دقائق سيرًا على الأقدام."]
    ],
    mistake: {
      wrong: "The pharmacy is next the bank.",
      correct: "The pharmacy is next to the bank.",
      explanation: "التعبير الصحيح هو next to، وليس next وحدها في هذا الاستخدام."
    },
    q: "The café is ___ the bank, on the other side of the street.",
    answers: ["opposite", "between", "under"],
    correct: 0,
    explain: "Opposite means facing something on the other side.",
    challenge: "Describe three places near your home and explain where they are."
  },

  {
    id: "asking-for-directions",
    title: "Asking for Directions",
    icon: "🧭",
    time: "5 min",
    desc: "Ask for directions and understand simple instructions.",
    objective: "Ask where places are and understand how to get there.",
    phrases: [
      ["Excuse me, where is the bank?", "عذرًا، أين البنك؟"],
      ["How can I get to the station?", "كيف يمكنني الوصول إلى المحطة؟"],
      ["Go straight ahead.", "واصل السير إلى الأمام."],
      ["Turn left at the traffic lights.", "انعطف يسارًا عند إشارة المرور."],
      ["It's on your right.", "إنه على يمينك."]
    ],
    vocabulary: [
      ["Turn left", "انعطف يسارًا"],
      ["Turn right", "انعطف يمينًا"],
      ["Go straight", "واصل السير إلى الأمام"],
      ["Traffic lights", "إشارة المرور"],
      ["Corner", "الزاوية"]
    ],
    grammar: {
      title: "Imperatives for Directions",
      explanation: "نستخدم الفعل الأساسي لإعطاء الاتجاهات، مثل Go وTurn وCross.",
      examples: [
        ["Go straight ahead.", "واصل السير إلى الأمام."],
        ["Turn right at the corner.", "انعطف يمينًا عند الزاوية."],
        ["Don't cross the road here.", "لا تعبر الطريق هنا."]
      ]
    },
    conversation: [
      ["A: Excuse me, how can I get to the bank?", "عذرًا، كيف أصل إلى البنك؟"],
      ["B: Go straight and turn left at the lights.", "واصل السير ثم انعطف يسارًا عند الإشارة."],
      ["A: Is it far from here?", "هل هو بعيد من هنا؟"],
      ["B: No, it's about five minutes away.", "لا، يبعد حوالي خمس دقائق."]
    ],
    mistake: {
      wrong: "Go to straight.",
      correct: "Go straight.",
      explanation: "نقول Go straight، ولا نحتاج إلى to هنا."
    },
    q: "You want someone to change direction to the right. What do you say?",
    answers: ["Go straight.", "Turn right.", "Cross left."],
    correct: 1,
    explain: "Turn right means change direction to the right.",
    challenge: "Explain how to get from your home to a nearby shop."
  },

  {
    id: "getting-around",
    title: "Getting Around",
    icon: "🚌",
    time: "5 min",
    desc: "Talk about transport and daily journeys.",
    objective: "Describe how you travel to work, school, and other places.",
    phrases: [
      ["I go to work by bus.", "أذهب إلى العمل بالحافلة."],
      ["I usually walk to the market.", "عادةً أمشي إلى السوق."],
      ["How long does the journey take?", "كم تستغرق الرحلة؟"],
      ["The bus is late.", "الحافلة متأخرة."],
      ["I'd like a ticket, please.", "أريد تذكرة، من فضلك."]
    ],
    vocabulary: [
      ["Bus", "حافلة"],
      ["Taxi", "سيارة أجرة"],
      ["Journey", "رحلة"],
      ["Ticket", "تذكرة"],
      ["Traffic", "حركة المرور"]
    ],
    grammar: {
      title: "By + Transport",
      explanation: "نستخدم by قبل وسيلة النقل غالبًا دون أداة، مثل by bus وby car. لكن نقول on foot عند الحديث عن المشي.",
      examples: [
        ["I travel by bus.", "أسافر بالحافلة."],
        ["She goes by taxi.", "تذهب بسيارة أجرة."],
        ["We go to school on foot.", "نذهب إلى المدرسة سيرًا على الأقدام."]
      ]
    },
    conversation: [
      ["A: How do you get to work?", "كيف تذهب إلى العمل؟"],
      ["B: I usually take the bus.", "عادةً أستقل الحافلة."],
      ["A: How long does it take?", "كم يستغرق ذلك؟"],
      ["B: About twenty minutes.", "حوالي عشرين دقيقة."]
    ],
    mistake: {
      wrong: "I go by the bus.",
      correct: "I go by bus.",
      explanation: "عند الحديث عن وسيلة النقل عمومًا، نقول by bus دون the."
    },
    q: "Complete: I go to university ___ bus.",
    answers: ["on", "by", "at"],
    correct: 1,
    explain: "Use by bus when describing your means of transport.",
    challenge: "Describe how you usually travel and how long your journey takes."
  },

  {
    id: "at-a-cafe",
    title: "At a Café",
    icon: "☕",
    time: "5 min",
    desc: "Order drinks and food politely.",
    objective: "Order something in a café and ask about the menu.",
    phrases: [
      ["Could I have a cup of tea, please?", "هل يمكنني الحصول على كوب من الشاي، من فضلك؟"],
      ["Can I see the menu?", "هل يمكنني رؤية قائمة الطعام؟"],
      ["I'd like a cheese sandwich.", "أريد شطيرة جبن."],
      ["For here or to take away?", "هنا أم للطلب الخارجي؟"],
      ["Could I have the bill, please?", "هل يمكنني الحصول على الحساب، من فضلك؟"]
    ],
    vocabulary: [
      ["Menu", "قائمة الطعام"],
      ["Order", "طلب"],
      ["Bill", "الحساب"],
      ["Cup", "كوب"],
      ["Take away", "طلب خارجي"]
    ],
    grammar: {
      title: "Polite Requests",
      explanation: "نستخدم Could I have...? وI'd like... لطلب الطعام والشراب بطريقة مهذبة.",
      examples: [
        ["Could I have some water, please?", "هل يمكنني الحصول على بعض الماء؟"],
        ["I'd like a coffee, please.", "أريد قهوة، من فضلك."],
        ["Can I have the menu?", "هل يمكنني الحصول على قائمة الطعام؟"]
      ]
    },
    conversation: [
      ["A: Hello! What would you like?", "مرحبًا! ماذا تريد؟"],
      ["B: I'd like a coffee and a sandwich, please.", "أريد قهوة وشطيرة، من فضلك."],
      ["A: For here or to take away?", "هنا أم للطلب الخارجي؟"],
      ["B: For here, please.", "هنا، من فضلك."]
    ],
    mistake: {
      wrong: "Give me coffee!",
      correct: "Could I have a coffee, please?",
      explanation: "استخدام Could I have...? مع please يجعل الطلب أكثر تهذيبًا."
    },
    q: "Which is the most polite request?",
    answers: [
      "Coffee now!",
      "Could I have a coffee, please?",
      "You give coffee."
    ],
    correct: 1,
    explain: "Could I have...? is a polite way to request something.",
    challenge: "Role-play ordering a drink and a snack in a café."
  },

  {
    id: "making-plans",
    title: "Making Plans",
    icon: "📅",
    time: "5 min",
    desc: "Suggest activities and arrange a time to meet.",
    objective: "Make simple plans and respond to suggestions.",
    phrases: [
      ["Are you free tomorrow?", "هل أنت متفرغ غدًا؟"],
      ["Would you like to go out?", "هل ترغب في الخروج؟"],
      ["Let's meet at six.", "لنتقابل الساعة السادسة."],
      ["That sounds great!", "تبدو فكرة رائعة!"],
      ["Sorry, I'm busy tomorrow.", "آسف، أنا مشغول غدًا."]
    ],
    vocabulary: [
      ["Free", "متفرغ"],
      ["Busy", "مشغول"],
      ["Meet", "يلتقي"],
      ["Plan", "خطة"],
      ["Available", "متاح / متفرغ"]
    ],
    grammar: {
      title: "Suggestions with Let's",
      explanation: "نستخدم Let's + الفعل الأساسي لاقتراح نشاط نفعله معًا.",
      examples: [
        ["Let's go for a walk.", "لنذهب في نزهة."],
        ["Let's meet after work.", "لنتقابل بعد العمل."],
        ["Let's have lunch together.", "لنتناول الغداء معًا."]
      ]
    },
    conversation: [
      ["A: Are you free this evening?", "هل أنت متفرغ هذا المساء؟"],
      ["B: Yes, I am. Why?", "نعم. لماذا؟"],
      ["A: Let's have dinner together.", "لنتناول العشاء معًا."],
      ["B: Great idea! What time?", "فكرة رائعة! في أي وقت؟"]
    ],
    mistake: {
      wrong: "Let's to go shopping.",
      correct: "Let's go shopping.",
      explanation: "بعد Let's نستخدم الفعل الأساسي مباشرةً دون to."
    },
    q: "Choose the correct suggestion.",
    answers: [
      "Let's to watch a film.",
      "Let's watching a film.",
      "Let's watch a film."
    ],
    correct: 2,
    explain: "Use Let's + base verb.",
    challenge: "Invite a friend to do something this weekend and agree on a time."
  },

  {
    id: "on-the-phone",
    title: "On the Phone",
    icon: "📱",
    time: "5 min",
    desc: "Make a simple phone call and ask to speak to someone.",
    objective: "Start and end a short phone conversation.",
    phrases: [
      ["Hello, this is Sara speaking.", "مرحبًا، معك سارة."],
      ["Can I speak to Ahmed, please?", "هل يمكنني التحدث إلى أحمد، من فضلك؟"],
      ["Who's calling, please?", "من المتصل، من فضلك؟"],
      ["Could you call me back?", "هل يمكنك معاودة الاتصال بي؟"],
      ["Sorry, I can't talk right now.", "عذرًا، لا أستطيع التحدث الآن."]
    ],
    vocabulary: [
      ["Call", "مكالمة / يتصل"],
      ["Caller", "المتصل"],
      ["Message", "رسالة"],
      ["Call back", "يعاود الاتصال"],
      ["Available", "متاح"]
    ],
    grammar: {
      title: "Can and Could for Requests",
      explanation: "نستخدم Can I...? وCould you...? لطلب شيء. وغالبًا تبدو Could you...? أكثر تهذيبًا.",
      examples: [
        ["Can I speak to Sara?", "هل يمكنني التحدث إلى سارة؟"],
        ["Could you call me back?", "هل يمكنك معاودة الاتصال بي؟"],
        ["Can you send me a message?", "هل يمكنك إرسال رسالة لي؟"]
      ]
    },
    conversation: [
      ["A: Hello, can I speak to Mona, please?", "مرحبًا، هل يمكنني التحدث إلى منى؟"],
      ["B: I'm sorry, she's not available right now.", "عذرًا، هي غير متاحة الآن."],
      ["A: Could you ask her to call me back?", "هل يمكنك أن تطلب منها معاودة الاتصال بي؟"],
      ["B: Of course. Can I take your number?", "بالتأكيد. هل يمكنني أخذ رقمك؟"]
    ],
    mistake: {
      wrong: "Can you to call me?",
      correct: "Can you call me?",
      explanation: "بعد can وcould نستخدم الفعل الأساسي دون to."
    },
    q: "Complete: Could you ___ me back later?",
    answers: ["to call", "calling", "call"],
    correct: 2,
    explain: "Use the base verb after could.",
    challenge: "Practise a phone call asking for someone who is not available."
  },

  {
    id: "asking-for-help",
    title: "Asking for Help",
    icon: "🤝",
    time: "5 min",
    desc: "Ask for help and offer help to other people.",
    objective: "Make polite requests and respond when someone needs help.",
    phrases: [
      ["Could you help me, please?", "هل يمكنك مساعدتي، من فضلك؟"],
      ["Can you show me how to do this?", "هل يمكنك أن تريني كيف أفعل هذا؟"],
      ["Do you need a hand?", "هل تحتاج إلى مساعدة؟"],
      ["Of course. No problem.", "بالتأكيد، لا مشكلة."],
      ["Thank you. That's very kind of you.", "شكرًا لك. هذا لطف كبير منك."]
    ],
    vocabulary: [
      ["Help", "مساعدة"],
      ["Explain", "يشرح"],
      ["Show", "يري"],
      ["Carry", "يحمل"],
      ["Problem", "مشكلة"]
    ],
    grammar: {
      title: "Can You...? and Could You...?",
      explanation: "نستخدم Can you...? أو Could you...? لطلب المساعدة. ويأتي الفعل الأساسي بعدهما.",
      examples: [
        ["Could you explain this to me?", "هل يمكنك شرح هذا لي؟"],
        ["Can you carry this bag?", "هل يمكنك حمل هذه الحقيبة؟"],
        ["Could you speak more slowly?", "هل يمكنك التحدث ببطء أكثر؟"]
      ]
    },
    conversation: [
      ["A: Excuse me, could you help me with this form?", "عذرًا، هل يمكنك مساعدتي في هذا النموذج؟"],
      ["B: Of course. Which part is difficult?", "بالتأكيد. أي جزء صعب؟"],
      ["A: I don't understand this question.", "لا أفهم هذا السؤال."],
      ["B: No problem. Let me explain it.", "لا مشكلة. دعني أشرحه لك."]
    ],
    mistake: {
      wrong: "Could you helping me?",
      correct: "Could you help me?",
      explanation: "بعد could نستخدم الفعل الأساسي، وليس الفعل المنتهي بـ ing."
    },
    q: "Choose the correct request.",
    answers: [
      "Could you help me?",
      "Could you helping me?",
      "Could you to help me?"
    ],
    correct: 0,
    explain: "Use could + base verb.",
    challenge: "Imagine you don't understand something. Ask another person for help politely."
  },

  {
    id: "apologies-and-problems",
    title: "Apologies and Problems",
    icon: "🙏",
    time: "5 min",
    desc: "Apologise, explain problems, and respond politely.",
    objective: "Apologise for a mistake and explain a simple problem.",
    phrases: [
      ["I'm sorry I'm late.", "آسف لأنني تأخرت."],
      ["I'm really sorry about that.", "أنا آسف حقًا بشأن ذلك."],
      ["That's okay. Don't worry.", "لا بأس. لا تقلق."],
      ["There seems to be a problem.", "يبدو أن هناك مشكلة."],
      ["Thank you for your patience.", "شكرًا على صبرك."]
    ],
    vocabulary: [
      ["Apologise", "يعتذر"],
      ["Late", "متأخر"],
      ["Mistake", "خطأ"],
      ["Problem", "مشكلة"],
      ["Patience", "صبر"]
    ],
    grammar: {
      title: "Because and So",
      explanation: "نستخدم because لتقديم السبب، وso لتوضيح النتيجة.",
      examples: [
        ["I'm late because the bus was delayed.", "أنا متأخر لأن الحافلة تأخرت."],
        ["The bus was delayed, so I arrived late.", "تأخرت الحافلة، لذلك وصلت متأخرًا."],
        ["I'm sorry because I forgot your message.", "أنا آسف لأنني نسيت رسالتك."]
      ]
    },
    conversation: [
      ["A: You're late. Is everything okay?", "أنت متأخر. هل كل شيء بخير؟"],
      ["B: I'm sorry. The traffic was terrible.", "أنا آسف. كانت حركة المرور سيئة جدًا."],
      ["A: That's okay. Are you alright?", "لا بأس. هل أنت بخير؟"],
      ["B: Yes, thank you for understanding.", "نعم، شكرًا لتفهمك."]
    ],
    mistake: {
      wrong: "I am sorry because I late.",
      correct: "I'm sorry I'm late.",
      explanation: "نستخدم I'm late؛ لأن late صفة وتحتاج إلى فعل be."
    },
    q: "Complete: I missed the bus, ___ I arrived late.",
    answers: ["because", "so", "but"],
    correct: 1,
    explain: "Use so to introduce a result.",
    challenge: "Explain a simple problem and apologise politely."
  },

  {
    id: "sharing-opinions",
    title: "Sharing Opinions",
    icon: "💬",
    time: "5 min",
    desc: "Express opinions and agree or disagree politely.",
    objective: "Share your opinion and respond to another person's ideas.",
    phrases: [
      ["I think English is useful.", "أعتقد أن الإنجليزية مفيدة."],
      ["In my opinion, it's a good idea.", "في رأيي، إنها فكرة جيدة."],
      ["I agree with you.", "أتفق معك."],
      ["I'm not sure I agree.", "لست متأكدًا من أنني أتفق."],
      ["That's an interesting point.", "هذه وجهة نظر مثيرة للاهتمام."]
    ],
    vocabulary: [
      ["Opinion", "رأي"],
      ["Agree", "يوافق"],
      ["Disagree", "يختلف في الرأي"],
      ["Useful", "مفيد"],
      ["Interesting", "مثير للاهتمام"]
    ],
    grammar: {
      title: "Expressing Opinions with Think",
      explanation: "نستخدم I think + جملة للتعبير عن الرأي. ويمكننا استخدام I don't think عندما نريد التعبير عن رأي سلبي.",
      examples: [
        ["I think this book is useful.", "أعتقد أن هذا الكتاب مفيد."],
        ["I don't think it's expensive.", "لا أعتقد أنه غالٍ."],
        ["I think we should leave early.", "أعتقد أنه ينبغي أن نغادر مبكرًا."]
      ]
    },
    conversation: [
      ["A: I think learning English online is useful.", "أعتقد أن تعلم الإنجليزية عبر الإنترنت مفيد."],
      ["B: I agree. We can study from home.", "أتفق. يمكننا الدراسة من المنزل."],
      ["A: What do you think about group classes?", "ما رأيك في الدروس الجماعية؟"],
      ["B: I think they're helpful because we can practise speaking.", "أعتقد أنها مفيدة لأننا نستطيع التدرب على التحدث."]
    ],
    mistake: {
      wrong: "I am think it's good.",
      correct: "I think it's good.",
      explanation: "Think فعل، لذلك لا نضع am قبله في هذه الجملة."
    },
    q: "Choose the correct sentence.",
    answers: [
      "I am think it's useful.",
      "I thinking it's useful.",
      "I think it's useful."
    ],
    correct: 2,
    explain: "Use I think + sentence to express an opinion.",
    challenge: "Give your opinion about learning online and explain why."
  },

  {
    id: "talking-about-yesterday",
    title: "Talking About Yesterday",
    icon: "🌙",
    time: "5 min",
    desc: "Describe what you did yesterday.",
    objective: "Use the past simple to talk about completed past activities.",
    phrases: [
      ["I worked yesterday.", "عملت أمس."],
      ["I visited my friend.", "زرت صديقي."],
      ["I watched a film last night.", "شاهدت فيلمًا ليلة أمس."],
      ["I didn't go out.", "لم أخرج."],
      ["What did you do yesterday?", "ماذا فعلت أمس؟"]
    ],
    vocabulary: [
      ["Yesterday", "أمس"],
      ["Last night", "ليلة أمس"],
      ["Visited", "زار"],
      ["Watched", "شاهد"],
      ["Stayed", "بقي"]
    ],
    grammar: {
      title: "Past Simple: Regular Verbs",
      explanation: "نضيف -ed إلى كثير من الأفعال المنتظمة في الماضي. وفي النفي نستخدم didn't + الفعل الأساسي.",
      examples: [
        ["I worked yesterday.", "عملت أمس."],
        ["She visited her aunt.", "زارت عمتها."],
        ["I didn't work yesterday.", "لم أعمل أمس."]
      ]
    },
    conversation: [
      ["A: What did you do yesterday?", "ماذا فعلت أمس؟"],
      ["B: I stayed at home and watched a film.", "بقيت في المنزل وشاهدت فيلمًا."],
      ["A: Did you enjoy it?", "هل استمتعت به؟"],
      ["B: Yes, I did. It was really good.", "نعم. كان جيدًا جدًا."]
    ],
    mistake: {
      wrong: "I didn't went out.",
      correct: "I didn't go out.",
      explanation: "بعد didn't نستخدم الفعل الأساسي go، وليس الماضي went."
    },
    q: "Complete: I ___ my friend yesterday.",
    answers: ["visit", "visited", "visiting"],
    correct: 1,
    explain: "Use visited, the past simple form of the regular verb visit.",
    challenge: "Describe three things you did yesterday."
  },

  {
    id: "past-events-and-memories",
    title: "Past Events and Memories",
    icon: "📸",
    time: "5 min",
    desc: "Talk about past experiences and special memories.",
    objective: "Describe past events using regular and common irregular verbs.",
    phrases: [
      ["I went to the beach last summer.", "ذهبت إلى الشاطئ الصيف الماضي."],
      ["We had a wonderful time.", "قضينا وقتًا رائعًا."],
      ["I met an old friend.", "قابلت صديقًا قديمًا."],
      ["It was an unforgettable day.", "كان يومًا لا يُنسى."],
      ["I took lots of photos.", "التقطت الكثير من الصور."]
    ],
    vocabulary: [
      ["Memory", "ذكرى"],
      ["Wonderful", "رائع"],
      ["Unforgettable", "لا يُنسى"],
      ["Met", "قابل"],
      ["Took", "أخذ / التقط"]
    ],
    grammar: {
      title: "Common Irregular Past Verbs",
      explanation: "بعض الأفعال لا نضيف إليها -ed في الماضي. مثل go → went، وhave → had، وmeet → met، وtake → took.",
      examples: [
        ["I went to the beach.", "ذهبت إلى الشاطئ."],
        ["We had a great day.", "قضينا يومًا رائعًا."],
        ["I met my teacher.", "قابلت معلمي."]
      ]
    },
    conversation: [
      ["A: Do you have a favourite memory?", "هل لديك ذكرى مفضلة؟"],
      ["B: Yes. I went to the beach with my family.", "نعم. ذهبت إلى الشاطئ مع عائلتي."],
      ["A: What did you do there?", "ماذا فعلت هناك؟"],
      ["B: We swam, took photos, and had lunch together.", "سبحنا والتقطنا الصور وتناولنا الغداء معًا."]
    ],
    mistake: {
      wrong: "I goed to the beach.",
      correct: "I went to the beach.",
      explanation: "Go فعل غير منتظم، والماضي منه went وليس goed."
    },
    q: "Choose the correct past form: Yesterday, we ___ a great time.",
    answers: ["have", "had", "haved"],
    correct: 1,
    explain: "The past simple of have is had.",
    challenge: "Talk about a happy memory. Say where you went and what you did."
  },

  {
    id: "last-weekend",
    title: "Last Weekend",
    icon: "🌴",
    time: "5 min",
    desc: "Talk about activities you did last weekend.",
    objective: "Describe your weekend using the past simple.",
    phrases: [
      ["I visited my family.", "زرت عائلتي."],
      ["We went shopping.", "ذهبنا للتسوق."],
      ["I stayed at home.", "بقيت في المنزل."],
      ["I met some friends.", "قابلت بعض الأصدقاء."],
      ["It was a relaxing weekend.", "كانت عطلة نهاية أسبوع مريحة."]
    ],
    vocabulary: [
      ["Weekend", "عطلة نهاية الأسبوع"],
      ["Relax", "يسترخي"],
      ["Visited", "زار"],
      ["Shopping", "التسوق"],
      ["Enjoyed", "استمتع"]
    ],
    grammar: {
      title: "Past Simple Questions",
      explanation: "للسؤال عن حدث في الماضي نستخدم Did + الفاعل + الفعل الأساسي.",
      examples: [
        ["Did you go out?", "هل خرجت؟"],
        ["Where did you go?", "إلى أين ذهبت؟"],
        ["What did you do?", "ماذا فعلت؟"]
      ]
    },
    conversation: [
      ["A: What did you do last weekend?", "ماذا فعلت في عطلة نهاية الأسبوع الماضية؟"],
      ["B: I visited my family.", "زرت عائلتي."],
      ["A: Did you go anywhere else?", "هل ذهبت إلى مكان آخر؟"],
      ["B: Yes, I went shopping with my sister.", "نعم، ذهبت للتسوق مع أختي."]
    ],
    mistake: {
      wrong: "Where did you went?",
      correct: "Where did you go?",
      explanation: "بعد did نستخدم الفعل الأساسي go وليس went."
    },
    q: "Choose the correct question.",
    answers: [
      "Did you watched a film?",
      "Did you watch a film?",
      "Did you watching a film?"
    ],
    correct: 1,
    explain: "Use Did + subject + base verb.",
    challenge: "Talk about your last weekend and mention three activities."
  },

  {
    id: "holiday-experiences",
    title: "Holiday Experiences",
    icon: "✈️",
    time: "5 min",
    desc: "Talk about holidays, places, and activities.",
    objective: "Describe a past holiday and say what you enjoyed.",
    phrases: [
      ["I went on holiday last year.", "ذهبت في إجازة العام الماضي."],
      ["We stayed in a hotel.", "أقمنا في فندق."],
      ["The weather was beautiful.", "كان الطقس جميلًا."],
      ["We visited some famous places.", "زرنا بعض الأماكن المشهورة."],
      ["I really enjoyed the trip.", "استمتعت بالرحلة كثيرًا."]
    ],
    vocabulary: [
      ["Holiday", "إجازة"],
      ["Trip", "رحلة"],
      ["Hotel", "فندق"],
      ["Sightseeing", "زيارة المعالم السياحية"],
      ["Enjoy", "يستمتع"]
    ],
    grammar: {
      title: "Was and Were",
      explanation: "نستخدم was مع I/he/she/it، ونستخدم were مع you/we/they في الماضي.",
      examples: [
        ["The hotel was comfortable.", "كان الفندق مريحًا."],
        ["We were very happy.", "كنا سعداء جدًا."],
        ["The beaches were beautiful.", "كانت الشواطئ جميلة."]
      ]
    },
    conversation: [
      ["A: Where did you go on holiday?", "إلى أين ذهبت في الإجازة؟"],
      ["B: I went to a beautiful coastal city.", "ذهبت إلى مدينة ساحلية جميلة."],
      ["A: How was the weather?", "كيف كان الطقس؟"],
      ["B: It was sunny, and we enjoyed swimming.", "كان مشمسًا، واستمتعنا بالسباحة."]
    ],
    mistake: {
      wrong: "We was happy.",
      correct: "We were happy.",
      explanation: "نستخدم were مع we، وليس was."
    },
    q: "Complete: The hotel ___ very comfortable.",
    answers: ["were", "was", "are"],
    correct: 1,
    explain: "Use was with the singular subject the hotel.",
    challenge: "Describe a holiday you remember, or imagine a holiday you would like to take."
  },

  {
    id: "life-experiences",
    title: "Life Experiences",
    icon: "🌟",
    time: "5 min",
    desc: "Talk about things you have and haven't done.",
    objective: "Use the present perfect for simple life experiences.",
    phrases: [
      ["I've visited another country.", "لقد زرت دولة أخرى."],
      ["I've never travelled by plane.", "لم أسافر بالطائرة من قبل."],
      ["Have you ever tried sushi?", "هل سبق لك أن جربت السوشي؟"],
      ["Yes, I have.", "نعم، سبق لي ذلك."],
      ["No, I haven't.", "لا، لم أفعل ذلك من قبل."]
    ],
    vocabulary: [
      ["Experience", "تجربة"],
      ["Ever", "في أي وقت من قبل"],
      ["Never", "أبدًا / لم يحدث من قبل"],
      ["Travel", "يسافر"],
      ["Try", "يجرّب"]
    ],
    grammar: {
      title: "Present Perfect: Have and Has",
      explanation: "نستخدم have/has + التصريف الثالث عند الحديث عن تجارب الحياة دون تحديد وقت ماضٍ منتهٍ.",
      examples: [
        ["I have visited Egypt.", "سبق لي أن زرت مصر."],
        ["She has tried sushi.", "سبق لها أن جربت السوشي."],
        ["I've never travelled by plane.", "لم أسافر بالطائرة من قبل."]
      ]
    },
    conversation: [
      ["A: Have you ever travelled by plane?", "هل سبق لك السفر بالطائرة؟"],
      ["B: Yes, I have. I went to Cairo.", "نعم. ذهبت إلى القاهرة."],
      ["A: Did you enjoy the trip?", "هل استمتعت بالرحلة؟"],
      ["B: Yes, I did. It was exciting.", "نعم. كانت تجربة ممتعة."]
    ],
    mistake: {
      wrong: "I have went to Cairo.",
      correct: "I have been to Cairo.",
      explanation: "بعد have نستخدم التصريف الثالث. ومن التعبيرات الشائعة I have been to Cairo."
    },
    q: "Complete: Have you ever ___ a famous person?",
    answers: ["meet", "met", "meeting"],
    correct: 1,
    explain: "Use the past participle met after have.",
    challenge: "Talk about two things you have done and one thing you have never done."
  },

  {
    id: "future-plans",
    title: "Future Plans",
    icon: "🔮",
    time: "5 min",
    desc: "Talk about your plans and intentions.",
    objective: "Describe future intentions using going to.",
    phrases: [
      ["I'm going to learn a new skill.", "سأتعلم مهارة جديدة."],
      ["I'm going to study tonight.", "سأدرس الليلة."],
      ["What are you going to do tomorrow?", "ماذا ستفعل غدًا؟"],
      ["I'm going to visit my family.", "سأزور عائلتي."],
      ["I haven't decided yet.", "لم أقرر بعد."]
    ],
    vocabulary: [
      ["Plan", "خطة"],
      ["Intention", "نية"],
      ["Tomorrow", "غدًا"],
      ["Next week", "الأسبوع القادم"],
      ["Decide", "يقرر"]
    ],
    grammar: {
      title: "Be Going To",
      explanation: "نستخدم am/is/are + going to + الفعل الأساسي للحديث عن الخطط والنوايا المستقبلية.",
      examples: [
        ["I'm going to study tonight.", "سأدرس الليلة."],
        ["She is going to travel.", "ستسافر."],
        ["They are going to visit us.", "سيزوروننا."]
      ]
    },
    conversation: [
      ["A: What are you going to do this weekend?", "ماذا ستفعل في عطلة نهاية الأسبوع؟"],
      ["B: I'm going to visit my family.", "سأزور عائلتي."],
      ["A: Are you going to stay overnight?", "هل ستبيت هناك؟"],
      ["B: No, I'm going to come back in the evening.", "لا، سأعود في المساء."]
    ],
    mistake: {
      wrong: "I going to study.",
      correct: "I'm going to study.",
      explanation: "لا بد من استخدام am/is/are قبل going to."
    },
    q: "Complete: She ___ going to study tonight.",
    answers: ["are", "am", "is"],
    correct: 2,
    explain: "Use is with she.",
    challenge: "Talk about three things you are going to do next week."
  },

  {
    id: "weather-and-clothes",
    title: "Weather and Clothes",
    icon: "🌦️",
    time: "5 min",
    desc: "Describe the weather and choose suitable clothes.",
    objective: "Talk about weather conditions and what people wear.",
    phrases: [
      ["It's very hot today.", "الجو حار جدًا اليوم."],
      ["It's going to rain.", "من المتوقع أن تمطر."],
      ["You should take an umbrella.", "ينبغي أن تأخذ مظلة."],
      ["I'm wearing a light jacket.", "أرتدي سترة خفيفة."],
      ["It's colder than yesterday.", "الجو أبرد من أمس."]
    ],
    vocabulary: [
      ["Sunny", "مشمس"],
      ["Cloudy", "غائم"],
      ["Rainy", "ممطر"],
      ["Umbrella", "مظلة"],
      ["Jacket", "سترة"]
    ],
    grammar: {
      title: "Comparatives",
      explanation: "نستخدم صيغة المقارنة للمقارنة بين شيئين. كثير من الصفات القصيرة تأخذ -er، مثل cold → colder.",
      examples: [
        ["Today is colder than yesterday.", "اليوم أبرد من أمس."],
        ["This jacket is cheaper than that one.", "هذه السترة أرخص من تلك."],
        ["Summer is hotter than spring.", "الصيف أحرّ من الربيع."]
      ]
    },
    conversation: [
      ["A: What's the weather like today?", "كيف الطقس اليوم؟"],
      ["B: It's cloudy and a little cold.", "الجو غائم وبارد قليلًا."],
      ["A: What are you going to wear?", "ماذا سترتدي؟"],
      ["B: I'll wear a jacket and take an umbrella.", "سأرتدي سترة وآخذ مظلة."]
    ],
    mistake: {
      wrong: "Today is more cold than yesterday.",
      correct: "Today is colder than yesterday.",
      explanation: "الصيغة الشائعة للمقارنة مع cold هي colder."
    },
    q: "Complete: Winter is usually ___ than summer.",
    answers: ["cold", "colder", "coldest"],
    correct: 1,
    explain: "Use the comparative colder to compare two seasons.",
    challenge: "Describe today's weather and explain what you would wear."
  },

  {
    id: "health-and-feeling-unwell",
    title: "Health and Feeling Unwell",
    icon: "🩺",
    time: "5 min",
    desc: "Describe common symptoms and ask for help.",
    objective: "Explain how you feel and understand basic health-related expressions.",
    phrases: [
      ["I don't feel well.", "لا أشعر أنني بخير."],
      ["I've got a headache.", "أعاني من صداع."],
      ["My throat hurts.", "حلقي يؤلمني."],
      ["You should get some rest.", "ينبغي أن تحصل على بعض الراحة."],
      ["I need to see a doctor.", "أحتاج إلى زيارة طبيب."]
    ],
    vocabulary: [
      ["Headache", "صداع"],
      ["Sore throat", "التهاب / ألم الحلق"],
      ["Cough", "سعال"],
      ["Rest", "راحة"],
      ["Appointment", "موعد"]
    ],
    grammar: {
      title: "Should and Shouldn't",
      explanation: "نستخدم should + الفعل الأساسي لتقديم نصيحة، ونستخدم shouldn't للنصيحة بعدم فعل شيء.",
      examples: [
        ["You should get some rest.", "ينبغي أن تحصل على بعض الراحة."],
        ["You should drink water.", "ينبغي أن تشرب الماء."],
        ["You shouldn't work too hard.", "ينبغي ألا تعمل بإجهاد شديد."]
      ]
    },
    conversation: [
      ["A: You don't look well. What's wrong?", "لا تبدو بخير. ما المشكلة؟"],
      ["B: I've got a headache.", "أعاني من صداع."],
      ["A: You should rest and speak to a healthcare professional if needed.", "ينبغي أن ترتاح وتستشير مختصًا صحيًا إذا لزم الأمر."],
      ["B: Thanks. I think I'll go home.", "شكرًا. أعتقد أنني سأذهب إلى المنزل."]
    ],
    mistake: {
      wrong: "You should to rest.",
      correct: "You should rest.",
      explanation: "بعد should نستخدم الفعل الأساسي دون to."
    },
    q: "Choose the correct advice.",
    answers: [
      "You should to rest.",
      "You should resting.",
      "You should rest."
    ],
    correct: 2,
    explain: "Use should + base verb.",
    challenge: "Role-play a short conversation explaining that you feel unwell."
  },

  {
    id: "work-and-study",
    title: "Work and Study",
    icon: "💼",
    time: "5 min",
    desc: "Talk about your job, studies, and goals.",
    objective: "Describe your responsibilities and explain what you are learning.",
    phrases: [
      ["I work as a laboratory technician.", "أعمل فني مختبر."],
      ["I'm studying computer science.", "أدرس علوم الحاسوب."],
      ["My main responsibility is helping customers.", "مسؤوليتي الأساسية هي مساعدة العملاء."],
      ["I'm learning new skills.", "أتعلم مهارات جديدة."],
      ["I'd like to improve my English.", "أود تحسين لغتي الإنجليزية."]
    ],
    vocabulary: [
      ["Job", "وظيفة"],
      ["Career", "مسار مهني"],
      ["Responsibility", "مسؤولية"],
      ["Skill", "مهارة"],
      ["Experience", "خبرة"]
    ],
    grammar: {
      title: "Present Simple vs. Present Continuous",
      explanation: "نستخدم المضارع البسيط للروتين والحقائق، والمضارع المستمر للأفعال الجارية الآن أو في الفترة الحالية.",
      examples: [
        ["I work in a hospital.", "أعمل في مستشفى."],
        ["I'm studying English this year.", "أدرس الإنجليزية هذا العام."],
        ["She works every morning.", "هي تعمل كل صباح."]
      ]
    },
    conversation: [
      ["A: What do you do?", "ما عملك؟"],
      ["B: I work in an office.", "أعمل في مكتب."],
      ["A: Are you studying anything at the moment?", "هل تدرس شيئًا في الوقت الحالي؟"],
      ["B: Yes, I'm learning English online.", "نعم، أتعلم الإنجليزية عبر الإنترنت."]
    ],
    mistake: {
      wrong: "I am work in an office.",
      correct: "I work in an office.",
      explanation: "للتحدث عن العمل كروتين نستخدم المضارع البسيط: I work."
    },
    q: "Complete: At the moment, I ___ English online.",
    answers: ["study", "am studying", "studies"],
    correct: 1,
    explain: "Use the present continuous for an activity happening around now.",
    challenge: "Talk about your work or studies and one skill you want to improve."
  },

  {
    id: "technology-in-daily-life",
    title: "Technology in Daily Life",
    icon: "💻",
    time: "5 min",
    desc: "Talk about devices, apps, and online activities.",
    objective: "Describe how you use technology in your everyday life.",
    phrases: [
      ["I use my phone to study English.", "أستخدم هاتفي لدراسة الإنجليزية."],
      ["I usually send messages online.", "عادةً أرسل الرسائل عبر الإنترنت."],
      ["The internet connection is slow.", "اتصال الإنترنت بطيء."],
      ["Can you send me the link?", "هل يمكنك إرسال الرابط لي؟"],
      ["I need to charge my tablet.", "أحتاج إلى شحن جهازي اللوحي."]
    ],
    vocabulary: [
      ["Device", "جهاز"],
      ["Download", "ينزّل"],
      ["Upload", "يرفع ملفًا"],
      ["Connection", "اتصال"],
      ["Password", "كلمة المرور"]
    ],
    grammar: {
      title: "Use + Noun + to + Verb",
      explanation: "نستخدم use + اسم + to + الفعل لشرح الغرض من استخدام شيء.",
      examples: [
        ["I use my phone to study.", "أستخدم هاتفي للدراسة."],
        ["She uses a laptop to work.", "تستخدم حاسوبًا محمولًا للعمل."],
        ["We use the internet to communicate.", "نستخدم الإنترنت للتواصل."]
      ]
    },
    conversation: [
      ["A: What do you use your phone for?", "فيمَ تستخدم هاتفك؟"],
      ["B: I use it to study and talk to my family.", "أستخدمه للدراسة والتحدث مع عائلتي."],
      ["A: Do you use any learning apps?", "هل تستخدم أي تطبيقات تعليمية؟"],
      ["B: Yes, I use an app to practise English.", "نعم، أستخدم تطبيقًا للتدرب على الإنجليزية."]
    ],
    mistake: {
      wrong: "I use my phone for study English.",
      correct: "I use my phone to study English.",
      explanation: "للتعبير عن الغرض نستخدم to + الفعل الأساسي."
    },
    q: "Complete: I use my laptop ___ English.",
    answers: ["learning", "to learn", "learn"],
    correct: 1,
    explain: "Use to + base verb to explain the purpose.",
    challenge: "Describe two ways you use technology to learn or work."
  },

  {
    id: "travel-and-check-in",
    title: "Travel and Check-in",
    icon: "🧳",
    time: "5 min",
    desc: "Use common expressions at the airport and hotel.",
    objective: "Ask and answer simple questions when travelling.",
    phrases: [
      ["I'd like to check in, please.", "أود تسجيل الوصول، من فضلك."],
      ["Here is my passport.", "هذا جواز سفري."],
      ["What time is breakfast?", "في أي وقت يكون الإفطار؟"],
      ["Could I have the room key?", "هل يمكنني الحصول على مفتاح الغرفة؟"],
      ["Where is the departure gate?", "أين بوابة المغادرة؟"]
    ],
    vocabulary: [
      ["Passport", "جواز سفر"],
      ["Check-in", "تسجيل الوصول"],
      ["Reservation", "حجز"],
      ["Departure", "مغادرة"],
      ["Luggage", "أمتعة"]
    ],
    grammar: {
      title: "Questions with Where and What Time",
      explanation: "نستخدم Where للسؤال عن المكان، وWhat time للسؤال عن الوقت.",
      examples: [
        ["Where is the hotel?", "أين الفندق؟"],
        ["What time does the flight leave?", "في أي وقت تغادر الرحلة؟"],
        ["Where can I collect my luggage?", "أين يمكنني استلام أمتعتي؟"]
      ]
    },
    conversation: [
      ["A: Good evening. Do you have a reservation?", "مساء الخير. هل لديك حجز؟"],
      ["B: Yes, it's under the name Ahmed.", "نعم، الحجز باسم أحمد."],
      ["A: Could I see your passport, please?", "هل يمكنني رؤية جواز سفرك، من فضلك؟"],
      ["B: Of course. Here you are.", "بالتأكيد. تفضل."]
    ],
    mistake: {
      wrong: "Where I can check in?",
      correct: "Where can I check in?",
      explanation: "في السؤال نضع can قبل الفاعل: Where can I...?"
    },
    q: "Choose the correct question.",
    answers: [
      "Where I can find the gate?",
      "Where can I find the gate?",
      "Where do can I find the gate?"
    ],
    correct: 1,
    explain: "Use Where + can + subject + base verb.",
    challenge: "Role-play checking into a hotel or asking for information at an airport."
  },

  {
    id: "review-and-real-life-challenge",
    title: "Review and Real-Life Challenge",
    icon: "🏆",
    time: "8 min",
    desc: "Use your English skills in everyday situations.",
    objective: "Combine the language you learned to communicate in real-life situations.",
    phrases: [
      ["Could you help me, please?", "هل يمكنك مساعدتي، من فضلك؟"],
      ["I think that's a good idea.", "أعتقد أن هذه فكرة جيدة."],
      ["I'm going to study this evening.", "سأدرس هذا المساء."],
      ["Yesterday, I visited my friend.", "أمس، زرت صديقي."],
      ["Could we meet at six?", "هل يمكننا اللقاء الساعة السادسة؟"]
    ],
    vocabulary: [
      ["Communicate", "يتواصل"],
      ["Practise", "يتدرب"],
      ["Confident", "واثق"],
      ["Conversation", "محادثة"],
      ["Improve", "يحسّن"]
    ],
    grammar: {
      title: "Choose the Right Tense",
      explanation: "اختيار الزمن يعتمد على المعنى: المضارع البسيط للعادات، والماضي البسيط للأحداث الماضية المنتهية، والمستقبل للخطط.",
      examples: [
        ["I work every day.", "أعمل كل يوم."],
        ["I worked yesterday.", "عملت أمس."],
        ["I'm going to work tomorrow.", "سأعمل غدًا."]
      ]
    },
    conversation: [
      ["A: Hi! What did you do yesterday?", "مرحبًا! ماذا فعلت أمس؟"],
      ["B: I studied English and visited my family.", "درست الإنجليزية وزرت عائلتي."],
      ["A: What are you going to do tomorrow?", "ماذا ستفعل غدًا؟"],
      ["B: I'm going to practise speaking with a friend.", "سأتدرب على التحدث مع صديق."]
    ],
    mistake: {
      wrong: "Yesterday, I go to work.",
      correct: "Yesterday, I went to work.",
      explanation: "نستخدم الماضي البسيط مع yesterday، والماضي من go هو went."
    },
    q: "Choose the correct sentence about yesterday.",
    answers: [
      "Yesterday, I go shopping.",
      "Yesterday, I went shopping.",
      "Yesterday, I going shopping."
    ],
    correct: 1,
    explain: "Use the past simple went with yesterday.",
    challenge: "Speak for one minute: introduce yourself, describe yesterday, and explain your plans for tomorrow."
  }
];

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "masar-progress";
const EXPECTED_LESSON_COUNT = 30;

// Order of the original 5-lesson version. Older saved progress stored lesson
// positions (0–4); these IDs let us convert it to the new ID-based format.
const LEGACY_LESSON_IDS = [
  "introducing-yourself",
  "daily-routines",
  "talking-about-family",
  "at-the-supermarket",
  "making-plans"
];

const $ = id => document.getElementById(id);
const list = a => (Array.isArray(a) ? a : []);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));
const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };

/* Checks the lesson data once on load. Problems are reported in the browser
   console; they never stop the app from running. */
function validateLessons() {
  const problems = [];
  const seen = new Set();
  if (lessons.length !== EXPECTED_LESSON_COUNT) {
    problems.push(`Expected ${EXPECTED_LESSON_COUNT} lessons but found ${lessons.length}.`);
  }
  lessons.forEach((l, i) => {
    const tag = `Lesson ${i + 1} (${l.id || "no id"})`;
    if (!l.id) problems.push(`${tag}: missing id.`);
    else if (seen.has(l.id)) problems.push(`${tag}: duplicate id.`);
    seen.add(l.id);
    ["title", "icon", "time", "desc", "objective", "q", "explain", "challenge"].forEach(k => {
      if (!l[k]) problems.push(`${tag}: missing "${k}".`);
    });
    ["phrases", "vocabulary", "conversation"].forEach(k => {
      if (!list(l[k]).length) problems.push(`${tag}: "${k}" is empty.`);
    });
    if (!l.grammar || !l.grammar.title || !l.grammar.explanation || !list(l.grammar.examples).length) {
      problems.push(`${tag}: grammar is incomplete.`);
    }
    if (!l.mistake || !l.mistake.wrong || !l.mistake.correct || !l.mistake.explanation) {
      problems.push(`${tag}: mistake is incomplete.`);
    }
    if (list(l.answers).length < 3) problems.push(`${tag}: needs at least 3 answers.`);
    if (!Number.isInteger(l.correct) || l.correct < 0 || l.correct >= list(l.answers).length) {
      problems.push(`${tag}: "correct" index is out of range.`);
    }
  });
  LEGACY_LESSON_IDS.forEach(id => {
    if (!seen.has(id)) problems.push(`Legacy lesson "${id}" is missing, so old progress cannot be migrated.`);
  });
  if (problems.length) console.error("MASAR lesson data problems:\n" + problems.join("\n"));
  return problems;
}

/* ------------------------------------------------------------------ */
/* Progress (localStorage)                                              */
/* ------------------------------------------------------------------ */

/* Reads saved progress without ever deleting it. Old progress
   ({done:[0,1,...]} = lesson positions) is converted to lesson IDs. */
function loadState() {
  const fresh = { done: [], completed: [], xp: 0, lastDate: "", streak: 0, version: 2 };
  let raw = null;
  try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) { return fresh; }
  if (!raw) return fresh;
  let saved;
  try { saved = JSON.parse(raw); } catch (e) { return fresh; }
  if (!saved || typeof saved !== "object") return fresh;

  const out = {
    done: list(saved.done).filter(Number.isInteger),
    completed: list(saved.completed).filter(id => typeof id === "string"),
    xp: Number.isFinite(saved.xp) ? saved.xp : 0,
    lastDate: typeof saved.lastDate === "string" ? saved.lastDate : "",
    streak: Number.isFinite(saved.streak) ? saved.streak : 0,
    version: 2
  };
  out.done.forEach(i => {
    const id = LEGACY_LESSON_IDS[i];
    if (id && !out.completed.includes(id)) out.completed.push(id);
  });
  return out;
}

const state = loadState();

function isDone(id) { return state.completed.includes(id); }

function save() {
  // Keep the old position-based list in step for the original five lessons,
  // so rolling back to the old app.js would still show that progress.
  state.done = LEGACY_LESSON_IDS.map((id, i) => (isDone(id) ? i : -1)).filter(i => i >= 0);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
}

/* ------------------------------------------------------------------ */
/* Lesson path (home screen)                                            */
/* ------------------------------------------------------------------ */

function render() {
  const doneCount = lessons.filter(l => isDone(l.id)).length;
  setText("xp", state.xp);
  setText("streak", state.streak);
  setText("progress-label", `${doneCount} of ${lessons.length} lessons complete`);
  const bar = $("progress-bar");
  if (bar) bar.style.width = `${doneCount / lessons.length * 100}%`;

  const path = $("lesson-path");
  if (!path) return;
  path.innerHTML = lessons.map((l, i) => {
    const done = isDone(l.id);
    const unlocked = i === 0 || done || isDone(lessons[i - 1].id);
    return `<button type="button" class="lesson-card${done ? " done" : ""}${unlocked ? "" : " locked"}"${unlocked ? "" : " disabled"} data-index="${i}">` +
      `<div class="lesson-icon">${done ? "✓" : unlocked ? esc(l.icon) : "🔒"}</div>` +
      `<div class="lesson-meta"><small>LESSON ${String(i + 1).padStart(2, "0")} · ${esc(l.time.toUpperCase())}</small>` +
      `<strong>${esc(l.title)}</strong>` +
      `<p>${done ? "Completed — revise anytime" : unlocked ? esc(l.desc) : "Complete the previous lesson to unlock"}</p></div>` +
      `<span class="lesson-arrow">${done ? "✓" : unlocked ? "→" : "·"}</span></button>`;
  }).join("");
}

/* ------------------------------------------------------------------ */
/* Lesson dialog                                                        */
/* ------------------------------------------------------------------ */

let selected = null;      // index of the chosen quiz answer
let activeLesson = 0;     // index of the open lesson
let quizChecked = false;  // true once "Check answer" has been pressed

const arabicSpan = text => `<span dir="rtl" lang="ar">${esc(text)}</span>`;

const speakButton = text =>
  `<button type="button" class="speak" data-say="${esc(text)}" aria-label="Listen" style="border:0;background:transparent;cursor:pointer">🔊</button>`;

// One English line (with a listen button) and its Arabic translation.
const row = (english, arabic, say) =>
  `<div class="phrase"><strong>${esc(english)} ${speakButton(say == null ? english : say)}</strong>${arabicSpan(arabic)}</div>`;

function lessonHTML(l) {
  const g = l.grammar || {};
  const m = l.mistake || {};
  return `<p class="eyebrow">LEARN · UNDERSTAND · PRACTISE</p>` +
    `<h2 class="lesson-heading">${esc(l.icon)} ${esc(l.title)}</h2>` +
    `<p class="lesson-desc">${esc(l.desc)}</p>` +
    `<p class="lesson-desc"><strong>Goal:</strong> ${esc(l.objective)}</p>` +

    `<h3>Useful phrases</h3>` +
    list(l.phrases).map(p => row(p[0], p[1])).join("") +

    `<h3>Vocabulary</h3>` +
    list(l.vocabulary).map(v => row(v[0], v[1])).join("") +

    `<h3>Grammar: ${esc(g.title)}</h3>` +
    `<p class="lesson-desc" dir="rtl" lang="ar">${esc(g.explanation)}</p>` +
    list(g.examples).map(e => row(e[0], e[1])).join("") +

    `<h3>Conversation</h3>` +
    list(l.conversation).map(c => row(c[0], c[1], c[0].replace(/^[AB]:\s*/, ""))).join("") +

    `<h3>Common mistake</h3>` +
    `<div class="phrase"><strong><span style="color:#a74639">✗ Not correct:</span> ${esc(m.wrong)}</strong></div>` +
    `<div class="phrase"><strong><span style="color:#168044">✓ Correct:</span> ${esc(m.correct)} ${speakButton(m.correct)}</strong>${arabicSpan(m.explanation)}</div>` +

    `<h3>🎤 Speaking challenge</h3>` +
    `<p class="lesson-desc">${esc(l.challenge)}</p>` +

    `<h3>Quick quiz</h3>` +
    `<p class="question">${esc(l.q)}</p>` +
    `<div class="answers">${list(l.answers).map((a, j) =>
      `<button type="button" class="answer" data-answer="${j}">${String.fromCharCode(65 + j)}. ${esc(a)}</button>`).join("")}</div>` +
    `<div class="feedback" id="feedback" aria-live="polite"></div>` +
    `<button type="button" id="check-btn" class="primary-btn" disabled>Check answer</button>`;
}

function openLesson(i) {
  const l = lessons[i];
  if (!l) return;
  activeLesson = i;
  selected = null;
  quizChecked = false;
  setText("lesson-unit", `LESSON ${String(i + 1).padStart(2, "0")}`);
  const content = $("lesson-content");
  content.innerHTML = lessonHTML(l);
  const dialog = $("lesson-dialog");
  if (!dialog.open) {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }
  dialog.scrollTop = 0;
  content.scrollTop = 0;
}

function speak(text) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    toast("Audio playback is not supported in this browser.");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB"; // read English text with an English voice, even on Arabic devices
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}

function checkAnswer() {
  const l = lessons[activeLesson];
  const checkBtn = $("check-btn");
  if (!quizChecked) {
    if (selected === null) return;
    quizChecked = true;
    document.querySelectorAll("#lesson-content .answer").forEach((b, i) => {
      b.disabled = true;
      if (i === l.correct) b.classList.add("correct");
      if (i === selected && i !== l.correct) b.classList.add("wrong");
    });
    const correct = selected === l.correct;
    const firstTime = correct && !isDone(l.id);
    const feedback = $("feedback");
    feedback.textContent = (correct ? (firstTime ? "Correct! +10 XP. " : "Correct! ") : "Not quite. ") + l.explain;
    feedback.style.color = correct ? "#168044" : "#a74639";
    if (firstTime) {
      state.completed.push(l.id);
      state.xp += 10;
      const today = new Date().toDateString();
      if (state.lastDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        state.streak = state.lastDate === yesterday ? state.streak + 1 : 1;
        state.lastDate = today;
      }
      save();
    }
    checkBtn.textContent = activeLesson === lessons.length - 1 ? "Finish lesson" : "Continue";
  } else {
    $("lesson-dialog").close();
    render();
    toast(isDone(l.id) ? "Lesson progress saved." : "Try the lesson again to complete it.");
  }
}

let toastTimer = null;
function toast(msg) {
  const el = $("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

/* ------------------------------------------------------------------ */
/* Event listeners — each is added exactly once                         */
/* ------------------------------------------------------------------ */

// Lesson cards (one listener for the whole list)
$("lesson-path").addEventListener("click", e => {
  const card = e.target.closest(".lesson-card");
  if (card && !card.disabled) openLesson(Number(card.dataset.index));
});

// Everything inside the open lesson: listen buttons, quiz answers, check button
$("lesson-content").addEventListener("click", e => {
  const speakBtn = e.target.closest(".speak");
  if (speakBtn) { speak(speakBtn.dataset.say); return; }

  const answerBtn = e.target.closest(".answer");
  if (answerBtn) {
    if (quizChecked) return;
    selected = Number(answerBtn.dataset.answer);
    document.querySelectorAll("#lesson-content .answer").forEach(x => x.classList.toggle("selected", x === answerBtn));
    $("check-btn").disabled = false;
    return;
  }

  if (e.target.closest("#check-btn")) checkAnswer();
});

$("close-dialog").addEventListener("click", () => $("lesson-dialog").close());

// Stop any audio when the lesson closes (X button, Escape, or Continue)
$("lesson-dialog").addEventListener("close", () => {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
});

$("reset-btn").addEventListener("click", () => {
  if (confirm("Reset all demo progress on this device?")) {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    location.reload();
  }
});

// Bottom navigation
document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".nav-item").forEach(x => x.classList.toggle("active", x === btn));

  const old = document.querySelector(".profile-panel");
  if (old) old.remove();

  if (btn.dataset.nav === "learn") {
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (btn.dataset.nav === "practice") {
    toast("Complete a lesson to earn XP and practise.");
  } else if (btn.dataset.nav === "profile") {
    const doneCount = lessons.filter(l => isDone(l.id)).length;
    const panel = document.createElement("section");
    panel.className = "profile-panel";
    panel.innerHTML = `<p class="eyebrow">YOUR PROGRESS</p><h2>My MASAR profile</h2>` +
      `<div class="profile-stat"><span>Experience points</span><strong>${state.xp} XP</strong></div>` +
      `<div class="profile-stat"><span>Lessons completed</span><strong>${doneCount}/${lessons.length}</strong></div>` +
      `<div class="profile-stat"><span>Learning streak</span><strong>${state.streak} days 🔥</strong></div>` +
      `<p class="lesson-desc">This demo saves progress on this device only. A shared student account system must be connected before using this as a real class platform.</p>`;
    const main = document.querySelector("main");
    if (main) {
      main.appendChild(panel);
      panel.scrollIntoView({ behavior: "smooth" });
    }
  }
}));

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}

validateLessons();
render();
