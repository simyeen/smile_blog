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

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
