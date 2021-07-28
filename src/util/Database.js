import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import fbConfig from '../fbconfig/config'

firebase.initializeApp(fbConfig);
const Database = firebase.firestore();

export default Database;