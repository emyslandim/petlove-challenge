import React, { Fragment } from 'react';
import InputMask from 'react-input-mask';
import './input.css'

const Input = ({ className, value, onChange, onKeyPress, placeholder, type, mask }) => {
    return (
        <Fragment>
            <InputMask mask={mask} className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyPress={ e => e.key === onKeyPress.key ? onKeyPress.function() : false} />
        </Fragment>
    )
}
export default Input;