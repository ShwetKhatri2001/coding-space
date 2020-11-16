import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
// import { useAuth } from '../context/AuthContext';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// creating user profile
export const createUserProfileDocument = async (userAuth) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { email, photoURL, providerData } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        photoURL,
        createdAt,
        displayName: providerData[0].displayName
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
}

const firestore = firebase.firestore();
const auth = firebase.auth;
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, auth, timestamp };