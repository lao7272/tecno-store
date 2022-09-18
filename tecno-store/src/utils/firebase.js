import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD0AOmAZ6Zu981GWZXgp2ZtjlarH6-Mro0",
    authDomain: "tecno-store-f7b6f.firebaseapp.com",
    projectId: "tecno-store-f7b6f",
    storageBucket: "tecno-store-f7b6f.appspot.com",
    messagingSenderId: "205395579231",
    appId: "1:205395579231:web:183a3ee40a0f636f2f66ea",
    measurementId: "G-WC6GV94188"
};
// Conexion con el proyecto
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);