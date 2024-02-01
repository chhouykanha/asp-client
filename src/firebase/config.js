// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZI0H7s-VY9SOehaH3P2N6erXOQwCLGM",
  authDomain: "asp-cloud-6c217.firebaseapp.com",
  projectId: "asp-cloud-6c217",
  storageBucket: "asp-cloud-6c217.appspot.com",
  messagingSenderId: "986344957278",
  appId: "1:986344957278:web:5f33ac65045c5f34cc1bcf"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)


export default storage;