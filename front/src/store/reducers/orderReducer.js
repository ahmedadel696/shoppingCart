import {CLEAR_ORDER, FETCH_ORDERS, SAVE_ORDER } from "../actions/types";

export const OrderReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                orders: action.data.orders
            }
            break;
        case SAVE_ORDER:
            return {
                order: action.data.order
            }
            break;
        case CLEAR_ORDER:
            return {
                order: false
            }
            break;
        default:
            return state;
            break;
    }
}