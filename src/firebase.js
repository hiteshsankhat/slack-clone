// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQSru87hFC9N0ejNYzrJvn4sa96-f062k",
  authDomain: "slack-clone-63dd3.firebaseapp.com",
  projectId: "slack-clone-63dd3",
  storageBucket: "slack-clone-63dd3.appspot.com",
  messagingSenderId: "121320508205",
  appId: "1:121320508205:web:0ed8e9c13603a87146e1a4",
  measurementId: "G-MSZDSJR051",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
