import {TOGGLE_POWER} from '../constants/action-types';
import {DELTA_VOLUME} from '../constants/action-types';
import {UPDATE_DISPLAY} from '../constants/action-types';

export function togglePower(payload) {
    return {type: TOGGLE_POWER, payload}
};

export function deltaVolume(payload) {
    return {type: DELTA_VOLUME, payload}
};

export function updateDisplay(payload) {
    return {type: UPDATE_DISPLAY, payload}
};