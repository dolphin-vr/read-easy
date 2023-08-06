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

const createAccount = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

const setUserName = async userName => {
  const docRef = doc(db, 'users', getAuth(app).currentUser.uid);
  return setDoc(docRef, {
    name: userName,
  });
};

const signInApp = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};

const isSignIn = () => {
  return getAuth(app).currentUser === null ? false : true;
};

const signOutApp = () => {
  signOut(getAuth(app));
};

const removeAccount = async () => {
  const user = getAuth().currentUser;
  return deleteUser(user);
};

const removeAccountInfo = async () => {
  const user = getAuth().currentUser;
  return deleteDoc(doc(db, 'users', user.uid));
};

const getUserShoppingList = async () => {
  const docRef = doc(db, 'users', getAuth(app).currentUser.uid);
  return getDoc(docRef);
};

const updateUserShoppingList = async userShoppingList => {
  const docRef = doc(db, 'users', getAuth(app).currentUser.uid);
  return updateDoc(docRef, {
    shoppingList: userShoppingList,
  });
};

const getUserName = async () => {
  return getDoc(doc(db, 'users', getAuth(app).currentUser.uid));
};

const getUserEmail = () => {
  return getAuth(app).currentUser.email;
};

const returnAuth = () => {
  return getAuth(app);
};

export {
  createAccount,
  setUserName,
  signInApp,
  isSignIn,
  signOutApp,
  removeAccount,
  removeAccountInfo,
  getUserShoppingList,
  updateUserShoppingList,
  getUserName,
  getUserEmail,
  returnAuth,
};

//Приклади роботи з ф-ціями

//===============================================================================

// --- createAccount ---

//   createAccount(email.value, password.value)
//     .then(createAccountRes => {
//       console.log(`createAccount success`);
//       console.log(createAccountRes);
//       setUserName('Gosha')
//         .then(setUserNameRes => {
//           //Тут рахуємо що все добре!
//           console.log(`setUserName success `);
//           console.log(setUserNameRes);
//         })
//         .catch(setUserNameError => {
//           console.log(`setUserName wrong "${setUserNameError.code}"`);
//           removeAccount()
//             .then(removeAccountRes => {
//               console.log('removeAccount success');
//               console.log(removeAccountRes);
//             })
//             .catch(removeAccountError => {
//               console.log('removeAccount wrong');
//               console.log(removeAccountError.code);
//             });
//         });
//     })
//     .catch(createAccountError => {
//       console.log(`createAccount wrong "${createAccountError.code}"`);
//       if (createAccountError.code === 'auth/email-already-in-use') {
//         console.log('Change auth/email');
//       } else if (createAccountError.code === 'auth/invalid-email') {
//         console.log('Wrong auth/email');
//       } else if (createAccountError.code === 'auth/missing-email') {
//         console.log('Enter email');
//       } else if (createAccountError.code === 'auth/missing-password') {
//         console.log('Enter password');
//       } else {
//         console.log('Wrong');
//       }
//     });

//===============================================================================

// --- signInApp ---

//   signInApp(email.value, password.value)
//     .then(signInAppRes => {
//       console.log(`signInApp success `);
//       console.log(signInAppRes);
//       //Тут рахуємо що все добре!
//     })
//     .catch(signInAppError => {
//       console.log(`createAccount wrong "${signInAppError.code}"`);
//       if (signInAppError.code === 'auth/user-not-found') {
//         console.log('Not user');
//       } else if (signInAppError.code === 'auth/invalid-email') {
//         console.log('Wrong auth/email');
//       } else if (signInAppError.code === 'auth/missing-email') {
//         console.log('Enter email');
//       } else if (signInAppError.code === 'auth/missing-password') {
//         console.log('Enter password');
//       } else if (signInAppError.code === 'auth/wrong-password') {
//         console.log('Wrong password');
//       } else {
//         console.log('Wrong');
//       }
//     });

//===============================================================================

// --- removeAccountInfo ---

//   if (isSignIn()) {
//     removeAccountInfo()
//       .then(removeAccountInfoRes => {
//         console.log('removeAccountInfo success');
//         console.log(removeAccountInfoRes);
//         removeAccount()
//           .then(removeAccountRes => {
//             //Тут рахуємо що все добре!
//             console.log('removeAccount success');
//             console.log(removeAccountRes);
//           })
//           .catch(removeAccountError => {
//             console.log('removeAccount wrong');
//             console.log(removeAccountError.code);
//           });
//       })
//       .catch(removeAccountInfoError => {
//         console.log('removeAccountInfo wrong');
//         console.log(removeAccountInfoError.code);
//       });
//   }

//===============================================================================

// --- getUserShoppingList ---

//   if (isSignIn()) {
//     getUserShoppingList()
//       .then(shoppingList => {
//         console.log(shoppingList.data().shoppingList);
//         if (shoppingList.data().shoppingList.length > 0) {
//           //Тут рахуємо що все добре і данні є!
//           console.log('All Ok We have shopinglist');
//         }
//       })
//       .catch(getUserShoppingListError => {
//         console.log(' getUserShoppingList wrong');
//         console.log(getUserShoppingListError.code);
//       });
//   }

//===============================================================================

// --- updateUserShoppingList ---

//   const shoppingList = (await getTopBooks()).data[0].books.slice(1, 5);
//   if (isSignIn()) {
//     updateUserShoppingList(shoppingList)
//       .then(shoppingListRes => {
//         console.log(shoppingListRes);
//         //Тут рахуємо що все добре і данні додані!
//       })
//       .catch(updateUserShoppingListError => {
//         console.log('updateUserShoppingList wrong');
//         console.log(updateUserShoppingListError.code);
//       });
//   }

//===============================================================================

// --- updateShopList ---

//   if (isSignIn()) {
//     updateShopList()
//       .then(res => {
//         // console.log(res);
//       })
//       .catch(updateShopListError => {
//         console.log('updateShopList wrong');
//         console.log(updateShopListError.code);
//       });
//   }

//===============================================================================

// --- getUserName ---

//   if (isSignIn()) {
//     getUserName()
//       .then(getUserNameRes => {
//         console.log(getUserNameRes.data().name);
//         //Тут рахуємо що все добре і данні є!
//       })
//       .catch(getUserNameError => {
//         console.log('getUserName wrong');
//         console.log(getUserNameError.code);
//       });
//   }

//===============================================================================

// --- getUserEmail ---

//   if (isSignIn()) {
//     try {
//       //Тут рахуємо що все добре і данні є!
//       console.log(getUserEmail());
//     } catch (error) {
//       console.log('getUserEmail wrong');
//     }
//   }
