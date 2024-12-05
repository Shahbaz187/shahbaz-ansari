gsap.from('.skill-line', {
    width: '0%',
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".skills-container",
        scroller: "body",
        start: "top 70%",
    }
})

gsap.from('.skill-line2', {
    width: '0%',
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".skills-container",
        scroller: "body",
        start: "top 70%",
    }
})