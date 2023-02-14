import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1IFPD0r48rDBXQATEtVdHlDw9FW_EF-0",
    authDomain: "react-store-db-734b7.firebaseapp.com",
    projectId: "react-store-db-734b7",
    storageBucket: "react-store-db-734b7.appspot.com",
    messagingSenderId: "558318112876",
    appId: "1:558318112876:web:7b383ad9e0855c2b704849"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', 'userAuth.uid');

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try { 
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};