//firebase config key setup

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyDFpldYTOwpuqbxB47N80nYrdThKyVOhX8",
    authDomain: "test-d6c32.firebaseapp.com",
    projectId: "test-d6c32",
    storageBucket: "test-d6c32.appspot.com",
    messagingSenderId: "362593594320",
    appId: "1:362593594320:web:a3637437f86783100da7d5",
    measurementId: "G-HWP0H7R9LK"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export{firebase};