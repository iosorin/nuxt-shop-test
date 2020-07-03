import firebase from 'firebase/app';
import config from './config';
import 'firebase/database';

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default (context, inject) => {
    inject('firebase', firebase);
    inject('database', firebase.database());
    inject('cart', firebase.database().ref('cart'));
    inject('products', firebase.database().ref('products'));
};
