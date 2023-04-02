// Get the "read more" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Loop through the buttons and add event listeners to each one
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the corresponding article
    const article = button.parentNode.parentNode;

    // Toggle the "show-more" class on the article
    article.classList.toggle('show-more');

    // Update the button text
    if (button.textContent === 'Read more') {
      button.textContent = 'Read less';
    } else {
      button.textContent = 'Read more';
    }
  });
});

// Get the form
const form = document.querySelector('#contact-form');


