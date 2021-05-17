const tl = gsap.timeline();


function introAnimation(){
    tl.from("#sectionMenu", {y: -1000, duration: 5, ease: "power3"})
    tl.from(".menu", {x: 1000, opacity: 0, rotate: 360, ease: "linear", stagger: .5, duration: 2}, "-=3.5")
    tl.from("h1", {rotate:20, x: 1000, duration: 2, ease: "linear"}, "-=3.5")
    tl.from("h2", {x: -1000, duration: 3, ease: "power2"},  "-=3")
    tl.from("#about-me", {x: -1000, duration: 2}, "-=5")
    tl.from(".about-me__text", {x: -100, zIndex: -1,opacity:0, duration:1, delay: 2}, "-=5")
    tl.from(".photo-circle", {zIndex: 2,opacity: 0, duration: 2, ease: "power"}, "-=5")
}

introAnimation();