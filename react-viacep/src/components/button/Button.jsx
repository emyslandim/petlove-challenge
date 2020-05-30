import React, { Fragment } from 'react';
import './button.css'

const Button = ({children, className, onClick}) => {
    return (
        <Fragment>
               <button className={className} onClick={onClick}>{children}</button>
        </Fragment>
    )
}
export default Button;