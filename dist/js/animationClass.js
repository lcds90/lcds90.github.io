class AnimationClass {
  constructor(once) {
    this.once = once;
  }
  intro(div_body, div_line, div_time) {
    console.log(
      "Seja bem-vindo ao portfolio de Leonardo Conceição dos Santos."
    );
    this.detectTime(div_time);

    this.animationStart(div_line, div_body);
    // sempre no topo da pagina ao reiniciar

    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }

  nameComponent(divname, str) {
    let divName = document.querySelectorAll(divname);
    let string = str.split("");

    console.log(divName);
    for (let i = 0; i < string.length; i++) {
      string[i] = `<span class="sl${i + 1}">${string[i]}</span>`;
    }
    // console.log(string);
    string = string.join("");
    // console.log(string)

    for (let e = 0; e < divName.length; e++) {
      divName[e].innerHTML = string;
    }
  }

  detectTime(divname) {
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
    div.innerHTML = greeting;
  }

  letter(div, str1, str2, str3) {
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

  setAnimations(classname, attr, cls) {
    classname = document.querySelectorAll(classname);
    for (let i = 0; i < classname.length; i++) {
      classname.item(i).setAttribute(attr, cls);
    }
  }

  removeAttr(classname, attr) {
    classname = document.querySelectorAll(classname);
    for (let i = 0; i < classname.length; i++) {
      classname.item(i).getAttribute(attr);
      classname.item(i).removeAttribute(attr);
    }
  }

  animationStart(div_line, div_body){
  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let tl3 = gsap.timeline();
  let tl4 = gsap.timeline({delay: 3});
  let tl5 = gsap.timeline();
  
  tl
  .set(div_body, { overflow: "hidden" })
  .from(div_line, { opacity: 0, width: "100%", duration: 3, stagger: 0.1 })
  .to(div_line,{ width: "2px", x: 200, duration: 2 })
  .to(div_line,{ opacity: 0, x: 300, duration: 1 })
  .to(div_line,{ opacity: 1, x: -10, width: "100%", duration: 2 })
  .to(div_line,{ opacity: 1, y: 1000, duration: 2 })
  .to(div_line,{ display: "none", duration: 0.5 })
  .set(div_body, { overflow: "auto", duration: 0.5 });

  tl2
  .from(".photo", { x: 1500, duration: 3 })
  .from(".uk-navbar", {
    y: 1000,
    duration: 3,
  });

  tl3
  .to(".photo", { x: 150, duration: 2, ease: Circ.easeOut })
  .to(".photo", { x: 0, duration: 2, ease: Circ.easeOut });
  
  tl4
  .from(".text", {
    rotation: 360,
    x: 5000,
    scale: 3,
    delay: 1.5,
    duration: 2.5,
    ease: "power3.inOut",
  })
  .from(".texts", { y: 1000, delay: .5, duration: 2.5 });


  }
  /* 
  scrollToActivateAnimation() {
    // Controle de ativar atributos de animação após animação para não interromper GSAP
    document
      .getElementById("body")
      .addEventListener("scroll", function (event) {
        var scroll = this.scrollTop;
        if (scroll >= 750) {
          this.activeAnimationOnce();
          console.log(this.once);
        }
      });
  } */

/*   activeAnimation() {
    document
      .getElementById("body")
      .addEventListener("scroll", function (event) {

        var scroll = this.scrollTop;
        if (scroll >= 750) {
          if (this.once == false) {
          }
          this.once = false;
        }
      });
  }
  */
} 

// module.exports = Animation();
