// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw8XIJSOGqV6RcSMspD_so9SZXKauoAwQ",
  authDomain: "netflix-try-48ffb.firebaseapp.com",
  projectId: "netflix-try-48ffb",
  storageBucket: "netflix-try-48ffb.firebasestorage.app",
  messagingSenderId: "8494048216",
  appId: "1:8494048216:web:27e18fe71cbce5569548ad",
  measurementId: "G-PCNLGRQDVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();