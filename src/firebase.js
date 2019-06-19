import Firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBC70qLycSjdY-YPvgyHlhMMSmrHZDb9IM",
  authDomain: "m-city-90371.firebaseapp.com",
  databaseURL: "https://m-city-90371.firebaseio.com",
  projectId: "m-city-90371",
  storageBucket: "m-city-90371.appspot.com",
  messagingSenderId: "1093351703587",
  appId: "1:1093351703587:web:7628396d9d2dbb58"
};

Firebase.initializeApp(config);

const firebaseDB = Firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { Firebase, firebaseMatches, firebasePromotions };
