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
      y: -100, // Slide nav in from top
      duration: 2,
      ease: "power2.out",
    },
    0
  )
  .from(
    ".name",
    {
      x: -100, // Slide name from left
      color: "rgb(0, 0, 135)", // Start with blue color
      duration: 4,
      repeat: -1,
      yoyo: true,
    },
    0
  )
  .from(
    ".titel",
    {
      opacity: 0.5,
      y: 30, // Slide title from below
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.out",
    },
    0
  )
  .from(
    ".about",
    {
      opacity: 0,
      y: 100, // Fade and move about section up
      duration: 4,
      ease: "power2.out",
    },
    0
  );
