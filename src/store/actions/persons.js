import * as actionTypes from "./actionTypes";
import { addNewPerson } from "../../api";

export const postPerson = (personData) => {
    return dispatch => {
        addNewPerson(personData).then(({data}) => {
            console.log(data.name);
        }).catch((e) => {
            console.error(e);
        })
    };
};

export const personAdd = (data) => {
    return {
        type: actionTypes.PERSON_ADD,
        payload: data
    };
};
