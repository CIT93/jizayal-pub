// Get a reference to the form and the input field from the HTML.
// Listen for a submit event on the form.
// When the form is submitted, use event.preventDefault() to stop the page from reloading.
// Read the user's input, create a greeting string, and display it in the output element.
// Reset the form for the next input.

console.log('Hello from app.js! Your JavaScript is connected and running!');

const handleFormSubmit = function(event) {
    event.preventDefault();
    console.log(event);
};