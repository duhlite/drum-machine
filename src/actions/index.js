import {TOGGLE_POWER} from '../constants/action-types';

export function togglePower(payload) {
    return {type: TOGGLE_POWER, payload}
};