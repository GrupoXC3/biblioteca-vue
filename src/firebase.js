// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, updateProfile, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword;
export const configPersistencia = setPersistence;
export const loginUsuario = signInWithEmailAndPassword;
export const persistenciaNavegador = browserSessionPersistence;
export const actualizarUsuario = updateProfile;
export const logout = signOut;