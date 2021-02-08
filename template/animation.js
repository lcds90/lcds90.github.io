var once = true;

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Seja bem-vindo ao portfolio de Leonardo Conceição dos Santos.");
  gsap.set("#body", { overflow: "hidden" });
  detectTime("#time");
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  let divName = document.querySelectorAll(".intro");
  let name = "Leonardo Santos";
  name = name.split("");

  for (i = 0; i < name.length; i++) {
    name[i] = `<span class="sl${i + 1}">${name[i]}</span>`;
  }
  // console.log(name);
  name = name.join("");
  // console.log(name)

  for (let e = 0; e < divName.length; e++) {
    divName[e].innerHTML = name;
  }

  let anim1 = document.getElementsByClassName("animate-left");
  let anim2 = document.getElementsByClassName("animate-right");
  let anim3 = document.getElementsByClassName("animate-fade");
  let anim4 = document.getElementsByClassName("circle");
  let anim5 = document.querySelectorAll(".circle img");

  removeAttr(anim1, "uk-scrollspy");
  removeAttr(anim2, "uk-scrollspy");
  removeAttr(anim3, "uk-scrollspy");

  setTimeout(function () {
    letter(
      "#container-intro",
      "Desenvolvimento Front-End",
      "Back-End",
      "Em constante evolução ao fullstack! :)"
    );
    setAnimations(
      anim4,
      "uk-scrollspy",
      "cls: uk-animation-slide-top; repeat: true"
    );
    setAnimations(
      anim5,
      "uk-scrollspy",
      "cls: uk-animation-slide-bottom; delay: 500; repeat: true"
    );
  }, 5000);

  // Controle de ativar atributos de animação após animação pora não interromper GSAP
  document.getElementById("body").addEventListener("scroll", function (event) {
    var scroll = this.scrollTop;
    if (scroll >= 750) {
      activeAnimationOnce();
    }
  });

  var tl = gsap.timeline();
  var tl2 = gsap.timeline();
  var tl4 = gsap.timeline({ delay: 3 });

  var tg1 = gsap.from(".text", {
    rotation: 360,
    x: 5000,
    scale: 3,
    delay: 3,
    duration: 3,
    ease: "power3.inOut",
  });

  var tg2 = gsap.from(".texts", { y: 1000, delay: 7, duration: 2 });

  tl.from(".photo", { x: 1500, duration: 3 }).from(".uk-navbar", {
    y: 1000,
    duration: 3,
  });

  tl2
    .from(".line", { opacity: 0, width: "100%", duration: 3, stagger: 0.1 })
    .to(".line", { width: "2px", x: 200, duration: 2 })
    .to(".line", { opacity: 0, x: 300, duration: 1 })
    .to(".line", { opacity: 1, x: -10, width: "100%", duration: 2 })
    .to(".line", { opacity: 1, y: 1000, duration: 2 })
    .to(".line", { display: "none", duration: 0.5 })
    .set("#body", { overflow: "auto", duration: 0.5 });

  tl4
    .to(".photo", { x: 150, duration: 2, ease: Circ.easeOut })
    .to(".photo", { x: 0, duration: 2, ease: Circ.easeOut });
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
  }
  once = false;
}

function detectTime(divname) {
  let greeting;
  let d = new Date();
  let div = document.querySelectorAll(divname);
  if (d.getHours() >= 6 && d.getHours() <= 12) {
    greeting = "Bom dia, eu sou";
  } else if (d.getHours() >= 13 && d.getHours() <= 18) {
    greeting = "Boa tarde, eu sou";
  } else if (d.getHours() >= 19 && d.getHours <= 23) {
    greeting = "Boa noite, eu sou";
  } else {
    greeting = "Olá, eu sou";
  }

  for (let e = 0; e < div.length; e++) {
    div[e].innerHTML = greeting;
  }
}

function letter(div, str1, str2, str3) {
  var typewriter = new Typewriter(div, {
    loop: true,
  });

  typewriter
    .typeString(str1)
    .pauseFor(4000)
    .deleteChars(9)
    .typeString(str2)
    .pauseFor(4000)
    .deleteAll()
    .typeString(str3)
    .pauseFor(6000)
    .start();
}
