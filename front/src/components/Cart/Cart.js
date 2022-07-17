import React, { useState } from 'react'
import "../../css/Cart/Cart.css";
function Cart(props) {
    const [cartItems, setCartItems] = useState(props.cartItems);
    return (
        <div className="cartContainer">
            <div className="cartContainer-title">{props.cartItems.length >0 ?'CART ITEMS':'CART IS EMPTY'}</div>
            <div className='cartItems'>
                {props.cartItems.map((item, i) => (
                    <div key={i} className='cartItemContainer'>
                        <img src={require(`../../images/${item.imageUrl}`)} />
                        <div className='item-info'>
                            <div className='item-info-details'>
                                <p>Title : {item.name}</p>
                                <p>Qty : {item.qty}</p>
                                <p>Price : {item.price}</p>
                            </div>
                            <div>
                                <button onClick={()=>props.removeFromCart(item)}>Remove</button>
                            </div>
                        </div>


                    </div>
                ))}
            </div>



        </div>
    )
}

export default Cart;