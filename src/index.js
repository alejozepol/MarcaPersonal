import React from 'react';
import ReactDom from 'react-dom';
import { FirebaseContext, Firebase } from './services/firebase';
import App from './routes';

ReactDom.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
  ,
  document.getElementById('app'),
);
registerServiceWorker();

