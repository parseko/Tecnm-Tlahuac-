import firebase from  'firebase';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADHWbJVv1U4ykjouZ0U9chgLPkPbghFfg",
    authDomain: "tecnm-tlahuac.firebaseapp.com",
    projectId: "tecnm-tlahuac",
    storageBucket: "tecnm-tlahuac.appspot.com",
    messagingSenderId: "449217523162",
    appId: "1:449217523162:web:feff77ebd34bf2aed124e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export default  {
      firebase,
      db,
      auth
  }