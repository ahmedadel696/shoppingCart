import React from 'react'
import "../../css/Checkout/Checkout.css";
import Input from '../Input/Input';
import  Fade  from 'react-reveal/Fade';
function Checkout(props) {


    if (props.showForm == true) {
        return (
            <Fade bottom>
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
            </Fade>
        )
    } else {
        return true;
    }



}
export default Checkout;