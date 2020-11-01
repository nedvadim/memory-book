import * as actionTypes from '../actions/actionTypes'

const initialState = {
    currentUser: {}
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.USER_SIGNED_UP_IN_SYSTEM:
            return { currentUser: {...action.payload}};
    }
    return state;
};

export default reducer;
