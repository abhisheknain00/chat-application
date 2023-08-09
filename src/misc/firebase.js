import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBv5tLqhl36q-xwEr8jws_WKyNABOsX_5M',
  authDomain: 'chat-web-app-cd353.firebaseapp.com',
  databaseURL: 'https://chat-web-app-cd353-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-cd353',
  storageBucket: 'chat-web-app-cd353.appspot.com',
  messagingSenderId: '167269631097',
  appId: '1:167269631097:web:ab1d049afc70416b4ec0a8',
};

const app = firebase.initializeApp(config);
