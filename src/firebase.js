import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDpSVh9i7OwpttqgmnVwkK3UPRLs1Pdp_w',
    authDomain: 'unichat-301b4.firebaseapp.com',
    projectId: 'unichat-301b4',
    storageBucket: 'unichat-301b4.appspot.com',
    messagingSenderId: '152543517197',
    appId: '1:152543517197:web:4305c443876a303c365344',
  })
  .auth();
