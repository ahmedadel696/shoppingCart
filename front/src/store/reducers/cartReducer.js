import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/types";

export const cartReducer = (state = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cartItems: action.data.cartItems
            }
            break;
        case REMOVE_FROM_CART:
            return {
                cartItems: action.data.cartItems
            }
            break;
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
            break;
        default:
            return state;
    }
}