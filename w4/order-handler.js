const orderForm = document.getElementById('order-form');
const quantityInput = orderForm.querySelector('#qty');
const giftWrapInput = orderForm.querySelector('#gift-wrap');
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');


const getSelectedRadioValue = function (radioButtons) {
    for (const radio of radioButtons) {
        if (radio.checked) {
            console.log(`${radio.value} has the attribute of ${radio.checked}`);
            return radio.value;
        };
    };
};


export const getOrderInputs = function() {
    console.log('Get Order Inputs');

    return {
        qty: parseInt(quantityInput.value) || 0, 
        size: getSelectedRadioValue(sizeRadios),
        giftWrap: giftWrapInput.checked
    };
};