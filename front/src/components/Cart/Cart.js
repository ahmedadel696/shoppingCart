import React, { useState } from 'react'
import "../../css/Cart/Cart.css";
import Checkout from '../Checkout/Checkout';
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/cart';
import { useEffect } from 'react';
function Cart(props) {
    //  const [cartItems, setCartItems] = useState(props.cartItems);
    const [value, setValue] = useState("");
    const [showForm, setShowForm] = useState(false);



    const handleChangeInputs = (e) => {
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const submitOrder = (e) => {
        e.preventDefault();
        console.log(value);
    }

    return (
        <div className="cartContainer">
            <div className="cartContainer-title">{props.cartItems.length > 0 ? 'CART ITEMS' : 'CART IS EMPTY'}</div>
            <Bounce bottom cascade>
                <div className='cartItems'>
                    {props.cartItems.map((item, i) => (
                        <div key={i} className='cartItemContainer'>
                            <img src={require(`../../images/${item.imageUrl}`)} alt={item.name} />
                            <div className='item-info'>
                                <div className='item-info-details'>
                                    <p>Title : {item.name}</p>
                                    <p>Qty : {item.qty}</p>
                                    <p>Price : {item.price}</p>
                                </div>
                                <div>
                                    <button onClick={() => props.removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Bounce>
            {props.cartItems.length > 0 ? <div className='cart-footer'>
                <div className='cart-price'>
                    Total Price : ${props.cartItems.reduce((acc, p) => {
                        return acc + p.price
                    }, 0)}
                </div>
                <div>
                    <button onClick={() => setShowForm(true)}>Select Products</button>
                </div>

            </div> : true}

            <Checkout
                showForm={showForm}
                setShowForm={setShowForm}
                submitOrder={submitOrder}
                handleChangeInputs={handleChangeInputs}
            />

        </div>
    )
}

export default connect((state) => {
    return {
        cartItems: state.cart.cartItems
    }
}, { removeFromCart })(Cart);