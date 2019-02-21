import {TOGGLE_POWER} from '../constants/action-types';

const initialState = {
    power: true
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case TOGGLE_POWER: {
            return {
                ...state,
                power: !state.power
            }
        }
            
    
        default:
            return state;
    };
};

export default rootReducer;