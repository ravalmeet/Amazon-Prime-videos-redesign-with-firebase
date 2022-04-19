// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr0AnO4Lz-zuUXE2h7aFlPiBpeMdR0cQE",
  authDomain: "prime-videos-redesign.firebaseapp.com",
  projectId: "prime-videos-redesign",
  storageBucket: "prime-videos-redesign.appspot.com",
  messagingSenderId: "91342249735",
  appId: "1:91342249735:web:1720843b786e9f13cc2fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();