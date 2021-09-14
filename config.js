import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyC9HWe4bpoZgzV-X2XEbUMvQadJg1A9yiE",
  authDomain: "project71-ebab2.firebaseapp.com",
  databaseURL: "https://project71-ebab2.firebaseio.com",
  projectId: "project71-ebab2",
  storageBucket: "project71-ebab2.appspot.com",
  messagingSenderId: "883262580106",
  appId: "1:883262580106:web:50632e9bf8ddc039e21473"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

