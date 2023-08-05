import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  deleteUser,
  signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firebaseConfig = {
  apiKey: 'AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME',
  authDomain: 'read-easy-a785a.firebaseapp.com',
  projectId: 'read-easy-a785a',
  storageBucket: 'read-easy-a785a.appspot.com',
  messagingSenderId: '672240774710',
  appId: '1:672240774710:web:1093f9e83dded932d97297',
  measurementId: 'G-PFEBLXEB67',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
getAuth(app);

const createAccount = async (email, password, userName) => {
  try {
    let account = await createUserWithEmailAndPassword(getAuth(app), email, password);
    try {
      await setDoc(doc(db, 'users', account.user.uid), {
        name: userName,
        shoppingList: [],
      });
      return getAuth(app).currentUser;
    } catch (error) {
      Notify.failure(`Wrong set userName "${error.message}"`);
      return undefined;
    }
  } catch (error) {
    Notify.failure(`Wrong registration "${error.message}"`);
    return undefined;
  }
};

const signInApp = async (email, password) => {
  localStorage.removeItem('account');
  try {
    await signInWithEmailAndPassword(getAuth(app), email, password);
    return getAuth(app).currentUser;
  } catch (error) {
    Notify.failure(`Wrong authorization "${error.message}"`);
    return undefined;
  }
};

const isSignIn = () => {
  return getAuth(app).currentUser === null ? false : true;
};

const signOutApp = () => {
  signOut(getAuth(app));
};

//Before calling to delete the account, you must call signInApp
const removeAccount = async () => {
  if (!isSignIn()) {
    Notify.failure('The user is not authorized');
    return;
  }
  try {
    const user = getAuth().currentUser;
    await deleteDoc(doc(db, 'users', user.uid));
    await deleteUser(user);
  } catch (error) {
    Notify.failure(`Wrong remove "${error.message}"`);
  }
};

const getUserShoppingList = async () => {
  if (!isSignIn()) {
    Notify.failure('The user is not authorized');
    return undefined;
  }
  try {
    const docRef = doc(db, 'users', getAuth(app).currentUser.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data().shoppingList;
  } catch (error) {
    Notify.failure(`Wrong get user's ShoppingList "${error.message}"`);
    return undefined;
  }
};

const updateUserShoppingList = async userShoppingList => {
  if (!isSignIn()) {
    Notify.failure('The user is not authorized');
    return false;
  }
  try {
    const docRef = doc(db, 'users', getAuth(app).currentUser.uid);
    result = await updateDoc(docRef, {
      shoppingList: userShoppingList,
    });
    return true;
  } catch (error) {
    Notify.failure(`Wrong update "${error.message}"`);
    return false;
  }
};

const getUserName = async () => {
  if (!isSignIn()) {
    Notify.failure('The user is not authorized');
    return undefined;
  }
  try {
    const docRef = doc(db, 'users', getAuth(app).currentUser.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data().name;
  } catch (error) {
    Notify.failure(`Wrong get user's name "${error.message}"`);
    return undefined;
  }
};

const getUserEmail = () => {
  if (!isSignIn()) {
    Notify.failure('The user is not authorized');
    return undefined;
  }
  return getAuth(app).currentUser.email;
};

const returnAuth = () => {
  return getAuth(app);
};

export {
  createAccount,
  signInApp,
  isSignIn,
  signOutApp,
  removeAccount,
  getUserShoppingList,
  updateUserShoppingList,
  getUserName,
  getUserEmail,
};
