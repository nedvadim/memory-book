import * as actionTypes from "./actionTypes";
import { addNewPerson, editPerson, getPersons } from "../../api";

async function postAndPatch(personData) {
    try {
        const {data} = await addNewPerson(personData);
        await editPerson(data.name, { uniqFirebaseKey: data.name });
        return { ...personData, uniqFirebaseKey: data.name };
    } catch (e) {
        console.error(e);
        return null
    }
}

export const getAllPersonsList = () => {
    return async dispatch => {
        try {
            dispatch(setPersonsLoader(true));
            const {data} = await getPersons();
            const personsArr = Object.values(data);
            dispatch(personsInit([...personsArr]));
            dispatch(setPersonsLoader(false));
        } catch (e) {
            dispatch(setPersonsLoader(false));
            console.error(e)
        }
    }
};

export const postPerson = (personData) => {
    return async dispatch => {
        const res = await postAndPatch(personData);
        dispatch(personAdd(res));
    };
};

// =============
// pure actions

export const personAdd = (data) => {
    return {
        type: actionTypes.PERSON_ADD,
        payload: data
    };
};

export const personsInit = (data) => {
    return {
        type: actionTypes.PERSONS_INIT,
        payload: data
    };
};

export const setPersonsLoader = (data) => {
    return {
        type: actionTypes.SET_PERSONS_LOADER,
        payload: data
    };
};
