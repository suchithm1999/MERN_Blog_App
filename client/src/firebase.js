import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fbac4.firebaseapp.com",
  projectId: "mern-blog-fbac4",
  storageBucket: "mern-blog-fbac4.appspot.com",
  messagingSenderId: "865558885464",
  appId: "1:865558885464:web:ebda0388e5a3c27311062d",
};

export const app = initializeApp(firebaseConfig);
