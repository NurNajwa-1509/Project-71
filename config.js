import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCex9Vh0W0dvwz1DeWdAdCbNYSttWAFKDE",
  authDomain: "e-ride-88cee.firebaseapp.com",
  projectId: "e-ride-88cee",
  storageBucket: "e-ride-88cee.appspot.com",
  messagingSenderId: "596313750469",
  appId: "1:596313750469:web:dd9040b5f8f14689cba9ac"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
