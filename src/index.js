import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from 'firebase';
import './style.css';
import firebaseConfig from './fbconfig/config';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
