/* MENAT / cinematic welcome: begin dark, ignite on first click.
   Pull/click the photographed lamp's chain to switch off and restart. */
(() => {
  "use strict";
  const scene = document.getElementById("lampIntro");
  const awaken = document.getElementById("lampAwaken");
  const cord = document.getElementById("lampCord");
  if (!scene || !awaken || !cord) return;

  const pullNote = document.getElementById("lampInstructionText");
  let isLit = false;
  let pointerStart = null;
  let suppressClick = false;
  let flareTimer = 0;

  const isEnglish = () => document.documentElement.lang === "en";

  const updateLabels = () => {
    const en = isEnglish();
    cord.setAttribute("aria-label", en
      ? (isLit ? "Pull the lamp chain to turn the light off" : "Turn on the lamp")
      : (isLit ? "اسحبي خيط المصباح لإطفاء الضوء" : "أضيئي المصباح"));
    cord.setAttribute("aria-pressed", String(isLit));
    awaken.setAttribute("aria-label", en ? "Turn on the light" : "اضغطي لإضاءة المكان");
    if (pullNote) pullNote.textContent = en
      ? "Pull the chain to switch the light"
      : "اسحبي الخيط لتبديل الإضاءة";
  };

  function setLight(next, userAction = false) {
    isLit = Boolean(next);
    scene.dataset.lit = String(isLit);
    awaken.tabIndex = isLit ? -1 : 0;
    updateLabels();

    if (isLit && userAction) {
      scene.classList.remove("is-igniting");
      // Restart the one-time light bloom only when the visitor turns it on.
      void scene.offsetWidth;
      scene.classList.add("is-igniting");
      window.clearTimeout(flareTimer);
      flareTimer = window.setTimeout(() => scene.classList.remove("is-igniting"), 1800);
    } else if (!isLit) {
      window.clearTimeout(flareTimer);
      scene.classList.remove("is-igniting");
    }
  }

  awaken.addEventListener("click", () => {
    if (!isLit) setLight(true, true);
  });

  cord.addEventListener("click", () => {
    if (suppressClick || !isLit) return;
    setLight(false);
  });

  cord.addEventListener("pointerdown", event => {
    if (!isLit) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart = { id: event.pointerId, y: event.clientY };
    cord.classList.add("is-dragging");
    try { cord.setPointerCapture(event.pointerId); } catch (_) { /* safe fallback */ }
  });

  cord.addEventListener("pointermove", event => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const travel = Math.max(0, Math.min(38, event.clientY - pointerStart.y));
    cord.style.setProperty("--cord-travel", travel + "px");
  });

  function release(event, cancelled = false) {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const dragged = !cancelled && (event.clientY - pointerStart.y >= 18);
    pointerStart = null;
    cord.classList.remove("is-dragging");
    cord.style.removeProperty("--cord-travel");
    if (dragged) {
      suppressClick = true;
      cord.classList.add("is-pulled");
      setLight(false);
      window.setTimeout(() => {
        suppressClick = false;
        cord.classList.remove("is-pulled");
      }, 120);
    }
  }

  cord.addEventListener("pointerup", event => release(event));
  cord.addEventListener("pointercancel", event => release(event, true));
  cord.addEventListener("lostpointercapture", event => {
    if (pointerStart?.id === event.pointerId) release(event, true);
  });

  // The site's language toggle changes the <html lang> without navigation.
  new MutationObserver(updateLabels).observe(document.documentElement, {
    attributes: true, attributeFilter: ["lang"]
  });

  setLight(false);
})();
