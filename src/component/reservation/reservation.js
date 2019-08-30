import React from 'react';
import './reservation.css';

const reservation = ( props ) => {
    return (
        <span className = 'reservation'>
            <span> { props.label }: </span>
            <input type= 'text' value = { props.value } onChange = { props.change }/>
        </span>
    )
}

export default reservation;