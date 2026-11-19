import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firbase/initFirebase"; // Assuming db is your Firestore instance

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);

      console.log("Registration successful. Verification email sent.");
      
      const userRef = doc(db, "users", userCredential.user.email);
      await setDoc(userRef, {
        email: email,
        name: firstName,

      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#272727]">
        <div className="w-full md:w-1/2 rounded-xl bg-[#1c1c1c] py-8 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:py-20 xl:px-20">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <p className="text-sm my-3 text-[#717271]">Join Our Community</p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-1/2 px-3 py-2 text-gray-300 placeholder-gray-500 bg-[#1c1c1c] border border-[#333333] rounded-md focus:outline-none focus:ring-[#7d8ad2] focus:border-[#7d8ad2]"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-1/2 px-3 py-2 text-gray-300 placeholder-gray-500 bg-[#1c1c1c] border border-[#333333] rounded-md focus:outline-none focus:ring-[#7d8ad2] focus:border-[#7d8ad2]"
              />
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
            <button
              onClick={handleEmailSignUp}
              className="w-full px-4 py-2 text-sm font-medium bg-[#c6c7f8] rounded-xl hover:bg-blue-600"
            >
              Sign Up
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <p className="text-sm text-center text-gray-400">
              Already a Member?{" "}
              <a href="/login" className="text-[#7d8ad2] hover:text-blue-400">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
