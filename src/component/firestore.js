import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD8LQPSwZj67RN-TD7mlXJyKHbLrVQo7zQ",
    authDomain: "grubeats-a791b.firebaseapp.com",
    databaseURL: "https://grubeats-a791b.firebaseio.com",
    projectId: "grubeats-a791b",
    storageBucket: "grubeats-a791b.appspot.com",
    messagingSenderId: "497864806659",
    appId: "1:497864806659:web:21e7106b42c76a8b4c1936",
    measurementId: "G-CPE1GX8BF9"
};

const firestore = firebase.initializeApp(config);

export default firestore;