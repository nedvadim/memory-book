import API from '../utils/axiosConfig';
import store from "../store";
const state = store.getState();
const token = state.auth.token;
const userId = state.auth.userId;
// eslint-disable-next-line no-unused-vars
const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
export function addNewPerson(data) {
    return API.post(`/persons.json?auth=${userId}`, data);
}
