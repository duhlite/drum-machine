import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateDisplay} from '../actions/index';

const mapStateToProps = state => {
    return {
        power: state.power,
        volume:state.volume
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateDisplay: display => dispatch(updateDisplay(display))
    };
}

class ConnectedDrumPad extends Component {
    constructor() {
        super();
        this.playSound = this.playSound.bind(this)
    }

    componentDidMount = () => {
        document.addEventListener('keydown',this.handleKeyDown)
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown')
    }

    handleKeyDown = (e) => {
        if(e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }

    playSound = () => {
        if(this.props.power) {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.volume = this.props.volume;
        sound.play();
        this.props.updateDisplay(this.props.id);
        } else {
            console.log('needs power')
        }  
    };


    render() {
        return(
            <div
                className='drum-pad' 
                onClick={this.playSound}
                id = {this.props.id}
            >
            <audio 
                id={this.props.keyTrigger}
                className='clip'
                src={this.props.clip}
                type='audio/wav'
            >
            </audio>
            {this.props.keyTrigger}
            </div>
        )
    }
}

const DrumPad = connect(mapStateToProps,mapDispatchToProps)(ConnectedDrumPad);

export default DrumPad;