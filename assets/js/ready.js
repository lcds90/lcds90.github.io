var classnames = {
  left: ".animate-left",
  right: ".animate-right",
  fade: ".animate-fade",
  circle: ".circle",
  circleImg: ".circle img",
  intro: ".intro",
  top: ".animate-top",
  bottom: ".animate-bottom",
};

// console.log(classnames[0]);
var anim = new AnimationClass(true);

anim.intro("#body", ".line", "#time");
// anim.nameComponent(classnames.intro, "Leonardo Santos");
anim.removeAttr(classnames.top, "uk-scrollspy");
anim.removeAttr(classnames.bottom, "uk-scrollspy");
anim.removeAttr(classnames.left, "uk-scrollspy");
anim.removeAttr(classnames.right, "uk-scrollspy");
anim.removeAttr(classnames.fade, "uk-scrollspy");


/* async ()=>{
  var animationLine = await anim.animationLine();
  console.log(animationLine);

} */

setTimeout(function () {
  // anim.activeAnimation();

  anim.letter(
    "#container-intro",
    "Desenvolvimento Front-End",
    "Back-End",
    "Em constante evolução ao fullstack! :)"
  );
  anim.setAnimations(
    classnames.circle,
    "uk-scrollspy",
    "cls: uk-animation-slide-top; repeat: true"
  );
  anim.setAnimations(
    classnames.circleImg,
    "uk-scrollspy",
    "cls: uk-animation-slide-bottom; delay: 500; repeat: true"
  );
}, 5);

document
      .getElementById("body")
      .addEventListener("scroll", function (event) {
        var scroll = this.scrollTop;
        if (scroll >= 500) {
          anim.setAnimations(
            classnames.top,
            "uk-scrollspy",
            "cls: uk-animation-slide-top; repeat: true"
          );
          anim.setAnimations(
            classnames.bottom,
            "uk-scrollspy",
            "cls: uk-animation-slide-bottom; delay: 500; repeat: true"
          );
/*           anim.setAnimations(
            "#about-divl",
            "uk-scrollspy",
            "cls: uk-animation-slide-left; repeat: true"
          );
          anim.setAnimations(
            "#about-divr",
            "uk-scrollspy",
            "cls: uk-animation-slide-right; repeat: true"
          ); */
          anim.setAnimations(
            "#links",
            "uk-scrollspy",
            "cls: uk-animation-slide-top; repeat: true"
          );
          anim.once = false;
        }
      })

/* 
setTimeout(() => {
  anim.setAnimations(
    classnames.top,
    "uk-scrollspy",
    "cls: uk-animation-slide-top; repeat: true"
  );
  anim.setAnimations(
    classnames.bottom,
    "uk-scrollspy",
    "cls: uk-animation-slide-bottom; delay: 500; repeat: true"
  );
}, 3000);

 */