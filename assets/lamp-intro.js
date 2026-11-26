(() => {
  const scene=document.getElementById("lampIntro");
  if(!scene)return;
  const artwork=document.getElementById("lampArt");
  const switcher=document.getElementById("lampSwitch");
  let lit=true;
  const apply=()=>{
    scene.dataset.lit=String(lit);
    artwork.setAttribute("aria-pressed",String(lit));
    switcher.setAttribute("aria-pressed",String(lit));
    artwork.setAttribute("aria-label",lit?"إطفاء المصباح / Turn light off":"إضاءة المصباح / Turn light on");
    switcher.setAttribute("aria-label",lit?"إطفاء الإضاءة / Turn light off":"تشغيل الإضاءة / Turn light on");
  };
  const toggle=()=>{lit=!lit;apply();};
  artwork.addEventListener("click",toggle);
  switcher.addEventListener("click",toggle);
  apply();
})();