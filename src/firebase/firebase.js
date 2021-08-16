import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '../firebase/config'

firebase.initializeApp(config)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider, db }
