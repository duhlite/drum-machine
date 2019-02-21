import React from 'react';
import Power from './power';
import Volume from './volume';


const Controls = props => {
    return (
        <div id='controls'>
            <Power />
            <Volume />
        </div>
    )
}

export default Controls;