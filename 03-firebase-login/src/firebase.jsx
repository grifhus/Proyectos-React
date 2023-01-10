import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBNRYeLD0ywvy4yA-g9QBWYJhZocwZeOEc",
  authDomain: "fir-login-8e178.firebaseapp.com",
  projectId: "fir-login-8e178",
  storageBucket: "fir-login-8e178.appspot.com",
  messagingSenderId: "851047395423",
  appId: "1:851047395423:web:f50529675aab695707ebea",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
export { auth, app }
