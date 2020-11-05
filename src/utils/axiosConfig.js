import axios from 'axios';
import app from "../firebase/base";

const instance = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_DATABASE
});
// instance.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('user-token');
//         if (store.getters.token) {
//             config.headers['Authorization'] = `Bearer ${token}`; // Let each request carry a custom token, please modify it according to the actual situation.
//         }
//         return config;
//     },
//     error => {
//         Promise.reject(error);
//     }
// );

export default instance;
