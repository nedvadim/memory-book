import API from '../utils/axiosConfig';

export function postUserToDataBase(data) {
    if (!data.id) {
        console.error("No ID was provided for new user");
        return;
    }
    console.log("Trying to put user in DB with data...", {...data});
    return API.post(`/users.json`, {...data});
}
