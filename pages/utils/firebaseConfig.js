import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWyAVgFmsE7pZOP_ueGGtBgwsD9cl_P0U",
  authDomain: "vodyet-a5efb.firebaseapp.com",
  projectId: "vodyet-a5efb",
  storageBucket: "vodyet-a5efb.appspot.com",
  messagingSenderId: "192272918977",
  appId: "1:192272918977:web:58e4e04de4381ac82de740",
  measurementId: "G-R0BRC83Z5M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
