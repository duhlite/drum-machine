import React from 'react';
import Power from './power';
import Volume from './volume';
import Display from './display';


const Controls = props => {
    return (
        <div id='controls'>
            <Power />
            <Volume />
            <Display />
        </div>
    )
}

export default Controls;