import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  // add firebase config
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB
  .ref("matches")
  .once("value")
  .then(snapshot => {
    console.log(snapshot.val());
  });
