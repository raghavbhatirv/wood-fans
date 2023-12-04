// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, query, where, getDocs, addDoc, getDoc, arrayUnion, doc, updateDoc, arrayRemove, writeBatch } from 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storeDB = getFirestore(app)

// Authentication Providers
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()


// Export services
export {
     auth,
     onAuthStateChanged,
     storeDB,
     googleProvider,
     facebookProvider,
     collection,
     query,
     where,
     getDocs,
     updateDoc,
     doc,
     addDoc,
     getDoc,
     arrayUnion,
     arrayRemove,
     writeBatch

}