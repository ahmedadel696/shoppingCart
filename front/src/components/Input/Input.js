import React from 'react'

function Input(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} name={props.name} onChange={props.onChange} required />
        </div>
    )
}
export default Input;