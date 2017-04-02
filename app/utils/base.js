import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDF7VEo472VPcufkGBPjXbMcXOMxIC5Iyk",
    authDomain: "shopassistant-dc72b.firebaseapp.com",
    databaseURL: "https://shopassistant-dc72b.firebaseio.com",
    storageBucket: "shopassistant-dc72b.appspot.com",
    messagingSenderId: "99246980274"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
