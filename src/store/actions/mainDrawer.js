import * as actionTypes from './actionTypes'

export const openMainDrawer = () => {
    return {
        type: actionTypes.OPEN_MAIN_DRAWER
    }
};

export const closeMainDrawer = () => {
    return {
        type: actionTypes.CLOSE_MAIN_DRAWER
    }
};
