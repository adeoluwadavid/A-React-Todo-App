import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//using firebase in the app
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// creating a store and routing it to fb
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { rootReducer } from './ducks/reducers'
import { BrowserRouter } from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyDp-igHt_t9Ia_YqexzgYv8ezmBiAOZtxo",
  authDomain: "todo-app-48b77.firebaseapp.com",
  databaseURL: "https://todo-app-48b77.firebaseio.com",
  projectId: "todo-app-48b77",
  storageBucket: "todo-app-48b77.appspot.com",
  messagingSenderId: "573586938675",
  appId: "1:573586938675:web:1c8353bc6c7fa4b7be7c46"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
