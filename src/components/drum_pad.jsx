import React, {Component} from 'react';


const style1 = {
        height: '40px',
        width: '40px',
        backgroundColor: 'white',
        margin: 'auto',
        border: '1px solid black'
    }

class DrumPad extends Component {
    constructor() {
        super();
        this.playSound = this.playSound.bind(this)
    }

    playSound = () => {
        console.log(this.props.keyTrigger);
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        sound.addEventListener('playing', console.log('playing'));
        console.log(this.props.clip);
    };


    render() {
        return(
            <div
                className='drum-pad' 
                onClick={this.playSound}
                id = {this.props.id}
                style = {style1}
            >
            <audio 
                id={this.props.keyTrigger}
            >
                <source
                src={this.props.clip}
                type='audio/wav'
                />
            </audio>
            {this.props.keyTrigger}
            </div>
        )
    }
}

export default DrumPad;