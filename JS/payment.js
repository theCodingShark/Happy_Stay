const roomDetailsElement = document.getElementById('room-details');

// Check if room details are stored in session storage
const bookedRoomDetails1 = sessionStorage.getItem('roomDetails');
const bookedRoomDetails2 = sessionStorage.getItem('price');

// Display room details or a message if no details are found
if (bookedRoomDetails1 && bookedRoomDetails2) {
  const roomDetails = `${bookedRoomDetails1}<a>,&nbsp;</a>${bookedRoomDetails2}`;
  roomDetailsElement.innerHTML = roomDetails;
} else {
  roomDetailsElement.innerHTML = '<p>No room details found.</p>';
}


//for payment

const form = document.querySelector('.payment-form');
const submitBtn = form.querySelector('input[type="submit"]');
// const successMsg = document.createElement('p');
// successMsg.textContent = 'Payment done successfully!';

form.addEventListener('submit', (event) => {
  event.preventDefault();
 
//   // Display success message
//   form.appendChild(successMsg);
  submitBtn.style.display = 'none';
});






// Get all book buttons
const bookButtons = document.querySelectorAll('.book-btn');

// Get the message box and its components
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message');
const confirmButton = document.getElementById('confirm-btn');
const cancelButton = document.getElementById('cancel-btn');



// Get the form elements
const cardNumberInput = document.getElementById("card-number");
const expiryDateInput = document.getElementById("expiry");
const cvvInput = document.getElementById("cvv");
const submitButton = document.getElementById("submit-btn");

// Regular expressions for validation
const cardNumberRegex = /^([0-9]{16})$/; // 16-digit card number
const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
const cvvRegex = /^([0-9]{3,4})$/; // 3- or 4-digit CVV



let isFormValid = false;
// Add event listener to submit button
submitButton.addEventListener("click", function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  // Get the user input
  const cardNumber = cardNumberInput.value.trim();
  const expiryDate = expiryDateInput.value.trim();
  const cvv = cvvInput.value.trim();


  // Initialize the error flag
 let hasError = false;

  // Validate card number
  if (!cardNumberRegex.test(cardNumber)) {
    alert("Please enter a valid 16-digit card number.");
    hasError = true;
  }

  // Validate expiry date
  if (!expiryDateRegex.test(expiryDate)) {
    alert("Please enter a valid expiry date in the format MM/YY.");
    hasError = true;
  } else {
    // Check if the expiry date has already passed
    const now = new Date();
    const month = parseInt(expiryDate.substr(0, 2)) - 1; // month is 0-indexed in JavaScript Date object
    const year = parseInt("20" + expiryDate.substr(3, 2));
    const expiry = new Date(year, month, 1); // set day to 1 to avoid issues with different number of days in each month
    if (expiry < now) {
      alert("The expiry date has already passed. Please enter a valid expiry date.");
      hasError = true;
    }
  }

  // Validate CVV
  if (!cvvRegex.test(cvv)) {
    alert("Please enter a valid 3- or 4-digit CVV.");
    hasError = true;
  }
  // If there is an error, do not proceed to confirmation
  if (hasError) {
    return;
  }

  // All fields are valid, redirect to the payment confirmation page
  // window.location.href = "success.html";


  // All fields are valid
  isFormValid = true;

  
});


//Add event listener to each book button
bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the price of the room from the button's data attribute

    const price = button.dataset.price;
    const roomDetails = button.dataset.details;

    // Display the message box with the room's price
    messageBox.classList.remove('hidden');
    messageText.textContent = `Are you sure you want to proceed with the payment of ${bookedRoomDetails2}?`;


    sessionStorage.setItem('price', price);
    sessionStorage.setItem('roomDetails', roomDetails);
      
    // Add event listeners to the confirm and cancel buttons
    confirmButton.addEventListener('click', () => {
        // Run form validation before redirecting to payment page
        if (isFormValid) {
          window.location.href = "success.html";
        }
    });
    cancelButton.addEventListener('click', () => {
      messageBox.classList.add('hidden');

    });
  });
});









//navbar functionaity

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
