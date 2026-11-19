import React, { useEffect, useState } from "react";
import {
  PencilSquareIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";
import { useUser } from "@/context/user";
import Typewriter from "typewriter-effect"; // Import the typewriter effect library
import { useChatLoading } from "@/context/ChatLoadingContext"; // import the hook
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useShowTypewriter } from '@/context/ShowTypewriterContext';
import Link from "next/link";
const Spinner4 = () => (
  <>
    <div className="w-full">
      {" "}
      {
        <Skeleton
          baseColor={"#7B9DDE"}
          duration={2}
          count={5}
          highlightColor={"#A06DA3"}
        />
      }
    </div>

    {/* <span className="loader "></span>
    <style jsx>{`
      .loader {
        width: 360px;
        height: 100px;
        display: block;
        background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 100px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
        background-repeat: no-repeat;
        background-size: 75px 100px, 200px 20px, 260px 20px, 260px 20px;
        background-position: 0 0, 0 0, 120px 0, 120px 40px, 120px 80px, 0px 120px;
        box-sizing: border-box;
        animation: animloader 1s linear infinite;
      }

      @keyframes animloader {
        0% {
          background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
        }
        100% {
          background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
        }
      }
    `}</style> */}
  </>
);
const Spinner1 = () => (
  <div className="w-full">
    {" "}
    {
      <Skeleton
        baseColor={"#7B9DDE"}
        duration={2}
        count={5}
        highlightColor={"#A06DA3"}
      />
    }
  </div>
  
);
const Spinner2 = () => (
  <>
    <span className="loader"></span>
    <style jsx>{`
      .loader {
        position: relative;
        width: 30px; /* was 60px */
        height: 35px; /* was 70px */
        background-image: radial-gradient(
            circle 7.5px,
            #fff 100%,
            transparent 0
          ),
          radial-gradient(circle 1.25px, #fff 100%, transparent 0),
          radial-gradient(circle 1.25px, #fff 100%, transparent 0),
          linear-gradient(#fff 5px, transparent 0);
        background-position: center 31.75px, 23.5px 25.5px, 4px 4.5px,
          center 28.5px;
        background-size: 15px 15px, 2.5px 2.5px, 2.5px 2.5px, 1px 3.5px;
        background-repeat: no-repeat;
        z-index: 10;
        perspective: 500px;
      }
      .loader::before {
        content: "";
        position: absolute;
        width: 25px; /* was 50px */
        height: 25px; /* was 50px */
        border-radius: 50%;
        border: 0.75px solid #fff; /* was 1.5px */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        border-right-color: transparent;
        box-sizing: border-box;
      }
      .loader::after {
        content: "";
        position: absolute;
        height: 20px; /* was 40px */
        width: 20px; /* was 40px */
        transform: translate(-50%, -50%) rotate(-45deg) rotateY(0deg);
        left: 50%;
        top: 50%;
        box-sizing: border-box;
        border: 1.75px solid #ff3d00; /* was 3.5px */
        border-radius: 50%;
        animation: rotate 0.5s linear infinite;
      }
      @keyframes rotate {
        to {
          transform: translate(-50%, -50%) rotate(-45deg) rotateY(360deg);
        }
      }
    `}</style>
  </>
);

const Spinner3 = () => (
  <>
    <span className="loader "></span>
    <style jsx>{`
      .loader {
        font-size: 32px;
        color: #fff;
        width: 1em;
        height: 1em;
        box-sizing: border-box;
        background-color: currentcolor;
        position: relative;
        border-radius: 50%;
        transform: rotateX(-60deg) perspective(1000px);
      }
      .loader:before,
      .loader:after {
        content: "";
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        animation: flowerFlow 1s ease-out infinite;
      }
      .loader:after {
        animation-delay: 0.4s;
      }

      @keyframes flowerFlow {
        0% {
          opacity: 1;
          transform: rotate(0deg);
          box-shadow: 0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
            0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
            0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
            0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor;
        }
        100% {
          opacity: 0;
          transform: rotate(180deg);
          box-shadow: -1em -1em 0 -0.35em currentcolor,
            0 -1.5em 0 -0.35em currentcolor, 1em -1em 0 -0.35em currentcolor,
            -1.5em 0 0 -0.35em currentcolor, 1.5em -0 0 -0.35em currentcolor,
            -1em 1em 0 -0.35em currentcolor, 0 1.5em 0 -0.35em currentcolor,
            1em 1em 0 -0.35em currentcolor;
        }
      }
    `}</style>
  </>
);
const RandomSpinner = () => {
  const spinners = [<Spinner4 />];
  const randomIndex = Math.floor(Math.random() * spinners.length);
  return spinners[randomIndex];
};

const ChatMessage = ({ message, isLatestMessage, isLoading }) => {
  const isUserMessage = message.role === "user";
  const { isDarkMode } = useDarkMode();
  const { user } = useUser();
  const { showTypewriter, setShowTypewriter } = useShowTypewriter();
  
  const { chatLoading } = useChatLoading();
  const renderMessageContent = () => {
    console.log(showTypewriter , "showTypewriter chatmessage")
    console.log(isLatestMessage , "isLatestMessage chatmessage")
    if (isLoading) {
      // Render spinner while loading
      return (
        <div className="ml-12 w-full">
          <div className="flex items-center space-x-2">
            {isDarkMode && <Spinner1 />}
            {!isDarkMode && <Spinner4 />}
          </div>
        </div>
      );
    }
    if (isUserMessage || !isLatestMessage) {
      // Render user message or older AI messages normally
      return (
        <>
          {/* <div
            className="ml-12 w-full"
            dangerouslySetInnerHTML={{
              __html: message.content.replace(/\n/g, "<br/>"),
            }}
          ></div> */}
          <div className="text-wrap ">
            <div
              className="pl-12 w-full"
              dangerouslySetInnerHTML={{
                __html: message.content
                  .replace(/\n/g, "<br/>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            ></div>
          </div>
        </>
      );
    } else {
      // Render the latest AI message with typewriter effect
      // setShowTypewriter(false)
      return (
        <div className="ml-12  w-full">
        <Typewriter
        className=""
        onInit={(typewriter) => {
          typewriter
            .typeString(message.content
              .replace(/\n/g, "<br/>")
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"))
            .callFunction(() => {
              setShowTypewriter(false); // Turn off the typewriter effect after completion
            })
            .start();
        }}
        options={{
          autoStart: true,
          loop: false,
          delay: 0, // Adjust speed as needed
          cursor: "", // Hide the cursor by setting it to an empty string
        }}
      />
        </div>
      );
    }
  };
  return (
    <div className="w-full  flex items-center justify-center">
      {/* <Spinner4/> */}
      <div
        className={`flex flex-col md:w-[60vw] w-[90vw]  ${
          isDarkMode ? `bg-[#010F19] text-[#D1D5DA]` : `bg-[#B6D0E2] text-black`
        } `}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className=" flex space-x-4  items-center w-full px-6 pt-6 pb-2">
            {isUserMessage ? (
              <>
                <div className="h-8 w-8 bg-indigo-500 text-center p-1 px-2 rounded-full text-[white]">
                  {"Serenite".slice(0, 1)}
                </div>
                <b>Serenite</b>
              </>
            ) : (
              <>
                <div className="h-8 w-8 bg-white rounded-full">
                  <img src="/logo.png" alt="" />
                </div>
                <div>Empathia</div>
              </>
            )}
          </div>
          <div className="flex space-x-4 items-center w-full px-6 pt-2 pb-4">
            <div className="w-full">
              <div className="flex w-full space-x-4 items-center">
                {isUserMessage ? (
                  <>
                    <div className="ml-12 w-full">{message.content}</div>
                    <div>{/* <PencilSquareIcon className="h-6 w-6" /> */}</div>
                  </>
                ) : (
                  <>
                    {/* <div className="ml-12 w-full" dangerouslySetInnerHTML={{__html: message.content.replace(/\n/g, '<br/>')}}></div> */}
                    {renderMessageContent()}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
