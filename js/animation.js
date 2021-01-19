gsap.set("#body", { overflow: "hidden" });
var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline({repeat: -1, repeatDelay: 1});

var tg1 = gsap.from("#text", {rotation: 360, x: 5000, scale:3, delay: 5, duration: 5, ease: "power3.inOut"})
var tg2 = gsap.from(".texts", {y:1000, delay: 9, duration: 2})

tl.from("#photo", { x: 1500, duration: 4 })
  .from(".uk-navbar", { y: 1000, duration: 5 })

tl2
  .from("#line", { opacity: 0, width: "100%", duration: 4, stagger: 0.1 })
  .to("#line", { width: "2px", x: 200, duration: 2.5 })
  .to("#line", { opacity:0, x: 300, duration: 1 })
  .to("#line", {opacity: 1,x:-10, width: "100%", duration: 2 })
  .to("#line", {opacity: 1,y: 1000, duration: 5 })
  .to("#line", { display: "none" })
  .set("#body", { overflow: "auto" });;

  tl3
  .from("#intro", {x: 0, y:0, duration: 2})
  .to("#intro", {x: 5, y : 10, duration: 1, })
  .to("#intro", {x: 0, y:0, duration: 1,})
  .to("#intro", {x: -10, y: -10, duration: 1,})
  .to("#intro", {x: 0, y: 0, duration: 1,})