console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from "./order-handler.js"; 
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from './order-storage.js';

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');
const orders = [];

const handleOrderSubmit = function(event) {
    event.preventDefault();
    const orderData = orderHandler.getOrderInputs();
    const calculatedPrice = priceCalculator.calculateTotal(orderData);
    const newOrder = {
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    };

    orders.push(newOrder);
    orderStorage.saveOrders(orders);
    
    resultsDisplay.displayResults(newOrder);
};

const init = function () {
    console.log('App initialized: DOM is ready! Try submitting the form or clearing it.');
    const loadOrders = orderStorage.loadOrders();
    if (loadOrders.length > 0) {
        orders.push(...loadOrders);
        console.log('Orders loaded');
    }
    orderForm.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);