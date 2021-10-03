import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAnY0qReJyS1lK0tFSTn5H3fxAxydHItQQ",
    authDomain: "netflix-clone-2f766.firebaseapp.com",
    projectId: "netflix-clone-2f766",
    storageBucket: "netflix-clone-2f766.appspot.com",
    messagingSenderId: "1098062026390",
    appId: "1:1098062026390:web:f5b86a608f01c85d25d4b7",
    measurementId: "G-54SBBT10T2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;