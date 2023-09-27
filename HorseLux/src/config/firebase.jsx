// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAccqqSrkBYn5Qy-0QSevp0IzGte2u-JOg",
  authDomain: "horselux-167fb.firebaseapp.com",
  projectId: "horselux-167fb",
  storageBucket: "horselux-167fb.appspot.com",
  messagingSenderId: "671280788159",
  appId: "1:671280788159:web:2f50716c1a52a94bdc8c0a",
  measurementId: "G-PZ1B67EE2D",
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
// export defaultf
// export const storage = getStorage(app);
