import React from 'react';
import './index.scss'

const Button = ({className, handleClick, children }) => {
    return (
        <button className={`customButton ${className}`} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
