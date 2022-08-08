import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, FILTER_PRODUCTS_BY_ORDER } from './../actions/types';

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { products: action.data , filterProducts: action.data }
            break;

        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                filterProducts: action.data.products,
                size: action.data.size
            }
            break;

        case FILTER_PRODUCTS_BY_ORDER:
            return {
                ...state,
                filterProducts: action.data.products,
                size: action.data.order
            }
            break;

        default:
            return state;
            break;
    }
}