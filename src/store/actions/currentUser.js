import * as actionTypes from './actionTypes'

export const userSignedUpInSystem = (data) => {
    return {
        type: actionTypes.USER_SIGNED_UP_IN_SYSTEM,
        payload: data
    }
};
