"use strict";
/* Menat Allah — self-contained, bilingual illustrated portfolio. */
const T = {
  skip:"Skip to main content",
  navHome:"Home",
  navAbout:"About me",
  navProjects:"Projects",
  navSkills:"Skills",
  navNotes:"Blog notes",
  navContact:"Contact",
  heroIntro:"Hi! I'm Menat Allah Ahmed",
  heroName:"Menat Allah",
  heroSubhead:"Software Engineering ♥ Creativity ♥ Intelligent Systems",
  heroDescription:"A Software Engineer from Tripoli, University of Tripoli IT graduate. I build web and mobile solutions and explore how AI can make technology more useful, intuitive, and human.",
  heroPhrase:"A little matcha, a lot of code!",
  heroBub:"Welcome to my little corner!",
  ctaProjects:"Explore my projects",
  ctaBlog:"Read the blog",
  heroFoot:"WEB ♥ MOBILE ♥ AI ♥ LEGALTECH",
  aboutLabel:"A little about me",
  aboutTitle:"The person behind the code",
  aboutLead:"I'm Menat Allah Ahmed, a Software Engineer from Libya and a graduate of the Faculty of Information Technology at the University of Tripoli. I care about thoughtful backends, lovely mobile apps, and technology that actually solves problems.",
  aboutDetail:"My work blends full-stack development with an interest in AI, Large Language Models and retrieval-based systems. I believe good engineering can be precise, approachable, and creative at the same time.",
  aboutQuote:"Code is my craft. Curiosity is my fuel. ♥",
  credEducation:"University of Tripoli · IT Graduate",
  credSoftware:"Software Engineering",
  credAI:"AI, LLMs & RAG",
  credUX:"Thoughtful UI / UX design",
  githubView:"Visit my GitHub",
  projectLabel:"Things I'm building",
  projectTitle:"My projects",
  projectIntro:"Real ideas and honest progress reports—no invented product launches or fake milestones.",
  projectOneStatus:"In development",
  projectOneTitle:"Mizan — LegalTech",
  projectOneDesc:"An in-progress legal technology platform with an AI legal assistant, an OCR-powered smart document vault, and a directory for lawyers.",
  projectOneFoot:"Demo and source will be linked when available.",
  projectTwoStatus:"Published",
  projectTwoTitle:"My personal blog",
  projectTwoDesc:"The very space you're exploring: a bilingual, accessible engineering portfolio and journal, with a playful illustrated design.",
  projectTwoLink:"View the source",
  skillsLabel:"My toolbox",
  skillsTitle:"Technologies I work with",
  skillsIntro:"Backend systems, mobile apps, knowledge retrieval, and the tools that make ideas real.",
  skillWeb:"Web & Backend",
  skillMobile:"Mobile Development",
  skillAI:"Artificial Intelligence",
  skillData:"Data & Infrastructure",
  learnLabel:"Always learning",
  learnDesc:"I'm exploring LLMs, RAG, embeddings, and semantic search to create AI systems backed by useful knowledge.",
  notesLabel:"Things worth sharing",
  notesTitle:"Notes from the journey",
  notesIntro:"Draft ideas for articles about software engineering, AI, and LegalTech. Clearly marked as upcoming—not published articles.",
  note1Cat:"AI · Upcoming article",
  note1Title:"What if AI searched before answering?",
  note1Desc:"A friendly introduction to RAG, embeddings, and grounding AI in relevant sources.",
  note2Cat:"LegalTech · Upcoming article",
  note2Title:"When legal work meets technology",
  note2Desc:"How OCR, document organization, and intelligent retrieval could help legal professionals.",
  note3Cat:"Engineering · Upcoming article",
  note3Title:"Working code is just the beginning",
  note3Desc:"A closer look at clear architecture, maintainability, and thoughtful software design.",
  openPreview:"Open article idea",
  contactLabel:"Let's connect",
  contactTitle:"Have an idea worth building?",
  contactDesc:"I love thoughtful tech conversations, collaboration, and meeting people who enjoy building things. You can find me on GitHub!",
  contactButton:"Connect on GitHub",
  contactNote:"Other contact details can be added when they're ready to share publicly.",
  footerLine:"A little corner for engineering, curiosity & creativity ♥",
  topLink:"Back to top",
  guideName:"Meet my little guide 🐾",
  guideTitle:"Hello, welcome!",
  guideText:"I'm Menat's matcha-loving cat! Want to explore the blog?",
  guideAbout:"Meet Menat",
  guideProjects:"Explore projects",
  guideSkills:"Discover skills",
  guideNotes:"Read blog notes",
  modalNotice:"This is an article concept in preparation, not a published article.",
  close:"Close",
  note1Body:"A language model can be fluent without consulting a trustworthy source. A planned article will explore how Retrieval-Augmented Generation (RAG) finds relevant passages first, then uses them as context. I'll also cover document chunking, embeddings, semantic search and evaluation.",
  note2Body:"Mizan is a LegalTech project I'm building. This upcoming article will explore the opportunities and limitations of OCR, document libraries and semantic search, while keeping professional legal review and privacy in focus.",
  note3Body:"A prototype can work today and become difficult to change tomorrow. This proposed article explores boundaries, testing, documentation and the balance between speed and maintainability."
};
const noteBodies = {
  "rag": { ar:"النموذج اللغوي قد ينتج إجابة سلسة من غير الرجوع إلى مصدر موثوق. في هذا المقال المرتقب، أشرح فكرة RAG وكيف نجمع بين استرجاع المعلومات ذات الصلة وتوليد الإجابات، مع الحديث عن تقسيم المستندات وEmbeddings والبحث الدلالي وتقييم النتائج.", en:T.note1Body },
  "mizan": { ar:"ميزان مشروع LegalTech أعمل على تطويره. أستعرض في هذا المقال المقترح دور OCR والمكتبات الذكية للمستندات والبحث الدلالي، وأهمية الخصوصية والمراجعة القانونية المهنية عند الاستفادة من الذكاء الاصطناعي.", en:T.note2Body },
  "architecture": { ar:"قد يعمل النموذج الأولي اليوم، لكنه يصبح صعب التطوير غدًا. الفكرة هنا تتناول تقسيم المسؤوليات والاختبارات والتوثيق والموازنة بين سرعة الإنجاز وجودة البرمجيات وقابليتها للصيانة.", en:T.note3Body }
};
const html = document.documentElement;
const menu = document.getElementById("mobileNav");
const menuBtn = document.getElementById("menuToggle");
const elements = [...document.querySelectorAll("[data-i18n]")];
const arabic = new Map(elements.map(e=>[e.dataset.i18n,e.textContent]));
let lang = "ar";
let catGuideReady = false;
function setLanguage(next) {
  lang = next === "en" ? "en" : "ar";
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = lang === "ar" ? "منة الله أحمد | هندسة برمجيات، ذكاء اصطناعي ومدونة" : "Menat Allah Ahmed | Software Engineering, AI & Blog";
  elements.forEach(e=>{
    const key=e.dataset.i18n;
    e.textContent=lang==="ar" ? (arabic.get(key)||"") : (T[key] ?? arabic.get(key) ?? "");
  });
  document.querySelectorAll("[data-lang]").forEach(b=>{
    const selected=b.dataset.lang===lang;
    b.classList.toggle("is-active",selected);
    b.setAttribute("aria-pressed",String(selected));
  });
  if(catGuideReady)updateGuideMessage();
  try{localStorage.setItem("menat-matcha-blog-language",lang)}catch{}
}
document.querySelectorAll("[data-lang]").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.lang)));
let saved="ar";
try{saved=localStorage.getItem("menat-matcha-blog-language")||"ar"}catch{}
const urlLang=new URLSearchParams(location.search).get("lang");
setLanguage(["ar","en"].includes(urlLang)?urlLang:saved);
function closeNav(){menu?.classList.remove("open");menuBtn?.setAttribute("aria-expanded","false")}
menuBtn?.addEventListener("click",()=>{
  const open=menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",String(open));
});
menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeNav));
document.getElementById("year").textContent=new Date().getFullYear();
const scrollBar=document.getElementById("scrollProgress");
function progress(){
  const max=document.documentElement.scrollHeight-window.innerHeight;
  scrollBar.style.transform="scaleX("+(max>0?Math.min(1,Math.max(0,window.scrollY/max)):0)+")";
}
window.addEventListener("scroll",progress,{passive:true});progress();
/* Intersection reveal only when supported. Content remains visible otherwise. */
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduced && "IntersectionObserver" in window){
  const targets=[...document.querySelectorAll(".reveal")];
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.06,rootMargin:"0px 0px -22px 0px"});
  targets.forEach(el=>observer.observe(el));
  document.documentElement.classList.add("motion-on");
}
const navLinks=[...document.querySelectorAll(".nav-link")];
if("IntersectionObserver" in window){
  const activeObs=new IntersectionObserver(entries=>{
    for(const e of entries)if(e.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));
    }
  },{rootMargin:"-22% 0px -65% 0px"});
  document.querySelectorAll("main section[id]").forEach(s=>activeObs.observe(s));
}
/* Icon labels are always visible, even without the optional icon CDN. */
document.querySelectorAll(".skill-item img").forEach(img=>img.addEventListener("error",()=>{
  img.closest(".skill-item")?.classList.add("icon-failed");
},{once:true}));
const modal=document.getElementById("noteModal");
const modalTitle=document.getElementById("modalTitle");
const modalText=document.getElementById("modalText");
const modalTag=document.getElementById("modalTag");
let selectedNote=null;
function showNote(id){
  const row={rag:[1,"note1Title","note1Cat"],mizan:[2,"note2Title","note2Cat"],architecture:[3,"note3Title","note3Cat"]}[id];
  if(!row||!modal?.showModal)return;
  selectedNote=id;
  const [index,titleKey,catKey]=row;
  modalTitle.textContent=lang==="ar"?arabic.get(titleKey):T[titleKey];
  modalTag.textContent=lang==="ar"?arabic.get(catKey):T[catKey];
  modalText.textContent=noteBodies[id][lang];
  modal.showModal();
  document.body.classList.add("dialog-open");
}
document.querySelectorAll("[data-note]").forEach(btn=>btn.addEventListener("click",()=>showNote(btn.dataset.note)));
document.getElementById("modalClose")?.addEventListener("click",()=>modal.close());
modal?.addEventListener("click",e=>{if(e.target===modal)modal.close()});
modal?.addEventListener("close",()=>document.body.classList.remove("dialog-open"));
/* A friendly site navigator, not an AI chat or a data collecting widget. */
const guide=document.getElementById("catGuide");
const guideButton=document.getElementById("guideButton");
const guidePanel=document.getElementById("guidePanel");
const guideMessage=document.getElementById("guideMessage");
const guideMessages={
 home:{ar:"يا هلا! هذه مدونة منة الله، خلّيني أوريك الأقسام!",en:"Welcome to Menat's illustrated blog! Let me show you around."},
 about:{ar:"هنا تتعرف على منة الله وقصتها في هندسة البرمجيات.",en:"Meet Menat and her software engineering story."},
 projects:{ar:"شوف مشروع ميزان وبقية أعمالها التقنية.",en:"Explore Mizan and Menat's other work."},
 skills:{ar:"هنا الأدوات والتقنيات اللي تعرفها منة الله.",en:"Check out the technologies in Menat's toolbox."},
 notes:{ar:"هنا أفكارها القادمة عن البرمجة والذكاء الاصطناعي.",en:"See upcoming notes about engineering and AI."},
 contact:{ar:"عندك فكرة؟ تواصل معاها من GitHub.",en:"Have an idea? Connect with her on GitHub."}
};
let currentSection="home";
function updateGuideMessage(){if(guideMessage)guideMessage.textContent=guideMessages[currentSection][lang]}
function closeGuide(){if(guidePanel){guidePanel.hidden=true;guideButton?.setAttribute("aria-expanded","false")}}
guideButton?.addEventListener("click",()=>{
 const show=guidePanel.hidden;
 guidePanel.hidden=!show;
 guideButton.setAttribute("aria-expanded",String(show));
});
guidePanel?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeGuide));
function scrollGuide(){
  guide?.classList.toggle("is-active",window.scrollY>Math.min(window.innerHeight*.6,480));
  if(!guide?.classList.contains("is-active"))closeGuide();
  let section="home";
  for(const id of ["about","projects","skills","notes","contact"]){
    const node=document.getElementById(id);
    if(node && node.getBoundingClientRect().top<window.innerHeight*.58)section=id;
  }
  if(currentSection!==section){currentSection=section;updateGuideMessage()}
}
window.addEventListener("scroll",scrollGuide,{passive:true});scrollGuide();updateGuideMessage();catGuideReady=true;
document.addEventListener("pointerdown",e=>{if(guide&&!guide.contains(e.target))closeGuide()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeNav();closeGuide()}});
