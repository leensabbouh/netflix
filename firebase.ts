// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
                apiKey: "AIzaSyDTb37KihBhzS6mS36YSiuHUu5vTQHue5Y",
                authDomain: "netflix-project-98cc6.firebaseapp.com",
                projectId: "netflix-project-98cc6",
                storageBucket: "netflix-project-98cc6.appspot.com",
                messagingSenderId: "524156700879",
                appId: "1:524156700879:web:be8c9c247e90a8caf8cfba"
              };
              
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }