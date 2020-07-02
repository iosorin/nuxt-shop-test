import firebase from 'firebase/app';
import 'firebase/database';

import config from './config';

const firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(config)
    : firebase.app();

export const DB = firebaseApp.database();
export default firebaseApp;
