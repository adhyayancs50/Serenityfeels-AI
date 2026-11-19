import React from "react";
import Link from "next/link";
export default function landingpage() {
  return (
    <div id="home" className="flex flex-col h-fit overflow-hidden">
      <div className="h-full  relative w-full">
        {/* The SVG overlay with a wave effect */}
        <div
          className="absolute bottom-0  h-full inset-x-0 w-full overflow-hidden"
          style={{ height: "100%" }}
        >
          <div className="relative w-full  h-full">
            <div className="absolute  inset-0 flex items-center justify-center">
              <div className="text-center w-fit">
                <div
                  className="md:text-3xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
                >
                  Redefining Mental Health With
                </div>

                <div className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[4rem] leading-none md:text-[14rem] font-bold">
                  SERENITY
                </div>
                <div className="md:text-[5rem] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-4 leading-none italic font-bold text-white ">
                  We Feel, We Heal
                </div>
              </div>
            </div>
            {/* <svg
              width="100%"
              height="100%"
              className="z-100"
              viewBox="0 0 1401 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,500 L0,00 Q700,700 1401,00 L1401,500 Z"
                fill="#B69F85"
              />
            </svg> */}
          </div>
        </div>

        {/* Full-width video */}
        <div>
          <video
            className="w-full h-[100%]"
            src="./test.mp4" // Replace with the path to your video file
            autoPlay
            muted
            loop
            // Inline styles to disable interaction
            style={{ pointerEvents: "none" }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[rgba(3,16,33,0.8)] to-transparent"></div>

        </div>
      </div>
    </div>
  );
}
