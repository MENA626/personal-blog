/* منة الله أحمد — bilingual software engineering portfolio.
   No API secrets, data collection, or backend required. */
"use strict";

const english = {
  skip: "Skip to content",
  navAbout: "About",
  navCV: "CV & Experience",
  navVideos: "Video Design",
  navProjects: "Projects",
  navStack: "Expertise",
  navNotes: "Journal",
  navContact: "Contact",
  navCta: "Let's collaborate",
  heroEyebrow: "Menat Allah Ahmed / Software Engineer in Tripoli",
  heroTitleOne: "I unpack complexity.",
  heroTitleTwo: "I design possibilities.",
  heroTitleThree: "I engineer solutions.",
  heroDescription: "I'm Menat Allah Ahmed, a Software Engineer and Faculty of Information Technology graduate from the University of Tripoli. My interests span reliable backend systems, web and mobile applications, and applying AI to problems worth solving.",
  heroProjectButton: "Explore my projects",
  heroLearnMore: "View my CV",
  heroCaption: "Good engineering begins with the right question, not the first line of code.",
  heroScroll: "Explore my work and experience ↓",
  heroIntro: "Hi, I'm Menat Allah Ahmed — Software Engineer",
  heroPanelText: "A sharper question.<br>A smarter design.<br>Lasting impact.",
  aboutKicker: "Behind the screen",
  aboutHeadOne: "Beyond the interface.",
  aboutHeadTwo: "Engineering that matters.",
  aboutBio: "I’m Menat Allah Ahmed, a Software Engineer from Tripoli and a Faculty of Information Technology graduate from the University of Tripoli. I'm interested in the complete journey from understanding requirements to designing maintainable systems and thoughtful user experiences.",
  aboutPhilosophy: "My focus connects backend engineering, web and mobile development, and AI-powered knowledge retrieval. I care about clear architecture, intentional design, and technology whose value extends beyond the screen.",
  aboutGithub: "Explore my work on GitHub",
  eduTitle: "University of Tripoli",
  eduDesc: "Faculty of Information Technology graduate, specializing in Software Engineering.",
  focusLabel: "AI with real impact",
  approachLabel: "Understand.<br>Design.<br>Build.",
  projectsKicker: "Selected projects",
  projectsHeadOne: "From a bold idea",
  projectsHeadTwo: "to a meaningful build.",
  projectsDesc: "Every project starts with a problem worth understanding. Here are the solutions I'm shaping, with transparent development status and no inflated claims.",
  mizanStatus: "In development",
  mizanTitle: "Mizan",
  mizanDesc: "Mizan is a LegalTech system in development: an AI legal assistant, a Smart Vault document library with OCR, and a lawyer directory. The goal is to make legal information more organized and accessible through responsible technology.",
  mizanNote: "Mizan is in development. Its live demo is available, and functionality may change as work continues.",
  mizanDemoLink: "Try the Mizan demo",
  videosKicker: "Video design & editing",
  videosHeadOne: "Stories aren't only told.",
  videosHeadTwo: "They're seen and felt.",
  videosDesc: "Beyond software engineering, I enjoy translating ideas into visual narratives through rhythm, images and detail. Here are two examples of my video design and editing work.",
  videoOneTitle: "My visual work — 01",
  videoOneDesc: "One of my video design and editing projects. Watch the original piece on YouTube.",
  videoTwoTitle: "My visual work — 02",
  videoTwoDesc: "Another creative video project that complements my interests in technology and visual storytelling.",
  videoWatch: "Watch on YouTube",
  cosmosStatus: "Published project",
  cosmosTitle: "COSMOS — A Journey Through Space",
  cosmosDesc: "A visually driven web experience inspired by the cosmos, with a distinctive collection of space imagery and a bold, immersive presentation. An exploration of how digital design can tell a story.",
  cosmosLink: "Open the COSMOS experience",
  cosmosNote: "Independent visual web project · Open the published version",
  siteStatus: "Live website",
  siteTitle: "My personal site & tech journal",
  siteDesc: "An independent bilingual portfolio where I present my story, share work in progress, explore AI, and translate complex engineering into a clear, responsive digital experience.",
  viewSource: "Explore the source code",
  stackKicker: "Technology & tools",
  stackHeadOne: "I choose the tools.",
  stackHeadTwo: "The problem leads.",
  stackDesc: "From Laravel and Flutter to PostgreSQL and retrieval-based AI, I connect the right technologies to design dependable backends, intuitive mobile experiences, and knowledge-aware solutions.",
  aiTitle: "From scattered documents to useful knowledge.",
  aiDesc: "I'm exploring LLMs, Retrieval-Augmented Generation, embeddings and semantic search to connect intelligent responses to relevant information rather than relying on generation alone.",
  notesKicker: "Technical journal",
  notesHeadOne: "Ideas shouldn't stay",
  notesHeadTwo: "in my head.",
  notesDesc: "Writing ideas I'm preparing on software architecture, RAG and LegalTech. These are upcoming article concepts, clearly distinguished from published work.",
  contactKicker: "Start a conversation",
  contactHeadOne: "Have an idea",
  contactHeadTwo: "worth building?",
  contactDesc: "I'm interested in meaningful technical projects, collaboration, and exchanging knowledge. Connect with me through GitHub; professional email and other channels can be added when ready for public sharing.",
  contactButton: "Connect on GitHub",
  footerAbout: "Software Engineering · Web & Mobile · AI<br>Tripoli, Libya",
  topLink: "Back to top",
  footerName: "Menat Allah Ahmed",
  draftDisclaimer: "This article idea is being prepared.",
  copyLink: "Copy link ↗",
  heroVisualNote: "THINK · DESIGN · BUILD",
  cvKicker: "Professional profile · CV",
  cvHeadOne: "A clear direction.",
  cvHeadTwo: "A growing toolkit.",
  cvSummary: "I’m a Software Engineer from Tripoli, educated at the University of Tripoli’s Faculty of Information Technology. My profile brings together backend and web development, cross-platform mobile applications, data systems and a growing focus on practical AI.",
  cvView: "Open my CV / Save as PDF",
  cvFootnote: "This profile highlights my confirmed background and technical focus. Additional formal experience and certifications can be added when provided.",
  cvEducationLabel: "EDUCATION",
  cvEducationTitle: "University of Tripoli · Faculty of Information Technology",
  cvEducationDesc: "Graduate of the Faculty of Information Technology, working in Software Engineering and interested in building end-to-end solutions.",
  cvDevelopmentLabel: "DEVELOPMENT",
  cvDevelopmentTitle: "Web systems and mobile applications",
  cvDevelopmentDesc: "PHP, Laravel, Java and JavaScript for web/backend foundations; Flutter and Dart for cross-platform mobile experiences.",
  cvAILabel: "AI & RESEARCH INTERESTS",
  cvAITitle: "Language models and semantic retrieval",
  cvAIDesc: "Exploring LLMs, RAG, embeddings and semantic search, with Mizan as an applied LegalTech direction.",
  cvDataLabel: "DATA & WORKFLOW",
  cvDataTitle: "Databases and engineering tools",
  cvDataDesc: "PostgreSQL, MySQL, Supabase and pgvector, alongside Docker, Git and Linux.",
  stackUseKicker: "WHAT I LIKE BUILDING",
  stackUse1Title: "Backend systems",
  stackUse1Desc: "APIs, business logic, maintainable structure and clear boundaries.",
  stackUse2Title: "Cross-platform mobile",
  stackUse2Desc: "Flutter experiences that connect useful features to intuitive interfaces.",
  stackUse3Title: "AI knowledge systems",
  stackUse3Desc: "Document workflows, embeddings, retrieval and LLM-assisted features.",
  stackUse4Title: "Data foundations",
  stackUse4Desc: "Relational data, vector search and reliable development tooling."
};

const stackGroups = [
  {
    ar: "الويب والأنظمة الخلفية", en: "Web & Backend", mark: "</>",
    tech: [
      ["PHP","php/php-original.svg","PHP"],
      ["Laravel","laravel/laravel-original.svg","L"],
      ["Java","java/java-original.svg","J"],
      ["JavaScript","javascript/javascript-original.svg","JS"]
    ]
  },
  {
    ar: "تطوير تطبيقات الموبايل", en: "Mobile Development", mark: "◫",
    tech: [
      ["Flutter","flutter/flutter-original.svg","F"],
      ["Dart","dart/dart-original.svg","D"]
    ]
  },
  {
    ar: "الذكاء الاصطناعي والبحث", en: "AI & Semantic Search", mark: "✳",
    tech: [
      ["OpenAI","openai/openai-original.svg","AI"],
      ["Gemini",null,"✧"],
      ["RAG",null,"◈"],
      ["Embeddings",null,"∞"]
    ]
  },
  {
    ar: "البيانات والبنية والأدوات", en: "Data & Infrastructure", mark: "⌘",
    tech: [
      ["PostgreSQL","postgresql/postgresql-original.svg","PG"],
      ["Supabase","supabase/supabase-original.svg","S"],
      ["pgvector","postgresql/postgresql-original.svg","V"],
      ["MySQL","mysql/mysql-original.svg","DB"],
      ["Docker","docker/docker-original.svg","D"],
      ["Git","git/git-original.svg","G"],
      ["Linux","linux/linux-original.svg","L"]
    ]
  }
];

const drafts = [
  {
    id:"rag-explained", motif:"AI",
    ar:{ category:"الذكاء الاصطناعي · فكرة مقال", title:"حين تتعلّم الآلة أن تبحث قبل أن تجيب.", description:"عن أنظمة RAG: كيف نربط النماذج اللغوية بمصادر معرفة يمكن الرجوع إليها؟", content:[
      "هذه معاينة لفكرة مقال قيد الإعداد، وليست مقالًا منشورًا أو تجربة شخصية موثقة.",
      "النموذج اللغوي قد يكون بارعًا في توليد الكلمات، لكن بناء نظام يعتمد عليه يتطلب أكثر من ذلك. الفكرة في RAG هي استرجاع المعلومات ذات الصلة من قاعدة معرفة، ثم الاستعانة بها قبل توليد الإجابة.",
      "سيتناول المقال المقترح مراحل تقسيم المستندات، وإنشاء Embeddings، والبحث الدلالي، وطرق تقييم دقة الاسترجاع والإجابات."
    ]},
    en:{ category:"AI · Article concept", title:"What if AI searched before it answered?", description:"RAG systems, and how language models can consult relevant knowledge before responding.", content:[
      "This is a preview of an article idea in preparation, not a published article or a verified personal project report.",
      "A language model can be fluent without being grounded. Retrieval-Augmented Generation pairs generation with search over relevant knowledge to make responses better informed.",
      "The proposed article will explore document chunking, embeddings, semantic retrieval, and evaluating both retrieved context and generated answers."
    ]}
  },
  {
    id:"mizan-vision", motif:"◈",
    ar:{ category:"LegalTech · فكرة مقال", title:"عندما تلتقي العدالة بالتقنية.", description:"لماذا يستحق القطاع القانوني أدوات أذكى لتنظيم المستندات وتيسير البحث؟", content:[
      "هذه فكرة مقال مستقبلي عن الرؤية التقنية لمشروع ميزان، وهو قيد التطوير.",
      "في الأنظمة القانونية توجد كميات كبيرة من الوثائق والأسئلة المتشابهة والبيانات التي تحتاج إلى ترتيب. هنا تظهر فرص أدوات مثل OCR ومكتبات المستندات الذكية والبحث الدلالي.",
      "سيتناول المقال كيف يمكن تصميم أدوات مساعدة مفهومة ومحترمة للخصوصية، مع ضرورة عدم اعتبار مخرجات الذكاء الاصطناعي بديلًا عن المراجعة القانونية المهنية."
    ]},
    en:{ category:"LegalTech · Article concept", title:"When legal work meets technology.", description:"Why the legal field deserves smarter ways to organize documents and find information.", content:[
      "This is a planned article about the vision behind Mizan, a project currently in development.",
      "Legal work involves complex documents, recurring questions, and information that needs careful organization. OCR, intelligent document libraries, and semantic search could make that work more accessible.",
      "The proposed piece will examine responsible, privacy-aware tools—and why AI output should not be treated as a replacement for professional legal review."
    ]}
  },
  {
    id:"architecture-matters", motif:"{ }",
    ar:{ category:"هندسة البرمجيات · فكرة مقال", title:"أن يعمل الكود؟ هذه مجرد البداية.", description:"عن المعمارية الواضحة، والاختبارات، والتفاصيل التي تجعل النظام قابلًا للتطوير.", content:[
      "هذه مسودة فكرة لمقال تقني قابل للتطوير لاحقًا.",
      "قد تعمل نسخة أولى من التطبيق بشكل جيد، لكن أي نظام حقيقي يواجه تغيّر المتطلبات وتوسّع عدد المستخدمين وأخطاء غير متوقعة. المعمارية الجيدة تجعل هذه التغييرات قابلة للإدارة.",
      "سيركز المقال المقترح على تقسيم المسؤوليات، والتوثيق والاختبارات، وكيف نوازن بين السرعة والبساطة وقابلية الصيانة."
    ]},
    en:{ category:"Engineering · Article concept", title:"Working code is only the beginning.", description:"On clear architecture, testing, and the details that make software maintainable.", content:[
      "This is a draft article concept for future development.",
      "An early version of an app might work perfectly—until requirements change, users multiply, or unexpected failures appear. Thoughtful architecture makes change manageable.",
      "The proposed article will look at boundaries, documentation, testing, and balancing delivery speed with simplicity and maintainability."
    ]}
  }
];

const root = document.documentElement;
const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const translated = [...document.querySelectorAll("[data-i18n]")];
const originals = new Map(translated.map(el => [el.dataset.i18n, el.innerHTML]));
const richKeys = new Set(["approachLabel", "footerAbout", "heroPanelText"]);
const stackContainer = document.getElementById("stackGroups");
const noteContainer = document.getElementById("notesGrid");
const dialog = document.getElementById("noteDialog");
const closeBtn = document.getElementById("dialogClose");
const shareBtn = document.getElementById("shareNote");
const noteTitle = document.getElementById("noteDialogTitle");
const noteBody = document.getElementById("dialogBody");
const noteEyebrow = document.getElementById("dialogEyebrow");
let language = "ar";
let currentNote = null;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function renderStack() {
  const groups = stackGroups.map(group => {
    const card = el("section","tech-group reveal is-visible");
    const head = el("div","tech-group-head");
    head.append(el("span","tech-group-mark",group.mark),
      el("h3","",group[language]),
      el("span","",String(group.tech.length).padStart(2,"0") + " TECH"));
    const grid = el("div","tech-items");
    group.tech.forEach(([name,path,glyph]) => {
      const item = el("div","tech-item");
      const holder = el("span","tech-graphic");
      if (path) {
        const img = document.createElement("img");
        img.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" + path;
        img.alt = "";
        img.width = 36;
        img.height = 36;
        img.loading = "lazy";
        img.addEventListener("error", () => {
          holder.replaceChildren(el("span","tech-fallback",glyph));
        }, {once:true});
        holder.append(img);
      } else holder.append(el("span","tech-fallback",glyph));
      item.append(holder,el("strong","",name));
      grid.append(item);
    });
    card.append(head,grid);
    return card;
  });
  stackContainer.replaceChildren(...groups);
}

function renderNotes() {
  const cards = drafts.map(note => {
    const t = note[language];
    const article = el("article","note-card reveal is-visible");
    const trigger = el("button","note-open");
    trigger.type = "button";
    trigger.setAttribute("aria-label",(language==="ar"?"افتحي معاينة: ":"Open preview: ")+t.title);
    const cover = el("div","note-cover");
    cover.setAttribute("aria-hidden","true");
    cover.append(el("span","",note.motif));
    const inner = el("div","note-card-body");
    inner.append(el("span","note-category",t.category),el("h3","",t.title),el("p","",t.description));
    const read = el("div","note-read");
    read.append(el("span","",language==="ar"?"استكشفي الفكرة":"Explore concept"),el("b","","↗"));
    inner.append(read);
    trigger.append(cover,inner);
    trigger.addEventListener("click",()=>openNote(note.id));
    article.append(trigger);
    return article;
  });
  noteContainer.replaceChildren(...cards);
}
function renderDialog() {
  if (!currentNote) return;
  const note = drafts.find(n => n.id === currentNote);
  if (!note) return;
  const t = note[language];
  noteTitle.textContent = t.title;
  noteEyebrow.textContent = t.category;
  noteBody.replaceChildren(...t.content.map(p=>el("p","",p)));
}
function updateLanguage(next) {
  language = next === "en" ? "en" : "ar";
  root.lang = language;
  root.dir = language==="ar" ? "rtl" : "ltr";
  translated.forEach(node => {
    const key = node.dataset.i18n;
    if (language==="ar") node.innerHTML = originals.get(key) || "";
    else if (english[key] !== undefined) {
      if (richKeys.has(key)) node.innerHTML = english[key];
      else node.textContent = english[key];
    }
  });
  langLabel.textContent = language==="ar" ? "EN" : "عربي";
  langToggle.setAttribute("aria-label",language==="ar" ? "Switch to English" : "التبديل إلى العربية");
  langToggle.title = language==="ar" ? "Switch to English" : "التحويل للعربية";
  document.getElementById("mainNav").setAttribute("aria-label",language==="ar"?"القائمة الرئيسية":"Main navigation");
  document.getElementById("homeBrand").setAttribute("aria-label",language==="ar"?"منة الله أحمد — الرئيسية":"Menat Allah Ahmed — Home");
  closeBtn.setAttribute("aria-label",language==="ar"?"إغلاق":"Close");
  const heroDiagram = document.getElementById("heroBoard");
  if (heroDiagram) heroDiagram.setAttribute("aria-label", language==="ar" ? "لوحة هندسية تجريدية لمراحل تحليل وتصميم وبناء الأنظمة" : "Abstract software engineering blueprint showing analysis, design, build and evolution");
  document.title = language==="ar"?"منة الله أحمد | مهندسة برمجيات — مشاريع وتقنية":"Menat Allah Ahmed | Software Engineer · Projects & AI";
  const description = document.querySelector('meta[name="description"]');
  description.content = language==="ar"
    ? "منة الله أحمد — مهندسة برمجيات، خريجة جامعة طرابلس. تطوير ويب وموبايل وذكاء اصطناعي، ومشروع ميزان للتقنيات القانونية."
    : "Menat Allah Ahmed — Software Engineer, University of Tripoli graduate, web/mobile developer exploring AI, LLMs, RAG and Mizan LegalTech.";
  const cvLink=document.getElementById("cvPageLink");
  if(cvLink) cvLink.href="cv.html?lang="+language;
  renderStack();
  renderNotes();
  renderDialog();
  try { localStorage.setItem("menatallah-portfolio-language",language); } catch {}
}
let savedLanguage = "ar";
try { savedLanguage = localStorage.getItem("menatallah-portfolio-language") || "ar"; } catch {}
const urlLanguage = new URLSearchParams(location.search).get("lang");
updateLanguage(urlLanguage==="en"||urlLanguage==="ar" ? urlLanguage : savedLanguage);
langToggle.addEventListener("click",()=>updateLanguage(language==="ar"?"en":"ar"));

function openNote(id,changeHash=true) {
  if (!drafts.some(x=>x.id===id)) return;
  currentNote=id;
  renderDialog();
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
  if (changeHash) history.replaceState(null,"","#note-"+id);
}
function closeNote() { if(dialog.open) dialog.close(); }
closeBtn.addEventListener("click",closeNote);
dialog.addEventListener("click",e=>{if(e.target===dialog)closeNote();});
dialog.addEventListener("close",()=>{
  currentNote=null;
  document.body.classList.remove("dialog-open");
  if(location.hash.startsWith("#note-"))history.replaceState(null,"","#notes");
});
window.addEventListener("hashchange",()=>{
  if(location.hash.startsWith("#note-"))openNote(decodeURIComponent(location.hash.slice(6)),false);
  else if(dialog.open)closeNote();
});
if(location.hash.startsWith("#note-"))openNote(decodeURIComponent(location.hash.slice(6)),false);
shareBtn.addEventListener("click",async()=>{
  if(!currentNote)return;
  const shareUrl=location.href.split("#")[0]+"#note-"+currentNote;
  try {
    await navigator.clipboard.writeText(shareUrl);
    shareBtn.textContent=language==="ar"?"تم النسخ ✓":"Copied ✓";
  } catch { shareBtn.textContent=language==="ar"?"انسخي الرابط من شريط العنوان":"Copy from address bar"; }
  window.setTimeout(()=>{shareBtn.textContent=language==="ar"?"انسخي الرابط ↗":"Copy link ↗";},2300);
});

const nav = document.getElementById("mainNav");
const menuBtn = document.getElementById("menuToggle");
function closeMenu() {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded","false");
}
menuBtn.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")closeMenu();
});

window.__menatSiteReady = true;
document.getElementById("year").textContent=new Date().getFullYear();
const progress = document.getElementById("scrollProgress");
function onScroll() {
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.transform="scaleX("+(max>0?Math.min(1,Math.max(0,window.scrollY/max)):0)+")";
}
window.addEventListener("scroll",onScroll,{passive:true});
onScroll();

const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduceMotion && "IntersectionObserver" in window) {
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },{rootMargin:"0px 0px -35px 0px",threshold:.08});
  document.querySelectorAll(".reveal").forEach(item=>observer.observe(item));
  document.documentElement.classList.add("motion-on");
}
if("IntersectionObserver" in window) {
  const navItems=[...nav.querySelectorAll("a[href^='#']")];
  const sectionObserver=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        navItems.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));
      }
    });
  },{rootMargin:"-25% 0px -60% 0px"});
  document.querySelectorAll("section.anchor").forEach(s=>sectionObserver.observe(s));
}

const board=document.getElementById("heroBoard");
const glow=document.getElementById("cursorGlow");
if(!reduceMotion && window.matchMedia("(pointer:fine)").matches){
  window.addEventListener("pointermove",e=>{
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
    glow.style.opacity="1";
  },{passive:true});
  board.addEventListener("pointermove",e=>{
    const r=board.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    board.style.transform="rotateX("+(-y*2)+"deg) rotateY("+(x*2.6)+"deg)";
  },{passive:true});
  board.addEventListener("pointerleave",()=>{board.style.transform="";});
}


// A subtle stagger for the CV, deliverables and skills. The content never depends on it.
if (!reduceMotion) {
  document.querySelectorAll(".cv-record,.stack-use-card").forEach((item,index)=>{
    item.style.transitionDelay=Math.min(index,5)*75+"ms";
  });
}


/* Privacy-conscious YouTube previews: only embed the player on deliberate click.
   Videos and titles are the user's supplied works, not inferred metadata. */
document.querySelectorAll("[data-play-video]").forEach(button => {
  button.addEventListener("click",()=>{
    const frame = button.closest(".video-frame");
    const id = button.getAttribute("data-play-video") || "";
    if (!frame || !/^[a-zA-Z0-9_-]{11}$/.test(id) || frame.classList.contains("is-playing")) return;
    const player = document.createElement("iframe");
    player.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    player.title = language === "ar" ? "تشغيل أحد أعمال منة الله المرئية" : "Play one of Menat Allah's visual projects";
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    player.setAttribute("allowfullscreen","");
    player.setAttribute("referrerpolicy","strict-origin-when-cross-origin");
    frame.classList.add("is-playing");
    frame.appendChild(player);
    button.hidden = true;
  });
});
