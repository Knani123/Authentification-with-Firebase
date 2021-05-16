
import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyAQJNNbTb3OJ6O8_F98WMefroppAztHfIk",
    authDomain: "fir-arabe.firebaseapp.com",
    projectId: "fir-arabe",
    storageBucket: "fir-arabe.appspot.com",
    messagingSenderId: "634983483009",
    appId: "1:634983483009:web:6d9eb73d980cb56acb2f80"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth()