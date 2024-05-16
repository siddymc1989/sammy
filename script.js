// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // Display a success message
    alert('Thank you for your message! We will get back to you soon.');

    // Clear form fields
    form.reset();
});
