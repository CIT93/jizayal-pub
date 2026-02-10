console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from "./order-handler.js"; 

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

const handleOrderSubmit = function(event) {
    event.preventDefault();
    const orderData = orderHandler.getOrderInputs();
    let message = `${orderData.qty} ${orderData.size} T-Shirt`;
    if(orderData.qty > 1) {
        message += `s`;
    }
    if(orderData.giftWrap === true) {
        message += ` with Gift Wrapping`;
    }
    orderSummary.textContent = message;
    console.log(orderData);
};

const init = function() {
    console.log('App initialized: DOM is ready! Try submitting the form or clearing it.');
    orderForm.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);