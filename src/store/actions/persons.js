import * as actionTypes from "./actionTypes";
import { addNewPerson, editPerson } from "../../api";

async function postAndPatch(personData) {
    try{
        const {data} = await addNewPerson(personData);
        await editPerson(data.name, { uniqFirebaseKey: data.name });
        return { ...personData, uniqFirebaseKey: data.name };
    } catch (e) {
        console.error(e);
        return null
    }
}

export const postPerson = (personData) => {
    return async dispatch => {
        const res = await postAndPatch(personData);
        console.log('RES: ', res);
    };
};

export const personAdd = (data) => {
    return {
        type: actionTypes.PERSON_ADD,
        payload: data
    };
};
