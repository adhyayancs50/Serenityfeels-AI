import React from "react";
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const ChatHeader = ({ hasAnswered }) => {
  if (!hasAnswered) {
    return (
      <div className="flex flex-col justify-center items-center md:absolute md:inset-x-0 md:top-0 md:bottom-0">
        <div className="flex flex-col space-y-4 justify-center items-center md:absolute md:inset-x-0 md:top-0 md:bottom-0">
          <h1 className="text-3xl font-bold pb-12">ChatGPT</h1>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4 text-center text-lg">
              <div className="p-2 font-semibold flex flex-col justify-center items-center">
                <SunIcon className="h-5 w-5" />
                Examples
              </div>
              <div className="p-2 font-semibold flex flex-col justify-center items-center">
                <BoltIcon className="h-5 w-5" />
                Capabilities
              </div>
              <div className="p-2 font-semibold flex flex-col justify-center items-center">
                <ExclamationTriangleIcon className="h-5 w-5" />
                Limitations
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-black">
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                Explain quantum computing in simple terms
              </div>
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                Remembers what user said earlier in the conversation
              </div>
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                May occasionally generate incorrect information
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                Explain quantum computing in simple terms
              </div>
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                Remembers what user said earlier in the conversation
              </div>
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                May occasionally generate incorrect information
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                Explain quantum computing in simple terms
              </div>
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                Remembers what user said earlier in the conversation
              </div>
              <div className="p-2 bg-gray-300 hover:bg-gray-400 rounded-md  text-sm shadow-sm w-60">
                May occasionally generate incorrect information
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
  return null;
};

export default ChatHeader;
