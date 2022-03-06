import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCCzcprphNEx9FznZsPOWoE8iFHWiZ_Cq8",
    authDomain: "gb-react-43d68.firebaseapp.com",
    databaseURL: "https://gb-react-43d68-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-43d68",
    storageBucket: "gb-react-43d68.appspot.com",
    messagingSenderId: "774328481117",
    appId: "1:774328481117:web:87b86a923c243d7d1ee4b4"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.database();
  
  export const profileRef = db.ref("profile");
  
  export const chatsRef = db.ref("chats");
  
  export const messagesRef = db.ref("messages");
