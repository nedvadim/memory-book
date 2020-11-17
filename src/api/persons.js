import API from '../utils/axiosConfig';
import store from "../store";
const state = store.getState();
const token = state.auth.token;
const userId = state.auth.userId;
const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

export function addNewPerson(data) {
    return API.post(`/persons.json?auth=${token}`, { ...data, userId });
}
export function getPersons() {
    return API.get(`/persons.json${queryParams}`);
}
export function editPerson(uniqKey, data) {
    return API.patch(`/persons/${uniqKey}/.json?auth=${token}`, { name: 'Vadim' })
}
