
import { FETCH_PRODUCTS } from './types';
export const fetchProducts =()=>{
   return (dispatch)=>{
        fetch('/api/getProducts')
        .then(res => res.json())
        .then(data => {
          dispatch({
                action : FETCH_PRODUCTS,
                data : data
            })
        })
    }
}

