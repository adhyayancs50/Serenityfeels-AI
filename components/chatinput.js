// import React from "react";
// import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
// import { useUser } from "@/context/user";
// import { useDarkMode } from '@/context/DarkModeContext';

// const ChatInput = ({ onSendMessage }) => {
//   const [inputValue, setInputValue] = React.useState("");
//   const { isDarkMode } = useDarkMode();

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const sendMessage = () => {
//     onSendMessage(inputValue);
//     setInputValue(""); // Clear the input after sending
// };
//   const { userChatData, setUserChatData } = useUser();
//   return (
//     <div className={` fixed bottom-0 ${isDarkMode?`bg-[#010F19]`:`bg-[#B6D0E2]`} z-50 md:ml-64  inset-x-0  px-4 py-6 `}>
//       <div className="text-black  border max-w-3xl mx-auto border-gray-500 flex justify-center items-center space-x-2 shadow-md rounded-2xl px-2 py-1">
//         <input
//             placeholder="Message ..."
//           className={`flex-1 ${isDarkMode?`bg-[#010F19] text-white`:`bg-[#B6D0E2] text-black`}  p-2 border-0 focus:outline-none`}
//           value={inputValue}
//           onChange={handleInputChange}
//         />{" "}
//         <PaperAirplaneIcon className={`h-4${isDarkMode?` text-white`:` text-black`} w-4 text-right -rotate-45`} onClick={sendMessage} />

//       </div>
//     </div>
//   );
// };

// export default ChatInput;
import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useUser } from "@/context/user";
import { useDarkMode } from '@/context/DarkModeContext';
import { useShowTypewriter } from '@/context/ShowTypewriterContext';
import { useChatLoading } from "@/context/ChatLoadingContext"; // import the hook

const ChatInput = ({ onSendMessage }) => {
  const { chatLoading } = useChatLoading();

  const [inputValue, setInputValue] = React.useState("");
  const { isDarkMode } = useDarkMode();
  const { showTypewriter } = useShowTypewriter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    // Check if the typewriter effect is currently shown, and if so, return early
    if (!inputValue.trim() || showTypewriter || chatLoading) {
      console.log("Typewriter effect in progress. Please wait.");
      return; // Prevents message from being sent
    }

    onSendMessage(inputValue);
    setInputValue(""); // Clear the input after sending
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (!showTypewriter||!chatLoading )) { // Also prevent sending message with Enter key when typewriter effect is shown
      e.preventDefault(); // Prevent the default action
      sendMessage(); // Call the sendMessage function
    }
  };

  const { userChatData, setUserChatData } = useUser();
  return (
    <div className={` fixed bottom-0 ${isDarkMode ? `bg-[#010F19]` : `bg-[#B6D0E2]`} z-50 md:ml-64  inset-x-0  px-4 pt-6 `}>
      <div className="text-black  border max-w-3xl mx-auto border-gray-500 flex justify-center items-center space-x-2 shadow-md rounded-2xl px-2 py-1">
        <input
          placeholder="Message ..."
          className={`flex-1 ${isDarkMode ? `bg-[#010F19] text-white` : `bg-[#B6D0E2] text-black`}  p-2 border-0 focus:outline-none`}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Add the key press listener here
        />{" "}
        <PaperAirplaneIcon className={`h-4${isDarkMode ? ` text-white` : ` text-black`} w-4 cursor-pointer text-right -rotate-45`} onClick={sendMessage} />
      </div>
      <div className="relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]"><span>Serenity can make mistakes. Consider checking important information.</span></div>
    </div>
  );
};

export default ChatInput;
