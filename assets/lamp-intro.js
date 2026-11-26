/* Menat / Light Study — press, pull, or keyboard-activate the hanging cord. */
(() => {
  "use strict";
  const scene = document.getElementById("lampIntro");
  const cord = document.getElementById("lampCord");
  if (!scene || !cord) return;

  const instruction = document.getElementById("lampInstructionText");
  let isOn = true;
  let pointerStart = null;
  let suppressClick = false;
  let resetAnimation = null;

  const render = () => {
    scene.dataset.lit = String(isOn);
    cord.setAttribute("aria-pressed", String(isOn));
    cord.setAttribute(
      "aria-label",
      isOn ? "اسحب الخيط لإطفاء المصباح" : "اسحب الخيط لإضاءة المصباح"
    );
    if (instruction) {
      instruction.textContent = "اسحب الخيط لتغيّر الضوء";
    }
  };

  const playCord = () => {
    cord.classList.remove("is-pulled");
    void cord.offsetWidth;
    cord.classList.add("is-pulled");
    cord.style.setProperty("--cord-travel", "17px");
    clearTimeout(resetAnimation);
    resetAnimation = setTimeout(() => {
      cord.classList.remove("is-pulled");
      cord.style.setProperty("--cord-travel", "0px");
    }, 170);
  };

  const toggle = () => {
    isOn = !isOn;
    playCord();
    render();
  };

  // A regular click, tap or keyboard Enter/Space always operates the lamp.
  cord.addEventListener("click", () => {
    if (suppressClick) return;
    toggle();
  });

  // Dragging the real cord also operates the lamp, with tactile visual feedback.
  cord.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart = { id: event.pointerId, y: event.clientY };
    cord.classList.add("is-dragging");
    try { cord.setPointerCapture(event.pointerId); } catch (_) { /* no capture available */ }
  });

  cord.addEventListener("pointermove", (event) => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const movement = Math.max(0, Math.min(44, event.clientY - pointerStart.y));
    cord.style.setProperty("--cord-travel", movement + "px");
  });

  const release = (event, cancelled = false) => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const dragged = !cancelled && event.clientY - pointerStart.y >= 18;
    pointerStart = null;
    cord.classList.remove("is-dragging");
    cord.style.setProperty("--cord-travel", "0px");
    if (dragged) {
      // Prevent the synthetic click following pointerup from toggling twice.
      suppressClick = true;
      toggle();
      setTimeout(() => { suppressClick = false; }, 0);
    }
  };

  cord.addEventListener("pointerup", event => release(event));
  cord.addEventListener("pointercancel", event => release(event, true));
  cord.addEventListener("lostpointercapture", event => {
    if (pointerStart?.id === event.pointerId) release(event, true);
  });

  render();
})();