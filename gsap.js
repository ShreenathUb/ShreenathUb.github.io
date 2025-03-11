gsap.to(".hero-content h1", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.2
});

gsap.to(".hero-content p", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".hero-buttons button", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.8
});

// Scroll Down Indicator Fade In
gsap.to(".scroll-down", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    delay: 1.2
});

// Background Subtle Animation
gsap.to(".hero-background", {
    scale: 1.1,
    duration: 5,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
});

// Parallax Effect on Scroll
gsap.to(".hero-content", {
    yPercent: -10,
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 1
    }
});