// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAF2lfTyHSkyOJyv6ZcV9HHoh0SaL1ec8k",
//   authDomain: "chat-app-a4204.firebaseapp.com",
//   projectId: "chat-app-a4204",
//   storageBucket: "chat-app-a4204.firebasestorage.app",
//   messagingSenderId: "508144313025",
//   appId: "1:508144313025:web:1a9a7d4fdbf2c502f92a40",
//   measurementId: "G-WCLYRC6FVX",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const getAnalytics = getAnalytics(app);
// export const auth = getAuth();

// export default db;

// جديييد


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAF2lfTyHSkyOJyv6ZcV9HHoh0SaL1ec8k",
  authDomain: "chat-app-a4204.firebaseapp.com",
  projectId: "chat-app-a4204",
  storageBucket: "chat-app-a4204.firebasestorage.app",
  messagingSenderId: "508144313025",
  appId: "1:508144313025:web:1a9a7d4fdbf2c502f92a40",
  measurementId: "G-WCLYRC6FVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// تصدير auth و db باستخدام named exports
export { auth, db, analytics };
