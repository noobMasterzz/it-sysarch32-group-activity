
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/getAuth";

const firebaseConfig = {
  apiKey: "AIzaSyBVZLNj4iznptEWEYYecK8Qva3kHHKZy40",
  authDomain: "itsysarch32-firebaseproj-tbdc.firebaseapp.com",
  projectId: "itsysarch32-firebaseproj-tbdc",
  storageBucket: "itsysarch32-firebaseproj-tbdc.appspot.com",
  messagingSenderId: "621171211034",
  appId: "1:621171211034:web:ff8c448eaaee16aa664aa3",
  measurementId: "G-ZWZC3D1NMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
const analytics = getAnalytics(app);