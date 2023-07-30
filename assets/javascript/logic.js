$(document).ready(function () {
  $(".sidenav").sidenav();
  $('.scrollspy').scrollSpy();
  
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
    repeatDelay: 1,
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

  // mobile Navigation
  function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
  }

  var element = $('.arrow-down');
  var tl = new TimelineMax({ repeat: 20, repeatDelay: 0.5 });

  tl.to(element, 0.4, { y: '12', ease: Power1.easeNone });
  tl.to(element, 0.2, { y: '0', ease: Power1.easeOut });
  tl.to(element, 0.2, { y: '8', ease: Power1.easeNone });
  tl.to(element, 0.4, { y: '0', ease: Power1.easeOut });


// mobile viewport fix
  // const documentHeight = () => {
  //   const doc = document.documentElement
  //   doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  //  }
  //  window.addEventListener("resize", documentHeight)
  //  documentHeight()