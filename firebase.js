import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCmDyXAXeUdNAxX_FbYH60MtNOvid5oPvA",
    authDomain: "capstone-project-6630e.firebaseapp.com",
    databaseURL: "https://capstone-project-6630e.firebaseio.com",
    projectId: "capstone-project-6630e",
    storageBucket: "capstone-project-6630e.appspot.com",
    messagingSenderId: "81072732208",
    appId: "1:81072732208:web:04c71666a26388397315f5"
  };

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase