import React from 'react';
import '../ComponentsCSS/NavigationButton.css';

function NavigationButton(props) {
    const buttonText = props.text;

    return (<div>
        <button className='nav-button' onClick={props.onButtonClick}>{buttonText}</button>
    </div>);
}

export default NavigationButton;
