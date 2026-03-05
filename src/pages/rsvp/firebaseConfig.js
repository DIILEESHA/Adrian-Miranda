import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3gTw8TurW2g0BeqAtab_gC9-AhucpMpA",
  authDomain: "adrian-bdba6.firebaseapp.com",
  projectId: "adrian-bdba6",
  storageBucket: "adrian-bdba6.firebasestorage.app",
  messagingSenderId: "577540439707",
  appId: "1:577540439707:web:bbe11506f8e4766e2f903e",
  measurementId: "G-NH6RCH0LQQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
