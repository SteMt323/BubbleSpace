// parallax.js
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

  // 1) Background radial
  gsap.fromTo(
    "body",
    { backgroundPosition: "center bottom" },
    {
      backgroundPosition: "center top",
      ease: "none",
      scrollTrigger: {
        trigger: ".scene-moon",
        start:   "top top",
        endTrigger: ".scene-mountains",
        end:     "bottom top",
        scrub:   true
      }
    }
  );

  // 2) Posiciones iniciales de montañas…
  const lejanas  = document.getElementById("montaña_lejana");
  const media1   = document.getElementById("montaña_media_1");
  const media2   = document.getElementById("montaña_media_2");
  const cercanas = document.getElementById("montaña_cercana");

  gsap.set(lejanas,  { x: -500, y: 1200 });
  gsap.set(cercanas, { x:    0, y: 1200 });
  gsap.set(media1,   { x:  500, y: 1200 });
  gsap.set(media2,   { x:  800, y: 1200 });

  // 3) ScrollTrigger para escalar la luna
  gsap.timeline({
    scrollTrigger: {
      trigger: ".scene-mountains",
      start:   "top bottom",
      end:     "bottom bottom",
      scrub:   true
    }
  })
  .to(".moon", {
    scale: 3,
    ease:  "none"
  });

  // 4) ScrollTrigger mostrar/ocultar montañas…
  ScrollTrigger.create({
    trigger: document.body,
    start:   "bottom bottom",
    onEnter: () => {
      gsap.to([lejanas, media1, media2, cercanas], { x: 0, y: 200, duration: 1, ease: "power1.out" });
      gsap.to(".moon-wrapper", {
      scale:    3,
      y: 300,
      duration: 1,
      ease:     "power1.out"
    });
    },
    onLeaveBack: () => {
      gsap.to(lejanas,  { x: -500, y: 1200, duration: 1, ease: "power1.out" });
      gsap.to(cercanas, { x:  0,   y: 1200, duration: 1, ease: "power1.out" });
      gsap.to(media1,   { x:  500, y: 1200, duration: 1, ease: "power1.out" });
      gsap.to(media2,   { x:  800, y: 1200, duration: 1, ease: "power1.out" });
      gsap.to(".moon-wrapper", {
      scale:    1,
      y: 0,
      duration: 1,
      ease:     "power1.out"
    });
    }
  });
});
