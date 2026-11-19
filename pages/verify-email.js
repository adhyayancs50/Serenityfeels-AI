import React, { useState, useEffect } from "react";
import { onAuthStateChanged, deleteUser } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firbase/initFirebase";
import { useUser } from "@/context/user";
import { auth } from "../firbase/initFirebase";
import { FullScreenLoader } from "@/components/loader";

export default function VerifyEmail() {
  const { setUser, user, userName, setAppState, appState } = useUser();

  const isVisible = appState == "login";
  const [remainingTime, setRemainingTime] = useState(5 * 60);
  const [timerExpired, setTimerExpired] = useState(false);
  
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
      auth.currentUser.reload();
      console.log(auth.currentUser.emailVerified);
      setUser(auth.currentUser);
      console.log(user);
    }, 1000);

    const timer = setTimeout(() => {
      setTimerExpired(true);
      clearInterval(timerInterval);
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleVerification = async () => {
      if (user && user.emailVerified && !timerExpired) {
        try {
          const userRef = doc(db, "users", user.email);
          if(user.displayName){
            await setDoc(userRef, {
              email: user.email,
              name: user.displayName,
              // createdAt: Date().now,
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
                  }
                ],
              },
            });
          }
          else{
            await setDoc(userRef, {
              email: user.email,
              name: userName,
              // createdAt: Date().now,
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
                  }
                ],
              },
            });
          }
          

          

          //   const userDocData = await fetchUserDocument(user.uid);
          //   setUser({
          //     ...userDocData,
          //     uid: user.uid,
          //     emailVerified: user.emailVerified,
          //   });
          setUser({
            email: user.email,
            name: user.displayName,
            uid: user.uid,
            emailVerified: user.emailVerified,
          });

          setAppState("dashboard");
        } catch (error) {
          console.error(
            "Error adding user information to Firestore:",
            error.message
          );
        }
      } else if (timerExpired) {
        try {
          await deleteUser(user);
        } catch (error) {
          console.error("Error deleting user:", error.message);
        }
      }
    };

    handleVerification();
  }, [timerExpired, user?.emailVerified]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  if (isVisible) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#272727]">
        <div className="w-full md:w-1/2 rounded-xl bg-[#1c1c1c] py-8 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:py-20 xl:px-20">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold">Email Verification</h2>
            <p className="text-sm my-3 text-[#717271]">
              Please verify your email
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-gray-300">
                Please verify your email within {minutes} minutes and {seconds}{" "}
                seconds.
              </p>
            </div>
            <p className="text-sm text-center text-gray-400">
              Resend verification email{" "}
              <span className="text-[#7d8ad2] hover:text-blue-400">here</span>
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return <FullScreenLoader />;
  }
}
