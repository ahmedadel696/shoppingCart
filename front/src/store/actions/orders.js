import { CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS, SAVE_ORDER } from "./types"

export const fetchOrders = () => {
    return (dispatch) => {
        fetch('/api/getOrders')
            .then(res => res.json())
            .then(Ordersdata => {
                dispatch({
                    type: FETCH_ORDERS,
                    data: {
                        orders : Ordersdata
                    } 
                })
            })
    }
}

export const saveOrder = (order) => {
    return (dispatch) => {
        fetch('/api/saveOrder',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            }
        )
            .then(res => res.json())
            .then(Orderdata => {
                dispatch({
                    type: SAVE_ORDER,
                    data: {
                        order: Orderdata
                    }
                })
            })

        localStorage.clear('cartItems');
    }
}

export const clearOrder = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ORDER
        })

        dispatch({ type: CLEAR_CART })
    }
}