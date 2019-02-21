import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deltaVolume} from '../actions/index';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function mapDispatchToProps(dispatch) {
    return {
        deltaVolume: volume => dispatch(deltaVolume(volume))
    };
}

class ConnectedVolume extends Component {

    handleChange = (value) => {
        const volume = value/100;
        this.props.deltaVolume(volume);
    };

    render() {
        return (
            <Slider
                onChange = {this.handleChange}
                defaultValue = {50}
            />
        )
    }
}

const Volume = connect(null, mapDispatchToProps)(ConnectedVolume)

export default Volume;