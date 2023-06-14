
// This script will handle the form submission and display a success message
const form = document.querySelector('.contact-form');
const submitBtn = form.querySelector('input[type="submit"]');
const successMsg = document.createElement('p');
successMsg.textContent = 'Message sent successfully!';

form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  // Display success message
  form.appendChild(successMsg);
  submitBtn.style.display = 'none';
});








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
