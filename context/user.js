import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, isemailverified } from "firebase/auth";
import { auth, db } from "../firbase/initFirebase";
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const DEFAULT_CHAT_ID = "ab736096-693e-465b-a0c5-92ca682a6ceb";
const GUEST_CHAT_KEY = "serenity-guest-chat";

const createGuestChat = () => ({
  data: {
    history: [
      {
        id: DEFAULT_CHAT_ID,
        type: "Chat",
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

const readGuestChat = () => {
  if (typeof window === "undefined") return createGuestChat();
  try {
    const saved = window.localStorage.getItem(GUEST_CHAT_KEY);
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.error("Could not read saved chat", error);
  }
  return createGuestChat();
};

export function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [Flag, setFlag] = useState(false)
  const [appState, setAppState] = useState("loading");
  const [user, setUser] = useState(null);
  const [userChatData, setUserChatData] = useState(createGuestChat);
  const [guestReady, setGuestReady] = useState(false);

  const [loading, setLoading] = useState(true);
  console.log("Auth state outside onAuthStateChanged appState", appState)

  const fetchUserDocument = async (email) => {
    try {
      const userDocRef = doc(db, "users", email);
      const userDocSnapshot = await getDoc(userDocRef);
      if (!userDocSnapshot.exists()) return null;
      return { ...userDocSnapshot.data(), id: userDocSnapshot.id };
    } catch (error) {
      console.error("Could not load the saved profile", error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userauth) => {
      try {
        console.log("Auth state inside onAuthStateChanged", userauth)
        if (userauth && userauth.emailVerified == true) {
          const userDocData = await fetchUserDocument(userauth.email);
          if (userDocData?.chatdata) {
            setUser({...userDocData, uid: userauth.uid, emailVerified: userauth.emailVerified });
            setUserChatData({data:userDocData.chatdata})
            setAppState("dashboard");
          } else {
            setUser(null);
            setUserChatData(readGuestChat());
            setAppState("login");
          }
        } else if (userauth) {
          setUser(userauth);
          setFlag(true)
          setAppState("login");
        } else {
          setUser(null);
          setUserChatData(readGuestChat());
          setAppState("login");
        }
      } catch (error) {
        console.error("Could not restore the signed-in account", error);
        setUser(null);
        setUserChatData(readGuestChat());
        setAppState("login");
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) return;
    setUserChatData(readGuestChat());
    setGuestReady(true);
  }, [user]);

  useEffect(() => {
    if (!guestReady || user || typeof window === "undefined" || !userChatData) return;
    try {
      window.localStorage.setItem(GUEST_CHAT_KEY, JSON.stringify(userChatData));
    } catch (error) {
      console.error("Could not save chat", error);
    }
  }, [guestReady, user, userChatData]);

  useEffect(() => {
    const fetchAndSetUserData = async () => {
      if (!(user?.emailVerified == true && Flag==true)) return;
      try {
        const userDocData = await fetchUserDocument(user.email);
        if (userDocData?.chatdata) {
          setUser({...userDocData, uid: user.uid, emailVerified: user.emailVerified });
          setUserChatData({data:userDocData.chatdata})
          setAppState("dashboard");
        }
      } catch (error) {
        console.error("Could not load the account", error);
      } finally {
        setLoading(false);
        setFlag(false)
      }
    };

    fetchAndSetUserData();
  }, [user?.emailVerified]);


  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        appState,
        setAppState,
        user,
        setUser,
        loading,
        setLoading,
        userChatData, 
        setUserChatData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
