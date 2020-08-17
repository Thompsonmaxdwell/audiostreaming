import firebaseConfig from './secret';
import * as firebase from 'firebase';
import 'firebase/auth';




firebase.initializeApp(firebaseConfig)

export default firebase;
