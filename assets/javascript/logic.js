$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

        // let tl = new TimelineMax();

        // tl.staggerFromTo(
        //   ".title",
        //   1.5,
        //   { opacity: 0, x: 1000, ease: Back.easeOut.config(5)},
        //   { opacity: 1, x: 0},
        //   1
        // );

        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("nav-wrapper");
        var sticky = navbar.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }
        
  });
