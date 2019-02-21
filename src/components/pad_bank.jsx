import React, {Component} from 'react';
import DrumPad from './drum_pad';
import bankOne from '../banks/bank_1';

class PadBank extends Component {
    constructor() {
        super();
    }

    render() {
        let padBank = bankOne.map((el,i,samArr) => {
            return (
            <DrumPad
                key = {samArr[i].id}
                id = {samArr[i].id}
                clip = {samArr[i].loc}
                keyTrigger = {samArr[i].keyTrigger}
                keyCode = {samArr[i].keyCode}
            />
            )
        })
        return (
            <div className='pad-bank'>
                {padBank}
            </div>
        )
    }
}

export default PadBank;