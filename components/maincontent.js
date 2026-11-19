import React, { useState, useEffect } from "react";
import ChatHeader from "./chatheader";
import ChatMessage from "./chatmessage";
import ChatInput from "./chatinput";
import ChatContainer from "./chatcontainer";
import DropdownModals from "./dropdownmodals";
import { useUser } from "@/context/user";
import { useDarkMode } from "@/context/DarkModeContext";
import { useChatSelected } from "@/context/ChatSelectedContext";
import { useChatLoading } from "@/context/ChatLoadingContext";
import { useShowTypewriter } from "@/context/ShowTypewriterContext";
import { db } from "@/firbase/initFirebase";
import { doc, updateDoc } from "firebase/firestore";
import useSWR from "swr";

const MainContent = ({ hasAnswered, onSendMessage, slugid }) => {
  const { userChatData, setUserChatData, user } = useUser();
  const { showTypewriter, setShowTypewriter } = useShowTypewriter();
  const { setChatLoading } = useChatLoading();
  const [newMessageState, setNewMessageState] = useState(null);

  const { isDarkMode } = useDarkMode();
  const [loading, setLoading] = useState(false);
  const { chatSelected, setChatSelected } = useChatSelected();

  const [selectedSubject, setSelectedSubject] = useState("Paper 1");
  const selectedChat = userChatData?.data?.history?.find(
    (chat) => chat.id === chatSelected
  );
  // const getPortBySubject = (subject) => {
  //   const subjectPortMap = {
  //   "Physics Markscheme Paper 4" : 1,
  //   "Physics Markscheme Paper 6" : 2,
  //   "Physics Explainer Everything" : 4130,
  //   "Chemistry Explainer Everything" : 4,
  //   "Chemistry Markscheme Paper 4" : 4130,
  //   "Chemistry Markscheme Paper 6" : 6,
  //   "Biology Explainer Everything" : 7,
  //   "Biology Markscheme Paper 4" : 8,
  //   "CS Explainer Everything" : 4130,
  //   "CS Markscheme Paper 1" : 4130,
  //   "CS Markscheme Paper 2" : 4130,
  //   "Economics Explainer Everything" : 4130,
  //   "Economics Markscheme Paper 2" : 4130
  //     // Add other subjects and their respective ports here
  //   };

  //   return subjectPortMap[subject] || 4130; // Default to 5960 if the subject is not in the map
  // };

  const handleSendMessage = async (newMessage) => {
    // const port = getPortBySubject(selectedChat.type +" "+ selectedSubject);
    // console.log("PORT PORT ", port)
    const selectedIndex = userChatData.data.history.findIndex(
      (chat) => chat.id === chatSelected
    );
    console.log(
      "userChatData.data.history[selectedIndex] ",
      userChatData.data.history[selectedIndex]
    );
    setNewMessageState({ role: "user", content: newMessage });

    const updatedUserChatData = JSON.parse(JSON.stringify(userChatData));
    updatedUserChatData.data.history[selectedIndex].messages.push({
      content: newMessage,
      role: "user",
    });
    console.log(
      "userChatData.data.history[selectedIndex] before api call ",
      updatedUserChatData.data.history[selectedIndex].messages
    );
    setChatLoading(true);
    try {

      const response = await fetch(`http://127.0.0.1:4111/item`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: newMessage,
            memory: userChatData.data.history[selectedIndex].messages,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Chatbot request failed");
      }
      const data = await response.text();
      console.log("dataa", data);
      console.log("selectedIndex", selectedIndex);
      updatedUserChatData.data.history[selectedIndex].messages.push({
        content: data,
        role: "ai",
      });
          console.log(
            "userChatData.data.history[selectedIndex] after api call ",
            updatedUserChatData.data.history[selectedIndex].messages
          );
      setShowTypewriter(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
      updatedUserChatData.data.history[selectedIndex].messages.push({
        content: "I couldn't reach the chatbot just now. Wait a moment and send that again.",
        role: "ai",
      });
    } finally {
      setChatLoading(false);
      setUserChatData(updatedUserChatData);
      if (user?.email) {
        try {
          const userDocRef = doc(db, "users", user.email);
          await updateDoc(userDocRef, {
            chatdata: updatedUserChatData.data,
          });
        } catch (error) {
          console.error("Could not save chat", error);
        }
      }
    }
  };
  const findElementById = (array, id) => {
    if (!array || !Array.isArray(array)) {
      // Handle the case where array is not what we expect
      return null;
    }
    return array.find((element) => element.id === id);
  };
  return (
    <div
      className={`relative flex-1 md:ml-[15rem] flex flex-col ${
        isDarkMode ? `bg-[#010F19]` : `bg-[#B6D0E2]`
      } max-h-screen min-h-screen overflow-y-auto`}
    >
      {/* <div className="bg-yellow-600">
        {" "}
        <DropdownModals selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
      </div> */}
      {loading && (
        <div className="text-white  text-center items-center justify-center absolute h-full w-full mx-auto my-auto">
          Loading ...
        </div>
      )}

      <ChatInput onSendMessage={handleSendMessage} />
      {userChatData && userChatData.data && (
        <div className="">
          <ChatContainer
            jsonData={findElementById(userChatData.data.history, slugid)}
            newMessage={newMessageState} // Pass the newMessageState as a prop to ChatContainer
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
