// Typed.js for typing animation
let skill = new Typed("#element", {
  strings: [
    "Software Engineer",
    "Front End Developer",
    "Back End Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
  ],
  typeSpeed: 90,
  loop: true,
});

// GSAP animation timeline
gsap
  .timeline()
  .from(
    ".image img",
    {
      x: 500, // Slide image in from right
      duration: 6,
      ease: "power2.out",
    },
    0
  )

  .from(
    "nav",
    {
      y: -50, // Slide nav in from top
      duration: 2,
      opacity: -2,
      ease: "power2.out",
    },
    0
  )

  .from(
    "nav ul li",
    {
      y: -100, // Slide nav items in from top
      duration: 2,
      opacity: -5,
      delay: 0.5,
      ease: "power2.out",
      stagger: 0.3,
    },
    0
  )

  .from(
    ".name",
    {
      x: -100, // Slide name from left
      color: "#1dcd9f", // Start with blue color
      duration: 4,
      repeat: -1,
      yoyo: true,
    },
    0
  )

  .from(
    ".titel",
    {
      color: "#1dcd9f",
      y: 50, // Slide title from below
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.out",
    },
    0
  )

  .from(
    ".typed_skill",
    {
      opacity: 0,
      y: 100,
      duration: 4,
      ease: "power2.out",
    },
    0
  )

  .from(
    ".sumary",
    {
      opacity: 0,
      y: 100, // Fade and move about section up
      delay: 0.5,
      duration: 4,
      ease: "power2.out",
    },
    0
  )
  .from(
    ".social_icon a",
    {
      opacity: 0,
      y: 100,
      delay: 1,
      duration: 2,
    },
    0
  )

  .from(
    ".social_icon i",
    {
      opacity: 0,
      y: 100,
      delay: 1,
      duration: 2, // Reduced duration for each icon
      ease: "power2.out",
      stagger: 0.3, // Stagger the animation by 0.3 seconds
    },
    0
  );

// Scroll-triggered animation for .about-section h3
gsap.from(".about-section h3", {
  scale: 0,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section h3",
    scroller: "body",
    start: "top 95%",
    scrub: 1,
  },
});

// .about animation
gsap.from(".about", {
  x: -200,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "top 35%",
    scrub: 2,
  },
});

// .edu-container animation
gsap.from(".edu-container", {
  x: 200,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".edu-container",
    start: "top 80%",
    end: "top 35%",
    scrub: 2,
  },
});

gsap.from(".skillSection h3", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".skillSection h3",
    start: "top 90%",
    end: "top 35",
    scrub: 2,
  },
});

// // Left to right scroll
gsap.to(".skill_1", {
  xPercent: -100,
  ease: "linear",
  duration: 20,
  repeat: -1,
});

gsap.to(".skill_2", {
  xPercent: -100,
  ease: "linear",
  duration: 20,
  repeat: -1,
});

gsap.from(".project-section h2", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".project-section h2",
    start: "top 90%",
    end: "top 35%",
    scrub: 2,
  },
});

gsap.registerPlugin(ScrollTrigger);

const projectContainer = document.querySelector(".project_container");

if (projectContainer) {
  gsap.to(projectContainer, {
    x: () => -(projectContainer.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".project-section",
      start: "top top",
      end: () => "+=" + (projectContainer.scrollWidth - window.innerWidth),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

// --- About Section Animations ---
// gsap.from(".about-title", {
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".about-section h3",
//     scroller: "body",
//     start: "top 95%",
//     scrub: 1,
//   },
// });

gsap.from(".about-card", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".about-card",
    start: "top 85%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".about-image img", {
  scale: 0.6,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".about-image img",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".about-text", {
  x: 80,
  opacity: 0,
  duration: 1.1,
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".fixedSkill_1 ul i", {
  scale: 0.5,
  opacity: 0,
  y: 40,
  duration: 0.7,
  stagger: 0.12,
  ease: "back.out(2)",
  scrollTrigger: {
    trigger: ".fixedSkill_1 ul",
    start: "top 95%",
    end: "top 60%",
    scrub: 1,
    // markers: true,
  },
});

// gsap.from(".fixedSkill_1 ul i", {
//   scale: 0.5,
//   opacity: 0,
//   y: 40,
//   duration: 0.7,
//   stagger: 0.12,
//   ease: "back.out(2)",
//   scrollTrigger: {
//     trigger: ".fixedSkill_1 ul",
//     start: "top 95%",
//     end: "top 60%",
//     scrub: 1,
//     markers: true,
//   },
// });

// --- Contact Section Animations ---
gsap.from(".contact-title", {
  scale: 0.7,
  opacity: 0,
  duration: 1.1,
  scrollTrigger: {
    trigger: ".contact-title",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".contact-form-card", {
  x: -120,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".contact-form-card",
    start: "top 85%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".contact-details-card", {
  x: 120,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".contact-details-card",
    start: "top 85%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".contact-input", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".contact-form-card",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});
