import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

var firebaseConfig = {
    apiKey: "AIzaSyC67SVSeLbjRL_GzMvQd85vGeb62Q-k0jM",
    authDomain: "the-ninja-projects.firebaseapp.com",
    projectId: "the-ninja-projects",
    storageBucket: "the-ninja-projects.appspot.com",
    messagingSenderId: "396820829678",
    appId: "1:396820829678:web:2938b586bf366fb811aaff"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()


