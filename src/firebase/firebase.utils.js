import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCATj5TCgTiWnthx-HOCnnVsjqg0rD2-gw",
  authDomain: "e-commerce-project-3c908.firebaseapp.com",
  databaseURL: "https://e-commerce-project-3c908.firebaseio.com",
  projectId: "e-commerce-project-3c908",
  storageBucket: "e-commerce-project-3c908.appspot.com",
  messagingSenderId: "971845341590",
  appId: "1:971845341590:web:e426a7184d15e9d56b0db7",
  measurementId: "G-JLLWTWY2JC"
};


firebase.initializeApp(config);


export const auth = firebase.auth();

export const fireStore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;



