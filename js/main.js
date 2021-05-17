const tl = gsap.timeline();


function introAnimation(){
    tl.from("#sectionMenu", {y: -1000, duration: 5})
    tl.from("h1", {rotate:20, x: 1000, duration: 2}, "-=2.5")
    tl.from("h2", {x: -1000, duration: 3},  "-=2")
    tl.from("#about-me__text", {scale: 0,opacity:0, rotate: 180, duration:1})
    tl.from("")
}

introAnimation();