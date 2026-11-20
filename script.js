/* 
 * MENA Personal Journal
 * ------------------------------------------------------------
 * EDIT YOUR ARTICLES HERE. All posts below are example content;
 * replace titles, descriptions, and paragraphs with your own writing.
 * No frameworks, external APIs, or build step required.
 */
const posts = [
  {
    id: "the-beginning",
    title: "كل شيء يبدأ بفكرة.",
    description: "ليش نحتاج مساحة خاصة نكتب فيها أفكارنا؟ هذه بداية الحكاية، وبداية رحلة جديدة.",
    category: "thoughts",
    categoryName: "أفكار",
    date: "20 نوفمبر 2026",
    readTime: "3 دقائق",
    theme: "peach",
    illustration: "✳",
    paragraphs: [
      "أحيانًا تكون عندك أفكار كثيرة، لكنها تتزاحم في رأسك وتختفي قبل ما تقدر تمسكها. الكتابة تعطينا فرصة نرتّب هذه الأفكار ونشوفها بوضوح أكبر.",
      "هذه المدونة مساحة للتجربة. مش لازم تكون كل فكرة مكتملة، ولا كل إجابة نهائية. المهم أن نبدأ، نكتشف، ونتعلّم من الطريق.",
      "إذا وصلت إلى هنا، فأنت جزء من أول صفحة في هذه الرحلة. أهلاً بك، وأتمنى أن تجد بين هذه السطور شيئًا يلهمك."
    ]
  },
  {
    id: "learning-every-day",
    title: "فنّ التعلّم كل يوم.",
    description: "مو شرط تتغيّر حياتنا بخطوة كبيرة؛ أحيانًا خمس دقائق يومية تصنع فرقًا حقيقيًا.",
    category: "life",
    categoryName: "تجارب",
    date: "18 نوفمبر 2026",
    readTime: "4 دقائق",
    theme: "lime",
    illustration: "∞",
    paragraphs: [
      "من أسهل الأشياء اللي ننسى قيمتها هي الخطوات الصغيرة. ننتظر الوقت المثالي والمزاج المناسب، مع إن دقائق قليلة من التركيز ممكن تكون بداية تغيّر كبير.",
      "جرّب تختار موضوعًا يثير فضولك، واقرأ أو مارس فيه شيئًا بسيطًا كل يوم. ما تحتاج خطة معقّدة؛ الاستمرارية أهم من الكمال.",
      "وفي النهاية، التعلّم مش سباقًا. خذ وقتك، احتفل بالتقدّم، واسمح لنفسك تغيّر رأيك كلما اكتشفت شيئًا جديدًا."
    ]
  },
  {
    id: "technology-and-creativity",
    title: "بين التقنية والإبداع.",
    description: "كيف نقدر نستخدم الأدوات الرقمية لصنع أشياء تحمل بصمتنا، مش مجرد تقليد للآخرين؟",
    category: "tech",
    categoryName: "تقنية",
    date: "15 نوفمبر 2026",
    readTime: "5 دقائق",
    theme: "violet",
    illustration: "{ }",
    paragraphs: [
      "التقنية في حد ذاتها ليست الفكرة؛ هي الوسيلة اللي نقدر نحوّل بها الخيال إلى شيء ملموس. موقع إلكتروني، تصميم بسيط، أو مشروع صغير يمكن أن يبدأ بسؤال واحد: ماذا لو؟",
      "الأدوات تتغير بسرعة، لكن الأشياء اللي تعطي أي مشروع قيمته ما زالت نفسها: الفضول، والوضوح، والاهتمام بالتفاصيل.",
      "أفضل طريقة تتعلّم بها هي أن تصنع شيئًا حقيقيًا. ابدأ بنسخة صغيرة، اعرضها، تعلّم من الملاحظات، ثم طوّرها خطوة بعد خطوة."
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
    makeElement("span", "cover-number", String(index + 1).padStart(2, "0") + " / 03"),
    makeElement("span", "cover-star", "✳"),
    makeElement("span", "cover-art", post.illustration),
    makeElement("span", "cover-bottom", "MENA JOURNAL")
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
try { savedTheme = localStorage.getItem("mena-theme"); } catch {}
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#171b17" : "#f6f5ef");
}
applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : (systemDark ? "dark" : "light"));
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("mena-theme", next); } catch {}
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