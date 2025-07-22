gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

  const lejanas  = document.getElementById("montaña_lejana");
  const media1   = document.getElementById("montaña_media_1");
  const media2   = document.getElementById("montaña_media_2");
  const cercanas = document.getElementById("montaña_cercana");

  gsap.set(lejanas,  { x: -500, y: 1200 });
  gsap.set(cercanas, { x:    0, y: 1200 });
  gsap.set(media1,   { x:  500, y: 1200 });
  gsap.set(media2,   { x:  800, y: 1200 });


  gsap.timeline({
    scrollTrigger: {
      trigger: ".scene-mountains",
      start:   "top bottom",
      end:     "+=2000", 
      scrub:   8,     
    }
  })
  .to(".moon", {
    scale: 3,
    ease:  "none"
  })
  .to(".moon", {
    ease: "none"
  });


  ScrollTrigger.create({
    trigger: document.body,
    start:   "bottom bottom",
    onEnter: () => {
      gsap.to(lejanas,  { x: 0, y: 160, duration: 2.2,   ease: "power1.out"});
      gsap.to(media1,   { x: 0, y: 220, duration: 2, ease: "power1.out"});
      gsap.to(media2,   { x: 0, y: 180, duration: 1.6, ease: "power1.out"});
      gsap.to(cercanas, { x: 0, y: 200, duration: 1.7, ease: "power1.out"});
      gsap.to(".moon-wrapper", {
        scale:    3,
        y: 300,
        duration: 1,
        ease:     "power1.out"
      });
    },
    onLeaveBack: () => {
      gsap.to(lejanas,  { x: -500, y: 1200, duration: 2.2,   ease: "power1.out"});
      gsap.to(media1,   { x:  500, y: 1200, duration: 2, ease: "power1.out"});
      gsap.to(media2,   { x:  800, y: 1200, duration: 1.6, ease: "power1.out"});
      gsap.to(cercanas, { x:    0, y: 1200, duration: 1.7, ease: "power1.out"});
      gsap.to(".moon-wrapper", {
        scale:    1,
        y: 0,
        duration: 1,
        ease:     "power1.out"
      });
    }
  });
});
