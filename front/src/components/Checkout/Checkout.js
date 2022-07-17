import React from 'react'
import "../../css/Checkout/Checkout.css";
import Input from '../Input/Input';
function Checkout(props) {


    if (props.showForm == true) {
        return (
            <div className='checkout-form'>
                <span onClick={() => props.setShowForm(false)} className='close-form'>&times;</span>
                <form onSubmit={props.submitOrder}>
                    <Input
                        label="Name"
                        placeholder="Enter Your Name"
                        onChange={props.handleChangeInputs}
                        name="name"
                    />
                    <Input
                        label="Email"
                        placeholder="Enter Your Email"
                        onChange={props.handleChangeInputs}
                        name="email"
                    />
                    <div>
                        <button >checkout</button>
                    </div>
                </form>
            </div>
        )
    } else {
        return true;
    }



}
export default Checkout;