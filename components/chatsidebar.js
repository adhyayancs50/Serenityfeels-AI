import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  PlusIcon,
  ChatBubbleLeftIcon,
  TrashIcon,
  MoonIcon,
  Bars3Icon,
  BeakerIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { PencilIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

import { useUser } from "@/context/user";
import { TbMessage } from "react-icons/tb";
import { useDarkMode } from "@/context/DarkModeContext";
import { db } from "@/firbase/initFirebase";
import { doc, updateDoc } from "firebase/firestore";
// import temp_json from '../public/test.json'
import { v4 as uuidv4 } from "uuid";
import { useChatSelected } from "@/context/ChatSelectedContext";
import { useShowTypewriter } from "@/context/ShowTypewriterContext";
import { useChatLoading } from "@/context/ChatLoadingContext"; // import the hook

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { userChatData, setUserChatData, user } = useUser();
  const { chatSelected, setChatSelected } = useChatSelected();
  const { chatLoading } = useChatLoading();
  const { showTypewriter } = useShowTypewriter();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [editingChatId, setEditingChatId] = useState(null); // Track the ID of the chat being renamed
  const [newChatName, setNewChatName] = useState(""); // Temporary state for the new chat name
  const router = useRouter();

  // Handle triggering the rename action
  const handleRenameClick = (chatId, currentName) => {
    if (isDisabled) return; // Disable if chat is loading or typewriter is active

    setEditingChatId(chatId);
    setNewChatName(currentName); // Pre-populate with the current name
  };
  const deleteConversation = async () => {
    if (isDisabled || !chatSelected) return; // Disable if chat is loading, typewriter is active, or no chat is selected
    if (userChatData.data.history.length <= 1 || isDisabled || !chatSelected)
      return;

    const chatIndex = userChatData.data.history.findIndex(
      (chat) => chat.id === chatSelected
    );
    const updatedHistory = userChatData.data.history.filter(
      (chat) => chat.id !== chatSelected
    );

    // Determine the next chat to select
    let nextSelectedChatId = null;
    if (updatedHistory.length > 0) {
      if (chatIndex >= updatedHistory.length) {
        // If deleting the last chat, select the new last chat
        nextSelectedChatId = updatedHistory[updatedHistory.length - 1].id;
      } else {
        // Otherwise, select the next chat (now at the current index)
        nextSelectedChatId = updatedHistory[chatIndex].id;
      }
    }

    // Update local state
    setUserChatData((prevState) => ({
      ...prevState,
      data: { ...prevState.data, history: updatedHistory },
    }));

    // Set the next selected chat
    setChatSelected(nextSelectedChatId);

    if (user?.email) {
      const userDocRef = doc(db, "users", user.email);
      try {
        await updateDoc(userDocRef, { "chatdata.history": updatedHistory });
        console.log("Conversation deleted successfully.");
      } catch (error) {
        console.error("Error deleting conversation: ", error);
      }
    }

    // Redirect to the new chat, if there is one
    if (nextSelectedChatId) {
      router.push(`/dashboard?chat=${nextSelectedChatId}`);
    } else {
      // Or redirect to a general page if there are no chats left
      router.push("/dashboard");
    }
  };

  // Handle the actual name change
  const handleRenameConfirm = async () => {
    if (isDisabled) return; // Disable if chat is loading or typewriter is active

    const finalChatName =
      newChatName.trim() === "" ? "New Chat" : newChatName.trim();

    setUserChatData((prevState) => {
      const updatedChats = prevState.data.history.map((chat) => {
        if (chat.id === editingChatId) {
          return { ...chat, name: finalChatName };
        }
        return chat;
      });

      const updatedData = {
        ...prevState,
        data: { ...prevState.data, history: updatedChats },
      };

      if (user?.email) {
        const userDocRef = doc(db, "users", user.email);
        updateDoc(userDocRef, { chatdata: updatedData.data })
          .then(() => console.log("Chat renamed successfully."))
          .catch((error) => console.error("Error renaming chat: ", error));
      }

      return updatedData;
    });

    // Reset the renaming state
    setEditingChatId(null);
    setNewChatName("");
  };

  const isDisabled = chatLoading || showTypewriter; // Determine if actions should be disabled
  const disabledClass = isDisabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer"; // Class to visually indicate disabled state

  // console.log("userChatData chatsidebar", userChatData.data)
  const generateUniqueId = () => {
    return uuidv4();
  };
  const handleDarkModeToggle = () => {
    if (isDisabled) return; // Disable if chat is loading or typewriter is active
    toggleDarkMode();
  };
  const clearcovo = async () => {
    if (isDisabled) return; // Disable if chat is loading or typewriter is active

    setUserChatData((currentData) => {
      const selectedIndex = currentData.data.history.findIndex(
        (chat) => chat.id === chatSelected
      );

      // Copy the current state to avoid direct mutations
      const newData = JSON.parse(JSON.stringify(currentData));
      console.log("before ", newData);
      // Clear the messages for the selected chat history
      newData.data.history[selectedIndex].messages = [
        {
          role: "assistant",
          content: "Hello Serenite! How can I assist you today?",
        },
      ];
      console.log("after ", newData);

      if (user?.email) {
        const userDocRef = doc(db, "users", user.email);
        updateDoc(userDocRef, {
          "chatdata.history": newData.data.history,
        })
          .then(() => {
            console.log("Chat history cleared successfully.");
            setUserChatData(newData);
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
        return currentData;
      }

      return newData;
    });
  };
  const handleLinkClick = (e) => {
    if (isDisabled) {
      e.preventDefault(); // Prevent navigation
    }
    // Navigation proceeds if not disabled
  };
  // const clearcovo = async () => {
  //   setUserChatData(currentData => {
  //     const selectedIndex = currentData.data.history.findIndex(chat => chat.id === chatSelected);

  //     // Copy the current state to avoid direct mutations
  //     const newData = JSON.parse(JSON.stringify(currentData));
  //     console.log("before ",newData)
  //     // Clear the messages for the selected chat history
  //     newData.data.history[selectedIndex].messages = [];
  //     console.log("after ",newData)

  //     // After clearing, update the Firestore document
  //     // const userDocRef = doc(db, 'users', user.email);
  //     // updateDoc(userDocRef, {
  //     //   chatdata: newData.data
  //     // }).then(() => {
  //     //   console.log("Chat history cleared successfully.");
  //     //   // Optionally, inform the user of success
  //     //   // alert("Chat history cleared successfully.");
  //     // }).catch(error => {
  //     //   console.error("Error updating document: ", error);
  //     //   // Optionally, inform the user of the error
  //     //   // alert("Error clearing chat history: " + error.message);
  //     // });

  //     // Return the new state to update userChatData
  //     // console.log(newData)
  //     setUserChatData(newData.data)
  //   });
  //   // Update the userChatData field in Firestore
  //   // await updateDoc(userDocRef, {
  //   //     chatdata: userChatData.data
  //   // });
  // };

  const newChat = async () => {
    if (isDisabled) return; // Disable if chat is loading or typewriter is active

    const newChatId = generateUniqueId(); // Generate a unique ID for the new chat
    const newChatItem = {
      id: newChatId,
      name: "New Chat",
      messages: [
        {
          role: "assistant",
          content: "Hello Serenite! How can I assist you today?",
        },
      ],
      model: {
        id: "gpt-3.5-turbo",
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000,
      },
      prompt:
        "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
      temperature: 1,
      folderId: null,
    };

    setUserChatData((prevState) => {
      const updatedData = {
        ...prevState,
        data: {
          ...prevState.data,
          history: [...prevState.data.history, newChatItem],
        },
      };

      if (user?.email) {
        const userDocRef = doc(db, "users", user.email);
        updateDoc(userDocRef, { chatdata: updatedData.data })
          .then(() => console.log("New chat added successfully."))
          .catch((error) => console.error("Error adding new chat: ", error));
      }

      return updatedData;
    });
    setChatSelected(newChatId);

    // Redirect to the new chat's page
    router.push(`/dashboard?chat=${newChatId}`);
  };

  const handleToggleSidebar = () => {
    if (isDisabled) return; // Disable if chat is loading or typewriter is active
    toggleSidebar(!isSidebarOpen);
  };

  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSosClick = () => {
    setSosActive(true);
    const id = setTimeout(() => {
      playBuzzer(); // Function to play a buzzer sound
      setSosActive(false); // Reset the SOS state
      setCountdown(10); // Reset the countdown
    }, 10000); // 10000 milliseconds = 10 seconds
    setTimeoutId(id);
  };

  const cancelSos = () => {
    clearTimeout(timeoutId);
    setSosActive(false);
    setCountdown(10);
  };

  useEffect(() => {
    if (sosActive && countdown > 0) {
      const intervalId = setInterval(() => {
        setCountdown((currentCountdown) => currentCountdown - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [sosActive, countdown]);

  const playBuzzer = () => {
    const audio = new Audio('/redalert.mp3'); // Path to your audio file
    audio.play();
  };

  return (
    <div
      className={`z-[100] relative top-0 left-0 flex max-h-screen h-[100vh] flex-col w-64 bg-[#001B2E] pt-5 transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <button
        onClick={handleToggleSidebar}
        className="absolute top-12 right-[-45px] md:hidden z-20 flex items-center justify-center h-10 w-10 bg-[#010F19] rounded-tr-md rounded-br-md"
      >
        <Bars3Icon className="h-6 w-6 mt-6 text-white" />
      </button>
      <button
        onClick={newChat}
        className={`${disabledClass} mt-10 mb-3  flex space-x-1 p-2 hover:bg-gray-700 mx-2 border border-gray-300 rounded text-white`}
      >
        <PlusIcon className="h-6 w-6" />
        New Chat
      </button>
      <div className="relative z-10 pb-[10rem] overflow-y-scroll flex flex-col bg-[#001B2E]">
        {/* Dynamic Tabs */}
        <div className="text-white">
          <div className="overflow-y-scroll">
            {userChatData &&
              userChatData.data &&
              Array.isArray(userChatData.data.history) &&
              userChatData.data.history.map((item) => (
                <div key={item.id} className="group">
                  <Link href={`/dashboard?chat=${item.id}`} passHref>
                    <div
                      onClick={handleLinkClick}
                      className={`flex justify-between items-center px-2 py-[0.45rem] hover:bg-[#32333E] mx-2 rounded ${
                        chatSelected === item.id
                          ? "bg-[#32333E]"
                          : "bg-transparent"
                      } ${disabledClass}`}
                    >
                      <div className="flex items-center space-x-2">
                        <TbMessage className="h-6 w-6 text-gray-300" />
                        <div className="max-w-40 overflow-hidden truncate">
                          {editingChatId === item.id ? (
                            <input
                              type="text"
                              value={newChatName}
                              onChange={(e) => setNewChatName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleRenameConfirm();
                                }
                              }}
                              className="bg-transparent border-b-2 max-w-40 border-gray-300 text-white focus:outline-none"
                            />
                          ) : (
                            <span className="border-b-2 truncate border-transparent">
                              {item.name}
                            </span>
                          )}
                        </div>
                      </div>
                      {editingChatId === item.id ? (
                        <button
                          onClick={handleRenameConfirm}
                          className={`${disabledClass} ml-auto text-green-500`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      ) : (
                        // Beaker icon that shows only on hover
                        <div
                          className={`${
                            isDisabled ? "cursor-not-allowed" : ""
                          }flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                        >
                          <PencilIcon
                            className={`${disabledClass} h-[1.3rem] w-[1.3rem]  cursor-pointer`}
                            onClick={() =>
                              handleRenameClick(item.id, item.name)
                            }
                          />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>{" "}
      <div className="absolute bottom-0 z-[100] bg-[#001B2E] inset-x-0 border-t border-gray-200/50 py-6 px-4">
        {/* <div
          onClick={handleSosClick}
          className={`flex space-x-2 p-2 hover:bg-black/80 mx-2 rounded text-white text-sm items-center ${disabledClass}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            class="size-6"
            className="w-6 h-6"

          >
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path
              fill-rule="evenodd"
              d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
              clip-rule="evenodd"
            />
          </svg>
          <p>SOS</p>
        </div> */}
        {sosActive && (
        <div className="sos-timer">
          {/* <div>Time remaining: </div> */}
          <div
          onClick={cancelSos}
          className={`flex space-x-2 p-2 hover:bg-black/80 mx-2 rounded text-white text-sm items-center ${disabledClass}`}
        >
          {/* <ExclamationIcon className="h-5 w-5" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          <p>Cancel SOS within {countdown}s</p>
        </div>
        </div>
      )}
        <div
          onClick={clearcovo}
          className={`flex space-x-2 p-2 hover:bg-black/80 mx-2 rounded text-white text-sm items-center ${disabledClass}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>{" "}
          <p>Clear conversation</p>
        </div>
        <div
          onClick={() =>
            userChatData?.data.history.length > 1 && deleteConversation()
          }
          className={`flex space-x-2 p-2 mx-2 ${disabledClass} rounded text-white text-sm items-center ${
            userChatData?.data.history.length > 1
              ? "hover:bg-black/80 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <TrashIcon className="h-5 w-5 text-gray-300" />
          <p>Delete conversation</p>
        </div>

        <div
          onClick={handleDarkModeToggle}
          className={`flex space-x-2 p-2 hover:bg-black/80 mx-2 rounded text-white text-sm items-center ${disabledClass}`}
        >
          <MoonIcon className="h-5 w-5 text-gray-300" />
          <p>{isDarkMode ? "Dark" : "Light"} mode</p>
        </div>

        <Link href="/logout" passHref>
          <div
            onClick={handleLinkClick}
            className={`flex space-x-2 p-2 hover:bg-black/80 mx-2 rounded text-white text-sm items-center ${disabledClass}`}
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5 text-gray-300" />
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
