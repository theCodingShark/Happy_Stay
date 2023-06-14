
// Get all the buttons
const buttons = document.querySelectorAll('.btn');

// Get all the gallery images
const images = document.querySelectorAll('.gallery img');

// Loop through each button
buttons.forEach(button => {
  // Add a click event listener to each button
  button.addEventListener('click', () => {
    // Remove the 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    button.classList.add('selected');

    // Get the data-filter value of the clicked button
    const filter = button.getAttribute('data-filter');

    // Loop through each image
    images.forEach(image => {
      // Get the data-tag value of the image
      const tag = image.getAttribute('data-tag');

      // If the image's data-tag matches the filter, show the image
      // Otherwise, hide the image
      if (tag === filter || filter === 'all') {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});

