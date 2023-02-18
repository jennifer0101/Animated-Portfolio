$(document).ready(function () {
  $(".sidenav").sidenav();
  // $(".scrollspy").scrollSpy();

// Sticky Navbar after scroll
  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("nav-wrapper");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // Title and Sub-Title animation GSAP
  const headingTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
  });

  headingTl
    .from(".heading", {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "expo.inOut",
    })
    .from(
      ".heading h1",
      {
        y: "100%",
        duration: 0.8,
        ease: "expo.out",
      },
      "-=0.2"
    )
    .from(
      ".heading",
      {
        css: { borderBottom: "4px solid #da0037" },
        duration: 2,
        transformOrigin: "right",
        ease: "none",
      },
      "-=1"
    )
    .from(
      ".heading h1",
      {
        duration: 2,
        transformOrigin: "right",
        ease: "none",
        css: { color: "#444444" },
      },
      "-=2"
    );

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;

let scrollFunc = ScrollTrigger.getScrollFunc(window);

document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
      onStart: () => scrollFunc.cacheID = Math.random(),
      onUpdate: ScrollTrigger.update,
			duration: 1
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
    anticipatePin: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});


});
