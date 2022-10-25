import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhgiyzM6C0VYiZpsG_EcuQbK46fIbd4PA",
  authDomain: "techteachingclub.firebaseapp.com",
  projectId: "techteachingclub",
  storageBucket: "techteachingclub.appspot.com",
  messagingSenderId: "1018434702852",
  appId: "1:1018434702852:web:3c72ba0d0612f4d4d02f51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
