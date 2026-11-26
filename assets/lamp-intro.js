/* MENAT — photo-real studio scene with real HTML and genuine on/off controls.
 * The image is a clean background: no headline or navigation is baked into it.
 * Starts DARK on every fresh load. First touch = illuminate; chain or switch = off.
 */
(() => {
  "use strict";
  const scene = document.getElementById("lampIntro");
  const awaken = document.getElementById("lampAwaken");
  const cord = document.getElementById("lampCord");
  const toggleButton = document.getElementById("lampLightToggle");
  const instruction = document.getElementById("lampInstructionText");

  if (!scene || !awaken || !cord || !toggleButton) return;
  let lit = false;
  let pressed = null;
  let suppressCordClick = false;
  let bloomTimer = null;

  const isEnglish = () => document.documentElement.lang === "en";

  const updateAccessibleText = () => {
    const en = isEnglish();
    cord.setAttribute("aria-label", en
      ? (lit ? "Pull lamp chain to turn the light off" : "Pull lamp chain to turn the light on")
      : (lit ? "اسحبي خيط المصباح لإطفاء الضوء" : "اسحبي خيط المصباح لتشغيل الضوء"));
    cord.setAttribute("aria-pressed", String(lit));
    toggleButton.setAttribute("aria-pressed", String(lit));
    toggleButton.setAttribute("aria-label", en ? "Switch off the light" : "إطفاء الإضاءة");
    awaken.setAttribute("aria-label", en ? "Touch to switch the light on" : "اضغطي لإضاءة المكان");
    if (instruction) instruction.textContent = en
      ? "Pull the lamp chain to change the light"
      : "اسحبي خيط المصباح لتبديل الإضاءة";
  };

  const update = (next, animate = false) => {
    lit = !!next;
    scene.dataset.lit = String(lit);
    awaken.tabIndex = lit ? -1 : 0;
    toggleButton.tabIndex = lit ? 0 : -1;
    cord.tabIndex = lit ? 0 : -1;
    updateAccessibleText();
    window.clearTimeout(bloomTimer);
    scene.classList.remove("is-igniting");
    if (lit && animate) {
      void scene.offsetWidth;
      scene.classList.add("is-igniting");
      bloomTimer = window.setTimeout(() => scene.classList.remove("is-igniting"), 1850);
    }
  };

  // An entire dark scene becomes a large first-click light switch.
  awaken.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!lit) update(true, true);
  });

  // While illuminated, touching the background also switches the lamp off.
  // Navigation and interactive controls are intentionally exempt.
  scene.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    update(!lit, !lit);
  });

  toggleButton.addEventListener("click", (event) => {
    event.stopPropagation();
    update(false);
  });

  cord.addEventListener("click", (event) => {
    event.stopPropagation();
    if (suppressCordClick) return;
    update(!lit, !lit);
  });

  // Pulling the existing chain in the photograph is supported in addition to a
  // regular click or keyboard activation.
  cord.addEventListener("pointerdown", (event) => {
    if (!lit) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.stopPropagation();
    pressed = { id: event.pointerId, initialY: event.clientY };
    cord.classList.add("is-dragging");
    try { cord.setPointerCapture(event.pointerId); } catch (_) {}
  });

  cord.addEventListener("pointermove", (event) => {
    if (!pressed || pressed.id !== event.pointerId) return;
    const delta = Math.min(42, Math.max(0, event.clientY - pressed.initialY));
    cord.style.setProperty("--cord-travel", delta + "px");
  });

  function release(event, cancelled = false) {
    if (!pressed || pressed.id !== event.pointerId) return;
    const downward = event.clientY - pressed.initialY;
    pressed = null;
    cord.classList.remove("is-dragging");
    cord.style.removeProperty("--cord-travel");
    if (!cancelled && downward >= 16) {
      suppressCordClick = true;
      cord.classList.add("is-pulled");
      update(!lit, !lit);
      window.setTimeout(() => {
        suppressCordClick = false;
        cord.classList.remove("is-pulled");
      }, 210);
    }
  }

  cord.addEventListener("pointerup", (event) => release(event));
  cord.addEventListener("pointercancel", (event) => release(event, true));
  cord.addEventListener("lostpointercapture", (event) => {
    if (pressed?.id === event.pointerId) release(event, true);
  });

  // Low-amplitude optical movement lends depth without fake zooming/warping.
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    scene.addEventListener("pointermove", (event) => {
      if (!lit || event.pointerType !== "mouse" || pressed) return;
      const x = ((event.clientX / Math.max(1, scene.clientWidth)) - 0.5) * -7;
      const y = ((event.clientY / Math.max(1, scene.clientHeight)) - 0.5) * -4;
      scene.style.setProperty("--scene-move-x", x.toFixed(2) + "px");
      scene.style.setProperty("--scene-move-y", y.toFixed(2) + "px");
    }, { passive: true });
    scene.addEventListener("pointerleave", () => {
      scene.style.removeProperty("--scene-move-x");
      scene.style.removeProperty("--scene-move-y");
    }, { passive: true });
  }

  new MutationObserver(updateAccessibleText).observe(document.documentElement, {
    attributes: true, attributeFilter: ["lang"]
  });

  update(false);
})();
