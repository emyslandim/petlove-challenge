import React from 'react';
import './box.css'

const Box = ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export default Box;