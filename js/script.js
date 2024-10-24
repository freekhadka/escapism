// Animation avec GSAP
gsap.to("#mainTitle", { duration: 1, opacity: 1, y: -50 });
gsap.to("p", { duration: 1, delay: 0.5, opacity: 1, y: -20 });

  // GSAP Animation for main title
  gsap.to("#mainTitle", {
    duration: 1.5,
    opacity: 1,
    y: -50,
    ease: "power2.out",
    delay: 0.5
});

// Additional animations for the video section
gsap.from(".video-section", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power2.out",
    delay: 2
});

// Animation for text section
gsap.from(".text-section", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power2.out",
    delay: 2.5
});




