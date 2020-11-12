import axios from 'axios';
import app from "../firebase/base";
import store from "../store";
const instance = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_DATABASE
});
// instance.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('user-token');
//         const state = store.getState();
//         console.log("state", state);
//         console.log("token", token);
//
//         if (state.auth.token) {
//             config.headers['Authorization'] = `Bearer ${state.auth.token}`; // Let each request carry a custom token, please modify it according to the actual situation.
//         }
//         return config;
//     },
//     error => {
//         Promise.reject(error);
//     }
// );

export default instance;
