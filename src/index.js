import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBLOW_XOIhrxdCfSBzI7IXUKmyF_WRY-ys",
    authDomain: "noodlr-31ec5.firebaseapp.com",
    databaseURL: "https://noodlr-31ec5.firebaseio.com",
    projectId: "noodlr-31ec5",
    storageBucket: "noodlr-31ec5.appspot.com",
    messagingSenderId: "450929245782",
    appId: "1:450929245782:web:08328856950803691a05f7",
    measurementId: "G-EJK2WTH8L3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
