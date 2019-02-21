import React, {Component} from 'react';
import {connect} from "react-redux";
import {togglePower} from '../actions/index'
import Switch from 'react-toggle-switch';
import '../../node_modules/react-toggle-switch/dist/css/switch.min.css';

function mapDispatchToProps(dispatch) {
    return {
        togglePower: power => dispatch(togglePower(power))
    };
}

const mapStateToProps = state => {
    return {power: state.power};
}

class ConnectedPower extends Component {
    constructor(props) {
        super(props);
    }

    toggleSwitch = () => {
        this.props.togglePower(true);
    };

    render() {
        return (
            <div>
                <Switch 
                    onClick={this.toggleSwitch}
                    on={this.props.power}
                />
            </div>
        );
    }
}

const Power = connect(mapStateToProps,mapDispatchToProps)(ConnectedPower);

export default Power;