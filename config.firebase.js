// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB94syLvsoJJQLjj-djpOuLM2i02n2sc80",
  authDomain: "toy-store-client-aa9f1.firebaseapp.com",
  projectId: "toy-store-client-aa9f1",
  storageBucket: "toy-store-client-aa9f1.appspot.com",
  messagingSenderId: "564595207242",
  appId: "1:564595207242:web:fa8c9ab2d801954c894ab3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;