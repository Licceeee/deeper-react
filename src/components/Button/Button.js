import React from 'react';
import './Button.css';

const Button = ({ text, action, cssClass }) => {
    return (
        <button className={cssClass} onClick={action}> {text} </button>
    );
}

export default Button;
