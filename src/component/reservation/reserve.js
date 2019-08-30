import React from 'react';
import Reservation from './reservation';

const reserve = ( props ) => Object.keys( props.reservation ).map ( ( key, i ) => {
    return <Reservation 
        label = { key }
        key = { key }
        value = { props.reservation[ key ] }
        change = { props.change.bind( this, { key }) }
    />
})

export default reserve;