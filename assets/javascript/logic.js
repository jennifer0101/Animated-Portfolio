$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

        // execute navFunction on scroll
        window.onscroll = function(){navFunction()};
        // get navbar
        const navBar = document.getElementById("nav-wrapper");
        const sideNav = document.getElementById("sidenav-wrapper");
        // get offset position of navbar
        const sticky = navBar.offsetTop;
        const sideStick = sideNav.offsetTop;
    
        // reach scroll position - add sticky, leave scroll position - remove sticky
        function navFunction() {
          if (window.pageYOffset >= sticky) {
            navBar.classList.add("sticky")
          } else {
            navBar.classList.remove("sticky");
          }
          if (window.pageYOffset >= sideStick) {
            sideNav.classList.add("sideStick")
          } else {
            sideNav.classList.remove("sideStick");
          }
        }
  });
