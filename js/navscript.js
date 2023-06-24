document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
  
    function checkWindowWidth() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1023) {
        navLinks.classList.remove("visible");
        navLinks.style.display = "";
        navLinks.style.transform = "";
        navLinks.style.top = "";
      }
    }
  
    burger.addEventListener("click", function() {
      navLinks.classList.toggle("visible");
  
      if (navLinks.classList.contains("visible")) {
        navLinks.style.display = "flex";
        navLinks.style.transform = "scaleY(1)";
        navLinks.style.top = "100%";
        navLinks.style.transition = "transform 0.7s, top 0.7s";
      } else {
        navLinks.style.transform = "scaleY(0.1)";
        navLinks.style.top = "-200%";
        navLinks.style.display = "none";
        navLinks.style.transition = "transform 0.7s, top 0.7s";
        setTimeout(function() {
          checkWindowWidth();
        }, 300);
      }
    });
  
    window.addEventListener("resize", function() {
      checkWindowWidth();
    });
  });

let lastScrollTop = 0;

const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      nav.style.display = 'none';
    } else {
      // Scrolling up
      nav.style.display = 'flex';
    }

  lastScrollTop = scrollTop;
});
  
