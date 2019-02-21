import React, {Component} from 'react';
import {connect} from "react-redux";
import {togglePower} from '../actions/index'
import Switch from 'react-toggle-switch';


function mapDispatchToProps(dispatch) {
    return {
        togglePower: power => dispatch(togglePower(power))
    };
}

const mapStateToProps = state => {
    return {power: state.power};
}

class ConnectedPower extends Component {

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