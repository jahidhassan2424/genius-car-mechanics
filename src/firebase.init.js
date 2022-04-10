// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo91ez1-dLaE33zLRZvqDXdnSuNWpRvTs",
    authDomain: "genius-car-mechanics-bd-3e0ba.firebaseapp.com",
    projectId: "genius-car-mechanics-bd-3e0ba",
    storageBucket: "genius-car-mechanics-bd-3e0ba.appspot.com",
    messagingSenderId: "452738937497",
    appId: "1:452738937497:web:c9cd3b599681037c27be08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;