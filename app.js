/**
 * AI Launchpad: K-12 Student Learning & Research Portal
 * Clean, modern logic with zero emojis, warm user-friendly formatting
 */

// ==========================================
// 1. Curated Resources Database (K-12)
// ==========================================
const resourcesData = [
  // Elementary School (1st - 5th Grade)
  {
    id: "quick-draw",
    title: "Google Quick, Draw!",
    provider: "Google Creative Lab",
    url: "https://quickdraw.withgoogle.com/",
    stages: ["elem"],
    stageLabel: "Elementary (Grades 1-5)",
    category: "tools",
    format: "Interactive AI Activity",
    time: "5-10 min",
    desc: "A drawing game where a neural network recognizes sketches in real time. Built on a public dataset of 50+ million hand-drawn doodles.",
    whyStudents: "Requires no typing or reading prerequisite. Students immediately see how computer vision classifies hand-drawn patterns."
  },
  {
    id: "ai-for-oceans",
    title: "AI for Oceans",
    provider: "Code.org",
    url: "https://code.org/oceans",
    stages: ["elem", "mid"],
    stageLabel: "Elementary & Middle (Grades 3-7)",
    category: "tools",
    format: "Guided Interactive Tutorial",
    time: "45 min",
    desc: "Train an ocean-cleaning robot by labeling fish versus trash. Introduces training data, classification errors, and ethical algorithmic design.",
    whyStudents: "A structured, visual learning format that clearly illustrates how machine learning models depend directly on training data quality."
  },
  {
    id: "ml-for-kids",
    title: "Machine Learning for Kids",
    provider: "Dale Lane (IBM Watson & Scratch)",
    url: "https://machinelearningforkids.co.uk/",
    stages: ["elem", "mid"],
    stageLabel: "Elementary & Middle (Grades 3-8)",
    category: "tools",
    format: "Block Programming Activities",
    time: "1-2 hours per project",
    desc: "Provides hands-on tools to train machine learning models to recognize text, numbers, images, or sounds, integrating them into Scratch projects.",
    whyStudents: "Connects directly into Scratch block coding, allowing young learners to build interactive voice and motion games."
  },
  {
    id: "teachable-machine",
    title: "Google Teachable Machine",
    provider: "Google Creative Lab",
    url: "https://teachablemachine.withgoogle.com/",
    stages: ["elem", "mid", "high"],
    stageLabel: "All Grades (Grades 3-12)",
    category: "tools",
    format: "Interactive In-Browser Tool",
    time: "15-30 min",
    desc: "Train custom machine learning models in your web browser using a webcam, microphone, or image files with zero programming required.",
    whyStudents: "Provides immediate visual feedback: learners see classification confidence scores update live as they change camera poses."
  },

  // Middle School (6th - 8th Grade)
  {
    id: "mit-app-inventor-ai",
    title: "MIT App Inventor: AI & Mobile Applications",
    provider: "MIT Media Lab",
    url: "https://appinventor.mit.edu/explore/ai-with-app-inventor",
    stages: ["mid", "high"],
    stageLabel: "Middle & High School (Grades 6-10)",
    category: "tools",
    format: "Mobile App Builder",
    time: "Project-based",
    desc: "Build functional mobile apps incorporating image classification, voice recognition, and language translation using MIT visual blocks.",
    whyStudents: "Allows middle schoolers to install and test their own machine learning applications directly on an iOS or Android smartphone."
  },
  {
    id: "elements-of-ai",
    title: "Elements of AI",
    provider: "University of Helsinki & MinnaLearn",
    url: "https://www.elementsofai.com/",
    stages: ["mid", "high"],
    stageLabel: "Middle & High School (Grades 7-11)",
    category: "ml",
    format: "Interactive Course & Exercises",
    time: "15 hours (Self-paced)",
    desc: "A beginner-friendly introduction to AI concepts, probability, search algorithms, and societal implications without programming prerequisites.",
    whyStudents: "Builds conceptual fluency for curious learners before they transition to Python programming."
  },
  {
    id: "tf-playground",
    title: "TensorFlow Neural Network Playground",
    provider: "Google & TensorFlow Team",
    url: "https://playground.tensorflow.org/",
    stages: ["mid", "high"],
    stageLabel: "Middle & High School (Grades 7-12)",
    category: "tools",
    format: "Interactive Network Simulator",
    time: "10-20 min",
    desc: "An in-browser interactive visualization of neural network architecture. Adjust layers, neurons, and learning rates to observe decision boundaries.",
    whyStudents: "Offers tactile intuition for hidden layers, weights, and activation functions without mathematical gatekeeping."
  },

  // High School & Youth Programs (9th - 12th Grade)
  {
    id: "hack-the-hood",
    title: "Hack the Hood: Data & Tech Cohorts",
    provider: "Hack the Hood",
    url: "https://www.hackthehood.org/",
    stages: ["high"],
    stageLabel: "High School & Youth (Ages 14-25)",
    category: "tools",
    format: "Cohort Programs & Tech Access",
    time: "Seasonal Cohorts",
    desc: "A community organization empowering underrepresented youth with data literacy, Python coding, and AI skills, supported by free laptops, tech stipends, and 1-on-1 industry mentorship.",
    whyStudents: "Offers high-touch support, free tech hardware, and career development pathways for students starting their tech education."
  },
  {
    id: "cs50-ai",
    title: "CS50 Introduction to Artificial Intelligence with Python",
    provider: "Harvard University",
    url: "https://cs50.harvard.edu/ai/",
    stages: ["high"],
    stageLabel: "High School (Grades 10-12)",
    category: "ml",
    format: "Video Course & Code Projects",
    time: "7 weeks (Self-paced)",
    desc: "Comprehensive introductory AI course covering search, knowledge graphs, probability, optimization, neural networks, and NLP with Brian Yu.",
    whyStudents: "Structured around hands-on programming projects such as building a game-playing AI and parser that serve as strong portfolio pieces."
  },
  {
    id: "fast-ai",
    title: "Practical Deep Learning for Coders",
    provider: "fast.ai",
    url: "https://course.fast.ai/",
    stages: ["high"],
    stageLabel: "High School (Grades 10-12)",
    category: "deeplearning",
    format: "Course & Open Textbook",
    time: "8 weeks (Part 1)",
    desc: "A top-down curriculum teaching students to train computer vision and natural language models with PyTorch in lesson one before dissecting lower-level math.",
    whyStudents: "Prioritizes practical code execution and results over theoretical barrier-to-entry."
  },
  {
    id: "kaggle-micro",
    title: "Kaggle Learn Micro-Courses",
    provider: "Kaggle",
    url: "https://www.kaggle.com/learn",
    stages: ["mid", "high"],
    stageLabel: "Grades 8-12",
    category: "python",
    format: "Interactive Cloud Notebooks",
    time: "3-4 hours per track",
    desc: "Concise, hands-on tutorials covering Python, Pandas, introductory Machine Learning, and Feature Engineering with free cloud GPU instances.",
    whyStudents: "Zero local installation needed: all code executes in browser notebooks without environment setup errors."
  },
  {
    id: "3b1b-linear-algebra",
    title: "Essence of Linear Algebra",
    provider: "3Blue1Brown (Grant Sanderson)",
    url: "https://www.3blue1brown.com/topics/linear-algebra",
    stages: ["high"],
    stageLabel: "High School (Grades 9-12)",
    category: "math",
    format: "Visual Mathematical Series",
    time: "15 episodes (~3 hours)",
    desc: "Geometric visualizations explaining vectors, matrices, dot products, determinants, and linear transformations foundational to neural networks.",
    whyStudents: "Translates abstract algebraic formulas into visual transformations that complement high school algebra and precalculus."
  },
  {
    id: "3b1b-neural-networks",
    title: "Neural Networks & Deep Learning Visuals",
    provider: "3Blue1Brown",
    url: "https://www.3blue1brown.com/topics/neural-networks",
    stages: ["high"],
    stageLabel: "High School (Grades 10-12)",
    category: "math",
    format: "Visual Mathematical Series",
    time: "6 episodes (~2 hours)",
    desc: "Visual walkthroughs of network activations, cost functions, gradient descent optimization, and transformer mechanisms.",
    whyStudents: "Demystifies the internal mechanics of deep learning before students write PyTorch or TensorFlow code."
  },
  {
    id: "deeplearning-ai-short-courses",
    title: "Generative AI & LLM Workshops",
    provider: "DeepLearning.AI",
    url: "https://www.deeplearning.ai/short-courses/",
    stages: ["high"],
    stageLabel: "High School (Grades 10-12)",
    category: "genai",
    format: "Short Focused Workshops",
    time: "1 hour per track",
    desc: "Hands-on tutorials on prompt engineering, retrieval-augmented generation (RAG), and agent systems with open-source tools.",
    whyStudents: "Short, practical units that can be completed over a single weekend to build interactive software."
  },
  {
    id: "github-student-pack",
    title: "GitHub Student Developer Pack",
    provider: "GitHub Education",
    url: "https://education.github.com/pack",
    stages: ["high"],
    stageLabel: "High School (Grades 9-12)",
    category: "tools",
    format: "Student Software Benefits",
    time: "Instant verification",
    desc: "Grants high school students complimentary access to GitHub Copilot, cloud compute credits, free domains, and professional developer tools with student verification.",
    whyStudents: "Equips student developers with professional-grade software tools without financial barriers."
  }
];

// ==========================================
// 1C. Internationalization & Translations
// ==========================================
const translations = {
  en: {
    nav_pathways: "Learning Pathways",
    nav_hackthehood: "Hack the Hood",
    nav_event: "First Milestone",
    nav_communities: "Communities",
    nav_resources: "Resources",
    nav_news: "Today in AI News",
    nav_research: "Research",
    nav_game: "Daily Game",
    nav_generator: "Project Generator",
    hero_pill: "Curated for Grades 1 through 12",
    hero_title: "A thoughtful pathway to understanding and building <span class=\"highlight\">Artificial Intelligence</span>.",
    hero_subtitle: "Free educational tools, student developer communities, accessible hackathons, and recent research breakthroughs translated into plain language.",
    btn_elem: "Elementary",
    sub_elem: "Grades 1-5",
    btn_mid: "Middle School",
    sub_mid: "Grades 6-8",
    btn_high: "High School",
    sub_high: "Grades 9-12",
    fact_tag: "AI Fact of the Day",
    fact_next: "Next Fact",
    fact_prev: "Previous Fact",
    game_tag: "Daily Knowledge Challenge",
    game_title: "Daily AI Termle",
    game_subtitle: "Guess today's 5-letter AI concept in 6 attempts.",
    btn_show_clue: "Show Clue",
    btn_hide_clue: "Hide Clue",
    game_hint_prefix: "Clue: ",
    search_placeholder: "Search resources by keyword, topic, or provider...",
    news_search_placeholder: "Search today's news by headline, breakthrough, or concept...",
    research_placeholder: "Search research by title, author, or concept (e.g., DeepSeek, AlphaFold, reasoning)...",
    saved_title: "Saved Items",
    saved_empty: "No saved items yet.",
    preface_label: "Student Preface",
    news_tag: "Real-Time Developments",
    news_title: "Today in AI News",
    news_subtitle: "Real-world industry breakthroughs and announcements connected directly to the foundational machine learning papers and scientific research that made them possible.",
    news_connect_label: "Connected AI Research & Development",
    news_inspect_btn: "Inspect Research Paper & Preface",
    footer_text: "AI Launchpad. Free and open educational directory for students and educators."
  },
  es: {
    nav_pathways: "Rutas de Aprendizaje",
    nav_hackthehood: "Hack the Hood",
    nav_event: "Primer Hito",
    nav_communities: "Comunidades",
    nav_resources: "Recursos",
    nav_news: "Noticias de IA Hoy",
    nav_research: "Investigación",
    nav_game: "Juego Diario",
    nav_generator: "Generador de Proyectos",
    hero_pill: "Curado para los grados 1 al 12",
    hero_title: "Un camino reflexivo para comprender y construir <span class=\"highlight\">Inteligencia Artificial</span>.",
    hero_subtitle: "Herramientas educativas gratuitas, comunidades de desarrolladores estudiantiles, hackathones accesibles y avances de investigación explicados en lenguaje sencillo.",
    btn_elem: "Primaria",
    sub_elem: "Grados 1-5",
    btn_mid: "Secundaria Básica",
    sub_mid: "Grados 6-8",
    btn_high: "Secundaria Superior",
    sub_high: "Grados 9-12",
    fact_tag: "Dato de IA del Día",
    fact_next: "Siguiente",
    fact_prev: "Anterior",
    game_tag: "Desafío Diario de Conocimiento",
    game_title: "Termle Diario de IA",
    game_subtitle: "Adivina el concepto de IA de 5 letras de hoy en 6 intentos.",
    btn_show_clue: "Mostrar Pista",
    btn_hide_clue: "Ocultar Pista",
    game_hint_prefix: "Pista: ",
    search_placeholder: "Buscar recursos por palabra clave o tema...",
    news_search_placeholder: "Buscar noticias de hoy por titular o concepto...",
    research_placeholder: "Buscar investigaciones por título, autor o concepto...",
    saved_title: "Elementos Guardados",
    saved_empty: "No hay elementos guardados aún.",
    preface_label: "Prefacio para Estudiantes",
    news_tag: "Avances en Tiempo Real",
    news_title: "Hoy en Noticias de IA",
    news_subtitle: "Los avances y anuncios de la industria conectados directamente con los artículos de investigación científica que los hicieron posibles.",
    news_connect_label: "Investigación y Desarrollo de IA Conectada",
    news_inspect_btn: "Ver Artículo de Investigación y Prefacio",
    footer_text: "AI Launchpad. Directorio educativo gratuito y abierto para estudiantes y educadores."
  },
  hi: {
    nav_pathways: "सीखने के मार्ग",
    nav_hackthehood: "हैक द हुड",
    nav_event: "पहला मील का पत्थर",
    nav_communities: "समुदाय",
    nav_resources: "संसाधन",
    nav_news: "आज का AI समाचार",
    nav_research: "शोध और अनुसंधान",
    nav_game: "दैनिक खेल",
    nav_generator: "परियोजना जनरेटर",
    hero_pill: "कक्षा 1 से 12 तक के लिए तैयार",
    hero_title: "कृत्रिम बुद्धिमत्ता (<span class=\"highlight\">AI</span>) को समझने और निर्माण करने का एक विचारशील मार्ग।",
    hero_subtitle: "मुफ्त शैक्षिक उपकरण, छात्र डेवलपर समुदाय, सुलभ हैकथॉन और सरल भाषा में हालिया शोध की जानकारी।",
    btn_elem: "प्राथमिक विद्यालय",
    sub_elem: "कक्षा 1-5",
    btn_mid: "माध्यमिक विद्यालय",
    sub_mid: "कक्षा 6-8",
    btn_high: "उच्च विद्यालय",
    sub_high: "कक्षा 9-12",
    fact_tag: "आज का AI तथ्य",
    fact_next: "अगला तथ्य",
    fact_prev: "पिछला तथ्य",
    game_tag: "दैनिक ज्ञान चुनौती",
    game_title: "दैनिक AI टर्मल",
    game_subtitle: "आज के 5-अक्षर वाले AI शब्द का 6 प्रयासों में अनुमान लगाएं।",
    btn_show_clue: "संकेत देखें",
    btn_hide_clue: "संकेत छिपाएं",
    game_hint_prefix: "संकेत: ",
    search_placeholder: "कीवर्ड या विषय द्वारा संसाधन खोजें...",
    news_search_placeholder: "शीर्षक या अवधारणा द्वारा आज की खबरें खोजें...",
    research_placeholder: "शीर्षक, लेखक या अवधारणा द्वारा शोध खोजें...",
    saved_title: "सहेजे गए संसाधन",
    saved_empty: "अभी तक कोई सहेजा गया आइटम नहीं है।",
    preface_label: "सरल छात्र सारांश",
    news_tag: "नवीनतम विकास और समाचार",
    news_title: "आज AI समाचार में",
    news_subtitle: "उद्योग जगत की महत्वपूर्ण खबरें सीधे उन बुनियादी शोध पत्रों और वैज्ञानिक अनुसंधानों से जुड़ी हैं जिन्होंने इन्हें संभव बनाया।",
    news_connect_label: "जुड़ा हुआ AI अनुसंधान और विकास",
    news_inspect_btn: "शोध पत्र और सारांश देखें",
    footer_text: "AI लॉन्चपैड। छात्रों और शिक्षकों के लिए मुफ्त और खुला शैक्षिक पोर्टल।"
  },
  "zh-yue": {
    nav_pathways: "學習路徑",
    nav_hackthehood: "Hack the Hood",
    nav_event: "初次里程碑",
    nav_communities: "技術社群",
    nav_resources: "免費資源",
    nav_news: "今日 AI 新聞",
    nav_research: "最新研究",
    nav_game: "每日遊戲",
    nav_generator: "項目生成器",
    hero_pill: "專為 1 至 12 年級學生策劃",
    hero_title: "理解同構建<span class=\"highlight\">人工智能</span>嘅清晰學習路徑。",
    hero_subtitle: "免費教育工具、學生開發者社群、無門檻黑客松活動，以及用淺白語言總結嘅最新科研成果。",
    btn_elem: "小學階段",
    sub_elem: "1至5年級",
    btn_mid: "初中階段",
    sub_mid: "6至8年級",
    btn_high: "高中階段",
    sub_high: "9至12年級",
    fact_tag: "每日 AI 冷知識",
    fact_next: "下一則",
    fact_prev: "上一則",
    game_tag: "每日知識挑戰",
    game_title: "每日 AI 詞語遊戲",
    game_subtitle: "喺 6 次嘗試之內估中今日嘅 5 字母 AI 術語。",
    btn_show_clue: "顯示提示",
    btn_hide_clue: "隱藏提示",
    game_hint_prefix: "提示：",
    search_placeholder: "按關鍵字、主題或機構搜尋資源...",
    news_search_placeholder: "按標題或概念搜尋今日新聞...",
    research_placeholder: "按論文標題、作者或概念搜尋...",
    saved_title: "已儲存項目",
    saved_empty: "暫時未有儲存嘅項目。",
    preface_label: "淺白導讀",
    news_tag: "即時科技動態",
    news_title: "今日 AI 焦點新聞",
    news_subtitle: "將業界最新科研成果同動態，直接關聯到背後嘅奠基性學術論文同研究進展。",
    news_connect_label: "背後關聯科研論文與研發",
    news_inspect_btn: "查閱關聯論文與學生導讀",
    footer_text: "AI Launchpad。為學生同教師打造嘅免費開放教育平台。"
  }
};

let currentLang = localStorage.getItem("ai_hub_lang") || "en";

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  localStorage.setItem("ai_hub_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  const searchInputEl = document.getElementById("search-input");
  if (searchInputEl && t.search_placeholder) {
    searchInputEl.placeholder = t.search_placeholder;
  }

  const newsSearchInputEl = document.getElementById("news-search-input");
  if (newsSearchInputEl && t.news_search_placeholder) {
    newsSearchInputEl.placeholder = t.news_search_placeholder;
  }

  const paperSearchInputEl = document.getElementById("paper-search-input");
  if (paperSearchInputEl && t.research_placeholder) {
    paperSearchInputEl.placeholder = t.research_placeholder;
  }

  const langSelect = document.getElementById("lang-select");
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }
}

// ==========================================
// 1D. Curated AI Facts of the Day
// ==========================================
const aiFactsData = [
  {
    date: "October 21",
    headline: "The word 'Robot' originated from a 1920 Czech theater play.",
    body: "Czech playwright Karel Čapek introduced the term in his play 'R.U.R.' (Rossum's Universal Robots). The word comes from the Slavic term 'robota', meaning forced labor or servitude.",
    source: "History of Technology, 1920"
  },
  {
    date: "October 22",
    headline: "AlphaFold predicted 200+ million protein structures in under 2 years.",
    body: "Before DeepMind's AlphaFold, biologists had painstakingly mapped only about 170,000 protein structures across 50 years of experimental X-ray crystallography and electron microscopy.",
    source: "Nature & EMBL-EBI, 2022"
  },
  {
    date: "October 23",
    headline: "The first speech recognition system in 1952 only understood 10 digits.",
    body: "Built by Bell Labs, the 'Audrey' system could only recognize spoken digits 0 through 9 spoken by its specific inventor, requiring an entire room of vacuum tubes to process.",
    source: "Bell Laboratories Historical Archives, 1952"
  },
  {
    date: "October 24",
    headline: "Neural networks were mathematically conceived back in 1943.",
    body: "Warren McCulloch and Walter Pitts published the first mathematical model of an artificial neural network inspired by biological synapses over a decade before modern digital computers were widespread.",
    source: "Bulletin of Mathematical Biophysics, 1943"
  },
  {
    date: "October 25",
    headline: "Large Language Models generate text one single token at a time.",
    body: "Despite writing fluent essays and complex code, transformers predict the probability distribution for only the next immediate token based on all preceding tokens.",
    source: "Attention Is All You Need, 2017"
  },
  {
    date: "October 26",
    headline: "Deep Blue beat world chess champion Garry Kasparov in 1997.",
    body: "IBM's Deep Blue could evaluate over 200 million chess board positions per second using specialized hardware processors and minimax tree search algorithms.",
    source: "IBM Research Systems, 1997"
  },
  {
    date: "October 27",
    headline: "Over 90% of modern computer vision runs on Convolutional Layers.",
    body: "Yann LeCun's LeNet in 1989 used weight sharing and spatial convolutions to read handwritten zip codes on mail envelopes, forming the basis for modern autonomous driving vision.",
    source: "IEEE Neural Computation, 1989"
  }
];

let currentFactIdx = 0;

function initFactOfDay() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  currentFactIdx = dayOfYear % aiFactsData.length;
  renderFact();
}

function renderFact() {
  const fact = aiFactsData[currentFactIdx];
  const dateEl = document.getElementById("fact-date");
  const headlineEl = document.getElementById("fact-headline");
  const bodyEl = document.getElementById("fact-body");
  const sourceEl = document.getElementById("fact-source");

  if (dateEl) dateEl.textContent = fact.date;
  if (headlineEl) headlineEl.textContent = fact.headline;
  if (bodyEl) bodyEl.textContent = fact.body;
  if (sourceEl) sourceEl.textContent = "Source: " + fact.source;
}

window.nextFact = function() {
  currentFactIdx = (currentFactIdx + 1) % aiFactsData.length;
  renderFact();
};

window.prevFact = function() {
  currentFactIdx = (currentFactIdx - 1 + aiFactsData.length) % aiFactsData.length;
  renderFact();
};

// ==========================================
// 1E. Daily AI Wordle ("AI Termle") Engine
// ==========================================
const aiWordleTerms = [
  {
    word: "MODEL",
    clue: "The trained program or algorithm that receives inputs and generates predictions.",
    meaning: "In machine learning, a model represents the mathematical weights learned from data (such as GPT-4, Llama, or ResNet) that performs inference."
  },
  {
    word: "EPOCH",
    clue: "One complete pass of the full training dataset through the neural network.",
    meaning: "During model training, multiple epochs allow gradient descent algorithms to iteratively adjust network weights toward minimal loss."
  },
  {
    word: "TOKEN",
    clue: "The elementary unit of text or sub-word that language models process.",
    meaning: "Text is decomposed into numerical token IDs. Common words are often individual tokens, while rare words are broken into smaller chunks."
  },
  {
    word: "LAYER",
    clue: "A row of computational neurons at a specific depth in a neural network.",
    meaning: "Deep neural networks are composed of multiple stacked layers (input, hidden, and output) that progressively extract higher-level features."
  },
  {
    word: "TRAIN",
    clue: "The learning phase where a neural network updates parameters based on training data.",
    meaning: "Training utilizes optimization algorithms like Adam or SGD combined with backpropagation to minimize prediction errors."
  },
  {
    word: "AGENT",
    clue: "An autonomous AI system capable of perceiving its environment and taking actions.",
    meaning: "Modern AI agents use language models as reasoning engines to plan actions, call APIs, and achieve goals without continuous human intervention."
  },
  {
    word: "LOGIC",
    clue: "Formal rules and reasoning systems foundational to symbolic artificial intelligence.",
    meaning: "Before the dominance of deep learning, AI research centered on symbolic logic, expert systems, and formal inference engines."
  },
  {
    word: "NODES",
    clue: "Individual artificial neurons that receive inputs and compute activations.",
    meaning: "In a network graph, nodes represent neurons that compute weighted sums of their inputs and apply non-linear activation functions."
  },
  {
    word: "IMAGE",
    clue: "A pixel grid serving as input data for visual machine learning models.",
    meaning: "Convolutional neural networks scan 2D and 3D pixel tensors to detect visual primitives like edges, textures, and object components."
  },
  {
    word: "BATCH",
    clue: "A subset of training examples processed concurrently before updating weights.",
    meaning: "Mini-batch processing optimizes GPU memory parallelization while providing stable gradient estimates during optimization."
  }
];

let todayTermObj = null;
let wordleAttempts = ["", "", "", "", "", ""];
let currentWordleRow = 0;
let isWordleGameOver = false;

function initWordleGame() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  todayTermObj = aiWordleTerms[dayOfYear % aiWordleTerms.length];

  const clueTextEl = document.getElementById("wordle-clue-text");
  if (clueTextEl) clueTextEl.textContent = todayTermObj.clue;

  const savedState = JSON.parse(localStorage.getItem(`ai_termle_${todayTermObj.word}`) || "null");
  if (savedState) {
    wordleAttempts = savedState.attempts;
    currentWordleRow = savedState.currentRow;
    isWordleGameOver = savedState.isGameOver;
  } else {
    wordleAttempts = ["", "", "", "", "", ""];
    currentWordleRow = 0;
    isWordleGameOver = false;
  }

  renderWordleBoard();
  updateKeyboardUI();

  if (isWordleGameOver) {
    showWordleSummary(wordleAttempts[currentWordleRow - 1] === todayTermObj.word);
  }
}

function renderWordleBoard() {
  const boardEl = document.getElementById("wordle-board");
  if (!boardEl || !todayTermObj) return;

  const targetWord = todayTermObj.word;
  let html = "";

  for (let r = 0; r < 6; r++) {
    const attempt = wordleAttempts[r] || "";
    const isEvaluatedRow = r < currentWordleRow;

    html += `<div class="tile-row" data-row="${r}">`;
    for (let c = 0; c < 5; c++) {
      const letter = attempt[c] || "";
      let statusClass = "";

      if (isEvaluatedRow && letter) {
        if (targetWord[c] === letter) {
          statusClass = "correct";
        } else if (targetWord.includes(letter)) {
          statusClass = "present";
        } else {
          statusClass = "absent";
        }
      } else if (letter) {
        statusClass = "filled";
      }

      html += `<div class="wordle-tile ${statusClass}">${letter}</div>`;
    }
    html += `</div>`;
  }

  boardEl.innerHTML = html;
}

function handleWordleKey(key) {
  if (isWordleGameOver || !todayTermObj) return;

  key = key.toUpperCase();
  let currentAttempt = wordleAttempts[currentWordleRow] || "";

  if (key === "ENTER") {
    if (currentAttempt.length < 5) {
      flashActiveRow();
      return;
    }

    // Evaluate guess
    currentWordleRow++;
    saveWordleProgress();
    renderWordleBoard();
    updateKeyboardUI();

    if (currentAttempt === todayTermObj.word) {
      isWordleGameOver = true;
      saveWordleProgress();
      showWordleSummary(true);
    } else if (currentWordleRow >= 6) {
      isWordleGameOver = true;
      saveWordleProgress();
      showWordleSummary(false);
    }
  } else if (key === "BACKSPACE" || key === "DELETE") {
    if (currentAttempt.length > 0) {
      wordleAttempts[currentWordleRow] = currentAttempt.slice(0, -1);
      renderWordleBoard();
    }
  } else if (/^[A-Z]$/.test(key)) {
    if (currentAttempt.length < 5) {
      wordleAttempts[currentWordleRow] = currentAttempt + key;
      renderWordleBoard();
    }
  }
}

function flashActiveRow() {
  const rowEl = document.querySelector(`.tile-row[data-row="${currentWordleRow}"]`);
  if (rowEl) {
    rowEl.style.transform = "translateX(-4px)";
    setTimeout(() => { rowEl.style.transform = "translateX(4px)"; }, 80);
    setTimeout(() => { rowEl.style.transform = "none"; }, 160);
  }
}

function updateKeyboardUI() {
  if (!todayTermObj) return;
  const targetWord = todayTermObj.word;
  const letterStatuses = {};

  for (let r = 0; r < currentWordleRow; r++) {
    const attempt = wordleAttempts[r];
    for (let c = 0; c < 5; c++) {
      const letter = attempt[c];
      if (targetWord[c] === letter) {
        letterStatuses[letter] = "correct";
      } else if (targetWord.includes(letter) && letterStatuses[letter] !== "correct") {
        letterStatuses[letter] = "present";
      } else if (!targetWord.includes(letter) && !letterStatuses[letter]) {
        letterStatuses[letter] = "absent";
      }
    }
  }

  document.querySelectorAll(".key-btn").forEach(btn => {
    const key = btn.dataset.key;
    if (letterStatuses[key]) {
      btn.className = `key-btn ${letterStatuses[key]}`;
    }
  });
}

function saveWordleProgress() {
  if (!todayTermObj) return;
  localStorage.setItem(`ai_termle_${todayTermObj.word}`, JSON.stringify({
    attempts: wordleAttempts,
    currentRow: currentWordleRow,
    isGameOver: isWordleGameOver
  }));
}

function showWordleSummary(isWin) {
  const resultBox = document.getElementById("game-result-box");
  const resultTitle = document.getElementById("game-result-title");
  const resultDesc = document.getElementById("game-result-desc");
  if (!resultBox || !todayTermObj) return;

  resultTitle.textContent = isWin ? `Completed in ${currentWordleRow} attempt${currentWordleRow > 1 ? 's' : ''}` : `Word: ${todayTermObj.word}`;
  resultDesc.textContent = `${todayTermObj.word}: ${todayTermObj.meaning}`;
  resultBox.classList.add("active");
}

window.toggleWordleClue = function() {
  const clueBox = document.getElementById("wordle-hint-box");
  const clueBtn = document.getElementById("wordle-clue-btn");
  if (!clueBox) return;

  const isActive = clueBox.classList.toggle("active");
  if (clueBtn) {
    clueBtn.textContent = isActive ? "Hide Clue" : "Show Clue";
  }
};
const researchPapersData = [
  {
    id: "deepseek-r1",
    title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
    authors: "DeepSeek-AI Team",
    venue: "arXiv:2501.12948",
    year: "2025",
    category: "reasoning",
    categoryLabel: "Reasoning & Logic",
    url: "https://arxiv.org/abs/2501.12948",
    preface: "Demonstrates that a language model can discover complex mathematical reasoning, self-reflection, and error correction entirely through reinforcement trial-and-error rewards, without relying on thousands of human-written explanations.",
    summary: "Introduced DeepSeek-R1-Zero and R1, revealing emergent thinking behaviors where models verify hypotheses and correct mistakes on competitive mathematics and software benchmarks.",
    tags: ["Reasoning", "Reinforcement Learning", "Open Weights", "Mathematics"]
  },
  {
    id: "alphafold-3",
    title: "AlphaFold 3: Accurate Structure Prediction of Biomolecular Interactions",
    authors: "Josh Abramson et al. (Google DeepMind / Isomorphic Labs)",
    venue: "Nature 630",
    year: "2024",
    category: "science",
    categoryLabel: "Science & Medicine",
    url: "https://www.nature.com/articles/s41586-024-07487-w",
    preface: "Extends machine learning from single protein folding to predicting how proteins, DNA, RNA, therapeutics, and small molecules interact in atomic 3D detail, accelerating biological discoveries.",
    summary: "Replaces traditional experimental crystallographies with a specialized diffusion architecture, delivering high accuracy across protein-ligand and nucleic acid complexes.",
    tags: ["Biology", "Diffusion Architecture", "Drug Discovery"]
  },
  {
    id: "attention-paper",
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani et al. (Google Brain / Research)",
    venue: "NeurIPS Landmark",
    year: "2017",
    category: "architecture",
    categoryLabel: "Foundational Architecture",
    url: "https://arxiv.org/abs/1706.03762",
    preface: "The architectural foundation of modern generative AI: introduced the Transformer and self-attention mechanism, discarding recurrent layers and enabling large-scale parallel language modeling.",
    summary: "Computes relationships between all tokens in a sequence concurrently, allowing neural networks to scale efficiently with large datasets and compute clusters.",
    tags: ["Transformers", "Self-Attention", "Foundations"]
  },
  {
    id: "constitutional-ai",
    title: "Constitutional AI: Harmlessness from AI Feedback",
    authors: "Yuntao Bai et al. (Anthropic)",
    venue: "arXiv:2212.08073",
    year: "2022",
    category: "safety",
    categoryLabel: "Safety & Alignment",
    url: "https://arxiv.org/abs/2212.08073",
    preface: "Rather than relying on human labelers to inspect harmful outputs, an AI system uses a written constitution of safety principles to critique, revise, and align its own responses automatically.",
    summary: "Pioneered Reinforcement Learning from AI Feedback (RLAIF), demonstrating that automated oversight can improve model helpfulness and harmlessness at scale.",
    tags: ["AI Safety", "Alignment", "RLAIF"]
  },
  {
    id: "llama-3",
    title: "The Llama 3 Herd of Models",
    authors: "Meta AI Foundation Team",
    venue: "arXiv:2407.21783",
    year: "2024",
    category: "llms",
    categoryLabel: "Open Foundation Models",
    url: "https://arxiv.org/abs/2407.21783",
    preface: "Demonstrated that training smaller models on massive token volumes (over 15 trillion tokens) produces open-weight models that match or exceed closed commercial services.",
    summary: "Detailed cluster training, 4D parallelism, data quality filters, and safety post-training methods across 8B, 70B, and 405B parameter models.",
    tags: ["Open Source", "Scaling Laws", "Foundation Models"]
  },
  {
    id: "dpo-paper",
    title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
    authors: "Rafael Rafailov et al. (Stanford University)",
    venue: "NeurIPS 2023",
    year: "2023",
    category: "safety",
    categoryLabel: "Safety & Alignment",
    url: "https://arxiv.org/abs/2305.18290",
    preface: "Replaced complex multi-stage reinforcement learning pipelines with a direct mathematical loss function, making it substantially simpler for researchers and students to align language models.",
    summary: "Derived an analytical substitution showing that policy optimization can directly incorporate human preferences without training a separate reward model.",
    tags: ["Alignment", "Optimization", "Stanford"]
  },
  {
    id: "chain-of-thought",
    title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
    authors: "Jason Wei et al. (Google Research)",
    venue: "NeurIPS 2022",
    year: "2022",
    category: "reasoning",
    categoryLabel: "Reasoning & Logic",
    url: "https://arxiv.org/abs/2201.11903",
    preface: "Discovered that prompting a model with intermediate step-by-step reasoning ('Let's think step by step') unlocks substantial performance gains on arithmetic and logic puzzles.",
    summary: "Showed that multi-step reasoning capabilities emerge as model scale expands when prompted to decompose complex prompts into intermediate stages.",
    tags: ["Prompt Engineering", "Emergent Abilities", "Reasoning"]
  },
  {
    id: "flash-attention",
    title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
    authors: "Tri Dao et al. (Stanford University)",
    venue: "NeurIPS 2022",
    year: "2022",
    category: "architecture",
    categoryLabel: "Hardware Efficiency",
    url: "https://arxiv.org/abs/2205.14135",
    preface: "Restructured how GPUs calculate attention by tiling matrix operations to avoid slow memory read-writes, speeding up training by 3x and enabling extended context windows.",
    summary: "Accounts for the memory hierarchy between GPU SRAM and High-Bandwidth Memory (HBM) to compute exact softmax attention without materializing the full N×N matrix.",
    tags: ["Hardware", "Efficiency", "Context Windows"]
  },
  {
    id: "toolformer",
    title: "Toolformer: Language Models Can Teach Themselves to Use Tools",
    authors: "Timo Schick et al. (Meta AI)",
    venue: "NeurIPS 2023",
    year: "2023",
    category: "llms",
    categoryLabel: "Autonomous Systems",
    url: "https://arxiv.org/abs/2302.04761",
    preface: "Demonstrated that a language model can independently learn when to invoke external tools, such as calculators, search engines, or calendar APIs, to ensure factual accuracy.",
    summary: "Introduced self-supervised insertion of API calls into training text, demonstrating that models can evaluate utility and decide autonomously when to use software tools.",
    tags: ["Tool Use", "Agents", "Self-Supervised"]
  }
];

// ==========================================
// 2. State Management
// ==========================================
let currentStageFilter = "all";
let currentCategoryFilter = "all";
let searchQuery = "";
let currentPaperCategoryFilter = "all";
let paperSearchQuery = "";
let bookmarks = JSON.parse(localStorage.getItem("ai_hub_bookmarks") || "[]");
let checklistState = JSON.parse(localStorage.getItem("ai_hub_checklist") || "{}");

// SVG Icons (Clean & Minimalist)
const bookmarkIconSvg = `
  <svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
  </svg>
`;

const sunIconSvg = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
`;

const moonIconSvg = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`;

// ==========================================
// 3. Render Learning Resources
// ==========================================
const resourcesContainer = document.getElementById("resources-container");
const resourceCountBadge = document.getElementById("resource-count-badge");
const searchInput = document.getElementById("search-input");
const stageButtons = document.querySelectorAll(".stage-btn");
const filterPills = document.querySelectorAll(".filter-pill");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const bookmarksToggleBtn = document.getElementById("bookmarks-toggle-btn");
const bookmarksDrawer = document.getElementById("bookmarks-drawer");
const drawerCloseBtn = document.getElementById("drawer-close-btn");
const drawerOverlay = document.getElementById("drawer-overlay");
const drawerItemsContainer = document.getElementById("drawer-items");
const bookmarkBadgeCounter = document.getElementById("bookmark-badge-counter");

// Mobile menu elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNavMenu = document.getElementById("mobile-nav-menu");

// Project Generator Elements
const projectStageSelect = document.getElementById("project-stage");
const projectInterestSelect = document.getElementById("project-interest");
const generateProjectBtn = document.getElementById("generate-project-btn");
const generatedResultBox = document.getElementById("generated-result-box");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const resultDataset = document.getElementById("result-dataset");
const resultTools = document.getElementById("result-tools");
const resultChannel = document.getElementById("result-channel");

function filterAndRenderResources() {
  if (!resourcesContainer) return;

  const filtered = resourcesData.filter(item => {
    if (currentStageFilter !== "all" && !item.stages.includes(currentStageFilter)) {
      return false;
    }
    if (currentCategoryFilter !== "all" && item.category !== currentCategoryFilter) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchProvider = item.provider.toLowerCase().includes(q);
      const matchDesc = item.desc.toLowerCase().includes(q);
      const matchWhy = item.whyStudents.toLowerCase().includes(q);
      if (!matchTitle && !matchProvider && !matchDesc && !matchWhy) {
        return false;
      }
    }
    return true;
  });

  if (resourceCountBadge) {
    resourceCountBadge.textContent = `${filtered.length} of ${resourcesData.length} resources`;
  }

  if (filtered.length === 0) {
    resourcesContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1rem; margin-bottom: 0.5rem;">No learning resources match this filter.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  resourcesContainer.innerHTML = filtered.map(item => {
    const isBookmarked = bookmarks.includes(item.id);
    let stageClass = "badge-high";
    if (item.stages.includes("elem")) stageClass = "badge-elem";
    else if (item.stages.includes("mid")) stageClass = "badge-mid";

    return `
      <article class="resource-card" data-id="${item.id}">
        <div class="resource-top">
          <span class="resource-grade-pill ${stageClass}">${item.stageLabel}</span>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
                  onclick="toggleBookmark('${item.id}')" 
                  aria-label="Bookmark resource" 
                  title="${isBookmarked ? 'Remove bookmark' : 'Save resource'}">
            ${bookmarkIconSvg}
          </button>
        </div>
        
        <h3 class="resource-title">${item.title}</h3>
        <div class="resource-provider">${item.provider}</div>
        
        <p class="resource-desc">${item.desc}</p>
        
        <div class="why-for-students">
          <strong>Key Value</strong>
          ${item.whyStudents}
        </div>
        
        <div class="resource-footer">
          <span>Time: ${item.time}</span>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            Open Resource &nearr;
          </a>
        </div>
      </article>
    `;
  }).join("");
}

window.resetFilters = function() {
  currentStageFilter = "all";
  currentCategoryFilter = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  stageButtons.forEach(b => b.classList.remove("active"));
  filterPills.forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
  filterAndRenderResources();
};

// ==========================================
// 4. Render Research Articles
// ==========================================
const papersContainer = document.getElementById("papers-container");
const papersCountBadge = document.getElementById("papers-count-badge");
const paperSearchInput = document.getElementById("paper-search-input");
const paperFilterPills = document.querySelectorAll(".paper-filter-pill");

function filterAndRenderPapers() {
  if (!papersContainer) return;

  const filtered = researchPapersData.filter(paper => {
    if (currentPaperCategoryFilter !== "all" && paper.category !== currentPaperCategoryFilter) {
      return false;
    }
    if (paperSearchQuery.trim() !== "") {
      const q = paperSearchQuery.toLowerCase();
      const matchTitle = paper.title.toLowerCase().includes(q);
      const matchAuthors = paper.authors.toLowerCase().includes(q);
      const matchPreface = paper.preface.toLowerCase().includes(q);
      const matchSummary = paper.summary.toLowerCase().includes(q);
      const matchTags = paper.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchAuthors && !matchPreface && !matchSummary && !matchTags) {
        return false;
      }
    }
    return true;
  });

  if (papersCountBadge) {
    papersCountBadge.textContent = `${filtered.length} of ${researchPapersData.length} articles`;
  }

  if (filtered.length === 0) {
    papersContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1rem; margin-bottom: 0.5rem;">No research articles match your search.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetPaperFilters()">Reset Search</button>
      </div>
    `;
    return;
  }

  papersContainer.innerHTML = filtered.map(paper => {
    const isBookmarked = bookmarks.includes(paper.id);
    return `
      <article class="paper-card" data-id="${paper.id}">
        <div class="paper-top">
          <div class="paper-badges">
            <span class="paper-cat-badge">${paper.categoryLabel}</span>
            <span class="paper-venue-badge">${paper.venue}</span>
          </div>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
                  onclick="toggleBookmark('${paper.id}')" 
                  aria-label="Bookmark article" 
                  title="${isBookmarked ? 'Remove bookmark' : 'Save article'}">
            ${bookmarkIconSvg}
          </button>
        </div>

        <h3 class="paper-title">${paper.title}</h3>
        <div class="paper-authors">${paper.authors} (${paper.year})</div>

        <!-- Student Preface Detail -->
        <div class="paper-preface-box">
          <div class="paper-preface-label">Student Preface</div>
          <p class="paper-preface-text">${paper.preface}</p>
        </div>

        <p class="paper-summary">${paper.summary}</p>

        <div class="paper-tags-row">
          ${paper.tags.map(tag => `<span class="paper-tag-pill">${tag}</span>`).join("")}
        </div>

        <div class="paper-footer">
          <span>Open Access</span>
          <a href="${paper.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Read Publication &nearr;
          </a>
        </div>
      </article>
    `;
  }).join("");
}

window.resetPaperFilters = function() {
  currentPaperCategoryFilter = "all";
  paperSearchQuery = "";
  if (paperSearchInput) paperSearchInput.value = "";
  paperFilterPills.forEach(p => p.classList.toggle("active", p.dataset.paperCategory === "all"));
  filterAndRenderPapers();
};

// ==========================================
// 5. Bookmarking System
// ==========================================
window.toggleBookmark = function(id) {
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(bId => bId !== id);
  } else {
    bookmarks.push(id);
  }
  localStorage.setItem("ai_hub_bookmarks", JSON.stringify(bookmarks));
  updateBookmarkUI();
  filterAndRenderResources();
  filterAndRenderPapers();
};

function updateBookmarkUI() {
  if (bookmarkBadgeCounter) {
    bookmarkBadgeCounter.textContent = bookmarks.length;
    bookmarkBadgeCounter.style.display = bookmarks.length > 0 ? "flex" : "none";
  }
  renderDrawerItems();
}

function renderDrawerItems() {
  if (!drawerItemsContainer) return;
  if (bookmarks.length === 0) {
    drawerItemsContainer.innerHTML = `
      <div class="drawer-empty-state">
        <p>No saved items yet.</p>
        <p style="font-size: 0.8rem; margin-top: 0.4rem; color: var(--text-muted);">Select the bookmark icon on any resource or research article to save it for reference.</p>
      </div>
    `;
    return;
  }

  const bookmarkedItems = bookmarks.map(id => {
    return resourcesData.find(item => item.id === id) || researchPapersData.find(paper => paper.id === id);
  }).filter(Boolean);

  drawerItemsContainer.innerHTML = bookmarkedItems.map(item => {
    const isPaper = Boolean(item.preface);
    const badgeText = isPaper ? (item.categoryLabel || "Research") : item.stageLabel;
    const authorOrProvider = isPaper ? item.authors : item.provider;
    return `
      <div class="drawer-item-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="resource-grade-pill ${isPaper ? 'badge-high' : ''}">${badgeText}</span>
          <button onclick="toggleBookmark('${item.id}')" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:1.1rem; padding:2px;">&times;</button>
        </div>
        <h4 style="font-size:0.92rem; font-weight:600; margin-top:0.25rem;">${item.title}</h4>
        <p style="font-size:0.78rem; color:var(--text-secondary);">${authorOrProvider}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem; font-size:0.75rem;">
          <span style="color:var(--text-muted);">${isPaper ? 'Publication' : 'Est. ' + item.time}</span>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="padding:0.25rem 0.65rem; min-height:30px;">Open &nearr;</a>
        </div>
      </div>
    `;
  }).join("");
}

function openDrawer() {
  bookmarksDrawer.classList.add("open");
  drawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  bookmarksDrawer.classList.remove("open");
  drawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 6. Interactive Checklist Progress
// ==========================================
function initChecklist() {
  const checkboxes = document.querySelectorAll(".step-checkbox");
  const progressFill = document.getElementById("checklist-progress-fill");
  const progressText = document.getElementById("checklist-progress-text");

  function updateChecklistProgress() {
    let checkedCount = 0;
    checkboxes.forEach((box) => {
      if (box.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / checkboxes.length) * 100);
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `${checkedCount} of ${checkboxes.length} milestones completed (${percent}%)`;
  }

  checkboxes.forEach((box, index) => {
    const key = `k12_step_${index}`;
    if (checklistState[key]) {
      box.checked = true;
    }

    box.addEventListener("change", () => {
      checklistState[key] = box.checked;
      localStorage.setItem("ai_hub_checklist", JSON.stringify(checklistState));
      updateChecklistProgress();
    });
  });

  updateChecklistProgress();
}

// ==========================================
// 7. Project Idea Generator (K-12 Clean)
// ==========================================
const k12ProjectIdeas = {
  elem: {
    sports: {
      name: "Motion-Activated Jump Counter",
      desc: "Train a Teachable Machine pose classifier with two positions: leaping versus landing. Connect it to Scratch to tally repetitions.",
      dataset: "Webcam video of jumping exercises.",
      tools: "Google Teachable Machine & Scratch 3.0",
      channel: "Code.org / Scratch Community Gallery"
    },
    gaming: {
      name: "Hand Gesture Game Controller",
      desc: "Train an image recognition model to detect hand gestures and control a visual Scratch character without keyboard inputs.",
      dataset: "Webcam image captures of hand positions.",
      tools: "Machine Learning for Kids & Scratch",
      channel: "Hour of Code Showcase"
    },
    climate: {
      name: "Ocean Waste Sorting Simulation",
      desc: "Build an interactive Scratch classification program that categorizes marine debris versus marine wildlife.",
      dataset: "Labeled imagery from Code.org AI for Oceans.",
      tools: "Scratch & Code.org Datasets",
      channel: "Classroom STEM Showcase"
    },
    school: {
      name: "Emotion-Responsive Interactive Sprite",
      desc: "Train a facial expression model (neutral versus smiling) that adjusts the animation state of an on-screen character.",
      dataset: "Hand-drawn expressions from classmates.",
      tools: "Google Teachable Machine & Scratch",
      channel: "Machine Learning for Kids Showroom"
    }
  },
  mid: {
    sports: {
      name: "Basketball Shooting Form Feedback App",
      desc: "Build a mobile app with MIT App Inventor that evaluates elbow release angles from recorded free-throw attempts.",
      dataset: "Recorded short video clips of basketball shots.",
      tools: "MIT App Inventor & Personal Image Classifier",
      channel: "Hack Club Slack #code or App Inventor Forums"
    },
    gaming: {
      name: "Voice-Controlled Maze Navigation",
      desc: "Train an audio keyword model on spoken navigation directions (Up, Down, Left, Right) to guide an avatar through obstacles.",
      dataset: "Audio recordings in Teachable Machine Audio model.",
      tools: "Teachable Machine Audio & p5.js",
      channel: "Hack Club Slack #ship"
    },
    climate: {
      name: "Cafeteria Waste Classifier",
      desc: "Construct an image classifier on a tablet to identify whether lunch trays contain compostable, recyclable, or landfill material.",
      dataset: "Photographs of school cafeteria containers and utensils.",
      tools: "MIT App Inventor / Teachable Machine",
      channel: "Microsoft Imagine Cup Junior"
    },
    school: {
      name: "Interactive Vocabulary Practice Tool",
      desc: "Develop a Python application that generates flashcard questions and evaluates definition accuracy.",
      dataset: "Middle school science curriculum vocabulary.",
      tools: "Python on Google Colab or Replit",
      channel: "Kaggle Learn / Hack Club #beginners"
    }
  },
  high: {
    sports: {
      name: "Athletic Performance & Match Prediction Model",
      desc: "Extract historical team statistics and train a Random Forest classifier in Python to evaluate match outcomes.",
      dataset: "Kaggle NBA Historical Match Stats Dataset.",
      tools: "Python, Pandas, Scikit-Learn, Google Colab",
      channel: "Kaggle Getting Started Forum"
    },
    gaming: {
      name: "Reinforcement Learning Arcade Agent",
      desc: "Train a neural network agent to navigate obstacle environments using Deep Q-Networks (DQN) in Python.",
      dataset: "Simulated environmental state coordinates and velocity vectors.",
      tools: "Python, Pygame, PyTorch (DQN)",
      channel: "Fast.ai Forums / Kaggle Getting Started"
    },
    climate: {
      name: "Satellite Wildfire Risk Segmentation",
      desc: "Apply transfer learning with a ResNet computer vision model to identify dry vegetation zones from satellite imagery.",
      dataset: "NASA FIRMS open satellite imagery on Kaggle.",
      tools: "PyTorch, fastai library, Google Colab",
      channel: "Hack the Hood Community / Kaggle"
    },
    school: {
      name: "Course Textbook Retrieval-Augmented Assistant",
      desc: "Construct an assistant using class syllabi and PDF readings that provides cited explanations for study questions.",
      dataset: "Course textbook PDFs and class lecture notes.",
      tools: "LangChain, ChromaDB, Gradio on Hugging Face Spaces",
      channel: "Hack Club #ai & Congressional App Challenge"
    }
  }
};

function generateProject() {
  const stage = projectStageSelect ? projectStageSelect.value : "high";
  const interest = projectInterestSelect ? projectInterestSelect.value : "school";

  const stageIdeas = k12ProjectIdeas[stage] || k12ProjectIdeas.high;
  const idea = stageIdeas[interest] || stageIdeas.school;

  if (resultTitle) resultTitle.textContent = idea.name;
  if (resultDesc) resultDesc.textContent = idea.desc;
  if (resultDataset) resultDataset.textContent = idea.dataset;
  if (resultTools) resultTools.textContent = idea.tools;
  if (resultChannel) resultChannel.textContent = idea.channel;

  if (generatedResultBox) {
    generatedResultBox.classList.add("active");
    generatedResultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// ==========================================
// 8. Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("ai_hub_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Stage filter buttons
  stageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const stage = btn.dataset.stage;
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        currentStageFilter = "all";
      } else {
        stageButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentStageFilter = stage;
      }
      filterAndRenderResources();

      if (projectStageSelect && currentStageFilter !== "all") {
        projectStageSelect.value = currentStageFilter;
      }
    });
  });

  // Category filter pills for learning resources
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategoryFilter = pill.dataset.category;
      filterAndRenderResources();
    });
  });

  // Resource search input
  if (searchInput) {
    let searchTimeout = null;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchQuery = e.target.value;
        filterAndRenderResources();
      }, 150);
    });
  }

  // Research paper category pills
  paperFilterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      paperFilterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentPaperCategoryFilter = pill.dataset.paperCategory;
      filterAndRenderPapers();
    });
  });

  // Research paper search input
  if (paperSearchInput) {
    let paperSearchTimeout = null;
    paperSearchInput.addEventListener("input", (e) => {
      clearTimeout(paperSearchTimeout);
      paperSearchTimeout = setTimeout(() => {
        paperSearchQuery = e.target.value;
        filterAndRenderPapers();
      }, 150);
    });
  }

  // Theme toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("ai_hub_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Mobile navigation menu toggle
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNavMenu.classList.toggle("open");
      const isOpen = mobileNavMenu.classList.contains("open");
      mobileMenuBtn.setAttribute("aria-expanded", isOpen);
      mobileMenuBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
    });

    mobileNavMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNavMenu.classList.remove("open");
        mobileMenuBtn.innerHTML = "&#9776;";
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Bookmarks drawer triggers
  if (bookmarksToggleBtn) bookmarksToggleBtn.addEventListener("click", openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  // Project generator trigger
  if (generateProjectBtn) {
    generateProjectBtn.addEventListener("click", generateProject);
  }

  // Language selector dropdown
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  // Wordle physical keyboard input
  window.addEventListener("keydown", (e) => {
    // Only capture if not focused in search input or text field
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") {
      return;
    }
    if (e.key === "Enter") {
      handleWordleKey("ENTER");
    } else if (e.key === "Backspace") {
      handleWordleKey("BACKSPACE");
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      handleWordleKey(e.key);
    }
  });

  // Wordle virtual on-screen keyboard clicks
  document.querySelectorAll(".key-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      if (key) handleWordleKey(key);
    });
  });

  // Initial render & setups
  setLanguage(currentLang);
  initFactOfDay();
  initWordleGame();
  filterAndRenderResources();
  filterAndRenderPapers();
  updateBookmarkUI();
  initChecklist();
});

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === "dark" ? sunIconSvg : moonIconSvg;
  themeToggleBtn.setAttribute("title", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
}
