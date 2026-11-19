import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firbase/initFirebase"; // Assuming db is your Firestore instance
import { useUser } from "@/context/user";
import isemailverified from "../utils/isemailverified";
import { FullScreenLoader } from "@/components/loader";
const Login = () => {
  const { appState } = useUser();
  const isVisible = appState == "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("appstate :", appState);
      console.log("result.user :", result.user);

      const userRef = doc(db, "users", result.user.email);
      const userDocSnapshot = await getDoc(userRef);
      console.log("result.user.email ", result.user.email);
      // const checkuser=userDocSnapshot.exists();
      // await setDoc(userRef, {
      //   email: result.user.email,
      //   name: result.user.displayName,
      // });
      console.log("checkuser", userDocSnapshot.exists());
      if (!userDocSnapshot.exists()) {
        console.log("!userDocSnapshot.exists() ", !userDocSnapshot.exists());
        await setDoc(userRef, {
          email: result.user.email,
          name: result.user.displayName,
          // createdat: Date().now,
          isverified: true,
          chatdata: {
            history: [
              {
                id: "ab736096-693e-465b-a0c5-92ca682a6ceb",
                type: "Physics Explainer",
                name: "Chat 1",
                messages: [
                  {
                    role: "assistant",
                    content: "Hello Serenite! How can I assist you today?",
                  },
                ],
                folderId: null,
              },
              
            ],
          },
        });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("logged in");

      // if (auth.currentUser.emailVerified === false ){
      //   console.log(auth.currentUser)
      //   console.log("not verified");
      //   await signOut(auth);
      //   alert(`Please verify the email : ${email}`)
      // }
      await isemailverified(auth, email);

      // Handle successful authentication here
    } catch (error) {
      setError(error.message);
    }
  };
  
  if (isVisible) {
    return (
    <div>
      
        <>
          <div className="flex items-center justify-center min-h-screen bg-[#272727]">
            <div className="w-full md:w-1/2 rounded-xl bg-[#1c1c1c] py-8 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:py-20 xl:px-20">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold">Log In</h2>
                <p className="text-sm my-3 text-[#717271]">
                  Your Social Campaigns
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full px-4 py-2 border border-[#333333] text-white rounded-lg flex items-center justify-center gap-4 transition duration-150 hover:bg-[#333333]"
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google logo"
                  />
                  Sign in with Google
                </button>

                <div className="flex items-center justify-center space-x-2">
                  <div className="flex-1 border-t border-[#333333]"></div>
                  <span className="text-sm text-[#717271] px-4">
                    Or with Email
                  </span>
                  <div className="flex-1 border-t border-[#333333]"></div>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 text-gray-300 placeholder-gray-500 bg-[#1c1c1c] border border-[#333333] rounded-md focus:outline-none focus:ring-[#7d8ad2] focus:border-[#7d8ad2]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 text-gray-300 placeholder-gray-500 bg-[#1c1c1c] border border-[#333333] rounded-md focus:outline-none focus:ring-[#7d8ad2] focus:border-[#7d8ad2]"
                />

                <div className="flex items-center justify-between mt-4">
                  <div className="flex-1"></div>{" "}
                  <a
                    href="/forgot-password"
                    className="text-sm text-[#7d8ad2] hover:text-blue-400"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  onClick={handleEmailSignIn}
                  className="w-full px-4 py-2 text-sm font-medium bg-[#c6c7f8] rounded-xl hover:bg-blue-600"
                >
                  Sign In
                </button>
                {error && <p className="text-red-500">{error}</p>}
                <p className="text-sm text-center text-gray-400">
                  Not a Member yet?{" "}
                  <a
                    href="/signup"
                    className="text-[#7d8ad2] hover:text-blue-400"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      
    </div>
  )}
  else{
  return(
    <FullScreenLoader/>
  )}
};

export default Login;
