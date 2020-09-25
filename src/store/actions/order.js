import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error,
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};

export const purchaseBurger = (orderData) => {
    purchaseBurgerStart();
    return (dispatch) => {
        axios
            .post("/order.json", orderData)
            .then((response) => {
                dispatch(purchaseBurgerSuccess(response.data.id, orderData));
            })
            .catch((err) => {
                dispatch(purchaseBurgerFail(err));
            });
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_INIT,
    };
};

export const fetchordersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    };
};

export const fetchOrdersSuccess = (fetchOrders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: fetchOrders,
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error,
    };
};

export const fetchOrders = () => {
    return (dispatch) => {
        dispatch(fetchordersStart());
        axios
            .get("/order.json")
            .then((res) => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key,
                    });
                }
                dispatch(fetchOrdersSuccess(fetchOrders));
            })
            .catch((err) => dispatch(fetchOrdersFail(err)));
    };
};
