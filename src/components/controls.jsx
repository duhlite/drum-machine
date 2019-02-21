import React from 'react';
import Power from './power';
import Volume from './volume';
import Display from './display';


const Controls = props => {
    return (
        <div id='controls'>
            <div id='title'>
            808s And Heartbeatz
            </div>
            <Power />
            <Display />
            <Volume />
        </div>
    )
}

export default Controls;