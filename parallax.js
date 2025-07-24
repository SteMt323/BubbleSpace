// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

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


  // TextScramble setup
  const phrases = [
    "Can we always be this close?",
    "I think Im in love with you.",
    "<3",
    "Heaven is a place on earth with you.",
    "I just love the way you are.",
    "<3<3<3",
    "I want you, you want me?",
    "Are you gonna marry, kiss or kill me?",
    "<3<3",
    "You know that I adore you."
  ];
  const textEl = document.querySelector('.text');
  const fx = new TextScramble(textEl);
  let counter = 0;
  let scrambleActive = false;
  let scrambleTimeout;
  function startScramble() {
    if (scrambleActive) return;
    scrambleActive = true;
    textEl.style.opacity = '1';
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        scrambleTimeout = setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
  }
  function stopScramble() {
    scrambleActive = false;
    clearTimeout(scrambleTimeout);
    textEl.style.opacity = '0';
    fx.setText('');
  }

  textEl.style.opacity = '0';

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
      // Mostrar y activar scramble después de la animación de montañas
      setTimeout(() => {
        startScramble();
      }, 900); // Ajusta el delay si lo deseas
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
      // Ocultar scramble
      stopScramble();
    }
  });
});
