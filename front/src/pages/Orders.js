import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchOrders } from '../store/actions/orders';

function Orders(props) {
    useEffect(() => {
        props.fetchOrders();
        console.log(props.orders)
    }, []);
    return (
        <div className='orders-container'>
            <table>
                <th>OrderName</th>
                <th>E-mail</th>
                {props.orders &&
                    <>
                        {props.orders.map((ord , i) => (
                            <tr key={i}>
                                <td>{ord.name}</td>
                                <td>{ord.email}</td>
                            </tr>
                        ))}
                    </>
                }

            </table>
        </div>
    )
}
export default connect((state) => {
    return {
        orders: state.orders.orders
    }
}, { fetchOrders })(Orders);