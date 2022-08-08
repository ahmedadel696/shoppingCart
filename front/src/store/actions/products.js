
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, FILTER_PRODUCTS_BY_ORDER } from './types';
export const fetchProducts = () => {
    return (dispatch) => {
        fetch('/api/getProducts')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: FETCH_PRODUCTS,
                    data: data
                })
            })
    }
}



export const filterProductsBySize = (products, value) => {
    return (dispatch) => {
        let productClone = [...products];
        let newProducts = productClone.filter(p => p.sizes.indexOf(value) != -1);

        dispatch({
            type: FILTER_PRODUCTS_BY_SIZE,
            data: {
                size: value,
                products: value == 'All' ? products : newProducts
            }
        })
    }
}

export const filterProductsByOrder = (products, value) => {
    return (dispatch) => {
        let productClone = [...products];
        let newProducts = productClone.sort(function (a, b) {
            if (value === "lowest") {
                return a.price - b.price;
            } else if (value === "highest") {
                return b.price - a.price;
            } else {
                return a.id < b.id ? 1 : -1;
            }
        });
        dispatch({
            type: FILTER_PRODUCTS_BY_ORDER,
            data: {
                order: value,
                products: newProducts
            }
        })

    }
}


