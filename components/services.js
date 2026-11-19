import React from "react";
import {
  BeakerIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  ScaleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { TbPigMoney } from "react-icons/tb";

const HeaderComponent = () => {
  return (
    <div className="bg-gradient-to-b from-[#031021] to-[#031021] text-gray-300">
      {/* Header */}
      <div className="text-center pt-24 pb-24">
        <h1 className="text-5xl font-bold w-fit mx-auto mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
          ABOUT US
        </h1>
        <p className="md:w-1/3  mx-auto">
        Dive deeper into our journey and values by exploring our 'About Us' section, discovering the essence of the passion driving our endeavors.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 px-24 md:grid-cols-3 gap-10 pb-20">
        {/* Each Service Card */}
        {[
          {
            Icon:                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{"stop-color":"#A3699E"}} />
                <stop offset="100%" style={{"stop-color":"#7AA0E1"}} />
              </linearGradient>
            </defs>
            <path fill-rule="evenodd" fill="url(#gradient1)" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd"/>
          </svg>
          ,
            title: "Affordable",
            description:
              "Access personalized mental wellness support through our chatbot at affordable rates, ensuring accessibility for all.",
          },
          {
            Icon:         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
            <defs>
              <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{"stop-color":"#4CAF50"}}/>
                <stop offset="100%" style={{"stop-color":"#087F23"}}/>
              </radialGradient>
            </defs>
            <path fill-rule="evenodd" fill="url(#gradient1)" d="M12 3.75a6.715 6.715 0 0 0-3.722 1.118.75.75 0 1 1-.828-1.25 8.25 8.25 0 0 1 12.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 0 1-1.395-.551A21.69 21.69 0 0 0 18.75 10.5 6.75 6.75 0 0 0 12 3.75ZM6.157 5.739a.75.75 0 0 1 .21 1.04A6.715 6.715 0 0 0 5.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 0 1-1.27-.8A6.715 6.715 0 0 0 3.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 0 1 1.04-.211ZM12 7.5a3 3 0 0 0-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 1 1-1.112-1.008A10.459 10.459 0 0 0 7.5 10.5a4.5 4.5 0 1 1 9 0c0 .547-.022 1.09-.067 1.626a.75.75 0 0 1-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 0 0-3-3Zm0 2.25a.75.75 0 0 1 .75.75c0 3.908-1.424 7.485-3.781 10.238a.75.75 0 0 1-1.14-.975A14.19 14.19 0 0 0 11.25 10.5a.75.75 0 0 1 .75-.75Zm3.239 5.183a.75.75 0 0 1 .515.927 19.417 19.417 0 0 1-2.585 5.544.75.75 0 0 1-1.243-.84 17.915 17.915 0 0 0 2.386-5.116.75.75 0 0 1 .927-.515Z" clip-rule="evenodd" />
          </svg>
        
        
          ,
            title: "Anonymous",
            description:
              "Personal credentials are not publicized, and conversations are not monitored by anyone on our platform.",
          },
          {
            Icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{"stop-color":"#6574CD"}}/> 
                <stop offset="100%" style={{"stop-color":"#3F51B5"}}/>
              </linearGradient>
            </defs>
            <path fill-rule="evenodd" fill="url(#gradient1)" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
          </svg>
          
          ,
            title: "Personalized",
            description:
              "Recommendations are personally tailored to the user's prompts, ensuring customer satisfaction.",
          },
          {
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{"stop-color":"#A3699E"}}/>
                <stop offset="100%" style={{"stop-color":"#7AA0E1"}}/>
              </linearGradient>
            </defs>
            <path fill="url(#iconGradient)" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-1.16-.21-2.31-.61-3.39l-1.6 1.6c.14.59.21 1.19.21 1.79a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.6 0 1.2.07 1.79.21L15.4 2.6C14.31 2.21 13.16 2 12 2m7 0l-4 4v1.5l-2.55 2.55C12.3 10 12.15 10 12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.15 0-.3-.05-.45L16.5 9H18l4-4h-3zm-7 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4z"/>
          </svg>
          
          
          ,
            title: "Mission",
            description:
              "Provide a supportive platform which serves teenagers of every background with mental health assistance nationally.",
          },
          {
            Icon: <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{"stop-color":"#A3699E"}}/>
                <stop offset="100%" style={{"stop-color":"#7AA0E1"}}/>
              </linearGradient>
            </defs>
            <path fill-rule="evenodd" fill="url(#iconGradient)" d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z" clip-rule="evenodd"/>
          </svg>
          
          ,
            title: "One stop solution",
            description:
              "We offer a comprehensive, one-stop solution for all your wellness needs, combining AI support with human connections.",
          },
          
          {
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{"stop-color":"#A3699E"}}/> 
                <stop offset="100%" style={{"stop-color":"#7AA0E1"}}/>
              </linearGradient>
            </defs>
            <path fill="url(#iconGradient)" d="M128 32h32c17.7 0 32 14.3 32 32v32H96V64c0-17.7 14.3-32 32-32m64 96v320c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-59.1c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216l7.5-60c2-16 15.6-28 31.8-28zm227.8 0c16.1 0 29.8 12 31.8 28l7.4 60c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3V448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V128zM320 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32h-96zm-32 64v160h-64V128z"/>
          </svg>
          
          ,
            title: "Vision",
            description:
              "Ensuring mental health is destigmatized and widely accessible for all, helping people live their most fulfilling lives.",
          },
        ].map(({ Icon, title, description }, index) => (
          <div key={index} className="text-center">
            <div class="mx-auto flex pb-8 items-center justify-center">
              <div class="h-[6.5rem] gradient-animation group w-[6.5rem] hover:-translate-y-1 transition ease-in-out rounded-full hover:bg-gradient-to-r from-red-500 to-blue-400 p-1">
                <div class=" h-full w-full rounded-full bg-gray-800">
                  <div className="mx-auto p-4 inline-block duration-300 rounded-full transition ease-in-out bg-[#0C233E]  mb-4">
                    <div
                      className="absolute inset-0  scale-0 group-hover:scale-110 rounded-full transition duration-300 ease-in-out"
                      style={{ zIndex: -1 }}
                    ></div>
                    {/* <div className="mx-auto p-2 inline-block rounded-full bg-gradient-to-r from-[#A3699E] to-[#7AA0E1] mb-4">  */}
                    <div className="mx-auto p-4">
                      {Icon}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>{" "}
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="mb-5">{description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HeaderComponent;
