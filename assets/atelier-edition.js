/* Atelier navigation: reveal the main navigation only after the cinematic welcome. */
(() => {
 const intro=document.getElementById("lampIntro");
 if(!intro)return;
 const update=()=>document.body.classList.toggle("past-lamp",intro.getBoundingClientRect().bottom <= 110);
 document.addEventListener("scroll",update,{passive:true});
 window.addEventListener("resize",update,{passive:true});
 update();
})();