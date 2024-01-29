import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

  
  const firebaseConfig = {
    apiKey: "AIzaSyDI7CCGtxB5GtOzAxNHjK35Ed24YpPSHUM",
    authDomain: "signup-and-login-294b8.firebaseapp.com",
    projectId: "signup-and-login-294b8",
    storageBucket: "signup-and-login-294b8.appspot.com",
    messagingSenderId: "809333474618",
    appId: "1:809333474618:web:c112859c0e8da7d310fc03",
    measurementId: "G-3NHEW5L1TM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  export const db = getFirestore(app);
  
  export {auth}