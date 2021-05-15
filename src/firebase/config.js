import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyC67SVSeLbjRL_GzMvQd85vGeb62Q-k0jM",
    authDomain: "the-ninja-projects.firebaseapp.com",
    projectId: "the-ninja-projects",
    storageBucket: "the-ninja-projects.appspot.com",
    messagingSenderId: "396820829678",
    appId: "1:396820829678:web:2938b586bf366fb811aaff"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, firebase }


