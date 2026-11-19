import { useState } from "react";
import { auth, db } from "../firbase/initFirebase";
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";
import Link from "next/link";
import isEmailVerified from '../utils/isemailverified';
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, isemailverified } from "firebase/auth";
import { useUser } from "@/context/user";
import { FullScreenLoader } from "@/components/loader";

export default function ForgotPassword() {
  const { appState } = useUser();
  const isVisible = appState == "login";
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const resetEmail = async () => {
    // const isVerified = await isEmailVerified(auth, email);
    // alert(isVerified)
    // if(isVerified != false){
    //   await sendPasswordResetEmail(auth, email)
    //   .then(() => {
    //     setSuccessMessage(
    //       "Password reset email sent successfully. Check your inbox."
    //     );
    //     setError(null);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage, "errorMessage");
    //     console.log(error);
    //     setError(
    //       "Error sending password reset email. Please check your email address and try again."
    //     );
    //     setSuccessMessage(null);
    //   });
    // }

    try {
      // Check if a user with the entered email exists
      // const signInMethods = await fetchSignInMethodsForEmail(auth, "researchthrive@gmail.com");
      // console.log(signInMethods)
      // console.log(email)
      // if (signInMethods.length === 0) {
      //   setError("N user found with this email address.");
      //   return;
      // }

      // Add your email verification check if needed
      // const isVerified = await isEmailVerified(auth, email);
      // if (!isVerified) {
      //   setError("Email is not verified.");
      //   return;
      // }
      const userDocRef = doc(db, "users", email);
      const userDocSnapshot = await getDoc(userDocRef);
      console.log("userDocSnapshot.exists()",userDocSnapshot.exists())
      if (userDocSnapshot.exists()) {
        // If user exists, send the password reset email
        await sendPasswordResetEmail(auth, email);
        setSuccessMessage("Password reset email sent successfully. Check your inbox.");
        setError(null);
      }
      else{
        setError("Invalid email or email not verified");
        setSuccessMessage(null);

      }
    } catch (error) {
      console.error('Error checking user existence or sending password reset email:', error);
      setError(error);
      setSuccessMessage(null);
    }

  };
  if (isVisible) {

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#272727]">
      <div className="w-full md:w-1/2 rounded-xl bg-[#1c1c1c] py-8 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:py-20 xl:px-20">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold">Reset Password</h2>
          <p className="text-sm my-3 text-[#717271]">
            Enter your email to reset your password
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 text-gray-300 placeholder-gray-500 bg-[#1c1c1c] border border-[#333333] rounded-md focus:outline-none focus:ring-[#7d8ad2] focus:border-[#7d8ad2]"
          />

          <button
            onClick={resetEmail}
            className="w-full px-4 py-2 text-sm font-medium bg-[#c6c7f8] rounded-xl hover:bg-blue-600"
          >
            Reset Password
          </button>

          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <p className="text-sm text-center text-gray-400">
            Remember your password?{" "}
            <Link href="/signin" className="text-[#7d8ad2] hover:text-blue-400">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )}
  else{
    return(
      <FullScreenLoader/>
    )}
}
