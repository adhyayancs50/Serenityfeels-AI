import React from 'react';

export default function GiftMembership() {
  return (
    <section className="py-28 flex items-center justify-center bg-gray-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-6xl font-light  mb-6">
          Give the Gift of Serenity Membership
          </h2>
          <p className="text-lg mb-8">
          Therapy is one of the most meaningful gifts you can give to your friends and loved ones to elevate their well-being.
          </p>
          <button className="bg-transparent border-2 border-gray-800 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
          Gift a membership
        </button>
{/* <button class="bg-gradient-to-r from-[#A3699E] to-[#7AA0E1] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-[#021221] hover:text-[#021221] hover:border-[#003128]">
Gift a membership</button> */}
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            className="rounded-full h-[30rem] shadow-lg"
            src="./Gift pageimage.png" // Replace with the path to your gift box image
            alt="Gift box"
          />
        </div>
      </div>
      
    </section>
  );
}
