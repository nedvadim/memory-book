import * as actionTypes from "./actionTypes";
import { addNewPerson } from "../../api";

export const postPerson = (data) => {
    return dispatch => {
        addNewPerson(data)
    };
};

export const personAdd = (data) => {
    return {
        type: actionTypes.PERSON_ADD,
        payload: data
    };
};