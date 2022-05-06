import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf_xfcHZancp5EI7QvVfpYNxl4XmK5EmQ",
  authDomain: "artfilm-d65a3.firebaseapp.com",
  projectId: "artfilm-d65a3",
  storageBucket: "artfilm-d65a3.appspot.com",
  messagingSenderId: "227848485995",
  appId: "1:227848485995:web:a92bc6242700f3489cc52e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		const docs = await getDocs(q);

		if(docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: userDisplayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
}

// https://blog.logrocket.com/user-authentication-firebase-react-apps/
// https://github.com/csfrequency/react-firebase-hooks/tree/master/auth#useauthstate
