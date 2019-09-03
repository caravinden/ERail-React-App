import React from 'react';
import Lists from './lists';

const searchlist = ( props ) => props.details.map( ( train, index ) => {
    return <Lists 
        trainName = { train.TrainName }
        trainNo = { train. TrainNumber }
        date = { '03-sept2019' }
        key = { index }
    />
})

export default searchlist;