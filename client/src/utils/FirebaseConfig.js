import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuW1WzDHAHm5M-eRXrDzceiC-odm9Y48E",
  authDomain: "whatsapp-clone-f0fdf.firebaseapp.com",
  projectId: "whatsapp-clone-f0fdf",
  storageBucket: "whatsapp-clone-f0fdf.firebasestorage.app",
  messagingSenderId: "784355609436",
  appId: "1:784355609436:web:d1fbdcccfc8ce5e2c5cf99",
  measurementId: "G-N4TBWJL51R",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
