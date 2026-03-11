const LOCAL_STORAGE_KEY = 'orders';

export const saveOrders = function(orders) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
    } catch (error) {

    };
};

export const loadOrders = function() {
    const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (dataString) {
        return JSON.parse(dataString);
    }
    return [];
};