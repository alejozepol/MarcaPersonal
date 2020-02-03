import { createContext } from 'react';
import FirebaseApp from 'firebase/app';
import firebase from 'firebase';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!FirebaseApp.apps.length) {
      FirebaseApp.initializeApp(firebaseConfig);
      firebase.analytics();
    }
  }
}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };
