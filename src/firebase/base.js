import firebase from 'firebase/app'
import 'firebase/auth'
const app = firebase.initializeApp({
    apiKey: "AIzaSyBxm4Xrr3yfFZ59pdBFEf9Vo1bfZKOSJdA",
    authDomain: "memorybook-99086.firebaseapp.com",
    databaseURL: "https://memorybook-99086.firebaseio.com",
    projectId: "memorybook-99086",
    storageBucket: "memorybook-99086.appspot.com",
    messagingSenderId: "233950784881",
    appId: "1:233950784881:web:2d7944790c0a5b7ed55ad0"
});

export default app;
