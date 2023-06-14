// Get all book buttons
const bookButtons = document.querySelectorAll('.book-btn');

// Get the message box and its components
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message');
const confirmButton = document.getElementById('confirm-btn');
const cancelButton = document.getElementById('cancel-btn');

// Add event listener to each book button
bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the price of the room from the button's data attribute
    const price = button.dataset.price;
    
    
      const roomDetails = button.dataset.details;

    // Display the message box with the room's price
    messageBox.classList.remove('hidden');
    messageText.textContent = `Are you sure you want to book this room for ${price}/mo?`;


    sessionStorage.setItem('price', price);
      sessionStorage.setItem('roomDetails', roomDetails);
      
    // Add event listeners to the confirm and cancel buttons
    confirmButton.addEventListener('click', () => {
      // Redirect to payment page
      window.location.href = 'payment.html';
    });
    cancelButton.addEventListener('click', () => {
      messageBox.classList.add('hidden');
    });
  });
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

