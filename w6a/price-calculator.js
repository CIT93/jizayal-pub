const tshirtPrice = 15;
const giftWrapPrice = 5;


export const calculateTotal = function(orderData) {
    let orderTotal = orderData.qty * tshirtPrice;
    if (orderData.giftWrap === true)  {
        orderTotal = orderTotal + giftWrapPrice;
    }
    return {
        totalPrice: orderTotal
    };

    
};