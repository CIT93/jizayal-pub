// Get a reference to the form and the input field from the HTML.
// Listen for a submit event on the form.
// When the form is submitted, use event.preventDefault() to stop the page from reloading.
// Read the user's input, create a greeting string, and display it in the output element.
// Reset the form for the next input.

// Asked AI "why do i get the following error 
// app.js:16 Uncaught TypeError: greetingsInput.value is not a function at HTMLFormElement.handleGreetingsSubmit 
// (app.js:16:33) handleGreetingsSubmit @ app.js:16

// AI stated that .value is a property not a function and parentheses calls it as a function which is why I get an error

console.log('Hello from app.js! Your JavaScript is connected and running!');

const greetingsForm = document.getElementById('greetingsForm');
const greetingsInput = greetingsForm.querySelector('#greetingsInput');
const greetingsOutput = document.getElementById('greetingsOutput');

const handleGreetingsSubmit = function(event) {
    event.preventDefault();
    console.log(event);
    const name = greetingsInput.value;
    greetingsOutput.textContent = `Well, excuse me, ${name}.`;
    greetingsForm.reset();
};

const init = function() {
    console.log(`App initialized: DOM is ready! Try submitting`);
    greetingsForm.addEventListener(`submit`, handleGreetingsSubmit);
};

document.addEventListener(`DOMContentLoaded`, init);
