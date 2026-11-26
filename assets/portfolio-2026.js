/* MENAT ALLAH PORTFOLIO / interaction layer
   No animation library. Motion is scroll-synced, progressive, and respectful
   of reduced-motion preferences and lower-powered devices. */
(() => {
  "use strict";
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const onMobile = window.matchMedia("(max-width: 950px)");
  const $ = (selector, from=document) => from.querySelector(selector);
  const $$ = (selector, from=document) => Array.from(from.querySelectorAll(selector));
  const isEnglish = () => root.lang === "en";
  const langButton = $("#langToggle");
  const nav = $("#siteNav");
  const navButton = $("#mobileMenuBtn");
  const CVLinks = ["#heroCvLink", "#aboutCvLink"];
  let activeNote = null;

  function setLang(lang, persist = true) {
    const next = lang === "en" ? "en" : "ar";
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    document.title = next === "ar"
      ? "منة الله أحمد | تطوير البرمجيات وتصميم التجارب الرقمية"
      : "Menat Allah Ahmed | Developer & Creative Technologist";
    $$("[data-ar][data-en]").forEach(node => {
      const translated = node.getAttribute("data-" + next) || "";
      if (node.matches(".statement h2, #aboutTitle, #contactTitle")) {
        node.innerHTML = translated;
      } else {
        node.textContent = translated;
      }
    });
    langButton.textContent = next === "ar" ? "EN" : "AR";
    langButton.setAttribute("aria-label", next === "ar" ? "Switch to English" : "التبديل إلى العربية");
    navButton.setAttribute("aria-label", next === "ar" ? "فتح القائمة" : "Open menu");
    CVLinks.forEach(selector => {
      const link = $(selector);
      if (link) link.href = "cv.html?lang=" + next;
    });
    $("#copyLabel").textContent = next === "ar" ? "نسخ الرابط" : "Copy link";
    $("#articleClose").setAttribute("aria-label", next === "ar" ? "إغلاق" : "Close");
    if (activeNote) renderArticle(activeNote);
    if (persist) { try { localStorage.setItem("menatPortfolioLang", next); } catch (_) {} }
  }
  let saved = "ar";
  try { saved = localStorage.getItem("menatPortfolioLang") || "ar"; } catch (_) {}
  const requested = new URLSearchParams(location.search).get("lang");
  setLang(requested === "en" || requested === "ar" ? requested : saved, false);
  langButton.addEventListener("click", () => setLang(isEnglish() ? "ar" : "en"));

  function closeNav(){
    root.classList.remove("nav-open");
    navButton.setAttribute("aria-expanded", "false");
  }
  navButton.addEventListener("click", () => {
    const opened = root.classList.toggle("nav-open");
    navButton.setAttribute("aria-expanded", String(opened));
  });
  $$("#siteNav a").forEach(a => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", e => {
    if(e.key === "Escape") closeNav();
  });

  // Article text is preserved in portfolio-articles.js, not summarized.
  const dialog = $("#articleDialog");
  const articleBody = $("#articleBody");
  const sourcesBox = $("#articleSources");
  function renderArticle(note) {
    const lang = isEnglish() ? "en" : "ar";
    const data = note[lang];
    if (!data) return;
    $("#articleTitle").textContent = data.title;
    $("#articleTopic").textContent = data.category;
    articleBody.replaceChildren();
    for (const paragraph of data.content || []) {
      const p = document.createElement("p");
      p.textContent = paragraph;
      articleBody.appendChild(p);
    }
    sourcesBox.replaceChildren();
    if (Array.isArray(note.sources) && note.sources.length) {
      const title = document.createElement("h3");
      title.textContent = lang === "ar" ? "المراجع والمصادر" : "References & further reading";
      const list = document.createElement("ul");
      for (const [name, uri] of note.sources) {
        try {
          const url = new URL(uri);
          if (!["https:", "http:"].includes(url.protocol)) continue;
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = url.href;
          a.textContent = name;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          li.appendChild(a);
          list.appendChild(li);
        } catch (_) {}
      }
      sourcesBox.append(title, list);
    }
  }
  function findArticle(id){
    return (window.PORTFOLIO_ARTICLES || []).find(x => x.id === id) || null;
  }
  function openArticle(id, updateHash=true) {
    const note = findArticle(id);
    if (!note) return;
    activeNote = note;
    renderArticle(note);
    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    if (updateHash) history.replaceState(null, "", "#note-" + encodeURIComponent(note.id));
  }
  function closeArticle() {
    if (dialog.open && typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    activeNote = null;
    if (location.hash.startsWith("#note-")) history.replaceState(null, "", location.pathname + location.search + "#journal");
  }
  $$("[data-article]").forEach(btn => btn.addEventListener("click", () => openArticle(btn.dataset.article)));
  $("#articleClose").addEventListener("click", closeArticle);
  $("#articleDone").addEventListener("click", closeArticle);
  dialog.addEventListener("click", evt => {
    if (evt.target === dialog) closeArticle();
  });
  dialog.addEventListener("close", () => { activeNote = null; });
  $("#copyLink").addEventListener("click", async () => {
    const label = $("#copyLabel");
    const link = location.origin + location.pathname + location.search + "#note-" + (activeNote?.id || "");
    try {
      await navigator.clipboard.writeText(link);
      label.textContent = isEnglish() ? "Copied" : "تم النسخ";
    } catch (_) {
      label.textContent = isEnglish() ? "Copy the URL above" : "انسخ الرابط من شريط العنوان";
    }
    window.setTimeout(() => { label.textContent = isEnglish() ? "Copy link" : "نسخ الرابط"; }, 2000);
  });

  // Load external video players only after an explicit user click.
  $$("[data-play]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.play || "";
      if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
      const frame = button.closest("[data-video-frame]");
      if (!frame || frame.querySelector("iframe")) return;
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      iframe.title = isEnglish() ? "Video player" : "مشغّل الفيديو";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.setAttribute("allowfullscreen", "");
      iframe.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0;z-index:5;background:#000";
      frame.appendChild(iframe);
    });
  });

  // Brand icons have a local typographic fallback if a CDN is unavailable.
  $(".tech-icon-brand img").forEach(icon => {
    const useFallback = () => { icon.parentElement.classList.add("is-fallback"); };
    icon.addEventListener("error", useFallback, {once:true});
    if (icon.complete && icon.naturalWidth === 0) useFallback();
  });

  // A formal, chapter-by-chapter reading flow. Lines draw once as sections
  // enter the viewport; the side index follows the actual scroll position.
  const pageChapters = ["home","featured","work","expertise","journal","visuals","about","contact"]
    .map(id => document.getElementById(id)).filter(Boolean);
  const railLinks = $("#sectionRail a[data-track]");
  let activeChapter = "";
  function syncSectionNavigation(){
    const focusLine = window.innerHeight * .44;
    let selected = pageChapters[0]?.id || "home";
    for(const chapter of pageChapters){
      if(chapter.getBoundingClientRect().top <= focusLine) selected = chapter.id;
    }
    if(selected === activeChapter) return;
    activeChapter = selected;
    railLinks.forEach(a => {
      const active = a.dataset.track === selected;
      a.classList.toggle("is-current",active);
      if(active) a.setAttribute("aria-current","location");
      else a.removeAttribute("aria-current");
    });
    $("#siteNav a").forEach(a => a.classList.toggle("active",a.getAttribute("href") === "#" + selected));
  }
  function setupSectionLines(){
    const chapters = $(".section-space,.recognition,.contact,.statement");
    if(reduced.matches || !("IntersectionObserver" in window)){
      chapters.forEach(node=>node.classList.add("section-active"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add("section-active");
        observer.unobserve(entry.target);
      });
    },{threshold:.08,rootMargin:"0px 0px -10% 0px"});
    chapters.forEach(node => observer.observe(node));
  }
  setupSectionLines();

  // Intersection reveals: visible by default when JS fails or motion is reduced.
  function setupReveals() {
    if (reduced.matches || !("IntersectionObserver" in window)) return;
    const nodes = $$("[data-reveal]");
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        reveal.unobserve(entry.target);
      });
    }, {threshold:.1,rootMargin:"0px 0px -25px 0px"});
    nodes.forEach((node,index) => {
      node.style.transitionDelay = node.matches(".skill-col") ? ($(".skill-col").indexOf(node)%2)*125 + "ms" : (index % 2)*75 + "ms";
      if (node.getBoundingClientRect().top < innerHeight - 18) node.classList.add("in-view");
      else reveal.observe(node);
    });
    root.classList.add("motion-on");
    const section = $(".statement");
    if (section) {
      const light = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) section.classList.add("is-lit"); });
      }, {threshold:.35});
      light.observe(section);
    }
  }
  setupReveals();
  if (reduced.matches) $(".statement")?.classList.add("is-lit");

  // Sticky MIZAN case study: scroll position directly controls its visual
  // progression. This is not a time-based animation running independently.
  const meter = $("#scrollMeter");
  const featureTrack = $("#featureTrack");
  const featureWrap = $("#storyScreenWrap");
  const featureSteps = $$("[data-stage]", featureTrack);
  const scene = $("#heroScene");
  const heroDevice = $("#heroDevice");
  let ticking = false;
  let previousStage = -1;
  function updateMotion() {
    ticking = false;
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    meter.style.transform = "scaleX(" + Math.max(0,Math.min(1,y / total)).toFixed(5) + ")";
    syncSectionNavigation();
    if (reduced.matches) return;
    if (!onMobile.matches && featureTrack) {
      const rect = featureTrack.getBoundingClientRect();
      const available = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / available));
      featureTrack.style.setProperty("--story-progress", progress.toFixed(4));
      const step = Math.min(2, Math.floor(progress * 3));
      if (step !== previousStage) {
        previousStage = step;
        featureSteps.forEach((stage,index) => stage.classList.toggle("active",index===step));
        $("#storyStep").textContent = String(step+1).padStart(2,"0") + " / 03";
      }
      if (featureWrap && rect.bottom > -100 && rect.top < innerHeight + 100) {
        featureWrap.style.filter = "brightness(" + (0.88 + progress * .12).toFixed(3) + ")";
      }
    }
    if (!onMobile.matches && scene && heroDevice) {
      const rect = scene.getBoundingClientRect();
      if (rect.bottom > -100 && rect.top < innerHeight+100) {
        const offset = Math.max(-1, Math.min(1, (rect.top - innerHeight*.42) / innerHeight));
        heroDevice.style.transform = "rotateY(" + (-12 + offset * 1.5).toFixed(2) + "deg) rotateX(5deg) rotateZ(-1.5deg) translate3d(0," + (offset * -15).toFixed(1) + "px,0)";
      }
    }
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateMotion);
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  window.addEventListener("resize", onScroll, {passive:true});
  updateMotion();

  // Deep-link to full text without losing the journal collection.
  if (location.hash.startsWith("#note-")) {
    const id = decodeURIComponent(location.hash.slice(6));
    setTimeout(() => openArticle(id, false), 0);
  }
})();
