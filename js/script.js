const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/* GSAP */
let tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 2 } });

tl.to("h1", {
  "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  opacity: 1,
  y: 0,
  duration: 2,
});

tl.to(
  ".hero-p",
  {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 1,
  },
  "-=1.4"
);

tl.to(
  ".background-image",
  {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    x: 0,
    duration: 1.3,
  },
  "-=1.6"
);

tl.to(
  ".hero-img",
  {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    x: 0,
    duration: 1.3,
  },
  "-=1.5"
);

tl.to(
  ".hero-btn",
  {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    x: 0,
    duration: 1,
  },
  "-=2.2"
);

/* Scroll Trigger */
gsap.registerPlugin(ScrollTrigger);

gsap.to(".why-content-gsap", {
  x: 0,
  duration: 1,
  scrollTrigger: ".why-content-gsap",
});

gsap.to(".why-content-gsap2", {
  x: 0,
  duration: 1.2,
  scrollTrigger: ".why-content-gsap",
});

gsap.to(".why-item1", {
  y: 0,
  duration: 1,
  scrollTrigger: ".why-content-gsap2",
});

gsap.to(".why-item2", {
  y: 0,
  duration: 1.2,
  scrollTrigger: ".why-content-gsap2",
});

gsap.to(".why-item3", {
  y: 0,
  duration: 1.4,
  scrollTrigger: ".why-content-gsap2",
});

gsap.to(".why-item4", {
  y: 0,
  duration: 1.6,
  scrollTrigger: ".why-content-gsap2",
});

gsap.to(".article-heading-gsap", {
  x: 0,
  duration: 1,
  scrollTrigger: ".article-heading-gsap",
});

gsap.to(".article-1", {
  y: 0,
  duration: 1,
  scrollTrigger: ".article-heading-gsap",
});

gsap.to(".article-2", {
  y: 0,
  duration: 1.2,
  scrollTrigger: ".article-heading-gsap",
});

gsap.to(".article-3", {
  y: 0,
  duration: 1.4,
  scrollTrigger: ".article-heading-gsap",
});

gsap.to(".article-4", {
  y: 0,
  duration: 1.6,
  scrollTrigger: ".article-heading-gsap",
});
