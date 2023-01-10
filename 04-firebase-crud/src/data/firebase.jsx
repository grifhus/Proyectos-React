// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5OobDbQZtKhheA-XNaMNjyYyVO9bSiRE",
  authDomain: "fir-crud-a37f3.firebaseapp.com",
  projectId: "fir-crud-a37f3",
  storageBucket: "fir-crud-a37f3.appspot.com",
  messagingSenderId: "274479222719",
  appId: "1:274479222719:web:93ccbbbe7785607a701b0a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
