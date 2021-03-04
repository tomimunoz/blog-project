import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxctOyYWxqtBTh__LsnnB9u0XjjfeP3-g",
  authDomain: "blog-react-3e544.firebaseapp.com",
  projectId: "blog-react-3e544",
  storageBucket: "blog-react-3e544.appspot.com",
  messagingSenderId: "49941939451",
  appId: "1:49941939451:web:95c69e6663b5d586ec1c5e",
  measurementId: "G-X6ZG5TZQRV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;


