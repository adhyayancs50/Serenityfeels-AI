// import React, { useState, useEffect, useRef } from "react";
// import ChatMessage from "./chatmessage";
// import extractChatData from "./extractChatData";
// import { useChatLoading } from "@/context/ChatLoadingContext"; // import the hook
// import { useShowTypewriter } from '@/context/ShowTypewriterContext';

// const ChatContainer = ({ jsonData, newMessage}) => {
//   const { chatLoading } = useChatLoading();
//   const containerRef = useRef(null);
//   const bottomRef = useRef(null);
//   const [messages, setMessages] = useState([]);
//   const { showTypewriter, setShowTypewriter } = useShowTypewriter();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
//   });
  
//   useEffect(() => {
//     const chatData = extractChatData(jsonData);
//     setMessages(chatData);
//   }, [jsonData]);


//   const scrollToBottomIfNeeded = () => {
//     if (!containerRef.current) return;

//     const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
//     const isNearBottom = scrollTop + clientHeight >= scrollHeight - 30; // 100px threshold

//     if (isNearBottom) {
//         containerRef.current.scrollTop = scrollHeight;
//     }
// };
// useEffect(() => {
//     scrollToBottomIfNeeded()
// }, [])

// useEffect(scrollToBottomIfNeeded, [messages]);

// // This effect is optional and can be adjusted based on when you expect the text to change.
// useEffect(() => {
//     const intervalId = setInterval(scrollToBottomIfNeeded, 500); // Adjust the interval as necessary

//     return () => clearInterval(intervalId);
// }, [chatLoading]);

//   console.log("showTypewriter chatcontainer", showTypewriter)
//   return (
//     <div ref={containerRef} className='mt-14 w-full mb-[100px]  overflow-y-scroll' style={{position: 'relative'}}>
//     {Array.isArray(messages) && messages.map((message, index) => (
//         <ChatMessage key={index} message={message} isLatestMessage={(index === messages.length - 1) && showTypewriter} isLoading={false} />
//     ))}
//     {chatLoading && <ChatMessage message={newMessage} isLatestMessage={false} isLoading={true} />}
//     {chatLoading && <ChatMessage message={{role: 'ai', content: 'Loading...'}} isLatestMessage={true} isLoading={true} />}
//     <div ref={bottomRef} />

// </div>
//   );
// };

// export default ChatContainer;




import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./chatmessage";
import extractChatData from "./extractChatData";
import { useChatLoading } from "@/context/ChatLoadingContext";
import { useShowTypewriter } from '@/context/ShowTypewriterContext';

const ChatContainer = ({ jsonData, newMessage }) => {
  const { chatLoading } = useChatLoading();
  const containerRef = useRef(null);
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const { showTypewriter } = useShowTypewriter();

  useEffect(() => {
    const chatData = extractChatData(jsonData);
    setMessages(chatData);
  }, [jsonData]);

  // Function to handle automatic scrolling to the bottom
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to the bottom if near the bottom already
  const scrollToBottomIfNeeded = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - 30; // 100px threshold

    if (isNearBottom) {
        containerRef.current.scrollTop = scrollHeight;
    }
};
  // Scroll to the bottom on initial load
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Scroll to the bottom if needed on messages change
  useEffect(() => {
    scrollToBottomIfNeeded();
  }, [messages]);

  // Continuous check to maintain position at bottom while loading new data
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (chatLoading) {
        scrollToBottomIfNeeded();
      }
    }); // Adjust the interval as necessary

    return () => clearInterval(intervalId);
  }, [chatLoading]);

  console.log("showTypewriter chatcontainer", showTypewriter);
  return (
    <div ref={containerRef} className='mt-14 w-full mb-[100px] overflow-y-scroll' style={{position: 'relative'}}>
      {Array.isArray(messages) && messages.map((message, index) => (
          <ChatMessage key={index} message={message} isLatestMessage={(index === messages.length - 1) && showTypewriter} isLoading={false} />
      ))}
      {chatLoading && <ChatMessage message={newMessage} isLatestMessage={false} isLoading={true} />}
      {chatLoading && <ChatMessage message={{role: 'ai', content: 'Loading...'}} isLatestMessage={true} isLoading={true} />}
      <div ref={bottomRef} ></div>
    </div>
  );
};

export default ChatContainer;
