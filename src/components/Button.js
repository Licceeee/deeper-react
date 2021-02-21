import React from 'react';
import './css/Button.css';

const Button = ({ text, action, cssClass }) => {
    return (
        <button className={`btn btn-${cssClass} m-5`} onClick={action}> {text} </button>
    );
}

export default Button;
