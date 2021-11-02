import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTge8cNNawjM2YBBR1UluWT_nUyYYEtAs",
  authDomain: "blog-7e790.firebaseapp.com",
  projectId: "blog-7e790",
  storageBucket: "blog-7e790.appspot.com",
  messagingSenderId: "280441648109",
  appId: "1:280441648109:web:f8844f3923736a284dade4",
  measurementId: "G-1HR609HB4D",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
