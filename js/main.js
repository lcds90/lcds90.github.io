const tl = gsap.timeline();


function introAnimation(){
    tl.from("#sectionMenu", {y: -1000, duration: 5, ease: "bounce"})
    tl.from("h1", {rotate:20, x: 1000, duration: 2, ease: "linear"}, "-=2.5")
    tl.from("h2", {x: -1000, duration: 3, ease: "power2"},  "-=2")
    tl.from("#about-me", {x: -1000, duration: 2}, "-=5")
    tl.from(".about-me__text", {x: -100, zIndex: -1,opacity:0, duration:1, delay: 2}, "-=4")
    tl.from(".photo-circle", {zIndex: 2,opacity: 0, duration: 2, ease: "power"}, "-=3.5")
}

introAnimation();