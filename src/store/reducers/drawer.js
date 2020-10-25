import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isMainDrawerOpened: false
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.OPEN_MAIN_DRAWER:
            return { ...state, isMainDrawerOpened: true};
        case actionTypes.CLOSE_MAIN_DRAWER:
            return { ...state, isMainDrawerOpened: false};
    }
    return state;
};

export default reducer;
