import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBaTfGe9JxrNKECupmMeZy-0ldOdlL9nbk",
  authDomain: "netflix-16fa2.firebaseapp.com",
  projectId: "netflix-16fa2",
  storageBucket: "netflix-16fa2.appspot.com",
  messagingSenderId: "617383595748",
  appId: "1:617383595748:web:6944592f37045768e5a6f1",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore() //realtime database
const auth = firebase.auth()

export { auth } //explicit export
export default db //default export
