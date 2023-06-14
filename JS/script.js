var slideIndex = 0;
var slides = document.getElementsByClassName("testimonial");
slides[slideIndex].classList.add("active");

function nextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

function prevSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
}

var intervalId = setInterval(nextSlide, 4000);



// // code to toggle the navbar for mobile-screen
// const mobile_nav = document.querySelector('.mobile-navbar-btn');
// const nav_header = document.querySelector('.header');

// const toggleNavbar = () => {
//   nav_header.classList.toggle("active");
// };

// mobile_nav.addEventListener("click", () => toggleNavbar());



document.addEventListener('DOMContentLoaded', function() {
  var homeLink = document.querySelector('.navbar-link.active1');
  var menuIcon = document.querySelector('.mobile-nav-icon[name="menu"]');
  var closeIcon = document.querySelector('.mobile-nav-icon[name="close"]');
  var navbar = document.querySelector('.navbar');

  // Function to hide the navbar and switch icons
  function hideNavbar() {
    navbar.classList.add('hide');
    menuIcon.style.display = 'inline-block';
    closeIcon.style.display = 'none';
  }

  // Function to show the navbar and switch icons
  function showNavbar() {
    navbar.classList.remove('hide');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'inline-block';
  }

  // Add click event listener to the homeLink
  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideNavbar();
  });

  // Add click event listener to the menuIcon
  menuIcon.addEventListener('click', function(event) {
    event.preventDefault();
    showNavbar();
  });

  // Add click event listener to the closeIcon
  closeIcon.addEventListener('click', function(event) {
    event.preventDefault();
    hideNavbar();
  });

  hideNavbar();
});











