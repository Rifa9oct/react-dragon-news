// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfryt9vK-NjF_go34SEGl9xy_VE_05f3U",
  authDomain: "react-dragon-news-8a6a0.firebaseapp.com",
  projectId: "react-dragon-news-8a6a0",
  storageBucket: "react-dragon-news-8a6a0.appspot.com",
  messagingSenderId: "520714676898",
  appId: "1:520714676898:web:234da1dcd298a3abc745fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;