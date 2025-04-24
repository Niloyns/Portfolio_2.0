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
gsap.from(".project-section h2", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".project-section h2",
    start: "top 90%",
    end: "top 35",
    scrub: 2,
  },
});

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".project_container");

gsap.to(container, {
  x: () => -(container.scrollWidth - window.innerWidth), // key part
  ease: "none",
  scrollTrigger: {
    trigger: ".project-section",
    start: "top top",
    end: () => "+=" + (container.scrollWidth - window.innerWidth),
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});
