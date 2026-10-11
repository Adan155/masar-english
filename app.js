/* MASAR English Journey — app.js
   90 lessons: A1 beginner, A2 elementary, and B1 intermediate courses (Arabic support).
   Progress is saved in localStorage under "masar-progress".
   Progress is now stored by lesson ID (so lessons can be re-ordered safely);
   progress saved by the older 5-lesson version is migrated automatically. */

const lessons = [
  // A1 beginner course: 30 lessons

  {
    "id": "a1-alphabet-greetings",
    "title": "Hello! Greetings and the Alphabet",
    "icon": "👋",
    "time": "5 min",
    "desc": "Greet people and spell your name.",
    "objective": "Say hello, goodbye, and spell your name.",
    "phrases": [
      [
        "Hello!",
        "مرحباً"
      ],
      [
        "Good morning.",
        "صباح الخير"
      ],
      [
        "Goodbye.",
        "مع السلامة"
      ],
      [
        "How do you spell your name?",
        "كيف تتهجّى اسمك؟"
      ]
    ],
    "vocabulary": [
      [
        "hello",
        "مرحباً"
      ],
      [
        "goodbye",
        "مع السلامة"
      ],
      [
        "name",
        "اسم"
      ],
      [
        "letter",
        "حرف"
      ]
    ],
    "grammar": {
      "title": "Greetings",
      "explanation": "Use a greeting that matches the situation.",
      "examples": [
        [
          "Hello!",
          "مرحباً"
        ],
        [
          "Good morning.",
          "صباح الخير"
        ]
      ]
    },
    "conversation": [
      [
        "A: Hello!",
        "أ: مرحباً!"
      ],
      [
        "B: Hi! I’m Sara.",
        "ب: أهلاً! أنا سارة."
      ]
    ],
    "mistake": {
      "wrong": "Good morning night.",
      "correct": "Good evening.",
      "explanation": "Use “Good evening” in the evening."
    },
    "q": "What can you say when you meet someone?",
    "answers": [
      "Goodbye!",
      "Hello!",
      "Good night!"
    ],
    "correct": 1,
    "explain": "“Hello!” is a greeting used when you meet someone.",
    "challenge": "Greet someone and spell your first name slowly.",
    "level": "A1"
  },
  {
    "id": "a1-introductions",
    "title": "My Name Is…",
    "icon": "🪪",
    "time": "5 min",
    "desc": "Introduce yourself with simple sentences.",
    "objective": "Give your name and ask another person’s name.",
    "phrases": [
      [
        "I’m Adil.",
        "أنا عادل."
      ],
      [
        "My name is Sara.",
        "اسمي سارة."
      ],
      [
        "What’s your name?",
        "ما اسمك؟"
      ],
      [
        "Nice to meet you.",
        "سعيد/ة بلقائك."
      ]
    ],
    "vocabulary": [
      [
        "I",
        "أنا"
      ],
      [
        "you",
        "أنت"
      ],
      [
        "meet",
        "يقابل"
      ],
      [
        "nice",
        "سعيد / لطيف"
      ]
    ],
    "grammar": {
      "title": "Subject pronouns + be",
      "explanation": "Use I am / I’m for yourself and you are / you’re for another person.",
      "examples": [
        [
          "I’m Adil.",
          "أنا عادل."
        ],
        [
          "My name is Sara.",
          "اسمي سارة."
        ]
      ]
    },
    "conversation": [
      [
        "A: What’s your name?",
        "أ: ما اسمك؟"
      ],
      [
        "B: I’m Mona. Nice to meet you.",
        "ب: أنا منى. سعيدة بلقائك."
      ]
    ],
    "mistake": {
      "wrong": "I Sara.",
      "correct": "I’m Sara.",
      "explanation": "A sentence needs “am” here: I am / I’m."
    },
    "q": "Choose the correct introduction.",
    "answers": [
      "I name Sara.",
      "I’m Sara.",
      "Me Sara."
    ],
    "correct": 1,
    "explain": "“I’m” is the short form of “I am.”",
    "challenge": "Introduce yourself in three sentences.",
    "level": "A1"
  },
  {
    "id": "a1-countries-nationalities",
    "title": "Countries and Nationalities",
    "icon": "🌍",
    "time": "5 min",
    "desc": "Say where you are from.",
    "objective": "Ask and answer about countries and nationalities.",
    "phrases": [
      [
        "Where are you from?",
        "من أين أنت؟"
      ],
      [
        "I’m from Sudan.",
        "أنا من السودان."
      ],
      [
        "I’m Sudanese.",
        "أنا سوداني/ة."
      ],
      [
        "Are you Libyan?",
        "هل أنت ليبي/ة؟"
      ]
    ],
    "vocabulary": [
      [
        "country",
        "دولة"
      ],
      [
        "nationality",
        "جنسية"
      ],
      [
        "Sudan",
        "السودان"
      ],
      [
        "Libya",
        "ليبيا"
      ]
    ],
    "grammar": {
      "title": "Be + from",
      "explanation": "Use “I’m from + country” and “I’m + nationality.”",
      "examples": [
        [
          "Where are you from?",
          "من أين أنت؟"
        ],
        [
          "I’m from Sudan.",
          "أنا من السودان."
        ]
      ]
    },
    "conversation": [
      [
        "A: Where are you from?",
        "أ: من أين أنت؟"
      ],
      [
        "B: I’m from Sudan. I’m Sudanese.",
        "ب: أنا من السودان. أنا سوداني/ة."
      ]
    ],
    "mistake": {
      "wrong": "I from Sudan.",
      "correct": "I’m from Sudan.",
      "explanation": "Use “am” with “I”."
    },
    "q": "Complete: I ___ from Sudan.",
    "answers": [
      "is",
      "am",
      "are"
    ],
    "correct": 1,
    "explain": "“I” goes with “am”.",
    "challenge": "Say your country and nationality.",
    "level": "A1"
  },
  {
    "id": "a1-numbers-age",
    "title": "Numbers and Age",
    "icon": "🔢",
    "time": "5 min",
    "desc": "Use numbers and say your age.",
    "objective": "Count and ask or answer about age.",
    "phrases": [
      [
        "How old are you?",
        "كم عمرك؟"
      ],
      [
        "I’m twenty years old.",
        "عمري عشرون سنة."
      ],
      [
        "I’m 26.",
        "عمري ٢٦ سنة."
      ],
      [
        "Can you repeat that?",
        "هل يمكنك إعادة ذلك؟"
      ]
    ],
    "vocabulary": [
      [
        "one",
        "واحد"
      ],
      [
        "ten",
        "عشرة"
      ],
      [
        "twenty",
        "عشرون"
      ],
      [
        "years old",
        "العمر بالسنوات"
      ]
    ],
    "grammar": {
      "title": "Age with be",
      "explanation": "Say “I’m + number” or “I’m + number + years old.”",
      "examples": [
        [
          "How old are you?",
          "كم عمرك؟"
        ],
        [
          "I’m twenty years old.",
          "عمري عشرون سنة."
        ]
      ]
    },
    "conversation": [
      [
        "A: How old are you?",
        "أ: كم عمرك؟"
      ],
      [
        "B: I’m twenty-six.",
        "ب: عمري ستة وعشرون."
      ]
    ],
    "mistake": {
      "wrong": "I have 26 years.",
      "correct": "I’m 26 years old.",
      "explanation": "English normally uses “be” to talk about age."
    },
    "q": "How do you ask someone’s age?",
    "answers": [
      "How age are you?",
      "How old are you?",
      "What old you are?"
    ],
    "correct": 1,
    "explain": "The correct question is “How old are you?”",
    "challenge": "Say three numbers and your age.",
    "level": "A1"
  },
  {
    "id": "a1-classroom-phrases",
    "title": "Useful English in Class",
    "icon": "📚",
    "time": "5 min",
    "desc": "Ask for help when you do not understand.",
    "objective": "Use simple classroom requests.",
    "phrases": [
      [
        "I don’t understand.",
        "أنا لا أفهم."
      ],
      [
        "Please repeat.",
        "أعد من فضلك."
      ],
      [
        "How do you say this in English?",
        "كيف تقول هذا بالإنجليزية؟"
      ],
      [
        "Thank you.",
        "شكراً لك."
      ]
    ],
    "vocabulary": [
      [
        "understand",
        "يفهم"
      ],
      [
        "repeat",
        "يعيد"
      ],
      [
        "please",
        "من فضلك"
      ],
      [
        "help",
        "مساعدة"
      ]
    ],
    "grammar": {
      "title": "Imperatives and requests",
      "explanation": "Use a base verb for simple instructions: “Repeat, please.” Add “please” to sound polite.",
      "examples": [
        [
          "I don’t understand.",
          "أنا لا أفهم."
        ],
        [
          "Please repeat.",
          "أعد من فضلك."
        ]
      ]
    },
    "conversation": [
      [
        "A: Sorry, I don’t understand.",
        "أ: عذراً، لا أفهم."
      ],
      [
        "B: No problem. I’ll repeat.",
        "ب: لا مشكلة. سأعيد."
      ]
    ],
    "mistake": {
      "wrong": "Please to repeat.",
      "correct": "Please repeat.",
      "explanation": "After “please” in this request, use the base verb."
    },
    "q": "What can you say if you cannot hear clearly?",
    "answers": [
      "Speak slowly, please.",
      "I am not hear.",
      "You repeat to."
    ],
    "correct": 0,
    "explain": "“Speak slowly, please” is a polite request.",
    "challenge": "Practise asking for repetition and help.",
    "level": "A1"
  },
  {
    "id": "a1-pronouns-be",
    "title": "I, You, He, She, We, They",
    "icon": "🧑‍🤝‍🧑",
    "time": "5 min",
    "desc": "Talk about yourself and other people.",
    "objective": "Choose subject pronouns and the verb be.",
    "phrases": [
      [
        "He is my brother.",
        "هو أخي."
      ],
      [
        "She is my friend.",
        "هي صديقتي."
      ],
      [
        "We are students.",
        "نحن طلاب."
      ],
      [
        "They are at home.",
        "هم في المنزل."
      ]
    ],
    "vocabulary": [
      [
        "he",
        "هو"
      ],
      [
        "she",
        "هي"
      ],
      [
        "we",
        "نحن"
      ],
      [
        "they",
        "هم"
      ]
    ],
    "grammar": {
      "title": "Subject pronouns + be",
      "explanation": "I am; he/she/it is; you/we/they are.",
      "examples": [
        [
          "He is my brother.",
          "هو أخي."
        ],
        [
          "She is my friend.",
          "هي صديقتي."
        ]
      ]
    },
    "conversation": [
      [
        "A: Who is she?",
        "أ: من هي؟"
      ],
      [
        "B: She is my sister.",
        "ب: هي أختي."
      ]
    ],
    "mistake": {
      "wrong": "They is here.",
      "correct": "They are here.",
      "explanation": "Use “are” with “they”."
    },
    "q": "Choose: He ___ my friend.",
    "answers": [
      "am",
      "are",
      "is"
    ],
    "correct": 2,
    "explain": "Use “is” with he, she, and it.",
    "challenge": "Describe three people using he, she, or they.",
    "level": "A1"
  },
  {
    "id": "a1-family",
    "title": "My Family",
    "icon": "👨‍👩‍👧",
    "time": "5 min",
    "desc": "Name family members and describe your family.",
    "objective": "Talk about close family members.",
    "phrases": [
      [
        "This is my mother.",
        "هذه أمي."
      ],
      [
        "I have two brothers.",
        "لدي أخوان."
      ],
      [
        "Do you have children?",
        "هل لديك أطفال؟"
      ],
      [
        "I live with my family.",
        "أعيش مع أسرتي."
      ]
    ],
    "vocabulary": [
      [
        "mother",
        "أم"
      ],
      [
        "father",
        "أب"
      ],
      [
        "sister",
        "أخت"
      ],
      [
        "brother",
        "أخ"
      ]
    ],
    "grammar": {
      "title": "Have / has",
      "explanation": "Use “I have” and “you have”; use “he/she has”.",
      "examples": [
        [
          "This is my mother.",
          "هذه أمي."
        ],
        [
          "I have two brothers.",
          "لدي أخوان."
        ]
      ]
    },
    "conversation": [
      [
        "A: Do you have brothers?",
        "أ: هل لديك إخوة؟"
      ],
      [
        "B: Yes, I have two brothers.",
        "ب: نعم، لدي أخوان."
      ]
    ],
    "mistake": {
      "wrong": "She have one sister.",
      "correct": "She has one sister.",
      "explanation": "Use “has” with he and she."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I has a brother.",
      "I have a brother.",
      "I am have a brother."
    ],
    "correct": 1,
    "explain": "Use “have” with “I”.",
    "challenge": "Talk about three people in your family.",
    "level": "A1"
  },
  {
    "id": "a1-jobs",
    "title": "Jobs and Work",
    "icon": "💼",
    "time": "5 min",
    "desc": "Name common jobs and say what you do.",
    "objective": "Ask and answer about jobs.",
    "phrases": [
      [
        "What do you do?",
        "ما عملك؟"
      ],
      [
        "I’m a teacher.",
        "أنا معلّم/ة."
      ],
      [
        "I work in a hospital.",
        "أعمل في مستشفى."
      ],
      [
        "I’m looking for a job.",
        "أبحث عن عمل."
      ]
    ],
    "vocabulary": [
      [
        "teacher",
        "معلّم"
      ],
      [
        "driver",
        "سائق"
      ],
      [
        "doctor",
        "طبيب"
      ],
      [
        "office",
        "مكتب"
      ]
    ],
    "grammar": {
      "title": "A / an with jobs",
      "explanation": "Use a/an before a singular job: a teacher, a driver, an engineer.",
      "examples": [
        [
          "What do you do?",
          "ما عملك؟"
        ],
        [
          "I’m a teacher.",
          "أنا معلّم/ة."
        ]
      ]
    },
    "conversation": [
      [
        "A: What do you do?",
        "أ: ما عملك؟"
      ],
      [
        "B: I’m a student.",
        "ب: أنا طالب/ة."
      ]
    ],
    "mistake": {
      "wrong": "I am teacher.",
      "correct": "I am a teacher.",
      "explanation": "Use “a” before most singular job names."
    },
    "q": "Choose: She is ___ doctor.",
    "answers": [
      "a",
      "an",
      "the"
    ],
    "correct": 0,
    "explain": "“Doctor” starts with a consonant sound, so use “a”.",
    "challenge": "Say your job or the job you want.",
    "level": "A1"
  },
  {
    "id": "a1-this-that",
    "title": "This and That",
    "icon": "👉",
    "time": "5 min",
    "desc": "Point to things near and far.",
    "objective": "Use this, that, these, and those in simple contexts.",
    "phrases": [
      [
        "What is this?",
        "ما هذا؟"
      ],
      [
        "This is my phone.",
        "هذا هاتفي."
      ],
      [
        "That is a window.",
        "تلك نافذة."
      ],
      [
        "These are my keys.",
        "هذه مفاتيحي."
      ]
    ],
    "vocabulary": [
      [
        "this",
        "هذا/هذه للقريب"
      ],
      [
        "that",
        "ذلك/تلك للبعيد"
      ],
      [
        "these",
        "هؤلاء/هذه للجمع القريب"
      ],
      [
        "those",
        "أولئك/تلك للجمع البعيد"
      ]
    ],
    "grammar": {
      "title": "Demonstratives",
      "explanation": "Use this/that with one thing and these/those with more than one.",
      "examples": [
        [
          "What is this?",
          "ما هذا؟"
        ],
        [
          "This is my phone.",
          "هذا هاتفي."
        ]
      ]
    },
    "conversation": [
      [
        "A: What are these?",
        "أ: ما هذه؟"
      ],
      [
        "B: These are my books.",
        "ب: هذه كتبي."
      ]
    ],
    "mistake": {
      "wrong": "These is my keys.",
      "correct": "These are my keys.",
      "explanation": "Use “are” with plural “these”."
    },
    "q": "Choose: ___ is my bag (one bag, near).",
    "answers": [
      "These",
      "This",
      "Those"
    ],
    "correct": 1,
    "explain": "Use “this” for one thing near you.",
    "challenge": "Name five things around you using this or that.",
    "level": "A1"
  },
  {
    "id": "a1-days-time",
    "title": "Days and Time",
    "icon": "🗓️",
    "time": "5 min",
    "desc": "Talk about days and ask the time.",
    "objective": "Name days of the week and tell simple times.",
    "phrases": [
      [
        "What day is it today?",
        "ما اليوم؟"
      ],
      [
        "It’s Monday.",
        "إنه يوم الاثنين."
      ],
      [
        "What time is it?",
        "كم الساعة؟"
      ],
      [
        "It’s three o’clock.",
        "الساعة الثالثة."
      ]
    ],
    "vocabulary": [
      [
        "today",
        "اليوم"
      ],
      [
        "tomorrow",
        "غداً"
      ],
      [
        "yesterday",
        "أمس"
      ],
      [
        "o’clock",
        "تمام الساعة"
      ]
    ],
    "grammar": {
      "title": "Days and at + time",
      "explanation": "Days begin with capital letters. Use “at” with a clock time: at three o’clock.",
      "examples": [
        [
          "What day is it today?",
          "ما اليوم؟"
        ],
        [
          "It’s Monday.",
          "إنه يوم الاثنين."
        ]
      ]
    },
    "conversation": [
      [
        "A: What day is the class?",
        "أ: في أي يوم الحصة؟"
      ],
      [
        "B: It’s on Sunday at five.",
        "ب: يوم الأحد الساعة الخامسة."
      ]
    ],
    "mistake": {
      "wrong": "The class is in five.",
      "correct": "The class is at five.",
      "explanation": "Use “at” for a specific clock time."
    },
    "q": "Which word completes this? It’s ___ Tuesday.",
    "answers": [
      "a",
      "on",
      "at"
    ],
    "correct": 1,
    "explain": "Use “on” with days: on Tuesday.",
    "challenge": "Say today’s day and one time in your schedule.",
    "level": "A1"
  },
  {
    "id": "a1-daily-routine-a1",
    "title": "My Daily Routine",
    "icon": "⏰",
    "time": "5 min",
    "desc": "Describe simple daily activities.",
    "objective": "Use common verbs for a normal day.",
    "phrases": [
      [
        "I wake up at seven.",
        "أستيقظ الساعة السابعة."
      ],
      [
        "I have breakfast.",
        "أتناول الإفطار."
      ],
      [
        "I go to work.",
        "أذهب إلى العمل."
      ],
      [
        "I go to bed at ten.",
        "أنام الساعة العاشرة."
      ]
    ],
    "vocabulary": [
      [
        "wake up",
        "يستيقظ"
      ],
      [
        "breakfast",
        "إفطار"
      ],
      [
        "work",
        "عمل"
      ],
      [
        "go to bed",
        "يذهب للنوم"
      ]
    ],
    "grammar": {
      "title": "Present simple: I / you",
      "explanation": "Use the base verb with I and you to describe routines.",
      "examples": [
        [
          "I wake up at seven.",
          "أستيقظ الساعة السابعة."
        ],
        [
          "I have breakfast.",
          "أتناول الإفطار."
        ]
      ]
    },
    "conversation": [
      [
        "A: What time do you wake up?",
        "أ: متى تستيقظ؟"
      ],
      [
        "B: I wake up at six.",
        "ب: أستيقظ الساعة السادسة."
      ]
    ],
    "mistake": {
      "wrong": "I wakes up early.",
      "correct": "I wake up early.",
      "explanation": "Do not add -s with “I”."
    },
    "q": "Choose: I ___ breakfast at 8.",
    "answers": [
      "has",
      "have",
      "having"
    ],
    "correct": 1,
    "explain": "Use “have” with “I”.",
    "challenge": "Describe your morning in four simple sentences.",
    "level": "A1"
  },
  {
    "id": "a1-present-simple-he-she",
    "title": "He and She: Daily Life",
    "icon": "👫",
    "time": "5 min",
    "desc": "Describe another person’s routine.",
    "objective": "Use present simple with he and she.",
    "phrases": [
      [
        "He works in a shop.",
        "هو يعمل في متجر."
      ],
      [
        "She studies English.",
        "هي تدرس الإنجليزية."
      ],
      [
        "He gets up early.",
        "هو يستيقظ مبكراً."
      ],
      [
        "She doesn’t work on Friday.",
        "هي لا تعمل يوم الجمعة."
      ]
    ],
    "vocabulary": [
      [
        "work",
        "يعمل"
      ],
      [
        "study",
        "يدرس"
      ],
      [
        "get up",
        "ينهض"
      ],
      [
        "every day",
        "كل يوم"
      ]
    ],
    "grammar": {
      "title": "Present simple: he / she",
      "explanation": "Add -s or -es to most verbs with he/she/it. Use doesn’t + base verb for negatives.",
      "examples": [
        [
          "He works in a shop.",
          "هو يعمل في متجر."
        ],
        [
          "She studies English.",
          "هي تدرس الإنجليزية."
        ]
      ]
    },
    "conversation": [
      [
        "A: Does she study English?",
        "أ: هل تدرس الإنجليزية؟"
      ],
      [
        "B: Yes, she does.",
        "ب: نعم."
      ]
    ],
    "mistake": {
      "wrong": "She work at home.",
      "correct": "She works at home.",
      "explanation": "Add -s to the verb with “she”."
    },
    "q": "Choose: He ___ English every day.",
    "answers": [
      "study",
      "studies",
      "studying"
    ],
    "correct": 1,
    "explain": "“Study” changes to “studies” with he/she/it.",
    "challenge": "Describe another person’s routine.",
    "level": "A1"
  },
  {
    "id": "a1-likes-dislikes",
    "title": "Likes and Dislikes",
    "icon": "❤️",
    "time": "5 min",
    "desc": "Say what you like and don’t like.",
    "objective": "Talk about food, hobbies, and preferences.",
    "phrases": [
      [
        "I like tea.",
        "أحب الشاي."
      ],
      [
        "I don’t like coffee.",
        "لا أحب القهوة."
      ],
      [
        "Do you like music?",
        "هل تحب الموسيقى؟"
      ],
      [
        "My favourite food is rice.",
        "طعامي المفضل هو الأرز."
      ]
    ],
    "vocabulary": [
      [
        "like",
        "يحب"
      ],
      [
        "love",
        "يعشق"
      ],
      [
        "favourite",
        "مفضّل"
      ],
      [
        "music",
        "موسيقى"
      ]
    ],
    "grammar": {
      "title": "Like / don’t like",
      "explanation": "Use “I like” + noun or verb-ing. Use “I don’t like” for a negative.",
      "examples": [
        [
          "I like tea.",
          "أحب الشاي."
        ],
        [
          "I don’t like coffee.",
          "لا أحب القهوة."
        ]
      ]
    },
    "conversation": [
      [
        "A: Do you like tea?",
        "أ: هل تحب الشاي؟"
      ],
      [
        "B: Yes, I do. I love it.",
        "ب: نعم، أحبه كثيراً."
      ]
    ],
    "mistake": {
      "wrong": "I am like tea.",
      "correct": "I like tea.",
      "explanation": "“Like” is a main verb; do not add “am”."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I am like football.",
      "I likes football.",
      "I like football."
    ],
    "correct": 2,
    "explain": "Use “I like” with no “am”.",
    "challenge": "Talk about two things you like and one you don’t like.",
    "level": "A1"
  },
  {
    "id": "a1-food-drinks",
    "title": "Food and Drinks",
    "icon": "🍎",
    "time": "5 min",
    "desc": "Order simple food and drinks.",
    "objective": "Name everyday food and express what you want.",
    "phrases": [
      [
        "I’d like some water, please.",
        "أريد بعض الماء من فضلك."
      ],
      [
        "Can I have a sandwich?",
        "هل يمكنني الحصول على شطيرة؟"
      ],
      [
        "I’m hungry.",
        "أنا جائع/ة."
      ],
      [
        "I’m thirsty.",
        "أنا عطشان/ة."
      ]
    ],
    "vocabulary": [
      [
        "bread",
        "خبز"
      ],
      [
        "water",
        "ماء"
      ],
      [
        "rice",
        "أرز"
      ],
      [
        "hungry",
        "جائع"
      ]
    ],
    "grammar": {
      "title": "Some / a / an",
      "explanation": "Use a/an with one countable item: a sandwich, an apple. Use some with plural or uncountable things.",
      "examples": [
        [
          "I’d like some water, please.",
          "أريد بعض الماء من فضلك."
        ],
        [
          "Can I have a sandwich?",
          "هل يمكنني الحصول على شطيرة؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: What would you like?",
        "أ: ماذا تريد؟"
      ],
      [
        "B: I’d like some tea, please.",
        "ب: أريد بعض الشاي من فضلك."
      ]
    ],
    "mistake": {
      "wrong": "I’d like a water.",
      "correct": "I’d like some water.",
      "explanation": "“Water” is uncountable in this general meaning."
    },
    "q": "Choose: I’d like ___ apple.",
    "answers": [
      "a",
      "an",
      "some"
    ],
    "correct": 1,
    "explain": "Use “an” before a vowel sound in “apple”.",
    "challenge": "Order a snack and a drink politely.",
    "level": "A1"
  },
  {
    "id": "a1-home-rooms",
    "title": "My Home",
    "icon": "🏠",
    "time": "5 min",
    "desc": "Name rooms and say where things are.",
    "objective": "Describe your home simply.",
    "phrases": [
      [
        "I live in a flat.",
        "أعيش في شقة."
      ],
      [
        "The kitchen is small.",
        "المطبخ صغير."
      ],
      [
        "There is a sofa in the living room.",
        "توجد أريكة في غرفة الجلوس."
      ],
      [
        "My bedroom is upstairs.",
        "غرفة نومي في الطابق العلوي."
      ]
    ],
    "vocabulary": [
      [
        "kitchen",
        "مطبخ"
      ],
      [
        "bedroom",
        "غرفة نوم"
      ],
      [
        "bathroom",
        "حمام"
      ],
      [
        "living room",
        "غرفة جلوس"
      ]
    ],
    "grammar": {
      "title": "There is / there are",
      "explanation": "Use “there is” for one thing and “there are” for more than one.",
      "examples": [
        [
          "I live in a flat.",
          "أعيش في شقة."
        ],
        [
          "The kitchen is small.",
          "المطبخ صغير."
        ]
      ]
    },
    "conversation": [
      [
        "A: Is there a balcony?",
        "أ: هل توجد شرفة؟"
      ],
      [
        "B: Yes, there is.",
        "ب: نعم، توجد."
      ]
    ],
    "mistake": {
      "wrong": "There are a kitchen.",
      "correct": "There is a kitchen.",
      "explanation": "Use “there is” with one room or object."
    },
    "q": "Complete: There ___ two bedrooms.",
    "answers": [
      "is",
      "are",
      "am"
    ],
    "correct": 1,
    "explain": "Use “are” with plural “two bedrooms”.",
    "challenge": "Describe three rooms in your home.",
    "level": "A1"
  },
  {
    "id": "a1-there-is-are",
    "title": "Things Around Town",
    "icon": "🏙️",
    "time": "5 min",
    "desc": "Say what places are near your home.",
    "objective": "Describe your neighbourhood.",
    "phrases": [
      [
        "There is a shop near my home.",
        "يوجد متجر قرب منزلي."
      ],
      [
        "There are two cafés here.",
        "يوجد مقهيان هنا."
      ],
      [
        "Is there a bank nearby?",
        "هل يوجد بنك قريب؟"
      ],
      [
        "There isn’t a bus stop here.",
        "لا توجد محطة حافلات هنا."
      ]
    ],
    "vocabulary": [
      [
        "shop",
        "متجر"
      ],
      [
        "bank",
        "بنك"
      ],
      [
        "café",
        "مقهى"
      ],
      [
        "bus stop",
        "محطة حافلات"
      ]
    ],
    "grammar": {
      "title": "There is / are: questions and negatives",
      "explanation": "Ask “Is there…?” for one thing and “Are there…?” for plural things.",
      "examples": [
        [
          "There is a shop near my home.",
          "يوجد متجر قرب منزلي."
        ],
        [
          "There are two cafés here.",
          "يوجد مقهيان هنا."
        ]
      ]
    },
    "conversation": [
      [
        "A: Is there a pharmacy near here?",
        "أ: هل توجد صيدلية قريبة؟"
      ],
      [
        "B: Yes, there is, next to the bank.",
        "ب: نعم، بجوار البنك."
      ]
    ],
    "mistake": {
      "wrong": "Are there a bank?",
      "correct": "Is there a bank?",
      "explanation": "Use “is” for one bank."
    },
    "q": "Choose the question about one café.",
    "answers": [
      "Are there a café?",
      "Is there a café?",
      "There is café?"
    ],
    "correct": 1,
    "explain": "“Is there” is used with a singular noun.",
    "challenge": "Name two places near your home.",
    "level": "A1"
  },
  {
    "id": "a1-prepositions-place",
    "title": "Where Is It?",
    "icon": "📍",
    "time": "5 min",
    "desc": "Say where objects are.",
    "objective": "Use common prepositions of place.",
    "phrases": [
      [
        "The phone is on the table.",
        "الهاتف على الطاولة."
      ],
      [
        "The bag is under the chair.",
        "الحقيبة تحت الكرسي."
      ],
      [
        "The bank is next to the shop.",
        "البنك بجوار المتجر."
      ],
      [
        "It’s opposite the school.",
        "إنه مقابل المدرسة."
      ]
    ],
    "vocabulary": [
      [
        "on",
        "على"
      ],
      [
        "under",
        "تحت"
      ],
      [
        "next to",
        "بجوار"
      ],
      [
        "opposite",
        "مقابل"
      ]
    ],
    "grammar": {
      "title": "Prepositions of place",
      "explanation": "Use a preposition to explain the position of a person or thing.",
      "examples": [
        [
          "The phone is on the table.",
          "الهاتف على الطاولة."
        ],
        [
          "The bag is under the chair.",
          "الحقيبة تحت الكرسي."
        ]
      ]
    },
    "conversation": [
      [
        "A: Where are my keys?",
        "أ: أين مفاتيحي؟"
      ],
      [
        "B: They’re on the table.",
        "ب: إنها على الطاولة."
      ]
    ],
    "mistake": {
      "wrong": "The bag is in the chair.",
      "correct": "The bag is under the chair.",
      "explanation": "“Under” means below something."
    },
    "q": "Where is something if it is below the table?",
    "answers": [
      "On the table",
      "Under the table",
      "Next the table"
    ],
    "correct": 1,
    "explain": "“Under” means below.",
    "challenge": "Describe where five objects are.",
    "level": "A1"
  },
  {
    "id": "a1-have-got-possessions",
    "title": "Things I Have",
    "icon": "🎒",
    "time": "5 min",
    "desc": "Talk about things you own.",
    "objective": "Say what you have and ask about possessions.",
    "phrases": [
      [
        "I have a phone.",
        "لدي هاتف."
      ],
      [
        "Have you got a car?",
        "هل لديك سيارة؟"
      ],
      [
        "I haven’t got a computer.",
        "ليس لدي حاسوب."
      ],
      [
        "She has got a bicycle.",
        "لديها دراجة."
      ]
    ],
    "vocabulary": [
      [
        "computer",
        "حاسوب"
      ],
      [
        "car",
        "سيارة"
      ],
      [
        "bicycle",
        "دراجة"
      ],
      [
        "own",
        "يمتلك"
      ]
    ],
    "grammar": {
      "title": "Have got",
      "explanation": "Use “I have got” or “I have”; use “has got” with he/she.",
      "examples": [
        [
          "I have a phone.",
          "لدي هاتف."
        ],
        [
          "Have you got a car?",
          "هل لديك سيارة؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: Have you got a laptop?",
        "أ: هل لديك حاسوب محمول؟"
      ],
      [
        "B: No, I haven’t.",
        "ب: لا، ليس لدي."
      ]
    ],
    "mistake": {
      "wrong": "She have got a car.",
      "correct": "She has got a car.",
      "explanation": "Use “has got” with she."
    },
    "q": "Choose: They ___ got a house.",
    "answers": [
      "has",
      "have",
      "is"
    ],
    "correct": 1,
    "explain": "Use “have got” with “they”.",
    "challenge": "Talk about three things you have and one you don’t have.",
    "level": "A1"
  },
  {
    "id": "a1-can-cant",
    "title": "What Can You Do?",
    "icon": "💪",
    "time": "5 min",
    "desc": "Talk about simple abilities.",
    "objective": "Use can and can’t for skills.",
    "phrases": [
      [
        "I can swim.",
        "أستطيع السباحة."
      ],
      [
        "I can’t drive.",
        "لا أستطيع القيادة."
      ],
      [
        "Can you help me?",
        "هل يمكنك مساعدتي؟"
      ],
      [
        "Yes, I can.",
        "نعم، أستطيع."
      ]
    ],
    "vocabulary": [
      [
        "swim",
        "يسبح"
      ],
      [
        "drive",
        "يقود"
      ],
      [
        "cook",
        "يطبخ"
      ],
      [
        "dance",
        "يرقص"
      ]
    ],
    "grammar": {
      "title": "Can / can’t",
      "explanation": "Use can + base verb. Do not add “to” or -s after can.",
      "examples": [
        [
          "I can swim.",
          "أستطيع السباحة."
        ],
        [
          "I can’t drive.",
          "لا أستطيع القيادة."
        ]
      ]
    },
    "conversation": [
      [
        "A: Can you cook?",
        "أ: هل تستطيع الطبخ؟"
      ],
      [
        "B: Yes, I can.",
        "ب: نعم، أستطيع."
      ]
    ],
    "mistake": {
      "wrong": "She can to swim.",
      "correct": "She can swim.",
      "explanation": "Use the base verb after “can”."
    },
    "q": "Choose: I can ___ English.",
    "answers": [
      "speaks",
      "speak",
      "to speak"
    ],
    "correct": 1,
    "explain": "Use the base form “speak” after can.",
    "challenge": "Say three things you can do and one you can’t do.",
    "level": "A1"
  },
  {
    "id": "a1-present-continuous-intro",
    "title": "What Are You Doing?",
    "icon": "🎬",
    "time": "5 min",
    "desc": "Describe actions happening now.",
    "objective": "Use the present continuous for actions now.",
    "phrases": [
      [
        "I’m studying now.",
        "أنا أدرس الآن."
      ],
      [
        "What are you doing?",
        "ماذا تفعل؟"
      ],
      [
        "She’s cooking.",
        "هي تطبخ الآن."
      ],
      [
        "They’re watching TV.",
        "هم يشاهدون التلفاز الآن."
      ]
    ],
    "vocabulary": [
      [
        "now",
        "الآن"
      ],
      [
        "studying",
        "يدرس الآن"
      ],
      [
        "cooking",
        "يطبخ الآن"
      ],
      [
        "watching",
        "يشاهد الآن"
      ]
    ],
    "grammar": {
      "title": "Present continuous",
      "explanation": "Use am/is/are + verb-ing for actions happening now.",
      "examples": [
        [
          "I’m studying now.",
          "أنا أدرس الآن."
        ],
        [
          "What are you doing?",
          "ماذا تفعل؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: What are you doing?",
        "أ: ماذا تفعل؟"
      ],
      [
        "B: I’m learning English.",
        "ب: أتعلم الإنجليزية."
      ]
    ],
    "mistake": {
      "wrong": "I studying now.",
      "correct": "I’m studying now.",
      "explanation": "Use am/is/are before the -ing verb."
    },
    "q": "Choose: She ___ cooking now.",
    "answers": [
      "are",
      "am",
      "is"
    ],
    "correct": 2,
    "explain": "Use “is” with she.",
    "challenge": "Describe what you and another person are doing now.",
    "level": "A1"
  },
  {
    "id": "a1-weather-seasons",
    "title": "Weather",
    "icon": "🌦️",
    "time": "5 min",
    "desc": "Describe today’s weather.",
    "objective": "Use basic weather words and questions.",
    "phrases": [
      [
        "It’s hot today.",
        "الجو حار اليوم."
      ],
      [
        "It’s raining.",
        "إنها تمطر."
      ],
      [
        "What’s the weather like?",
        "كيف الطقس؟"
      ],
      [
        "I like cool weather.",
        "أحب الطقس المعتدل."
      ]
    ],
    "vocabulary": [
      [
        "hot",
        "حار"
      ],
      [
        "cold",
        "بارد"
      ],
      [
        "sunny",
        "مشمس"
      ],
      [
        "rainy",
        "ممطر"
      ]
    ],
    "grammar": {
      "title": "It is + weather adjective",
      "explanation": "Use “It’s” to describe weather: It’s sunny, cold, or windy.",
      "examples": [
        [
          "It’s hot today.",
          "الجو حار اليوم."
        ],
        [
          "It’s raining.",
          "إنها تمطر."
        ]
      ]
    },
    "conversation": [
      [
        "A: What’s the weather like?",
        "أ: كيف الطقس؟"
      ],
      [
        "B: It’s sunny and hot.",
        "ب: الجو مشمس وحار."
      ]
    ],
    "mistake": {
      "wrong": "Today is hot weather.",
      "correct": "It’s hot today.",
      "explanation": "“It’s hot today” is a natural simple sentence."
    },
    "q": "Choose the correct weather sentence.",
    "answers": [
      "It sunny.",
      "It’s sunny.",
      "It are sunny."
    ],
    "correct": 1,
    "explain": "Use “it is” or “it’s” before the adjective.",
    "challenge": "Describe the weather today in two sentences.",
    "level": "A1"
  },
  {
    "id": "a1-clothes-colours",
    "title": "Clothes and Colours",
    "icon": "👕",
    "time": "5 min",
    "desc": "Describe clothes and colours.",
    "objective": "Ask about clothes and say what you are wearing.",
    "phrases": [
      [
        "I’m wearing a blue shirt.",
        "أرتدي قميصاً أزرق."
      ],
      [
        "What colour is it?",
        "ما لونه؟"
      ],
      [
        "These shoes are black.",
        "هذه الأحذية سوداء."
      ],
      [
        "I need a jacket.",
        "أحتاج إلى سترة."
      ]
    ],
    "vocabulary": [
      [
        "shirt",
        "قميص"
      ],
      [
        "shoes",
        "حذاء"
      ],
      [
        "jacket",
        "سترة"
      ],
      [
        "blue",
        "أزرق"
      ]
    ],
    "grammar": {
      "title": "Adjectives before nouns",
      "explanation": "Put colour before the thing: a red dress, black shoes. Adjectives do not change for plural.",
      "examples": [
        [
          "I’m wearing a blue shirt.",
          "أرتدي قميصاً أزرق."
        ],
        [
          "What colour is it?",
          "ما لونه؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: What are you wearing?",
        "أ: ماذا ترتدي؟"
      ],
      [
        "B: I’m wearing a white shirt.",
        "ب: أرتدي قميصاً أبيض."
      ]
    ],
    "mistake": {
      "wrong": "A shirt blue.",
      "correct": "A blue shirt.",
      "explanation": "Put the colour adjective before the noun."
    },
    "q": "Choose the correct phrase.",
    "answers": [
      "shoes black",
      "black shoes",
      "blacks shoes"
    ],
    "correct": 1,
    "explain": "Use adjective + noun: black shoes.",
    "challenge": "Describe what you are wearing today.",
    "level": "A1"
  },
  {
    "id": "a1-shopping-prices",
    "title": "Shopping and Prices",
    "icon": "🛍️",
    "time": "5 min",
    "desc": "Ask how much things cost.",
    "objective": "Use simple shopping questions.",
    "phrases": [
      [
        "How much is this?",
        "بكم هذا؟"
      ],
      [
        "It’s ten pounds.",
        "سعره عشرة جنيهات."
      ],
      [
        "Can I try it on?",
        "هل يمكنني تجربته؟"
      ],
      [
        "I’m just looking, thank you.",
        "أنا أتفرج فقط، شكراً."
      ]
    ],
    "vocabulary": [
      [
        "price",
        "سعر"
      ],
      [
        "cheap",
        "رخيص"
      ],
      [
        "expensive",
        "غالي"
      ],
      [
        "size",
        "مقاس"
      ]
    ],
    "grammar": {
      "title": "How much is / are",
      "explanation": "Use “How much is…?” for one item and “How much are…?” for plural items.",
      "examples": [
        [
          "How much is this?",
          "بكم هذا؟"
        ],
        [
          "It’s ten pounds.",
          "سعره عشرة جنيهات."
        ]
      ]
    },
    "conversation": [
      [
        "A: How much are these shoes?",
        "أ: بكم هذه الأحذية؟"
      ],
      [
        "B: They’re twenty dinars.",
        "ب: سعرها عشرون ديناراً."
      ]
    ],
    "mistake": {
      "wrong": "How much these shoes is?",
      "correct": "How much are these shoes?",
      "explanation": "Use “are” with plural “shoes”."
    },
    "q": "Choose the correct question about one bag.",
    "answers": [
      "How much are this bag?",
      "How much is this bag?",
      "How many is this bag?"
    ],
    "correct": 1,
    "explain": "Use “is” with one bag.",
    "challenge": "Practise buying one item and asking its price.",
    "level": "A1"
  },
  {
    "id": "a1-food-order-cafe",
    "title": "At a Café",
    "icon": "☕",
    "time": "5 min",
    "desc": "Order a drink or snack politely.",
    "objective": "Use polite phrases in a café.",
    "phrases": [
      [
        "Could I have a coffee, please?",
        "هل يمكنني الحصول على قهوة من فضلك؟"
      ],
      [
        "For here or to go?",
        "هنا أم سفري؟"
      ],
      [
        "To go, please.",
        "سفري من فضلك."
      ],
      [
        "That’s all, thank you.",
        "هذا كل شيء، شكراً."
      ]
    ],
    "vocabulary": [
      [
        "menu",
        "قائمة الطعام"
      ],
      [
        "coffee",
        "قهوة"
      ],
      [
        "tea",
        "شاي"
      ],
      [
        "bill",
        "فاتورة"
      ]
    ],
    "grammar": {
      "title": "Would like / could I",
      "explanation": "Use “Could I have…?” or “I’d like…” to order politely.",
      "examples": [
        [
          "Could I have a coffee, please?",
          "هل يمكنني الحصول على قهوة من فضلك؟"
        ],
        [
          "For here or to go?",
          "هنا أم سفري؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: What would you like?",
        "أ: ماذا تريد؟"
      ],
      [
        "B: Could I have tea, please?",
        "ب: هل يمكنني الحصول على شاي؟"
      ]
    ],
    "mistake": {
      "wrong": "Give me coffee.",
      "correct": "Could I have a coffee, please?",
      "explanation": "A polite request sounds friendlier than a direct command."
    },
    "q": "Which is the most polite order?",
    "answers": [
      "Coffee now!",
      "Give coffee.",
      "Could I have a coffee, please?"
    ],
    "correct": 2,
    "explain": "“Could I have… please?” is a polite request.",
    "challenge": "Role-play ordering a drink and thanking the server.",
    "level": "A1"
  },
  {
    "id": "a1-transport",
    "title": "Getting Around",
    "icon": "🚌",
    "time": "5 min",
    "desc": "Talk about transport and simple journeys.",
    "objective": "Name transport and ask how to get somewhere.",
    "phrases": [
      [
        "I go to work by bus.",
        "أذهب إلى العمل بالحافلة."
      ],
      [
        "Where is the bus stop?",
        "أين محطة الحافلات؟"
      ],
      [
        "I walk to school.",
        "أمشي إلى المدرسة."
      ],
      [
        "Is it far?",
        "هل هو بعيد؟"
      ]
    ],
    "vocabulary": [
      [
        "bus",
        "حافلة"
      ],
      [
        "taxi",
        "سيارة أجرة"
      ],
      [
        "walk",
        "يمشي"
      ],
      [
        "station",
        "محطة"
      ]
    ],
    "grammar": {
      "title": "By + transport",
      "explanation": "Use “by bus/car/taxi” without “a”. Use “on foot” for walking.",
      "examples": [
        [
          "I go to work by bus.",
          "أذهب إلى العمل بالحافلة."
        ],
        [
          "Where is the bus stop?",
          "أين محطة الحافلات؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: How do you go to work?",
        "أ: كيف تذهب إلى العمل؟"
      ],
      [
        "B: I go by bus.",
        "ب: أذهب بالحافلة."
      ]
    ],
    "mistake": {
      "wrong": "I go by a bus.",
      "correct": "I go by bus.",
      "explanation": "Do not usually use “a” after “by” + transport."
    },
    "q": "Choose: I travel ___ taxi.",
    "answers": [
      "by",
      "on",
      "at"
    ],
    "correct": 0,
    "explain": "Say “by taxi”.",
    "challenge": "Explain how you travel to work, class, or the shops.",
    "level": "A1"
  },
  {
    "id": "a1-directions",
    "title": "Asking for Directions",
    "icon": "🧭",
    "time": "5 min",
    "desc": "Ask where a place is and understand simple directions.",
    "objective": "Use basic direction words.",
    "phrases": [
      [
        "Excuse me, where is the bank?",
        "عذراً، أين البنك؟"
      ],
      [
        "Go straight ahead.",
        "امشِ إلى الأمام."
      ],
      [
        "Turn left.",
        "انعطف يساراً."
      ],
      [
        "It’s on your right.",
        "إنه على يمينك."
      ]
    ],
    "vocabulary": [
      [
        "left",
        "يسار"
      ],
      [
        "right",
        "يمين"
      ],
      [
        "straight",
        "مستقيماً"
      ],
      [
        "corner",
        "ناصية / زاوية"
      ]
    ],
    "grammar": {
      "title": "Imperatives for directions",
      "explanation": "Use the base verb to give directions: go, turn, cross.",
      "examples": [
        [
          "Excuse me, where is the bank?",
          "عذراً، أين البنك؟"
        ],
        [
          "Go straight ahead.",
          "امشِ إلى الأمام."
        ]
      ]
    },
    "conversation": [
      [
        "A: How do I get to the bank?",
        "أ: كيف أصل إلى البنك؟"
      ],
      [
        "B: Go straight and turn left.",
        "ب: امشِ للأمام ثم انعطف يساراً."
      ]
    ],
    "mistake": {
      "wrong": "Turn to left.",
      "correct": "Turn left.",
      "explanation": "You do not need “to” before left or right."
    },
    "q": "What do you say to tell someone to move forward?",
    "answers": [
      "Go straight ahead.",
      "Go forward to.",
      "Straight going."
    ],
    "correct": 0,
    "explain": "“Go straight ahead” gives a simple direction.",
    "challenge": "Give directions from your home to a nearby place.",
    "level": "A1"
  },
  {
    "id": "a1-feelings-health",
    "title": "Feelings and Simple Health",
    "icon": "🙂",
    "time": "5 min",
    "desc": "Say how you feel and describe simple problems.",
    "objective": "Use basic feeling words and ask how someone is.",
    "phrases": [
      [
        "How are you?",
        "كيف حالك؟"
      ],
      [
        "I’m tired.",
        "أنا متعب/ة."
      ],
      [
        "I don’t feel well.",
        "لا أشعر أنني بخير."
      ],
      [
        "I have a headache.",
        "لدي صداع."
      ]
    ],
    "vocabulary": [
      [
        "happy",
        "سعيد"
      ],
      [
        "tired",
        "متعب"
      ],
      [
        "thirsty",
        "عطشان"
      ],
      [
        "headache",
        "صداع"
      ]
    ],
    "grammar": {
      "title": "Be + adjectives; have + symptoms",
      "explanation": "Use “I’m” before feeling adjectives and “I have” for many symptoms.",
      "examples": [
        [
          "How are you?",
          "كيف حالك؟"
        ],
        [
          "I’m tired.",
          "أنا متعب/ة."
        ]
      ]
    },
    "conversation": [
      [
        "A: Are you okay?",
        "أ: هل أنت بخير؟"
      ],
      [
        "B: I’m tired, but I’m okay.",
        "ب: أنا متعب، لكنني بخير."
      ]
    ],
    "mistake": {
      "wrong": "I have tired.",
      "correct": "I’m tired.",
      "explanation": "Use “be” with adjectives such as tired or happy."
    },
    "q": "Choose: I ___ happy today.",
    "answers": [
      "am",
      "have",
      "do"
    ],
    "correct": 0,
    "explain": "Use “am” with “I” + adjective.",
    "challenge": "Say how you feel today and why.",
    "level": "A1"
  },
  {
    "id": "a1-simple-past-was-were",
    "title": "Yesterday: Was and Were",
    "icon": "🕰️",
    "time": "5 min",
    "desc": "Say where you were and how you felt yesterday.",
    "objective": "Use was and were in simple past statements.",
    "phrases": [
      [
        "I was at home yesterday.",
        "كنت في المنزل أمس."
      ],
      [
        "She was tired.",
        "كانت متعبة."
      ],
      [
        "We were at work.",
        "كنا في العمل."
      ],
      [
        "Were you busy?",
        "هل كنت مشغولاً؟"
      ]
    ],
    "vocabulary": [
      [
        "yesterday",
        "أمس"
      ],
      [
        "busy",
        "مشغول"
      ],
      [
        "at home",
        "في المنزل"
      ],
      [
        "last night",
        "الليلة الماضية"
      ]
    ],
    "grammar": {
      "title": "Was / were",
      "explanation": "Use was with I/he/she/it and were with you/we/they.",
      "examples": [
        [
          "I was at home yesterday.",
          "كنت في المنزل أمس."
        ],
        [
          "She was tired.",
          "كانت متعبة."
        ]
      ]
    },
    "conversation": [
      [
        "A: Were you at home yesterday?",
        "أ: هل كنت في المنزل أمس؟"
      ],
      [
        "B: Yes, I was.",
        "ب: نعم."
      ]
    ],
    "mistake": {
      "wrong": "I were tired.",
      "correct": "I was tired.",
      "explanation": "Use “was” with “I”."
    },
    "q": "Choose: They ___ at home yesterday.",
    "answers": [
      "was",
      "were",
      "are"
    ],
    "correct": 1,
    "explain": "Use “were” with “they”.",
    "challenge": "Say where you were yesterday and how you felt.",
    "level": "A1"
  },
  {
    "id": "a1-weekend-plans",
    "title": "Weekend Plans",
    "icon": "📅",
    "time": "5 min",
    "desc": "Talk about simple plans.",
    "objective": "Say what you want or plan to do.",
    "phrases": [
      [
        "I’m going to visit my friend.",
        "سأزور صديقي."
      ],
      [
        "What are you going to do?",
        "ماذا ستفعل؟"
      ],
      [
        "I want to relax.",
        "أريد الاسترخاء."
      ],
      [
        "Maybe we can meet.",
        "ربما يمكننا اللقاء."
      ]
    ],
    "vocabulary": [
      [
        "weekend",
        "عطلة نهاية الأسبوع"
      ],
      [
        "visit",
        "يزور"
      ],
      [
        "relax",
        "يسترخي"
      ],
      [
        "plan",
        "خطة"
      ]
    ],
    "grammar": {
      "title": "Want to + verb; going to",
      "explanation": "Use “want to” + base verb. Use “be going to” for a plan.",
      "examples": [
        [
          "I’m going to visit my friend.",
          "سأزور صديقي."
        ],
        [
          "What are you going to do?",
          "ماذا ستفعل؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: What are you going to do on Friday?",
        "أ: ماذا ستفعل يوم الجمعة؟"
      ],
      [
        "B: I’m going to visit my family.",
        "ب: سأزور أسرتي."
      ]
    ],
    "mistake": {
      "wrong": "I want visit my family.",
      "correct": "I want to visit my family.",
      "explanation": "Use “to” after “want” before another verb."
    },
    "q": "Complete: I want ___ learn English.",
    "answers": [
      "for",
      "to",
      "at"
    ],
    "correct": 1,
    "explain": "The pattern is “want to + verb”.",
    "challenge": "Tell someone two plans for your next day off.",
    "level": "A1"
  },
  {
    "id": "a1-review-first-conversation",
    "title": "Your First Full Conversation",
    "icon": "💬",
    "time": "5 min",
    "desc": "Combine what you learned in a short conversation.",
    "objective": "Introduce yourself, talk about routines, likes, and simple plans.",
    "phrases": [
      [
        "Let me introduce myself.",
        "دعني أعرّف بنفسي."
      ],
      [
        "I usually…",
        "عادةً أنا…"
      ],
      [
        "I like…",
        "أحب…"
      ],
      [
        "I’m going to…",
        "سوف…"
      ]
    ],
    "vocabulary": [
      [
        "usually",
        "عادةً"
      ],
      [
        "because",
        "لأن"
      ],
      [
        "also",
        "أيضاً"
      ],
      [
        "conversation",
        "محادثة"
      ]
    ],
    "grammar": {
      "title": "Review: present simple and going to",
      "explanation": "Use present simple for routines and “going to” for plans. Connect ideas with “and” or “because”.",
      "examples": [
        [
          "Let me introduce myself.",
          "دعني أعرّف بنفسي."
        ],
        [
          "I usually…",
          "عادةً أنا…"
        ]
      ]
    },
    "conversation": [
      [
        "A: Tell me about yourself.",
        "أ: أخبرني عن نفسك."
      ],
      [
        "B: I’m Mona. I’m from Sudan. I study English, and I like reading.",
        "ب: أنا منى. أنا من السودان. أدرس الإنجليزية وأحب القراءة."
      ]
    ],
    "mistake": {
      "wrong": "I am like reading.",
      "correct": "I like reading.",
      "explanation": "Use “like” as a main verb, without “am”."
    },
    "q": "Which sentence gives basic personal information correctly?",
    "answers": [
      "I from Sudan and like tea.",
      "I’m from Sudan, and I like tea.",
      "I am from Sudan and I am like tea."
    ],
    "correct": 1,
    "explain": "The second sentence uses “I’m from” and “I like” correctly.",
    "challenge": "Speak for 60 seconds: introduce yourself, describe your routine, and share one plan.",
    "level": "A1"
  }
,
  // Existing A2 course: 30 lessons (preserved)
{
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
  },
  // B1 intermediate course: 30 lessons
  
  {
    "id": "b1-life-experiences",
    "title": "Talking About Life Experiences",
    "icon": "🌍",
    "time": "8 min",
    "desc": "Talk about experiences you have had and things you have never done.",
    "objective": "Use the present perfect to talk about life experiences.",
    "phrases": [
      [
        "Have you ever travelled abroad?",
        "هل سبق أن سافرت إلى الخارج؟"
      ],
      [
        "I have visited Egypt twice.",
        "زرت مصر مرتين."
      ],
      [
        "I have never tried sushi.",
        "لم أجرب السوشي من قبل."
      ],
      [
        "That sounds like an amazing experience.",
        "تبدو تجربة رائعة."
      ]
    ],
    "vocabulary": [
      [
        "experience",
        "تجربة / خبرة"
      ],
      [
        "abroad",
        "إلى الخارج"
      ],
      [
        "ever",
        "في أي وقت / سبق أن"
      ],
      [
        "recently",
        "مؤخراً"
      ]
    ],
    "grammar": {
      "title": "Present perfect for experiences",
      "explanation": "نستخدم have/has + التصريف الثالث للتحدث عن تجارب الحياة دون تحديد وقت ماضٍ. السؤال: Have you ever…?",
      "examples": [
        [
          "I have tried horse riding.",
          "جربت ركوب الخيل."
        ],
        [
          "She has never travelled abroad.",
          "لم تسافر إلى الخارج من قبل."
        ]
      ]
    },
    "conversation": [
      [
        "A: Have you ever lived in another city?",
        "أ: هل سبق أن عشت في مدينة أخرى؟"
      ],
      [
        "B: Yes, I have. I lived in Tripoli for a year.",
        "ب: نعم. عشت في طرابلس لمدة سنة."
      ],
      [
        "A: What was it like?",
        "أ: كيف كانت التجربة؟"
      ],
      [
        "B: It was exciting, and I made new friends.",
        "ب: كانت ممتعة وتعرفت على أصدقاء جدد."
      ]
    ],
    "mistake": {
      "wrong": "I have went to Cairo.",
      "correct": "I have been to Cairo.",
      "explanation": "بعد have/has نستخدم التصريف الثالث: been وليس went."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I have saw that film.",
      "I have seen that film.",
      "I has seen that film."
    ],
    "correct": 1,
    "explain": "Present perfect uses have/has + past participle: have seen.",
    "challenge": "Talk for one minute about three things you have done and one thing you have never done.",
    "level": "B1"
  },
  {
    "id": "b1-past-storytelling",
    "title": "Telling a Story in the Past",
    "icon": "📖",
    "time": "8 min",
    "desc": "Tell a clear story using past simple and past continuous.",
    "objective": "Describe what happened and what was in progress.",
    "phrases": [
      [
        "I was walking home when…",
        "كنت أمشي إلى المنزل عندما…"
      ],
      [
        "Suddenly, I heard a noise.",
        "فجأة سمعت صوتاً."
      ],
      [
        "While I was waiting, it started to rain.",
        "بينما كنت أنتظر، بدأ المطر."
      ],
      [
        "In the end, everything was fine.",
        "في النهاية، كان كل شيء بخير."
      ]
    ],
    "vocabulary": [
      [
        "suddenly",
        "فجأة"
      ],
      [
        "while",
        "بينما"
      ],
      [
        "in the end",
        "في النهاية"
      ],
      [
        "happen",
        "يحدث"
      ]
    ],
    "grammar": {
      "title": "Past simple vs past continuous",
      "explanation": "نستخدم الماضي المستمر للخلفية أو الفعل المستمر، والماضي البسيط للحدث الذي قطعه أو حدث بعده.",
      "examples": [
        [
          "I was cooking when the phone rang.",
          "كنت أطبخ عندما رن الهاتف."
        ],
        [
          "They were driving when it started to snow.",
          "كانوا يقودون عندما بدأ الثلج يتساقط."
        ]
      ]
    },
    "conversation": [
      [
        "A: What happened yesterday?",
        "أ: ماذا حدث أمس؟"
      ],
      [
        "B: I was going to work when my bus broke down.",
        "ب: كنت ذاهباً إلى العمل عندما تعطلت الحافلة."
      ],
      [
        "A: What did you do?",
        "أ: ماذا فعلت؟"
      ],
      [
        "B: I called my manager and took a taxi.",
        "ب: اتصلت بمديري واستقللت سيارة أجرة."
      ]
    ],
    "mistake": {
      "wrong": "I cooked when he was arriving.",
      "correct": "I was cooking when he arrived.",
      "explanation": "الفعل المستمر يشكل خلفية الحدث، والحدث القصير يأتي غالباً بالماضي البسيط."
    },
    "q": "Choose the best sentence.",
    "answers": [
      "I was sleeping when the alarm rang.",
      "I sleeping when the alarm rang.",
      "I was sleep when the alarm rang."
    ],
    "correct": 0,
    "explain": "Use was/were + verb-ing for the action in progress.",
    "challenge": "Tell a short story about a surprising moment using “while”, “when”, and “suddenly”.",
    "level": "B1"
  },
  {
    "id": "b1-future-plans-predictions",
    "title": "Future Plans and Predictions",
    "icon": "🔮",
    "time": "8 min",
    "desc": "Explain your plans, intentions, and predictions.",
    "objective": "Choose between will, going to, and present continuous for the future.",
    "phrases": [
      [
        "I’m planning to take a course.",
        "أخطط للالتحاق بدورة."
      ],
      [
        "I’m going to apply for a new job.",
        "سأتقدم لوظيفة جديدة."
      ],
      [
        "I think it will be easier.",
        "أعتقد أنه سيكون أسهل."
      ],
      [
        "I’m meeting my friend tomorrow.",
        "سأقابل صديقي غداً."
      ]
    ],
    "vocabulary": [
      [
        "plan",
        "خطة / يخطط"
      ],
      [
        "intend",
        "ينوي"
      ],
      [
        "prediction",
        "توقع"
      ],
      [
        "arrangement",
        "ترتيب مسبق"
      ]
    ],
    "grammar": {
      "title": "Ways to talk about the future",
      "explanation": "going to للنية أو الدليل الواضح، will للتوقع أو القرار اللحظي، والمضارع المستمر للترتيبات المؤكدة.",
      "examples": [
        [
          "Look at those clouds. It’s going to rain.",
          "انظر إلى تلك الغيوم. ستمطر."
        ],
        [
          "I’ll answer the phone.",
          "سأرد على الهاتف."
        ]
      ]
    },
    "conversation": [
      [
        "A: What are you doing this weekend?",
        "أ: ماذا ستفعل في نهاية الأسبوع؟"
      ],
      [
        "B: I’m visiting my cousin on Saturday.",
        "ب: سأزور ابن عمي يوم السبت."
      ],
      [
        "A: Are you going to study on Sunday?",
        "أ: هل تنوي الدراسة يوم الأحد؟"
      ],
      [
        "B: Yes, I’m going to finish my assignment.",
        "ب: نعم، سأكمل واجبي."
      ]
    ],
    "mistake": {
      "wrong": "I will to call you tonight.",
      "correct": "I will call you tonight.",
      "explanation": "بعد will نستخدم الفعل في صورته الأساسية دون to."
    },
    "q": "Which sentence describes a fixed arrangement?",
    "answers": [
      "I’m meeting Lina at six.",
      "I meet Lina yesterday.",
      "I going meet Lina at six."
    ],
    "correct": 0,
    "explain": "Present continuous can describe an arranged future event.",
    "challenge": "Describe three plans for next week and make two predictions about the future.",
    "level": "B1"
  },
  {
    "id": "b1-opinions-reasons",
    "title": "Giving Opinions and Reasons",
    "icon": "💬",
    "time": "8 min",
    "desc": "Share your opinion and support it with clear reasons.",
    "objective": "Use opinion phrases and linking words to explain your point of view.",
    "phrases": [
      [
        "In my opinion, online learning is useful.",
        "في رأيي، التعلم عبر الإنترنت مفيد."
      ],
      [
        "The main reason is that it saves time.",
        "السبب الرئيسي هو أنه يوفر الوقت."
      ],
      [
        "I see your point, but…",
        "أتفهم وجهة نظرك، لكن…"
      ],
      [
        "As far as I’m concerned…",
        "بالنسبة لي…"
      ]
    ],
    "vocabulary": [
      [
        "opinion",
        "رأي"
      ],
      [
        "reason",
        "سبب"
      ],
      [
        "point of view",
        "وجهة نظر"
      ],
      [
        "benefit",
        "فائدة"
      ]
    ],
    "grammar": {
      "title": "Linking opinions and reasons",
      "explanation": "استخدم because لتقديم السبب، however للتباين، وalso لإضافة فكرة. اربط رأيك بسبب أو مثال.",
      "examples": [
        [
          "I prefer buses because they are cheaper.",
          "أفضل الحافلات لأنها أرخص."
        ],
        [
          "Online courses are flexible; however, they require self-discipline.",
          "الدورات عبر الإنترنت مرنة، لكنها تتطلب انضباطاً ذاتياً."
        ]
      ]
    },
    "conversation": [
      [
        "A: Do you think everyone should learn English?",
        "أ: هل تعتقد أن على الجميع تعلم الإنجليزية؟"
      ],
      [
        "B: In my opinion, it is useful for work and travel.",
        "ب: في رأيي، هي مفيدة للعمل والسفر."
      ],
      [
        "A: That’s true, but it can be expensive.",
        "أ: هذا صحيح، لكنها قد تكون مكلفة."
      ],
      [
        "B: I agree. Free online resources can help.",
        "ب: أتفق. يمكن أن تساعد المصادر المجانية عبر الإنترنت."
      ]
    ],
    "mistake": {
      "wrong": "In my opinion, because it is useful.",
      "correct": "In my opinion, it is useful because it helps me at work.",
      "explanation": "الرأي يحتاج إلى جملة مكتملة، ويمكن إضافة السبب باستخدام because."
    },
    "q": "Which phrase introduces a reason?",
    "answers": [
      "However",
      "Because",
      "For example"
    ],
    "correct": 1,
    "explain": "Because introduces the reason for an opinion or action.",
    "challenge": "Give your opinion about learning online and support it with two reasons and one example.",
    "level": "B1"
  },
  {
    "id": "b1-agreeing-disagreeing",
    "title": "Agreeing and Disagreeing Politely",
    "icon": "🤝",
    "time": "8 min",
    "desc": "Respond respectfully when someone has a different opinion.",
    "objective": "Agree, partly agree, or disagree without sounding rude.",
    "phrases": [
      [
        "I completely agree with you.",
        "أتفق معك تماماً."
      ],
      [
        "I’m not sure I agree.",
        "لست متأكداً من أنني أتفق."
      ],
      [
        "You may be right, but…",
        "قد تكون محقاً، لكن…"
      ],
      [
        "That’s a fair point.",
        "هذه وجهة نظر وجيهة."
      ]
    ],
    "vocabulary": [
      [
        "completely",
        "تماماً"
      ],
      [
        "partly",
        "جزئياً"
      ],
      [
        "respectful",
        "محترم"
      ],
      [
        "fair point",
        "نقطة وجيهة"
      ]
    ],
    "grammar": {
      "title": "Softening disagreement",
      "explanation": "استخدم عبارات تمهيدية مثل I see what you mean وI’m not sure بدل الرفض المباشر. أضف but لتقديم وجهة نظرك.",
      "examples": [
        [
          "I see what you mean, but I prefer the other option.",
          "أفهم قصدك، لكنني أفضل الخيار الآخر."
        ],
        [
          "I partly agree because the situation is different for everyone.",
          "أتفق جزئياً لأن الوضع يختلف من شخص لآخر."
        ]
      ]
    },
    "conversation": [
      [
        "A: I think working from home is always better.",
        "أ: أعتقد أن العمل من المنزل أفضل دائماً."
      ],
      [
        "B: I see your point, but some people need an office.",
        "ب: أفهم وجهة نظرك، لكن بعض الناس يحتاجون إلى مكتب."
      ],
      [
        "A: That’s a fair point.",
        "أ: هذه وجهة نظر وجيهة."
      ],
      [
        "B: It depends on the job, I think.",
        "ب: أعتقد أن الأمر يعتمد على الوظيفة."
      ]
    ],
    "mistake": {
      "wrong": "You are wrong.",
      "correct": "I see it differently.",
      "explanation": "العبارة الثانية ألطف وتسمح بمناقشة الفكرة دون مهاجمة الشخص."
    },
    "q": "Which is the most polite disagreement?",
    "answers": [
      "That’s stupid.",
      "You know nothing.",
      "I see your point, but I think differently."
    ],
    "correct": 2,
    "explain": "Acknowledge the other person’s view before explaining your disagreement.",
    "challenge": "Discuss whether phones should be allowed in class. Agree with one point and politely disagree with another.",
    "level": "B1"
  },
  {
    "id": "b1-comparisons-choices",
    "title": "Comparing Options and Making Choices",
    "icon": "⚖️",
    "time": "8 min",
    "desc": "Compare choices and explain which one suits you best.",
    "objective": "Use comparative forms and phrases for evaluating options.",
    "phrases": [
      [
        "This option is more affordable.",
        "هذا الخيار أقل تكلفة."
      ],
      [
        "It’s not as convenient as the other one.",
        "إنه ليس مريحاً بقدر الخيار الآخر."
      ],
      [
        "The biggest advantage is…",
        "أكبر ميزة هي…"
      ],
      [
        "I’d rather choose the second option.",
        "أفضل اختيار الخيار الثاني."
      ]
    ],
    "vocabulary": [
      [
        "affordable",
        "ميسور التكلفة"
      ],
      [
        "convenient",
        "مريح / مناسب"
      ],
      [
        "advantage",
        "ميزة"
      ],
      [
        "drawback",
        "عيب"
      ]
    ],
    "grammar": {
      "title": "Comparatives and “as…as”",
      "explanation": "نستخدم -er أو more للمقارنة، وas + adjective + as للتساوي. بعض الصفات شاذة مثل good → better.",
      "examples": [
        [
          "The train is faster than the bus.",
          "القطار أسرع من الحافلة."
        ],
        [
          "This phone is as reliable as my old one.",
          "هذا الهاتف موثوق بقدر هاتفي القديم."
        ]
      ]
    },
    "conversation": [
      [
        "A: Which course would you choose?",
        "أ: أي دورة ستختار؟"
      ],
      [
        "B: The evening course. It’s more convenient for me.",
        "ب: الدورة المسائية. فهي أنسب لي."
      ],
      [
        "A: But the morning course is shorter.",
        "أ: لكن الدورة الصباحية أقصر."
      ],
      [
        "B: True, but the evening course fits my schedule better.",
        "ب: صحيح، لكن المسائية تناسب جدولي أكثر."
      ]
    ],
    "mistake": {
      "wrong": "This one is more cheaper.",
      "correct": "This one is cheaper.",
      "explanation": "لا نستخدم more مع الصفة التي أخذت -er في المقارنة."
    },
    "q": "Choose the correct comparison.",
    "answers": [
      "This route is more shorter.",
      "This route is shorter than that one.",
      "This route shorter that one."
    ],
    "correct": 1,
    "explain": "Use adjective + -er + than for short adjectives.",
    "challenge": "Compare two ways of learning English and explain which one is better for you.",
    "level": "B1"
  },
  {
    "id": "b1-problem-solving",
    "title": "Explaining Problems and Finding Solutions",
    "icon": "🧩",
    "time": "8 min",
    "desc": "Describe a problem and suggest practical solutions.",
    "objective": "Use should, could, and why don’t you to make suggestions.",
    "phrases": [
      [
        "I’m having trouble with my internet.",
        "أواجه مشكلة في الإنترنت."
      ],
      [
        "One possible solution is…",
        "أحد الحلول الممكنة هو…"
      ],
      [
        "You could try restarting it.",
        "يمكنك تجربة إعادة تشغيله."
      ],
      [
        "Have you thought about…?",
        "هل فكرت في…؟"
      ]
    ],
    "vocabulary": [
      [
        "solution",
        "حل"
      ],
      [
        "issue",
        "مشكلة / مسألة"
      ],
      [
        "suggest",
        "يقترح"
      ],
      [
        "fix",
        "يصلح"
      ]
    ],
    "grammar": {
      "title": "Suggestions with should, could, and why don’t you",
      "explanation": "should للنصيحة، could لاقتراح خيار، وWhy don’t you…? لاقتراح مباشر لكنه ودود.",
      "examples": [
        [
          "You should save a copy of your work.",
          "ينبغي أن تحفظ نسخة من عملك."
        ],
        [
          "Why don’t you ask your teacher for help?",
          "لماذا لا تطلب المساعدة من معلمك؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: I can’t concentrate when I study at home.",
        "أ: لا أستطيع التركيز عندما أدرس في المنزل."
      ],
      [
        "B: You could study in a quieter room.",
        "ب: يمكنك الدراسة في غرفة أكثر هدوءاً."
      ],
      [
        "A: I’ve tried that, but my phone distracts me.",
        "أ: جربت ذلك، لكن هاتفي يشتت انتباهي."
      ],
      [
        "B: Why don’t you put it in another room?",
        "ب: لماذا لا تضعه في غرفة أخرى؟"
      ]
    ],
    "mistake": {
      "wrong": "You should to rest.",
      "correct": "You should rest.",
      "explanation": "بعد should وcould نستخدم الفعل الأساسي دون to."
    },
    "q": "Choose the correct suggestion.",
    "answers": [
      "You should to call them.",
      "You should call them.",
      "You should calling them."
    ],
    "correct": 1,
    "explain": "Should is followed by the base form of the verb.",
    "challenge": "Describe a real study or work problem and suggest two possible solutions.",
    "level": "B1"
  },
  {
    "id": "b1-work-skills",
    "title": "Talking About Work and Skills",
    "icon": "💼",
    "time": "8 min",
    "desc": "Describe your skills, responsibilities, and career goals.",
    "objective": "Talk about strengths and work experience clearly.",
    "phrases": [
      [
        "I’m responsible for organising the files.",
        "أنا مسؤول عن تنظيم الملفات."
      ],
      [
        "I have experience in customer service.",
        "لدي خبرة في خدمة العملاء."
      ],
      [
        "One of my strengths is problem-solving.",
        "إحدى نقاط قوتي هي حل المشكلات."
      ],
      [
        "I’m hoping to develop my communication skills.",
        "آمل تطوير مهارات التواصل لدي."
      ]
    ],
    "vocabulary": [
      [
        "responsible for",
        "مسؤول عن"
      ],
      [
        "strength",
        "نقطة قوة"
      ],
      [
        "experience",
        "خبرة"
      ],
      [
        "develop",
        "يطوّر"
      ]
    ],
    "grammar": {
      "title": "Verb patterns: enjoy, want, good at",
      "explanation": "بعد enjoy نستخدم الفعل + ing، وبعد want نستخدم to + verb، وبعد good at نستخدم اسماً أو فعلاً + ing.",
      "examples": [
        [
          "I enjoy working with people.",
          "أستمتع بالعمل مع الناس."
        ],
        [
          "I want to improve my writing.",
          "أريد تحسين كتابتي."
        ]
      ]
    },
    "conversation": [
      [
        "A: What are your main strengths?",
        "أ: ما أهم نقاط قوتك؟"
      ],
      [
        "B: I’m organised, and I learn new systems quickly.",
        "ب: أنا منظم وأتعلم الأنظمة الجديدة بسرعة."
      ],
      [
        "A: What would you like to improve?",
        "أ: ماذا تريد أن تطور؟"
      ],
      [
        "B: I’d like to become more confident when speaking in meetings.",
        "ب: أود أن أصبح أكثر ثقة عند التحدث في الاجتماعات."
      ]
    ],
    "mistake": {
      "wrong": "I enjoy to work in a team.",
      "correct": "I enjoy working in a team.",
      "explanation": "بعد enjoy نستخدم الفعل مع ing."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I want improving my English.",
      "I enjoy to learn.",
      "I’m good at solving problems."
    ],
    "correct": 2,
    "explain": "Good at is followed by a noun or an -ing form.",
    "challenge": "Introduce your skills as if you were answering an interview question.",
    "level": "B1"
  },
  {
    "id": "b1-email-informal",
    "title": "Writing Friendly Emails and Messages",
    "icon": "✉️",
    "time": "8 min",
    "desc": "Write a friendly message to invite someone or share news.",
    "objective": "Organise an informal email with a greeting, message, and closing.",
    "phrases": [
      [
        "How have you been?",
        "كيف حالك؟"
      ],
      [
        "I’m writing to tell you that…",
        "أكتب إليك لأخبرك أن…"
      ],
      [
        "Would you like to come along?",
        "هل تود أن تأتي معنا؟"
      ],
      [
        "Let me know what you think.",
        "أخبرني برأيك."
      ]
    ],
    "vocabulary": [
      [
        "catch up",
        "يتبادل الأخبار"
      ],
      [
        "invite",
        "يدعو"
      ],
      [
        "by the way",
        "بالمناسبة"
      ],
      [
        "looking forward to",
        "يتطلع إلى"
      ]
    ],
    "grammar": {
      "title": "Informal language and question forms",
      "explanation": "الرسائل الودية تستخدم اختصارات مثل I’m وwe’re، وأسئلة لطيفة مثل Would you like…?، مع بداية ونهاية مناسبتين.",
      "examples": [
        [
          "Hi Sara, how are things?",
          "مرحباً سارة، كيف الأحوال؟"
        ],
        [
          "Write back when you get a chance.",
          "اكتبي لي عندما تتاح لك الفرصة."
        ]
      ]
    },
    "conversation": [
      [
        "A: Are you free on Friday?",
        "أ: هل أنت متفرغ يوم الجمعة؟"
      ],
      [
        "B: I think so. What do you have in mind?",
        "ب: أعتقد ذلك. ماذا تقترح؟"
      ],
      [
        "A: I’m having a small get-together at my place.",
        "أ: سأقيم تجمعاً صغيراً في منزلي."
      ],
      [
        "B: Sounds great! Thanks for inviting me.",
        "ب: يبدو رائعاً! شكراً على دعوتي."
      ]
    ],
    "mistake": {
      "wrong": "Dear my friend Sara,",
      "correct": "Hi Sara,",
      "explanation": "في رسالة ودية، “Hi Sara” أو “Hello Sara” طبيعية أكثر."
    },
    "q": "Which closing is suitable for a friendly email?",
    "answers": [
      "Yours faithfully,",
      "Best wishes,",
      "To whom it may concern,"
    ],
    "correct": 1,
    "explain": "“Best wishes” is a common friendly email closing.",
    "challenge": "Write a short message inviting a friend to an event and asking them to reply.",
    "level": "B1"
  },
  {
    "id": "b1-formal-email",
    "title": "Writing Clear and Polite Formal Emails",
    "icon": "📨",
    "time": "8 min",
    "desc": "Make requests and ask for information professionally.",
    "objective": "Use polite formal language in emails.",
    "phrases": [
      [
        "I am writing to enquire about…",
        "أكتب للاستفسار عن…"
      ],
      [
        "I would be grateful if you could…",
        "سأكون ممتناً إذا أمكنك…"
      ],
      [
        "Could you please provide further details?",
        "هل يمكنك تقديم تفاصيل إضافية؟"
      ],
      [
        "Thank you for your time and assistance.",
        "شكراً لوقتك ومساعدتك."
      ]
    ],
    "vocabulary": [
      [
        "enquire",
        "يستفسر"
      ],
      [
        "assistance",
        "مساعدة"
      ],
      [
        "further details",
        "تفاصيل إضافية"
      ],
      [
        "regarding",
        "بخصوص"
      ]
    ],
    "grammar": {
      "title": "Polite requests with could and would",
      "explanation": "استخدم Could you…? وI would be grateful if… لطلب شيء بطريقة مهنية. تجنب الأوامر المباشرة في الرسائل الرسمية.",
      "examples": [
        [
          "Could you please confirm the date?",
          "هل يمكنك تأكيد التاريخ من فضلك؟"
        ],
        [
          "I would appreciate it if you replied by Thursday.",
          "سأقدّر ردك بحلول الخميس."
        ]
      ]
    },
    "conversation": [
      [
        "A: How can I help you?",
        "أ: كيف يمكنني مساعدتك؟"
      ],
      [
        "B: I’m writing to enquire about the training programme.",
        "ب: أكتب للاستفسار عن البرنامج التدريبي."
      ],
      [
        "A: Which details do you need?",
        "أ: ما التفاصيل التي تحتاجها؟"
      ],
      [
        "B: Could you please tell me the application deadline?",
        "ب: هل يمكنك إخباري بموعد انتهاء التقديم؟"
      ]
    ],
    "mistake": {
      "wrong": "Send me the information now.",
      "correct": "Could you please send me the information?",
      "explanation": "الطلب بصيغة سؤال مهذب أنسب في المراسلات الرسمية."
    },
    "q": "Choose the most professional request.",
    "answers": [
      "Give me the form.",
      "I want the form now.",
      "Could you please send me the form?"
    ],
    "correct": 2,
    "explain": "“Could you please…?” is polite and professional.",
    "challenge": "Write a formal email asking for information about a course, including a greeting and closing.",
    "level": "B1"
  },
  {
    "id": "b1-travel-plans",
    "title": "Travel Plans and Arrangements",
    "icon": "🧳",
    "time": "8 min",
    "desc": "Discuss bookings, transport, and travel arrangements.",
    "objective": "Ask for travel information and describe plans.",
    "phrases": [
      [
        "I’d like to book a room for two nights.",
        "أود حجز غرفة لليلتين."
      ],
      [
        "Is breakfast included?",
        "هل الإفطار مشمول؟"
      ],
      [
        "What time does the train leave?",
        "متى يغادر القطار؟"
      ],
      [
        "Could you confirm my reservation?",
        "هل يمكنك تأكيد حجزي؟"
      ]
    ],
    "vocabulary": [
      [
        "reservation",
        "حجز"
      ],
      [
        "departure",
        "مغادرة"
      ],
      [
        "destination",
        "وجهة"
      ],
      [
        "included",
        "مشمول"
      ]
    ],
    "grammar": {
      "title": "Indirect questions for politeness",
      "explanation": "في السؤال غير المباشر، نستخدم ترتيب الجملة العادي بعد عبارة مثل Could you tell me…?",
      "examples": [
        [
          "Could you tell me where the station is?",
          "هل يمكنك إخباري أين تقع المحطة؟"
        ],
        [
          "Do you know when the bus arrives?",
          "هل تعرف متى تصل الحافلة؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: Good afternoon. How can I help?",
        "أ: مساء الخير. كيف أساعدك؟"
      ],
      [
        "B: I’d like to check my reservation for tomorrow.",
        "ب: أود التأكد من حجزي ليوم غد."
      ],
      [
        "A: Certainly. Could I have your name, please?",
        "أ: بالتأكيد. هل يمكنني معرفة اسمك؟"
      ],
      [
        "B: It’s Musa. Is breakfast included?",
        "ب: اسمي موسى. هل الإفطار مشمول؟"
      ]
    ],
    "mistake": {
      "wrong": "Can you tell me where is the airport?",
      "correct": "Can you tell me where the airport is?",
      "explanation": "في السؤال غير المباشر نستخدم ترتيب الجملة: subject + verb."
    },
    "q": "Choose the correct indirect question.",
    "answers": [
      "Do you know where is the hotel?",
      "Do you know where the hotel is?",
      "Do you know where hotel is the?"
    ],
    "correct": 1,
    "explain": "Indirect questions use normal statement word order.",
    "challenge": "Role-play booking a hotel room and asking about check-in, breakfast, and transport.",
    "level": "B1"
  },
  {
    "id": "b1-technology-digital-life",
    "title": "Technology and Digital Life",
    "icon": "📱",
    "time": "8 min",
    "desc": "Discuss how technology affects daily life.",
    "objective": "Describe advantages and disadvantages of technology.",
    "phrases": [
      [
        "Technology has made it easier to…",
        "جعلت التكنولوجيا من الأسهل أن…"
      ],
      [
        "One drawback is that…",
        "أحد العيوب هو أن…"
      ],
      [
        "I rely on my phone to…",
        "أعتمد على هاتفي من أجل…"
      ],
      [
        "It can be useful as long as…",
        "يمكن أن يكون مفيداً ما دام…"
      ]
    ],
    "vocabulary": [
      [
        "device",
        "جهاز"
      ],
      [
        "rely on",
        "يعتمد على"
      ],
      [
        "privacy",
        "الخصوصية"
      ],
      [
        "screen time",
        "وقت استخدام الشاشة"
      ]
    ],
    "grammar": {
      "title": "First conditional and “as long as”",
      "explanation": "نستخدم if/as long as + present simple، ثم will أو can للتحدث عن نتيجة محتملة في المستقبل.",
      "examples": [
        [
          "If you back up your files, you won’t lose them easily.",
          "إذا أنشأت نسخة احتياطية لملفاتك فلن تفقدها بسهولة."
        ],
        [
          "You can use the app as long as you protect your password.",
          "يمكنك استخدام التطبيق ما دمت تحمي كلمة مرورك."
        ]
      ]
    },
    "conversation": [
      [
        "A: Do you think people use their phones too much?",
        "أ: هل تعتقد أن الناس يستخدمون هواتفهم كثيراً؟"
      ],
      [
        "B: Sometimes. Phones are helpful, but they can distract us.",
        "ب: أحياناً. الهواتف مفيدة، لكنها قد تشتت انتباهنا."
      ],
      [
        "A: How do you manage your screen time?",
        "أ: كيف تدير وقت الشاشة؟"
      ],
      [
        "B: I turn off notifications when I study.",
        "ب: أوقف الإشعارات عندما أدرس."
      ]
    ],
    "mistake": {
      "wrong": "If I will have time, I will call you.",
      "correct": "If I have time, I will call you.",
      "explanation": "في جملة الشرط الأولى نستخدم المضارع البسيط بعد if، وليس will."
    },
    "q": "Choose the correct first conditional.",
    "answers": [
      "If it rains, we will stay inside.",
      "If it will rain, we stay inside.",
      "If it rain, we will stay inside."
    ],
    "correct": 0,
    "explain": "If + present simple, will + base verb.",
    "challenge": "Give two benefits and two drawbacks of smartphones, then explain how to use them wisely.",
    "level": "B1"
  },
  {
    "id": "b1-environment",
    "title": "The Environment and Everyday Choices",
    "icon": "🌱",
    "time": "8 min",
    "desc": "Talk about environmental problems and practical actions.",
    "objective": "Use environmental vocabulary and suggest ways to reduce waste.",
    "phrases": [
      [
        "We should reduce plastic waste.",
        "ينبغي أن نقلل النفايات البلاستيكية."
      ],
      [
        "Public transport produces less pollution.",
        "تنتج وسائل النقل العام تلوثاً أقل."
      ],
      [
        "Small changes can make a difference.",
        "يمكن للتغييرات الصغيرة أن تحدث فرقاً."
      ],
      [
        "I try to reuse bags whenever possible.",
        "أحاول إعادة استخدام الأكياس كلما أمكن."
      ]
    ],
    "vocabulary": [
      [
        "pollution",
        "تلوث"
      ],
      [
        "recycle",
        "يعيد التدوير"
      ],
      [
        "waste",
        "نفايات / يهدر"
      ],
      [
        "renewable energy",
        "طاقة متجددة"
      ]
    ],
    "grammar": {
      "title": "Modal verbs for obligation and possibility",
      "explanation": "must وhave to للتعبير عن الضرورة، should للنصيحة، وmight للتعبير عن احتمال.",
      "examples": [
        [
          "We have to protect clean water.",
          "علينا حماية المياه النظيفة."
        ],
        [
          "Solar power might become cheaper.",
          "قد تصبح الطاقة الشمسية أقل تكلفة."
        ]
      ]
    },
    "conversation": [
      [
        "A: What can people do to help the environment?",
        "أ: ماذا يمكن للناس أن يفعلوا لمساعدة البيئة؟"
      ],
      [
        "B: They can use reusable bottles and bags.",
        "ب: يمكنهم استخدام زجاجات وأكياس قابلة لإعادة الاستخدام."
      ],
      [
        "A: Is recycling enough?",
        "أ: هل إعادة التدوير كافية؟"
      ],
      [
        "B: It helps, but we should also buy less unnecessary stuff.",
        "ب: إنها مفيدة، لكن ينبغي أيضاً شراء أشياء غير ضرورية أقل."
      ]
    ],
    "mistake": {
      "wrong": "People must to recycle more.",
      "correct": "People must recycle more.",
      "explanation": "بعد must نستخدم الفعل الأساسي دون to."
    },
    "q": "Which sentence expresses advice?",
    "answers": [
      "You should reuse containers.",
      "You reused containers yesterday.",
      "You are a container."
    ],
    "correct": 0,
    "explain": "Should is commonly used to give advice.",
    "challenge": "Suggest three realistic changes a family can make to reduce waste.",
    "level": "B1"
  },
  {
    "id": "b1-learning-strategies",
    "title": "Learning Strategies and Study Habits",
    "icon": "📚",
    "time": "8 min",
    "desc": "Explain how you learn and make a realistic study plan.",
    "objective": "Use gerunds and infinitives to talk about learning habits.",
    "phrases": [
      [
        "I find it helpful to review notes daily.",
        "أجد أن مراجعة الملاحظات يومياً مفيدة."
      ],
      [
        "I struggle to remember new words.",
        "أجد صعوبة في تذكر الكلمات الجديدة."
      ],
      [
        "I’ve started listening to podcasts.",
        "بدأت الاستماع إلى البودكاست."
      ],
      [
        "I’m getting better at speaking.",
        "أتحسن في التحدث."
      ]
    ],
    "vocabulary": [
      [
        "review",
        "يراجع"
      ],
      [
        "memorise",
        "يحفظ"
      ],
      [
        "progress",
        "تقدم"
      ],
      [
        "consistent",
        "منتظم / ثابت"
      ]
    ],
    "grammar": {
      "title": "Gerunds and infinitives",
      "explanation": "بعض الأفعال يأتي بعدها فعل + ing مثل enjoy/avoid، وأفعال أخرى يأتي بعدها to + verb مثل want/plan/decide.",
      "examples": [
        [
          "I decided to practise every day.",
          "قررت أن أتدرب يومياً."
        ],
        [
          "I avoid translating every single word.",
          "أتجنب ترجمة كل كلمة على حدة."
        ]
      ]
    },
    "conversation": [
      [
        "A: How do you remember new vocabulary?",
        "أ: كيف تتذكر المفردات الجديدة؟"
      ],
      [
        "B: I write example sentences and review them later.",
        "ب: أكتب جملاً نموذجية وأراجعها لاحقاً."
      ],
      [
        "A: Do you enjoy learning with videos?",
        "أ: هل تستمتع بالتعلم عبر الفيديوهات؟"
      ],
      [
        "B: Yes, but I also try to speak aloud every day.",
        "ب: نعم، لكنني أحاول أيضاً التحدث بصوت عالٍ كل يوم."
      ]
    ],
    "mistake": {
      "wrong": "I decided studying every night.",
      "correct": "I decided to study every night.",
      "explanation": "بعد decide نستخدم to + الفعل الأساسي."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I enjoy to read in English.",
      "I plan improve my listening.",
      "I avoid studying when I’m exhausted."
    ],
    "correct": 2,
    "explain": "Avoid is followed by the -ing form.",
    "challenge": "Describe your current English study routine and one change that could improve it.",
    "level": "B1"
  },
  {
    "id": "b1-describing-people",
    "title": "Describing Personality and Relationships",
    "icon": "🧑‍🤝‍🧑",
    "time": "8 min",
    "desc": "Describe personality and explain what makes a good friend or colleague.",
    "objective": "Use personality adjectives and relative clauses.",
    "phrases": [
      [
        "She’s someone who always keeps her promises.",
        "إنها شخص يفي بوعوده دائماً."
      ],
      [
        "He can be quiet at first, but he’s friendly.",
        "قد يكون هادئاً في البداية، لكنه ودود."
      ],
      [
        "We get along really well.",
        "ننسجم معاً جيداً."
      ],
      [
        "I admire her because she’s dependable.",
        "أعجب بها لأنها جديرة بالاعتماد عليها."
      ]
    ],
    "vocabulary": [
      [
        "reliable",
        "موثوق / يمكن الاعتماد عليه"
      ],
      [
        "thoughtful",
        "مراعٍ لمشاعر الآخرين"
      ],
      [
        "outgoing",
        "اجتماعي"
      ],
      [
        "patient",
        "صبور"
      ]
    ],
    "grammar": {
      "title": "Defining relative clauses",
      "explanation": "نستخدم who للأشخاص وwhich للأشياء وthat للأشخاص أو الأشياء لتوضيح من أو ماذا نقصد.",
      "examples": [
        [
          "A colleague who listens carefully is valuable.",
          "الزميل الذي يستمع بانتباه شخص قيّم."
        ],
        [
          "I like books that make me think.",
          "أحب الكتب التي تجعلني أفكر."
        ]
      ]
    },
    "conversation": [
      [
        "A: What do you value in a friend?",
        "أ: ما الصفات التي تقدرها في الصديق؟"
      ],
      [
        "B: Someone who is honest and keeps promises.",
        "ب: شخص صادق ويفي بوعوده."
      ],
      [
        "A: Are you outgoing?",
        "أ: هل أنت اجتماعي؟"
      ],
      [
        "B: I’m a little shy at first, but I open up when I feel comfortable.",
        "ب: أشعر ببعض الخجل في البداية، لكنني أنفتح عندما أشعر بالراحة."
      ]
    ],
    "mistake": {
      "wrong": "She is a person which helps everyone.",
      "correct": "She is a person who helps everyone.",
      "explanation": "نستخدم who عند وصف الأشخاص."
    },
    "q": "Choose the correct relative pronoun.",
    "answers": [
      "A person which is kind",
      "A person who is kind",
      "A person where is kind"
    ],
    "correct": 1,
    "explain": "Who is used for people.",
    "challenge": "Describe someone you admire using at least four personality adjectives and one relative clause.",
    "level": "B1"
  },
  {
    "id": "b1-shopping-complaints",
    "title": "Shopping, Returns, and Complaints",
    "icon": "🛍️",
    "time": "8 min",
    "desc": "Explain a problem with a purchase and request a fair solution.",
    "objective": "Make complaints politely and explain what went wrong.",
    "phrases": [
      [
        "I’m afraid this item is faulty.",
        "أخشى أن هذه القطعة معطوبة."
      ],
      [
        "I bought it two days ago.",
        "اشتريتها قبل يومين."
      ],
      [
        "Would it be possible to get a refund?",
        "هل يمكن استرداد المبلغ؟"
      ],
      [
        "I’d prefer to exchange it.",
        "أفضل استبدالها."
      ]
    ],
    "vocabulary": [
      [
        "faulty",
        "معطوب"
      ],
      [
        "refund",
        "استرداد المبلغ"
      ],
      [
        "exchange",
        "استبدال"
      ],
      [
        "receipt",
        "إيصال"
      ]
    ],
    "grammar": {
      "title": "Past simple and present perfect in complaints",
      "explanation": "استخدم الماضي البسيط لوقت محدد مثل yesterday، والمضارع التام لنتيجة حالية أو تجربة دون وقت محدد.",
      "examples": [
        [
          "I bought this yesterday, and it doesn’t work.",
          "اشتريت هذا أمس، وهو لا يعمل."
        ],
        [
          "I’ve lost the receipt.",
          "لقد فقدت الإيصال."
        ]
      ]
    },
    "conversation": [
      [
        "A: How can I help you?",
        "أ: كيف أساعدك؟"
      ],
      [
        "B: I bought these headphones yesterday, but one side doesn’t work.",
        "ب: اشتريت سماعات الرأس هذه أمس، لكن أحد الجانبين لا يعمل."
      ],
      [
        "A: Do you have the receipt?",
        "أ: هل لديك الإيصال؟"
      ],
      [
        "B: Yes. Could I exchange them for another pair?",
        "ب: نعم. هل يمكنني استبدالها بزوج آخر؟"
      ]
    ],
    "mistake": {
      "wrong": "I have bought it yesterday.",
      "correct": "I bought it yesterday.",
      "explanation": "مع وقت ماضٍ محدد مثل yesterday نستخدم الماضي البسيط."
    },
    "q": "Which sentence is correct?",
    "answers": [
      "I have seen him yesterday.",
      "I saw him yesterday.",
      "I see him yesterday."
    ],
    "correct": 1,
    "explain": "Use past simple with a finished, specified time in the past.",
    "challenge": "Role-play returning a faulty item and asking politely for a refund or exchange.",
    "level": "B1"
  },
  {
    "id": "b1-making-decisions",
    "title": "Making Decisions and Explaining Priorities",
    "icon": "🧭",
    "time": "8 min",
    "desc": "Explain choices, priorities, and possible consequences.",
    "objective": "Use second conditional to discuss hypothetical choices.",
    "phrases": [
      [
        "If I had more time, I’d learn another language.",
        "لو كان لدي وقت أكثر لتعلمت لغة أخرى."
      ],
      [
        "My priority at the moment is…",
        "أولويتي في الوقت الحالي هي…"
      ],
      [
        "I need to weigh up the options.",
        "أحتاج إلى موازنة الخيارات."
      ],
      [
        "It depends on what matters most.",
        "يعتمد الأمر على ما هو الأهم."
      ]
    ],
    "vocabulary": [
      [
        "priority",
        "أولوية"
      ],
      [
        "option",
        "خيار"
      ],
      [
        "consequence",
        "نتيجة"
      ],
      [
        "weigh up",
        "يوازن بين الخيارات"
      ]
    ],
    "grammar": {
      "title": "Second conditional",
      "explanation": "نستخدم If + past simple, would + base verb للحديث عن مواقف افتراضية أو غير مرجحة في الحاضر أو المستقبل.",
      "examples": [
        [
          "If I had a car, I would visit more places.",
          "لو كانت لدي سيارة لزرت أماكن أكثر."
        ],
        [
          "I’d take the course if it were cheaper.",
          "سألتحق بالدورة لو كانت أقل تكلفة."
        ]
      ]
    },
    "conversation": [
      [
        "A: If you could change one thing about your routine, what would it be?",
        "أ: لو استطعت تغيير شيء واحد في روتينك، فما هو؟"
      ],
      [
        "B: I’d wake up earlier so I had more time to study.",
        "ب: سأستيقظ أبكر حتى يكون لدي وقت أكثر للدراسة."
      ],
      [
        "A: Why is that important to you?",
        "أ: لماذا هذا مهم بالنسبة لك؟"
      ],
      [
        "B: My main priority is improving my English.",
        "ب: أولويتي الأساسية هي تحسين لغتي الإنجليزية."
      ]
    ],
    "mistake": {
      "wrong": "If I would have time, I would travel.",
      "correct": "If I had time, I would travel.",
      "explanation": "في جملة الشرط الثانية نستخدم الماضي البسيط بعد if، وليس would."
    },
    "q": "Choose the correct second conditional.",
    "answers": [
      "If I have money, I would buy it.",
      "If I had money, I would buy it.",
      "If I would have money, I buy it."
    ],
    "correct": 1,
    "explain": "If + past simple, would + base verb.",
    "challenge": "Answer: “If you had a free year, what would you do?” Give reasons for your choice.",
    "level": "B1"
  },
  {
    "id": "b1-regrets-and-lessons",
    "title": "Regrets, Mistakes, and Lessons Learned",
    "icon": "💡",
    "time": "8 min",
    "desc": "Reflect on past decisions and explain what you learned.",
    "objective": "Use should have and shouldn’t have to discuss past choices.",
    "phrases": [
      [
        "I should have prepared earlier.",
        "كان ينبغي أن أستعد مبكراً."
      ],
      [
        "I wish I had asked for help.",
        "أتمنى لو أنني طلبت المساعدة."
      ],
      [
        "At least I learned something from it.",
        "على الأقل تعلمت شيئاً من ذلك."
      ],
      [
        "Next time, I’ll make sure to…",
        "في المرة القادمة، سأحرص على…"
      ]
    ],
    "vocabulary": [
      [
        "regret",
        "ندم"
      ],
      [
        "lesson",
        "درس / عِبرة"
      ],
      [
        "mistake",
        "خطأ"
      ],
      [
        "prepare",
        "يستعد"
      ]
    ],
    "grammar": {
      "title": "Should have + past participle",
      "explanation": "نستخدم should have + التصريف الثالث للنصيحة التي لم نتبعها في الماضي، وshouldn’t have لما كان من الأفضل ألا نفعله.",
      "examples": [
        [
          "I should have checked the address.",
          "كان ينبغي أن أتحقق من العنوان."
        ],
        [
          "We shouldn’t have left so late.",
          "ما كان ينبغي أن نغادر متأخرين هكذا."
        ]
      ]
    },
    "conversation": [
      [
        "A: How was your presentation?",
        "أ: كيف كان عرضك التقديمي؟"
      ],
      [
        "B: It was okay, but I should have practised more.",
        "ب: كان جيداً، لكن كان ينبغي أن أتدرب أكثر."
      ],
      [
        "A: What will you do next time?",
        "أ: ماذا ستفعل في المرة القادمة؟"
      ],
      [
        "B: I’ll rehearse and check my slides the day before.",
        "ب: سأتدرب وأراجع الشرائح في اليوم السابق."
      ]
    ],
    "mistake": {
      "wrong": "I should have went earlier.",
      "correct": "I should have gone earlier.",
      "explanation": "بعد have نستخدم التصريف الثالث: gone وليس went."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I should have studied more.",
      "I should studied more.",
      "I should have study more."
    ],
    "correct": 0,
    "explain": "Should have is followed by the past participle.",
    "challenge": "Describe a small mistake you learned from using “I should have…” and “Next time…”.",
    "level": "B1"
  },
  {
    "id": "b1-describing-places",
    "title": "Describing Places and Memorable Visits",
    "icon": "📍",
    "time": "8 min",
    "desc": "Describe a place vividly and explain why it is memorable.",
    "objective": "Use sensory adjectives and relative clauses to describe places.",
    "phrases": [
      [
        "What I liked most was the atmosphere.",
        "أكثر ما أعجبني هو الأجواء."
      ],
      [
        "It’s a place where you can relax.",
        "إنه مكان يمكنك الاسترخاء فيه."
      ],
      [
        "The streets were lined with small cafés.",
        "كانت الشوارع تصطف على جانبيها المقاهي الصغيرة."
      ],
      [
        "I’d definitely recommend visiting.",
        "أنصح بزيارته بالتأكيد."
      ]
    ],
    "vocabulary": [
      [
        "atmosphere",
        "أجواء"
      ],
      [
        "scenic",
        "ذو مناظر جميلة"
      ],
      [
        "lively",
        "حيوي"
      ],
      [
        "peaceful",
        "هادئ"
      ]
    ],
    "grammar": {
      "title": "Relative clauses and descriptive language",
      "explanation": "استخدم where لوصف مكان، وwhich/that لوصف شيء. أضف صفات وتفاصيل حسية لتجعل الوصف أوضح.",
      "examples": [
        [
          "It’s a village where people know each other.",
          "إنها قرية يعرف الناس فيها بعضهم بعضاً."
        ],
        [
          "We visited a museum that was full of interesting objects.",
          "زرنا متحفاً مليئاً بالأشياء المثيرة للاهتمام."
        ]
      ]
    },
    "conversation": [
      [
        "A: What place would you recommend visiting?",
        "أ: ما المكان الذي تنصح بزيارته؟"
      ],
      [
        "B: I’d recommend the old town because it has a lovely atmosphere.",
        "ب: أنصح بالمدينة القديمة لأن أجواءها جميلة."
      ],
      [
        "A: What can you do there?",
        "أ: ماذا يمكن أن تفعل هناك؟"
      ],
      [
        "B: You can walk through narrow streets and try local food.",
        "ب: يمكنك التجول في الشوارع الضيقة وتجربة الطعام المحلي."
      ]
    ],
    "mistake": {
      "wrong": "It is a place which I grew up.",
      "correct": "It is the place where I grew up.",
      "explanation": "نستخدم where للمكان الذي حدث فيه شيء."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "A café where serves good coffee",
      "A café which serves good coffee",
      "A café who serves good coffee"
    ],
    "correct": 1,
    "explain": "Which can refer to things such as a café.",
    "challenge": "Describe a place you remember well using at least five adjectives and one relative clause.",
    "level": "B1"
  },
  {
    "id": "b1-entertainment-reviews",
    "title": "Films, Books, and Giving Reviews",
    "icon": "🎬",
    "time": "8 min",
    "desc": "Describe a film, book, or series and recommend it.",
    "objective": "Give a balanced review using adjectives and linking phrases.",
    "phrases": [
      [
        "The story is based on a true event.",
        "القصة مبنية على حدث حقيقي."
      ],
      [
        "What I enjoyed most was…",
        "أكثر ما استمتعت به هو…"
      ],
      [
        "The ending was a little disappointing.",
        "كانت النهاية مخيبة للآمال قليلاً."
      ],
      [
        "I’d recommend it to anyone who enjoys…",
        "أنصح به لكل من يستمتع بـ…"
      ]
    ],
    "vocabulary": [
      [
        "plot",
        "حبكة"
      ],
      [
        "character",
        "شخصية"
      ],
      [
        "moving",
        "مؤثر"
      ],
      [
        "predictable",
        "متوقع"
      ]
    ],
    "grammar": {
      "title": "Adjectives ending in -ed and -ing",
      "explanation": "الصفة المنتهية بـ -ing تصف الشيء الذي يسبب الشعور، والمنتهية بـ -ed تصف شعور الشخص.",
      "examples": [
        [
          "The film was fascinating.",
          "كان الفيلم ممتعاً للغاية."
        ],
        [
          "I was fascinated by the characters.",
          "انبهرت بالشخصيات."
        ]
      ]
    },
    "conversation": [
      [
        "A: Have you watched anything good recently?",
        "أ: هل شاهدت شيئاً جيداً مؤخراً؟"
      ],
      [
        "B: Yes, I watched a documentary about space.",
        "ب: نعم، شاهدت فيلماً وثائقياً عن الفضاء."
      ],
      [
        "A: Was it interesting?",
        "أ: هل كان ممتعاً؟"
      ],
      [
        "B: Very. It was informative, although one section was a bit slow.",
        "ب: جداً. كان غنياً بالمعلومات، رغم أن جزءاً منه كان بطيئاً قليلاً."
      ]
    ],
    "mistake": {
      "wrong": "I was very interesting in the film.",
      "correct": "I was very interested in the film.",
      "explanation": "Interested تصف شعور الشخص، أما interesting فتصف الشيء الذي يثير الاهتمام."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "The lecture was bored.",
      "I was boring during the lecture.",
      "The lecture was boring."
    ],
    "correct": 2,
    "explain": "Boring describes the thing that causes boredom.",
    "challenge": "Give a short review of a film, book, or video. Include one positive and one negative point.",
    "level": "B1"
  },
  {
    "id": "b1-complaints-conflict",
    "title": "Handling Complaints and Disagreements",
    "icon": "🗣️",
    "time": "8 min",
    "desc": "Explain a complaint calmly and work toward a solution.",
    "objective": "Use calm language, explain the issue, and request action.",
    "phrases": [
      [
        "I understand there may be a reason, but…",
        "أتفهم أنه قد يكون هناك سبب، لكن…"
      ],
      [
        "The problem is that…",
        "المشكلة هي أن…"
      ],
      [
        "I was expecting something different.",
        "كنت أتوقع شيئاً مختلفاً."
      ],
      [
        "How can we resolve this?",
        "كيف يمكننا حل هذا؟"
      ]
    ],
    "vocabulary": [
      [
        "resolve",
        "يحل"
      ],
      [
        "misunderstanding",
        "سوء فهم"
      ],
      [
        "expectation",
        "توقع"
      ],
      [
        "reasonable",
        "معقول"
      ]
    ],
    "grammar": {
      "title": "Past continuous for background and explanations",
      "explanation": "يمكن استخدام الماضي المستمر لتوضيح ما كان يحدث عندما ظهرت المشكلة، ثم الماضي البسيط لذكر الحدث.",
      "examples": [
        [
          "I was waiting for an hour when the office closed.",
          "كنت أنتظر لمدة ساعة عندما أغلق المكتب."
        ],
        [
          "We were discussing the issue when the manager arrived.",
          "كنا نناقش المشكلة عندما وصل المدير."
        ]
      ]
    },
    "conversation": [
      [
        "A: I’m sorry, but your order is late.",
        "أ: أعتذر، لكن طلبك متأخر."
      ],
      [
        "B: I understand, but I was told it would arrive yesterday.",
        "ب: أتفهم ذلك، لكن قيل لي إنه سيصل أمس."
      ],
      [
        "A: Let me check what happened.",
        "أ: دعني أتحقق مما حدث."
      ],
      [
        "B: Thank you. I’d appreciate an update today.",
        "ب: شكراً. سأقدّر الحصول على تحديث اليوم."
      ]
    ],
    "mistake": {
      "wrong": "You never do anything right!",
      "correct": "I’m concerned because this has happened twice.",
      "explanation": "اذكر المشكلة بوضوح دون اتهامات عامة أو إهانة."
    },
    "q": "Which phrase helps solve a conflict?",
    "answers": [
      "You always ruin everything.",
      "How can we resolve this?",
      "I refuse to listen."
    ],
    "correct": 1,
    "explain": "A solution-focused question helps move a disagreement forward.",
    "challenge": "Practise making a complaint about a late delivery while staying calm and specific.",
    "level": "B1"
  },
  {
    "id": "b1-plans-invitations",
    "title": "Invitations, Suggestions, and Social Plans",
    "icon": "🎉",
    "time": "8 min",
    "desc": "Invite people, accept or decline, and suggest alternatives.",
    "objective": "Use natural phrases for social arrangements.",
    "phrases": [
      [
        "Would you like to join us?",
        "هل تود الانضمام إلينا؟"
      ],
      [
        "That sounds lovely.",
        "يبدو ذلك رائعاً."
      ],
      [
        "I’d love to, but I’m afraid I can’t.",
        "أود ذلك، لكن للأسف لا أستطيع."
      ],
      [
        "How about meeting a little earlier?",
        "ما رأيك أن نلتقي أبكر قليلاً؟"
      ]
    ],
    "vocabulary": [
      [
        "join",
        "ينضم"
      ],
      [
        "available",
        "متاح"
      ],
      [
        "alternative",
        "بديل"
      ],
      [
        "postpone",
        "يؤجل"
      ]
    ],
    "grammar": {
      "title": "Suggestions with how about and would you like",
      "explanation": "بعد How about نستخدم اسماً أو فعلاً + ing. بعد Would you like to نستخدم الفعل مع to.",
      "examples": [
        [
          "How about going for coffee?",
          "ما رأيك أن نذهب لشرب القهوة؟"
        ],
        [
          "Would you like to come over on Friday?",
          "هل تود زيارتنا يوم الجمعة؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: Would you like to come to the book fair?",
        "أ: هل تود الذهاب إلى معرض الكتاب؟"
      ],
      [
        "B: I’d love to. What time are you going?",
        "ب: بكل سرور. في أي وقت ستذهبون؟"
      ],
      [
        "A: Around five. We could meet at the entrance.",
        "أ: حوالي الخامسة. يمكننا الالتقاء عند المدخل."
      ],
      [
        "B: Great. See you there!",
        "ب: رائع. أراك هناك!"
      ]
    ],
    "mistake": {
      "wrong": "How about to meet at six?",
      "correct": "How about meeting at six?",
      "explanation": "بعد How about نستخدم الفعل مع ing."
    },
    "q": "Choose the correct suggestion.",
    "answers": [
      "How about to eat out?",
      "How about eating out?",
      "How about eat out?"
    ],
    "correct": 1,
    "explain": "How about + verb-ing is the correct pattern.",
    "challenge": "Invite a friend to an activity, respond to an invitation, and suggest a different time.",
    "level": "B1"
  },
  {
    "id": "b1-describing-change",
    "title": "Describing Changes Over Time",
    "icon": "🔄",
    "time": "8 min",
    "desc": "Describe how your life, skills, or a place has changed.",
    "objective": "Use used to and present perfect to compare past and present.",
    "phrases": [
      [
        "I used to be shy when speaking English.",
        "كنت خجولاً عند التحدث بالإنجليزية."
      ],
      [
        "Things have changed a lot.",
        "تغيرت الأمور كثيراً."
      ],
      [
        "I’ve become more confident.",
        "أصبحت أكثر ثقة."
      ],
      [
        "I don’t do that anymore.",
        "لم أعد أفعل ذلك."
      ]
    ],
    "vocabulary": [
      [
        "used to",
        "كان يفعل في الماضي"
      ],
      [
        "nowadays",
        "في الوقت الحاضر"
      ],
      [
        "improve",
        "يتحسن"
      ],
      [
        "gradually",
        "تدريجياً"
      ]
    ],
    "grammar": {
      "title": "Used to vs present perfect",
      "explanation": "نستخدم used to لعادات أو حالات في الماضي لم تعد صحيحة، والمضارع التام للتغيير الذي حدث حتى الآن.",
      "examples": [
        [
          "I used to study only at weekends.",
          "كنت أدرس في عطلة نهاية الأسبوع فقط."
        ],
        [
          "My listening has improved recently.",
          "تحسن الاستماع لدي مؤخراً."
        ]
      ]
    },
    "conversation": [
      [
        "A: Has your English changed since you started learning?",
        "أ: هل تغيرت إنجليزيتك منذ أن بدأت التعلم؟"
      ],
      [
        "B: Yes, I used to avoid speaking, but now I practise every day.",
        "ب: نعم، كنت أتجنب التحدث، لكنني الآن أتدرب كل يوم."
      ],
      [
        "A: What has helped the most?",
        "أ: ما أكثر شيء ساعدك؟"
      ],
      [
        "B: Regular practice and not worrying about every mistake.",
        "ب: التدريب المنتظم وعدم القلق بشأن كل خطأ."
      ]
    ],
    "mistake": {
      "wrong": "I use to be very shy.",
      "correct": "I used to be very shy.",
      "explanation": "في الإثبات نستخدم used to، أما في السؤال والنفي نستخدم did/didn’t use to."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I used to live here, but now I live elsewhere.",
      "I use to lived here.",
      "I used living here in the past."
    ],
    "correct": 0,
    "explain": "Used to + base verb describes a past habit or state.",
    "challenge": "Describe three ways your life or habits have changed over the last few years.",
    "level": "B1"
  },
  {
    "id": "b1-possibilities-certainty",
    "title": "Possibility, Probability, and Certainty",
    "icon": "🌦️",
    "time": "8 min",
    "desc": "Explain how sure you are about a situation or prediction.",
    "objective": "Use may, might, must, and can’t to express different levels of certainty.",
    "phrases": [
      [
        "It might be delayed because of the weather.",
        "قد يتأخر بسبب الطقس."
      ],
      [
        "She must be busy right now.",
        "لا بد أنها مشغولة الآن."
      ],
      [
        "That can’t be the right address.",
        "لا يمكن أن يكون هذا العنوان الصحيح."
      ],
      [
        "There’s a good chance that…",
        "هناك احتمال كبير أن…"
      ]
    ],
    "vocabulary": [
      [
        "possibility",
        "احتمال"
      ],
      [
        "likely",
        "محتمل"
      ],
      [
        "unlikely",
        "غير محتمل"
      ],
      [
        "certain",
        "متأكد"
      ]
    ],
    "grammar": {
      "title": "Modals of deduction",
      "explanation": "نستخدم might/may عندما يكون الشيء ممكناً، must عندما نستنتج أنه مرجح جداً، وcan’t عندما نعتقد أنه مستحيل أو غير صحيح.",
      "examples": [
        [
          "He hasn’t answered; he might be driving.",
          "لم يرد؛ ربما يقود السيارة."
        ],
        [
          "The lights are on, so they must be home.",
          "الأضواء مضاءة، لذا لا بد أنهم في المنزل."
        ]
      ]
    },
    "conversation": [
      [
        "A: The shop is closed, but it’s only six.",
        "أ: المتجر مغلق، مع أن الساعة السادسة فقط."
      ],
      [
        "B: It might be a public holiday.",
        "ب: ربما تكون عطلة رسمية."
      ],
      [
        "A: Could be. The other shop is open, though.",
        "أ: ممكن. لكن المتجر الآخر مفتوح."
      ],
      [
        "B: Then this can’t be the usual closing time.",
        "ب: إذن لا يمكن أن يكون هذا وقت الإغلاق المعتاد."
      ]
    ],
    "mistake": {
      "wrong": "She must to be tired.",
      "correct": "She must be tired.",
      "explanation": "بعد must وmight وmay نستخدم الفعل الأساسي دون to."
    },
    "q": "Which sentence expresses a strong logical conclusion?",
    "answers": [
      "He must be at home; his car is outside.",
      "He must to be at home.",
      "He can’t is at home."
    ],
    "correct": 0,
    "explain": "Must + base verb can express a strong conclusion based on evidence.",
    "challenge": "Look at an imaginary situation and make three deductions using might, must, and can’t.",
    "level": "B1"
  },
  {
    "id": "b1-passive-processes",
    "title": "How Things Are Made and Done",
    "icon": "⚙️",
    "time": "8 min",
    "desc": "Explain processes when the action matters more than the person.",
    "objective": "Use passive voice in present and past simple.",
    "phrases": [
      [
        "The form is completed online.",
        "يُملأ النموذج عبر الإنترنت."
      ],
      [
        "The building was designed in 1990.",
        "صُمم المبنى عام 1990."
      ],
      [
        "The results are checked carefully.",
        "تُراجع النتائج بعناية."
      ],
      [
        "The package was delivered this morning.",
        "تم تسليم الطرد هذا الصباح."
      ]
    ],
    "vocabulary": [
      [
        "process",
        "عملية"
      ],
      [
        "produce",
        "ينتج"
      ],
      [
        "design",
        "يصمم"
      ],
      [
        "deliver",
        "يسلّم"
      ]
    ],
    "grammar": {
      "title": "Passive voice: present and past simple",
      "explanation": "المبني للمجهول: am/is/are + التصريف الثالث في المضارع، وwas/were + التصريف الثالث في الماضي.",
      "examples": [
        [
          "Coffee is grown in many countries.",
          "تُزرع القهوة في دول كثيرة."
        ],
        [
          "The bridge was built ten years ago.",
          "بُني الجسر قبل عشر سنوات."
        ]
      ]
    },
    "conversation": [
      [
        "A: Do you know how these bags are made?",
        "أ: هل تعرف كيف تُصنع هذه الحقائب؟"
      ],
      [
        "B: I think they’re produced in a local factory.",
        "ب: أعتقد أنها تُنتج في مصنع محلي."
      ],
      [
        "A: Were they designed here too?",
        "أ: وهل صُممت هنا أيضاً؟"
      ],
      [
        "B: Yes, the original design was created by a local artist.",
        "ب: نعم، صمم فنان محلي التصميم الأصلي."
      ]
    ],
    "mistake": {
      "wrong": "The letters sent yesterday.",
      "correct": "The letters were sent yesterday.",
      "explanation": "الماضي المبني للمجهول يحتاج إلى was/were + التصريف الثالث."
    },
    "q": "Choose the correct past passive sentence.",
    "answers": [
      "The room cleaned yesterday.",
      "The room was cleaned yesterday.",
      "The room was clean yesterday by someone."
    ],
    "correct": 1,
    "explain": "Past simple passive = was/were + past participle.",
    "challenge": "Explain how an online application or a simple product is processed, using passive sentences.",
    "level": "B1"
  },
  {
    "id": "b1-indirect-speech",
    "title": "Reporting What People Said",
    "icon": "🗨️",
    "time": "8 min",
    "desc": "Report conversations and share messages accurately.",
    "objective": "Use said and told to report statements.",
    "phrases": [
      [
        "She said she was running late.",
        "قالت إنها ستتأخر."
      ],
      [
        "He told me he would call back.",
        "أخبرني أنه سيتصل لاحقاً."
      ],
      [
        "They said they had finished.",
        "قالوا إنهم انتهوا."
      ],
      [
        "I was told that the meeting had changed.",
        "أُخبرت أن الاجتماع قد تغير."
      ]
    ],
    "vocabulary": [
      [
        "report",
        "ينقل / تقرير"
      ],
      [
        "message",
        "رسالة"
      ],
      [
        "mention",
        "يذكر"
      ],
      [
        "confirm",
        "يؤكد"
      ]
    ],
    "grammar": {
      "title": "Reported speech: statements",
      "explanation": "عند نقل كلام قيل في الماضي، قد يتغير الزمن إلى الماضي الأسبق: am → was، will → would، have → had.",
      "examples": [
        [
          "“I am tired,” she said. → She said she was tired.",
          "«أنا متعبة»، قالت. ← قالت إنها متعبة."
        ],
        [
          "“I will help,” he told me. → He told me he would help.",
          "«سأساعد»، أخبرني. ← أخبرني أنه سيساعد."
        ]
      ]
    },
    "conversation": [
      [
        "A: Did you speak to Omar?",
        "أ: هل تحدثت مع عمر؟"
      ],
      [
        "B: Yes. He said he was going to be late.",
        "ب: نعم. قال إنه سيتأخر."
      ],
      [
        "A: Did he tell you why?",
        "أ: هل أخبرك بالسبب؟"
      ],
      [
        "B: He told me that his bus had broken down.",
        "ب: أخبرني أن حافلته تعطلت."
      ]
    ],
    "mistake": {
      "wrong": "She told that she was ill.",
      "correct": "She said that she was ill. / She told me that she was ill.",
      "explanation": "بعد told نذكر الشخص عادةً، أما said فيمكن أن يأتي بعدها that مباشرة."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "He told that he was tired.",
      "He told me that he was tired.",
      "He said me that he was tired."
    ],
    "correct": 1,
    "explain": "Use told + person + that-clause.",
    "challenge": "Report three things a friend told you recently, changing pronouns and verb tenses where needed.",
    "level": "B1"
  },
  {
    "id": "b1-time-management",
    "title": "Time Management and Deadlines",
    "icon": "⏱️",
    "time": "8 min",
    "desc": "Discuss deadlines, priorities, and ways to manage time.",
    "objective": "Use time expressions and the present perfect continuous.",
    "phrases": [
      [
        "I’ve been working on this since Monday.",
        "أعمل على هذا منذ يوم الاثنين."
      ],
      [
        "I’m running out of time.",
        "الوقت ينفد مني."
      ],
      [
        "I need to meet the deadline.",
        "أحتاج إلى الالتزام بالموعد النهائي."
      ],
      [
        "I’ve been trying to organise my week.",
        "أحاول تنظيم أسبوعي منذ فترة."
      ]
    ],
    "vocabulary": [
      [
        "deadline",
        "موعد نهائي"
      ],
      [
        "prioritise",
        "يرتب حسب الأولوية"
      ],
      [
        "postpone",
        "يؤجل"
      ],
      [
        "time-consuming",
        "يستغرق وقتاً طويلاً"
      ]
    ],
    "grammar": {
      "title": "Present perfect continuous",
      "explanation": "نستخدم have/has been + verb-ing لعمل بدأ في الماضي وما زال مستمراً أو لشرح نشاط حديث له أثر الآن.",
      "examples": [
        [
          "I’ve been studying for two hours.",
          "أدرس منذ ساعتين."
        ],
        [
          "She has been looking for a job since May.",
          "تبحث عن عمل منذ مايو."
        ]
      ]
    },
    "conversation": [
      [
        "A: You look busy. What are you working on?",
        "أ: تبدو مشغولاً. على ماذا تعمل؟"
      ],
      [
        "B: I’ve been preparing a report all morning.",
        "ب: أجهز تقريراً طوال الصباح."
      ],
      [
        "A: Is the deadline today?",
        "أ: هل الموعد النهائي اليوم؟"
      ],
      [
        "B: Yes, so I’m prioritising the most important sections first.",
        "ب: نعم، لذلك أرتب الأقسام الأهم أولاً حسب الأولوية."
      ]
    ],
    "mistake": {
      "wrong": "I am studying here since January.",
      "correct": "I have been studying here since January.",
      "explanation": "مع since للدلالة على مدة مستمرة حتى الآن، نستخدم غالباً present perfect أو present perfect continuous."
    },
    "q": "Choose the correct sentence.",
    "answers": [
      "I have been waiting for 30 minutes.",
      "I am waiting since 30 minutes.",
      "I have waiting for 30 minutes."
    ],
    "correct": 0,
    "explain": "Present perfect continuous = have/has been + -ing.",
    "challenge": "Explain what you have been working on recently and how you plan to meet a deadline.",
    "level": "B1"
  },
  {
    "id": "b1-speaking-fluency",
    "title": "Speaking Fluently and Keeping a Conversation Going",
    "icon": "🎙️",
    "time": "8 min",
    "desc": "Use follow-up questions and conversation fillers naturally.",
    "objective": "Extend answers and show interest in what others say.",
    "phrases": [
      [
        "That’s an interesting question.",
        "هذا سؤال مثير للاهتمام."
      ],
      [
        "What I mean is…",
        "ما أقصده هو…"
      ],
      [
        "Could you tell me a little more?",
        "هل يمكنك أن تخبرني بالمزيد؟"
      ],
      [
        "That reminds me of…",
        "هذا يذكرني بـ…"
      ]
    ],
    "vocabulary": [
      [
        "follow-up question",
        "سؤال متابعة"
      ],
      [
        "clarify",
        "يوضح"
      ],
      [
        "actually",
        "في الواقع"
      ],
      [
        "by the way",
        "بالمناسبة"
      ]
    ],
    "grammar": {
      "title": "Question tags and follow-up questions",
      "explanation": "يمكن استخدام question tags لطلب التأكيد، مثل It’s useful, isn’t it?، وطرح أسئلة متابعة لإبقاء الحوار مستمراً.",
      "examples": [
        [
          "You enjoy reading, don’t you?",
          "أنت تستمتع بالقراءة، أليس كذلك؟"
        ],
        [
          "What did you like most about it?",
          "ما أكثر شيء أعجبك فيه؟"
        ]
      ]
    },
    "conversation": [
      [
        "A: I started learning graphic design last month.",
        "أ: بدأت تعلم التصميم الجرافيكي الشهر الماضي."
      ],
      [
        "B: Really? What made you interested in it?",
        "ب: حقاً؟ ما الذي جعلك تهتم به؟"
      ],
      [
        "A: I enjoy creating things on my tablet.",
        "أ: أستمتع بصنع الأشياء على جهازي اللوحي."
      ],
      [
        "B: That sounds creative. What are you learning at the moment?",
        "ب: يبدو ذلك إبداعياً. ماذا تتعلم حالياً؟"
      ]
    ],
    "mistake": {
      "wrong": "I like it. End of conversation.",
      "correct": "I like it because it’s practical. What do you think?",
      "explanation": "أضف سبباً أو مثالاً ثم اسأل سؤال متابعة حتى يستمر الحوار."
    },
    "q": "Which response keeps the conversation going?",
    "answers": [
      "Nice.",
      "That’s interesting. What do you like most about it?",
      "Okay, bye."
    ],
    "correct": 1,
    "explain": "A follow-up question invites the other person to say more.",
    "challenge": "Have a two-minute conversation. Give extended answers and ask at least three follow-up questions.",
    "level": "B1"
  },
  {
    "id": "b1-goals-and-motivation",
    "title": "Setting Goals and Staying Motivated",
    "icon": "🎯",
    "time": "8 min",
    "desc": "Explain personal goals and how to stay motivated.",
    "objective": "Use goal-setting language and clauses with so that.",
    "phrases": [
      [
        "My short-term goal is to…",
        "هدفي على المدى القصير هو…"
      ],
      [
        "I’m working towards…",
        "أعمل من أجل تحقيق…"
      ],
      [
        "I try to break big tasks into smaller steps.",
        "أحاول تقسيم المهام الكبيرة إلى خطوات أصغر."
      ],
      [
        "I remind myself why I started.",
        "أذكر نفسي بسبب البداية."
      ]
    ],
    "vocabulary": [
      [
        "goal",
        "هدف"
      ],
      [
        "motivation",
        "دافع"
      ],
      [
        "achievable",
        "قابل للتحقيق"
      ],
      [
        "milestone",
        "مرحلة مهمة"
      ]
    ],
    "grammar": {
      "title": "Infinitives of purpose with to and so that",
      "explanation": "نستخدم to + verb لذكر الهدف، وso that + جملة لشرح النتيجة المقصودة.",
      "examples": [
        [
          "I practise daily to improve my pronunciation.",
          "أتدرب يومياً لتحسين نطقي."
        ],
        [
          "I write a schedule so that I don’t forget my tasks.",
          "أكتب جدولاً حتى لا أنسى مهامي."
        ]
      ]
    },
    "conversation": [
      [
        "A: What goal are you working towards?",
        "أ: ما الهدف الذي تعمل على تحقيقه؟"
      ],
      [
        "B: I want to speak English confidently in meetings.",
        "ب: أريد التحدث بالإنجليزية بثقة في الاجتماعات."
      ],
      [
        "A: How will you achieve it?",
        "أ: كيف ستحقق ذلك؟"
      ],
      [
        "B: I’ll practise short presentations so that I become more comfortable.",
        "ب: سأتدرب على عروض قصيرة حتى أشعر براحة أكبر."
      ]
    ],
    "mistake": {
      "wrong": "I study English for improve my speaking.",
      "correct": "I study English to improve my speaking.",
      "explanation": "للتعبير عن الهدف نستخدم to + الفعل الأساسي."
    },
    "q": "Choose the sentence that expresses purpose.",
    "answers": [
      "I went to the shop for buy milk.",
      "I went to the shop to buy milk.",
      "I went to the shop buying milk."
    ],
    "correct": 1,
    "explain": "Use to + base verb to explain why you do something.",
    "challenge": "Set one English-learning goal for the next month and describe three steps to achieve it.",
    "level": "B1"
  },
  {
    "id": "b1-integrated-real-life",
    "title": "Real-Life English: Putting It All Together",
    "icon": "⭐",
    "time": "10 min",
    "desc": "Combine B1 skills in a realistic everyday situation.",
    "objective": "Use several grammar points and communication strategies in one conversation.",
    "phrases": [
      [
        "Let me explain what happened.",
        "دعني أوضح ما حدث."
      ],
      [
        "The main issue is that…",
        "المشكلة الأساسية هي أن…"
      ],
      [
        "If I were you, I’d…",
        "لو كنت مكانك، لفعلت…"
      ],
      [
        "To sum up, I think we should…",
        "باختصار، أعتقد أننا ينبغي أن…"
      ]
    ],
    "vocabulary": [
      [
        "summarise",
        "يلخص"
      ],
      [
        "recommendation",
        "توصية"
      ],
      [
        "compromise",
        "حل وسط"
      ],
      [
        "outcome",
        "نتيجة"
      ]
    ],
    "grammar": {
      "title": "Review: linking ideas across tenses",
      "explanation": "في المواقف الواقعية قد تجمع بين الماضي لشرح ما حدث، والمضارع لشرح الوضع، والشرط أو should لتقديم حل. اربط الأفكار بكلمات مثل because, however, so, and although.",
      "examples": [
        [
          "I missed the bus, so I arrived late.",
          "فاتتني الحافلة، لذلك وصلت متأخراً."
        ],
        [
          "Although the task was difficult, we finished it on time.",
          "رغم أن المهمة كانت صعبة، أكملناها في الوقت المحدد."
        ]
      ]
    },
    "conversation": [
      [
        "A: We have a problem. The meeting has been moved to tomorrow, but I’m not ready.",
        "أ: لدينا مشكلة. تم نقل الاجتماع إلى الغد، لكنني لست مستعداً."
      ],
      [
        "B: What have you finished so far?",
        "ب: ماذا أنجزت حتى الآن؟"
      ],
      [
        "A: I’ve completed the research, but I still need to prepare the slides.",
        "أ: أكملت البحث، لكن ما زلت أحتاج إلى إعداد الشرائح."
      ],
      [
        "B: If I were you, I’d focus on the main points and ask a colleague to review them.",
        "ب: لو كنت مكانك، لركزت على النقاط الرئيسية وطلبت من زميل مراجعتها."
      ]
    ],
    "mistake": {
      "wrong": "Although I was tired, but I finished.",
      "correct": "Although I was tired, I finished. / I was tired, but I finished.",
      "explanation": "لا نستخدم although وbut معاً لربط الجملتين بالطريقة نفسها."
    },
    "q": "Choose the sentence with correct linking.",
    "answers": [
      "Although it was late, but we continued.",
      "Although it was late, we continued.",
      "Despite it was late, we continued."
    ],
    "correct": 1,
    "explain": "Use although + clause without adding but in the same structure.",
    "challenge": "Describe a real-life problem, explain what happened, suggest a solution, and summarise your opinion in 6–8 sentences.",
    "level": "B1"
  }


 ];

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "masar-progress";
const EXPECTED_LESSON_COUNT = 90;

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
      `<div class="lesson-meta"><small>${esc(l.level || "A2")} · LESSON ${String(i + 1).padStart(2, "0")} · ${esc(l.time.toUpperCase())}</small>` +
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
  setText("lesson-unit", `${l.level || "A2"} · LESSON ${String(l.level === "A1" ? i + 1 : i - 29).padStart(2, "0")}`);
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
