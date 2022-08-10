import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { OrderReducer } from './orderReducer';
import { productReducer } from './productReducer';

export default combineReducers({
    products : productReducer,
    cart : cartReducer,
    orders : OrderReducer
})