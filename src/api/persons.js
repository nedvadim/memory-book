import API from '../utils/axiosConfig';
import store from "../store";

// eslint-disable-next-line no-unused-vars
// const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
export function addNewPerson(data) {
    const state = store.getState();
    const token = state.auth.token;
    const userId = state.auth.userId;
    return API.post(`/persons.json?auth=${token}`, { ...data, userId });
}
export function getPersons() {
    const state = store.getState();
    const token = state.auth.token;
    const userId = state.auth.userId;
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    return API.get(`/persons.json${queryParams}`);
}
