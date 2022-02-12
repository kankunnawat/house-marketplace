import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD7lrU_8DKuqMjzOhY2chaTGktMrR93g20',
  authDomain: 'house-marketplace-app-703b5.firebaseapp.com',
  projectId: 'house-marketplace-app-703b5',
  storageBucket: 'house-marketplace-app-703b5.appspot.com',
  messagingSenderId: '389755505113',
  appId: '1:389755505113:web:6bb2994e22f9df7b7bf1c8',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
