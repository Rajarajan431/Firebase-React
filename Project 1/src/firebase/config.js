import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAUHsBv4NkeC4avytiha-IfSXVQwaaR3oQ",
  authDomain: "my-chat-f8ca2.firebaseapp.com",
  projectId: "my-chat-f8ca2",
  storageBucket: "my-chat-f8ca2.appspot.com",
  messagingSenderId: "41339490978",
  appId: "1:41339490978:web:9ddbaf802d8335b1347dfb"
};

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export {  projectFirestore, projectAuth, projectStorage ,timestamp}