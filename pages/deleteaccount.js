import React, { useState } from "react";
import { signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firbase/initFirebase"; // Assuming db is your Firestore instance
import { useUser } from "@/context/user";
import { FullScreenLoader } from "@/components/loader";

const DeleteAccount = () => {
  const { appState } = useUser();
  const isVisible = appState == "deleteAccount"; // Adjust appState as needed
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleDeleteAccount = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await deleteUser(user);
      const userRef = doc(db, "users", email);
      await deleteDoc(userRef);

      setSuccess("Your account has been successfully deleted.");
    } catch (error) {
      setError(error.message);
    }
  };

    return (
      <div className="flex items-center justify-center min-h-screen bg-[#272727]">
        <div className="w-full md:w-1/2 rounded-xl bg-[#1c1c1c] py-8 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:py-20 xl:px-20">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold">Delete Account</h2>
            <p className="text-sm my-3 text-[#717271]">
              Enter your email and password to delete your account
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
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 text-gray-300 placeholder-gray-500 bg-[#1c1c1c] border border-[#333333] rounded-md focus:outline-none focus:ring-[#7d8ad2] focus:border-[#7d8ad2]"
            />
            <button
              onClick={handleDeleteAccount}
              className="w-full px-4 py-2 text-sm font-medium bg-red-600 rounded-xl hover:bg-red-800"
            >
              Delete Account
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </div>
        </div>
      </div>
    );

};

export default DeleteAccount;
