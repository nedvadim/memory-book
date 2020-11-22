import * as actionTypes from '../actions/actionTypes';

const initialState = {
    persons: [],
    personsLoading: false
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.PERSON_ADD:
            return { ...state, persons: [...state.persons, action.payload]};
        case actionTypes.PERSONS_INIT:
            return { ...state, persons: [ ...action.payload ] };
        case actionTypes.SET_PERSONS_LOADER:
            return { ...state, personsLoading: action.payload };
        default:
            return state;
    }
};

export default reducer;
