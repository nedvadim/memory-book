import API from '../utils/axiosConfig';
import store from "../store";
function getAuthData() {
  const state = store.getState();
  const token = state.auth.token;
  const userId = state.auth.userId;
  const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
  return {token, userId, queryParams};
}
export function addNewPerson(data) {
    const { token, userId } = getAuthData();
    return API.post(`/persons.json?auth=${token}`, { ...data, userId });
}
export function getPersons() {
    const { queryParams } = getAuthData();
    return API.get(`/persons.json${queryParams}`);
}
export function editPerson(uniqKey, data) {
    const { token } = getAuthData();
    return API.patch(`/persons/${uniqKey}/.json?auth=${token}`, { ...data })
}
