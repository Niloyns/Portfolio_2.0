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

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// =====================
// HERO SECTION ANIMATION
// =====================
gsap
  .timeline()
  .from(
    ".image img",
    {
      x: 500,
      duration: 6,
      ease: "power2.out",
    },
    0
  )
  .from(
    "nav",
    {
      y: -50,
      duration: 2,
      opacity: -2,
      ease: "power2.out",
    },
    0
  )
  .from(
    "nav ul li",
    {
      y: -100,
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
      x: -100,
      color: "#1dcd9f",
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
      y: 50,
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
      y: 100,
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
      duration: 2,
      ease: "power2.out",
      stagger: 0.3,
    },
    0
  );

// =====================
// ABOUT SECTION ANIMATION
// =====================
gsap.from(".about-title", {
  scale: 0,
  opacity: 0,
  duration: 1.1,
  scrollTrigger: {
    trigger: ".about-title",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

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

gsap.from(".about-skills-row i", {
  scale: 0.5,
  opacity: 0,
  y: 40,
  duration: 0.7,
  stagger: 0.12,
  ease: "back.out(2)",
  scrollTrigger: {
    trigger: ".about-skills-row",
    start: "top 95%",
    end: "top 60%",
    scrub: 1,
  },
});

// =====================
// SKILLS SECTION ANIMATION
// =====================
gsap.from(".skillSection h3", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".skillSection h3",
    start: "top 90%",
    end: "top 35%",
    scrub: 2,
  },
});

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
    scrub: 3,
    invalidateOnRefresh: true,
  },
});

// =====================
// PROJECT SECTION ANIMATION
// =====================
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

const projectContainer = document.querySelector(".project_container");
if (projectContainer) {
  gsap.to(projectContainer, {
    x: () => -(projectContainer.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".project-section",
      start: "top top",
      end: () => "+=" + (projectContainer.scrollWidth - window.innerWidth),
      scrub: 1.5,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

// =====================
// CONTACT SECTION ANIMATION
// =====================
gsap.from(".contact-title", {
  scale: 0,
  opacity: 0,
  duration: 1.1,
  scrollTrigger: {
    trigger: ".contact-title",
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
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

// =====================
// HAMBURGER MENU TOGGLE
// =====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navBackdrop = document.querySelector(".nav-backdrop");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
  if (navLinks.classList.contains("open")) {
    gsap.fromTo(
      navLinks,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
    navBackdrop.classList.add("active");
    document.body.classList.add("menu-open");
  } else {
    navBackdrop.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
}

if (hamburger && navLinks && navBackdrop) {
  hamburger.addEventListener("click", toggleMenu);
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  });
  navBackdrop.addEventListener("click", toggleMenu);
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
        navBackdrop.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });
}
