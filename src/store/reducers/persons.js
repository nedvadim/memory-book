import * as actionTypes from '../actions/actionTypes';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.PERSON_ADD:
            return { ...state, isMainDrawerOpened: true};
    }
    return state;
};

export default reducer;
