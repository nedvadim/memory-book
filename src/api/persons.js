import API from '../utils/axiosConfig';
import { getAuthData } from "./apiHelpers";

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
export function getPersonById(id) {
  const { token } = getAuthData();
  return API.get(`/persons/${id}.json?auth=${token}`);
}
