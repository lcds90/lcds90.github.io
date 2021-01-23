var once = true;

document.addEventListener("DOMContentLoaded", function (event) {
  gsap.set("#body", { overflow: "hidden" });
  detectTime(".time")
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  let anim1 = document.getElementsByClassName("animate-left");
  let anim2 = document.getElementsByClassName("animate-right");
  let anim3 = document.getElementsByClassName("animate-fade");

  removeAttr(anim1, "uk-scrollspy");
  removeAttr(anim2, "uk-scrollspy");
  removeAttr(anim3, "uk-scrollspy");

  // Controle de ativar atributos de animação após animação pora não interromper GSAP
  document.getElementById("body").addEventListener("scroll", function (event) {
    var scroll = this.scrollTop;
    if (scroll >= 570) {
      activeAnimationOnce();
    }
  });


  var tl = gsap.timeline();
  var tl2 = gsap.timeline();
  var tl4 = gsap.timeline({ delay: 5 });

  var tg1 = gsap.from(".text", {
    rotation: 360,
    x: 5000,
    scale: 3,
    delay: 5,
    duration: 5,
    ease: "power3.inOut",
  });

  var tg2 = gsap.from(".texts", { y: 1000, delay: 9, duration: 2 });

  tl.from(".photo", { x: 1500, duration: 4 }).from(".uk-navbar", {
    y: 1000,
    duration: 5,
  });

  tl2
    .from(".line", { opacity: 0, width: "100%", duration: 4, stagger: 0.1 })
    .to(".line", { width: "2px", x: 200, duration: 2.5 })
    .to(".line", { opacity: 0, x: 300, duration: 1 })
    .to(".line", { opacity: 1, x: -10, width: "100%", duration: 2 })
    .to(".line", { opacity: 1, y: 1000, duration: 2 })
    .to(".line", { display: "none", duration: 1 })
    .set("#body", { overflow: "auto", duration: 1 });

  tl4
    .to(".photo", { x: 150, duration: 1.5, ease: Circ.easeOut })
    .to(".photo", { x: 0, duration: 2.5, ease: Circ.easeOut });
});

function setAnimations(classname, attr, cls) {
  for (i = 0; i < classname.length; i++) {
    classname.item(i).setAttribute(attr, cls);
  }
}

function removeAttr(classname, attr) {
  for (i = 0; i < classname.length; i++) {
    classname.item(i).getAttribute(attr);
    classname.item(i).removeAttribute(attr);
  }
}

function activeAnimationOnce() {
  let anim1 = document.getElementsByClassName("animate-left");
  let anim2 = document.getElementsByClassName("animate-right");
  let anim3 = document.getElementsByClassName("animate-fade");

  if (once == true) {
    setAnimations(
      anim1,
      "uk-scrollspy",
      "cls: uk-animation-slide-right; repeat: true"
    );
    setAnimations(
      anim2,
      "uk-scrollspy",
      "cls: uk-animation-slide-left; repeat: true"
    );
    setAnimations(
      anim3,
      "uk-scrollspy",
      "cls: uk-animation-fade; repeat: true"
    );
    console.log("Seja bem-vindo ao portfolio de Leonardo Conceição dos Santos.");
  }
  once = false;
}

function detectTime(divname){
  let d = new Date();
  let div = document.querySelector(divname)
  if(d.getHours() >= 6 && d.getHours() <= 12){
    div.innerHTML = "Bom dia";
  } else if(d.getHours() >= 13 && d.getHours() <= 18){
    div.innerHTML = "Boa tarde";
  } else if (d.getHours() >= 19 && d.getHours == 23){
    div.innerHTML = "Boa noite";
  } else {
    div.innerHTML = "Olá";
  }
}