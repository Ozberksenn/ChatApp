import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkdUaEYMTte9K4Puj8j2FPgWs5bezB4XI",
  authDomain: "chat-11105.firebaseapp.com",
  projectId: "chat-11105",
  storageBucket: "chat-11105.appspot.com",
  messagingSenderId: "506137371104",
  appId: "1:506137371104:web:48bf874a51964ec7b7cb85",
  measurementId: "G-P0H55Q4LRY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
