// import React, { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// export default function DropdownModals() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     console.log("isOpen", isOpen);
//   };
//   return (
//     <div className="fixed px-6 py-3">
//       <button
//         className="flex items-center justify-between w-full px-4 py-2 text-md font-medium leading-5 text-left text-white bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
//         aria-haspopup="true"
//         aria-expanded={isOpen}
//         onClick={toggleSidebar}
//       >
// Physics         
// <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-52 justify-center text-center bg-[#1E1F20] mt-2 rounded-md shadow-lg origin-top-left left-0">
//           <div className="py-1">
//             <div
//               className="flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0  text-white radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100"
//               tabIndex="-1"
//               data-orientation="vertical"
//               data-radix-collection-item=""
//             >
//               <div className="flex grow items-center justify-between gap-2">
//                 <div>
//                   <div className="flex items-center gap-3">

//                     <div>
//                     Chemistry
//                     </div>
//                   </div>
//                 </div>


//               </div>
//             </div>
//             <div
//               className="flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0  text-white radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100"
//               tabIndex="-1"
//               data-orientation="vertical"
//               data-radix-collection-item=""
//             >
//               <div className="flex grow items-center justify-between gap-2">
//                 <div>
//                   <div className="flex items-center gap-3">

//                     <div>
//                     Biology
//                     </div>
//                   </div>
//                 </div>


//               </div>
//             </div>
//             <div
//               className="flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0  text-white radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100"
//               tabIndex="-1"
//               data-orientation="vertical"
//               data-radix-collection-item=""
//             >
//               <div className="flex grow items-center justify-between gap-2">
//                 <div>
//                   <div className="flex items-center gap-3">

//                     <div>
//                     Computer Science
//                     </div>
//                   </div>
//                 </div>


//               </div>
//             </div>
//             <div
//               className="flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0  text-white radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100"
//               tabIndex="-1"
//               data-orientation="vertical"
//               data-radix-collection-item=""
//             >
//               <div className="flex grow items-center justify-between gap-2">
//                 <div>
//                   <div className="flex items-center gap-3">

//                     <div>
//                     Economics
//                     </div>
//                   </div>
//                 </div>


//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// export default function DropdownModals({ selectedSubject, setSelectedSubject }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     console.log("isOpen", isOpen);
//   };

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     setIsOpen(false); // Optionally close the dropdown when a subject is selected
//   };

//   return (
//     <div className="fixed px-6 py-3">
//       <button
//         className="flex items-center justify-between w-full px-4 py-2 text-md font-medium leading-5 text-left text-white bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
//         aria-haspopup="true"
//         aria-expanded={isOpen}
//         onClick={toggleSidebar}
//       >
//         {selectedSubject}
//         <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-52 justify-center text-center bg-[#1E1F20] mt-2 rounded-md shadow-lg origin-top-left left-0">
//           <div className="py-1">
//             {["Physics Markscheme","Physics Explainer","Chemistry Explainer","Chemistry Markscheme","Biology Explainer","Biology Markscheme","CS Explainer","CS Markscheme","Economics Explainer","Economics Markscheme"].map((subject) => (
//               <div
//                 key={subject}
//                 className="flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0  text-white radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100"
//                 tabIndex="-1"
//                 data-orientation="vertical"
//                 data-radix-collection-item=""
//                 onClick={() => handleSubjectClick(subject)}
//               >
//                 <div className="flex grow items-center justify-between gap-2">
//                   <div>
//                     <div className="flex items-center gap-3">
//                       <div>{subject}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useChatSelected } from "@/context/ChatSelectedContext"; // Import the hook
import { useUser } from "@/context/user";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useShowTypewriter } from '@/context/ShowTypewriterContext';
import { useChatLoading } from "@/context/ChatLoadingContext"; // import the hook
export default function DropdownModals({ selectedSubject, setSelectedSubject }) {
  const [isOpen, setIsOpen] = useState(false);
  const { userChatData, setUserChatData } = useUser();
  const [isChatNameModalOpen, setIsChatNameModalOpen] = useState(false);
  const { chatSelected, setChatSelected } = useChatSelected();
  const router = useRouter(); // Initialize the useRouter hook
  const [subjects, setSubjects] = useState([]);

  const { chatLoading } = useChatLoading();
  const { showTypewriter } = useShowTypewriter();
  const isDisabled = chatLoading || showTypewriter; // Determine if actions should be disabled
  const disabledClass = isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"; // Class to visually 
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setIsOpen(false);
    setIsChatNameModalOpen(true); 

    const chatIndex = userChatData.data.history.findIndex(chat => chat.type === subject);
    if (chatIndex !== -1) {
      // Redirect to the chat with the matching type
      router.push(`/dashboard?chat=${userChatData.data.history[chatIndex].id}`);
    }
  };

  const toggleSidebar = () => {
    if (isDisabled) return; // Disable if chat is loading or typewriter is active

    setIsOpen(!isOpen);
    console.log("isOpen", isOpen);
  };
  useEffect(() => {
    const selectedChat = userChatData.data.history.find(chat => chat.id === chatSelected);

    if (selectedChat) {
      switch(selectedChat.type) {
        case "Economics Markscheme":
          setSubjects(["Paper 2"]);
          setSelectedSubject("Paper 2")
          break;
        case "Chemistry Markscheme":
        case "Physics Markscheme":
          setSubjects(["Paper 4", "Paper 6"]);
          setSelectedSubject("Paper 4")
          break;
        case "CS Markscheme":
          setSubjects(["Paper 1", "Paper 2"]);
          setSelectedSubject("Paper 1")
          break;
        case "Biology Markscheme":
          setSubjects(["Paper 4"]);
          setSelectedSubject("Paper 4")
          break;
        default:
          // Set default subjects or leave empty based on your requirements
          setSubjects(["Everything"]);
          setSelectedSubject("Everything")

      }
    }
  }, [chatSelected, userChatData.data.history]);

  // const subjects = [
  //   "Paper 1",
  //   "Paper 2",
  //   "Paper 4",
  //   "Paper 6"

  // ];

  const filteredSubjects = subjects.filter(subject => subject !== selectedSubject); 

  return (
    <>

    <div className="fixed px-6 py-3 z-[90] right-0">
      <button
        className={`flex min-w-[120px] items-center justify-between w-full px-4 py-2 text-md font-medium leading-5 text-left text-white bg-black border-[1px] border-white rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray ${disabledClass}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleSidebar}
      >
        {selectedSubject}
        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </button>
      {isOpen && (
  <div className="relative bg-purple-400 z-10 justify-center text-center bg-[#1E1F20] mt-2 rounded-md shadow-lg origin-top-left left-0">
    <div className="py-1">
      {filteredSubjects.length > 0 ? (
        filteredSubjects.map((subject) => (
          <div
            key={subject}
            className="flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0 text-white radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100"
            tabIndex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
            onClick={() => handleSubjectClick(subject)}
          >
            <div className="flex grow text-center  items-center justify-between gap-2">
              <div className="flex text-center justify-center w-full items-center gap-3">
                {subject}
              </div>
            </div>
          </div>
        ))
      ) : (
        // <div
        //   className="flex justify-center m-1.5 rounded p-2.5 text-sm text-white cursor-not-allowed opacity-50"
        //   tabIndex="-1"
        // >
        //   Empty
        // </div>
        <div
        className="flex justify-center cursor-not-allowed gap-2 m-1.5 rounded p-2.5 text-sm focus:ring-0 text-white radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100"
        tabIndex="-1"
        data-orientation="vertical"
        data-radix-collection-item=""
      >
        <div className="flex grow items-center justify-between gap-2">
        <div className="flex text-center justify-center w-full items-center gap-3">
            Coming Soon
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
)}

    </div>
    </>
  );
}
