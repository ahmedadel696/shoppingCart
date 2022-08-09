import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => {
    return (dispatch, getState) => {
        const cartItems = getState().cart.cartItems;
        var isExist = false;
        var cartItemsClone = [...cartItems];
        cartItems.forEach(item => {
            if (item._id == product._id) {
                item.qty++;
                isExist = true;
                item.price = product.price * item.qty;
            }
        });

        if (!isExist) {
            cartItemsClone.push({ ...product, qty: 1 })
        }
        dispatch({
            type: ADD_TO_CART,
            data: {
                cartItems: cartItemsClone
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItemsClone))
    }
}

export const removeFromCart = (product) => {
    return (dispatch, getState) => {
        const cartItems = getState().cart.cartItems;
        var cartItemsClone = [...cartItems];
        var cartItemsCloneFilter = cartItemsClone.filter(p => p._id != product._id);
        dispatch({
            type: REMOVE_FROM_CART,
            data: {
                cartItems:cartItemsCloneFilter
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItemsCloneFilter))

    }
}

