import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf_xfcHZancp5EI7QvVfpYNxl4XmK5EmQ",
  authDomain: "artfilm-d65a3.firebaseapp.com",
  projectId: "artfilm-d65a3",
  storageBucket: "artfilm-d65a3.appspot.com",
  messagingSenderId: "227848485995",
  appId: "1:227848485995:web:a92bc6242700f3489cc52e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// https://blog.logrocket.com/user-authentication-firebase-react-apps/
// https://github.com/csfrequency/react-firebase-hooks/tree/master/auth#useauthstate
