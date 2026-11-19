import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also import this in your globals.css
import Link from "next/link";
export default function LandingDoctor() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1200, // You can adjust the duration here
        });
      }, []);
  return (
    <>
      <div class="bg-[#021121] text-gray-300 overflow-hidden mx-auto flex flex-col md:flex-row items-center">
        <div class="flex-1 px-12 flex flex-col items-start p-6">
        <h2 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
          Meet Our Board of Professionals
          </h2>
          <p class="mb-4 text-lg">
          Professionals at Serenity comprise a diverse and experienced board of mental health experts. With experience ranging from 5 to 45 years, they offer compassionate care at affordable rates. Fluent in multiple languages, they provide non-judgmental support through convenient online sessions, addressing various ailments such as anxiety, depression, and more. Your well-being is their priority, and they're here to accompany you every step of the way, ensuring you navigate life's challenges with confidence.

          </p>
          <Link href="/doctors" className="bg-[#4aa8cd] border-[1px] hover:border-[1px] hover:border-gray-300 border-gray-800 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-800 hover:text-gray-300 transition-colors duration-300">
          Book Now
        </Link>
        </div>
        <div className="flex-1 overflow-hidden" data-aos="zoom-out">
          <img
            src="./psychiatristlanding.jpg"
            alt="Inclusive Mental Healthcare"
            className="w-full md:h-[85vh] object-cover"
          />
        </div>
      </div>
    </>
  );
}
