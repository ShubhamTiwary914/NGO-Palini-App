import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";



const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: "palini-next",
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
// reference to the authentication service
const auth = getAuth(app); 
// reference to the storage service
const storage = getStorage(app);

// Initialize Firestore and enable persistence
const db = getFirestore(app);





export {
    app, auth, storage, db
}
