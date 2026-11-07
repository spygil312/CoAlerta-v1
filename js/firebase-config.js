import { getApps, initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA7Dzlktf0V7fUC297UgV_Z7uJlP8WMzEQ",
    authDomain: "coalerta-dev.firebaseapp.com",
    projectId: "coalerta-dev",
    storageBucket: "coalerta-dev.firebasestorage.app",
    messagingSenderId: "1008147139726",
    appId: "1:1008147139726:web:02682ef3ceef53772acddf"
};

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

window.auth = auth;
