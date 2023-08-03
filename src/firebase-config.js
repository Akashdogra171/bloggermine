import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN3R5oLr1kB0gomEQE_R54DeTyaZH3imU",
  authDomain: "fir-7e346.firebaseapp.com",
  projectId: "fir-7e346",
  storageBucket: "fir-7e346.appspot.com",
  messagingSenderId: "621430439833",
  appId: "1:621430439833:web:8e1f56aae022b6b0281d08",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
