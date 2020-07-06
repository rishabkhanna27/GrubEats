import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCJV1-Yv8uDV9tezfZO_OzFaXqGFhBhJFc",
    authDomain: "hotel-site-dc58d.firebaseapp.com",
    databaseURL: "https://hotel-site-dc58d.firebaseio.com",
    projectId: "hotel-site-dc58d",
    storageBucket: "hotel-site-dc58d.appspot.com",
    messagingSenderId: "1007622889933",
    appId: "1:1007622889933:web:7b1cf0b283638a707aa484",
    measurementId: "G-CPF11YPH92"
};

const firestore = firebase.initializeApp(config);

export default firestore;