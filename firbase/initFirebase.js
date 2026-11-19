import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';  // Add this line
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);  // Add this line
// sendPasswordResetEmail(auth, "raghav11111111118280@gmail.com")
//   .then(() => {
//     // Password reset email sent!
//     // ..
//     alert("yay, sent raghav11111111118280")

//   })
//   .catch((error) => {
//     alert(error.message)
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });


// Wrap the sendEmail invocation in a function
// const sendEmail = async () => {
//   console.log("in sendEmail")
//   try {
//     const sendEmailFunction = httpsCallable(functions, 'sendCustomEmail');
//     const result = await sendEmailFunction({
//       to: 'raghav18280@gmail.com',
//       subject: 'Hello',
//       text: 'This is a custom email.',
//     });
//     console.log(result.data); // { success: true }
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Call sendEmail by default when the module is loaded
// sendEmail();