import * as actionTypes from './actionTypes'
import { getUserData } from "../../api/users";

export const userSignedUpInSystem = (data) => {
    return {
        type: actionTypes.USER_SIGNED_UP_IN_SYSTEM,
        payload: data
    }
};

export const userLoggedInSystem = (data) => {
    return {
        type: actionTypes.USER_SIGNED_UP_IN_SYSTEM,
        payload: data
    }
};

export const userLoggingInSystem = (id) => {
    return dispatch => {
        getUserData(id).then(({data}) => {
            console.log(data);
        }).catch((e) => {
            console.error(e);
        })
        // setTimeout(() => {
        //     dispatch(userLoggedInSystem(data))
        // }, 2000);
    };
};
