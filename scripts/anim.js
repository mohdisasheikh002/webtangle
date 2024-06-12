function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".wrapper"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".wrapper").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveScroll();

function mouseEffect() {
  Shery.makeMagnet(".magnet");
}
mouseEffect();

function nav() {
  gsap.to(".home-btn", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec1",
      start: "top 0%",
      scrub: 1,
    },
    opacity: 0,
    cursor: "default",
  });

  var mbtn = document.querySelector(".menu-btn");
  var mbox = document.querySelector(".menu-box");
  var toggle = 0;

  mbtn.addEventListener("click", function (dets) {
    if (toggle == 0) {
      gsap.to(".home-btn", {
        display: "none",
      });
      gsap.to(mbtn, {
        delay: 0.2,
        backgroundColor: "#334bd3",
        border: "none",
      });
      gsap.to(dets.target.children[0], {
        top: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)",
      });
      gsap.to(dets.target.children[1], {
        top: "50%",
        transform: "translate(-50%, -50%) rotate(-45deg)",
      });
      gsap.to(mbox, {
        height: "100vh",
        display: "flex",
      });
      gsap.to(".page-btn", {
        delay: 0.3,
        opacity: 1,
        marginRight: "0",
        stagger: 0.1,
      });

      toggle = 1;
    } else {
      gsap.to(".home-btn", {
        delay: 1.1,
        display: "initial",
      });
      gsap.to(mbtn, {
        delay: 1,
        backgroundColor: "#121212",
        border: "1.5px solid #888",
      });
      gsap.to(dets.target.children[0], {
        top: "45%",
        transform: "translate(-50%, -50%) rotate(0deg)",
      });
      gsap.to(dets.target.children[1], {
        top: "55%",
        transform: "translate(-50%, -50%) rotate(0deg)",
      });
      gsap.to(mbox, {
        delay: 0.7,
        height: "0vh",
        bottom: "100%",
        display: "none",
        onComplete: function () {
          mbox.style.bottom = "0%";
        },
      });
      gsap.to(".page-btn", {
        opacity: 0,
        marginRight: "10vw",
        stagger: 0.1,
      });

      toggle = 0;
    }
  });
}
nav();
