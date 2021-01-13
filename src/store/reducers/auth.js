import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    authDataLoading: true
};

const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.idToken,
        userId: action.userId
    } );
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthLoader = (state, action) => {
    return updateObject(state, { authDataLoading: action.isLoading });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.SET_AUTH_LOADER: return setAuthLoader(state, action);
        default:
            return state;
    }
};

export default reducer;
