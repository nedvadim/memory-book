import API from '../utils/axiosConfig';

export function getApiData() {
    return API.get('test-users/males.json')
}

export function postTestData(data) {
    const section = 'males';
    return API.post(`/test-users/${section}.json`, {...data});
}
