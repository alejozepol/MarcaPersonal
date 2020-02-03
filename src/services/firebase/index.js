import { createContext } from 'react';
import FirebaseApp from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!FirebaseApp.apps.length) {
      FirebaseApp.initializeApp(firebaseConfig);
      FirebaseApp.analytics();
    }
  }
}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };
