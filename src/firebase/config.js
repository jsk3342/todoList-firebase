import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQAIueCto7OpTJLsY76LpO_DrIFpXdp6g",
    authDomain: "todolist-firebase-20849.firebaseapp.com",
    projectId: "todolist-firebase-20849",
    storageBucket: "todolist-firebase-20849.appspot.com",
    messagingSenderId: "317889963671",
    appId: "1:317889963671:web:05bb587ec1ba0c16392bd2"
};

const app = initializeApp(firebaseConfig);
const appFireStore = getFirestore(app);
const appAuth = getAuth();

export { appFireStore, appAuth }