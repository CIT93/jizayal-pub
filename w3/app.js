console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from "./order-handler.js"; 

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

const handleOrderSubmit = function(event) {
    event.preventDefault();
    const formData = orderHandler.getOrderInputs();
    const message = `${formData.qty} ${formData.size} T-shirts`;
    orderSummary.textContent = message;
    console.log(formData)
};

const init = function() {
    console.log('App initialized: DOM is ready! Try submitting the form or clearing it.');
    orderForm.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);