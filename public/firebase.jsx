import React from 'react';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCt5wtduOuuvIKpn5_mqf0TxEZK30sLrKw",
        authDomain: "instagram-dbae6.firebaseapp.com",
        databaseURL: "https://instagram-dbae6-default-rtdb.firebaseio.com",
        projectId: "instagram-dbae6",
        storageBucket: "instagram-dbae6.appspot.com",
        messagingSenderId: "336202175541",
        appId: "1:336202175541:web:dcd68d7ca57b0ff7920d7c",
        measurementId: "G-ZWZX6DD9FR"

    
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
