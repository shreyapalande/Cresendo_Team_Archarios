import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})  

export const auth = app.auth()
export const firestore = firebase.firestore()

export const createUserDocument = async (user) => {
    if(!user) return

    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists) {
        // console.log(user)
        const email = user.email

        try {
            userRef.set({
                email,
                createdAt: new Date()
            })
        } catch(error) {
            console.log("Error in creating database")
        }
    }

}

export default app
