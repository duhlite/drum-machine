import React from 'react';
import PadBank from './pad_bank';
import Controls from './controls';

const DrumMachine = () => {
    return (
        <div id='drum-machine'>
            <PadBank />
            <Controls />
        </div>
    )
}

export default DrumMachine;