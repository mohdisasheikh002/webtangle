function sec1() {
  Shery.imageEffect(".wavy", {
    style: 1,
  });
}
// sec1();

function sec3() {
  gsap.to(".content", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".work-show",
      start: "top 0%",
      end: "bottom 100%",
      endTrigger: ".c4",
      pin: true,
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

  var contents = document.querySelectorAll(".content");

  // Shery.imageEffect(".work-img", {
  //   style: 5,
  //   slideStyle: (setScroll) => {
  //     contents.forEach(function (content, index) {
  //       scrollTrigger.create({
  //         trigger: content,
  //         start: "top 0%",
  //         scrub: 1,
  //         onUpdate: function (prog) {
  //           setScroll(prog.progress + index);
  //         },
  //       });
  //     });
  //   },
  // });
}
sec3();

function sec5() {
  gsap.to(".work-btn", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec5",
      start: "top 0%",
      pin: true,
      scrub: 1,
    },
    top: "50%",
  });

  gsap.to("body", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec5",
      start: "top 24%",
      end: "top 24%",
      scrub: 1,
    },
    backgroundColor: "#121212",
    color: "#fff",
  });
}
sec5();

function sec6() {
  document.querySelectorAll(".work").forEach(function (work) {
    var rotate = 0;
    var diffrot = 0;

    work.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - work.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(work.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });

    work.addEventListener("mouseleave", function (dets) {
      gsap.to(work.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  });
}
sec6();
