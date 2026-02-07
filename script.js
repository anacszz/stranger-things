gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animatePage() {
  // ANIMAÇÕES HERO

  gsap.from(".container-hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  // ANIMAÇÕES CARDS

  gsap.from(".card-city", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".content-citys",
      start: "0% 80%",
      end: "100% 70%",
      scrub: true,
    },
  });

  gsap.from(".container-thanks ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".container-thanks ul",
      start: "0% 80%",
      end: "100% 50%",
      scrub: true,
    },
  });

  // ANIMAÇÕES FOOTER

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  //SELECIONE TODOS OS ELEMENTOS DA SUA PAGINA QUE TEM A CLASSE ..textSplit
  const groupTextSplit = document.querySelectorAll(".textSplit");

  // ANIME CADA ELEMENTO DESSE GRUPAMENTO -> FOR EACH
  groupTextSplit.forEach((textSplit) => {
    //ANIME DE FORMA INDEPENDENTE
    const split = SplitText.create(textSplit, {
      type: "lines, words, chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      scrollTrigger: {
        trigger: textSplit,
      },
    });
  });
}

// LETRAS SURGINDO - PRÉ LOADER -> CRIA TIMELIME

const tl = gsap.timeline({
  onComplete() {
    animatePage();
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preloader path", {
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});

const thanksList = document.querySelector(".container-thanks ul");
thanksList.innerHTML += thanksList.innerHTML;
