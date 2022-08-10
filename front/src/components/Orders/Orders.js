import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchOrders } from './../../store/actions/orders';

import '../../css/Orders/Orders.css'

function Orders(props) {
    useEffect(() => {
        props.fetchOrders();
        console.log(props.orders)
    }, []);
    const { orders } = props;

    return (
        <div className='orders-container'>
            <table>
                <thead>
                    <tr>
                        <th>OrderName</th>
                        <th>E-mail</th>
                        {/* <th>Items</th> */}
                    </tr>
                </thead>

                {orders &&
                    <tbody>
                        {orders.map((ord, i) => (
                            <tr key={i}>
                                <td>{ord.name}</td>
                                <td>{ord.email}</td>
                                {/* <td>
                                    {props.cartItems.map(item=>(
                                        <p>{item.name},{item.qty}</p>
                                    ))}
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                }

            </table>
        </div>
    )
}
export default connect((state) => {
    return {
        orders: state.orders.orders,
        cartItems: state.cart.cartItems
    }
}, { fetchOrders })(Orders);