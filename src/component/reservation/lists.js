import React from 'react';
import './lists.css';

const lists = ( props ) => {
    return (
        <div className='lists'>
            <span className= 'train-name'> { props.trainName } </span>
            <span className= 'train-no'> { props.trainNo }</span>
            <span className= 'train-date'> { props.date  }</span>
        </div>
    )
}

export default lists;