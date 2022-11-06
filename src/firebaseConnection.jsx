import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCWALrMLUbRrpm3gy2fUKBcy8zxwm2CorE",
  authDomain: "aula07-10-6fff1.firebaseapp.com",
  projectId: "aula07-10-6fff1",
  storageBucket: "aula07-10-6fff1.appspot.com",
  messagingSenderId: "1099158319750",
  appId: "1:1099158319750:web:5d3706078c360ee4ea5707",
  measurementId: "G-X2VYN261GN"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
