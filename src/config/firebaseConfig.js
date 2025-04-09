import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAntLd4IwGwPp0t6ua-rURgjpEX4Og9tv4",
  authDomain: "vietflim.firebaseapp.com",
  projectId: "vietflim",
  storageBucket: "vietflim.firebasestorage.app",
  messagingSenderId: "734695224146",
  appId: "1:734695224146:web:c7e9d655f255b4be07008b",
  measurementId: "G-RB8VGR6DYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();