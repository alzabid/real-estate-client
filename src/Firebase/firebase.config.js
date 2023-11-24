
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHaLL8rY0toOC27jyS841W0Qh0xGB7iq8",
  authDomain: "real-estate-a12.firebaseapp.com",
  projectId: "real-estate-a12",
  storageBucket: "real-estate-a12.appspot.com",
  messagingSenderId: "516199767889",
  appId: "1:516199767889:web:83419e65637b9e83d43d70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;