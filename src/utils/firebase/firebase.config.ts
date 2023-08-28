// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Interfaces & Types
import { Product } from "../models/product.model";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADZfV20DYhzfn-T-jqGMdWGRmRiIUuCqA",
  authDomain: "audiophile-2d58d.firebaseapp.com",
  projectId: "audiophile-2d58d",
  storageBucket: "audiophile-2d58d.appspot.com",
  messagingSenderId: "210772703202",
  appId: "1:210772703202:web:37fd7eb7189dfb832dabbb",
};

// FireStore
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Initialize Firebase
initializeApp(firebaseConfig);

// Google Auth
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Exports Auth Functions
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();
export const addCollectionAndDocuments = async (
  collectionKey: string,
  productToAdd: Product[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  productToAdd.forEach((product) => {
    const docRef = doc(collectionRef, product.category.toLowerCase());
    batch.set(docRef, product);
  });

  await batch.commit();
  console.log("Product created!!!");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  return data;
};

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInfo: object = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
