import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {display: state.display};
};

class ConnectedDisplay extends Component {

    render() {
        return (
            <div id='display'>
                {this.props.display}
            </div>
        )
    }
}

const Display = connect(mapStateToProps)(ConnectedDisplay);

export default Display;