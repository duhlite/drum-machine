import {TOGGLE_POWER} from '../constants/action-types';
import {DELTA_VOLUME} from '../constants/action-types';

const initialState = {
    power: true,
    volume: .5
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
            
        default:
            return state;
    };
};

export default rootReducer;