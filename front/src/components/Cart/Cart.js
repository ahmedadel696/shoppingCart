import React, { useState } from 'react'
import "../../css/Cart/Cart.css";
function Cart(props) {
    const [cartItems, setCartItems] = useState(props.cartItems);
    return (
        <div className="cartContainer">
            <div className="cartContainer-title">Cart is Empty</div>
            <div className='cartItems'>
                {cartItems.map((item, i) => (
                    <div key={i} className='cartItemContainer'>
                        <img src={require(`../../images/${item.imageUrl}`)} />
                        <div className='item-info'>
                            <div>
                                <p>{item.name}</p>
                                <p>3</p>
                                <p>{item.price}</p>
                            </div>
                            <div>
                                <button>Remove</button>
                            </div>
                        </div>


                    </div>
                ))}
            </div>



        </div>
    )
}

export default Cart;