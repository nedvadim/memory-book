import API from '../utils/axiosConfig';
export function postUserToDataBase(data) {
}

export function getUserData (id) {
    return API.get(`/users.json`);
}
