import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3OFLWkx0GE7KdubaLiA-MX5kllt46bsc",
  authDomain: "aapla-maharashtra-tourism.firebaseapp.com",
  projectId: "aapla-maharashtra-tourism",
  storageBucket: "aapla-maharashtra-tourism.firebasestorage.app",
  messagingSenderId: "146299718797",
  appId: "1:146299718797:web:f97a720c52f7dc25da26c4",
  measurementId: "G-FHH7R7W9TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };