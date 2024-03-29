import React, { useState } from 'react'
import "../../css/Cart/Cart.css";
import Checkout from '../Checkout/Checkout';
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/cart';
import Modal from 'react-modal';
import { fetchOrders, saveOrder, clearOrder } from './../../store/actions/orders';
function Cart(props) {
    const [value, setValue] = useState("");
    const [showForm, setShowForm] = useState(false);
    const handleChangeInputs = (e) => {
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }
    const submitOrder = (e) => {
        e.preventDefault();
        console.log(value);
        props.saveOrder(value);
    }

    const closeOrderModal =()=>{
        props.clearOrder();
        setShowForm(false);
    }


    return (
        <div className="cartContainer">
            <div className="cartContainer-title">{props.cartItems.length > 0 ? 'CART ITEMS' : 'CART IS EMPTY'}</div>
            {props.order && <Modal isOpen={props.order} onRequestClose={closeOrderModal}>
                <span className='close-order-modal' onClick={closeOrderModal}>&times;</span>
                <div className='order-info'>
                    <p className='alert-success'>Order Done Successfully</p>
                    <table>
                        <tr>
                            <td>name : </td>
                            <td>{props.order.name}</td>
                        </tr>
                        <tr>
                            <td>E-mail : </td>
                            <td>{props.order.email}</td>
                        </tr>
                        <tr>
                            <td>Total : </td>
                            <td>${props.cartItems.reduce((a, p) => {
                                return a + p.price
                            }, 0)}</td>
                        </tr>
                        <tr>
                            <td>Selected Items : </td>
                            <td>
                                {props.cartItems.map(item => (
                                    <div className='item-data'>
                                        <p>name : {item.name}</p>
                                        <p>qty : {item.qty}</p>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </table>
                </div>
            </Modal>}
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
        cartItems: state.cart.cartItems,
        orders: state.orders.orders,
        order: state.orders.order
    }
}, { removeFromCart, fetchOrders, saveOrder, clearOrder })(Cart);