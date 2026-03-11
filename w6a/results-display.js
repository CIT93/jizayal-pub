const orderSummaryContainer = document.getElementById('order-summary');


const totalCostDisplay = orderSummaryContainer.querySelector('#display-total');
const orderQuantityDisplay = orderSummaryContainer.querySelector('#display-qty');
const orderSizeDisplay = orderSummaryContainer.querySelector('#display-size');
const giftWrapDisplay = orderSummaryContainer.querySelector('#display-gift');


export const displayResults = function (order) {
    totalCostDisplay.textContent = `${order.totalPrice.toFixed(0)}`;
    orderQuantityDisplay.textContent = `${order.qty}`;
    orderSizeDisplay.textContent = `${order.size}`;
    giftWrapDisplay.textContent = order.giftWrap ? 'Yes' : 'No';

    orderSummaryContainer.style.display = 'block';
};


export const hideOrderSummary = function() {
    orderSummaryContainer.style.display = 'none';
};