/*
 * MENA software engineering portfolio — DEMO articles.
 * Replace these editorial samples with your own writing. They do not
 * represent verified personal experiences or published original works.
 */
const posts = [
  {
    id: "first-question",
    title: "قبل أول سطر كود… اسألي: لماذا؟",
    description: "البرمجة ليست سباقًا نحو لوحة المفاتيح. أحيانًا سؤال واحد يصنع فرقًا أكبر من مئة سطر.",
    category: "thoughts",
    categoryName: "تفكير هندسي • مثال",
    date: "نص تجريبي",
    readTime: "3 دقائق",
    theme: "peach",
    illustration: "؟",
    paragraphs: [
      "هذا المقال مثال تحريري يوضح أسلوب المدونة، وليس تجربة شخصية منشورة باسم صاحبة الموقع.",
      "قبل أن نختار لغة برمجة أو نبدأ برسم الواجهة، نحتاج أن نفهم المشكلة: من يواجهها؟ ولماذا تحدث؟ وكيف نعرف أن الحل نجح؟ الإجابة الدقيقة عن هذه الأسئلة تختصر الكثير من العمل.",
      "الكود أداة قوية، لكن قيمته الحقيقية تظهر عندما يخدم هدفًا واضحًا. لذلك تبدأ هندسة البرمجيات بفهم الإنسان والمشكلة قبل كتابة الحل."
    ]
  },
  {
    id: "small-project-big-learning",
    title: "مشروع صغير. تعلّم لا ينتهي.",
    description: "النسخة الأولى لا تحتاج أن تكون مثالية؛ تحتاج فقط أن توجد، وأن تمنحك شيئًا حقيقيًا تتعلّمين منه.",
    category: "life",
    categoryName: "تعلّم • مثال",
    date: "نص تجريبي",
    readTime: "4 دقائق",
    theme: "lime",
    illustration: "∞",
    paragraphs: [
      "هذا المقال مثال تجريبي، ويمكن استبداله بمقال توثّقين فيه مشروعًا أو تجربة تعلم حقيقية.",
      "حين تبنين مشروعًا صغيرًا، تتضح أمور لا تظهر في الشروحات: كيف تُقسّمين المهام؟ ماذا يحدث عندما يفشل جزء من التطبيق؟ وكيف تتعاملين مع ملاحظة مستخدم حقيقي؟",
      "ابدئي بما يكفي ليعمل. اختبريه. حسّنيه. ثم ابدئي دورة جديدة. بهذه الطريقة لا تصبح المشاريع مجرد ملفات؛ تصبح خطوات ملموسة في رحلة التطور."
    ]
  },
  {
    id: "code-that-lasts",
    title: "ليس المهم أن يعمل الكود… فقط.",
    description: "الكود الناجح لا يُقاس بما يفعله اليوم وحده، بل بمدى وضوحه وسهولة تطويره غدًا.",
    category: "tech",
    categoryName: "هندسة برمجيات • مثال",
    date: "نص تجريبي",
    readTime: "5 دقائق",
    theme: "violet",
    illustration: "{ }",
    paragraphs: [
      "هذا مثال لموضوع تقني مستقبلي، وليس ادعاءً بخبرة عملية محددة.",
      "قد يحقق حلّان النتيجة نفسها، لكن أحدهما أسهل فهمًا واختبارًا وصيانةً. هنا تظهر قيمة التسمية الواضحة، وتقسيم المسؤوليات، وكتابة اختبارات مناسبة.",
      "الهندسة الجيدة تعني التفكير في من سيقرأ هذا الكود لاحقًا، حتى لو كنتِ أنتِ ذلك الشخص بعد شهور. اجعلي قراراتك مفهومة، والهدف واضحًا، والتعقيد بقدر الحاجة."
    ]
  }
];
const grid = document.getElementById("storyGrid");
const filters = document.getElementById("categoryFilters");
const search = document.getElementById("storySearch");
const empty = document.getElementById("emptyMessage");
const storyCount = document.getElementById("storyCount");
const dialog = document.getElementById("articleDialog");
const closeDialog = document.getElementById("dialogClose");
const dialogBanner = document.getElementById("dialogBanner");
const dialogMeta = document.getElementById("dialogMeta");
const dialogTitle = document.getElementById("dialogTitle");
const dialogContent = document.getElementById("dialogContent");
const shareButton = document.getElementById("shareArticle");

let selectedCategory = "all";
let searchValue = "";
let activePost = null;

function makeElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent !== undefined) element.textContent = textContent;
  return element;
}

function makeCard(post, index) {
  const card = makeElement("article", "story-card");
  const trigger = makeElement("button", "story-card-button");
  trigger.type = "button";
  trigger.setAttribute("aria-label", "اقرأ: " + post.title);
  trigger.addEventListener("click", () => openPost(post.id));

  const cover = makeElement("div", "story-cover cover-" + post.theme);
  cover.append(
    makeElement("span", "cover-number", String(index + 1).padStart(2, "0") + " / " + String(posts.length).padStart(2, "0")),
    makeElement("span", "cover-star", "✳"),
    makeElement("span", "cover-art", post.illustration),
    makeElement("span", "cover-bottom", "MENA / DEV JOURNAL")
  );
  cover.setAttribute("aria-hidden", "true");

  const meta = makeElement("div", "story-card-meta");
  meta.append(makeElement("span", "tag", post.categoryName), makeElement("span", "", post.date));

  const title = makeElement("h3", "story-card-title", post.title);
  const description = makeElement("p", "story-card-description", post.description);

  const bottom = makeElement("div", "story-card-bottom");
  bottom.append(makeElement("span", "", post.readTime + " قراءة"), makeElement("span", "read-arrow", "↗"));
  trigger.append(cover, meta, title, description, bottom);
  card.append(trigger);
  return card;
}

function renderPosts() {
  const filtered = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || selectedCategory === post.category;
    const content = [post.title, post.description, post.categoryName, ...post.paragraphs].join(" ").toLocaleLowerCase("ar");
    return matchesCategory && content.includes(searchValue);
  });
  grid.replaceChildren(...filtered.map((post, index) => makeCard(post, index)));
  empty.hidden = filtered.length !== 0;
  storyCount.textContent = String(filtered.length).padStart(2, "0") + " STORIES / " + String(posts.length).padStart(2, "0") + " TOTAL";
}

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  filters.querySelectorAll("button").forEach(item => {
    const selected = item === button;
    item.classList.toggle("selected", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  renderPosts();
});
search.addEventListener("input", () => {
  searchValue = search.value.trim().toLocaleLowerCase("ar");
  renderPosts();
});
renderPosts();

function openPost(id, updateUrl = true) {
  const post = posts.find(item => item.id === id);
  if (!post) return;
  activePost = post;
  dialogBanner.className = "dialog-banner cover-" + post.theme;
  dialogBanner.firstElementChild.textContent = post.illustration;
  dialogMeta.textContent = post.categoryName + "  •  " + post.date + "  •  " + post.readTime + " قراءة";
  dialogTitle.textContent = post.title;
  dialogContent.replaceChildren(...post.paragraphs.map(paragraph => makeElement("p", "", paragraph)));
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
  if (updateUrl) history.replaceState(null, "", "#post-" + post.id);
}
function closePost() {
  if (dialog.open) dialog.close();
}
closeDialog.addEventListener("click", closePost);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closePost();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  activePost = null;
  if (location.hash.startsWith("#post-")) history.replaceState(null, "", "#stories");
});
window.addEventListener("hashchange", () => {
  const id = decodeURIComponent(location.hash.slice(6));
  if (location.hash.startsWith("#post-")) openPost(id, false);
  else if (dialog.open) closePost();
});
if (location.hash.startsWith("#post-")) openPost(decodeURIComponent(location.hash.slice(6)), false);

shareButton.addEventListener("click", async () => {
  if (!activePost) return;
  const link = location.href.split("#")[0] + "#post-" + activePost.id;
  try {
    await navigator.clipboard.writeText(link);
    shareButton.textContent = "تم نسخ الرابط ✓";
    window.setTimeout(() => { shareButton.textContent = "نسخ رابط التدوينة ↗"; }, 2300);
  } catch {
    shareButton.textContent = "انسخ الرابط من شريط العنوان";
    window.setTimeout(() => { shareButton.textContent = "نسخ رابط التدوينة ↗"; }, 2800);
  }
});

/* Appearance — respect system preference, remember user choice. */
const themeToggle = document.getElementById("themeToggle");
let savedTheme = null;
// White is the default for the refreshed portfolio, even on dark-mode devices.
// Keep an explicit visitor choice for future visits.
try { savedTheme = localStorage.getItem("mena-theme-white-v2"); } catch {}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#0B2138" : "#FFFFFF");
}
applyTheme(savedTheme === "dark" ? "dark" : "light");
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("mena-theme-white-v2", next); } catch {}
});

/* Mobile navigation */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
function closeMenu() {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "فتح القائمة");
}
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("click", event => {
  if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

/* Scroll progress, nav state and reveal on intersection */
const progress = document.getElementById("scrollProgress");
const siteHeader = document.getElementById("siteHeader");
let scrollTicking = false;
function syncScroll() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  progress.style.transform = "scaleX(" + Math.min(1, window.scrollY / max) + ")";
  siteHeader.classList.toggle("scrolled", window.scrollY > 18);
  scrollTicking = false;
}
window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(syncScroll);
}, { passive: true });
syncScroll();

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: .09, rootMargin: "0px 0px 30px 0px" });
  reveals.forEach(element => revealObserver.observe(element));
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const sectionId = visible[0].target.id;
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + sectionId);
    });
  }, { rootMargin: "-20% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll(".section-anchor").forEach(section => sectionObserver.observe(section));
} else {
  reveals.forEach(element => element.classList.add("visible"));
}

/* Subtle pointer-responsive 3D hero; disabled for touch and reduced-motion. */
const stage = document.getElementById("heroStage");
const cursor = document.getElementById("cursorLight");
const motionOkay = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (motionOkay && window.matchMedia("(pointer: fine)").matches) {
  stage.addEventListener("pointermove", event => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    stage.style.transform = "rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg)";
  });
  stage.addEventListener("pointerleave", () => { stage.style.transform = ""; });
  document.addEventListener("pointermove", event => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
    cursor.style.opacity = "1";
  }, { passive: true });
  document.addEventListener("pointerout", event => {
    if (!event.relatedTarget) cursor.style.opacity = "0";
  });
}
document.getElementById("year").textContent = String(new Date().getFullYear());