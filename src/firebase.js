// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, updateProfile, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAe9sTBKnteMKoujVO47wyaHHoyF6g69w",
  authDomain: "biblioteca-filandia.firebaseapp.com",
  databaseURL: "https://biblioteca-filandia-default-rtdb.firebaseio.com",
  projectId: "biblioteca-filandia",
  storageBucket: "biblioteca-filandia.appspot.com",
  messagingSenderId: "844976667413",
  appId: "1:844976667413:web:c87c58f0f82647d625c71c",
  measurementId: "G-SW7K1B0PVY"
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