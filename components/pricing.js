// pages/pricing.js
import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
export default function Pricing() {
  const [hoverStarter, setHoverStarter] = useState(false);
  const [hoverCompany, setHoverCompany] = useState(false);
  const [hoverEnterprise, setHoverEnterprise] = useState(false);

  const bgImage = "url('./pricingpage.jpg')";
  const gradient =
    "linear-gradient(rgba(101, 188, 240, 0.9), rgba(127, 75, 118, 0.97))";
  const combinedBackground = `${gradient}, ${bgImage}`;

  // Function to return the style based on hover state
  const getBackgroundStyle = (isHovered) => ({
    backgroundImage: isHovered ? combinedBackground : "none",
    opacity: isHovered ? 1 : 0.5,
  });
  return (
    <>
      <section class="bg-gray-900 text-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="text-6xl py-3 w-fit mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
              Pricing
            </h2>
            <p class="my-5 font-light text-white-500 sm:text-xl ">
              Experience professional mental health support without breaking the
              bank. Affordable pricing ensures accessibility for all seeking
              emotional well-being.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* <!-- Pricing Card --> */}
            <div
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl pricing-card flex flex-col p-6 mx-auto max-w-lg text-center text-white-900 bg-cover bg-center bg-no-repeat rounded-lg border border-gray-400 shadow-md  xl:p-8 "
              onMouseEnter={() => setHoverEnterprise(true)}
              onMouseLeave={() => setHoverEnterprise(false)}
              style={getBackgroundStyle(hoverEnterprise)}
            >
              <h3 class="mb-4 text-2xl font-semibold">Free</h3>
              <p class="font-light text-white-500 sm:text-lg ">
                Access basic mental health support and resources with our free
                subscription tier.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹0</span>
                <span class="text-white-500 ">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>24/7 customer service</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Access to webinars</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 font-bold weig text-red-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </svg>
                  <span>Ad-free</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Educational content</span>
                </li>

                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free access to Empathia:{" "}
                    <span class="font-semibold">2 weeks</span>
                  </span>
                </li>
              </ul>
              <Link
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Get started
              </Link>
            </div>
            {/* <!-- Pricing Card --> */}
            <div
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl pricing-card flex flex-col p-6 mx-auto max-w-lg text-center text-white-900 bg-cover bg-center bg-no-repeat rounded-lg border border-gray-400 shadow-md  xl:p-8 "
              onMouseEnter={() => setHoverCompany(true)}
              onMouseLeave={() => setHoverCompany(false)}
              style={getBackgroundStyle(hoverCompany)}
            >
              <h3 class="mb-4 text-2xl font-semibold">Standard</h3>
              <p class="font-light text-white-500 sm:text-lg ">
              Enjoy tailored guidance and limited features to enhance your mental wellness journey.

              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹69</span>
                <span class="text-white-500 ">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>24/7 customer service</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Personal sessions with experts: 2 free </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 font-bold weig text-red-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </svg>
                  <span>Ad-free</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Educational content </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Full access to Empathia</span>
                </li>
              </ul>
              <Link
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Get started
              </Link>
            </div>
            {/* <!-- Pricing Card --> */}
            <div
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl pricing-card flex flex-col p-6 mx-auto max-w-lg text-center text-white-900 bg-cover bg-center bg-no-repeat rounded-lg border border-gray-400 shadow-md  xl:p-8 "
              onMouseEnter={() => setHoverStarter(true)}
              onMouseLeave={() => setHoverStarter(false)}
              style={getBackgroundStyle(hoverStarter)}
            >
              <h3 class="mb-4 text-2xl font-semibold">Premium</h3>
              <p class="font-light text-white-500 sm:text-lg ">
              Unlock personalized therapy sessions and limitless acess to advanced features.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹149</span>
                <span class="text-white-500 ">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>24/7 customer service</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Personal sessions with experts: 4 free </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Ad-free</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Educational content </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Full access to Empathia</span>
                </li>
              </ul>
              <Link
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
