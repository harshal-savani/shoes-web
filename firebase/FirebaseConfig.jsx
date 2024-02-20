// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCvJD4Zsy9MBn4AQLsUxxXqG4HyhEuCUn8",
  authDomain: "myfirstapp-50297.firebaseapp.com",
  projectId: "myfirstapp-50297",
  storageBucket: "myfirstapp-50297.appspot.com",
  messagingSenderId: "481721337898",
  appId: "1:481721337898:web:343db250944ebbe0b25b53",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const fireDB = getFirestore(app)
const auth = getAuth(app)

export { fireDB, auth }
