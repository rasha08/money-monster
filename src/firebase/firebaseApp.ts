import * as firebase from 'firebase';
import 'firebase/auth';
import { firebaseConfig } from './config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export type FirebaseUser = firebase.User
