import {TOGGLE_POWER} from '../constants/action-types';
import {DELTA_VOLUME} from '../constants/action-types';
import {UPDATE_DISPLAY} from '../constants/action-types';

const initialState = {
    power: true,
    volume: .5,
    display: 'Hello'
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case TOGGLE_POWER: {
            return {
                ...state,
                power: !state.power
            }
        }
        case DELTA_VOLUME: {
            return {
                ...state,
                volume: action.payload
            }
        }
        case UPDATE_DISPLAY: {
            return {
                ...state,
                display: action.payload
            }
        }
            
        default:
            return state;
    };
};

export default rootReducer;